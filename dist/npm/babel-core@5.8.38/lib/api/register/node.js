/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _sourceMapSupport, _sourceMapSupport2, _cache, registerCache, _transformationFileOptionsOptionManager, _transformationFileOptionsOptionManager2, _lodashObjectExtend, _lodashObjectExtend2, _node, babel, _lodashCollectionEach, _lodashCollectionEach2, _util, util, _fs, _fs2, _path, _path2, cache, transformOpts, ignore, only, oldHandlers, maps, cwd, getRelativePath, mtime, compile, shouldIgnore, istanbulMonkey, _readFileSync, istanbulLoader, normalLoader, registerExtension, hookExtensions;

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

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_sourceMapSupport = require("source-map-support");
      _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);
      _cache = require("./cache");
      registerCache = _interopRequireWildcard(_cache);
      _transformationFileOptionsOptionManager = require("../../transformation/file/options/option-manager");
      _transformationFileOptionsOptionManager2 = _interopRequireDefault(_transformationFileOptionsOptionManager);
      _lodashObjectExtend = require("lodash/object/extend");
      _lodashObjectExtend2 = _interopRequireDefault(_lodashObjectExtend);
      _node = require("../node");
      babel = _interopRequireWildcard(_node);
      _lodashCollectionEach = require("lodash/collection/each");
      _lodashCollectionEach2 = _interopRequireDefault(_lodashCollectionEach);
      _util = require("../../util");
      util = _interopRequireWildcard(_util);
      _fs = require("fs");
      _fs2 = _interopRequireDefault(_fs);
      _path = require("path");
      _path2 = _interopRequireDefault(_path);


      /**
       * Install sourcemaps into node.
       */

      _sourceMapSupport2["default"].install({
        handleUncaughtExceptions: false,
        retrieveSourceMap: function retrieveSourceMap(source) {
          var map = maps && maps[source];
          if (map) {
            return {
              url: null,
              map: map
            };
          } else {
            return null;
          }
        }
      });

      /**
       * Load and setup cache.
       */

      registerCache.load();
      cache = registerCache.get();
      transformOpts = {};
      oldHandlers = {};
      maps = {};
      cwd = process.cwd();

      getRelativePath = function getRelativePath(filename) {
        return _path2["default"].relative(cwd, filename);
      };

      mtime = function mtime(filename) {
        return +_fs2["default"].statSync(filename).mtime;
      };

      compile = function compile(filename) {
        var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        var result;

        opts.filename = filename;

        var optsManager = new _transformationFileOptionsOptionManager2["default"]();
        optsManager.mergeOptions(transformOpts);
        opts = optsManager.init(opts);

        var cacheKey = JSON.stringify(opts) + ":" + babel.version;

        var env = process.env.BABEL_ENV || process.env.NODE_ENV;
        if (env) cacheKey += ":" + env;

        if (cache) {
          var cached = cache[cacheKey];
          if (cached && cached.mtime === mtime(filename)) {
            result = cached;
          }
        }

        if (!result) {
          result = babel.transformFileSync(filename, _lodashObjectExtend2["default"](opts, {
            sourceMap: "both",
            ast: false
          }));
        }

        if (cache) {
          result.mtime = mtime(filename);
          cache[cacheKey] = result;
        }

        maps[filename] = result.map;

        return result.code;
      };

      shouldIgnore = function shouldIgnore(filename) {
        if (!ignore && !only) {
          return getRelativePath(filename).split(_path2["default"].sep).indexOf("node_modules") >= 0;
        } else {
          return util.shouldIgnore(filename, ignore || [], only);
        }
      };

      istanbulMonkey = {};


      if (process.env.running_under_istanbul) {
        _readFileSync = _fs2["default"].readFileSync;


        _fs2["default"].readFileSync = function (filename) {
          if (istanbulMonkey[filename]) {
            delete istanbulMonkey[filename];
            var code = compile(filename, {
              auxiliaryCommentBefore: "istanbul ignore next"
            });
            istanbulMonkey[filename] = true;
            return code;
          } else {
            return _readFileSync.apply(this, arguments);
          }
        };
      }

      /**
       * Replacement for the loader for istanbul.
       */

      istanbulLoader = function istanbulLoader(m, filename, old) {
        istanbulMonkey[filename] = true;
        old(m, filename);
      };

      normalLoader = function normalLoader(m, filename) {
        m._compile(compile(filename), filename);
      };

      registerExtension = function registerExtension(ext) {
        var old = oldHandlers[ext] || oldHandlers[".js"] || require.extensions[".js"];

        var loader = normalLoader;
        if (process.env.running_under_istanbul) loader = istanbulLoader;

        require.extensions[ext] = function (m, filename) {
          if (shouldIgnore(filename)) {
            old(m, filename);
          } else {
            loader(m, filename, old);
          }
        };
      };

      hookExtensions = function hookExtensions(_exts) {
        _lodashCollectionEach2["default"](oldHandlers, function (old, ext) {
          if (old === undefined) {
            delete require.extensions[ext];
          } else {
            require.extensions[ext] = old;
          }
        });

        oldHandlers = {};

        _lodashCollectionEach2["default"](_exts, function (ext) {
          oldHandlers[ext] = require.extensions[ext];
          registerExtension(ext);
        });
      };

      /**
       * Register loader for default extensions.
       */

      hookExtensions(util.canCompile.EXTENSIONS);

      /**
       * Update options at runtime.
       */

      exports["default"] = function () {
        var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        if (opts.only != null) only = util.arrayify(opts.only, util.regexify);
        if (opts.ignore != null) ignore = util.arrayify(opts.ignore, util.regexify);

        if (opts.extensions) hookExtensions(util.arrayify(opts.extensions));

        if (opts.cache === false) cache = null;

        delete opts.extensions;
        delete opts.ignore;
        delete opts.cache;
        delete opts.only;

        _lodashObjectExtend2["default"](transformOpts, opts);
      };

      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvYXBpL3JlZ2lzdGVyL25vZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7O0FBSUEsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBRSxXQUFXLEdBQVgsRUFBaEMsQ0FBVDtHQUFyQzs7Ozs7QUFQQSxjQUFRLFVBQVIsR0FBcUIsSUFBckIsQ0FTSSxvQkFBb0IsUUFBUSxvQkFBUjtBQUVwQiwyQkFBcUIsdUJBQXVCLGlCQUF2QjtBQUVyQixlQUFTLFFBQVEsU0FBUjtBQUVULHNCQUFnQix3QkFBd0IsTUFBeEI7QUFFaEIsZ0RBQTBDLFFBQVEsa0RBQVI7QUFFMUMsaURBQTJDLHVCQUF1Qix1Q0FBdkI7QUFFM0MsNEJBQXNCLFFBQVEsc0JBQVI7QUFFdEIsNkJBQXVCLHVCQUF1QixtQkFBdkI7QUFFdkIsY0FBUSxRQUFRLFNBQVI7QUFFUixjQUFRLHdCQUF3QixLQUF4QjtBQUVSLDhCQUF3QixRQUFRLHdCQUFSO0FBRXhCLCtC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QU1BLGNBQVEsU0FBUixJQUFxQixZQUFZO0FBQy9CLFlBQUksT0FBTyxVQUFVLE1BQVYsSUFBb0IsQ0FBcEIsSUFBeUIsVUFBVSxDQUFWLE1BQWlCLFNBQWpCLEdBQTZCLEVBQXRELEdBQTJELFVBQVUsQ0FBVixDQUEzRCxDQURvQjs7QUFHL0IsWUFBSSxLQUFLLElBQUwsSUFBYSxJQUFiLEVBQW1CLE9BQU8sS0FBSyxRQUFMLENBQWMsS0FBSyxJQUFMLEVBQVcsS0FBSyxRQUFMLENBQWhDLENBQXZCO0FBQ0EsWUFBSSxLQUFLLE1BQUwsSUFBZSxJQUFmLEVBQXFCLFNBQVMsS0FBSyxRQUFMLENBQWMsS0FBSyxNQUFMLEVBQWEsS0FBSyxRQUFMLENBQXBDLENBQXpCOztBQUVBLFlBQUksS0FBSyxVQUFMLEVBQWlCLGVBQWUsS0FBSyxRQUFMLENBQWMsS0FBSyxVQUFMLENBQTdCLEVBQXJCOztBQUVBLFlBQUksS0FBSyxLQUFMLEtBQWUsS0FBZixFQUFzQixRQUFRLElBQVIsQ0FBMUI7O0FBRUEsZUFBTyxLQUFLLFVBQUwsQ0FWd0I7QUFXL0IsZUFBTyxLQUFLLE1BQUwsQ0FYd0I7QUFZL0IsZUFBTyxLQUFLLEtBQUwsQ0Fad0I7QUFhL0IsZUFBTyxLQUFLLElBQUwsQ0Fid0I7O0FBZS9CLDZCQUFxQixTQUFyQixFQUFnQyxhQUFoQyxFQUErQyxJQUEvQyxFQWYrQjtPQUFaOztBQWtCckIsYUFBTyxPQUFQLEdBQWlCLFFBQVEsU0FBUixDQUFqQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL2FwaS9yZWdpc3Rlci9ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIF9zb3VyY2VNYXBTdXBwb3J0ID0gcmVxdWlyZShcInNvdXJjZS1tYXAtc3VwcG9ydFwiKTtcblxudmFyIF9zb3VyY2VNYXBTdXBwb3J0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NvdXJjZU1hcFN1cHBvcnQpO1xuXG52YXIgX2NhY2hlID0gcmVxdWlyZShcIi4vY2FjaGVcIik7XG5cbnZhciByZWdpc3RlckNhY2hlID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2NhY2hlKTtcblxudmFyIF90cmFuc2Zvcm1hdGlvbkZpbGVPcHRpb25zT3B0aW9uTWFuYWdlciA9IHJlcXVpcmUoXCIuLi8uLi90cmFuc2Zvcm1hdGlvbi9maWxlL29wdGlvbnMvb3B0aW9uLW1hbmFnZXJcIik7XG5cbnZhciBfdHJhbnNmb3JtYXRpb25GaWxlT3B0aW9uc09wdGlvbk1hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtYXRpb25GaWxlT3B0aW9uc09wdGlvbk1hbmFnZXIpO1xuXG52YXIgX2xvZGFzaE9iamVjdEV4dGVuZCA9IHJlcXVpcmUoXCJsb2Rhc2gvb2JqZWN0L2V4dGVuZFwiKTtcblxudmFyIF9sb2Rhc2hPYmplY3RFeHRlbmQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoT2JqZWN0RXh0ZW5kKTtcblxudmFyIF9ub2RlID0gcmVxdWlyZShcIi4uL25vZGVcIik7XG5cbnZhciBiYWJlbCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9ub2RlKTtcblxudmFyIF9sb2Rhc2hDb2xsZWN0aW9uRWFjaCA9IHJlcXVpcmUoXCJsb2Rhc2gvY29sbGVjdGlvbi9lYWNoXCIpO1xuXG52YXIgX2xvZGFzaENvbGxlY3Rpb25FYWNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaENvbGxlY3Rpb25FYWNoKTtcblxudmFyIF91dGlsID0gcmVxdWlyZShcIi4uLy4uL3V0aWxcIik7XG5cbnZhciB1dGlsID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3V0aWwpO1xuXG52YXIgX2ZzID0gcmVxdWlyZShcImZzXCIpO1xuXG52YXIgX2ZzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZzKTtcblxudmFyIF9wYXRoID0gcmVxdWlyZShcInBhdGhcIik7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxuLyoqXG4gKiBJbnN0YWxsIHNvdXJjZW1hcHMgaW50byBub2RlLlxuICovXG5cbl9zb3VyY2VNYXBTdXBwb3J0MltcImRlZmF1bHRcIl0uaW5zdGFsbCh7XG4gIGhhbmRsZVVuY2F1Z2h0RXhjZXB0aW9uczogZmFsc2UsXG4gIHJldHJpZXZlU291cmNlTWFwOiBmdW5jdGlvbiByZXRyaWV2ZVNvdXJjZU1hcChzb3VyY2UpIHtcbiAgICB2YXIgbWFwID0gbWFwcyAmJiBtYXBzW3NvdXJjZV07XG4gICAgaWYgKG1hcCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBudWxsLFxuICAgICAgICBtYXA6IG1hcFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG59KTtcblxuLyoqXG4gKiBMb2FkIGFuZCBzZXR1cCBjYWNoZS5cbiAqL1xuXG5yZWdpc3RlckNhY2hlLmxvYWQoKTtcbnZhciBjYWNoZSA9IHJlZ2lzdGVyQ2FjaGUuZ2V0KCk7XG5cbi8qKlxuICogU3RvcmUgb3B0aW9ucy5cbiAqL1xuXG52YXIgdHJhbnNmb3JtT3B0cyA9IHt9O1xuXG52YXIgaWdub3JlO1xudmFyIG9ubHk7XG5cbnZhciBvbGRIYW5kbGVycyA9IHt9O1xudmFyIG1hcHMgPSB7fTtcblxudmFyIGN3ZCA9IHByb2Nlc3MuY3dkKCk7XG5cbi8qKlxuICogR2V0IHBhdGggZnJvbSBgZmlsZW5hbWVgIHJlbGF0aXZlIHRvIHRoZSBjdXJyZW50IHdvcmtpbmcgZGlyZWN0b3J5LlxuICovXG5cbnZhciBnZXRSZWxhdGl2ZVBhdGggPSBmdW5jdGlvbiBnZXRSZWxhdGl2ZVBhdGgoZmlsZW5hbWUpIHtcbiAgcmV0dXJuIF9wYXRoMltcImRlZmF1bHRcIl0ucmVsYXRpdmUoY3dkLCBmaWxlbmFtZSk7XG59O1xuXG4vKipcbiAqIEdldCBsYXN0IG1vZGlmaWVkIHRpbWUgZm9yIGEgYGZpbGVuYW1lYC5cbiAqL1xuXG52YXIgbXRpbWUgPSBmdW5jdGlvbiBtdGltZShmaWxlbmFtZSkge1xuICByZXR1cm4gK19mczJbXCJkZWZhdWx0XCJdLnN0YXRTeW5jKGZpbGVuYW1lKS5tdGltZTtcbn07XG5cbi8qKlxuICogQ29tcGlsZSBhIGBmaWxlbmFtZWAgd2l0aCBvcHRpb25hbCBgb3B0c2AuXG4gKi9cblxudmFyIGNvbXBpbGUgPSBmdW5jdGlvbiBjb21waWxlKGZpbGVuYW1lKSB7XG4gIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgdmFyIHJlc3VsdDtcblxuICBvcHRzLmZpbGVuYW1lID0gZmlsZW5hbWU7XG5cbiAgdmFyIG9wdHNNYW5hZ2VyID0gbmV3IF90cmFuc2Zvcm1hdGlvbkZpbGVPcHRpb25zT3B0aW9uTWFuYWdlcjJbXCJkZWZhdWx0XCJdKCk7XG4gIG9wdHNNYW5hZ2VyLm1lcmdlT3B0aW9ucyh0cmFuc2Zvcm1PcHRzKTtcbiAgb3B0cyA9IG9wdHNNYW5hZ2VyLmluaXQob3B0cyk7XG5cbiAgdmFyIGNhY2hlS2V5ID0gSlNPTi5zdHJpbmdpZnkob3B0cykgKyBcIjpcIiArIGJhYmVsLnZlcnNpb247XG5cbiAgdmFyIGVudiA9IHByb2Nlc3MuZW52LkJBQkVMX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOVjtcbiAgaWYgKGVudikgY2FjaGVLZXkgKz0gXCI6XCIgKyBlbnY7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgdmFyIGNhY2hlZCA9IGNhY2hlW2NhY2hlS2V5XTtcbiAgICBpZiAoY2FjaGVkICYmIGNhY2hlZC5tdGltZSA9PT0gbXRpbWUoZmlsZW5hbWUpKSB7XG4gICAgICByZXN1bHQgPSBjYWNoZWQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFyZXN1bHQpIHtcbiAgICByZXN1bHQgPSBiYWJlbC50cmFuc2Zvcm1GaWxlU3luYyhmaWxlbmFtZSwgX2xvZGFzaE9iamVjdEV4dGVuZDJbXCJkZWZhdWx0XCJdKG9wdHMsIHtcbiAgICAgIHNvdXJjZU1hcDogXCJib3RoXCIsXG4gICAgICBhc3Q6IGZhbHNlXG4gICAgfSkpO1xuICB9XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgcmVzdWx0Lm10aW1lID0gbXRpbWUoZmlsZW5hbWUpO1xuICAgIGNhY2hlW2NhY2hlS2V5XSA9IHJlc3VsdDtcbiAgfVxuXG4gIG1hcHNbZmlsZW5hbWVdID0gcmVzdWx0Lm1hcDtcblxuICByZXR1cm4gcmVzdWx0LmNvZGU7XG59O1xuXG4vKipcbiAqIFRlc3QgaWYgYSBgZmlsZW5hbWVgIHNob3VsZCBiZSBpZ25vcmVkIGJ5IEJhYmVsLlxuICovXG5cbnZhciBzaG91bGRJZ25vcmUgPSBmdW5jdGlvbiBzaG91bGRJZ25vcmUoZmlsZW5hbWUpIHtcbiAgaWYgKCFpZ25vcmUgJiYgIW9ubHkpIHtcbiAgICByZXR1cm4gZ2V0UmVsYXRpdmVQYXRoKGZpbGVuYW1lKS5zcGxpdChfcGF0aDJbXCJkZWZhdWx0XCJdLnNlcCkuaW5kZXhPZihcIm5vZGVfbW9kdWxlc1wiKSA+PSAwO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB1dGlsLnNob3VsZElnbm9yZShmaWxlbmFtZSwgaWdub3JlIHx8IFtdLCBvbmx5KTtcbiAgfVxufTtcblxuLyoqXG4gKiBNb25rZXkgcGF0Y2ggaXN0YW5idWwgaWYgaXQgaXMgcnVubmluZyBzbyB0aGF0IGl0IHdvcmtzIHByb3Blcmx5LlxuICovXG5cbnZhciBpc3RhbmJ1bE1vbmtleSA9IHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYucnVubmluZ191bmRlcl9pc3RhbmJ1bCkge1xuICAvLyB3ZSBuZWVkIHRvIG1vbmtleSBwYXRjaCBmcy5yZWFkRmlsZVN5bmMgc28gd2UgY2FuIGhvb2sgaW50b1xuICAvLyB3aGF0IGlzdGFuYnVsIGdldHMsIGl0J3MgZXh0cmVtZWx5IGRpcnR5IGJ1dCBpdCdzIHRoZSBvbmx5IHdheVxuICB2YXIgX3JlYWRGaWxlU3luYyA9IF9mczJbXCJkZWZhdWx0XCJdLnJlYWRGaWxlU3luYztcblxuICBfZnMyW1wiZGVmYXVsdFwiXS5yZWFkRmlsZVN5bmMgPSBmdW5jdGlvbiAoZmlsZW5hbWUpIHtcbiAgICBpZiAoaXN0YW5idWxNb25rZXlbZmlsZW5hbWVdKSB7XG4gICAgICBkZWxldGUgaXN0YW5idWxNb25rZXlbZmlsZW5hbWVdO1xuICAgICAgdmFyIGNvZGUgPSBjb21waWxlKGZpbGVuYW1lLCB7XG4gICAgICAgIGF1eGlsaWFyeUNvbW1lbnRCZWZvcmU6IFwiaXN0YW5idWwgaWdub3JlIG5leHRcIlxuICAgICAgfSk7XG4gICAgICBpc3RhbmJ1bE1vbmtleVtmaWxlbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIGNvZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBfcmVhZEZpbGVTeW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFJlcGxhY2VtZW50IGZvciB0aGUgbG9hZGVyIGZvciBpc3RhbmJ1bC5cbiAqL1xuXG52YXIgaXN0YW5idWxMb2FkZXIgPSBmdW5jdGlvbiBpc3RhbmJ1bExvYWRlcihtLCBmaWxlbmFtZSwgb2xkKSB7XG4gIGlzdGFuYnVsTW9ua2V5W2ZpbGVuYW1lXSA9IHRydWU7XG4gIG9sZChtLCBmaWxlbmFtZSk7XG59O1xuXG4vKipcbiAqIERlZmF1bHQgbG9hZGVyLlxuICovXG5cbnZhciBub3JtYWxMb2FkZXIgPSBmdW5jdGlvbiBub3JtYWxMb2FkZXIobSwgZmlsZW5hbWUpIHtcbiAgbS5fY29tcGlsZShjb21waWxlKGZpbGVuYW1lKSwgZmlsZW5hbWUpO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciBhIGxvYWRlciBmb3IgYW4gZXh0ZW5zaW9uLlxuICovXG5cbnZhciByZWdpc3RlckV4dGVuc2lvbiA9IGZ1bmN0aW9uIHJlZ2lzdGVyRXh0ZW5zaW9uKGV4dCkge1xuICB2YXIgb2xkID0gb2xkSGFuZGxlcnNbZXh0XSB8fCBvbGRIYW5kbGVyc1tcIi5qc1wiXSB8fCByZXF1aXJlLmV4dGVuc2lvbnNbXCIuanNcIl07XG5cbiAgdmFyIGxvYWRlciA9IG5vcm1hbExvYWRlcjtcbiAgaWYgKHByb2Nlc3MuZW52LnJ1bm5pbmdfdW5kZXJfaXN0YW5idWwpIGxvYWRlciA9IGlzdGFuYnVsTG9hZGVyO1xuXG4gIHJlcXVpcmUuZXh0ZW5zaW9uc1tleHRdID0gZnVuY3Rpb24gKG0sIGZpbGVuYW1lKSB7XG4gICAgaWYgKHNob3VsZElnbm9yZShmaWxlbmFtZSkpIHtcbiAgICAgIG9sZChtLCBmaWxlbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvYWRlcihtLCBmaWxlbmFtZSwgb2xkKTtcbiAgICB9XG4gIH07XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGxvYWRlciBmb3IgZ2l2ZW4gZXh0ZW5zaW9ucy5cbiAqL1xuXG52YXIgaG9va0V4dGVuc2lvbnMgPSBmdW5jdGlvbiBob29rRXh0ZW5zaW9ucyhfZXh0cykge1xuICBfbG9kYXNoQ29sbGVjdGlvbkVhY2gyW1wiZGVmYXVsdFwiXShvbGRIYW5kbGVycywgZnVuY3Rpb24gKG9sZCwgZXh0KSB7XG4gICAgaWYgKG9sZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZWxldGUgcmVxdWlyZS5leHRlbnNpb25zW2V4dF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcXVpcmUuZXh0ZW5zaW9uc1tleHRdID0gb2xkO1xuICAgIH1cbiAgfSk7XG5cbiAgb2xkSGFuZGxlcnMgPSB7fTtcblxuICBfbG9kYXNoQ29sbGVjdGlvbkVhY2gyW1wiZGVmYXVsdFwiXShfZXh0cywgZnVuY3Rpb24gKGV4dCkge1xuICAgIG9sZEhhbmRsZXJzW2V4dF0gPSByZXF1aXJlLmV4dGVuc2lvbnNbZXh0XTtcbiAgICByZWdpc3RlckV4dGVuc2lvbihleHQpO1xuICB9KTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgbG9hZGVyIGZvciBkZWZhdWx0IGV4dGVuc2lvbnMuXG4gKi9cblxuaG9va0V4dGVuc2lvbnModXRpbC5jYW5Db21waWxlLkVYVEVOU0lPTlMpO1xuXG4vKipcbiAqIFVwZGF0ZSBvcHRpb25zIGF0IHJ1bnRpbWUuXG4gKi9cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgaWYgKG9wdHMub25seSAhPSBudWxsKSBvbmx5ID0gdXRpbC5hcnJheWlmeShvcHRzLm9ubHksIHV0aWwucmVnZXhpZnkpO1xuICBpZiAob3B0cy5pZ25vcmUgIT0gbnVsbCkgaWdub3JlID0gdXRpbC5hcnJheWlmeShvcHRzLmlnbm9yZSwgdXRpbC5yZWdleGlmeSk7XG5cbiAgaWYgKG9wdHMuZXh0ZW5zaW9ucykgaG9va0V4dGVuc2lvbnModXRpbC5hcnJheWlmeShvcHRzLmV4dGVuc2lvbnMpKTtcblxuICBpZiAob3B0cy5jYWNoZSA9PT0gZmFsc2UpIGNhY2hlID0gbnVsbDtcblxuICBkZWxldGUgb3B0cy5leHRlbnNpb25zO1xuICBkZWxldGUgb3B0cy5pZ25vcmU7XG4gIGRlbGV0ZSBvcHRzLmNhY2hlO1xuICBkZWxldGUgb3B0cy5vbmx5O1xuXG4gIF9sb2Rhc2hPYmplY3RFeHRlbmQyW1wiZGVmYXVsdFwiXSh0cmFuc2Zvcm1PcHRzLCBvcHRzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
