'use strict';

System.register([], function (_export, _context) {
    var arrayAggregator, baseAggregator, baseIteratee, isArray;

    function createAggregator(setter, initializer) {
        return function (collection, iteratee) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator,
                accumulator = initializer ? initializer() : {};
            return func(collection, setter, baseIteratee(iteratee), accumulator);
        };
    }
    return {
        setters: [],
        execute: function () {
            arrayAggregator = require('./_arrayAggregator');
            baseAggregator = require('./_baseAggregator');
            baseIteratee = require('./_baseIteratee');
            isArray = require('./isArray');
            module.exports = createAggregator;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jcmVhdGVBZ2dyZWdhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsYUFBUyxnQkFBVCxDQUEwQixNQUExQixFQUFrQyxXQUFsQyxFQUErQztBQUM3QyxlQUFPLFVBQVMsVUFBVCxFQUFxQixRQUFyQixFQUErQjtBQUNwQyxnQkFBSSxPQUFPLFFBQVEsVUFBUixJQUFzQixlQUF0QixHQUF3QyxjQUF4QztnQkFDUCxjQUFjLGNBQWMsYUFBZCxHQUE4QixFQUE5QixDQUZrQjtBQUdwQyxtQkFBTyxLQUFLLFVBQUwsRUFBaUIsTUFBakIsRUFBeUIsYUFBYSxRQUFiLENBQXpCLEVBQWlELFdBQWpELENBQVAsQ0FIb0M7U0FBL0IsQ0FEc0M7S0FBL0M7Ozs7QUFKSSw4QkFBa0IsUUFBUSxvQkFBUjtBQUNsQiw2QkFBaUIsUUFBUSxtQkFBUjtBQUNqQiwyQkFBZSxRQUFRLGlCQUFSO0FBQ2Ysc0JBQVUsUUFBUSxXQUFSO0FBUWQsbUJBQU8sT0FBUCxHQUFpQixnQkFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2NyZWF0ZUFnZ3JlZ2F0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBhcnJheUFnZ3JlZ2F0b3IgPSByZXF1aXJlKCcuL19hcnJheUFnZ3JlZ2F0b3InKSxcbiAgICBiYXNlQWdncmVnYXRvciA9IHJlcXVpcmUoJy4vX2Jhc2VBZ2dyZWdhdG9yJyksXG4gICAgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuZnVuY3Rpb24gY3JlYXRlQWdncmVnYXRvcihzZXR0ZXIsIGluaXRpYWxpemVyKSB7XG4gIHJldHVybiBmdW5jdGlvbihjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICAgIHZhciBmdW5jID0gaXNBcnJheShjb2xsZWN0aW9uKSA/IGFycmF5QWdncmVnYXRvciA6IGJhc2VBZ2dyZWdhdG9yLFxuICAgICAgICBhY2N1bXVsYXRvciA9IGluaXRpYWxpemVyID8gaW5pdGlhbGl6ZXIoKSA6IHt9O1xuICAgIHJldHVybiBmdW5jKGNvbGxlY3Rpb24sIHNldHRlciwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlKSwgYWNjdW11bGF0b3IpO1xuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVBZ2dyZWdhdG9yO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
