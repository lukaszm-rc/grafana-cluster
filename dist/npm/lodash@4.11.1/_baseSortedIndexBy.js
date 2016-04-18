"use strict";

System.register([], function (_export, _context) {
  var MAX_ARRAY_LENGTH, MAX_ARRAY_INDEX, nativeFloor, nativeMin;


  /**
   * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
   * which invokes `iteratee` for `value` and each element of `array` to compute
   * their sort ranking. The iteratee is invoked with one argument; (value).
   *
   * @private
   * @param {Array} array The sorted array to inspect.
   * @param {*} value The value to evaluate.
   * @param {Function} iteratee The iteratee invoked per element.
   * @param {boolean} [retHighest] Specify returning the highest qualified index.
   * @returns {number} Returns the index at which `value` should be inserted
   *  into `array`.
   */
  function baseSortedIndexBy(array, value, iteratee, retHighest) {
    value = iteratee(value);

    var low = 0,
        high = array ? array.length : 0,
        valIsNaN = value !== value,
        valIsNull = value === null,
        valIsUndef = value === undefined;

    while (low < high) {
      var mid = nativeFloor((low + high) / 2),
          computed = iteratee(array[mid]),
          isDef = computed !== undefined,
          isReflexive = computed === computed;

      if (valIsNaN) {
        var setLow = isReflexive || retHighest;
      } else if (valIsNull) {
        setLow = isReflexive && isDef && (retHighest || computed != null);
      } else if (valIsUndef) {
        setLow = isReflexive && (retHighest || isDef);
      } else if (computed == null) {
        setLow = false;
      } else {
        setLow = retHighest ? computed <= value : computed < value;
      }
      if (setLow) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return nativeMin(high, MAX_ARRAY_INDEX);
  }

  return {
    setters: [],
    execute: function () {
      MAX_ARRAY_LENGTH = 4294967295;
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1;
      nativeFloor = Math.floor;
      nativeMin = Math.min;
      module.exports = baseSortedIndexBy;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlU29ydGVkSW5kZXhCeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBLFdBQVMsaUJBQVQsQ0FBMkIsS0FBM0IsRUFBa0MsS0FBbEMsRUFBeUMsUUFBekMsRUFBbUQsVUFBbkQsRUFBK0Q7QUFDN0QsWUFBUSxTQUFTLEtBQVQsQ0FBUixDQUQ2RDs7QUFHN0QsUUFBSSxNQUFNLENBQU47UUFDQSxPQUFPLFFBQVEsTUFBTSxNQUFOLEdBQWUsQ0FBdkI7UUFDUCxXQUFXLFVBQVUsS0FBVjtRQUNYLFlBQVksVUFBVSxJQUFWO1FBQ1osYUFBYSxVQUFVLFNBQVYsQ0FQNEM7O0FBUzdELFdBQU8sTUFBTSxJQUFOLEVBQVk7QUFDakIsVUFBSSxNQUFNLFlBQVksQ0FBQyxNQUFNLElBQU4sQ0FBRCxHQUFlLENBQWYsQ0FBbEI7VUFDQSxXQUFXLFNBQVMsTUFBTSxHQUFOLENBQVQsQ0FBWDtVQUNBLFFBQVEsYUFBYSxTQUFiO1VBQ1IsY0FBYyxhQUFhLFFBQWIsQ0FKRDs7QUFNakIsVUFBSSxRQUFKLEVBQWM7QUFDWixZQUFJLFNBQVMsZUFBZSxVQUFmLENBREQ7T0FBZCxNQUVPLElBQUksU0FBSixFQUFlO0FBQ3BCLGlCQUFTLGVBQWUsS0FBZixLQUF5QixjQUFjLFlBQVksSUFBWixDQUF2QyxDQURXO09BQWYsTUFFQSxJQUFJLFVBQUosRUFBZ0I7QUFDckIsaUJBQVMsZ0JBQWdCLGNBQWMsS0FBZCxDQUFoQixDQURZO09BQWhCLE1BRUEsSUFBSSxZQUFZLElBQVosRUFBa0I7QUFDM0IsaUJBQVMsS0FBVCxDQUQyQjtPQUF0QixNQUVBO0FBQ0wsaUJBQVMsYUFBYyxZQUFZLEtBQVosR0FBc0IsV0FBVyxLQUFYLENBRHhDO09BRkE7QUFLUCxVQUFJLE1BQUosRUFBWTtBQUNWLGNBQU0sTUFBTSxDQUFOLENBREk7T0FBWixNQUVPO0FBQ0wsZUFBTyxHQUFQLENBREs7T0FGUDtLQWpCRjtBQXVCQSxXQUFPLFVBQVUsSUFBVixFQUFnQixlQUFoQixDQUFQLENBaEM2RDtHQUEvRDs7Ozs7QUFwQkkseUJBQW1CO0FBQ25CLHdCQUFrQixtQkFBbUIsQ0FBbkI7QUFHbEIsb0JBQWMsS0FBSyxLQUFMO0FBQ2Qsa0JBQVksS0FBSyxHQUFMO0FBa0RoQixhQUFPLE9BQVAsR0FBaUIsaUJBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19iYXNlU29ydGVkSW5kZXhCeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHRoZSBtYXhpbXVtIGxlbmd0aCBhbmQgaW5kZXggb2YgYW4gYXJyYXkuICovXG52YXIgTUFYX0FSUkFZX0xFTkdUSCA9IDQyOTQ5NjcyOTUsXG4gICAgTUFYX0FSUkFZX0lOREVYID0gTUFYX0FSUkFZX0xFTkdUSCAtIDE7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVGbG9vciA9IE1hdGguZmxvb3IsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uc29ydGVkSW5kZXhCeWAgYW5kIGBfLnNvcnRlZExhc3RJbmRleEJ5YFxuICogd2hpY2ggaW52b2tlcyBgaXRlcmF0ZWVgIGZvciBgdmFsdWVgIGFuZCBlYWNoIGVsZW1lbnQgb2YgYGFycmF5YCB0byBjb21wdXRlXG4gKiB0aGVpciBzb3J0IHJhbmtpbmcuIFRoZSBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggb25lIGFyZ3VtZW50OyAodmFsdWUpLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgc29ydGVkIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBldmFsdWF0ZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHtib29sZWFufSBbcmV0SGlnaGVzdF0gU3BlY2lmeSByZXR1cm5pbmcgdGhlIGhpZ2hlc3QgcXVhbGlmaWVkIGluZGV4LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggYXQgd2hpY2ggYHZhbHVlYCBzaG91bGQgYmUgaW5zZXJ0ZWRcbiAqICBpbnRvIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VTb3J0ZWRJbmRleEJ5KGFycmF5LCB2YWx1ZSwgaXRlcmF0ZWUsIHJldEhpZ2hlc3QpIHtcbiAgdmFsdWUgPSBpdGVyYXRlZSh2YWx1ZSk7XG5cbiAgdmFyIGxvdyA9IDAsXG4gICAgICBoaWdoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwLFxuICAgICAgdmFsSXNOYU4gPSB2YWx1ZSAhPT0gdmFsdWUsXG4gICAgICB2YWxJc051bGwgPSB2YWx1ZSA9PT0gbnVsbCxcbiAgICAgIHZhbElzVW5kZWYgPSB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xuXG4gIHdoaWxlIChsb3cgPCBoaWdoKSB7XG4gICAgdmFyIG1pZCA9IG5hdGl2ZUZsb29yKChsb3cgKyBoaWdoKSAvIDIpLFxuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlKGFycmF5W21pZF0pLFxuICAgICAgICBpc0RlZiA9IGNvbXB1dGVkICE9PSB1bmRlZmluZWQsXG4gICAgICAgIGlzUmVmbGV4aXZlID0gY29tcHV0ZWQgPT09IGNvbXB1dGVkO1xuXG4gICAgaWYgKHZhbElzTmFOKSB7XG4gICAgICB2YXIgc2V0TG93ID0gaXNSZWZsZXhpdmUgfHwgcmV0SGlnaGVzdDtcbiAgICB9IGVsc2UgaWYgKHZhbElzTnVsbCkge1xuICAgICAgc2V0TG93ID0gaXNSZWZsZXhpdmUgJiYgaXNEZWYgJiYgKHJldEhpZ2hlc3QgfHwgY29tcHV0ZWQgIT0gbnVsbCk7XG4gICAgfSBlbHNlIGlmICh2YWxJc1VuZGVmKSB7XG4gICAgICBzZXRMb3cgPSBpc1JlZmxleGl2ZSAmJiAocmV0SGlnaGVzdCB8fCBpc0RlZik7XG4gICAgfSBlbHNlIGlmIChjb21wdXRlZCA9PSBudWxsKSB7XG4gICAgICBzZXRMb3cgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TG93ID0gcmV0SGlnaGVzdCA/IChjb21wdXRlZCA8PSB2YWx1ZSkgOiAoY29tcHV0ZWQgPCB2YWx1ZSk7XG4gICAgfVxuICAgIGlmIChzZXRMb3cpIHtcbiAgICAgIGxvdyA9IG1pZCArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpZ2ggPSBtaWQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBuYXRpdmVNaW4oaGlnaCwgTUFYX0FSUkFZX0lOREVYKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU29ydGVkSW5kZXhCeTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
