/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _index, _json5, _json52, _pathIsAbsolute, _pathIsAbsolute2, _pathExists, _pathExists2, _lodashLangClone, _lodashLangClone2, _helpersMerge, _helpersMerge2, _config, _config2, _path, _path2, _fs, _fs2, existsCache, jsonCache, BABELIGNORE_FILENAME, BABELRC_FILENAME, PACKAGE_FILENAME, OptionManager;

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

  function exists(filename) {
    var cached = existsCache[filename];
    if (cached != null) {
      return cached;
    } else {
      return existsCache[filename] = _pathExists2["default"].sync(filename);
    }
  }

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_index = require("./index");
      _json5 = require("json5");
      _json52 = _interopRequireDefault(_json5);
      _pathIsAbsolute = require("path-is-absolute");
      _pathIsAbsolute2 = _interopRequireDefault(_pathIsAbsolute);
      _pathExists = require("path-exists");
      _pathExists2 = _interopRequireDefault(_pathExists);
      _lodashLangClone = require("lodash/lang/clone");
      _lodashLangClone2 = _interopRequireDefault(_lodashLangClone);
      _helpersMerge = require("../../../helpers/merge");
      _helpersMerge2 = _interopRequireDefault(_helpersMerge);
      _config = require("./config");
      _config2 = _interopRequireDefault(_config);
      _path = require("path");
      _path2 = _interopRequireDefault(_path);
      _fs = require("fs");
      _fs2 = _interopRequireDefault(_fs);
      existsCache = {};
      jsonCache = {};
      BABELIGNORE_FILENAME = ".babelignore";
      BABELRC_FILENAME = ".babelrc";
      PACKAGE_FILENAME = "package.json";

      OptionManager = function () {
        function OptionManager(log, pipeline) {
          _classCallCheck(this, OptionManager);

          this.resolvedConfigs = [];
          this.options = OptionManager.createBareOptions();
          this.pipeline = pipeline;
          this.log = log;
        }

        /**
         * [Please add a description.]
         */

        OptionManager.createBareOptions = function createBareOptions() {
          var opts = {};

          for (var key in _config2["default"]) {
            var opt = _config2["default"][key];
            opts[key] = _lodashLangClone2["default"](opt["default"]);
          }

          return opts;
        };

        /**
         * [Please add a description.]
         */

        OptionManager.prototype.addConfig = function addConfig(loc, key) {
          var json = arguments.length <= 2 || arguments[2] === undefined ? _json52["default"] : arguments[2];

          if (this.resolvedConfigs.indexOf(loc) >= 0) return;

          var content = _fs2["default"].readFileSync(loc, "utf8");
          var opts;

          try {
            opts = jsonCache[content] = jsonCache[content] || json.parse(content);
            if (key) opts = opts[key];
          } catch (err) {
            err.message = loc + ": Error while parsing JSON - " + err.message;
            throw err;
          }

          this.mergeOptions(opts, loc);
          this.resolvedConfigs.push(loc);
        };

        /**
         * [Please add a description.]
         */

        OptionManager.prototype.mergeOptions = function mergeOptions(opts) {
          var alias = arguments.length <= 1 || arguments[1] === undefined ? "foreign" : arguments[1];

          if (!opts) return;

          for (var key in opts) {
            if (key[0] === "_") continue;

            var option = _config2["default"][key];

            // check for an unknown option
            if (!option) this.log.error("Unknown option: " + alias + "." + key, ReferenceError);
          }

          // normalise options
          _index.normaliseOptions(opts);

          // merge them into this current files options
          _helpersMerge2["default"](this.options, opts);
        };

        /**
         * [Please add a description.]
         */

        OptionManager.prototype.addIgnoreConfig = function addIgnoreConfig(loc) {
          var file = _fs2["default"].readFileSync(loc, "utf8");
          var lines = file.split("\n");

          lines = lines.map(function (line) {
            return line.replace(/#(.*?)$/, "").trim();
          }).filter(function (line) {
            return !!line;
          });

          this.mergeOptions({ ignore: lines }, loc);
        };

        /**
         * Description
         */

        OptionManager.prototype.findConfigs = function findConfigs(loc) {
          if (!loc) return;

          if (!_pathIsAbsolute2["default"](loc)) {
            loc = _path2["default"].join(process.cwd(), loc);
          }

          while (loc !== (loc = _path2["default"].dirname(loc))) {
            if (this.options.breakConfig) return;

            var configLoc = _path2["default"].join(loc, BABELRC_FILENAME);
            if (exists(configLoc)) this.addConfig(configLoc);

            var pkgLoc = _path2["default"].join(loc, PACKAGE_FILENAME);
            if (exists(pkgLoc)) this.addConfig(pkgLoc, "babel", JSON);

            var ignoreLoc = _path2["default"].join(loc, BABELIGNORE_FILENAME);
            if (exists(ignoreLoc)) this.addIgnoreConfig(ignoreLoc);
          }
        };

        /**
         * [Please add a description.]
         */

        OptionManager.prototype.normaliseOptions = function normaliseOptions() {
          var opts = this.options;

          for (var key in _config2["default"]) {
            var option = _config2["default"][key];
            var val = opts[key];

            // optional
            if (!val && option.optional) continue;

            // deprecated
            if (this.log && val && option.deprecated) {
              this.log.deprecate("Deprecated option " + key + ": " + option.deprecated);
            }

            // validate
            if (this.pipeline && val) {
              val = _index.validateOption(key, val, this.pipeline);
            }

            // aaliases
            if (option.alias) {
              opts[option.alias] = opts[option.alias] || val;
            } else {
              opts[key] = val;
            }
          }
        };

        /**
         * [Please add a description.]
         */

        OptionManager.prototype.init = function init(opts) {
          this.mergeOptions(opts, "direct");

          // babelrc option
          if (opts.babelrc) {
            var _arr = opts.babelrc;

            for (var _i = 0; _i < _arr.length; _i++) {
              var loc = _arr[_i];this.addConfig(loc);
            }
          }

          // resolve all .babelrc files
          if (opts.babelrc !== false) {
            this.findConfigs(opts.filename);
          }

          // merge in env
          var envKey = process.env.BABEL_ENV || process.env.NODE_ENV || "development";
          if (this.options.env) {
            this.mergeOptions(this.options.env[envKey], "direct.env." + envKey);
          }

          // normalise
          this.normaliseOptions(opts);

          return this.options;
        };

        return OptionManager;
      }();

      exports["default"] = OptionManager;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vZmlsZS9vcHRpb25zL29wdGlvbi1tYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBS0EsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBRSxXQUFXLEdBQVgsRUFBaEMsQ0FBVDtHQUFyQzs7OztBQUlBLFdBQVMsZUFBVCxDQUF5QixRQUF6QixFQUFtQyxXQUFuQyxFQUFnRDtBQUFFLFFBQUksRUFBRSxvQkFBb0IsV0FBcEIsQ0FBRixFQUFvQztBQUFFLFlBQU0sSUFBSSxTQUFKLENBQWMsbUNBQWQsQ0FBTixDQUFGO0tBQXhDO0dBQWxEOztBQTJDQSxXQUFTLE1BQVQsQ0FBZ0IsUUFBaEIsRUFBMEI7QUFDeEIsUUFBSSxTQUFTLFlBQVksUUFBWixDQUFULENBRG9CO0FBRXhCLFFBQUksVUFBVSxJQUFWLEVBQWdCO0FBQ2xCLGFBQU8sTUFBUCxDQURrQjtLQUFwQixNQUVPO0FBQ0wsYUFBTyxZQUFZLFFBQVosSUFBd0IsYUFBYSxTQUFiLEVBQXdCLElBQXhCLENBQTZCLFFBQTdCLENBQXhCLENBREY7S0FGUDtHQUZGOzs7OztBQWxEQSxjQUFRLFVBQVIsR0FBcUIsSUFBckIsQ0FTSSxTQUFTLFFBQVEsU0FBUjtBQUVULGVBQVMsUUFBUSxPQUFSO0FBRVQsZ0JBQVUsdUJBQXVCLE1BQXZCO0FBRVYsd0JBQWtCLFFBQVEsa0JBQVI7QUFFbEIseUJBQW1CLHVCQUF1QixlQUF2QjtBQUVuQixvQkFBYyxRQUFRLGFBQVI7QUFFZCxxQkFBZSx1QkFBdUIsV0FBdkI7QUFFZix5QkFBbUIsUUFBUSxtQkFBUjtBQUVuQiwwQkFBb0IsdUJBQXVCLGdCQUF2QjtBQUVwQixzQkFBZ0IsUUFBUSx3QkFBUjtBQUVoQix1QkFBaUIsdUJBQXVCLGFBQXZCO0FBRWpCLGdC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QkFBSyxZQUFMLENBQWtCLEtBQUssT0FBTCxDQUFhLEdBQWIsQ0FBaUIsTUFBakIsQ0FBbEIsRUFBNEMsZ0JBQWdCLE1BQWhCLENBQTVDLENBRG9CO1dBQXRCOzs7QUFuQmlELGNBd0JqRCxDQUFLLGdCQUFMLENBQXNCLElBQXRCLEVBeEJpRDs7QUEwQmpELGlCQUFPLEtBQUssT0FBTCxDQTFCMEM7U0FBcEIsQ0F6SkE7O0FBc0wvQixlQUFPLGFBQVAsQ0F0TCtCO09BQVo7O0FBeUxyQixjQUFRLFNBQVIsSUFBcUIsYUFBckI7QUFDQSxhQUFPLE9BQVAsR0FBaUIsUUFBUSxTQUFSLENBQWpCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vZmlsZS9vcHRpb25zL29wdGlvbi1tYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi9pbmRleFwiKTtcblxudmFyIF9qc29uNSA9IHJlcXVpcmUoXCJqc29uNVwiKTtcblxudmFyIF9qc29uNTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9qc29uNSk7XG5cbnZhciBfcGF0aElzQWJzb2x1dGUgPSByZXF1aXJlKFwicGF0aC1pcy1hYnNvbHV0ZVwiKTtcblxudmFyIF9wYXRoSXNBYnNvbHV0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoSXNBYnNvbHV0ZSk7XG5cbnZhciBfcGF0aEV4aXN0cyA9IHJlcXVpcmUoXCJwYXRoLWV4aXN0c1wiKTtcblxudmFyIF9wYXRoRXhpc3RzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGhFeGlzdHMpO1xuXG52YXIgX2xvZGFzaExhbmdDbG9uZSA9IHJlcXVpcmUoXCJsb2Rhc2gvbGFuZy9jbG9uZVwiKTtcblxudmFyIF9sb2Rhc2hMYW5nQ2xvbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoTGFuZ0Nsb25lKTtcblxudmFyIF9oZWxwZXJzTWVyZ2UgPSByZXF1aXJlKFwiLi4vLi4vLi4vaGVscGVycy9tZXJnZVwiKTtcblxudmFyIF9oZWxwZXJzTWVyZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc01lcmdlKTtcblxudmFyIF9jb25maWcgPSByZXF1aXJlKFwiLi9jb25maWdcIik7XG5cbnZhciBfY29uZmlnMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbmZpZyk7XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG52YXIgX3BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aCk7XG5cbnZhciBfZnMgPSByZXF1aXJlKFwiZnNcIik7XG5cbnZhciBfZnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnMpO1xuXG52YXIgZXhpc3RzQ2FjaGUgPSB7fTtcbnZhciBqc29uQ2FjaGUgPSB7fTtcblxudmFyIEJBQkVMSUdOT1JFX0ZJTEVOQU1FID0gXCIuYmFiZWxpZ25vcmVcIjtcbnZhciBCQUJFTFJDX0ZJTEVOQU1FID0gXCIuYmFiZWxyY1wiO1xudmFyIFBBQ0tBR0VfRklMRU5BTUUgPSBcInBhY2thZ2UuanNvblwiO1xuXG5mdW5jdGlvbiBleGlzdHMoZmlsZW5hbWUpIHtcbiAgdmFyIGNhY2hlZCA9IGV4aXN0c0NhY2hlW2ZpbGVuYW1lXTtcbiAgaWYgKGNhY2hlZCAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGNhY2hlZDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXhpc3RzQ2FjaGVbZmlsZW5hbWVdID0gX3BhdGhFeGlzdHMyW1wiZGVmYXVsdFwiXS5zeW5jKGZpbGVuYW1lKTtcbiAgfVxufVxuXG52YXIgT3B0aW9uTWFuYWdlciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE9wdGlvbk1hbmFnZXIobG9nLCBwaXBlbGluZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBPcHRpb25NYW5hZ2VyKTtcblxuICAgIHRoaXMucmVzb2x2ZWRDb25maWdzID0gW107XG4gICAgdGhpcy5vcHRpb25zID0gT3B0aW9uTWFuYWdlci5jcmVhdGVCYXJlT3B0aW9ucygpO1xuICAgIHRoaXMucGlwZWxpbmUgPSBwaXBlbGluZTtcbiAgICB0aGlzLmxvZyA9IGxvZztcbiAgfVxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgT3B0aW9uTWFuYWdlci5jcmVhdGVCYXJlT3B0aW9ucyA9IGZ1bmN0aW9uIGNyZWF0ZUJhcmVPcHRpb25zKCkge1xuICAgIHZhciBvcHRzID0ge307XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gX2NvbmZpZzJbXCJkZWZhdWx0XCJdKSB7XG4gICAgICB2YXIgb3B0ID0gX2NvbmZpZzJbXCJkZWZhdWx0XCJdW2tleV07XG4gICAgICBvcHRzW2tleV0gPSBfbG9kYXNoTGFuZ0Nsb25lMltcImRlZmF1bHRcIl0ob3B0W1wiZGVmYXVsdFwiXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdHM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBPcHRpb25NYW5hZ2VyLnByb3RvdHlwZS5hZGRDb25maWcgPSBmdW5jdGlvbiBhZGRDb25maWcobG9jLCBrZXkpIHtcbiAgICB2YXIganNvbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IF9qc29uNTJbXCJkZWZhdWx0XCJdIDogYXJndW1lbnRzWzJdO1xuXG4gICAgaWYgKHRoaXMucmVzb2x2ZWRDb25maWdzLmluZGV4T2YobG9jKSA+PSAwKSByZXR1cm47XG5cbiAgICB2YXIgY29udGVudCA9IF9mczJbXCJkZWZhdWx0XCJdLnJlYWRGaWxlU3luYyhsb2MsIFwidXRmOFwiKTtcbiAgICB2YXIgb3B0cztcblxuICAgIHRyeSB7XG4gICAgICBvcHRzID0ganNvbkNhY2hlW2NvbnRlbnRdID0ganNvbkNhY2hlW2NvbnRlbnRdIHx8IGpzb24ucGFyc2UoY29udGVudCk7XG4gICAgICBpZiAoa2V5KSBvcHRzID0gb3B0c1trZXldO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZXJyLm1lc3NhZ2UgPSBsb2MgKyBcIjogRXJyb3Igd2hpbGUgcGFyc2luZyBKU09OIC0gXCIgKyBlcnIubWVzc2FnZTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG5cbiAgICB0aGlzLm1lcmdlT3B0aW9ucyhvcHRzLCBsb2MpO1xuICAgIHRoaXMucmVzb2x2ZWRDb25maWdzLnB1c2gobG9jKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIE9wdGlvbk1hbmFnZXIucHJvdG90eXBlLm1lcmdlT3B0aW9ucyA9IGZ1bmN0aW9uIG1lcmdlT3B0aW9ucyhvcHRzKSB7XG4gICAgdmFyIGFsaWFzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gXCJmb3JlaWduXCIgOiBhcmd1bWVudHNbMV07XG5cbiAgICBpZiAoIW9wdHMpIHJldHVybjtcblxuICAgIGZvciAodmFyIGtleSBpbiBvcHRzKSB7XG4gICAgICBpZiAoa2V5WzBdID09PSBcIl9cIikgY29udGludWU7XG5cbiAgICAgIHZhciBvcHRpb24gPSBfY29uZmlnMltcImRlZmF1bHRcIl1ba2V5XTtcblxuICAgICAgLy8gY2hlY2sgZm9yIGFuIHVua25vd24gb3B0aW9uXG4gICAgICBpZiAoIW9wdGlvbikgdGhpcy5sb2cuZXJyb3IoXCJVbmtub3duIG9wdGlvbjogXCIgKyBhbGlhcyArIFwiLlwiICsga2V5LCBSZWZlcmVuY2VFcnJvcik7XG4gICAgfVxuXG4gICAgLy8gbm9ybWFsaXNlIG9wdGlvbnNcbiAgICBfaW5kZXgubm9ybWFsaXNlT3B0aW9ucyhvcHRzKTtcblxuICAgIC8vIG1lcmdlIHRoZW0gaW50byB0aGlzIGN1cnJlbnQgZmlsZXMgb3B0aW9uc1xuICAgIF9oZWxwZXJzTWVyZ2UyW1wiZGVmYXVsdFwiXSh0aGlzLm9wdGlvbnMsIG9wdHMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgT3B0aW9uTWFuYWdlci5wcm90b3R5cGUuYWRkSWdub3JlQ29uZmlnID0gZnVuY3Rpb24gYWRkSWdub3JlQ29uZmlnKGxvYykge1xuICAgIHZhciBmaWxlID0gX2ZzMltcImRlZmF1bHRcIl0ucmVhZEZpbGVTeW5jKGxvYywgXCJ1dGY4XCIpO1xuICAgIHZhciBsaW5lcyA9IGZpbGUuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBsaW5lcyA9IGxpbmVzLm1hcChmdW5jdGlvbiAobGluZSkge1xuICAgICAgcmV0dXJuIGxpbmUucmVwbGFjZSgvIyguKj8pJC8sIFwiXCIpLnRyaW0oKTtcbiAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKGxpbmUpIHtcbiAgICAgIHJldHVybiAhIWxpbmU7XG4gICAgfSk7XG5cbiAgICB0aGlzLm1lcmdlT3B0aW9ucyh7IGlnbm9yZTogbGluZXMgfSwgbG9jKTtcbiAgfTtcblxuICAvKipcbiAgICogRGVzY3JpcHRpb25cbiAgICovXG5cbiAgT3B0aW9uTWFuYWdlci5wcm90b3R5cGUuZmluZENvbmZpZ3MgPSBmdW5jdGlvbiBmaW5kQ29uZmlncyhsb2MpIHtcbiAgICBpZiAoIWxvYykgcmV0dXJuO1xuXG4gICAgaWYgKCFfcGF0aElzQWJzb2x1dGUyW1wiZGVmYXVsdFwiXShsb2MpKSB7XG4gICAgICBsb2MgPSBfcGF0aDJbXCJkZWZhdWx0XCJdLmpvaW4ocHJvY2Vzcy5jd2QoKSwgbG9jKTtcbiAgICB9XG5cbiAgICB3aGlsZSAobG9jICE9PSAobG9jID0gX3BhdGgyW1wiZGVmYXVsdFwiXS5kaXJuYW1lKGxvYykpKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmJyZWFrQ29uZmlnKSByZXR1cm47XG5cbiAgICAgIHZhciBjb25maWdMb2MgPSBfcGF0aDJbXCJkZWZhdWx0XCJdLmpvaW4obG9jLCBCQUJFTFJDX0ZJTEVOQU1FKTtcbiAgICAgIGlmIChleGlzdHMoY29uZmlnTG9jKSkgdGhpcy5hZGRDb25maWcoY29uZmlnTG9jKTtcblxuICAgICAgdmFyIHBrZ0xvYyA9IF9wYXRoMltcImRlZmF1bHRcIl0uam9pbihsb2MsIFBBQ0tBR0VfRklMRU5BTUUpO1xuICAgICAgaWYgKGV4aXN0cyhwa2dMb2MpKSB0aGlzLmFkZENvbmZpZyhwa2dMb2MsIFwiYmFiZWxcIiwgSlNPTik7XG5cbiAgICAgIHZhciBpZ25vcmVMb2MgPSBfcGF0aDJbXCJkZWZhdWx0XCJdLmpvaW4obG9jLCBCQUJFTElHTk9SRV9GSUxFTkFNRSk7XG4gICAgICBpZiAoZXhpc3RzKGlnbm9yZUxvYykpIHRoaXMuYWRkSWdub3JlQ29uZmlnKGlnbm9yZUxvYyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgT3B0aW9uTWFuYWdlci5wcm90b3R5cGUubm9ybWFsaXNlT3B0aW9ucyA9IGZ1bmN0aW9uIG5vcm1hbGlzZU9wdGlvbnMoKSB7XG4gICAgdmFyIG9wdHMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gX2NvbmZpZzJbXCJkZWZhdWx0XCJdKSB7XG4gICAgICB2YXIgb3B0aW9uID0gX2NvbmZpZzJbXCJkZWZhdWx0XCJdW2tleV07XG4gICAgICB2YXIgdmFsID0gb3B0c1trZXldO1xuXG4gICAgICAvLyBvcHRpb25hbFxuICAgICAgaWYgKCF2YWwgJiYgb3B0aW9uLm9wdGlvbmFsKSBjb250aW51ZTtcblxuICAgICAgLy8gZGVwcmVjYXRlZFxuICAgICAgaWYgKHRoaXMubG9nICYmIHZhbCAmJiBvcHRpb24uZGVwcmVjYXRlZCkge1xuICAgICAgICB0aGlzLmxvZy5kZXByZWNhdGUoXCJEZXByZWNhdGVkIG9wdGlvbiBcIiArIGtleSArIFwiOiBcIiArIG9wdGlvbi5kZXByZWNhdGVkKTtcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWRhdGVcbiAgICAgIGlmICh0aGlzLnBpcGVsaW5lICYmIHZhbCkge1xuICAgICAgICB2YWwgPSBfaW5kZXgudmFsaWRhdGVPcHRpb24oa2V5LCB2YWwsIHRoaXMucGlwZWxpbmUpO1xuICAgICAgfVxuXG4gICAgICAvLyBhYWxpYXNlc1xuICAgICAgaWYgKG9wdGlvbi5hbGlhcykge1xuICAgICAgICBvcHRzW29wdGlvbi5hbGlhc10gPSBvcHRzW29wdGlvbi5hbGlhc10gfHwgdmFsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0c1trZXldID0gdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIE9wdGlvbk1hbmFnZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiBpbml0KG9wdHMpIHtcbiAgICB0aGlzLm1lcmdlT3B0aW9ucyhvcHRzLCBcImRpcmVjdFwiKTtcblxuICAgIC8vIGJhYmVscmMgb3B0aW9uXG4gICAgaWYgKG9wdHMuYmFiZWxyYykge1xuICAgICAgdmFyIF9hcnIgPSBvcHRzLmJhYmVscmM7XG5cbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBfYXJyLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgbG9jID0gX2FycltfaV07dGhpcy5hZGRDb25maWcobG9jKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZXNvbHZlIGFsbCAuYmFiZWxyYyBmaWxlc1xuICAgIGlmIChvcHRzLmJhYmVscmMgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmZpbmRDb25maWdzKG9wdHMuZmlsZW5hbWUpO1xuICAgIH1cblxuICAgIC8vIG1lcmdlIGluIGVudlxuICAgIHZhciBlbnZLZXkgPSBwcm9jZXNzLmVudi5CQUJFTF9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgXCJkZXZlbG9wbWVudFwiO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZW52KSB7XG4gICAgICB0aGlzLm1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMuZW52W2VudktleV0sIFwiZGlyZWN0LmVudi5cIiArIGVudktleSk7XG4gICAgfVxuXG4gICAgLy8gbm9ybWFsaXNlXG4gICAgdGhpcy5ub3JtYWxpc2VPcHRpb25zKG9wdHMpO1xuXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucztcbiAgfTtcblxuICByZXR1cm4gT3B0aW9uTWFuYWdlcjtcbn0pKCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gT3B0aW9uTWFuYWdlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
