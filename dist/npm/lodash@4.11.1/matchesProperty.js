'use strict';

System.register([], function (_export, _context) {
  var baseClone, baseMatchesProperty;

  function matchesProperty(path, srcValue) {
    return baseMatchesProperty(path, baseClone(srcValue, true));
  }
  return {
    setters: [],
    execute: function () {
      baseClone = require('./_baseClone');
      baseMatchesProperty = require('./_baseMatchesProperty');
      module.exports = matchesProperty;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL21hdGNoZXNQcm9wZXJ0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsZUFBVCxDQUF5QixJQUF6QixFQUErQixRQUEvQixFQUF5QztBQUN2QyxXQUFPLG9CQUFvQixJQUFwQixFQUEwQixVQUFVLFFBQVYsRUFBb0IsSUFBcEIsQ0FBMUIsQ0FBUCxDQUR1QztHQUF6Qzs7OztBQUZJLGtCQUFZLFFBQVEsY0FBUjtBQUNaLDRCQUFzQixRQUFRLHdCQUFSO0FBSTFCLGFBQU8sT0FBUCxHQUFpQixlQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9tYXRjaGVzUHJvcGVydHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlQ2xvbmUgPSByZXF1aXJlKCcuL19iYXNlQ2xvbmUnKSxcbiAgICBiYXNlTWF0Y2hlc1Byb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZU1hdGNoZXNQcm9wZXJ0eScpO1xuZnVuY3Rpb24gbWF0Y2hlc1Byb3BlcnR5KHBhdGgsIHNyY1ZhbHVlKSB7XG4gIHJldHVybiBiYXNlTWF0Y2hlc1Byb3BlcnR5KHBhdGgsIGJhc2VDbG9uZShzcmNWYWx1ZSwgdHJ1ZSkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBtYXRjaGVzUHJvcGVydHk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
