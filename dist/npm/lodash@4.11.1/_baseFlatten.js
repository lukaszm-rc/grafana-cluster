'use strict';

System.register([], function (_export, _context) {
  var arrayPush, isFlattenable;

  function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1,
        length = array.length;
    predicate || (predicate = isFlattenable);
    result || (result = []);
    while (++index < length) {
      var value = array[index];
      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          baseFlatten(value, depth - 1, predicate, isStrict, result);
        } else {
          arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }
  return {
    setters: [],
    execute: function () {
      arrayPush = require('./_arrayPush');
      isFlattenable = require('./_isFlattenable');
      module.exports = baseFlatten;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlRmxhdHRlbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsV0FBVCxDQUFxQixLQUFyQixFQUE0QixLQUE1QixFQUFtQyxTQUFuQyxFQUE4QyxRQUE5QyxFQUF3RCxNQUF4RCxFQUFnRTtBQUM5RCxRQUFJLFFBQVEsQ0FBQyxDQUFEO1FBQ1IsU0FBUyxNQUFNLE1BQU4sQ0FGaUQ7QUFHOUQsa0JBQWMsWUFBWSxhQUFaLENBQWQsQ0FIOEQ7QUFJOUQsZUFBVyxTQUFTLEVBQVQsQ0FBWCxDQUo4RDtBQUs5RCxXQUFPLEVBQUUsS0FBRixHQUFVLE1BQVYsRUFBa0I7QUFDdkIsVUFBSSxRQUFRLE1BQU0sS0FBTixDQUFSLENBRG1CO0FBRXZCLFVBQUksUUFBUSxDQUFSLElBQWEsVUFBVSxLQUFWLENBQWIsRUFBK0I7QUFDakMsWUFBSSxRQUFRLENBQVIsRUFBVztBQUNiLHNCQUFZLEtBQVosRUFBbUIsUUFBUSxDQUFSLEVBQVcsU0FBOUIsRUFBeUMsUUFBekMsRUFBbUQsTUFBbkQsRUFEYTtTQUFmLE1BRU87QUFDTCxvQkFBVSxNQUFWLEVBQWtCLEtBQWxCLEVBREs7U0FGUDtPQURGLE1BTU8sSUFBSSxDQUFDLFFBQUQsRUFBVztBQUNwQixlQUFPLE9BQU8sTUFBUCxDQUFQLEdBQXdCLEtBQXhCLENBRG9CO09BQWY7S0FSVDtBQVlBLFdBQU8sTUFBUCxDQWpCOEQ7R0FBaEU7Ozs7QUFGSSxrQkFBWSxRQUFRLGNBQVI7QUFDWixzQkFBZ0IsUUFBUSxrQkFBUjtBQW9CcEIsYUFBTyxPQUFQLEdBQWlCLFdBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19iYXNlRmxhdHRlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzRmxhdHRlbmFibGUgPSByZXF1aXJlKCcuL19pc0ZsYXR0ZW5hYmxlJyk7XG5mdW5jdGlvbiBiYXNlRmxhdHRlbihhcnJheSwgZGVwdGgsIHByZWRpY2F0ZSwgaXNTdHJpY3QsIHJlc3VsdCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgcHJlZGljYXRlIHx8IChwcmVkaWNhdGUgPSBpc0ZsYXR0ZW5hYmxlKTtcbiAgcmVzdWx0IHx8IChyZXN1bHQgPSBbXSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChkZXB0aCA+IDAgJiYgcHJlZGljYXRlKHZhbHVlKSkge1xuICAgICAgaWYgKGRlcHRoID4gMSkge1xuICAgICAgICBiYXNlRmxhdHRlbih2YWx1ZSwgZGVwdGggLSAxLCBwcmVkaWNhdGUsIGlzU3RyaWN0LCByZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXlQdXNoKHJlc3VsdCwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWlzU3RyaWN0KSB7XG4gICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZsYXR0ZW47XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
