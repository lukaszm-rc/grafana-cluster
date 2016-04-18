'use strict';

System.register([], function (_export, _context) {
  var _Symbol, symbolProto, symbolValueOf;

  function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }
  return {
    setters: [],
    execute: function () {
      _Symbol = require('./_Symbol');
      symbolProto = _Symbol ? _Symbol.prototype : undefined;
      symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
      module.exports = cloneSymbol;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jbG9uZVN5bWJvbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLFdBQVMsV0FBVCxDQUFxQixNQUFyQixFQUE2QjtBQUMzQixXQUFPLGdCQUFnQixPQUFPLGNBQWMsSUFBZCxDQUFtQixNQUFuQixDQUFQLENBQWhCLEdBQXFELEVBQXJELENBRG9CO0dBQTdCOzs7O0FBSEksZ0JBQVMsUUFBUSxXQUFSO0FBQ1Qsb0JBQWMsVUFBUyxRQUFPLFNBQVAsR0FBbUIsU0FBNUI7QUFDZCxzQkFBZ0IsY0FBYyxZQUFZLE9BQVosR0FBc0IsU0FBcEM7QUFJcEIsYUFBTyxPQUFQLEdBQWlCLFdBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19jbG9uZVN5bWJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuZnVuY3Rpb24gY2xvbmVTeW1ib2woc3ltYm9sKSB7XG4gIHJldHVybiBzeW1ib2xWYWx1ZU9mID8gT2JqZWN0KHN5bWJvbFZhbHVlT2YuY2FsbChzeW1ib2wpKSA6IHt9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVN5bWJvbDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
