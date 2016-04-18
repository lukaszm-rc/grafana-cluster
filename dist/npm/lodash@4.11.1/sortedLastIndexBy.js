'use strict';

System.register([], function (_export, _context) {
  var baseIteratee, baseSortedIndexBy;

  function sortedLastIndexBy(array, value, iteratee) {
    return baseSortedIndexBy(array, value, baseIteratee(iteratee), true);
  }
  return {
    setters: [],
    execute: function () {
      baseIteratee = require('./_baseIteratee');
      baseSortedIndexBy = require('./_baseSortedIndexBy');
      module.exports = sortedLastIndexBy;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3NvcnRlZExhc3RJbmRleEJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxpQkFBVCxDQUEyQixLQUEzQixFQUFrQyxLQUFsQyxFQUF5QyxRQUF6QyxFQUFtRDtBQUNqRCxXQUFPLGtCQUFrQixLQUFsQixFQUF5QixLQUF6QixFQUFnQyxhQUFhLFFBQWIsQ0FBaEMsRUFBd0QsSUFBeEQsQ0FBUCxDQURpRDtHQUFuRDs7OztBQUZJLHFCQUFlLFFBQVEsaUJBQVI7QUFDZiwwQkFBb0IsUUFBUSxzQkFBUjtBQUl4QixhQUFPLE9BQVAsR0FBaUIsaUJBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3NvcnRlZExhc3RJbmRleEJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgYmFzZVNvcnRlZEluZGV4QnkgPSByZXF1aXJlKCcuL19iYXNlU29ydGVkSW5kZXhCeScpO1xuZnVuY3Rpb24gc29ydGVkTGFzdEluZGV4QnkoYXJyYXksIHZhbHVlLCBpdGVyYXRlZSkge1xuICByZXR1cm4gYmFzZVNvcnRlZEluZGV4QnkoYXJyYXksIHZhbHVlLCBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUpLCB0cnVlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gc29ydGVkTGFzdEluZGV4Qnk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
