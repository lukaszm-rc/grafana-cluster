/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _helpersCallDelegate, _helpersCallDelegate2, _helpersGetFunctionArity, _helpersGetFunctionArity2, _util, util, _types, t, hasDefaults, iifeVisitor, visitor;

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
      exports.__esModule = true;_helpersCallDelegate = require("../../../helpers/call-delegate");
      _helpersCallDelegate2 = _interopRequireDefault(_helpersCallDelegate);
      _helpersGetFunctionArity = require("../../../helpers/get-function-arity");
      _helpersGetFunctionArity2 = _interopRequireDefault(_helpersGetFunctionArity);
      _util = require("../../../../util");
      util = _interopRequireWildcard(_util);
      _types = require("../../../../types");
      t = _interopRequireWildcard(_types);

      hasDefaults = function hasDefaults(node) {
        for (var i = 0; i < node.params.length; i++) {
          if (!t.isIdentifier(node.params[i])) return true;
        }
        return false;
      };

      iifeVisitor = {

        /**
         * [Please add a description.]
         */

        ReferencedIdentifier: function ReferencedIdentifier(node, parent, scope, state) {
          if (node.name !== "eval") {
            if (!state.scope.hasOwnBinding(node.name)) return;
            if (state.scope.bindingIdentifierEquals(node.name, node)) return;
          }

          state.iife = true;
          this.stop();
        }
      };
      visitor = {

        /**
         * [Please add a description.]
         */

        Function: function Function(node, parent, scope, file) {
          if (!hasDefaults(node)) return;

          // ensure it's a block, useful for arrow functions
          this.ensureBlock();

          var state = {
            iife: false,
            scope: scope
          };

          var body = [];

          //
          var argsIdentifier = t.identifier("arguments");
          argsIdentifier._shadowedFunctionLiteral = this;

          // push a default parameter definition
          function pushDefNode(left, right, i) {
            var defNode;
            if (exceedsLastNonDefault(i) || t.isPattern(left) || file.transformers["es6.spec.blockScoping"].canTransform()) {
              defNode = util.template("default-parameter", {
                VARIABLE_NAME: left,
                DEFAULT_VALUE: right,
                ARGUMENT_KEY: t.literal(i),
                ARGUMENTS: argsIdentifier
              }, true);
            } else {
              defNode = util.template("default-parameter-assign", {
                VARIABLE_NAME: left,
                DEFAULT_VALUE: right
              }, true);
            }
            defNode._blockHoist = node.params.length - i;
            body.push(defNode);
          }

          // check if an index exceeds the functions arity
          function exceedsLastNonDefault(i) {
            return i + 1 > lastNonDefaultParam;
          }

          //
          var lastNonDefaultParam = _helpersGetFunctionArity2["default"](node);

          //
          var params = this.get("params");
          for (var i = 0; i < params.length; i++) {
            var param = params[i];

            if (!param.isAssignmentPattern()) {
              if (!param.isIdentifier()) {
                param.traverse(iifeVisitor, state);
              }

              if (file.transformers["es6.spec.blockScoping"].canTransform() && param.isIdentifier()) {
                pushDefNode(param.node, t.identifier("undefined"), i);
              }

              continue;
            }

            var left = param.get("left");
            var right = param.get("right");

            if (exceedsLastNonDefault(i) || left.isPattern()) {
              var placeholder = scope.generateUidIdentifier("x");
              placeholder._isDefaultPlaceholder = true;
              node.params[i] = placeholder;
            } else {
              node.params[i] = left.node;
            }

            if (!state.iife) {
              if (right.isIdentifier() && scope.hasOwnBinding(right.node.name)) {
                state.iife = true;
              } else {
                right.traverse(iifeVisitor, state);
              }
            }

            pushDefNode(left.node, right.node, i);
          }

          // we need to cut off all trailing default parameters
          node.params = node.params.slice(0, lastNonDefaultParam);

          if (state.iife) {
            body.push(_helpersCallDelegate2["default"](node, scope));
            node.body = t.blockStatement(body);
          } else {
            node.body.body = body.concat(node.body.body);
          }
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9wYXJhbWV0ZXJzL2RlZmF1bHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7O0FBSUEsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBRSxXQUFXLEdBQVgsRUFBaEMsQ0FBVDtHQUFyQzs7Ozs7QUFQQSxjQUFRLFVBQVIsR0FBcUIsSUFBckIsQ0FTSSx1QkFBdUIsUUFBUSxnQ0FBUjtBQUV2Qiw4QkFBd0IsdUJBQXVCLG9CQUF2QjtBQUV4QixpQ0FBMkIsUUFBUSxxQ0FBUjtBQUUzQixrQ0FBNEIsdUJBQXVCLHdCQUF2QjtBQUU1QixjQUFRLFFBQVEsa0JBQVI7QUFFUixhQUFPLHdCQUF3QixLQUF4QjtBQUVQLGVBQVMsUUFBUSxtQkFBUjtBQUVULFVBQUksd0JBQXdCLE1BQXhCOztBQU1KLG9CQUFjLFNBQVMsV0FBVCxDQUFxQixJQUFyQixFQUEyQjtBQUMzQyxhQUFL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ZCxDQXJGcUQ7O0FBdUZyRCxjQUFJLE1BQU0sSUFBTixFQUFZO0FBQ2QsaUJBQUssSUFBTCxDQUFVLHNCQUFzQixTQUF0QixFQUFpQyxJQUFqQyxFQUF1QyxLQUF2QyxDQUFWLEVBRGM7QUFFZCxpQkFBSyxJQUFMLEdBQVksRUFBRSxjQUFGLENBQWlCLElBQWpCLENBQVosQ0FGYztXQUFoQixNQUdPO0FBQ0wsaUJBQUssSUFBTCxDQUFVLElBQVYsR0FBaUIsS0FBSyxNQUFMLENBQVksS0FBSyxJQUFMLENBQVUsSUFBVixDQUE3QixDQURLO1dBSFA7U0F2RlE7OztBQStGWixjQUFRLE9BQVIsR0FBa0IsT0FBbEIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmFuc2Zvcm1hdGlvbi90cmFuc2Zvcm1lcnMvZXM2L3BhcmFtZXRlcnMvZGVmYXVsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfaGVscGVyc0NhbGxEZWxlZ2F0ZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9oZWxwZXJzL2NhbGwtZGVsZWdhdGVcIik7XG5cbnZhciBfaGVscGVyc0NhbGxEZWxlZ2F0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzQ2FsbERlbGVnYXRlKTtcblxudmFyIF9oZWxwZXJzR2V0RnVuY3Rpb25Bcml0eSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9oZWxwZXJzL2dldC1mdW5jdGlvbi1hcml0eVwiKTtcblxudmFyIF9oZWxwZXJzR2V0RnVuY3Rpb25Bcml0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzR2V0RnVuY3Rpb25Bcml0eSk7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi91dGlsXCIpO1xuXG52YXIgdXRpbCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlsKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciBoYXNEZWZhdWx0cyA9IGZ1bmN0aW9uIGhhc0RlZmF1bHRzKG5vZGUpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLnBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICghdC5pc0lkZW50aWZpZXIobm9kZS5wYXJhbXNbaV0pKSByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciBpaWZlVmlzaXRvciA9IHtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFJlZmVyZW5jZWRJZGVudGlmaWVyOiBmdW5jdGlvbiBSZWZlcmVuY2VkSWRlbnRpZmllcihub2RlLCBwYXJlbnQsIHNjb3BlLCBzdGF0ZSkge1xuICAgIGlmIChub2RlLm5hbWUgIT09IFwiZXZhbFwiKSB7XG4gICAgICBpZiAoIXN0YXRlLnNjb3BlLmhhc093bkJpbmRpbmcobm9kZS5uYW1lKSkgcmV0dXJuO1xuICAgICAgaWYgKHN0YXRlLnNjb3BlLmJpbmRpbmdJZGVudGlmaWVyRXF1YWxzKG5vZGUubmFtZSwgbm9kZSkpIHJldHVybjtcbiAgICB9XG5cbiAgICBzdGF0ZS5paWZlID0gdHJ1ZTtcbiAgICB0aGlzLnN0b3AoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgdmlzaXRvciA9IHtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEZ1bmN0aW9uOiBmdW5jdGlvbiBGdW5jdGlvbihub2RlLCBwYXJlbnQsIHNjb3BlLCBmaWxlKSB7XG4gICAgaWYgKCFoYXNEZWZhdWx0cyhub2RlKSkgcmV0dXJuO1xuXG4gICAgLy8gZW5zdXJlIGl0J3MgYSBibG9jaywgdXNlZnVsIGZvciBhcnJvdyBmdW5jdGlvbnNcbiAgICB0aGlzLmVuc3VyZUJsb2NrKCk7XG5cbiAgICB2YXIgc3RhdGUgPSB7XG4gICAgICBpaWZlOiBmYWxzZSxcbiAgICAgIHNjb3BlOiBzY29wZVxuICAgIH07XG5cbiAgICB2YXIgYm9keSA9IFtdO1xuXG4gICAgLy9cbiAgICB2YXIgYXJnc0lkZW50aWZpZXIgPSB0LmlkZW50aWZpZXIoXCJhcmd1bWVudHNcIik7XG4gICAgYXJnc0lkZW50aWZpZXIuX3NoYWRvd2VkRnVuY3Rpb25MaXRlcmFsID0gdGhpcztcblxuICAgIC8vIHB1c2ggYSBkZWZhdWx0IHBhcmFtZXRlciBkZWZpbml0aW9uXG4gICAgZnVuY3Rpb24gcHVzaERlZk5vZGUobGVmdCwgcmlnaHQsIGkpIHtcbiAgICAgIHZhciBkZWZOb2RlO1xuICAgICAgaWYgKGV4Y2VlZHNMYXN0Tm9uRGVmYXVsdChpKSB8fCB0LmlzUGF0dGVybihsZWZ0KSB8fCBmaWxlLnRyYW5zZm9ybWVyc1tcImVzNi5zcGVjLmJsb2NrU2NvcGluZ1wiXS5jYW5UcmFuc2Zvcm0oKSkge1xuICAgICAgICBkZWZOb2RlID0gdXRpbC50ZW1wbGF0ZShcImRlZmF1bHQtcGFyYW1ldGVyXCIsIHtcbiAgICAgICAgICBWQVJJQUJMRV9OQU1FOiBsZWZ0LFxuICAgICAgICAgIERFRkFVTFRfVkFMVUU6IHJpZ2h0LFxuICAgICAgICAgIEFSR1VNRU5UX0tFWTogdC5saXRlcmFsKGkpLFxuICAgICAgICAgIEFSR1VNRU5UUzogYXJnc0lkZW50aWZpZXJcbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZOb2RlID0gdXRpbC50ZW1wbGF0ZShcImRlZmF1bHQtcGFyYW1ldGVyLWFzc2lnblwiLCB7XG4gICAgICAgICAgVkFSSUFCTEVfTkFNRTogbGVmdCxcbiAgICAgICAgICBERUZBVUxUX1ZBTFVFOiByaWdodFxuICAgICAgICB9LCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGRlZk5vZGUuX2Jsb2NrSG9pc3QgPSBub2RlLnBhcmFtcy5sZW5ndGggLSBpO1xuICAgICAgYm9keS5wdXNoKGRlZk5vZGUpO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGlmIGFuIGluZGV4IGV4Y2VlZHMgdGhlIGZ1bmN0aW9ucyBhcml0eVxuICAgIGZ1bmN0aW9uIGV4Y2VlZHNMYXN0Tm9uRGVmYXVsdChpKSB7XG4gICAgICByZXR1cm4gaSArIDEgPiBsYXN0Tm9uRGVmYXVsdFBhcmFtO1xuICAgIH1cblxuICAgIC8vXG4gICAgdmFyIGxhc3ROb25EZWZhdWx0UGFyYW0gPSBfaGVscGVyc0dldEZ1bmN0aW9uQXJpdHkyW1wiZGVmYXVsdFwiXShub2RlKTtcblxuICAgIC8vXG4gICAgdmFyIHBhcmFtcyA9IHRoaXMuZ2V0KFwicGFyYW1zXCIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcGFyYW0gPSBwYXJhbXNbaV07XG5cbiAgICAgIGlmICghcGFyYW0uaXNBc3NpZ25tZW50UGF0dGVybigpKSB7XG4gICAgICAgIGlmICghcGFyYW0uaXNJZGVudGlmaWVyKCkpIHtcbiAgICAgICAgICBwYXJhbS50cmF2ZXJzZShpaWZlVmlzaXRvciwgc3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpbGUudHJhbnNmb3JtZXJzW1wiZXM2LnNwZWMuYmxvY2tTY29waW5nXCJdLmNhblRyYW5zZm9ybSgpICYmIHBhcmFtLmlzSWRlbnRpZmllcigpKSB7XG4gICAgICAgICAgcHVzaERlZk5vZGUocGFyYW0ubm9kZSwgdC5pZGVudGlmaWVyKFwidW5kZWZpbmVkXCIpLCBpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGVmdCA9IHBhcmFtLmdldChcImxlZnRcIik7XG4gICAgICB2YXIgcmlnaHQgPSBwYXJhbS5nZXQoXCJyaWdodFwiKTtcblxuICAgICAgaWYgKGV4Y2VlZHNMYXN0Tm9uRGVmYXVsdChpKSB8fCBsZWZ0LmlzUGF0dGVybigpKSB7XG4gICAgICAgIHZhciBwbGFjZWhvbGRlciA9IHNjb3BlLmdlbmVyYXRlVWlkSWRlbnRpZmllcihcInhcIik7XG4gICAgICAgIHBsYWNlaG9sZGVyLl9pc0RlZmF1bHRQbGFjZWhvbGRlciA9IHRydWU7XG4gICAgICAgIG5vZGUucGFyYW1zW2ldID0gcGxhY2Vob2xkZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLnBhcmFtc1tpXSA9IGxlZnQubm9kZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzdGF0ZS5paWZlKSB7XG4gICAgICAgIGlmIChyaWdodC5pc0lkZW50aWZpZXIoKSAmJiBzY29wZS5oYXNPd25CaW5kaW5nKHJpZ2h0Lm5vZGUubmFtZSkpIHtcbiAgICAgICAgICBzdGF0ZS5paWZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByaWdodC50cmF2ZXJzZShpaWZlVmlzaXRvciwgc3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHB1c2hEZWZOb2RlKGxlZnQubm9kZSwgcmlnaHQubm9kZSwgaSk7XG4gICAgfVxuXG4gICAgLy8gd2UgbmVlZCB0byBjdXQgb2ZmIGFsbCB0cmFpbGluZyBkZWZhdWx0IHBhcmFtZXRlcnNcbiAgICBub2RlLnBhcmFtcyA9IG5vZGUucGFyYW1zLnNsaWNlKDAsIGxhc3ROb25EZWZhdWx0UGFyYW0pO1xuXG4gICAgaWYgKHN0YXRlLmlpZmUpIHtcbiAgICAgIGJvZHkucHVzaChfaGVscGVyc0NhbGxEZWxlZ2F0ZTJbXCJkZWZhdWx0XCJdKG5vZGUsIHNjb3BlKSk7XG4gICAgICBub2RlLmJvZHkgPSB0LmJsb2NrU3RhdGVtZW50KGJvZHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLmJvZHkuYm9keSA9IGJvZHkuY29uY2F0KG5vZGUuYm9keS5ib2R5KTtcbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLnZpc2l0b3IgPSB2aXNpdG9yOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
