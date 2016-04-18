'use strict';

System.register([], function (_export, _context) {
  var toInteger, FUNC_ERROR_TEXT;

  function before(n, func) {
    var result;
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    n = toInteger(n);
    return function () {
      if (--n > 0) {
        result = func.apply(this, arguments);
      }
      if (n <= 1) {
        func = undefined;
      }
      return result;
    };
  }
  return {
    setters: [],
    execute: function () {
      toInteger = require('./toInteger');
      FUNC_ERROR_TEXT = 'Expected a function';
      module.exports = before;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2JlZm9yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsTUFBVCxDQUFnQixDQUFoQixFQUFtQixJQUFuQixFQUF5QjtBQUN2QixRQUFJLE1BQUosQ0FEdUI7QUFFdkIsUUFBSSxPQUFPLElBQVAsSUFBZSxVQUFmLEVBQTJCO0FBQzdCLFlBQU0sSUFBSSxTQUFKLENBQWMsZUFBZCxDQUFOLENBRDZCO0tBQS9CO0FBR0EsUUFBSSxVQUFVLENBQVYsQ0FBSixDQUx1QjtBQU12QixXQUFPLFlBQVc7QUFDaEIsVUFBSSxFQUFFLENBQUYsR0FBTSxDQUFOLEVBQVM7QUFDWCxpQkFBUyxLQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLFNBQWpCLENBQVQsQ0FEVztPQUFiO0FBR0EsVUFBSSxLQUFLLENBQUwsRUFBUTtBQUNWLGVBQU8sU0FBUCxDQURVO09BQVo7QUFHQSxhQUFPLE1BQVAsQ0FQZ0I7S0FBWCxDQU5nQjtHQUF6Qjs7OztBQUZJLGtCQUFZLFFBQVEsYUFBUjtBQUNaLHdCQUFrQjtBQWlCdEIsYUFBTyxPQUFQLEdBQWlCLE1BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2JlZm9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vdG9JbnRlZ2VyJyk7XG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuZnVuY3Rpb24gYmVmb3JlKG4sIGZ1bmMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgbiA9IHRvSW50ZWdlcihuKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGlmICgtLW4gPiAwKSB7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIGlmIChuIDw9IDEpIHtcbiAgICAgIGZ1bmMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGJlZm9yZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
