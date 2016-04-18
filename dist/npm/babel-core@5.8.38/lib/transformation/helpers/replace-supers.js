/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _messages, messages, _types, t, visitor, ReplaceSupers;

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

  /**
   * [Please add a description.]
   */

  function isIllegalBareSuper(node, parent) {
    if (!t.isSuper(node)) return false;
    if (t.isMemberExpression(parent, { computed: false })) return false;
    if (t.isCallExpression(parent, { callee: node })) return false;
    return true;
  }

  /**
   * [Please add a description.]
   */

  function isMemberExpressionSuper(node) {
    return t.isMemberExpression(node) && t.isSuper(node.object);
  }

  /**
   * [Please add a description.]
   */

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_messages = require("../../messages");
      messages = _interopRequireWildcard(_messages);
      _types = require("../../types");
      t = _interopRequireWildcard(_types);
      visitor = {

        /**
         * [Please add a description.]
         */

        enter: function enter(node, parent, scope, state) {
          var topLevel = state.topLevel;
          var self = state.self;

          if (t.isFunction(node) && !t.isArrowFunctionExpression(node)) {
            // we need to call traverseLevel again so we're context aware
            self.traverseLevel(this, false);
            return this.skip();
          }

          if (t.isProperty(node, { method: true }) || t.isMethodDefinition(node)) {
            // break on object methods
            return this.skip();
          }

          var getThisReference = topLevel ?
          // top level so `this` is the instance
          t.thisExpression :
          // not in the top level so we need to create a reference
          self.getThisReference.bind(self);

          var callback = self.specHandle;
          if (self.isLoose) callback = self.looseHandle;
          var result = callback.call(self, this, getThisReference);
          if (result) this.hasSuper = true;
          if (result === true) return;
          return result;
        }
      };

      ReplaceSupers = function () {
        function ReplaceSupers(opts) {
          var inClass = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

          _classCallCheck(this, ReplaceSupers);

          this.topLevelThisReference = opts.topLevelThisReference;
          this.methodPath = opts.methodPath;
          this.methodNode = opts.methodNode;
          this.superRef = opts.superRef;
          this.isStatic = opts.isStatic;
          this.hasSuper = false;
          this.inClass = inClass;
          this.isLoose = opts.isLoose;
          this.scope = opts.scope;
          this.file = opts.file;
          this.opts = opts;
        }

        /**
         * [Please add a description.]
         */

        ReplaceSupers.prototype.getObjectRef = function getObjectRef() {
          return this.opts.objectRef || this.opts.getObjectRef();
        };

        /**
         * Sets a super class value of the named property.
         *
         * @example
         *
         *   _set(Object.getPrototypeOf(CLASS.prototype), "METHOD", "VALUE", this)
         *
         */

        ReplaceSupers.prototype.setSuperProperty = function setSuperProperty(property, value, isComputed, thisExpression) {
          return t.callExpression(this.file.addHelper("set"), [t.callExpression(t.memberExpression(t.identifier("Object"), t.identifier("getPrototypeOf")), [this.isStatic ? this.getObjectRef() : t.memberExpression(this.getObjectRef(), t.identifier("prototype"))]), isComputed ? property : t.literal(property.name), value, thisExpression]);
        };

        /**
         * Gets a node representing the super class value of the named property.
         *
         * @example
         *
         *   _get(Object.getPrototypeOf(CLASS.prototype), "METHOD", this)
         *
         */

        ReplaceSupers.prototype.getSuperProperty = function getSuperProperty(property, isComputed, thisExpression) {
          return t.callExpression(this.file.addHelper("get"), [t.callExpression(t.memberExpression(t.identifier("Object"), t.identifier("getPrototypeOf")), [this.isStatic ? this.getObjectRef() : t.memberExpression(this.getObjectRef(), t.identifier("prototype"))]), isComputed ? property : t.literal(property.name), thisExpression]);
        };

        /**
         * [Please add a description.]
         */

        ReplaceSupers.prototype.replace = function replace() {
          this.traverseLevel(this.methodPath.get("value"), true);
        };

        /**
         * [Please add a description.]
         */

        ReplaceSupers.prototype.traverseLevel = function traverseLevel(path, topLevel) {
          var state = { self: this, topLevel: topLevel };
          path.traverse(visitor, state);
        };

        /**
         * [Please add a description.]
         */

        ReplaceSupers.prototype.getThisReference = function getThisReference() {
          if (this.topLevelThisReference) {
            return this.topLevelThisReference;
          } else {
            var ref = this.topLevelThisReference = this.scope.generateUidIdentifier("this");
            this.methodNode.value.body.body.unshift(t.variableDeclaration("var", [t.variableDeclarator(this.topLevelThisReference, t.thisExpression())]));
            return ref;
          }
        };

        /**
         * [Please add a description.]
         */

        ReplaceSupers.prototype.getLooseSuperProperty = function getLooseSuperProperty(id, parent) {
          var methodNode = this.methodNode;
          var methodName = methodNode.key;
          var superRef = this.superRef || t.identifier("Function");

          if (parent.property === id) {
            return;
          } else if (t.isCallExpression(parent, { callee: id })) {
            // super(); -> objectRef.prototype.MethodName.call(this);
            parent.arguments.unshift(t.thisExpression());

            if (methodName.name === "constructor") {
              // constructor() { super(); }
              if (parent.arguments.length === 2 && t.isSpreadElement(parent.arguments[1]) && t.isIdentifier(parent.arguments[1].argument, { name: "arguments" })) {
                // special case single arguments spread
                parent.arguments[1] = parent.arguments[1].argument;
                return t.memberExpression(superRef, t.identifier("apply"));
              } else {
                return t.memberExpression(superRef, t.identifier("call"));
              }
            } else {
              id = superRef;

              // foo() { super(); }
              if (!methodNode["static"]) {
                id = t.memberExpression(id, t.identifier("prototype"));
              }

              id = t.memberExpression(id, methodName, methodNode.computed);
              return t.memberExpression(id, t.identifier("call"));
            }
          } else if (t.isMemberExpression(parent) && !methodNode["static"]) {
            // super.test -> objectRef.prototype.test
            return t.memberExpression(superRef, t.identifier("prototype"));
          } else {
            return superRef;
          }
        };

        /**
         * [Please add a description.]
         */

        ReplaceSupers.prototype.looseHandle = function looseHandle(path, getThisReference) {
          var node = path.node;
          if (path.isSuper()) {
            return this.getLooseSuperProperty(node, path.parent);
          } else if (path.isCallExpression()) {
            var callee = node.callee;
            if (!t.isMemberExpression(callee)) return;
            if (!t.isSuper(callee.object)) return;

            // super.test(); -> objectRef.prototype.MethodName.call(this);
            t.appendToMemberExpression(callee, t.identifier("call"));
            node.arguments.unshift(getThisReference());
            return true;
          }
        };

        /**
         * [Please add a description.]
         */

        ReplaceSupers.prototype.specHandleAssignmentExpression = function specHandleAssignmentExpression(ref, path, node, getThisReference) {
          if (node.operator === "=") {
            // super.name = "val"; -> _set(Object.getPrototypeOf(objectRef.prototype), "name", this);
            return this.setSuperProperty(node.left.property, node.right, node.left.computed, getThisReference());
          } else {
            // super.age += 2; -> var _ref = super.age; super.age = _ref + 2;
            ref = ref || path.scope.generateUidIdentifier("ref");
            return [t.variableDeclaration("var", [t.variableDeclarator(ref, node.left)]), t.expressionStatement(t.assignmentExpression("=", node.left, t.binaryExpression(node.operator[0], ref, node.right)))];
          }
        };

        /**
         * [Please add a description.]
         */

        ReplaceSupers.prototype.specHandle = function specHandle(path, getThisReference) {
          var methodNode = this.methodNode;
          var property;
          var computed;
          var args;
          var thisReference;

          var parent = path.parent;
          var node = path.node;

          if (isIllegalBareSuper(node, parent)) {
            throw path.errorWithNode(messages.get("classesIllegalBareSuper"));
          }

          if (t.isCallExpression(node)) {
            var callee = node.callee;
            if (t.isSuper(callee)) {
              // super(); -> _get(Object.getPrototypeOf(objectRef), "MethodName", this).call(this);
              property = methodNode.key;
              computed = methodNode.computed;
              args = node.arguments;

              // bare `super` call is illegal inside non-constructors
              //  - https://esdiscuss.org/topic/super-call-in-methods
              //  - https://twitter.com/wycats/status/544553184396836864
              if (methodNode.key.name !== "constructor" || !this.inClass) {
                var methodName = methodNode.key.name || "METHOD_NAME";
                throw this.file.errorWithNode(node, messages.get("classesIllegalSuperCall", methodName));
              }
            } else if (isMemberExpressionSuper(callee)) {
              // super.test(); -> _get(Object.getPrototypeOf(objectRef.prototype), "test", this).call(this);
              property = callee.property;
              computed = callee.computed;
              args = node.arguments;
            }
          } else if (t.isMemberExpression(node) && t.isSuper(node.object)) {
            // super.name; -> _get(Object.getPrototypeOf(objectRef.prototype), "name", this);
            property = node.property;
            computed = node.computed;
          } else if (t.isUpdateExpression(node) && isMemberExpressionSuper(node.argument)) {
            var binary = t.binaryExpression(node.operator[0], node.argument, t.literal(1));
            if (node.prefix) {
              // ++super.foo; -> super.foo += 1;
              return this.specHandleAssignmentExpression(null, path, binary, getThisReference);
            } else {
              // super.foo++; -> var _ref = super.foo; super.foo = _ref + 1;
              var ref = path.scope.generateUidIdentifier("ref");
              return this.specHandleAssignmentExpression(ref, path, binary, getThisReference).concat(t.expressionStatement(ref));
            }
          } else if (t.isAssignmentExpression(node) && isMemberExpressionSuper(node.left)) {
            return this.specHandleAssignmentExpression(null, path, node, getThisReference);
          }

          if (!property) return;

          thisReference = getThisReference();
          var superProperty = this.getSuperProperty(property, computed, thisReference);
          if (args) {
            if (args.length === 1 && t.isSpreadElement(args[0])) {
              // super(...arguments);
              return t.callExpression(t.memberExpression(superProperty, t.identifier("apply")), [thisReference, args[0].argument]);
            } else {
              return t.callExpression(t.memberExpression(superProperty, t.identifier("call")), [thisReference].concat(args));
            }
          } else {
            return superProperty;
          }
        };

        return ReplaceSupers;
      }();

      exports["default"] = ReplaceSupers;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vaGVscGVycy9yZXBsYWNlLXN1cGVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQUtBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7QUFJQSxXQUFTLGVBQVQsQ0FBeUIsUUFBekIsRUFBbUMsV0FBbkMsRUFBZ0Q7QUFBRSxRQUFJLEVBQUUsb0JBQW9CLFdBQXBCLENBQUYsRUFBb0M7QUFBRSxZQUFNLElBQUksU0FBSixDQUFjLG1DQUFkLENBQU4sQ0FBRjtLQUF4QztHQUFsRDs7Ozs7O0FBY0EsV0FBUyxrQkFBVCxDQUE0QixJQUE1QixFQUFrQyxNQUFsQyxFQUEwQztBQUN4QyxRQUFJLENBQUMsRUFBRSxPQUFGLENBQVUsSUFBVixDQUFELEVBQWtCLE9BQU8sS0FBUCxDQUF0QjtBQUNBLFFBQUksRUFBRSxrQkFBRixDQUFxQixNQUFyQixFQUE2QixFQUFFLFVBQVUsS0FBVixFQUEvQixDQUFKLEVBQXVELE9BQU8sS0FBUCxDQUF2RDtBQUNBLFFBQUksRUFBRSxnQkFBRixDQUFtQixNQUFuQixFQUEyQixFQUFFLFFBQVEsSUFBUixF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MkU7QUF5RC9FLGNBQUksSUFBSixFQUFVO0FBQ1IsZ0JBQUksS0FBSyxNQUFMLEtBQWdCLENBQWhCLElBQXFCLEVBQUUsZUFBRixDQUFrQixLQUFLLENBQUwsQ0FBbEIsQ0FBckIsRUFBaUQ7O0FBRW5ELHFCQUFPLEVBQUUsY0FBRixDQUFpQixFQUFFLGdCQUFGLENBQW1CLGFBQW5CLEVBQWtDLEVBQUUsVUFBRixDQUFhLE9BQWIsQ0FBbEMsQ0FBakIsRUFBMkUsQ0FBQyxhQUFELEVBQWdCLEtBQUssQ0FBTCxFQUFRLFFBQVIsQ0FBM0YsQ0FBUCxDQUZtRDthQUFyRCxNQUdPO0FBQ0wscUJBQU8sRUFBRSxjQUFGLENBQWlCLEVBQUUsZ0JBQUYsQ0FBbUIsYUFBbkIsRUFBa0MsRUFBRSxVQUFGLENBQWEsTUFBYixDQUFsQyxDQUFqQixFQUEwRSxDQUFDLGFBQUQsRUFBZ0IsTUFBaEIsQ0FBdUIsSUFBdkIsQ0FBMUUsQ0FBUCxDQURLO2FBSFA7V0FERixNQU9PO0FBQ0wsbUJBQU8sYUFBUCxDQURLO1dBUFA7U0F6RG1DLENBdEtOOztBQTJPL0IsZUFBTyxhQUFQLENBM08rQjtPQUFaOztBQThPckIsY0FBUSxTQUFSLElBQXFCLGFBQXJCO0FBQ0EsYUFBTyxPQUFQLEdBQWlCLFFBQVEsU0FBUixDQUFqQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYW5zZm9ybWF0aW9uL2hlbHBlcnMvcmVwbGFjZS1zdXBlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBfbWVzc2FnZXMgPSByZXF1aXJlKFwiLi4vLi4vbWVzc2FnZXNcIik7XG5cbnZhciBtZXNzYWdlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9tZXNzYWdlcyk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBpc0lsbGVnYWxCYXJlU3VwZXIobm9kZSwgcGFyZW50KSB7XG4gIGlmICghdC5pc1N1cGVyKG5vZGUpKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0LmlzTWVtYmVyRXhwcmVzc2lvbihwYXJlbnQsIHsgY29tcHV0ZWQ6IGZhbHNlIH0pKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0LmlzQ2FsbEV4cHJlc3Npb24ocGFyZW50LCB7IGNhbGxlZTogbm9kZSB9KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBpc01lbWJlckV4cHJlc3Npb25TdXBlcihub2RlKSB7XG4gIHJldHVybiB0LmlzTWVtYmVyRXhwcmVzc2lvbihub2RlKSAmJiB0LmlzU3VwZXIobm9kZS5vYmplY3QpO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciB2aXNpdG9yID0ge1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgZW50ZXI6IGZ1bmN0aW9uIGVudGVyKG5vZGUsIHBhcmVudCwgc2NvcGUsIHN0YXRlKSB7XG4gICAgdmFyIHRvcExldmVsID0gc3RhdGUudG9wTGV2ZWw7XG4gICAgdmFyIHNlbGYgPSBzdGF0ZS5zZWxmO1xuXG4gICAgaWYgKHQuaXNGdW5jdGlvbihub2RlKSAmJiAhdC5pc0Fycm93RnVuY3Rpb25FeHByZXNzaW9uKG5vZGUpKSB7XG4gICAgICAvLyB3ZSBuZWVkIHRvIGNhbGwgdHJhdmVyc2VMZXZlbCBhZ2FpbiBzbyB3ZSdyZSBjb250ZXh0IGF3YXJlXG4gICAgICBzZWxmLnRyYXZlcnNlTGV2ZWwodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHRoaXMuc2tpcCgpO1xuICAgIH1cblxuICAgIGlmICh0LmlzUHJvcGVydHkobm9kZSwgeyBtZXRob2Q6IHRydWUgfSkgfHwgdC5pc01ldGhvZERlZmluaXRpb24obm9kZSkpIHtcbiAgICAgIC8vIGJyZWFrIG9uIG9iamVjdCBtZXRob2RzXG4gICAgICByZXR1cm4gdGhpcy5za2lwKCk7XG4gICAgfVxuXG4gICAgdmFyIGdldFRoaXNSZWZlcmVuY2UgPSB0b3BMZXZlbCA/XG4gICAgLy8gdG9wIGxldmVsIHNvIGB0aGlzYCBpcyB0aGUgaW5zdGFuY2VcbiAgICB0LnRoaXNFeHByZXNzaW9uIDpcbiAgICAvLyBub3QgaW4gdGhlIHRvcCBsZXZlbCBzbyB3ZSBuZWVkIHRvIGNyZWF0ZSBhIHJlZmVyZW5jZVxuICAgIHNlbGYuZ2V0VGhpc1JlZmVyZW5jZS5iaW5kKHNlbGYpO1xuXG4gICAgdmFyIGNhbGxiYWNrID0gc2VsZi5zcGVjSGFuZGxlO1xuICAgIGlmIChzZWxmLmlzTG9vc2UpIGNhbGxiYWNrID0gc2VsZi5sb29zZUhhbmRsZTtcbiAgICB2YXIgcmVzdWx0ID0gY2FsbGJhY2suY2FsbChzZWxmLCB0aGlzLCBnZXRUaGlzUmVmZXJlbmNlKTtcbiAgICBpZiAocmVzdWx0KSB0aGlzLmhhc1N1cGVyID0gdHJ1ZTtcbiAgICBpZiAocmVzdWx0ID09PSB0cnVlKSByZXR1cm47XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgUmVwbGFjZVN1cGVycyA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFJlcGxhY2VTdXBlcnMob3B0cykge1xuICAgIHZhciBpbkNsYXNzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBhcmd1bWVudHNbMV07XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVwbGFjZVN1cGVycyk7XG5cbiAgICB0aGlzLnRvcExldmVsVGhpc1JlZmVyZW5jZSA9IG9wdHMudG9wTGV2ZWxUaGlzUmVmZXJlbmNlO1xuICAgIHRoaXMubWV0aG9kUGF0aCA9IG9wdHMubWV0aG9kUGF0aDtcbiAgICB0aGlzLm1ldGhvZE5vZGUgPSBvcHRzLm1ldGhvZE5vZGU7XG4gICAgdGhpcy5zdXBlclJlZiA9IG9wdHMuc3VwZXJSZWY7XG4gICAgdGhpcy5pc1N0YXRpYyA9IG9wdHMuaXNTdGF0aWM7XG4gICAgdGhpcy5oYXNTdXBlciA9IGZhbHNlO1xuICAgIHRoaXMuaW5DbGFzcyA9IGluQ2xhc3M7XG4gICAgdGhpcy5pc0xvb3NlID0gb3B0cy5pc0xvb3NlO1xuICAgIHRoaXMuc2NvcGUgPSBvcHRzLnNjb3BlO1xuICAgIHRoaXMuZmlsZSA9IG9wdHMuZmlsZTtcbiAgICB0aGlzLm9wdHMgPSBvcHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBSZXBsYWNlU3VwZXJzLnByb3RvdHlwZS5nZXRPYmplY3RSZWYgPSBmdW5jdGlvbiBnZXRPYmplY3RSZWYoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0cy5vYmplY3RSZWYgfHwgdGhpcy5vcHRzLmdldE9iamVjdFJlZigpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3VwZXIgY2xhc3MgdmFsdWUgb2YgdGhlIG5hbWVkIHByb3BlcnR5LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiAgIF9zZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKENMQVNTLnByb3RvdHlwZSksIFwiTUVUSE9EXCIsIFwiVkFMVUVcIiwgdGhpcylcbiAgICpcbiAgICovXG5cbiAgUmVwbGFjZVN1cGVycy5wcm90b3R5cGUuc2V0U3VwZXJQcm9wZXJ0eSA9IGZ1bmN0aW9uIHNldFN1cGVyUHJvcGVydHkocHJvcGVydHksIHZhbHVlLCBpc0NvbXB1dGVkLCB0aGlzRXhwcmVzc2lvbikge1xuICAgIHJldHVybiB0LmNhbGxFeHByZXNzaW9uKHRoaXMuZmlsZS5hZGRIZWxwZXIoXCJzZXRcIiksIFt0LmNhbGxFeHByZXNzaW9uKHQubWVtYmVyRXhwcmVzc2lvbih0LmlkZW50aWZpZXIoXCJPYmplY3RcIiksIHQuaWRlbnRpZmllcihcImdldFByb3RvdHlwZU9mXCIpKSwgW3RoaXMuaXNTdGF0aWMgPyB0aGlzLmdldE9iamVjdFJlZigpIDogdC5tZW1iZXJFeHByZXNzaW9uKHRoaXMuZ2V0T2JqZWN0UmVmKCksIHQuaWRlbnRpZmllcihcInByb3RvdHlwZVwiKSldKSwgaXNDb21wdXRlZCA/IHByb3BlcnR5IDogdC5saXRlcmFsKHByb3BlcnR5Lm5hbWUpLCB2YWx1ZSwgdGhpc0V4cHJlc3Npb25dKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0cyBhIG5vZGUgcmVwcmVzZW50aW5nIHRoZSBzdXBlciBjbGFzcyB2YWx1ZSBvZiB0aGUgbmFtZWQgcHJvcGVydHkuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ0xBU1MucHJvdG90eXBlKSwgXCJNRVRIT0RcIiwgdGhpcylcbiAgICpcbiAgICovXG5cbiAgUmVwbGFjZVN1cGVycy5wcm90b3R5cGUuZ2V0U3VwZXJQcm9wZXJ0eSA9IGZ1bmN0aW9uIGdldFN1cGVyUHJvcGVydHkocHJvcGVydHksIGlzQ29tcHV0ZWQsIHRoaXNFeHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIHQuY2FsbEV4cHJlc3Npb24odGhpcy5maWxlLmFkZEhlbHBlcihcImdldFwiKSwgW3QuY2FsbEV4cHJlc3Npb24odC5tZW1iZXJFeHByZXNzaW9uKHQuaWRlbnRpZmllcihcIk9iamVjdFwiKSwgdC5pZGVudGlmaWVyKFwiZ2V0UHJvdG90eXBlT2ZcIikpLCBbdGhpcy5pc1N0YXRpYyA/IHRoaXMuZ2V0T2JqZWN0UmVmKCkgOiB0Lm1lbWJlckV4cHJlc3Npb24odGhpcy5nZXRPYmplY3RSZWYoKSwgdC5pZGVudGlmaWVyKFwicHJvdG90eXBlXCIpKV0pLCBpc0NvbXB1dGVkID8gcHJvcGVydHkgOiB0LmxpdGVyYWwocHJvcGVydHkubmFtZSksIHRoaXNFeHByZXNzaW9uXSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBSZXBsYWNlU3VwZXJzLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZSgpIHtcbiAgICB0aGlzLnRyYXZlcnNlTGV2ZWwodGhpcy5tZXRob2RQYXRoLmdldChcInZhbHVlXCIpLCB0cnVlKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFJlcGxhY2VTdXBlcnMucHJvdG90eXBlLnRyYXZlcnNlTGV2ZWwgPSBmdW5jdGlvbiB0cmF2ZXJzZUxldmVsKHBhdGgsIHRvcExldmVsKSB7XG4gICAgdmFyIHN0YXRlID0geyBzZWxmOiB0aGlzLCB0b3BMZXZlbDogdG9wTGV2ZWwgfTtcbiAgICBwYXRoLnRyYXZlcnNlKHZpc2l0b3IsIHN0YXRlKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFJlcGxhY2VTdXBlcnMucHJvdG90eXBlLmdldFRoaXNSZWZlcmVuY2UgPSBmdW5jdGlvbiBnZXRUaGlzUmVmZXJlbmNlKCkge1xuICAgIGlmICh0aGlzLnRvcExldmVsVGhpc1JlZmVyZW5jZSkge1xuICAgICAgcmV0dXJuIHRoaXMudG9wTGV2ZWxUaGlzUmVmZXJlbmNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcmVmID0gdGhpcy50b3BMZXZlbFRoaXNSZWZlcmVuY2UgPSB0aGlzLnNjb3BlLmdlbmVyYXRlVWlkSWRlbnRpZmllcihcInRoaXNcIik7XG4gICAgICB0aGlzLm1ldGhvZE5vZGUudmFsdWUuYm9keS5ib2R5LnVuc2hpZnQodC52YXJpYWJsZURlY2xhcmF0aW9uKFwidmFyXCIsIFt0LnZhcmlhYmxlRGVjbGFyYXRvcih0aGlzLnRvcExldmVsVGhpc1JlZmVyZW5jZSwgdC50aGlzRXhwcmVzc2lvbigpKV0pKTtcbiAgICAgIHJldHVybiByZWY7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgUmVwbGFjZVN1cGVycy5wcm90b3R5cGUuZ2V0TG9vc2VTdXBlclByb3BlcnR5ID0gZnVuY3Rpb24gZ2V0TG9vc2VTdXBlclByb3BlcnR5KGlkLCBwYXJlbnQpIHtcbiAgICB2YXIgbWV0aG9kTm9kZSA9IHRoaXMubWV0aG9kTm9kZTtcbiAgICB2YXIgbWV0aG9kTmFtZSA9IG1ldGhvZE5vZGUua2V5O1xuICAgIHZhciBzdXBlclJlZiA9IHRoaXMuc3VwZXJSZWYgfHwgdC5pZGVudGlmaWVyKFwiRnVuY3Rpb25cIik7XG5cbiAgICBpZiAocGFyZW50LnByb3BlcnR5ID09PSBpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAodC5pc0NhbGxFeHByZXNzaW9uKHBhcmVudCwgeyBjYWxsZWU6IGlkIH0pKSB7XG4gICAgICAvLyBzdXBlcigpOyAtPiBvYmplY3RSZWYucHJvdG90eXBlLk1ldGhvZE5hbWUuY2FsbCh0aGlzKTtcbiAgICAgIHBhcmVudC5hcmd1bWVudHMudW5zaGlmdCh0LnRoaXNFeHByZXNzaW9uKCkpO1xuXG4gICAgICBpZiAobWV0aG9kTmFtZS5uYW1lID09PSBcImNvbnN0cnVjdG9yXCIpIHtcbiAgICAgICAgLy8gY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cbiAgICAgICAgaWYgKHBhcmVudC5hcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHQuaXNTcHJlYWRFbGVtZW50KHBhcmVudC5hcmd1bWVudHNbMV0pICYmIHQuaXNJZGVudGlmaWVyKHBhcmVudC5hcmd1bWVudHNbMV0uYXJndW1lbnQsIHsgbmFtZTogXCJhcmd1bWVudHNcIiB9KSkge1xuICAgICAgICAgIC8vIHNwZWNpYWwgY2FzZSBzaW5nbGUgYXJndW1lbnRzIHNwcmVhZFxuICAgICAgICAgIHBhcmVudC5hcmd1bWVudHNbMV0gPSBwYXJlbnQuYXJndW1lbnRzWzFdLmFyZ3VtZW50O1xuICAgICAgICAgIHJldHVybiB0Lm1lbWJlckV4cHJlc3Npb24oc3VwZXJSZWYsIHQuaWRlbnRpZmllcihcImFwcGx5XCIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdC5tZW1iZXJFeHByZXNzaW9uKHN1cGVyUmVmLCB0LmlkZW50aWZpZXIoXCJjYWxsXCIpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWQgPSBzdXBlclJlZjtcblxuICAgICAgICAvLyBmb28oKSB7IHN1cGVyKCk7IH1cbiAgICAgICAgaWYgKCFtZXRob2ROb2RlW1wic3RhdGljXCJdKSB7XG4gICAgICAgICAgaWQgPSB0Lm1lbWJlckV4cHJlc3Npb24oaWQsIHQuaWRlbnRpZmllcihcInByb3RvdHlwZVwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZCA9IHQubWVtYmVyRXhwcmVzc2lvbihpZCwgbWV0aG9kTmFtZSwgbWV0aG9kTm9kZS5jb21wdXRlZCk7XG4gICAgICAgIHJldHVybiB0Lm1lbWJlckV4cHJlc3Npb24oaWQsIHQuaWRlbnRpZmllcihcImNhbGxcIikpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodC5pc01lbWJlckV4cHJlc3Npb24ocGFyZW50KSAmJiAhbWV0aG9kTm9kZVtcInN0YXRpY1wiXSkge1xuICAgICAgLy8gc3VwZXIudGVzdCAtPiBvYmplY3RSZWYucHJvdG90eXBlLnRlc3RcbiAgICAgIHJldHVybiB0Lm1lbWJlckV4cHJlc3Npb24oc3VwZXJSZWYsIHQuaWRlbnRpZmllcihcInByb3RvdHlwZVwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdXBlclJlZjtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBSZXBsYWNlU3VwZXJzLnByb3RvdHlwZS5sb29zZUhhbmRsZSA9IGZ1bmN0aW9uIGxvb3NlSGFuZGxlKHBhdGgsIGdldFRoaXNSZWZlcmVuY2UpIHtcbiAgICB2YXIgbm9kZSA9IHBhdGgubm9kZTtcbiAgICBpZiAocGF0aC5pc1N1cGVyKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldExvb3NlU3VwZXJQcm9wZXJ0eShub2RlLCBwYXRoLnBhcmVudCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmlzQ2FsbEV4cHJlc3Npb24oKSkge1xuICAgICAgdmFyIGNhbGxlZSA9IG5vZGUuY2FsbGVlO1xuICAgICAgaWYgKCF0LmlzTWVtYmVyRXhwcmVzc2lvbihjYWxsZWUpKSByZXR1cm47XG4gICAgICBpZiAoIXQuaXNTdXBlcihjYWxsZWUub2JqZWN0KSkgcmV0dXJuO1xuXG4gICAgICAvLyBzdXBlci50ZXN0KCk7IC0+IG9iamVjdFJlZi5wcm90b3R5cGUuTWV0aG9kTmFtZS5jYWxsKHRoaXMpO1xuICAgICAgdC5hcHBlbmRUb01lbWJlckV4cHJlc3Npb24oY2FsbGVlLCB0LmlkZW50aWZpZXIoXCJjYWxsXCIpKTtcbiAgICAgIG5vZGUuYXJndW1lbnRzLnVuc2hpZnQoZ2V0VGhpc1JlZmVyZW5jZSgpKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFJlcGxhY2VTdXBlcnMucHJvdG90eXBlLnNwZWNIYW5kbGVBc3NpZ25tZW50RXhwcmVzc2lvbiA9IGZ1bmN0aW9uIHNwZWNIYW5kbGVBc3NpZ25tZW50RXhwcmVzc2lvbihyZWYsIHBhdGgsIG5vZGUsIGdldFRoaXNSZWZlcmVuY2UpIHtcbiAgICBpZiAobm9kZS5vcGVyYXRvciA9PT0gXCI9XCIpIHtcbiAgICAgIC8vIHN1cGVyLm5hbWUgPSBcInZhbFwiOyAtPiBfc2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3RSZWYucHJvdG90eXBlKSwgXCJuYW1lXCIsIHRoaXMpO1xuICAgICAgcmV0dXJuIHRoaXMuc2V0U3VwZXJQcm9wZXJ0eShub2RlLmxlZnQucHJvcGVydHksIG5vZGUucmlnaHQsIG5vZGUubGVmdC5jb21wdXRlZCwgZ2V0VGhpc1JlZmVyZW5jZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc3VwZXIuYWdlICs9IDI7IC0+IHZhciBfcmVmID0gc3VwZXIuYWdlOyBzdXBlci5hZ2UgPSBfcmVmICsgMjtcbiAgICAgIHJlZiA9IHJlZiB8fCBwYXRoLnNjb3BlLmdlbmVyYXRlVWlkSWRlbnRpZmllcihcInJlZlwiKTtcbiAgICAgIHJldHVybiBbdC52YXJpYWJsZURlY2xhcmF0aW9uKFwidmFyXCIsIFt0LnZhcmlhYmxlRGVjbGFyYXRvcihyZWYsIG5vZGUubGVmdCldKSwgdC5leHByZXNzaW9uU3RhdGVtZW50KHQuYXNzaWdubWVudEV4cHJlc3Npb24oXCI9XCIsIG5vZGUubGVmdCwgdC5iaW5hcnlFeHByZXNzaW9uKG5vZGUub3BlcmF0b3JbMF0sIHJlZiwgbm9kZS5yaWdodCkpKV07XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgUmVwbGFjZVN1cGVycy5wcm90b3R5cGUuc3BlY0hhbmRsZSA9IGZ1bmN0aW9uIHNwZWNIYW5kbGUocGF0aCwgZ2V0VGhpc1JlZmVyZW5jZSkge1xuICAgIHZhciBtZXRob2ROb2RlID0gdGhpcy5tZXRob2ROb2RlO1xuICAgIHZhciBwcm9wZXJ0eTtcbiAgICB2YXIgY29tcHV0ZWQ7XG4gICAgdmFyIGFyZ3M7XG4gICAgdmFyIHRoaXNSZWZlcmVuY2U7XG5cbiAgICB2YXIgcGFyZW50ID0gcGF0aC5wYXJlbnQ7XG4gICAgdmFyIG5vZGUgPSBwYXRoLm5vZGU7XG5cbiAgICBpZiAoaXNJbGxlZ2FsQmFyZVN1cGVyKG5vZGUsIHBhcmVudCkpIHtcbiAgICAgIHRocm93IHBhdGguZXJyb3JXaXRoTm9kZShtZXNzYWdlcy5nZXQoXCJjbGFzc2VzSWxsZWdhbEJhcmVTdXBlclwiKSk7XG4gICAgfVxuXG4gICAgaWYgKHQuaXNDYWxsRXhwcmVzc2lvbihub2RlKSkge1xuICAgICAgdmFyIGNhbGxlZSA9IG5vZGUuY2FsbGVlO1xuICAgICAgaWYgKHQuaXNTdXBlcihjYWxsZWUpKSB7XG4gICAgICAgIC8vIHN1cGVyKCk7IC0+IF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdFJlZiksIFwiTWV0aG9kTmFtZVwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgICAgICBwcm9wZXJ0eSA9IG1ldGhvZE5vZGUua2V5O1xuICAgICAgICBjb21wdXRlZCA9IG1ldGhvZE5vZGUuY29tcHV0ZWQ7XG4gICAgICAgIGFyZ3MgPSBub2RlLmFyZ3VtZW50cztcblxuICAgICAgICAvLyBiYXJlIGBzdXBlcmAgY2FsbCBpcyBpbGxlZ2FsIGluc2lkZSBub24tY29uc3RydWN0b3JzXG4gICAgICAgIC8vICAtIGh0dHBzOi8vZXNkaXNjdXNzLm9yZy90b3BpYy9zdXBlci1jYWxsLWluLW1ldGhvZHNcbiAgICAgICAgLy8gIC0gaHR0cHM6Ly90d2l0dGVyLmNvbS93eWNhdHMvc3RhdHVzLzU0NDU1MzE4NDM5NjgzNjg2NFxuICAgICAgICBpZiAobWV0aG9kTm9kZS5rZXkubmFtZSAhPT0gXCJjb25zdHJ1Y3RvclwiIHx8ICF0aGlzLmluQ2xhc3MpIHtcbiAgICAgICAgICB2YXIgbWV0aG9kTmFtZSA9IG1ldGhvZE5vZGUua2V5Lm5hbWUgfHwgXCJNRVRIT0RfTkFNRVwiO1xuICAgICAgICAgIHRocm93IHRoaXMuZmlsZS5lcnJvcldpdGhOb2RlKG5vZGUsIG1lc3NhZ2VzLmdldChcImNsYXNzZXNJbGxlZ2FsU3VwZXJDYWxsXCIsIG1ldGhvZE5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc01lbWJlckV4cHJlc3Npb25TdXBlcihjYWxsZWUpKSB7XG4gICAgICAgIC8vIHN1cGVyLnRlc3QoKTsgLT4gX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0UmVmLnByb3RvdHlwZSksIFwidGVzdFwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgICAgICBwcm9wZXJ0eSA9IGNhbGxlZS5wcm9wZXJ0eTtcbiAgICAgICAgY29tcHV0ZWQgPSBjYWxsZWUuY29tcHV0ZWQ7XG4gICAgICAgIGFyZ3MgPSBub2RlLmFyZ3VtZW50cztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHQuaXNNZW1iZXJFeHByZXNzaW9uKG5vZGUpICYmIHQuaXNTdXBlcihub2RlLm9iamVjdCkpIHtcbiAgICAgIC8vIHN1cGVyLm5hbWU7IC0+IF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdFJlZi5wcm90b3R5cGUpLCBcIm5hbWVcIiwgdGhpcyk7XG4gICAgICBwcm9wZXJ0eSA9IG5vZGUucHJvcGVydHk7XG4gICAgICBjb21wdXRlZCA9IG5vZGUuY29tcHV0ZWQ7XG4gICAgfSBlbHNlIGlmICh0LmlzVXBkYXRlRXhwcmVzc2lvbihub2RlKSAmJiBpc01lbWJlckV4cHJlc3Npb25TdXBlcihub2RlLmFyZ3VtZW50KSkge1xuICAgICAgdmFyIGJpbmFyeSA9IHQuYmluYXJ5RXhwcmVzc2lvbihub2RlLm9wZXJhdG9yWzBdLCBub2RlLmFyZ3VtZW50LCB0LmxpdGVyYWwoMSkpO1xuICAgICAgaWYgKG5vZGUucHJlZml4KSB7XG4gICAgICAgIC8vICsrc3VwZXIuZm9vOyAtPiBzdXBlci5mb28gKz0gMTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BlY0hhbmRsZUFzc2lnbm1lbnRFeHByZXNzaW9uKG51bGwsIHBhdGgsIGJpbmFyeSwgZ2V0VGhpc1JlZmVyZW5jZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzdXBlci5mb28rKzsgLT4gdmFyIF9yZWYgPSBzdXBlci5mb287IHN1cGVyLmZvbyA9IF9yZWYgKyAxO1xuICAgICAgICB2YXIgcmVmID0gcGF0aC5zY29wZS5nZW5lcmF0ZVVpZElkZW50aWZpZXIoXCJyZWZcIik7XG4gICAgICAgIHJldHVybiB0aGlzLnNwZWNIYW5kbGVBc3NpZ25tZW50RXhwcmVzc2lvbihyZWYsIHBhdGgsIGJpbmFyeSwgZ2V0VGhpc1JlZmVyZW5jZSkuY29uY2F0KHQuZXhwcmVzc2lvblN0YXRlbWVudChyZWYpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHQuaXNBc3NpZ25tZW50RXhwcmVzc2lvbihub2RlKSAmJiBpc01lbWJlckV4cHJlc3Npb25TdXBlcihub2RlLmxlZnQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zcGVjSGFuZGxlQXNzaWdubWVudEV4cHJlc3Npb24obnVsbCwgcGF0aCwgbm9kZSwgZ2V0VGhpc1JlZmVyZW5jZSk7XG4gICAgfVxuXG4gICAgaWYgKCFwcm9wZXJ0eSkgcmV0dXJuO1xuXG4gICAgdGhpc1JlZmVyZW5jZSA9IGdldFRoaXNSZWZlcmVuY2UoKTtcbiAgICB2YXIgc3VwZXJQcm9wZXJ0eSA9IHRoaXMuZ2V0U3VwZXJQcm9wZXJ0eShwcm9wZXJ0eSwgY29tcHV0ZWQsIHRoaXNSZWZlcmVuY2UpO1xuICAgIGlmIChhcmdzKSB7XG4gICAgICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgdC5pc1NwcmVhZEVsZW1lbnQoYXJnc1swXSkpIHtcbiAgICAgICAgLy8gc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHQuY2FsbEV4cHJlc3Npb24odC5tZW1iZXJFeHByZXNzaW9uKHN1cGVyUHJvcGVydHksIHQuaWRlbnRpZmllcihcImFwcGx5XCIpKSwgW3RoaXNSZWZlcmVuY2UsIGFyZ3NbMF0uYXJndW1lbnRdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0LmNhbGxFeHByZXNzaW9uKHQubWVtYmVyRXhwcmVzc2lvbihzdXBlclByb3BlcnR5LCB0LmlkZW50aWZpZXIoXCJjYWxsXCIpKSwgW3RoaXNSZWZlcmVuY2VdLmNvbmNhdChhcmdzKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdXBlclByb3BlcnR5O1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gUmVwbGFjZVN1cGVycztcbn0pKCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUmVwbGFjZVN1cGVycztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
