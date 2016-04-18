'use strict';

System.register([], function (_export, _context) {
  var baseIteratee, basePullAll;

  function pullAllBy(array, values, iteratee) {
    return array && array.length && values && values.length ? basePullAll(array, values, baseIteratee(iteratee)) : array;
  }
  return {
    setters: [],
    execute: function () {
      baseIteratee = require('./_baseIteratee');
      basePullAll = require('./_basePullAll');
      module.exports = pullAllBy;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3B1bGxBbGxCeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsU0FBVCxDQUFtQixLQUFuQixFQUEwQixNQUExQixFQUFrQyxRQUFsQyxFQUE0QztBQUMxQyxXQUFPLEtBQUMsSUFBUyxNQUFNLE1BQU4sSUFBZ0IsTUFBekIsSUFBbUMsT0FBTyxNQUFQLEdBQWlCLFlBQVksS0FBWixFQUFtQixNQUFuQixFQUEyQixhQUFhLFFBQWIsQ0FBM0IsQ0FBckQsR0FBMEcsS0FBMUcsQ0FEbUM7R0FBNUM7Ozs7QUFGSSxxQkFBZSxRQUFRLGlCQUFSO0FBQ2Ysb0JBQWMsUUFBUSxnQkFBUjtBQUlsQixhQUFPLE9BQVAsR0FBaUIsU0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvcHVsbEFsbEJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgYmFzZVB1bGxBbGwgPSByZXF1aXJlKCcuL19iYXNlUHVsbEFsbCcpO1xuZnVuY3Rpb24gcHVsbEFsbEJ5KGFycmF5LCB2YWx1ZXMsIGl0ZXJhdGVlKSB7XG4gIHJldHVybiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoICYmIHZhbHVlcyAmJiB2YWx1ZXMubGVuZ3RoKSA/IGJhc2VQdWxsQWxsKGFycmF5LCB2YWx1ZXMsIGJhc2VJdGVyYXRlZShpdGVyYXRlZSkpIDogYXJyYXk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHB1bGxBbGxCeTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
