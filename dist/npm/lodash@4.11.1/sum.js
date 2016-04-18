'use strict';

System.register([], function (_export, _context) {
  var baseSum, identity;

  function sum(array) {
    return array && array.length ? baseSum(array, identity) : 0;
  }
  return {
    setters: [],
    execute: function () {
      baseSum = require('./_baseSum');
      identity = require('./identity');
      module.exports = sum;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3N1bS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsR0FBVCxDQUFhLEtBQWIsRUFBb0I7QUFDbEIsV0FBTyxLQUFDLElBQVMsTUFBTSxNQUFOLEdBQWdCLFFBQVEsS0FBUixFQUFlLFFBQWYsQ0FBMUIsR0FBcUQsQ0FBckQsQ0FEVztHQUFwQjs7OztBQUZJLGdCQUFVLFFBQVEsWUFBUjtBQUNWLGlCQUFXLFFBQVEsWUFBUjtBQUlmLGFBQU8sT0FBUCxHQUFpQixHQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9zdW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlU3VtID0gcmVxdWlyZSgnLi9fYmFzZVN1bScpLFxuICAgIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xuZnVuY3Rpb24gc3VtKGFycmF5KSB7XG4gIHJldHVybiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoKSA/IGJhc2VTdW0oYXJyYXksIGlkZW50aXR5KSA6IDA7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN1bTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
