/* */
"use strict";

System.register([], function (_export, _context) {
  var _isIterable, _getIterator;

  return {
    setters: [],
    execute: function () {
      _isIterable = require('../core-js/is-iterable')["default"];
      _getIterator = require('../core-js/get-iterator')["default"];

      exports["default"] = function (arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (_isIterable(Object(arr))) {
          var _arr = [];
          for (var _iterator = _getIterator(arr), _step; !(_step = _iterator.next()).done;) {
            _arr.push(_step.value);
            if (i && _arr.length === i) break;
          }
          return _arr;
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
      exports.__esModule = true;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL3NsaWNlZC10by1hcnJheS1sb29zZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7O0FBQ0ksb0JBQWMsUUFBUSx3QkFBUixFQUFrQyxTQUFsQztBQUNkLHFCQUFlLFFBQVEseUJBQVIsRUFBbUMsU0FBbkM7O0FBQ25CLGNBQVEsU0FBUixJQUFxQixVQUFTLEdBQVQsRUFBYyxDQUFkLEVBQWlCO0FBQ3BDLFlBQUksTUFBTSxPQUFOLENBQWMsR0FBZCxDQUFKLEVBQXdCO0FBQ3RCLGlCQUFPLEdBQVAsQ0FEc0I7U0FBeEIsTUFFTyxJQUFJLFlBQVksT0FBTyxHQUFQLENBQVosQ0FBSixFQUE4QjtBQUNuQyxjQUFJLE9BQU8sRUFBUCxDQUQrQjtBQUVuQyxlQUFLLElBQUksWUFBWSxhQUFhLEdBQWIsQ0FBWixFQUNMLEtBREMsRUFDTSxDQUFDLENBQUMsUUFBUSxVQUFVLElBQVYsRUFBUixDQUFELENBQTJCLElBQTNCLEdBQW1DO0FBQzdDLGlCQUFLLElBQUwsQ0FBVSxNQUFNLEtBQU4sQ0FBVixDQUQ2QztBQUU3QyxnQkFBSSxLQUFLLEtBQUssTUFBTCxLQUFnQixDQUFoQixFQUNQLE1BREY7V0FIRjtBQU1BLGlCQUFPLElBQVAsQ0FSbUM7U0FBOUIsTUFTQTtBQUNMLGdCQUFNLElBQUksU0FBSixDQUFjLHNEQUFkLENBQU4sQ0FESztTQVRBO09BSFk7QUFnQnJCLGNBQVEsVUFBUixHQUFxQixJQUFyQiIsImZpbGUiOiJucG0vYmFiZWwtcnVudGltZUA1LjguMzgvaGVscGVycy9zbGljZWQtdG8tYXJyYXktbG9vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwidXNlIHN0cmljdFwiO1xudmFyIF9pc0l0ZXJhYmxlID0gcmVxdWlyZSgnLi4vY29yZS1qcy9pcy1pdGVyYWJsZScpW1wiZGVmYXVsdFwiXTtcbnZhciBfZ2V0SXRlcmF0b3IgPSByZXF1aXJlKCcuLi9jb3JlLWpzL2dldC1pdGVyYXRvcicpW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24oYXJyLCBpKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICByZXR1cm4gYXJyO1xuICB9IGVsc2UgaWYgKF9pc0l0ZXJhYmxlKE9iamVjdChhcnIpKSkge1xuICAgIHZhciBfYXJyID0gW107XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gX2dldEl0ZXJhdG9yKGFyciksXG4gICAgICAgIF9zdGVwOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKSB7XG4gICAgICBfYXJyLnB1c2goX3N0ZXAudmFsdWUpO1xuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gX2FycjtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgfVxufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
