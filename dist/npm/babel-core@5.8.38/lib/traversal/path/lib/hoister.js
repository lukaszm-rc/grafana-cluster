/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _transformationHelpersReact, react, _types, t, referenceVisitor, PathHoister;

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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_transformationHelpersReact = require("../../../transformation/helpers/react");
      react = _interopRequireWildcard(_transformationHelpersReact);
      _types = require("../../../types");
      t = _interopRequireWildcard(_types);
      referenceVisitor = {

        /**
         * [Please add a description.]
         */

        ReferencedIdentifier: function ReferencedIdentifier(node, parent, scope, state) {
          if (this.isJSXIdentifier() && react.isCompatTag(node.name)) {
            return;
          }

          // direct references that we need to track to hoist this to the highest scope we can
          var binding = scope.getBinding(node.name);
          if (!binding) return;

          // this binding isn't accessible from the parent scope so we can safely ignore it
          // eg. it's in a closure etc
          if (binding !== state.scope.getBinding(node.name)) return;

          if (binding.constant) {
            state.bindings[node.name] = binding;
          } else {
            var _arr = binding.constantViolations;

            for (var _i = 0; _i < _arr.length; _i++) {
              var violationPath = _arr[_i];
              state.breakOnScopePaths = state.breakOnScopePaths.concat(violationPath.getAncestry());
            }
          }
        }
      };

      PathHoister = function () {
        function PathHoister(path, scope) {
          _classCallCheck(this, PathHoister);

          this.breakOnScopePaths = [];
          this.bindings = {};
          this.scopes = [];
          this.scope = scope;
          this.path = path;
        }

        /**
         * [Please add a description.]
         */

        PathHoister.prototype.isCompatibleScope = function isCompatibleScope(scope) {
          for (var key in this.bindings) {
            var binding = this.bindings[key];
            if (!scope.bindingIdentifierEquals(key, binding.identifier)) {
              return false;
            }
          }

          return true;
        };

        /**
         * [Please add a description.]
         */

        PathHoister.prototype.getCompatibleScopes = function getCompatibleScopes() {
          var scope = this.path.scope;
          do {
            if (this.isCompatibleScope(scope)) {
              this.scopes.push(scope);
            } else {
              break;
            }

            if (this.breakOnScopePaths.indexOf(scope.path) >= 0) {
              break;
            }
          } while (scope = scope.parent);
        };

        /**
         * [Please add a description.]
         */

        PathHoister.prototype.getAttachmentPath = function getAttachmentPath() {
          var scopes = this.scopes;

          var scope = scopes.pop();
          if (!scope) return;

          if (scope.path.isFunction()) {
            if (this.hasOwnParamBindings(scope)) {
              // should ignore this scope since it's ourselves
              if (this.scope === scope) return;

              // needs to be attached to the body
              return scope.path.get("body").get("body")[0];
            } else {
              // doesn't need to be be attached to this scope
              return this.getNextScopeStatementParent();
            }
          } else if (scope.path.isProgram()) {
            return this.getNextScopeStatementParent();
          }
        };

        /**
         * [Please add a description.]
         */

        PathHoister.prototype.getNextScopeStatementParent = function getNextScopeStatementParent() {
          var scope = this.scopes.pop();
          if (scope) return scope.path.getStatementParent();
        };

        /**
         * [Please add a description.]
         */

        PathHoister.prototype.hasOwnParamBindings = function hasOwnParamBindings(scope) {
          for (var name in this.bindings) {
            if (!scope.hasOwnBinding(name)) continue;

            var binding = this.bindings[name];
            if (binding.kind === "param") return true;
          }
          return false;
        };

        /**
         * [Please add a description.]
         */

        PathHoister.prototype.run = function run() {
          var node = this.path.node;
          if (node._hoisted) return;
          node._hoisted = true;

          this.path.traverse(referenceVisitor, this);

          this.getCompatibleScopes();

          var attachTo = this.getAttachmentPath();
          if (!attachTo) return;

          // don't bother hoisting to the same function as this will cause multiple branches to be evaluated more than once leading to a bad optimisation
          if (attachTo.getFunctionParent() === this.path.getFunctionParent()) return;

          var uid = attachTo.scope.generateUidIdentifier("ref");

          attachTo.insertBefore([t.variableDeclaration("var", [t.variableDeclarator(uid, this.path.node)])]);

          var parent = this.path.parentPath;

          if (parent.isJSXElement() && this.path.container === parent.node.children) {
            // turning the `span` in `<div><span /></div>` to an expression so we need to wrap it with
            // an expression container
            uid = t.JSXExpressionContainer(uid);
          }

          this.path.replaceWith(uid);
        };

        return PathHoister;
      }();

      exports["default"] = PathHoister;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3BhdGgvbGliL2hvaXN0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7O0FBSUEsV0FBUyxlQUFULENBQXlCLFFBQXpCLEVBQW1DLFdBQW5DLEVBQWdEO0FBQUUsUUFBSSxFQUFFLG9CQUFvQixXQUFwQixDQUFGLEVBQW9DO0FBQUUsWUFBTSxJQUFJLFNBQUosQ0FBYyxtQ0FBZCxDQUFOLENBQUY7S0FBeEM7R0FBbEQ7Ozs7O0FBUEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBU0ksOEJBQThCLFFBQVEsdUNBQVI7QUFFOUIsY0FBUSx3QkFBd0IsMkJBQXhCO0FBRVIsZUFBUyxRQUFRLGdCQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEI7QUFNSix5QkFBbUI7Ozs7OztBQU1yQiw4QkFBc0IsU0FBUyxvQkFBVCxDQUE4QixJQUE5QixFQUFvQyxNQUFwQyxFQUE0QyxLQUE1QyxFQUFtRCxLQUFuRCxFQUEwRDtBQUM5RSxjQUFJLEtBQUssZUFBTCxNQUEwQixNQUFNLFdBQU4sQ0FBa0IsS0FBSyxJ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ckMsRUFMeUM7O0FBT3pDLGVBQUssbUJBQUwsR0FQeUM7O0FBU3pDLGNBQUksV0FBVyxLQUFLLGlCQUFMLEVBQVgsQ0FUcUM7QUFVekMsY0FBSSxDQUFDLFFBQUQsRUFBVyxPQUFmOzs7QUFWeUMsY0FhckMsU0FBUyxpQkFBVCxPQUFpQyxLQUFLLElBQUwsQ0FBVSxpQkFBVixFQUFqQyxFQUFnRSxPQUFwRTs7QUFFQSxjQUFJLE1BQU0sU0FBUyxLQUFULENBQWUscUJBQWYsQ0FBcUMsS0FBckMsQ0FBTixDQWZxQzs7QUFpQnpDLG1CQUFTLFlBQVQsQ0FBc0IsQ0FBQyxFQUFFLG1CQUFGLENBQXNCLEtBQXRCLEVBQTZCLENBQUMsRUFBRSxrQkFBRixDQUFxQixHQUFyQixFQUEwQixLQUFLLElBQUwsQ0FBVSxJQUFWLENBQTNCLENBQTdCLENBQUQsQ0FBdEIsRUFqQnlDOztBQW1CekMsY0FBSSxTQUFTLEtBQUssSUFBTCxDQUFVLFVBQVYsQ0FuQjRCOztBQXFCekMsY0FBSSxPQUFPLFlBQVAsTUFBeUIsS0FBSyxJQUFMLENBQVUsU0FBVixLQUF3QixPQUFPLElBQVAsQ0FBWSxRQUFaLEVBQXNCOzs7QUFHekUsa0JBQU0sRUFBRSxzQkFBRixDQUF5QixHQUF6QixDQUFOLENBSHlFO1dBQTNFOztBQU1BLGVBQUssSUFBTCxDQUFVLFdBQVYsQ0FBc0IsR0FBdEIsRUEzQnlDO1NBQWYsQ0FsR0M7O0FBZ0k3QixlQUFPLFdBQVAsQ0FoSTZCO09BQVo7O0FBbUluQixjQUFRLFNBQVIsSUFBcUIsV0FBckI7QUFDQSxhQUFPLE9BQVAsR0FBaUIsUUFBUSxTQUFSLENBQWpCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3BhdGgvbGliL2hvaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBfdHJhbnNmb3JtYXRpb25IZWxwZXJzUmVhY3QgPSByZXF1aXJlKFwiLi4vLi4vLi4vdHJhbnNmb3JtYXRpb24vaGVscGVycy9yZWFjdFwiKTtcblxudmFyIHJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3RyYW5zZm9ybWF0aW9uSGVscGVyc1JlYWN0KTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciByZWZlcmVuY2VWaXNpdG9yID0ge1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgUmVmZXJlbmNlZElkZW50aWZpZXI6IGZ1bmN0aW9uIFJlZmVyZW5jZWRJZGVudGlmaWVyKG5vZGUsIHBhcmVudCwgc2NvcGUsIHN0YXRlKSB7XG4gICAgaWYgKHRoaXMuaXNKU1hJZGVudGlmaWVyKCkgJiYgcmVhY3QuaXNDb21wYXRUYWcobm9kZS5uYW1lKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGRpcmVjdCByZWZlcmVuY2VzIHRoYXQgd2UgbmVlZCB0byB0cmFjayB0byBob2lzdCB0aGlzIHRvIHRoZSBoaWdoZXN0IHNjb3BlIHdlIGNhblxuICAgIHZhciBiaW5kaW5nID0gc2NvcGUuZ2V0QmluZGluZyhub2RlLm5hbWUpO1xuICAgIGlmICghYmluZGluZykgcmV0dXJuO1xuXG4gICAgLy8gdGhpcyBiaW5kaW5nIGlzbid0IGFjY2Vzc2libGUgZnJvbSB0aGUgcGFyZW50IHNjb3BlIHNvIHdlIGNhbiBzYWZlbHkgaWdub3JlIGl0XG4gICAgLy8gZWcuIGl0J3MgaW4gYSBjbG9zdXJlIGV0Y1xuICAgIGlmIChiaW5kaW5nICE9PSBzdGF0ZS5zY29wZS5nZXRCaW5kaW5nKG5vZGUubmFtZSkpIHJldHVybjtcblxuICAgIGlmIChiaW5kaW5nLmNvbnN0YW50KSB7XG4gICAgICBzdGF0ZS5iaW5kaW5nc1tub2RlLm5hbWVdID0gYmluZGluZztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9hcnIgPSBiaW5kaW5nLmNvbnN0YW50VmlvbGF0aW9ucztcblxuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IF9hcnIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB2aW9sYXRpb25QYXRoID0gX2FycltfaV07XG4gICAgICAgIHN0YXRlLmJyZWFrT25TY29wZVBhdGhzID0gc3RhdGUuYnJlYWtPblNjb3BlUGF0aHMuY29uY2F0KHZpb2xhdGlvblBhdGguZ2V0QW5jZXN0cnkoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciBQYXRoSG9pc3RlciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBhdGhIb2lzdGVyKHBhdGgsIHNjb3BlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhdGhIb2lzdGVyKTtcblxuICAgIHRoaXMuYnJlYWtPblNjb3BlUGF0aHMgPSBbXTtcbiAgICB0aGlzLmJpbmRpbmdzID0ge307XG4gICAgdGhpcy5zY29wZXMgPSBbXTtcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgUGF0aEhvaXN0ZXIucHJvdG90eXBlLmlzQ29tcGF0aWJsZVNjb3BlID0gZnVuY3Rpb24gaXNDb21wYXRpYmxlU2NvcGUoc2NvcGUpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5iaW5kaW5ncykge1xuICAgICAgdmFyIGJpbmRpbmcgPSB0aGlzLmJpbmRpbmdzW2tleV07XG4gICAgICBpZiAoIXNjb3BlLmJpbmRpbmdJZGVudGlmaWVyRXF1YWxzKGtleSwgYmluZGluZy5pZGVudGlmaWVyKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBQYXRoSG9pc3Rlci5wcm90b3R5cGUuZ2V0Q29tcGF0aWJsZVNjb3BlcyA9IGZ1bmN0aW9uIGdldENvbXBhdGlibGVTY29wZXMoKSB7XG4gICAgdmFyIHNjb3BlID0gdGhpcy5wYXRoLnNjb3BlO1xuICAgIGRvIHtcbiAgICAgIGlmICh0aGlzLmlzQ29tcGF0aWJsZVNjb3BlKHNjb3BlKSkge1xuICAgICAgICB0aGlzLnNjb3Blcy5wdXNoKHNjb3BlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5icmVha09uU2NvcGVQYXRocy5pbmRleE9mKHNjb3BlLnBhdGgpID49IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSB3aGlsZSAoc2NvcGUgPSBzY29wZS5wYXJlbnQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgUGF0aEhvaXN0ZXIucHJvdG90eXBlLmdldEF0dGFjaG1lbnRQYXRoID0gZnVuY3Rpb24gZ2V0QXR0YWNobWVudFBhdGgoKSB7XG4gICAgdmFyIHNjb3BlcyA9IHRoaXMuc2NvcGVzO1xuXG4gICAgdmFyIHNjb3BlID0gc2NvcGVzLnBvcCgpO1xuICAgIGlmICghc2NvcGUpIHJldHVybjtcblxuICAgIGlmIChzY29wZS5wYXRoLmlzRnVuY3Rpb24oKSkge1xuICAgICAgaWYgKHRoaXMuaGFzT3duUGFyYW1CaW5kaW5ncyhzY29wZSkpIHtcbiAgICAgICAgLy8gc2hvdWxkIGlnbm9yZSB0aGlzIHNjb3BlIHNpbmNlIGl0J3Mgb3Vyc2VsdmVzXG4gICAgICAgIGlmICh0aGlzLnNjb3BlID09PSBzY29wZSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIG5lZWRzIHRvIGJlIGF0dGFjaGVkIHRvIHRoZSBib2R5XG4gICAgICAgIHJldHVybiBzY29wZS5wYXRoLmdldChcImJvZHlcIikuZ2V0KFwiYm9keVwiKVswXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRvZXNuJ3QgbmVlZCB0byBiZSBiZSBhdHRhY2hlZCB0byB0aGlzIHNjb3BlXG4gICAgICAgIHJldHVybiB0aGlzLmdldE5leHRTY29wZVN0YXRlbWVudFBhcmVudCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2NvcGUucGF0aC5pc1Byb2dyYW0oKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0TmV4dFNjb3BlU3RhdGVtZW50UGFyZW50KCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgUGF0aEhvaXN0ZXIucHJvdG90eXBlLmdldE5leHRTY29wZVN0YXRlbWVudFBhcmVudCA9IGZ1bmN0aW9uIGdldE5leHRTY29wZVN0YXRlbWVudFBhcmVudCgpIHtcbiAgICB2YXIgc2NvcGUgPSB0aGlzLnNjb3Blcy5wb3AoKTtcbiAgICBpZiAoc2NvcGUpIHJldHVybiBzY29wZS5wYXRoLmdldFN0YXRlbWVudFBhcmVudCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgUGF0aEhvaXN0ZXIucHJvdG90eXBlLmhhc093blBhcmFtQmluZGluZ3MgPSBmdW5jdGlvbiBoYXNPd25QYXJhbUJpbmRpbmdzKHNjb3BlKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLmJpbmRpbmdzKSB7XG4gICAgICBpZiAoIXNjb3BlLmhhc093bkJpbmRpbmcobmFtZSkpIGNvbnRpbnVlO1xuXG4gICAgICB2YXIgYmluZGluZyA9IHRoaXMuYmluZGluZ3NbbmFtZV07XG4gICAgICBpZiAoYmluZGluZy5raW5kID09PSBcInBhcmFtXCIpIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBQYXRoSG9pc3Rlci5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gcnVuKCkge1xuICAgIHZhciBub2RlID0gdGhpcy5wYXRoLm5vZGU7XG4gICAgaWYgKG5vZGUuX2hvaXN0ZWQpIHJldHVybjtcbiAgICBub2RlLl9ob2lzdGVkID0gdHJ1ZTtcblxuICAgIHRoaXMucGF0aC50cmF2ZXJzZShyZWZlcmVuY2VWaXNpdG9yLCB0aGlzKTtcblxuICAgIHRoaXMuZ2V0Q29tcGF0aWJsZVNjb3BlcygpO1xuXG4gICAgdmFyIGF0dGFjaFRvID0gdGhpcy5nZXRBdHRhY2htZW50UGF0aCgpO1xuICAgIGlmICghYXR0YWNoVG8pIHJldHVybjtcblxuICAgIC8vIGRvbid0IGJvdGhlciBob2lzdGluZyB0byB0aGUgc2FtZSBmdW5jdGlvbiBhcyB0aGlzIHdpbGwgY2F1c2UgbXVsdGlwbGUgYnJhbmNoZXMgdG8gYmUgZXZhbHVhdGVkIG1vcmUgdGhhbiBvbmNlIGxlYWRpbmcgdG8gYSBiYWQgb3B0aW1pc2F0aW9uXG4gICAgaWYgKGF0dGFjaFRvLmdldEZ1bmN0aW9uUGFyZW50KCkgPT09IHRoaXMucGF0aC5nZXRGdW5jdGlvblBhcmVudCgpKSByZXR1cm47XG5cbiAgICB2YXIgdWlkID0gYXR0YWNoVG8uc2NvcGUuZ2VuZXJhdGVVaWRJZGVudGlmaWVyKFwicmVmXCIpO1xuXG4gICAgYXR0YWNoVG8uaW5zZXJ0QmVmb3JlKFt0LnZhcmlhYmxlRGVjbGFyYXRpb24oXCJ2YXJcIiwgW3QudmFyaWFibGVEZWNsYXJhdG9yKHVpZCwgdGhpcy5wYXRoLm5vZGUpXSldKTtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhdGgucGFyZW50UGF0aDtcblxuICAgIGlmIChwYXJlbnQuaXNKU1hFbGVtZW50KCkgJiYgdGhpcy5wYXRoLmNvbnRhaW5lciA9PT0gcGFyZW50Lm5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIC8vIHR1cm5pbmcgdGhlIGBzcGFuYCBpbiBgPGRpdj48c3BhbiAvPjwvZGl2PmAgdG8gYW4gZXhwcmVzc2lvbiBzbyB3ZSBuZWVkIHRvIHdyYXAgaXQgd2l0aFxuICAgICAgLy8gYW4gZXhwcmVzc2lvbiBjb250YWluZXJcbiAgICAgIHVpZCA9IHQuSlNYRXhwcmVzc2lvbkNvbnRhaW5lcih1aWQpO1xuICAgIH1cblxuICAgIHRoaXMucGF0aC5yZXBsYWNlV2l0aCh1aWQpO1xuICB9O1xuXG4gIHJldHVybiBQYXRoSG9pc3Rlcjtcbn0pKCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUGF0aEhvaXN0ZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
