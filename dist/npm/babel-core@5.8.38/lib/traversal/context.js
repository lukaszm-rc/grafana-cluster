/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _path, _path2, _types, t, TraversalContext;

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

  // istanbul ignore next

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_path = require("./path");
      _path2 = _interopRequireDefault(_path);
      _types = require("../types");
      t = _interopRequireWildcard(_types);

      TraversalContext = function () {
        function TraversalContext(scope, opts, state, parentPath) {
          _classCallCheck(this, TraversalContext);

          this.queue = null;

          this.parentPath = parentPath;
          this.scope = scope;
          this.state = state;
          this.opts = opts;
        }

        /**
         * [Please add a description.]
         */

        TraversalContext.prototype.shouldVisit = function shouldVisit(node) {
          var opts = this.opts;
          if (opts.enter || opts.exit) return true;

          if (opts[node.type]) return true;

          var keys = t.VISITOR_KEYS[node.type];
          if (!keys || !keys.length) return false;

          var _arr = keys;
          for (var _i = 0; _i < _arr.length; _i++) {
            var key = _arr[_i];
            if (node[key]) return true;
          }

          return false;
        };

        /**
         * [Please add a description.]
         */

        TraversalContext.prototype.create = function create(node, obj, key, listKey) {
          var path = _path2["default"].get({
            parentPath: this.parentPath,
            parent: node,
            container: obj,
            key: key,
            listKey: listKey
          });
          path.unshiftContext(this);
          return path;
        };

        /**
         * [Please add a description.]
         */

        TraversalContext.prototype.visitMultiple = function visitMultiple(container, parent, listKey) {
          // nothing to traverse!
          if (container.length === 0) return false;

          var visited = [];

          var queue = this.queue = [];
          var stop = false;

          // build up initial queue
          for (var key = 0; key < container.length; key++) {
            var self = container[key];
            if (self && this.shouldVisit(self)) {
              queue.push(this.create(parent, container, key, listKey));
            }
          }

          // visit the queue
          var _arr2 = queue;
          for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
            var path = _arr2[_i2];
            path.resync();

            if (visited.indexOf(path.node) >= 0) continue;
            visited.push(path.node);

            if (path.visit()) {
              stop = true;
              break;
            }
          }

          var _arr3 = queue;
          for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
            var path = _arr3[_i3];
            path.shiftContext();
          }

          this.queue = null;

          return stop;
        };

        /**
         * [Please add a description.]
         */

        TraversalContext.prototype.visitSingle = function visitSingle(node, key) {
          if (this.shouldVisit(node[key])) {
            var path = this.create(node, node, key);
            path.visit();
            path.shiftContext();
          }
        };

        /**
         * [Please add a description.]
         */

        TraversalContext.prototype.visit = function visit(node, key) {
          var nodes = node[key];
          if (!nodes) return;

          if (Array.isArray(nodes)) {
            return this.visitMultiple(nodes, node, key);
          } else {
            return this.visitSingle(node, key);
          }
        };

        return TraversalContext;
      }();

      exports["default"] = TraversalContext;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL2NvbnRleHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7O0FBSUEsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBRSxXQUFXLEdBQVgsRUFBaEMsQ0FBVDtHQUFyQzs7OztBQUlBLFdBQVMsZUFBVCxDQUF5QixRQUF6QixFQUFtQyxXQUFuQyxFQUFnRDtBQUFFLFFBQUksRUFBRSxvQkFBb0IsV0FBcEIsQ0FBRixFQUFvQztBQUFFLFlBQU0sSUFBSSxTQUFKLENBQWMsbUNBQWQsQ0FBTixDQUFGO0tBQXhDO0dBQWxEOzs7OztBQVhBLGNBQVEsVUFBUixHQUFxQixJQUFyQixDQWFJLFFBQVEsUUFBUSxRQUFSO0FBRVIsZUFBUyx1QkFBdUIsS0FBdkI7QUFFVCxlQUFTLFFBQVEsVUFBUjtBQUVULFVBQUksd0JBQXdCLE1BQXhCOztBQU1KLHlCQUFtQixZQUFhO0FBQ2xDLGlCQUFTLGdCQUFULENBQTBCLEtBQTFC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QixJQUExQixFQUFnQyxHQUFoQyxDQUFQLENBRHdCO1dBQTFCLE1BRU87QUFDTCxtQkFBTyxLQUFLLFdBQUwsQ0FBaUIsSUFBakIsRUFBdUIsR0FBdkIsQ0FBUCxDQURLO1dBRlA7U0FKaUMsQ0FqSEQ7O0FBNEhsQyxlQUFPLGdCQUFQLENBNUhrQztPQUFaOztBQStIeEIsY0FBUSxTQUFSLElBQXFCLGdCQUFyQjtBQUNBLGFBQU8sT0FBUCxHQUFpQixRQUFRLFNBQVIsQ0FBakIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmF2ZXJzYWwvY29udGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoXCIuL3BhdGhcIik7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciBUcmF2ZXJzYWxDb250ZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVHJhdmVyc2FsQ29udGV4dChzY29wZSwgb3B0cywgc3RhdGUsIHBhcmVudFBhdGgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhdmVyc2FsQ29udGV4dCk7XG5cbiAgICB0aGlzLnF1ZXVlID0gbnVsbDtcblxuICAgIHRoaXMucGFyZW50UGF0aCA9IHBhcmVudFBhdGg7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLm9wdHMgPSBvcHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBUcmF2ZXJzYWxDb250ZXh0LnByb3RvdHlwZS5zaG91bGRWaXNpdCA9IGZ1bmN0aW9uIHNob3VsZFZpc2l0KG5vZGUpIHtcbiAgICB2YXIgb3B0cyA9IHRoaXMub3B0cztcbiAgICBpZiAob3B0cy5lbnRlciB8fCBvcHRzLmV4aXQpIHJldHVybiB0cnVlO1xuXG4gICAgaWYgKG9wdHNbbm9kZS50eXBlXSkgcmV0dXJuIHRydWU7XG5cbiAgICB2YXIga2V5cyA9IHQuVklTSVRPUl9LRVlTW25vZGUudHlwZV07XG4gICAgaWYgKCFrZXlzIHx8ICFrZXlzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdmFyIF9hcnIgPSBrZXlzO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBfYXJyLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGtleSA9IF9hcnJbX2ldO1xuICAgICAgaWYgKG5vZGVba2V5XSkgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgVHJhdmVyc2FsQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKG5vZGUsIG9iaiwga2V5LCBsaXN0S2V5KSB7XG4gICAgdmFyIHBhdGggPSBfcGF0aDJbXCJkZWZhdWx0XCJdLmdldCh7XG4gICAgICBwYXJlbnRQYXRoOiB0aGlzLnBhcmVudFBhdGgsXG4gICAgICBwYXJlbnQ6IG5vZGUsXG4gICAgICBjb250YWluZXI6IG9iaixcbiAgICAgIGtleToga2V5LFxuICAgICAgbGlzdEtleTogbGlzdEtleVxuICAgIH0pO1xuICAgIHBhdGgudW5zaGlmdENvbnRleHQodGhpcyk7XG4gICAgcmV0dXJuIHBhdGg7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBUcmF2ZXJzYWxDb250ZXh0LnByb3RvdHlwZS52aXNpdE11bHRpcGxlID0gZnVuY3Rpb24gdmlzaXRNdWx0aXBsZShjb250YWluZXIsIHBhcmVudCwgbGlzdEtleSkge1xuICAgIC8vIG5vdGhpbmcgdG8gdHJhdmVyc2UhXG4gICAgaWYgKGNvbnRhaW5lci5sZW5ndGggPT09IDApIHJldHVybiBmYWxzZTtcblxuICAgIHZhciB2aXNpdGVkID0gW107XG5cbiAgICB2YXIgcXVldWUgPSB0aGlzLnF1ZXVlID0gW107XG4gICAgdmFyIHN0b3AgPSBmYWxzZTtcblxuICAgIC8vIGJ1aWxkIHVwIGluaXRpYWwgcXVldWVcbiAgICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBjb250YWluZXIubGVuZ3RoOyBrZXkrKykge1xuICAgICAgdmFyIHNlbGYgPSBjb250YWluZXJba2V5XTtcbiAgICAgIGlmIChzZWxmICYmIHRoaXMuc2hvdWxkVmlzaXQoc2VsZikpIHtcbiAgICAgICAgcXVldWUucHVzaCh0aGlzLmNyZWF0ZShwYXJlbnQsIGNvbnRhaW5lciwga2V5LCBsaXN0S2V5KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdmlzaXQgdGhlIHF1ZXVlXG4gICAgdmFyIF9hcnIyID0gcXVldWU7XG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgX2FycjIubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIHBhdGggPSBfYXJyMltfaTJdO1xuICAgICAgcGF0aC5yZXN5bmMoKTtcblxuICAgICAgaWYgKHZpc2l0ZWQuaW5kZXhPZihwYXRoLm5vZGUpID49IDApIGNvbnRpbnVlO1xuICAgICAgdmlzaXRlZC5wdXNoKHBhdGgubm9kZSk7XG5cbiAgICAgIGlmIChwYXRoLnZpc2l0KCkpIHtcbiAgICAgICAgc3RvcCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfYXJyMyA9IHF1ZXVlO1xuICAgIGZvciAodmFyIF9pMyA9IDA7IF9pMyA8IF9hcnIzLmxlbmd0aDsgX2kzKyspIHtcbiAgICAgIHZhciBwYXRoID0gX2FycjNbX2kzXTtcbiAgICAgIHBhdGguc2hpZnRDb250ZXh0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5xdWV1ZSA9IG51bGw7XG5cbiAgICByZXR1cm4gc3RvcDtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFRyYXZlcnNhbENvbnRleHQucHJvdG90eXBlLnZpc2l0U2luZ2xlID0gZnVuY3Rpb24gdmlzaXRTaW5nbGUobm9kZSwga2V5KSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkVmlzaXQobm9kZVtrZXldKSkge1xuICAgICAgdmFyIHBhdGggPSB0aGlzLmNyZWF0ZShub2RlLCBub2RlLCBrZXkpO1xuICAgICAgcGF0aC52aXNpdCgpO1xuICAgICAgcGF0aC5zaGlmdENvbnRleHQoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBUcmF2ZXJzYWxDb250ZXh0LnByb3RvdHlwZS52aXNpdCA9IGZ1bmN0aW9uIHZpc2l0KG5vZGUsIGtleSkge1xuICAgIHZhciBub2RlcyA9IG5vZGVba2V5XTtcbiAgICBpZiAoIW5vZGVzKSByZXR1cm47XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlcykpIHtcbiAgICAgIHJldHVybiB0aGlzLnZpc2l0TXVsdGlwbGUobm9kZXMsIG5vZGUsIGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnZpc2l0U2luZ2xlKG5vZGUsIGtleSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBUcmF2ZXJzYWxDb250ZXh0O1xufSkoKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBUcmF2ZXJzYWxDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
