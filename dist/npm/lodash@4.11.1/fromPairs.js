"use strict";

System.register([], function (_export, _context) {
  /**
   * The inverse of `_.toPairs`; this method returns an object composed
   * from key-value `pairs`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} pairs The key-value pairs.
   * @returns {Object} Returns the new object.
   * @example
   *
   * _.fromPairs([['fred', 30], ['barney', 40]]);
   * // => { 'fred': 30, 'barney': 40 }
   */
  function fromPairs(pairs) {
    var index = -1,
        length = pairs ? pairs.length : 0,
        result = {};

    while (++index < length) {
      var pair = pairs[index];
      result[pair[0]] = pair[1];
    }
    return result;
  }

  return {
    setters: [],
    execute: function () {
      module.exports = fromPairs;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2Zyb21QYWlycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSxXQUFTLFNBQVQsQ0FBbUIsS0FBbkIsRUFBMEI7QUFDeEIsUUFBSSxRQUFRLENBQUMsQ0FBRDtRQUNSLFNBQVMsUUFBUSxNQUFNLE1BQU4sR0FBZSxDQUF2QjtRQUNULFNBQVMsRUFBVCxDQUhvQjs7QUFLeEIsV0FBTyxFQUFFLEtBQUYsR0FBVSxNQUFWLEVBQWtCO0FBQ3ZCLFVBQUksT0FBTyxNQUFNLEtBQU4sQ0FBUCxDQURtQjtBQUV2QixhQUFPLEtBQUssQ0FBTCxDQUFQLElBQWtCLEtBQUssQ0FBTCxDQUFsQixDQUZ1QjtLQUF6QjtBQUlBLFdBQU8sTUFBUCxDQVR3QjtHQUExQjs7Ozs7QUFZQSxhQUFPLE9BQVAsR0FBaUIsU0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvZnJvbVBhaXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGUgaW52ZXJzZSBvZiBgXy50b1BhaXJzYDsgdGhpcyBtZXRob2QgcmV0dXJucyBhbiBvYmplY3QgY29tcG9zZWRcbiAqIGZyb20ga2V5LXZhbHVlIGBwYWlyc2AuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBwYWlycyBUaGUga2V5LXZhbHVlIHBhaXJzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5mcm9tUGFpcnMoW1snZnJlZCcsIDMwXSwgWydiYXJuZXknLCA0MF1dKTtcbiAqIC8vID0+IHsgJ2ZyZWQnOiAzMCwgJ2Jhcm5leSc6IDQwIH1cbiAqL1xuZnVuY3Rpb24gZnJvbVBhaXJzKHBhaXJzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcGFpcnMgPyBwYWlycy5sZW5ndGggOiAwLFxuICAgICAgcmVzdWx0ID0ge307XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgcGFpciA9IHBhaXJzW2luZGV4XTtcbiAgICByZXN1bHRbcGFpclswXV0gPSBwYWlyWzFdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnJvbVBhaXJzO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
