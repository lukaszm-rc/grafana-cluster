'use strict';

System.register([], function (_export, _context) {
  var baseUniq;

  function uniqWith(array, comparator) {
    return array && array.length ? baseUniq(array, undefined, comparator) : [];
  }
  return {
    setters: [],
    execute: function () {
      baseUniq = require('./_baseUniq');
      module.exports = uniqWith;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3VuaXFXaXRoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsV0FBUyxRQUFULENBQWtCLEtBQWxCLEVBQXlCLFVBQXpCLEVBQXFDO0FBQ25DLFdBQU8sS0FBQyxJQUFTLE1BQU0sTUFBTixHQUFnQixTQUFTLEtBQVQsRUFBZ0IsU0FBaEIsRUFBMkIsVUFBM0IsQ0FBMUIsR0FBbUUsRUFBbkUsQ0FENEI7R0FBckM7Ozs7QUFESSxpQkFBVyxRQUFRLGFBQVI7QUFJZixhQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvdW5pcVdpdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlVW5pcSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmlxJyk7XG5mdW5jdGlvbiB1bmlxV2l0aChhcnJheSwgY29tcGFyYXRvcikge1xuICByZXR1cm4gKGFycmF5ICYmIGFycmF5Lmxlbmd0aCkgPyBiYXNlVW5pcShhcnJheSwgdW5kZWZpbmVkLCBjb21wYXJhdG9yKSA6IFtdO1xufVxubW9kdWxlLmV4cG9ydHMgPSB1bmlxV2l0aDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
