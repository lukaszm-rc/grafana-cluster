/* */
"use strict";

System.register([], function (_export, _context) {
  var _getIterator, _isIterable;

  return {
    setters: [],
    execute: function () {
      _getIterator = require('../core-js/get-iterator')["default"];
      _isIterable = require('../core-js/is-iterable')["default"];

      exports["default"] = function () {
        function sliceIterator(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;
          try {
            for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
        return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (_isIterable(Object(arr))) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();
      exports.__esModule = true;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL3NsaWNlZC10by1hcnJheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7O0FBQ0kscUJBQWUsUUFBUSx5QkFBUixFQUFtQyxTQUFuQztBQUNmLG9CQUFjLFFBQVEsd0JBQVIsRUFBa0MsU0FBbEM7O0FBQ2xCLGNBQVEsU0FBUixJQUFxQixZQUFZO0FBQy9CLGlCQUFTLGFBQVQsQ0FBdUIsR0FBdkIsRUFBNEIsQ0FBNUIsRUFBK0I7QUFDN0IsY0FBSSxPQUFPLEVBQVAsQ0FEeUI7QUFFN0IsY0FBSSxLQUFLLElBQUwsQ0FGeUI7QUFHN0IsY0FBSSxLQUFLLEtBQUwsQ0FIeUI7QUFJN0IsY0FBSSxLQUFLLFNBQUwsQ0FKeUI7QUFLN0IsY0FBSTtBQUNGLGlCQUFLLElBQUksS0FBSyxhQUFhLEdBQWIsQ0FBTCxFQUNMLEVBREMsRUFDRyxFQUFFLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSCxFQUFMLENBQUQsQ0FBaUIsSUFBakIsQ0FBUCxFQUErQixLQUFLLElBQUwsRUFBVztBQUNoRCxtQkFBSyxJQUFMLENBQVUsR0FBRyxLQUFILENBQVYsQ0FEZ0Q7QUFFaEQsa0JBQUksS0FBSyxLQUFLLE1BQUwsS0FBZ0IsQ0FBaEIsRUFDUCxNQURGO2FBSEY7V0FERixDQU9FLE9BQU8sR0FBUCxFQUFZO0FBQ1osaUJBQUssSUFBTCxDQURZO0FBRVosaUJBQUssR0FBTCxDQUZZO1dBQVosU0FHUTtBQUNSLGdCQUFJO0FBQ0Ysa0JBQUksQ0FBQyxFQUFELElBQU8sR0FBRyxRQUFILENBQVAsRUFDRixHQUFHLFFBQUgsSUFERjthQURGLFNBR1U7QUFDUixrQkFBSSxFQUFKLEVBQ0UsTUFBTSxFQUFOLENBREY7YUFKRjtXQVhGO0FBbUJBLGlCQUFPLElBQVAsQ0F4QjZCO1NBQS9CO0FBMEJBLGVBQU8sVUFBUyxHQUFULEVBQWMsQ0FBZCxFQUFpQjtBQUN0QixjQUFJLE1BQU0sT0FBTixDQUFjLEdBQWQsQ0FBSixFQUF3QjtBQUN0QixtQkFBTyxHQUFQLENBRHNCO1dBQXhCLE1BRU8sSUFBSSxZQUFZLE9BQU8sR0FBUCxDQUFaLENBQUosRUFBOEI7QUFDbkMsbUJBQU8sY0FBYyxHQUFkLEVBQW1CLENBQW5CLENBQVAsQ0FEbUM7V0FBOUIsTUFFQTtBQUNMLGtCQUFNLElBQUksU0FBSixDQUFjLHNEQUFkLENBQU4sQ0FESztXQUZBO1NBSEYsQ0EzQndCO09BQVgsRUFBdEI7QUFxQ0EsY0FBUSxVQUFSLEdBQXFCLElBQXJCIiwiZmlsZSI6Im5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL3NsaWNlZC10by1hcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2dldEl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vY29yZS1qcy9nZXQtaXRlcmF0b3InKVtcImRlZmF1bHRcIl07XG52YXIgX2lzSXRlcmFibGUgPSByZXF1aXJlKCcuLi9jb3JlLWpzL2lzLWl0ZXJhYmxlJylbXCJkZWZhdWx0XCJdO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7XG4gICAgdmFyIF9hcnIgPSBbXTtcbiAgICB2YXIgX24gPSB0cnVlO1xuICAgIHZhciBfZCA9IGZhbHNlO1xuICAgIHZhciBfZSA9IHVuZGVmaW5lZDtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2kgPSBfZ2V0SXRlcmF0b3IoYXJyKSxcbiAgICAgICAgICBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSlcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kID0gdHJ1ZTtcbiAgICAgIF9lID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKVxuICAgICAgICAgIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2QpXG4gICAgICAgICAgdGhyb3cgX2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBfYXJyO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihhcnIsIGkpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH0gZWxzZSBpZiAoX2lzSXRlcmFibGUoT2JqZWN0KGFycikpKSB7XG4gICAgICByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgICB9XG4gIH07XG59KSgpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
