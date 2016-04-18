/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _types, t;

  // istanbul ignore next

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }newObj["default"] = obj;return newObj;
    }
  }

  /**
   * [Please add a description.]
   */

  function build(node, buildBody) {
    var self = node.blocks.shift();
    if (!self) return;

    var child = build(node, buildBody);
    if (!child) {
      // last item
      child = buildBody();

      // add a filter as this is our final stop
      if (node.filter) {
        child = t.ifStatement(node.filter, t.blockStatement([child]));
      }
    }

    return t.forOfStatement(t.variableDeclaration("let", [t.variableDeclarator(self.left)]), self.right, t.blockStatement([child]));
  }

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports["default"] = build;_types = require("../../types");
      t = _interopRequireWildcard(_types);
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vaGVscGVycy9idWlsZC1jb21wcmVoZW5zaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBTUEsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7Ozs7O0FBVUEsV0FBUyxLQUFULENBQWUsSUFBZixFQUFxQixTQUFyQixFQUFnQztBQUM5QixRQUFJLE9BQU8sS0FBSyxNQUFMLENBQVksS0FBWixFQUFQLENBRDBCO0FBRTlCLFFBQUksQ0FBQyxJQUFELEVBQU8sT0FBWDs7QUFFQSxRQUFJLFFBQVEsTUFBTSxJQUFOLEVBQVksU0FBWixDQUFSLENBSjBCO0FBSzlCLFFBQUksQ0FBQyxLQUFELEVBQVE7O0FBRVYsY0FBUSxXQUFSOzs7QUFGVSxVQUtOLEtBQUssTUFBTCxFQUFhO0FBQ2YsZ0JBQVEsRUFBRSxXQUFGLENBQWMsS0FBSyxNQUFMLEVBQWEsRUFBRSxjQUFGLENBQWlCLENBQUMsS0FBRCxDQUFqQixDQUEzQixDQUFSLENBRGU7T0FBakI7S0FMRjs7QUFVQSxXQUFPLEVBQUUsY0FBRixDQUFpQixFQUFFLG1CQUFGLENBQXNCLEtBQXRCLEVBQTZCLENBQUMsRUFBRSxrQkFBRixDQUFxQixLQUFLLElBQUwsQ0FBdEIsQ0FBN0IsQ0FBakIsRUFBa0YsS0FBSyxLQUFMLEVBQVksRUFBRSxjQUFGLENBQWlCLENBQUMsS0FBRCxDQUFqQixDQUE5RixDQUFQLENBZjhCO0dBQWhDOzs7OztBQWRBLGNBQVEsVUFBUixHQUFxQixJQUFyQjtBQUNBLGNBQVEsU0FBUixJQUFxQixLQUFyQixDQUtJLFNBQVMsUUFBUSxhQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEI7QUF3QlIsYUFBTyxPQUFQLEdBQWlCLFFBQVEsU0FBUixDQUFqQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYW5zZm9ybWF0aW9uL2hlbHBlcnMvYnVpbGQtY29tcHJlaGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gYnVpbGQ7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBidWlsZChub2RlLCBidWlsZEJvZHkpIHtcbiAgdmFyIHNlbGYgPSBub2RlLmJsb2Nrcy5zaGlmdCgpO1xuICBpZiAoIXNlbGYpIHJldHVybjtcblxuICB2YXIgY2hpbGQgPSBidWlsZChub2RlLCBidWlsZEJvZHkpO1xuICBpZiAoIWNoaWxkKSB7XG4gICAgLy8gbGFzdCBpdGVtXG4gICAgY2hpbGQgPSBidWlsZEJvZHkoKTtcblxuICAgIC8vIGFkZCBhIGZpbHRlciBhcyB0aGlzIGlzIG91ciBmaW5hbCBzdG9wXG4gICAgaWYgKG5vZGUuZmlsdGVyKSB7XG4gICAgICBjaGlsZCA9IHQuaWZTdGF0ZW1lbnQobm9kZS5maWx0ZXIsIHQuYmxvY2tTdGF0ZW1lbnQoW2NoaWxkXSkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0LmZvck9mU3RhdGVtZW50KHQudmFyaWFibGVEZWNsYXJhdGlvbihcImxldFwiLCBbdC52YXJpYWJsZURlY2xhcmF0b3Ioc2VsZi5sZWZ0KV0pLCBzZWxmLnJpZ2h0LCB0LmJsb2NrU3RhdGVtZW50KFtjaGlsZF0pKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
