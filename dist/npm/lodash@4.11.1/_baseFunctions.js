'use strict';

System.register([], function (_export, _context) {
  var arrayFilter, isFunction;

  function baseFunctions(object, props) {
    return arrayFilter(props, function (key) {
      return isFunction(object[key]);
    });
  }
  return {
    setters: [],
    execute: function () {
      arrayFilter = require('./_arrayFilter');
      isFunction = require('./isFunction');
      module.exports = baseFunctions;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlRnVuY3Rpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxhQUFULENBQXVCLE1BQXZCLEVBQStCLEtBQS9CLEVBQXNDO0FBQ3BDLFdBQU8sWUFBWSxLQUFaLEVBQW1CLFVBQVMsR0FBVCxFQUFjO0FBQ3RDLGFBQU8sV0FBVyxPQUFPLEdBQVAsQ0FBWCxDQUFQLENBRHNDO0tBQWQsQ0FBMUIsQ0FEb0M7R0FBdEM7Ozs7QUFGSSxvQkFBYyxRQUFRLGdCQUFSO0FBQ2QsbUJBQWEsUUFBUSxjQUFSO0FBTWpCLGFBQU8sT0FBUCxHQUFpQixhQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fYmFzZUZ1bmN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyk7XG5mdW5jdGlvbiBiYXNlRnVuY3Rpb25zKG9iamVjdCwgcHJvcHMpIHtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKHByb3BzLCBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihvYmplY3Rba2V5XSk7XG4gIH0pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRnVuY3Rpb25zO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
