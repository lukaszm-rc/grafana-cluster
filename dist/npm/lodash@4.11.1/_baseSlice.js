"use strict";

System.register([], function (_export, _context) {
  /**
   * The base implementation of `_.slice` without an iteratee call guard.
   *
   * @private
   * @param {Array} array The array to slice.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the slice of `array`.
   */
  function baseSlice(array, start, end) {
    var index = -1,
        length = array.length;

    if (start < 0) {
      start = -start > length ? 0 : length + start;
    }
    end = end > length ? length : end;
    if (end < 0) {
      end += length;
    }
    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;

    var result = Array(length);
    while (++index < length) {
      result[index] = array[index + start];
    }
    return result;
  }

  return {
    setters: [],
    execute: function () {
      module.exports = baseSlice;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlU2xpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBU0EsV0FBUyxTQUFULENBQW1CLEtBQW5CLEVBQTBCLEtBQTFCLEVBQWlDLEdBQWpDLEVBQXNDO0FBQ3BDLFFBQUksUUFBUSxDQUFDLENBQUQ7UUFDUixTQUFTLE1BQU0sTUFBTixDQUZ1Qjs7QUFJcEMsUUFBSSxRQUFRLENBQVIsRUFBVztBQUNiLGNBQVEsQ0FBQyxLQUFELEdBQVMsTUFBVCxHQUFrQixDQUFsQixHQUF1QixTQUFTLEtBQVQsQ0FEbEI7S0FBZjtBQUdBLFVBQU0sTUFBTSxNQUFOLEdBQWUsTUFBZixHQUF3QixHQUF4QixDQVA4QjtBQVFwQyxRQUFJLE1BQU0sQ0FBTixFQUFTO0FBQ1gsYUFBTyxNQUFQLENBRFc7S0FBYjtBQUdBLGFBQVMsUUFBUSxHQUFSLEdBQWMsQ0FBZCxHQUFtQixHQUFDLEdBQU0sS0FBTixLQUFpQixDQUFsQixDQVhRO0FBWXBDLGVBQVcsQ0FBWCxDQVpvQzs7QUFjcEMsUUFBSSxTQUFTLE1BQU0sTUFBTixDQUFULENBZGdDO0FBZXBDLFdBQU8sRUFBRSxLQUFGLEdBQVUsTUFBVixFQUFrQjtBQUN2QixhQUFPLEtBQVAsSUFBZ0IsTUFBTSxRQUFRLEtBQVIsQ0FBdEIsQ0FEdUI7S0FBekI7QUFHQSxXQUFPLE1BQVAsQ0FsQm9DO0dBQXRDOzs7OztBQXFCQSxhQUFPLE9BQVAsR0FBaUIsU0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2Jhc2VTbGljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uc2xpY2VgIHdpdGhvdXQgYW4gaXRlcmF0ZWUgY2FsbCBndWFyZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNsaWNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSBUaGUgc3RhcnQgcG9zaXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZD1hcnJheS5sZW5ndGhdIFRoZSBlbmQgcG9zaXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHNsaWNlIG9mIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VTbGljZShhcnJheSwgc3RhcnQsIGVuZCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAtc3RhcnQgPiBsZW5ndGggPyAwIDogKGxlbmd0aCArIHN0YXJ0KTtcbiAgfVxuICBlbmQgPSBlbmQgPiBsZW5ndGggPyBsZW5ndGggOiBlbmQ7XG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlbmd0aDtcbiAgfVxuICBsZW5ndGggPSBzdGFydCA+IGVuZCA/IDAgOiAoKGVuZCAtIHN0YXJ0KSA+Pj4gMCk7XG4gIHN0YXJ0ID4+Pj0gMDtcblxuICB2YXIgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gYXJyYXlbaW5kZXggKyBzdGFydF07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU2xpY2U7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
