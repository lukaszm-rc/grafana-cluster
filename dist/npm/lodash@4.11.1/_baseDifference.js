'use strict';

System.register([], function (_export, _context) {
  var SetCache, arrayIncludes, arrayIncludesWith, arrayMap, baseUnary, cacheHas, LARGE_ARRAY_SIZE;

  function baseDifference(array, values, iteratee, comparator) {
    var index = -1,
        includes = arrayIncludes,
        isCommon = true,
        length = array.length,
        result = [],
        valuesLength = values.length;
    if (!length) {
      return result;
    }
    if (iteratee) {
      values = arrayMap(values, baseUnary(iteratee));
    }
    if (comparator) {
      includes = arrayIncludesWith;
      isCommon = false;
    } else if (values.length >= LARGE_ARRAY_SIZE) {
      includes = cacheHas;
      isCommon = false;
      values = new SetCache(values);
    }
    outer: while (++index < length) {
      var value = array[index],
          computed = iteratee ? iteratee(value) : value;
      if (isCommon && computed === computed) {
        var valuesIndex = valuesLength;
        while (valuesIndex--) {
          if (values[valuesIndex] === computed) {
            continue outer;
          }
        }
        result.push(value);
      } else if (!includes(values, computed, comparator)) {
        result.push(value);
      }
    }
    return result;
  }
  return {
    setters: [],
    execute: function () {
      SetCache = require('./_SetCache');
      arrayIncludes = require('./_arrayIncludes');
      arrayIncludesWith = require('./_arrayIncludesWith');
      arrayMap = require('./_arrayMap');
      baseUnary = require('./_baseUnary');
      cacheHas = require('./_cacheHas');
      LARGE_ARRAY_SIZE = 200;
      module.exports = baseDifference;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlRGlmZmVyZW5jZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVFBLFdBQVMsY0FBVCxDQUF3QixLQUF4QixFQUErQixNQUEvQixFQUF1QyxRQUF2QyxFQUFpRCxVQUFqRCxFQUE2RDtBQUMzRCxRQUFJLFFBQVEsQ0FBQyxDQUFEO1FBQ1IsV0FBVyxhQUFYO1FBQ0EsV0FBVyxJQUFYO1FBQ0EsU0FBUyxNQUFNLE1BQU47UUFDVCxTQUFTLEVBQVQ7UUFDQSxlQUFlLE9BQU8sTUFBUCxDQU53QztBQU8zRCxRQUFJLENBQUMsTUFBRCxFQUFTO0FBQ1gsYUFBTyxNQUFQLENBRFc7S0FBYjtBQUdBLFFBQUksUUFBSixFQUFjO0FBQ1osZUFBUyxTQUFTLE1BQVQsRUFBaUIsVUFBVSxRQUFWLENBQWpCLENBQVQsQ0FEWTtLQUFkO0FBR0EsUUFBSSxVQUFKLEVBQWdCO0FBQ2QsaUJBQVcsaUJBQVgsQ0FEYztBQUVkLGlCQUFXLEtBQVgsQ0FGYztLQUFoQixNQUdPLElBQUksT0FBTyxNQUFQLElBQWlCLGdCQUFqQixFQUFtQztBQUM1QyxpQkFBVyxRQUFYLENBRDRDO0FBRTVDLGlCQUFXLEtBQVgsQ0FGNEM7QUFHNUMsZUFBUyxJQUFJLFFBQUosQ0FBYSxNQUFiLENBQVQsQ0FINEM7S0FBdkM7QUFLUCxXQUFPLE9BQU8sRUFBRSxLQUFGLEdBQVUsTUFBVixFQUFrQjtBQUM5QixVQUFJLFFBQVEsTUFBTSxLQUFOLENBQVI7VUFDQSxXQUFXLFdBQVcsU0FBUyxLQUFULENBQVgsR0FBNkIsS0FBN0IsQ0FGZTtBQUc5QixVQUFJLFlBQVksYUFBYSxRQUFiLEVBQXVCO0FBQ3JDLFlBQUksY0FBYyxZQUFkLENBRGlDO0FBRXJDLGVBQU8sYUFBUCxFQUFzQjtBQUNwQixjQUFJLE9BQU8sV0FBUCxNQUF3QixRQUF4QixFQUFrQztBQUNwQyxxQkFBUyxLQUFULENBRG9DO1dBQXRDO1NBREY7QUFLQSxlQUFPLElBQVAsQ0FBWSxLQUFaLEVBUHFDO09BQXZDLE1BUU8sSUFBSSxDQUFDLFNBQVMsTUFBVCxFQUFpQixRQUFqQixFQUEyQixVQUEzQixDQUFELEVBQXlDO0FBQ2xELGVBQU8sSUFBUCxDQUFZLEtBQVosRUFEa0Q7T0FBN0M7S0FYRjtBQWVQLFdBQU8sTUFBUCxDQXBDMkQ7R0FBN0Q7Ozs7QUFQSSxpQkFBVyxRQUFRLGFBQVI7QUFDWCxzQkFBZ0IsUUFBUSxrQkFBUjtBQUNoQiwwQkFBb0IsUUFBUSxzQkFBUjtBQUNwQixpQkFBVyxRQUFRLGFBQVI7QUFDWCxrQkFBWSxRQUFRLGNBQVI7QUFDWixpQkFBVyxRQUFRLGFBQVI7QUFDWCx5QkFBbUI7QUF1Q3ZCLGFBQU8sT0FBUCxHQUFpQixjQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fYmFzZURpZmZlcmVuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlJbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXMnKSxcbiAgICBhcnJheUluY2x1ZGVzV2l0aCA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXNXaXRoJyksXG4gICAgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKTtcbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuZnVuY3Rpb24gYmFzZURpZmZlcmVuY2UoYXJyYXksIHZhbHVlcywgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXMsXG4gICAgICBpc0NvbW1vbiA9IHRydWUsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBbXSxcbiAgICAgIHZhbHVlc0xlbmd0aCA9IHZhbHVlcy5sZW5ndGg7XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoaXRlcmF0ZWUpIHtcbiAgICB2YWx1ZXMgPSBhcnJheU1hcCh2YWx1ZXMsIGJhc2VVbmFyeShpdGVyYXRlZSkpO1xuICB9XG4gIGlmIChjb21wYXJhdG9yKSB7XG4gICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzV2l0aDtcbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKHZhbHVlcy5sZW5ndGggPj0gTEFSR0VfQVJSQVlfU0laRSkge1xuICAgIGluY2x1ZGVzID0gY2FjaGVIYXM7XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICB2YWx1ZXMgPSBuZXcgU2V0Q2FjaGUodmFsdWVzKTtcbiAgfVxuICBvdXRlcjogd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZTtcbiAgICBpZiAoaXNDb21tb24gJiYgY29tcHV0ZWQgPT09IGNvbXB1dGVkKSB7XG4gICAgICB2YXIgdmFsdWVzSW5kZXggPSB2YWx1ZXNMZW5ndGg7XG4gICAgICB3aGlsZSAodmFsdWVzSW5kZXgtLSkge1xuICAgICAgICBpZiAodmFsdWVzW3ZhbHVlc0luZGV4XSA9PT0gY29tcHV0ZWQpIHtcbiAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoIWluY2x1ZGVzKHZhbHVlcywgY29tcHV0ZWQsIGNvbXBhcmF0b3IpKSB7XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VEaWZmZXJlbmNlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
