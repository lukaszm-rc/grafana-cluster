'use strict';

System.register([], function (_export, _context) {
  var baseInverter;

  function createInverter(setter, toIteratee) {
    return function (object, iteratee) {
      return baseInverter(object, setter, toIteratee(iteratee), {});
    };
  }
  return {
    setters: [],
    execute: function () {
      baseInverter = require('./_baseInverter');
      module.exports = createInverter;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jcmVhdGVJbnZlcnRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLFdBQVMsY0FBVCxDQUF3QixNQUF4QixFQUFnQyxVQUFoQyxFQUE0QztBQUMxQyxXQUFPLFVBQVMsTUFBVCxFQUFpQixRQUFqQixFQUEyQjtBQUNoQyxhQUFPLGFBQWEsTUFBYixFQUFxQixNQUFyQixFQUE2QixXQUFXLFFBQVgsQ0FBN0IsRUFBbUQsRUFBbkQsQ0FBUCxDQURnQztLQUEzQixDQURtQztHQUE1Qzs7OztBQURJLHFCQUFlLFFBQVEsaUJBQVI7QUFNbkIsYUFBTyxPQUFQLEdBQWlCLGNBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19jcmVhdGVJbnZlcnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VJbnZlcnRlciA9IHJlcXVpcmUoJy4vX2Jhc2VJbnZlcnRlcicpO1xuZnVuY3Rpb24gY3JlYXRlSW52ZXJ0ZXIoc2V0dGVyLCB0b0l0ZXJhdGVlKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QsIGl0ZXJhdGVlKSB7XG4gICAgcmV0dXJuIGJhc2VJbnZlcnRlcihvYmplY3QsIHNldHRlciwgdG9JdGVyYXRlZShpdGVyYXRlZSksIHt9KTtcbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlSW52ZXJ0ZXI7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
