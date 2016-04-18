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

  /**
   * [Please add a description.]
   */

  function getSpreadLiteral(spread, scope) {
    if (scope.hub.file.isLoose("es6.spread") && !t.isIdentifier(spread.argument, { name: "arguments" })) {
      return spread.argument;
    } else {
      return scope.toArray(spread.argument, true);
    }
  }

  /**
   * [Please add a description.]
   */

  function hasSpread(nodes) {
    for (var i = 0; i < nodes.length; i++) {
      if (t.isSpreadElement(nodes[i])) {
        return true;
      }
    }
    return false;
  }

  /**
   * [Please add a description.]
   */

  function build(props, scope) {
    var nodes = [];

    var _props = [];

    var push = function push() {
      if (!_props.length) return;
      nodes.push(t.arrayExpression(_props));
      _props = [];
    };

    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      if (t.isSpreadElement(prop)) {
        push();
        nodes.push(getSpreadLiteral(prop, scope));
      } else {
        _props.push(prop);
      }
    }

    push();

    return nodes;
  }

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_types = require("../../../types");
      t = _interopRequireWildcard(_types);
      metadata = {
        group: "builtin-advanced"
      };


      exports.metadata = metadata;
      /**
       * [Please add a description.]
       */

      visitor = {

        /**
         * [Please add a description.]
         */

        ArrayExpression: function ArrayExpression(node, parent, scope) {
          var elements = node.elements;
          if (!hasSpread(elements)) return;

          var nodes = build(elements, scope);
          var first = nodes.shift();

          if (!t.isArrayExpression(first)) {
            nodes.unshift(first);
            first = t.arrayExpression([]);
          }

          return t.callExpression(t.memberExpression(first, t.identifier("concat")), nodes);
        },

        /**
         * [Please add a description.]
         */

        CallExpression: function CallExpression(node, parent, scope) {
          var args = node.arguments;
          if (!hasSpread(args)) return;

          var contextLiteral = t.identifier("undefined");

          node.arguments = [];

          var nodes;
          if (args.length === 1 && args[0].argument.name === "arguments") {
            nodes = [args[0].argument];
          } else {
            nodes = build(args, scope);
          }

          var first = nodes.shift();
          if (nodes.length) {
            node.arguments.push(t.callExpression(t.memberExpression(first, t.identifier("concat")), nodes));
          } else {
            node.arguments.push(first);
          }

          var callee = node.callee;

          if (this.get("callee").isMemberExpression()) {
            var temp = scope.maybeGenerateMemoised(callee.object);
            if (temp) {
              callee.object = t.assignmentExpression("=", temp, callee.object);
              contextLiteral = temp;
            } else {
              contextLiteral = callee.object;
            }
            t.appendToMemberExpression(callee, t.identifier("apply"));
          } else {
            node.callee = t.memberExpression(node.callee, t.identifier("apply"));
          }

          node.arguments.unshift(contextLiteral);
        },

        /**
         * [Please add a description.]
         */

        NewExpression: function NewExpression(node, parent, scope, file) {
          var args = node.arguments;
          if (!hasSpread(args)) return;

          var nodes = build(args, scope);

          var context = t.arrayExpression([t.literal(null)]);

          args = t.callExpression(t.memberExpression(context, t.identifier("concat")), nodes);

          return t.newExpression(t.callExpression(t.memberExpression(file.addHelper("bind"), t.identifier("apply")), [node.callee, args]), []);
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9zcHJlYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7Ozs7QUFVQSxXQUFTLGdCQUFULENBQTBCLE1BQTFCLEVBQWtDLEtBQWxDLEVBQXlDO0FBQ3ZDLFFBQUksTUFBTSxHQUFOLENBQVUsSUFBVixDQUFlLE9BQWYsQ0FBdUIsWUFBdkIsS0FBd0MsQ0FBQyxFQUFFLFlBQUYsQ0FBZSxPQUFPLFFBQVAsRUFBaUIsRUFBRSxNQUFNLFdBQU4sRUFBbEMsQ0FBRCxFQUF5RDtBQUNuRyxhQUFPLE9BQU8sUUFBUCxDQUQ0RjtLQUFyRyxNQUVPO0FBQ0wsYUFBTyxNQUFNLE9BQU4sQ0FBYyxPQUFPLFFBQVAsRUFBaUIsSUFBL0IsQ0FBUCxDQURLO0tBRlA7R0FERjs7Ozs7O0FBWUEsV0FBUyxTQUFULENBQW1CLEtBQW5CLEVBQTBCO0FBQ3hCLFNBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLE1BQU0sTUFBTixFQUFjLEdBQWxDLEVBQXVDO0FBQ3JDLFVBQUks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QUF0Qjs7QUFFQSxjQUFJLFFBQVEsTUFBTSxJQUFOLEVBQVksS0FBWixDQUFSLENBSjJEOztBQU0vRCxjQUFJLFVBQVUsRUFBRSxlQUFGLENBQWtCLENBQUMsRUFBRSxPQUFGLENBQVUsSUFBVixDQUFELENBQWxCLENBQVYsQ0FOMkQ7O0FBUS9ELGlCQUFPLEVBQUUsY0FBRixDQUFpQixFQUFFLGdCQUFGLENBQW1CLE9BQW5CLEVBQTRCLEVBQUUsVUFBRixDQUFhLFFBQWIsQ0FBNUIsQ0FBakIsRUFBc0UsS0FBdEUsQ0FBUCxDQVIrRDs7QUFVL0QsaUJBQU8sRUFBRSxhQUFGLENBQWdCLEVBQUUsY0FBRixDQUFpQixFQUFFLGdCQUFGLENBQW1CLEtBQUssU0FBTCxDQUFlLE1BQWYsQ0FBbkIsRUFBMkMsRUFBRSxVQUFGLENBQWEsT0FBYixDQUEzQyxDQUFqQixFQUFvRixDQUFDLEtBQUssTUFBTCxFQUFhLElBQWQsQ0FBcEYsQ0FBaEIsRUFBMEgsRUFBMUgsQ0FBUCxDQVYrRDtTQUFsRDs7O0FBYWpCLGNBQVEsT0FBUixHQUFrQixPQUFsQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYW5zZm9ybWF0aW9uL3RyYW5zZm9ybWVycy9lczYvc3ByZWFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uLy4uLy4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gZ2V0U3ByZWFkTGl0ZXJhbChzcHJlYWQsIHNjb3BlKSB7XG4gIGlmIChzY29wZS5odWIuZmlsZS5pc0xvb3NlKFwiZXM2LnNwcmVhZFwiKSAmJiAhdC5pc0lkZW50aWZpZXIoc3ByZWFkLmFyZ3VtZW50LCB7IG5hbWU6IFwiYXJndW1lbnRzXCIgfSkpIHtcbiAgICByZXR1cm4gc3ByZWFkLmFyZ3VtZW50O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzY29wZS50b0FycmF5KHNwcmVhZC5hcmd1bWVudCwgdHJ1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBoYXNTcHJlYWQobm9kZXMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0LmlzU3ByZWFkRWxlbWVudChub2Rlc1tpXSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gYnVpbGQocHJvcHMsIHNjb3BlKSB7XG4gIHZhciBub2RlcyA9IFtdO1xuXG4gIHZhciBfcHJvcHMgPSBbXTtcblxuICB2YXIgcHVzaCA9IGZ1bmN0aW9uIHB1c2goKSB7XG4gICAgaWYgKCFfcHJvcHMubGVuZ3RoKSByZXR1cm47XG4gICAgbm9kZXMucHVzaCh0LmFycmF5RXhwcmVzc2lvbihfcHJvcHMpKTtcbiAgICBfcHJvcHMgPSBbXTtcbiAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHByb3AgPSBwcm9wc1tpXTtcbiAgICBpZiAodC5pc1NwcmVhZEVsZW1lbnQocHJvcCkpIHtcbiAgICAgIHB1c2goKTtcbiAgICAgIG5vZGVzLnB1c2goZ2V0U3ByZWFkTGl0ZXJhbChwcm9wLCBzY29wZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfcHJvcHMucHVzaChwcm9wKTtcbiAgICB9XG4gIH1cblxuICBwdXNoKCk7XG5cbiAgcmV0dXJuIG5vZGVzO1xufVxuXG52YXIgbWV0YWRhdGEgPSB7XG4gIGdyb3VwOiBcImJ1aWx0aW4tYWR2YW5jZWRcIlxufTtcblxuZXhwb3J0cy5tZXRhZGF0YSA9IG1ldGFkYXRhO1xuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgdmlzaXRvciA9IHtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEFycmF5RXhwcmVzc2lvbjogZnVuY3Rpb24gQXJyYXlFeHByZXNzaW9uKG5vZGUsIHBhcmVudCwgc2NvcGUpIHtcbiAgICB2YXIgZWxlbWVudHMgPSBub2RlLmVsZW1lbnRzO1xuICAgIGlmICghaGFzU3ByZWFkKGVsZW1lbnRzKSkgcmV0dXJuO1xuXG4gICAgdmFyIG5vZGVzID0gYnVpbGQoZWxlbWVudHMsIHNjb3BlKTtcbiAgICB2YXIgZmlyc3QgPSBub2Rlcy5zaGlmdCgpO1xuXG4gICAgaWYgKCF0LmlzQXJyYXlFeHByZXNzaW9uKGZpcnN0KSkge1xuICAgICAgbm9kZXMudW5zaGlmdChmaXJzdCk7XG4gICAgICBmaXJzdCA9IHQuYXJyYXlFeHByZXNzaW9uKFtdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdC5jYWxsRXhwcmVzc2lvbih0Lm1lbWJlckV4cHJlc3Npb24oZmlyc3QsIHQuaWRlbnRpZmllcihcImNvbmNhdFwiKSksIG5vZGVzKTtcbiAgfSxcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIENhbGxFeHByZXNzaW9uOiBmdW5jdGlvbiBDYWxsRXhwcmVzc2lvbihub2RlLCBwYXJlbnQsIHNjb3BlKSB7XG4gICAgdmFyIGFyZ3MgPSBub2RlLmFyZ3VtZW50cztcbiAgICBpZiAoIWhhc1NwcmVhZChhcmdzKSkgcmV0dXJuO1xuXG4gICAgdmFyIGNvbnRleHRMaXRlcmFsID0gdC5pZGVudGlmaWVyKFwidW5kZWZpbmVkXCIpO1xuXG4gICAgbm9kZS5hcmd1bWVudHMgPSBbXTtcblxuICAgIHZhciBub2RlcztcbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgYXJnc1swXS5hcmd1bWVudC5uYW1lID09PSBcImFyZ3VtZW50c1wiKSB7XG4gICAgICBub2RlcyA9IFthcmdzWzBdLmFyZ3VtZW50XTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZXMgPSBidWlsZChhcmdzLCBzY29wZSk7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0ID0gbm9kZXMuc2hpZnQoKTtcbiAgICBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICBub2RlLmFyZ3VtZW50cy5wdXNoKHQuY2FsbEV4cHJlc3Npb24odC5tZW1iZXJFeHByZXNzaW9uKGZpcnN0LCB0LmlkZW50aWZpZXIoXCJjb25jYXRcIikpLCBub2RlcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLmFyZ3VtZW50cy5wdXNoKGZpcnN0KTtcbiAgICB9XG5cbiAgICB2YXIgY2FsbGVlID0gbm9kZS5jYWxsZWU7XG5cbiAgICBpZiAodGhpcy5nZXQoXCJjYWxsZWVcIikuaXNNZW1iZXJFeHByZXNzaW9uKCkpIHtcbiAgICAgIHZhciB0ZW1wID0gc2NvcGUubWF5YmVHZW5lcmF0ZU1lbW9pc2VkKGNhbGxlZS5vYmplY3QpO1xuICAgICAgaWYgKHRlbXApIHtcbiAgICAgICAgY2FsbGVlLm9iamVjdCA9IHQuYXNzaWdubWVudEV4cHJlc3Npb24oXCI9XCIsIHRlbXAsIGNhbGxlZS5vYmplY3QpO1xuICAgICAgICBjb250ZXh0TGl0ZXJhbCA9IHRlbXA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0TGl0ZXJhbCA9IGNhbGxlZS5vYmplY3Q7XG4gICAgICB9XG4gICAgICB0LmFwcGVuZFRvTWVtYmVyRXhwcmVzc2lvbihjYWxsZWUsIHQuaWRlbnRpZmllcihcImFwcGx5XCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5jYWxsZWUgPSB0Lm1lbWJlckV4cHJlc3Npb24obm9kZS5jYWxsZWUsIHQuaWRlbnRpZmllcihcImFwcGx5XCIpKTtcbiAgICB9XG5cbiAgICBub2RlLmFyZ3VtZW50cy51bnNoaWZ0KGNvbnRleHRMaXRlcmFsKTtcbiAgfSxcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIE5ld0V4cHJlc3Npb246IGZ1bmN0aW9uIE5ld0V4cHJlc3Npb24obm9kZSwgcGFyZW50LCBzY29wZSwgZmlsZSkge1xuICAgIHZhciBhcmdzID0gbm9kZS5hcmd1bWVudHM7XG4gICAgaWYgKCFoYXNTcHJlYWQoYXJncykpIHJldHVybjtcblxuICAgIHZhciBub2RlcyA9IGJ1aWxkKGFyZ3MsIHNjb3BlKTtcblxuICAgIHZhciBjb250ZXh0ID0gdC5hcnJheUV4cHJlc3Npb24oW3QubGl0ZXJhbChudWxsKV0pO1xuXG4gICAgYXJncyA9IHQuY2FsbEV4cHJlc3Npb24odC5tZW1iZXJFeHByZXNzaW9uKGNvbnRleHQsIHQuaWRlbnRpZmllcihcImNvbmNhdFwiKSksIG5vZGVzKTtcblxuICAgIHJldHVybiB0Lm5ld0V4cHJlc3Npb24odC5jYWxsRXhwcmVzc2lvbih0Lm1lbWJlckV4cHJlc3Npb24oZmlsZS5hZGRIZWxwZXIoXCJiaW5kXCIpLCB0LmlkZW50aWZpZXIoXCJhcHBseVwiKSksIFtub2RlLmNhbGxlZSwgYXJnc10pLCBbXSk7XG4gIH1cbn07XG5leHBvcnRzLnZpc2l0b3IgPSB2aXNpdG9yOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
