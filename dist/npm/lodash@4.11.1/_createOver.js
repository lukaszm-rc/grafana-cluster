'use strict';

System.register([], function (_export, _context) {
  var apply, arrayMap, baseFlatten, baseIteratee, baseUnary, isArray, isFlattenableIteratee, rest;

  function createOver(arrayFunc) {
    return rest(function (iteratees) {
      iteratees = iteratees.length == 1 && isArray(iteratees[0]) ? arrayMap(iteratees[0], baseUnary(baseIteratee)) : arrayMap(baseFlatten(iteratees, 1, isFlattenableIteratee), baseUnary(baseIteratee));
      return rest(function (args) {
        var thisArg = this;
        return arrayFunc(iteratees, function (iteratee) {
          return apply(iteratee, thisArg, args);
        });
      });
    });
  }
  return {
    setters: [],
    execute: function () {
      apply = require('./_apply');
      arrayMap = require('./_arrayMap');
      baseFlatten = require('./_baseFlatten');
      baseIteratee = require('./_baseIteratee');
      baseUnary = require('./_baseUnary');
      isArray = require('./isArray');
      isFlattenableIteratee = require('./_isFlattenableIteratee');
      rest = require('./rest');
      module.exports = createOver;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jcmVhdGVPdmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsV0FBUyxVQUFULENBQW9CLFNBQXBCLEVBQStCO0FBQzdCLFdBQU8sS0FBSyxVQUFTLFNBQVQsRUFBb0I7QUFDOUIsa0JBQVksU0FBQyxDQUFVLE1BQVYsSUFBb0IsQ0FBcEIsSUFBeUIsUUFBUSxVQUFVLENBQVYsQ0FBUixDQUF6QixHQUFrRCxTQUFTLFVBQVUsQ0FBVixDQUFULEVBQXVCLFVBQVUsWUFBVixDQUF2QixDQUFuRCxHQUFxRyxTQUFTLFlBQVksU0FBWixFQUF1QixDQUF2QixFQUEwQixxQkFBMUIsQ0FBVCxFQUEyRCxVQUFVLFlBQVYsQ0FBM0QsQ0FBckcsQ0FEa0I7QUFFOUIsYUFBTyxLQUFLLFVBQVMsSUFBVCxFQUFlO0FBQ3pCLFlBQUksVUFBVSxJQUFWLENBRHFCO0FBRXpCLGVBQU8sVUFBVSxTQUFWLEVBQXFCLFVBQVMsUUFBVCxFQUFtQjtBQUM3QyxpQkFBTyxNQUFNLFFBQU4sRUFBZ0IsT0FBaEIsRUFBeUIsSUFBekIsQ0FBUCxDQUQ2QztTQUFuQixDQUE1QixDQUZ5QjtPQUFmLENBQVosQ0FGOEI7S0FBcEIsQ0FBWixDQUQ2QjtHQUEvQjs7OztBQVJJLGNBQVEsUUFBUSxVQUFSO0FBQ1IsaUJBQVcsUUFBUSxhQUFSO0FBQ1gsb0JBQWMsUUFBUSxnQkFBUjtBQUNkLHFCQUFlLFFBQVEsaUJBQVI7QUFDZixrQkFBWSxRQUFRLGNBQVI7QUFDWixnQkFBVSxRQUFRLFdBQVI7QUFDViw4QkFBd0IsUUFBUSwwQkFBUjtBQUN4QixhQUFPLFFBQVEsUUFBUjtBQVlYLGFBQU8sT0FBUCxHQUFpQixVQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fY3JlYXRlT3Zlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi9fYXBwbHknKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgYmFzZUZsYXR0ZW4gPSByZXF1aXJlKCcuL19iYXNlRmxhdHRlbicpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0ZsYXR0ZW5hYmxlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19pc0ZsYXR0ZW5hYmxlSXRlcmF0ZWUnKSxcbiAgICByZXN0ID0gcmVxdWlyZSgnLi9yZXN0Jyk7XG5mdW5jdGlvbiBjcmVhdGVPdmVyKGFycmF5RnVuYykge1xuICByZXR1cm4gcmVzdChmdW5jdGlvbihpdGVyYXRlZXMpIHtcbiAgICBpdGVyYXRlZXMgPSAoaXRlcmF0ZWVzLmxlbmd0aCA9PSAxICYmIGlzQXJyYXkoaXRlcmF0ZWVzWzBdKSkgPyBhcnJheU1hcChpdGVyYXRlZXNbMF0sIGJhc2VVbmFyeShiYXNlSXRlcmF0ZWUpKSA6IGFycmF5TWFwKGJhc2VGbGF0dGVuKGl0ZXJhdGVlcywgMSwgaXNGbGF0dGVuYWJsZUl0ZXJhdGVlKSwgYmFzZVVuYXJ5KGJhc2VJdGVyYXRlZSkpO1xuICAgIHJldHVybiByZXN0KGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgIHZhciB0aGlzQXJnID0gdGhpcztcbiAgICAgIHJldHVybiBhcnJheUZ1bmMoaXRlcmF0ZWVzLCBmdW5jdGlvbihpdGVyYXRlZSkge1xuICAgICAgICByZXR1cm4gYXBwbHkoaXRlcmF0ZWUsIHRoaXNBcmcsIGFyZ3MpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVPdmVyO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
