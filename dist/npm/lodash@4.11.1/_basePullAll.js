'use strict';

System.register([], function (_export, _context) {
  var arrayMap, baseIndexOf, baseIndexOfWith, baseUnary, arrayProto, splice;

  function basePullAll(array, values, iteratee, comparator) {
    var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
        index = -1,
        length = values.length,
        seen = array;
    if (iteratee) {
      seen = arrayMap(array, baseUnary(iteratee));
    }
    while (++index < length) {
      var fromIndex = 0,
          value = values[index],
          computed = iteratee ? iteratee(value) : value;
      while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
        if (seen !== array) {
          splice.call(seen, fromIndex, 1);
        }
        splice.call(array, fromIndex, 1);
      }
    }
    return array;
  }
  return {
    setters: [],
    execute: function () {
      arrayMap = require('./_arrayMap');
      baseIndexOf = require('./_baseIndexOf');
      baseIndexOfWith = require('./_baseIndexOfWith');
      baseUnary = require('./_baseUnary');
      arrayProto = Array.prototype;
      splice = arrayProto.splice;
      module.exports = basePullAll;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlUHVsbEFsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQU9BLFdBQVMsV0FBVCxDQUFxQixLQUFyQixFQUE0QixNQUE1QixFQUFvQyxRQUFwQyxFQUE4QyxVQUE5QyxFQUEwRDtBQUN4RCxRQUFJLFVBQVUsYUFBYSxlQUFiLEdBQStCLFdBQS9CO1FBQ1YsUUFBUSxDQUFDLENBQUQ7UUFDUixTQUFTLE9BQU8sTUFBUDtRQUNULE9BQU8sS0FBUCxDQUpvRDtBQUt4RCxRQUFJLFFBQUosRUFBYztBQUNaLGFBQU8sU0FBUyxLQUFULEVBQWdCLFVBQVUsUUFBVixDQUFoQixDQUFQLENBRFk7S0FBZDtBQUdBLFdBQU8sRUFBRSxLQUFGLEdBQVUsTUFBVixFQUFrQjtBQUN2QixVQUFJLFlBQVksQ0FBWjtVQUNBLFFBQVEsT0FBTyxLQUFQLENBQVI7VUFDQSxXQUFXLFdBQVcsU0FBUyxLQUFULENBQVgsR0FBNkIsS0FBN0IsQ0FIUTtBQUl2QixhQUFPLENBQUMsWUFBWSxRQUFRLElBQVIsRUFBYyxRQUFkLEVBQXdCLFNBQXhCLEVBQW1DLFVBQW5DLENBQVosQ0FBRCxHQUErRCxDQUFDLENBQUQsRUFBSTtBQUN4RSxZQUFJLFNBQVMsS0FBVCxFQUFnQjtBQUNsQixpQkFBTyxJQUFQLENBQVksSUFBWixFQUFrQixTQUFsQixFQUE2QixDQUE3QixFQURrQjtTQUFwQjtBQUdBLGVBQU8sSUFBUCxDQUFZLEtBQVosRUFBbUIsU0FBbkIsRUFBOEIsQ0FBOUIsRUFKd0U7T0FBMUU7S0FKRjtBQVdBLFdBQU8sS0FBUCxDQW5Cd0Q7R0FBMUQ7Ozs7QUFOSSxpQkFBVyxRQUFRLGFBQVI7QUFDWCxvQkFBYyxRQUFRLGdCQUFSO0FBQ2Qsd0JBQWtCLFFBQVEsb0JBQVI7QUFDbEIsa0JBQVksUUFBUSxjQUFSO0FBQ1osbUJBQWEsTUFBTSxTQUFOO0FBQ2IsZUFBUyxXQUFXLE1BQVg7QUFzQmIsYUFBTyxPQUFQLEdBQWlCLFdBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19iYXNlUHVsbEFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBiYXNlSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Jhc2VJbmRleE9mJyksXG4gICAgYmFzZUluZGV4T2ZXaXRoID0gcmVxdWlyZSgnLi9fYmFzZUluZGV4T2ZXaXRoJyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5Jyk7XG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcbmZ1bmN0aW9uIGJhc2VQdWxsQWxsKGFycmF5LCB2YWx1ZXMsIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleE9mID0gY29tcGFyYXRvciA/IGJhc2VJbmRleE9mV2l0aCA6IGJhc2VJbmRleE9mLFxuICAgICAgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBzZWVuID0gYXJyYXk7XG4gIGlmIChpdGVyYXRlZSkge1xuICAgIHNlZW4gPSBhcnJheU1hcChhcnJheSwgYmFzZVVuYXJ5KGl0ZXJhdGVlKSk7XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZnJvbUluZGV4ID0gMCxcbiAgICAgICAgdmFsdWUgPSB2YWx1ZXNbaW5kZXhdLFxuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlID8gaXRlcmF0ZWUodmFsdWUpIDogdmFsdWU7XG4gICAgd2hpbGUgKChmcm9tSW5kZXggPSBpbmRleE9mKHNlZW4sIGNvbXB1dGVkLCBmcm9tSW5kZXgsIGNvbXBhcmF0b3IpKSA+IC0xKSB7XG4gICAgICBpZiAoc2VlbiAhPT0gYXJyYXkpIHtcbiAgICAgICAgc3BsaWNlLmNhbGwoc2VlbiwgZnJvbUluZGV4LCAxKTtcbiAgICAgIH1cbiAgICAgIHNwbGljZS5jYWxsKGFycmF5LCBmcm9tSW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQdWxsQWxsO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
