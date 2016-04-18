'use strict';

System.register([], function (_export, _context) {
  var baseClamp, toInteger, toString;


  /**
   * Checks if `string` starts with the given target string.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to search.
   * @param {string} [target] The string to search for.
   * @param {number} [position=0] The position to search from.
   * @returns {boolean} Returns `true` if `string` starts with `target`,
   *  else `false`.
   * @example
   *
   * _.startsWith('abc', 'a');
   * // => true
   *
   * _.startsWith('abc', 'b');
   * // => false
   *
   * _.startsWith('abc', 'b', 1);
   * // => true
   */
  function startsWith(string, target, position) {
    string = toString(string);
    position = baseClamp(toInteger(position), 0, string.length);
    return string.lastIndexOf(target, position) == position;
  }

  return {
    setters: [],
    execute: function () {
      baseClamp = require('./_baseClamp');
      toInteger = require('./toInteger');
      toString = require('./toString');
      module.exports = startsWith;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3N0YXJ0c1dpdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QkEsV0FBUyxVQUFULENBQW9CLE1BQXBCLEVBQTRCLE1BQTVCLEVBQW9DLFFBQXBDLEVBQThDO0FBQzVDLGFBQVMsU0FBUyxNQUFULENBQVQsQ0FENEM7QUFFNUMsZUFBVyxVQUFVLFVBQVUsUUFBVixDQUFWLEVBQStCLENBQS9CLEVBQWtDLE9BQU8sTUFBUCxDQUE3QyxDQUY0QztBQUc1QyxXQUFPLE9BQU8sV0FBUCxDQUFtQixNQUFuQixFQUEyQixRQUEzQixLQUF3QyxRQUF4QyxDQUhxQztHQUE5Qzs7Ozs7QUEzQkksa0JBQVksUUFBUSxjQUFSO0FBQ1osa0JBQVksUUFBUSxhQUFSO0FBQ1osaUJBQVcsUUFBUSxZQUFSO0FBK0JmLGFBQU8sT0FBUCxHQUFpQixVQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9zdGFydHNXaXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUNsYW1wID0gcmVxdWlyZSgnLi9fYmFzZUNsYW1wJyksXG4gICAgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi90b0ludGVnZXInKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHN0cmluZ2Agc3RhcnRzIHdpdGggdGhlIGdpdmVuIHRhcmdldCBzdHJpbmcuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gc2VhcmNoLlxuICogQHBhcmFtIHtzdHJpbmd9IFt0YXJnZXRdIFRoZSBzdHJpbmcgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbcG9zaXRpb249MF0gVGhlIHBvc2l0aW9uIHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBzdHJpbmdgIHN0YXJ0cyB3aXRoIGB0YXJnZXRgLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5zdGFydHNXaXRoKCdhYmMnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uc3RhcnRzV2l0aCgnYWJjJywgJ2InKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5zdGFydHNXaXRoKCdhYmMnLCAnYicsIDEpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBzdGFydHNXaXRoKHN0cmluZywgdGFyZ2V0LCBwb3NpdGlvbikge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuICBwb3NpdGlvbiA9IGJhc2VDbGFtcCh0b0ludGVnZXIocG9zaXRpb24pLCAwLCBzdHJpbmcubGVuZ3RoKTtcbiAgcmV0dXJuIHN0cmluZy5sYXN0SW5kZXhPZih0YXJnZXQsIHBvc2l0aW9uKSA9PSBwb3NpdGlvbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFydHNXaXRoO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
