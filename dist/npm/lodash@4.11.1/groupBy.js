'use strict';

System.register([], function (_export, _context) {
  var createAggregator, objectProto, hasOwnProperty, groupBy;
  return {
    setters: [],
    execute: function () {
      createAggregator = require('./_createAggregator');
      objectProto = Object.prototype;
      hasOwnProperty = objectProto.hasOwnProperty;
      groupBy = createAggregator(function (result, value, key) {
        if (hasOwnProperty.call(result, key)) {
          result[key].push(value);
        } else {
          result[key] = [value];
        }
      });

      module.exports = groupBy;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2dyb3VwQnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLHlCQUFtQixRQUFRLHFCQUFSO0FBQ25CLG9CQUFjLE9BQU8sU0FBUDtBQUNkLHVCQUFpQixZQUFZLGNBQVo7QUFDakIsZ0JBQVUsaUJBQWlCLFVBQVMsTUFBVCxFQUFpQixLQUFqQixFQUF3QixHQUF4QixFQUE2QjtBQUMxRCxZQUFJLGVBQWUsSUFBZixDQUFvQixNQUFwQixFQUE0QixHQUE1QixDQUFKLEVBQXNDO0FBQ3BDLGlCQUFPLEdBQVAsRUFBWSxJQUFaLENBQWlCLEtBQWpCLEVBRG9DO1NBQXRDLE1BRU87QUFDTCxpQkFBTyxHQUFQLElBQWMsQ0FBQyxLQUFELENBQWQsQ0FESztTQUZQO09BRDZCOztBQU8vQixhQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvZ3JvdXBCeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGNyZWF0ZUFnZ3JlZ2F0b3IgPSByZXF1aXJlKCcuL19jcmVhdGVBZ2dyZWdhdG9yJyk7XG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG52YXIgZ3JvdXBCeSA9IGNyZWF0ZUFnZ3JlZ2F0b3IoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHJlc3VsdCwga2V5KSkge1xuICAgIHJlc3VsdFtrZXldLnB1c2godmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdFtrZXldID0gW3ZhbHVlXTtcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwQnk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
