/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _types, t, remapVisitor, Remaps;

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
      exports.__esModule = true;_types = require("../../../types");
      t = _interopRequireWildcard(_types);
      remapVisitor = {

        /**
         * [Please add a description.]
         */

        enter: function enter(node) {
          if (node._skipModulesRemap) {
            return this.skip();
          }
        },

        /**
         * [Please add a description.]
         */

        ReferencedIdentifier: function ReferencedIdentifier(node, parent, scope, remaps) {
          var formatter = remaps.formatter;

          var remap = remaps.get(scope, node.name);
          if (!remap || node === remap) return;

          if (!scope.hasBinding(node.name) || scope.bindingIdentifierEquals(node.name, formatter.localImports[node.name])) {
            if (!formatter.isLoose() && this.key === "callee" && this.parentPath.isCallExpression()) {
              return t.sequenceExpression([t.literal(0), remap]);
            } else {
              return remap;
            }
          }
        },

        /**
         * [Please add a description.]
         */

        AssignmentExpression: {
          exit: function exit(node, parent, scope, _ref) {
            var formatter = _ref.formatter;

            if (!node._ignoreModulesRemap) {
              var exported = formatter.getExport(node.left, scope);
              if (exported) {
                return formatter.remapExportAssignment(node, exported);
              }
            }
          }
        },

        /**
         * [Please add a description.]
         */

        UpdateExpression: function UpdateExpression(node, parent, scope, _ref2) {
          var formatter = _ref2.formatter;

          var exported = formatter.getExport(node.argument, scope);
          if (!exported) return;

          this.skip();

          // expand to long file assignment expression
          var assign = t.assignmentExpression(node.operator[0] + "=", node.argument, t.literal(1));

          // remap this assignment expression
          var remapped = formatter.remapExportAssignment(assign, exported);

          // we don't need to change the result
          if (t.isExpressionStatement(parent) || node.prefix) {
            return remapped;
          }

          var nodes = [];
          nodes.push(remapped);

          var operator;
          if (node.operator === "--") {
            operator = "+";
          } else {
            // "++"
            operator = "-";
          }
          nodes.push(t.binaryExpression(operator, node.argument, t.literal(1)));

          return t.sequenceExpression(nodes);
        }
      };

      Remaps = function () {
        function Remaps(file, formatter) {
          _classCallCheck(this, Remaps);

          this.formatter = formatter;
          this.file = file;
        }

        /**
         * [Please add a description.]
         */

        Remaps.prototype.run = function run() {
          this.file.path.traverse(remapVisitor, this);
        };

        /**
         * [Please add a description.]
         */

        Remaps.prototype._getKey = function _getKey(name) {
          return name + ":moduleRemap";
        };

        /**
         * [Please add a description.]
         */

        Remaps.prototype.get = function get(scope, name) {
          return scope.getData(this._getKey(name));
        };

        /**
         * [Please add a description.]
         */

        Remaps.prototype.add = function add(scope, name, val) {
          if (this.all) {
            this.all.push({
              name: name,
              scope: scope,
              node: val
            });
          }

          return scope.setData(this._getKey(name), val);
        };

        /**
         * [Please add a description.]
         */

        Remaps.prototype.remove = function remove(scope, name) {
          return scope.removeData(this._getKey(name));
        };

        /**
         * These methods are used by the system module formatter who needs access to all the remaps
         * so it can process them into it's specific setter method. We don't do this by default since
         * no other module formatters need access to this.
         */

        Remaps.prototype.getAll = function getAll() {
          return this.all;
        };

        /**
         * [Please add a description.]
         */

        Remaps.prototype.clearAll = function clearAll() {
          if (this.all) {
            var _arr = this.all;

            for (var _i = 0; _i < _arr.length; _i++) {
              var remap = _arr[_i];
              remap.scope.removeData(this._getKey(remap.name));
            }
          }

          this.all = [];
        };

        return Remaps;
      }();

      exports["default"] = Remaps;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vbW9kdWxlcy9saWIvcmVtYXBzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBS0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7OztBQUlBLFdBQVMsZUFBVCxDQUF5QixRQUF6QixFQUFtQyxXQUFuQyxFQUFnRDtBQUFFLFFBQUksRUFBRSxvQkFBb0IsV0FBcEIsQ0FBRixFQUFvQztBQUFFLFlBQU0sSUFBSSxTQUFKLENBQWMsbUNBQWQsQ0FBTixDQUFGO0tBQXhDO0dBQWxEOzs7OztBQVBBLGNBQVEsVUFBUixHQUFxQixJQUFyQixDQVNJLFNBQVMsUUFBUSxnQkFBUjtBQUVULFVBQUksd0JBQXdCLE1BQXhCO0FBTUoscUJBQWU7Ozs7OztBQU1qQixlQUFPLFNBQVMsS0FBVCxDQUFlLElBQWYsRUFBcUI7QUFDMUIsY0FBSSxLQUFLLGlCQUFMLEVBQXdCO0FBQzFCLG1CQUFPLEtBQUssSUFBTCxFQUFQLENBRDBCO1dBQTVCO1NBREs7Ozs7OztBQVVQLDhCQUFzQixTQUFTLG9CQUFULENBQThCLElBQTlCLEVBQW9DLE1BQXBDLEVBQTRDLEtB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QVAsQ0FEcUQ7U0FBN0I7Ozs7Ozs7O0FBcERGLGNBOER4QixDQUFPLFNBQVAsQ0FBaUIsTUFBakIsR0FBMEIsU0FBUyxNQUFULEdBQWtCO0FBQzFDLGlCQUFPLEtBQUssR0FBTCxDQURtQztTQUFsQjs7Ozs7O0FBOURGLGNBc0V4QixDQUFPLFNBQVAsQ0FBaUIsUUFBakIsR0FBNEIsU0FBUyxRQUFULEdBQW9CO0FBQzlDLGNBQUksS0FBSyxHQUFMLEVBQVU7QUFDWixnQkFBSSxPQUFPLEtBQUssR0FBTCxDQURDOztBQUdaLGlCQUFLLElBQUksS0FBSyxDQUFMLEVBQVEsS0FBSyxLQUFLLE1BQUwsRUFBYSxJQUFuQyxFQUF5QztBQUN2QyxrQkFBSSxRQUFRLEtBQUssRUFBTCxDQUFSLENBRG1DO0FBRXZDLG9CQUFNLEtBQU4sQ0FBWSxVQUFaLENBQXVCLEtBQUssT0FBTCxDQUFhLE1BQU0sSUFBTixDQUFwQyxFQUZ1QzthQUF6QztXQUhGOztBQVNBLGVBQUssR0FBTCxHQUFXLEVBQVgsQ0FWOEM7U0FBcEIsQ0F0RUo7O0FBbUZ4QixlQUFPLE1BQVAsQ0FuRndCO09BQVo7O0FBc0ZkLGNBQVEsU0FBUixJQUFxQixNQUFyQjtBQUNBLGFBQU8sT0FBUCxHQUFpQixRQUFRLFNBQVIsQ0FBakIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmFuc2Zvcm1hdGlvbi9tb2R1bGVzL2xpYi9yZW1hcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgcmVtYXBWaXNpdG9yID0ge1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgZW50ZXI6IGZ1bmN0aW9uIGVudGVyKG5vZGUpIHtcbiAgICBpZiAobm9kZS5fc2tpcE1vZHVsZXNSZW1hcCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2tpcCgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFJlZmVyZW5jZWRJZGVudGlmaWVyOiBmdW5jdGlvbiBSZWZlcmVuY2VkSWRlbnRpZmllcihub2RlLCBwYXJlbnQsIHNjb3BlLCByZW1hcHMpIHtcbiAgICB2YXIgZm9ybWF0dGVyID0gcmVtYXBzLmZvcm1hdHRlcjtcblxuICAgIHZhciByZW1hcCA9IHJlbWFwcy5nZXQoc2NvcGUsIG5vZGUubmFtZSk7XG4gICAgaWYgKCFyZW1hcCB8fCBub2RlID09PSByZW1hcCkgcmV0dXJuO1xuXG4gICAgaWYgKCFzY29wZS5oYXNCaW5kaW5nKG5vZGUubmFtZSkgfHwgc2NvcGUuYmluZGluZ0lkZW50aWZpZXJFcXVhbHMobm9kZS5uYW1lLCBmb3JtYXR0ZXIubG9jYWxJbXBvcnRzW25vZGUubmFtZV0pKSB7XG4gICAgICBpZiAoIWZvcm1hdHRlci5pc0xvb3NlKCkgJiYgdGhpcy5rZXkgPT09IFwiY2FsbGVlXCIgJiYgdGhpcy5wYXJlbnRQYXRoLmlzQ2FsbEV4cHJlc3Npb24oKSkge1xuICAgICAgICByZXR1cm4gdC5zZXF1ZW5jZUV4cHJlc3Npb24oW3QubGl0ZXJhbCgwKSwgcmVtYXBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZW1hcDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBBc3NpZ25tZW50RXhwcmVzc2lvbjoge1xuICAgIGV4aXQ6IGZ1bmN0aW9uIGV4aXQobm9kZSwgcGFyZW50LCBzY29wZSwgX3JlZikge1xuICAgICAgdmFyIGZvcm1hdHRlciA9IF9yZWYuZm9ybWF0dGVyO1xuXG4gICAgICBpZiAoIW5vZGUuX2lnbm9yZU1vZHVsZXNSZW1hcCkge1xuICAgICAgICB2YXIgZXhwb3J0ZWQgPSBmb3JtYXR0ZXIuZ2V0RXhwb3J0KG5vZGUubGVmdCwgc2NvcGUpO1xuICAgICAgICBpZiAoZXhwb3J0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gZm9ybWF0dGVyLnJlbWFwRXhwb3J0QXNzaWdubWVudChub2RlLCBleHBvcnRlZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBVcGRhdGVFeHByZXNzaW9uOiBmdW5jdGlvbiBVcGRhdGVFeHByZXNzaW9uKG5vZGUsIHBhcmVudCwgc2NvcGUsIF9yZWYyKSB7XG4gICAgdmFyIGZvcm1hdHRlciA9IF9yZWYyLmZvcm1hdHRlcjtcblxuICAgIHZhciBleHBvcnRlZCA9IGZvcm1hdHRlci5nZXRFeHBvcnQobm9kZS5hcmd1bWVudCwgc2NvcGUpO1xuICAgIGlmICghZXhwb3J0ZWQpIHJldHVybjtcblxuICAgIHRoaXMuc2tpcCgpO1xuXG4gICAgLy8gZXhwYW5kIHRvIGxvbmcgZmlsZSBhc3NpZ25tZW50IGV4cHJlc3Npb25cbiAgICB2YXIgYXNzaWduID0gdC5hc3NpZ25tZW50RXhwcmVzc2lvbihub2RlLm9wZXJhdG9yWzBdICsgXCI9XCIsIG5vZGUuYXJndW1lbnQsIHQubGl0ZXJhbCgxKSk7XG5cbiAgICAvLyByZW1hcCB0aGlzIGFzc2lnbm1lbnQgZXhwcmVzc2lvblxuICAgIHZhciByZW1hcHBlZCA9IGZvcm1hdHRlci5yZW1hcEV4cG9ydEFzc2lnbm1lbnQoYXNzaWduLCBleHBvcnRlZCk7XG5cbiAgICAvLyB3ZSBkb24ndCBuZWVkIHRvIGNoYW5nZSB0aGUgcmVzdWx0XG4gICAgaWYgKHQuaXNFeHByZXNzaW9uU3RhdGVtZW50KHBhcmVudCkgfHwgbm9kZS5wcmVmaXgpIHtcbiAgICAgIHJldHVybiByZW1hcHBlZDtcbiAgICB9XG5cbiAgICB2YXIgbm9kZXMgPSBbXTtcbiAgICBub2Rlcy5wdXNoKHJlbWFwcGVkKTtcblxuICAgIHZhciBvcGVyYXRvcjtcbiAgICBpZiAobm9kZS5vcGVyYXRvciA9PT0gXCItLVwiKSB7XG4gICAgICBvcGVyYXRvciA9IFwiK1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBcIisrXCJcbiAgICAgIG9wZXJhdG9yID0gXCItXCI7XG4gICAgfVxuICAgIG5vZGVzLnB1c2godC5iaW5hcnlFeHByZXNzaW9uKG9wZXJhdG9yLCBub2RlLmFyZ3VtZW50LCB0LmxpdGVyYWwoMSkpKTtcblxuICAgIHJldHVybiB0LnNlcXVlbmNlRXhwcmVzc2lvbihub2Rlcyk7XG4gIH1cbn07XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIFJlbWFwcyA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFJlbWFwcyhmaWxlLCBmb3JtYXR0ZXIpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVtYXBzKTtcblxuICAgIHRoaXMuZm9ybWF0dGVyID0gZm9ybWF0dGVyO1xuICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gIH1cblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFJlbWFwcy5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gcnVuKCkge1xuICAgIHRoaXMuZmlsZS5wYXRoLnRyYXZlcnNlKHJlbWFwVmlzaXRvciwgdGhpcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBSZW1hcHMucHJvdG90eXBlLl9nZXRLZXkgPSBmdW5jdGlvbiBfZ2V0S2V5KG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZSArIFwiOm1vZHVsZVJlbWFwXCI7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBSZW1hcHMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChzY29wZSwgbmFtZSkge1xuICAgIHJldHVybiBzY29wZS5nZXREYXRhKHRoaXMuX2dldEtleShuYW1lKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBSZW1hcHMucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZChzY29wZSwgbmFtZSwgdmFsKSB7XG4gICAgaWYgKHRoaXMuYWxsKSB7XG4gICAgICB0aGlzLmFsbC5wdXNoKHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgc2NvcGU6IHNjb3BlLFxuICAgICAgICBub2RlOiB2YWxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzY29wZS5zZXREYXRhKHRoaXMuX2dldEtleShuYW1lKSwgdmFsKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFJlbWFwcy5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKHNjb3BlLCBuYW1lKSB7XG4gICAgcmV0dXJuIHNjb3BlLnJlbW92ZURhdGEodGhpcy5fZ2V0S2V5KG5hbWUpKTtcbiAgfTtcblxuICAvKipcbiAgICogVGhlc2UgbWV0aG9kcyBhcmUgdXNlZCBieSB0aGUgc3lzdGVtIG1vZHVsZSBmb3JtYXR0ZXIgd2hvIG5lZWRzIGFjY2VzcyB0byBhbGwgdGhlIHJlbWFwc1xuICAgKiBzbyBpdCBjYW4gcHJvY2VzcyB0aGVtIGludG8gaXQncyBzcGVjaWZpYyBzZXR0ZXIgbWV0aG9kLiBXZSBkb24ndCBkbyB0aGlzIGJ5IGRlZmF1bHQgc2luY2VcbiAgICogbm8gb3RoZXIgbW9kdWxlIGZvcm1hdHRlcnMgbmVlZCBhY2Nlc3MgdG8gdGhpcy5cbiAgICovXG5cbiAgUmVtYXBzLnByb3RvdHlwZS5nZXRBbGwgPSBmdW5jdGlvbiBnZXRBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgUmVtYXBzLnByb3RvdHlwZS5jbGVhckFsbCA9IGZ1bmN0aW9uIGNsZWFyQWxsKCkge1xuICAgIGlmICh0aGlzLmFsbCkge1xuICAgICAgdmFyIF9hcnIgPSB0aGlzLmFsbDtcblxuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IF9hcnIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciByZW1hcCA9IF9hcnJbX2ldO1xuICAgICAgICByZW1hcC5zY29wZS5yZW1vdmVEYXRhKHRoaXMuX2dldEtleShyZW1hcC5uYW1lKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hbGwgPSBbXTtcbiAgfTtcblxuICByZXR1cm4gUmVtYXBzO1xufSkoKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBSZW1hcHM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
