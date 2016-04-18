'use strict';

System.register([], function (_export, _context) {
  var isObject, objectCreate;

  function baseCreate(proto) {
    return isObject(proto) ? objectCreate(proto) : {};
  }
  return {
    setters: [],
    execute: function () {
      isObject = require('./isObject');
      objectCreate = Object.create;
      module.exports = baseCreate;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlQ3JlYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxVQUFULENBQW9CLEtBQXBCLEVBQTJCO0FBQ3pCLFdBQU8sU0FBUyxLQUFULElBQWtCLGFBQWEsS0FBYixDQUFsQixHQUF3QyxFQUF4QyxDQURrQjtHQUEzQjs7OztBQUZJLGlCQUFXLFFBQVEsWUFBUjtBQUNYLHFCQUFlLE9BQU8sTUFBUDtBQUluQixhQUFPLE9BQVAsR0FBaUIsVUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2Jhc2VDcmVhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcbnZhciBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuZnVuY3Rpb24gYmFzZUNyZWF0ZShwcm90bykge1xuICByZXR1cm4gaXNPYmplY3QocHJvdG8pID8gb2JqZWN0Q3JlYXRlKHByb3RvKSA6IHt9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ3JlYXRlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
