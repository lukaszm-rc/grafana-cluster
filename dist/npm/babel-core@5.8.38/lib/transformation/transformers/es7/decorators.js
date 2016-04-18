/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _helpersMemoiseDecorators, _helpersMemoiseDecorators2, _helpersDefineMap, defineMap, _types, t, metadata, visitor;

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

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_helpersMemoiseDecorators = require("../../helpers/memoise-decorators");
      _helpersMemoiseDecorators2 = _interopRequireDefault(_helpersMemoiseDecorators);
      _helpersDefineMap = require("../../helpers/define-map");
      defineMap = _interopRequireWildcard(_helpersDefineMap);
      _types = require("../../../types");
      t = _interopRequireWildcard(_types);
      metadata = {
        dependencies: ["es6.classes"],
        optional: true,
        stage: 1
      };


      exports.metadata = metadata;
      /**
       * [Please add a description.]
       */

      visitor = {

        /**
         * [Please add a description.]
         */

        ObjectExpression: function ObjectExpression(node, parent, scope, file) {
          var hasDecorators = false;
          for (var i = 0; i < node.properties.length; i++) {
            var prop = node.properties[i];
            if (prop.decorators) {
              hasDecorators = true;
              break;
            }
          }
          if (!hasDecorators) return;

          var mutatorMap = {};

          for (var i = 0; i < node.properties.length; i++) {
            var prop = node.properties[i];
            if (prop.decorators) _helpersMemoiseDecorators2["default"](prop.decorators, scope);

            if (prop.kind === "init" && !prop.method) {
              prop.kind = "";
              prop.value = t.functionExpression(null, [], t.blockStatement([t.returnStatement(prop.value)]));
            }

            defineMap.push(mutatorMap, prop, "initializer", file);
          }

          var obj = defineMap.toClassObject(mutatorMap);
          obj = defineMap.toComputedObjectFromClass(obj);
          return t.callExpression(file.addHelper("create-decorated-object"), [obj]);
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNy9kZWNvcmF0b3JzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBS0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7OztBQUlBLFdBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLEdBQXhCLEdBQThCLEVBQUUsV0FBVyxHQUFYLEVBQWhDLENBQVQ7R0FBckM7Ozs7O0FBUEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBU0ksNEJBQTRCLFFBQVEsa0NBQVI7QUFFNUIsbUNBQTZCLHVCQUF1Qix5QkFBdkI7QUFFN0IsMEJBQW9CLFFBQVEsMEJBQVI7QUFFcEIsa0JBQVksd0JBQXdCLGlCQUF4QjtBQUVaLGVBQVMsUUFBUSxnQkFBUjtBQUVULFVBQUksd0JBQXdCLE1BQXhCO0FBRUosaUJBQVc7QUFDYixzQkFBYyxDQUFDLGFBQUQsQ0FBZDtBQUNBLGtCQUFVLElBQVY7QUFDQSxlQUFPLENBQVA7Ozs7QUFHRixjQUFRLFFBQVIsR0FBbUIsUUFBbkI7Ozs7O0FBS0ksZ0JBQVU7Ozs7OztBQU1aLDBCQUFrQixTQUFTLGdCQUFULENBQTBCLElBQTFCLEVBQWdDLE1BQWhDLEVBQXdDLEtBQXhDLEVBQStDLElBQS9DLEVBQXFEO0FBQ3JFLGNBQUksZ0JBQWdCLEtBQWhCLENBRGlFO0FBRXJFLGVBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLEtBQUssVUFBTCxDQUFnQixNQUFoQixFQUF3QixHQUE1QyxFQUFpRDtBQUMvQyxnQkFBSSxPQUFPLEtBQUssVUFBTCxDQUFnQixDQUFoQixDQUFQLENBRDJDO0FBRS9DLGdCQUFJLEtBQUssVUFBTCxFQUFpQjtBQUNuQiw4QkFBZ0IsSUFBaEIsQ0FEbUI7QUFFbkIsb0JBRm1CO2FBQXJCO1dBRkY7QUFPQSxjQUFJLENBQUMsYUFBRCxFQUFnQixPQUFwQjs7QUFFQSxjQUFJLGFBQWEsRUFBYixDQVhpRTs7QUFhckUsZUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksS0FBSyxVQUFMLENBQWdCLE1BQWhCLEVBQXdCLEdBQTVDLEVBQWlEO0FBQy9DLGdCQUFJLE9BQU8sS0FBSyxVQUFMLENBQWdCLENBQWhCLENBQVAsQ0FEMkM7QUFFL0MsZ0JBQUksS0FBSyxVQUFMLEVBQWlCLDJCQUEyQixTQUEzQixFQUFzQyxLQUFLLFVBQUwsRUFBaUIsS0FBdkQsRUFBckI7O0FBRUEsZ0JBQUksS0FBSyxJQUFMLEtBQWMsTUFBZCxJQUF3QixDQUFDLEtBQUssTUFBTCxFQUFhO0FBQ3hDLG1CQUFLLElBQUwsR0FBWSxFQUFaLENBRHdDO0FBRXhDLG1CQUFLLEtBQUwsR0FBYSxFQUFFLGtCQUFGLENBQXFCLElBQXJCLEVBQTJCLEVBQTNCLEVBQStCLEVBQUUsY0FBRixDQUFpQixDQUFDLEVBQUUsZUFBRixDQUFrQixLQUFLLEtBQUwsQ0FBbkIsQ0FBakIsQ0FBL0IsQ0FBYixDQUZ3QzthQUExQzs7QUFLQSxzQkFBVSxJQUFWLENBQWUsVUFBZixFQUEyQixJQUEzQixFQUFpQyxhQUFqQyxFQUFnRCxJQUFoRCxFQVQrQztXQUFqRDs7QUFZQSxjQUFJLE1BQU0sVUFBVSxhQUFWLENBQXdCLFVBQXhCLENBQU4sQ0F6QmlFO0FBMEJyRSxnQkFBTSxVQUFVLHlCQUFWLENBQW9DLEdBQXBDLENBQU4sQ0ExQnFFO0FBMkJyRSxpQkFBTyxFQUFFLGNBQUYsQ0FBaUIsS0FBSyxTQUFMLENBQWUseUJBQWYsQ0FBakIsRUFBNEQsQ0FBQyxHQUFELENBQTVELENBQVAsQ0EzQnFFO1NBQXJEOzs7QUE4QnBCLGNBQVEsT0FBUixHQUFrQixPQUFsQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYW5zZm9ybWF0aW9uL3RyYW5zZm9ybWVycy9lczcvZGVjb3JhdG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfaGVscGVyc01lbW9pc2VEZWNvcmF0b3JzID0gcmVxdWlyZShcIi4uLy4uL2hlbHBlcnMvbWVtb2lzZS1kZWNvcmF0b3JzXCIpO1xuXG52YXIgX2hlbHBlcnNNZW1vaXNlRGVjb3JhdG9yczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzTWVtb2lzZURlY29yYXRvcnMpO1xuXG52YXIgX2hlbHBlcnNEZWZpbmVNYXAgPSByZXF1aXJlKFwiLi4vLi4vaGVscGVycy9kZWZpbmUtbWFwXCIpO1xuXG52YXIgZGVmaW5lTWFwID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hlbHBlcnNEZWZpbmVNYXApO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uLy4uLy4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbnZhciBtZXRhZGF0YSA9IHtcbiAgZGVwZW5kZW5jaWVzOiBbXCJlczYuY2xhc3Nlc1wiXSxcbiAgb3B0aW9uYWw6IHRydWUsXG4gIHN0YWdlOiAxXG59O1xuXG5leHBvcnRzLm1ldGFkYXRhID0gbWV0YWRhdGE7XG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciB2aXNpdG9yID0ge1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgT2JqZWN0RXhwcmVzc2lvbjogZnVuY3Rpb24gT2JqZWN0RXhwcmVzc2lvbihub2RlLCBwYXJlbnQsIHNjb3BlLCBmaWxlKSB7XG4gICAgdmFyIGhhc0RlY29yYXRvcnMgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHByb3AgPSBub2RlLnByb3BlcnRpZXNbaV07XG4gICAgICBpZiAocHJvcC5kZWNvcmF0b3JzKSB7XG4gICAgICAgIGhhc0RlY29yYXRvcnMgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFoYXNEZWNvcmF0b3JzKSByZXR1cm47XG5cbiAgICB2YXIgbXV0YXRvck1hcCA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwcm9wID0gbm9kZS5wcm9wZXJ0aWVzW2ldO1xuICAgICAgaWYgKHByb3AuZGVjb3JhdG9ycykgX2hlbHBlcnNNZW1vaXNlRGVjb3JhdG9yczJbXCJkZWZhdWx0XCJdKHByb3AuZGVjb3JhdG9ycywgc2NvcGUpO1xuXG4gICAgICBpZiAocHJvcC5raW5kID09PSBcImluaXRcIiAmJiAhcHJvcC5tZXRob2QpIHtcbiAgICAgICAgcHJvcC5raW5kID0gXCJcIjtcbiAgICAgICAgcHJvcC52YWx1ZSA9IHQuZnVuY3Rpb25FeHByZXNzaW9uKG51bGwsIFtdLCB0LmJsb2NrU3RhdGVtZW50KFt0LnJldHVyblN0YXRlbWVudChwcm9wLnZhbHVlKV0pKTtcbiAgICAgIH1cblxuICAgICAgZGVmaW5lTWFwLnB1c2gobXV0YXRvck1hcCwgcHJvcCwgXCJpbml0aWFsaXplclwiLCBmaWxlKTtcbiAgICB9XG5cbiAgICB2YXIgb2JqID0gZGVmaW5lTWFwLnRvQ2xhc3NPYmplY3QobXV0YXRvck1hcCk7XG4gICAgb2JqID0gZGVmaW5lTWFwLnRvQ29tcHV0ZWRPYmplY3RGcm9tQ2xhc3Mob2JqKTtcbiAgICByZXR1cm4gdC5jYWxsRXhwcmVzc2lvbihmaWxlLmFkZEhlbHBlcihcImNyZWF0ZS1kZWNvcmF0ZWQtb2JqZWN0XCIpLCBbb2JqXSk7XG4gIH1cbn07XG5leHBvcnRzLnZpc2l0b3IgPSB2aXNpdG9yOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
