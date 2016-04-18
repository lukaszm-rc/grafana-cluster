"use strict";

System.register([], function (_export, _context) {
  var arrayProto, nativeReverse;


  /**
   * Reverses `array` so that the first element becomes the last, the second
   * element becomes the second to last, and so on.
   *
   * **Note:** This method mutates `array` and is based on
   * [`Array#reverse`](https://mdn.io/Array/reverse).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to modify.
   * @returns {Array} Returns `array`.
   * @example
   *
   * var array = [1, 2, 3];
   *
   * _.reverse(array);
   * // => [3, 2, 1]
   *
   * console.log(array);
   * // => [3, 2, 1]
   */
  function reverse(array) {
    return array ? nativeReverse.call(array) : array;
  }

  return {
    setters: [],
    execute: function () {
      arrayProto = Array.prototype;
      nativeReverse = arrayProto.reverse;
      module.exports = reverse;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3JldmVyc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkEsV0FBUyxPQUFULENBQWlCLEtBQWpCLEVBQXdCO0FBQ3RCLFdBQU8sUUFBUSxjQUFjLElBQWQsQ0FBbUIsS0FBbkIsQ0FBUixHQUFvQyxLQUFwQyxDQURlO0dBQXhCOzs7OztBQTVCSSxtQkFBYSxNQUFNLFNBQU47QUFHYixzQkFBZ0IsV0FBVyxPQUFYO0FBNkJwQixhQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvcmV2ZXJzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlUmV2ZXJzZSA9IGFycmF5UHJvdG8ucmV2ZXJzZTtcblxuLyoqXG4gKiBSZXZlcnNlcyBgYXJyYXlgIHNvIHRoYXQgdGhlIGZpcnN0IGVsZW1lbnQgYmVjb21lcyB0aGUgbGFzdCwgdGhlIHNlY29uZFxuICogZWxlbWVudCBiZWNvbWVzIHRoZSBzZWNvbmQgdG8gbGFzdCwgYW5kIHNvIG9uLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBhcnJheWAgYW5kIGlzIGJhc2VkIG9uXG4gKiBbYEFycmF5I3JldmVyc2VgXShodHRwczovL21kbi5pby9BcnJheS9yZXZlcnNlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5ID0gWzEsIDIsIDNdO1xuICpcbiAqIF8ucmV2ZXJzZShhcnJheSk7XG4gKiAvLyA9PiBbMywgMiwgMV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheSk7XG4gKiAvLyA9PiBbMywgMiwgMV1cbiAqL1xuZnVuY3Rpb24gcmV2ZXJzZShhcnJheSkge1xuICByZXR1cm4gYXJyYXkgPyBuYXRpdmVSZXZlcnNlLmNhbGwoYXJyYXkpIDogYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmV2ZXJzZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
