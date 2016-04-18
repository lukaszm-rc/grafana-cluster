'use strict';

System.register([], function (_export, _context) {
  var baseIndexOf, toInteger, nativeMax;

  function indexOf(array, value, fromIndex) {
    var length = array ? array.length : 0;
    if (!length) {
      return -1;
    }
    fromIndex = toInteger(fromIndex);
    if (fromIndex < 0) {
      fromIndex = nativeMax(length + fromIndex, 0);
    }
    return baseIndexOf(array, value, fromIndex);
  }
  return {
    setters: [],
    execute: function () {
      baseIndexOf = require('./_baseIndexOf');
      toInteger = require('./toInteger');
      nativeMax = Math.max;
      module.exports = indexOf;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2luZGV4T2YuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxXQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0IsS0FBeEIsRUFBK0IsU0FBL0IsRUFBMEM7QUFDeEMsUUFBSSxTQUFTLFFBQVEsTUFBTSxNQUFOLEdBQWUsQ0FBdkIsQ0FEMkI7QUFFeEMsUUFBSSxDQUFDLE1BQUQsRUFBUztBQUNYLGFBQU8sQ0FBQyxDQUFELENBREk7S0FBYjtBQUdBLGdCQUFZLFVBQVUsU0FBVixDQUFaLENBTHdDO0FBTXhDLFFBQUksWUFBWSxDQUFaLEVBQWU7QUFDakIsa0JBQVksVUFBVSxTQUFTLFNBQVQsRUFBb0IsQ0FBOUIsQ0FBWixDQURpQjtLQUFuQjtBQUdBLFdBQU8sWUFBWSxLQUFaLEVBQW1CLEtBQW5CLEVBQTBCLFNBQTFCLENBQVAsQ0FUd0M7R0FBMUM7Ozs7QUFISSxvQkFBYyxRQUFRLGdCQUFSO0FBQ2Qsa0JBQVksUUFBUSxhQUFSO0FBQ1osa0JBQVksS0FBSyxHQUFMO0FBWWhCLGFBQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9pbmRleE9mLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUluZGV4T2YgPSByZXF1aXJlKCcuL19iYXNlSW5kZXhPZicpLFxuICAgIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vdG9JbnRlZ2VyJyk7XG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5mdW5jdGlvbiBpbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGZyb21JbmRleCA9IHRvSW50ZWdlcihmcm9tSW5kZXgpO1xuICBpZiAoZnJvbUluZGV4IDwgMCkge1xuICAgIGZyb21JbmRleCA9IG5hdGl2ZU1heChsZW5ndGggKyBmcm9tSW5kZXgsIDApO1xuICB9XG4gIHJldHVybiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluZGV4T2Y7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
