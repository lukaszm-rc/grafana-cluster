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

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_types = require("../../types");
      t = _interopRequireWildcard(_types);


      /**
       * [Please add a description.]
       */

      exports["default"] = function (decorators, scope) {
        for (var i = 0; i < decorators.length; i++) {
          var decorator = decorators[i];
          var expression = decorator.expression;
          if (!t.isMemberExpression(expression)) continue;

          var temp = scope.maybeGenerateMemoised(expression.object);
          var ref;

          var nodes = [];

          if (temp) {
            ref = temp;
            nodes.push(t.assignmentExpression("=", temp, expression.object));
          } else {
            ref = expression.object;
          }

          nodes.push(t.callExpression(t.memberExpression(t.memberExpression(ref, expression.property, expression.computed), t.identifier("bind")), [ref]));

          if (nodes.length === 1) {
            decorator.expression = nodes[0];
          } else {
            decorator.expression = t.sequenceExpression(nodes);
          }
        }

        return decorators;
      };

      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vaGVscGVycy9tZW1vaXNlLWRlY29yYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7OztBQUhBLGNBQVEsVUFBUixHQUFxQixJQUFyQixDQUtJLFNBQVMsUUFBUSxhQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEI7Ozs7Ozs7QUFNUixjQUFRLFNBQVIsSUFBcUIsVUFBVSxVQUFWLEVBQXNCLEtBQXRCLEVBQTZCO0FBQ2hELGFBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLFdBQVcsTUFBWCxFQUFtQixHQUF2QyxFQUE0QztBQUMxQyxjQUFJLFlBQVksV0FBVyxDQUFYLENBQVosQ0FEc0M7QUFFMUMsY0FBSSxhQUFhLFVBQVUsVUFBVixDQUZ5QjtBQUcxQyxjQUFJLENBQUMsRUFBRSxrQkFBRixDQUFxQixVQUFyQixDQUFELEVBQW1DLFNBQXZDOztBQUVBLGNBQUksT0FBTyxNQUFNLHFCQUFOLENBQTRCLFdBQVcsTUFBWCxDQUFuQyxDQUxzQztBQU0xQyxjQUFJLEdBQUosQ0FOMEM7O0FBUTFDLGNBQUksUUFBUSxFQUFSLENBUnNDOztBQVUxQyxjQUFJLElBQUosRUFBVTtBQUNSLGtCQUFNLElBQU4sQ0FEUTtBQUVSLGtCQUFNLElBQU4sQ0FBVyxFQUFFLG9CQUFGLENBQXVCLEdBQXZCLEVBQTRCLElBQTVCLEVBQWtDLFdBQVcsTUFBWCxDQUE3QyxFQUZRO1dBQVYsTUFHTztBQUNMLGtCQUFNLFdBQVcsTUFBWCxDQUREO1dBSFA7O0FBT0EsZ0JBQU0sSUFBTixDQUFXLEVBQUUsY0FBRixDQUFpQixFQUFFLGdCQUFGLENBQW1CLEVBQUUsZ0JBQUYsQ0FBbUIsR0FBbkIsRUFBd0IsV0FBVyxRQUFYLEVBQXFCLFdBQVcsUUFBWCxDQUFoRSxFQUFzRixFQUFFLFVBQUYsQ0FBYSxNQUFiLENBQXRGLENBQWpCLEVBQThILENBQUMsR0FBRCxDQUE5SCxDQUFYLEVBakIwQzs7QUFtQjFDLGNBQUksTUFBTSxNQUFOLEtBQWlCLENBQWpCLEVBQW9CO0FBQ3RCLHNCQUFVLFVBQVYsR0FBdUIsTUFBTSxDQUFOLENBQXZCLENBRHNCO1dBQXhCLE1BRU87QUFDTCxzQkFBVSxVQUFWLEdBQXVCLEVBQUUsa0JBQUYsQ0FBcUIsS0FBckIsQ0FBdkIsQ0FESztXQUZQO1NBbkJGOztBQTBCQSxlQUFPLFVBQVAsQ0EzQmdEO09BQTdCOztBQThCckIsYUFBTyxPQUFQLEdBQWlCLFFBQVEsU0FBUixDQUFqQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYW5zZm9ybWF0aW9uL2hlbHBlcnMvbWVtb2lzZS1kZWNvcmF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uLy4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoZGVjb3JhdG9ycywgc2NvcGUpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZWNvcmF0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlY29yYXRvciA9IGRlY29yYXRvcnNbaV07XG4gICAgdmFyIGV4cHJlc3Npb24gPSBkZWNvcmF0b3IuZXhwcmVzc2lvbjtcbiAgICBpZiAoIXQuaXNNZW1iZXJFeHByZXNzaW9uKGV4cHJlc3Npb24pKSBjb250aW51ZTtcblxuICAgIHZhciB0ZW1wID0gc2NvcGUubWF5YmVHZW5lcmF0ZU1lbW9pc2VkKGV4cHJlc3Npb24ub2JqZWN0KTtcbiAgICB2YXIgcmVmO1xuXG4gICAgdmFyIG5vZGVzID0gW107XG5cbiAgICBpZiAodGVtcCkge1xuICAgICAgcmVmID0gdGVtcDtcbiAgICAgIG5vZGVzLnB1c2godC5hc3NpZ25tZW50RXhwcmVzc2lvbihcIj1cIiwgdGVtcCwgZXhwcmVzc2lvbi5vYmplY3QpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVmID0gZXhwcmVzc2lvbi5vYmplY3Q7XG4gICAgfVxuXG4gICAgbm9kZXMucHVzaCh0LmNhbGxFeHByZXNzaW9uKHQubWVtYmVyRXhwcmVzc2lvbih0Lm1lbWJlckV4cHJlc3Npb24ocmVmLCBleHByZXNzaW9uLnByb3BlcnR5LCBleHByZXNzaW9uLmNvbXB1dGVkKSwgdC5pZGVudGlmaWVyKFwiYmluZFwiKSksIFtyZWZdKSk7XG5cbiAgICBpZiAobm9kZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBkZWNvcmF0b3IuZXhwcmVzc2lvbiA9IG5vZGVzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWNvcmF0b3IuZXhwcmVzc2lvbiA9IHQuc2VxdWVuY2VFeHByZXNzaW9uKG5vZGVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVjb3JhdG9ycztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
