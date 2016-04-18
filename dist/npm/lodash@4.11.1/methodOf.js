'use strict';

System.register([], function (_export, _context) {
  var baseInvoke, rest, methodOf;
  return {
    setters: [],
    execute: function () {
      baseInvoke = require('./_baseInvoke');
      rest = require('./rest');
      methodOf = rest(function (object, args) {
        return function (path) {
          return baseInvoke(object, path, args);
        };
      });

      module.exports = methodOf;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL21ldGhvZE9mLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxtQkFBYSxRQUFRLGVBQVI7QUFDYixhQUFPLFFBQVEsUUFBUjtBQUNQLGlCQUFXLEtBQUssVUFBUyxNQUFULEVBQWlCLElBQWpCLEVBQXVCO0FBQ3pDLGVBQU8sVUFBUyxJQUFULEVBQWU7QUFDcEIsaUJBQU8sV0FBVyxNQUFYLEVBQW1CLElBQW5CLEVBQXlCLElBQXpCLENBQVAsQ0FEb0I7U0FBZixDQURrQztPQUF2Qjs7QUFLcEIsYUFBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL21ldGhvZE9mLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUludm9rZSA9IHJlcXVpcmUoJy4vX2Jhc2VJbnZva2UnKSxcbiAgICByZXN0ID0gcmVxdWlyZSgnLi9yZXN0Jyk7XG52YXIgbWV0aG9kT2YgPSByZXN0KGZ1bmN0aW9uKG9iamVjdCwgYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24ocGF0aCkge1xuICAgIHJldHVybiBiYXNlSW52b2tlKG9iamVjdCwgcGF0aCwgYXJncyk7XG4gIH07XG59KTtcbm1vZHVsZS5leHBvcnRzID0gbWV0aG9kT2Y7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
