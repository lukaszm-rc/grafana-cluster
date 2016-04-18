'use strict';

System.register([], function (_export, _context) {
  var _typeof, isObjectLike, symbolTag, objectProto, objectToString;

  function isSymbol(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
  }
  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      isObjectLike = require('./isObjectLike');
      symbolTag = '[object Symbol]';
      objectProto = Object.prototype;
      objectToString = objectProto.toString;
      module.exports = isSymbol;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzU3ltYm9sLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsV0FBUyxRQUFULENBQWtCLEtBQWxCLEVBQXlCO0FBQ3ZCLFdBQU8sUUFBTyxxREFBUCxJQUFnQixRQUFoQixJQUE2QixhQUFhLEtBQWIsS0FBdUIsZUFBZSxJQUFmLENBQW9CLEtBQXBCLEtBQThCLFNBQTlCLENBRHBDO0dBQXpCOzs7Ozs7Ozs7QUFKSSxxQkFBZSxRQUFRLGdCQUFSO0FBQ2Ysa0JBQVk7QUFDWixvQkFBYyxPQUFPLFNBQVA7QUFDZCx1QkFBaUIsWUFBWSxRQUFaO0FBSXJCLGFBQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9pc1N5bWJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8IChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
