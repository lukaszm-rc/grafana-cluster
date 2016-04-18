"use strict";

System.register([], function (_export, _context) {
  /**
   * This method is like `_.tap` except that it returns the result of `interceptor`.
   * The purpose of this method is to "pass thru" values replacing intermediate
   * results in a method chain sequence.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Seq
   * @param {*} value The value to provide to `interceptor`.
   * @param {Function} interceptor The function to invoke.
   * @returns {*} Returns the result of `interceptor`.
   * @example
   *
   * _('  abc  ')
   *  .chain()
   *  .trim()
   *  .thru(function(value) {
   *    return [value];
   *  })
   *  .value();
   * // => ['abc']
   */
  function thru(value, interceptor) {
    return interceptor(value);
  }

  return {
    setters: [],
    execute: function () {
      module.exports = thru;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3RocnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkEsV0FBUyxJQUFULENBQWMsS0FBZCxFQUFxQixXQUFyQixFQUFrQztBQUNoQyxXQUFPLFlBQVksS0FBWixDQUFQLENBRGdDO0dBQWxDOzs7OztBQUlBLGFBQU8sT0FBUCxHQUFpQixJQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS90aHJ1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLnRhcGAgZXhjZXB0IHRoYXQgaXQgcmV0dXJucyB0aGUgcmVzdWx0IG9mIGBpbnRlcmNlcHRvcmAuXG4gKiBUaGUgcHVycG9zZSBvZiB0aGlzIG1ldGhvZCBpcyB0byBcInBhc3MgdGhydVwiIHZhbHVlcyByZXBsYWNpbmcgaW50ZXJtZWRpYXRlXG4gKiByZXN1bHRzIGluIGEgbWV0aG9kIGNoYWluIHNlcXVlbmNlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBTZXFcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb3ZpZGUgdG8gYGludGVyY2VwdG9yYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGludGVyY2VwdG9yIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBpbnRlcmNlcHRvcmAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8oJyAgYWJjICAnKVxuICogIC5jaGFpbigpXG4gKiAgLnRyaW0oKVxuICogIC50aHJ1KGZ1bmN0aW9uKHZhbHVlKSB7XG4gKiAgICByZXR1cm4gW3ZhbHVlXTtcbiAqICB9KVxuICogIC52YWx1ZSgpO1xuICogLy8gPT4gWydhYmMnXVxuICovXG5mdW5jdGlvbiB0aHJ1KHZhbHVlLCBpbnRlcmNlcHRvcikge1xuICByZXR1cm4gaW50ZXJjZXB0b3IodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRocnU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
