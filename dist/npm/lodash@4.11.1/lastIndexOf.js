'use strict';

System.register([], function (_export, _context) {
  var indexOfNaN, toInteger, nativeMax, nativeMin;

  function lastIndexOf(array, value, fromIndex) {
    var length = array ? array.length : 0;
    if (!length) {
      return -1;
    }
    var index = length;
    if (fromIndex !== undefined) {
      index = toInteger(fromIndex);
      index = (index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1)) + 1;
    }
    if (value !== value) {
      return indexOfNaN(array, index, true);
    }
    while (index--) {
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
      toInteger = require('./toInteger');
      nativeMax = Math.max;
      nativeMin = Math.min;
      module.exports = lastIndexOf;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2xhc3RJbmRleE9mLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsV0FBUyxXQUFULENBQXFCLEtBQXJCLEVBQTRCLEtBQTVCLEVBQW1DLFNBQW5DLEVBQThDO0FBQzVDLFFBQUksU0FBUyxRQUFRLE1BQU0sTUFBTixHQUFlLENBQXZCLENBRCtCO0FBRTVDLFFBQUksQ0FBQyxNQUFELEVBQVM7QUFDWCxhQUFPLENBQUMsQ0FBRCxDQURJO0tBQWI7QUFHQSxRQUFJLFFBQVEsTUFBUixDQUx3QztBQU01QyxRQUFJLGNBQWMsU0FBZCxFQUF5QjtBQUMzQixjQUFRLFVBQVUsU0FBVixDQUFSLENBRDJCO0FBRTNCLGNBQVEsQ0FBQyxRQUFRLENBQVIsR0FBWSxVQUFVLFNBQVMsS0FBVCxFQUFnQixDQUExQixDQUFaLEdBQTJDLFVBQVUsS0FBVixFQUFpQixTQUFTLENBQVQsQ0FBNUQsQ0FBRCxHQUE0RSxDQUE1RSxDQUZtQjtLQUE3QjtBQUlBLFFBQUksVUFBVSxLQUFWLEVBQWlCO0FBQ25CLGFBQU8sV0FBVyxLQUFYLEVBQWtCLEtBQWxCLEVBQXlCLElBQXpCLENBQVAsQ0FEbUI7S0FBckI7QUFHQSxXQUFPLE9BQVAsRUFBZ0I7QUFDZCxVQUFJLE1BQU0sS0FBTixNQUFpQixLQUFqQixFQUF3QjtBQUMxQixlQUFPLEtBQVAsQ0FEMEI7T0FBNUI7S0FERjtBQUtBLFdBQU8sQ0FBQyxDQUFELENBbEJxQztHQUE5Qzs7OztBQUpJLG1CQUFhLFFBQVEsZUFBUjtBQUNiLGtCQUFZLFFBQVEsYUFBUjtBQUNaLGtCQUFZLEtBQUssR0FBTDtBQUNaLGtCQUFZLEtBQUssR0FBTDtBQXFCaEIsYUFBTyxPQUFQLEdBQWlCLFdBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2xhc3RJbmRleE9mLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgaW5kZXhPZk5hTiA9IHJlcXVpcmUoJy4vX2luZGV4T2ZOYU4nKSxcbiAgICB0b0ludGVnZXIgPSByZXF1aXJlKCcuL3RvSW50ZWdlcicpO1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuZnVuY3Rpb24gbGFzdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgdmFyIGluZGV4ID0gbGVuZ3RoO1xuICBpZiAoZnJvbUluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICBpbmRleCA9IHRvSW50ZWdlcihmcm9tSW5kZXgpO1xuICAgIGluZGV4ID0gKGluZGV4IDwgMCA/IG5hdGl2ZU1heChsZW5ndGggKyBpbmRleCwgMCkgOiBuYXRpdmVNaW4oaW5kZXgsIGxlbmd0aCAtIDEpKSArIDE7XG4gIH1cbiAgaWYgKHZhbHVlICE9PSB2YWx1ZSkge1xuICAgIHJldHVybiBpbmRleE9mTmFOKGFycmF5LCBpbmRleCwgdHJ1ZSk7XG4gIH1cbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICBpZiAoYXJyYXlbaW5kZXhdID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGxhc3RJbmRleE9mO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
