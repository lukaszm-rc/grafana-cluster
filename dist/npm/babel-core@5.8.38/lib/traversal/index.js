/* */
"format cjs";
"use strict";

System.register([], function (_export, _context3) {
  var _context, _context2, _visitors, visitors, _messages, messages, _lodashCollectionIncludes, _lodashCollectionIncludes2, _types, t, CLEAR_KEYS, clearVisitor;

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

  function traverse(parent, opts, scope, state, parentPath) {
    if (!parent) return;
    if (!opts) opts = {};

    if (!opts.noScope && !scope) {
      if (parent.type !== "Program" && parent.type !== "File") {
        throw new Error(messages.get("traverseNeedsParent", parent.type));
      }
    }

    visitors.explode(opts);

    // array of nodes
    if (Array.isArray(parent)) {
      for (var i = 0; i < parent.length; i++) {
        traverse.node(parent[i], opts, scope, state, parentPath);
      }
    } else {
      traverse.node(parent, opts, scope, state, parentPath);
    }
  }

  /**
   * [Please add a description.]
   */

  function hasBlacklistedType(node, parent, scope, state) {
    if (node.type === state.type) {
      state.has = true;
      this.skip();
    }
  }

  /**
   * [Please add a description.]
   */

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports["default"] = traverse;_context = require("./context");
      _context2 = _interopRequireDefault(_context);
      _visitors = require("./visitors");
      visitors = _interopRequireWildcard(_visitors);
      _messages = require("../messages");
      messages = _interopRequireWildcard(_messages);
      _lodashCollectionIncludes = require("lodash/collection/includes");
      _lodashCollectionIncludes2 = _interopRequireDefault(_lodashCollectionIncludes);
      _types = require("../types");
      t = _interopRequireWildcard(_types);
      traverse.visitors = visitors;
      traverse.verify = visitors.verify;
      traverse.explode = visitors.explode;

      /**
       * [Please add a description.]
       */

      traverse.node = function (node, opts, scope, state, parentPath, skipKeys) {
        var keys = t.VISITOR_KEYS[node.type];
        if (!keys) return;

        var context = new _context2["default"](scope, opts, state, parentPath);
        var _arr = keys;
        for (var _i = 0; _i < _arr.length; _i++) {
          var key = _arr[_i];
          if (skipKeys && skipKeys[key]) continue;
          if (context.visit(node, key)) return;
        }
      };

      /**
       * [Please add a description.]
       */

      CLEAR_KEYS = t.COMMENT_KEYS.concat(["_scopeInfo", "_paths", "tokens", "comments", "start", "end", "loc", "raw", "rawValue"]);


      /**
       * [Please add a description.]
       */

      traverse.clearNode = function (node) {
        for (var i = 0; i < CLEAR_KEYS.length; i++) {
          var key = CLEAR_KEYS[i];
          if (node[key] != null) node[key] = undefined;
        }
      };

      /**
       * [Please add a description.]
       */

      clearVisitor = {
        noScope: true,
        exit: traverse.clearNode
      };


      /**
       * [Please add a description.]
       */

      traverse.removeProperties = function (tree) {
        traverse(tree, clearVisitor);
        traverse.clearNode(tree);

        return tree;
      };traverse.hasType = function (tree, scope, type, blacklistTypes) {
        // the node we're searching in is blacklisted
        if (_lodashCollectionIncludes2["default"](blacklistTypes, tree.type)) return false;

        // the type we're looking for is the same as the passed node
        if (tree.type === type) return true;

        var state = {
          has: false,
          type: type
        };

        traverse(tree, {
          blacklist: blacklistTypes,
          enter: hasBlacklistedType
        }, scope, state);

        return state.has;
      };
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBTUEsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7OztBQUlBLFdBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLEdBQXhCLEdBQThCLEVBQUUsV0FBVyxHQUFYLEVBQWhDLENBQVQ7R0FBckM7Ozs7OztBQTBCQSxXQUFTLFFBQVQsQ0FBa0IsTUFBbEIsRUFBMEIsSUFBMUIsRUFBZ0MsS0FBaEMsRUFBdUMsS0FBdkMsRUFBOEMsVUFBOUMsRUFBMEQ7QUFDeEQsUUFBSSxDQUFDLE1BQUQsRUFBUyxPQUFiO0FBQ0EsUUFBSSxDQUFDLElBQUQsRUFBTyxPQUFPLEVBQVAsQ0FBWDs7QUFFQSxRQUFJLENBQUMsS0FBSyxPQUFMLElBQWdCLENBQUMsS0FBRCxFQUFRO0FBQzNCLFVBQUksT0FBTyxJQUFQLEtBQWdCLFNBQWhCLElBQTZCLE9BQU8sSUFBUCxLQUFnQixNQUFoQixFQUF3QjtBQUN2RCxjQUFNLElBQUksS0FBSixDQUFVLFNBQVMsR0FB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YixFQUFtQixLQUFLLEdBQUwsSUFBWSxTQUFaLENBQXZCO1NBRkY7T0FEbUI7Ozs7OztBQVdqQixxQkFBZTtBQUNqQixpQkFBUyxJQUFUO0FBQ0EsY0FBTSxTQUFTLFNBQVQ7Ozs7Ozs7O0FBT1IsZUFBUyxnQkFBVCxHQUE0QixVQUFVLElBQVYsRUFBZ0I7QUFDMUMsaUJBQVMsSUFBVCxFQUFlLFlBQWYsRUFEMEM7QUFFMUMsaUJBQVMsU0FBVCxDQUFtQixJQUFuQixFQUYwQzs7QUFJMUMsZUFBTyxJQUFQLENBSjBDO09BQWhCLENBc0I1QixTQUFTLE9BQVQsR0FBbUIsVUFBVSxJQUFWLEVBQWdCLEtBQWhCLEVBQXVCLElBQXZCLEVBQTZCLGNBQTdCLEVBQTZDOztBQUU5RCxZQUFJLDJCQUEyQixTQUEzQixFQUFzQyxjQUF0QyxFQUFzRCxLQUFLLElBQUwsQ0FBMUQsRUFBc0UsT0FBTyxLQUFQLENBQXRFOzs7QUFGOEQsWUFLMUQsS0FBSyxJQUFMLEtBQWMsSUFBZCxFQUFvQixPQUFPLElBQVAsQ0FBeEI7O0FBRUEsWUFBSSxRQUFRO0FBQ1YsZUFBSyxLQUFMO0FBQ0EsZ0JBQU0sSUFBTjtTQUZFLENBUDBEOztBQVk5RCxpQkFBUyxJQUFULEVBQWU7QUFDYixxQkFBVyxjQUFYO0FBQ0EsaUJBQU8sa0JBQVA7U0FGRixFQUdHLEtBSEgsRUFHVSxLQUhWLEVBWjhEOztBQWlCOUQsZUFBTyxNQUFNLEdBQU4sQ0FqQnVEO09BQTdDO0FBbUJuQixhQUFPLE9BQVAsR0FBaUIsUUFBUSxTQUFSLENBQWpCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB0cmF2ZXJzZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfY29udGV4dCA9IHJlcXVpcmUoXCIuL2NvbnRleHRcIik7XG5cbnZhciBfY29udGV4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250ZXh0KTtcblxudmFyIF92aXNpdG9ycyA9IHJlcXVpcmUoXCIuL3Zpc2l0b3JzXCIpO1xuXG52YXIgdmlzaXRvcnMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdmlzaXRvcnMpO1xuXG52YXIgX21lc3NhZ2VzID0gcmVxdWlyZShcIi4uL21lc3NhZ2VzXCIpO1xuXG52YXIgbWVzc2FnZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfbWVzc2FnZXMpO1xuXG52YXIgX2xvZGFzaENvbGxlY3Rpb25JbmNsdWRlcyA9IHJlcXVpcmUoXCJsb2Rhc2gvY29sbGVjdGlvbi9pbmNsdWRlc1wiKTtcblxudmFyIF9sb2Rhc2hDb2xsZWN0aW9uSW5jbHVkZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoQ29sbGVjdGlvbkluY2x1ZGVzKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIHRyYXZlcnNlKHBhcmVudCwgb3B0cywgc2NvcGUsIHN0YXRlLCBwYXJlbnRQYXRoKSB7XG4gIGlmICghcGFyZW50KSByZXR1cm47XG4gIGlmICghb3B0cykgb3B0cyA9IHt9O1xuXG4gIGlmICghb3B0cy5ub1Njb3BlICYmICFzY29wZSkge1xuICAgIGlmIChwYXJlbnQudHlwZSAhPT0gXCJQcm9ncmFtXCIgJiYgcGFyZW50LnR5cGUgIT09IFwiRmlsZVwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZXMuZ2V0KFwidHJhdmVyc2VOZWVkc1BhcmVudFwiLCBwYXJlbnQudHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0b3JzLmV4cGxvZGUob3B0cyk7XG5cbiAgLy8gYXJyYXkgb2Ygbm9kZXNcbiAgaWYgKEFycmF5LmlzQXJyYXkocGFyZW50KSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0cmF2ZXJzZS5ub2RlKHBhcmVudFtpXSwgb3B0cywgc2NvcGUsIHN0YXRlLCBwYXJlbnRQYXRoKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdHJhdmVyc2Uubm9kZShwYXJlbnQsIG9wdHMsIHNjb3BlLCBzdGF0ZSwgcGFyZW50UGF0aCk7XG4gIH1cbn1cblxudHJhdmVyc2UudmlzaXRvcnMgPSB2aXNpdG9ycztcbnRyYXZlcnNlLnZlcmlmeSA9IHZpc2l0b3JzLnZlcmlmeTtcbnRyYXZlcnNlLmV4cGxvZGUgPSB2aXNpdG9ycy5leHBsb2RlO1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnRyYXZlcnNlLm5vZGUgPSBmdW5jdGlvbiAobm9kZSwgb3B0cywgc2NvcGUsIHN0YXRlLCBwYXJlbnRQYXRoLCBza2lwS2V5cykge1xuICB2YXIga2V5cyA9IHQuVklTSVRPUl9LRVlTW25vZGUudHlwZV07XG4gIGlmICgha2V5cykgcmV0dXJuO1xuXG4gIHZhciBjb250ZXh0ID0gbmV3IF9jb250ZXh0MltcImRlZmF1bHRcIl0oc2NvcGUsIG9wdHMsIHN0YXRlLCBwYXJlbnRQYXRoKTtcbiAgdmFyIF9hcnIgPSBrZXlzO1xuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Fyci5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIga2V5ID0gX2FycltfaV07XG4gICAgaWYgKHNraXBLZXlzICYmIHNraXBLZXlzW2tleV0pIGNvbnRpbnVlO1xuICAgIGlmIChjb250ZXh0LnZpc2l0KG5vZGUsIGtleSkpIHJldHVybjtcbiAgfVxufTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgQ0xFQVJfS0VZUyA9IHQuQ09NTUVOVF9LRVlTLmNvbmNhdChbXCJfc2NvcGVJbmZvXCIsIFwiX3BhdGhzXCIsIFwidG9rZW5zXCIsIFwiY29tbWVudHNcIiwgXCJzdGFydFwiLCBcImVuZFwiLCBcImxvY1wiLCBcInJhd1wiLCBcInJhd1ZhbHVlXCJdKTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG50cmF2ZXJzZS5jbGVhck5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IENMRUFSX0tFWVMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gQ0xFQVJfS0VZU1tpXTtcbiAgICBpZiAobm9kZVtrZXldICE9IG51bGwpIG5vZGVba2V5XSA9IHVuZGVmaW5lZDtcbiAgfVxufTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgY2xlYXJWaXNpdG9yID0ge1xuICBub1Njb3BlOiB0cnVlLFxuICBleGl0OiB0cmF2ZXJzZS5jbGVhck5vZGVcbn07XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudHJhdmVyc2UucmVtb3ZlUHJvcGVydGllcyA9IGZ1bmN0aW9uICh0cmVlKSB7XG4gIHRyYXZlcnNlKHRyZWUsIGNsZWFyVmlzaXRvcik7XG4gIHRyYXZlcnNlLmNsZWFyTm9kZSh0cmVlKTtcblxuICByZXR1cm4gdHJlZTtcbn07XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gaGFzQmxhY2tsaXN0ZWRUeXBlKG5vZGUsIHBhcmVudCwgc2NvcGUsIHN0YXRlKSB7XG4gIGlmIChub2RlLnR5cGUgPT09IHN0YXRlLnR5cGUpIHtcbiAgICBzdGF0ZS5oYXMgPSB0cnVlO1xuICAgIHRoaXMuc2tpcCgpO1xuICB9XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudHJhdmVyc2UuaGFzVHlwZSA9IGZ1bmN0aW9uICh0cmVlLCBzY29wZSwgdHlwZSwgYmxhY2tsaXN0VHlwZXMpIHtcbiAgLy8gdGhlIG5vZGUgd2UncmUgc2VhcmNoaW5nIGluIGlzIGJsYWNrbGlzdGVkXG4gIGlmIChfbG9kYXNoQ29sbGVjdGlvbkluY2x1ZGVzMltcImRlZmF1bHRcIl0oYmxhY2tsaXN0VHlwZXMsIHRyZWUudHlwZSkpIHJldHVybiBmYWxzZTtcblxuICAvLyB0aGUgdHlwZSB3ZSdyZSBsb29raW5nIGZvciBpcyB0aGUgc2FtZSBhcyB0aGUgcGFzc2VkIG5vZGVcbiAgaWYgKHRyZWUudHlwZSA9PT0gdHlwZSkgcmV0dXJuIHRydWU7XG5cbiAgdmFyIHN0YXRlID0ge1xuICAgIGhhczogZmFsc2UsXG4gICAgdHlwZTogdHlwZVxuICB9O1xuXG4gIHRyYXZlcnNlKHRyZWUsIHtcbiAgICBibGFja2xpc3Q6IGJsYWNrbGlzdFR5cGVzLFxuICAgIGVudGVyOiBoYXNCbGFja2xpc3RlZFR5cGVcbiAgfSwgc2NvcGUsIHN0YXRlKTtcblxuICByZXR1cm4gc3RhdGUuaGFzO1xufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
