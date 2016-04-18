'use strict';

System.register([], function (_export, _context) {
  var baseIteratee, baseMean;

  function meanBy(array, iteratee) {
    return baseMean(array, baseIteratee(iteratee));
  }
  return {
    setters: [],
    execute: function () {
      baseIteratee = require('./_baseIteratee');
      baseMean = require('./_baseMean');
      module.exports = meanBy;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL21lYW5CeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsTUFBVCxDQUFnQixLQUFoQixFQUF1QixRQUF2QixFQUFpQztBQUMvQixXQUFPLFNBQVMsS0FBVCxFQUFnQixhQUFhLFFBQWIsQ0FBaEIsQ0FBUCxDQUQrQjtHQUFqQzs7OztBQUZJLHFCQUFlLFFBQVEsaUJBQVI7QUFDZixpQkFBVyxRQUFRLGFBQVI7QUFJZixhQUFPLE9BQVAsR0FBaUIsTUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvbWVhbkJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgYmFzZU1lYW4gPSByZXF1aXJlKCcuL19iYXNlTWVhbicpO1xuZnVuY3Rpb24gbWVhbkJ5KGFycmF5LCBpdGVyYXRlZSkge1xuICByZXR1cm4gYmFzZU1lYW4oYXJyYXksIGJhc2VJdGVyYXRlZShpdGVyYXRlZSkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBtZWFuQnk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
