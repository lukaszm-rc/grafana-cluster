/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _messages, messages, _util, util, _types, t, visitor, loose, spec;

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

  function _ForOfStatementArray(node, scope) {
    var nodes = [];
    var right = node.right;

    if (!t.isIdentifier(right) || !scope.hasBinding(right.name)) {
      var uid = scope.generateUidIdentifier("arr");
      nodes.push(t.variableDeclaration("var", [t.variableDeclarator(uid, right)]));
      right = uid;
    }

    var iterationKey = scope.generateUidIdentifier("i");

    var loop = util.template("for-of-array", {
      BODY: node.body,
      KEY: iterationKey,
      ARR: right
    });

    t.inherits(loop, node);
    t.ensureBlock(loop);

    var iterationValue = t.memberExpression(right, iterationKey, true);

    var left = node.left;
    if (t.isVariableDeclaration(left)) {
      left.declarations[0].init = iterationValue;
      loop.body.body.unshift(left);
    } else {
      loop.body.body.unshift(t.expressionStatement(t.assignmentExpression("=", left, iterationValue)));
    }

    if (this.parentPath.isLabeledStatement()) {
      loop = t.labeledStatement(this.parentPath.node.label, loop);
    }

    nodes.push(loop);

    return nodes;
  }

  /**
   * [Please add a description.]
   */

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports._ForOfStatementArray = _ForOfStatementArray;_messages = require("../../../messages");
      messages = _interopRequireWildcard(_messages);
      _util = require("../../../util");
      util = _interopRequireWildcard(_util);
      _types = require("../../../types");
      t = _interopRequireWildcard(_types);
      visitor = {

        /**
         * [Please add a description.]
         */

        ForOfStatement: function ForOfStatement(node, parent, scope, file) {
          if (this.get("right").isArrayExpression()) {
            return _ForOfStatementArray.call(this, node, scope, file);
          }

          var callback = spec;
          if (file.isLoose("es6.forOf")) callback = loose;

          var build = callback(node, parent, scope, file);
          var declar = build.declar;
          var loop = build.loop;
          var block = loop.body;

          // ensure that it's a block so we can take all its statements
          this.ensureBlock();

          // add the value declaration to the new loop body
          if (declar) {
            block.body.push(declar);
          }

          // push the rest of the original loop body onto our new body
          block.body = block.body.concat(node.body.body);

          t.inherits(loop, node);
          t.inherits(loop.body, node.body);

          if (build.replaceParent) {
            this.parentPath.replaceWithMultiple(build.node);
            this.dangerouslyRemove();
          } else {
            return build.node;
          }
        }
      };


      exports.visitor = visitor;
      loose = function loose(node, parent, scope, file) {
        var left = node.left;
        var declar, id;

        if (t.isIdentifier(left) || t.isPattern(left) || t.isMemberExpression(left)) {
          // for (i of test), for ({ i } of test)
          id = left;
        } else if (t.isVariableDeclaration(left)) {
          // for (var i of test)
          id = scope.generateUidIdentifier("ref");
          declar = t.variableDeclaration(left.kind, [t.variableDeclarator(left.declarations[0].id, id)]);
        } else {
          throw file.errorWithNode(left, messages.get("unknownForHead", left.type));
        }

        var iteratorKey = scope.generateUidIdentifier("iterator");
        var isArrayKey = scope.generateUidIdentifier("isArray");

        var loop = util.template("for-of-loose", {
          LOOP_OBJECT: iteratorKey,
          IS_ARRAY: isArrayKey,
          OBJECT: node.right,
          INDEX: scope.generateUidIdentifier("i"),
          ID: id
        });

        if (!declar) {
          // no declaration so we need to remove the variable declaration at the top of
          // the for-of-loose template
          loop.body.body.shift();
        }

        //

        return {
          declar: declar,
          node: loop,
          loop: loop
        };
      };

      spec = function spec(node, parent, scope, file) {
        var left = node.left;
        var declar;

        var stepKey = scope.generateUidIdentifier("step");
        var stepValue = t.memberExpression(stepKey, t.identifier("value"));

        if (t.isIdentifier(left) || t.isPattern(left) || t.isMemberExpression(left)) {
          // for (i of test), for ({ i } of test)
          declar = t.expressionStatement(t.assignmentExpression("=", left, stepValue));
        } else if (t.isVariableDeclaration(left)) {
          // for (var i of test)
          declar = t.variableDeclaration(left.kind, [t.variableDeclarator(left.declarations[0].id, stepValue)]);
        } else {
          throw file.errorWithNode(left, messages.get("unknownForHead", left.type));
        }

        //

        var iteratorKey = scope.generateUidIdentifier("iterator");

        var template = util.template("for-of", {
          ITERATOR_HAD_ERROR_KEY: scope.generateUidIdentifier("didIteratorError"),
          ITERATOR_COMPLETION: scope.generateUidIdentifier("iteratorNormalCompletion"),
          ITERATOR_ERROR_KEY: scope.generateUidIdentifier("iteratorError"),
          ITERATOR_KEY: iteratorKey,
          STEP_KEY: stepKey,
          OBJECT: node.right,
          BODY: null
        });

        var isLabeledParent = t.isLabeledStatement(parent);

        var tryBody = template[3].block.body;
        var loop = tryBody[0];

        if (isLabeledParent) {
          tryBody[0] = t.labeledStatement(parent.label, loop);
        }

        //

        return {
          replaceParent: isLabeledParent,
          declar: declar,
          loop: loop,
          node: template
        };
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9mb3Itb2YuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFNQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7Ozs7QUFpRUEsV0FBUyxvQkFBVCxDQUE4QixJQUE5QixFQUFvQyxLQUFwQyxFQUEyQztBQUN6QyxRQUFJLFFBQVEsRUFBUixDQURxQztBQUV6QyxRQUFJLFFBQVEsS0FBSyxLQUFMLENBRjZCOztBQUl6QyxRQUFJLENBQUMsRUFBRSxZQUFGLENBQWUsS0FBZixDQUFELElBQTBCLENBQUMsTUFBTSxVQUFOLENBQWlCLE1BQU0sSUFBTixDQUFsQixFQUErQjtBQUMzRCxVQUFJLE1BQU0sTUFBTSxxQkFBTixDQUE0QixLQUE1QixDQUFOLENBRHVEO0FBRTNELFlBQU0sSUFBTixDQUFXLEVBQUUsbUJBQUYsQ0FBc0IsS0FBdEIsRUFBNkIsQ0FBQyxFQUFFLGtCQUFGLENBQXFCLEdBQXJCLEVBQTBCLEtBQTFCLENBQUQsQ0FBN0IsQ0FBWCxFQUYyRDtBQUczRCxjQUFRLEdBQVIsQ0FIMkQ7S0FBN0Q7O0FB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YW5zZm9ybWF0aW9uL3RyYW5zZm9ybWVycy9lczYvZm9yLW9mLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5fRm9yT2ZTdGF0ZW1lbnRBcnJheSA9IF9Gb3JPZlN0YXRlbWVudEFycmF5O1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgX21lc3NhZ2VzID0gcmVxdWlyZShcIi4uLy4uLy4uL21lc3NhZ2VzXCIpO1xuXG52YXIgbWVzc2FnZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfbWVzc2FnZXMpO1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXRpbFwiKTtcblxudmFyIHV0aWwgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbCk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgdmlzaXRvciA9IHtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEZvck9mU3RhdGVtZW50OiBmdW5jdGlvbiBGb3JPZlN0YXRlbWVudChub2RlLCBwYXJlbnQsIHNjb3BlLCBmaWxlKSB7XG4gICAgaWYgKHRoaXMuZ2V0KFwicmlnaHRcIikuaXNBcnJheUV4cHJlc3Npb24oKSkge1xuICAgICAgcmV0dXJuIF9Gb3JPZlN0YXRlbWVudEFycmF5LmNhbGwodGhpcywgbm9kZSwgc2NvcGUsIGZpbGUpO1xuICAgIH1cblxuICAgIHZhciBjYWxsYmFjayA9IHNwZWM7XG4gICAgaWYgKGZpbGUuaXNMb29zZShcImVzNi5mb3JPZlwiKSkgY2FsbGJhY2sgPSBsb29zZTtcblxuICAgIHZhciBidWlsZCA9IGNhbGxiYWNrKG5vZGUsIHBhcmVudCwgc2NvcGUsIGZpbGUpO1xuICAgIHZhciBkZWNsYXIgPSBidWlsZC5kZWNsYXI7XG4gICAgdmFyIGxvb3AgPSBidWlsZC5sb29wO1xuICAgIHZhciBibG9jayA9IGxvb3AuYm9keTtcblxuICAgIC8vIGVuc3VyZSB0aGF0IGl0J3MgYSBibG9jayBzbyB3ZSBjYW4gdGFrZSBhbGwgaXRzIHN0YXRlbWVudHNcbiAgICB0aGlzLmVuc3VyZUJsb2NrKCk7XG5cbiAgICAvLyBhZGQgdGhlIHZhbHVlIGRlY2xhcmF0aW9uIHRvIHRoZSBuZXcgbG9vcCBib2R5XG4gICAgaWYgKGRlY2xhcikge1xuICAgICAgYmxvY2suYm9keS5wdXNoKGRlY2xhcik7XG4gICAgfVxuXG4gICAgLy8gcHVzaCB0aGUgcmVzdCBvZiB0aGUgb3JpZ2luYWwgbG9vcCBib2R5IG9udG8gb3VyIG5ldyBib2R5XG4gICAgYmxvY2suYm9keSA9IGJsb2NrLmJvZHkuY29uY2F0KG5vZGUuYm9keS5ib2R5KTtcblxuICAgIHQuaW5oZXJpdHMobG9vcCwgbm9kZSk7XG4gICAgdC5pbmhlcml0cyhsb29wLmJvZHksIG5vZGUuYm9keSk7XG5cbiAgICBpZiAoYnVpbGQucmVwbGFjZVBhcmVudCkge1xuICAgICAgdGhpcy5wYXJlbnRQYXRoLnJlcGxhY2VXaXRoTXVsdGlwbGUoYnVpbGQubm9kZSk7XG4gICAgICB0aGlzLmRhbmdlcm91c2x5UmVtb3ZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWlsZC5ub2RlO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0cy52aXNpdG9yID0gdmlzaXRvcjtcbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gX0Zvck9mU3RhdGVtZW50QXJyYXkobm9kZSwgc2NvcGUpIHtcbiAgdmFyIG5vZGVzID0gW107XG4gIHZhciByaWdodCA9IG5vZGUucmlnaHQ7XG5cbiAgaWYgKCF0LmlzSWRlbnRpZmllcihyaWdodCkgfHwgIXNjb3BlLmhhc0JpbmRpbmcocmlnaHQubmFtZSkpIHtcbiAgICB2YXIgdWlkID0gc2NvcGUuZ2VuZXJhdGVVaWRJZGVudGlmaWVyKFwiYXJyXCIpO1xuICAgIG5vZGVzLnB1c2godC52YXJpYWJsZURlY2xhcmF0aW9uKFwidmFyXCIsIFt0LnZhcmlhYmxlRGVjbGFyYXRvcih1aWQsIHJpZ2h0KV0pKTtcbiAgICByaWdodCA9IHVpZDtcbiAgfVxuXG4gIHZhciBpdGVyYXRpb25LZXkgPSBzY29wZS5nZW5lcmF0ZVVpZElkZW50aWZpZXIoXCJpXCIpO1xuXG4gIHZhciBsb29wID0gdXRpbC50ZW1wbGF0ZShcImZvci1vZi1hcnJheVwiLCB7XG4gICAgQk9EWTogbm9kZS5ib2R5LFxuICAgIEtFWTogaXRlcmF0aW9uS2V5LFxuICAgIEFSUjogcmlnaHRcbiAgfSk7XG5cbiAgdC5pbmhlcml0cyhsb29wLCBub2RlKTtcbiAgdC5lbnN1cmVCbG9jayhsb29wKTtcblxuICB2YXIgaXRlcmF0aW9uVmFsdWUgPSB0Lm1lbWJlckV4cHJlc3Npb24ocmlnaHQsIGl0ZXJhdGlvbktleSwgdHJ1ZSk7XG5cbiAgdmFyIGxlZnQgPSBub2RlLmxlZnQ7XG4gIGlmICh0LmlzVmFyaWFibGVEZWNsYXJhdGlvbihsZWZ0KSkge1xuICAgIGxlZnQuZGVjbGFyYXRpb25zWzBdLmluaXQgPSBpdGVyYXRpb25WYWx1ZTtcbiAgICBsb29wLmJvZHkuYm9keS51bnNoaWZ0KGxlZnQpO1xuICB9IGVsc2Uge1xuICAgIGxvb3AuYm9keS5ib2R5LnVuc2hpZnQodC5leHByZXNzaW9uU3RhdGVtZW50KHQuYXNzaWdubWVudEV4cHJlc3Npb24oXCI9XCIsIGxlZnQsIGl0ZXJhdGlvblZhbHVlKSkpO1xuICB9XG5cbiAgaWYgKHRoaXMucGFyZW50UGF0aC5pc0xhYmVsZWRTdGF0ZW1lbnQoKSkge1xuICAgIGxvb3AgPSB0LmxhYmVsZWRTdGF0ZW1lbnQodGhpcy5wYXJlbnRQYXRoLm5vZGUubGFiZWwsIGxvb3ApO1xuICB9XG5cbiAgbm9kZXMucHVzaChsb29wKTtcblxuICByZXR1cm4gbm9kZXM7XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIGxvb3NlID0gZnVuY3Rpb24gbG9vc2Uobm9kZSwgcGFyZW50LCBzY29wZSwgZmlsZSkge1xuICB2YXIgbGVmdCA9IG5vZGUubGVmdDtcbiAgdmFyIGRlY2xhciwgaWQ7XG5cbiAgaWYgKHQuaXNJZGVudGlmaWVyKGxlZnQpIHx8IHQuaXNQYXR0ZXJuKGxlZnQpIHx8IHQuaXNNZW1iZXJFeHByZXNzaW9uKGxlZnQpKSB7XG4gICAgLy8gZm9yIChpIG9mIHRlc3QpLCBmb3IgKHsgaSB9IG9mIHRlc3QpXG4gICAgaWQgPSBsZWZ0O1xuICB9IGVsc2UgaWYgKHQuaXNWYXJpYWJsZURlY2xhcmF0aW9uKGxlZnQpKSB7XG4gICAgLy8gZm9yICh2YXIgaSBvZiB0ZXN0KVxuICAgIGlkID0gc2NvcGUuZ2VuZXJhdGVVaWRJZGVudGlmaWVyKFwicmVmXCIpO1xuICAgIGRlY2xhciA9IHQudmFyaWFibGVEZWNsYXJhdGlvbihsZWZ0LmtpbmQsIFt0LnZhcmlhYmxlRGVjbGFyYXRvcihsZWZ0LmRlY2xhcmF0aW9uc1swXS5pZCwgaWQpXSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgZmlsZS5lcnJvcldpdGhOb2RlKGxlZnQsIG1lc3NhZ2VzLmdldChcInVua25vd25Gb3JIZWFkXCIsIGxlZnQudHlwZSkpO1xuICB9XG5cbiAgdmFyIGl0ZXJhdG9yS2V5ID0gc2NvcGUuZ2VuZXJhdGVVaWRJZGVudGlmaWVyKFwiaXRlcmF0b3JcIik7XG4gIHZhciBpc0FycmF5S2V5ID0gc2NvcGUuZ2VuZXJhdGVVaWRJZGVudGlmaWVyKFwiaXNBcnJheVwiKTtcblxuICB2YXIgbG9vcCA9IHV0aWwudGVtcGxhdGUoXCJmb3Itb2YtbG9vc2VcIiwge1xuICAgIExPT1BfT0JKRUNUOiBpdGVyYXRvcktleSxcbiAgICBJU19BUlJBWTogaXNBcnJheUtleSxcbiAgICBPQkpFQ1Q6IG5vZGUucmlnaHQsXG4gICAgSU5ERVg6IHNjb3BlLmdlbmVyYXRlVWlkSWRlbnRpZmllcihcImlcIiksXG4gICAgSUQ6IGlkXG4gIH0pO1xuXG4gIGlmICghZGVjbGFyKSB7XG4gICAgLy8gbm8gZGVjbGFyYXRpb24gc28gd2UgbmVlZCB0byByZW1vdmUgdGhlIHZhcmlhYmxlIGRlY2xhcmF0aW9uIGF0IHRoZSB0b3Agb2ZcbiAgICAvLyB0aGUgZm9yLW9mLWxvb3NlIHRlbXBsYXRlXG4gICAgbG9vcC5ib2R5LmJvZHkuc2hpZnQoKTtcbiAgfVxuXG4gIC8vXG5cbiAgcmV0dXJuIHtcbiAgICBkZWNsYXI6IGRlY2xhcixcbiAgICBub2RlOiBsb29wLFxuICAgIGxvb3A6IGxvb3BcbiAgfTtcbn07XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIHNwZWMgPSBmdW5jdGlvbiBzcGVjKG5vZGUsIHBhcmVudCwgc2NvcGUsIGZpbGUpIHtcbiAgdmFyIGxlZnQgPSBub2RlLmxlZnQ7XG4gIHZhciBkZWNsYXI7XG5cbiAgdmFyIHN0ZXBLZXkgPSBzY29wZS5nZW5lcmF0ZVVpZElkZW50aWZpZXIoXCJzdGVwXCIpO1xuICB2YXIgc3RlcFZhbHVlID0gdC5tZW1iZXJFeHByZXNzaW9uKHN0ZXBLZXksIHQuaWRlbnRpZmllcihcInZhbHVlXCIpKTtcblxuICBpZiAodC5pc0lkZW50aWZpZXIobGVmdCkgfHwgdC5pc1BhdHRlcm4obGVmdCkgfHwgdC5pc01lbWJlckV4cHJlc3Npb24obGVmdCkpIHtcbiAgICAvLyBmb3IgKGkgb2YgdGVzdCksIGZvciAoeyBpIH0gb2YgdGVzdClcbiAgICBkZWNsYXIgPSB0LmV4cHJlc3Npb25TdGF0ZW1lbnQodC5hc3NpZ25tZW50RXhwcmVzc2lvbihcIj1cIiwgbGVmdCwgc3RlcFZhbHVlKSk7XG4gIH0gZWxzZSBpZiAodC5pc1ZhcmlhYmxlRGVjbGFyYXRpb24obGVmdCkpIHtcbiAgICAvLyBmb3IgKHZhciBpIG9mIHRlc3QpXG4gICAgZGVjbGFyID0gdC52YXJpYWJsZURlY2xhcmF0aW9uKGxlZnQua2luZCwgW3QudmFyaWFibGVEZWNsYXJhdG9yKGxlZnQuZGVjbGFyYXRpb25zWzBdLmlkLCBzdGVwVmFsdWUpXSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgZmlsZS5lcnJvcldpdGhOb2RlKGxlZnQsIG1lc3NhZ2VzLmdldChcInVua25vd25Gb3JIZWFkXCIsIGxlZnQudHlwZSkpO1xuICB9XG5cbiAgLy9cblxuICB2YXIgaXRlcmF0b3JLZXkgPSBzY29wZS5nZW5lcmF0ZVVpZElkZW50aWZpZXIoXCJpdGVyYXRvclwiKTtcblxuICB2YXIgdGVtcGxhdGUgPSB1dGlsLnRlbXBsYXRlKFwiZm9yLW9mXCIsIHtcbiAgICBJVEVSQVRPUl9IQURfRVJST1JfS0VZOiBzY29wZS5nZW5lcmF0ZVVpZElkZW50aWZpZXIoXCJkaWRJdGVyYXRvckVycm9yXCIpLFxuICAgIElURVJBVE9SX0NPTVBMRVRJT046IHNjb3BlLmdlbmVyYXRlVWlkSWRlbnRpZmllcihcIml0ZXJhdG9yTm9ybWFsQ29tcGxldGlvblwiKSxcbiAgICBJVEVSQVRPUl9FUlJPUl9LRVk6IHNjb3BlLmdlbmVyYXRlVWlkSWRlbnRpZmllcihcIml0ZXJhdG9yRXJyb3JcIiksXG4gICAgSVRFUkFUT1JfS0VZOiBpdGVyYXRvcktleSxcbiAgICBTVEVQX0tFWTogc3RlcEtleSxcbiAgICBPQkpFQ1Q6IG5vZGUucmlnaHQsXG4gICAgQk9EWTogbnVsbFxuICB9KTtcblxuICB2YXIgaXNMYWJlbGVkUGFyZW50ID0gdC5pc0xhYmVsZWRTdGF0ZW1lbnQocGFyZW50KTtcblxuICB2YXIgdHJ5Qm9keSA9IHRlbXBsYXRlWzNdLmJsb2NrLmJvZHk7XG4gIHZhciBsb29wID0gdHJ5Qm9keVswXTtcblxuICBpZiAoaXNMYWJlbGVkUGFyZW50KSB7XG4gICAgdHJ5Qm9keVswXSA9IHQubGFiZWxlZFN0YXRlbWVudChwYXJlbnQubGFiZWwsIGxvb3ApO1xuICB9XG5cbiAgLy9cblxuICByZXR1cm4ge1xuICAgIHJlcGxhY2VQYXJlbnQ6IGlzTGFiZWxlZFBhcmVudCxcbiAgICBkZWNsYXI6IGRlY2xhcixcbiAgICBsb29wOiBsb29wLFxuICAgIG5vZGU6IHRlbXBsYXRlXG4gIH07XG59OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
