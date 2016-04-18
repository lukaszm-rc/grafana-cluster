'use strict';

System.register([], function (_export, _context) {
  var _typeof, toIObject, getNames, toString, windowNames, getWindowNames;

  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      toIObject = require('./$.to-iobject');
      getNames = require('./$').getNames;
      toString = {}.toString;
      windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

      getWindowNames = function getWindowNames(it) {
        try {
          return getNames(it);
        } catch (e) {
          return windowNames.slice();
        }
      };

      module.exports.get = function getOwnPropertyNames(it) {
        if (windowNames && toString.call(it) == '[object Window]') return getWindowNames(it);
        return getNames(toIObject(it));
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmdldC1uYW1lcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0ksa0JBQVksUUFBUSxnQkFBUjtBQUNaLGlCQUFXLFFBQVEsS0FBUixFQUFlLFFBQWY7QUFDWCxpQkFBVyxHQUFHLFFBQUg7QUFDWCxvQkFBYyxRQUFPLHVEQUFQLElBQWlCLFFBQWpCLElBQTZCLE9BQU8sbUJBQVAsR0FBNkIsT0FBTyxtQkFBUCxDQUEyQixNQUEzQixDQUExRCxHQUErRixFQUEvRjs7QUFDZCx1QkFBaUIsU0FBakIsY0FBaUIsQ0FBUyxFQUFULEVBQWE7QUFDaEMsWUFBSTtBQUNGLGlCQUFPLFNBQVMsRUFBVCxDQUFQLENBREU7U0FBSixDQUVFLE9BQU8sQ0FBUCxFQUFVO0FBQ1YsaUJBQU8sWUFBWSxLQUFaLEVBQVAsQ0FEVTtTQUFWO09BSGlCOztBQU9yQixhQUFPLE9BQVAsQ0FBZSxHQUFmLEdBQXFCLFNBQVMsbUJBQVQsQ0FBNkIsRUFBN0IsRUFBaUM7QUFDcEQsWUFBSSxlQUFlLFNBQVMsSUFBVCxDQUFjLEVBQWQsS0FBcUIsaUJBQXJCLEVBQ2pCLE9BQU8sZUFBZSxFQUFmLENBQVAsQ0FERjtBQUVBLGVBQU8sU0FBUyxVQUFVLEVBQVYsQ0FBVCxDQUFQLENBSG9EO09BQWpDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmdldC1uYW1lcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0JyksXG4gICAgZ2V0TmFtZXMgPSByZXF1aXJlKCcuLyQnKS5nZXROYW1lcyxcbiAgICB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdldE5hbWVzKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xubW9kdWxlLmV4cG9ydHMuZ2V0ID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICBpZiAod2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScpXG4gICAgcmV0dXJuIGdldFdpbmRvd05hbWVzKGl0KTtcbiAgcmV0dXJuIGdldE5hbWVzKHRvSU9iamVjdChpdCkpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
