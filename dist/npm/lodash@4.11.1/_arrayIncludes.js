'use strict';

System.register([], function (_export, _context) {
  var baseIndexOf;

  function arrayIncludes(array, value) {
    return !!array.length && baseIndexOf(array, value, 0) > -1;
  }
  return {
    setters: [],
    execute: function () {
      baseIndexOf = require('./_baseIndexOf');
      module.exports = arrayIncludes;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19hcnJheUluY2x1ZGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsV0FBUyxhQUFULENBQXVCLEtBQXZCLEVBQThCLEtBQTlCLEVBQXFDO0FBQ25DLFdBQU8sQ0FBQyxDQUFDLE1BQU0sTUFBTixJQUFnQixZQUFZLEtBQVosRUFBbUIsS0FBbkIsRUFBMEIsQ0FBMUIsSUFBK0IsQ0FBQyxDQUFELENBRHJCO0dBQXJDOzs7O0FBREksb0JBQWMsUUFBUSxnQkFBUjtBQUlsQixhQUFPLE9BQVAsR0FBaUIsYUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2FycmF5SW5jbHVkZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Jhc2VJbmRleE9mJyk7XG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzKGFycmF5LCB2YWx1ZSkge1xuICByZXR1cm4gISFhcnJheS5sZW5ndGggJiYgYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCAwKSA+IC0xO1xufVxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
