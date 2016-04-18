'use strict';

System.register([], function (_export, _context) {
  var baseRange, isIterateeCall, toNumber;

  function createRange(fromRight) {
    return function (start, end, step) {
      if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
        end = step = undefined;
      }
      start = toNumber(start);
      start = start === start ? start : 0;
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toNumber(end) || 0;
      }
      step = step === undefined ? start < end ? 1 : -1 : toNumber(step) || 0;
      return baseRange(start, end, step, fromRight);
    };
  }
  return {
    setters: [],
    execute: function () {
      baseRange = require('./_baseRange');
      isIterateeCall = require('./_isIterateeCall');
      toNumber = require('./toNumber');
      module.exports = createRange;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jcmVhdGVSYW5nZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLFdBQVMsV0FBVCxDQUFxQixTQUFyQixFQUFnQztBQUM5QixXQUFPLFVBQVMsS0FBVCxFQUFnQixHQUFoQixFQUFxQixJQUFyQixFQUEyQjtBQUNoQyxVQUFJLFFBQVEsT0FBTyxJQUFQLElBQWUsUUFBZixJQUEyQixlQUFlLEtBQWYsRUFBc0IsR0FBdEIsRUFBMkIsSUFBM0IsQ0FBbkMsRUFBcUU7QUFDdkUsY0FBTSxPQUFPLFNBQVAsQ0FEaUU7T0FBekU7QUFHQSxjQUFRLFNBQVMsS0FBVCxDQUFSLENBSmdDO0FBS2hDLGNBQVEsVUFBVSxLQUFWLEdBQWtCLEtBQWxCLEdBQTBCLENBQTFCLENBTHdCO0FBTWhDLFVBQUksUUFBUSxTQUFSLEVBQW1CO0FBQ3JCLGNBQU0sS0FBTixDQURxQjtBQUVyQixnQkFBUSxDQUFSLENBRnFCO09BQXZCLE1BR087QUFDTCxjQUFNLFNBQVMsR0FBVCxLQUFpQixDQUFqQixDQUREO09BSFA7QUFNQSxhQUFPLFNBQVMsU0FBVCxHQUFzQixRQUFRLEdBQVIsR0FBYyxDQUFkLEdBQWtCLENBQUMsQ0FBRCxHQUFPLFNBQVMsSUFBVCxLQUFrQixDQUFsQixDQVp0QjtBQWFoQyxhQUFPLFVBQVUsS0FBVixFQUFpQixHQUFqQixFQUFzQixJQUF0QixFQUE0QixTQUE1QixDQUFQLENBYmdDO0tBQTNCLENBRHVCO0dBQWhDOzs7O0FBSEksa0JBQVksUUFBUSxjQUFSO0FBQ1osdUJBQWlCLFFBQVEsbUJBQVI7QUFDakIsaUJBQVcsUUFBUSxZQUFSO0FBa0JmLGFBQU8sT0FBUCxHQUFpQixXQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fY3JlYXRlUmFuZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlUmFuZ2UgPSByZXF1aXJlKCcuL19iYXNlUmFuZ2UnKSxcbiAgICBpc0l0ZXJhdGVlQ2FsbCA9IHJlcXVpcmUoJy4vX2lzSXRlcmF0ZWVDYWxsJyksXG4gICAgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5mdW5jdGlvbiBjcmVhdGVSYW5nZShmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0YXJ0LCBlbmQsIHN0ZXApIHtcbiAgICBpZiAoc3RlcCAmJiB0eXBlb2Ygc3RlcCAhPSAnbnVtYmVyJyAmJiBpc0l0ZXJhdGVlQ2FsbChzdGFydCwgZW5kLCBzdGVwKSkge1xuICAgICAgZW5kID0gc3RlcCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgc3RhcnQgPSB0b051bWJlcihzdGFydCk7XG4gICAgc3RhcnQgPSBzdGFydCA9PT0gc3RhcnQgPyBzdGFydCA6IDA7XG4gICAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbmQgPSBzdGFydDtcbiAgICAgIHN0YXJ0ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgZW5kID0gdG9OdW1iZXIoZW5kKSB8fCAwO1xuICAgIH1cbiAgICBzdGVwID0gc3RlcCA9PT0gdW5kZWZpbmVkID8gKHN0YXJ0IDwgZW5kID8gMSA6IC0xKSA6ICh0b051bWJlcihzdGVwKSB8fCAwKTtcbiAgICByZXR1cm4gYmFzZVJhbmdlKHN0YXJ0LCBlbmQsIHN0ZXAsIGZyb21SaWdodCk7XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVJhbmdlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
