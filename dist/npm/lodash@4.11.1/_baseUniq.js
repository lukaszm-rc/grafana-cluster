'use strict';

System.register([], function (_export, _context) {
  var SetCache, arrayIncludes, arrayIncludesWith, cacheHas, createSet, setToArray, LARGE_ARRAY_SIZE;

  function baseUniq(array, iteratee, comparator) {
    var index = -1,
        includes = arrayIncludes,
        length = array.length,
        isCommon = true,
        result = [],
        seen = result;
    if (comparator) {
      isCommon = false;
      includes = arrayIncludesWith;
    } else if (length >= LARGE_ARRAY_SIZE) {
      var set = iteratee ? null : createSet(array);
      if (set) {
        return setToArray(set);
      }
      isCommon = false;
      includes = cacheHas;
      seen = new SetCache();
    } else {
      seen = iteratee ? [] : result;
    }
    outer: while (++index < length) {
      var value = array[index],
          computed = iteratee ? iteratee(value) : value;
      if (isCommon && computed === computed) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed);
        }
        result.push(value);
      } else if (!includes(seen, computed, comparator)) {
        if (seen !== result) {
          seen.push(computed);
        }
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
      cacheHas = require('./_cacheHas');
      createSet = require('./_createSet');
      setToArray = require('./_setToArray');
      LARGE_ARRAY_SIZE = 200;
      module.exports = baseUniq;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlVW5pcS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVFBLFdBQVMsUUFBVCxDQUFrQixLQUFsQixFQUF5QixRQUF6QixFQUFtQyxVQUFuQyxFQUErQztBQUM3QyxRQUFJLFFBQVEsQ0FBQyxDQUFEO1FBQ1IsV0FBVyxhQUFYO1FBQ0EsU0FBUyxNQUFNLE1BQU47UUFDVCxXQUFXLElBQVg7UUFDQSxTQUFTLEVBQVQ7UUFDQSxPQUFPLE1BQVAsQ0FOeUM7QUFPN0MsUUFBSSxVQUFKLEVBQWdCO0FBQ2QsaUJBQVcsS0FBWCxDQURjO0FBRWQsaUJBQVcsaUJBQVgsQ0FGYztLQUFoQixNQUdPLElBQUksVUFBVSxnQkFBVixFQUE0QjtBQUNyQyxVQUFJLE1BQU0sV0FBVyxJQUFYLEdBQWtCLFVBQVUsS0FBVixDQUFsQixDQUQyQjtBQUVyQyxVQUFJLEdBQUosRUFBUztBQUNQLGVBQU8sV0FBVyxHQUFYLENBQVAsQ0FETztPQUFUO0FBR0EsaUJBQVcsS0FBWCxDQUxxQztBQU1yQyxpQkFBVyxRQUFYLENBTnFDO0FBT3JDLGFBQU8sSUFBSSxRQUFKLEVBQVAsQ0FQcUM7S0FBaEMsTUFRQTtBQUNMLGFBQU8sV0FBVyxFQUFYLEdBQWdCLE1BQWhCLENBREY7S0FSQTtBQVdQLFdBQU8sT0FBTyxFQUFFLEtBQUYsR0FBVSxNQUFWLEVBQWtCO0FBQzlCLFVBQUksUUFBUSxNQUFNLEtBQU4sQ0FBUjtVQUNBLFdBQVcsV0FBVyxTQUFTLEtBQVQsQ0FBWCxHQUE2QixLQUE3QixDQUZlO0FBRzlCLFVBQUksWUFBWSxhQUFhLFFBQWIsRUFBdUI7QUFDckMsWUFBSSxZQUFZLEtBQUssTUFBTCxDQURxQjtBQUVyQyxlQUFPLFdBQVAsRUFBb0I7QUFDbEIsY0FBSSxLQUFLLFNBQUwsTUFBb0IsUUFBcEIsRUFBOEI7QUFDaEMscUJBQVMsS0FBVCxDQURnQztXQUFsQztTQURGO0FBS0EsWUFBSSxRQUFKLEVBQWM7QUFDWixlQUFLLElBQUwsQ0FBVSxRQUFWLEVBRFk7U0FBZDtBQUdBLGVBQU8sSUFBUCxDQUFZLEtBQVosRUFWcUM7T0FBdkMsTUFXTyxJQUFJLENBQUMsU0FBUyxJQUFULEVBQWUsUUFBZixFQUF5QixVQUF6QixDQUFELEVBQXVDO0FBQ2hELFlBQUksU0FBUyxNQUFULEVBQWlCO0FBQ25CLGVBQUssSUFBTCxDQUFVLFFBQVYsRUFEbUI7U0FBckI7QUFHQSxlQUFPLElBQVAsQ0FBWSxLQUFaLEVBSmdEO09BQTNDO0tBZEY7QUFxQlAsV0FBTyxNQUFQLENBMUM2QztHQUEvQzs7OztBQVBJLGlCQUFXLFFBQVEsYUFBUjtBQUNYLHNCQUFnQixRQUFRLGtCQUFSO0FBQ2hCLDBCQUFvQixRQUFRLHNCQUFSO0FBQ3BCLGlCQUFXLFFBQVEsYUFBUjtBQUNYLGtCQUFZLFFBQVEsY0FBUjtBQUNaLG1CQUFhLFFBQVEsZUFBUjtBQUNiLHlCQUFtQjtBQTZDdkIsYUFBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19iYXNlVW5pcS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheUluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlcycpLFxuICAgIGFycmF5SW5jbHVkZXNXaXRoID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlc1dpdGgnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyksXG4gICAgY3JlYXRlU2V0ID0gcmVxdWlyZSgnLi9fY3JlYXRlU2V0JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuZnVuY3Rpb24gYmFzZVVuaXEoYXJyYXksIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaXNDb21tb24gPSB0cnVlLFxuICAgICAgcmVzdWx0ID0gW10sXG4gICAgICBzZWVuID0gcmVzdWx0O1xuICBpZiAoY29tcGFyYXRvcikge1xuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzV2l0aDtcbiAgfSBlbHNlIGlmIChsZW5ndGggPj0gTEFSR0VfQVJSQVlfU0laRSkge1xuICAgIHZhciBzZXQgPSBpdGVyYXRlZSA/IG51bGwgOiBjcmVhdGVTZXQoYXJyYXkpO1xuICAgIGlmIChzZXQpIHtcbiAgICAgIHJldHVybiBzZXRUb0FycmF5KHNldCk7XG4gICAgfVxuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgaW5jbHVkZXMgPSBjYWNoZUhhcztcbiAgICBzZWVuID0gbmV3IFNldENhY2hlO1xuICB9IGVsc2Uge1xuICAgIHNlZW4gPSBpdGVyYXRlZSA/IFtdIDogcmVzdWx0O1xuICB9XG4gIG91dGVyOiB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlKSA6IHZhbHVlO1xuICAgIGlmIChpc0NvbW1vbiAmJiBjb21wdXRlZCA9PT0gY29tcHV0ZWQpIHtcbiAgICAgIHZhciBzZWVuSW5kZXggPSBzZWVuLmxlbmd0aDtcbiAgICAgIHdoaWxlIChzZWVuSW5kZXgtLSkge1xuICAgICAgICBpZiAoc2VlbltzZWVuSW5kZXhdID09PSBjb21wdXRlZCkge1xuICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXRlcmF0ZWUpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKCFpbmNsdWRlcyhzZWVuLCBjb21wdXRlZCwgY29tcGFyYXRvcikpIHtcbiAgICAgIGlmIChzZWVuICE9PSByZXN1bHQpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuaXE7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
