'use strict';

System.register([], function (_export, _context) {
  var baseIteratee, baseSortedUniqBy;

  function sortedUniqBy(array, iteratee) {
    return array && array.length ? baseSortedUniqBy(array, baseIteratee(iteratee)) : [];
  }
  return {
    setters: [],
    execute: function () {
      baseIteratee = require('./_baseIteratee');
      baseSortedUniqBy = require('./_baseSortedUniqBy');
      module.exports = sortedUniqBy;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3NvcnRlZFVuaXFCeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsWUFBVCxDQUFzQixLQUF0QixFQUE2QixRQUE3QixFQUF1QztBQUNyQyxXQUFPLEtBQUMsSUFBUyxNQUFNLE1BQU4sR0FBZ0IsaUJBQWlCLEtBQWpCLEVBQXdCLGFBQWEsUUFBYixDQUF4QixDQUExQixHQUE0RSxFQUE1RSxDQUQ4QjtHQUF2Qzs7OztBQUZJLHFCQUFlLFFBQVEsaUJBQVI7QUFDZix5QkFBbUIsUUFBUSxxQkFBUjtBQUl2QixhQUFPLE9BQVAsR0FBaUIsWUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvc29ydGVkVW5pcUJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgYmFzZVNvcnRlZFVuaXFCeSA9IHJlcXVpcmUoJy4vX2Jhc2VTb3J0ZWRVbmlxQnknKTtcbmZ1bmN0aW9uIHNvcnRlZFVuaXFCeShhcnJheSwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuIChhcnJheSAmJiBhcnJheS5sZW5ndGgpID8gYmFzZVNvcnRlZFVuaXFCeShhcnJheSwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlKSkgOiBbXTtcbn1cbm1vZHVsZS5leHBvcnRzID0gc29ydGVkVW5pcUJ5O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
