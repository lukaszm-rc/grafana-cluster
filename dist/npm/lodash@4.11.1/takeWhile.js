'use strict';

System.register([], function (_export, _context) {
  var baseIteratee, baseWhile;

  function takeWhile(array, predicate) {
    return array && array.length ? baseWhile(array, baseIteratee(predicate, 3)) : [];
  }
  return {
    setters: [],
    execute: function () {
      baseIteratee = require('./_baseIteratee');
      baseWhile = require('./_baseWhile');
      module.exports = takeWhile;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3Rha2VXaGlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsU0FBVCxDQUFtQixLQUFuQixFQUEwQixTQUExQixFQUFxQztBQUNuQyxXQUFPLEtBQUMsSUFBUyxNQUFNLE1BQU4sR0FBZ0IsVUFBVSxLQUFWLEVBQWlCLGFBQWEsU0FBYixFQUF3QixDQUF4QixDQUFqQixDQUExQixHQUF5RSxFQUF6RSxDQUQ0QjtHQUFyQzs7OztBQUZJLHFCQUFlLFFBQVEsaUJBQVI7QUFDZixrQkFBWSxRQUFRLGNBQVI7QUFJaEIsYUFBTyxPQUFQLEdBQWlCLFNBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3Rha2VXaGlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGJhc2VXaGlsZSA9IHJlcXVpcmUoJy4vX2Jhc2VXaGlsZScpO1xuZnVuY3Rpb24gdGFrZVdoaWxlKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgcmV0dXJuIChhcnJheSAmJiBhcnJheS5sZW5ndGgpID8gYmFzZVdoaWxlKGFycmF5LCBiYXNlSXRlcmF0ZWUocHJlZGljYXRlLCAzKSkgOiBbXTtcbn1cbm1vZHVsZS5leHBvcnRzID0gdGFrZVdoaWxlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
