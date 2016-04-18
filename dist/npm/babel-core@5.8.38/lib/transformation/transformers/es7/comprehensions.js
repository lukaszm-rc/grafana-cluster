/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _helpersBuildComprehension, _helpersBuildComprehension2, _traversal, _traversal2, _util, util, _types, t, metadata, visitor;

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

  /**
   * [Please add a description.]
   */

  function generator(node) {
    var body = [];
    var container = t.functionExpression(null, [], t.blockStatement(body), true);
    container.shadow = true;

    body.push(_helpersBuildComprehension2["default"](node, function () {
      return t.expressionStatement(t.yieldExpression(node.body));
    }));

    return t.callExpression(container, []);
  }

  /**
   * [Please add a description.]
   */

  function array(node, parent, scope) {
    var uid = scope.generateUidIdentifierBasedOnNode(parent);

    var container = util.template("array-comprehension-container", {
      KEY: uid
    });
    container.callee.shadow = true;

    var block = container.callee.body;
    var body = block.body;

    if (_traversal2["default"].hasType(node, scope, "YieldExpression", t.FUNCTION_TYPES)) {
      container.callee.generator = true;
      container = t.yieldExpression(container, true);
    }

    var returnStatement = body.pop();

    body.push(_helpersBuildComprehension2["default"](node, function () {
      return util.template("array-push", {
        STATEMENT: node.body,
        KEY: uid
      }, true);
    }));
    body.push(returnStatement);

    return container;
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_helpersBuildComprehension = require("../../helpers/build-comprehension");
      _helpersBuildComprehension2 = _interopRequireDefault(_helpersBuildComprehension);
      _traversal = require("../../../traversal");
      _traversal2 = _interopRequireDefault(_traversal);
      _util = require("../../../util");
      util = _interopRequireWildcard(_util);
      _types = require("../../../types");
      t = _interopRequireWildcard(_types);
      metadata = {
        stage: 0
      };


      exports.metadata = metadata;
      /**
       * [Please add a description.]
       */

      visitor = {

        /**
         * [Please add a description.]
         */

        ComprehensionExpression: function ComprehensionExpression(node, parent, scope) {
          var callback = array;
          if (node.generator) callback = generator;
          return callback(node, parent, scope);
        }
      };


      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNy9jb21wcmVoZW5zaW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQUtBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7QUFJQSxXQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBSixHQUFpQixHQUF4QixHQUE4QixFQUFFLFdBQVcsR0FBWCxFQUFoQyxDQUFUO0dBQXJDOzs7Ozs7QUE2Q0EsV0FBUyxTQUFULENBQW1CLElBQW5CLEVBQXlCO0FBQ3ZCLFFBQUksT0FBTyxFQUFQLENBRG1CO0FBRXZCLFFBQUksWUFBWSxFQUFFLGtCQUFGLENBQXFCLElBQXJCLEVBQTJCLEVBQTNCLEVBQStCLEVBQUUsY0FBRixDQUFpQixJQUFqQixDQUEvQixFQUF1RCxJQUF2RCxDQUFaLENBRm1CO0FBR3ZCLGNBQVUsTUFBVixHQUFtQixJQUFuQixDQUh1Qjs7QUFLdkIsU0FBSyxJQUFMLENBQVUsNEJBQTRCLFNBQTVCLEVBQXVDLElBQXZDLEVBQTZDLFlBQVk7QUFDakUsYUFBTyxFQUFFLG1CQUFGLENBQXNCLEVBQUUsZUFBRixDQUFrQixLQUFLLElBQUwsQ0FBeEMsQ0FBUCxDQURpRTtLQUFaLENBQXZELEVBTHVCOztBQVN2QixXQUFPLEVBQUUsY0FBRixDQUFpQixTQUFqQixFQUE0QixFQUE1QixDQUFQLENBVHVCO0dBQXpCOzs7Ozs7QUFnQkEsV0FBUyxLQUFULENBQWUsSUFBZixFQUFxQixNQUFyQixFQUE2QixLQUE3QixFQUFvQztBQUNsQyxRQUFJLE1BQU0sTUFBTSxnQ0FBTixDQUF1QyxNQUF2QyxDQUFOLENBRDhCOztBQUdsQyxRQUFJLFlBQVksS0FBSyxRQUFMLENBQWMsK0JBQWQsRUFBK0M7QUFDN0QsV0FBSyxHQUFMO0tBRGMsQ0FBWixDQUg4QjtBQU1sQyxjQUFVLE1BQVYsQ0FBaUIsTUFBakIsR0FBMEIsSUFBMUIsQ0FOa0M7O0FBUWxDLFFBQUksUUFBUSxVQUFVLE1BQVYsQ0FBaUIsSUFBakIsQ0FSc0I7QUFTbEMsUUFBSSxPQUFPLE1BQU0sSUFBTixDQVR1Qjs7QUFXbEMsUUFBSSxZQUFZLFNBQVosRUFBdUIsT0FBdkIsQ0FBK0IsSUFBL0IsRUFBcUMsS0FBckMsRUFBNEMsaUJBQTVDLEVBQStELEVBQUUsY0FBRixDQUFuRSxFQUFzRjtBQUNwRixnQkFBVSxNQUFWLENBQWlCLFNBQWpCLEdBQTZCLElBQTdCLENBRG9GO0FBRXBGLGtCQUFZLEVBQUUsZUFBRixDQUFrQixTQUFsQixFQUE2QixJQUE3QixDQUFaLENBRm9GO0tBQXRGOztBQUtBLFFBQUksa0JBQWtCLEtBQUssR0FBTCxFQUFsQixDQWhCOEI7O0FBa0JsQyxTQUFLLElBQUwsQ0FBVSw0QkFBNEIsU0FBNUIsRUFBdUMsSUFBdkMsRUFBNkMsWUFBWTtBQUNqRSxhQUFPLEtBQUssUUFBTCxDQUFjLFlBQWQsRUFBNEI7QUFDakMsbUJBQVcsS0FBSyxJQUFMO0FBQ1gsYUFBSyxHQUFMO09BRkssRUFHSixJQUhJLENBQVAsQ0FEaUU7S0FBWixDQUF2RCxFQWxCa0M7QUF3QmxDLFNBQUssSUFBTCxDQUFVLGVBQVYsRUF4QmtDOztBQTBCbEMsV0FBTyxTQUFQLENBMUJrQztHQUFwQzs7OztBQXBFQSxjQUFRLFVBQVIsR0FBcUIsSUFBckIsQ0FTSSw2QkFBNkIsUUFBUSxtQ0FBUjtBQUU3QixvQ0FBOEIsdUJBQXVCLDBCQUF2QjtBQUU5QixtQkFBYSxRQUFRLG9CQUFSO0FBRWIsb0JBQWMsdUJBQXVCLFVBQXZCO0FBRWQsY0FBUSxRQUFRLGVBQVI7QUFFUixhQUFPLHdCQUF3QixLQUF4QjtBQUVQLGVBQVMsUUFBUSxnQkFBUjtBQUVULFVBQUksd0JBQXdCLE1BQXhCO0FBRUosaUJBQVc7QUFDYixlQUFPLENBQVA7Ozs7QUFHRixjQUFRLFFBQVIsR0FBbUIsUUFBbkI7Ozs7O0FBS0ksZ0JBQVU7Ozs7OztBQU1aLGlDQUF5QixTQUFTLHVCQUFULENBQWlDLElBQWpDLEVBQXVDLE1BQXZDLEVBQStDLEtBQS9DLEVBQXNEO0FBQzdFLGNBQUksV0FBVyxLQUFYLENBRHlFO0FBRTdFLGNBQUksS0FBSyxTQUFMLEVBQWdCLFdBQVcsU0FBWCxDQUFwQjtBQUNBLGlCQUFPLFNBQVMsSUFBVCxFQUFlLE1BQWYsRUFBdUIsS0FBdkIsQ0FBUCxDQUg2RTtTQUF0RDs7OztBQU8zQixjQUFRLE9BQVIsR0FBa0IsT0FBbEIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmFuc2Zvcm1hdGlvbi90cmFuc2Zvcm1lcnMvZXM3L2NvbXByZWhlbnNpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIF9oZWxwZXJzQnVpbGRDb21wcmVoZW5zaW9uID0gcmVxdWlyZShcIi4uLy4uL2hlbHBlcnMvYnVpbGQtY29tcHJlaGVuc2lvblwiKTtcblxudmFyIF9oZWxwZXJzQnVpbGRDb21wcmVoZW5zaW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNCdWlsZENvbXByZWhlbnNpb24pO1xuXG52YXIgX3RyYXZlcnNhbCA9IHJlcXVpcmUoXCIuLi8uLi8uLi90cmF2ZXJzYWxcIik7XG5cbnZhciBfdHJhdmVyc2FsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYXZlcnNhbCk7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoXCIuLi8uLi8uLi91dGlsXCIpO1xuXG52YXIgdXRpbCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlsKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG52YXIgbWV0YWRhdGEgPSB7XG4gIHN0YWdlOiAwXG59O1xuXG5leHBvcnRzLm1ldGFkYXRhID0gbWV0YWRhdGE7XG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciB2aXNpdG9yID0ge1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgQ29tcHJlaGVuc2lvbkV4cHJlc3Npb246IGZ1bmN0aW9uIENvbXByZWhlbnNpb25FeHByZXNzaW9uKG5vZGUsIHBhcmVudCwgc2NvcGUpIHtcbiAgICB2YXIgY2FsbGJhY2sgPSBhcnJheTtcbiAgICBpZiAobm9kZS5nZW5lcmF0b3IpIGNhbGxiYWNrID0gZ2VuZXJhdG9yO1xuICAgIHJldHVybiBjYWxsYmFjayhub2RlLCBwYXJlbnQsIHNjb3BlKTtcbiAgfVxufTtcblxuZXhwb3J0cy52aXNpdG9yID0gdmlzaXRvcjtcbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gZ2VuZXJhdG9yKG5vZGUpIHtcbiAgdmFyIGJvZHkgPSBbXTtcbiAgdmFyIGNvbnRhaW5lciA9IHQuZnVuY3Rpb25FeHByZXNzaW9uKG51bGwsIFtdLCB0LmJsb2NrU3RhdGVtZW50KGJvZHkpLCB0cnVlKTtcbiAgY29udGFpbmVyLnNoYWRvdyA9IHRydWU7XG5cbiAgYm9keS5wdXNoKF9oZWxwZXJzQnVpbGRDb21wcmVoZW5zaW9uMltcImRlZmF1bHRcIl0obm9kZSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0LmV4cHJlc3Npb25TdGF0ZW1lbnQodC55aWVsZEV4cHJlc3Npb24obm9kZS5ib2R5KSk7XG4gIH0pKTtcblxuICByZXR1cm4gdC5jYWxsRXhwcmVzc2lvbihjb250YWluZXIsIFtdKTtcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBhcnJheShub2RlLCBwYXJlbnQsIHNjb3BlKSB7XG4gIHZhciB1aWQgPSBzY29wZS5nZW5lcmF0ZVVpZElkZW50aWZpZXJCYXNlZE9uTm9kZShwYXJlbnQpO1xuXG4gIHZhciBjb250YWluZXIgPSB1dGlsLnRlbXBsYXRlKFwiYXJyYXktY29tcHJlaGVuc2lvbi1jb250YWluZXJcIiwge1xuICAgIEtFWTogdWlkXG4gIH0pO1xuICBjb250YWluZXIuY2FsbGVlLnNoYWRvdyA9IHRydWU7XG5cbiAgdmFyIGJsb2NrID0gY29udGFpbmVyLmNhbGxlZS5ib2R5O1xuICB2YXIgYm9keSA9IGJsb2NrLmJvZHk7XG5cbiAgaWYgKF90cmF2ZXJzYWwyW1wiZGVmYXVsdFwiXS5oYXNUeXBlKG5vZGUsIHNjb3BlLCBcIllpZWxkRXhwcmVzc2lvblwiLCB0LkZVTkNUSU9OX1RZUEVTKSkge1xuICAgIGNvbnRhaW5lci5jYWxsZWUuZ2VuZXJhdG9yID0gdHJ1ZTtcbiAgICBjb250YWluZXIgPSB0LnlpZWxkRXhwcmVzc2lvbihjb250YWluZXIsIHRydWUpO1xuICB9XG5cbiAgdmFyIHJldHVyblN0YXRlbWVudCA9IGJvZHkucG9wKCk7XG5cbiAgYm9keS5wdXNoKF9oZWxwZXJzQnVpbGRDb21wcmVoZW5zaW9uMltcImRlZmF1bHRcIl0obm9kZSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB1dGlsLnRlbXBsYXRlKFwiYXJyYXktcHVzaFwiLCB7XG4gICAgICBTVEFURU1FTlQ6IG5vZGUuYm9keSxcbiAgICAgIEtFWTogdWlkXG4gICAgfSwgdHJ1ZSk7XG4gIH0pKTtcbiAgYm9keS5wdXNoKHJldHVyblN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
