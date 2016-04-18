'use strict';

System.register([], function (_export, _context) {
  var toInteger;

  function isInteger(value) {
    return typeof value == 'number' && value == toInteger(value);
  }
  return {
    setters: [],
    execute: function () {
      toInteger = require('./toInteger');
      module.exports = isInteger;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzSW50ZWdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLFdBQVMsU0FBVCxDQUFtQixLQUFuQixFQUEwQjtBQUN4QixXQUFPLE9BQU8sS0FBUCxJQUFnQixRQUFoQixJQUE0QixTQUFTLFVBQVUsS0FBVixDQUFULENBRFg7R0FBMUI7Ozs7QUFESSxrQkFBWSxRQUFRLGFBQVI7QUFJaEIsYUFBTyxPQUFQLEdBQWlCLFNBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2lzSW50ZWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vdG9JbnRlZ2VyJyk7XG5mdW5jdGlvbiBpc0ludGVnZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJiB2YWx1ZSA9PSB0b0ludGVnZXIodmFsdWUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpc0ludGVnZXI7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
