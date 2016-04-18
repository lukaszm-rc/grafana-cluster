/* */
"use strict";

System.register([], function (_export, _context) {
  var _getIterator2, _getIterator3, _isIterable2, _isIterable3;

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      _getIterator2 = require('../core-js/get-iterator');
      _getIterator3 = _interopRequireDefault(_getIterator2);
      _isIterable2 = require('../core-js/is-iterable');
      _isIterable3 = _interopRequireDefault(_isIterable2);
      exports.default = function (arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if ((0, _isIterable3.default)(Object(arr))) {
          var _arr = [];
          for (var _iterator = (0, _getIterator3.default)(arr), _step; !(_step = _iterator.next()).done;) {
            _arr.push(_step.value);
            if (i && _arr.length === i) break;
          }
          return _arr;
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL3NsaWNlZFRvQXJyYXlMb29zZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7O0FBTUEsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUNuQyxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLEdBQXhCLEdBQThCLEVBQUMsU0FBUyxHQUFULEVBQS9CLENBRDRCO0dBQXJDOzs7O0FBTEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCO0FBQ0ksc0JBQWdCLFFBQVEseUJBQVI7QUFDaEIsc0JBQWdCLHVCQUF1QixhQUF2QjtBQUNoQixxQkFBZSxRQUFRLHdCQUFSO0FBQ2YscUJBQWUsdUJBQXVCLFlBQXZCO0FBSW5CLGNBQVEsT0FBUixHQUFrQixVQUFTLEdBQVQsRUFBYyxDQUFkLEVBQWlCO0FBQ2pDLFlBQUksTUFBTSxPQUFOLENBQWMsR0FBZCxDQUFKLEVBQXdCO0FBQ3RCLGlCQUFPLEdBQVAsQ0FEc0I7U0FBeEIsTUFFTyxJQUFJLENBQUMsR0FBRyxhQUFhLE9BQWIsQ0FBSixDQUEwQixPQUFPLEdBQVAsQ0FBMUIsQ0FBSixFQUE0QztBQUNqRCxjQUFJLE9BQU8sRUFBUCxDQUQ2QztBQUVqRCxlQUFLLElBQUksWUFBWSxDQUFDLEdBQUcsY0FBYyxPQUFkLENBQUosQ0FBMkIsR0FBM0IsQ0FBWixFQUNMLEtBREMsRUFDTSxDQUFDLENBQUMsUUFBUSxVQUFVLElBQVYsRUFBUixDQUFELENBQTJCLElBQTNCLEdBQW1DO0FBQzdDLGlCQUFLLElBQUwsQ0FBVSxNQUFNLEtBQU4sQ0FBVixDQUQ2QztBQUU3QyxnQkFBSSxLQUFLLEtBQUssTUFBTCxLQUFnQixDQUFoQixFQUNQLE1BREY7V0FIRjtBQU1BLGlCQUFPLElBQVAsQ0FSaUQ7U0FBNUMsTUFTQTtBQUNMLGdCQUFNLElBQUksU0FBSixDQUFjLHNEQUFkLENBQU4sQ0FESztTQVRBO09BSFMiLCJmaWxlIjoibnBtL2JhYmVsLXJ1bnRpbWVANS44LjM4L2hlbHBlcnMvc2xpY2VkVG9BcnJheUxvb3NlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgX2dldEl0ZXJhdG9yMiA9IHJlcXVpcmUoJy4uL2NvcmUtanMvZ2V0LWl0ZXJhdG9yJyk7XG52YXIgX2dldEl0ZXJhdG9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEl0ZXJhdG9yMik7XG52YXIgX2lzSXRlcmFibGUyID0gcmVxdWlyZSgnLi4vY29yZS1qcy9pcy1pdGVyYWJsZScpO1xudmFyIF9pc0l0ZXJhYmxlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzSXRlcmFibGUyKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ZGVmYXVsdDogb2JqfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uKGFyciwgaSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgcmV0dXJuIGFycjtcbiAgfSBlbHNlIGlmICgoMCwgX2lzSXRlcmFibGUzLmRlZmF1bHQpKE9iamVjdChhcnIpKSkge1xuICAgIHZhciBfYXJyID0gW107XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gKDAsIF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoYXJyKSxcbiAgICAgICAgX3N0ZXA7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lOyApIHtcbiAgICAgIF9hcnIucHVzaChfc3RlcC52YWx1ZSk7XG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSlcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBfYXJyO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
