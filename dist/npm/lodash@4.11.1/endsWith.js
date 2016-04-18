'use strict';

System.register([], function (_export, _context) {
  var baseClamp, toInteger, toString;


  /**
   * Checks if `string` ends with the given target string.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to search.
   * @param {string} [target] The string to search for.
   * @param {number} [position=string.length] The position to search from.
   * @returns {boolean} Returns `true` if `string` ends with `target`,
   *  else `false`.
   * @example
   *
   * _.endsWith('abc', 'c');
   * // => true
   *
   * _.endsWith('abc', 'b');
   * // => false
   *
   * _.endsWith('abc', 'b', 2);
   * // => true
   */
  function endsWith(string, target, position) {
    string = toString(string);
    target = typeof target == 'string' ? target : target + '';

    var length = string.length;
    position = position === undefined ? length : baseClamp(toInteger(position), 0, length);

    position -= target.length;
    return position >= 0 && string.indexOf(target, position) == position;
  }

  return {
    setters: [],
    execute: function () {
      baseClamp = require('./_baseClamp');
      toInteger = require('./toInteger');
      toString = require('./toString');
      module.exports = endsWith;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2VuZHNXaXRoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBLFdBQVMsUUFBVCxDQUFrQixNQUFsQixFQUEwQixNQUExQixFQUFrQyxRQUFsQyxFQUE0QztBQUMxQyxhQUFTLFNBQVMsTUFBVCxDQUFULENBRDBDO0FBRTFDLGFBQVMsT0FBTyxNQUFQLElBQWlCLFFBQWpCLEdBQTRCLE1BQTVCLEdBQXNDLFNBQVMsRUFBVCxDQUZMOztBQUkxQyxRQUFJLFNBQVMsT0FBTyxNQUFQLENBSjZCO0FBSzFDLGVBQVcsYUFBYSxTQUFiLEdBQ1AsTUFETyxHQUVQLFVBQVUsVUFBVSxRQUFWLENBQVYsRUFBK0IsQ0FBL0IsRUFBa0MsTUFBbEMsQ0FGTyxDQUwrQjs7QUFTMUMsZ0JBQVksT0FBTyxNQUFQLENBVDhCO0FBVTFDLFdBQU8sWUFBWSxDQUFaLElBQWlCLE9BQU8sT0FBUCxDQUFlLE1BQWYsRUFBdUIsUUFBdkIsS0FBb0MsUUFBcEMsQ0FWa0I7R0FBNUM7Ozs7O0FBM0JJLGtCQUFZLFFBQVEsY0FBUjtBQUNaLGtCQUFZLFFBQVEsYUFBUjtBQUNaLGlCQUFXLFFBQVEsWUFBUjtBQXNDZixhQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvZW5kc1dpdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlQ2xhbXAgPSByZXF1aXJlKCcuL19iYXNlQ2xhbXAnKSxcbiAgICB0b0ludGVnZXIgPSByZXF1aXJlKCcuL3RvSW50ZWdlcicpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgc3RyaW5nYCBlbmRzIHdpdGggdGhlIGdpdmVuIHRhcmdldCBzdHJpbmcuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gc2VhcmNoLlxuICogQHBhcmFtIHtzdHJpbmd9IFt0YXJnZXRdIFRoZSBzdHJpbmcgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbcG9zaXRpb249c3RyaW5nLmxlbmd0aF0gVGhlIHBvc2l0aW9uIHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBzdHJpbmdgIGVuZHMgd2l0aCBgdGFyZ2V0YCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZW5kc1dpdGgoJ2FiYycsICdjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lbmRzV2l0aCgnYWJjJywgJ2InKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lbmRzV2l0aCgnYWJjJywgJ2InLCAyKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZW5kc1dpdGgoc3RyaW5nLCB0YXJnZXQsIHBvc2l0aW9uKSB7XG4gIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gIHRhcmdldCA9IHR5cGVvZiB0YXJnZXQgPT0gJ3N0cmluZycgPyB0YXJnZXQgOiAodGFyZ2V0ICsgJycpO1xuXG4gIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuICBwb3NpdGlvbiA9IHBvc2l0aW9uID09PSB1bmRlZmluZWRcbiAgICA/IGxlbmd0aFxuICAgIDogYmFzZUNsYW1wKHRvSW50ZWdlcihwb3NpdGlvbiksIDAsIGxlbmd0aCk7XG5cbiAgcG9zaXRpb24gLT0gdGFyZ2V0Lmxlbmd0aDtcbiAgcmV0dXJuIHBvc2l0aW9uID49IDAgJiYgc3RyaW5nLmluZGV4T2YodGFyZ2V0LCBwb3NpdGlvbikgPT0gcG9zaXRpb247XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZW5kc1dpdGg7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
