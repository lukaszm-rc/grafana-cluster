"use strict";

System.register([], function (_export, _context) {
  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  return {
    setters: [],
    execute: function () {
      module.exports = arrayAggregator;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19hcnJheUFnZ3JlZ2F0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVVBLFdBQVMsZUFBVCxDQUF5QixLQUF6QixFQUFnQyxNQUFoQyxFQUF3QyxRQUF4QyxFQUFrRCxXQUFsRCxFQUErRDtBQUM3RCxRQUFJLFFBQVEsQ0FBQyxDQUFEO1FBQ1IsU0FBUyxNQUFNLE1BQU4sQ0FGZ0Q7O0FBSTdELFdBQU8sRUFBRSxLQUFGLEdBQVUsTUFBVixFQUFrQjtBQUN2QixVQUFJLFFBQVEsTUFBTSxLQUFOLENBQVIsQ0FEbUI7QUFFdkIsYUFBTyxXQUFQLEVBQW9CLEtBQXBCLEVBQTJCLFNBQVMsS0FBVCxDQUEzQixFQUE0QyxLQUE1QyxFQUZ1QjtLQUF6QjtBQUlBLFdBQU8sV0FBUCxDQVI2RDtHQUEvRDs7Ozs7QUFXQSxhQUFPLE9BQVAsR0FBaUIsZUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2FycmF5QWdncmVnYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlQWdncmVnYXRvcmAgZm9yIGFycmF5cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNldHRlciBUaGUgZnVuY3Rpb24gdG8gc2V0IGBhY2N1bXVsYXRvcmAgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGl0ZXJhdGVlIHRvIHRyYW5zZm9ybSBrZXlzLlxuICogQHBhcmFtIHtPYmplY3R9IGFjY3VtdWxhdG9yIFRoZSBpbml0aWFsIGFnZ3JlZ2F0ZWQgb2JqZWN0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBhY2N1bXVsYXRvcmAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5QWdncmVnYXRvcihhcnJheSwgc2V0dGVyLCBpdGVyYXRlZSwgYWNjdW11bGF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgc2V0dGVyKGFjY3VtdWxhdG9yLCB2YWx1ZSwgaXRlcmF0ZWUodmFsdWUpLCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5QWdncmVnYXRvcjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
