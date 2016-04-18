"use strict";

System.register([], function (_export, _context) {
  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  return {
    setters: [],
    execute: function () {
      module.exports = arrayReduceRight;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19hcnJheVJlZHVjZVJpZ2h0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVlBLFdBQVMsZ0JBQVQsQ0FBMEIsS0FBMUIsRUFBaUMsUUFBakMsRUFBMkMsV0FBM0MsRUFBd0QsU0FBeEQsRUFBbUU7QUFDakUsUUFBSSxTQUFTLE1BQU0sTUFBTixDQURvRDtBQUVqRSxRQUFJLGFBQWEsTUFBYixFQUFxQjtBQUN2QixvQkFBYyxNQUFNLEVBQUUsTUFBRixDQUFwQixDQUR1QjtLQUF6QjtBQUdBLFdBQU8sUUFBUCxFQUFpQjtBQUNmLG9CQUFjLFNBQVMsV0FBVCxFQUFzQixNQUFNLE1BQU4sQ0FBdEIsRUFBcUMsTUFBckMsRUFBNkMsS0FBN0MsQ0FBZCxDQURlO0tBQWpCO0FBR0EsV0FBTyxXQUFQLENBUmlFO0dBQW5FOzs7OztBQVdBLGFBQU8sT0FBUCxHQUFpQixnQkFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2FycmF5UmVkdWNlUmlnaHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5yZWR1Y2VSaWdodGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2FjY3VtdWxhdG9yXSBUaGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luaXRBY2N1bV0gU3BlY2lmeSB1c2luZyB0aGUgbGFzdCBlbGVtZW50IG9mIGBhcnJheWAgYXNcbiAqICB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlSZWR1Y2VSaWdodChhcnJheSwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0pIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgaWYgKGluaXRBY2N1bSAmJiBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGFycmF5Wy0tbGVuZ3RoXTtcbiAgfVxuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBhY2N1bXVsYXRvciA9IGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCBhcnJheVtsZW5ndGhdLCBsZW5ndGgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlSZWR1Y2VSaWdodDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
