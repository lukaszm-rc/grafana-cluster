'use strict';

System.register([], function (_export, _context) {
  var indexOfNaN;

  function baseIndexOf(array, value, fromIndex) {
    if (value !== value) {
      return indexOfNaN(array, fromIndex);
    }
    var index = fromIndex - 1,
        length = array.length;
    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }
  return {
    setters: [],
    execute: function () {
      indexOfNaN = require('./_indexOfNaN');
      module.exports = baseIndexOf;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlSW5kZXhPZi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLFdBQVMsV0FBVCxDQUFxQixLQUFyQixFQUE0QixLQUE1QixFQUFtQyxTQUFuQyxFQUE4QztBQUM1QyxRQUFJLFVBQVUsS0FBVixFQUFpQjtBQUNuQixhQUFPLFdBQVcsS0FBWCxFQUFrQixTQUFsQixDQUFQLENBRG1CO0tBQXJCO0FBR0EsUUFBSSxRQUFRLFlBQVksQ0FBWjtRQUNSLFNBQVMsTUFBTSxNQUFOLENBTCtCO0FBTTVDLFdBQU8sRUFBRSxLQUFGLEdBQVUsTUFBVixFQUFrQjtBQUN2QixVQUFJLE1BQU0sS0FBTixNQUFpQixLQUFqQixFQUF3QjtBQUMxQixlQUFPLEtBQVAsQ0FEMEI7T0FBNUI7S0FERjtBQUtBLFdBQU8sQ0FBQyxDQUFELENBWHFDO0dBQTlDOzs7O0FBREksbUJBQWEsUUFBUSxlQUFSO0FBY2pCLGFBQU8sT0FBUCxHQUFpQixXQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fYmFzZUluZGV4T2YuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBpbmRleE9mTmFOID0gcmVxdWlyZSgnLi9faW5kZXhPZk5hTicpO1xuZnVuY3Rpb24gYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgaWYgKHZhbHVlICE9PSB2YWx1ZSkge1xuICAgIHJldHVybiBpbmRleE9mTmFOKGFycmF5LCBmcm9tSW5kZXgpO1xuICB9XG4gIHZhciBpbmRleCA9IGZyb21JbmRleCAtIDEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGFycmF5W2luZGV4XSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSW5kZXhPZjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
