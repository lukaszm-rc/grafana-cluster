/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _util, util, _types, t, memberExpressionOptimisationVisitor, visitor;

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

  function optimiseMemberExpression(parent, offset) {
    if (offset === 0) return;

    var newExpr;
    var prop = parent.property;

    if (t.isLiteral(prop)) {
      prop.value += offset;
      prop.raw = String(prop.value);
    } else {
      // // UnaryExpression, BinaryExpression
      newExpr = t.binaryExpression("+", prop, t.literal(offset));
      parent.property = newExpr;
    }
  }

  /**
   * [Please add a description.]
   */

  function hasRest(node) {
    return t.isRestElement(node.params[node.params.length - 1]);
  }

  /**
   * [Please add a description.]
   */

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_util = require("../../../../util");
      util = _interopRequireWildcard(_util);
      _types = require("../../../../types");
      t = _interopRequireWildcard(_types);
      memberExpressionOptimisationVisitor = {

        /**
         * [Please add a description.]
         */

        Scope: function Scope(node, parent, scope, state) {
          // check if this scope has a local binding that will shadow the rest parameter
          if (!scope.bindingIdentifierEquals(state.name, state.outerBinding)) {
            this.skip();
          }
        },

        /**
         * [Please add a description.]
         */

        Flow: function Flow() {
          // don't touch reference in type annotations
          this.skip();
        },

        /**
         * [Please add a description.]
         */

        Function: function Function(node, parent, scope, state) {
          // skip over functions as whatever `arguments` we reference inside will refer
          // to the wrong function
          var oldNoOptimise = state.noOptimise;
          state.noOptimise = true;
          this.traverse(memberExpressionOptimisationVisitor, state);
          state.noOptimise = oldNoOptimise;
          this.skip();
        },

        /**
         * [Please add a description.]
         */

        ReferencedIdentifier: function ReferencedIdentifier(node, parent, scope, state) {
          // we can't guarantee the purity of arguments
          if (node.name === "arguments") {
            state.deopted = true;
          }

          // is this a referenced identifier and is it referencing the rest parameter?
          if (node.name !== state.name) return;

          if (state.noOptimise) {
            state.deopted = true;
          } else {
            if (this.parentPath.isMemberExpression({ computed: true, object: node })) {
              // if we know that this member expression is referencing a number then we can safely
              // optimise it
              var prop = this.parentPath.get("property");
              if (prop.isBaseType("number")) {
                state.candidates.push(this);
                return;
              }
            }

            // optimise single spread args in calls
            if (this.parentPath.isSpreadElement() && state.offset === 0) {
              var call = this.parentPath.parentPath;
              if (call.isCallExpression() && call.node.arguments.length === 1) {
                state.candidates.push(this);
                return;
              }
            }

            state.references.push(this);
          }
        },

        /**
         * Deopt on use of a binding identifier with the same name as our rest param.
         *
         * See https://github.com/babel/babel/issues/2091
         */

        BindingIdentifier: function BindingIdentifier(node, parent, scope, state) {
          if (node.name === state.name) {
            state.deopted = true;
          }
        }
      };
      visitor = {

        /**
         * [Please add a description.]
         */

        Function: function Function(node, parent, scope) {
          if (!hasRest(node)) return;

          var restParam = node.params.pop();
          var rest = restParam.argument;

          var argsId = t.identifier("arguments");

          // otherwise `arguments` will be remapped in arrow functions
          argsId._shadowedFunctionLiteral = this;

          // support patterns
          if (t.isPattern(rest)) {
            var pattern = rest;
            rest = scope.generateUidIdentifier("ref");

            var declar = t.variableDeclaration("let", pattern.elements.map(function (elem, index) {
              var accessExpr = t.memberExpression(rest, t.literal(index), true);
              return t.variableDeclarator(elem, accessExpr);
            }));
            node.body.body.unshift(declar);
          }

          // check and optimise for extremely common cases
          var state = {
            references: [],
            offset: node.params.length,

            argumentsNode: argsId,
            outerBinding: scope.getBindingIdentifier(rest.name),

            // candidate member expressions we could optimise if there are no other references
            candidates: [],

            // local rest binding name
            name: rest.name,

            // whether any references to the rest parameter were made in a function
            deopted: false
          };

          this.traverse(memberExpressionOptimisationVisitor, state);

          if (!state.deopted && !state.references.length) {
            // we only have shorthands and there are no other references
            if (state.candidates.length) {
              var _arr = state.candidates;

              for (var _i = 0; _i < _arr.length; _i++) {
                var candidate = _arr[_i];
                candidate.replaceWith(argsId);
                if (candidate.parentPath.isMemberExpression()) {
                  optimiseMemberExpression(candidate.parent, state.offset);
                }
              }
            }
            return;
          } else {
            state.references = state.references.concat(state.candidates);
          }

          // deopt shadowed functions as transforms like regenerator may try touch the allocation loop
          state.deopted = state.deopted || !!node.shadow;

          //

          var start = t.literal(node.params.length);
          var key = scope.generateUidIdentifier("key");
          var len = scope.generateUidIdentifier("len");

          var arrKey = key;
          var arrLen = len;
          if (node.params.length) {
            // this method has additional params, so we need to subtract
            // the index of the current argument position from the
            // position in the array that we want to populate
            arrKey = t.binaryExpression("-", key, start);

            // we need to work out the size of the array that we're
            // going to store all the rest parameters
            //
            // we need to add a check to avoid constructing the array
            // with <0 if there are less arguments than params as it'll
            // cause an error
            arrLen = t.conditionalExpression(t.binaryExpression(">", len, start), t.binaryExpression("-", len, start), t.literal(0));
          }

          var loop = util.template("rest", {
            ARRAY_TYPE: restParam.typeAnnotation,
            ARGUMENTS: argsId,
            ARRAY_KEY: arrKey,
            ARRAY_LEN: arrLen,
            START: start,
            ARRAY: rest,
            KEY: key,
            LEN: len
          });

          if (state.deopted) {
            loop._blockHoist = node.params.length + 1;
            node.body.body.unshift(loop);
          } else {
            // perform allocation at the lowest common denominator of all references
            loop._blockHoist = 1;

            var target = this.getEarliestCommonAncestorFrom(state.references).getStatementParent();

            // don't perform the allocation inside a loop
            var highestLoop;
            target.findParent(function (path) {
              if (path.isLoop()) {
                highestLoop = path;
              } else if (path.isFunction()) {
                // stop crawling up for functions
                return true;
              }
            });
            if (highestLoop) target = highestLoop;

            target.insertBefore(loop);
          }
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9wYXJhbWV0ZXJzL3Jlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7Ozs7QUEwR0EsV0FBUyx3QkFBVCxDQUFrQyxNQUFsQyxFQUEwQyxNQUExQyxFQUFrRDtBQUNoRCxRQUFJLFdBQVcsQ0FBWCxFQUFjLE9BQWxCOztBQUVBLFFBQUksT0FBSixDQUhnRDtBQUloRCxRQUFJLE9BQU8sT0FBTyxRQUFQLENBSnFDOztBQU1oRCxRQUFJLEVBQUUsU0FBRixDQUFZLElBQVosQ0FBSixFQUF1QjtBQUNyQixXQUFLLEtBQUwsSUFBYyxNQUFkLENBRHFCO0FBRXJCLFdBQUssR0FBTCxHQUFXLE9BQU8sS0FBSyxLQUFMLENBQWxCLENBRnFCO0tBQXZCLE1BR087O0FBRUwsZ0JBQVUsRUFBRSxnQkFBRixDQUFtQixHQUFuQixFQUF3QixJQUF4QixFQUE4QixFQUFFLE9BQUYsQ0FBVSxNQUFWLENBQTlCLENBQVYsQ0FGSztBQUdMLGFBQU8sUUFBUCxHQUFrQixPQUFs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LE1BRU8sSUFBSSxLQUFLLFVBQUwsRUFBSixFQUF1Qjs7QUFFNUIsdUJBQU8sSUFBUCxDQUY0QjtlQUF2QjthQUhTLENBQWxCLENBUks7QUFnQkwsZ0JBQUksV0FBSixFQUFpQixTQUFTLFdBQVQsQ0FBakI7O0FBRUEsbUJBQU8sWUFBUCxDQUFvQixJQUFwQixFQWxCSztXQUhQO1NBbEdROzs7QUEySFosY0FBUSxPQUFSLEdBQWtCLE9BQWxCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9wYXJhbWV0ZXJzL3Jlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi91dGlsXCIpO1xuXG52YXIgdXRpbCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlsKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciBtZW1iZXJFeHByZXNzaW9uT3B0aW1pc2F0aW9uVmlzaXRvciA9IHtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFNjb3BlOiBmdW5jdGlvbiBTY29wZShub2RlLCBwYXJlbnQsIHNjb3BlLCBzdGF0ZSkge1xuICAgIC8vIGNoZWNrIGlmIHRoaXMgc2NvcGUgaGFzIGEgbG9jYWwgYmluZGluZyB0aGF0IHdpbGwgc2hhZG93IHRoZSByZXN0IHBhcmFtZXRlclxuICAgIGlmICghc2NvcGUuYmluZGluZ0lkZW50aWZpZXJFcXVhbHMoc3RhdGUubmFtZSwgc3RhdGUub3V0ZXJCaW5kaW5nKSkge1xuICAgICAgdGhpcy5za2lwKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRmxvdzogZnVuY3Rpb24gRmxvdygpIHtcbiAgICAvLyBkb24ndCB0b3VjaCByZWZlcmVuY2UgaW4gdHlwZSBhbm5vdGF0aW9uc1xuICAgIHRoaXMuc2tpcCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRnVuY3Rpb246IGZ1bmN0aW9uIEZ1bmN0aW9uKG5vZGUsIHBhcmVudCwgc2NvcGUsIHN0YXRlKSB7XG4gICAgLy8gc2tpcCBvdmVyIGZ1bmN0aW9ucyBhcyB3aGF0ZXZlciBgYXJndW1lbnRzYCB3ZSByZWZlcmVuY2UgaW5zaWRlIHdpbGwgcmVmZXJcbiAgICAvLyB0byB0aGUgd3JvbmcgZnVuY3Rpb25cbiAgICB2YXIgb2xkTm9PcHRpbWlzZSA9IHN0YXRlLm5vT3B0aW1pc2U7XG4gICAgc3RhdGUubm9PcHRpbWlzZSA9IHRydWU7XG4gICAgdGhpcy50cmF2ZXJzZShtZW1iZXJFeHByZXNzaW9uT3B0aW1pc2F0aW9uVmlzaXRvciwgc3RhdGUpO1xuICAgIHN0YXRlLm5vT3B0aW1pc2UgPSBvbGROb09wdGltaXNlO1xuICAgIHRoaXMuc2tpcCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgUmVmZXJlbmNlZElkZW50aWZpZXI6IGZ1bmN0aW9uIFJlZmVyZW5jZWRJZGVudGlmaWVyKG5vZGUsIHBhcmVudCwgc2NvcGUsIHN0YXRlKSB7XG4gICAgLy8gd2UgY2FuJ3QgZ3VhcmFudGVlIHRoZSBwdXJpdHkgb2YgYXJndW1lbnRzXG4gICAgaWYgKG5vZGUubmFtZSA9PT0gXCJhcmd1bWVudHNcIikge1xuICAgICAgc3RhdGUuZGVvcHRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gaXMgdGhpcyBhIHJlZmVyZW5jZWQgaWRlbnRpZmllciBhbmQgaXMgaXQgcmVmZXJlbmNpbmcgdGhlIHJlc3QgcGFyYW1ldGVyP1xuICAgIGlmIChub2RlLm5hbWUgIT09IHN0YXRlLm5hbWUpIHJldHVybjtcblxuICAgIGlmIChzdGF0ZS5ub09wdGltaXNlKSB7XG4gICAgICBzdGF0ZS5kZW9wdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMucGFyZW50UGF0aC5pc01lbWJlckV4cHJlc3Npb24oeyBjb21wdXRlZDogdHJ1ZSwgb2JqZWN0OiBub2RlIH0pKSB7XG4gICAgICAgIC8vIGlmIHdlIGtub3cgdGhhdCB0aGlzIG1lbWJlciBleHByZXNzaW9uIGlzIHJlZmVyZW5jaW5nIGEgbnVtYmVyIHRoZW4gd2UgY2FuIHNhZmVseVxuICAgICAgICAvLyBvcHRpbWlzZSBpdFxuICAgICAgICB2YXIgcHJvcCA9IHRoaXMucGFyZW50UGF0aC5nZXQoXCJwcm9wZXJ0eVwiKTtcbiAgICAgICAgaWYgKHByb3AuaXNCYXNlVHlwZShcIm51bWJlclwiKSkge1xuICAgICAgICAgIHN0YXRlLmNhbmRpZGF0ZXMucHVzaCh0aGlzKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gb3B0aW1pc2Ugc2luZ2xlIHNwcmVhZCBhcmdzIGluIGNhbGxzXG4gICAgICBpZiAodGhpcy5wYXJlbnRQYXRoLmlzU3ByZWFkRWxlbWVudCgpICYmIHN0YXRlLm9mZnNldCA9PT0gMCkge1xuICAgICAgICB2YXIgY2FsbCA9IHRoaXMucGFyZW50UGF0aC5wYXJlbnRQYXRoO1xuICAgICAgICBpZiAoY2FsbC5pc0NhbGxFeHByZXNzaW9uKCkgJiYgY2FsbC5ub2RlLmFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBzdGF0ZS5jYW5kaWRhdGVzLnB1c2godGhpcyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLnJlZmVyZW5jZXMucHVzaCh0aGlzKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIERlb3B0IG9uIHVzZSBvZiBhIGJpbmRpbmcgaWRlbnRpZmllciB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3VyIHJlc3QgcGFyYW0uXG4gICAqXG4gICAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzIwOTFcbiAgICovXG5cbiAgQmluZGluZ0lkZW50aWZpZXI6IGZ1bmN0aW9uIEJpbmRpbmdJZGVudGlmaWVyKG5vZGUsIHBhcmVudCwgc2NvcGUsIHN0YXRlKSB7XG4gICAgaWYgKG5vZGUubmFtZSA9PT0gc3RhdGUubmFtZSkge1xuICAgICAgc3RhdGUuZGVvcHRlZCA9IHRydWU7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIG9wdGltaXNlTWVtYmVyRXhwcmVzc2lvbihwYXJlbnQsIG9mZnNldCkge1xuICBpZiAob2Zmc2V0ID09PSAwKSByZXR1cm47XG5cbiAgdmFyIG5ld0V4cHI7XG4gIHZhciBwcm9wID0gcGFyZW50LnByb3BlcnR5O1xuXG4gIGlmICh0LmlzTGl0ZXJhbChwcm9wKSkge1xuICAgIHByb3AudmFsdWUgKz0gb2Zmc2V0O1xuICAgIHByb3AucmF3ID0gU3RyaW5nKHByb3AudmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIC8vIC8vIFVuYXJ5RXhwcmVzc2lvbiwgQmluYXJ5RXhwcmVzc2lvblxuICAgIG5ld0V4cHIgPSB0LmJpbmFyeUV4cHJlc3Npb24oXCIrXCIsIHByb3AsIHQubGl0ZXJhbChvZmZzZXQpKTtcbiAgICBwYXJlbnQucHJvcGVydHkgPSBuZXdFeHByO1xuICB9XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gaGFzUmVzdChub2RlKSB7XG4gIHJldHVybiB0LmlzUmVzdEVsZW1lbnQobm9kZS5wYXJhbXNbbm9kZS5wYXJhbXMubGVuZ3RoIC0gMV0pO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciB2aXNpdG9yID0ge1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRnVuY3Rpb246IGZ1bmN0aW9uIEZ1bmN0aW9uKG5vZGUsIHBhcmVudCwgc2NvcGUpIHtcbiAgICBpZiAoIWhhc1Jlc3Qobm9kZSkpIHJldHVybjtcblxuICAgIHZhciByZXN0UGFyYW0gPSBub2RlLnBhcmFtcy5wb3AoKTtcbiAgICB2YXIgcmVzdCA9IHJlc3RQYXJhbS5hcmd1bWVudDtcblxuICAgIHZhciBhcmdzSWQgPSB0LmlkZW50aWZpZXIoXCJhcmd1bWVudHNcIik7XG5cbiAgICAvLyBvdGhlcndpc2UgYGFyZ3VtZW50c2Agd2lsbCBiZSByZW1hcHBlZCBpbiBhcnJvdyBmdW5jdGlvbnNcbiAgICBhcmdzSWQuX3NoYWRvd2VkRnVuY3Rpb25MaXRlcmFsID0gdGhpcztcblxuICAgIC8vIHN1cHBvcnQgcGF0dGVybnNcbiAgICBpZiAodC5pc1BhdHRlcm4ocmVzdCkpIHtcbiAgICAgIHZhciBwYXR0ZXJuID0gcmVzdDtcbiAgICAgIHJlc3QgPSBzY29wZS5nZW5lcmF0ZVVpZElkZW50aWZpZXIoXCJyZWZcIik7XG5cbiAgICAgIHZhciBkZWNsYXIgPSB0LnZhcmlhYmxlRGVjbGFyYXRpb24oXCJsZXRcIiwgcGF0dGVybi5lbGVtZW50cy5tYXAoZnVuY3Rpb24gKGVsZW0sIGluZGV4KSB7XG4gICAgICAgIHZhciBhY2Nlc3NFeHByID0gdC5tZW1iZXJFeHByZXNzaW9uKHJlc3QsIHQubGl0ZXJhbChpbmRleCksIHRydWUpO1xuICAgICAgICByZXR1cm4gdC52YXJpYWJsZURlY2xhcmF0b3IoZWxlbSwgYWNjZXNzRXhwcik7XG4gICAgICB9KSk7XG4gICAgICBub2RlLmJvZHkuYm9keS51bnNoaWZ0KGRlY2xhcik7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgYW5kIG9wdGltaXNlIGZvciBleHRyZW1lbHkgY29tbW9uIGNhc2VzXG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgcmVmZXJlbmNlczogW10sXG4gICAgICBvZmZzZXQ6IG5vZGUucGFyYW1zLmxlbmd0aCxcblxuICAgICAgYXJndW1lbnRzTm9kZTogYXJnc0lkLFxuICAgICAgb3V0ZXJCaW5kaW5nOiBzY29wZS5nZXRCaW5kaW5nSWRlbnRpZmllcihyZXN0Lm5hbWUpLFxuXG4gICAgICAvLyBjYW5kaWRhdGUgbWVtYmVyIGV4cHJlc3Npb25zIHdlIGNvdWxkIG9wdGltaXNlIGlmIHRoZXJlIGFyZSBubyBvdGhlciByZWZlcmVuY2VzXG4gICAgICBjYW5kaWRhdGVzOiBbXSxcblxuICAgICAgLy8gbG9jYWwgcmVzdCBiaW5kaW5nIG5hbWVcbiAgICAgIG5hbWU6IHJlc3QubmFtZSxcblxuICAgICAgLy8gd2hldGhlciBhbnkgcmVmZXJlbmNlcyB0byB0aGUgcmVzdCBwYXJhbWV0ZXIgd2VyZSBtYWRlIGluIGEgZnVuY3Rpb25cbiAgICAgIGRlb3B0ZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIHRoaXMudHJhdmVyc2UobWVtYmVyRXhwcmVzc2lvbk9wdGltaXNhdGlvblZpc2l0b3IsIHN0YXRlKTtcblxuICAgIGlmICghc3RhdGUuZGVvcHRlZCAmJiAhc3RhdGUucmVmZXJlbmNlcy5sZW5ndGgpIHtcbiAgICAgIC8vIHdlIG9ubHkgaGF2ZSBzaG9ydGhhbmRzIGFuZCB0aGVyZSBhcmUgbm8gb3RoZXIgcmVmZXJlbmNlc1xuICAgICAgaWYgKHN0YXRlLmNhbmRpZGF0ZXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBfYXJyID0gc3RhdGUuY2FuZGlkYXRlcztcblxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Fyci5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICB2YXIgY2FuZGlkYXRlID0gX2FycltfaV07XG4gICAgICAgICAgY2FuZGlkYXRlLnJlcGxhY2VXaXRoKGFyZ3NJZCk7XG4gICAgICAgICAgaWYgKGNhbmRpZGF0ZS5wYXJlbnRQYXRoLmlzTWVtYmVyRXhwcmVzc2lvbigpKSB7XG4gICAgICAgICAgICBvcHRpbWlzZU1lbWJlckV4cHJlc3Npb24oY2FuZGlkYXRlLnBhcmVudCwgc3RhdGUub2Zmc2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUucmVmZXJlbmNlcyA9IHN0YXRlLnJlZmVyZW5jZXMuY29uY2F0KHN0YXRlLmNhbmRpZGF0ZXMpO1xuICAgIH1cblxuICAgIC8vIGRlb3B0IHNoYWRvd2VkIGZ1bmN0aW9ucyBhcyB0cmFuc2Zvcm1zIGxpa2UgcmVnZW5lcmF0b3IgbWF5IHRyeSB0b3VjaCB0aGUgYWxsb2NhdGlvbiBsb29wXG4gICAgc3RhdGUuZGVvcHRlZCA9IHN0YXRlLmRlb3B0ZWQgfHwgISFub2RlLnNoYWRvdztcblxuICAgIC8vXG5cbiAgICB2YXIgc3RhcnQgPSB0LmxpdGVyYWwobm9kZS5wYXJhbXMubGVuZ3RoKTtcbiAgICB2YXIga2V5ID0gc2NvcGUuZ2VuZXJhdGVVaWRJZGVudGlmaWVyKFwia2V5XCIpO1xuICAgIHZhciBsZW4gPSBzY29wZS5nZW5lcmF0ZVVpZElkZW50aWZpZXIoXCJsZW5cIik7XG5cbiAgICB2YXIgYXJyS2V5ID0ga2V5O1xuICAgIHZhciBhcnJMZW4gPSBsZW47XG4gICAgaWYgKG5vZGUucGFyYW1zLmxlbmd0aCkge1xuICAgICAgLy8gdGhpcyBtZXRob2QgaGFzIGFkZGl0aW9uYWwgcGFyYW1zLCBzbyB3ZSBuZWVkIHRvIHN1YnRyYWN0XG4gICAgICAvLyB0aGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgYXJndW1lbnQgcG9zaXRpb24gZnJvbSB0aGVcbiAgICAgIC8vIHBvc2l0aW9uIGluIHRoZSBhcnJheSB0aGF0IHdlIHdhbnQgdG8gcG9wdWxhdGVcbiAgICAgIGFycktleSA9IHQuYmluYXJ5RXhwcmVzc2lvbihcIi1cIiwga2V5LCBzdGFydCk7XG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd29yayBvdXQgdGhlIHNpemUgb2YgdGhlIGFycmF5IHRoYXQgd2UncmVcbiAgICAgIC8vIGdvaW5nIHRvIHN0b3JlIGFsbCB0aGUgcmVzdCBwYXJhbWV0ZXJzXG4gICAgICAvL1xuICAgICAgLy8gd2UgbmVlZCB0byBhZGQgYSBjaGVjayB0byBhdm9pZCBjb25zdHJ1Y3RpbmcgdGhlIGFycmF5XG4gICAgICAvLyB3aXRoIDwwIGlmIHRoZXJlIGFyZSBsZXNzIGFyZ3VtZW50cyB0aGFuIHBhcmFtcyBhcyBpdCdsbFxuICAgICAgLy8gY2F1c2UgYW4gZXJyb3JcbiAgICAgIGFyckxlbiA9IHQuY29uZGl0aW9uYWxFeHByZXNzaW9uKHQuYmluYXJ5RXhwcmVzc2lvbihcIj5cIiwgbGVuLCBzdGFydCksIHQuYmluYXJ5RXhwcmVzc2lvbihcIi1cIiwgbGVuLCBzdGFydCksIHQubGl0ZXJhbCgwKSk7XG4gICAgfVxuXG4gICAgdmFyIGxvb3AgPSB1dGlsLnRlbXBsYXRlKFwicmVzdFwiLCB7XG4gICAgICBBUlJBWV9UWVBFOiByZXN0UGFyYW0udHlwZUFubm90YXRpb24sXG4gICAgICBBUkdVTUVOVFM6IGFyZ3NJZCxcbiAgICAgIEFSUkFZX0tFWTogYXJyS2V5LFxuICAgICAgQVJSQVlfTEVOOiBhcnJMZW4sXG4gICAgICBTVEFSVDogc3RhcnQsXG4gICAgICBBUlJBWTogcmVzdCxcbiAgICAgIEtFWToga2V5LFxuICAgICAgTEVOOiBsZW5cbiAgICB9KTtcblxuICAgIGlmIChzdGF0ZS5kZW9wdGVkKSB7XG4gICAgICBsb29wLl9ibG9ja0hvaXN0ID0gbm9kZS5wYXJhbXMubGVuZ3RoICsgMTtcbiAgICAgIG5vZGUuYm9keS5ib2R5LnVuc2hpZnQobG9vcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHBlcmZvcm0gYWxsb2NhdGlvbiBhdCB0aGUgbG93ZXN0IGNvbW1vbiBkZW5vbWluYXRvciBvZiBhbGwgcmVmZXJlbmNlc1xuICAgICAgbG9vcC5fYmxvY2tIb2lzdCA9IDE7XG5cbiAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmdldEVhcmxpZXN0Q29tbW9uQW5jZXN0b3JGcm9tKHN0YXRlLnJlZmVyZW5jZXMpLmdldFN0YXRlbWVudFBhcmVudCgpO1xuXG4gICAgICAvLyBkb24ndCBwZXJmb3JtIHRoZSBhbGxvY2F0aW9uIGluc2lkZSBhIGxvb3BcbiAgICAgIHZhciBoaWdoZXN0TG9vcDtcbiAgICAgIHRhcmdldC5maW5kUGFyZW50KGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICAgIGlmIChwYXRoLmlzTG9vcCgpKSB7XG4gICAgICAgICAgaGlnaGVzdExvb3AgPSBwYXRoO1xuICAgICAgICB9IGVsc2UgaWYgKHBhdGguaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgLy8gc3RvcCBjcmF3bGluZyB1cCBmb3IgZnVuY3Rpb25zXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKGhpZ2hlc3RMb29wKSB0YXJnZXQgPSBoaWdoZXN0TG9vcDtcblxuICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShsb29wKTtcbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLnZpc2l0b3IgPSB2aXNpdG9yOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
