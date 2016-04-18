'use strict';

System.register([], function (_export, _context) {
  var createAggregator, partition;
  return {
    setters: [],
    execute: function () {
      createAggregator = require('./_createAggregator');
      partition = createAggregator(function (result, value, key) {
        result[key ? 0 : 1].push(value);
      }, function () {
        return [[], []];
      });

      module.exports = partition;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3BhcnRpdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0kseUJBQW1CLFFBQVEscUJBQVI7QUFDbkIsa0JBQVksaUJBQWlCLFVBQVMsTUFBVCxFQUFpQixLQUFqQixFQUF3QixHQUF4QixFQUE2QjtBQUM1RCxlQUFPLE1BQU0sQ0FBTixHQUFVLENBQVYsQ0FBUCxDQUFvQixJQUFwQixDQUF5QixLQUF6QixFQUQ0RDtPQUE3QixFQUU5QixZQUFXO0FBQ1osZUFBTyxDQUFDLEVBQUQsRUFBSyxFQUFMLENBQVAsQ0FEWTtPQUFYOztBQUdILGFBQU8sT0FBUCxHQUFpQixTQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9wYXJ0aXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBjcmVhdGVBZ2dyZWdhdG9yID0gcmVxdWlyZSgnLi9fY3JlYXRlQWdncmVnYXRvcicpO1xudmFyIHBhcnRpdGlvbiA9IGNyZWF0ZUFnZ3JlZ2F0b3IoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gIHJlc3VsdFtrZXkgPyAwIDogMV0ucHVzaCh2YWx1ZSk7XG59LCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIFtbXSwgW11dO1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhcnRpdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
