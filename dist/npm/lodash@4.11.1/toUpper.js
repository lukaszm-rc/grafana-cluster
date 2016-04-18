'use strict';

System.register([], function (_export, _context) {
  var toString;


  /**
   * Converts `string`, as a whole, to upper case just like
   * [String#toUpperCase](https://mdn.io/toUpperCase).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the upper cased string.
   * @example
   *
   * _.toUpper('--foo-bar--');
   * // => '--FOO-BAR--'
   *
   * _.toUpper('fooBar');
   * // => 'FOOBAR'
   *
   * _.toUpper('__foo_bar__');
   * // => '__FOO_BAR__'
   */
  function toUpper(value) {
    return toString(value).toUpperCase();
  }

  return {
    setters: [],
    execute: function () {
      toString = require('./toString');
      module.exports = toUpper;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3RvVXBwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBLFdBQVMsT0FBVCxDQUFpQixLQUFqQixFQUF3QjtBQUN0QixXQUFPLFNBQVMsS0FBVCxFQUFnQixXQUFoQixFQUFQLENBRHNCO0dBQXhCOzs7OztBQXZCSSxpQkFBVyxRQUFRLFlBQVI7QUEyQmYsYUFBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3RvVXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCwgYXMgYSB3aG9sZSwgdG8gdXBwZXIgY2FzZSBqdXN0IGxpa2VcbiAqIFtTdHJpbmcjdG9VcHBlckNhc2VdKGh0dHBzOi8vbWRuLmlvL3RvVXBwZXJDYXNlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgdXBwZXIgY2FzZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvVXBwZXIoJy0tZm9vLWJhci0tJyk7XG4gKiAvLyA9PiAnLS1GT08tQkFSLS0nXG4gKlxuICogXy50b1VwcGVyKCdmb29CYXInKTtcbiAqIC8vID0+ICdGT09CQVInXG4gKlxuICogXy50b1VwcGVyKCdfX2Zvb19iYXJfXycpO1xuICogLy8gPT4gJ19fRk9PX0JBUl9fJ1xuICovXG5mdW5jdGlvbiB0b1VwcGVyKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0cmluZyh2YWx1ZSkudG9VcHBlckNhc2UoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1VwcGVyO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
