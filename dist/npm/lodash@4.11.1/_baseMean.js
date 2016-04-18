'use strict';

System.register([], function (_export, _context) {
  var baseSum, NAN;

  function baseMean(array, iteratee) {
    var length = array ? array.length : 0;
    return length ? baseSum(array, iteratee) / length : NAN;
  }
  return {
    setters: [],
    execute: function () {
      baseSum = require('./_baseSum');
      NAN = 0 / 0;
      module.exports = baseMean;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlTWVhbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsUUFBVCxDQUFrQixLQUFsQixFQUF5QixRQUF6QixFQUFtQztBQUNqQyxRQUFJLFNBQVMsUUFBUSxNQUFNLE1BQU4sR0FBZSxDQUF2QixDQURvQjtBQUVqQyxXQUFPLFNBQVUsUUFBUSxLQUFSLEVBQWUsUUFBZixJQUEyQixNQUEzQixHQUFxQyxHQUEvQyxDQUYwQjtHQUFuQzs7OztBQUZJLGdCQUFVLFFBQVEsWUFBUjtBQUNWLFlBQU0sSUFBSSxDQUFKO0FBS1YsYUFBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19iYXNlTWVhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VTdW0gPSByZXF1aXJlKCcuL19iYXNlU3VtJyk7XG52YXIgTkFOID0gMCAvIDA7XG5mdW5jdGlvbiBiYXNlTWVhbihhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcbiAgcmV0dXJuIGxlbmd0aCA/IChiYXNlU3VtKGFycmF5LCBpdGVyYXRlZSkgLyBsZW5ndGgpIDogTkFOO1xufVxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWVhbjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
