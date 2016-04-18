'use strict';

System.register([], function (_export, _context) {
  var assignMergeValue, baseClone, copyArray, isArguments, isArray, isArrayLikeObject, isFunction, isObject, isPlainObject, isTypedArray, toPlainObject;

  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = object[key],
        srcValue = source[key],
        stacked = stack.get(srcValue);
    if (stacked) {
      assignMergeValue(object, key, stacked);
      return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
    var isCommon = newValue === undefined;
    if (isCommon) {
      newValue = srcValue;
      if (isArray(srcValue) || isTypedArray(srcValue)) {
        if (isArray(objValue)) {
          newValue = objValue;
        } else if (isArrayLikeObject(objValue)) {
          newValue = copyArray(objValue);
        } else {
          isCommon = false;
          newValue = baseClone(srcValue, true);
        }
      } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
        if (isArguments(objValue)) {
          newValue = toPlainObject(objValue);
        } else if (!isObject(objValue) || srcIndex && isFunction(objValue)) {
          isCommon = false;
          newValue = baseClone(srcValue, true);
        } else {
          newValue = objValue;
        }
      } else {
        isCommon = false;
      }
    }
    stack.set(srcValue, newValue);
    if (isCommon) {
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    }
    stack['delete'](srcValue);
    assignMergeValue(object, key, newValue);
  }
  return {
    setters: [],
    execute: function () {
      assignMergeValue = require('./_assignMergeValue');
      baseClone = require('./_baseClone');
      copyArray = require('./_copyArray');
      isArguments = require('./isArguments');
      isArray = require('./isArray');
      isArrayLikeObject = require('./isArrayLikeObject');
      isFunction = require('./isFunction');
      isObject = require('./isObject');
      isPlainObject = require('./isPlainObject');
      isTypedArray = require('./isTypedArray');
      toPlainObject = require('./toPlainObject');
      module.exports = baseMergeDeep;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlTWVyZ2VEZWVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBWUEsV0FBUyxhQUFULENBQXVCLE1BQXZCLEVBQStCLE1BQS9CLEVBQXVDLEdBQXZDLEVBQTRDLFFBQTVDLEVBQXNELFNBQXRELEVBQWlFLFVBQWpFLEVBQTZFLEtBQTdFLEVBQW9GO0FBQ2xGLFFBQUksV0FBVyxPQUFPLEdBQVAsQ0FBWDtRQUNBLFdBQVcsT0FBTyxHQUFQLENBQVg7UUFDQSxVQUFVLE1BQU0sR0FBTixDQUFVLFFBQVYsQ0FBVixDQUg4RTtBQUlsRixRQUFJLE9BQUosRUFBYTtBQUNYLHVCQUFpQixNQUFqQixFQUF5QixHQUF6QixFQUE4QixPQUE5QixFQURXO0FBRVgsYUFGVztLQUFiO0FBSUEsUUFBSSxXQUFXLGFBQWEsV0FBVyxRQUFYLEVBQXFCLFFBQXJCLEVBQWdDLE1BQU0sRUFBTixFQUFXLE1BQTNDLEVBQW1ELE1BQW5ELEVBQTJELEtBQTNELENBQWIsR0FBaUYsU0FBakYsQ0FSbUU7QUFTbEYsUUFBSSxXQUFXLGFBQWEsU0FBYixDQVRtRTtBQVVsRixRQUFJLFFBQUosRUFBYztBQUNaLGlCQUFXLFFBQVgsQ0FEWTtBQUVaLFVBQUksUUFBUSxRQUFSLEtBQXFCLGFBQWEsUUFBYixDQUFyQixFQUE2QztBQUMvQyxZQUFJLFFBQVEsUUFBUixDQUFKLEVBQXVCO0FBQ3JCLHFCQUFXLFFBQVgsQ0FEcUI7U0FBdkIsTUFFTyxJQUFJLGtCQUFrQixRQUFsQixDQUFKLEVBQWlDO0FBQ3RDLHFCQUFXLFVBQVUsUUFBVixDQUFYLENBRHNDO1NBQWpDLE1BRUE7QUFDTCxxQkFBVyxLQUFYLENBREs7QUFFTCxxQkFBVyxVQUFVLFFBQVYsRUFBb0IsSUFBcEIsQ0FBWCxDQUZLO1NBRkE7T0FIVCxNQVNPLElBQUksY0FBYyxRQUFkLEtBQTJCLFlBQVksUUFBWixDQUEzQixFQUFrRDtBQUMzRCxZQUFJLFlBQVksUUFBWixDQUFKLEVBQTJCO0FBQ3pCLHFCQUFXLGNBQWMsUUFBZCxDQUFYLENBRHlCO1NBQTNCLE1BRU8sSUFBSSxDQUFDLFNBQVMsUUFBVCxDQUFELElBQXdCLFlBQVksV0FBVyxRQUFYLENBQVosRUFBbUM7QUFDcEUscUJBQVcsS0FBWCxDQURvRTtBQUVwRSxxQkFBVyxVQUFVLFFBQVYsRUFBb0IsSUFBcEIsQ0FBWCxDQUZvRTtTQUEvRCxNQUdBO0FBQ0wscUJBQVcsUUFBWCxDQURLO1NBSEE7T0FIRixNQVNBO0FBQ0wsbUJBQVcsS0FBWCxDQURLO09BVEE7S0FYVDtBQXdCQSxVQUFNLEdBQU4sQ0FBVSxRQUFWLEVBQW9CLFFBQXBCLEVBbENrRjtBQW1DbEYsUUFBSSxRQUFKLEVBQWM7QUFDWixnQkFBVSxRQUFWLEVBQW9CLFFBQXBCLEVBQThCLFFBQTlCLEVBQXdDLFVBQXhDLEVBQW9ELEtBQXBELEVBRFk7S0FBZDtBQUdBLFVBQU0sUUFBTixFQUFnQixRQUFoQixFQXRDa0Y7QUF1Q2xGLHFCQUFpQixNQUFqQixFQUF5QixHQUF6QixFQUE4QixRQUE5QixFQXZDa0Y7R0FBcEY7Ozs7QUFYSSx5QkFBbUIsUUFBUSxxQkFBUjtBQUNuQixrQkFBWSxRQUFRLGNBQVI7QUFDWixrQkFBWSxRQUFRLGNBQVI7QUFDWixvQkFBYyxRQUFRLGVBQVI7QUFDZCxnQkFBVSxRQUFRLFdBQVI7QUFDViwwQkFBb0IsUUFBUSxxQkFBUjtBQUNwQixtQkFBYSxRQUFRLGNBQVI7QUFDYixpQkFBVyxRQUFRLFlBQVI7QUFDWCxzQkFBZ0IsUUFBUSxpQkFBUjtBQUNoQixxQkFBZSxRQUFRLGdCQUFSO0FBQ2Ysc0JBQWdCLFFBQVEsaUJBQVI7QUEwQ3BCLGFBQU8sT0FBUCxHQUFpQixhQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fYmFzZU1lcmdlRGVlcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFzc2lnbk1lcmdlVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25NZXJnZVZhbHVlJyksXG4gICAgYmFzZUNsb25lID0gcmVxdWlyZSgnLi9fYmFzZUNsb25lJyksXG4gICAgY29weUFycmF5ID0gcmVxdWlyZSgnLi9fY29weUFycmF5JyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZU9iamVjdCcpLFxuICAgIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnLi9pc1BsYWluT2JqZWN0JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKSxcbiAgICB0b1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnLi90b1BsYWluT2JqZWN0Jyk7XG5mdW5jdGlvbiBiYXNlTWVyZ2VEZWVwKG9iamVjdCwgc291cmNlLCBrZXksIHNyY0luZGV4LCBtZXJnZUZ1bmMsIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgc3JjVmFsdWUgPSBzb3VyY2Vba2V5XSxcbiAgICAgIHN0YWNrZWQgPSBzdGFjay5nZXQoc3JjVmFsdWUpO1xuICBpZiAoc3RhY2tlZCkge1xuICAgIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIHN0YWNrZWQpO1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyID8gY3VzdG9taXplcihvYmpWYWx1ZSwgc3JjVmFsdWUsIChrZXkgKyAnJyksIG9iamVjdCwgc291cmNlLCBzdGFjaykgOiB1bmRlZmluZWQ7XG4gIHZhciBpc0NvbW1vbiA9IG5ld1ZhbHVlID09PSB1bmRlZmluZWQ7XG4gIGlmIChpc0NvbW1vbikge1xuICAgIG5ld1ZhbHVlID0gc3JjVmFsdWU7XG4gICAgaWYgKGlzQXJyYXkoc3JjVmFsdWUpIHx8IGlzVHlwZWRBcnJheShzcmNWYWx1ZSkpIHtcbiAgICAgIGlmIChpc0FycmF5KG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IG9ialZhbHVlO1xuICAgICAgfSBlbHNlIGlmIChpc0FycmF5TGlrZU9iamVjdChvYmpWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBjb3B5QXJyYXkob2JqVmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICAgICAgbmV3VmFsdWUgPSBiYXNlQ2xvbmUoc3JjVmFsdWUsIHRydWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChzcmNWYWx1ZSkgfHwgaXNBcmd1bWVudHMoc3JjVmFsdWUpKSB7XG4gICAgICBpZiAoaXNBcmd1bWVudHMob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gdG9QbGFpbk9iamVjdChvYmpWYWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKCFpc09iamVjdChvYmpWYWx1ZSkgfHwgKHNyY0luZGV4ICYmIGlzRnVuY3Rpb24ob2JqVmFsdWUpKSkge1xuICAgICAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgICAgICBuZXdWYWx1ZSA9IGJhc2VDbG9uZShzcmNWYWx1ZSwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdWYWx1ZSA9IG9ialZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBzdGFjay5zZXQoc3JjVmFsdWUsIG5ld1ZhbHVlKTtcbiAgaWYgKGlzQ29tbW9uKSB7XG4gICAgbWVyZ2VGdW5jKG5ld1ZhbHVlLCBzcmNWYWx1ZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgfVxuICBzdGFja1snZGVsZXRlJ10oc3JjVmFsdWUpO1xuICBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNZXJnZURlZXA7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
