'use strict';

System.register([], function (_export, _context) {
  var realNames, objectProto, hasOwnProperty;

  function getFuncName(func) {
    var result = func.name + '',
        array = realNames[result],
        length = hasOwnProperty.call(realNames, result) ? array.length : 0;
    while (length--) {
      var data = array[length],
          otherFunc = data.func;
      if (otherFunc == null || otherFunc == func) {
        return data.name;
      }
    }
    return result;
  }
  return {
    setters: [],
    execute: function () {
      realNames = require('./_realNames');
      objectProto = Object.prototype;
      hasOwnProperty = objectProto.hasOwnProperty;
      module.exports = getFuncName;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19nZXRGdW5jTmFtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLFdBQVMsV0FBVCxDQUFxQixJQUFyQixFQUEyQjtBQUN6QixRQUFJLFNBQVUsS0FBSyxJQUFMLEdBQVksRUFBWjtRQUNWLFFBQVEsVUFBVSxNQUFWLENBQVI7UUFDQSxTQUFTLGVBQWUsSUFBZixDQUFvQixTQUFwQixFQUErQixNQUEvQixJQUF5QyxNQUFNLE1BQU4sR0FBZSxDQUF4RCxDQUhZO0FBSXpCLFdBQU8sUUFBUCxFQUFpQjtBQUNmLFVBQUksT0FBTyxNQUFNLE1BQU4sQ0FBUDtVQUNBLFlBQVksS0FBSyxJQUFMLENBRkQ7QUFHZixVQUFJLGFBQWEsSUFBYixJQUFxQixhQUFhLElBQWIsRUFBbUI7QUFDMUMsZUFBTyxLQUFLLElBQUwsQ0FEbUM7T0FBNUM7S0FIRjtBQU9BLFdBQU8sTUFBUCxDQVh5QjtHQUEzQjs7OztBQUhJLGtCQUFZLFFBQVEsY0FBUjtBQUNaLG9CQUFjLE9BQU8sU0FBUDtBQUNkLHVCQUFpQixZQUFZLGNBQVo7QUFjckIsYUFBTyxPQUFQLEdBQWlCLFdBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19nZXRGdW5jTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIHJlYWxOYW1lcyA9IHJlcXVpcmUoJy4vX3JlYWxOYW1lcycpO1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gZ2V0RnVuY05hbWUoZnVuYykge1xuICB2YXIgcmVzdWx0ID0gKGZ1bmMubmFtZSArICcnKSxcbiAgICAgIGFycmF5ID0gcmVhbE5hbWVzW3Jlc3VsdF0sXG4gICAgICBsZW5ndGggPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHJlYWxOYW1lcywgcmVzdWx0KSA/IGFycmF5Lmxlbmd0aCA6IDA7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIHZhciBkYXRhID0gYXJyYXlbbGVuZ3RoXSxcbiAgICAgICAgb3RoZXJGdW5jID0gZGF0YS5mdW5jO1xuICAgIGlmIChvdGhlckZ1bmMgPT0gbnVsbCB8fCBvdGhlckZ1bmMgPT0gZnVuYykge1xuICAgICAgcmV0dXJuIGRhdGEubmFtZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbm1vZHVsZS5leHBvcnRzID0gZ2V0RnVuY05hbWU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
