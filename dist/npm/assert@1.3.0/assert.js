'use strict';

System.register([], function (_export, _context) {
  var util, pSlice, hasOwn, assert, objectKeys;


  function replacer(key, value) {
    if (util.isUndefined(value)) {
      return '' + value;
    }
    if (util.isNumber(value) && !isFinite(value)) {
      return value.toString();
    }
    if (util.isFunction(value) || util.isRegExp(value)) {
      return value.toString();
    }
    return value;
  }

  function truncate(s, n) {
    if (util.isString(s)) {
      return s.length < n ? s : s.slice(0, n);
    } else {
      return s;
    }
  }

  function getMessage(self) {
    return truncate(JSON.stringify(self.actual, replacer), 128) + ' ' + self.operator + ' ' + truncate(JSON.stringify(self.expected, replacer), 128);
  }

  // At present only the three keys mentioned above are used and
  // understood by the spec. Implementations or sub modules can pass
  // other keys to the AssertionError's constructor - they will be
  // ignored.

  // 3. All of the following functions must throw an AssertionError
  // when a corresponding condition is not met, with a message that
  // may be undefined if not provided.  All assertion methods provide
  // both the actual and expected values to the assertion error for
  // display purposes.

  function fail(actual, expected, message, operator, stackStartFunction) {
    throw new assert.AssertionError({
      message: message,
      actual: actual,
      expected: expected,
      operator: operator,
      stackStartFunction: stackStartFunction
    });
  }

  // EXTENSION! allows for well behaved errors defined elsewhere.


  // 4. Pure assertion tests whether a value is truthy, as determined
  // by !!guard.
  // assert.ok(guard, message_opt);
  // This statement is equivalent to assert.equal(true, !!guard,
  // message_opt);. To test strictly for the value true, use
  // assert.strictEqual(true, guard, message_opt);.

  function ok(value, message) {
    if (!value) fail(value, true, message, '==', assert.ok);
  }


  function _deepEqual(actual, expected) {
    // 7.1. All identical values are equivalent, as determined by ===.
    if (actual === expected) {
      return true;
    } else if (util.isBuffer(actual) && util.isBuffer(expected)) {
      if (actual.length != expected.length) return false;

      for (var i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) return false;
      }

      return true;

      // 7.2. If the expected value is a Date object, the actual value is
      // equivalent if it is also a Date object that refers to the same time.
    } else if (util.isDate(actual) && util.isDate(expected)) {
        return actual.getTime() === expected.getTime();

        // 7.3 If the expected value is a RegExp object, the actual value is
        // equivalent if it is also a RegExp object with the same source and
        // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
      } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
          return actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase;

          // 7.4. Other pairs that do not both pass typeof value == 'object',
          // equivalence is determined by ==.
        } else if (!util.isObject(actual) && !util.isObject(expected)) {
            return actual == expected;

            // 7.5 For all other Object pairs, including Array objects, equivalence is
            // determined by having the same number of owned properties (as verified
            // with Object.prototype.hasOwnProperty.call), the same set of keys
            // (although not necessarily the same order), equivalent values for every
            // corresponding key, and an identical 'prototype' property. Note: this
            // accounts for both named and indexed properties on Arrays.
          } else {
              return objEquiv(actual, expected);
            }
  }

  function isArguments(object) {
    return Object.prototype.toString.call(object) == '[object Arguments]';
  }

  function objEquiv(a, b) {
    if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b)) return false;
    // an identical 'prototype' property.
    if (a.prototype !== b.prototype) return false;
    // if one is a primitive, the other must be same
    if (util.isPrimitive(a) || util.isPrimitive(b)) {
      return a === b;
    }
    var aIsArgs = isArguments(a),
        bIsArgs = isArguments(b);
    if (aIsArgs && !bIsArgs || !aIsArgs && bIsArgs) return false;
    if (aIsArgs) {
      a = pSlice.call(a);
      b = pSlice.call(b);
      return _deepEqual(a, b);
    }
    var ka = objectKeys(a),
        kb = objectKeys(b),
        key,
        i;
    // having the same number of owned properties (keys incorporates
    // hasOwnProperty)
    if (ka.length != kb.length) return false;
    //the same set of keys (although not necessarily the same order),
    ka.sort();
    kb.sort();
    //~~~cheap key test
    for (i = ka.length - 1; i >= 0; i--) {
      if (ka[i] != kb[i]) return false;
    }
    //equivalent values for every corresponding key, and
    //~~~possibly expensive deep test
    for (i = ka.length - 1; i >= 0; i--) {
      key = ka[i];
      if (!_deepEqual(a[key], b[key])) return false;
    }
    return true;
  }

  // 8. The non-equivalence assertion tests for any deep inequality.
  // assert.notDeepEqual(actual, expected, message_opt);

  function expectedException(actual, expected) {
    if (!actual || !expected) {
      return false;
    }

    if (Object.prototype.toString.call(expected) == '[object RegExp]') {
      return expected.test(actual);
    } else if (actual instanceof expected) {
      return true;
    } else if (expected.call({}, actual) === true) {
      return true;
    }

    return false;
  }

  function _throws(shouldThrow, block, expected, message) {
    var actual;

    if (util.isString(expected)) {
      message = expected;
      expected = null;
    }

    try {
      block();
    } catch (e) {
      actual = e;
    }

    message = (expected && expected.name ? ' (' + expected.name + ').' : '.') + (message ? ' ' + message : '.');

    if (shouldThrow && !actual) {
      fail(actual, expected, 'Missing expected exception' + message);
    }

    if (!shouldThrow && expectedException(actual, expected)) {
      fail(actual, expected, 'Got unwanted exception' + message);
    }

    if (shouldThrow && actual && expected && !expectedException(actual, expected) || !shouldThrow && actual) {
      throw actual;
    }
  }

  // 11. Expected to throw an error:
  // assert.throws(block, Error_opt, message_opt);

  return {
    setters: [],
    execute: function () {
      util = require('util/');
      pSlice = Array.prototype.slice;
      hasOwn = Object.prototype.hasOwnProperty;
      assert = module.exports = ok;


      // 2. The AssertionError is defined in assert.
      // new assert.AssertionError({ message: message,
      //                             actual: actual,
      //                             expected: expected })

      assert.AssertionError = function AssertionError(options) {
        this.name = 'AssertionError';
        this.actual = options.actual;
        this.expected = options.expected;
        this.operator = options.operator;
        if (options.message) {
          this.message = options.message;
          this.generatedMessage = false;
        } else {
          this.message = getMessage(this);
          this.generatedMessage = true;
        }
        var stackStartFunction = options.stackStartFunction || fail;

        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, stackStartFunction);
        } else {
          // non v8 browsers so we can have a stacktrace
          var err = new Error();
          if (err.stack) {
            var out = err.stack;

            // try to strip useless frames
            var fn_name = stackStartFunction.name;
            var idx = out.indexOf('\n' + fn_name);
            if (idx >= 0) {
              // once we have located the function frame
              // we need to strip out everything before it (and its line)
              var next_line = out.indexOf('\n', idx + 1);
              out = out.substring(next_line + 1);
            }

            this.stack = out;
          }
        }
      };

      // assert.AssertionError instanceof Error
      util.inherits(assert.AssertionError, Error);assert.fail = fail;assert.ok = ok;

      // 5. The equality assertion tests shallow, coercive equality with
      // ==.
      // assert.equal(actual, expected, message_opt);

      assert.equal = function equal(actual, expected, message) {
        if (actual != expected) fail(actual, expected, message, '==', assert.equal);
      };

      // 6. The non-equality assertion tests for whether two objects are not equal
      // with != assert.notEqual(actual, expected, message_opt);

      assert.notEqual = function notEqual(actual, expected, message) {
        if (actual == expected) {
          fail(actual, expected, message, '!=', assert.notEqual);
        }
      };

      // 7. The equivalence assertion tests a deep equality relation.
      // assert.deepEqual(actual, expected, message_opt);

      assert.deepEqual = function deepEqual(actual, expected, message) {
        if (!_deepEqual(actual, expected)) {
          fail(actual, expected, message, 'deepEqual', assert.deepEqual);
        }
      };assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
        if (_deepEqual(actual, expected)) {
          fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
        }
      };

      // 9. The strict equality assertion tests strict equality, as determined by ===.
      // assert.strictEqual(actual, expected, message_opt);

      assert.strictEqual = function strictEqual(actual, expected, message) {
        if (actual !== expected) {
          fail(actual, expected, message, '===', assert.strictEqual);
        }
      };

      // 10. The strict non-equality assertion tests for strict inequality, as
      // determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

      assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
        if (actual === expected) {
          fail(actual, expected, message, '!==', assert.notStrictEqual);
        }
      };assert.throws = function (block, /*optional*/error, /*optional*/message) {
        _throws.apply(this, [true].concat(pSlice.call(arguments)));
      };

      // EXTENSION! This is annoying to write outside this module.
      assert.doesNotThrow = function (block, /*optional*/message) {
        _throws.apply(this, [false].concat(pSlice.call(arguments)));
      };

      assert.ifError = function (err) {
        if (err) {
          throw err;
        }
      };

      objectKeys = Object.keys || function (obj) {
        var keys = [];
        for (var key in obj) {
          if (hasOwn.call(obj, key)) keys.push(key);
        }
        return keys;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9hc3NlcnRAMS4zLjAvYXNzZXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQW9GQSxXQUFTLFFBQVQsQ0FBa0IsR0FBbEIsRUFBdUIsS0FBdkIsRUFBOEI7QUFDNUIsUUFBSSxLQUFLLFdBQUwsQ0FBaUIsS0FBakIsQ0FBSixFQUE2QjtBQUMzQixhQUFPLEtBQUssS0FBTCxDQURvQjtLQUE3QjtBQUdBLFFBQUksS0FBSyxRQUFMLENBQWMsS0FBZCxLQUF3QixDQUFDLFNBQVMsS0FBVCxDQUFELEVBQWtCO0FBQzVDLGFBQU8sTUFBTSxRQUFOLEVBQVAsQ0FENEM7S0FBOUM7QUFHQSxRQUFJLEtBQUssVUFBTCxDQUFnQixLQUFoQixLQUEwQixLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQTFCLEVBQWdEO0FBQ2xELGFBQU8sTUFBTSxRQUFOLEVBQVAsQ0FEa0Q7S0FBcEQ7QUFHQSxXQUFPLEtBQVAsQ0FWNEI7R0FBOUI7O0FBYUEsV0FBUyxRQUFULENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCO0FBQ3RCLFFBQUksS0FBSyxRQUFMLENBQWMsQ0FBZCxDQUFKLEVBQXNCO0FBQ3BCLGFBQU8sRUFBRSxNQUFGLEdBQVcsQ0FBWCxHQUFlLENBQWYsR0FBbUIsRUFBRSxLQUFGLENBQVEsQ0FBUixFQUFXLENBQVgsQ0FBbkIsQ0FEYTtLQUF0QixNQUVPO0FBQ0wsYUFBTyxDQUFQLENBREs7S0FGUDtHQURGOztBQVFBLFdBQVMsVUFBVCxDQUFvQixJQUFwQixFQUEwQjtBQUN4QixXQUFPLFNBQVMsS0FBSyxTQUFMLENBQWUsS0FBSyxNQUFMLEVBQWEsUUFBNUIsQ0FBVCxFQUFnRCxHQUFoRCxJQUF1RCxHQUF2RCxHQUNBLEtBQUssUUFBTCxHQUFnQixHQURoQixHQUVBLFNBQVMsS0FBSyxTQUFMLENBQWUsS0FBSyxRQUFMLEVBQWUsUUFBOUIsQ0FBVCxFQUFrRCxHQUFsRCxDQUZBLENBRGlCO0dBQTFCOzs7Ozs7Ozs7Ozs7O0FBaUJBLFdB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QUFSLENBQWUsT0FBTyxJQUFQLENBQVksU0FBWixDQUFmLENBQXBCLEVBRHlEO09BQXJDOztBQUl0QixhQUFPLE9BQVAsR0FBaUIsVUFBUyxHQUFULEVBQWM7QUFBRSxZQUFJLEdBQUosRUFBUztBQUFDLGdCQUFNLEdBQU4sQ0FBRDtTQUFUO09BQWhCOztBQUViLG1CQUFhLE9BQU8sSUFBUCxJQUFlLFVBQVUsR0FBVixFQUFlO0FBQzdDLFlBQUksT0FBTyxFQUFQLENBRHlDO0FBRTdDLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFDbkIsY0FBSSxPQUFPLElBQVAsQ0FBWSxHQUFaLEVBQWlCLEdBQWpCLENBQUosRUFBMkIsS0FBSyxJQUFMLENBQVUsR0FBVixFQUEzQjtTQURGO0FBR0EsZUFBTyxJQUFQLENBTDZDO09BQWYiLCJmaWxlIjoibnBtL2Fzc2VydEAxLjMuMC9hc3NlcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwOi8vd2lraS5jb21tb25qcy5vcmcvd2lraS9Vbml0X1Rlc3RpbmcvMS4wXG4vL1xuLy8gVEhJUyBJUyBOT1QgVEVTVEVEIE5PUiBMSUtFTFkgVE8gV09SSyBPVVRTSURFIFY4IVxuLy9cbi8vIE9yaWdpbmFsbHkgZnJvbSBuYXJ3aGFsLmpzIChodHRwOi8vbmFyd2hhbGpzLm9yZylcbi8vIENvcHlyaWdodCAoYykgMjAwOSBUaG9tYXMgUm9iaW5zb24gPDI4MG5vcnRoLmNvbT5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSAnU29mdHdhcmUnKSwgdG9cbi8vIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4vLyByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Jcbi8vIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgJ0FTIElTJywgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4vLyBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OXG4vLyBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gd2hlbiB1c2VkIGluIG5vZGUsIHRoaXMgd2lsbCBhY3R1YWxseSBsb2FkIHRoZSB1dGlsIG1vZHVsZSB3ZSBkZXBlbmQgb25cbi8vIHZlcnN1cyBsb2FkaW5nIHRoZSBidWlsdGluIHV0aWwgbW9kdWxlIGFzIGhhcHBlbnMgb3RoZXJ3aXNlXG4vLyB0aGlzIGlzIGEgYnVnIGluIG5vZGUgbW9kdWxlIGxvYWRpbmcgYXMgZmFyIGFzIEkgYW0gY29uY2VybmVkXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwvJyk7XG5cbnZhciBwU2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuLy8gMS4gVGhlIGFzc2VydCBtb2R1bGUgcHJvdmlkZXMgZnVuY3Rpb25zIHRoYXQgdGhyb3dcbi8vIEFzc2VydGlvbkVycm9yJ3Mgd2hlbiBwYXJ0aWN1bGFyIGNvbmRpdGlvbnMgYXJlIG5vdCBtZXQuIFRoZVxuLy8gYXNzZXJ0IG1vZHVsZSBtdXN0IGNvbmZvcm0gdG8gdGhlIGZvbGxvd2luZyBpbnRlcmZhY2UuXG5cbnZhciBhc3NlcnQgPSBtb2R1bGUuZXhwb3J0cyA9IG9rO1xuXG4vLyAyLiBUaGUgQXNzZXJ0aW9uRXJyb3IgaXMgZGVmaW5lZCBpbiBhc3NlcnQuXG4vLyBuZXcgYXNzZXJ0LkFzc2VydGlvbkVycm9yKHsgbWVzc2FnZTogbWVzc2FnZSxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IGFjdHVhbCxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogZXhwZWN0ZWQgfSlcblxuYXNzZXJ0LkFzc2VydGlvbkVycm9yID0gZnVuY3Rpb24gQXNzZXJ0aW9uRXJyb3Iob3B0aW9ucykge1xuICB0aGlzLm5hbWUgPSAnQXNzZXJ0aW9uRXJyb3InO1xuICB0aGlzLmFjdHVhbCA9IG9wdGlvbnMuYWN0dWFsO1xuICB0aGlzLmV4cGVjdGVkID0gb3B0aW9ucy5leHBlY3RlZDtcbiAgdGhpcy5vcGVyYXRvciA9IG9wdGlvbnMub3BlcmF0b3I7XG4gIGlmIChvcHRpb25zLm1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBvcHRpb25zLm1lc3NhZ2U7XG4gICAgdGhpcy5nZW5lcmF0ZWRNZXNzYWdlID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5tZXNzYWdlID0gZ2V0TWVzc2FnZSh0aGlzKTtcbiAgICB0aGlzLmdlbmVyYXRlZE1lc3NhZ2UgPSB0cnVlO1xuICB9XG4gIHZhciBzdGFja1N0YXJ0RnVuY3Rpb24gPSBvcHRpb25zLnN0YWNrU3RhcnRGdW5jdGlvbiB8fCBmYWlsO1xuXG4gIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHN0YWNrU3RhcnRGdW5jdGlvbik7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gbm9uIHY4IGJyb3dzZXJzIHNvIHdlIGNhbiBoYXZlIGEgc3RhY2t0cmFjZVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoKTtcbiAgICBpZiAoZXJyLnN0YWNrKSB7XG4gICAgICB2YXIgb3V0ID0gZXJyLnN0YWNrO1xuXG4gICAgICAvLyB0cnkgdG8gc3RyaXAgdXNlbGVzcyBmcmFtZXNcbiAgICAgIHZhciBmbl9uYW1lID0gc3RhY2tTdGFydEZ1bmN0aW9uLm5hbWU7XG4gICAgICB2YXIgaWR4ID0gb3V0LmluZGV4T2YoJ1xcbicgKyBmbl9uYW1lKTtcbiAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAvLyBvbmNlIHdlIGhhdmUgbG9jYXRlZCB0aGUgZnVuY3Rpb24gZnJhbWVcbiAgICAgICAgLy8gd2UgbmVlZCB0byBzdHJpcCBvdXQgZXZlcnl0aGluZyBiZWZvcmUgaXQgKGFuZCBpdHMgbGluZSlcbiAgICAgICAgdmFyIG5leHRfbGluZSA9IG91dC5pbmRleE9mKCdcXG4nLCBpZHggKyAxKTtcbiAgICAgICAgb3V0ID0gb3V0LnN1YnN0cmluZyhuZXh0X2xpbmUgKyAxKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGFjayA9IG91dDtcbiAgICB9XG4gIH1cbn07XG5cbi8vIGFzc2VydC5Bc3NlcnRpb25FcnJvciBpbnN0YW5jZW9mIEVycm9yXG51dGlsLmluaGVyaXRzKGFzc2VydC5Bc3NlcnRpb25FcnJvciwgRXJyb3IpO1xuXG5mdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gIGlmICh1dGlsLmlzVW5kZWZpbmVkKHZhbHVlKSkge1xuICAgIHJldHVybiAnJyArIHZhbHVlO1xuICB9XG4gIGlmICh1dGlsLmlzTnVtYmVyKHZhbHVlKSAmJiAhaXNGaW5pdGUodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gIH1cbiAgaWYgKHV0aWwuaXNGdW5jdGlvbih2YWx1ZSkgfHwgdXRpbC5pc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHRydW5jYXRlKHMsIG4pIHtcbiAgaWYgKHV0aWwuaXNTdHJpbmcocykpIHtcbiAgICByZXR1cm4gcy5sZW5ndGggPCBuID8gcyA6IHMuc2xpY2UoMCwgbik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHM7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TWVzc2FnZShzZWxmKSB7XG4gIHJldHVybiB0cnVuY2F0ZShKU09OLnN0cmluZ2lmeShzZWxmLmFjdHVhbCwgcmVwbGFjZXIpLCAxMjgpICsgJyAnICtcbiAgICAgICAgIHNlbGYub3BlcmF0b3IgKyAnICcgK1xuICAgICAgICAgdHJ1bmNhdGUoSlNPTi5zdHJpbmdpZnkoc2VsZi5leHBlY3RlZCwgcmVwbGFjZXIpLCAxMjgpO1xufVxuXG4vLyBBdCBwcmVzZW50IG9ubHkgdGhlIHRocmVlIGtleXMgbWVudGlvbmVkIGFib3ZlIGFyZSB1c2VkIGFuZFxuLy8gdW5kZXJzdG9vZCBieSB0aGUgc3BlYy4gSW1wbGVtZW50YXRpb25zIG9yIHN1YiBtb2R1bGVzIGNhbiBwYXNzXG4vLyBvdGhlciBrZXlzIHRvIHRoZSBBc3NlcnRpb25FcnJvcidzIGNvbnN0cnVjdG9yIC0gdGhleSB3aWxsIGJlXG4vLyBpZ25vcmVkLlxuXG4vLyAzLiBBbGwgb2YgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnMgbXVzdCB0aHJvdyBhbiBBc3NlcnRpb25FcnJvclxuLy8gd2hlbiBhIGNvcnJlc3BvbmRpbmcgY29uZGl0aW9uIGlzIG5vdCBtZXQsIHdpdGggYSBtZXNzYWdlIHRoYXRcbi8vIG1heSBiZSB1bmRlZmluZWQgaWYgbm90IHByb3ZpZGVkLiAgQWxsIGFzc2VydGlvbiBtZXRob2RzIHByb3ZpZGVcbi8vIGJvdGggdGhlIGFjdHVhbCBhbmQgZXhwZWN0ZWQgdmFsdWVzIHRvIHRoZSBhc3NlcnRpb24gZXJyb3IgZm9yXG4vLyBkaXNwbGF5IHB1cnBvc2VzLlxuXG5mdW5jdGlvbiBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsIG9wZXJhdG9yLCBzdGFja1N0YXJ0RnVuY3Rpb24pIHtcbiAgdGhyb3cgbmV3IGFzc2VydC5Bc3NlcnRpb25FcnJvcih7XG4gICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICBhY3R1YWw6IGFjdHVhbCxcbiAgICBleHBlY3RlZDogZXhwZWN0ZWQsXG4gICAgb3BlcmF0b3I6IG9wZXJhdG9yLFxuICAgIHN0YWNrU3RhcnRGdW5jdGlvbjogc3RhY2tTdGFydEZ1bmN0aW9uXG4gIH0pO1xufVxuXG4vLyBFWFRFTlNJT04hIGFsbG93cyBmb3Igd2VsbCBiZWhhdmVkIGVycm9ycyBkZWZpbmVkIGVsc2V3aGVyZS5cbmFzc2VydC5mYWlsID0gZmFpbDtcblxuLy8gNC4gUHVyZSBhc3NlcnRpb24gdGVzdHMgd2hldGhlciBhIHZhbHVlIGlzIHRydXRoeSwgYXMgZGV0ZXJtaW5lZFxuLy8gYnkgISFndWFyZC5cbi8vIGFzc2VydC5vayhndWFyZCwgbWVzc2FnZV9vcHQpO1xuLy8gVGhpcyBzdGF0ZW1lbnQgaXMgZXF1aXZhbGVudCB0byBhc3NlcnQuZXF1YWwodHJ1ZSwgISFndWFyZCxcbi8vIG1lc3NhZ2Vfb3B0KTsuIFRvIHRlc3Qgc3RyaWN0bHkgZm9yIHRoZSB2YWx1ZSB0cnVlLCB1c2Vcbi8vIGFzc2VydC5zdHJpY3RFcXVhbCh0cnVlLCBndWFyZCwgbWVzc2FnZV9vcHQpOy5cblxuZnVuY3Rpb24gb2sodmFsdWUsIG1lc3NhZ2UpIHtcbiAgaWYgKCF2YWx1ZSkgZmFpbCh2YWx1ZSwgdHJ1ZSwgbWVzc2FnZSwgJz09JywgYXNzZXJ0Lm9rKTtcbn1cbmFzc2VydC5vayA9IG9rO1xuXG4vLyA1LiBUaGUgZXF1YWxpdHkgYXNzZXJ0aW9uIHRlc3RzIHNoYWxsb3csIGNvZXJjaXZlIGVxdWFsaXR5IHdpdGhcbi8vID09LlxuLy8gYXNzZXJ0LmVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0LmVxdWFsID0gZnVuY3Rpb24gZXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYWN0dWFsICE9IGV4cGVjdGVkKSBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICc9PScsIGFzc2VydC5lcXVhbCk7XG59O1xuXG4vLyA2LiBUaGUgbm9uLWVxdWFsaXR5IGFzc2VydGlvbiB0ZXN0cyBmb3Igd2hldGhlciB0d28gb2JqZWN0cyBhcmUgbm90IGVxdWFsXG4vLyB3aXRoICE9IGFzc2VydC5ub3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC5ub3RFcXVhbCA9IGZ1bmN0aW9uIG5vdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGFjdHVhbCA9PSBleHBlY3RlZCkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJyE9JywgYXNzZXJ0Lm5vdEVxdWFsKTtcbiAgfVxufTtcblxuLy8gNy4gVGhlIGVxdWl2YWxlbmNlIGFzc2VydGlvbiB0ZXN0cyBhIGRlZXAgZXF1YWxpdHkgcmVsYXRpb24uXG4vLyBhc3NlcnQuZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0LmRlZXBFcXVhbCA9IGZ1bmN0aW9uIGRlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmICghX2RlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkKSkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJ2RlZXBFcXVhbCcsIGFzc2VydC5kZWVwRXF1YWwpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBfZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQpIHtcbiAgLy8gNy4xLiBBbGwgaWRlbnRpY2FsIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgYXMgZGV0ZXJtaW5lZCBieSA9PT0uXG4gIGlmIChhY3R1YWwgPT09IGV4cGVjdGVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG5cbiAgfSBlbHNlIGlmICh1dGlsLmlzQnVmZmVyKGFjdHVhbCkgJiYgdXRpbC5pc0J1ZmZlcihleHBlY3RlZCkpIHtcbiAgICBpZiAoYWN0dWFsLmxlbmd0aCAhPSBleHBlY3RlZC5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0dWFsLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYWN0dWFsW2ldICE9PSBleHBlY3RlZFtpXSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuXG4gIC8vIDcuMi4gSWYgdGhlIGV4cGVjdGVkIHZhbHVlIGlzIGEgRGF0ZSBvYmplY3QsIHRoZSBhY3R1YWwgdmFsdWUgaXNcbiAgLy8gZXF1aXZhbGVudCBpZiBpdCBpcyBhbHNvIGEgRGF0ZSBvYmplY3QgdGhhdCByZWZlcnMgdG8gdGhlIHNhbWUgdGltZS5cbiAgfSBlbHNlIGlmICh1dGlsLmlzRGF0ZShhY3R1YWwpICYmIHV0aWwuaXNEYXRlKGV4cGVjdGVkKSkge1xuICAgIHJldHVybiBhY3R1YWwuZ2V0VGltZSgpID09PSBleHBlY3RlZC5nZXRUaW1lKCk7XG5cbiAgLy8gNy4zIElmIHRoZSBleHBlY3RlZCB2YWx1ZSBpcyBhIFJlZ0V4cCBvYmplY3QsIHRoZSBhY3R1YWwgdmFsdWUgaXNcbiAgLy8gZXF1aXZhbGVudCBpZiBpdCBpcyBhbHNvIGEgUmVnRXhwIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNvdXJjZSBhbmRcbiAgLy8gcHJvcGVydGllcyAoYGdsb2JhbGAsIGBtdWx0aWxpbmVgLCBgbGFzdEluZGV4YCwgYGlnbm9yZUNhc2VgKS5cbiAgfSBlbHNlIGlmICh1dGlsLmlzUmVnRXhwKGFjdHVhbCkgJiYgdXRpbC5pc1JlZ0V4cChleHBlY3RlZCkpIHtcbiAgICByZXR1cm4gYWN0dWFsLnNvdXJjZSA9PT0gZXhwZWN0ZWQuc291cmNlICYmXG4gICAgICAgICAgIGFjdHVhbC5nbG9iYWwgPT09IGV4cGVjdGVkLmdsb2JhbCAmJlxuICAgICAgICAgICBhY3R1YWwubXVsdGlsaW5lID09PSBleHBlY3RlZC5tdWx0aWxpbmUgJiZcbiAgICAgICAgICAgYWN0dWFsLmxhc3RJbmRleCA9PT0gZXhwZWN0ZWQubGFzdEluZGV4ICYmXG4gICAgICAgICAgIGFjdHVhbC5pZ25vcmVDYXNlID09PSBleHBlY3RlZC5pZ25vcmVDYXNlO1xuXG4gIC8vIDcuNC4gT3RoZXIgcGFpcnMgdGhhdCBkbyBub3QgYm90aCBwYXNzIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyxcbiAgLy8gZXF1aXZhbGVuY2UgaXMgZGV0ZXJtaW5lZCBieSA9PS5cbiAgfSBlbHNlIGlmICghdXRpbC5pc09iamVjdChhY3R1YWwpICYmICF1dGlsLmlzT2JqZWN0KGV4cGVjdGVkKSkge1xuICAgIHJldHVybiBhY3R1YWwgPT0gZXhwZWN0ZWQ7XG5cbiAgLy8gNy41IEZvciBhbGwgb3RoZXIgT2JqZWN0IHBhaXJzLCBpbmNsdWRpbmcgQXJyYXkgb2JqZWN0cywgZXF1aXZhbGVuY2UgaXNcbiAgLy8gZGV0ZXJtaW5lZCBieSBoYXZpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMgKGFzIHZlcmlmaWVkXG4gIC8vIHdpdGggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKSwgdGhlIHNhbWUgc2V0IG9mIGtleXNcbiAgLy8gKGFsdGhvdWdoIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBvcmRlciksIGVxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeVxuICAvLyBjb3JyZXNwb25kaW5nIGtleSwgYW5kIGFuIGlkZW50aWNhbCAncHJvdG90eXBlJyBwcm9wZXJ0eS4gTm90ZTogdGhpc1xuICAvLyBhY2NvdW50cyBmb3IgYm90aCBuYW1lZCBhbmQgaW5kZXhlZCBwcm9wZXJ0aWVzIG9uIEFycmF5cy5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gb2JqRXF1aXYoYWN0dWFsLCBleHBlY3RlZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNBcmd1bWVudHMob2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSA9PSAnW29iamVjdCBBcmd1bWVudHNdJztcbn1cblxuZnVuY3Rpb24gb2JqRXF1aXYoYSwgYikge1xuICBpZiAodXRpbC5pc051bGxPclVuZGVmaW5lZChhKSB8fCB1dGlsLmlzTnVsbE9yVW5kZWZpbmVkKGIpKVxuICAgIHJldHVybiBmYWxzZTtcbiAgLy8gYW4gaWRlbnRpY2FsICdwcm90b3R5cGUnIHByb3BlcnR5LlxuICBpZiAoYS5wcm90b3R5cGUgIT09IGIucHJvdG90eXBlKSByZXR1cm4gZmFsc2U7XG4gIC8vIGlmIG9uZSBpcyBhIHByaW1pdGl2ZSwgdGhlIG90aGVyIG11c3QgYmUgc2FtZVxuICBpZiAodXRpbC5pc1ByaW1pdGl2ZShhKSB8fCB1dGlsLmlzUHJpbWl0aXZlKGIpKSB7XG4gICAgcmV0dXJuIGEgPT09IGI7XG4gIH1cbiAgdmFyIGFJc0FyZ3MgPSBpc0FyZ3VtZW50cyhhKSxcbiAgICAgIGJJc0FyZ3MgPSBpc0FyZ3VtZW50cyhiKTtcbiAgaWYgKChhSXNBcmdzICYmICFiSXNBcmdzKSB8fCAoIWFJc0FyZ3MgJiYgYklzQXJncykpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBpZiAoYUlzQXJncykge1xuICAgIGEgPSBwU2xpY2UuY2FsbChhKTtcbiAgICBiID0gcFNsaWNlLmNhbGwoYik7XG4gICAgcmV0dXJuIF9kZWVwRXF1YWwoYSwgYik7XG4gIH1cbiAgdmFyIGthID0gb2JqZWN0S2V5cyhhKSxcbiAgICAgIGtiID0gb2JqZWN0S2V5cyhiKSxcbiAgICAgIGtleSwgaTtcbiAgLy8gaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChrZXlzIGluY29ycG9yYXRlc1xuICAvLyBoYXNPd25Qcm9wZXJ0eSlcbiAgaWYgKGthLmxlbmd0aCAhPSBrYi5sZW5ndGgpXG4gICAgcmV0dXJuIGZhbHNlO1xuICAvL3RoZSBzYW1lIHNldCBvZiBrZXlzIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLFxuICBrYS5zb3J0KCk7XG4gIGtiLnNvcnQoKTtcbiAgLy9+fn5jaGVhcCBrZXkgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChrYVtpXSAhPSBrYltpXSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvL2VxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeSBjb3JyZXNwb25kaW5nIGtleSwgYW5kXG4gIC8vfn5+cG9zc2libHkgZXhwZW5zaXZlIGRlZXAgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGtleSA9IGthW2ldO1xuICAgIGlmICghX2RlZXBFcXVhbChhW2tleV0sIGJba2V5XSkpIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gOC4gVGhlIG5vbi1lcXVpdmFsZW5jZSBhc3NlcnRpb24gdGVzdHMgZm9yIGFueSBkZWVwIGluZXF1YWxpdHkuXG4vLyBhc3NlcnQubm90RGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0Lm5vdERlZXBFcXVhbCA9IGZ1bmN0aW9uIG5vdERlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChfZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQpKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnbm90RGVlcEVxdWFsJywgYXNzZXJ0Lm5vdERlZXBFcXVhbCk7XG4gIH1cbn07XG5cbi8vIDkuIFRoZSBzdHJpY3QgZXF1YWxpdHkgYXNzZXJ0aW9uIHRlc3RzIHN0cmljdCBlcXVhbGl0eSwgYXMgZGV0ZXJtaW5lZCBieSA9PT0uXG4vLyBhc3NlcnQuc3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwgPSBmdW5jdGlvbiBzdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChhY3R1YWwgIT09IGV4cGVjdGVkKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnPT09JywgYXNzZXJ0LnN0cmljdEVxdWFsKTtcbiAgfVxufTtcblxuLy8gMTAuIFRoZSBzdHJpY3Qgbm9uLWVxdWFsaXR5IGFzc2VydGlvbiB0ZXN0cyBmb3Igc3RyaWN0IGluZXF1YWxpdHksIGFzXG4vLyBkZXRlcm1pbmVkIGJ5ICE9PS4gIGFzc2VydC5ub3RTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC5ub3RTdHJpY3RFcXVhbCA9IGZ1bmN0aW9uIG5vdFN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGFjdHVhbCA9PT0gZXhwZWN0ZWQpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICchPT0nLCBhc3NlcnQubm90U3RyaWN0RXF1YWwpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBleHBlY3RlZEV4Y2VwdGlvbihhY3R1YWwsIGV4cGVjdGVkKSB7XG4gIGlmICghYWN0dWFsIHx8ICFleHBlY3RlZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZXhwZWN0ZWQpID09ICdbb2JqZWN0IFJlZ0V4cF0nKSB7XG4gICAgcmV0dXJuIGV4cGVjdGVkLnRlc3QoYWN0dWFsKTtcbiAgfSBlbHNlIGlmIChhY3R1YWwgaW5zdGFuY2VvZiBleHBlY3RlZCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGV4cGVjdGVkLmNhbGwoe30sIGFjdHVhbCkgPT09IHRydWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gX3Rocm93cyhzaG91bGRUaHJvdywgYmxvY2ssIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIHZhciBhY3R1YWw7XG5cbiAgaWYgKHV0aWwuaXNTdHJpbmcoZXhwZWN0ZWQpKSB7XG4gICAgbWVzc2FnZSA9IGV4cGVjdGVkO1xuICAgIGV4cGVjdGVkID0gbnVsbDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYmxvY2soKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGFjdHVhbCA9IGU7XG4gIH1cblxuICBtZXNzYWdlID0gKGV4cGVjdGVkICYmIGV4cGVjdGVkLm5hbWUgPyAnICgnICsgZXhwZWN0ZWQubmFtZSArICcpLicgOiAnLicpICtcbiAgICAgICAgICAgIChtZXNzYWdlID8gJyAnICsgbWVzc2FnZSA6ICcuJyk7XG5cbiAgaWYgKHNob3VsZFRocm93ICYmICFhY3R1YWwpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsICdNaXNzaW5nIGV4cGVjdGVkIGV4Y2VwdGlvbicgKyBtZXNzYWdlKTtcbiAgfVxuXG4gIGlmICghc2hvdWxkVGhyb3cgJiYgZXhwZWN0ZWRFeGNlcHRpb24oYWN0dWFsLCBleHBlY3RlZCkpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsICdHb3QgdW53YW50ZWQgZXhjZXB0aW9uJyArIG1lc3NhZ2UpO1xuICB9XG5cbiAgaWYgKChzaG91bGRUaHJvdyAmJiBhY3R1YWwgJiYgZXhwZWN0ZWQgJiZcbiAgICAgICFleHBlY3RlZEV4Y2VwdGlvbihhY3R1YWwsIGV4cGVjdGVkKSkgfHwgKCFzaG91bGRUaHJvdyAmJiBhY3R1YWwpKSB7XG4gICAgdGhyb3cgYWN0dWFsO1xuICB9XG59XG5cbi8vIDExLiBFeHBlY3RlZCB0byB0aHJvdyBhbiBlcnJvcjpcbi8vIGFzc2VydC50aHJvd3MoYmxvY2ssIEVycm9yX29wdCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQudGhyb3dzID0gZnVuY3Rpb24oYmxvY2ssIC8qb3B0aW9uYWwqL2Vycm9yLCAvKm9wdGlvbmFsKi9tZXNzYWdlKSB7XG4gIF90aHJvd3MuYXBwbHkodGhpcywgW3RydWVdLmNvbmNhdChwU2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG59O1xuXG4vLyBFWFRFTlNJT04hIFRoaXMgaXMgYW5ub3lpbmcgdG8gd3JpdGUgb3V0c2lkZSB0aGlzIG1vZHVsZS5cbmFzc2VydC5kb2VzTm90VGhyb3cgPSBmdW5jdGlvbihibG9jaywgLypvcHRpb25hbCovbWVzc2FnZSkge1xuICBfdGhyb3dzLmFwcGx5KHRoaXMsIFtmYWxzZV0uY29uY2F0KHBTbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbn07XG5cbmFzc2VydC5pZkVycm9yID0gZnVuY3Rpb24oZXJyKSB7IGlmIChlcnIpIHt0aHJvdyBlcnI7fX07XG5cbnZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICB2YXIga2V5cyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGhhc093bi5jYWxsKG9iaiwga2V5KSkga2V5cy5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
