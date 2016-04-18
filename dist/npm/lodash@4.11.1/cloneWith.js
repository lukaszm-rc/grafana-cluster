'use strict';

System.register([], function (_export, _context) {
  var baseClone;

  function cloneWith(value, customizer) {
    return baseClone(value, false, true, customizer);
  }
  return {
    setters: [],
    execute: function () {
      baseClone = require('./_baseClone');
      module.exports = cloneWith;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2Nsb25lV2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLFdBQVMsU0FBVCxDQUFtQixLQUFuQixFQUEwQixVQUExQixFQUFzQztBQUNwQyxXQUFPLFVBQVUsS0FBVixFQUFpQixLQUFqQixFQUF3QixJQUF4QixFQUE4QixVQUE5QixDQUFQLENBRG9DO0dBQXRDOzs7O0FBREksa0JBQVksUUFBUSxjQUFSO0FBSWhCLGFBQU8sT0FBUCxHQUFpQixTQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9jbG9uZVdpdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlQ2xvbmUgPSByZXF1aXJlKCcuL19iYXNlQ2xvbmUnKTtcbmZ1bmN0aW9uIGNsb25lV2l0aCh2YWx1ZSwgY3VzdG9taXplcikge1xuICByZXR1cm4gYmFzZUNsb25lKHZhbHVlLCBmYWxzZSwgdHJ1ZSwgY3VzdG9taXplcik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lV2l0aDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
