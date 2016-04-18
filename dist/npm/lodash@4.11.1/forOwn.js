'use strict';

System.register([], function (_export, _context) {
  var baseForOwn, baseIteratee;

  function forOwn(object, iteratee) {
    return object && baseForOwn(object, baseIteratee(iteratee));
  }
  return {
    setters: [],
    execute: function () {
      baseForOwn = require('./_baseForOwn');
      baseIteratee = require('./_baseIteratee');
      module.exports = forOwn;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2Zvck93bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsTUFBVCxDQUFnQixNQUFoQixFQUF3QixRQUF4QixFQUFrQztBQUNoQyxXQUFPLFVBQVUsV0FBVyxNQUFYLEVBQW1CLGFBQWEsUUFBYixDQUFuQixDQUFWLENBRHlCO0dBQWxDOzs7O0FBRkksbUJBQWEsUUFBUSxlQUFSO0FBQ2IscUJBQWUsUUFBUSxpQkFBUjtBQUluQixhQUFPLE9BQVAsR0FBaUIsTUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvZm9yT3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUZvck93biA9IHJlcXVpcmUoJy4vX2Jhc2VGb3JPd24nKSxcbiAgICBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKTtcbmZ1bmN0aW9uIGZvck93bihvYmplY3QsIGl0ZXJhdGVlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgYmFzZUZvck93bihvYmplY3QsIGJhc2VJdGVyYXRlZShpdGVyYXRlZSkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmb3JPd247XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
