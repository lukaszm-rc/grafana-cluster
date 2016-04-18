/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _types, t, visitor;

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

  function loose(node, body, objId) {
    var _arr = node.properties;

    for (var _i = 0; _i < _arr.length; _i++) {
      var prop = _arr[_i];
      body.push(t.expressionStatement(t.assignmentExpression("=", t.memberExpression(objId, prop.key, prop.computed || t.isLiteral(prop.key)), prop.value)));
    }
  }

  /**
   * [Please add a description.]
   */

  function spec(node, body, objId, initProps, file) {
    // add a simple assignment for all Symbol member expressions due to symbol polyfill limitations
    // otherwise use Object.defineProperty

    var _arr2 = node.properties;
    for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
      var prop = _arr2[_i2];
      // this wont work with Object.defineProperty
      if (t.isLiteral(t.toComputedKey(prop), { value: "__proto__" })) {
        initProps.push(prop);
        continue;
      }

      var key = prop.key;
      if (t.isIdentifier(key) && !prop.computed) {
        key = t.literal(key.name);
      }

      var bodyNode = t.callExpression(file.addHelper("define-property"), [objId, key, prop.value]);

      body.push(t.expressionStatement(bodyNode));
    }

    // only one node and it's a Object.defineProperty that returns the object

    if (body.length === 1) {
      var first = body[0].expression;

      if (t.isCallExpression(first)) {
        first.arguments[0] = t.objectExpression(initProps);
        return first;
      }
    }
  }

  /**
   * [Please add a description.]
   */

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_types = require("../../../types");
      t = _interopRequireWildcard(_types);
      visitor = {

        /**
         * [Please add a description.]
         */

        ObjectExpression: {
          exit: function exit(node, parent, scope, file) {
            var hasComputed = false;

            var _arr3 = node.properties;
            for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
              var prop = _arr3[_i3];
              hasComputed = t.isProperty(prop, { computed: true, kind: "init" });
              if (hasComputed) break;
            }

            if (!hasComputed) return;

            // put all getters/setters into the first object expression as well as all initialisers up
            // to the first computed property

            var initProps = [];
            var stopInits = false;

            node.properties = node.properties.filter(function (prop) {
              if (prop.computed) {
                stopInits = true;
              }

              if (prop.kind !== "init" || !stopInits) {
                initProps.push(prop);
                return false;
              } else {
                return true;
              }
            });

            //

            var objId = scope.generateUidIdentifierBasedOnNode(parent);

            //

            var body = [];

            //

            var callback = spec;
            if (file.isLoose("es6.properties.computed")) callback = loose;

            var result = callback(node, body, objId, initProps, file);
            if (result) return result;

            //

            body.unshift(t.variableDeclaration("var", [t.variableDeclarator(objId, t.objectExpression(initProps))]));

            body.push(t.expressionStatement(objId));

            return body;
          }
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9wcm9wZXJ0aWVzLmNvbXB1dGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBS0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7Ozs7O0FBVUEsV0FBUyxLQUFULENBQWUsSUFBZixFQUFxQixJQUFyQixFQUEyQixLQUEzQixFQUFrQztBQUNoQyxRQUFJLE9BQU8sS0FBSyxVQUFMLENBRHFCOztBQUdoQyxTQUFLLElBQUksS0FBSyxDQUFMLEVBQVEsS0FBSyxLQUFLLE1BQUwsRUFBYSxJQUFuQyxFQUF5QztBQUN2QyxVQUFJLE9BQU8sS0FBSyxFQUFMLENBQVAsQ0FEbUM7QUFFdkMsV0FBSyxJQUFMLENBQVUsRUFBRSxtQkFBRixDQUFzQixFQUFFLG9CQUFGLENBQXVCLEdBQXZCLEVBQTRCLEVBQUUsZ0JBQUYsQ0FBbUIsS0FBbkIsRUFBMEIsS0FBSyxHQUFMLEVBQVUsS0FBSyxRQUFMLElBQWlCLEVBQUUsU0FBRixDQUFZLEtBQUssR0FBTCxDQUE3QixDQUFoRSxFQUF5RyxLQUFLLEtBQUwsQ0FBL0gsQ0FBVixFQUZ1QztLQUF6QztHQUhGOzs7Ozs7QUFhQSxXQUFTLElBQVQsQ0FBYyxJQUFkLEVBQW9CLElBQXBCLEVBQTBCLEtBQTFCLEVBQWlDLFNBQWpDLEVBQTRDLElBQTVDLEVBQWtEOzs7O0FBSWhELFFBQUksUUFBUSxLQUFLLFVBQUwsQ0FKb0M7QUFLaEQsU0FBSyxJQUFJLE1BQU0sQ0FBTixFQUFTLE1BQU0sTUFBTSxNQUFOLEVBQWMsS0FBdEMsRUFBNkM7QUFDM0MsVUFBSSxPQUFPLE1BQU0sR0FBTixDQUFQOztBQUR1QyxVQUd2QyxFQUFFLFNBQUYsQ0FBWSxFQUFFLGFBQUYsQ0FBZ0IsSUFBaEIsQ0FBWixFQUFtQyxFQUFFLE9BQU8sV0FBUCxFQUFyQyxDQUFKLEVBQWdFO0FBQzlELGtCQUFVLElBQVYsQ0FBZSxJQUFmLEVBRDhEO0FBRTlELGlCQUY4RDtPQUFoRTs7QUFLQSxVQUFJLE1BQU0sS0FBSyxHQUFMLENBUmlDO0FBUzNDLFVBQUksRUFBRSxZQUFGLENBQWUsR0FBZixLQUF1QixDQUFDLEtBQUssUUFBTCxFQUFlO0FBQ3pDLGNBQU0sRUFBRSxPQUFGLENBQVUsSUFBSSxJQUFKLENBQWhCLENBRHlDO09BQTNDOztBQUlBLFVBQUksV0FBVyxFQUFFLGNBQUYsQ0FBaUIsS0FBSyxTQUFMLENBQWUsaUJBQWYsQ0FBakIsRUFBb0QsQ0FBQyxLQUFELEVBQVEsR0FBUixFQUFhLEtBQUssS0FBTCxDQUFqRSxDQUFYLENBYnVDOztBQWUzQyxXQUFLLElBQUwsQ0FBVSxFQUFFLG1CQUFGLENBQXNCLFFBQXRCLENBQVYsRUFmMkM7S0FBN0M7Ozs7QUFMZ0QsUUF5QjVDLEtBQUssTUFBTCxLQUFnQixDQUFoQixFQUFtQjtBQUNyQixVQUFJLFFBQVEsS0FBSyxDQUFMLEVBQVEsVUFBUixDQURTOztBQUdyQixVQUFJLEVBQUUsZ0JBQUYsQ0FBbUIsS0FBbkIsQ0FBSixFQUErQjtBQUM3QixjQUFNLFNBQU4sQ0FBZ0IsQ0FBaEIsSUFBcUIsRUFBRSxnQkFBRixDQUFtQixTQUFuQixDQUFyQixDQUQ2QjtBQUU3QixlQUFPLEtBQVAsQ0FGNkI7T0FBL0I7S0FIRjtHQXpCRjs7Ozs7Ozs7O0FBMUJBLGNBQVEsVUFBUixHQUFxQixJQUFyQixDQUtJLFNBQVMsUUFBUSxnQkFBUjtBQUVULFVBQUksd0JBQXdCLE1BQXhCO0FBMERKLGdCQUFVOzs7Ozs7QUFNWiwwQkFBa0I7QUFDaEIsZ0JBQU0sU0FBUyxJQUFULENBQWMsSUFBZCxFQUFvQixNQUFwQixFQUE0QixLQUE1QixFQUFtQyxJQUFuQyxFQUF5QztBQUM3QyxnQkFBSSxjQUFjLEtBQWQsQ0FEeUM7O0FBRzdDLGdCQUFJLFFBQVEsS0FBSyxVQUFMLENBSGlDO0FBSTdDLGlCQUFLLElBQUksTUFBTSxDQUFOLEVBQVMsTUFBTSxNQUFNLE1BQU4sRUFBYyxLQUF0QyxFQUE2QztBQUMzQyxrQkFBSSxPQUFPLE1BQU0sR0FBTixDQUFQLENBRHVDO0FBRTNDLDRCQUFjLEVBQUUsVUFBRixDQUFhLElBQWIsRUFBbUIsRUFBRSxVQUFVLElBQVYsRUFBZ0IsTUFBTSxNQUFOLEVBQXJDLENBQWQsQ0FGMkM7QUFHM0Msa0JBQUksV0FBSixFQUFpQixNQUFqQjthQUhGOztBQU1BLGdCQUFJLENBQUMsV0FBRCxFQUFjLE9BQWxCOzs7OztBQVY2QyxnQkFlekMsWUFBWSxFQUFaLENBZnlDO0FBZ0I3QyxnQkFBSSxZQUFZLEtBQVosQ0FoQnlDOztBQWtCN0MsaUJBQUssVUFBTCxHQUFrQixLQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsQ0FBdUIsVUFBVSxJQUFWLEVBQWdCO0FBQ3ZELGtCQUFJLEtBQUssUUFBTCxFQUFlO0FBQ2pCLDRCQUFZLElBQVosQ0FEaUI7ZUFBbkI7O0FBSUEsa0JBQUksS0FBSyxJQUFMLEtBQWMsTUFBZCxJQUF3QixDQUFDLFNBQUQsRUFBWTtBQUN0QywwQkFBVSxJQUFWLENBQWUsSUFBZixFQURzQztBQUV0Qyx1QkFBTyxLQUFQLENBRnNDO2VBQXhDLE1BR087QUFDTCx1QkFBTyxJQUFQLENBREs7ZUFIUDthQUx1QyxDQUF6Qzs7OztBQWxCNkMsZ0JBaUN6QyxRQUFRLE1BQU0sZ0NBQU4sQ0FBdUMsTUFBdkMsQ0FBUjs7OztBQWpDeUMsZ0JBcUN6QyxPQUFPLEVBQVA7Ozs7QUFyQ3lDLGdCQXlDekMsV0FBVyxJQUFYLENBekN5QztBQTBDN0MsZ0JBQUksS0FBSyxPQUFMLENBQWEseUJBQWIsQ0FBSixFQUE2QyxXQUFXLEtBQVgsQ0FBN0M7O0FBRUEsZ0JBQUksU0FBUyxTQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLEtBQXJCLEVBQTRCLFNBQTVCLEVBQXVDLElBQXZDLENBQVQsQ0E1Q3lDO0FBNkM3QyxnQkFBSSxNQUFKLEVBQVksT0FBTyxNQUFQLENBQVo7Ozs7QUE3QzZDLGdCQWlEN0MsQ0FBSyxPQUFMLENBQWEsRUFBRSxtQkFBRixDQUFzQixLQUF0QixFQUE2QixDQUFDLEVBQUUsa0JBQUYsQ0FBcUIsS0FBckIsRUFBNEIsRUFBRSxnQkFBRixDQUFtQixTQUFuQixDQUE1QixDQUFELENBQTdCLENBQWIsRUFqRDZDOztBQW1EN0MsaUJBQUssSUFBTCxDQUFVLEVBQUUsbUJBQUYsQ0FBc0IsS0FBdEIsQ0FBVixFQW5ENkM7O0FBcUQ3QyxtQkFBTyxJQUFQLENBckQ2QztXQUF6QztTQURSOzs7QUEwREYsY0FBUSxPQUFSLEdBQWtCLE9BQWxCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9wcm9wZXJ0aWVzLmNvbXB1dGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uLy4uLy4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gbG9vc2Uobm9kZSwgYm9keSwgb2JqSWQpIHtcbiAgdmFyIF9hcnIgPSBub2RlLnByb3BlcnRpZXM7XG5cbiAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IF9hcnIubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIHByb3AgPSBfYXJyW19pXTtcbiAgICBib2R5LnB1c2godC5leHByZXNzaW9uU3RhdGVtZW50KHQuYXNzaWdubWVudEV4cHJlc3Npb24oXCI9XCIsIHQubWVtYmVyRXhwcmVzc2lvbihvYmpJZCwgcHJvcC5rZXksIHByb3AuY29tcHV0ZWQgfHwgdC5pc0xpdGVyYWwocHJvcC5rZXkpKSwgcHJvcC52YWx1ZSkpKTtcbiAgfVxufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIHNwZWMobm9kZSwgYm9keSwgb2JqSWQsIGluaXRQcm9wcywgZmlsZSkge1xuICAvLyBhZGQgYSBzaW1wbGUgYXNzaWdubWVudCBmb3IgYWxsIFN5bWJvbCBtZW1iZXIgZXhwcmVzc2lvbnMgZHVlIHRvIHN5bWJvbCBwb2x5ZmlsbCBsaW1pdGF0aW9uc1xuICAvLyBvdGhlcndpc2UgdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eVxuXG4gIHZhciBfYXJyMiA9IG5vZGUucHJvcGVydGllcztcbiAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgX2FycjIubGVuZ3RoOyBfaTIrKykge1xuICAgIHZhciBwcm9wID0gX2FycjJbX2kyXTtcbiAgICAvLyB0aGlzIHdvbnQgd29yayB3aXRoIE9iamVjdC5kZWZpbmVQcm9wZXJ0eVxuICAgIGlmICh0LmlzTGl0ZXJhbCh0LnRvQ29tcHV0ZWRLZXkocHJvcCksIHsgdmFsdWU6IFwiX19wcm90b19fXCIgfSkpIHtcbiAgICAgIGluaXRQcm9wcy5wdXNoKHByb3ApO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIGtleSA9IHByb3Aua2V5O1xuICAgIGlmICh0LmlzSWRlbnRpZmllcihrZXkpICYmICFwcm9wLmNvbXB1dGVkKSB7XG4gICAgICBrZXkgPSB0LmxpdGVyYWwoa2V5Lm5hbWUpO1xuICAgIH1cblxuICAgIHZhciBib2R5Tm9kZSA9IHQuY2FsbEV4cHJlc3Npb24oZmlsZS5hZGRIZWxwZXIoXCJkZWZpbmUtcHJvcGVydHlcIiksIFtvYmpJZCwga2V5LCBwcm9wLnZhbHVlXSk7XG5cbiAgICBib2R5LnB1c2godC5leHByZXNzaW9uU3RhdGVtZW50KGJvZHlOb2RlKSk7XG4gIH1cblxuICAvLyBvbmx5IG9uZSBub2RlIGFuZCBpdCdzIGEgT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgcmV0dXJucyB0aGUgb2JqZWN0XG5cbiAgaWYgKGJvZHkubGVuZ3RoID09PSAxKSB7XG4gICAgdmFyIGZpcnN0ID0gYm9keVswXS5leHByZXNzaW9uO1xuXG4gICAgaWYgKHQuaXNDYWxsRXhwcmVzc2lvbihmaXJzdCkpIHtcbiAgICAgIGZpcnN0LmFyZ3VtZW50c1swXSA9IHQub2JqZWN0RXhwcmVzc2lvbihpbml0UHJvcHMpO1xuICAgICAgcmV0dXJuIGZpcnN0O1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciB2aXNpdG9yID0ge1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgT2JqZWN0RXhwcmVzc2lvbjoge1xuICAgIGV4aXQ6IGZ1bmN0aW9uIGV4aXQobm9kZSwgcGFyZW50LCBzY29wZSwgZmlsZSkge1xuICAgICAgdmFyIGhhc0NvbXB1dGVkID0gZmFsc2U7XG5cbiAgICAgIHZhciBfYXJyMyA9IG5vZGUucHJvcGVydGllcztcbiAgICAgIGZvciAodmFyIF9pMyA9IDA7IF9pMyA8IF9hcnIzLmxlbmd0aDsgX2kzKyspIHtcbiAgICAgICAgdmFyIHByb3AgPSBfYXJyM1tfaTNdO1xuICAgICAgICBoYXNDb21wdXRlZCA9IHQuaXNQcm9wZXJ0eShwcm9wLCB7IGNvbXB1dGVkOiB0cnVlLCBraW5kOiBcImluaXRcIiB9KTtcbiAgICAgICAgaWYgKGhhc0NvbXB1dGVkKSBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKCFoYXNDb21wdXRlZCkgcmV0dXJuO1xuXG4gICAgICAvLyBwdXQgYWxsIGdldHRlcnMvc2V0dGVycyBpbnRvIHRoZSBmaXJzdCBvYmplY3QgZXhwcmVzc2lvbiBhcyB3ZWxsIGFzIGFsbCBpbml0aWFsaXNlcnMgdXBcbiAgICAgIC8vIHRvIHRoZSBmaXJzdCBjb21wdXRlZCBwcm9wZXJ0eVxuXG4gICAgICB2YXIgaW5pdFByb3BzID0gW107XG4gICAgICB2YXIgc3RvcEluaXRzID0gZmFsc2U7XG5cbiAgICAgIG5vZGUucHJvcGVydGllcyA9IG5vZGUucHJvcGVydGllcy5maWx0ZXIoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgaWYgKHByb3AuY29tcHV0ZWQpIHtcbiAgICAgICAgICBzdG9wSW5pdHMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3Aua2luZCAhPT0gXCJpbml0XCIgfHwgIXN0b3BJbml0cykge1xuICAgICAgICAgIGluaXRQcm9wcy5wdXNoKHByb3ApO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vXG5cbiAgICAgIHZhciBvYmpJZCA9IHNjb3BlLmdlbmVyYXRlVWlkSWRlbnRpZmllckJhc2VkT25Ob2RlKHBhcmVudCk7XG5cbiAgICAgIC8vXG5cbiAgICAgIHZhciBib2R5ID0gW107XG5cbiAgICAgIC8vXG5cbiAgICAgIHZhciBjYWxsYmFjayA9IHNwZWM7XG4gICAgICBpZiAoZmlsZS5pc0xvb3NlKFwiZXM2LnByb3BlcnRpZXMuY29tcHV0ZWRcIikpIGNhbGxiYWNrID0gbG9vc2U7XG5cbiAgICAgIHZhciByZXN1bHQgPSBjYWxsYmFjayhub2RlLCBib2R5LCBvYmpJZCwgaW5pdFByb3BzLCBmaWxlKTtcbiAgICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG5cbiAgICAgIC8vXG5cbiAgICAgIGJvZHkudW5zaGlmdCh0LnZhcmlhYmxlRGVjbGFyYXRpb24oXCJ2YXJcIiwgW3QudmFyaWFibGVEZWNsYXJhdG9yKG9iaklkLCB0Lm9iamVjdEV4cHJlc3Npb24oaW5pdFByb3BzKSldKSk7XG5cbiAgICAgIGJvZHkucHVzaCh0LmV4cHJlc3Npb25TdGF0ZW1lbnQob2JqSWQpKTtcblxuICAgICAgcmV0dXJuIGJvZHk7XG4gICAgfVxuICB9XG59O1xuZXhwb3J0cy52aXNpdG9yID0gdmlzaXRvcjsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
