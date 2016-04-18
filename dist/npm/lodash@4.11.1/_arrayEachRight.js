"use strict";

System.register([], function (_export, _context) {
  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  return {
    setters: [],
    execute: function () {
      module.exports = arrayEachRight;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19hcnJheUVhY2hSaWdodC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFTQSxXQUFTLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0IsUUFBL0IsRUFBeUM7QUFDdkMsUUFBSSxTQUFTLE1BQU0sTUFBTixDQUQwQjs7QUFHdkMsV0FBTyxRQUFQLEVBQWlCO0FBQ2YsVUFBSSxTQUFTLE1BQU0sTUFBTixDQUFULEVBQXdCLE1BQXhCLEVBQWdDLEtBQWhDLE1BQTJDLEtBQTNDLEVBQWtEO0FBQ3BELGNBRG9EO09BQXREO0tBREY7QUFLQSxXQUFPLEtBQVAsQ0FSdUM7R0FBekM7Ozs7O0FBV0EsYUFBTyxPQUFQLEdBQWlCLGNBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19hcnJheUVhY2hSaWdodC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hSaWdodGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2hSaWdodChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbbGVuZ3RoXSwgbGVuZ3RoLCBhcnJheSkgPT09IGZhbHNlKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RWFjaFJpZ2h0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
