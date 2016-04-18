"use strict";

System.register([], function (_export, _context) {
  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  return {
    setters: [],
    execute: function () {
      module.exports = baseSortBy;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlU29ydEJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFVQSxXQUFTLFVBQVQsQ0FBb0IsS0FBcEIsRUFBMkIsUUFBM0IsRUFBcUM7QUFDbkMsUUFBSSxTQUFTLE1BQU0sTUFBTixDQURzQjs7QUFHbkMsVUFBTSxJQUFOLENBQVcsUUFBWCxFQUhtQztBQUluQyxXQUFPLFFBQVAsRUFBaUI7QUFDZixZQUFNLE1BQU4sSUFBZ0IsTUFBTSxNQUFOLEVBQWMsS0FBZCxDQUREO0tBQWpCO0FBR0EsV0FBTyxLQUFQLENBUG1DO0dBQXJDOzs7OztBQVVBLGFBQU8sT0FBUCxHQUFpQixVQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fYmFzZVNvcnRCeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uc29ydEJ5YCB3aGljaCB1c2VzIGBjb21wYXJlcmAgdG8gZGVmaW5lIHRoZVxuICogc29ydCBvcmRlciBvZiBgYXJyYXlgIGFuZCByZXBsYWNlcyBjcml0ZXJpYSBvYmplY3RzIHdpdGggdGhlaXIgY29ycmVzcG9uZGluZ1xuICogdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc29ydC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmVyIFRoZSBmdW5jdGlvbiB0byBkZWZpbmUgc29ydCBvcmRlci5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBiYXNlU29ydEJ5KGFycmF5LCBjb21wYXJlcikge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGFycmF5LnNvcnQoY29tcGFyZXIpO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBhcnJheVtsZW5ndGhdID0gYXJyYXlbbGVuZ3RoXS52YWx1ZTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNvcnRCeTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
