/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _lodashStringEscapeRegExp, _lodashStringEscapeRegExp2, _lodashStringStartsWith, _lodashStringStartsWith2, _lodashLangCloneDeep, _lodashLangCloneDeep2, _lodashLangIsBoolean, _lodashLangIsBoolean2, _messages, messages, _minimatch, _minimatch2, _lodashCollectionContains, _lodashCollectionContains2, _traversal, _traversal2, _lodashLangIsString, _lodashLangIsString2, _lodashLangIsRegExp, _lodashLangIsRegExp2, _lodashLangIsEmpty, _lodashLangIsEmpty2, _helpersParse, _helpersParse2, _path, _path2, _lodashObjectHas, _lodashObjectHas2, _fs, _fs2, _types, t, _slash, _slash2, _pathExists, _pathExists2, _util, templateVisitor;

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
   * Test if a filename ends with a compilable extension.
   */

  function canCompile(filename, altExts) {
    var exts = altExts || canCompile.EXTENSIONS;
    var ext = _path2["default"].extname(filename);
    return _lodashCollectionContains2["default"](exts, ext);
  }

  /**
   * Default set of compilable extensions.
   */

  /**
   * Create an array from any value, splitting strings by ",".
   */

  function list(val) {
    if (!val) {
      return [];
    } else if (Array.isArray(val)) {
      return val;
    } else if (typeof val === "string") {
      return val.split(",");
    } else {
      return [val];
    }
  }

  /**
   * Create a RegExp from a string, array, or regexp.
   */

  function regexify(val) {
    if (!val) return new RegExp(/.^/);

    if (Array.isArray(val)) val = new RegExp(val.map(_lodashStringEscapeRegExp2["default"]).join("|"), "i");

    if (_lodashLangIsString2["default"](val)) {
      // normalise path separators
      val = _slash2["default"](val);

      // remove starting wildcards or relative separator if present
      if (_lodashStringStartsWith2["default"](val, "./") || _lodashStringStartsWith2["default"](val, "*/")) val = val.slice(2);
      if (_lodashStringStartsWith2["default"](val, "**/")) val = val.slice(3);

      var regex = _minimatch2["default"].makeRe(val, { nocase: true });
      return new RegExp(regex.source.slice(1, -1), "i");
    }

    if (_lodashLangIsRegExp2["default"](val)) return val;

    throw new TypeError("illegal type for regexify");
  }

  /**
   * Create an array from a boolean, string, or array, mapped by and optional function.
   */

  function arrayify(val, mapFn) {
    if (!val) return [];
    if (_lodashLangIsBoolean2["default"](val)) return arrayify([val], mapFn);
    if (_lodashLangIsString2["default"](val)) return arrayify(list(val), mapFn);

    if (Array.isArray(val)) {
      if (mapFn) val = val.map(mapFn);
      return val;
    }

    return [val];
  }

  /**
   * Makes boolean-like strings into booleans.
   */

  function booleanify(val) {
    if (val === "true") return true;
    if (val === "false") return false;
    return val;
  }

  /**
   * Tests if a filename should be ignored based on "ignore" and "only" options.
   */

  function shouldIgnore(filename, ignore, only) {
    filename = _slash2["default"](filename);

    if (only) {
      var _arr = only;

      for (var _i = 0; _i < _arr.length; _i++) {
        var pattern = _arr[_i];
        if (_shouldIgnore(pattern, filename)) return false;
      }
      return true;
    } else if (ignore.length) {
      var _arr2 = ignore;

      for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
        var pattern = _arr2[_i2];
        if (_shouldIgnore(pattern, filename)) return true;
      }
    }

    return false;
  }

  /**
   * Returns result of calling function with filename if pattern is a function.
   * Otherwise returns result of matching pattern Regex with filename.
   */

  function _shouldIgnore(pattern, filename) {
    if (typeof pattern === "function") {
      return pattern(filename);
    } else {
      return pattern.test(filename);
    }
  }

  /**
   * A visitor for Babel templates, replaces placeholder references.
   */

  /**
   * Create an instance of a template to use in a transformer.
   */

  function template(name, nodes, keepExpression) {
    var ast = exports.templates[name];
    if (!ast) throw new ReferenceError("unknown template " + name);

    if (nodes === true) {
      keepExpression = true;
      nodes = null;
    }

    ast = _lodashLangCloneDeep2["default"](ast);

    if (!_lodashLangIsEmpty2["default"](nodes)) {
      _traversal2["default"](ast, templateVisitor, null, nodes);
    }

    if (ast.body.length > 1) return ast.body;

    var node = ast.body[0];

    if (!keepExpression && t.isExpressionStatement(node)) {
      return node.expression;
    } else {
      return node;
    }
  }

  /**
   * Parse a template.
   */

  function parseTemplate(loc, code) {
    var ast = _helpersParse2["default"](code, { filename: loc, looseModules: true }).program;
    ast = _traversal2["default"].removeProperties(ast);
    return ast;
  }

  /**
   * Load templates from transformation/templates directory.
   */

  function loadTemplates() {
    var templates = {};

    var templatesLoc = _path2["default"].join(__dirname, "transformation/templates");
    if (!_pathExists2["default"].sync(templatesLoc)) {
      throw new ReferenceError(messages.get("missingTemplatesDirectory"));
    }

    var _arr3 = _fs2["default"].readdirSync(templatesLoc);

    for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
      var name = _arr3[_i3];
      if (name[0] === ".") return;

      var key = _path2["default"].basename(name, _path2["default"].extname(name));
      var loc = _path2["default"].join(templatesLoc, name);
      var code = _fs2["default"].readFileSync(loc, "utf8");

      templates[key] = parseTemplate(loc, code);
    }

    return templates;
  }

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.canCompile = canCompile;
      exports.list = list;
      exports.regexify = regexify;
      exports.arrayify = arrayify;
      exports.booleanify = booleanify;
      exports.shouldIgnore = shouldIgnore;
      exports.template = template;
      exports.parseTemplate = parseTemplate;_lodashStringEscapeRegExp = require("lodash/string/escapeRegExp");
      _lodashStringEscapeRegExp2 = _interopRequireDefault(_lodashStringEscapeRegExp);
      _lodashStringStartsWith = require("lodash/string/startsWith");
      _lodashStringStartsWith2 = _interopRequireDefault(_lodashStringStartsWith);
      _lodashLangCloneDeep = require("lodash/lang/cloneDeep");
      _lodashLangCloneDeep2 = _interopRequireDefault(_lodashLangCloneDeep);
      _lodashLangIsBoolean = require("lodash/lang/isBoolean");
      _lodashLangIsBoolean2 = _interopRequireDefault(_lodashLangIsBoolean);
      _messages = require("./messages");
      messages = _interopRequireWildcard(_messages);
      _minimatch = require("minimatch");
      _minimatch2 = _interopRequireDefault(_minimatch);
      _lodashCollectionContains = require("lodash/collection/contains");
      _lodashCollectionContains2 = _interopRequireDefault(_lodashCollectionContains);
      _traversal = require("./traversal");
      _traversal2 = _interopRequireDefault(_traversal);
      _lodashLangIsString = require("lodash/lang/isString");
      _lodashLangIsString2 = _interopRequireDefault(_lodashLangIsString);
      _lodashLangIsRegExp = require("lodash/lang/isRegExp");
      _lodashLangIsRegExp2 = _interopRequireDefault(_lodashLangIsRegExp);
      _lodashLangIsEmpty = require("lodash/lang/isEmpty");
      _lodashLangIsEmpty2 = _interopRequireDefault(_lodashLangIsEmpty);
      _helpersParse = require("./helpers/parse");
      _helpersParse2 = _interopRequireDefault(_helpersParse);
      _path = require("path");
      _path2 = _interopRequireDefault(_path);
      _lodashObjectHas = require("lodash/object/has");
      _lodashObjectHas2 = _interopRequireDefault(_lodashObjectHas);
      _fs = require("fs");
      _fs2 = _interopRequireDefault(_fs);
      _types = require("./types");
      t = _interopRequireWildcard(_types);
      _slash = require("slash");
      _slash2 = _interopRequireDefault(_slash);
      _pathExists = require("path-exists");
      _pathExists2 = _interopRequireDefault(_pathExists);
      _util = require("util");


      exports.inherits = _util.inherits;
      exports.inspect = _util.inspect;canCompile.EXTENSIONS = [".js", ".jsx", ".es6", ".es"];templateVisitor = {

        /**
         * 360 NoScope PWNd
         */
        noScope: true,

        enter: function enter(node, parent, scope, nodes) {
          if (t.isExpressionStatement(node)) {
            node = node.expression;
          }

          if (t.isIdentifier(node) && _lodashObjectHas2["default"](nodes, node.name)) {
            this.skip();
            this.replaceInline(nodes[node.name]);
          }
        },

        exit: function exit(node) {
          _traversal2["default"].clearNode(node);
        }
      };
      try {
        exports.templates = require("../templates.json");
      } catch (err) {
        if (err.code !== "MODULE_NOT_FOUND") throw err;
        exports.templates = loadTemplates();
      }
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQWFBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7QUFJQSxXQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBSixHQUFpQixHQUF4QixHQUE4QixFQUFFLFdBQVcsR0FBWCxFQUFoQyxDQUFUO0dBQXJDOzs7Ozs7QUFtRkEsV0FBUyxVQUFULENBQW9CLFFBQXBCLEVBQThCLE9BQTlCLEVBQXVDO0FBQ3JDLFFBQUksT0FBTyxXQUFXLFdBQVcsVUFBWCxDQURlO0FBRXJDLFFBQUksTUFBTSxPQUFPLFNBQVAsRUFBa0IsT0FBbEIsQ0FBMEIsUUFBMUIsQ0FBTixDQUZpQztBQUdyQyxXQUFPLDJCQUEyQixTQUEzQixFQUFzQyxJQUF0QyxFQUE0QyxHQUE1QyxDQUFQLENBSHFDO0dBQXZDOzs7Ozs7Ozs7O0FBZ0JBLFdBQVMsSUFBVCxDQUFjLEdBQWQsRUFBbUI7QUFDakIsUUFBSSxDQUFDLEdBQUQsRUFBTTtBQUNSLGFBQU8sRUFBUCxDQURRO0tBQVYsTUFFTyxJQUFJLE1B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QUFELEVBQVEsTUFBUixFQUFnQixNQUFoQixFQUF3QixLQUF4QixDQUF4QixDQW1ISSxrQkFBa0I7Ozs7O0FBS3BCLGlCQUFTLElBQVQ7O0FBRUEsZUFBTyxTQUFTLEtBQVQsQ0FBZSxJQUFmLEVBQXFCLE1BQXJCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLEVBQTJDO0FBQ2hELGNBQUksRUFBRSxxQkFBRixDQUF3QixJQUF4QixDQUFKLEVBQW1DO0FBQ2pDLG1CQUFPLEtBQUssVUFBTCxDQUQwQjtXQUFuQzs7QUFJQSxjQUFJLEVBQUUsWUFBRixDQUFlLElBQWYsS0FBd0Isa0JBQWtCLFNBQWxCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQUssSUFBTCxDQUE1RCxFQUF3RTtBQUMxRSxpQkFBSyxJQUFMLEdBRDBFO0FBRTFFLGlCQUFLLGFBQUwsQ0FBbUIsTUFBTSxLQUFLLElBQUwsQ0FBekIsRUFGMEU7V0FBNUU7U0FMSzs7QUFXUCxjQUFNLFNBQVMsSUFBVCxDQUFjLElBQWQsRUFBb0I7QUFDeEIsc0JBQVksU0FBWixFQUF1QixTQUF2QixDQUFpQyxJQUFqQyxFQUR3QjtTQUFwQjs7QUF5RVIsVUFBSTtBQUNGLGdCQUFRLFNBQVIsR0FBb0IsUUFBUSxtQkFBUixDQUFwQixDQURFO09BQUosQ0FFRSxPQUFPLEdBQVAsRUFBWTtBQUNaLFlBQUksSUFBSSxJQUFKLEtBQWEsa0JBQWIsRUFBaUMsTUFBTSxHQUFOLENBQXJDO0FBQ0EsZ0JBQVEsU0FBUixHQUFvQixlQUFwQixDQUZZO09BQVoiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi91dGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jYW5Db21waWxlID0gY2FuQ29tcGlsZTtcbmV4cG9ydHMubGlzdCA9IGxpc3Q7XG5leHBvcnRzLnJlZ2V4aWZ5ID0gcmVnZXhpZnk7XG5leHBvcnRzLmFycmF5aWZ5ID0gYXJyYXlpZnk7XG5leHBvcnRzLmJvb2xlYW5pZnkgPSBib29sZWFuaWZ5O1xuZXhwb3J0cy5zaG91bGRJZ25vcmUgPSBzaG91bGRJZ25vcmU7XG5leHBvcnRzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG5leHBvcnRzLnBhcnNlVGVtcGxhdGUgPSBwYXJzZVRlbXBsYXRlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIF9sb2Rhc2hTdHJpbmdFc2NhcGVSZWdFeHAgPSByZXF1aXJlKFwibG9kYXNoL3N0cmluZy9lc2NhcGVSZWdFeHBcIik7XG5cbnZhciBfbG9kYXNoU3RyaW5nRXNjYXBlUmVnRXhwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaFN0cmluZ0VzY2FwZVJlZ0V4cCk7XG5cbnZhciBfbG9kYXNoU3RyaW5nU3RhcnRzV2l0aCA9IHJlcXVpcmUoXCJsb2Rhc2gvc3RyaW5nL3N0YXJ0c1dpdGhcIik7XG5cbnZhciBfbG9kYXNoU3RyaW5nU3RhcnRzV2l0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hTdHJpbmdTdGFydHNXaXRoKTtcblxudmFyIF9sb2Rhc2hMYW5nQ2xvbmVEZWVwID0gcmVxdWlyZShcImxvZGFzaC9sYW5nL2Nsb25lRGVlcFwiKTtcblxudmFyIF9sb2Rhc2hMYW5nQ2xvbmVEZWVwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaExhbmdDbG9uZURlZXApO1xuXG52YXIgX2xvZGFzaExhbmdJc0Jvb2xlYW4gPSByZXF1aXJlKFwibG9kYXNoL2xhbmcvaXNCb29sZWFuXCIpO1xuXG52YXIgX2xvZGFzaExhbmdJc0Jvb2xlYW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoTGFuZ0lzQm9vbGVhbik7XG5cbnZhciBfbWVzc2FnZXMgPSByZXF1aXJlKFwiLi9tZXNzYWdlc1wiKTtcblxudmFyIG1lc3NhZ2VzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX21lc3NhZ2VzKTtcblxudmFyIF9taW5pbWF0Y2ggPSByZXF1aXJlKFwibWluaW1hdGNoXCIpO1xuXG52YXIgX21pbmltYXRjaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9taW5pbWF0Y2gpO1xuXG52YXIgX2xvZGFzaENvbGxlY3Rpb25Db250YWlucyA9IHJlcXVpcmUoXCJsb2Rhc2gvY29sbGVjdGlvbi9jb250YWluc1wiKTtcblxudmFyIF9sb2Rhc2hDb2xsZWN0aW9uQ29udGFpbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoQ29sbGVjdGlvbkNvbnRhaW5zKTtcblxudmFyIF90cmF2ZXJzYWwgPSByZXF1aXJlKFwiLi90cmF2ZXJzYWxcIik7XG5cbnZhciBfdHJhdmVyc2FsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYXZlcnNhbCk7XG5cbnZhciBfbG9kYXNoTGFuZ0lzU3RyaW5nID0gcmVxdWlyZShcImxvZGFzaC9sYW5nL2lzU3RyaW5nXCIpO1xuXG52YXIgX2xvZGFzaExhbmdJc1N0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hMYW5nSXNTdHJpbmcpO1xuXG52YXIgX2xvZGFzaExhbmdJc1JlZ0V4cCA9IHJlcXVpcmUoXCJsb2Rhc2gvbGFuZy9pc1JlZ0V4cFwiKTtcblxudmFyIF9sb2Rhc2hMYW5nSXNSZWdFeHAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoTGFuZ0lzUmVnRXhwKTtcblxudmFyIF9sb2Rhc2hMYW5nSXNFbXB0eSA9IHJlcXVpcmUoXCJsb2Rhc2gvbGFuZy9pc0VtcHR5XCIpO1xuXG52YXIgX2xvZGFzaExhbmdJc0VtcHR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaExhbmdJc0VtcHR5KTtcblxudmFyIF9oZWxwZXJzUGFyc2UgPSByZXF1aXJlKFwiLi9oZWxwZXJzL3BhcnNlXCIpO1xuXG52YXIgX2hlbHBlcnNQYXJzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzUGFyc2UpO1xuXG52YXIgX3BhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2xvZGFzaE9iamVjdEhhcyA9IHJlcXVpcmUoXCJsb2Rhc2gvb2JqZWN0L2hhc1wiKTtcblxudmFyIF9sb2Rhc2hPYmplY3RIYXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoT2JqZWN0SGFzKTtcblxudmFyIF9mcyA9IHJlcXVpcmUoXCJmc1wiKTtcblxudmFyIF9mczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcyk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG52YXIgX3NsYXNoID0gcmVxdWlyZShcInNsYXNoXCIpO1xuXG52YXIgX3NsYXNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NsYXNoKTtcblxudmFyIF9wYXRoRXhpc3RzID0gcmVxdWlyZShcInBhdGgtZXhpc3RzXCIpO1xuXG52YXIgX3BhdGhFeGlzdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aEV4aXN0cyk7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xuXG5leHBvcnRzLmluaGVyaXRzID0gX3V0aWwuaW5oZXJpdHM7XG5leHBvcnRzLmluc3BlY3QgPSBfdXRpbC5pbnNwZWN0O1xuXG4vKipcbiAqIFRlc3QgaWYgYSBmaWxlbmFtZSBlbmRzIHdpdGggYSBjb21waWxhYmxlIGV4dGVuc2lvbi5cbiAqL1xuXG5mdW5jdGlvbiBjYW5Db21waWxlKGZpbGVuYW1lLCBhbHRFeHRzKSB7XG4gIHZhciBleHRzID0gYWx0RXh0cyB8fCBjYW5Db21waWxlLkVYVEVOU0lPTlM7XG4gIHZhciBleHQgPSBfcGF0aDJbXCJkZWZhdWx0XCJdLmV4dG5hbWUoZmlsZW5hbWUpO1xuICByZXR1cm4gX2xvZGFzaENvbGxlY3Rpb25Db250YWluczJbXCJkZWZhdWx0XCJdKGV4dHMsIGV4dCk7XG59XG5cbi8qKlxuICogRGVmYXVsdCBzZXQgb2YgY29tcGlsYWJsZSBleHRlbnNpb25zLlxuICovXG5cbmNhbkNvbXBpbGUuRVhURU5TSU9OUyA9IFtcIi5qc1wiLCBcIi5qc3hcIiwgXCIuZXM2XCIsIFwiLmVzXCJdO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBhcnJheSBmcm9tIGFueSB2YWx1ZSwgc3BsaXR0aW5nIHN0cmluZ3MgYnkgXCIsXCIuXG4gKi9cblxuZnVuY3Rpb24gbGlzdCh2YWwpIHtcbiAgaWYgKCF2YWwpIHtcbiAgICByZXR1cm4gW107XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHZhbC5zcGxpdChcIixcIik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFt2YWxdO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgUmVnRXhwIGZyb20gYSBzdHJpbmcsIGFycmF5LCBvciByZWdleHAuXG4gKi9cblxuZnVuY3Rpb24gcmVnZXhpZnkodmFsKSB7XG4gIGlmICghdmFsKSByZXR1cm4gbmV3IFJlZ0V4cCgvLl4vKTtcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB2YWwgPSBuZXcgUmVnRXhwKHZhbC5tYXAoX2xvZGFzaFN0cmluZ0VzY2FwZVJlZ0V4cDJbXCJkZWZhdWx0XCJdKS5qb2luKFwifFwiKSwgXCJpXCIpO1xuXG4gIGlmIChfbG9kYXNoTGFuZ0lzU3RyaW5nMltcImRlZmF1bHRcIl0odmFsKSkge1xuICAgIC8vIG5vcm1hbGlzZSBwYXRoIHNlcGFyYXRvcnNcbiAgICB2YWwgPSBfc2xhc2gyW1wiZGVmYXVsdFwiXSh2YWwpO1xuXG4gICAgLy8gcmVtb3ZlIHN0YXJ0aW5nIHdpbGRjYXJkcyBvciByZWxhdGl2ZSBzZXBhcmF0b3IgaWYgcHJlc2VudFxuICAgIGlmIChfbG9kYXNoU3RyaW5nU3RhcnRzV2l0aDJbXCJkZWZhdWx0XCJdKHZhbCwgXCIuL1wiKSB8fCBfbG9kYXNoU3RyaW5nU3RhcnRzV2l0aDJbXCJkZWZhdWx0XCJdKHZhbCwgXCIqL1wiKSkgdmFsID0gdmFsLnNsaWNlKDIpO1xuICAgIGlmIChfbG9kYXNoU3RyaW5nU3RhcnRzV2l0aDJbXCJkZWZhdWx0XCJdKHZhbCwgXCIqKi9cIikpIHZhbCA9IHZhbC5zbGljZSgzKTtcblxuICAgIHZhciByZWdleCA9IF9taW5pbWF0Y2gyW1wiZGVmYXVsdFwiXS5tYWtlUmUodmFsLCB7IG5vY2FzZTogdHJ1ZSB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyZWdleC5zb3VyY2Uuc2xpY2UoMSwgLTEpLCBcImlcIik7XG4gIH1cblxuICBpZiAoX2xvZGFzaExhbmdJc1JlZ0V4cDJbXCJkZWZhdWx0XCJdKHZhbCkpIHJldHVybiB2YWw7XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImlsbGVnYWwgdHlwZSBmb3IgcmVnZXhpZnlcIik7XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGFycmF5IGZyb20gYSBib29sZWFuLCBzdHJpbmcsIG9yIGFycmF5LCBtYXBwZWQgYnkgYW5kIG9wdGlvbmFsIGZ1bmN0aW9uLlxuICovXG5cbmZ1bmN0aW9uIGFycmF5aWZ5KHZhbCwgbWFwRm4pIHtcbiAgaWYgKCF2YWwpIHJldHVybiBbXTtcbiAgaWYgKF9sb2Rhc2hMYW5nSXNCb29sZWFuMltcImRlZmF1bHRcIl0odmFsKSkgcmV0dXJuIGFycmF5aWZ5KFt2YWxdLCBtYXBGbik7XG4gIGlmIChfbG9kYXNoTGFuZ0lzU3RyaW5nMltcImRlZmF1bHRcIl0odmFsKSkgcmV0dXJuIGFycmF5aWZ5KGxpc3QodmFsKSwgbWFwRm4pO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICBpZiAobWFwRm4pIHZhbCA9IHZhbC5tYXAobWFwRm4pO1xuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICByZXR1cm4gW3ZhbF07XG59XG5cbi8qKlxuICogTWFrZXMgYm9vbGVhbi1saWtlIHN0cmluZ3MgaW50byBib29sZWFucy5cbiAqL1xuXG5mdW5jdGlvbiBib29sZWFuaWZ5KHZhbCkge1xuICBpZiAodmFsID09PSBcInRydWVcIikgcmV0dXJuIHRydWU7XG4gIGlmICh2YWwgPT09IFwiZmFsc2VcIikgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gdmFsO1xufVxuXG4vKipcbiAqIFRlc3RzIGlmIGEgZmlsZW5hbWUgc2hvdWxkIGJlIGlnbm9yZWQgYmFzZWQgb24gXCJpZ25vcmVcIiBhbmQgXCJvbmx5XCIgb3B0aW9ucy5cbiAqL1xuXG5mdW5jdGlvbiBzaG91bGRJZ25vcmUoZmlsZW5hbWUsIGlnbm9yZSwgb25seSkge1xuICBmaWxlbmFtZSA9IF9zbGFzaDJbXCJkZWZhdWx0XCJdKGZpbGVuYW1lKTtcblxuICBpZiAob25seSkge1xuICAgIHZhciBfYXJyID0gb25seTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBfYXJyLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIHBhdHRlcm4gPSBfYXJyW19pXTtcbiAgICAgIGlmIChfc2hvdWxkSWdub3JlKHBhdHRlcm4sIGZpbGVuYW1lKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChpZ25vcmUubGVuZ3RoKSB7XG4gICAgdmFyIF9hcnIyID0gaWdub3JlO1xuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgX2FycjIubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIHBhdHRlcm4gPSBfYXJyMltfaTJdO1xuICAgICAgaWYgKF9zaG91bGRJZ25vcmUocGF0dGVybiwgZmlsZW5hbWUpKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogUmV0dXJucyByZXN1bHQgb2YgY2FsbGluZyBmdW5jdGlvbiB3aXRoIGZpbGVuYW1lIGlmIHBhdHRlcm4gaXMgYSBmdW5jdGlvbi5cbiAqIE90aGVyd2lzZSByZXR1cm5zIHJlc3VsdCBvZiBtYXRjaGluZyBwYXR0ZXJuIFJlZ2V4IHdpdGggZmlsZW5hbWUuXG4gKi9cblxuZnVuY3Rpb24gX3Nob3VsZElnbm9yZShwYXR0ZXJuLCBmaWxlbmFtZSkge1xuICBpZiAodHlwZW9mIHBhdHRlcm4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiBwYXR0ZXJuKGZpbGVuYW1lKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KGZpbGVuYW1lKTtcbiAgfVxufVxuXG4vKipcbiAqIEEgdmlzaXRvciBmb3IgQmFiZWwgdGVtcGxhdGVzLCByZXBsYWNlcyBwbGFjZWhvbGRlciByZWZlcmVuY2VzLlxuICovXG5cbnZhciB0ZW1wbGF0ZVZpc2l0b3IgPSB7XG5cbiAgLyoqXG4gICAqIDM2MCBOb1Njb3BlIFBXTmRcbiAgICovXG4gIG5vU2NvcGU6IHRydWUsXG5cbiAgZW50ZXI6IGZ1bmN0aW9uIGVudGVyKG5vZGUsIHBhcmVudCwgc2NvcGUsIG5vZGVzKSB7XG4gICAgaWYgKHQuaXNFeHByZXNzaW9uU3RhdGVtZW50KG5vZGUpKSB7XG4gICAgICBub2RlID0gbm9kZS5leHByZXNzaW9uO1xuICAgIH1cblxuICAgIGlmICh0LmlzSWRlbnRpZmllcihub2RlKSAmJiBfbG9kYXNoT2JqZWN0SGFzMltcImRlZmF1bHRcIl0obm9kZXMsIG5vZGUubmFtZSkpIHtcbiAgICAgIHRoaXMuc2tpcCgpO1xuICAgICAgdGhpcy5yZXBsYWNlSW5saW5lKG5vZGVzW25vZGUubmFtZV0pO1xuICAgIH1cbiAgfSxcblxuICBleGl0OiBmdW5jdGlvbiBleGl0KG5vZGUpIHtcbiAgICBfdHJhdmVyc2FsMltcImRlZmF1bHRcIl0uY2xlYXJOb2RlKG5vZGUpO1xuICB9XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBhIHRlbXBsYXRlIHRvIHVzZSBpbiBhIHRyYW5zZm9ybWVyLlxuICovXG5cbmZ1bmN0aW9uIHRlbXBsYXRlKG5hbWUsIG5vZGVzLCBrZWVwRXhwcmVzc2lvbikge1xuICB2YXIgYXN0ID0gZXhwb3J0cy50ZW1wbGF0ZXNbbmFtZV07XG4gIGlmICghYXN0KSB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ1bmtub3duIHRlbXBsYXRlIFwiICsgbmFtZSk7XG5cbiAgaWYgKG5vZGVzID09PSB0cnVlKSB7XG4gICAga2VlcEV4cHJlc3Npb24gPSB0cnVlO1xuICAgIG5vZGVzID0gbnVsbDtcbiAgfVxuXG4gIGFzdCA9IF9sb2Rhc2hMYW5nQ2xvbmVEZWVwMltcImRlZmF1bHRcIl0oYXN0KTtcblxuICBpZiAoIV9sb2Rhc2hMYW5nSXNFbXB0eTJbXCJkZWZhdWx0XCJdKG5vZGVzKSkge1xuICAgIF90cmF2ZXJzYWwyW1wiZGVmYXVsdFwiXShhc3QsIHRlbXBsYXRlVmlzaXRvciwgbnVsbCwgbm9kZXMpO1xuICB9XG5cbiAgaWYgKGFzdC5ib2R5Lmxlbmd0aCA+IDEpIHJldHVybiBhc3QuYm9keTtcblxuICB2YXIgbm9kZSA9IGFzdC5ib2R5WzBdO1xuXG4gIGlmICgha2VlcEV4cHJlc3Npb24gJiYgdC5pc0V4cHJlc3Npb25TdGF0ZW1lbnQobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZS5leHByZXNzaW9uO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBub2RlO1xuICB9XG59XG5cbi8qKlxuICogUGFyc2UgYSB0ZW1wbGF0ZS5cbiAqL1xuXG5mdW5jdGlvbiBwYXJzZVRlbXBsYXRlKGxvYywgY29kZSkge1xuICB2YXIgYXN0ID0gX2hlbHBlcnNQYXJzZTJbXCJkZWZhdWx0XCJdKGNvZGUsIHsgZmlsZW5hbWU6IGxvYywgbG9vc2VNb2R1bGVzOiB0cnVlIH0pLnByb2dyYW07XG4gIGFzdCA9IF90cmF2ZXJzYWwyW1wiZGVmYXVsdFwiXS5yZW1vdmVQcm9wZXJ0aWVzKGFzdCk7XG4gIHJldHVybiBhc3Q7XG59XG5cbi8qKlxuICogTG9hZCB0ZW1wbGF0ZXMgZnJvbSB0cmFuc2Zvcm1hdGlvbi90ZW1wbGF0ZXMgZGlyZWN0b3J5LlxuICovXG5cbmZ1bmN0aW9uIGxvYWRUZW1wbGF0ZXMoKSB7XG4gIHZhciB0ZW1wbGF0ZXMgPSB7fTtcblxuICB2YXIgdGVtcGxhdGVzTG9jID0gX3BhdGgyW1wiZGVmYXVsdFwiXS5qb2luKF9fZGlybmFtZSwgXCJ0cmFuc2Zvcm1hdGlvbi90ZW1wbGF0ZXNcIik7XG4gIGlmICghX3BhdGhFeGlzdHMyW1wiZGVmYXVsdFwiXS5zeW5jKHRlbXBsYXRlc0xvYykpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IobWVzc2FnZXMuZ2V0KFwibWlzc2luZ1RlbXBsYXRlc0RpcmVjdG9yeVwiKSk7XG4gIH1cblxuICB2YXIgX2FycjMgPSBfZnMyW1wiZGVmYXVsdFwiXS5yZWFkZGlyU3luYyh0ZW1wbGF0ZXNMb2MpO1xuXG4gIGZvciAodmFyIF9pMyA9IDA7IF9pMyA8IF9hcnIzLmxlbmd0aDsgX2kzKyspIHtcbiAgICB2YXIgbmFtZSA9IF9hcnIzW19pM107XG4gICAgaWYgKG5hbWVbMF0gPT09IFwiLlwiKSByZXR1cm47XG5cbiAgICB2YXIga2V5ID0gX3BhdGgyW1wiZGVmYXVsdFwiXS5iYXNlbmFtZShuYW1lLCBfcGF0aDJbXCJkZWZhdWx0XCJdLmV4dG5hbWUobmFtZSkpO1xuICAgIHZhciBsb2MgPSBfcGF0aDJbXCJkZWZhdWx0XCJdLmpvaW4odGVtcGxhdGVzTG9jLCBuYW1lKTtcbiAgICB2YXIgY29kZSA9IF9mczJbXCJkZWZhdWx0XCJdLnJlYWRGaWxlU3luYyhsb2MsIFwidXRmOFwiKTtcblxuICAgIHRlbXBsYXRlc1trZXldID0gcGFyc2VUZW1wbGF0ZShsb2MsIGNvZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlbXBsYXRlcztcbn1cblxudHJ5IHtcbiAgZXhwb3J0cy50ZW1wbGF0ZXMgPSByZXF1aXJlKFwiLi4vdGVtcGxhdGVzLmpzb25cIik7XG59IGNhdGNoIChlcnIpIHtcbiAgaWYgKGVyci5jb2RlICE9PSBcIk1PRFVMRV9OT1RfRk9VTkRcIikgdGhyb3cgZXJyO1xuICBleHBvcnRzLnRlbXBsYXRlcyA9IGxvYWRUZW1wbGF0ZXMoKTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
