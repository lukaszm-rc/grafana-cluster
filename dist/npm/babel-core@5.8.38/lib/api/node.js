/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _lodashLangIsFunction, _lodashLangIsFunction2, _transformation, _transformation2, _babylon, babylon, _util, util, _fs, _fs2, _types, t, _transformationFile, _transformationFileOptionsConfig, _transformationPlugin, _transformationTransformer, _transformationPipeline, _traversal, _toolsBuildExternalHelpers, _package;

  // istanbul ignore next

  function _interopRequire(obj) {
    return obj && obj.__esModule ? obj["default"] : obj;
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

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }

  /**
   * Register Babel and polyfill globally.
   */

  function register(opts) {
    var callback = require("./register/node-polyfill");
    if (opts != null) callback(opts);
    return callback;
  }

  /**
   * Register polyfill globally.
   */

  function polyfill() {
    require("../polyfill");
  }

  /**
   * Asynchronously transform `filename` with optional `opts`, calls `callback` when complete.
   */

  function transformFile(filename, opts, callback) {
    if (_lodashLangIsFunction2["default"](opts)) {
      callback = opts;
      opts = {};
    }

    opts.filename = filename;

    _fs2["default"].readFile(filename, function (err, code) {
      if (err) return callback(err);

      var result;

      try {
        result = _transformation2["default"](code, opts);
      } catch (err) {
        return callback(err);
      }

      callback(null, result);
    });
  }

  /**
   * Synchronous form of `transformFile`.
   */

  function transformFileSync(filename) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    opts.filename = filename;
    return _transformation2["default"](_fs2["default"].readFileSync(filename, "utf8"), opts);
  }

  /**
   * Parse script with Babel's parser.
   */

  function parse(code) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    opts.allowHashBang = true;
    opts.sourceType = "module";
    opts.ecmaVersion = Infinity;
    opts.plugins = {
      jsx: true,
      flow: true
    };
    opts.features = {};

    for (var key in _transformation2["default"].pipeline.transformers) {
      opts.features[key] = true;
    }

    var ast = babylon.parse(code, opts);

    if (opts.onToken) {
      // istanbul ignore next

      var _opts$onToken;

      (_opts$onToken = opts.onToken).push.apply(_opts$onToken, ast.tokens);
    }

    if (opts.onComment) {
      // istanbul ignore next

      var _opts$onComment;

      (_opts$onComment = opts.onComment).push.apply(_opts$onComment, ast.comments);
    }

    return ast.program;
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.register = register;
      exports.polyfill = polyfill;
      exports.transformFile = transformFile;
      exports.transformFileSync = transformFileSync;
      exports.parse = parse;_lodashLangIsFunction = require("lodash/lang/isFunction");
      _lodashLangIsFunction2 = _interopRequireDefault(_lodashLangIsFunction);
      _transformation = require("../transformation");
      _transformation2 = _interopRequireDefault(_transformation);
      _babylon = require("babylon");
      babylon = _interopRequireWildcard(_babylon);
      _util = require("../util");
      util = _interopRequireWildcard(_util);
      _fs = require("fs");
      _fs2 = _interopRequireDefault(_fs);
      _types = require("../types");
      t = _interopRequireWildcard(_types);


      exports.util = util;
      exports.acorn = babylon;
      exports.transform = _transformation2["default"];
      exports.pipeline = _transformation.pipeline;
      exports.canCompile = _util.canCompile;

      _transformationFile = require("../transformation/file");


      exports.File = _interopRequire(_transformationFile);

      _transformationFileOptionsConfig = require("../transformation/file/options/config");


      exports.options = _interopRequire(_transformationFileOptionsConfig);

      _transformationPlugin = require("../transformation/plugin");


      exports.Plugin = _interopRequire(_transformationPlugin);

      _transformationTransformer = require("../transformation/transformer");


      exports.Transformer = _interopRequire(_transformationTransformer);

      _transformationPipeline = require("../transformation/pipeline");


      exports.Pipeline = _interopRequire(_transformationPipeline);

      _traversal = require("../traversal");


      exports.traverse = _interopRequire(_traversal);

      _toolsBuildExternalHelpers = require("../tools/build-external-helpers");


      exports.buildExternalHelpers = _interopRequire(_toolsBuildExternalHelpers);

      _package = require("../../package");


      exports.version = _package.version;
      exports.types = t;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvYXBpL25vZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFVQSxXQUFTLGVBQVQsQ0FBeUIsR0FBekIsRUFBOEI7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLElBQUksU0FBSixDQUF4QixHQUF5QyxHQUF6QyxDQUFUO0dBQTlCOzs7O0FBSUEsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7OztBQUlBLFdBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLEdBQXhCLEdBQThCLEVBQUUsV0FBVyxHQUFYLEVBQWhDLENBQVQ7R0FBckM7Ozs7OztBQXFFQSxXQUFTLFFBQVQsQ0FBa0IsSUFBbEIsRUFBd0I7QUFDdEIsUUFBSSxXQUFXLFFBQVEsMEJBQVIsQ0FBWCxDQURrQjtBQUV0QixRQUFJLFFBQVEsSUFBUixFQUFjLFNBQVMsSUFBVCxFQUFsQjtBQUNBLFdBQU8sUUFBUCxDQUhzQjtHQUF4Qjs7Ozs7O0FBVUEsV0FBUyxRQUFULEdBQW9CO0FBQ2xCLFlBQVEsYUFBUixFQURrQjtHQUFwQjs7Ozs7O0FB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Ujs7O0FBRWpDLGNBQVEsb0JBQVIsR0FBK0IsZ0JBQWdCLDBCQUFoQixDQUEvQjs7QUFFSSxpQkFBVyxRQUFRLGVBQVI7OztBQUVmLGNBQVEsT0FBUixHQUFrQixTQUFTLE9BQVQ7QUFDbEIsY0FBUSxLQUFSLEdBQWdCLENBQWhCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvYXBpL25vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnJlZ2lzdGVyID0gcmVnaXN0ZXI7XG5leHBvcnRzLnBvbHlmaWxsID0gcG9seWZpbGw7XG5leHBvcnRzLnRyYW5zZm9ybUZpbGUgPSB0cmFuc2Zvcm1GaWxlO1xuZXhwb3J0cy50cmFuc2Zvcm1GaWxlU3luYyA9IHRyYW5zZm9ybUZpbGVTeW5jO1xuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlKG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iajsgfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX2xvZGFzaExhbmdJc0Z1bmN0aW9uID0gcmVxdWlyZShcImxvZGFzaC9sYW5nL2lzRnVuY3Rpb25cIik7XG5cbnZhciBfbG9kYXNoTGFuZ0lzRnVuY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoTGFuZ0lzRnVuY3Rpb24pO1xuXG52YXIgX3RyYW5zZm9ybWF0aW9uID0gcmVxdWlyZShcIi4uL3RyYW5zZm9ybWF0aW9uXCIpO1xuXG52YXIgX3RyYW5zZm9ybWF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybWF0aW9uKTtcblxudmFyIF9iYWJ5bG9uID0gcmVxdWlyZShcImJhYnlsb25cIik7XG5cbnZhciBiYWJ5bG9uID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2JhYnlsb24pO1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKFwiLi4vdXRpbFwiKTtcblxudmFyIHV0aWwgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbCk7XG5cbnZhciBfZnMgPSByZXF1aXJlKFwiZnNcIik7XG5cbnZhciBfZnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnMpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbmV4cG9ydHMudXRpbCA9IHV0aWw7XG5leHBvcnRzLmFjb3JuID0gYmFieWxvbjtcbmV4cG9ydHMudHJhbnNmb3JtID0gX3RyYW5zZm9ybWF0aW9uMltcImRlZmF1bHRcIl07XG5leHBvcnRzLnBpcGVsaW5lID0gX3RyYW5zZm9ybWF0aW9uLnBpcGVsaW5lO1xuZXhwb3J0cy5jYW5Db21waWxlID0gX3V0aWwuY2FuQ29tcGlsZTtcblxudmFyIF90cmFuc2Zvcm1hdGlvbkZpbGUgPSByZXF1aXJlKFwiLi4vdHJhbnNmb3JtYXRpb24vZmlsZVwiKTtcblxuZXhwb3J0cy5GaWxlID0gX2ludGVyb3BSZXF1aXJlKF90cmFuc2Zvcm1hdGlvbkZpbGUpO1xuXG52YXIgX3RyYW5zZm9ybWF0aW9uRmlsZU9wdGlvbnNDb25maWcgPSByZXF1aXJlKFwiLi4vdHJhbnNmb3JtYXRpb24vZmlsZS9vcHRpb25zL2NvbmZpZ1wiKTtcblxuZXhwb3J0cy5vcHRpb25zID0gX2ludGVyb3BSZXF1aXJlKF90cmFuc2Zvcm1hdGlvbkZpbGVPcHRpb25zQ29uZmlnKTtcblxudmFyIF90cmFuc2Zvcm1hdGlvblBsdWdpbiA9IHJlcXVpcmUoXCIuLi90cmFuc2Zvcm1hdGlvbi9wbHVnaW5cIik7XG5cbmV4cG9ydHMuUGx1Z2luID0gX2ludGVyb3BSZXF1aXJlKF90cmFuc2Zvcm1hdGlvblBsdWdpbik7XG5cbnZhciBfdHJhbnNmb3JtYXRpb25UcmFuc2Zvcm1lciA9IHJlcXVpcmUoXCIuLi90cmFuc2Zvcm1hdGlvbi90cmFuc2Zvcm1lclwiKTtcblxuZXhwb3J0cy5UcmFuc2Zvcm1lciA9IF9pbnRlcm9wUmVxdWlyZShfdHJhbnNmb3JtYXRpb25UcmFuc2Zvcm1lcik7XG5cbnZhciBfdHJhbnNmb3JtYXRpb25QaXBlbGluZSA9IHJlcXVpcmUoXCIuLi90cmFuc2Zvcm1hdGlvbi9waXBlbGluZVwiKTtcblxuZXhwb3J0cy5QaXBlbGluZSA9IF9pbnRlcm9wUmVxdWlyZShfdHJhbnNmb3JtYXRpb25QaXBlbGluZSk7XG5cbnZhciBfdHJhdmVyc2FsID0gcmVxdWlyZShcIi4uL3RyYXZlcnNhbFwiKTtcblxuZXhwb3J0cy50cmF2ZXJzZSA9IF9pbnRlcm9wUmVxdWlyZShfdHJhdmVyc2FsKTtcblxudmFyIF90b29sc0J1aWxkRXh0ZXJuYWxIZWxwZXJzID0gcmVxdWlyZShcIi4uL3Rvb2xzL2J1aWxkLWV4dGVybmFsLWhlbHBlcnNcIik7XG5cbmV4cG9ydHMuYnVpbGRFeHRlcm5hbEhlbHBlcnMgPSBfaW50ZXJvcFJlcXVpcmUoX3Rvb2xzQnVpbGRFeHRlcm5hbEhlbHBlcnMpO1xuXG52YXIgX3BhY2thZ2UgPSByZXF1aXJlKFwiLi4vLi4vcGFja2FnZVwiKTtcblxuZXhwb3J0cy52ZXJzaW9uID0gX3BhY2thZ2UudmVyc2lvbjtcbmV4cG9ydHMudHlwZXMgPSB0O1xuXG4vKipcbiAqIFJlZ2lzdGVyIEJhYmVsIGFuZCBwb2x5ZmlsbCBnbG9iYWxseS5cbiAqL1xuXG5mdW5jdGlvbiByZWdpc3RlcihvcHRzKSB7XG4gIHZhciBjYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlZ2lzdGVyL25vZGUtcG9seWZpbGxcIik7XG4gIGlmIChvcHRzICE9IG51bGwpIGNhbGxiYWNrKG9wdHMpO1xuICByZXR1cm4gY2FsbGJhY2s7XG59XG5cbi8qKlxuICogUmVnaXN0ZXIgcG9seWZpbGwgZ2xvYmFsbHkuXG4gKi9cblxuZnVuY3Rpb24gcG9seWZpbGwoKSB7XG4gIHJlcXVpcmUoXCIuLi9wb2x5ZmlsbFwiKTtcbn1cblxuLyoqXG4gKiBBc3luY2hyb25vdXNseSB0cmFuc2Zvcm0gYGZpbGVuYW1lYCB3aXRoIG9wdGlvbmFsIGBvcHRzYCwgY2FsbHMgYGNhbGxiYWNrYCB3aGVuIGNvbXBsZXRlLlxuICovXG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUZpbGUoZmlsZW5hbWUsIG9wdHMsIGNhbGxiYWNrKSB7XG4gIGlmIChfbG9kYXNoTGFuZ0lzRnVuY3Rpb24yW1wiZGVmYXVsdFwiXShvcHRzKSkge1xuICAgIGNhbGxiYWNrID0gb3B0cztcbiAgICBvcHRzID0ge307XG4gIH1cblxuICBvcHRzLmZpbGVuYW1lID0gZmlsZW5hbWU7XG5cbiAgX2ZzMltcImRlZmF1bHRcIl0ucmVhZEZpbGUoZmlsZW5hbWUsIGZ1bmN0aW9uIChlcnIsIGNvZGUpIHtcbiAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcblxuICAgIHZhciByZXN1bHQ7XG5cbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gX3RyYW5zZm9ybWF0aW9uMltcImRlZmF1bHRcIl0oY29kZSwgb3B0cyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICB9XG5cbiAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBTeW5jaHJvbm91cyBmb3JtIG9mIGB0cmFuc2Zvcm1GaWxlYC5cbiAqL1xuXG5mdW5jdGlvbiB0cmFuc2Zvcm1GaWxlU3luYyhmaWxlbmFtZSkge1xuICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gIG9wdHMuZmlsZW5hbWUgPSBmaWxlbmFtZTtcbiAgcmV0dXJuIF90cmFuc2Zvcm1hdGlvbjJbXCJkZWZhdWx0XCJdKF9mczJbXCJkZWZhdWx0XCJdLnJlYWRGaWxlU3luYyhmaWxlbmFtZSwgXCJ1dGY4XCIpLCBvcHRzKTtcbn1cblxuLyoqXG4gKiBQYXJzZSBzY3JpcHQgd2l0aCBCYWJlbCdzIHBhcnNlci5cbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShjb2RlKSB7XG4gIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgb3B0cy5hbGxvd0hhc2hCYW5nID0gdHJ1ZTtcbiAgb3B0cy5zb3VyY2VUeXBlID0gXCJtb2R1bGVcIjtcbiAgb3B0cy5lY21hVmVyc2lvbiA9IEluZmluaXR5O1xuICBvcHRzLnBsdWdpbnMgPSB7XG4gICAganN4OiB0cnVlLFxuICAgIGZsb3c6IHRydWVcbiAgfTtcbiAgb3B0cy5mZWF0dXJlcyA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBfdHJhbnNmb3JtYXRpb24yW1wiZGVmYXVsdFwiXS5waXBlbGluZS50cmFuc2Zvcm1lcnMpIHtcbiAgICBvcHRzLmZlYXR1cmVzW2tleV0gPSB0cnVlO1xuICB9XG5cbiAgdmFyIGFzdCA9IGJhYnlsb24ucGFyc2UoY29kZSwgb3B0cyk7XG5cbiAgaWYgKG9wdHMub25Ub2tlbikge1xuICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbiAgICB2YXIgX29wdHMkb25Ub2tlbjtcblxuICAgIChfb3B0cyRvblRva2VuID0gb3B0cy5vblRva2VuKS5wdXNoLmFwcGx5KF9vcHRzJG9uVG9rZW4sIGFzdC50b2tlbnMpO1xuICB9XG5cbiAgaWYgKG9wdHMub25Db21tZW50KSB7XG4gICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuICAgIHZhciBfb3B0cyRvbkNvbW1lbnQ7XG5cbiAgICAoX29wdHMkb25Db21tZW50ID0gb3B0cy5vbkNvbW1lbnQpLnB1c2guYXBwbHkoX29wdHMkb25Db21tZW50LCBhc3QuY29tbWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGFzdC5wcm9ncmFtO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
