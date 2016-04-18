"use strict";

System.register([], function (_export, _context) {
  var nativeCeil, nativeMax;


  /**
   * The base implementation of `_.range` and `_.rangeRight` which doesn't
   * coerce arguments to numbers.
   *
   * @private
   * @param {number} start The start of the range.
   * @param {number} end The end of the range.
   * @param {number} step The value to increment or decrement by.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Array} Returns the new array of numbers.
   */
  function baseRange(start, end, step, fromRight) {
    var index = -1,
        length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
        result = Array(length);

    while (length--) {
      result[fromRight ? length : ++index] = start;
      start += step;
    }
    return result;
  }

  return {
    setters: [],
    execute: function () {
      nativeCeil = Math.ceil;
      nativeMax = Math.max;
      module.exports = baseRange;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlUmFuZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSxXQUFTLFNBQVQsQ0FBbUIsS0FBbkIsRUFBMEIsR0FBMUIsRUFBK0IsSUFBL0IsRUFBcUMsU0FBckMsRUFBZ0Q7QUFDOUMsUUFBSSxRQUFRLENBQUMsQ0FBRDtRQUNSLFNBQVMsVUFBVSxXQUFXLENBQUMsTUFBTSxLQUFOLENBQUQsSUFBaUIsUUFBUSxDQUFSLENBQWpCLENBQXJCLEVBQW1ELENBQW5ELENBQVQ7UUFDQSxTQUFTLE1BQU0sTUFBTixDQUFULENBSDBDOztBQUs5QyxXQUFPLFFBQVAsRUFBaUI7QUFDZixhQUFPLFlBQVksTUFBWixHQUFxQixFQUFFLEtBQUYsQ0FBNUIsR0FBdUMsS0FBdkMsQ0FEZTtBQUVmLGVBQVMsSUFBVCxDQUZlO0tBQWpCO0FBSUEsV0FBTyxNQUFQLENBVDhDO0dBQWhEOzs7OztBQWRJLG1CQUFhLEtBQUssSUFBTDtBQUNiLGtCQUFZLEtBQUssR0FBTDtBQXlCaEIsYUFBTyxPQUFQLEdBQWlCLFNBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19iYXNlUmFuZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlQ2VpbCA9IE1hdGguY2VpbCxcbiAgICBuYXRpdmVNYXggPSBNYXRoLm1heDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5yYW5nZWAgYW5kIGBfLnJhbmdlUmlnaHRgIHdoaWNoIGRvZXNuJ3RcbiAqIGNvZXJjZSBhcmd1bWVudHMgdG8gbnVtYmVycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IFRoZSBzdGFydCBvZiB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIFRoZSBlbmQgb2YgdGhlIHJhbmdlLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0ZXAgVGhlIHZhbHVlIHRvIGluY3JlbWVudCBvciBkZWNyZW1lbnQgYnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIG51bWJlcnMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VSYW5nZShzdGFydCwgZW5kLCBzdGVwLCBmcm9tUmlnaHQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBuYXRpdmVNYXgobmF0aXZlQ2VpbCgoZW5kIC0gc3RhcnQpIC8gKHN0ZXAgfHwgMSkpLCAwKSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgcmVzdWx0W2Zyb21SaWdodCA/IGxlbmd0aCA6ICsraW5kZXhdID0gc3RhcnQ7XG4gICAgc3RhcnQgKz0gc3RlcDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VSYW5nZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
