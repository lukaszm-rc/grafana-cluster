/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _typeof, _pathLibVirtualTypes, virtualTypes, _messages, messages, _types, t, _lodashLangClone, _lodashLangClone2;

  // istanbul ignore next

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }

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

  function explode(visitor) {
    if (visitor._exploded) return visitor;
    visitor._exploded = true;

    // normalise pipes
    for (var nodeType in visitor) {
      if (shouldIgnoreKey(nodeType)) continue;

      var parts = nodeType.split("|");
      if (parts.length === 1) continue;

      var fns = visitor[nodeType];
      delete visitor[nodeType];

      var _arr = parts;
      for (var _i = 0; _i < _arr.length; _i++) {
        var part = _arr[_i];
        visitor[part] = fns;
      }
    }

    // verify data structure
    verify(visitor);

    // make sure there's no __esModule type since this is because we're using loose mode
    // and it sets __esModule to be enumerable on all modules :(
    delete visitor.__esModule;

    // ensure visitors are objects
    ensureEntranceObjects(visitor);

    // ensure enter/exit callbacks are arrays
    ensureCallbackArrays(visitor);

    // add type wrappers

    var _arr2 = Object.keys(visitor);

    for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
      var nodeType = _arr2[_i2];
      if (shouldIgnoreKey(nodeType)) continue;

      var wrapper = virtualTypes[nodeType];
      if (!wrapper) continue;

      // wrap all the functions
      var fns = visitor[nodeType];
      for (var type in fns) {
        fns[type] = wrapCheck(wrapper, fns[type]);
      }

      // clear it from the visitor
      delete visitor[nodeType];

      if (wrapper.types) {
        var _arr4 = wrapper.types;

        for (var _i4 = 0; _i4 < _arr4.length; _i4++) {
          var type = _arr4[_i4];
          // merge the visitor if necessary or just put it back in
          if (visitor[type]) {
            mergePair(visitor[type], fns);
          } else {
            visitor[type] = fns;
          }
        }
      } else {
        mergePair(visitor, fns);
      }
    }

    // add aliases
    for (var nodeType in visitor) {
      if (shouldIgnoreKey(nodeType)) continue;

      var fns = visitor[nodeType];

      var aliases = t.FLIPPED_ALIAS_KEYS[nodeType];
      if (!aliases) continue;

      // clear it from the visitor
      delete visitor[nodeType];

      var _arr3 = aliases;
      for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
        var alias = _arr3[_i3];
        var existing = visitor[alias];
        if (existing) {
          mergePair(existing, fns);
        } else {
          visitor[alias] = _lodashLangClone2["default"](fns);
        }
      }
    }

    for (var nodeType in visitor) {
      if (shouldIgnoreKey(nodeType)) continue;

      ensureCallbackArrays(visitor[nodeType]);
    }

    return visitor;
  }

  /**
   * [Please add a description.]
   */

  function verify(visitor) {
    if (visitor._verified) return;

    if (typeof visitor === "function") {
      throw new Error(messages.get("traverseVerifyRootFunction"));
    }

    for (var nodeType in visitor) {
      if (shouldIgnoreKey(nodeType)) continue;

      if (t.TYPES.indexOf(nodeType) < 0) {
        throw new Error(messages.get("traverseVerifyNodeType", nodeType));
      }

      var visitors = visitor[nodeType];
      if ((typeof visitors === "undefined" ? "undefined" : _typeof(visitors)) === "object") {
        for (var visitorKey in visitors) {
          if (visitorKey === "enter" || visitorKey === "exit") continue;
          throw new Error(messages.get("traverseVerifyVisitorProperty", nodeType, visitorKey));
        }
      }
    }

    visitor._verified = true;
  }

  /**
   * [Please add a description.]
   */

  function merge(visitors) {
    var rootVisitor = {};

    var _arr5 = visitors;
    for (var _i5 = 0; _i5 < _arr5.length; _i5++) {
      var visitor = _arr5[_i5];
      explode(visitor);

      for (var type in visitor) {
        var nodeVisitor = rootVisitor[type] = rootVisitor[type] || {};
        mergePair(nodeVisitor, visitor[type]);
      }
    }

    return rootVisitor;
  }

  /**
   * [Please add a description.]
   */

  function ensureEntranceObjects(obj) {
    for (var key in obj) {
      if (shouldIgnoreKey(key)) continue;

      var fns = obj[key];
      if (typeof fns === "function") {
        obj[key] = { enter: fns };
      }
    }
  }

  /**
   * Makes sure that enter and exit callbacks are arrays.
   */

  function ensureCallbackArrays(obj) {
    if (obj.enter && !Array.isArray(obj.enter)) obj.enter = [obj.enter];
    if (obj.exit && !Array.isArray(obj.exit)) obj.exit = [obj.exit];
  }

  /**
   * [Please add a description.]
   */

  function wrapCheck(wrapper, fn) {
    return function () {
      if (wrapper.checkPath(this)) {
        return fn.apply(this, arguments);
      }
    };
  }

  /**
   * [Please add a description.]
   */

  function shouldIgnoreKey(key) {
    // internal/hidden key
    if (key[0] === "_") return true;

    // ignore function keys
    if (key === "enter" || key === "exit" || key === "shouldSkip") return true;

    // ignore other options
    if (key === "blacklist" || key === "noScope" || key === "skipKeys") return true;

    return false;
  }

  /**
   * [Please add a description.]
   */

  function mergePair(dest, src) {
    for (var key in src) {
      dest[key] = [].concat(dest[key] || [], src[key]);
    }
  }
  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      exports.__esModule = true;
      exports.explode = explode;
      exports.verify = verify;
      exports.merge = merge;_pathLibVirtualTypes = require("./path/lib/virtual-types");
      virtualTypes = _interopRequireWildcard(_pathLibVirtualTypes);
      _messages = require("../messages");
      messages = _interopRequireWildcard(_messages);
      _types = require("../types");
      t = _interopRequireWildcard(_types);
      _lodashLangClone = require("lodash/lang/clone");
      _lodashLangClone2 = _interopRequireDefault(_lodashLangClone);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3Zpc2l0b3JzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBUUEsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBRSxXQUFXLEdBQVgsRUFBaEMsQ0FBVDtHQUFyQzs7OztBQUlBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7OztBQXNCQSxXQUFTLE9BQVQsQ0FBaUIsT0FBakIsRUFBMEI7QUFDeEIsUUFBSSxRQUFRLFNBQVIsRUFBbUIsT0FBTyxPQUFQLENBQXZCO0FBQ0EsWUFBUSxTQUFSLEdBQW9CLElBQXBCOzs7QUFGd0IsU0FLbkIsSUFBSSxRQUFKLElBQWdCLE9BQXJCLEVBQThCO0FBQzVCLFVBQUksZ0JBQWdCLFFBQWhCLENBQUosRUFBK0IsU0FBL0I7O0FBRUEsVUFBSSxRQUFRLFNBQVMsS0FBVCxDQUFlLEdBQWYsQ0FBUixDQUh3QjtBQUk1QixVQUFJLE1BQU0sTUFBTixLQUFpQixDQUFqQixFQUFvQixTQUF4Qjs7QUFFQSxVQUFJLE1BQU0sUUFB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QUE3QjtLQURLLENBRHVCO0dBQWhDOzs7Ozs7QUFZQSxXQUFTLGVBQVQsQ0FBeUIsR0FBekIsRUFBOEI7O0FBRTVCLFFBQUksSUFBSSxDQUFKLE1BQVcsR0FBWCxFQUFnQixPQUFPLElBQVAsQ0FBcEI7OztBQUY0QixRQUt4QixRQUFRLE9BQVIsSUFBbUIsUUFBUSxNQUFSLElBQWtCLFFBQVEsWUFBUixFQUFzQixPQUFPLElBQVAsQ0FBL0Q7OztBQUw0QixRQVF4QixRQUFRLFdBQVIsSUFBdUIsUUFBUSxTQUFSLElBQXFCLFFBQVEsVUFBUixFQUFvQixPQUFPLElBQVAsQ0FBcEU7O0FBRUEsV0FBTyxLQUFQLENBVjRCO0dBQTlCOzs7Ozs7QUFpQkEsV0FBUyxTQUFULENBQW1CLElBQW5CLEVBQXlCLEdBQXpCLEVBQThCO0FBQzVCLFNBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFDbkIsV0FBSyxHQUFMLElBQVksR0FBRyxNQUFILENBQVUsS0FBSyxHQUFMLEtBQWEsRUFBYixFQUFpQixJQUFJLEdBQUosQ0FBM0IsQ0FBWixDQURtQjtLQUFyQjtHQURGOzs7Ozs7Ozs7QUFwUEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCO0FBQ0EsY0FBUSxPQUFSLEdBQWtCLE9BQWxCO0FBQ0EsY0FBUSxNQUFSLEdBQWlCLE1BQWpCO0FBQ0EsY0FBUSxLQUFSLEdBQWdCLEtBQWhCLENBU0ksdUJBQXVCLFFBQVEsMEJBQVI7QUFFdkIscUJBQWUsd0JBQXdCLG9CQUF4QjtBQUVmLGtCQUFZLFFBQVEsYUFBUjtBQUVaLGlCQUFXLHdCQUF3QixTQUF4QjtBQUVYLGVBQVMsUUFBUSxVQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEI7QUFFSix5QkFBbUIsUUFBUSxtQkFBUjtBQUVuQiwwQkFBb0IsdUJBQXVCLGdCQUF2QiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYXZlcnNhbC92aXNpdG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZXhwbG9kZSA9IGV4cGxvZGU7XG5leHBvcnRzLnZlcmlmeSA9IHZlcmlmeTtcbmV4cG9ydHMubWVyZ2UgPSBtZXJnZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfcGF0aExpYlZpcnR1YWxUeXBlcyA9IHJlcXVpcmUoXCIuL3BhdGgvbGliL3ZpcnR1YWwtdHlwZXNcIik7XG5cbnZhciB2aXJ0dWFsVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcGF0aExpYlZpcnR1YWxUeXBlcyk7XG5cbnZhciBfbWVzc2FnZXMgPSByZXF1aXJlKFwiLi4vbWVzc2FnZXNcIik7XG5cbnZhciBtZXNzYWdlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9tZXNzYWdlcyk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxudmFyIF9sb2Rhc2hMYW5nQ2xvbmUgPSByZXF1aXJlKFwibG9kYXNoL2xhbmcvY2xvbmVcIik7XG5cbnZhciBfbG9kYXNoTGFuZ0Nsb25lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaExhbmdDbG9uZSk7XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gZXhwbG9kZSh2aXNpdG9yKSB7XG4gIGlmICh2aXNpdG9yLl9leHBsb2RlZCkgcmV0dXJuIHZpc2l0b3I7XG4gIHZpc2l0b3IuX2V4cGxvZGVkID0gdHJ1ZTtcblxuICAvLyBub3JtYWxpc2UgcGlwZXNcbiAgZm9yICh2YXIgbm9kZVR5cGUgaW4gdmlzaXRvcikge1xuICAgIGlmIChzaG91bGRJZ25vcmVLZXkobm9kZVR5cGUpKSBjb250aW51ZTtcblxuICAgIHZhciBwYXJ0cyA9IG5vZGVUeXBlLnNwbGl0KFwifFwiKTtcbiAgICBpZiAocGFydHMubGVuZ3RoID09PSAxKSBjb250aW51ZTtcblxuICAgIHZhciBmbnMgPSB2aXNpdG9yW25vZGVUeXBlXTtcbiAgICBkZWxldGUgdmlzaXRvcltub2RlVHlwZV07XG5cbiAgICB2YXIgX2FyciA9IHBhcnRzO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBfYXJyLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIHBhcnQgPSBfYXJyW19pXTtcbiAgICAgIHZpc2l0b3JbcGFydF0gPSBmbnM7XG4gICAgfVxuICB9XG5cbiAgLy8gdmVyaWZ5IGRhdGEgc3RydWN0dXJlXG4gIHZlcmlmeSh2aXNpdG9yKTtcblxuICAvLyBtYWtlIHN1cmUgdGhlcmUncyBubyBfX2VzTW9kdWxlIHR5cGUgc2luY2UgdGhpcyBpcyBiZWNhdXNlIHdlJ3JlIHVzaW5nIGxvb3NlIG1vZGVcbiAgLy8gYW5kIGl0IHNldHMgX19lc01vZHVsZSB0byBiZSBlbnVtZXJhYmxlIG9uIGFsbCBtb2R1bGVzIDooXG4gIGRlbGV0ZSB2aXNpdG9yLl9fZXNNb2R1bGU7XG5cbiAgLy8gZW5zdXJlIHZpc2l0b3JzIGFyZSBvYmplY3RzXG4gIGVuc3VyZUVudHJhbmNlT2JqZWN0cyh2aXNpdG9yKTtcblxuICAvLyBlbnN1cmUgZW50ZXIvZXhpdCBjYWxsYmFja3MgYXJlIGFycmF5c1xuICBlbnN1cmVDYWxsYmFja0FycmF5cyh2aXNpdG9yKTtcblxuICAvLyBhZGQgdHlwZSB3cmFwcGVyc1xuXG4gIHZhciBfYXJyMiA9IE9iamVjdC5rZXlzKHZpc2l0b3IpO1xuXG4gIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IF9hcnIyLmxlbmd0aDsgX2kyKyspIHtcbiAgICB2YXIgbm9kZVR5cGUgPSBfYXJyMltfaTJdO1xuICAgIGlmIChzaG91bGRJZ25vcmVLZXkobm9kZVR5cGUpKSBjb250aW51ZTtcblxuICAgIHZhciB3cmFwcGVyID0gdmlydHVhbFR5cGVzW25vZGVUeXBlXTtcbiAgICBpZiAoIXdyYXBwZXIpIGNvbnRpbnVlO1xuXG4gICAgLy8gd3JhcCBhbGwgdGhlIGZ1bmN0aW9uc1xuICAgIHZhciBmbnMgPSB2aXNpdG9yW25vZGVUeXBlXTtcbiAgICBmb3IgKHZhciB0eXBlIGluIGZucykge1xuICAgICAgZm5zW3R5cGVdID0gd3JhcENoZWNrKHdyYXBwZXIsIGZuc1t0eXBlXSk7XG4gICAgfVxuXG4gICAgLy8gY2xlYXIgaXQgZnJvbSB0aGUgdmlzaXRvclxuICAgIGRlbGV0ZSB2aXNpdG9yW25vZGVUeXBlXTtcblxuICAgIGlmICh3cmFwcGVyLnR5cGVzKSB7XG4gICAgICB2YXIgX2FycjQgPSB3cmFwcGVyLnR5cGVzO1xuXG4gICAgICBmb3IgKHZhciBfaTQgPSAwOyBfaTQgPCBfYXJyNC5sZW5ndGg7IF9pNCsrKSB7XG4gICAgICAgIHZhciB0eXBlID0gX2FycjRbX2k0XTtcbiAgICAgICAgLy8gbWVyZ2UgdGhlIHZpc2l0b3IgaWYgbmVjZXNzYXJ5IG9yIGp1c3QgcHV0IGl0IGJhY2sgaW5cbiAgICAgICAgaWYgKHZpc2l0b3JbdHlwZV0pIHtcbiAgICAgICAgICBtZXJnZVBhaXIodmlzaXRvclt0eXBlXSwgZm5zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2aXNpdG9yW3R5cGVdID0gZm5zO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lcmdlUGFpcih2aXNpdG9yLCBmbnMpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFkZCBhbGlhc2VzXG4gIGZvciAodmFyIG5vZGVUeXBlIGluIHZpc2l0b3IpIHtcbiAgICBpZiAoc2hvdWxkSWdub3JlS2V5KG5vZGVUeXBlKSkgY29udGludWU7XG5cbiAgICB2YXIgZm5zID0gdmlzaXRvcltub2RlVHlwZV07XG5cbiAgICB2YXIgYWxpYXNlcyA9IHQuRkxJUFBFRF9BTElBU19LRVlTW25vZGVUeXBlXTtcbiAgICBpZiAoIWFsaWFzZXMpIGNvbnRpbnVlO1xuXG4gICAgLy8gY2xlYXIgaXQgZnJvbSB0aGUgdmlzaXRvclxuICAgIGRlbGV0ZSB2aXNpdG9yW25vZGVUeXBlXTtcblxuICAgIHZhciBfYXJyMyA9IGFsaWFzZXM7XG4gICAgZm9yICh2YXIgX2kzID0gMDsgX2kzIDwgX2FycjMubGVuZ3RoOyBfaTMrKykge1xuICAgICAgdmFyIGFsaWFzID0gX2FycjNbX2kzXTtcbiAgICAgIHZhciBleGlzdGluZyA9IHZpc2l0b3JbYWxpYXNdO1xuICAgICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAgIG1lcmdlUGFpcihleGlzdGluZywgZm5zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZpc2l0b3JbYWxpYXNdID0gX2xvZGFzaExhbmdDbG9uZTJbXCJkZWZhdWx0XCJdKGZucyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgbm9kZVR5cGUgaW4gdmlzaXRvcikge1xuICAgIGlmIChzaG91bGRJZ25vcmVLZXkobm9kZVR5cGUpKSBjb250aW51ZTtcblxuICAgIGVuc3VyZUNhbGxiYWNrQXJyYXlzKHZpc2l0b3Jbbm9kZVR5cGVdKTtcbiAgfVxuXG4gIHJldHVybiB2aXNpdG9yO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIHZlcmlmeSh2aXNpdG9yKSB7XG4gIGlmICh2aXNpdG9yLl92ZXJpZmllZCkgcmV0dXJuO1xuXG4gIGlmICh0eXBlb2YgdmlzaXRvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2VzLmdldChcInRyYXZlcnNlVmVyaWZ5Um9vdEZ1bmN0aW9uXCIpKTtcbiAgfVxuXG4gIGZvciAodmFyIG5vZGVUeXBlIGluIHZpc2l0b3IpIHtcbiAgICBpZiAoc2hvdWxkSWdub3JlS2V5KG5vZGVUeXBlKSkgY29udGludWU7XG5cbiAgICBpZiAodC5UWVBFUy5pbmRleE9mKG5vZGVUeXBlKSA8IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlcy5nZXQoXCJ0cmF2ZXJzZVZlcmlmeU5vZGVUeXBlXCIsIG5vZGVUeXBlKSk7XG4gICAgfVxuXG4gICAgdmFyIHZpc2l0b3JzID0gdmlzaXRvcltub2RlVHlwZV07XG4gICAgaWYgKHR5cGVvZiB2aXNpdG9ycyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgZm9yICh2YXIgdmlzaXRvcktleSBpbiB2aXNpdG9ycykge1xuICAgICAgICBpZiAodmlzaXRvcktleSA9PT0gXCJlbnRlclwiIHx8IHZpc2l0b3JLZXkgPT09IFwiZXhpdFwiKSBjb250aW51ZTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2VzLmdldChcInRyYXZlcnNlVmVyaWZ5VmlzaXRvclByb3BlcnR5XCIsIG5vZGVUeXBlLCB2aXNpdG9yS2V5KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmlzaXRvci5fdmVyaWZpZWQgPSB0cnVlO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIG1lcmdlKHZpc2l0b3JzKSB7XG4gIHZhciByb290VmlzaXRvciA9IHt9O1xuXG4gIHZhciBfYXJyNSA9IHZpc2l0b3JzO1xuICBmb3IgKHZhciBfaTUgPSAwOyBfaTUgPCBfYXJyNS5sZW5ndGg7IF9pNSsrKSB7XG4gICAgdmFyIHZpc2l0b3IgPSBfYXJyNVtfaTVdO1xuICAgIGV4cGxvZGUodmlzaXRvcik7XG5cbiAgICBmb3IgKHZhciB0eXBlIGluIHZpc2l0b3IpIHtcbiAgICAgIHZhciBub2RlVmlzaXRvciA9IHJvb3RWaXNpdG9yW3R5cGVdID0gcm9vdFZpc2l0b3JbdHlwZV0gfHwge307XG4gICAgICBtZXJnZVBhaXIobm9kZVZpc2l0b3IsIHZpc2l0b3JbdHlwZV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByb290VmlzaXRvcjtcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBlbnN1cmVFbnRyYW5jZU9iamVjdHMob2JqKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoc2hvdWxkSWdub3JlS2V5KGtleSkpIGNvbnRpbnVlO1xuXG4gICAgdmFyIGZucyA9IG9ialtrZXldO1xuICAgIGlmICh0eXBlb2YgZm5zID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIG9ialtrZXldID0geyBlbnRlcjogZm5zIH07XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogTWFrZXMgc3VyZSB0aGF0IGVudGVyIGFuZCBleGl0IGNhbGxiYWNrcyBhcmUgYXJyYXlzLlxuICovXG5cbmZ1bmN0aW9uIGVuc3VyZUNhbGxiYWNrQXJyYXlzKG9iaikge1xuICBpZiAob2JqLmVudGVyICYmICFBcnJheS5pc0FycmF5KG9iai5lbnRlcikpIG9iai5lbnRlciA9IFtvYmouZW50ZXJdO1xuICBpZiAob2JqLmV4aXQgJiYgIUFycmF5LmlzQXJyYXkob2JqLmV4aXQpKSBvYmouZXhpdCA9IFtvYmouZXhpdF07XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gd3JhcENoZWNrKHdyYXBwZXIsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHdyYXBwZXIuY2hlY2tQYXRoKHRoaXMpKSB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gc2hvdWxkSWdub3JlS2V5KGtleSkge1xuICAvLyBpbnRlcm5hbC9oaWRkZW4ga2V5XG4gIGlmIChrZXlbMF0gPT09IFwiX1wiKSByZXR1cm4gdHJ1ZTtcblxuICAvLyBpZ25vcmUgZnVuY3Rpb24ga2V5c1xuICBpZiAoa2V5ID09PSBcImVudGVyXCIgfHwga2V5ID09PSBcImV4aXRcIiB8fCBrZXkgPT09IFwic2hvdWxkU2tpcFwiKSByZXR1cm4gdHJ1ZTtcblxuICAvLyBpZ25vcmUgb3RoZXIgb3B0aW9uc1xuICBpZiAoa2V5ID09PSBcImJsYWNrbGlzdFwiIHx8IGtleSA9PT0gXCJub1Njb3BlXCIgfHwga2V5ID09PSBcInNraXBLZXlzXCIpIHJldHVybiB0cnVlO1xuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBtZXJnZVBhaXIoZGVzdCwgc3JjKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICBkZXN0W2tleV0gPSBbXS5jb25jYXQoZGVzdFtrZXldIHx8IFtdLCBzcmNba2V5XSk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
