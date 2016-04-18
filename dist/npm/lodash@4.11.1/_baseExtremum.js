"use strict";

System.register([], function (_export, _context) {
  /**
   * The base implementation of methods like `_.max` and `_.min` which accepts a
   * `comparator` to determine the extremum value.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The iteratee invoked per iteration.
   * @param {Function} comparator The comparator used to compare values.
   * @returns {*} Returns the extremum value.
   */
  function baseExtremum(array, iteratee, comparator) {
    var index = -1,
        length = array.length;

    while (++index < length) {
      var value = array[index],
          current = iteratee(value);

      if (current != null && (computed === undefined ? current === current : comparator(current, computed))) {
        var computed = current,
            result = value;
      }
    }
    return result;
  }

  return {
    setters: [],
    execute: function () {
      module.exports = baseExtremum;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlRXh0cmVtdW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVVBLFdBQVMsWUFBVCxDQUFzQixLQUF0QixFQUE2QixRQUE3QixFQUF1QyxVQUF2QyxFQUFtRDtBQUNqRCxRQUFJLFFBQVEsQ0FBQyxDQUFEO1FBQ1IsU0FBUyxNQUFNLE1BQU4sQ0FGb0M7O0FBSWpELFdBQU8sRUFBRSxLQUFGLEdBQVUsTUFBVixFQUFrQjtBQUN2QixVQUFJLFFBQVEsTUFBTSxLQUFOLENBQVI7VUFDQSxVQUFVLFNBQVMsS0FBVCxDQUFWLENBRm1COztBQUl2QixVQUFJLFdBQVcsSUFBWCxLQUFvQixhQUFhLFNBQWIsR0FDaEIsWUFBWSxPQUFaLEdBQ0EsV0FBVyxPQUFYLEVBQW9CLFFBQXBCLENBRmdCLENBQXBCLEVBR0c7QUFDTCxZQUFJLFdBQVcsT0FBWDtZQUNBLFNBQVMsS0FBVCxDQUZDO09BSFA7S0FKRjtBQVlBLFdBQU8sTUFBUCxDQWhCaUQ7R0FBbkQ7Ozs7O0FBbUJBLGFBQU8sT0FBUCxHQUFpQixZQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fYmFzZUV4dHJlbXVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBtZXRob2RzIGxpa2UgYF8ubWF4YCBhbmQgYF8ubWluYCB3aGljaCBhY2NlcHRzIGFcbiAqIGBjb21wYXJhdG9yYCB0byBkZXRlcm1pbmUgdGhlIGV4dHJlbXVtIHZhbHVlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmF0b3IgVGhlIGNvbXBhcmF0b3IgdXNlZCB0byBjb21wYXJlIHZhbHVlcy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBleHRyZW11bSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUV4dHJlbXVtKGFycmF5LCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgY3VycmVudCA9IGl0ZXJhdGVlKHZhbHVlKTtcblxuICAgIGlmIChjdXJyZW50ICE9IG51bGwgJiYgKGNvbXB1dGVkID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IGN1cnJlbnQgPT09IGN1cnJlbnRcbiAgICAgICAgICA6IGNvbXBhcmF0b3IoY3VycmVudCwgY29tcHV0ZWQpXG4gICAgICAgICkpIHtcbiAgICAgIHZhciBjb21wdXRlZCA9IGN1cnJlbnQsXG4gICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUV4dHJlbXVtO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
