/* */
"format cjs";
// https://github.com/sebmarkbage/ecmascript-rest-spread

"use strict";

System.register([], function (_export, _context) {
  var _types, t, metadata, hasSpread, visitor;

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
        stage: 2,
        dependencies: ["es6.destructuring"]
      };


      exports.metadata = metadata;
      /**
       * [Please add a description.]
       */

      hasSpread = function hasSpread(node) {
        for (var i = 0; i < node.properties.length; i++) {
          if (t.isSpreadProperty(node.properties[i])) {
            return true;
          }
        }
        return false;
      };

      visitor = {

        /**
         * [Please add a description.]
         */

        ObjectExpression: function ObjectExpression(node, parent, scope, file) {
          if (!hasSpread(node)) return;

          var args = [];
          var props = [];

          var push = function push() {
            if (!props.length) return;
            args.push(t.objectExpression(props));
            props = [];
          };

          for (var i = 0; i < node.properties.length; i++) {
            var prop = node.properties[i];
            if (t.isSpreadProperty(prop)) {
              push();
              args.push(prop.argument);
            } else {
              props.push(prop);
            }
          }

          push();

          if (!t.isObjectExpression(args[0])) {
            args.unshift(t.objectExpression([]));
          }

          return t.callExpression(file.addHelper("extends"), args);
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNy9vYmplY3QtcmVzdC1zcHJlYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7QUFHQTs7Ozs7OztBQUtBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7O0FBSEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBS0ksU0FBUyxRQUFRLGdCQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEI7QUFFSixpQkFBVztBQUNiLGVBQU8sQ0FBUDtBQUNBLHNCQUFjLENBQUMsbUJBQUQsQ0FBZDs7OztBQUdGLGNBQVEsUUFBUixHQUFtQixRQUFuQjs7Ozs7QUFLSSxrQkFBWSxTQUFTLFNBQVQsQ0FBbUIsSUFBbkIsRUFBeUI7QUFDdkMsYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksS0FBSyxVQUFMLENBQWdCLE1BQWhCLEVBQXdCLEdBQTVDLEVBQWlEO0FBQy9DLGNBQUksRUFBRSxnQkFBRixDQUFtQixLQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBbkIsQ0FBSixFQUE0QztBQUMxQyxtQkFBTyxJQUFQLENBRDBDO1dBQTVDO1NBREY7QUFLQSxlQUFPLEtBQVAsQ0FOdUM7T0FBekI7O0FBYVosZ0JBQVU7Ozs7OztBQU1aLDBCQUFrQixTQUFTLGdCQUFULENBQTBCLElBQTFCLEVBQWdDLE1BQWhDLEVBQXdDLEtBQXhDLEVBQStDLElBQS9DLEVBQXFEO0FBQ3JFLGNBQUksQ0FBQyxVQUFVLElBQVYsQ0FBRCxFQUFrQixPQUF0Qjs7QUFFQSxjQUFJLE9BQU8sRUFBUCxDQUhpRTtBQUlyRSxjQUFJLFFBQVEsRUFBUixDQUppRTs7QUFNckUsY0FBSSxPQUFPLFNBQVMsSUFBVCxHQUFnQjtBQUN6QixnQkFBSSxDQUFDLE1BQU0sTUFBTixFQUFjLE9BQW5CO0FBQ0EsaUJBQUssSUFBTCxDQUFVLEVBQUUsZ0JBQUYsQ0FBbUIsS0FBbkIsQ0FBVixFQUZ5QjtBQUd6QixvQkFBUSxFQUFSLENBSHlCO1dBQWhCLENBTjBEOztBQVlyRSxlQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxLQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsRUFBd0IsR0FBNUMsRUFBaUQ7QUFDL0MsZ0JBQUksT0FBTyxLQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBUCxDQUQyQztBQUUvQyxnQkFBSSxFQUFFLGdCQUFGLENBQW1CLElBQW5CLENBQUosRUFBOEI7QUFDNUIscUJBRDRCO0FBRTVCLG1CQUFLLElBQUwsQ0FBVSxLQUFLLFFBQUwsQ0FBVixDQUY0QjthQUE5QixNQUdPO0FBQ0wsb0JBQU0sSUFBTixDQUFXLElBQVgsRUFESzthQUhQO1dBRkY7O0FBVUEsaUJBdEJxRTs7QUF3QnJFLGNBQUksQ0FBQyxFQUFFLGtCQUFGLENBQXFCLEtBQUssQ0FBTCxDQUFyQixDQUFELEVBQWdDO0FBQ2xDLGlCQUFLLE9BQUwsQ0FBYSxFQUFFLGdCQUFGLENBQW1CLEVBQW5CLENBQWIsRUFEa0M7V0FBcEM7O0FBSUEsaUJBQU8sRUFBRSxjQUFGLENBQWlCLEtBQUssU0FBTCxDQUFlLFNBQWYsQ0FBakIsRUFBNEMsSUFBNUMsQ0FBUCxDQTVCcUU7U0FBckQ7OztBQStCcEIsY0FBUSxPQUFSLEdBQWtCLE9BQWxCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNy9vYmplY3QtcmVzdC1zcHJlYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3NlYm1hcmtiYWdlL2VjbWFzY3JpcHQtcmVzdC1zcHJlYWRcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxudmFyIG1ldGFkYXRhID0ge1xuICBzdGFnZTogMixcbiAgZGVwZW5kZW5jaWVzOiBbXCJlczYuZGVzdHJ1Y3R1cmluZ1wiXVxufTtcblxuZXhwb3J0cy5tZXRhZGF0YSA9IG1ldGFkYXRhO1xuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgaGFzU3ByZWFkID0gZnVuY3Rpb24gaGFzU3ByZWFkKG5vZGUpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodC5pc1NwcmVhZFByb3BlcnR5KG5vZGUucHJvcGVydGllc1tpXSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciB2aXNpdG9yID0ge1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgT2JqZWN0RXhwcmVzc2lvbjogZnVuY3Rpb24gT2JqZWN0RXhwcmVzc2lvbihub2RlLCBwYXJlbnQsIHNjb3BlLCBmaWxlKSB7XG4gICAgaWYgKCFoYXNTcHJlYWQobm9kZSkpIHJldHVybjtcblxuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIHByb3BzID0gW107XG5cbiAgICB2YXIgcHVzaCA9IGZ1bmN0aW9uIHB1c2goKSB7XG4gICAgICBpZiAoIXByb3BzLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgYXJncy5wdXNoKHQub2JqZWN0RXhwcmVzc2lvbihwcm9wcykpO1xuICAgICAgcHJvcHMgPSBbXTtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwcm9wID0gbm9kZS5wcm9wZXJ0aWVzW2ldO1xuICAgICAgaWYgKHQuaXNTcHJlYWRQcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICBwdXNoKCk7XG4gICAgICAgIGFyZ3MucHVzaChwcm9wLmFyZ3VtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BzLnB1c2gocHJvcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHVzaCgpO1xuXG4gICAgaWYgKCF0LmlzT2JqZWN0RXhwcmVzc2lvbihhcmdzWzBdKSkge1xuICAgICAgYXJncy51bnNoaWZ0KHQub2JqZWN0RXhwcmVzc2lvbihbXSkpO1xuICAgIH1cblxuICAgIHJldHVybiB0LmNhbGxFeHByZXNzaW9uKGZpbGUuYWRkSGVscGVyKFwiZXh0ZW5kc1wiKSwgYXJncyk7XG4gIH1cbn07XG5leHBvcnRzLnZpc2l0b3IgPSB2aXNpdG9yOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
