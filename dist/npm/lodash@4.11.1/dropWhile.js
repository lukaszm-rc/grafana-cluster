'use strict';

System.register([], function (_export, _context) {
  var baseIteratee, baseWhile;

  function dropWhile(array, predicate) {
    return array && array.length ? baseWhile(array, baseIteratee(predicate, 3), true) : [];
  }
  return {
    setters: [],
    execute: function () {
      baseIteratee = require('./_baseIteratee');
      baseWhile = require('./_baseWhile');
      module.exports = dropWhile;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2Ryb3BXaGlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsU0FBVCxDQUFtQixLQUFuQixFQUEwQixTQUExQixFQUFxQztBQUNuQyxXQUFPLEtBQUMsSUFBUyxNQUFNLE1BQU4sR0FBZ0IsVUFBVSxLQUFWLEVBQWlCLGFBQWEsU0FBYixFQUF3QixDQUF4QixDQUFqQixFQUE2QyxJQUE3QyxDQUExQixHQUErRSxFQUEvRSxDQUQ0QjtHQUFyQzs7OztBQUZJLHFCQUFlLFFBQVEsaUJBQVI7QUFDZixrQkFBWSxRQUFRLGNBQVI7QUFJaEIsYUFBTyxPQUFQLEdBQWlCLFNBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2Ryb3BXaGlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGJhc2VXaGlsZSA9IHJlcXVpcmUoJy4vX2Jhc2VXaGlsZScpO1xuZnVuY3Rpb24gZHJvcFdoaWxlKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgcmV0dXJuIChhcnJheSAmJiBhcnJheS5sZW5ndGgpID8gYmFzZVdoaWxlKGFycmF5LCBiYXNlSXRlcmF0ZWUocHJlZGljYXRlLCAzKSwgdHJ1ZSkgOiBbXTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZHJvcFdoaWxlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
