/* */
"format cjs";
/* eslint no-unused-vars: 0 */

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

  function isString(node) {
    return t.isLiteral(node) && typeof node.value === "string";
  }

  /**
   * [Please add a description.]
   */

  function buildBinaryExpression(left, right) {
    var node = t.binaryExpression("+", left, right);
    node._templateLiteralProduced = true;
    return node;
  }

  /**
   * [Please add a description.]
   */

  function crawl(path) {
    if (path.is("_templateLiteralProduced")) {
      crawl(path.get("left"));
      crawl(path.get("right"));
    } else if (!path.isBaseType("string") && !path.isBaseType("number")) {
      path.replaceWith(t.callExpression(t.identifier("String"), [path.node]));
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
      metadata = {
        group: "builtin-pre"
      };


      exports.metadata = metadata;visitor = {

        /**
         * [Please add a description.]
         */

        TaggedTemplateExpression: function TaggedTemplateExpression(node, parent, scope, file) {
          var quasi = node.quasi;
          var args = [];

          var strings = [];
          var raw = [];

          var _arr = quasi.quasis;
          for (var _i = 0; _i < _arr.length; _i++) {
            var elem = _arr[_i];
            strings.push(t.literal(elem.value.cooked));
            raw.push(t.literal(elem.value.raw));
          }

          strings = t.arrayExpression(strings);
          raw = t.arrayExpression(raw);

          var templateName = "tagged-template-literal";
          if (file.isLoose("es6.templateLiterals")) templateName += "-loose";

          var templateObject = file.addTemplateObject(templateName, strings, raw);
          args.push(templateObject);

          args = args.concat(quasi.expressions);

          return t.callExpression(node.tag, args);
        },

        /**
         * [Please add a description.]
         */

        TemplateLiteral: function TemplateLiteral(node, parent, scope, file) {
          var nodes = [];

          var _arr2 = node.quasis;
          for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
            var elem = _arr2[_i2];
            nodes.push(t.literal(elem.value.cooked));

            var expr = node.expressions.shift();
            if (expr) nodes.push(expr);
          }

          // filter out empty string literals
          nodes = nodes.filter(function (n) {
            return !t.isLiteral(n, { value: "" });
          });

          // since `+` is left-to-right associative
          // ensure the first node is a string if first/second isn't
          if (!isString(nodes[0]) && !isString(nodes[1])) {
            nodes.unshift(t.literal(""));
          }

          if (nodes.length > 1) {
            var root = buildBinaryExpression(nodes.shift(), nodes.shift());

            var _arr3 = nodes;
            for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
              var _node = _arr3[_i3];
              root = buildBinaryExpression(root, _node);
            }

            this.replaceWith(root);
            //crawl(this);
          } else {
              return nodes[0];
            }
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi90ZW1wbGF0ZS1saXRlcmFscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7OztBQUdBOzs7Ozs7O0FBS0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7Ozs7O0FBZUEsV0FBUyxRQUFULENBQWtCLElBQWxCLEVBQXdCO0FBQ3RCLFdBQU8sRUFBRSxTQUFGLENBQVksSUFBWixLQUFxQixPQUFPLEtBQUssS0FBTCxLQUFlLFFBQXRCLENBRE47R0FBeEI7Ozs7OztBQVFBLFdBQVMscUJBQVQsQ0FBK0IsSUFBL0IsRUFBcUMsS0FBckMsRUFBNEM7QUFDMUMsUUFBSSxPQUFPLEVBQUUsZ0JBQUYsQ0FBbUIsR0FBbkIsRUFBd0IsSUFBeEIsRUFBOEIsS0FBOUIsQ0FBUCxDQURzQztBQUUxQyxTQUFLLHdCQUFMLEdBQWdDLElBQWhDLENBRjBDO0FBRzFDLFdBQU8sSUFBUCxDQUgwQztHQUE1Qzs7Ozs7O0FBVUEsV0FBUyxLQUFULENBQWUsSUFBZixFQUFxQjtBQUNuQixRQUFJLEtBQUssRUFBTCxDQUFRLDBCQUFSLENBQUosRUFBeUM7QUFD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TyxDQUFDLEVBQUUsU0FBRixDQUFZLENBQVosRUFBZSxFQUFFLE9BQU8sRUFBUCxFQUFqQixDQUFELENBRHlCO1dBQWIsQ0FBckI7Ozs7QUFibUUsY0FtQi9ELENBQUMsU0FBUyxNQUFNLENBQU4sQ0FBVCxDQUFELElBQXVCLENBQUMsU0FBUyxNQUFNLENBQU4sQ0FBVCxDQUFELEVBQXFCO0FBQzlDLGtCQUFNLE9BQU4sQ0FBYyxFQUFFLE9BQUYsQ0FBVSxFQUFWLENBQWQsRUFEOEM7V0FBaEQ7O0FBSUEsY0FBSSxNQUFNLE1BQU4sR0FBZSxDQUFmLEVBQWtCO0FBQ3BCLGdCQUFJLE9BQU8sc0JBQXNCLE1BQU0sS0FBTixFQUF0QixFQUFxQyxNQUFNLEtBQU4sRUFBckMsQ0FBUCxDQURnQjs7QUFHcEIsZ0JBQUksUUFBUSxLQUFSLENBSGdCO0FBSXBCLGlCQUFLLElBQUksTUFBTSxDQUFOLEVBQVMsTUFBTSxNQUFNLE1BQU4sRUFBYyxLQUF0QyxFQUE2QztBQUMzQyxrQkFBSSxRQUFRLE1BQU0sR0FBTixDQUFSLENBRHVDO0FBRTNDLHFCQUFPLHNCQUFzQixJQUF0QixFQUE0QixLQUE1QixDQUFQLENBRjJDO2FBQTdDOztBQUtBLGlCQUFLLFdBQUwsQ0FBaUIsSUFBakI7O0FBVG9CLFdBQXRCLE1BV087QUFDSCxxQkFBTyxNQUFNLENBQU4sQ0FBUCxDQURHO2FBWFA7U0F2QmU7OztBQXVDbkIsY0FBUSxPQUFSLEdBQWtCLE9BQWxCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi90ZW1wbGF0ZS1saXRlcmFscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IDAgKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxudmFyIG1ldGFkYXRhID0ge1xuICBncm91cDogXCJidWlsdGluLXByZVwiXG59O1xuXG5leHBvcnRzLm1ldGFkYXRhID0gbWV0YWRhdGE7XG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIGlzU3RyaW5nKG5vZGUpIHtcbiAgcmV0dXJuIHQuaXNMaXRlcmFsKG5vZGUpICYmIHR5cGVvZiBub2RlLnZhbHVlID09PSBcInN0cmluZ1wiO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIGJ1aWxkQmluYXJ5RXhwcmVzc2lvbihsZWZ0LCByaWdodCkge1xuICB2YXIgbm9kZSA9IHQuYmluYXJ5RXhwcmVzc2lvbihcIitcIiwgbGVmdCwgcmlnaHQpO1xuICBub2RlLl90ZW1wbGF0ZUxpdGVyYWxQcm9kdWNlZCA9IHRydWU7XG4gIHJldHVybiBub2RlO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIGNyYXdsKHBhdGgpIHtcbiAgaWYgKHBhdGguaXMoXCJfdGVtcGxhdGVMaXRlcmFsUHJvZHVjZWRcIikpIHtcbiAgICBjcmF3bChwYXRoLmdldChcImxlZnRcIikpO1xuICAgIGNyYXdsKHBhdGguZ2V0KFwicmlnaHRcIikpO1xuICB9IGVsc2UgaWYgKCFwYXRoLmlzQmFzZVR5cGUoXCJzdHJpbmdcIikgJiYgIXBhdGguaXNCYXNlVHlwZShcIm51bWJlclwiKSkge1xuICAgIHBhdGgucmVwbGFjZVdpdGgodC5jYWxsRXhwcmVzc2lvbih0LmlkZW50aWZpZXIoXCJTdHJpbmdcIiksIFtwYXRoLm5vZGVdKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgdmlzaXRvciA9IHtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFRhZ2dlZFRlbXBsYXRlRXhwcmVzc2lvbjogZnVuY3Rpb24gVGFnZ2VkVGVtcGxhdGVFeHByZXNzaW9uKG5vZGUsIHBhcmVudCwgc2NvcGUsIGZpbGUpIHtcbiAgICB2YXIgcXVhc2kgPSBub2RlLnF1YXNpO1xuICAgIHZhciBhcmdzID0gW107XG5cbiAgICB2YXIgc3RyaW5ncyA9IFtdO1xuICAgIHZhciByYXcgPSBbXTtcblxuICAgIHZhciBfYXJyID0gcXVhc2kucXVhc2lzO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBfYXJyLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGVsZW0gPSBfYXJyW19pXTtcbiAgICAgIHN0cmluZ3MucHVzaCh0LmxpdGVyYWwoZWxlbS52YWx1ZS5jb29rZWQpKTtcbiAgICAgIHJhdy5wdXNoKHQubGl0ZXJhbChlbGVtLnZhbHVlLnJhdykpO1xuICAgIH1cblxuICAgIHN0cmluZ3MgPSB0LmFycmF5RXhwcmVzc2lvbihzdHJpbmdzKTtcbiAgICByYXcgPSB0LmFycmF5RXhwcmVzc2lvbihyYXcpO1xuXG4gICAgdmFyIHRlbXBsYXRlTmFtZSA9IFwidGFnZ2VkLXRlbXBsYXRlLWxpdGVyYWxcIjtcbiAgICBpZiAoZmlsZS5pc0xvb3NlKFwiZXM2LnRlbXBsYXRlTGl0ZXJhbHNcIikpIHRlbXBsYXRlTmFtZSArPSBcIi1sb29zZVwiO1xuXG4gICAgdmFyIHRlbXBsYXRlT2JqZWN0ID0gZmlsZS5hZGRUZW1wbGF0ZU9iamVjdCh0ZW1wbGF0ZU5hbWUsIHN0cmluZ3MsIHJhdyk7XG4gICAgYXJncy5wdXNoKHRlbXBsYXRlT2JqZWN0KTtcblxuICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChxdWFzaS5leHByZXNzaW9ucyk7XG5cbiAgICByZXR1cm4gdC5jYWxsRXhwcmVzc2lvbihub2RlLnRhZywgYXJncyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBUZW1wbGF0ZUxpdGVyYWw6IGZ1bmN0aW9uIFRlbXBsYXRlTGl0ZXJhbChub2RlLCBwYXJlbnQsIHNjb3BlLCBmaWxlKSB7XG4gICAgdmFyIG5vZGVzID0gW107XG5cbiAgICB2YXIgX2FycjIgPSBub2RlLnF1YXNpcztcbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBfYXJyMi5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgZWxlbSA9IF9hcnIyW19pMl07XG4gICAgICBub2Rlcy5wdXNoKHQubGl0ZXJhbChlbGVtLnZhbHVlLmNvb2tlZCkpO1xuXG4gICAgICB2YXIgZXhwciA9IG5vZGUuZXhwcmVzc2lvbnMuc2hpZnQoKTtcbiAgICAgIGlmIChleHByKSBub2Rlcy5wdXNoKGV4cHIpO1xuICAgIH1cblxuICAgIC8vIGZpbHRlciBvdXQgZW1wdHkgc3RyaW5nIGxpdGVyYWxzXG4gICAgbm9kZXMgPSBub2Rlcy5maWx0ZXIoZnVuY3Rpb24gKG4pIHtcbiAgICAgIHJldHVybiAhdC5pc0xpdGVyYWwobiwgeyB2YWx1ZTogXCJcIiB9KTtcbiAgICB9KTtcblxuICAgIC8vIHNpbmNlIGArYCBpcyBsZWZ0LXRvLXJpZ2h0IGFzc29jaWF0aXZlXG4gICAgLy8gZW5zdXJlIHRoZSBmaXJzdCBub2RlIGlzIGEgc3RyaW5nIGlmIGZpcnN0L3NlY29uZCBpc24ndFxuICAgIGlmICghaXNTdHJpbmcobm9kZXNbMF0pICYmICFpc1N0cmluZyhub2Rlc1sxXSkpIHtcbiAgICAgIG5vZGVzLnVuc2hpZnQodC5saXRlcmFsKFwiXCIpKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgdmFyIHJvb3QgPSBidWlsZEJpbmFyeUV4cHJlc3Npb24obm9kZXMuc2hpZnQoKSwgbm9kZXMuc2hpZnQoKSk7XG5cbiAgICAgIHZhciBfYXJyMyA9IG5vZGVzO1xuICAgICAgZm9yICh2YXIgX2kzID0gMDsgX2kzIDwgX2FycjMubGVuZ3RoOyBfaTMrKykge1xuICAgICAgICB2YXIgX25vZGUgPSBfYXJyM1tfaTNdO1xuICAgICAgICByb290ID0gYnVpbGRCaW5hcnlFeHByZXNzaW9uKHJvb3QsIF9ub2RlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZXBsYWNlV2l0aChyb290KTtcbiAgICAgIC8vY3Jhd2wodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5vZGVzWzBdO1xuICAgICAgfVxuICB9XG59O1xuZXhwb3J0cy52aXNpdG9yID0gdmlzaXRvcjsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
