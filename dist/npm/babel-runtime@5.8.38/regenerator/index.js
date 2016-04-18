"use strict";

System.register([], function (_export, _context) {
  var _typeof, g, hadRuntime, oldRuntime;

  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      g = (typeof global === "undefined" ? "undefined" : _typeof(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : undefined;
      hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
      oldRuntime = hadRuntime && g.regeneratorRuntime;

      g.regeneratorRuntime = undefined;
      module.exports = require('./runtime');
      if (hadRuntime) {
        g.regeneratorRuntime = oldRuntime;
      } else {
        try {
          delete g.regeneratorRuntime;
        } catch (e) {
          g.regeneratorRuntime = undefined;
        }
      }
      module.exports = {
        "default": module.exports,
        __esModule: true
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9yZWdlbmVyYXRvci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0ksVUFBSSxRQUFPLHVEQUFQLEtBQWtCLFFBQWxCLEdBQTZCLE1BQTdCLEdBQXNDLFFBQU8sdURBQVAsS0FBa0IsUUFBbEIsR0FBNkIsTUFBN0IsR0FBc0MsUUFBTyxtREFBUCxLQUFnQixRQUFoQixHQUEyQixJQUEzQixZQUF0QztBQUMxQyxtQkFBYSxFQUFFLGtCQUFGLElBQXdCLE9BQU8sbUJBQVAsQ0FBMkIsQ0FBM0IsRUFBOEIsT0FBOUIsQ0FBc0Msb0JBQXRDLEtBQStELENBQS9EO0FBQ3JDLG1CQUFhLGNBQWMsRUFBRSxrQkFBRjs7QUFDL0IsUUFBRSxrQkFBRixHQUF1QixTQUF2QjtBQUNBLGFBQU8sT0FBUCxHQUFpQixRQUFRLFdBQVIsQ0FBakI7QUFDQSxVQUFJLFVBQUosRUFBZ0I7QUFDZCxVQUFFLGtCQUFGLEdBQXVCLFVBQXZCLENBRGM7T0FBaEIsTUFFTztBQUNMLFlBQUk7QUFDRixpQkFBTyxFQUFFLGtCQUFGLENBREw7U0FBSixDQUVFLE9BQU8sQ0FBUCxFQUFVO0FBQ1YsWUFBRSxrQkFBRixHQUF1QixTQUF2QixDQURVO1NBQVY7T0FMSjtBQVNBLGFBQU8sT0FBUCxHQUFpQjtBQUNmLG1CQUFXLE9BQU8sT0FBUDtBQUNYLG9CQUFZLElBQVo7T0FGRiIsImZpbGUiOiJucG0vYmFiZWwtcnVudGltZUA1LjguMzgvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBnID0gdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6IHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiA/IHNlbGYgOiB0aGlzO1xudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9ydW50aW1lJyk7XG5pZiAoaGFkUnVudGltZSkge1xuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJkZWZhdWx0XCI6IG1vZHVsZS5leHBvcnRzLFxuICBfX2VzTW9kdWxlOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
