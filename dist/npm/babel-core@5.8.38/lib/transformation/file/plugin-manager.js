/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _typeof, _createClass, _transformer, _transformer2, _plugin, _plugin2, _types, types, _messages, messages, _tryResolve, _tryResolve2, _traversal, _traversal2, _helpersParse, _helpersParse2, context, PluginManager;

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
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      exports.__esModule = true;
      // istanbul ignore next

      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      _transformer = require("../transformer");
      _transformer2 = _interopRequireDefault(_transformer);
      _plugin = require("../plugin");
      _plugin2 = _interopRequireDefault(_plugin);
      _types = require("../../types");
      types = _interopRequireWildcard(_types);
      _messages = require("../../messages");
      messages = _interopRequireWildcard(_messages);
      _tryResolve = require("try-resolve");
      _tryResolve2 = _interopRequireDefault(_tryResolve);
      _traversal = require("../../traversal");
      _traversal2 = _interopRequireDefault(_traversal);
      _helpersParse = require("../../helpers/parse");
      _helpersParse2 = _interopRequireDefault(_helpersParse);
      context = {
        messages: messages,
        Transformer: _transformer2["default"],
        Plugin: _plugin2["default"],
        types: types,
        parse: _helpersParse2["default"],
        traverse: _traversal2["default"]
      };

      PluginManager = function () {

        /**
         * [Please add a description.]
         */

        PluginManager.memoisePluginContainer = function memoisePluginContainer(fn) {
          for (var i = 0; i < PluginManager.memoisedPlugins.length; i++) {
            var plugin = PluginManager.memoisedPlugins[i];
            if (plugin.container === fn) return plugin.transformer;
          }

          var transformer = fn(context);
          PluginManager.memoisedPlugins.push({
            container: fn,
            transformer: transformer
          });
          return transformer;
        };

        /**
         * [Please add a description.]
         */

        _createClass(PluginManager, null, [{
          key: "memoisedPlugins",

          /**
           * [Please add a description.]
           */

          value: [],
          enumerable: true
        }, {
          key: "positions",
          value: ["before", "after"],

          /**
           * [Please add a description.]
           */

          enumerable: true
        }]);

        function PluginManager() {
          var _ref = arguments.length <= 0 || arguments[0] === undefined ? { transformers: {}, before: [], after: [] } : arguments[0];

          var file = _ref.file;
          var transformers = _ref.transformers;
          var before = _ref.before;
          var after = _ref.after;

          _classCallCheck(this, PluginManager);

          this.transformers = transformers;
          this.file = file;
          this.before = before;
          this.after = after;
        }

        /**
         * [Please add a description.]
         */

        PluginManager.prototype.subnormaliseString = function subnormaliseString(name, position) {
          // this is a plugin in the form of "foobar" or "foobar:after"
          // where the optional colon is the delimiter for plugin position in the transformer stack

          var match = name.match(/^(.*?):(after|before)$/);
          if (match) {
            ;

            name = match[1];
            position = match[2];
          }var loc = _tryResolve2["default"].relative("babel-plugin-" + name) || _tryResolve2["default"].relative(name);
          if (loc) {
            var plugin = require(loc);
            return {
              position: position,
              plugin: plugin["default"] || plugin
            };
          } else {
            throw new ReferenceError(messages.get("pluginUnknown", name));
          }
        };

        /**
         * [Please add a description.]
         */

        PluginManager.prototype.validate = function validate(name, plugin) {
          // validate transformer key
          var key = plugin.key;
          if (this.transformers[key]) {
            throw new ReferenceError(messages.get("pluginKeyCollision", key));
          }

          // validate Transformer instance
          if (!plugin.buildPass || plugin.constructor.name !== "Plugin") {
            throw new TypeError(messages.get("pluginNotTransformer", name));
          }

          // register as a plugin
          plugin.metadata.plugin = true;
        };

        /**
         * [Please add a description.]
         */

        PluginManager.prototype.add = function add(name) {
          var position;
          var plugin;

          if (name) {
            if ((typeof name === "undefined" ? "undefined" : _typeof(name)) === "object" && name.transformer) {
              plugin = name.transformer;
              position = name.position;
            } else if (typeof name !== "string") {
              // not a string so we'll just assume that it's a direct Transformer instance, if not then
              // the checks later on will complain
              plugin = name;
            }

            if (typeof name === "string") {
              var _subnormaliseString = this.subnormaliseString(name, position);

              plugin = _subnormaliseString.plugin;
              position = _subnormaliseString.position;
            }
          } else {
            throw new TypeError(messages.get("pluginIllegalKind", typeof name === "undefined" ? "undefined" : _typeof(name), name));
          }

          // default position
          position = position || "before";

          // validate position
          if (PluginManager.positions.indexOf(position) < 0) {
            throw new TypeError(messages.get("pluginIllegalPosition", position, name));
          }

          // allow plugin containers to be specified so they don't have to manually require
          if (typeof plugin === "function") {
            plugin = PluginManager.memoisePluginContainer(plugin);
          }

          //
          this.validate(name, plugin);

          // build!
          var pass = this.transformers[plugin.key] = plugin.buildPass(this.file);
          if (pass.canTransform()) {
            var stack = position === "before" ? this.before : this.after;
            stack.push(pass);
          }
        };

        return PluginManager;
      }();

      exports["default"] = PluginManager;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vZmlsZS9wbHVnaW4tbWFuYWdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQVNBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7QUFJQSxXQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBSixHQUFpQixHQUF4QixHQUE4QixFQUFFLFdBQVcsR0FBWCxFQUFoQyxDQUFUO0dBQXJDOzs7O0FBSUEsV0FBUyxlQUFULENBQXlCLFFBQXpCLEVBQW1DLFdBQW5DLEVBQWdEO0FBQUUsUUFBSSxFQUFFLG9CQUFvQixXQUFwQixDQUFGLEVBQW9DO0FBQUUsWUFBTSxJQUFJLFNBQUosQ0FBYyxtQ0FBZCxDQUFOLENBQUY7S0FBeEM7R0FBbEQ7Ozs7Ozs7Ozs7QUFmQSxjQUFRLFVBQVIsR0FBcUIsSUFBckI7OztBQUdJLHFCQUFlLFlBQWE7QUFBRSxpQkFBUyxnQkFBVCxDQUEwQixNQUExQixFQUFrQyxLQUFsQyxFQUF5QztBQUFFLGVBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLE1BQU0sTUFBTixF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QUFhLG1CQUFiLFNBQXlDLGtEQUF6QyxFQUErQyxJQUEvQyxDQUFkLENBQU4sQ0FESztXQWhCUDs7O0FBSitDLGtCQXlCL0MsR0FBVyxZQUFZLFFBQVo7OztBQXpCb0MsY0E0QjNDLGNBQWMsU0FBZCxDQUF3QixPQUF4QixDQUFnQyxRQUFoQyxJQUE0QyxDQUE1QyxFQUErQztBQUNqRCxrQkFBTSxJQUFJLFNBQUosQ0FBYyxTQUFTLEdBQVQsQ0FBYSx1QkFBYixFQUFzQyxRQUF0QyxFQUFnRCxJQUFoRCxDQUFkLENBQU4sQ0FEaUQ7V0FBbkQ7OztBQTVCK0MsY0FpQzNDLE9BQU8sTUFBUCxLQUFrQixVQUFsQixFQUE4QjtBQUNoQyxxQkFBUyxjQUFjLHNCQUFkLENBQXFDLE1BQXJDLENBQVQsQ0FEZ0M7V0FBbEM7OztBQWpDK0MsY0FzQy9DLENBQUssUUFBTCxDQUFjLElBQWQsRUFBb0IsTUFBcEI7OztBQXRDK0MsY0F5QzNDLE9BQU8sS0FBSyxZQUFMLENBQWtCLE9BQU8sR0FBUCxDQUFsQixHQUFnQyxPQUFPLFNBQVAsQ0FBaUIsS0FBSyxJQUFMLENBQWpELENBekNvQztBQTBDL0MsY0FBSSxLQUFLLFlBQUwsRUFBSixFQUF5QjtBQUN2QixnQkFBSSxRQUFRLGFBQWEsUUFBYixHQUF3QixLQUFLLE1BQUwsR0FBYyxLQUFLLEtBQUwsQ0FEM0I7QUFFdkIsa0JBQU0sSUFBTixDQUFXLElBQVgsRUFGdUI7V0FBekI7U0ExQzRCLENBOUdDOztBQThKL0IsZUFBTyxhQUFQLENBOUorQjtPQUFaOztBQWlLckIsY0FBUSxTQUFSLElBQXFCLGFBQXJCO0FBQ0EsYUFBTyxPQUFQLEdBQWlCLFFBQVEsU0FBUixDQUFqQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYW5zZm9ybWF0aW9uL2ZpbGUvcGx1Z2luLW1hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBfdHJhbnNmb3JtZXIgPSByZXF1aXJlKFwiLi4vdHJhbnNmb3JtZXJcIik7XG5cbnZhciBfdHJhbnNmb3JtZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtZXIpO1xuXG52YXIgX3BsdWdpbiA9IHJlcXVpcmUoXCIuLi9wbHVnaW5cIik7XG5cbnZhciBfcGx1Z2luMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsdWdpbik7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0eXBlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbnZhciBfbWVzc2FnZXMgPSByZXF1aXJlKFwiLi4vLi4vbWVzc2FnZXNcIik7XG5cbnZhciBtZXNzYWdlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9tZXNzYWdlcyk7XG5cbnZhciBfdHJ5UmVzb2x2ZSA9IHJlcXVpcmUoXCJ0cnktcmVzb2x2ZVwiKTtcblxudmFyIF90cnlSZXNvbHZlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyeVJlc29sdmUpO1xuXG52YXIgX3RyYXZlcnNhbCA9IHJlcXVpcmUoXCIuLi8uLi90cmF2ZXJzYWxcIik7XG5cbnZhciBfdHJhdmVyc2FsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYXZlcnNhbCk7XG5cbnZhciBfaGVscGVyc1BhcnNlID0gcmVxdWlyZShcIi4uLy4uL2hlbHBlcnMvcGFyc2VcIik7XG5cbnZhciBfaGVscGVyc1BhcnNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNQYXJzZSk7XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIGNvbnRleHQgPSB7XG4gIG1lc3NhZ2VzOiBtZXNzYWdlcyxcbiAgVHJhbnNmb3JtZXI6IF90cmFuc2Zvcm1lcjJbXCJkZWZhdWx0XCJdLFxuICBQbHVnaW46IF9wbHVnaW4yW1wiZGVmYXVsdFwiXSxcbiAgdHlwZXM6IHR5cGVzLFxuICBwYXJzZTogX2hlbHBlcnNQYXJzZTJbXCJkZWZhdWx0XCJdLFxuICB0cmF2ZXJzZTogX3RyYXZlcnNhbDJbXCJkZWZhdWx0XCJdXG59O1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciBQbHVnaW5NYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFBsdWdpbk1hbmFnZXIubWVtb2lzZVBsdWdpbkNvbnRhaW5lciA9IGZ1bmN0aW9uIG1lbW9pc2VQbHVnaW5Db250YWluZXIoZm4pIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IFBsdWdpbk1hbmFnZXIubWVtb2lzZWRQbHVnaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcGx1Z2luID0gUGx1Z2luTWFuYWdlci5tZW1vaXNlZFBsdWdpbnNbaV07XG4gICAgICBpZiAocGx1Z2luLmNvbnRhaW5lciA9PT0gZm4pIHJldHVybiBwbHVnaW4udHJhbnNmb3JtZXI7XG4gICAgfVxuXG4gICAgdmFyIHRyYW5zZm9ybWVyID0gZm4oY29udGV4dCk7XG4gICAgUGx1Z2luTWFuYWdlci5tZW1vaXNlZFBsdWdpbnMucHVzaCh7XG4gICAgICBjb250YWluZXI6IGZuLFxuICAgICAgdHJhbnNmb3JtZXI6IHRyYW5zZm9ybWVyXG4gICAgfSk7XG4gICAgcmV0dXJuIHRyYW5zZm9ybWVyO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgX2NyZWF0ZUNsYXNzKFBsdWdpbk1hbmFnZXIsIG51bGwsIFt7XG4gICAga2V5OiBcIm1lbW9pc2VkUGx1Z2luc1wiLFxuXG4gICAgLyoqXG4gICAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAgICovXG5cbiAgICB2YWx1ZTogW10sXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxuICB9LCB7XG4gICAga2V5OiBcInBvc2l0aW9uc1wiLFxuICAgIHZhbHVlOiBbXCJiZWZvcmVcIiwgXCJhZnRlclwiXSxcblxuICAgIC8qKlxuICAgICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgICAqL1xuXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxuICB9XSk7XG5cbiAgZnVuY3Rpb24gUGx1Z2luTWFuYWdlcigpIHtcbiAgICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHsgdHJhbnNmb3JtZXJzOiB7fSwgYmVmb3JlOiBbXSwgYWZ0ZXI6IFtdIH0gOiBhcmd1bWVudHNbMF07XG5cbiAgICB2YXIgZmlsZSA9IF9yZWYuZmlsZTtcbiAgICB2YXIgdHJhbnNmb3JtZXJzID0gX3JlZi50cmFuc2Zvcm1lcnM7XG4gICAgdmFyIGJlZm9yZSA9IF9yZWYuYmVmb3JlO1xuICAgIHZhciBhZnRlciA9IF9yZWYuYWZ0ZXI7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGx1Z2luTWFuYWdlcik7XG5cbiAgICB0aGlzLnRyYW5zZm9ybWVycyA9IHRyYW5zZm9ybWVycztcbiAgICB0aGlzLmZpbGUgPSBmaWxlO1xuICAgIHRoaXMuYmVmb3JlID0gYmVmb3JlO1xuICAgIHRoaXMuYWZ0ZXIgPSBhZnRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgUGx1Z2luTWFuYWdlci5wcm90b3R5cGUuc3Vibm9ybWFsaXNlU3RyaW5nID0gZnVuY3Rpb24gc3Vibm9ybWFsaXNlU3RyaW5nKG5hbWUsIHBvc2l0aW9uKSB7XG4gICAgLy8gdGhpcyBpcyBhIHBsdWdpbiBpbiB0aGUgZm9ybSBvZiBcImZvb2JhclwiIG9yIFwiZm9vYmFyOmFmdGVyXCJcbiAgICAvLyB3aGVyZSB0aGUgb3B0aW9uYWwgY29sb24gaXMgdGhlIGRlbGltaXRlciBmb3IgcGx1Z2luIHBvc2l0aW9uIGluIHRoZSB0cmFuc2Zvcm1lciBzdGFja1xuXG4gICAgdmFyIG1hdGNoID0gbmFtZS5tYXRjaCgvXiguKj8pOihhZnRlcnxiZWZvcmUpJC8pO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgO1xuXG4gICAgICBuYW1lID0gbWF0Y2hbMV07XG4gICAgICBwb3NpdGlvbiA9IG1hdGNoWzJdO1xuICAgIH12YXIgbG9jID0gX3RyeVJlc29sdmUyW1wiZGVmYXVsdFwiXS5yZWxhdGl2ZShcImJhYmVsLXBsdWdpbi1cIiArIG5hbWUpIHx8IF90cnlSZXNvbHZlMltcImRlZmF1bHRcIl0ucmVsYXRpdmUobmFtZSk7XG4gICAgaWYgKGxvYykge1xuICAgICAgdmFyIHBsdWdpbiA9IHJlcXVpcmUobG9jKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgcGx1Z2luOiBwbHVnaW5bXCJkZWZhdWx0XCJdIHx8IHBsdWdpblxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKG1lc3NhZ2VzLmdldChcInBsdWdpblVua25vd25cIiwgbmFtZSkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFBsdWdpbk1hbmFnZXIucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gdmFsaWRhdGUobmFtZSwgcGx1Z2luKSB7XG4gICAgLy8gdmFsaWRhdGUgdHJhbnNmb3JtZXIga2V5XG4gICAgdmFyIGtleSA9IHBsdWdpbi5rZXk7XG4gICAgaWYgKHRoaXMudHJhbnNmb3JtZXJzW2tleV0pIHtcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihtZXNzYWdlcy5nZXQoXCJwbHVnaW5LZXlDb2xsaXNpb25cIiwga2V5KSk7XG4gICAgfVxuXG4gICAgLy8gdmFsaWRhdGUgVHJhbnNmb3JtZXIgaW5zdGFuY2VcbiAgICBpZiAoIXBsdWdpbi5idWlsZFBhc3MgfHwgcGx1Z2luLmNvbnN0cnVjdG9yLm5hbWUgIT09IFwiUGx1Z2luXCIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IobWVzc2FnZXMuZ2V0KFwicGx1Z2luTm90VHJhbnNmb3JtZXJcIiwgbmFtZSkpO1xuICAgIH1cblxuICAgIC8vIHJlZ2lzdGVyIGFzIGEgcGx1Z2luXG4gICAgcGx1Z2luLm1ldGFkYXRhLnBsdWdpbiA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBQbHVnaW5NYW5hZ2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQobmFtZSkge1xuICAgIHZhciBwb3NpdGlvbjtcbiAgICB2YXIgcGx1Z2luO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJvYmplY3RcIiAmJiBuYW1lLnRyYW5zZm9ybWVyKSB7XG4gICAgICAgIHBsdWdpbiA9IG5hbWUudHJhbnNmb3JtZXI7XG4gICAgICAgIHBvc2l0aW9uID0gbmFtZS5wb3NpdGlvbjtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgLy8gbm90IGEgc3RyaW5nIHNvIHdlJ2xsIGp1c3QgYXNzdW1lIHRoYXQgaXQncyBhIGRpcmVjdCBUcmFuc2Zvcm1lciBpbnN0YW5jZSwgaWYgbm90IHRoZW5cbiAgICAgICAgLy8gdGhlIGNoZWNrcyBsYXRlciBvbiB3aWxsIGNvbXBsYWluXG4gICAgICAgIHBsdWdpbiA9IG5hbWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB2YXIgX3N1Ym5vcm1hbGlzZVN0cmluZyA9IHRoaXMuc3Vibm9ybWFsaXNlU3RyaW5nKG5hbWUsIHBvc2l0aW9uKTtcblxuICAgICAgICBwbHVnaW4gPSBfc3Vibm9ybWFsaXNlU3RyaW5nLnBsdWdpbjtcbiAgICAgICAgcG9zaXRpb24gPSBfc3Vibm9ybWFsaXNlU3RyaW5nLnBvc2l0aW9uO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKG1lc3NhZ2VzLmdldChcInBsdWdpbklsbGVnYWxLaW5kXCIsIHR5cGVvZiBuYW1lLCBuYW1lKSk7XG4gICAgfVxuXG4gICAgLy8gZGVmYXVsdCBwb3NpdGlvblxuICAgIHBvc2l0aW9uID0gcG9zaXRpb24gfHwgXCJiZWZvcmVcIjtcblxuICAgIC8vIHZhbGlkYXRlIHBvc2l0aW9uXG4gICAgaWYgKFBsdWdpbk1hbmFnZXIucG9zaXRpb25zLmluZGV4T2YocG9zaXRpb24pIDwgMCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihtZXNzYWdlcy5nZXQoXCJwbHVnaW5JbGxlZ2FsUG9zaXRpb25cIiwgcG9zaXRpb24sIG5hbWUpKTtcbiAgICB9XG5cbiAgICAvLyBhbGxvdyBwbHVnaW4gY29udGFpbmVycyB0byBiZSBzcGVjaWZpZWQgc28gdGhleSBkb24ndCBoYXZlIHRvIG1hbnVhbGx5IHJlcXVpcmVcbiAgICBpZiAodHlwZW9mIHBsdWdpbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBwbHVnaW4gPSBQbHVnaW5NYW5hZ2VyLm1lbW9pc2VQbHVnaW5Db250YWluZXIocGx1Z2luKTtcbiAgICB9XG5cbiAgICAvL1xuICAgIHRoaXMudmFsaWRhdGUobmFtZSwgcGx1Z2luKTtcblxuICAgIC8vIGJ1aWxkIVxuICAgIHZhciBwYXNzID0gdGhpcy50cmFuc2Zvcm1lcnNbcGx1Z2luLmtleV0gPSBwbHVnaW4uYnVpbGRQYXNzKHRoaXMuZmlsZSk7XG4gICAgaWYgKHBhc3MuY2FuVHJhbnNmb3JtKCkpIHtcbiAgICAgIHZhciBzdGFjayA9IHBvc2l0aW9uID09PSBcImJlZm9yZVwiID8gdGhpcy5iZWZvcmUgOiB0aGlzLmFmdGVyO1xuICAgICAgc3RhY2sucHVzaChwYXNzKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFBsdWdpbk1hbmFnZXI7XG59KSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFBsdWdpbk1hbmFnZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
