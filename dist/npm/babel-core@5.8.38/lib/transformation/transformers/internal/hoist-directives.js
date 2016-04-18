/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _types, t, metadata, visitor;

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

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_types = require("../../../types");
      t = _interopRequireWildcard(_types);
      metadata = {
        group: "builtin-pre"
      };


      exports.metadata = metadata;
      /**
       * [Please add a description.]
       */

      visitor = {

        /**
         * [Please add a description.]
         */

        Block: {
          exit: function exit(node) {
            for (var i = 0; i < node.body.length; i++) {
              var bodyNode = node.body[i];
              if (t.isExpressionStatement(bodyNode) && t.isLiteral(bodyNode.expression)) {
                bodyNode._blockHoist = Infinity;
              } else {
                return;
              }
            }
          }
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2ludGVybmFsL2hvaXN0LWRpcmVjdGl2ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7OztBQUhBLGNBQVEsVUFBUixHQUFxQixJQUFyQixDQUtJLFNBQVMsUUFBUSxnQkFBUjtBQUVULFVBQUksd0JBQXdCLE1BQXhCO0FBRUosaUJBQVc7QUFDYixlQUFPLGFBQVA7Ozs7QUFHRixjQUFRLFFBQVIsR0FBbUIsUUFBbkI7Ozs7O0FBS0ksZ0JBQVU7Ozs7OztBQU1aLGVBQU87QUFDTCxnQkFBTSxTQUFTLElBQVQsQ0FBYyxJQUFkLEVBQW9CO0FBQ3hCLGlCQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxLQUFLLElBQUwsQ0FBVSxNQUFWLEVBQWtCLEdBQXRDLEVBQTJDO0FBQ3pDLGtCQUFJLFdBQVcsS0FBSyxJQUFMLENBQVUsQ0FBVixDQUFYLENBRHFDO0FBRXpDLGtCQUFJLEVBQUUscUJBQUYsQ0FBd0IsUUFBeEIsS0FBcUMsRUFBRSxTQUFGLENBQVksU0FBUyxVQUFULENBQWpELEVBQXVFO0FBQ3pFLHlCQUFTLFdBQVQsR0FBdUIsUUFBdkIsQ0FEeUU7ZUFBM0UsTUFFTztBQUNMLHVCQURLO2VBRlA7YUFGRjtXQURJO1NBRFI7OztBQWFGLGNBQVEsT0FBUixHQUFrQixPQUFsQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYW5zZm9ybWF0aW9uL3RyYW5zZm9ybWVycy9pbnRlcm5hbC9ob2lzdC1kaXJlY3RpdmVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uLy4uLy4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbnZhciBtZXRhZGF0YSA9IHtcbiAgZ3JvdXA6IFwiYnVpbHRpbi1wcmVcIlxufTtcblxuZXhwb3J0cy5tZXRhZGF0YSA9IG1ldGFkYXRhO1xuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgdmlzaXRvciA9IHtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEJsb2NrOiB7XG4gICAgZXhpdDogZnVuY3Rpb24gZXhpdChub2RlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUuYm9keS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgYm9keU5vZGUgPSBub2RlLmJvZHlbaV07XG4gICAgICAgIGlmICh0LmlzRXhwcmVzc2lvblN0YXRlbWVudChib2R5Tm9kZSkgJiYgdC5pc0xpdGVyYWwoYm9keU5vZGUuZXhwcmVzc2lvbikpIHtcbiAgICAgICAgICBib2R5Tm9kZS5fYmxvY2tIb2lzdCA9IEluZmluaXR5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMudmlzaXRvciA9IHZpc2l0b3I7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
