/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _lodashObjectMerge, _lodashObjectMerge2;

  // istanbul ignore next

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_lodashObjectMerge = require("lodash/object/merge");
      _lodashObjectMerge2 = _interopRequireDefault(_lodashObjectMerge);


      /**
       * Merge options.
       */

      exports["default"] = function (dest, src) {
        if (!dest || !src) return;

        return _lodashObjectMerge2["default"](dest, src, function (a, b) {
          if (b && Array.isArray(a)) {
            var c = a.slice(0);
            for (var _iterator = b, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
              var _ref;

              if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
              } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
              }

              var v = _ref;

              if (a.indexOf(v) < 0) {
                c.push(v);
              }
            }
            return c;
          }
        });
      };

      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvaGVscGVycy9tZXJnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQUtBLFdBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLEdBQXhCLEdBQThCLEVBQUUsV0FBVyxHQUFYLEVBQWhDLENBQVQ7R0FBckM7Ozs7O0FBSEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBS0kscUJBQXFCLFFBQVEscUJBQVI7QUFFckIsNEJBQXNCLHVCQUF1QixrQkFBdkI7Ozs7Ozs7QUFNMUIsY0FBUSxTQUFSLElBQXFCLFVBQVUsSUFBVixFQUFnQixHQUFoQixFQUFxQjtBQUN4QyxZQUFJLENBQUMsSUFBRCxJQUFTLENBQUMsR0FBRCxFQUFNLE9BQW5COztBQUVBLGVBQU8sb0JBQW9CLFNBQXBCLEVBQStCLElBQS9CLEVBQXFDLEdBQXJDLEVBQTBDLFVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0I7QUFDL0QsY0FBSSxLQUFLLE1BQU0sT0FBTixDQUFjLENBQWQsQ0FBTCxFQUF1QjtBQUN6QixnQkFBSSxJQUFJLEVBQUUsS0FBRixDQUFRLENBQVIsQ0FBSixDQURxQjtBQUV6QixpQkFBSyxJQUFJLFlBQVksQ0FBWixFQUFlLFdBQVcsTUFBTSxPQUFOLENBQWMsU0FBZCxDQUFYLEVBQXFDLEtBQUssQ0FBTCxFQUFRLFlBQVksV0FBVyxTQUFYLEdBQXVCLFVBQVUsT0FBTyxRQUFQLENBQVYsRUFBdkIsSUFBdUQ7QUFDdEksa0JBQUksSUFBSixDQURzSTs7QUFHdEksa0JBQUksUUFBSixFQUFjO0FBQ1osb0JBQUksTUFBTSxVQUFVLE1BQVYsRUFBa0IsTUFBNUI7QUFDQSx1QkFBTyxVQUFVLElBQVYsQ0FBUCxDQUZZO2VBQWQsTUFHTztBQUNMLHFCQUFLLFVBQVUsSUFBVixFQUFMLENBREs7QUFFTCxvQkFBSSxHQUFHLElBQUgsRUFBUyxNQUFiO0FBQ0EsdUJBQU8sR0FBRyxLQUFILENBSEY7ZUFIUDs7QUFTQSxrQkFBSSxJQUFJLElBQUosQ0Faa0k7O0FBY3RJLGtCQUFJLEVBQUUsT0FBRixDQUFVLENBQVYsSUFBZSxDQUFmLEVBQWtCO0FBQ3BCLGtCQUFFLElBQUYsQ0FBTyxDQUFQLEVBRG9CO2VBQXRCO2FBZEY7QUFrQkEsbUJBQU8sQ0FBUCxDQXBCeUI7V0FBM0I7U0FEK0MsQ0FBakQsQ0FId0M7T0FBckI7O0FBNkJyQixhQUFPLE9BQVAsR0FBaUIsUUFBUSxTQUFSLENBQWpCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvaGVscGVycy9tZXJnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX2xvZGFzaE9iamVjdE1lcmdlID0gcmVxdWlyZShcImxvZGFzaC9vYmplY3QvbWVyZ2VcIik7XG5cbnZhciBfbG9kYXNoT2JqZWN0TWVyZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoT2JqZWN0TWVyZ2UpO1xuXG4vKipcbiAqIE1lcmdlIG9wdGlvbnMuXG4gKi9cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoZGVzdCwgc3JjKSB7XG4gIGlmICghZGVzdCB8fCAhc3JjKSByZXR1cm47XG5cbiAgcmV0dXJuIF9sb2Rhc2hPYmplY3RNZXJnZTJbXCJkZWZhdWx0XCJdKGRlc3QsIHNyYywgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICBpZiAoYiAmJiBBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICB2YXIgYyA9IGEuc2xpY2UoMCk7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBiLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICB2YXIgX3JlZjtcblxuICAgICAgICBpZiAoX2lzQXJyYXkpIHtcbiAgICAgICAgICBpZiAoX2kgPj0gX2l0ZXJhdG9yLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgX3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgaWYgKF9pLmRvbmUpIGJyZWFrO1xuICAgICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB2ID0gX3JlZjtcblxuICAgICAgICBpZiAoYS5pbmRleE9mKHYpIDwgMCkge1xuICAgICAgICAgIGMucHVzaCh2KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
