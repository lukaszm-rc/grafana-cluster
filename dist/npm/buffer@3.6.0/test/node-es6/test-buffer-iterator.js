'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      (function (process) {
        'use strict';

        if (process.env.OBJECT_IMPL) global.TYPED_ARRAY_SUPPORT = false;
        var Buffer = require('../../index').Buffer;
        var common = {};
        var assert = require('assert');
        var buffer = new Buffer([1, 2, 3, 4, 5]);
        var arr;
        var b;
        arr = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = buffer[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            b = _step.value;

            arr.push(b);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        assert.deepEqual(arr, [1, 2, 3, 4, 5]);
        arr = [];
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = buffer[Symbol.iterator]()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            b = _step2.value;

            arr.push(b);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        assert.deepEqual(arr, [1, 2, 3, 4, 5]);
        arr = [];
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = buffer.values()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            b = _step3.value;

            arr.push(b);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        assert.deepEqual(arr, [1, 2, 3, 4, 5]);
        arr = [];
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = buffer.keys()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            b = _step4.value;

            arr.push(b);
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        assert.deepEqual(arr, [0, 1, 2, 3, 4]);
        arr = [];
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = buffer.entries()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var b = _step5.value;

            arr.push(b);
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
              _iterator5.return();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        assert.deepEqual(arr, [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]]);
      })(require('process'));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9idWZmZXJAMy42LjAvdGVzdC9ub2RlLWVzNi90ZXN0LWJ1ZmZlci1pdGVyYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsT0FBQyxVQUFTLE9BQVQsRUFBa0I7QUFDakIscUJBRGlCOztBQUVqQixZQUFJLFFBQVEsR0FBUixDQUFZLFdBQVosRUFDRixPQUFPLG1CQUFQLEdBQTZCLEtBQTdCLENBREY7QUFFQSxZQUFJLFNBQVMsUUFBUSxhQUFSLEVBQXVCLE1BQXZCLENBSkk7QUFLakIsWUFBSSxTQUFTLEVBQVQsQ0FMYTtBQU1qQixZQUFJLFNBQVMsUUFBUSxRQUFSLENBQVQsQ0FOYTtBQU9qQixZQUFJLFNBQVMsSUFBSSxNQUFKLENBQVcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixDQUFYLENBQVQsQ0FQYTtBQVFqQixZQUFJLEdBQUosQ0FSaUI7QUFTakIsWUFBSSxDQUFKLENBVGlCO0FBVWpCLGNBQU0sRUFBTixDQVZpQjs7Ozs7O0FBV2pCLCtCQUFVLGdDQUFWO0FBQUs7O0FBQ0gsZ0JBQUksSUFBSixDQUFTLENBQVQ7V0FERjs7Ozs7Ozs7Ozs7Ozs7U0FYaUI7O0FBYWpCLGVBQU8sU0FBUCxDQUFpQixHQUFqQixFQUFzQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLENBQXRCLEVBYmlCO0FBY2pCLGNBQU0sRUFBTixDQWRpQjs7Ozs7O0FBZWpCLGdDQUFVLE9BQU8sT0FBTyxRQUFQLENBQVAsNkJBQVY7QUFBSzs7QUFDSCxnQkFBSSxJQUFKLENBQVMsQ0FBVDtXQURGOzs7Ozs7Ozs7Ozs7OztTQWZpQjs7QUFpQmpCLGVBQU8sU0FBUCxDQUFpQixHQUFqQixFQUFzQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLENBQXRCLEVBakJpQjtBQWtCakIsY0FBTSxFQUFOLENBbEJpQjs7Ozs7O0FBbUJqQixnQ0FBVSxPQUFPLE1BQVAsNkJBQVY7QUFBSzs7QUFDSCxnQkFBSSxJQUFKLENBQVMsQ0FBVDtXQURGOzs7Ozs7Ozs7Ozs7OztTQW5CaUI7O0FBcUJqQixlQUFPLFNBQVAsQ0FBaUIsR0FBakIsRUFBc0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixDQUF0QixFQXJCaUI7QUFzQmpCLGNBQU0sRUFBTixDQXRCaUI7Ozs7OztBQXVCakIsZ0NBQVUsT0FBTyxJQUFQLDZCQUFWO0FBQUs7O0FBQ0gsZ0JBQUksSUFBSixDQUFTLENBQVQ7V0FERjs7Ozs7Ozs7Ozs7Ozs7U0F2QmlCOztBQXlCakIsZUFBTyxTQUFQLENBQWlCLEdBQWpCLEVBQXNCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsQ0FBdEIsRUF6QmlCO0FBMEJqQixjQUFNLEVBQU4sQ0ExQmlCOzs7Ozs7QUEyQmpCLGdDQUFjLE9BQU8sT0FBUCw2QkFBZDtnQkFBUzs7QUFDUCxnQkFBSSxJQUFKLENBQVMsQ0FBVDtXQURGOzs7Ozs7Ozs7Ozs7OztTQTNCaUI7O0FBNkJqQixlQUFPLFNBQVAsQ0FBaUIsR0FBakIsRUFBc0IsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQUQsRUFBUyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVQsRUFBaUIsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFqQixFQUF5QixDQUFDLENBQUQsRUFBSSxDQUFKLENBQXpCLEVBQWlDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBakMsQ0FBdEIsRUE3QmlCO09BQWxCLENBQUQsQ0E4QkcsUUFBUSxTQUFSLENBOUJIIiwiZmlsZSI6Im5wbS9idWZmZXJAMy42LjAvdGVzdC9ub2RlLWVzNi90ZXN0LWJ1ZmZlci1pdGVyYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuKGZ1bmN0aW9uKHByb2Nlc3MpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBpZiAocHJvY2Vzcy5lbnYuT0JKRUNUX0lNUEwpXG4gICAgZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBmYWxzZTtcbiAgdmFyIEJ1ZmZlciA9IHJlcXVpcmUoJy4uLy4uL2luZGV4JykuQnVmZmVyO1xuICB2YXIgY29tbW9uID0ge307XG4gIHZhciBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKTtcbiAgdmFyIGJ1ZmZlciA9IG5ldyBCdWZmZXIoWzEsIDIsIDMsIDQsIDVdKTtcbiAgdmFyIGFycjtcbiAgdmFyIGI7XG4gIGFyciA9IFtdO1xuICBmb3IgKGIgb2YgYnVmZmVyKVxuICAgIGFyci5wdXNoKGIpO1xuICBhc3NlcnQuZGVlcEVxdWFsKGFyciwgWzEsIDIsIDMsIDQsIDVdKTtcbiAgYXJyID0gW107XG4gIGZvciAoYiBvZiBidWZmZXJbU3ltYm9sLml0ZXJhdG9yXSgpKVxuICAgIGFyci5wdXNoKGIpO1xuICBhc3NlcnQuZGVlcEVxdWFsKGFyciwgWzEsIDIsIDMsIDQsIDVdKTtcbiAgYXJyID0gW107XG4gIGZvciAoYiBvZiBidWZmZXIudmFsdWVzKCkpXG4gICAgYXJyLnB1c2goYik7XG4gIGFzc2VydC5kZWVwRXF1YWwoYXJyLCBbMSwgMiwgMywgNCwgNV0pO1xuICBhcnIgPSBbXTtcbiAgZm9yIChiIG9mIGJ1ZmZlci5rZXlzKCkpXG4gICAgYXJyLnB1c2goYik7XG4gIGFzc2VydC5kZWVwRXF1YWwoYXJyLCBbMCwgMSwgMiwgMywgNF0pO1xuICBhcnIgPSBbXTtcbiAgZm9yICh2YXIgYiBvZiBidWZmZXIuZW50cmllcygpKVxuICAgIGFyci5wdXNoKGIpO1xuICBhc3NlcnQuZGVlcEVxdWFsKGFyciwgW1swLCAxXSwgWzEsIDJdLCBbMiwgM10sIFszLCA0XSwgWzQsIDVdXSk7XG59KShyZXF1aXJlKCdwcm9jZXNzJykpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
