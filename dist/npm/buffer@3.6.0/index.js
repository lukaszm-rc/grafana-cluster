/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict';

System.register([], function (_export, _context) {
  var base64, ieee754, isArray, rootParent, MAX_ARGUMENTS_LENGTH, BP, INVALID_BASE64_RE;


  function typedArraySupport() {
    function Bar() {}
    try {
      var arr = new Uint8Array(1);
      arr.foo = function () {
        return 42;
      };
      arr.constructor = Bar;
      return arr.foo() === 42 && // typed array instances can be augmented
      arr.constructor === Bar && // constructor can be set
      typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
      arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
    } catch (e) {
      return false;
    }
  }

  function kMaxLength() {
    return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
  }

  /**
   * Class: Buffer
   * =============
   *
   * The Buffer constructor returns instances of `Uint8Array` that are augmented
   * with function properties for all the node `Buffer` API functions. We use
   * `Uint8Array` so that square bracket notation works as expected -- it returns
   * a single octet.
   *
   * By augmenting the instances, we can avoid modifying the `Uint8Array`
   * prototype.
   */
  function Buffer(arg) {
    if (!(this instanceof Buffer)) {
      // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
      if (arguments.length > 1) return new Buffer(arg, arguments[1]);
      return new Buffer(arg);
    }

    if (!Buffer.TYPED_ARRAY_SUPPORT) {
      this.length = 0;
      this.parent = undefined;
    }

    // Common case.
    if (typeof arg === 'number') {
      return fromNumber(this, arg);
    }

    // Slightly less common case.
    if (typeof arg === 'string') {
      return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8');
    }

    // Unusual.
    return fromObject(this, arg);
  }

  function fromNumber(that, length) {
    that = allocate(that, length < 0 ? 0 : checked(length) | 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT) {
      for (var i = 0; i < length; i++) {
        that[i] = 0;
      }
    }
    return that;
  }

  function fromString(that, string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';

    // Assumption: byteLength() return value is always < kMaxLength.
    var length = byteLength(string, encoding) | 0;
    that = allocate(that, length);

    that.write(string, encoding);
    return that;
  }

  function fromObject(that, object) {
    if (Buffer.isBuffer(object)) return fromBuffer(that, object);

    if (isArray(object)) return fromArray(that, object);

    if (object == null) {
      throw new TypeError('must start with number, buffer, array or string');
    }

    if (typeof ArrayBuffer !== 'undefined') {
      if (object.buffer instanceof ArrayBuffer) {
        return fromTypedArray(that, object);
      }
      if (object instanceof ArrayBuffer) {
        return fromArrayBuffer(that, object);
      }
    }

    if (object.length) return fromArrayLike(that, object);

    return fromJsonObject(that, object);
  }

  function fromBuffer(that, buffer) {
    var length = checked(buffer.length) | 0;
    that = allocate(that, length);
    buffer.copy(that, 0, 0, length);
    return that;
  }

  function fromArray(that, array) {
    var length = checked(array.length) | 0;
    that = allocate(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }

  // Duplicate of fromArray() to keep fromArray() monomorphic.
  function fromTypedArray(that, array) {
    var length = checked(array.length) | 0;
    that = allocate(that, length);
    // Truncating the elements is probably not what people expect from typed
    // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
    // of the old Buffer constructor.
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }

  function fromArrayBuffer(that, array) {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      // Return an augmented `Uint8Array` instance, for best performance
      array.byteLength;
      that = Buffer._augment(new Uint8Array(array));
    } else {
      // Fallback: Return an object instance of the Buffer class
      that = fromTypedArray(that, new Uint8Array(array));
    }
    return that;
  }

  function fromArrayLike(that, array) {
    var length = checked(array.length) | 0;
    that = allocate(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }

  // Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
  // Returns a zero-length buffer for inputs that don't conform to the spec.
  function fromJsonObject(that, object) {
    var array;
    var length = 0;

    if (object.type === 'Buffer' && isArray(object.data)) {
      array = object.data;
      length = checked(array.length) | 0;
    }
    that = allocate(that, length);

    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }

  function allocate(that, length) {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      // Return an augmented `Uint8Array` instance, for best performance
      that = Buffer._augment(new Uint8Array(length));
      that.__proto__ = Buffer.prototype;
    } else {
      // Fallback: Return an object instance of the Buffer class
      that.length = length;
      that._isBuffer = true;
    }

    var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1;
    if (fromPool) that.parent = rootParent;

    return that;
  }

  function checked(length) {
    // Note: cannot use `length < kMaxLength` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= kMaxLength()) {
      throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
    }
    return length | 0;
  }

  function SlowBuffer(subject, encoding) {
    if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding);

    var buf = new Buffer(subject, encoding);
    delete buf.parent;
    return buf;
  }

  function byteLength(string, encoding) {
    if (typeof string !== 'string') string = '' + string;

    var len = string.length;
    if (len === 0) return 0;

    // Use a for loop to avoid recursion
    var loweredCase = false;
    for (;;) {
      switch (encoding) {
        case 'ascii':
        case 'binary':
        // Deprecated
        case 'raw':
        case 'raws':
          return len;
        case 'utf8':
        case 'utf-8':
          return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return len * 2;
        case 'hex':
          return len >>> 1;
        case 'base64':
          return base64ToBytes(string).length;
        default:
          if (loweredCase) return utf8ToBytes(string).length; // assume utf8
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }


  function slowToString(encoding, start, end) {
    var loweredCase = false;

    start = start | 0;
    end = end === undefined || end === Infinity ? this.length : end | 0;

    if (!encoding) encoding = 'utf8';
    if (start < 0) start = 0;
    if (end > this.length) end = this.length;
    if (end <= start) return '';

    while (true) {
      switch (encoding) {
        case 'hex':
          return hexSlice(this, start, end);

        case 'utf8':
        case 'utf-8':
          return utf8Slice(this, start, end);

        case 'ascii':
          return asciiSlice(this, start, end);

        case 'binary':
          return binarySlice(this, start, end);

        case 'base64':
          return base64Slice(this, start, end);

        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return utf16leSlice(this, start, end);

        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
          encoding = (encoding + '').toLowerCase();
          loweredCase = true;
      }
    }
  }

  function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) {
      length = remaining;
    } else {
      length = Number(length);
      if (length > remaining) {
        length = remaining;
      }
    }

    // must be an even number of digits
    var strLen = string.length;
    if (strLen % 2 !== 0) throw new Error('Invalid hex string');

    if (length > strLen / 2) {
      length = strLen / 2;
    }
    for (var i = 0; i < length; i++) {
      var parsed = parseInt(string.substr(i * 2, 2), 16);
      if (isNaN(parsed)) throw new Error('Invalid hex string');
      buf[offset + i] = parsed;
    }
    return i;
  }

  function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
  }

  function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
  }

  function binaryWrite(buf, string, offset, length) {
    return asciiWrite(buf, string, offset, length);
  }

  function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
  }

  function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
  }

  function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
      return base64.fromByteArray(buf);
    } else {
      return base64.fromByteArray(buf.slice(start, end));
    }
  }

  function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];

    var i = start;
    while (i < end) {
      var firstByte = buf[i];
      var codePoint = null;
      var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

      if (i + bytesPerSequence <= end) {
        var secondByte, thirdByte, fourthByte, tempCodePoint;

        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 0x80) {
              codePoint = firstByte;
            }
            break;
          case 2:
            secondByte = buf[i + 1];
            if ((secondByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
              if (tempCodePoint > 0x7F) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 3:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
              if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 4:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            fourthByte = buf[i + 3];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
              if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                codePoint = tempCodePoint;
              }
            }
        }
      }

      if (codePoint === null) {
        // we did not generate a valid codePoint so insert a
        // replacement char (U+FFFD) and advance only 1 byte
        codePoint = 0xFFFD;
        bytesPerSequence = 1;
      } else if (codePoint > 0xFFFF) {
        // encode to utf16 (surrogate pair dance)
        codePoint -= 0x10000;
        res.push(codePoint >>> 10 & 0x3FF | 0xD800);
        codePoint = 0xDC00 | codePoint & 0x3FF;
      }

      res.push(codePoint);
      i += bytesPerSequence;
    }

    return decodeCodePointsArray(res);
  }

  // Based on http://stackoverflow.com/a/22747272/680742, the browser with
  // the lowest limit is Chrome, with 0x10000 args.
  // We go 1 magnitude less, for safety


  function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
    }

    // Decode in chunks to avoid "call stack size exceeded".
    var res = '';
    var i = 0;
    while (i < len) {
      res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    }
    return res;
  }

  function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);

    for (var i = start; i < end; i++) {
      ret += String.fromCharCode(buf[i] & 0x7F);
    }
    return ret;
  }

  function binarySlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);

    for (var i = start; i < end; i++) {
      ret += String.fromCharCode(buf[i]);
    }
    return ret;
  }

  function hexSlice(buf, start, end) {
    var len = buf.length;

    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;

    var out = '';
    for (var i = start; i < end; i++) {
      out += toHex(buf[i]);
    }
    return out;
  }

  function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    for (var i = 0; i < bytes.length; i += 2) {
      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res;
  }

  /*
   * Need to make sure that buffer isn't trying to write out of bounds.
   */
  function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
  }

  function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('value is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('index out of range');
  }

  function objectWriteUInt16(buf, value, offset, littleEndian) {
    if (value < 0) value = 0xffff + value + 1;
    for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
      buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
    }
  }

  function objectWriteUInt32(buf, value, offset, littleEndian) {
    if (value < 0) value = 0xffffffff + value + 1;
    for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
      buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
    }
  }

  function checkIEEE754(buf, value, offset, ext, max, min) {
    if (value > max || value < min) throw new RangeError('value is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('index out of range');
    if (offset < 0) throw new RangeError('index out of range');
  }

  function writeFloat(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
    }
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
  }

  function writeDouble(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
    }
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
  }

  function base64clean(str) {
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = stringtrim(str).replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while (str.length % 4 !== 0) {
      str = str + '=';
    }
    return str;
  }

  function stringtrim(str) {
    if (str.trim) return str.trim();
    return str.replace(/^\s+|\s+$/g, '');
  }

  function toHex(n) {
    if (n < 16) return '0' + n.toString(16);
    return n.toString(16);
  }

  function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];

    for (var i = 0; i < length; i++) {
      codePoint = string.charCodeAt(i);

      // is surrogate component
      if (codePoint > 0xD7FF && codePoint < 0xE000) {
        // last char was a lead
        if (!leadSurrogate) {
          // no lead yet
          if (codePoint > 0xDBFF) {
            // unexpected trail
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          } else if (i + 1 === length) {
            // unpaired lead
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          }

          // valid lead
          leadSurrogate = codePoint;

          continue;
        }

        // 2 leads in a row
        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          leadSurrogate = codePoint;
          continue;
        }

        // valid surrogate pair
        codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
      } else if (leadSurrogate) {
        // valid bmp char, but last char was a lead
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
      }

      leadSurrogate = null;

      // encode utf8
      if (codePoint < 0x80) {
        if ((units -= 1) < 0) break;
        bytes.push(codePoint);
      } else if (codePoint < 0x800) {
        if ((units -= 2) < 0) break;
        bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x10000) {
        if ((units -= 3) < 0) break;
        bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x110000) {
        if ((units -= 4) < 0) break;
        bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else {
        throw new Error('Invalid code point');
      }
    }

    return bytes;
  }

  function asciiToBytes(str) {
    var byteArray = [];
    for (var i = 0; i < str.length; i++) {
      // Node's code seems to be doing this and not & 0x7F..
      byteArray.push(str.charCodeAt(i) & 0xFF);
    }
    return byteArray;
  }

  function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for (var i = 0; i < str.length; i++) {
      if ((units -= 2) < 0) break;

      c = str.charCodeAt(i);
      hi = c >> 8;
      lo = c % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }

    return byteArray;
  }

  function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
  }

  function blitBuffer(src, dst, offset, length) {
    for (var i = 0; i < length; i++) {
      if (i + offset >= dst.length || i >= src.length) break;
      dst[i + offset] = src[i];
    }
    return i;
  }
  return {
    setters: [],
    execute: function () {
      base64 = require('base64-js');
      ieee754 = require('ieee754');
      isArray = require('isarray');


      exports.Buffer = Buffer;
      exports.SlowBuffer = SlowBuffer;
      exports.INSPECT_MAX_BYTES = 50;
      Buffer.poolSize = 8192; // not used by this implementation

      rootParent = {};


      /**
       * If `Buffer.TYPED_ARRAY_SUPPORT`:
       *   === true    Use Uint8Array implementation (fastest)
       *   === false   Use Object implementation (most compatible, even IE6)
       *
       * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
       * Opera 11.6+, iOS 4.2+.
       *
       * Due to various browser bugs, sometimes the Object implementation will be used even
       * when the browser supports typed arrays.
       *
       * Note:
       *
       *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
       *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
       *
       *   - Safari 5-7 lacks support for changing the `Object.prototype.constructor` property
       *     on objects.
       *
       *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
       *
       *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
       *     incorrect length in some situations.
      
       * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
       * get the Object implementation, which is slower but behaves correctly.
       */
      Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();if (Buffer.TYPED_ARRAY_SUPPORT) {
        Buffer.prototype.__proto__ = Uint8Array.prototype;
        Buffer.__proto__ = Uint8Array;
      } else {
        // pre-set for values that may exist in the future
        Buffer.prototype.length = undefined;
        Buffer.prototype.parent = undefined;
      }Buffer.isBuffer = function isBuffer(b) {
        return !!(b != null && b._isBuffer);
      };

      Buffer.compare = function compare(a, b) {
        if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
          throw new TypeError('Arguments must be Buffers');
        }

        if (a === b) return 0;

        var x = a.length;
        var y = b.length;

        var i = 0;
        var len = Math.min(x, y);
        while (i < len) {
          if (a[i] !== b[i]) break;

          ++i;
        }

        if (i !== len) {
          x = a[i];
          y = b[i];
        }

        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };

      Buffer.isEncoding = function isEncoding(encoding) {
        switch (String(encoding).toLowerCase()) {
          case 'hex':
          case 'utf8':
          case 'utf-8':
          case 'ascii':
          case 'binary':
          case 'base64':
          case 'raw':
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return true;
          default:
            return false;
        }
      };

      Buffer.concat = function concat(list, length) {
        if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.');

        if (list.length === 0) {
          return new Buffer(0);
        }

        var i;
        if (length === undefined) {
          length = 0;
          for (i = 0; i < list.length; i++) {
            length += list[i].length;
          }
        }

        var buf = new Buffer(length);
        var pos = 0;
        for (i = 0; i < list.length; i++) {
          var item = list[i];
          item.copy(buf, pos);
          pos += item.length;
        }
        return buf;
      };Buffer.byteLength = byteLength;Buffer.prototype.toString = function toString() {
        var length = this.length | 0;
        if (length === 0) return '';
        if (arguments.length === 0) return utf8Slice(this, 0, length);
        return slowToString.apply(this, arguments);
      };

      Buffer.prototype.equals = function equals(b) {
        if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
        if (this === b) return true;
        return Buffer.compare(this, b) === 0;
      };

      Buffer.prototype.inspect = function inspect() {
        var str = '';
        var max = exports.INSPECT_MAX_BYTES;
        if (this.length > 0) {
          str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
          if (this.length > max) str += ' ... ';
        }
        return '<Buffer ' + str + '>';
      };

      Buffer.prototype.compare = function compare(b) {
        if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
        if (this === b) return 0;
        return Buffer.compare(this, b);
      };

      Buffer.prototype.indexOf = function indexOf(val, byteOffset) {
        if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;else if (byteOffset < -0x80000000) byteOffset = -0x80000000;
        byteOffset >>= 0;

        if (this.length === 0) return -1;
        if (byteOffset >= this.length) return -1;

        // Negative offsets start from the end of the buffer
        if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0);

        if (typeof val === 'string') {
          if (val.length === 0) return -1; // special case: looking for empty string always fails
          return String.prototype.indexOf.call(this, val, byteOffset);
        }
        if (Buffer.isBuffer(val)) {
          return arrayIndexOf(this, val, byteOffset);
        }
        if (typeof val === 'number') {
          if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
            return Uint8Array.prototype.indexOf.call(this, val, byteOffset);
          }
          return arrayIndexOf(this, [val], byteOffset);
        }

        function arrayIndexOf(arr, val, byteOffset) {
          var foundIndex = -1;
          for (var i = 0; byteOffset + i < arr.length; i++) {
            if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
              if (foundIndex === -1) foundIndex = i;
              if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex;
            } else {
              foundIndex = -1;
            }
          }
          return -1;
        }

        throw new TypeError('val must be string, number or Buffer');
      };

      // `get` is deprecated
      Buffer.prototype.get = function get(offset) {
        console.log('.get() is deprecated. Access using array indexes instead.');
        return this.readUInt8(offset);
      };

      // `set` is deprecated
      Buffer.prototype.set = function set(v, offset) {
        console.log('.set() is deprecated. Access using array indexes instead.');
        return this.writeUInt8(v, offset);
      };Buffer.prototype.write = function write(string, offset, length, encoding) {
        // Buffer#write(string)
        if (offset === undefined) {
          encoding = 'utf8';
          length = this.length;
          offset = 0;
          // Buffer#write(string, encoding)
        } else if (length === undefined && typeof offset === 'string') {
            encoding = offset;
            length = this.length;
            offset = 0;
            // Buffer#write(string, offset[, length][, encoding])
          } else if (isFinite(offset)) {
              offset = offset | 0;
              if (isFinite(length)) {
                length = length | 0;
                if (encoding === undefined) encoding = 'utf8';
              } else {
                encoding = length;
                length = undefined;
              }
              // legacy write(string, encoding, offset, length) - remove in v0.13
            } else {
                var swap = encoding;
                encoding = offset;
                offset = length | 0;
                length = swap;
              }

        var remaining = this.length - offset;
        if (length === undefined || length > remaining) length = remaining;

        if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
          throw new RangeError('attempt to write outside buffer bounds');
        }

        if (!encoding) encoding = 'utf8';

        var loweredCase = false;
        for (;;) {
          switch (encoding) {
            case 'hex':
              return hexWrite(this, string, offset, length);

            case 'utf8':
            case 'utf-8':
              return utf8Write(this, string, offset, length);

            case 'ascii':
              return asciiWrite(this, string, offset, length);

            case 'binary':
              return binaryWrite(this, string, offset, length);

            case 'base64':
              // Warning: maxLength not taken into account in base64Write
              return base64Write(this, string, offset, length);

            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return ucs2Write(this, string, offset, length);

            default:
              if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
              encoding = ('' + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      };

      Buffer.prototype.toJSON = function toJSON() {
        return {
          type: 'Buffer',
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };MAX_ARGUMENTS_LENGTH = 0x1000;
      Buffer.prototype.slice = function slice(start, end) {
        var len = this.length;
        start = ~ ~start;
        end = end === undefined ? len : ~ ~end;

        if (start < 0) {
          start += len;
          if (start < 0) start = 0;
        } else if (start > len) {
          start = len;
        }

        if (end < 0) {
          end += len;
          if (end < 0) end = 0;
        } else if (end > len) {
          end = len;
        }

        if (end < start) end = start;

        var newBuf;
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          newBuf = Buffer._augment(this.subarray(start, end));
        } else {
          var sliceLen = end - start;
          newBuf = new Buffer(sliceLen, undefined);
          for (var i = 0; i < sliceLen; i++) {
            newBuf[i] = this[i + start];
          }
        }

        if (newBuf.length) newBuf.parent = this.parent || this;

        return newBuf;
      };Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
        offset = offset | 0;
        byteLength = byteLength | 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);

        var val = this[offset];
        var mul = 1;
        var i = 0;
        while (++i < byteLength && (mul *= 0x100)) {
          val += this[offset + i] * mul;
        }

        return val;
      };

      Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
        offset = offset | 0;
        byteLength = byteLength | 0;
        if (!noAssert) {
          checkOffset(offset, byteLength, this.length);
        }

        var val = this[offset + --byteLength];
        var mul = 1;
        while (byteLength > 0 && (mul *= 0x100)) {
          val += this[offset + --byteLength] * mul;
        }

        return val;
      };

      Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        if (!noAssert) checkOffset(offset, 1, this.length);
        return this[offset];
      };

      Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
      };

      Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
      };

      Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        if (!noAssert) checkOffset(offset, 4, this.length);

        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
      };

      Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        if (!noAssert) checkOffset(offset, 4, this.length);

        return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
      };

      Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
        offset = offset | 0;
        byteLength = byteLength | 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);

        var val = this[offset];
        var mul = 1;
        var i = 0;
        while (++i < byteLength && (mul *= 0x100)) {
          val += this[offset + i] * mul;
        }
        mul *= 0x80;

        if (val >= mul) val -= Math.pow(2, 8 * byteLength);

        return val;
      };

      Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
        offset = offset | 0;
        byteLength = byteLength | 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);

        var i = byteLength;
        var mul = 1;
        var val = this[offset + --i];
        while (i > 0 && (mul *= 0x100)) {
          val += this[offset + --i] * mul;
        }
        mul *= 0x80;

        if (val >= mul) val -= Math.pow(2, 8 * byteLength);

        return val;
      };

      Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
        if (!noAssert) checkOffset(offset, 1, this.length);
        if (!(this[offset] & 0x80)) return this[offset];
        return (0xff - this[offset] + 1) * -1;
      };

      Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
        if (!noAssert) checkOffset(offset, 2, this.length);
        var val = this[offset] | this[offset + 1] << 8;
        return val & 0x8000 ? val | 0xFFFF0000 : val;
      };

      Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
        if (!noAssert) checkOffset(offset, 2, this.length);
        var val = this[offset + 1] | this[offset] << 8;
        return val & 0x8000 ? val | 0xFFFF0000 : val;
      };

      Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
        if (!noAssert) checkOffset(offset, 4, this.length);

        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
      };

      Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
        if (!noAssert) checkOffset(offset, 4, this.length);

        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
      };

      Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, true, 23, 4);
      };

      Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, false, 23, 4);
      };

      Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, true, 52, 8);
      };

      Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, false, 52, 8);
      };Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset | 0;
        byteLength = byteLength | 0;
        if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0);

        var mul = 1;
        var i = 0;
        this[offset] = value & 0xFF;
        while (++i < byteLength && (mul *= 0x100)) {
          this[offset + i] = value / mul & 0xFF;
        }

        return offset + byteLength;
      };

      Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset | 0;
        byteLength = byteLength | 0;
        if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0);

        var i = byteLength - 1;
        var mul = 1;
        this[offset + i] = value & 0xFF;
        while (--i >= 0 && (mul *= 0x100)) {
          this[offset + i] = value / mul & 0xFF;
        }

        return offset + byteLength;
      };

      Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset = offset | 0;
        if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
        if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
        this[offset] = value & 0xff;
        return offset + 1;
      };Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset | 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value & 0xff;
          this[offset + 1] = value >>> 8;
        } else {
          objectWriteUInt16(this, value, offset, true);
        }
        return offset + 2;
      };

      Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset | 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 8;
          this[offset + 1] = value & 0xff;
        } else {
          objectWriteUInt16(this, value, offset, false);
        }
        return offset + 2;
      };Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset | 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset + 3] = value >>> 24;
          this[offset + 2] = value >>> 16;
          this[offset + 1] = value >>> 8;
          this[offset] = value & 0xff;
        } else {
          objectWriteUInt32(this, value, offset, true);
        }
        return offset + 4;
      };

      Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset | 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 24;
          this[offset + 1] = value >>> 16;
          this[offset + 2] = value >>> 8;
          this[offset + 3] = value & 0xff;
        } else {
          objectWriteUInt32(this, value, offset, false);
        }
        return offset + 4;
      };

      Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset | 0;
        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);

          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }

        var i = 0;
        var mul = 1;
        var sub = value < 0 ? 1 : 0;
        this[offset] = value & 0xFF;
        while (++i < byteLength && (mul *= 0x100)) {
          this[offset + i] = (value / mul >> 0) - sub & 0xFF;
        }

        return offset + byteLength;
      };

      Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset | 0;
        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);

          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }

        var i = byteLength - 1;
        var mul = 1;
        var sub = value < 0 ? 1 : 0;
        this[offset + i] = value & 0xFF;
        while (--i >= 0 && (mul *= 0x100)) {
          this[offset + i] = (value / mul >> 0) - sub & 0xFF;
        }

        return offset + byteLength;
      };

      Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
        value = +value;
        offset = offset | 0;
        if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
        if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
        if (value < 0) value = 0xff + value + 1;
        this[offset] = value & 0xff;
        return offset + 1;
      };

      Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset | 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value & 0xff;
          this[offset + 1] = value >>> 8;
        } else {
          objectWriteUInt16(this, value, offset, true);
        }
        return offset + 2;
      };

      Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset | 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 8;
          this[offset + 1] = value & 0xff;
        } else {
          objectWriteUInt16(this, value, offset, false);
        }
        return offset + 2;
      };

      Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset | 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value & 0xff;
          this[offset + 1] = value >>> 8;
          this[offset + 2] = value >>> 16;
          this[offset + 3] = value >>> 24;
        } else {
          objectWriteUInt32(this, value, offset, true);
        }
        return offset + 4;
      };

      Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset | 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
        if (value < 0) value = 0xffffffff + value + 1;
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 24;
          this[offset + 1] = value >>> 16;
          this[offset + 2] = value >>> 8;
          this[offset + 3] = value & 0xff;
        } else {
          objectWriteUInt32(this, value, offset, false);
        }
        return offset + 4;
      };Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
      };

      Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
      };Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
      };

      Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
      };

      // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
      Buffer.prototype.copy = function copy(target, targetStart, start, end) {
        if (!start) start = 0;
        if (!end && end !== 0) end = this.length;
        if (targetStart >= target.length) targetStart = target.length;
        if (!targetStart) targetStart = 0;
        if (end > 0 && end < start) end = start;

        // Copy 0 bytes; we're done
        if (end === start) return 0;
        if (target.length === 0 || this.length === 0) return 0;

        // Fatal error conditions
        if (targetStart < 0) {
          throw new RangeError('targetStart out of bounds');
        }
        if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
        if (end < 0) throw new RangeError('sourceEnd out of bounds');

        // Are we oob?
        if (end > this.length) end = this.length;
        if (target.length - targetStart < end - start) {
          end = target.length - targetStart + start;
        }

        var len = end - start;
        var i;

        if (this === target && start < targetStart && targetStart < end) {
          // descending copy from end
          for (i = len - 1; i >= 0; i--) {
            target[i + targetStart] = this[i + start];
          }
        } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
          // ascending copy from start
          for (i = 0; i < len; i++) {
            target[i + targetStart] = this[i + start];
          }
        } else {
          target._set(this.subarray(start, start + len), targetStart);
        }

        return len;
      };

      // fill(value, start=0, end=buffer.length)
      Buffer.prototype.fill = function fill(value, start, end) {
        if (!value) value = 0;
        if (!start) start = 0;
        if (!end) end = this.length;

        if (end < start) throw new RangeError('end < start');

        // Fill 0 bytes; we're done
        if (end === start) return;
        if (this.length === 0) return;

        if (start < 0 || start >= this.length) throw new RangeError('start out of bounds');
        if (end < 0 || end > this.length) throw new RangeError('end out of bounds');

        var i;
        if (typeof value === 'number') {
          for (i = start; i < end; i++) {
            this[i] = value;
          }
        } else {
          var bytes = utf8ToBytes(value.toString());
          var len = bytes.length;
          for (i = start; i < end; i++) {
            this[i] = bytes[i % len];
          }
        }

        return this;
      };

      /**
       * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
       * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
       */
      Buffer.prototype.toArrayBuffer = function toArrayBuffer() {
        if (typeof Uint8Array !== 'undefined') {
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            return new Buffer(this).buffer;
          } else {
            var buf = new Uint8Array(this.length);
            for (var i = 0, len = buf.length; i < len; i += 1) {
              buf[i] = this[i];
            }
            return buf.buffer;
          }
        } else {
          throw new TypeError('Buffer.toArrayBuffer not supported in this browser');
        }
      };

      // HELPER FUNCTIONS
      // ================

      BP = Buffer.prototype;


      /**
       * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
       */
      Buffer._augment = function _augment(arr) {
        arr.constructor = Buffer;
        arr._isBuffer = true;

        // save reference to original Uint8Array set method before overwriting
        arr._set = arr.set;

        // deprecated
        arr.get = BP.get;
        arr.set = BP.set;

        arr.write = BP.write;
        arr.toString = BP.toString;
        arr.toLocaleString = BP.toString;
        arr.toJSON = BP.toJSON;
        arr.equals = BP.equals;
        arr.compare = BP.compare;
        arr.indexOf = BP.indexOf;
        arr.copy = BP.copy;
        arr.slice = BP.slice;
        arr.readUIntLE = BP.readUIntLE;
        arr.readUIntBE = BP.readUIntBE;
        arr.readUInt8 = BP.readUInt8;
        arr.readUInt16LE = BP.readUInt16LE;
        arr.readUInt16BE = BP.readUInt16BE;
        arr.readUInt32LE = BP.readUInt32LE;
        arr.readUInt32BE = BP.readUInt32BE;
        arr.readIntLE = BP.readIntLE;
        arr.readIntBE = BP.readIntBE;
        arr.readInt8 = BP.readInt8;
        arr.readInt16LE = BP.readInt16LE;
        arr.readInt16BE = BP.readInt16BE;
        arr.readInt32LE = BP.readInt32LE;
        arr.readInt32BE = BP.readInt32BE;
        arr.readFloatLE = BP.readFloatLE;
        arr.readFloatBE = BP.readFloatBE;
        arr.readDoubleLE = BP.readDoubleLE;
        arr.readDoubleBE = BP.readDoubleBE;
        arr.writeUInt8 = BP.writeUInt8;
        arr.writeUIntLE = BP.writeUIntLE;
        arr.writeUIntBE = BP.writeUIntBE;
        arr.writeUInt16LE = BP.writeUInt16LE;
        arr.writeUInt16BE = BP.writeUInt16BE;
        arr.writeUInt32LE = BP.writeUInt32LE;
        arr.writeUInt32BE = BP.writeUInt32BE;
        arr.writeIntLE = BP.writeIntLE;
        arr.writeIntBE = BP.writeIntBE;
        arr.writeInt8 = BP.writeInt8;
        arr.writeInt16LE = BP.writeInt16LE;
        arr.writeInt16BE = BP.writeInt16BE;
        arr.writeInt32LE = BP.writeInt32LE;
        arr.writeInt32BE = BP.writeInt32BE;
        arr.writeFloatLE = BP.writeFloatLE;
        arr.writeFloatBE = BP.writeFloatBE;
        arr.writeDoubleLE = BP.writeDoubleLE;
        arr.writeDoubleBE = BP.writeDoubleBE;
        arr.fill = BP.fill;
        arr.inspect = BP.inspect;
        arr.toArrayBuffer = BP.toArrayBuffer;

        return arr;
      };

      INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9idWZmZXJAMy42LjAvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFRQTs7Ozs7O0FBNENBLFdBQVMsaUJBQVQsR0FBOEI7QUFDNUIsYUFBUyxHQUFULEdBQWdCLEVBQWhCO0FBQ0EsUUFBSTtBQUNGLFVBQUksTUFBTSxJQUFJLFVBQUosQ0FBZSxDQUFmLENBQU4sQ0FERjtBQUVGLFVBQUksR0FBSixHQUFVLFlBQVk7QUFBRSxlQUFPLEVBQVAsQ0FBRjtPQUFaLENBRlI7QUFHRixVQUFJLFdBQUosR0FBa0IsR0FBbEIsQ0FIRTtBQUlGLGFBQU8sSUFBSSxHQUFKLE9BQWMsRUFBZDtBQUNILFVBQUksV0FBSixLQUFvQixHQUFwQjtBQUNBLGFBQU8sSUFBSSxRQUFKLEtBQWlCLFVBQXhCO0FBQ0EsVUFBSSxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixVQUFuQixLQUFrQyxDQUFsQztBQVBGLEtBQUosQ0FRRSxPQUFPLENBQVAsRUFBVTtBQUNWLGFBQU8sS0FBUCxDQURVO0tBQVY7R0FWSjs7QUFlQSxXQUFTLFVBQVQsR0FBdUI7QUFDckIsV0FBTyxPQUFPLG1CQUFQLEdBQ0gsVUFERyxHQUVILFVBRkcsQ0FEYztHQUF2Qjs7Ozs7Ozs7Ozs7Ozs7QUFrQkEsV0FBUyxNQUFULENBQWlCLEdBQWpCLEVBQXNCO0FBQ3BCLFFBQUksRUFBRSxnQkFBZ0IsTUFBaEIsQ0FBRixFQUEyQjs7QUFFN0IsVUFBSSxVQUFVLE1BQVYsR0FBbUIsQ0FBbkIsRUFBc0IsT0FBTyxJQUFJLE1BQUosQ0FBVyxHQUFYLEVBQWdCLFVBQVUsQ0FBVixDQUFoQixDQUFQLENBQTFCO0FBQ0EsYUFBTyxJQUFJLE1BQUosQ0FBVyxHQUFYLENBQVAsQ0FINkI7S0FBL0I7O0FBTUEsUUFBSSxDQUFDLE9BQU8sbUJBQVAsRUFBNEI7QUFDL0IsV0FBSyxNQUFMLEdBQWMsQ0FBZCxDQUQrQjtBQUUvQixXQUFLLE1BQUwsR0FBYyxTQUFkLENBRitC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QUksVUFBSixHQUFpQixHQUFHLFVBQUgsQ0E5Q3VCO0FBK0N4QyxZQUFJLFNBQUosR0FBZ0IsR0FBRyxTQUFILENBL0N3QjtBQWdEeEMsWUFBSSxZQUFKLEdBQW1CLEdBQUcsWUFBSCxDQWhEcUI7QUFpRHhDLFlBQUksWUFBSixHQUFtQixHQUFHLFlBQUgsQ0FqRHFCO0FBa0R4QyxZQUFJLFlBQUosR0FBbUIsR0FBRyxZQUFILENBbERxQjtBQW1EeEMsWUFBSSxZQUFKLEdBQW1CLEdBQUcsWUFBSCxDQW5EcUI7QUFvRHhDLFlBQUksWUFBSixHQUFtQixHQUFHLFlBQUgsQ0FwRHFCO0FBcUR4QyxZQUFJLFlBQUosR0FBbUIsR0FBRyxZQUFILENBckRxQjtBQXNEeEMsWUFBSSxhQUFKLEdBQW9CLEdBQUcsYUFBSCxDQXREb0I7QUF1RHhDLFlBQUksYUFBSixHQUFvQixHQUFHLGFBQUgsQ0F2RG9CO0FBd0R4QyxZQUFJLElBQUosR0FBVyxHQUFHLElBQUgsQ0F4RDZCO0FBeUR4QyxZQUFJLE9BQUosR0FBYyxHQUFHLE9BQUgsQ0F6RDBCO0FBMER4QyxZQUFJLGFBQUosR0FBb0IsR0FBRyxhQUFILENBMURvQjs7QUE0RHhDLGVBQU8sR0FBUCxDQTVEd0M7T0FBeEI7O0FBK0RkLDBCQUFvQiIsImZpbGUiOiJucG0vYnVmZmVyQDMuNi4wL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTIgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG52YXIgcm9vdFBhcmVudCA9IHt9XG5cbi8qKlxuICogSWYgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKG1vc3QgY29tcGF0aWJsZSwgZXZlbiBJRTYpXG4gKlxuICogQnJvd3NlcnMgdGhhdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLCBDaHJvbWUgNyssIFNhZmFyaSA1LjErLFxuICogT3BlcmEgMTEuNissIGlPUyA0LjIrLlxuICpcbiAqIER1ZSB0byB2YXJpb3VzIGJyb3dzZXIgYnVncywgc29tZXRpbWVzIHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24gd2lsbCBiZSB1c2VkIGV2ZW5cbiAqIHdoZW4gdGhlIGJyb3dzZXIgc3VwcG9ydHMgdHlwZWQgYXJyYXlzLlxuICpcbiAqIE5vdGU6XG4gKlxuICogICAtIEZpcmVmb3ggNC0yOSBsYWNrcyBzdXBwb3J0IGZvciBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcyxcbiAqICAgICBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOC5cbiAqXG4gKiAgIC0gU2FmYXJpIDUtNyBsYWNrcyBzdXBwb3J0IGZvciBjaGFuZ2luZyB0aGUgYE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3JgIHByb3BlcnR5XG4gKiAgICAgb24gb2JqZWN0cy5cbiAqXG4gKiAgIC0gQ2hyb21lIDktMTAgaXMgbWlzc2luZyB0aGUgYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbi5cbiAqXG4gKiAgIC0gSUUxMCBoYXMgYSBicm9rZW4gYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFycmF5cyBvZlxuICogICAgIGluY29ycmVjdCBsZW5ndGggaW4gc29tZSBzaXR1YXRpb25zLlxuXG4gKiBXZSBkZXRlY3QgdGhlc2UgYnVnZ3kgYnJvd3NlcnMgYW5kIHNldCBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgIHRvIGBmYWxzZWAgc28gdGhleVxuICogZ2V0IHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24sIHdoaWNoIGlzIHNsb3dlciBidXQgYmVoYXZlcyBjb3JyZWN0bHkuXG4gKi9cbkJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUID0gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlQgIT09IHVuZGVmaW5lZFxuICA/IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gIDogdHlwZWRBcnJheVN1cHBvcnQoKVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIGZ1bmN0aW9uIEJhciAoKSB7fVxuICB0cnkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheSgxKVxuICAgIGFyci5mb28gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9XG4gICAgYXJyLmNvbnN0cnVjdG9yID0gQmFyXG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDIgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgYXJyLmNvbnN0cnVjdG9yID09PSBCYXIgJiYgLy8gY29uc3RydWN0b3IgY2FuIGJlIHNldFxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nICYmIC8vIGNocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICAgICAgICBhcnIuc3ViYXJyYXkoMSwgMSkuYnl0ZUxlbmd0aCA9PT0gMCAvLyBpZTEwIGhhcyBicm9rZW4gYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24ga01heExlbmd0aCAoKSB7XG4gIHJldHVybiBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVFxuICAgID8gMHg3ZmZmZmZmZlxuICAgIDogMHgzZmZmZmZmZlxufVxuXG4vKipcbiAqIENsYXNzOiBCdWZmZXJcbiAqID09PT09PT09PT09PT1cbiAqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGFyZSBhdWdtZW50ZWRcbiAqIHdpdGggZnVuY3Rpb24gcHJvcGVydGllcyBmb3IgYWxsIHRoZSBub2RlIGBCdWZmZXJgIEFQSSBmdW5jdGlvbnMuIFdlIHVzZVxuICogYFVpbnQ4QXJyYXlgIHNvIHRoYXQgc3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXQgcmV0dXJuc1xuICogYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogQnkgYXVnbWVudGluZyB0aGUgaW5zdGFuY2VzLCB3ZSBjYW4gYXZvaWQgbW9kaWZ5aW5nIHRoZSBgVWludDhBcnJheWBcbiAqIHByb3RvdHlwZS5cbiAqL1xuZnVuY3Rpb24gQnVmZmVyIChhcmcpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcbiAgICAvLyBBdm9pZCBnb2luZyB0aHJvdWdoIGFuIEFyZ3VtZW50c0FkYXB0b3JUcmFtcG9saW5lIGluIHRoZSBjb21tb24gY2FzZS5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHJldHVybiBuZXcgQnVmZmVyKGFyZywgYXJndW1lbnRzWzFdKVxuICAgIHJldHVybiBuZXcgQnVmZmVyKGFyZylcbiAgfVxuXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzLmxlbmd0aCA9IDBcbiAgICB0aGlzLnBhcmVudCA9IHVuZGVmaW5lZFxuICB9XG5cbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmcm9tTnVtYmVyKHRoaXMsIGFyZylcbiAgfVxuXG4gIC8vIFNsaWdodGx5IGxlc3MgY29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHRoaXMsIGFyZywgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiAndXRmOCcpXG4gIH1cblxuICAvLyBVbnVzdWFsLlxuICByZXR1cm4gZnJvbU9iamVjdCh0aGlzLCBhcmcpXG59XG5cbmZ1bmN0aW9uIGZyb21OdW1iZXIgKHRoYXQsIGxlbmd0aCkge1xuICB0aGF0ID0gYWxsb2NhdGUodGhhdCwgbGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGxlbmd0aCkgfCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdGhhdFtpXSA9IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAodGhhdCwgc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJyB8fCBlbmNvZGluZyA9PT0gJycpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgLy8gQXNzdW1wdGlvbjogYnl0ZUxlbmd0aCgpIHJldHVybiB2YWx1ZSBpcyBhbHdheXMgPCBrTWF4TGVuZ3RoLlxuICB2YXIgbGVuZ3RoID0gYnl0ZUxlbmd0aChzdHJpbmcsIGVuY29kaW5nKSB8IDBcbiAgdGhhdCA9IGFsbG9jYXRlKHRoYXQsIGxlbmd0aClcblxuICB0aGF0LndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iamVjdCkge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iamVjdCkpIHJldHVybiBmcm9tQnVmZmVyKHRoYXQsIG9iamVjdClcblxuICBpZiAoaXNBcnJheShvYmplY3QpKSByZXR1cm4gZnJvbUFycmF5KHRoYXQsIG9iamVjdClcblxuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtdXN0IHN0YXJ0IHdpdGggbnVtYmVyLCBidWZmZXIsIGFycmF5IG9yIHN0cmluZycpXG4gIH1cblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChvYmplY3QuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgIHJldHVybiBmcm9tVHlwZWRBcnJheSh0aGF0LCBvYmplY3QpXG4gICAgfVxuICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih0aGF0LCBvYmplY3QpXG4gICAgfVxuICB9XG5cbiAgaWYgKG9iamVjdC5sZW5ndGgpIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iamVjdClcblxuICByZXR1cm4gZnJvbUpzb25PYmplY3QodGhhdCwgb2JqZWN0KVxufVxuXG5mdW5jdGlvbiBmcm9tQnVmZmVyICh0aGF0LCBidWZmZXIpIHtcbiAgdmFyIGxlbmd0aCA9IGNoZWNrZWQoYnVmZmVyLmxlbmd0aCkgfCAwXG4gIHRoYXQgPSBhbGxvY2F0ZSh0aGF0LCBsZW5ndGgpXG4gIGJ1ZmZlci5jb3B5KHRoYXQsIDAsIDAsIGxlbmd0aClcbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5ICh0aGF0LCBhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB0aGF0ID0gYWxsb2NhdGUodGhhdCwgbGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhhdFtpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuLy8gRHVwbGljYXRlIG9mIGZyb21BcnJheSgpIHRvIGtlZXAgZnJvbUFycmF5KCkgbW9ub21vcnBoaWMuXG5mdW5jdGlvbiBmcm9tVHlwZWRBcnJheSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgdGhhdCA9IGFsbG9jYXRlKHRoYXQsIGxlbmd0aClcbiAgLy8gVHJ1bmNhdGluZyB0aGUgZWxlbWVudHMgaXMgcHJvYmFibHkgbm90IHdoYXQgcGVvcGxlIGV4cGVjdCBmcm9tIHR5cGVkXG4gIC8vIGFycmF5cyB3aXRoIEJZVEVTX1BFUl9FTEVNRU5UID4gMSBidXQgaXQncyBjb21wYXRpYmxlIHdpdGggdGhlIGJlaGF2aW9yXG4gIC8vIG9mIHRoZSBvbGQgQnVmZmVyIGNvbnN0cnVjdG9yLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhhdFtpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyICh0aGF0LCBhcnJheSkge1xuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICBhcnJheS5ieXRlTGVuZ3RoXG4gICAgdGhhdCA9IEJ1ZmZlci5fYXVnbWVudChuZXcgVWludDhBcnJheShhcnJheSkpXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIHRoYXQgPSBmcm9tVHlwZWRBcnJheSh0aGF0LCBuZXcgVWludDhBcnJheShhcnJheSkpXG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgdGhhdCA9IGFsbG9jYXRlKHRoYXQsIGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoYXRbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbi8vIERlc2VyaWFsaXplIHsgdHlwZTogJ0J1ZmZlcicsIGRhdGE6IFsxLDIsMywuLi5dIH0gaW50byBhIEJ1ZmZlciBvYmplY3QuXG4vLyBSZXR1cm5zIGEgemVyby1sZW5ndGggYnVmZmVyIGZvciBpbnB1dHMgdGhhdCBkb24ndCBjb25mb3JtIHRvIHRoZSBzcGVjLlxuZnVuY3Rpb24gZnJvbUpzb25PYmplY3QgKHRoYXQsIG9iamVjdCkge1xuICB2YXIgYXJyYXlcbiAgdmFyIGxlbmd0aCA9IDBcblxuICBpZiAob2JqZWN0LnR5cGUgPT09ICdCdWZmZXInICYmIGlzQXJyYXkob2JqZWN0LmRhdGEpKSB7XG4gICAgYXJyYXkgPSBvYmplY3QuZGF0YVxuICAgIGxlbmd0aCA9IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgfVxuICB0aGF0ID0gYWxsb2NhdGUodGhhdCwgbGVuZ3RoKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGF0W2ldID0gYXJyYXlbaV0gJiAyNTVcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX18gPSBVaW50OEFycmF5LnByb3RvdHlwZVxuICBCdWZmZXIuX19wcm90b19fID0gVWludDhBcnJheVxufSBlbHNlIHtcbiAgLy8gcHJlLXNldCBmb3IgdmFsdWVzIHRoYXQgbWF5IGV4aXN0IGluIHRoZSBmdXR1cmVcbiAgQnVmZmVyLnByb3RvdHlwZS5sZW5ndGggPSB1bmRlZmluZWRcbiAgQnVmZmVyLnByb3RvdHlwZS5wYXJlbnQgPSB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gYWxsb2NhdGUgKHRoYXQsIGxlbmd0aCkge1xuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gQnVmZmVyLl9hdWdtZW50KG5ldyBVaW50OEFycmF5KGxlbmd0aCkpXG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIHRoYXQubGVuZ3RoID0gbGVuZ3RoXG4gICAgdGhhdC5faXNCdWZmZXIgPSB0cnVlXG4gIH1cblxuICB2YXIgZnJvbVBvb2wgPSBsZW5ndGggIT09IDAgJiYgbGVuZ3RoIDw9IEJ1ZmZlci5wb29sU2l6ZSA+Pj4gMVxuICBpZiAoZnJvbVBvb2wpIHRoYXQucGFyZW50ID0gcm9vdFBhcmVudFxuXG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQgKGxlbmd0aCkge1xuICAvLyBOb3RlOiBjYW5ub3QgdXNlIGBsZW5ndGggPCBrTWF4TGVuZ3RoYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IGtNYXhMZW5ndGgoKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoKCkudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cblxuZnVuY3Rpb24gU2xvd0J1ZmZlciAoc3ViamVjdCwgZW5jb2RpbmcpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNsb3dCdWZmZXIpKSByZXR1cm4gbmV3IFNsb3dCdWZmZXIoc3ViamVjdCwgZW5jb2RpbmcpXG5cbiAgdmFyIGJ1ZiA9IG5ldyBCdWZmZXIoc3ViamVjdCwgZW5jb2RpbmcpXG4gIGRlbGV0ZSBidWYucGFyZW50XG4gIHJldHVybiBidWZcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIgKGIpIHtcbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlIChhLCBiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgbXVzdCBiZSBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChhID09PSBiKSByZXR1cm4gMFxuXG4gIHZhciB4ID0gYS5sZW5ndGhcbiAgdmFyIHkgPSBiLmxlbmd0aFxuXG4gIHZhciBpID0gMFxuICB2YXIgbGVuID0gTWF0aC5taW4oeCwgeSlcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkgYnJlYWtcblxuICAgICsraVxuICB9XG5cbiAgaWYgKGkgIT09IGxlbikge1xuICAgIHggPSBhW2ldXG4gICAgeSA9IGJbaV1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiBpc0VuY29kaW5nIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAncmF3JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdCAobGlzdCwgbGVuZ3RoKSB7XG4gIGlmICghaXNBcnJheShsaXN0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcignbGlzdCBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMuJylcblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcigwKVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcihsZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgaXRlbS5jb3B5KGJ1ZiwgcG9zKVxuICAgIHBvcyArPSBpdGVtLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHN0cmluZyA9ICcnICsgc3RyaW5nXG5cbiAgdmFyIGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAvLyBEZXByZWNhdGVkXG4gICAgICBjYXNlICdyYXcnOlxuICAgICAgY2FzZSAncmF3cyc6XG4gICAgICAgIHJldHVybiBsZW5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgc3RhcnQgPSBzdGFydCB8IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID09PSBJbmZpbml0eSA/IHRoaXMubGVuZ3RoIDogZW5kIHwgMFxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG4gIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmIChlbmQgPD0gc3RhcnQpIHJldHVybiAnJ1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGJpbmFyeVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGggfCAwXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gMFxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYilcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0KSB7XG4gIGlmIChieXRlT2Zmc2V0ID4gMHg3ZmZmZmZmZikgYnl0ZU9mZnNldCA9IDB4N2ZmZmZmZmZcbiAgZWxzZSBpZiAoYnl0ZU9mZnNldCA8IC0weDgwMDAwMDAwKSBieXRlT2Zmc2V0ID0gLTB4ODAwMDAwMDBcbiAgYnl0ZU9mZnNldCA+Pj0gMFxuXG4gIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG4gIGlmIChieXRlT2Zmc2V0ID49IHRoaXMubGVuZ3RoKSByZXR1cm4gLTFcblxuICAvLyBOZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IE1hdGgubWF4KHRoaXMubGVuZ3RoICsgYnl0ZU9mZnNldCwgMClcblxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xIC8vIHNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nIGFsd2F5cyBmYWlsc1xuICAgIHJldHVybiBTdHJpbmcucHJvdG90eXBlLmluZGV4T2YuY2FsbCh0aGlzLCB2YWwsIGJ5dGVPZmZzZXQpXG4gIH1cbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQpXG4gIH1cbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwodGhpcywgdmFsLCBieXRlT2Zmc2V0KVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKHRoaXMsIFsgdmFsIF0sIGJ5dGVPZmZzZXQpXG4gIH1cblxuICBmdW5jdGlvbiBhcnJheUluZGV4T2YgKGFyciwgdmFsLCBieXRlT2Zmc2V0KSB7XG4gICAgdmFyIGZvdW5kSW5kZXggPSAtMVxuICAgIGZvciAodmFyIGkgPSAwOyBieXRlT2Zmc2V0ICsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFycltieXRlT2Zmc2V0ICsgaV0gPT09IHZhbFtmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleF0pIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWwubGVuZ3RoKSByZXR1cm4gYnl0ZU9mZnNldCArIGZvdW5kSW5kZXhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvdW5kSW5kZXggPSAtMVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTFcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbi8vIGBnZXRgIGlzIGRlcHJlY2F0ZWRcbkJ1ZmZlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0IChvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5nZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLnJlYWRVSW50OChvZmZzZXQpXG59XG5cbi8vIGBzZXRgIGlzIGRlcHJlY2F0ZWRcbkJ1ZmZlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0ICh2LCBvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5zZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLndyaXRlVUludDgodiwgb2Zmc2V0KVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKGlzTmFOKHBhcnNlZCkpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJylcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBwYXJzZWRcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBhc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJpbmFyeVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGFzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gdWNzMldyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nKVxuICBpZiAob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIG9mZnNldFssIGxlbmd0aF1bLCBlbmNvZGluZ10pXG4gIH0gZWxzZSBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgICBpZiAoaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgbGVuZ3RoID0gbGVuZ3RoIHwgMFxuICAgICAgaWYgKGVuY29kaW5nID09PSB1bmRlZmluZWQpIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgfSBlbHNlIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIC8vIGxlZ2FjeSB3cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aCkgLSByZW1vdmUgaW4gdjAuMTNcbiAgfSBlbHNlIHtcbiAgICB2YXIgc3dhcCA9IGVuY29kaW5nXG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBvZmZzZXQgPSBsZW5ndGggfCAwXG4gICAgbGVuZ3RoID0gc3dhcFxuICB9XG5cbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCB8fCBsZW5ndGggPiByZW1haW5pbmcpIGxlbmd0aCA9IHJlbWFpbmluZ1xuXG4gIGlmICgoc3RyaW5nLmxlbmd0aCA+IDAgJiYgKGxlbmd0aCA8IDAgfHwgb2Zmc2V0IDwgMCkpIHx8IG9mZnNldCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2F0dGVtcHQgdG8gd3JpdGUgb3V0c2lkZSBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBiaW5hcnlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIHZhciByZXMgPSBbXVxuXG4gIHZhciBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICB2YXIgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgdmFyIGNvZGVQb2ludCA9IG51bGxcbiAgICB2YXIgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKSA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpID8gM1xuICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRikgPyAyXG4gICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIHZhciBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbnZhciBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgdmFyIGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgdmFyIHJlcyA9ICcnXG4gIHZhciBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGJpbmFyeVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgdmFyIG5ld0J1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBuZXdCdWYgPSBCdWZmZXIuX2F1Z21lbnQodGhpcy5zdWJhcnJheShzdGFydCwgZW5kKSlcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyBpKyspIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfVxuXG4gIGlmIChuZXdCdWYubGVuZ3RoKSBuZXdCdWYucGFyZW50ID0gdGhpcy5wYXJlbnQgfHwgdGhpc1xuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIHZhciBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoXG4gIHZhciBtdWwgPSAxXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignYnVmZmVyIG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBSYW5nZUVycm9yKCd2YWx1ZSBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdpbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludExFID0gZnVuY3Rpb24gd3JpdGVVSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSwgMClcblxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludEJFID0gZnVuY3Rpb24gd3JpdGVVSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSwgMClcblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiB3cml0ZVVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4ZmYsIDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgMik7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDQpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludExFID0gZnVuY3Rpb24gd3JpdGVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IDBcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IHZhbHVlIDwgMCA/IDEgOiAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gdmFsdWUgPCAwID8gMSA6IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndmFsdWUgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignaW5kZXggb3V0IG9mIHJhbmdlJylcbiAgaWYgKG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdpbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDQsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gd3JpdGVGbG9hdEJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDgsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gY29weSAodGFyZ2V0LCB0YXJnZXRTdGFydCwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0U3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aCkgdGFyZ2V0U3RhcnQgPSB0YXJnZXQubGVuZ3RoXG4gIGlmICghdGFyZ2V0U3RhcnQpIHRhcmdldFN0YXJ0ID0gMFxuICBpZiAoZW5kID4gMCAmJiBlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVybiAwXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgaWYgKHRhcmdldFN0YXJ0IDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgfVxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChlbmQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCA8IGVuZCAtIHN0YXJ0KSB7XG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0ICsgc3RhcnRcbiAgfVxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuICB2YXIgaVxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQgJiYgc3RhcnQgPCB0YXJnZXRTdGFydCAmJiB0YXJnZXRTdGFydCA8IGVuZCkge1xuICAgIC8vIGRlc2NlbmRpbmcgY29weSBmcm9tIGVuZFxuICAgIGZvciAoaSA9IGxlbiAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIGlmIChsZW4gPCAxMDAwIHx8ICFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIGFzY2VuZGluZyBjb3B5IGZyb20gc3RhcnRcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRhcmdldC5fc2V0KHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSwgdGFyZ2V0U3RhcnQpXG4gIH1cblxuICByZXR1cm4gbGVuXG59XG5cbi8vIGZpbGwodmFsdWUsIHN0YXJ0PTAsIGVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gZmlsbCAodmFsdWUsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCF2YWx1ZSkgdmFsdWUgPSAwXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCkgZW5kID0gdGhpcy5sZW5ndGhcblxuICBpZiAoZW5kIDwgc3RhcnQpIHRocm93IG5ldyBSYW5nZUVycm9yKCdlbmQgPCBzdGFydCcpXG5cbiAgLy8gRmlsbCAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChlbmQgPCAwIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgdGhpc1tpXSA9IHZhbHVlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IHV0ZjhUb0J5dGVzKHZhbHVlLnRvU3RyaW5nKCkpXG4gICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgIHRoaXNbaV0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgQXJyYXlCdWZmZXJgIHdpdGggdGhlICpjb3BpZWQqIG1lbW9yeSBvZiB0aGUgYnVmZmVyIGluc3RhbmNlLlxuICogQWRkZWQgaW4gTm9kZSAwLjEyLiBPbmx5IGF2YWlsYWJsZSBpbiBicm93c2VycyB0aGF0IHN1cHBvcnQgQXJyYXlCdWZmZXIuXG4gKi9cbkJ1ZmZlci5wcm90b3R5cGUudG9BcnJheUJ1ZmZlciA9IGZ1bmN0aW9uIHRvQXJyYXlCdWZmZXIgKCkge1xuICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgICByZXR1cm4gKG5ldyBCdWZmZXIodGhpcykpLmJ1ZmZlclxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYnVmID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5sZW5ndGgpXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYnVmLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGJ1ZltpXSA9IHRoaXNbaV1cbiAgICAgIH1cbiAgICAgIHJldHVybiBidWYuYnVmZmVyXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0J1ZmZlci50b0FycmF5QnVmZmVyIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyJylcbiAgfVxufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBCUCA9IEJ1ZmZlci5wcm90b3R5cGVcblxuLyoqXG4gKiBBdWdtZW50IGEgVWludDhBcnJheSAqaW5zdGFuY2UqIChub3QgdGhlIFVpbnQ4QXJyYXkgY2xhc3MhKSB3aXRoIEJ1ZmZlciBtZXRob2RzXG4gKi9cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIF9hdWdtZW50IChhcnIpIHtcbiAgYXJyLmNvbnN0cnVjdG9yID0gQnVmZmVyXG4gIGFyci5faXNCdWZmZXIgPSB0cnVlXG5cbiAgLy8gc2F2ZSByZWZlcmVuY2UgdG8gb3JpZ2luYWwgVWludDhBcnJheSBzZXQgbWV0aG9kIGJlZm9yZSBvdmVyd3JpdGluZ1xuICBhcnIuX3NldCA9IGFyci5zZXRcblxuICAvLyBkZXByZWNhdGVkXG4gIGFyci5nZXQgPSBCUC5nZXRcbiAgYXJyLnNldCA9IEJQLnNldFxuXG4gIGFyci53cml0ZSA9IEJQLndyaXRlXG4gIGFyci50b1N0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0xvY2FsZVN0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0pTT04gPSBCUC50b0pTT05cbiAgYXJyLmVxdWFscyA9IEJQLmVxdWFsc1xuICBhcnIuY29tcGFyZSA9IEJQLmNvbXBhcmVcbiAgYXJyLmluZGV4T2YgPSBCUC5pbmRleE9mXG4gIGFyci5jb3B5ID0gQlAuY29weVxuICBhcnIuc2xpY2UgPSBCUC5zbGljZVxuICBhcnIucmVhZFVJbnRMRSA9IEJQLnJlYWRVSW50TEVcbiAgYXJyLnJlYWRVSW50QkUgPSBCUC5yZWFkVUludEJFXG4gIGFyci5yZWFkVUludDggPSBCUC5yZWFkVUludDhcbiAgYXJyLnJlYWRVSW50MTZMRSA9IEJQLnJlYWRVSW50MTZMRVxuICBhcnIucmVhZFVJbnQxNkJFID0gQlAucmVhZFVJbnQxNkJFXG4gIGFyci5yZWFkVUludDMyTEUgPSBCUC5yZWFkVUludDMyTEVcbiAgYXJyLnJlYWRVSW50MzJCRSA9IEJQLnJlYWRVSW50MzJCRVxuICBhcnIucmVhZEludExFID0gQlAucmVhZEludExFXG4gIGFyci5yZWFkSW50QkUgPSBCUC5yZWFkSW50QkVcbiAgYXJyLnJlYWRJbnQ4ID0gQlAucmVhZEludDhcbiAgYXJyLnJlYWRJbnQxNkxFID0gQlAucmVhZEludDE2TEVcbiAgYXJyLnJlYWRJbnQxNkJFID0gQlAucmVhZEludDE2QkVcbiAgYXJyLnJlYWRJbnQzMkxFID0gQlAucmVhZEludDMyTEVcbiAgYXJyLnJlYWRJbnQzMkJFID0gQlAucmVhZEludDMyQkVcbiAgYXJyLnJlYWRGbG9hdExFID0gQlAucmVhZEZsb2F0TEVcbiAgYXJyLnJlYWRGbG9hdEJFID0gQlAucmVhZEZsb2F0QkVcbiAgYXJyLnJlYWREb3VibGVMRSA9IEJQLnJlYWREb3VibGVMRVxuICBhcnIucmVhZERvdWJsZUJFID0gQlAucmVhZERvdWJsZUJFXG4gIGFyci53cml0ZVVJbnQ4ID0gQlAud3JpdGVVSW50OFxuICBhcnIud3JpdGVVSW50TEUgPSBCUC53cml0ZVVJbnRMRVxuICBhcnIud3JpdGVVSW50QkUgPSBCUC53cml0ZVVJbnRCRVxuICBhcnIud3JpdGVVSW50MTZMRSA9IEJQLndyaXRlVUludDE2TEVcbiAgYXJyLndyaXRlVUludDE2QkUgPSBCUC53cml0ZVVJbnQxNkJFXG4gIGFyci53cml0ZVVJbnQzMkxFID0gQlAud3JpdGVVSW50MzJMRVxuICBhcnIud3JpdGVVSW50MzJCRSA9IEJQLndyaXRlVUludDMyQkVcbiAgYXJyLndyaXRlSW50TEUgPSBCUC53cml0ZUludExFXG4gIGFyci53cml0ZUludEJFID0gQlAud3JpdGVJbnRCRVxuICBhcnIud3JpdGVJbnQ4ID0gQlAud3JpdGVJbnQ4XG4gIGFyci53cml0ZUludDE2TEUgPSBCUC53cml0ZUludDE2TEVcbiAgYXJyLndyaXRlSW50MTZCRSA9IEJQLndyaXRlSW50MTZCRVxuICBhcnIud3JpdGVJbnQzMkxFID0gQlAud3JpdGVJbnQzMkxFXG4gIGFyci53cml0ZUludDMyQkUgPSBCUC53cml0ZUludDMyQkVcbiAgYXJyLndyaXRlRmxvYXRMRSA9IEJQLndyaXRlRmxvYXRMRVxuICBhcnIud3JpdGVGbG9hdEJFID0gQlAud3JpdGVGbG9hdEJFXG4gIGFyci53cml0ZURvdWJsZUxFID0gQlAud3JpdGVEb3VibGVMRVxuICBhcnIud3JpdGVEb3VibGVCRSA9IEJQLndyaXRlRG91YmxlQkVcbiAgYXJyLmZpbGwgPSBCUC5maWxsXG4gIGFyci5pbnNwZWN0ID0gQlAuaW5zcGVjdFxuICBhcnIudG9BcnJheUJ1ZmZlciA9IEJQLnRvQXJyYXlCdWZmZXJcblxuICByZXR1cm4gYXJyXG59XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIHZhciBjb2RlUG9pbnRcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgdmFyIGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIHZhciBieXRlcyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
