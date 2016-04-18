/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _createClass, _convertSourceMap, _convertSourceMap2, _modules, _modules2, _optionsOptionManager, _optionsOptionManager2, _pluginManager, _pluginManager2, _shebangRegex, _shebangRegex2, _traversalPath, _traversalPath2, _lodashLangIsFunction, _lodashLangIsFunction2, _sourceMap, _sourceMap2, _generation, _generation2, _helpersCodeFrame, _helpersCodeFrame2, _lodashObjectDefaults, _lodashObjectDefaults2, _lodashCollectionIncludes, _lodashCollectionIncludes2, _traversal, _traversal2, _tryResolve, _tryResolve2, _logger, _logger2, _plugin, _plugin2, _helpersParse, _helpersParse2, _traversalHub, _traversalHub2, _util, util, _path, _path2, _types, t, File;

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

      _convertSourceMap = require("convert-source-map");
      _convertSourceMap2 = _interopRequireDefault(_convertSourceMap);
      _modules = require("../modules");
      _modules2 = _interopRequireDefault(_modules);
      _optionsOptionManager = require("./options/option-manager");
      _optionsOptionManager2 = _interopRequireDefault(_optionsOptionManager);
      _pluginManager = require("./plugin-manager");
      _pluginManager2 = _interopRequireDefault(_pluginManager);
      _shebangRegex = require("shebang-regex");
      _shebangRegex2 = _interopRequireDefault(_shebangRegex);
      _traversalPath = require("../../traversal/path");
      _traversalPath2 = _interopRequireDefault(_traversalPath);
      _lodashLangIsFunction = require("lodash/lang/isFunction");
      _lodashLangIsFunction2 = _interopRequireDefault(_lodashLangIsFunction);
      _sourceMap = require("source-map");
      _sourceMap2 = _interopRequireDefault(_sourceMap);
      _generation = require("../../generation");
      _generation2 = _interopRequireDefault(_generation);
      _helpersCodeFrame = require("../../helpers/code-frame");
      _helpersCodeFrame2 = _interopRequireDefault(_helpersCodeFrame);
      _lodashObjectDefaults = require("lodash/object/defaults");
      _lodashObjectDefaults2 = _interopRequireDefault(_lodashObjectDefaults);
      _lodashCollectionIncludes = require("lodash/collection/includes");
      _lodashCollectionIncludes2 = _interopRequireDefault(_lodashCollectionIncludes);
      _traversal = require("../../traversal");
      _traversal2 = _interopRequireDefault(_traversal);
      _tryResolve = require("try-resolve");
      _tryResolve2 = _interopRequireDefault(_tryResolve);
      _logger = require("./logger");
      _logger2 = _interopRequireDefault(_logger);
      _plugin = require("../plugin");
      _plugin2 = _interopRequireDefault(_plugin);
      _helpersParse = require("../../helpers/parse");
      _helpersParse2 = _interopRequireDefault(_helpersParse);
      _traversalHub = require("../../traversal/hub");
      _traversalHub2 = _interopRequireDefault(_traversalHub);
      _util = require("../../util");
      util = _interopRequireWildcard(_util);
      _path = require("path");
      _path2 = _interopRequireDefault(_path);
      _types = require("../../types");
      t = _interopRequireWildcard(_types);

      File = function () {
        function File(opts, pipeline) {
          if (opts === undefined) opts = {};

          _classCallCheck(this, File);

          this.transformerDependencies = {};
          this.dynamicImportTypes = {};
          this.dynamicImportIds = {};
          this.dynamicImports = [];
          this.declarations = {};
          this.usedHelpers = {};
          this.dynamicData = {};
          this.data = {};
          this.ast = {};
          this.metadata = {
            modules: {
              imports: [],
              exports: {
                exported: [],
                specifiers: []
              }
            }
          };
          this.hub = new _traversalHub2["default"](this);

          this.pipeline = pipeline;

          this.log = new _logger2["default"](this, opts.filename || "unknown");
          this.opts = this.initOptions(opts);

          this.buildTransformers();
        }

        /**
         * [Please add a description.]
         */

        File.prototype.initOptions = function initOptions(opts) {
          opts = new _optionsOptionManager2["default"](this.log, this.pipeline).init(opts);

          if (opts.inputSourceMap) {
            opts.sourceMaps = true;
          }

          if (opts.moduleId) {
            opts.moduleIds = true;
          }

          opts.basename = _path2["default"].basename(opts.filename, _path2["default"].extname(opts.filename));

          opts.ignore = util.arrayify(opts.ignore, util.regexify);

          if (opts.only) opts.only = util.arrayify(opts.only, util.regexify);

          _lodashObjectDefaults2["default"](opts, {
            moduleRoot: opts.sourceRoot
          });

          _lodashObjectDefaults2["default"](opts, {
            sourceRoot: opts.moduleRoot
          });

          _lodashObjectDefaults2["default"](opts, {
            filenameRelative: opts.filename
          });

          _lodashObjectDefaults2["default"](opts, {
            sourceFileName: opts.filenameRelative,
            sourceMapTarget: opts.filenameRelative
          });

          //

          if (opts.externalHelpers) {
            this.set("helpersNamespace", t.identifier("babelHelpers"));
          }

          return opts;
        };

        /**
         * [Please add a description.]
         */

        File.prototype.isLoose = function isLoose(key) {
          return _lodashCollectionIncludes2["default"](this.opts.loose, key);
        };

        /**
         * [Please add a description.]
         */

        File.prototype.buildTransformers = function buildTransformers() {
          var file = this;

          var transformers = this.transformers = {};

          var secondaryStack = [];
          var stack = [];

          // build internal transformers
          for (var key in this.pipeline.transformers) {
            var transformer = this.pipeline.transformers[key];
            var pass = transformers[key] = transformer.buildPass(file);

            if (pass.canTransform()) {
              stack.push(pass);

              if (transformer.metadata.secondPass) {
                secondaryStack.push(pass);
              }

              if (transformer.manipulateOptions) {
                transformer.manipulateOptions(file.opts, file);
              }
            }
          }

          // init plugins!
          var beforePlugins = [];
          var afterPlugins = [];
          var pluginManager = new _pluginManager2["default"]({
            file: this,
            transformers: this.transformers,
            before: beforePlugins,
            after: afterPlugins
          });
          for (var i = 0; i < file.opts.plugins.length; i++) {
            pluginManager.add(file.opts.plugins[i]);
          }
          stack = beforePlugins.concat(stack, afterPlugins);

          // build transformer stack
          this.uncollapsedTransformerStack = stack = stack.concat(secondaryStack);

          // build dependency graph
          var _arr = stack;
          for (var _i = 0; _i < _arr.length; _i++) {
            var pass = _arr[_i];var _arr2 = pass.plugin.dependencies;

            for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
              var dep = _arr2[_i2];
              this.transformerDependencies[dep] = pass.key;
            }
          }

          // collapse stack categories
          this.transformerStack = this.collapseStack(stack);
        };

        /**
         * [Please add a description.]
         */

        File.prototype.collapseStack = function collapseStack(_stack) {
          var stack = [];
          var ignore = [];

          var _arr3 = _stack;
          for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
            var pass = _arr3[_i3];
            // been merged
            if (ignore.indexOf(pass) >= 0) continue;

            var group = pass.plugin.metadata.group;

            // can't merge
            if (!pass.canTransform() || !group) {
              stack.push(pass);
              continue;
            }

            var mergeStack = [];
            var _arr4 = _stack;
            for (var _i4 = 0; _i4 < _arr4.length; _i4++) {
              var _pass = _arr4[_i4];
              if (_pass.plugin.metadata.group === group) {
                mergeStack.push(_pass);
                ignore.push(_pass);
              }
            }

            var visitors = [];
            var _arr5 = mergeStack;
            for (var _i5 = 0; _i5 < _arr5.length; _i5++) {
              var _pass2 = _arr5[_i5];
              visitors.push(_pass2.plugin.visitor);
            }
            var visitor = _traversal2["default"].visitors.merge(visitors);
            var mergePlugin = new _plugin2["default"](group, { visitor: visitor });
            stack.push(mergePlugin.buildPass(this));
          }

          return stack;
        };

        /**
         * [Please add a description.]
         */

        File.prototype.set = function set(key, val) {
          return this.data[key] = val;
        };

        /**
         * [Please add a description.]
         */

        File.prototype.setDynamic = function setDynamic(key, fn) {
          this.dynamicData[key] = fn;
        };

        /**
         * [Please add a description.]
         */

        File.prototype.get = function get(key) {
          var data = this.data[key];
          if (data) {
            return data;
          } else {
            var dynamic = this.dynamicData[key];
            if (dynamic) {
              return this.set(key, dynamic());
            }
          }
        };

        /**
         * [Please add a description.]
         */

        File.prototype.resolveModuleSource = function resolveModuleSource(source) {
          var resolveModuleSource = this.opts.resolveModuleSource;
          if (resolveModuleSource) source = resolveModuleSource(source, this.opts.filename);
          return source;
        };

        /**
         * [Please add a description.]
         */

        File.prototype.addImport = function addImport(source, name, type) {
          name = name || source;
          var id = this.dynamicImportIds[name];

          if (!id) {
            source = this.resolveModuleSource(source);
            id = this.dynamicImportIds[name] = this.scope.generateUidIdentifier(name);

            var specifiers = [t.importDefaultSpecifier(id)];
            var declar = t.importDeclaration(specifiers, t.literal(source));
            declar._blockHoist = 3;

            if (type) {
              var modules = this.dynamicImportTypes[type] = this.dynamicImportTypes[type] || [];
              modules.push(declar);
            }

            if (this.transformers["es6.modules"].canTransform()) {
              this.moduleFormatter.importSpecifier(specifiers[0], declar, this.dynamicImports, this.scope);
              this.moduleFormatter.hasLocalImports = true;
            } else {
              this.dynamicImports.push(declar);
            }
          }

          return id;
        };

        /**
         * [Please add a description.]
         */

        File.prototype.attachAuxiliaryComment = function attachAuxiliaryComment(node) {
          var beforeComment = this.opts.auxiliaryCommentBefore;
          if (beforeComment) {
            node.leadingComments = node.leadingComments || [];
            node.leadingComments.push({
              type: "CommentLine",
              value: " " + beforeComment
            });
          }

          var afterComment = this.opts.auxiliaryCommentAfter;
          if (afterComment) {
            node.trailingComments = node.trailingComments || [];
            node.trailingComments.push({
              type: "CommentLine",
              value: " " + afterComment
            });
          }

          return node;
        };

        /**
         * [Please add a description.]
         */

        File.prototype.addHelper = function addHelper(name) {
          var isSolo = _lodashCollectionIncludes2["default"](File.soloHelpers, name);

          if (!isSolo && !_lodashCollectionIncludes2["default"](File.helpers, name)) {
            throw new ReferenceError("Unknown helper " + name);
          }

          var declar = this.declarations[name];
          if (declar) return declar;

          this.usedHelpers[name] = true;

          if (!isSolo) {
            var generator = this.get("helperGenerator");
            var runtime = this.get("helpersNamespace");
            if (generator) {
              return generator(name);
            } else if (runtime) {
              var id = t.identifier(t.toIdentifier(name));
              return t.memberExpression(runtime, id);
            }
          }

          var ref = util.template("helper-" + name);

          var uid = this.declarations[name] = this.scope.generateUidIdentifier(name);

          if (t.isFunctionExpression(ref) && !ref.id) {
            ref.body._compact = true;
            ref._generated = true;
            ref.id = uid;
            ref.type = "FunctionDeclaration";
            this.attachAuxiliaryComment(ref);
            this.path.unshiftContainer("body", ref);
          } else {
            ref._compact = true;
            this.scope.push({
              id: uid,
              init: ref,
              unique: true
            });
          }

          return uid;
        };

        File.prototype.addTemplateObject = function addTemplateObject(helperName, strings, raw) {
          // Generate a unique name based on the string literals so we dedupe
          // identical strings used in the program.
          var stringIds = raw.elements.map(function (string) {
            return string.value;
          });
          var name = helperName + "_" + raw.elements.length + "_" + stringIds.join(",");

          var declar = this.declarations[name];
          if (declar) return declar;

          var uid = this.declarations[name] = this.scope.generateUidIdentifier("templateObject");

          var helperId = this.addHelper(helperName);
          var init = t.callExpression(helperId, [strings, raw]);
          init._compact = true;
          this.scope.push({
            id: uid,
            init: init,
            _blockHoist: 1.9 // This ensures that we don't fail if not using function expression helpers
          });
          return uid;
        };

        /**
         * [Please add a description.]
         */

        File.prototype.errorWithNode = function errorWithNode(node, msg) {
          var Error = arguments.length <= 2 || arguments[2] === undefined ? SyntaxError : arguments[2];

          var err;
          var loc = node && (node.loc || node._loc);
          if (loc) {
            err = new Error("Line " + loc.start.line + ": " + msg);
            err.loc = loc.start;
          } else {
            // todo: find errors with nodes inside to at least point to something
            err = new Error("There's been an error on a dynamic node. This is almost certainly an internal error. Please report it.");
          }
          return err;
        };

        /**
         * [Please add a description.]
         */

        File.prototype.mergeSourceMap = function mergeSourceMap(map) {
          var opts = this.opts;

          var inputMap = opts.inputSourceMap;

          if (inputMap) {
            map.sources[0] = inputMap.file;

            var inputMapConsumer = new _sourceMap2["default"].SourceMapConsumer(inputMap);
            var outputMapConsumer = new _sourceMap2["default"].SourceMapConsumer(map);
            var outputMapGenerator = _sourceMap2["default"].SourceMapGenerator.fromSourceMap(outputMapConsumer);
            outputMapGenerator.applySourceMap(inputMapConsumer);

            var mergedMap = outputMapGenerator.toJSON();
            mergedMap.sources = inputMap.sources;
            mergedMap.file = inputMap.file;
            return mergedMap;
          }

          return map;
        };

        /**
         * [Please add a description.]
         */

        File.prototype.getModuleFormatter = function getModuleFormatter(type) {
          if (_lodashLangIsFunction2["default"](type) || !_modules2["default"][type]) {
            this.log.deprecate("Custom module formatters are deprecated and will be removed in the next major. Please use Babel plugins instead.");
          }

          var ModuleFormatter = _lodashLangIsFunction2["default"](type) ? type : _modules2["default"][type];

          if (!ModuleFormatter) {
            var loc = _tryResolve2["default"].relative(type);
            if (loc) ModuleFormatter = require(loc);
          }

          if (!ModuleFormatter) {
            throw new ReferenceError("Unknown module formatter type " + JSON.stringify(type));
          }

          return new ModuleFormatter(this);
        };

        /**
         * [Please add a description.]
         */

        File.prototype.parse = function parse(code) {
          var opts = this.opts;

          //

          var parseOpts = {
            highlightCode: opts.highlightCode,
            nonStandard: opts.nonStandard,
            sourceType: opts.sourceType,
            filename: opts.filename,
            plugins: {}
          };

          var features = parseOpts.features = {};
          for (var key in this.transformers) {
            var transformer = this.transformers[key];
            features[key] = transformer.canTransform();
          }

          parseOpts.looseModules = this.isLoose("es6.modules");
          parseOpts.strictMode = features.strict;

          this.log.debug("Parse start");
          var ast = _helpersParse2["default"](code, parseOpts);
          this.log.debug("Parse stop");
          return ast;
        };

        /**
         * [Please add a description.]
         */

        File.prototype._addAst = function _addAst(ast) {
          this.path = _traversalPath2["default"].get({
            hub: this.hub,
            parentPath: null,
            parent: ast,
            container: ast,
            key: "program"
          }).setContext();
          this.scope = this.path.scope;
          this.ast = ast;
        };

        /**
         * [Please add a description.]
         */

        File.prototype.addAst = function addAst(ast) {
          this.log.debug("Start set AST");
          this._addAst(ast);
          this.log.debug("End set AST");

          this.log.debug("Start module formatter init");
          var modFormatter = this.moduleFormatter = this.getModuleFormatter(this.opts.modules);
          if (modFormatter.init && this.transformers["es6.modules"].canTransform()) {
            modFormatter.init();
          }
          this.log.debug("End module formatter init");
        };

        /**
         * [Please add a description.]
         */

        File.prototype.transform = function transform() {
          this.call("pre");
          var _arr6 = this.transformerStack;
          for (var _i6 = 0; _i6 < _arr6.length; _i6++) {
            var pass = _arr6[_i6];
            pass.transform();
          }
          this.call("post");

          return this.generate();
        };

        /**
         * [Please add a description.]
         */

        File.prototype.wrap = function wrap(code, callback) {
          code = code + "";

          try {
            if (this.shouldIgnore()) {
              return this.makeResult({ code: code, ignored: true });
            } else {
              return callback();
            }
          } catch (err) {
            if (err._babel) {
              throw err;
            } else {
              err._babel = true;
            }

            var message = err.message = this.opts.filename + ": " + err.message;

            var loc = err.loc;
            if (loc) {
              err.codeFrame = _helpersCodeFrame2["default"](code, loc.line, loc.column + 1, this.opts);
              message += "\n" + err.codeFrame;
            }

            if (process.browser) {
              // chrome has it's own pretty stringifier which doesn't use the stack property
              // https://github.com/babel/babel/issues/2175
              err.message = message;
            }

            if (err.stack) {
              var newStack = err.stack.replace(err.message, message);
              try {
                err.stack = newStack;
              } catch (e) {
                // `err.stack` may be a readonly property in some environments
              }
            }

            throw err;
          }
        };

        /**
         * [Please add a description.]
         */

        File.prototype.addCode = function addCode(code) {
          code = (code || "") + "";
          code = this.parseInputSourceMap(code);
          this.code = code;
        };

        /**
         * [Please add a description.]
         */

        File.prototype.parseCode = function parseCode() {
          this.parseShebang();
          var ast = this.parse(this.code);
          this.addAst(ast);
        };

        /**
         * [Please add a description.]
         */

        File.prototype.shouldIgnore = function shouldIgnore() {
          var opts = this.opts;
          return util.shouldIgnore(opts.filename, opts.ignore, opts.only);
        };

        /**
         * [Please add a description.]
         */

        File.prototype.call = function call(key) {
          var _arr7 = this.uncollapsedTransformerStack;

          for (var _i7 = 0; _i7 < _arr7.length; _i7++) {
            var pass = _arr7[_i7];
            var fn = pass.plugin[key];
            if (fn) fn(this);
          }
        };

        /**
         * [Please add a description.]
         */

        File.prototype.parseInputSourceMap = function parseInputSourceMap(code) {
          var opts = this.opts;

          if (opts.inputSourceMap !== false) {
            var inputMap = _convertSourceMap2["default"].fromSource(code);
            if (inputMap) {
              opts.inputSourceMap = inputMap.toObject();
              code = _convertSourceMap2["default"].removeComments(code);
            }
          }

          return code;
        };

        /**
         * [Please add a description.]
         */

        File.prototype.parseShebang = function parseShebang() {
          var shebangMatch = _shebangRegex2["default"].exec(this.code);
          if (shebangMatch) {
            this.shebang = shebangMatch[0];
            this.code = this.code.replace(_shebangRegex2["default"], "");
          }
        };

        /**
         * [Please add a description.]
         */

        File.prototype.makeResult = function makeResult(_ref) {
          var code = _ref.code;
          var _ref$map = _ref.map;
          var map = _ref$map === undefined ? null : _ref$map;
          var ast = _ref.ast;
          var ignored = _ref.ignored;

          var result = {
            metadata: null,
            ignored: !!ignored,
            code: null,
            ast: null,
            map: map
          };

          if (this.opts.code) {
            result.code = code;
          }

          if (this.opts.ast) {
            result.ast = ast;
          }

          if (this.opts.metadata) {
            result.metadata = this.metadata;
            result.metadata.usedHelpers = Object.keys(this.usedHelpers);
          }

          return result;
        };

        /**
         * [Please add a description.]
         */

        File.prototype.generate = function generate() {
          var opts = this.opts;
          var ast = this.ast;

          var result = { ast: ast };
          if (!opts.code) return this.makeResult(result);

          this.log.debug("Generation start");

          var _result = _generation2["default"](ast, opts, this.code);
          result.code = _result.code;
          result.map = _result.map;

          this.log.debug("Generation end");

          if (this.shebang) {
            // add back shebang
            result.code = this.shebang + "\n" + result.code;
          }

          if (result.map) {
            result.map = this.mergeSourceMap(result.map);
          }

          if (opts.sourceMaps === "inline" || opts.sourceMaps === "both") {
            result.code += "\n" + _convertSourceMap2["default"].fromObject(result.map).toComment();
          }

          if (opts.sourceMaps === "inline") {
            result.map = null;
          }

          return this.makeResult(result);
        };

        _createClass(File, null, [{
          key: "helpers",

          /**
           * [Please add a description.]
           */

          value: ["inherits", "defaults", "create-class", "create-decorated-class", "create-decorated-object", "define-decorated-property-descriptor", "tagged-template-literal", "tagged-template-literal-loose", "to-array", "to-consumable-array", "sliced-to-array", "sliced-to-array-loose", "object-without-properties", "has-own", "slice", "bind", "define-property", "async-to-generator", "interop-export-wildcard", "interop-require-wildcard", "interop-require-default", "typeof", "extends", "get", "set", "new-arrow-check", "class-call-check", "object-destructuring-empty", "temporal-undefined", "temporal-assert-defined", "self-global", "typeof-react-element", "default-props", "instanceof",

          // legacy
          "interop-require"],

          /**
           * [Please add a description.]
           */

          enumerable: true
        }, {
          key: "soloHelpers",
          value: [],
          enumerable: true
        }]);

        return File;
      }();

      exports["default"] = File;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vZmlsZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQVNBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7QUFJQSxXQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBSixHQUFpQixHQUF4QixHQUE4QixFQUFFLFdBQVcsR0FBWCxFQUFoQyxDQUFUO0dBQXJDOzs7O0FBSUEsV0FBUyxlQUFULENBQXlCLFFBQXpCLEVBQW1DLFdBQW5DLEVBQWdEO0FBQUUsUUFBSSxFQUFFLG9CQUFvQixXQUFwQixDQUFGLEVBQW9DO0FBQUUsWUFBTSxJQUFJLFNBQUosQ0FBYyxtQ0FBZCxDQUFOLENBQUY7S0FBeEM7R0FBbEQ7Ozs7O0FBZkEsY0FBUSxVQUFSLEdBQXFCLElBQXJCOzs7QUFHSSxxQkFBZSxZQUFhO0FBQUUsaUJBQVMsZ0JBQVQsQ0FBMEIsTUFBMUIsRUFBa0MsS0FBbEMsRUFBeUM7QUFBRSxlQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxNQUFNLE1BQU4sRUFBYyxHQUFsQyxFQUF1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dUIsRUFpQnRCO0FBQ0QsZUFBSyxhQUFMO0FBQ0EsaUJBQU8sRUFBUDtBQUNBLHNCQUFZLElBQVo7U0FwQnVCLENBQXpCLEVBMXNCc0I7O0FBaXVCdEIsZUFBTyxJQUFQLENBanVCc0I7T0FBWjs7QUFvdUJaLGNBQVEsU0FBUixJQUFxQixJQUFyQjtBQUNBLGFBQU8sT0FBUCxHQUFpQixRQUFRLFNBQVIsQ0FBakIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmFuc2Zvcm1hdGlvbi9maWxlL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgX2NvbnZlcnRTb3VyY2VNYXAgPSByZXF1aXJlKFwiY29udmVydC1zb3VyY2UtbWFwXCIpO1xuXG52YXIgX2NvbnZlcnRTb3VyY2VNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udmVydFNvdXJjZU1hcCk7XG5cbnZhciBfbW9kdWxlcyA9IHJlcXVpcmUoXCIuLi9tb2R1bGVzXCIpO1xuXG52YXIgX21vZHVsZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW9kdWxlcyk7XG5cbnZhciBfb3B0aW9uc09wdGlvbk1hbmFnZXIgPSByZXF1aXJlKFwiLi9vcHRpb25zL29wdGlvbi1tYW5hZ2VyXCIpO1xuXG52YXIgX29wdGlvbnNPcHRpb25NYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29wdGlvbnNPcHRpb25NYW5hZ2VyKTtcblxudmFyIF9wbHVnaW5NYW5hZ2VyID0gcmVxdWlyZShcIi4vcGx1Z2luLW1hbmFnZXJcIik7XG5cbnZhciBfcGx1Z2luTWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbHVnaW5NYW5hZ2VyKTtcblxudmFyIF9zaGViYW5nUmVnZXggPSByZXF1aXJlKFwic2hlYmFuZy1yZWdleFwiKTtcblxudmFyIF9zaGViYW5nUmVnZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hlYmFuZ1JlZ2V4KTtcblxudmFyIF90cmF2ZXJzYWxQYXRoID0gcmVxdWlyZShcIi4uLy4uL3RyYXZlcnNhbC9wYXRoXCIpO1xuXG52YXIgX3RyYXZlcnNhbFBhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhdmVyc2FsUGF0aCk7XG5cbnZhciBfbG9kYXNoTGFuZ0lzRnVuY3Rpb24gPSByZXF1aXJlKFwibG9kYXNoL2xhbmcvaXNGdW5jdGlvblwiKTtcblxudmFyIF9sb2Rhc2hMYW5nSXNGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hMYW5nSXNGdW5jdGlvbik7XG5cbnZhciBfc291cmNlTWFwID0gcmVxdWlyZShcInNvdXJjZS1tYXBcIik7XG5cbnZhciBfc291cmNlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NvdXJjZU1hcCk7XG5cbnZhciBfZ2VuZXJhdGlvbiA9IHJlcXVpcmUoXCIuLi8uLi9nZW5lcmF0aW9uXCIpO1xuXG52YXIgX2dlbmVyYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2VuZXJhdGlvbik7XG5cbnZhciBfaGVscGVyc0NvZGVGcmFtZSA9IHJlcXVpcmUoXCIuLi8uLi9oZWxwZXJzL2NvZGUtZnJhbWVcIik7XG5cbnZhciBfaGVscGVyc0NvZGVGcmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzQ29kZUZyYW1lKTtcblxudmFyIF9sb2Rhc2hPYmplY3REZWZhdWx0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvb2JqZWN0L2RlZmF1bHRzXCIpO1xuXG52YXIgX2xvZGFzaE9iamVjdERlZmF1bHRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaE9iamVjdERlZmF1bHRzKTtcblxudmFyIF9sb2Rhc2hDb2xsZWN0aW9uSW5jbHVkZXMgPSByZXF1aXJlKFwibG9kYXNoL2NvbGxlY3Rpb24vaW5jbHVkZXNcIik7XG5cbnZhciBfbG9kYXNoQ29sbGVjdGlvbkluY2x1ZGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaENvbGxlY3Rpb25JbmNsdWRlcyk7XG5cbnZhciBfdHJhdmVyc2FsID0gcmVxdWlyZShcIi4uLy4uL3RyYXZlcnNhbFwiKTtcblxudmFyIF90cmF2ZXJzYWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhdmVyc2FsKTtcblxudmFyIF90cnlSZXNvbHZlID0gcmVxdWlyZShcInRyeS1yZXNvbHZlXCIpO1xuXG52YXIgX3RyeVJlc29sdmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJ5UmVzb2x2ZSk7XG5cbnZhciBfbG9nZ2VyID0gcmVxdWlyZShcIi4vbG9nZ2VyXCIpO1xuXG52YXIgX2xvZ2dlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2dnZXIpO1xuXG52YXIgX3BsdWdpbiA9IHJlcXVpcmUoXCIuLi9wbHVnaW5cIik7XG5cbnZhciBfcGx1Z2luMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsdWdpbik7XG5cbnZhciBfaGVscGVyc1BhcnNlID0gcmVxdWlyZShcIi4uLy4uL2hlbHBlcnMvcGFyc2VcIik7XG5cbnZhciBfaGVscGVyc1BhcnNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNQYXJzZSk7XG5cbnZhciBfdHJhdmVyc2FsSHViID0gcmVxdWlyZShcIi4uLy4uL3RyYXZlcnNhbC9odWJcIik7XG5cbnZhciBfdHJhdmVyc2FsSHViMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYXZlcnNhbEh1Yik7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoXCIuLi8uLi91dGlsXCIpO1xuXG52YXIgdXRpbCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlsKTtcblxudmFyIF9wYXRoID0gcmVxdWlyZShcInBhdGhcIik7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciBGaWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRmlsZShvcHRzLCBwaXBlbGluZSkge1xuICAgIGlmIChvcHRzID09PSB1bmRlZmluZWQpIG9wdHMgPSB7fTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGaWxlKTtcblxuICAgIHRoaXMudHJhbnNmb3JtZXJEZXBlbmRlbmNpZXMgPSB7fTtcbiAgICB0aGlzLmR5bmFtaWNJbXBvcnRUeXBlcyA9IHt9O1xuICAgIHRoaXMuZHluYW1pY0ltcG9ydElkcyA9IHt9O1xuICAgIHRoaXMuZHluYW1pY0ltcG9ydHMgPSBbXTtcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IHt9O1xuICAgIHRoaXMudXNlZEhlbHBlcnMgPSB7fTtcbiAgICB0aGlzLmR5bmFtaWNEYXRhID0ge307XG4gICAgdGhpcy5kYXRhID0ge307XG4gICAgdGhpcy5hc3QgPSB7fTtcbiAgICB0aGlzLm1ldGFkYXRhID0ge1xuICAgICAgbW9kdWxlczoge1xuICAgICAgICBpbXBvcnRzOiBbXSxcbiAgICAgICAgZXhwb3J0czoge1xuICAgICAgICAgIGV4cG9ydGVkOiBbXSxcbiAgICAgICAgICBzcGVjaWZpZXJzOiBbXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmh1YiA9IG5ldyBfdHJhdmVyc2FsSHViMltcImRlZmF1bHRcIl0odGhpcyk7XG5cbiAgICB0aGlzLnBpcGVsaW5lID0gcGlwZWxpbmU7XG5cbiAgICB0aGlzLmxvZyA9IG5ldyBfbG9nZ2VyMltcImRlZmF1bHRcIl0odGhpcywgb3B0cy5maWxlbmFtZSB8fCBcInVua25vd25cIik7XG4gICAgdGhpcy5vcHRzID0gdGhpcy5pbml0T3B0aW9ucyhvcHRzKTtcblxuICAgIHRoaXMuYnVpbGRUcmFuc2Zvcm1lcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRmlsZS5wcm90b3R5cGUuaW5pdE9wdGlvbnMgPSBmdW5jdGlvbiBpbml0T3B0aW9ucyhvcHRzKSB7XG4gICAgb3B0cyA9IG5ldyBfb3B0aW9uc09wdGlvbk1hbmFnZXIyW1wiZGVmYXVsdFwiXSh0aGlzLmxvZywgdGhpcy5waXBlbGluZSkuaW5pdChvcHRzKTtcblxuICAgIGlmIChvcHRzLmlucHV0U291cmNlTWFwKSB7XG4gICAgICBvcHRzLnNvdXJjZU1hcHMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChvcHRzLm1vZHVsZUlkKSB7XG4gICAgICBvcHRzLm1vZHVsZUlkcyA9IHRydWU7XG4gICAgfVxuXG4gICAgb3B0cy5iYXNlbmFtZSA9IF9wYXRoMltcImRlZmF1bHRcIl0uYmFzZW5hbWUob3B0cy5maWxlbmFtZSwgX3BhdGgyW1wiZGVmYXVsdFwiXS5leHRuYW1lKG9wdHMuZmlsZW5hbWUpKTtcblxuICAgIG9wdHMuaWdub3JlID0gdXRpbC5hcnJheWlmeShvcHRzLmlnbm9yZSwgdXRpbC5yZWdleGlmeSk7XG5cbiAgICBpZiAob3B0cy5vbmx5KSBvcHRzLm9ubHkgPSB1dGlsLmFycmF5aWZ5KG9wdHMub25seSwgdXRpbC5yZWdleGlmeSk7XG5cbiAgICBfbG9kYXNoT2JqZWN0RGVmYXVsdHMyW1wiZGVmYXVsdFwiXShvcHRzLCB7XG4gICAgICBtb2R1bGVSb290OiBvcHRzLnNvdXJjZVJvb3RcbiAgICB9KTtcblxuICAgIF9sb2Rhc2hPYmplY3REZWZhdWx0czJbXCJkZWZhdWx0XCJdKG9wdHMsIHtcbiAgICAgIHNvdXJjZVJvb3Q6IG9wdHMubW9kdWxlUm9vdFxuICAgIH0pO1xuXG4gICAgX2xvZGFzaE9iamVjdERlZmF1bHRzMltcImRlZmF1bHRcIl0ob3B0cywge1xuICAgICAgZmlsZW5hbWVSZWxhdGl2ZTogb3B0cy5maWxlbmFtZVxuICAgIH0pO1xuXG4gICAgX2xvZGFzaE9iamVjdERlZmF1bHRzMltcImRlZmF1bHRcIl0ob3B0cywge1xuICAgICAgc291cmNlRmlsZU5hbWU6IG9wdHMuZmlsZW5hbWVSZWxhdGl2ZSxcbiAgICAgIHNvdXJjZU1hcFRhcmdldDogb3B0cy5maWxlbmFtZVJlbGF0aXZlXG4gICAgfSk7XG5cbiAgICAvL1xuXG4gICAgaWYgKG9wdHMuZXh0ZXJuYWxIZWxwZXJzKSB7XG4gICAgICB0aGlzLnNldChcImhlbHBlcnNOYW1lc3BhY2VcIiwgdC5pZGVudGlmaWVyKFwiYmFiZWxIZWxwZXJzXCIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3B0cztcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEZpbGUucHJvdG90eXBlLmlzTG9vc2UgPSBmdW5jdGlvbiBpc0xvb3NlKGtleSkge1xuICAgIHJldHVybiBfbG9kYXNoQ29sbGVjdGlvbkluY2x1ZGVzMltcImRlZmF1bHRcIl0odGhpcy5vcHRzLmxvb3NlLCBrZXkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRmlsZS5wcm90b3R5cGUuYnVpbGRUcmFuc2Zvcm1lcnMgPSBmdW5jdGlvbiBidWlsZFRyYW5zZm9ybWVycygpIHtcbiAgICB2YXIgZmlsZSA9IHRoaXM7XG5cbiAgICB2YXIgdHJhbnNmb3JtZXJzID0gdGhpcy50cmFuc2Zvcm1lcnMgPSB7fTtcblxuICAgIHZhciBzZWNvbmRhcnlTdGFjayA9IFtdO1xuICAgIHZhciBzdGFjayA9IFtdO1xuXG4gICAgLy8gYnVpbGQgaW50ZXJuYWwgdHJhbnNmb3JtZXJzXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMucGlwZWxpbmUudHJhbnNmb3JtZXJzKSB7XG4gICAgICB2YXIgdHJhbnNmb3JtZXIgPSB0aGlzLnBpcGVsaW5lLnRyYW5zZm9ybWVyc1trZXldO1xuICAgICAgdmFyIHBhc3MgPSB0cmFuc2Zvcm1lcnNba2V5XSA9IHRyYW5zZm9ybWVyLmJ1aWxkUGFzcyhmaWxlKTtcblxuICAgICAgaWYgKHBhc3MuY2FuVHJhbnNmb3JtKCkpIHtcbiAgICAgICAgc3RhY2sucHVzaChwYXNzKTtcblxuICAgICAgICBpZiAodHJhbnNmb3JtZXIubWV0YWRhdGEuc2Vjb25kUGFzcykge1xuICAgICAgICAgIHNlY29uZGFyeVN0YWNrLnB1c2gocGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJhbnNmb3JtZXIubWFuaXB1bGF0ZU9wdGlvbnMpIHtcbiAgICAgICAgICB0cmFuc2Zvcm1lci5tYW5pcHVsYXRlT3B0aW9ucyhmaWxlLm9wdHMsIGZpbGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaW5pdCBwbHVnaW5zIVxuICAgIHZhciBiZWZvcmVQbHVnaW5zID0gW107XG4gICAgdmFyIGFmdGVyUGx1Z2lucyA9IFtdO1xuICAgIHZhciBwbHVnaW5NYW5hZ2VyID0gbmV3IF9wbHVnaW5NYW5hZ2VyMltcImRlZmF1bHRcIl0oe1xuICAgICAgZmlsZTogdGhpcyxcbiAgICAgIHRyYW5zZm9ybWVyczogdGhpcy50cmFuc2Zvcm1lcnMsXG4gICAgICBiZWZvcmU6IGJlZm9yZVBsdWdpbnMsXG4gICAgICBhZnRlcjogYWZ0ZXJQbHVnaW5zXG4gICAgfSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlLm9wdHMucGx1Z2lucy5sZW5ndGg7IGkrKykge1xuICAgICAgcGx1Z2luTWFuYWdlci5hZGQoZmlsZS5vcHRzLnBsdWdpbnNbaV0pO1xuICAgIH1cbiAgICBzdGFjayA9IGJlZm9yZVBsdWdpbnMuY29uY2F0KHN0YWNrLCBhZnRlclBsdWdpbnMpO1xuXG4gICAgLy8gYnVpbGQgdHJhbnNmb3JtZXIgc3RhY2tcbiAgICB0aGlzLnVuY29sbGFwc2VkVHJhbnNmb3JtZXJTdGFjayA9IHN0YWNrID0gc3RhY2suY29uY2F0KHNlY29uZGFyeVN0YWNrKTtcblxuICAgIC8vIGJ1aWxkIGRlcGVuZGVuY3kgZ3JhcGhcbiAgICB2YXIgX2FyciA9IHN0YWNrO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBfYXJyLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIHBhc3MgPSBfYXJyW19pXTt2YXIgX2FycjIgPSBwYXNzLnBsdWdpbi5kZXBlbmRlbmNpZXM7XG5cbiAgICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IF9hcnIyLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgICAgdmFyIGRlcCA9IF9hcnIyW19pMl07XG4gICAgICAgIHRoaXMudHJhbnNmb3JtZXJEZXBlbmRlbmNpZXNbZGVwXSA9IHBhc3Mua2V5O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbGxhcHNlIHN0YWNrIGNhdGVnb3JpZXNcbiAgICB0aGlzLnRyYW5zZm9ybWVyU3RhY2sgPSB0aGlzLmNvbGxhcHNlU3RhY2soc3RhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRmlsZS5wcm90b3R5cGUuY29sbGFwc2VTdGFjayA9IGZ1bmN0aW9uIGNvbGxhcHNlU3RhY2soX3N0YWNrKSB7XG4gICAgdmFyIHN0YWNrID0gW107XG4gICAgdmFyIGlnbm9yZSA9IFtdO1xuXG4gICAgdmFyIF9hcnIzID0gX3N0YWNrO1xuICAgIGZvciAodmFyIF9pMyA9IDA7IF9pMyA8IF9hcnIzLmxlbmd0aDsgX2kzKyspIHtcbiAgICAgIHZhciBwYXNzID0gX2FycjNbX2kzXTtcbiAgICAgIC8vIGJlZW4gbWVyZ2VkXG4gICAgICBpZiAoaWdub3JlLmluZGV4T2YocGFzcykgPj0gMCkgY29udGludWU7XG5cbiAgICAgIHZhciBncm91cCA9IHBhc3MucGx1Z2luLm1ldGFkYXRhLmdyb3VwO1xuXG4gICAgICAvLyBjYW4ndCBtZXJnZVxuICAgICAgaWYgKCFwYXNzLmNhblRyYW5zZm9ybSgpIHx8ICFncm91cCkge1xuICAgICAgICBzdGFjay5wdXNoKHBhc3MpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIG1lcmdlU3RhY2sgPSBbXTtcbiAgICAgIHZhciBfYXJyNCA9IF9zdGFjaztcbiAgICAgIGZvciAodmFyIF9pNCA9IDA7IF9pNCA8IF9hcnI0Lmxlbmd0aDsgX2k0KyspIHtcbiAgICAgICAgdmFyIF9wYXNzID0gX2FycjRbX2k0XTtcbiAgICAgICAgaWYgKF9wYXNzLnBsdWdpbi5tZXRhZGF0YS5ncm91cCA9PT0gZ3JvdXApIHtcbiAgICAgICAgICBtZXJnZVN0YWNrLnB1c2goX3Bhc3MpO1xuICAgICAgICAgIGlnbm9yZS5wdXNoKF9wYXNzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmlzaXRvcnMgPSBbXTtcbiAgICAgIHZhciBfYXJyNSA9IG1lcmdlU3RhY2s7XG4gICAgICBmb3IgKHZhciBfaTUgPSAwOyBfaTUgPCBfYXJyNS5sZW5ndGg7IF9pNSsrKSB7XG4gICAgICAgIHZhciBfcGFzczIgPSBfYXJyNVtfaTVdO1xuICAgICAgICB2aXNpdG9ycy5wdXNoKF9wYXNzMi5wbHVnaW4udmlzaXRvcik7XG4gICAgICB9XG4gICAgICB2YXIgdmlzaXRvciA9IF90cmF2ZXJzYWwyW1wiZGVmYXVsdFwiXS52aXNpdG9ycy5tZXJnZSh2aXNpdG9ycyk7XG4gICAgICB2YXIgbWVyZ2VQbHVnaW4gPSBuZXcgX3BsdWdpbjJbXCJkZWZhdWx0XCJdKGdyb3VwLCB7IHZpc2l0b3I6IHZpc2l0b3IgfSk7XG4gICAgICBzdGFjay5wdXNoKG1lcmdlUGx1Z2luLmJ1aWxkUGFzcyh0aGlzKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRmlsZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KGtleSwgdmFsKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVtrZXldID0gdmFsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRmlsZS5wcm90b3R5cGUuc2V0RHluYW1pYyA9IGZ1bmN0aW9uIHNldER5bmFtaWMoa2V5LCBmbikge1xuICAgIHRoaXMuZHluYW1pY0RhdGFba2V5XSA9IGZuO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRmlsZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIHZhciBkYXRhID0gdGhpcy5kYXRhW2tleV07XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZHluYW1pYyA9IHRoaXMuZHluYW1pY0RhdGFba2V5XTtcbiAgICAgIGlmIChkeW5hbWljKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldChrZXksIGR5bmFtaWMoKSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRmlsZS5wcm90b3R5cGUucmVzb2x2ZU1vZHVsZVNvdXJjZSA9IGZ1bmN0aW9uIHJlc29sdmVNb2R1bGVTb3VyY2Uoc291cmNlKSB7XG4gICAgdmFyIHJlc29sdmVNb2R1bGVTb3VyY2UgPSB0aGlzLm9wdHMucmVzb2x2ZU1vZHVsZVNvdXJjZTtcbiAgICBpZiAocmVzb2x2ZU1vZHVsZVNvdXJjZSkgc291cmNlID0gcmVzb2x2ZU1vZHVsZVNvdXJjZShzb3VyY2UsIHRoaXMub3B0cy5maWxlbmFtZSk7XG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEZpbGUucHJvdG90eXBlLmFkZEltcG9ydCA9IGZ1bmN0aW9uIGFkZEltcG9ydChzb3VyY2UsIG5hbWUsIHR5cGUpIHtcbiAgICBuYW1lID0gbmFtZSB8fCBzb3VyY2U7XG4gICAgdmFyIGlkID0gdGhpcy5keW5hbWljSW1wb3J0SWRzW25hbWVdO1xuXG4gICAgaWYgKCFpZCkge1xuICAgICAgc291cmNlID0gdGhpcy5yZXNvbHZlTW9kdWxlU291cmNlKHNvdXJjZSk7XG4gICAgICBpZCA9IHRoaXMuZHluYW1pY0ltcG9ydElkc1tuYW1lXSA9IHRoaXMuc2NvcGUuZ2VuZXJhdGVVaWRJZGVudGlmaWVyKG5hbWUpO1xuXG4gICAgICB2YXIgc3BlY2lmaWVycyA9IFt0LmltcG9ydERlZmF1bHRTcGVjaWZpZXIoaWQpXTtcbiAgICAgIHZhciBkZWNsYXIgPSB0LmltcG9ydERlY2xhcmF0aW9uKHNwZWNpZmllcnMsIHQubGl0ZXJhbChzb3VyY2UpKTtcbiAgICAgIGRlY2xhci5fYmxvY2tIb2lzdCA9IDM7XG5cbiAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgIHZhciBtb2R1bGVzID0gdGhpcy5keW5hbWljSW1wb3J0VHlwZXNbdHlwZV0gPSB0aGlzLmR5bmFtaWNJbXBvcnRUeXBlc1t0eXBlXSB8fCBbXTtcbiAgICAgICAgbW9kdWxlcy5wdXNoKGRlY2xhcik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnRyYW5zZm9ybWVyc1tcImVzNi5tb2R1bGVzXCJdLmNhblRyYW5zZm9ybSgpKSB7XG4gICAgICAgIHRoaXMubW9kdWxlRm9ybWF0dGVyLmltcG9ydFNwZWNpZmllcihzcGVjaWZpZXJzWzBdLCBkZWNsYXIsIHRoaXMuZHluYW1pY0ltcG9ydHMsIHRoaXMuc2NvcGUpO1xuICAgICAgICB0aGlzLm1vZHVsZUZvcm1hdHRlci5oYXNMb2NhbEltcG9ydHMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5keW5hbWljSW1wb3J0cy5wdXNoKGRlY2xhcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGlkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRmlsZS5wcm90b3R5cGUuYXR0YWNoQXV4aWxpYXJ5Q29tbWVudCA9IGZ1bmN0aW9uIGF0dGFjaEF1eGlsaWFyeUNvbW1lbnQobm9kZSkge1xuICAgIHZhciBiZWZvcmVDb21tZW50ID0gdGhpcy5vcHRzLmF1eGlsaWFyeUNvbW1lbnRCZWZvcmU7XG4gICAgaWYgKGJlZm9yZUNvbW1lbnQpIHtcbiAgICAgIG5vZGUubGVhZGluZ0NvbW1lbnRzID0gbm9kZS5sZWFkaW5nQ29tbWVudHMgfHwgW107XG4gICAgICBub2RlLmxlYWRpbmdDb21tZW50cy5wdXNoKHtcbiAgICAgICAgdHlwZTogXCJDb21tZW50TGluZVwiLFxuICAgICAgICB2YWx1ZTogXCIgXCIgKyBiZWZvcmVDb21tZW50XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgYWZ0ZXJDb21tZW50ID0gdGhpcy5vcHRzLmF1eGlsaWFyeUNvbW1lbnRBZnRlcjtcbiAgICBpZiAoYWZ0ZXJDb21tZW50KSB7XG4gICAgICBub2RlLnRyYWlsaW5nQ29tbWVudHMgPSBub2RlLnRyYWlsaW5nQ29tbWVudHMgfHwgW107XG4gICAgICBub2RlLnRyYWlsaW5nQ29tbWVudHMucHVzaCh7XG4gICAgICAgIHR5cGU6IFwiQ29tbWVudExpbmVcIixcbiAgICAgICAgdmFsdWU6IFwiIFwiICsgYWZ0ZXJDb21tZW50XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEZpbGUucHJvdG90eXBlLmFkZEhlbHBlciA9IGZ1bmN0aW9uIGFkZEhlbHBlcihuYW1lKSB7XG4gICAgdmFyIGlzU29sbyA9IF9sb2Rhc2hDb2xsZWN0aW9uSW5jbHVkZXMyW1wiZGVmYXVsdFwiXShGaWxlLnNvbG9IZWxwZXJzLCBuYW1lKTtcblxuICAgIGlmICghaXNTb2xvICYmICFfbG9kYXNoQ29sbGVjdGlvbkluY2x1ZGVzMltcImRlZmF1bHRcIl0oRmlsZS5oZWxwZXJzLCBuYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwiVW5rbm93biBoZWxwZXIgXCIgKyBuYW1lKTtcbiAgICB9XG5cbiAgICB2YXIgZGVjbGFyID0gdGhpcy5kZWNsYXJhdGlvbnNbbmFtZV07XG4gICAgaWYgKGRlY2xhcikgcmV0dXJuIGRlY2xhcjtcblxuICAgIHRoaXMudXNlZEhlbHBlcnNbbmFtZV0gPSB0cnVlO1xuXG4gICAgaWYgKCFpc1NvbG8pIHtcbiAgICAgIHZhciBnZW5lcmF0b3IgPSB0aGlzLmdldChcImhlbHBlckdlbmVyYXRvclwiKTtcbiAgICAgIHZhciBydW50aW1lID0gdGhpcy5nZXQoXCJoZWxwZXJzTmFtZXNwYWNlXCIpO1xuICAgICAgaWYgKGdlbmVyYXRvcikge1xuICAgICAgICByZXR1cm4gZ2VuZXJhdG9yKG5hbWUpO1xuICAgICAgfSBlbHNlIGlmIChydW50aW1lKSB7XG4gICAgICAgIHZhciBpZCA9IHQuaWRlbnRpZmllcih0LnRvSWRlbnRpZmllcihuYW1lKSk7XG4gICAgICAgIHJldHVybiB0Lm1lbWJlckV4cHJlc3Npb24ocnVudGltZSwgaWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciByZWYgPSB1dGlsLnRlbXBsYXRlKFwiaGVscGVyLVwiICsgbmFtZSk7XG5cbiAgICB2YXIgdWlkID0gdGhpcy5kZWNsYXJhdGlvbnNbbmFtZV0gPSB0aGlzLnNjb3BlLmdlbmVyYXRlVWlkSWRlbnRpZmllcihuYW1lKTtcblxuICAgIGlmICh0LmlzRnVuY3Rpb25FeHByZXNzaW9uKHJlZikgJiYgIXJlZi5pZCkge1xuICAgICAgcmVmLmJvZHkuX2NvbXBhY3QgPSB0cnVlO1xuICAgICAgcmVmLl9nZW5lcmF0ZWQgPSB0cnVlO1xuICAgICAgcmVmLmlkID0gdWlkO1xuICAgICAgcmVmLnR5cGUgPSBcIkZ1bmN0aW9uRGVjbGFyYXRpb25cIjtcbiAgICAgIHRoaXMuYXR0YWNoQXV4aWxpYXJ5Q29tbWVudChyZWYpO1xuICAgICAgdGhpcy5wYXRoLnVuc2hpZnRDb250YWluZXIoXCJib2R5XCIsIHJlZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlZi5fY29tcGFjdCA9IHRydWU7XG4gICAgICB0aGlzLnNjb3BlLnB1c2goe1xuICAgICAgICBpZDogdWlkLFxuICAgICAgICBpbml0OiByZWYsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVpZDtcbiAgfTtcblxuICBGaWxlLnByb3RvdHlwZS5hZGRUZW1wbGF0ZU9iamVjdCA9IGZ1bmN0aW9uIGFkZFRlbXBsYXRlT2JqZWN0KGhlbHBlck5hbWUsIHN0cmluZ3MsIHJhdykge1xuICAgIC8vIEdlbmVyYXRlIGEgdW5pcXVlIG5hbWUgYmFzZWQgb24gdGhlIHN0cmluZyBsaXRlcmFscyBzbyB3ZSBkZWR1cGVcbiAgICAvLyBpZGVudGljYWwgc3RyaW5ncyB1c2VkIGluIHRoZSBwcm9ncmFtLlxuICAgIHZhciBzdHJpbmdJZHMgPSByYXcuZWxlbWVudHMubWFwKGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHJldHVybiBzdHJpbmcudmFsdWU7XG4gICAgfSk7XG4gICAgdmFyIG5hbWUgPSBoZWxwZXJOYW1lICsgXCJfXCIgKyByYXcuZWxlbWVudHMubGVuZ3RoICsgXCJfXCIgKyBzdHJpbmdJZHMuam9pbihcIixcIik7XG5cbiAgICB2YXIgZGVjbGFyID0gdGhpcy5kZWNsYXJhdGlvbnNbbmFtZV07XG4gICAgaWYgKGRlY2xhcikgcmV0dXJuIGRlY2xhcjtcblxuICAgIHZhciB1aWQgPSB0aGlzLmRlY2xhcmF0aW9uc1tuYW1lXSA9IHRoaXMuc2NvcGUuZ2VuZXJhdGVVaWRJZGVudGlmaWVyKFwidGVtcGxhdGVPYmplY3RcIik7XG5cbiAgICB2YXIgaGVscGVySWQgPSB0aGlzLmFkZEhlbHBlcihoZWxwZXJOYW1lKTtcbiAgICB2YXIgaW5pdCA9IHQuY2FsbEV4cHJlc3Npb24oaGVscGVySWQsIFtzdHJpbmdzLCByYXddKTtcbiAgICBpbml0Ll9jb21wYWN0ID0gdHJ1ZTtcbiAgICB0aGlzLnNjb3BlLnB1c2goe1xuICAgICAgaWQ6IHVpZCxcbiAgICAgIGluaXQ6IGluaXQsXG4gICAgICBfYmxvY2tIb2lzdDogMS45IC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdlIGRvbid0IGZhaWwgaWYgbm90IHVzaW5nIGZ1bmN0aW9uIGV4cHJlc3Npb24gaGVscGVyc1xuICAgIH0pO1xuICAgIHJldHVybiB1aWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBGaWxlLnByb3RvdHlwZS5lcnJvcldpdGhOb2RlID0gZnVuY3Rpb24gZXJyb3JXaXRoTm9kZShub2RlLCBtc2cpIHtcbiAgICB2YXIgRXJyb3IgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBTeW50YXhFcnJvciA6IGFyZ3VtZW50c1syXTtcblxuICAgIHZhciBlcnI7XG4gICAgdmFyIGxvYyA9IG5vZGUgJiYgKG5vZGUubG9jIHx8IG5vZGUuX2xvYyk7XG4gICAgaWYgKGxvYykge1xuICAgICAgZXJyID0gbmV3IEVycm9yKFwiTGluZSBcIiArIGxvYy5zdGFydC5saW5lICsgXCI6IFwiICsgbXNnKTtcbiAgICAgIGVyci5sb2MgPSBsb2Muc3RhcnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRvZG86IGZpbmQgZXJyb3JzIHdpdGggbm9kZXMgaW5zaWRlIHRvIGF0IGxlYXN0IHBvaW50IHRvIHNvbWV0aGluZ1xuICAgICAgZXJyID0gbmV3IEVycm9yKFwiVGhlcmUncyBiZWVuIGFuIGVycm9yIG9uIGEgZHluYW1pYyBub2RlLiBUaGlzIGlzIGFsbW9zdCBjZXJ0YWlubHkgYW4gaW50ZXJuYWwgZXJyb3IuIFBsZWFzZSByZXBvcnQgaXQuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gZXJyO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRmlsZS5wcm90b3R5cGUubWVyZ2VTb3VyY2VNYXAgPSBmdW5jdGlvbiBtZXJnZVNvdXJjZU1hcChtYXApIHtcbiAgICB2YXIgb3B0cyA9IHRoaXMub3B0cztcblxuICAgIHZhciBpbnB1dE1hcCA9IG9wdHMuaW5wdXRTb3VyY2VNYXA7XG5cbiAgICBpZiAoaW5wdXRNYXApIHtcbiAgICAgIG1hcC5zb3VyY2VzWzBdID0gaW5wdXRNYXAuZmlsZTtcblxuICAgICAgdmFyIGlucHV0TWFwQ29uc3VtZXIgPSBuZXcgX3NvdXJjZU1hcDJbXCJkZWZhdWx0XCJdLlNvdXJjZU1hcENvbnN1bWVyKGlucHV0TWFwKTtcbiAgICAgIHZhciBvdXRwdXRNYXBDb25zdW1lciA9IG5ldyBfc291cmNlTWFwMltcImRlZmF1bHRcIl0uU291cmNlTWFwQ29uc3VtZXIobWFwKTtcbiAgICAgIHZhciBvdXRwdXRNYXBHZW5lcmF0b3IgPSBfc291cmNlTWFwMltcImRlZmF1bHRcIl0uU291cmNlTWFwR2VuZXJhdG9yLmZyb21Tb3VyY2VNYXAob3V0cHV0TWFwQ29uc3VtZXIpO1xuICAgICAgb3V0cHV0TWFwR2VuZXJhdG9yLmFwcGx5U291cmNlTWFwKGlucHV0TWFwQ29uc3VtZXIpO1xuXG4gICAgICB2YXIgbWVyZ2VkTWFwID0gb3V0cHV0TWFwR2VuZXJhdG9yLnRvSlNPTigpO1xuICAgICAgbWVyZ2VkTWFwLnNvdXJjZXMgPSBpbnB1dE1hcC5zb3VyY2VzO1xuICAgICAgbWVyZ2VkTWFwLmZpbGUgPSBpbnB1dE1hcC5maWxlO1xuICAgICAgcmV0dXJuIG1lcmdlZE1hcDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFwO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRmlsZS5wcm90b3R5cGUuZ2V0TW9kdWxlRm9ybWF0dGVyID0gZnVuY3Rpb24gZ2V0TW9kdWxlRm9ybWF0dGVyKHR5cGUpIHtcbiAgICBpZiAoX2xvZGFzaExhbmdJc0Z1bmN0aW9uMltcImRlZmF1bHRcIl0odHlwZSkgfHwgIV9tb2R1bGVzMltcImRlZmF1bHRcIl1bdHlwZV0pIHtcbiAgICAgIHRoaXMubG9nLmRlcHJlY2F0ZShcIkN1c3RvbSBtb2R1bGUgZm9ybWF0dGVycyBhcmUgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yLiBQbGVhc2UgdXNlIEJhYmVsIHBsdWdpbnMgaW5zdGVhZC5cIik7XG4gICAgfVxuXG4gICAgdmFyIE1vZHVsZUZvcm1hdHRlciA9IF9sb2Rhc2hMYW5nSXNGdW5jdGlvbjJbXCJkZWZhdWx0XCJdKHR5cGUpID8gdHlwZSA6IF9tb2R1bGVzMltcImRlZmF1bHRcIl1bdHlwZV07XG5cbiAgICBpZiAoIU1vZHVsZUZvcm1hdHRlcikge1xuICAgICAgdmFyIGxvYyA9IF90cnlSZXNvbHZlMltcImRlZmF1bHRcIl0ucmVsYXRpdmUodHlwZSk7XG4gICAgICBpZiAobG9jKSBNb2R1bGVGb3JtYXR0ZXIgPSByZXF1aXJlKGxvYyk7XG4gICAgfVxuXG4gICAgaWYgKCFNb2R1bGVGb3JtYXR0ZXIpIHtcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcIlVua25vd24gbW9kdWxlIGZvcm1hdHRlciB0eXBlIFwiICsgSlNPTi5zdHJpbmdpZnkodHlwZSkpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgTW9kdWxlRm9ybWF0dGVyKHRoaXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRmlsZS5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiBwYXJzZShjb2RlKSB7XG4gICAgdmFyIG9wdHMgPSB0aGlzLm9wdHM7XG5cbiAgICAvL1xuXG4gICAgdmFyIHBhcnNlT3B0cyA9IHtcbiAgICAgIGhpZ2hsaWdodENvZGU6IG9wdHMuaGlnaGxpZ2h0Q29kZSxcbiAgICAgIG5vblN0YW5kYXJkOiBvcHRzLm5vblN0YW5kYXJkLFxuICAgICAgc291cmNlVHlwZTogb3B0cy5zb3VyY2VUeXBlLFxuICAgICAgZmlsZW5hbWU6IG9wdHMuZmlsZW5hbWUsXG4gICAgICBwbHVnaW5zOiB7fVxuICAgIH07XG5cbiAgICB2YXIgZmVhdHVyZXMgPSBwYXJzZU9wdHMuZmVhdHVyZXMgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy50cmFuc2Zvcm1lcnMpIHtcbiAgICAgIHZhciB0cmFuc2Zvcm1lciA9IHRoaXMudHJhbnNmb3JtZXJzW2tleV07XG4gICAgICBmZWF0dXJlc1trZXldID0gdHJhbnNmb3JtZXIuY2FuVHJhbnNmb3JtKCk7XG4gICAgfVxuXG4gICAgcGFyc2VPcHRzLmxvb3NlTW9kdWxlcyA9IHRoaXMuaXNMb29zZShcImVzNi5tb2R1bGVzXCIpO1xuICAgIHBhcnNlT3B0cy5zdHJpY3RNb2RlID0gZmVhdHVyZXMuc3RyaWN0O1xuXG4gICAgdGhpcy5sb2cuZGVidWcoXCJQYXJzZSBzdGFydFwiKTtcbiAgICB2YXIgYXN0ID0gX2hlbHBlcnNQYXJzZTJbXCJkZWZhdWx0XCJdKGNvZGUsIHBhcnNlT3B0cyk7XG4gICAgdGhpcy5sb2cuZGVidWcoXCJQYXJzZSBzdG9wXCIpO1xuICAgIHJldHVybiBhc3Q7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBGaWxlLnByb3RvdHlwZS5fYWRkQXN0ID0gZnVuY3Rpb24gX2FkZEFzdChhc3QpIHtcbiAgICB0aGlzLnBhdGggPSBfdHJhdmVyc2FsUGF0aDJbXCJkZWZhdWx0XCJdLmdldCh7XG4gICAgICBodWI6IHRoaXMuaHViLFxuICAgICAgcGFyZW50UGF0aDogbnVsbCxcbiAgICAgIHBhcmVudDogYXN0LFxuICAgICAgY29udGFpbmVyOiBhc3QsXG4gICAgICBrZXk6IFwicHJvZ3JhbVwiXG4gICAgfSkuc2V0Q29udGV4dCgpO1xuICAgIHRoaXMuc2NvcGUgPSB0aGlzLnBhdGguc2NvcGU7XG4gICAgdGhpcy5hc3QgPSBhc3Q7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBGaWxlLnByb3RvdHlwZS5hZGRBc3QgPSBmdW5jdGlvbiBhZGRBc3QoYXN0KSB7XG4gICAgdGhpcy5sb2cuZGVidWcoXCJTdGFydCBzZXQgQVNUXCIpO1xuICAgIHRoaXMuX2FkZEFzdChhc3QpO1xuICAgIHRoaXMubG9nLmRlYnVnKFwiRW5kIHNldCBBU1RcIik7XG5cbiAgICB0aGlzLmxvZy5kZWJ1ZyhcIlN0YXJ0IG1vZHVsZSBmb3JtYXR0ZXIgaW5pdFwiKTtcbiAgICB2YXIgbW9kRm9ybWF0dGVyID0gdGhpcy5tb2R1bGVGb3JtYXR0ZXIgPSB0aGlzLmdldE1vZHVsZUZvcm1hdHRlcih0aGlzLm9wdHMubW9kdWxlcyk7XG4gICAgaWYgKG1vZEZvcm1hdHRlci5pbml0ICYmIHRoaXMudHJhbnNmb3JtZXJzW1wiZXM2Lm1vZHVsZXNcIl0uY2FuVHJhbnNmb3JtKCkpIHtcbiAgICAgIG1vZEZvcm1hdHRlci5pbml0KCk7XG4gICAgfVxuICAgIHRoaXMubG9nLmRlYnVnKFwiRW5kIG1vZHVsZSBmb3JtYXR0ZXIgaW5pdFwiKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEZpbGUucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uIHRyYW5zZm9ybSgpIHtcbiAgICB0aGlzLmNhbGwoXCJwcmVcIik7XG4gICAgdmFyIF9hcnI2ID0gdGhpcy50cmFuc2Zvcm1lclN0YWNrO1xuICAgIGZvciAodmFyIF9pNiA9IDA7IF9pNiA8IF9hcnI2Lmxlbmd0aDsgX2k2KyspIHtcbiAgICAgIHZhciBwYXNzID0gX2FycjZbX2k2XTtcbiAgICAgIHBhc3MudHJhbnNmb3JtKCk7XG4gICAgfVxuICAgIHRoaXMuY2FsbChcInBvc3RcIik7XG5cbiAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRmlsZS5wcm90b3R5cGUud3JhcCA9IGZ1bmN0aW9uIHdyYXAoY29kZSwgY2FsbGJhY2spIHtcbiAgICBjb2RlID0gY29kZSArIFwiXCI7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKHRoaXMuc2hvdWxkSWdub3JlKCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVJlc3VsdCh7IGNvZGU6IGNvZGUsIGlnbm9yZWQ6IHRydWUgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuX2JhYmVsKSB7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVyci5fYmFiZWwgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgbWVzc2FnZSA9IGVyci5tZXNzYWdlID0gdGhpcy5vcHRzLmZpbGVuYW1lICsgXCI6IFwiICsgZXJyLm1lc3NhZ2U7XG5cbiAgICAgIHZhciBsb2MgPSBlcnIubG9jO1xuICAgICAgaWYgKGxvYykge1xuICAgICAgICBlcnIuY29kZUZyYW1lID0gX2hlbHBlcnNDb2RlRnJhbWUyW1wiZGVmYXVsdFwiXShjb2RlLCBsb2MubGluZSwgbG9jLmNvbHVtbiArIDEsIHRoaXMub3B0cyk7XG4gICAgICAgIG1lc3NhZ2UgKz0gXCJcXG5cIiArIGVyci5jb2RlRnJhbWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgLy8gY2hyb21lIGhhcyBpdCdzIG93biBwcmV0dHkgc3RyaW5naWZpZXIgd2hpY2ggZG9lc24ndCB1c2UgdGhlIHN0YWNrIHByb3BlcnR5XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvMjE3NVxuICAgICAgICBlcnIubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChlcnIuc3RhY2spIHtcbiAgICAgICAgdmFyIG5ld1N0YWNrID0gZXJyLnN0YWNrLnJlcGxhY2UoZXJyLm1lc3NhZ2UsIG1lc3NhZ2UpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGVyci5zdGFjayA9IG5ld1N0YWNrO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gYGVyci5zdGFja2AgbWF5IGJlIGEgcmVhZG9ubHkgcHJvcGVydHkgaW4gc29tZSBlbnZpcm9ubWVudHNcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRmlsZS5wcm90b3R5cGUuYWRkQ29kZSA9IGZ1bmN0aW9uIGFkZENvZGUoY29kZSkge1xuICAgIGNvZGUgPSAoY29kZSB8fCBcIlwiKSArIFwiXCI7XG4gICAgY29kZSA9IHRoaXMucGFyc2VJbnB1dFNvdXJjZU1hcChjb2RlKTtcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRmlsZS5wcm90b3R5cGUucGFyc2VDb2RlID0gZnVuY3Rpb24gcGFyc2VDb2RlKCkge1xuICAgIHRoaXMucGFyc2VTaGViYW5nKCk7XG4gICAgdmFyIGFzdCA9IHRoaXMucGFyc2UodGhpcy5jb2RlKTtcbiAgICB0aGlzLmFkZEFzdChhc3QpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRmlsZS5wcm90b3R5cGUuc2hvdWxkSWdub3JlID0gZnVuY3Rpb24gc2hvdWxkSWdub3JlKCkge1xuICAgIHZhciBvcHRzID0gdGhpcy5vcHRzO1xuICAgIHJldHVybiB1dGlsLnNob3VsZElnbm9yZShvcHRzLmZpbGVuYW1lLCBvcHRzLmlnbm9yZSwgb3B0cy5vbmx5KTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEZpbGUucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiBjYWxsKGtleSkge1xuICAgIHZhciBfYXJyNyA9IHRoaXMudW5jb2xsYXBzZWRUcmFuc2Zvcm1lclN0YWNrO1xuXG4gICAgZm9yICh2YXIgX2k3ID0gMDsgX2k3IDwgX2FycjcubGVuZ3RoOyBfaTcrKykge1xuICAgICAgdmFyIHBhc3MgPSBfYXJyN1tfaTddO1xuICAgICAgdmFyIGZuID0gcGFzcy5wbHVnaW5ba2V5XTtcbiAgICAgIGlmIChmbikgZm4odGhpcyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRmlsZS5wcm90b3R5cGUucGFyc2VJbnB1dFNvdXJjZU1hcCA9IGZ1bmN0aW9uIHBhcnNlSW5wdXRTb3VyY2VNYXAoY29kZSkge1xuICAgIHZhciBvcHRzID0gdGhpcy5vcHRzO1xuXG4gICAgaWYgKG9wdHMuaW5wdXRTb3VyY2VNYXAgIT09IGZhbHNlKSB7XG4gICAgICB2YXIgaW5wdXRNYXAgPSBfY29udmVydFNvdXJjZU1hcDJbXCJkZWZhdWx0XCJdLmZyb21Tb3VyY2UoY29kZSk7XG4gICAgICBpZiAoaW5wdXRNYXApIHtcbiAgICAgICAgb3B0cy5pbnB1dFNvdXJjZU1hcCA9IGlucHV0TWFwLnRvT2JqZWN0KCk7XG4gICAgICAgIGNvZGUgPSBfY29udmVydFNvdXJjZU1hcDJbXCJkZWZhdWx0XCJdLnJlbW92ZUNvbW1lbnRzKGNvZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRmlsZS5wcm90b3R5cGUucGFyc2VTaGViYW5nID0gZnVuY3Rpb24gcGFyc2VTaGViYW5nKCkge1xuICAgIHZhciBzaGViYW5nTWF0Y2ggPSBfc2hlYmFuZ1JlZ2V4MltcImRlZmF1bHRcIl0uZXhlYyh0aGlzLmNvZGUpO1xuICAgIGlmIChzaGViYW5nTWF0Y2gpIHtcbiAgICAgIHRoaXMuc2hlYmFuZyA9IHNoZWJhbmdNYXRjaFswXTtcbiAgICAgIHRoaXMuY29kZSA9IHRoaXMuY29kZS5yZXBsYWNlKF9zaGViYW5nUmVnZXgyW1wiZGVmYXVsdFwiXSwgXCJcIik7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRmlsZS5wcm90b3R5cGUubWFrZVJlc3VsdCA9IGZ1bmN0aW9uIG1ha2VSZXN1bHQoX3JlZikge1xuICAgIHZhciBjb2RlID0gX3JlZi5jb2RlO1xuICAgIHZhciBfcmVmJG1hcCA9IF9yZWYubWFwO1xuICAgIHZhciBtYXAgPSBfcmVmJG1hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IF9yZWYkbWFwO1xuICAgIHZhciBhc3QgPSBfcmVmLmFzdDtcbiAgICB2YXIgaWdub3JlZCA9IF9yZWYuaWdub3JlZDtcblxuICAgIHZhciByZXN1bHQgPSB7XG4gICAgICBtZXRhZGF0YTogbnVsbCxcbiAgICAgIGlnbm9yZWQ6ICEhaWdub3JlZCxcbiAgICAgIGNvZGU6IG51bGwsXG4gICAgICBhc3Q6IG51bGwsXG4gICAgICBtYXA6IG1hcFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5vcHRzLmNvZGUpIHtcbiAgICAgIHJlc3VsdC5jb2RlID0gY29kZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLmFzdCkge1xuICAgICAgcmVzdWx0LmFzdCA9IGFzdDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLm1ldGFkYXRhKSB7XG4gICAgICByZXN1bHQubWV0YWRhdGEgPSB0aGlzLm1ldGFkYXRhO1xuICAgICAgcmVzdWx0Lm1ldGFkYXRhLnVzZWRIZWxwZXJzID0gT2JqZWN0LmtleXModGhpcy51c2VkSGVscGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEZpbGUucHJvdG90eXBlLmdlbmVyYXRlID0gZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG4gICAgdmFyIG9wdHMgPSB0aGlzLm9wdHM7XG4gICAgdmFyIGFzdCA9IHRoaXMuYXN0O1xuXG4gICAgdmFyIHJlc3VsdCA9IHsgYXN0OiBhc3QgfTtcbiAgICBpZiAoIW9wdHMuY29kZSkgcmV0dXJuIHRoaXMubWFrZVJlc3VsdChyZXN1bHQpO1xuXG4gICAgdGhpcy5sb2cuZGVidWcoXCJHZW5lcmF0aW9uIHN0YXJ0XCIpO1xuXG4gICAgdmFyIF9yZXN1bHQgPSBfZ2VuZXJhdGlvbjJbXCJkZWZhdWx0XCJdKGFzdCwgb3B0cywgdGhpcy5jb2RlKTtcbiAgICByZXN1bHQuY29kZSA9IF9yZXN1bHQuY29kZTtcbiAgICByZXN1bHQubWFwID0gX3Jlc3VsdC5tYXA7XG5cbiAgICB0aGlzLmxvZy5kZWJ1ZyhcIkdlbmVyYXRpb24gZW5kXCIpO1xuXG4gICAgaWYgKHRoaXMuc2hlYmFuZykge1xuICAgICAgLy8gYWRkIGJhY2sgc2hlYmFuZ1xuICAgICAgcmVzdWx0LmNvZGUgPSB0aGlzLnNoZWJhbmcgKyBcIlxcblwiICsgcmVzdWx0LmNvZGU7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdC5tYXApIHtcbiAgICAgIHJlc3VsdC5tYXAgPSB0aGlzLm1lcmdlU291cmNlTWFwKHJlc3VsdC5tYXApO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnNvdXJjZU1hcHMgPT09IFwiaW5saW5lXCIgfHwgb3B0cy5zb3VyY2VNYXBzID09PSBcImJvdGhcIikge1xuICAgICAgcmVzdWx0LmNvZGUgKz0gXCJcXG5cIiArIF9jb252ZXJ0U291cmNlTWFwMltcImRlZmF1bHRcIl0uZnJvbU9iamVjdChyZXN1bHQubWFwKS50b0NvbW1lbnQoKTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5zb3VyY2VNYXBzID09PSBcImlubGluZVwiKSB7XG4gICAgICByZXN1bHQubWFwID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5tYWtlUmVzdWx0KHJlc3VsdCk7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKEZpbGUsIG51bGwsIFt7XG4gICAga2V5OiBcImhlbHBlcnNcIixcblxuICAgIC8qKlxuICAgICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgICAqL1xuXG4gICAgdmFsdWU6IFtcImluaGVyaXRzXCIsIFwiZGVmYXVsdHNcIiwgXCJjcmVhdGUtY2xhc3NcIiwgXCJjcmVhdGUtZGVjb3JhdGVkLWNsYXNzXCIsIFwiY3JlYXRlLWRlY29yYXRlZC1vYmplY3RcIiwgXCJkZWZpbmUtZGVjb3JhdGVkLXByb3BlcnR5LWRlc2NyaXB0b3JcIiwgXCJ0YWdnZWQtdGVtcGxhdGUtbGl0ZXJhbFwiLCBcInRhZ2dlZC10ZW1wbGF0ZS1saXRlcmFsLWxvb3NlXCIsIFwidG8tYXJyYXlcIiwgXCJ0by1jb25zdW1hYmxlLWFycmF5XCIsIFwic2xpY2VkLXRvLWFycmF5XCIsIFwic2xpY2VkLXRvLWFycmF5LWxvb3NlXCIsIFwib2JqZWN0LXdpdGhvdXQtcHJvcGVydGllc1wiLCBcImhhcy1vd25cIiwgXCJzbGljZVwiLCBcImJpbmRcIiwgXCJkZWZpbmUtcHJvcGVydHlcIiwgXCJhc3luYy10by1nZW5lcmF0b3JcIiwgXCJpbnRlcm9wLWV4cG9ydC13aWxkY2FyZFwiLCBcImludGVyb3AtcmVxdWlyZS13aWxkY2FyZFwiLCBcImludGVyb3AtcmVxdWlyZS1kZWZhdWx0XCIsIFwidHlwZW9mXCIsIFwiZXh0ZW5kc1wiLCBcImdldFwiLCBcInNldFwiLCBcIm5ldy1hcnJvdy1jaGVja1wiLCBcImNsYXNzLWNhbGwtY2hlY2tcIiwgXCJvYmplY3QtZGVzdHJ1Y3R1cmluZy1lbXB0eVwiLCBcInRlbXBvcmFsLXVuZGVmaW5lZFwiLCBcInRlbXBvcmFsLWFzc2VydC1kZWZpbmVkXCIsIFwic2VsZi1nbG9iYWxcIiwgXCJ0eXBlb2YtcmVhY3QtZWxlbWVudFwiLCBcImRlZmF1bHQtcHJvcHNcIiwgXCJpbnN0YW5jZW9mXCIsXG5cbiAgICAvLyBsZWdhY3lcbiAgICBcImludGVyb3AtcmVxdWlyZVwiXSxcblxuICAgIC8qKlxuICAgICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgICAqL1xuXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxuICB9LCB7XG4gICAga2V5OiBcInNvbG9IZWxwZXJzXCIsXG4gICAgdmFsdWU6IFtdLFxuICAgIGVudW1lcmFibGU6IHRydWVcbiAgfV0pO1xuXG4gIHJldHVybiBGaWxlO1xufSkoKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBGaWxlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
