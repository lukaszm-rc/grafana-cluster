"use strict";

System.register([], function (_export, _context) {
  var nativeMax, nativeMin;


  /**
   * The base implementation of `_.inRange` which doesn't coerce arguments to numbers.
   *
   * @private
   * @param {number} number The number to check.
   * @param {number} start The start of the range.
   * @param {number} end The end of the range.
   * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
   */
  function baseInRange(number, start, end) {
    return number >= nativeMin(start, end) && number < nativeMax(start, end);
  }

  return {
    setters: [],
    execute: function () {
      nativeMax = Math.max;
      nativeMin = Math.min;
      module.exports = baseInRange;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlSW5SYW5nZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFhQSxXQUFTLFdBQVQsQ0FBcUIsTUFBckIsRUFBNkIsS0FBN0IsRUFBb0MsR0FBcEMsRUFBeUM7QUFDdkMsV0FBTyxVQUFVLFVBQVUsS0FBVixFQUFpQixHQUFqQixDQUFWLElBQW1DLFNBQVMsVUFBVSxLQUFWLEVBQWlCLEdBQWpCLENBQVQsQ0FESDtHQUF6Qzs7Ozs7QUFaSSxrQkFBWSxLQUFLLEdBQUw7QUFDWixrQkFBWSxLQUFLLEdBQUw7QUFlaEIsYUFBTyxPQUFQLEdBQWlCLFdBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19iYXNlSW5SYW5nZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pblJhbmdlYCB3aGljaCBkb2Vzbid0IGNvZXJjZSBhcmd1bWVudHMgdG8gbnVtYmVycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciBUaGUgbnVtYmVyIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IFRoZSBzdGFydCBvZiB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIFRoZSBlbmQgb2YgdGhlIHJhbmdlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBudW1iZXJgIGlzIGluIHRoZSByYW5nZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSW5SYW5nZShudW1iZXIsIHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIG51bWJlciA+PSBuYXRpdmVNaW4oc3RhcnQsIGVuZCkgJiYgbnVtYmVyIDwgbmF0aXZlTWF4KHN0YXJ0LCBlbmQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJblJhbmdlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
