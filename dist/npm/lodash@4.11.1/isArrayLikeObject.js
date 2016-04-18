'use strict';

System.register([], function (_export, _context) {
  var isArrayLike, isObjectLike;

  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }
  return {
    setters: [],
    execute: function () {
      isArrayLike = require('./isArrayLike');
      isObjectLike = require('./isObjectLike');
      module.exports = isArrayLikeObject;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzQXJyYXlMaWtlT2JqZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxpQkFBVCxDQUEyQixLQUEzQixFQUFrQztBQUNoQyxXQUFPLGFBQWEsS0FBYixLQUF1QixZQUFZLEtBQVosQ0FBdkIsQ0FEeUI7R0FBbEM7Ozs7QUFGSSxvQkFBYyxRQUFRLGVBQVI7QUFDZCxxQkFBZSxRQUFRLGdCQUFSO0FBSW5CLGFBQU8sT0FBUCxHQUFpQixpQkFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvaXNBcnJheUxpa2VPYmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZU9iamVjdDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
