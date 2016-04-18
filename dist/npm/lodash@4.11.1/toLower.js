'use strict';

System.register([], function (_export, _context) {
  var toString;


  /**
   * Converts `string`, as a whole, to lower case just like
   * [String#toLowerCase](https://mdn.io/toLowerCase).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the lower cased string.
   * @example
   *
   * _.toLower('--Foo-Bar--');
   * // => '--foo-bar--'
   *
   * _.toLower('fooBar');
   * // => 'foobar'
   *
   * _.toLower('__FOO_BAR__');
   * // => '__foo_bar__'
   */
  function toLower(value) {
    return toString(value).toLowerCase();
  }

  return {
    setters: [],
    execute: function () {
      toString = require('./toString');
      module.exports = toLower;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3RvTG93ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBLFdBQVMsT0FBVCxDQUFpQixLQUFqQixFQUF3QjtBQUN0QixXQUFPLFNBQVMsS0FBVCxFQUFnQixXQUFoQixFQUFQLENBRHNCO0dBQXhCOzs7OztBQXZCSSxpQkFBVyxRQUFRLFlBQVI7QUEyQmYsYUFBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3RvTG93ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCwgYXMgYSB3aG9sZSwgdG8gbG93ZXIgY2FzZSBqdXN0IGxpa2VcbiAqIFtTdHJpbmcjdG9Mb3dlckNhc2VdKGh0dHBzOi8vbWRuLmlvL3RvTG93ZXJDYXNlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgbG93ZXIgY2FzZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTG93ZXIoJy0tRm9vLUJhci0tJyk7XG4gKiAvLyA9PiAnLS1mb28tYmFyLS0nXG4gKlxuICogXy50b0xvd2VyKCdmb29CYXInKTtcbiAqIC8vID0+ICdmb29iYXInXG4gKlxuICogXy50b0xvd2VyKCdfX0ZPT19CQVJfXycpO1xuICogLy8gPT4gJ19fZm9vX2Jhcl9fJ1xuICovXG5mdW5jdGlvbiB0b0xvd2VyKHZhbHVlKSB7XG4gIHJldHVybiB0b1N0cmluZyh2YWx1ZSkudG9Mb3dlckNhc2UoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b0xvd2VyO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
