'use strict';

System.register([], function (_export, _context) {
  var baseInvoke, rest, method;
  return {
    setters: [],
    execute: function () {
      baseInvoke = require('./_baseInvoke');
      rest = require('./rest');
      method = rest(function (path, args) {
        return function (object) {
          return baseInvoke(object, path, args);
        };
      });

      module.exports = method;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL21ldGhvZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksbUJBQWEsUUFBUSxlQUFSO0FBQ2IsYUFBTyxRQUFRLFFBQVI7QUFDUCxlQUFTLEtBQUssVUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQjtBQUNyQyxlQUFPLFVBQVMsTUFBVCxFQUFpQjtBQUN0QixpQkFBTyxXQUFXLE1BQVgsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsQ0FBUCxDQURzQjtTQUFqQixDQUQ4QjtPQUFyQjs7QUFLbEIsYUFBTyxPQUFQLEdBQWlCLE1BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL21ldGhvZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VJbnZva2UgPSByZXF1aXJlKCcuL19iYXNlSW52b2tlJyksXG4gICAgcmVzdCA9IHJlcXVpcmUoJy4vcmVzdCcpO1xudmFyIG1ldGhvZCA9IHJlc3QoZnVuY3Rpb24ocGF0aCwgYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIGJhc2VJbnZva2Uob2JqZWN0LCBwYXRoLCBhcmdzKTtcbiAgfTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBtZXRob2Q7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
