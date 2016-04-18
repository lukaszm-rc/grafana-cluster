'use strict';

System.register([], function (_export, _context) {
  var SetCache, arrayIncludes, arrayIncludesWith, arrayMap, baseUnary, cacheHas, nativeMin;

  function baseIntersection(arrays, iteratee, comparator) {
    var includes = comparator ? arrayIncludesWith : arrayIncludes,
        length = arrays[0].length,
        othLength = arrays.length,
        othIndex = othLength,
        caches = Array(othLength),
        maxLength = Infinity,
        result = [];
    while (othIndex--) {
      var array = arrays[othIndex];
      if (othIndex && iteratee) {
        array = arrayMap(array, baseUnary(iteratee));
      }
      maxLength = nativeMin(array.length, maxLength);
      caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined;
    }
    array = arrays[0];
    var index = -1,
        seen = caches[0];
    outer: while (++index < length && result.length < maxLength) {
      var value = array[index],
          computed = iteratee ? iteratee(value) : value;
      if (!(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {
        othIndex = othLength;
        while (--othIndex) {
          var cache = caches[othIndex];
          if (!(cache ? cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator))) {
            continue outer;
          }
        }
        if (seen) {
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
      arrayMap = require('./_arrayMap');
      baseUnary = require('./_baseUnary');
      cacheHas = require('./_cacheHas');
      nativeMin = Math.min;
      module.exports = baseIntersection;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlSW50ZXJzZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBUUEsV0FBUyxnQkFBVCxDQUEwQixNQUExQixFQUFrQyxRQUFsQyxFQUE0QyxVQUE1QyxFQUF3RDtBQUN0RCxRQUFJLFdBQVcsYUFBYSxpQkFBYixHQUFpQyxhQUFqQztRQUNYLFNBQVMsT0FBTyxDQUFQLEVBQVUsTUFBVjtRQUNULFlBQVksT0FBTyxNQUFQO1FBQ1osV0FBVyxTQUFYO1FBQ0EsU0FBUyxNQUFNLFNBQU4sQ0FBVDtRQUNBLFlBQVksUUFBWjtRQUNBLFNBQVMsRUFBVCxDQVBrRDtBQVF0RCxXQUFPLFVBQVAsRUFBbUI7QUFDakIsVUFBSSxRQUFRLE9BQU8sUUFBUCxDQUFSLENBRGE7QUFFakIsVUFBSSxZQUFZLFFBQVosRUFBc0I7QUFDeEIsZ0JBQVEsU0FBUyxLQUFULEVBQWdCLFVBQVUsUUFBVixDQUFoQixDQUFSLENBRHdCO09BQTFCO0FBR0Esa0JBQVksVUFBVSxNQUFNLE1BQU4sRUFBYyxTQUF4QixDQUFaLENBTGlCO0FBTWpCLGFBQU8sUUFBUCxJQUFtQixDQUFDLFVBQUQsS0FBZ0IsWUFBYSxVQUFVLEdBQVYsSUFBaUIsTUFBTSxNQUFOLElBQWdCLEdBQWhCLENBQTlDLEdBQXNFLElBQUksUUFBSixDQUFhLFlBQVksS0FBWixDQUFuRixHQUF3RyxTQUF4RyxDQU5GO0tBQW5CO0FBUUEsWUFBUSxPQUFPLENBQVAsQ0FBUixDQWhCc0Q7QUFpQnRELFFBQUksUUFBUSxDQUFDLENBQUQ7UUFDUixPQUFPLE9BQU8sQ0FBUCxDQUFQLENBbEJrRDtBQW1CdEQsV0FBTyxPQUFPLEVBQUUsS0FBRixHQUFVLE1BQVYsSUFBb0IsT0FBTyxNQUFQLEdBQWdCLFNBQWhCLEVBQTJCO0FBQzNELFVBQUksUUFBUSxNQUFNLEtBQU4sQ0FBUjtVQUNBLFdBQVcsV0FBVyxTQUFTLEtBQVQsQ0FBWCxHQUE2QixLQUE3QixDQUY0QztBQUczRCxVQUFJLEVBQUUsT0FBTyxTQUFTLElBQVQsRUFBZSxRQUFmLENBQVAsR0FBa0MsU0FBUyxNQUFULEVBQWlCLFFBQWpCLEVBQTJCLFVBQTNCLENBQWxDLENBQUYsRUFBNkU7QUFDL0UsbUJBQVcsU0FBWCxDQUQrRTtBQUUvRSxlQUFPLEVBQUUsUUFBRixFQUFZO0FBQ2pCLGNBQUksUUFBUSxPQUFPLFFBQVAsQ0FBUixDQURhO0FBRWpCLGNBQUksRUFBRSxRQUFRLFNBQVMsS0FBVCxFQUFnQixRQUFoQixDQUFSLEdBQW9DLFNBQVMsT0FBTyxRQUFQLENBQVQsRUFBMkIsUUFBM0IsRUFBcUMsVUFBckMsQ0FBcEMsQ0FBRixFQUF5RjtBQUMzRixxQkFBUyxLQUFULENBRDJGO1dBQTdGO1NBRkY7QUFNQSxZQUFJLElBQUosRUFBVTtBQUNSLGVBQUssSUFBTCxDQUFVLFFBQVYsRUFEUTtTQUFWO0FBR0EsZUFBTyxJQUFQLENBQVksS0FBWixFQVgrRTtPQUFqRjtLQUhLO0FBaUJQLFdBQU8sTUFBUCxDQXBDc0Q7R0FBeEQ7Ozs7QUFQSSxpQkFBVyxRQUFRLGFBQVI7QUFDWCxzQkFBZ0IsUUFBUSxrQkFBUjtBQUNoQiwwQkFBb0IsUUFBUSxzQkFBUjtBQUNwQixpQkFBVyxRQUFRLGFBQVI7QUFDWCxrQkFBWSxRQUFRLGNBQVI7QUFDWixpQkFBVyxRQUFRLGFBQVI7QUFDWCxrQkFBWSxLQUFLLEdBQUw7QUF1Q2hCLGFBQU8sT0FBUCxHQUFpQixnQkFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2Jhc2VJbnRlcnNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlJbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXMnKSxcbiAgICBhcnJheUluY2x1ZGVzV2l0aCA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXNXaXRoJyksXG4gICAgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKTtcbnZhciBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcbmZ1bmN0aW9uIGJhc2VJbnRlcnNlY3Rpb24oYXJyYXlzLCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5jbHVkZXMgPSBjb21wYXJhdG9yID8gYXJyYXlJbmNsdWRlc1dpdGggOiBhcnJheUluY2x1ZGVzLFxuICAgICAgbGVuZ3RoID0gYXJyYXlzWzBdLmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IGFycmF5cy5sZW5ndGgsXG4gICAgICBvdGhJbmRleCA9IG90aExlbmd0aCxcbiAgICAgIGNhY2hlcyA9IEFycmF5KG90aExlbmd0aCksXG4gICAgICBtYXhMZW5ndGggPSBJbmZpbml0eSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuICB3aGlsZSAob3RoSW5kZXgtLSkge1xuICAgIHZhciBhcnJheSA9IGFycmF5c1tvdGhJbmRleF07XG4gICAgaWYgKG90aEluZGV4ICYmIGl0ZXJhdGVlKSB7XG4gICAgICBhcnJheSA9IGFycmF5TWFwKGFycmF5LCBiYXNlVW5hcnkoaXRlcmF0ZWUpKTtcbiAgICB9XG4gICAgbWF4TGVuZ3RoID0gbmF0aXZlTWluKGFycmF5Lmxlbmd0aCwgbWF4TGVuZ3RoKTtcbiAgICBjYWNoZXNbb3RoSW5kZXhdID0gIWNvbXBhcmF0b3IgJiYgKGl0ZXJhdGVlIHx8IChsZW5ndGggPj0gMTIwICYmIGFycmF5Lmxlbmd0aCA+PSAxMjApKSA/IG5ldyBTZXRDYWNoZShvdGhJbmRleCAmJiBhcnJheSkgOiB1bmRlZmluZWQ7XG4gIH1cbiAgYXJyYXkgPSBhcnJheXNbMF07XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgc2VlbiA9IGNhY2hlc1swXTtcbiAgb3V0ZXI6IHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoICYmIHJlc3VsdC5sZW5ndGggPCBtYXhMZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZTtcbiAgICBpZiAoIShzZWVuID8gY2FjaGVIYXMoc2VlbiwgY29tcHV0ZWQpIDogaW5jbHVkZXMocmVzdWx0LCBjb21wdXRlZCwgY29tcGFyYXRvcikpKSB7XG4gICAgICBvdGhJbmRleCA9IG90aExlbmd0aDtcbiAgICAgIHdoaWxlICgtLW90aEluZGV4KSB7XG4gICAgICAgIHZhciBjYWNoZSA9IGNhY2hlc1tvdGhJbmRleF07XG4gICAgICAgIGlmICghKGNhY2hlID8gY2FjaGVIYXMoY2FjaGUsIGNvbXB1dGVkKSA6IGluY2x1ZGVzKGFycmF5c1tvdGhJbmRleF0sIGNvbXB1dGVkLCBjb21wYXJhdG9yKSkpIHtcbiAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNlZW4pIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbm1vZHVsZS5leHBvcnRzID0gYmFzZUludGVyc2VjdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
