"use strict";

System.register([], function (_export, _context) {
  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseFor(fromRight) {
    return function (object, iteratee, keysFunc) {
      var index = -1,
          iterable = Object(object),
          props = keysFunc(object),
          length = props.length;

      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }

  return {
    setters: [],
    execute: function () {
      module.exports = createBaseFor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jcmVhdGVCYXNlRm9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxXQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0M7QUFDaEMsV0FBTyxVQUFTLE1BQVQsRUFBaUIsUUFBakIsRUFBMkIsUUFBM0IsRUFBcUM7QUFDMUMsVUFBSSxRQUFRLENBQUMsQ0FBRDtVQUNSLFdBQVcsT0FBTyxNQUFQLENBQVg7VUFDQSxRQUFRLFNBQVMsTUFBVCxDQUFSO1VBQ0EsU0FBUyxNQUFNLE1BQU4sQ0FKNkI7O0FBTTFDLGFBQU8sUUFBUCxFQUFpQjtBQUNmLFlBQUksTUFBTSxNQUFNLFlBQVksTUFBWixHQUFxQixFQUFFLEtBQUYsQ0FBakMsQ0FEVztBQUVmLFlBQUksU0FBUyxTQUFTLEdBQVQsQ0FBVCxFQUF3QixHQUF4QixFQUE2QixRQUE3QixNQUEyQyxLQUEzQyxFQUFrRDtBQUNwRCxnQkFEb0Q7U0FBdEQ7T0FGRjtBQU1BLGFBQU8sTUFBUCxDQVowQztLQUFyQyxDQUR5QjtHQUFsQzs7Ozs7QUFpQkEsYUFBTyxPQUFQLEdBQWlCLGFBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19jcmVhdGVCYXNlRm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVzIGEgYmFzZSBmdW5jdGlvbiBmb3IgbWV0aG9kcyBsaWtlIGBfLmZvckluYCBhbmQgYF8uZm9yT3duYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRm9yKGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0LCBpdGVyYXRlZSwga2V5c0Z1bmMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgaXRlcmFibGUgPSBPYmplY3Qob2JqZWN0KSxcbiAgICAgICAgcHJvcHMgPSBrZXlzRnVuYyhvYmplY3QpLFxuICAgICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wc1tmcm9tUmlnaHQgPyBsZW5ndGggOiArK2luZGV4XTtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtrZXldLCBrZXksIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQmFzZUZvcjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
