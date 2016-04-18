"use strict";

System.register([], function (_export, _context) {
  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        result++;
      }
    }
    return result;
  }

  return {
    setters: [],
    execute: function () {
      module.exports = countHolders;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jb3VudEhvbGRlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxXQUFTLFlBQVQsQ0FBc0IsS0FBdEIsRUFBNkIsV0FBN0IsRUFBMEM7QUFDeEMsUUFBSSxTQUFTLE1BQU0sTUFBTjtRQUNULFNBQVMsQ0FBVCxDQUZvQzs7QUFJeEMsV0FBTyxRQUFQLEVBQWlCO0FBQ2YsVUFBSSxNQUFNLE1BQU4sTUFBa0IsV0FBbEIsRUFBK0I7QUFDakMsaUJBRGlDO09BQW5DO0tBREY7QUFLQSxXQUFPLE1BQVAsQ0FUd0M7R0FBMUM7Ozs7O0FBWUEsYUFBTyxPQUFQLEdBQWlCLFlBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19jb3VudEhvbGRlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEdldHMgdGhlIG51bWJlciBvZiBgcGxhY2Vob2xkZXJgIG9jY3VycmVuY2VzIGluIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBwbGFjZWhvbGRlciBUaGUgcGxhY2Vob2xkZXIgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHBsYWNlaG9sZGVyIGNvdW50LlxuICovXG5mdW5jdGlvbiBjb3VudEhvbGRlcnMoYXJyYXksIHBsYWNlaG9sZGVyKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSAwO1xuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChhcnJheVtsZW5ndGhdID09PSBwbGFjZWhvbGRlcikge1xuICAgICAgcmVzdWx0Kys7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY291bnRIb2xkZXJzO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
