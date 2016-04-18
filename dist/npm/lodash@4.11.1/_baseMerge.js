'use strict';

System.register([], function (_export, _context) {
  var Stack, arrayEach, assignMergeValue, baseMergeDeep, isArray, isObject, isTypedArray, keysIn;

  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    if (!(isArray(source) || isTypedArray(source))) {
      var props = keysIn(source);
    }
    arrayEach(props || source, function (srcValue, key) {
      if (props) {
        key = srcValue;
        srcValue = source[key];
      }
      if (isObject(srcValue)) {
        stack || (stack = new Stack());
        baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
      } else {
        var newValue = customizer ? customizer(object[key], srcValue, key + '', object, source, stack) : undefined;
        if (newValue === undefined) {
          newValue = srcValue;
        }
        assignMergeValue(object, key, newValue);
      }
    });
  }
  return {
    setters: [],
    execute: function () {
      Stack = require('./_Stack');
      arrayEach = require('./_arrayEach');
      assignMergeValue = require('./_assignMergeValue');
      baseMergeDeep = require('./_baseMergeDeep');
      isArray = require('./isArray');
      isObject = require('./isObject');
      isTypedArray = require('./isTypedArray');
      keysIn = require('./keysIn');
      module.exports = baseMerge;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlTWVyZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSxXQUFTLFNBQVQsQ0FBbUIsTUFBbkIsRUFBMkIsTUFBM0IsRUFBbUMsUUFBbkMsRUFBNkMsVUFBN0MsRUFBeUQsS0FBekQsRUFBZ0U7QUFDOUQsUUFBSSxXQUFXLE1BQVgsRUFBbUI7QUFDckIsYUFEcUI7S0FBdkI7QUFHQSxRQUFJLEVBQUUsUUFBUSxNQUFSLEtBQW1CLGFBQWEsTUFBYixDQUFuQixDQUFGLEVBQTRDO0FBQzlDLFVBQUksUUFBUSxPQUFPLE1BQVAsQ0FBUixDQUQwQztLQUFoRDtBQUdBLGNBQVUsU0FBUyxNQUFULEVBQWlCLFVBQVMsUUFBVCxFQUFtQixHQUFuQixFQUF3QjtBQUNqRCxVQUFJLEtBQUosRUFBVztBQUNULGNBQU0sUUFBTixDQURTO0FBRVQsbUJBQVcsT0FBTyxHQUFQLENBQVgsQ0FGUztPQUFYO0FBSUEsVUFBSSxTQUFTLFFBQVQsQ0FBSixFQUF3QjtBQUN0QixrQkFBVSxRQUFRLElBQUksS0FBSixFQUFSLENBQVYsQ0FEc0I7QUFFdEIsc0JBQWMsTUFBZCxFQUFzQixNQUF0QixFQUE4QixHQUE5QixFQUFtQyxRQUFuQyxFQUE2QyxTQUE3QyxFQUF3RCxVQUF4RCxFQUFvRSxLQUFwRSxFQUZzQjtPQUF4QixNQUdPO0FBQ0wsWUFBSSxXQUFXLGFBQWEsV0FBVyxPQUFPLEdBQVAsQ0FBWCxFQUF3QixRQUF4QixFQUFtQyxNQUFNLEVBQU4sRUFBVyxNQUE5QyxFQUFzRCxNQUF0RCxFQUE4RCxLQUE5RCxDQUFiLEdBQW9GLFNBQXBGLENBRFY7QUFFTCxZQUFJLGFBQWEsU0FBYixFQUF3QjtBQUMxQixxQkFBVyxRQUFYLENBRDBCO1NBQTVCO0FBR0EseUJBQWlCLE1BQWpCLEVBQXlCLEdBQXpCLEVBQThCLFFBQTlCLEVBTEs7T0FIUDtLQUx5QixDQUEzQixDQVA4RDtHQUFoRTs7OztBQVJJLGNBQVEsUUFBUSxVQUFSO0FBQ1Isa0JBQVksUUFBUSxjQUFSO0FBQ1oseUJBQW1CLFFBQVEscUJBQVI7QUFDbkIsc0JBQWdCLFFBQVEsa0JBQVI7QUFDaEIsZ0JBQVUsUUFBUSxXQUFSO0FBQ1YsaUJBQVcsUUFBUSxZQUFSO0FBQ1gscUJBQWUsUUFBUSxnQkFBUjtBQUNmLGVBQVMsUUFBUSxVQUFSO0FBeUJiLGFBQU8sT0FBUCxHQUFpQixTQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fYmFzZU1lcmdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGFycmF5RWFjaCA9IHJlcXVpcmUoJy4vX2FycmF5RWFjaCcpLFxuICAgIGFzc2lnbk1lcmdlVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25NZXJnZVZhbHVlJyksXG4gICAgYmFzZU1lcmdlRGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VNZXJnZURlZXAnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuZnVuY3Rpb24gYmFzZU1lcmdlKG9iamVjdCwgc291cmNlLCBzcmNJbmRleCwgY3VzdG9taXplciwgc3RhY2spIHtcbiAgaWYgKG9iamVjdCA9PT0gc291cmNlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghKGlzQXJyYXkoc291cmNlKSB8fCBpc1R5cGVkQXJyYXkoc291cmNlKSkpIHtcbiAgICB2YXIgcHJvcHMgPSBrZXlzSW4oc291cmNlKTtcbiAgfVxuICBhcnJheUVhY2gocHJvcHMgfHwgc291cmNlLCBmdW5jdGlvbihzcmNWYWx1ZSwga2V5KSB7XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICBrZXkgPSBzcmNWYWx1ZTtcbiAgICAgIHNyY1ZhbHVlID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIGlmIChpc09iamVjdChzcmNWYWx1ZSkpIHtcbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgICBiYXNlTWVyZ2VEZWVwKG9iamVjdCwgc291cmNlLCBrZXksIHNyY0luZGV4LCBiYXNlTWVyZ2UsIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplciA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNyY1ZhbHVlLCAoa2V5ICsgJycpLCBvYmplY3QsIHNvdXJjZSwgc3RhY2spIDogdW5kZWZpbmVkO1xuICAgICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBzcmNWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH0pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWVyZ2U7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
