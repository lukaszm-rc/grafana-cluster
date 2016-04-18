"use strict";

System.register([], function (_export, _context) {
  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  return {
    setters: [],
    execute: function () {
      module.exports = arrayEvery;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19hcnJheUV2ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFVQSxXQUFTLFVBQVQsQ0FBb0IsS0FBcEIsRUFBMkIsU0FBM0IsRUFBc0M7QUFDcEMsUUFBSSxRQUFRLENBQUMsQ0FBRDtRQUNSLFNBQVMsTUFBTSxNQUFOLENBRnVCOztBQUlwQyxXQUFPLEVBQUUsS0FBRixHQUFVLE1BQVYsRUFBa0I7QUFDdkIsVUFBSSxDQUFDLFVBQVUsTUFBTSxLQUFOLENBQVYsRUFBd0IsS0FBeEIsRUFBK0IsS0FBL0IsQ0FBRCxFQUF3QztBQUMxQyxlQUFPLEtBQVAsQ0FEMEM7T0FBNUM7S0FERjtBQUtBLFdBQU8sSUFBUCxDQVRvQztHQUF0Qzs7Ozs7QUFZQSxhQUFPLE9BQVAsR0FBaUIsVUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2FycmF5RXZlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5ldmVyeWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYWxsIGVsZW1lbnRzIHBhc3MgdGhlIHByZWRpY2F0ZSBjaGVjayxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RXZlcnkoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmICghcHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUV2ZXJ5O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
