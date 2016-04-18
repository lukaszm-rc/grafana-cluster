"use strict";

System.register([], function (_export, _context) {
  /**
   * This method invokes `interceptor` and returns `value`. The interceptor
   * is invoked with one argument; (value). The purpose of this method is to
   * "tap into" a method chain sequence in order to modify intermediate results.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Seq
   * @param {*} value The value to provide to `interceptor`.
   * @param {Function} interceptor The function to invoke.
   * @returns {*} Returns `value`.
   * @example
   *
   * _([1, 2, 3])
   *  .tap(function(array) {
   *    // Mutate input array.
   *    array.pop();
   *  })
   *  .reverse()
   *  .value();
   * // => [2, 1]
   */
  function tap(value, interceptor) {
    interceptor(value);
    return value;
  }

  return {
    setters: [],
    execute: function () {
      module.exports = tap;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3RhcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQSxXQUFTLEdBQVQsQ0FBYSxLQUFiLEVBQW9CLFdBQXBCLEVBQWlDO0FBQy9CLGdCQUFZLEtBQVosRUFEK0I7QUFFL0IsV0FBTyxLQUFQLENBRitCO0dBQWpDOzs7OztBQUtBLGFBQU8sT0FBUCxHQUFpQixHQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS90YXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgbWV0aG9kIGludm9rZXMgYGludGVyY2VwdG9yYCBhbmQgcmV0dXJucyBgdmFsdWVgLiBUaGUgaW50ZXJjZXB0b3JcbiAqIGlzIGludm9rZWQgd2l0aCBvbmUgYXJndW1lbnQ7ICh2YWx1ZSkuIFRoZSBwdXJwb3NlIG9mIHRoaXMgbWV0aG9kIGlzIHRvXG4gKiBcInRhcCBpbnRvXCIgYSBtZXRob2QgY2hhaW4gc2VxdWVuY2UgaW4gb3JkZXIgdG8gbW9kaWZ5IGludGVybWVkaWF0ZSByZXN1bHRzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBTZXFcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb3ZpZGUgdG8gYGludGVyY2VwdG9yYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGludGVyY2VwdG9yIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfKFsxLCAyLCAzXSlcbiAqICAudGFwKGZ1bmN0aW9uKGFycmF5KSB7XG4gKiAgICAvLyBNdXRhdGUgaW5wdXQgYXJyYXkuXG4gKiAgICBhcnJheS5wb3AoKTtcbiAqICB9KVxuICogIC5yZXZlcnNlKClcbiAqICAudmFsdWUoKTtcbiAqIC8vID0+IFsyLCAxXVxuICovXG5mdW5jdGlvbiB0YXAodmFsdWUsIGludGVyY2VwdG9yKSB7XG4gIGludGVyY2VwdG9yKHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRhcDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
