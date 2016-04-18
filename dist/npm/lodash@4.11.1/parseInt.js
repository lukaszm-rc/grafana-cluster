'use strict';

System.register([], function (_export, _context) {
  var root, toString, reTrim, reHasHexPrefix, nativeParseInt;


  /**
   * Converts `string` to an integer of the specified radix. If `radix` is
   * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
   * hexadecimal, in which case a `radix` of `16` is used.
   *
   * **Note:** This method aligns with the
   * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category String
   * @param {string} string The string to convert.
   * @param {number} [radix=10] The radix to interpret `value` by.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.parseInt('08');
   * // => 8
   *
   * _.map(['6', '08', '10'], _.parseInt);
   * // => [6, 8, 10]
   */
  function parseInt(string, radix, guard) {
    // Chrome fails to trim leading <BOM> whitespace characters.
    // See https://bugs.chromium.org/p/v8/issues/detail?id=3109 for more details.
    if (guard || radix == null) {
      radix = 0;
    } else if (radix) {
      radix = +radix;
    }
    string = toString(string).replace(reTrim, '');
    return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
  }

  return {
    setters: [],
    execute: function () {
      root = require('./_root');
      toString = require('./toString');
      reTrim = /^\s+|\s+$/g;
      reHasHexPrefix = /^0x/i;
      nativeParseInt = root.parseInt;
      module.exports = parseInt;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3BhcnNlSW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFDQSxXQUFTLFFBQVQsQ0FBa0IsTUFBbEIsRUFBMEIsS0FBMUIsRUFBaUMsS0FBakMsRUFBd0M7OztBQUd0QyxRQUFJLFNBQVMsU0FBUyxJQUFULEVBQWU7QUFDMUIsY0FBUSxDQUFSLENBRDBCO0tBQTVCLE1BRU8sSUFBSSxLQUFKLEVBQVc7QUFDaEIsY0FBUSxDQUFDLEtBQUQsQ0FEUTtLQUFYO0FBR1AsYUFBUyxTQUFTLE1BQVQsRUFBaUIsT0FBakIsQ0FBeUIsTUFBekIsRUFBaUMsRUFBakMsQ0FBVCxDQVJzQztBQVN0QyxXQUFPLGVBQWUsTUFBZixFQUF1QixVQUFVLGVBQWUsSUFBZixDQUFvQixNQUFwQixJQUE4QixFQUE5QixHQUFtQyxFQUFuQyxDQUFWLENBQTlCLENBVHNDO0dBQXhDOzs7OztBQXBDSSxhQUFPLFFBQVEsU0FBUjtBQUNQLGlCQUFXLFFBQVEsWUFBUjtBQUdYLGVBQVM7QUFHVCx1QkFBaUI7QUFHakIsdUJBQWlCLEtBQUssUUFBTDtBQXNDckIsYUFBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3BhcnNlSW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVIYXNIZXhQcmVmaXggPSAvXjB4L2k7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVQYXJzZUludCA9IHJvb3QucGFyc2VJbnQ7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gYW4gaW50ZWdlciBvZiB0aGUgc3BlY2lmaWVkIHJhZGl4LiBJZiBgcmFkaXhgIGlzXG4gKiBgdW5kZWZpbmVkYCBvciBgMGAsIGEgYHJhZGl4YCBvZiBgMTBgIGlzIHVzZWQgdW5sZXNzIGB2YWx1ZWAgaXMgYVxuICogaGV4YWRlY2ltYWwsIGluIHdoaWNoIGNhc2UgYSBgcmFkaXhgIG9mIGAxNmAgaXMgdXNlZC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgYWxpZ25zIHdpdGggdGhlXG4gKiBbRVM1IGltcGxlbWVudGF0aW9uXShodHRwczovL2VzNS5naXRodWIuaW8vI3gxNS4xLjIuMikgb2YgYHBhcnNlSW50YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDEuMS4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbcmFkaXg9MTBdIFRoZSByYWRpeCB0byBpbnRlcnByZXQgYHZhbHVlYCBieS5cbiAqIEBwYXJhbS0ge09iamVjdH0gW2d1YXJkXSBFbmFibGVzIHVzZSBhcyBhbiBpdGVyYXRlZSBmb3IgbWV0aG9kcyBsaWtlIGBfLm1hcGAuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgaW50ZWdlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5wYXJzZUludCgnMDgnKTtcbiAqIC8vID0+IDhcbiAqXG4gKiBfLm1hcChbJzYnLCAnMDgnLCAnMTAnXSwgXy5wYXJzZUludCk7XG4gKiAvLyA9PiBbNiwgOCwgMTBdXG4gKi9cbmZ1bmN0aW9uIHBhcnNlSW50KHN0cmluZywgcmFkaXgsIGd1YXJkKSB7XG4gIC8vIENocm9tZSBmYWlscyB0byB0cmltIGxlYWRpbmcgPEJPTT4gd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLlxuICAvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzEwOSBmb3IgbW9yZSBkZXRhaWxzLlxuICBpZiAoZ3VhcmQgfHwgcmFkaXggPT0gbnVsbCkge1xuICAgIHJhZGl4ID0gMDtcbiAgfSBlbHNlIGlmIChyYWRpeCkge1xuICAgIHJhZGl4ID0gK3JhZGl4O1xuICB9XG4gIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZykucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgcmV0dXJuIG5hdGl2ZVBhcnNlSW50KHN0cmluZywgcmFkaXggfHwgKHJlSGFzSGV4UHJlZml4LnRlc3Qoc3RyaW5nKSA/IDE2IDogMTApKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZUludDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
