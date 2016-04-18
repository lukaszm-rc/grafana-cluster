'use strict';

System.register([], function (_export, _context) {
  var baseIteratee, baseUniq;

  function uniqBy(array, iteratee) {
    return array && array.length ? baseUniq(array, baseIteratee(iteratee)) : [];
  }
  return {
    setters: [],
    execute: function () {
      baseIteratee = require('./_baseIteratee');
      baseUniq = require('./_baseUniq');
      module.exports = uniqBy;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3VuaXFCeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsTUFBVCxDQUFnQixLQUFoQixFQUF1QixRQUF2QixFQUFpQztBQUMvQixXQUFPLEtBQUMsSUFBUyxNQUFNLE1BQU4sR0FBZ0IsU0FBUyxLQUFULEVBQWdCLGFBQWEsUUFBYixDQUFoQixDQUExQixHQUFvRSxFQUFwRSxDQUR3QjtHQUFqQzs7OztBQUZJLHFCQUFlLFFBQVEsaUJBQVI7QUFDZixpQkFBVyxRQUFRLGFBQVI7QUFJZixhQUFPLE9BQVAsR0FBaUIsTUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvdW5pcUJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgYmFzZVVuaXEgPSByZXF1aXJlKCcuL19iYXNlVW5pcScpO1xuZnVuY3Rpb24gdW5pcUJ5KGFycmF5LCBpdGVyYXRlZSkge1xuICByZXR1cm4gKGFycmF5ICYmIGFycmF5Lmxlbmd0aCkgPyBiYXNlVW5pcShhcnJheSwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlKSkgOiBbXTtcbn1cbm1vZHVsZS5leHBvcnRzID0gdW5pcUJ5O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
