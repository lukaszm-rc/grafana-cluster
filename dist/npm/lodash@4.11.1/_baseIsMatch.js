'use strict';

System.register([], function (_export, _context) {
  var Stack, baseIsEqual, UNORDERED_COMPARE_FLAG, PARTIAL_COMPARE_FLAG;

  function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length,
        length = index,
        noCustomizer = !customizer;
    if (object == null) {
      return !length;
    }
    object = Object(object);
    while (index--) {
      var data = matchData[index];
      if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
        return false;
      }
    }
    while (++index < length) {
      data = matchData[index];
      var key = data[0],
          objValue = object[key],
          srcValue = data[1];
      if (noCustomizer && data[2]) {
        if (objValue === undefined && !(key in object)) {
          return false;
        }
      } else {
        var stack = new Stack();
        if (customizer) {
          var result = customizer(objValue, srcValue, key, object, source, stack);
        }
        if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result)) {
          return false;
        }
      }
    }
    return true;
  }
  return {
    setters: [],
    execute: function () {
      Stack = require('./_Stack');
      baseIsEqual = require('./_baseIsEqual');
      UNORDERED_COMPARE_FLAG = 1;
      PARTIAL_COMPARE_FLAG = 2;
      module.exports = baseIsMatch;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlSXNNYXRjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLFdBQVMsV0FBVCxDQUFxQixNQUFyQixFQUE2QixNQUE3QixFQUFxQyxTQUFyQyxFQUFnRCxVQUFoRCxFQUE0RDtBQUMxRCxRQUFJLFFBQVEsVUFBVSxNQUFWO1FBQ1IsU0FBUyxLQUFUO1FBQ0EsZUFBZSxDQUFDLFVBQUQsQ0FIdUM7QUFJMUQsUUFBSSxVQUFVLElBQVYsRUFBZ0I7QUFDbEIsYUFBTyxDQUFDLE1BQUQsQ0FEVztLQUFwQjtBQUdBLGFBQVMsT0FBTyxNQUFQLENBQVQsQ0FQMEQ7QUFRMUQsV0FBTyxPQUFQLEVBQWdCO0FBQ2QsVUFBSSxPQUFPLFVBQVUsS0FBVixDQUFQLENBRFU7QUFFZCxVQUFJLFlBQUMsSUFBZ0IsS0FBSyxDQUFMLENBQWhCLEdBQTJCLEtBQUssQ0FBTCxNQUFZLE9BQU8sS0FBSyxDQUFMLENBQVAsQ0FBWixHQUE4QixFQUFFLEtBQUssQ0FBTCxLQUFXLE1BQVgsQ0FBRixFQUFzQjtBQUNsRixlQUFPLEtBQVAsQ0FEa0Y7T0FBcEY7S0FGRjtBQU1BLFdBQU8sRUFBRSxLQUFGLEdBQVUsTUFBVixFQUFrQjtBQUN2QixhQUFPLFVBQVUsS0FBVixDQUFQLENBRHVCO0FBRXZCLFVBQUksTUFBTSxLQUFLLENBQUwsQ0FBTjtVQUNBLFdBQVcsT0FBTyxHQUFQLENBQVg7VUFDQSxXQUFXLEtBQUssQ0FBTCxDQUFYLENBSm1CO0FBS3ZCLFVBQUksZ0JBQWdCLEtBQUssQ0FBTCxDQUFoQixFQUF5QjtBQUMzQixZQUFJLGFBQWEsU0FBYixJQUEwQixFQUFFLE9BQU8sTUFBUCxDQUFGLEVBQWtCO0FBQzlDLGlCQUFPLEtBQVAsQ0FEOEM7U0FBaEQ7T0FERixNQUlPO0FBQ0wsWUFBSSxRQUFRLElBQUksS0FBSixFQUFSLENBREM7QUFFTCxZQUFJLFVBQUosRUFBZ0I7QUFDZCxjQUFJLFNBQVMsV0FBVyxRQUFYLEVBQXFCLFFBQXJCLEVBQStCLEdBQS9CLEVBQW9DLE1BQXBDLEVBQTRDLE1BQTVDLEVBQW9ELEtBQXBELENBQVQsQ0FEVTtTQUFoQjtBQUdBLFlBQUksRUFBRSxXQUFXLFNBQVgsR0FBdUIsWUFBWSxRQUFaLEVBQXNCLFFBQXRCLEVBQWdDLFVBQWhDLEVBQTRDLHlCQUF5QixvQkFBekIsRUFBK0MsS0FBM0YsQ0FBdkIsR0FBMkgsTUFBM0gsQ0FBRixFQUFzSTtBQUN4SSxpQkFBTyxLQUFQLENBRHdJO1NBQTFJO09BVEY7S0FMRjtBQW1CQSxXQUFPLElBQVAsQ0FqQzBEO0dBQTVEOzs7O0FBSkksY0FBUSxRQUFRLFVBQVI7QUFDUixvQkFBYyxRQUFRLGdCQUFSO0FBQ2QsK0JBQXlCO0FBQ3pCLDZCQUF1QjtBQW9DM0IsYUFBTyxPQUFQLEdBQWlCLFdBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19iYXNlSXNNYXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyk7XG52YXIgVU5PUkRFUkVEX0NPTVBBUkVfRkxBRyA9IDEsXG4gICAgUEFSVElBTF9DT01QQVJFX0ZMQUcgPSAyO1xuZnVuY3Rpb24gYmFzZUlzTWF0Y2gob2JqZWN0LCBzb3VyY2UsIG1hdGNoRGF0YSwgY3VzdG9taXplcikge1xuICB2YXIgaW5kZXggPSBtYXRjaERhdGEubGVuZ3RoLFxuICAgICAgbGVuZ3RoID0gaW5kZXgsXG4gICAgICBub0N1c3RvbWl6ZXIgPSAhY3VzdG9taXplcjtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuICFsZW5ndGg7XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIGlmICgobm9DdXN0b21pemVyICYmIGRhdGFbMl0pID8gZGF0YVsxXSAhPT0gb2JqZWN0W2RhdGFbMF1dIDogIShkYXRhWzBdIGluIG9iamVjdCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICB2YXIga2V5ID0gZGF0YVswXSxcbiAgICAgICAgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgc3JjVmFsdWUgPSBkYXRhWzFdO1xuICAgIGlmIChub0N1c3RvbWl6ZXIgJiYgZGF0YVsyXSkge1xuICAgICAgaWYgKG9ialZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzdGFjayA9IG5ldyBTdGFjaztcbiAgICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBjdXN0b21pemVyKG9ialZhbHVlLCBzcmNWYWx1ZSwga2V5LCBvYmplY3QsIHNvdXJjZSwgc3RhY2spO1xuICAgICAgfVxuICAgICAgaWYgKCEocmVzdWx0ID09PSB1bmRlZmluZWQgPyBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIGN1c3RvbWl6ZXIsIFVOT1JERVJFRF9DT01QQVJFX0ZMQUcgfCBQQVJUSUFMX0NPTVBBUkVfRkxBRywgc3RhY2spIDogcmVzdWx0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNNYXRjaDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
