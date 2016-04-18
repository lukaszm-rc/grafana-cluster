/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _sourceMap, _sourceMap2, _types, t, SourceMap;

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

  // istanbul ignore next

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }

  // istanbul ignore next

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_sourceMap = require("source-map");
      _sourceMap2 = _interopRequireDefault(_sourceMap);
      _types = require("../types");
      t = _interopRequireWildcard(_types);

      SourceMap = function () {
        function SourceMap(position, opts, code) {
          _classCallCheck(this, SourceMap);

          this.position = position;
          this.opts = opts;

          if (opts.sourceMaps) {
            this.map = new _sourceMap2["default"].SourceMapGenerator({
              file: opts.sourceMapTarget,
              sourceRoot: opts.sourceRoot
            });

            this.map.setSourceContent(opts.sourceFileName, code);
          } else {
            this.map = null;
          }
        }

        /**
         * Get the sourcemap.
         */

        SourceMap.prototype.get = function get() {
          var map = this.map;
          if (map) {
            return map.toJSON();
          } else {
            return map;
          }
        };

        /**
         * Mark a node's generated position, and add it to the sourcemap.
         */

        SourceMap.prototype.mark = function mark(node, type) {
          var loc = node.loc;
          if (!loc) return; // no location info

          var map = this.map;
          if (!map) return; // no source map

          if (t.isProgram(node) || t.isFile(node)) return; // illegal mapping nodes

          var position = this.position;

          var generated = {
            line: position.line,
            column: position.column
          };

          var original = loc[type];

          map.addMapping({
            source: this.opts.sourceFileName,
            generated: generated,
            original: original
          });
        };

        return SourceMap;
      }();

      exports["default"] = SourceMap;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvZ2VuZXJhdGlvbi9zb3VyY2UtbWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBS0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7OztBQUlBLFdBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLEdBQXhCLEdBQThCLEVBQUUsV0FBVyxHQUFYLEVBQWhDLENBQVQ7R0FBckM7Ozs7QUFJQSxXQUFTLGVBQVQsQ0FBeUIsUUFBekIsRUFBbUMsV0FBbkMsRUFBZ0Q7QUFBRSxRQUFJLEVBQUUsb0JBQW9CLFdBQXBCLENBQUYsRUFBb0M7QUFBRSxZQUFNLElBQUksU0FBSixDQUFjLG1DQUFkLENBQU4sQ0FBRjtLQUF4QztHQUFsRDs7Ozs7QUFYQSxjQUFRLFVBQVIsR0FBcUIsSUFBckIsQ0FhSSxhQUFhLFFBQVEsWUFBUjtBQUViLG9CQUFjLHVCQUF1QixVQUF2QjtBQUVkLGVBQVMsUUFBUSxVQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEI7O0FBTUosa0JBQVksWUFBYTtBQUMzQixpQkFBUyxTQUFULENBQW1CLFFBQW5CLEVBQTZCLElBQTdCLEVBQW1DLElBQW5DLEVBQXlDO0FBQ3ZDLDBCQUFnQixJQUFoQixFQUFzQixTQUF0QixFQUR1Qzs7QUFHdkMsZUFBSyxRQUFMLEdBQWdCLFFBQWhCLENBSHVDO0FBSXZDLGVBQUssSUFBTCxHQUFZLElBQVosQ0FKdUM7O0FBTXZDLGNBQUksS0FBSyxVQUFMLEVBQWlCO0FBQ25CLGlCQUFLLEdBQUwsR0FBVyxJQUFJLFlBQVksU0FBWixFQUF1QixrQkFBdkIsQ0FBMEM7QUFDdkQsb0JBQU0sS0FBSyxlQUFMO0FBQ04sMEJBQVksS0FBSyxVQUFMO2FBRkgsQ0FBWCxDQURtQjs7QUFNbkIsaUJBQUssR0FBTCxDQUFTLGdCQUFULENBQTBCLEtBQUssY0FBTCxFQUFxQixJQUEvQyxFQU5tQjtXQUFyQixNQU9PO0FBQ0wsaUJBQUssR0FBTCxHQUFXLElBQVgsQ0FESztXQVBQO1NBTkY7Ozs7OztBQUQyQixpQkF1QjNCLENBQVUsU0FBVixDQUFvQixHQUFwQixHQUEwQixTQUFTLEdBQVQsR0FBZTtBQUN2QyxjQUFJLE1BQU0sS0FBSyxHQUFMLENBRDZCO0FBRXZDLGNBQUksR0FBSixFQUFTO0FBQ1AsbUJBQU8sSUFBSSxNQUFKLEVBQVAsQ0FETztXQUFULE1BRU87QUFDTCxtQkFBTyxHQUFQLENBREs7V0FGUDtTQUZ3Qjs7Ozs7O0FBdkJDLGlCQW9DM0IsQ0FBVSxTQUFWLENBQW9CLElBQXBCLEdBQTJCLFNBQVMsSUFBVCxDQUFjLElBQWQsRUFBb0IsSUFBcEIsRUFBMEI7QUFDbkQsY0FBSSxNQUFNLEtBQUssR0FBTCxDQUR5QztBQUVuRCxjQUFJLENBQUMsR0FBRCxFQUFNLE9BQVY7O0FBRm1ELGNBSS9DLE1BQU0sS0FBSyxHQUFMLENBSnlDO0FBS25ELGNBQUksQ0FBQyxHQUFELEVBQU0sT0FBVjs7QUFMbUQsY0FPL0MsRUFBRSxTQUFGLENBQVksSUFBWixLQUFxQixFQUFFLE1BQUYsQ0FBUyxJQUFULENBQXJCLEVBQXFDLE9BQXpDOztBQVBtRCxjQVMvQyxXQUFXLEtBQUssUUFBTCxDQVRvQzs7QUFXbkQsY0FBSSxZQUFZO0FBQ2Qsa0JBQU0sU0FBUyxJQUFUO0FBQ04sb0JBQVEsU0FBUyxNQUFUO1dBRk4sQ0FYK0M7O0FBZ0JuRCxjQUFJLFdBQVcsSUFBSSxJQUFKLENBQVgsQ0FoQitDOztBQWtCbkQsY0FBSSxVQUFKLENBQWU7QUFDYixvQkFBUSxLQUFLLElBQUwsQ0FBVSxjQUFWO0FBQ1IsdUJBQVcsU0FBWDtBQUNBLHNCQUFVLFFBQVY7V0FIRixFQWxCbUQ7U0FBMUIsQ0FwQ0E7O0FBNkQzQixlQUFPLFNBQVAsQ0E3RDJCO09BQVo7O0FBZ0VqQixjQUFRLFNBQVIsSUFBcUIsU0FBckI7QUFDQSxhQUFPLE9BQVAsR0FBaUIsUUFBUSxTQUFSLENBQWpCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvZ2VuZXJhdGlvbi9zb3VyY2UtbWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIF9zb3VyY2VNYXAgPSByZXF1aXJlKFwic291cmNlLW1hcFwiKTtcblxudmFyIF9zb3VyY2VNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc291cmNlTWFwKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG4vKipcbiAqIEJ1aWxkIGEgc291cmNlbWFwLlxuICovXG5cbnZhciBTb3VyY2VNYXAgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTb3VyY2VNYXAocG9zaXRpb24sIG9wdHMsIGNvZGUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU291cmNlTWFwKTtcblxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLm9wdHMgPSBvcHRzO1xuXG4gICAgaWYgKG9wdHMuc291cmNlTWFwcykge1xuICAgICAgdGhpcy5tYXAgPSBuZXcgX3NvdXJjZU1hcDJbXCJkZWZhdWx0XCJdLlNvdXJjZU1hcEdlbmVyYXRvcih7XG4gICAgICAgIGZpbGU6IG9wdHMuc291cmNlTWFwVGFyZ2V0LFxuICAgICAgICBzb3VyY2VSb290OiBvcHRzLnNvdXJjZVJvb3RcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLm1hcC5zZXRTb3VyY2VDb250ZW50KG9wdHMuc291cmNlRmlsZU5hbWUsIGNvZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1hcCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc291cmNlbWFwLlxuICAgKi9cblxuICBTb3VyY2VNYXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCgpIHtcbiAgICB2YXIgbWFwID0gdGhpcy5tYXA7XG4gICAgaWYgKG1hcCkge1xuICAgICAgcmV0dXJuIG1hcC50b0pTT04oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1hcDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIE1hcmsgYSBub2RlJ3MgZ2VuZXJhdGVkIHBvc2l0aW9uLCBhbmQgYWRkIGl0IHRvIHRoZSBzb3VyY2VtYXAuXG4gICAqL1xuXG4gIFNvdXJjZU1hcC5wcm90b3R5cGUubWFyayA9IGZ1bmN0aW9uIG1hcmsobm9kZSwgdHlwZSkge1xuICAgIHZhciBsb2MgPSBub2RlLmxvYztcbiAgICBpZiAoIWxvYykgcmV0dXJuOyAvLyBubyBsb2NhdGlvbiBpbmZvXG5cbiAgICB2YXIgbWFwID0gdGhpcy5tYXA7XG4gICAgaWYgKCFtYXApIHJldHVybjsgLy8gbm8gc291cmNlIG1hcFxuXG4gICAgaWYgKHQuaXNQcm9ncmFtKG5vZGUpIHx8IHQuaXNGaWxlKG5vZGUpKSByZXR1cm47IC8vIGlsbGVnYWwgbWFwcGluZyBub2Rlc1xuXG4gICAgdmFyIHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbjtcblxuICAgIHZhciBnZW5lcmF0ZWQgPSB7XG4gICAgICBsaW5lOiBwb3NpdGlvbi5saW5lLFxuICAgICAgY29sdW1uOiBwb3NpdGlvbi5jb2x1bW5cbiAgICB9O1xuXG4gICAgdmFyIG9yaWdpbmFsID0gbG9jW3R5cGVdO1xuXG4gICAgbWFwLmFkZE1hcHBpbmcoe1xuICAgICAgc291cmNlOiB0aGlzLm9wdHMuc291cmNlRmlsZU5hbWUsXG4gICAgICBnZW5lcmF0ZWQ6IGdlbmVyYXRlZCxcbiAgICAgIG9yaWdpbmFsOiBvcmlnaW5hbFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBTb3VyY2VNYXA7XG59KSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFNvdXJjZU1hcDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
