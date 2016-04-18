'use strict';

System.register([], function (_export, _context) {
  var createAggregator, objectProto, hasOwnProperty, countBy;
  return {
    setters: [],
    execute: function () {
      createAggregator = require('./_createAggregator');
      objectProto = Object.prototype;
      hasOwnProperty = objectProto.hasOwnProperty;
      countBy = createAggregator(function (result, value, key) {
        hasOwnProperty.call(result, key) ? ++result[key] : result[key] = 1;
      });

      module.exports = countBy;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2NvdW50QnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLHlCQUFtQixRQUFRLHFCQUFSO0FBQ25CLG9CQUFjLE9BQU8sU0FBUDtBQUNkLHVCQUFpQixZQUFZLGNBQVo7QUFDakIsZ0JBQVUsaUJBQWlCLFVBQVMsTUFBVCxFQUFpQixLQUFqQixFQUF3QixHQUF4QixFQUE2QjtBQUMxRCx1QkFBZSxJQUFmLENBQW9CLE1BQXBCLEVBQTRCLEdBQTVCLElBQW1DLEVBQUUsT0FBTyxHQUFQLENBQUYsR0FBaUIsT0FBTyxHQUFQLElBQWMsQ0FBZCxDQURNO09BQTdCOztBQUcvQixhQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvY291bnRCeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGNyZWF0ZUFnZ3JlZ2F0b3IgPSByZXF1aXJlKCcuL19jcmVhdGVBZ2dyZWdhdG9yJyk7XG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG52YXIgY291bnRCeSA9IGNyZWF0ZUFnZ3JlZ2F0b3IoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gIGhhc093blByb3BlcnR5LmNhbGwocmVzdWx0LCBrZXkpID8gKytyZXN1bHRba2V5XSA6IChyZXN1bHRba2V5XSA9IDEpO1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IGNvdW50Qnk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
