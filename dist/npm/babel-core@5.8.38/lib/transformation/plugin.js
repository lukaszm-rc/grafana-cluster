/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _pluginPass, _pluginPass2, _messages, messages, _traversal, _traversal2, _lodashObjectAssign, _lodashObjectAssign2, _lodashLangClone, _lodashLangClone2, _file, _file2, _types, t, VALID_PLUGIN_PROPERTIES, VALID_METADATA_PROPERTIES, Plugin;

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
      exports.__esModule = true;_pluginPass = require("./plugin-pass");
      _pluginPass2 = _interopRequireDefault(_pluginPass);
      _messages = require("../messages");
      messages = _interopRequireWildcard(_messages);
      _traversal = require("../traversal");
      _traversal2 = _interopRequireDefault(_traversal);
      _lodashObjectAssign = require("lodash/object/assign");
      _lodashObjectAssign2 = _interopRequireDefault(_lodashObjectAssign);
      _lodashLangClone = require("lodash/lang/clone");
      _lodashLangClone2 = _interopRequireDefault(_lodashLangClone);
      _file = require("./file");
      _file2 = _interopRequireDefault(_file);
      _types = require("../types");
      t = _interopRequireWildcard(_types);
      VALID_PLUGIN_PROPERTIES = ["visitor", "metadata", "manipulateOptions", "post", "pre"];
      VALID_METADATA_PROPERTIES = ["dependencies", "optional", "stage", "group", "experimental", "secondPass"];

      Plugin = function () {
        function Plugin(key, plugin) {
          _classCallCheck(this, Plugin);

          Plugin.validate(key, plugin);

          plugin = _lodashObjectAssign2["default"]({}, plugin);

          var take = function take(key) {
            var val = plugin[key];
            delete plugin[key];
            return val;
          };

          this.manipulateOptions = take("manipulateOptions");
          this.metadata = take("metadata") || {};
          this.dependencies = this.metadata.dependencies || [];
          this.post = take("post");
          this.pre = take("pre");

          //

          if (this.metadata.stage != null) {
            this.metadata.optional = true;
          }

          //

          this.visitor = this.normalize(_lodashLangClone2["default"](take("visitor")) || {});
          this.key = key;
        }

        /**
         * [Please add a description.]
         */

        Plugin.validate = function validate(name, plugin) {
          for (var key in plugin) {
            if (key[0] === "_") continue;
            if (VALID_PLUGIN_PROPERTIES.indexOf(key) >= 0) continue;

            var msgType = "pluginInvalidProperty";
            if (t.TYPES.indexOf(key) >= 0) msgType = "pluginInvalidPropertyVisitor";
            throw new Error(messages.get(msgType, name, key));
          }

          for (var key in plugin.metadata) {
            if (VALID_METADATA_PROPERTIES.indexOf(key) >= 0) continue;

            throw new Error(messages.get("pluginInvalidProperty", name, "metadata." + key));
          }
        };

        /**
         * [Please add a description.]
         */

        Plugin.prototype.normalize = function normalize(visitor) {
          _traversal2["default"].explode(visitor);
          return visitor;
        };

        /**
         * [Please add a description.]
         */

        Plugin.prototype.buildPass = function buildPass(file) {
          // validate Transformer instance
          if (!(file instanceof _file2["default"])) {
            throw new TypeError(messages.get("pluginNotFile", this.key));
          }

          return new _pluginPass2["default"](file, this);
        };

        return Plugin;
      }();

      exports["default"] = Plugin;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vcGx1Z2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBS0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7OztBQUlBLFdBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLEdBQXhCLEdBQThCLEVBQUUsV0FBVyxHQUFYLEVBQWhDLENBQVQ7R0FBckM7Ozs7QUFJQSxXQUFTLGVBQVQsQ0FBeUIsUUFBekIsRUFBbUMsV0FBbkMsRUFBZ0Q7QUFBRSxRQUFJLEVBQUUsb0JBQW9CLFdBQXBCLENBQUYsRUFBb0M7QUFBRSxZQUFNLElBQUksU0FBSixDQUFjLG1DQUFkLENBQU4sQ0FBRjtLQUF4QztHQUFsRDs7Ozs7QUFYQSxjQUFRLFVBQVIsR0FBcUIsSUFBckIsQ0FhSSxjQUFjLFFBQVEsZUFBUjtBQUVkLHFCQUFlLHVCQUF1QixXQUF2QjtBQUVmLGtCQUFZLFFBQVEsYUFBUjtBQUVaLGlCQUFXLHdCQUF3QixTQUF4QjtBQUVYLG1CQUFhLFFBQVEsY0FBUjtBQUViLG9CQUFjLHVCQUF1QixV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QUgrQjtXQUFqQztTQVZnQjs7Ozs7O0FBcENNLGNBeUR4QixDQUFPLFNBQVAsQ0FBaUIsU0FBakIsR0FBNkIsU0FBUyxTQUFULENBQW1CLE9BQW5CLEVBQTRCO0FBQ3ZELHNCQUFZLFNBQVosRUFBdUIsT0FBdkIsQ0FBK0IsT0FBL0IsRUFEdUQ7QUFFdkQsaUJBQU8sT0FBUCxDQUZ1RDtTQUE1Qjs7Ozs7O0FBekRMLGNBa0V4QixDQUFPLFNBQVAsQ0FBaUIsU0FBakIsR0FBNkIsU0FBUyxTQUFULENBQW1CLElBQW5CLEVBQXlCOztBQUVwRCxjQUFJLEVBQUUsZ0JBQWdCLE9BQU8sU0FBUCxDQUFoQixDQUFGLEVBQXNDO0FBQ3hDLGtCQUFNLElBQUksU0FBSixDQUFjLFNBQVMsR0FBVCxDQUFhLGVBQWIsRUFBOEIsS0FBSyxHQUFMLENBQTVDLENBQU4sQ0FEd0M7V0FBMUM7O0FBSUEsaUJBQU8sSUFBSSxhQUFhLFNBQWIsQ0FBSixDQUE0QixJQUE1QixFQUFrQyxJQUFsQyxDQUFQLENBTm9EO1NBQXpCLENBbEVMOztBQTJFeEIsZUFBTyxNQUFQLENBM0V3QjtPQUFaOztBQThFZCxjQUFRLFNBQVIsSUFBcUIsTUFBckI7QUFDQSxhQUFPLE9BQVAsR0FBaUIsUUFBUSxTQUFSLENBQWpCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vcGx1Z2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIF9wbHVnaW5QYXNzID0gcmVxdWlyZShcIi4vcGx1Z2luLXBhc3NcIik7XG5cbnZhciBfcGx1Z2luUGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbHVnaW5QYXNzKTtcblxudmFyIF9tZXNzYWdlcyA9IHJlcXVpcmUoXCIuLi9tZXNzYWdlc1wiKTtcblxudmFyIG1lc3NhZ2VzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX21lc3NhZ2VzKTtcblxudmFyIF90cmF2ZXJzYWwgPSByZXF1aXJlKFwiLi4vdHJhdmVyc2FsXCIpO1xuXG52YXIgX3RyYXZlcnNhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmF2ZXJzYWwpO1xuXG52YXIgX2xvZGFzaE9iamVjdEFzc2lnbiA9IHJlcXVpcmUoXCJsb2Rhc2gvb2JqZWN0L2Fzc2lnblwiKTtcblxudmFyIF9sb2Rhc2hPYmplY3RBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoT2JqZWN0QXNzaWduKTtcblxudmFyIF9sb2Rhc2hMYW5nQ2xvbmUgPSByZXF1aXJlKFwibG9kYXNoL2xhbmcvY2xvbmVcIik7XG5cbnZhciBfbG9kYXNoTGFuZ0Nsb25lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaExhbmdDbG9uZSk7XG5cbnZhciBfZmlsZSA9IHJlcXVpcmUoXCIuL2ZpbGVcIik7XG5cbnZhciBfZmlsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9maWxlKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG52YXIgVkFMSURfUExVR0lOX1BST1BFUlRJRVMgPSBbXCJ2aXNpdG9yXCIsIFwibWV0YWRhdGFcIiwgXCJtYW5pcHVsYXRlT3B0aW9uc1wiLCBcInBvc3RcIiwgXCJwcmVcIl07XG5cbnZhciBWQUxJRF9NRVRBREFUQV9QUk9QRVJUSUVTID0gW1wiZGVwZW5kZW5jaWVzXCIsIFwib3B0aW9uYWxcIiwgXCJzdGFnZVwiLCBcImdyb3VwXCIsIFwiZXhwZXJpbWVudGFsXCIsIFwic2Vjb25kUGFzc1wiXTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgUGx1Z2luID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUGx1Z2luKGtleSwgcGx1Z2luKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBsdWdpbik7XG5cbiAgICBQbHVnaW4udmFsaWRhdGUoa2V5LCBwbHVnaW4pO1xuXG4gICAgcGx1Z2luID0gX2xvZGFzaE9iamVjdEFzc2lnbjJbXCJkZWZhdWx0XCJdKHt9LCBwbHVnaW4pO1xuXG4gICAgdmFyIHRha2UgPSBmdW5jdGlvbiB0YWtlKGtleSkge1xuICAgICAgdmFyIHZhbCA9IHBsdWdpbltrZXldO1xuICAgICAgZGVsZXRlIHBsdWdpbltrZXldO1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9O1xuXG4gICAgdGhpcy5tYW5pcHVsYXRlT3B0aW9ucyA9IHRha2UoXCJtYW5pcHVsYXRlT3B0aW9uc1wiKTtcbiAgICB0aGlzLm1ldGFkYXRhID0gdGFrZShcIm1ldGFkYXRhXCIpIHx8IHt9O1xuICAgIHRoaXMuZGVwZW5kZW5jaWVzID0gdGhpcy5tZXRhZGF0YS5kZXBlbmRlbmNpZXMgfHwgW107XG4gICAgdGhpcy5wb3N0ID0gdGFrZShcInBvc3RcIik7XG4gICAgdGhpcy5wcmUgPSB0YWtlKFwicHJlXCIpO1xuXG4gICAgLy9cblxuICAgIGlmICh0aGlzLm1ldGFkYXRhLnN0YWdlICE9IG51bGwpIHtcbiAgICAgIHRoaXMubWV0YWRhdGEub3B0aW9uYWwgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vXG5cbiAgICB0aGlzLnZpc2l0b3IgPSB0aGlzLm5vcm1hbGl6ZShfbG9kYXNoTGFuZ0Nsb25lMltcImRlZmF1bHRcIl0odGFrZShcInZpc2l0b3JcIikpIHx8IHt9KTtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgfVxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgUGx1Z2luLnZhbGlkYXRlID0gZnVuY3Rpb24gdmFsaWRhdGUobmFtZSwgcGx1Z2luKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHBsdWdpbikge1xuICAgICAgaWYgKGtleVswXSA9PT0gXCJfXCIpIGNvbnRpbnVlO1xuICAgICAgaWYgKFZBTElEX1BMVUdJTl9QUk9QRVJUSUVTLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcblxuICAgICAgdmFyIG1zZ1R5cGUgPSBcInBsdWdpbkludmFsaWRQcm9wZXJ0eVwiO1xuICAgICAgaWYgKHQuVFlQRVMuaW5kZXhPZihrZXkpID49IDApIG1zZ1R5cGUgPSBcInBsdWdpbkludmFsaWRQcm9wZXJ0eVZpc2l0b3JcIjtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlcy5nZXQobXNnVHlwZSwgbmFtZSwga2V5KSk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIga2V5IGluIHBsdWdpbi5tZXRhZGF0YSkge1xuICAgICAgaWYgKFZBTElEX01FVEFEQVRBX1BST1BFUlRJRVMuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZXMuZ2V0KFwicGx1Z2luSW52YWxpZFByb3BlcnR5XCIsIG5hbWUsIFwibWV0YWRhdGEuXCIgKyBrZXkpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBQbHVnaW4ucHJvdG90eXBlLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIG5vcm1hbGl6ZSh2aXNpdG9yKSB7XG4gICAgX3RyYXZlcnNhbDJbXCJkZWZhdWx0XCJdLmV4cGxvZGUodmlzaXRvcik7XG4gICAgcmV0dXJuIHZpc2l0b3I7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBQbHVnaW4ucHJvdG90eXBlLmJ1aWxkUGFzcyA9IGZ1bmN0aW9uIGJ1aWxkUGFzcyhmaWxlKSB7XG4gICAgLy8gdmFsaWRhdGUgVHJhbnNmb3JtZXIgaW5zdGFuY2VcbiAgICBpZiAoIShmaWxlIGluc3RhbmNlb2YgX2ZpbGUyW1wiZGVmYXVsdFwiXSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IobWVzc2FnZXMuZ2V0KFwicGx1Z2luTm90RmlsZVwiLCB0aGlzLmtleSkpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgX3BsdWdpblBhc3MyW1wiZGVmYXVsdFwiXShmaWxlLCB0aGlzKTtcbiAgfTtcblxuICByZXR1cm4gUGx1Z2luO1xufSkoKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBQbHVnaW47XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
