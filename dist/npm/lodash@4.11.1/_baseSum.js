"use strict";

System.register([], function (_export, _context) {
  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : result + current;
      }
    }
    return result;
  }

  return {
    setters: [],
    execute: function () {
      module.exports = baseSum;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlU3VtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVNBLFdBQVMsT0FBVCxDQUFpQixLQUFqQixFQUF3QixRQUF4QixFQUFrQztBQUNoQyxRQUFJLE1BQUo7UUFDSSxRQUFRLENBQUMsQ0FBRDtRQUNSLFNBQVMsTUFBTSxNQUFOLENBSG1COztBQUtoQyxXQUFPLEVBQUUsS0FBRixHQUFVLE1BQVYsRUFBa0I7QUFDdkIsVUFBSSxVQUFVLFNBQVMsTUFBTSxLQUFOLENBQVQsQ0FBVixDQURtQjtBQUV2QixVQUFJLFlBQVksU0FBWixFQUF1QjtBQUN6QixpQkFBUyxXQUFXLFNBQVgsR0FBdUIsT0FBdkIsR0FBa0MsU0FBUyxPQUFULENBRGxCO09BQTNCO0tBRkY7QUFNQSxXQUFPLE1BQVAsQ0FYZ0M7R0FBbEM7Ozs7O0FBY0EsYUFBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19iYXNlU3VtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5zdW1gIGFuZCBgXy5zdW1CeWAgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBzdW0uXG4gKi9cbmZ1bmN0aW9uIGJhc2VTdW0oYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciByZXN1bHQsXG4gICAgICBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBpdGVyYXRlZShhcnJheVtpbmRleF0pO1xuICAgIGlmIChjdXJyZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gY3VycmVudCA6IChyZXN1bHQgKyBjdXJyZW50KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU3VtO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
