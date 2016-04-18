"use strict";

System.register([], function (_export, _context) {
  var nativeMax;


  /**
   * This function is like `composeArgs` except that the arguments composition
   * is tailored for `_.partialRight`.
   *
   * @private
   * @param {Array|Object} args The provided arguments.
   * @param {Array} partials The arguments to append to those provided.
   * @param {Array} holders The `partials` placeholder indexes.
   * @params {boolean} [isCurried] Specify composing for a curried function.
   * @returns {Array} Returns the new array of composed arguments.
   */
  function composeArgsRight(args, partials, holders, isCurried) {
    var argsIndex = -1,
        argsLength = args.length,
        holdersIndex = -1,
        holdersLength = holders.length,
        rightIndex = -1,
        rightLength = partials.length,
        rangeLength = nativeMax(argsLength - holdersLength, 0),
        result = Array(rangeLength + rightLength),
        isUncurried = !isCurried;

    while (++argsIndex < rangeLength) {
      result[argsIndex] = args[argsIndex];
    }
    var offset = argsIndex;
    while (++rightIndex < rightLength) {
      result[offset + rightIndex] = partials[rightIndex];
    }
    while (++holdersIndex < holdersLength) {
      if (isUncurried || argsIndex < argsLength) {
        result[offset + holders[holdersIndex]] = args[argsIndex++];
      }
    }
    return result;
  }

  return {
    setters: [],
    execute: function () {
      nativeMax = Math.max;
      module.exports = composeArgsRight;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jb21wb3NlQXJnc1JpZ2h0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0EsV0FBUyxnQkFBVCxDQUEwQixJQUExQixFQUFnQyxRQUFoQyxFQUEwQyxPQUExQyxFQUFtRCxTQUFuRCxFQUE4RDtBQUM1RCxRQUFJLFlBQVksQ0FBQyxDQUFEO1FBQ1osYUFBYSxLQUFLLE1BQUw7UUFDYixlQUFlLENBQUMsQ0FBRDtRQUNmLGdCQUFnQixRQUFRLE1BQVI7UUFDaEIsYUFBYSxDQUFDLENBQUQ7UUFDYixjQUFjLFNBQVMsTUFBVDtRQUNkLGNBQWMsVUFBVSxhQUFhLGFBQWIsRUFBNEIsQ0FBdEMsQ0FBZDtRQUNBLFNBQVMsTUFBTSxjQUFjLFdBQWQsQ0FBZjtRQUNBLGNBQWMsQ0FBQyxTQUFELENBVDBDOztBQVc1RCxXQUFPLEVBQUUsU0FBRixHQUFjLFdBQWQsRUFBMkI7QUFDaEMsYUFBTyxTQUFQLElBQW9CLEtBQUssU0FBTCxDQUFwQixDQURnQztLQUFsQztBQUdBLFFBQUksU0FBUyxTQUFULENBZHdEO0FBZTVELFdBQU8sRUFBRSxVQUFGLEdBQWUsV0FBZixFQUE0QjtBQUNqQyxhQUFPLFNBQVMsVUFBVCxDQUFQLEdBQThCLFNBQVMsVUFBVCxDQUE5QixDQURpQztLQUFuQztBQUdBLFdBQU8sRUFBRSxZQUFGLEdBQWlCLGFBQWpCLEVBQWdDO0FBQ3JDLFVBQUksZUFBZSxZQUFZLFVBQVosRUFBd0I7QUFDekMsZUFBTyxTQUFTLFFBQVEsWUFBUixDQUFULENBQVAsR0FBeUMsS0FBSyxXQUFMLENBQXpDLENBRHlDO09BQTNDO0tBREY7QUFLQSxXQUFPLE1BQVAsQ0F2QjREO0dBQTlEOzs7OztBQWJJLGtCQUFZLEtBQUssR0FBTDtBQXVDaEIsYUFBTyxPQUFQLEdBQWlCLGdCQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fY29tcG9zZUFyZ3NSaWdodC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heDtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGNvbXBvc2VBcmdzYCBleGNlcHQgdGhhdCB0aGUgYXJndW1lbnRzIGNvbXBvc2l0aW9uXG4gKiBpcyB0YWlsb3JlZCBmb3IgYF8ucGFydGlhbFJpZ2h0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGFyZ3MgVGhlIHByb3ZpZGVkIGFyZ3VtZW50cy5cbiAqIEBwYXJhbSB7QXJyYXl9IHBhcnRpYWxzIFRoZSBhcmd1bWVudHMgdG8gYXBwZW5kIHRvIHRob3NlIHByb3ZpZGVkLlxuICogQHBhcmFtIHtBcnJheX0gaG9sZGVycyBUaGUgYHBhcnRpYWxzYCBwbGFjZWhvbGRlciBpbmRleGVzLlxuICogQHBhcmFtcyB7Ym9vbGVhbn0gW2lzQ3VycmllZF0gU3BlY2lmeSBjb21wb3NpbmcgZm9yIGEgY3VycmllZCBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIGNvbXBvc2VkIGFyZ3VtZW50cy5cbiAqL1xuZnVuY3Rpb24gY29tcG9zZUFyZ3NSaWdodChhcmdzLCBwYXJ0aWFscywgaG9sZGVycywgaXNDdXJyaWVkKSB7XG4gIHZhciBhcmdzSW5kZXggPSAtMSxcbiAgICAgIGFyZ3NMZW5ndGggPSBhcmdzLmxlbmd0aCxcbiAgICAgIGhvbGRlcnNJbmRleCA9IC0xLFxuICAgICAgaG9sZGVyc0xlbmd0aCA9IGhvbGRlcnMubGVuZ3RoLFxuICAgICAgcmlnaHRJbmRleCA9IC0xLFxuICAgICAgcmlnaHRMZW5ndGggPSBwYXJ0aWFscy5sZW5ndGgsXG4gICAgICByYW5nZUxlbmd0aCA9IG5hdGl2ZU1heChhcmdzTGVuZ3RoIC0gaG9sZGVyc0xlbmd0aCwgMCksXG4gICAgICByZXN1bHQgPSBBcnJheShyYW5nZUxlbmd0aCArIHJpZ2h0TGVuZ3RoKSxcbiAgICAgIGlzVW5jdXJyaWVkID0gIWlzQ3VycmllZDtcblxuICB3aGlsZSAoKythcmdzSW5kZXggPCByYW5nZUxlbmd0aCkge1xuICAgIHJlc3VsdFthcmdzSW5kZXhdID0gYXJnc1thcmdzSW5kZXhdO1xuICB9XG4gIHZhciBvZmZzZXQgPSBhcmdzSW5kZXg7XG4gIHdoaWxlICgrK3JpZ2h0SW5kZXggPCByaWdodExlbmd0aCkge1xuICAgIHJlc3VsdFtvZmZzZXQgKyByaWdodEluZGV4XSA9IHBhcnRpYWxzW3JpZ2h0SW5kZXhdO1xuICB9XG4gIHdoaWxlICgrK2hvbGRlcnNJbmRleCA8IGhvbGRlcnNMZW5ndGgpIHtcbiAgICBpZiAoaXNVbmN1cnJpZWQgfHwgYXJnc0luZGV4IDwgYXJnc0xlbmd0aCkge1xuICAgICAgcmVzdWx0W29mZnNldCArIGhvbGRlcnNbaG9sZGVyc0luZGV4XV0gPSBhcmdzW2FyZ3NJbmRleCsrXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb21wb3NlQXJnc1JpZ2h0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
