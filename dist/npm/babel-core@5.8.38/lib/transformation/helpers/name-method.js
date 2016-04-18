/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _getFunctionArity, _getFunctionArity2, _util, util, _types, t, visitor, wrap, visit;

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

  /**
   * [Please add a description.]
   */

  function visitIdentifier(context, node, scope, state) {
    // check if this node matches our function id
    if (node.name !== state.name) return;

    // check that we don't have a local variable declared as that removes the need
    // for the wrapper
    var localDeclar = scope.getBindingIdentifier(state.name);
    if (localDeclar !== state.outerDeclar) return;

    state.selfReference = true;
    context.stop();
  }

  /**
   * [Please add a description.]
   */

  /**
   * [Please add a description.]
   */

  function custom(node, id, scope) {
    var state = visit(node, id.name, scope);
    return wrap(state, node, id, scope);
  }

  /**
   * [Please add a description.]
   */

  function property(node, file, scope) {
    var key = t.toComputedKey(node, node.key);
    if (!t.isLiteral(key)) return; // we can't set a function id with this

    var name = t.toBindingIdentifierName(key.value);
    var id = t.identifier(name);

    var method = node.value;
    var state = visit(method, name, scope);
    node.value = wrap(state, method, id, scope) || method;
  }

  /**
   * [Please add a description.]
   */

  function bare(node, parent, scope) {
    // has an `id` so we don't need to infer one
    if (node.id) return;

    var id;
    if (t.isProperty(parent) && parent.kind === "init" && (!parent.computed || t.isLiteral(parent.key))) {
      // { foo() {} };
      id = parent.key;
    } else if (t.isVariableDeclarator(parent)) {
      // var foo = function () {};
      id = parent.id;

      if (t.isIdentifier(id)) {
        var binding = scope.parent.getBinding(id.name);
        if (binding && binding.constant && scope.getBinding(id.name) === binding) {
          // always going to reference this method
          node.id = id;
          return;
        }
      }
    } else {
      return;
    }

    var name;
    if (t.isLiteral(id)) {
      name = id.value;
    } else if (t.isIdentifier(id)) {
      name = id.name;
    } else {
      return;
    }

    name = t.toBindingIdentifierName(name);
    id = t.identifier(name);

    var state = visit(node, name, scope);
    return wrap(state, node, id, scope);
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.custom = custom;
      exports.property = property;
      exports.bare = bare;_getFunctionArity = require("./get-function-arity");
      _getFunctionArity2 = _interopRequireDefault(_getFunctionArity);
      _util = require("../../util");
      util = _interopRequireWildcard(_util);
      _types = require("../../types");
      t = _interopRequireWildcard(_types);
      visitor = {

        /**
         * [Please add a description.]
         */

        ReferencedIdentifier: function ReferencedIdentifier(node, parent, scope, state) {
          visitIdentifier(this, node, scope, state);
        },

        /**
         * [Please add a description.]
         */

        BindingIdentifier: function BindingIdentifier(node, parent, scope, state) {
          visitIdentifier(this, node, scope, state);
        }
      };

      wrap = function wrap(state, method, id, scope) {
        if (state.selfReference) {
          if (scope.hasBinding(id.name) && !scope.hasGlobal(id.name)) {
            // we can just munge the local binding
            scope.rename(id.name);
          } else {
            // need to add a wrapper since we can't change the references
            var templateName = "property-method-assignment-wrapper";
            if (method.generator) templateName += "-generator";
            var template = util.template(templateName, {
              FUNCTION: method,
              FUNCTION_ID: id,
              FUNCTION_KEY: scope.generateUidIdentifier(id.name)
            });
            template.callee._skipModulesRemap = true;

            // shim in dummy params to retain function arity, if you try to read the
            // source then you'll get the original since it's proxied so it's all good
            var params = template.callee.body.body[0].params;
            for (var i = 0, len = _getFunctionArity2["default"](method); i < len; i++) {
              params.push(scope.generateUidIdentifier("x"));
            }

            return template;
          }
        }

        method.id = id;
        scope.getProgramParent().references[id.name] = true;
      };

      visit = function visit(node, name, scope) {
        var state = {
          selfAssignment: false,
          selfReference: false,
          outerDeclar: scope.getBindingIdentifier(name),
          references: [],
          name: name
        };

        // check to see if we have a local binding of the id we're setting inside of
        // the function, this is important as there are caveats associated

        var binding = scope.getOwnBinding(name);

        if (binding) {
          if (binding.kind === "param") {
            // safari will blow up in strict mode with code like:
            //
            //   var t = function t(t) {};
            //
            // with the error:
            //
            //   Cannot declare a parameter named 't' as it shadows the name of a
            //   strict mode function.
            //
            // this isn't to the spec and they've invented this behaviour which is
            // **extremely** annoying so we avoid setting the name if it has a param
            // with the same id
            state.selfReference = true;
          } else {
            // otherwise it's defined somewhere in scope like:
            //
            //   var t = function () {
            //     var t = 2;
            //   };
            //
            // so we can safely just set the id and move along as it shadows the
            // bound function id
          }
        } else if (state.outerDeclar || scope.hasGlobal(name)) {
            scope.traverse(node, visitor, state);
          }

        return state;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vaGVscGVycy9uYW1lLW1ldGhvZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQVFBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7QUFJQSxXQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBSixHQUFpQixHQUF4QixHQUE4QixFQUFFLFdBQVcsR0FBWCxFQUFoQyxDQUFUO0dBQXJDOzs7Ozs7QUFrQkEsV0FBUyxlQUFULENBQXlCLE9BQXpCLEVBQWtDLElBQWxDLEVBQXdDLEtBQXhDLEVBQStDLEtBQS9DLEVBQXNEOztBQUVwRCxRQUFJLEtBQUssSUFBTCxLQUFjLE1BQU0sSUFBTixFQUFZLE9BQTlCOzs7O0FBRm9ELFFBTWhELGNBQWMsTUFBTSxvQkFBTixDQUEyQixNQUFNLElBQU4sQ0FBekMsQ0FOZ0Q7QUFPcEQsUUFBSSxnQkFBZ0IsTUFBTSxXQUFOLEVBQW1CLE9BQXZDOztBQUVBLFVBQU0sYUFBTixHQUFzQixJQUF0QixDQVRvRDtBQVVwRCxZQUFRLElBQVIsR0FWb0Q7R0FBdEQ7Ozs7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QUFOLENBQWUsSUFBZixFQUFxQixPQUFyQixFQUE4QixLQUE5QixFQURtRDtXQUFoRDs7QUFJUCxlQUFPLEtBQVAsQ0EzQzRDO09BQWxDIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vaGVscGVycy9uYW1lLW1ldGhvZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY3VzdG9tID0gY3VzdG9tO1xuZXhwb3J0cy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuZXhwb3J0cy5iYXJlID0gYmFyZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfZ2V0RnVuY3Rpb25Bcml0eSA9IHJlcXVpcmUoXCIuL2dldC1mdW5jdGlvbi1hcml0eVwiKTtcblxudmFyIF9nZXRGdW5jdGlvbkFyaXR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEZ1bmN0aW9uQXJpdHkpO1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKFwiLi4vLi4vdXRpbFwiKTtcblxudmFyIHV0aWwgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbCk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiB2aXNpdElkZW50aWZpZXIoY29udGV4dCwgbm9kZSwgc2NvcGUsIHN0YXRlKSB7XG4gIC8vIGNoZWNrIGlmIHRoaXMgbm9kZSBtYXRjaGVzIG91ciBmdW5jdGlvbiBpZFxuICBpZiAobm9kZS5uYW1lICE9PSBzdGF0ZS5uYW1lKSByZXR1cm47XG5cbiAgLy8gY2hlY2sgdGhhdCB3ZSBkb24ndCBoYXZlIGEgbG9jYWwgdmFyaWFibGUgZGVjbGFyZWQgYXMgdGhhdCByZW1vdmVzIHRoZSBuZWVkXG4gIC8vIGZvciB0aGUgd3JhcHBlclxuICB2YXIgbG9jYWxEZWNsYXIgPSBzY29wZS5nZXRCaW5kaW5nSWRlbnRpZmllcihzdGF0ZS5uYW1lKTtcbiAgaWYgKGxvY2FsRGVjbGFyICE9PSBzdGF0ZS5vdXRlckRlY2xhcikgcmV0dXJuO1xuXG4gIHN0YXRlLnNlbGZSZWZlcmVuY2UgPSB0cnVlO1xuICBjb250ZXh0LnN0b3AoKTtcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgdmlzaXRvciA9IHtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFJlZmVyZW5jZWRJZGVudGlmaWVyOiBmdW5jdGlvbiBSZWZlcmVuY2VkSWRlbnRpZmllcihub2RlLCBwYXJlbnQsIHNjb3BlLCBzdGF0ZSkge1xuICAgIHZpc2l0SWRlbnRpZmllcih0aGlzLCBub2RlLCBzY29wZSwgc3RhdGUpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgQmluZGluZ0lkZW50aWZpZXI6IGZ1bmN0aW9uIEJpbmRpbmdJZGVudGlmaWVyKG5vZGUsIHBhcmVudCwgc2NvcGUsIHN0YXRlKSB7XG4gICAgdmlzaXRJZGVudGlmaWVyKHRoaXMsIG5vZGUsIHNjb3BlLCBzdGF0ZSk7XG4gIH1cbn07XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIHdyYXAgPSBmdW5jdGlvbiB3cmFwKHN0YXRlLCBtZXRob2QsIGlkLCBzY29wZSkge1xuICBpZiAoc3RhdGUuc2VsZlJlZmVyZW5jZSkge1xuICAgIGlmIChzY29wZS5oYXNCaW5kaW5nKGlkLm5hbWUpICYmICFzY29wZS5oYXNHbG9iYWwoaWQubmFtZSkpIHtcbiAgICAgIC8vIHdlIGNhbiBqdXN0IG11bmdlIHRoZSBsb2NhbCBiaW5kaW5nXG4gICAgICBzY29wZS5yZW5hbWUoaWQubmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG5lZWQgdG8gYWRkIGEgd3JhcHBlciBzaW5jZSB3ZSBjYW4ndCBjaGFuZ2UgdGhlIHJlZmVyZW5jZXNcbiAgICAgIHZhciB0ZW1wbGF0ZU5hbWUgPSBcInByb3BlcnR5LW1ldGhvZC1hc3NpZ25tZW50LXdyYXBwZXJcIjtcbiAgICAgIGlmIChtZXRob2QuZ2VuZXJhdG9yKSB0ZW1wbGF0ZU5hbWUgKz0gXCItZ2VuZXJhdG9yXCI7XG4gICAgICB2YXIgdGVtcGxhdGUgPSB1dGlsLnRlbXBsYXRlKHRlbXBsYXRlTmFtZSwge1xuICAgICAgICBGVU5DVElPTjogbWV0aG9kLFxuICAgICAgICBGVU5DVElPTl9JRDogaWQsXG4gICAgICAgIEZVTkNUSU9OX0tFWTogc2NvcGUuZ2VuZXJhdGVVaWRJZGVudGlmaWVyKGlkLm5hbWUpXG4gICAgICB9KTtcbiAgICAgIHRlbXBsYXRlLmNhbGxlZS5fc2tpcE1vZHVsZXNSZW1hcCA9IHRydWU7XG5cbiAgICAgIC8vIHNoaW0gaW4gZHVtbXkgcGFyYW1zIHRvIHJldGFpbiBmdW5jdGlvbiBhcml0eSwgaWYgeW91IHRyeSB0byByZWFkIHRoZVxuICAgICAgLy8gc291cmNlIHRoZW4geW91J2xsIGdldCB0aGUgb3JpZ2luYWwgc2luY2UgaXQncyBwcm94aWVkIHNvIGl0J3MgYWxsIGdvb2RcbiAgICAgIHZhciBwYXJhbXMgPSB0ZW1wbGF0ZS5jYWxsZWUuYm9keS5ib2R5WzBdLnBhcmFtcztcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBfZ2V0RnVuY3Rpb25Bcml0eTJbXCJkZWZhdWx0XCJdKG1ldGhvZCk7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBwYXJhbXMucHVzaChzY29wZS5nZW5lcmF0ZVVpZElkZW50aWZpZXIoXCJ4XCIpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbiAgfVxuXG4gIG1ldGhvZC5pZCA9IGlkO1xuICBzY29wZS5nZXRQcm9ncmFtUGFyZW50KCkucmVmZXJlbmNlc1tpZC5uYW1lXSA9IHRydWU7XG59O1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciB2aXNpdCA9IGZ1bmN0aW9uIHZpc2l0KG5vZGUsIG5hbWUsIHNjb3BlKSB7XG4gIHZhciBzdGF0ZSA9IHtcbiAgICBzZWxmQXNzaWdubWVudDogZmFsc2UsXG4gICAgc2VsZlJlZmVyZW5jZTogZmFsc2UsXG4gICAgb3V0ZXJEZWNsYXI6IHNjb3BlLmdldEJpbmRpbmdJZGVudGlmaWVyKG5hbWUpLFxuICAgIHJlZmVyZW5jZXM6IFtdLFxuICAgIG5hbWU6IG5hbWVcbiAgfTtcblxuICAvLyBjaGVjayB0byBzZWUgaWYgd2UgaGF2ZSBhIGxvY2FsIGJpbmRpbmcgb2YgdGhlIGlkIHdlJ3JlIHNldHRpbmcgaW5zaWRlIG9mXG4gIC8vIHRoZSBmdW5jdGlvbiwgdGhpcyBpcyBpbXBvcnRhbnQgYXMgdGhlcmUgYXJlIGNhdmVhdHMgYXNzb2NpYXRlZFxuXG4gIHZhciBiaW5kaW5nID0gc2NvcGUuZ2V0T3duQmluZGluZyhuYW1lKTtcblxuICBpZiAoYmluZGluZykge1xuICAgIGlmIChiaW5kaW5nLmtpbmQgPT09IFwicGFyYW1cIikge1xuICAgICAgLy8gc2FmYXJpIHdpbGwgYmxvdyB1cCBpbiBzdHJpY3QgbW9kZSB3aXRoIGNvZGUgbGlrZTpcbiAgICAgIC8vXG4gICAgICAvLyAgIHZhciB0ID0gZnVuY3Rpb24gdCh0KSB7fTtcbiAgICAgIC8vXG4gICAgICAvLyB3aXRoIHRoZSBlcnJvcjpcbiAgICAgIC8vXG4gICAgICAvLyAgIENhbm5vdCBkZWNsYXJlIGEgcGFyYW1ldGVyIG5hbWVkICd0JyBhcyBpdCBzaGFkb3dzIHRoZSBuYW1lIG9mIGFcbiAgICAgIC8vICAgc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAvL1xuICAgICAgLy8gdGhpcyBpc24ndCB0byB0aGUgc3BlYyBhbmQgdGhleSd2ZSBpbnZlbnRlZCB0aGlzIGJlaGF2aW91ciB3aGljaCBpc1xuICAgICAgLy8gKipleHRyZW1lbHkqKiBhbm5veWluZyBzbyB3ZSBhdm9pZCBzZXR0aW5nIHRoZSBuYW1lIGlmIGl0IGhhcyBhIHBhcmFtXG4gICAgICAvLyB3aXRoIHRoZSBzYW1lIGlkXG4gICAgICBzdGF0ZS5zZWxmUmVmZXJlbmNlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gb3RoZXJ3aXNlIGl0J3MgZGVmaW5lZCBzb21ld2hlcmUgaW4gc2NvcGUgbGlrZTpcbiAgICAgIC8vXG4gICAgICAvLyAgIHZhciB0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gICAgIHZhciB0ID0gMjtcbiAgICAgIC8vICAgfTtcbiAgICAgIC8vXG4gICAgICAvLyBzbyB3ZSBjYW4gc2FmZWx5IGp1c3Qgc2V0IHRoZSBpZCBhbmQgbW92ZSBhbG9uZyBhcyBpdCBzaGFkb3dzIHRoZVxuICAgICAgLy8gYm91bmQgZnVuY3Rpb24gaWRcbiAgICB9XG4gIH0gZWxzZSBpZiAoc3RhdGUub3V0ZXJEZWNsYXIgfHwgc2NvcGUuaGFzR2xvYmFsKG5hbWUpKSB7XG4gICAgICBzY29wZS50cmF2ZXJzZShub2RlLCB2aXNpdG9yLCBzdGF0ZSk7XG4gICAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gY3VzdG9tKG5vZGUsIGlkLCBzY29wZSkge1xuICB2YXIgc3RhdGUgPSB2aXNpdChub2RlLCBpZC5uYW1lLCBzY29wZSk7XG4gIHJldHVybiB3cmFwKHN0YXRlLCBub2RlLCBpZCwgc2NvcGUpO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIHByb3BlcnR5KG5vZGUsIGZpbGUsIHNjb3BlKSB7XG4gIHZhciBrZXkgPSB0LnRvQ29tcHV0ZWRLZXkobm9kZSwgbm9kZS5rZXkpO1xuICBpZiAoIXQuaXNMaXRlcmFsKGtleSkpIHJldHVybjsgLy8gd2UgY2FuJ3Qgc2V0IGEgZnVuY3Rpb24gaWQgd2l0aCB0aGlzXG5cbiAgdmFyIG5hbWUgPSB0LnRvQmluZGluZ0lkZW50aWZpZXJOYW1lKGtleS52YWx1ZSk7XG4gIHZhciBpZCA9IHQuaWRlbnRpZmllcihuYW1lKTtcblxuICB2YXIgbWV0aG9kID0gbm9kZS52YWx1ZTtcbiAgdmFyIHN0YXRlID0gdmlzaXQobWV0aG9kLCBuYW1lLCBzY29wZSk7XG4gIG5vZGUudmFsdWUgPSB3cmFwKHN0YXRlLCBtZXRob2QsIGlkLCBzY29wZSkgfHwgbWV0aG9kO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIGJhcmUobm9kZSwgcGFyZW50LCBzY29wZSkge1xuICAvLyBoYXMgYW4gYGlkYCBzbyB3ZSBkb24ndCBuZWVkIHRvIGluZmVyIG9uZVxuICBpZiAobm9kZS5pZCkgcmV0dXJuO1xuXG4gIHZhciBpZDtcbiAgaWYgKHQuaXNQcm9wZXJ0eShwYXJlbnQpICYmIHBhcmVudC5raW5kID09PSBcImluaXRcIiAmJiAoIXBhcmVudC5jb21wdXRlZCB8fCB0LmlzTGl0ZXJhbChwYXJlbnQua2V5KSkpIHtcbiAgICAvLyB7IGZvbygpIHt9IH07XG4gICAgaWQgPSBwYXJlbnQua2V5O1xuICB9IGVsc2UgaWYgKHQuaXNWYXJpYWJsZURlY2xhcmF0b3IocGFyZW50KSkge1xuICAgIC8vIHZhciBmb28gPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBpZCA9IHBhcmVudC5pZDtcblxuICAgIGlmICh0LmlzSWRlbnRpZmllcihpZCkpIHtcbiAgICAgIHZhciBiaW5kaW5nID0gc2NvcGUucGFyZW50LmdldEJpbmRpbmcoaWQubmFtZSk7XG4gICAgICBpZiAoYmluZGluZyAmJiBiaW5kaW5nLmNvbnN0YW50ICYmIHNjb3BlLmdldEJpbmRpbmcoaWQubmFtZSkgPT09IGJpbmRpbmcpIHtcbiAgICAgICAgLy8gYWx3YXlzIGdvaW5nIHRvIHJlZmVyZW5jZSB0aGlzIG1ldGhvZFxuICAgICAgICBub2RlLmlkID0gaWQ7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG5hbWU7XG4gIGlmICh0LmlzTGl0ZXJhbChpZCkpIHtcbiAgICBuYW1lID0gaWQudmFsdWU7XG4gIH0gZWxzZSBpZiAodC5pc0lkZW50aWZpZXIoaWQpKSB7XG4gICAgbmFtZSA9IGlkLm5hbWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbmFtZSA9IHQudG9CaW5kaW5nSWRlbnRpZmllck5hbWUobmFtZSk7XG4gIGlkID0gdC5pZGVudGlmaWVyKG5hbWUpO1xuXG4gIHZhciBzdGF0ZSA9IHZpc2l0KG5vZGUsIG5hbWUsIHNjb3BlKTtcbiAgcmV0dXJuIHdyYXAoc3RhdGUsIG5vZGUsIGlkLCBzY29wZSk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
