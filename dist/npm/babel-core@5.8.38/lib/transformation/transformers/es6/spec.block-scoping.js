/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _types, t, refVisitor, metadata, visitor;

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

  function buildAssert(node, file) {
    return t.callExpression(file.addHelper("temporal-assert-defined"), [node, t.literal(node.name), file.addHelper("temporal-undefined")]);
  }

  /**
   * [Please add a description.]
   */

  function references(node, scope, state) {
    var declared = state.letRefs[node.name];
    if (!declared) return false;

    // declared node is different in this scope
    return scope.getBindingIdentifier(node.name) === declared;
  }

  /**
   * [Please add a description.]
   */

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_types = require("../../../types");
      t = _interopRequireWildcard(_types);
      refVisitor = {

        /**
         * [Please add a description.]
         */

        ReferencedIdentifier: function ReferencedIdentifier(node, parent, scope, state) {
          if (t.isFor(parent) && parent.left === node) return;

          if (!references(node, scope, state)) return;

          var assert = buildAssert(node, state.file);

          this.skip();

          if (t.isUpdateExpression(parent)) {
            if (parent._ignoreBlockScopingTDZ) return;
            this.parentPath.replaceWith(t.sequenceExpression([assert, parent]));
          } else {
            return t.logicalExpression("&&", assert, node);
          }
        },

        /**
         * [Please add a description.]
         */

        AssignmentExpression: {
          exit: function exit(node, parent, scope, state) {
            if (node._ignoreBlockScopingTDZ) return;

            var nodes = [];
            var ids = this.getBindingIdentifiers();

            for (var name in ids) {
              var id = ids[name];

              if (references(id, scope, state)) {
                nodes.push(buildAssert(id, state.file));
              }
            }

            if (nodes.length) {
              node._ignoreBlockScopingTDZ = true;
              nodes.push(node);
              return nodes.map(t.expressionStatement);
            }
          }
        }
      };
      metadata = {
        optional: true,
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

        "Program|Loop|BlockStatement": {
          exit: function exit(node, parent, scope, file) {
            var letRefs = node._letReferences;
            if (!letRefs) return;

            this.traverse(refVisitor, {
              letRefs: letRefs,
              file: file
            });
          }
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9zcGVjLmJsb2NrLXNjb3BpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7Ozs7QUFVQSxXQUFTLFdBQVQsQ0FBcUIsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUM7QUFDL0IsV0FBTyxFQUFFLGNBQUYsQ0FBaUIsS0FBSyxTQUFMLENBQWUseUJBQWYsQ0FBakIsRUFBNEQsQ0FBQyxJQUFELEVBQU8sRUFBRSxPQUFGLENBQVUsS0FBSyxJQUFMLENBQWpCLEVBQTZCLEtBQUssU0FBTCxDQUFlLG9CQUFmLENBQTdCLENBQTVELENBQVAsQ0FEK0I7R0FBakM7Ozs7OztBQVFBLFdBQVMsVUFBVCxDQUFvQixJQUFwQixFQUEwQixLQUExQixFQUFpQyxLQUFqQyxFQUF3QztBQUN0QyxRQUFJLFdBQVcsTUFBTSxPQUFOLENBQWMsS0FBSyxJQUFMLENBQXpCLENBRGtDO0FBRXRDLFFBQUksQ0FBQyxRQUFELEVBQVcsT0FBTyxLQUFQLENBQWY7OztBQUZzQyxXQUsvQixNQUFNLG9CQUFOLENBQTJCLEtBQUssSUFBTCxDQUEzQixLQUEwQyxRQUExQyxDQUwrQjtHQUF4Qzs7Ozs7Ozs7O0FBckJBLGNBQVEsVUFBUixHQUFxQixJQUFyQixDQUtJLFNBQVMsUUFBUSxnQkFBUjtBQUVULFVBQUksd0JBQXdCLE1BQXhCO0FBMEJKLG1CQUFhOzs7Ozs7QUFNZiw4QkFBc0IsU0FBUyxvQkFBVCxDQUE4QixJQUE5QixFQUFvQyxNQUFwQyxFQUE0QyxLQUE1QyxFQUFtRCxLQUFuRCxFQUEwRDtBQUM5RSxjQUFJLEVBQUUsS0FBRixDQUFRLE1BQVIsS0FBbUIsT0FBTyxJQUFQLEtBQWdCLElBQWhCLEVBQXNCLE9BQTdDOztBQUVBLGNBQUksQ0FBQyxXQUFXLElBQVgsRUFBaUIsS0FBakIsRUFBd0IsS0FBeEIsQ0FBRCxFQUFpQyxPQUFyQzs7QUFFQSxjQUFJLFNBQVMsWUFBWSxJQUFaLEVBQWtCLE1BQU0sSUFBTixDQUEzQixDQUwwRTs7QUFPOUUsZUFBSyxJQUFMLEdBUDhFOztBQVM5RSxjQUFJLEVBQUUsa0JBQUYsQ0FBcUIsTUFBckIsQ0FBSixFQUFrQztBQUNoQyxnQkFBSSxPQUFPLHNCQUFQLEVBQStCLE9BQW5DO0FBQ0EsaUJBQUssVUFBTCxDQUFnQixXQUFoQixDQUE0QixFQUFFLGtCQUFGLENBQXFCLENBQUMsTUFBRCxFQUFTLE1BQVQsQ0FBckIsQ0FBNUIsRUFGZ0M7V0FBbEMsTUFHTztBQUNMLG1CQUFPLEVBQUUsaUJBQUYsQ0FBb0IsSUFBcEIsRUFBMEIsTUFBMUIsRUFBa0MsSUFBbEMsQ0FBUCxDQURLO1dBSFA7U0FUb0I7Ozs7OztBQXFCdEIsOEJBQXNCO0FBQ3BCLGdCQUFNLFNBQVMsSUFBVCxDQUFjLElBQWQsRUFBb0IsTUFBcEIsRUFBNEIsS0FBNUIsRUFBbUMsS0FBbkMsRUFBMEM7QUFDOUMsZ0JBQUksS0FBSyxzQkFBTCxFQUE2QixPQUFqQzs7QUFFQSxnQkFBSSxRQUFRLEVBQVIsQ0FIMEM7QUFJOUMsZ0JBQUksTUFBTSxLQUFLLHFCQUFMLEVBQU4sQ0FKMEM7O0FBTTlDLGlCQUFLLElBQUksSUFBSixJQUFZLEdBQWpCLEVBQXNCO0FBQ3BCLGtCQUFJLEtBQUssSUFBSSxJQUFKLENBQUwsQ0FEZ0I7O0FBR3BCLGtCQUFJLFdBQVcsRUFBWCxFQUFlLEtBQWYsRUFBc0IsS0FBdEIsQ0FBSixFQUFrQztBQUNoQyxzQkFBTSxJQUFOLENBQVcsWUFBWSxFQUFaLEVBQWdCLE1BQU0sSUFBTixDQUEzQixFQURnQztlQUFsQzthQUhGOztBQVFBLGdCQUFJLE1BQU0sTUFBTixFQUFjO0FBQ2hCLG1CQUFLLHNCQUFMLEdBQThCLElBQTlCLENBRGdCO0FBRWhCLG9CQUFNLElBQU4sQ0FBVyxJQUFYLEVBRmdCO0FBR2hCLHFCQUFPLE1BQU0sR0FBTixDQUFVLEVBQUUsbUJBQUYsQ0FBakIsQ0FIZ0I7YUFBbEI7V0FkSTtTQURSOztBQXdCRSxpQkFBVztBQUNiLGtCQUFVLElBQVY7QUFDQSxlQUFPLGtCQUFQOzs7O0FBR0YsY0FBUSxRQUFSLEdBQW1CLFFBQW5COzs7OztBQUtJLGdCQUFVOzs7Ozs7QUFNWix1Q0FBK0I7QUFDN0IsZ0JBQU0sU0FBUyxJQUFULENBQWMsSUFBZCxFQUFvQixNQUFwQixFQUE0QixLQUE1QixFQUFtQyxJQUFuQyxFQUF5QztBQUM3QyxnQkFBSSxVQUFVLEtBQUssY0FBTCxDQUQrQjtBQUU3QyxnQkFBSSxDQUFDLE9BQUQsRUFBVSxPQUFkOztBQUVBLGlCQUFLLFFBQUwsQ0FBYyxVQUFkLEVBQTBCO0FBQ3hCLHVCQUFTLE9BQVQ7QUFDQSxvQkFBTSxJQUFOO2FBRkYsRUFKNkM7V0FBekM7U0FEUjs7O0FBWUYsY0FBUSxPQUFSLEdBQWtCLE9BQWxCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9zcGVjLmJsb2NrLXNjb3BpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBidWlsZEFzc2VydChub2RlLCBmaWxlKSB7XG4gIHJldHVybiB0LmNhbGxFeHByZXNzaW9uKGZpbGUuYWRkSGVscGVyKFwidGVtcG9yYWwtYXNzZXJ0LWRlZmluZWRcIiksIFtub2RlLCB0LmxpdGVyYWwobm9kZS5uYW1lKSwgZmlsZS5hZGRIZWxwZXIoXCJ0ZW1wb3JhbC11bmRlZmluZWRcIildKTtcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiByZWZlcmVuY2VzKG5vZGUsIHNjb3BlLCBzdGF0ZSkge1xuICB2YXIgZGVjbGFyZWQgPSBzdGF0ZS5sZXRSZWZzW25vZGUubmFtZV07XG4gIGlmICghZGVjbGFyZWQpIHJldHVybiBmYWxzZTtcblxuICAvLyBkZWNsYXJlZCBub2RlIGlzIGRpZmZlcmVudCBpbiB0aGlzIHNjb3BlXG4gIHJldHVybiBzY29wZS5nZXRCaW5kaW5nSWRlbnRpZmllcihub2RlLm5hbWUpID09PSBkZWNsYXJlZDtcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgcmVmVmlzaXRvciA9IHtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFJlZmVyZW5jZWRJZGVudGlmaWVyOiBmdW5jdGlvbiBSZWZlcmVuY2VkSWRlbnRpZmllcihub2RlLCBwYXJlbnQsIHNjb3BlLCBzdGF0ZSkge1xuICAgIGlmICh0LmlzRm9yKHBhcmVudCkgJiYgcGFyZW50LmxlZnQgPT09IG5vZGUpIHJldHVybjtcblxuICAgIGlmICghcmVmZXJlbmNlcyhub2RlLCBzY29wZSwgc3RhdGUpKSByZXR1cm47XG5cbiAgICB2YXIgYXNzZXJ0ID0gYnVpbGRBc3NlcnQobm9kZSwgc3RhdGUuZmlsZSk7XG5cbiAgICB0aGlzLnNraXAoKTtcblxuICAgIGlmICh0LmlzVXBkYXRlRXhwcmVzc2lvbihwYXJlbnQpKSB7XG4gICAgICBpZiAocGFyZW50Ll9pZ25vcmVCbG9ja1Njb3BpbmdURFopIHJldHVybjtcbiAgICAgIHRoaXMucGFyZW50UGF0aC5yZXBsYWNlV2l0aCh0LnNlcXVlbmNlRXhwcmVzc2lvbihbYXNzZXJ0LCBwYXJlbnRdKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0LmxvZ2ljYWxFeHByZXNzaW9uKFwiJiZcIiwgYXNzZXJ0LCBub2RlKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBBc3NpZ25tZW50RXhwcmVzc2lvbjoge1xuICAgIGV4aXQ6IGZ1bmN0aW9uIGV4aXQobm9kZSwgcGFyZW50LCBzY29wZSwgc3RhdGUpIHtcbiAgICAgIGlmIChub2RlLl9pZ25vcmVCbG9ja1Njb3BpbmdURFopIHJldHVybjtcblxuICAgICAgdmFyIG5vZGVzID0gW107XG4gICAgICB2YXIgaWRzID0gdGhpcy5nZXRCaW5kaW5nSWRlbnRpZmllcnMoKTtcblxuICAgICAgZm9yICh2YXIgbmFtZSBpbiBpZHMpIHtcbiAgICAgICAgdmFyIGlkID0gaWRzW25hbWVdO1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2VzKGlkLCBzY29wZSwgc3RhdGUpKSB7XG4gICAgICAgICAgbm9kZXMucHVzaChidWlsZEFzc2VydChpZCwgc3RhdGUuZmlsZSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgbm9kZS5faWdub3JlQmxvY2tTY29waW5nVERaID0gdHJ1ZTtcbiAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGVzLm1hcCh0LmV4cHJlc3Npb25TdGF0ZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxudmFyIG1ldGFkYXRhID0ge1xuICBvcHRpb25hbDogdHJ1ZSxcbiAgZ3JvdXA6IFwiYnVpbHRpbi1hZHZhbmNlZFwiXG59O1xuXG5leHBvcnRzLm1ldGFkYXRhID0gbWV0YWRhdGE7XG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciB2aXNpdG9yID0ge1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgXCJQcm9ncmFtfExvb3B8QmxvY2tTdGF0ZW1lbnRcIjoge1xuICAgIGV4aXQ6IGZ1bmN0aW9uIGV4aXQobm9kZSwgcGFyZW50LCBzY29wZSwgZmlsZSkge1xuICAgICAgdmFyIGxldFJlZnMgPSBub2RlLl9sZXRSZWZlcmVuY2VzO1xuICAgICAgaWYgKCFsZXRSZWZzKSByZXR1cm47XG5cbiAgICAgIHRoaXMudHJhdmVyc2UocmVmVmlzaXRvciwge1xuICAgICAgICBsZXRSZWZzOiBsZXRSZWZzLFxuICAgICAgICBmaWxlOiBmaWxlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLnZpc2l0b3IgPSB2aXNpdG9yOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
