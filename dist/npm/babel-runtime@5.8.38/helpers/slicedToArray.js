/* */
"use strict";

System.register([], function (_export, _context) {
  var _isIterable2, _isIterable3, _getIterator2, _getIterator3;

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      _isIterable2 = require('../core-js/is-iterable');
      _isIterable3 = _interopRequireDefault(_isIterable2);
      _getIterator2 = require('../core-js/get-iterator');
      _getIterator3 = _interopRequireDefault(_getIterator2);
      exports.default = function () {
        function sliceIterator(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;
          try {
            for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
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
          } else if ((0, _isIterable3.default)(Object(arr))) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7OztBQU1BLFdBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFDbkMsV0FBTyxPQUFPLElBQUksVUFBSixHQUFpQixHQUF4QixHQUE4QixFQUFDLFNBQVMsR0FBVCxFQUEvQixDQUQ0QjtHQUFyQzs7OztBQUxBLGNBQVEsVUFBUixHQUFxQixJQUFyQjtBQUNJLHFCQUFlLFFBQVEsd0JBQVI7QUFDZixxQkFBZSx1QkFBdUIsWUFBdkI7QUFDZixzQkFBZ0IsUUFBUSx5QkFBUjtBQUNoQixzQkFBZ0IsdUJBQXVCLGFBQXZCO0FBSXBCLGNBQVEsT0FBUixHQUFrQixZQUFXO0FBQzNCLGlCQUFTLGFBQVQsQ0FBdUIsR0FBdkIsRUFBNEIsQ0FBNUIsRUFBK0I7QUFDN0IsY0FBSSxPQUFPLEVBQVAsQ0FEeUI7QUFFN0IsY0FBSSxLQUFLLElBQUwsQ0FGeUI7QUFHN0IsY0FBSSxLQUFLLEtBQUwsQ0FIeUI7QUFJN0IsY0FBSSxLQUFLLFNBQUwsQ0FKeUI7QUFLN0IsY0FBSTtBQUNGLGlCQUFLLElBQUksS0FBSyxDQUFDLEdBQUcsY0FBYyxPQUFkLENBQUosQ0FBMkIsR0FBM0IsQ0FBTCxFQUNMLEVBREMsRUFDRyxFQUFFLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSCxFQUFMLENBQUQsQ0FBaUIsSUFBakIsQ0FBUCxFQUErQixLQUFLLElBQUwsRUFBVztBQUNoRCxtQkFBSyxJQUFMLENBQVUsR0FBRyxLQUFILENBQVYsQ0FEZ0Q7QUFFaEQsa0JBQUksS0FBSyxLQUFLLE1BQUwsS0FBZ0IsQ0FBaEIsRUFDUCxNQURGO2FBSEY7V0FERixDQU9FLE9BQU8sR0FBUCxFQUFZO0FBQ1osaUJBQUssSUFBTCxDQURZO0FBRVosaUJBQUssR0FBTCxDQUZZO1dBQVosU0FHUTtBQUNSLGdCQUFJO0FBQ0Ysa0JBQUksQ0FBQyxFQUFELElBQU8sR0FBRyxRQUFILENBQVAsRUFDRixHQUFHLFFBQUgsSUFERjthQURGLFNBR1U7QUFDUixrQkFBSSxFQUFKLEVBQ0UsTUFBTSxFQUFOLENBREY7YUFKRjtXQVhGO0FBbUJBLGlCQUFPLElBQVAsQ0F4QjZCO1NBQS9CO0FBMEJBLGVBQU8sVUFBUyxHQUFULEVBQWMsQ0FBZCxFQUFpQjtBQUN0QixjQUFJLE1BQU0sT0FBTixDQUFjLEdBQWQsQ0FBSixFQUF3QjtBQUN0QixtQkFBTyxHQUFQLENBRHNCO1dBQXhCLE1BRU8sSUFBSSxDQUFDLEdBQUcsYUFBYSxPQUFiLENBQUosQ0FBMEIsT0FBTyxHQUFQLENBQTFCLENBQUosRUFBNEM7QUFDakQsbUJBQU8sY0FBYyxHQUFkLEVBQW1CLENBQW5CLENBQVAsQ0FEaUQ7V0FBNUMsTUFFQTtBQUNMLGtCQUFNLElBQUksU0FBSixDQUFjLHNEQUFkLENBQU4sQ0FESztXQUZBO1NBSEYsQ0EzQm9CO09BQVgsRUFBbEIiLCJmaWxlIjoibnBtL2JhYmVsLXJ1bnRpbWVANS44LjM4L2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIF9pc0l0ZXJhYmxlMiA9IHJlcXVpcmUoJy4uL2NvcmUtanMvaXMtaXRlcmFibGUnKTtcbnZhciBfaXNJdGVyYWJsZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0l0ZXJhYmxlMik7XG52YXIgX2dldEl0ZXJhdG9yMiA9IHJlcXVpcmUoJy4uL2NvcmUtanMvZ2V0LWl0ZXJhdG9yJyk7XG52YXIgX2dldEl0ZXJhdG9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEl0ZXJhdG9yMik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge2RlZmF1bHQ6IG9ian07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHtcbiAgICB2YXIgX2FyciA9IFtdO1xuICAgIHZhciBfbiA9IHRydWU7XG4gICAgdmFyIF9kID0gZmFsc2U7XG4gICAgdmFyIF9lID0gdW5kZWZpbmVkO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaSA9ICgwLCBfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKGFyciksXG4gICAgICAgICAgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcbiAgICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZCA9IHRydWU7XG4gICAgICBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSlcbiAgICAgICAgICBfaVtcInJldHVyblwiXSgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kKVxuICAgICAgICAgIHRocm93IF9lO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gX2FycjtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oYXJyLCBpKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9IGVsc2UgaWYgKCgwLCBfaXNJdGVyYWJsZTMuZGVmYXVsdCkoT2JqZWN0KGFycikpKSB7XG4gICAgICByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgICB9XG4gIH07XG59KCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
