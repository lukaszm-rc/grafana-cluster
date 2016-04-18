'use strict';

System.register([], function (_export, _context) {
  var isObjectLike, numberTag, objectProto, objectToString;

  function isNumber(value) {
    return typeof value == 'number' || isObjectLike(value) && objectToString.call(value) == numberTag;
  }
  return {
    setters: [],
    execute: function () {
      isObjectLike = require('./isObjectLike');
      numberTag = '[object Number]';
      objectProto = Object.prototype;
      objectToString = objectProto.toString;
      module.exports = isNumber;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzTnVtYmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsV0FBUyxRQUFULENBQWtCLEtBQWxCLEVBQXlCO0FBQ3ZCLFdBQU8sT0FBTyxLQUFQLElBQWdCLFFBQWhCLElBQTZCLGFBQWEsS0FBYixLQUF1QixlQUFlLElBQWYsQ0FBb0IsS0FBcEIsS0FBOEIsU0FBOUIsQ0FEcEM7R0FBekI7Ozs7QUFKSSxxQkFBZSxRQUFRLGdCQUFSO0FBQ2Ysa0JBQVk7QUFDWixvQkFBYyxPQUFPLFNBQVA7QUFDZCx1QkFBaUIsWUFBWSxRQUFaO0FBSXJCLGFBQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9pc051bWJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG52YXIgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXSc7XG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IG51bWJlclRhZyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGlzTnVtYmVyO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
