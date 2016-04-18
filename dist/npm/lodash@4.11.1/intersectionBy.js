'use strict';

System.register([], function (_export, _context) {
  var arrayMap, baseIntersection, baseIteratee, castArrayLikeObject, last, rest, intersectionBy;
  return {
    setters: [],
    execute: function () {
      arrayMap = require('./_arrayMap');
      baseIntersection = require('./_baseIntersection');
      baseIteratee = require('./_baseIteratee');
      castArrayLikeObject = require('./_castArrayLikeObject');
      last = require('./last');
      rest = require('./rest');
      intersectionBy = rest(function (arrays) {
        var iteratee = last(arrays),
            mapped = arrayMap(arrays, castArrayLikeObject);
        if (iteratee === last(mapped)) {
          iteratee = undefined;
        } else {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, baseIteratee(iteratee)) : [];
      });

      module.exports = intersectionBy;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ludGVyc2VjdGlvbkJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxpQkFBVyxRQUFRLGFBQVI7QUFDWCx5QkFBbUIsUUFBUSxxQkFBUjtBQUNuQixxQkFBZSxRQUFRLGlCQUFSO0FBQ2YsNEJBQXNCLFFBQVEsd0JBQVI7QUFDdEIsYUFBTyxRQUFRLFFBQVI7QUFDUCxhQUFPLFFBQVEsUUFBUjtBQUNQLHVCQUFpQixLQUFLLFVBQVMsTUFBVCxFQUFpQjtBQUN6QyxZQUFJLFdBQVcsS0FBSyxNQUFMLENBQVg7WUFDQSxTQUFTLFNBQVMsTUFBVCxFQUFpQixtQkFBakIsQ0FBVCxDQUZxQztBQUd6QyxZQUFJLGFBQWEsS0FBSyxNQUFMLENBQWIsRUFBMkI7QUFDN0IscUJBQVcsU0FBWCxDQUQ2QjtTQUEvQixNQUVPO0FBQ0wsaUJBQU8sR0FBUCxHQURLO1NBRlA7QUFLQSxlQUFPLE1BQUMsQ0FBTyxNQUFQLElBQWlCLE9BQU8sQ0FBUCxNQUFjLE9BQU8sQ0FBUCxDQUFkLEdBQTJCLGlCQUFpQixNQUFqQixFQUF5QixhQUFhLFFBQWIsQ0FBekIsQ0FBN0MsR0FBZ0csRUFBaEcsQ0FSa0M7T0FBakI7O0FBVTFCLGFBQU8sT0FBUCxHQUFpQixjQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9pbnRlcnNlY3Rpb25CeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBiYXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZSgnLi9fYmFzZUludGVyc2VjdGlvbicpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGNhc3RBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL19jYXN0QXJyYXlMaWtlT2JqZWN0JyksXG4gICAgbGFzdCA9IHJlcXVpcmUoJy4vbGFzdCcpLFxuICAgIHJlc3QgPSByZXF1aXJlKCcuL3Jlc3QnKTtcbnZhciBpbnRlcnNlY3Rpb25CeSA9IHJlc3QoZnVuY3Rpb24oYXJyYXlzKSB7XG4gIHZhciBpdGVyYXRlZSA9IGxhc3QoYXJyYXlzKSxcbiAgICAgIG1hcHBlZCA9IGFycmF5TWFwKGFycmF5cywgY2FzdEFycmF5TGlrZU9iamVjdCk7XG4gIGlmIChpdGVyYXRlZSA9PT0gbGFzdChtYXBwZWQpKSB7XG4gICAgaXRlcmF0ZWUgPSB1bmRlZmluZWQ7XG4gIH0gZWxzZSB7XG4gICAgbWFwcGVkLnBvcCgpO1xuICB9XG4gIHJldHVybiAobWFwcGVkLmxlbmd0aCAmJiBtYXBwZWRbMF0gPT09IGFycmF5c1swXSkgPyBiYXNlSW50ZXJzZWN0aW9uKG1hcHBlZCwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlKSkgOiBbXTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBpbnRlcnNlY3Rpb25CeTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
