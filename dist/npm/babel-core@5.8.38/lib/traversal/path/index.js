/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _libVirtualTypes, virtualTypes, _index, _index2, _lodashObjectAssign, _lodashObjectAssign2, _scope, _scope2, _types, t, NodePath, _arr, _loop, _i, _loop2, type, _ret2;

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

  // istanbul ignore next

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_libVirtualTypes = require("./lib/virtual-types");
      virtualTypes = _interopRequireWildcard(_libVirtualTypes);
      _index = require("../index");
      _index2 = _interopRequireDefault(_index);
      _lodashObjectAssign = require("lodash/object/assign");
      _lodashObjectAssign2 = _interopRequireDefault(_lodashObjectAssign);
      _scope = require("../scope");
      _scope2 = _interopRequireDefault(_scope);
      _types = require("../../types");
      t = _interopRequireWildcard(_types);

      NodePath = function () {

        /**
         * [Please add a description.]
         */

        function NodePath(hub, parent) {
          _classCallCheck(this, NodePath);

          this.contexts = [];
          this.parent = parent;
          this.data = {};
          this.hub = hub;

          this.shouldSkip = false;
          this.shouldStop = false;
          this.removed = false;
          this.state = null;
          this.opts = null;
          this.skipKeys = null;
          this.parentPath = null;
          this.context = null;
          this.container = null;
          this.listKey = null;
          this.inList = false;
          this.parentKey = null;
          this.key = null;
          this.node = null;
          this.scope = null;
          this.type = null;
          this.typeAnnotation = null;
        }

        /**
         * [Please add a description.]
         */

        /**
         * [Please add a description.]
         */

        NodePath.get = function get(_ref) {
          var hub = _ref.hub;
          var parentPath = _ref.parentPath;
          var parent = _ref.parent;
          var container = _ref.container;
          var listKey = _ref.listKey;
          var key = _ref.key;

          if (!hub && parentPath) {
            hub = parentPath.hub;
          }

          var targetNode = container[key];
          var paths = parent._paths = parent._paths || [];
          var path;

          for (var i = 0; i < paths.length; i++) {
            var pathCheck = paths[i];
            if (pathCheck.node === targetNode) {
              path = pathCheck;
              break;
            }
          }

          if (!path) {
            path = new NodePath(hub, parent);
            paths.push(path);
          }

          path.setup(parentPath, container, listKey, key);

          return path;
        };

        /**
         * [Please add a description.]
         */

        NodePath.prototype.getScope = function getScope(scope) {
          var ourScope = scope;

          // we're entering a new scope so let's construct it!
          if (this.isScope()) {
            ourScope = new _scope2["default"](this, scope);
          }

          return ourScope;
        };

        /**
         * [Please add a description.]
         */

        NodePath.prototype.setData = function setData(key, val) {
          return this.data[key] = val;
        };

        /**
         * [Please add a description.]
         */

        NodePath.prototype.getData = function getData(key, def) {
          var val = this.data[key];
          if (!val && def) val = this.data[key] = def;
          return val;
        };

        /**
         * [Please add a description.]
         */

        NodePath.prototype.errorWithNode = function errorWithNode(msg) {
          var Error = arguments.length <= 1 || arguments[1] === undefined ? SyntaxError : arguments[1];

          return this.hub.file.errorWithNode(this.node, msg, Error);
        };

        /**
         * [Please add a description.]
         */

        NodePath.prototype.traverse = function traverse(visitor, state) {
          _index2["default"](this.node, visitor, this.scope, state, this);
        };

        return NodePath;
      }();

      exports["default"] = NodePath;
      _lodashObjectAssign2["default"](NodePath.prototype, require("./ancestry"));
      _lodashObjectAssign2["default"](NodePath.prototype, require("./inference"));
      _lodashObjectAssign2["default"](NodePath.prototype, require("./replacement"));
      _lodashObjectAssign2["default"](NodePath.prototype, require("./evaluation"));
      _lodashObjectAssign2["default"](NodePath.prototype, require("./conversion"));
      _lodashObjectAssign2["default"](NodePath.prototype, require("./introspection"));
      _lodashObjectAssign2["default"](NodePath.prototype, require("./context"));
      _lodashObjectAssign2["default"](NodePath.prototype, require("./removal"));
      _lodashObjectAssign2["default"](NodePath.prototype, require("./modification"));
      _lodashObjectAssign2["default"](NodePath.prototype, require("./family"));
      _lodashObjectAssign2["default"](NodePath.prototype, require("./comments"));

      _arr = t.TYPES;

      _loop = function _loop() {
        var type = _arr[_i];
        var typeKey = "is" + type;
        NodePath.prototype[typeKey] = function (opts) {
          return t[typeKey](this.node, opts);
        };
      };

      for (_i = 0; _i < _arr.length; _i++) {
        _loop();
      }

      _loop2 = function _loop2(type) {
        if (type[0] === "_") return "continue";
        if (t.TYPES.indexOf(type) < 0) t.TYPES.push(type);

        NodePath.prototype["is" + type] = function (opts) {
          return virtualTypes[type].checkPath(this, opts);
        };
      };

      for (type in virtualTypes) {
        _ret2 = _loop2(type);


        // istanbul ignore next
        if (_ret2 === "continue") continue;
      }
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3BhdGgvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBSixHQUFpQixHQUF4QixHQUE4QixFQUFFLFdBQVcsR0FBWCxFQUFoQyxDQUFUO0dBQXJDOzs7O0FBSUEsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7OztBQUlBLFdBQVMsZUFBVCxDQUF5QixRQUF6QixFQUFtQyxXQUFuQyxFQUFnRDtBQUFFLFFBQUksRUFBRSxvQkFBb0IsV0FBcEIsQ0FBRixFQUFvQztBQUFFLFlBQU0sSUFBSSxTQUFKLENBQWMsbUNBQWQsQ0FBTixDQUFGO0tBQXhDO0dBQWxEOzs7OztBQVhBLGNBQVEsVUFBUixHQUFxQixJQUFyQixDQWFJLG1CQUFtQixRQUFRLHFCQUFSO0FBRW5CLHFCQUFlLHdCQUF3QixnQkFBeEI7QUFFZixlQUFTLFFBQVEsVUFBUjtBQUVULGdCQUFVLHVCQUF1QixNQUF2QjtBQUVWLDRCQUFzQixRQUFRLHNCQUFSO0FBRXRCLDZCQUF1Qix1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QUssRUFBTCxDQUFQLENBRGtCO0FBRXRCLFlBQUksVUFBVSxPQUFPLElBQVAsQ0FGUTtBQUd0QixpQkFBUyxTQUFULENBQW1CLE9BQW5CLElBQThCLFVBQVUsSUFBVixFQUFnQjtBQUM1QyxpQkFBTyxFQUFFLE9BQUYsRUFBVyxLQUFLLElBQUwsRUFBVyxJQUF0QixDQUFQLENBRDRDO1NBQWhCLENBSFI7T0FBWjs7QUFRWixXQUFTLEtBQUssQ0FBZCxFQUFpQixLQUFLLEtBQUssTUFBTCxFQUFhLElBQW5DLEVBQXlDO0FBQ3ZDLGdCQUR1QztPQUF6Qzs7QUFJSSxlQUFTLFNBQVQsTUFBUyxDQUFVLElBQVYsRUFBZ0I7QUFDM0IsWUFBSSxLQUFLLENBQUwsTUFBWSxHQUFaLEVBQWlCLE9BQU8sVUFBUCxDQUFyQjtBQUNBLFlBQUksRUFBRSxLQUFGLENBQVEsT0FBUixDQUFnQixJQUFoQixJQUF3QixDQUF4QixFQUEyQixFQUFFLEtBQUYsQ0FBUSxJQUFSLENBQWEsSUFBYixFQUEvQjs7QUFFQSxpQkFBUyxTQUFULENBQW1CLE9BQU8sSUFBUCxDQUFuQixHQUFrQyxVQUFVLElBQVYsRUFBZ0I7QUFDaEQsaUJBQU8sYUFBYSxJQUFiLEVBQW1CLFNBQW5CLENBQTZCLElBQTdCLEVBQW1DLElBQW5DLENBQVAsQ0FEZ0Q7U0FBaEIsQ0FKUDtPQUFoQjs7QUFTYixXQUFTLElBQVQsSUFBaUIsWUFBakIsRUFBK0I7QUFDekIsZ0JBQVEsT0FBTyxJQUFQLEVBRGlCOzs7O0FBSTdCLFlBQUksVUFBVSxVQUFWLEVBQXNCLFNBQTFCO09BSkY7QUFNQSxhQUFPLE9BQVAsR0FBaUIsUUFBUSxTQUFSLENBQWpCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3BhdGgvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgX2xpYlZpcnR1YWxUeXBlcyA9IHJlcXVpcmUoXCIuL2xpYi92aXJ0dWFsLXR5cGVzXCIpO1xuXG52YXIgdmlydHVhbFR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2xpYlZpcnR1YWxUeXBlcyk7XG5cbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi4vaW5kZXhcIik7XG5cbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5kZXgpO1xuXG52YXIgX2xvZGFzaE9iamVjdEFzc2lnbiA9IHJlcXVpcmUoXCJsb2Rhc2gvb2JqZWN0L2Fzc2lnblwiKTtcblxudmFyIF9sb2Rhc2hPYmplY3RBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoT2JqZWN0QXNzaWduKTtcblxudmFyIF9zY29wZSA9IHJlcXVpcmUoXCIuLi9zY29wZVwiKTtcblxudmFyIF9zY29wZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY29wZSk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgTm9kZVBhdGggPSAoZnVuY3Rpb24gKCkge1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgZnVuY3Rpb24gTm9kZVBhdGgoaHViLCBwYXJlbnQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm9kZVBhdGgpO1xuXG4gICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgIHRoaXMuaHViID0gaHViO1xuXG4gICAgdGhpcy5zaG91bGRTa2lwID0gZmFsc2U7XG4gICAgdGhpcy5zaG91bGRTdG9wID0gZmFsc2U7XG4gICAgdGhpcy5yZW1vdmVkID0gZmFsc2U7XG4gICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5vcHRzID0gbnVsbDtcbiAgICB0aGlzLnNraXBLZXlzID0gbnVsbDtcbiAgICB0aGlzLnBhcmVudFBhdGggPSBudWxsO1xuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG4gICAgdGhpcy5jb250YWluZXIgPSBudWxsO1xuICAgIHRoaXMubGlzdEtleSA9IG51bGw7XG4gICAgdGhpcy5pbkxpc3QgPSBmYWxzZTtcbiAgICB0aGlzLnBhcmVudEtleSA9IG51bGw7XG4gICAgdGhpcy5rZXkgPSBudWxsO1xuICAgIHRoaXMubm9kZSA9IG51bGw7XG4gICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgdGhpcy50eXBlID0gbnVsbDtcbiAgICB0aGlzLnR5cGVBbm5vdGF0aW9uID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBOb2RlUGF0aC5nZXQgPSBmdW5jdGlvbiBnZXQoX3JlZikge1xuICAgIHZhciBodWIgPSBfcmVmLmh1YjtcbiAgICB2YXIgcGFyZW50UGF0aCA9IF9yZWYucGFyZW50UGF0aDtcbiAgICB2YXIgcGFyZW50ID0gX3JlZi5wYXJlbnQ7XG4gICAgdmFyIGNvbnRhaW5lciA9IF9yZWYuY29udGFpbmVyO1xuICAgIHZhciBsaXN0S2V5ID0gX3JlZi5saXN0S2V5O1xuICAgIHZhciBrZXkgPSBfcmVmLmtleTtcblxuICAgIGlmICghaHViICYmIHBhcmVudFBhdGgpIHtcbiAgICAgIGh1YiA9IHBhcmVudFBhdGguaHViO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXROb2RlID0gY29udGFpbmVyW2tleV07XG4gICAgdmFyIHBhdGhzID0gcGFyZW50Ll9wYXRocyA9IHBhcmVudC5fcGF0aHMgfHwgW107XG4gICAgdmFyIHBhdGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcGF0aENoZWNrID0gcGF0aHNbaV07XG4gICAgICBpZiAocGF0aENoZWNrLm5vZGUgPT09IHRhcmdldE5vZGUpIHtcbiAgICAgICAgcGF0aCA9IHBhdGhDaGVjaztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFwYXRoKSB7XG4gICAgICBwYXRoID0gbmV3IE5vZGVQYXRoKGh1YiwgcGFyZW50KTtcbiAgICAgIHBhdGhzLnB1c2gocGF0aCk7XG4gICAgfVxuXG4gICAgcGF0aC5zZXR1cChwYXJlbnRQYXRoLCBjb250YWluZXIsIGxpc3RLZXksIGtleSk7XG5cbiAgICByZXR1cm4gcGF0aDtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIE5vZGVQYXRoLnByb3RvdHlwZS5nZXRTY29wZSA9IGZ1bmN0aW9uIGdldFNjb3BlKHNjb3BlKSB7XG4gICAgdmFyIG91clNjb3BlID0gc2NvcGU7XG5cbiAgICAvLyB3ZSdyZSBlbnRlcmluZyBhIG5ldyBzY29wZSBzbyBsZXQncyBjb25zdHJ1Y3QgaXQhXG4gICAgaWYgKHRoaXMuaXNTY29wZSgpKSB7XG4gICAgICBvdXJTY29wZSA9IG5ldyBfc2NvcGUyW1wiZGVmYXVsdFwiXSh0aGlzLCBzY29wZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91clNjb3BlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgTm9kZVBhdGgucHJvdG90eXBlLnNldERhdGEgPSBmdW5jdGlvbiBzZXREYXRhKGtleSwgdmFsKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVtrZXldID0gdmFsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgTm9kZVBhdGgucHJvdG90eXBlLmdldERhdGEgPSBmdW5jdGlvbiBnZXREYXRhKGtleSwgZGVmKSB7XG4gICAgdmFyIHZhbCA9IHRoaXMuZGF0YVtrZXldO1xuICAgIGlmICghdmFsICYmIGRlZikgdmFsID0gdGhpcy5kYXRhW2tleV0gPSBkZWY7XG4gICAgcmV0dXJuIHZhbDtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIE5vZGVQYXRoLnByb3RvdHlwZS5lcnJvcldpdGhOb2RlID0gZnVuY3Rpb24gZXJyb3JXaXRoTm9kZShtc2cpIHtcbiAgICB2YXIgRXJyb3IgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBTeW50YXhFcnJvciA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHJldHVybiB0aGlzLmh1Yi5maWxlLmVycm9yV2l0aE5vZGUodGhpcy5ub2RlLCBtc2csIEVycm9yKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIE5vZGVQYXRoLnByb3RvdHlwZS50cmF2ZXJzZSA9IGZ1bmN0aW9uIHRyYXZlcnNlKHZpc2l0b3IsIHN0YXRlKSB7XG4gICAgX2luZGV4MltcImRlZmF1bHRcIl0odGhpcy5ub2RlLCB2aXNpdG9yLCB0aGlzLnNjb3BlLCBzdGF0ZSwgdGhpcyk7XG4gIH07XG5cbiAgcmV0dXJuIE5vZGVQYXRoO1xufSkoKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBOb2RlUGF0aDtcbl9sb2Rhc2hPYmplY3RBc3NpZ24yW1wiZGVmYXVsdFwiXShOb2RlUGF0aC5wcm90b3R5cGUsIHJlcXVpcmUoXCIuL2FuY2VzdHJ5XCIpKTtcbl9sb2Rhc2hPYmplY3RBc3NpZ24yW1wiZGVmYXVsdFwiXShOb2RlUGF0aC5wcm90b3R5cGUsIHJlcXVpcmUoXCIuL2luZmVyZW5jZVwiKSk7XG5fbG9kYXNoT2JqZWN0QXNzaWduMltcImRlZmF1bHRcIl0oTm9kZVBhdGgucHJvdG90eXBlLCByZXF1aXJlKFwiLi9yZXBsYWNlbWVudFwiKSk7XG5fbG9kYXNoT2JqZWN0QXNzaWduMltcImRlZmF1bHRcIl0oTm9kZVBhdGgucHJvdG90eXBlLCByZXF1aXJlKFwiLi9ldmFsdWF0aW9uXCIpKTtcbl9sb2Rhc2hPYmplY3RBc3NpZ24yW1wiZGVmYXVsdFwiXShOb2RlUGF0aC5wcm90b3R5cGUsIHJlcXVpcmUoXCIuL2NvbnZlcnNpb25cIikpO1xuX2xvZGFzaE9iamVjdEFzc2lnbjJbXCJkZWZhdWx0XCJdKE5vZGVQYXRoLnByb3RvdHlwZSwgcmVxdWlyZShcIi4vaW50cm9zcGVjdGlvblwiKSk7XG5fbG9kYXNoT2JqZWN0QXNzaWduMltcImRlZmF1bHRcIl0oTm9kZVBhdGgucHJvdG90eXBlLCByZXF1aXJlKFwiLi9jb250ZXh0XCIpKTtcbl9sb2Rhc2hPYmplY3RBc3NpZ24yW1wiZGVmYXVsdFwiXShOb2RlUGF0aC5wcm90b3R5cGUsIHJlcXVpcmUoXCIuL3JlbW92YWxcIikpO1xuX2xvZGFzaE9iamVjdEFzc2lnbjJbXCJkZWZhdWx0XCJdKE5vZGVQYXRoLnByb3RvdHlwZSwgcmVxdWlyZShcIi4vbW9kaWZpY2F0aW9uXCIpKTtcbl9sb2Rhc2hPYmplY3RBc3NpZ24yW1wiZGVmYXVsdFwiXShOb2RlUGF0aC5wcm90b3R5cGUsIHJlcXVpcmUoXCIuL2ZhbWlseVwiKSk7XG5fbG9kYXNoT2JqZWN0QXNzaWduMltcImRlZmF1bHRcIl0oTm9kZVBhdGgucHJvdG90eXBlLCByZXF1aXJlKFwiLi9jb21tZW50c1wiKSk7XG5cbnZhciBfYXJyID0gdC5UWVBFUztcblxudmFyIF9sb29wID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdHlwZSA9IF9hcnJbX2ldO1xuICB2YXIgdHlwZUtleSA9IFwiaXNcIiArIHR5cGU7XG4gIE5vZGVQYXRoLnByb3RvdHlwZVt0eXBlS2V5XSA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgcmV0dXJuIHRbdHlwZUtleV0odGhpcy5ub2RlLCBvcHRzKTtcbiAgfTtcbn07XG5cbmZvciAodmFyIF9pID0gMDsgX2kgPCBfYXJyLmxlbmd0aDsgX2krKykge1xuICBfbG9vcCgpO1xufVxuXG52YXIgX2xvb3AyID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgaWYgKHR5cGVbMF0gPT09IFwiX1wiKSByZXR1cm4gXCJjb250aW51ZVwiO1xuICBpZiAodC5UWVBFUy5pbmRleE9mKHR5cGUpIDwgMCkgdC5UWVBFUy5wdXNoKHR5cGUpO1xuXG4gIE5vZGVQYXRoLnByb3RvdHlwZVtcImlzXCIgKyB0eXBlXSA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgcmV0dXJuIHZpcnR1YWxUeXBlc1t0eXBlXS5jaGVja1BhdGgodGhpcywgb3B0cyk7XG4gIH07XG59O1xuXG5mb3IgKHZhciB0eXBlIGluIHZpcnR1YWxUeXBlcykge1xuICB2YXIgX3JldDIgPSBfbG9vcDIodHlwZSk7XG5cbiAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgaWYgKF9yZXQyID09PSBcImNvbnRpbnVlXCIpIGNvbnRpbnVlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
