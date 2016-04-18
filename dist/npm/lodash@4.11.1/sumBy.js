'use strict';

System.register([], function (_export, _context) {
  var baseIteratee, baseSum;

  function sumBy(array, iteratee) {
    return array && array.length ? baseSum(array, baseIteratee(iteratee)) : 0;
  }
  return {
    setters: [],
    execute: function () {
      baseIteratee = require('./_baseIteratee');
      baseSum = require('./_baseSum');
      module.exports = sumBy;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3N1bUJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxLQUFULENBQWUsS0FBZixFQUFzQixRQUF0QixFQUFnQztBQUM5QixXQUFPLEtBQUMsSUFBUyxNQUFNLE1BQU4sR0FBZ0IsUUFBUSxLQUFSLEVBQWUsYUFBYSxRQUFiLENBQWYsQ0FBMUIsR0FBbUUsQ0FBbkUsQ0FEdUI7R0FBaEM7Ozs7QUFGSSxxQkFBZSxRQUFRLGlCQUFSO0FBQ2YsZ0JBQVUsUUFBUSxZQUFSO0FBSWQsYUFBTyxPQUFQLEdBQWlCLEtBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3N1bUJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgYmFzZVN1bSA9IHJlcXVpcmUoJy4vX2Jhc2VTdW0nKTtcbmZ1bmN0aW9uIHN1bUJ5KGFycmF5LCBpdGVyYXRlZSkge1xuICByZXR1cm4gKGFycmF5ICYmIGFycmF5Lmxlbmd0aCkgPyBiYXNlU3VtKGFycmF5LCBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUpKSA6IDA7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN1bUJ5O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
