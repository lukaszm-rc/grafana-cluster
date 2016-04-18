'use strict';

System.register([], function (_export, _context) {
  var arrayFilter, baseFilter, baseIteratee, isArray;

  function reject(collection, predicate) {
    var func = isArray(collection) ? arrayFilter : baseFilter;
    predicate = baseIteratee(predicate, 3);
    return func(collection, function (value, index, collection) {
      return !predicate(value, index, collection);
    });
  }
  return {
    setters: [],
    execute: function () {
      arrayFilter = require('./_arrayFilter');
      baseFilter = require('./_baseFilter');
      baseIteratee = require('./_baseIteratee');
      isArray = require('./isArray');
      module.exports = reject;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3JlamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLFdBQVMsTUFBVCxDQUFnQixVQUFoQixFQUE0QixTQUE1QixFQUF1QztBQUNyQyxRQUFJLE9BQU8sUUFBUSxVQUFSLElBQXNCLFdBQXRCLEdBQW9DLFVBQXBDLENBRDBCO0FBRXJDLGdCQUFZLGFBQWEsU0FBYixFQUF3QixDQUF4QixDQUFaLENBRnFDO0FBR3JDLFdBQU8sS0FBSyxVQUFMLEVBQWlCLFVBQVMsS0FBVCxFQUFnQixLQUFoQixFQUF1QixVQUF2QixFQUFtQztBQUN6RCxhQUFPLENBQUMsVUFBVSxLQUFWLEVBQWlCLEtBQWpCLEVBQXdCLFVBQXhCLENBQUQsQ0FEa0Q7S0FBbkMsQ0FBeEIsQ0FIcUM7R0FBdkM7Ozs7QUFKSSxvQkFBYyxRQUFRLGdCQUFSO0FBQ2QsbUJBQWEsUUFBUSxlQUFSO0FBQ2IscUJBQWUsUUFBUSxpQkFBUjtBQUNmLGdCQUFVLFFBQVEsV0FBUjtBQVFkLGFBQU8sT0FBUCxHQUFpQixNQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9yZWplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgYmFzZUZpbHRlciA9IHJlcXVpcmUoJy4vX2Jhc2VGaWx0ZXInKSxcbiAgICBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5mdW5jdGlvbiByZWplY3QoY29sbGVjdGlvbiwgcHJlZGljYXRlKSB7XG4gIHZhciBmdW5jID0gaXNBcnJheShjb2xsZWN0aW9uKSA/IGFycmF5RmlsdGVyIDogYmFzZUZpbHRlcjtcbiAgcHJlZGljYXRlID0gYmFzZUl0ZXJhdGVlKHByZWRpY2F0ZSwgMyk7XG4gIHJldHVybiBmdW5jKGNvbGxlY3Rpb24sIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgIHJldHVybiAhcHJlZGljYXRlKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gIH0pO1xufVxubW9kdWxlLmV4cG9ydHMgPSByZWplY3Q7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
