/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _helpersReact, react, _types, t, JSX_ANNOTATION_REGEX, metadata, visitor;

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
      exports.__esModule = true;_helpersReact = require("../../helpers/react");
      react = _interopRequireWildcard(_helpersReact);
      _types = require("../../../types");
      t = _interopRequireWildcard(_types);
      JSX_ANNOTATION_REGEX = /^\*\s*@jsx\s+([^\s]+)/;
      metadata = {
        group: "builtin-advanced"
      };


      exports.metadata = metadata;
      /**
       * [Please add a description.]
       */

      visitor = require("../../helpers/build-react-transformer")({

        /**
         * [Please add a description.]
         */

        pre: function pre(state) {
          var tagName = state.tagName;
          var args = state.args;
          if (react.isCompatTag(tagName)) {
            args.push(t.literal(tagName));
          } else {
            args.push(state.tagExpr);
          }
        },

        /**
         * [Please add a description.]
         */

        post: function post(state, file) {
          state.callee = file.get("jsxIdentifier");
        }
      });


      exports.visitor = visitor;
      /**
       * [Please add a description.]
       */

      visitor.Program = function (node, parent, scope, file) {
        var id = file.opts.jsxPragma;

        for (var i = 0; i < file.ast.comments.length; i++) {
          var comment = file.ast.comments[i];
          var matches = JSX_ANNOTATION_REGEX.exec(comment.value);
          if (matches) {
            id = matches[1];
            if (id === "React.DOM") {
              throw file.errorWithNode(comment, "The @jsx React.DOM pragma has been deprecated as of React 0.12");
            } else {
              break;
            }
          }
        }

        file.set("jsxIdentifier", id.split(".").map(t.identifier).reduce(function (object, property) {
          return t.memberExpression(object, property);
        }));
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL290aGVyL3JlYWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBS0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7Ozs7QUFIQSxjQUFRLFVBQVIsR0FBcUIsSUFBckIsQ0FLSSxnQkFBZ0IsUUFBUSxxQkFBUjtBQUVoQixjQUFRLHdCQUF3QixhQUF4QjtBQUVSLGVBQVMsUUFBUSxnQkFBUjtBQUVULFVBQUksd0JBQXdCLE1BQXhCO0FBTUosNkJBQXVCO0FBRXZCLGlCQUFXO0FBQ2IsZUFBTyxrQkFBUDs7OztBQUdGLGNBQVEsUUFBUixHQUFtQixRQUFuQjs7Ozs7QUFLSSxnQkFBVSxRQUFRLHVDQUFSLEVBQWlEOzs7Ozs7QUFNN0QsYUFBSyxTQUFTLEdBQVQsQ0FBYSxLQUFiLEVBQW9CO0FBQ3ZCLGNBQUksVUFBVSxNQUFNLE9BQU4sQ0FEUztBQUV2QixjQUFJLE9BQU8sTUFBTSxJQUFOLENBRlk7QUFHdkIsY0FBSSxNQUFNLFdBQU4sQ0FBa0IsT0FBbEIsQ0FBSixFQUFnQztBQUM5QixpQkFBSyxJQUFMLENBQVUsRUFBRSxPQUFGLENBQVUsT0FBVixDQUFWLEVBRDhCO1dBQWhDLE1BRU87QUFDTCxpQkFBSyxJQUFMLENBQVUsTUFBTSxPQUFOLENBQVYsQ0FESztXQUZQO1NBSEc7Ozs7OztBQWNMLGNBQU0sU0FBUyxJQUFULENBQWMsS0FBZCxFQUFxQixJQUFyQixFQUEyQjtBQUMvQixnQkFBTSxNQUFOLEdBQWUsS0FBSyxHQUFMLENBQVMsZUFBVCxDQUFmLENBRCtCO1NBQTNCO09BcEJNOzs7QUF5QmQsY0FBUSxPQUFSLEdBQWtCLE9BQWxCOzs7OztBQUtBLGNBQVEsT0FBUixHQUFrQixVQUFVLElBQVYsRUFBZ0IsTUFBaEIsRUFBd0IsS0FBeEIsRUFBK0IsSUFBL0IsRUFBcUM7QUFDckQsWUFBSSxLQUFLLEtBQUssSUFBTCxDQUFVLFNBQVYsQ0FENEM7O0FBR3JELGFBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLEtBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsTUFBbEIsRUFBMEIsR0FBOUMsRUFBbUQ7QUFDakQsY0FBSSxVQUFVLEtBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsQ0FBbEIsQ0FBVixDQUQ2QztBQUVqRCxjQUFJLFVBQVUscUJBQXFCLElBQXJCLENBQTBCLFFBQVEsS0FBUixDQUFwQyxDQUY2QztBQUdqRCxjQUFJLE9BQUosRUFBYTtBQUNYLGlCQUFLLFFBQVEsQ0FBUixDQUFMLENBRFc7QUFFWCxnQkFBSSxPQUFPLFdBQVAsRUFBb0I7QUFDdEIsb0JBQU0sS0FBSyxhQUFMLENBQW1CLE9BQW5CLEVBQTRCLGdFQUE1QixDQUFOLENBRHNCO2FBQXhCLE1BRU87QUFDTCxvQkFESzthQUZQO1dBRkY7U0FIRjs7QUFhQSxhQUFLLEdBQUwsQ0FBUyxlQUFULEVBQTBCLEdBQUcsS0FBSCxDQUFTLEdBQVQsRUFBYyxHQUFkLENBQWtCLEVBQUUsVUFBRixDQUFsQixDQUFnQyxNQUFoQyxDQUF1QyxVQUFVLE1BQVYsRUFBa0IsUUFBbEIsRUFBNEI7QUFDM0YsaUJBQU8sRUFBRSxnQkFBRixDQUFtQixNQUFuQixFQUEyQixRQUEzQixDQUFQLENBRDJGO1NBQTVCLENBQWpFLEVBaEJxRDtPQUFyQyIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYW5zZm9ybWF0aW9uL3RyYW5zZm9ybWVycy9vdGhlci9yZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIF9oZWxwZXJzUmVhY3QgPSByZXF1aXJlKFwiLi4vLi4vaGVscGVycy9yZWFjdFwiKTtcblxudmFyIHJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hlbHBlcnNSZWFjdCk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgSlNYX0FOTk9UQVRJT05fUkVHRVggPSAvXlxcKlxccypAanN4XFxzKyhbXlxcc10rKS87XG5cbnZhciBtZXRhZGF0YSA9IHtcbiAgZ3JvdXA6IFwiYnVpbHRpbi1hZHZhbmNlZFwiXG59O1xuXG5leHBvcnRzLm1ldGFkYXRhID0gbWV0YWRhdGE7XG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciB2aXNpdG9yID0gcmVxdWlyZShcIi4uLy4uL2hlbHBlcnMvYnVpbGQtcmVhY3QtdHJhbnNmb3JtZXJcIikoe1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgcHJlOiBmdW5jdGlvbiBwcmUoc3RhdGUpIHtcbiAgICB2YXIgdGFnTmFtZSA9IHN0YXRlLnRhZ05hbWU7XG4gICAgdmFyIGFyZ3MgPSBzdGF0ZS5hcmdzO1xuICAgIGlmIChyZWFjdC5pc0NvbXBhdFRhZyh0YWdOYW1lKSkge1xuICAgICAgYXJncy5wdXNoKHQubGl0ZXJhbCh0YWdOYW1lKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyZ3MucHVzaChzdGF0ZS50YWdFeHByKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBwb3N0OiBmdW5jdGlvbiBwb3N0KHN0YXRlLCBmaWxlKSB7XG4gICAgc3RhdGUuY2FsbGVlID0gZmlsZS5nZXQoXCJqc3hJZGVudGlmaWVyXCIpO1xuICB9XG59KTtcblxuZXhwb3J0cy52aXNpdG9yID0gdmlzaXRvcjtcbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmlzaXRvci5Qcm9ncmFtID0gZnVuY3Rpb24gKG5vZGUsIHBhcmVudCwgc2NvcGUsIGZpbGUpIHtcbiAgdmFyIGlkID0gZmlsZS5vcHRzLmpzeFByYWdtYTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGUuYXN0LmNvbW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGNvbW1lbnQgPSBmaWxlLmFzdC5jb21tZW50c1tpXTtcbiAgICB2YXIgbWF0Y2hlcyA9IEpTWF9BTk5PVEFUSU9OX1JFR0VYLmV4ZWMoY29tbWVudC52YWx1ZSk7XG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGlkID0gbWF0Y2hlc1sxXTtcbiAgICAgIGlmIChpZCA9PT0gXCJSZWFjdC5ET01cIikge1xuICAgICAgICB0aHJvdyBmaWxlLmVycm9yV2l0aE5vZGUoY29tbWVudCwgXCJUaGUgQGpzeCBSZWFjdC5ET00gcHJhZ21hIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYXMgb2YgUmVhY3QgMC4xMlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZpbGUuc2V0KFwianN4SWRlbnRpZmllclwiLCBpZC5zcGxpdChcIi5cIikubWFwKHQuaWRlbnRpZmllcikucmVkdWNlKGZ1bmN0aW9uIChvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIHQubWVtYmVyRXhwcmVzc2lvbihvYmplY3QsIHByb3BlcnR5KTtcbiAgfSkpO1xufTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
