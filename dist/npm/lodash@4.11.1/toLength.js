'use strict';

System.register([], function (_export, _context) {
  var baseClamp, toInteger, MAX_ARRAY_LENGTH;

  function toLength(value) {
    return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
  }
  return {
    setters: [],
    execute: function () {
      baseClamp = require('./_baseClamp');
      toInteger = require('./toInteger');
      MAX_ARRAY_LENGTH = 4294967295;
      module.exports = toLength;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3RvTGVuZ3RoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsV0FBUyxRQUFULENBQWtCLEtBQWxCLEVBQXlCO0FBQ3ZCLFdBQU8sUUFBUSxVQUFVLFVBQVUsS0FBVixDQUFWLEVBQTRCLENBQTVCLEVBQStCLGdCQUEvQixDQUFSLEdBQTJELENBQTNELENBRGdCO0dBQXpCOzs7O0FBSEksa0JBQVksUUFBUSxjQUFSO0FBQ1osa0JBQVksUUFBUSxhQUFSO0FBQ1oseUJBQW1CO0FBSXZCLGFBQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS90b0xlbmd0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VDbGFtcCA9IHJlcXVpcmUoJy4vX2Jhc2VDbGFtcCcpLFxuICAgIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vdG9JbnRlZ2VyJyk7XG52YXIgTUFYX0FSUkFZX0xFTkdUSCA9IDQyOTQ5NjcyOTU7XG5mdW5jdGlvbiB0b0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBiYXNlQ2xhbXAodG9JbnRlZ2VyKHZhbHVlKSwgMCwgTUFYX0FSUkFZX0xFTkdUSCkgOiAwO1xufVxubW9kdWxlLmV4cG9ydHMgPSB0b0xlbmd0aDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
