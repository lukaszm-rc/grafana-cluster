'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      if (typeof Object.create === 'function') {
        // implementation from standard node.js 'util' module
        module.exports = function inherits(ctor, superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        };
      } else {
        // old school shim for old browsers
        module.exports = function inherits(ctor, superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function TempCtor() {};
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        };
      }
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9pbmhlcml0c0AyLjAuMS9pbmhlcml0c19icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxVQUFJLE9BQU8sT0FBTyxNQUFQLEtBQWtCLFVBQXpCLEVBQXFDOztBQUV2QyxlQUFPLE9BQVAsR0FBaUIsU0FBUyxRQUFULENBQWtCLElBQWxCLEVBQXdCLFNBQXhCLEVBQW1DO0FBQ2xELGVBQUssTUFBTCxHQUFjLFNBQWQsQ0FEa0Q7QUFFbEQsZUFBSyxTQUFMLEdBQWlCLE9BQU8sTUFBUCxDQUFjLFVBQVUsU0FBVixFQUFxQjtBQUNsRCx5QkFBYTtBQUNYLHFCQUFPLElBQVA7QUFDQSwwQkFBWSxLQUFaO0FBQ0Esd0JBQVUsSUFBVjtBQUNBLDRCQUFjLElBQWQ7YUFKRjtXQURlLENBQWpCLENBRmtEO1NBQW5DLENBRnNCO09BQXpDLE1BYU87O0FBRUwsZUFBTyxPQUFQLEdBQWlCLFNBQVMsUUFBVCxDQUFrQixJQUFsQixFQUF3QixTQUF4QixFQUFtQztBQUNsRCxlQUFLLE1BQUwsR0FBYyxTQUFkLENBRGtEO0FBRWxELGNBQUksV0FBVyxTQUFYLFFBQVcsR0FBWSxFQUFaLENBRm1DO0FBR2xELG1CQUFTLFNBQVQsR0FBcUIsVUFBVSxTQUFWLENBSDZCO0FBSWxELGVBQUssU0FBTCxHQUFpQixJQUFJLFFBQUosRUFBakIsQ0FKa0Q7QUFLbEQsZUFBSyxTQUFMLENBQWUsV0FBZixHQUE2QixJQUE3QixDQUxrRDtTQUFuQyxDQUZaO09BYlAiLCJmaWxlIjoibnBtL2luaGVyaXRzQDIuMC4xL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbmlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
