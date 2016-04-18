'use strict';

System.register([], function (_export, _context) {
  var basePullAll;

  function pullAll(array, values) {
    return array && array.length && values && values.length ? basePullAll(array, values) : array;
  }
  return {
    setters: [],
    execute: function () {
      basePullAll = require('./_basePullAll');
      module.exports = pullAll;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3B1bGxBbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxXQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0IsTUFBeEIsRUFBZ0M7QUFDOUIsV0FBTyxLQUFDLElBQVMsTUFBTSxNQUFOLElBQWdCLE1BQXpCLElBQW1DLE9BQU8sTUFBUCxHQUFpQixZQUFZLEtBQVosRUFBbUIsTUFBbkIsQ0FBckQsR0FBa0YsS0FBbEYsQ0FEdUI7R0FBaEM7Ozs7QUFESSxvQkFBYyxRQUFRLGdCQUFSO0FBSWxCLGFBQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9wdWxsQWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZVB1bGxBbGwgPSByZXF1aXJlKCcuL19iYXNlUHVsbEFsbCcpO1xuZnVuY3Rpb24gcHVsbEFsbChhcnJheSwgdmFsdWVzKSB7XG4gIHJldHVybiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoICYmIHZhbHVlcyAmJiB2YWx1ZXMubGVuZ3RoKSA/IGJhc2VQdWxsQWxsKGFycmF5LCB2YWx1ZXMpIDogYXJyYXk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHB1bGxBbGw7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
