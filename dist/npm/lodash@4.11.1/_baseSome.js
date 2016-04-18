'use strict';

System.register([], function (_export, _context) {
  var baseEach;

  function baseSome(collection, predicate) {
    var result;
    baseEach(collection, function (value, index, collection) {
      result = predicate(value, index, collection);
      return !result;
    });
    return !!result;
  }
  return {
    setters: [],
    execute: function () {
      baseEach = require('./_baseEach');
      module.exports = baseSome;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlU29tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLFdBQVMsUUFBVCxDQUFrQixVQUFsQixFQUE4QixTQUE5QixFQUF5QztBQUN2QyxRQUFJLE1BQUosQ0FEdUM7QUFFdkMsYUFBUyxVQUFULEVBQXFCLFVBQVMsS0FBVCxFQUFnQixLQUFoQixFQUF1QixVQUF2QixFQUFtQztBQUN0RCxlQUFTLFVBQVUsS0FBVixFQUFpQixLQUFqQixFQUF3QixVQUF4QixDQUFULENBRHNEO0FBRXRELGFBQU8sQ0FBQyxNQUFELENBRitDO0tBQW5DLENBQXJCLENBRnVDO0FBTXZDLFdBQU8sQ0FBQyxDQUFDLE1BQUQsQ0FOK0I7R0FBekM7Ozs7QUFESSxpQkFBVyxRQUFRLGFBQVI7QUFTZixhQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2Jhc2VTb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUVhY2ggPSByZXF1aXJlKCcuL19iYXNlRWFjaCcpO1xuZnVuY3Rpb24gYmFzZVNvbWUoY29sbGVjdGlvbiwgcHJlZGljYXRlKSB7XG4gIHZhciByZXN1bHQ7XG4gIGJhc2VFYWNoKGNvbGxlY3Rpb24sIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgIHJlc3VsdCA9IHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgIHJldHVybiAhcmVzdWx0O1xuICB9KTtcbiAgcmV0dXJuICEhcmVzdWx0O1xufVxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU29tZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
