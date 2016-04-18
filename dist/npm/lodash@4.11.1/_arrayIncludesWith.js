"use strict";

System.register([], function (_export, _context) {
  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  return {
    setters: [],
    execute: function () {
      module.exports = arrayIncludesWith;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19hcnJheUluY2x1ZGVzV2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFTQSxXQUFTLGlCQUFULENBQTJCLEtBQTNCLEVBQWtDLEtBQWxDLEVBQXlDLFVBQXpDLEVBQXFEO0FBQ25ELFFBQUksUUFBUSxDQUFDLENBQUQ7UUFDUixTQUFTLE1BQU0sTUFBTixDQUZzQzs7QUFJbkQsV0FBTyxFQUFFLEtBQUYsR0FBVSxNQUFWLEVBQWtCO0FBQ3ZCLFVBQUksV0FBVyxLQUFYLEVBQWtCLE1BQU0sS0FBTixDQUFsQixDQUFKLEVBQXFDO0FBQ25DLGVBQU8sSUFBUCxDQURtQztPQUFyQztLQURGO0FBS0EsV0FBTyxLQUFQLENBVG1EO0dBQXJEOzs7OztBQVlBLGFBQU8sT0FBUCxHQUFpQixpQkFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGFycmF5SW5jbHVkZXNgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYSBjb21wYXJhdG9yLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2VhcmNoLlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJhdG9yIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlc1dpdGgoYXJyYXksIHZhbHVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGNvbXBhcmF0b3IodmFsdWUsIGFycmF5W2luZGV4XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
