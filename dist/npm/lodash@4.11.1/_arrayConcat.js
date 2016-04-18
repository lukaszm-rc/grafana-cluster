"use strict";

System.register([], function (_export, _context) {
  /**
   * Creates a new array concatenating `array` with `other`.
   *
   * @private
   * @param {Array} array The first array to concatenate.
   * @param {Array} other The second array to concatenate.
   * @returns {Array} Returns the new concatenated array.
   */
  function arrayConcat(array, other) {
    var index = -1,
        length = array.length,
        othIndex = -1,
        othLength = other.length,
        result = Array(length + othLength);

    while (++index < length) {
      result[index] = array[index];
    }
    while (++othIndex < othLength) {
      result[index++] = other[othIndex];
    }
    return result;
  }

  return {
    setters: [],
    execute: function () {
      module.exports = arrayConcat;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19hcnJheUNvbmNhdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLFdBQVMsV0FBVCxDQUFxQixLQUFyQixFQUE0QixLQUE1QixFQUFtQztBQUNqQyxRQUFJLFFBQVEsQ0FBQyxDQUFEO1FBQ1IsU0FBUyxNQUFNLE1BQU47UUFDVCxXQUFXLENBQUMsQ0FBRDtRQUNYLFlBQVksTUFBTSxNQUFOO1FBQ1osU0FBUyxNQUFNLFNBQVMsU0FBVCxDQUFmLENBTDZCOztBQU9qQyxXQUFPLEVBQUUsS0FBRixHQUFVLE1BQVYsRUFBa0I7QUFDdkIsYUFBTyxLQUFQLElBQWdCLE1BQU0sS0FBTixDQUFoQixDQUR1QjtLQUF6QjtBQUdBLFdBQU8sRUFBRSxRQUFGLEdBQWEsU0FBYixFQUF3QjtBQUM3QixhQUFPLE9BQVAsSUFBa0IsTUFBTSxRQUFOLENBQWxCLENBRDZCO0tBQS9CO0FBR0EsV0FBTyxNQUFQLENBYmlDO0dBQW5DOzs7OztBQWdCQSxhQUFPLE9BQVAsR0FBaUIsV0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2FycmF5Q29uY2F0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGFycmF5IGNvbmNhdGVuYXRpbmcgYGFycmF5YCB3aXRoIGBvdGhlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBmaXJzdCBhcnJheSB0byBjb25jYXRlbmF0ZS5cbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVyIFRoZSBzZWNvbmQgYXJyYXkgdG8gY29uY2F0ZW5hdGUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBjb25jYXRlbmF0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5Q29uY2F0KGFycmF5LCBvdGhlcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIG90aEluZGV4ID0gLTEsXG4gICAgICBvdGhMZW5ndGggPSBvdGhlci5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGggKyBvdGhMZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGFycmF5W2luZGV4XTtcbiAgfVxuICB3aGlsZSAoKytvdGhJbmRleCA8IG90aExlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleCsrXSA9IG90aGVyW290aEluZGV4XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5Q29uY2F0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
