/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _filePluginManager, _filePluginManager2, _helpersNormalizeAst, _helpersNormalizeAst2, _plugin, _plugin2, _lodashObjectAssign, _lodashObjectAssign2, _helpersObject, _helpersObject2, _file, _file2, Pipeline;

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
      exports.__esModule = true;_filePluginManager = require("./file/plugin-manager");
      _filePluginManager2 = _interopRequireDefault(_filePluginManager);
      _helpersNormalizeAst = require("../helpers/normalize-ast");
      _helpersNormalizeAst2 = _interopRequireDefault(_helpersNormalizeAst);
      _plugin = require("./plugin");
      _plugin2 = _interopRequireDefault(_plugin);
      _lodashObjectAssign = require("lodash/object/assign");
      _lodashObjectAssign2 = _interopRequireDefault(_lodashObjectAssign);
      _helpersObject = require("../helpers/object");
      _helpersObject2 = _interopRequireDefault(_helpersObject);
      _file = require("./file");
      _file2 = _interopRequireDefault(_file);

      Pipeline = function () {
        function Pipeline() {
          _classCallCheck(this, Pipeline);

          this.transformers = _helpersObject2["default"]();
          this.namespaces = _helpersObject2["default"]();
          this.deprecated = _helpersObject2["default"]();
          this.aliases = _helpersObject2["default"]();
          this.filters = [];
        }

        /**
         * [Please add a description.]
         */

        Pipeline.prototype.addTransformers = function addTransformers(transformers) {
          for (var key in transformers) {
            this.addTransformer(key, transformers[key]);
          }
          return this;
        };

        /**
         * [Please add a description.]
         */

        Pipeline.prototype.addTransformer = function addTransformer(key, plugin) {
          if (this.transformers[key]) throw new Error(); // todo: error

          var namespace = key.split(".")[0];
          this.namespaces[namespace] = this.namespaces[namespace] || [];
          this.namespaces[namespace].push(key);
          this.namespaces[key] = namespace;

          if (typeof plugin === "function") {
            plugin = _filePluginManager2["default"].memoisePluginContainer(plugin);
            plugin.key = key;
            plugin.metadata.optional = true;

            if (key === "react.displayName") {
              plugin.metadata.optional = false;
            }
          } else {
            plugin = new _plugin2["default"](key, plugin);
          }

          this.transformers[key] = plugin;
        };

        /**
         * [Please add a description.]
         */

        Pipeline.prototype.addAliases = function addAliases(names) {
          _lodashObjectAssign2["default"](this.aliases, names);
          return this;
        };

        /**
         * [Please add a description.]
         */

        Pipeline.prototype.addDeprecated = function addDeprecated(names) {
          _lodashObjectAssign2["default"](this.deprecated, names);
          return this;
        };

        /**
         * [Please add a description.]
         */

        Pipeline.prototype.addFilter = function addFilter(filter) {
          this.filters.push(filter);
          return this;
        };

        /**
         * [Please add a description.]
         */

        Pipeline.prototype.canTransform = function canTransform(plugin, fileOpts) {
          if (plugin.metadata.plugin) {
            return true;
          }

          var _arr = this.filters;
          for (var _i = 0; _i < _arr.length; _i++) {
            var filter = _arr[_i];
            var result = filter(plugin, fileOpts);
            if (result != null) return result;
          }

          return true;
        };

        /**
         * [Please add a description.]
         */

        Pipeline.prototype.analyze = function analyze(code) {
          var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

          opts.code = false;
          return this.transform(code, opts);
        };

        /**
         * Build dependency graph by recursing `metadata.modules`. WIP.
         */

        Pipeline.prototype.pretransform = function pretransform(code, opts) {
          var file = new _file2["default"](opts, this);
          return file.wrap(code, function () {
            file.addCode(code);
            file.parseCode(code);
            return file;
          });
        };

        /**
         * [Please add a description.]
         */

        Pipeline.prototype.transform = function transform(code, opts) {
          var file = new _file2["default"](opts, this);
          return file.wrap(code, function () {
            file.addCode(code);
            file.parseCode(code);
            return file.transform();
          });
        };

        /**
         * [Please add a description.]
         */

        Pipeline.prototype.transformFromAst = function transformFromAst(ast, code, opts) {
          ast = _helpersNormalizeAst2["default"](ast);

          var file = new _file2["default"](opts, this);
          return file.wrap(code, function () {
            file.addCode(code);
            file.addAst(ast);
            return file.transform();
          });
        };

        /**
         * [Please add a description.]
         */

        Pipeline.prototype._ensureTransformerNames = function _ensureTransformerNames(type, rawKeys) {
          var keys = [];

          for (var i = 0; i < rawKeys.length; i++) {
            var key = rawKeys[i];
            var deprecatedKey = this.deprecated[key];
            var aliasKey = this.aliases[key];
            if (aliasKey) {
              keys.push(aliasKey);
            } else if (deprecatedKey) {
              // deprecated key, remap it to the new one
              console.error("[BABEL] The transformer " + key + " has been renamed to " + deprecatedKey);
              rawKeys.push(deprecatedKey);
            } else if (this.transformers[key]) {
              // valid key
              keys.push(key);
            } else if (this.namespaces[key]) {
              // namespace, append all transformers within this namespace
              keys = keys.concat(this.namespaces[key]);
            } else {
              // invalid key
              throw new ReferenceError("Unknown transformer " + key + " specified in " + type);
            }
          }

          return keys;
        };

        return Pipeline;
      }();

      exports["default"] = Pipeline;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vcGlwZWxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBSixHQUFpQixHQUF4QixHQUE4QixFQUFFLFdBQVcsR0FBWCxFQUFoQyxDQUFUO0dBQXJDOzs7O0FBSUEsV0FBUyxlQUFULENBQXlCLFFBQXpCLEVBQW1DLFdBQW5DLEVBQWdEO0FBQUUsUUFBSSxFQUFFLG9CQUFvQixXQUFwQixDQUFGLEVBQW9DO0FBQUUsWUFBTSxJQUFJLFNBQUosQ0FBYyxtQ0FBZCxDQUFOLENBQUY7S0FBeEM7R0FBbEQ7Ozs7O0FBUEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBU0kscUJBQXFCLFFBQVEsdUJBQVI7QUFFckIsNEJBQXNCLHVCQUF1QixrQkFBdkI7QUFFdEIsNkJBQXVCLFFBQVEsMEJBQVI7QUFFdkIsOEJBQXdCLHVCQUF1QixvQkFBdkI7QUFFeEIsZ0JBQVUsUUFBUSxVQUFSO0FBRVYsaUJBQVcsdUJBQXVCLE9BQXZCO0FBRVgsNEJBQXNCLFFBQVEsc0JBQVI7QUFFdEIsNkJBQXVCLHVCQUF1QixtQkFBdkI7QUFFdkIsdUJBQWlCLFFBQVEsbUJBQVI7QUFFakIsd0JBQWtCLHVCQUF1QixjQUF2QjtBQUVsQixjQUFRLFFBQVEsUUFBUjtBQUVSLGVBQVMsdUJBQXVCLEtBQXZCOztBQU1ULGlCQUFXLFlBQWE7QUFDMUIsaUJBQVMsUUFBVCxHQUFvQjtBQUNsQiwwQkFBZ0IsSUFBaEIsRUFBc0IsUUFBdEIsRUFEa0I7O0FBR2xCLGVBQUssWUFBTCxHQUFvQixnQkFBZ0IsU0FBaEIsR0FBcEIsQ0FIa0I7QUFJbEIsZUFBSyxVQUFMLEdBQWtCLGdCQUFnQixTQUFoQixHQUFsQixDQUprQjtBQUtsQixlQUFLLFVBQUwsR0FBa0IsZ0JBQWdCLFNBQWhCLEdB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QUFDWixtQkFBSyxJQUFMLENBQVUsUUFBVixFQURZO2FBQWQsTUFFTyxJQUFJLGFBQUosRUFBbUI7O0FBRXhCLHNCQUFRLEtBQVIsQ0FBYyw2QkFBNkIsR0FBN0IsR0FBbUMsdUJBQW5DLEdBQTZELGFBQTdELENBQWQsQ0FGd0I7QUFHeEIsc0JBQVEsSUFBUixDQUFhLGFBQWIsRUFId0I7YUFBbkIsTUFJQSxJQUFJLEtBQUssWUFBTCxDQUFrQixHQUFsQixDQUFKLEVBQTRCOztBQUVqQyxtQkFBSyxJQUFMLENBQVUsR0FBVixFQUZpQzthQUE1QixNQUdBLElBQUksS0FBSyxVQUFMLENBQWdCLEdBQWhCLENBQUosRUFBMEI7O0FBRS9CLHFCQUFPLEtBQUssTUFBTCxDQUFZLEtBQUssVUFBTCxDQUFnQixHQUFoQixDQUFaLENBQVAsQ0FGK0I7YUFBMUIsTUFHQTs7QUFFTCxvQkFBTSxJQUFJLGNBQUosQ0FBbUIseUJBQXlCLEdBQXpCLEdBQStCLGdCQUEvQixHQUFrRCxJQUFsRCxDQUF6QixDQUZLO2FBSEE7V0FiVDs7QUFzQkEsaUJBQU8sSUFBUCxDQXpCMkY7U0FBaEQsQ0F2Sm5COztBQW1MMUIsZUFBTyxRQUFQLENBbkwwQjtPQUFaOztBQXNMaEIsY0FBUSxTQUFSLElBQXFCLFFBQXJCO0FBQ0EsYUFBTyxPQUFQLEdBQWlCLFFBQVEsU0FBUixDQUFqQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYW5zZm9ybWF0aW9uL3BpcGVsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBfZmlsZVBsdWdpbk1hbmFnZXIgPSByZXF1aXJlKFwiLi9maWxlL3BsdWdpbi1tYW5hZ2VyXCIpO1xuXG52YXIgX2ZpbGVQbHVnaW5NYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZpbGVQbHVnaW5NYW5hZ2VyKTtcblxudmFyIF9oZWxwZXJzTm9ybWFsaXplQXN0ID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvbm9ybWFsaXplLWFzdFwiKTtcblxudmFyIF9oZWxwZXJzTm9ybWFsaXplQXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNOb3JtYWxpemVBc3QpO1xuXG52YXIgX3BsdWdpbiA9IHJlcXVpcmUoXCIuL3BsdWdpblwiKTtcblxudmFyIF9wbHVnaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGx1Z2luKTtcblxudmFyIF9sb2Rhc2hPYmplY3RBc3NpZ24gPSByZXF1aXJlKFwibG9kYXNoL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfbG9kYXNoT2JqZWN0QXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaE9iamVjdEFzc2lnbik7XG5cbnZhciBfaGVscGVyc09iamVjdCA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL29iamVjdFwiKTtcblxudmFyIF9oZWxwZXJzT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNPYmplY3QpO1xuXG52YXIgX2ZpbGUgPSByZXF1aXJlKFwiLi9maWxlXCIpO1xuXG52YXIgX2ZpbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmlsZSk7XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIFBpcGVsaW5lID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUGlwZWxpbmUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBpcGVsaW5lKTtcblxuICAgIHRoaXMudHJhbnNmb3JtZXJzID0gX2hlbHBlcnNPYmplY3QyW1wiZGVmYXVsdFwiXSgpO1xuICAgIHRoaXMubmFtZXNwYWNlcyA9IF9oZWxwZXJzT2JqZWN0MltcImRlZmF1bHRcIl0oKTtcbiAgICB0aGlzLmRlcHJlY2F0ZWQgPSBfaGVscGVyc09iamVjdDJbXCJkZWZhdWx0XCJdKCk7XG4gICAgdGhpcy5hbGlhc2VzID0gX2hlbHBlcnNPYmplY3QyW1wiZGVmYXVsdFwiXSgpO1xuICAgIHRoaXMuZmlsdGVycyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBQaXBlbGluZS5wcm90b3R5cGUuYWRkVHJhbnNmb3JtZXJzID0gZnVuY3Rpb24gYWRkVHJhbnNmb3JtZXJzKHRyYW5zZm9ybWVycykge1xuICAgIGZvciAodmFyIGtleSBpbiB0cmFuc2Zvcm1lcnMpIHtcbiAgICAgIHRoaXMuYWRkVHJhbnNmb3JtZXIoa2V5LCB0cmFuc2Zvcm1lcnNba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgUGlwZWxpbmUucHJvdG90eXBlLmFkZFRyYW5zZm9ybWVyID0gZnVuY3Rpb24gYWRkVHJhbnNmb3JtZXIoa2V5LCBwbHVnaW4pIHtcbiAgICBpZiAodGhpcy50cmFuc2Zvcm1lcnNba2V5XSkgdGhyb3cgbmV3IEVycm9yKCk7IC8vIHRvZG86IGVycm9yXG5cbiAgICB2YXIgbmFtZXNwYWNlID0ga2V5LnNwbGl0KFwiLlwiKVswXTtcbiAgICB0aGlzLm5hbWVzcGFjZXNbbmFtZXNwYWNlXSA9IHRoaXMubmFtZXNwYWNlc1tuYW1lc3BhY2VdIHx8IFtdO1xuICAgIHRoaXMubmFtZXNwYWNlc1tuYW1lc3BhY2VdLnB1c2goa2V5KTtcbiAgICB0aGlzLm5hbWVzcGFjZXNba2V5XSA9IG5hbWVzcGFjZTtcblxuICAgIGlmICh0eXBlb2YgcGx1Z2luID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHBsdWdpbiA9IF9maWxlUGx1Z2luTWFuYWdlcjJbXCJkZWZhdWx0XCJdLm1lbW9pc2VQbHVnaW5Db250YWluZXIocGx1Z2luKTtcbiAgICAgIHBsdWdpbi5rZXkgPSBrZXk7XG4gICAgICBwbHVnaW4ubWV0YWRhdGEub3B0aW9uYWwgPSB0cnVlO1xuXG4gICAgICBpZiAoa2V5ID09PSBcInJlYWN0LmRpc3BsYXlOYW1lXCIpIHtcbiAgICAgICAgcGx1Z2luLm1ldGFkYXRhLm9wdGlvbmFsID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsdWdpbiA9IG5ldyBfcGx1Z2luMltcImRlZmF1bHRcIl0oa2V5LCBwbHVnaW4pO1xuICAgIH1cblxuICAgIHRoaXMudHJhbnNmb3JtZXJzW2tleV0gPSBwbHVnaW47XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBQaXBlbGluZS5wcm90b3R5cGUuYWRkQWxpYXNlcyA9IGZ1bmN0aW9uIGFkZEFsaWFzZXMobmFtZXMpIHtcbiAgICBfbG9kYXNoT2JqZWN0QXNzaWduMltcImRlZmF1bHRcIl0odGhpcy5hbGlhc2VzLCBuYW1lcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBQaXBlbGluZS5wcm90b3R5cGUuYWRkRGVwcmVjYXRlZCA9IGZ1bmN0aW9uIGFkZERlcHJlY2F0ZWQobmFtZXMpIHtcbiAgICBfbG9kYXNoT2JqZWN0QXNzaWduMltcImRlZmF1bHRcIl0odGhpcy5kZXByZWNhdGVkLCBuYW1lcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBQaXBlbGluZS5wcm90b3R5cGUuYWRkRmlsdGVyID0gZnVuY3Rpb24gYWRkRmlsdGVyKGZpbHRlcikge1xuICAgIHRoaXMuZmlsdGVycy5wdXNoKGZpbHRlcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBQaXBlbGluZS5wcm90b3R5cGUuY2FuVHJhbnNmb3JtID0gZnVuY3Rpb24gY2FuVHJhbnNmb3JtKHBsdWdpbiwgZmlsZU9wdHMpIHtcbiAgICBpZiAocGx1Z2luLm1ldGFkYXRhLnBsdWdpbikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIF9hcnIgPSB0aGlzLmZpbHRlcnM7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IF9hcnIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgZmlsdGVyID0gX2FycltfaV07XG4gICAgICB2YXIgcmVzdWx0ID0gZmlsdGVyKHBsdWdpbiwgZmlsZU9wdHMpO1xuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgUGlwZWxpbmUucHJvdG90eXBlLmFuYWx5emUgPSBmdW5jdGlvbiBhbmFseXplKGNvZGUpIHtcbiAgICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gICAgb3B0cy5jb2RlID0gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtKGNvZGUsIG9wdHMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBCdWlsZCBkZXBlbmRlbmN5IGdyYXBoIGJ5IHJlY3Vyc2luZyBgbWV0YWRhdGEubW9kdWxlc2AuIFdJUC5cbiAgICovXG5cbiAgUGlwZWxpbmUucHJvdG90eXBlLnByZXRyYW5zZm9ybSA9IGZ1bmN0aW9uIHByZXRyYW5zZm9ybShjb2RlLCBvcHRzKSB7XG4gICAgdmFyIGZpbGUgPSBuZXcgX2ZpbGUyW1wiZGVmYXVsdFwiXShvcHRzLCB0aGlzKTtcbiAgICByZXR1cm4gZmlsZS53cmFwKGNvZGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZpbGUuYWRkQ29kZShjb2RlKTtcbiAgICAgIGZpbGUucGFyc2VDb2RlKGNvZGUpO1xuICAgICAgcmV0dXJuIGZpbGU7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBQaXBlbGluZS5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gdHJhbnNmb3JtKGNvZGUsIG9wdHMpIHtcbiAgICB2YXIgZmlsZSA9IG5ldyBfZmlsZTJbXCJkZWZhdWx0XCJdKG9wdHMsIHRoaXMpO1xuICAgIHJldHVybiBmaWxlLndyYXAoY29kZSwgZnVuY3Rpb24gKCkge1xuICAgICAgZmlsZS5hZGRDb2RlKGNvZGUpO1xuICAgICAgZmlsZS5wYXJzZUNvZGUoY29kZSk7XG4gICAgICByZXR1cm4gZmlsZS50cmFuc2Zvcm0oKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFBpcGVsaW5lLnByb3RvdHlwZS50cmFuc2Zvcm1Gcm9tQXN0ID0gZnVuY3Rpb24gdHJhbnNmb3JtRnJvbUFzdChhc3QsIGNvZGUsIG9wdHMpIHtcbiAgICBhc3QgPSBfaGVscGVyc05vcm1hbGl6ZUFzdDJbXCJkZWZhdWx0XCJdKGFzdCk7XG5cbiAgICB2YXIgZmlsZSA9IG5ldyBfZmlsZTJbXCJkZWZhdWx0XCJdKG9wdHMsIHRoaXMpO1xuICAgIHJldHVybiBmaWxlLndyYXAoY29kZSwgZnVuY3Rpb24gKCkge1xuICAgICAgZmlsZS5hZGRDb2RlKGNvZGUpO1xuICAgICAgZmlsZS5hZGRBc3QoYXN0KTtcbiAgICAgIHJldHVybiBmaWxlLnRyYW5zZm9ybSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgUGlwZWxpbmUucHJvdG90eXBlLl9lbnN1cmVUcmFuc2Zvcm1lck5hbWVzID0gZnVuY3Rpb24gX2Vuc3VyZVRyYW5zZm9ybWVyTmFtZXModHlwZSwgcmF3S2V5cykge1xuICAgIHZhciBrZXlzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhd0tleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSByYXdLZXlzW2ldO1xuICAgICAgdmFyIGRlcHJlY2F0ZWRLZXkgPSB0aGlzLmRlcHJlY2F0ZWRba2V5XTtcbiAgICAgIHZhciBhbGlhc0tleSA9IHRoaXMuYWxpYXNlc1trZXldO1xuICAgICAgaWYgKGFsaWFzS2V5KSB7XG4gICAgICAgIGtleXMucHVzaChhbGlhc0tleSk7XG4gICAgICB9IGVsc2UgaWYgKGRlcHJlY2F0ZWRLZXkpIHtcbiAgICAgICAgLy8gZGVwcmVjYXRlZCBrZXksIHJlbWFwIGl0IHRvIHRoZSBuZXcgb25lXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbQkFCRUxdIFRoZSB0cmFuc2Zvcm1lciBcIiArIGtleSArIFwiIGhhcyBiZWVuIHJlbmFtZWQgdG8gXCIgKyBkZXByZWNhdGVkS2V5KTtcbiAgICAgICAgcmF3S2V5cy5wdXNoKGRlcHJlY2F0ZWRLZXkpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnRyYW5zZm9ybWVyc1trZXldKSB7XG4gICAgICAgIC8vIHZhbGlkIGtleVxuICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5uYW1lc3BhY2VzW2tleV0pIHtcbiAgICAgICAgLy8gbmFtZXNwYWNlLCBhcHBlbmQgYWxsIHRyYW5zZm9ybWVycyB3aXRoaW4gdGhpcyBuYW1lc3BhY2VcbiAgICAgICAga2V5cyA9IGtleXMuY29uY2F0KHRoaXMubmFtZXNwYWNlc1trZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGludmFsaWQga2V5XG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcIlVua25vd24gdHJhbnNmb3JtZXIgXCIgKyBrZXkgKyBcIiBzcGVjaWZpZWQgaW4gXCIgKyB0eXBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ga2V5cztcbiAgfTtcblxuICByZXR1cm4gUGlwZWxpbmU7XG59KSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFBpcGVsaW5lO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
