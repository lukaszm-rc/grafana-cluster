/* */
"format cjs";
"use strict";

// istanbul ignore next

System.register([], function (_export, _context) {
  var _createClass, _detectIndent, _detectIndent2, _whitespace, _whitespace2, _nodePrinter, _nodePrinter2, _repeating, _repeating2, _sourceMap, _sourceMap2, _position, _position2, _messages, messages, _buffer, _buffer2, _lodashObjectExtend, _lodashObjectExtend2, _lodashCollectionEach, _lodashCollectionEach2, _node2, _node3, _types, t, CodeGenerator;

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
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      _detectIndent = require("detect-indent");
      _detectIndent2 = _interopRequireDefault(_detectIndent);
      _whitespace = require("./whitespace");
      _whitespace2 = _interopRequireDefault(_whitespace);
      _nodePrinter = require("./node/printer");
      _nodePrinter2 = _interopRequireDefault(_nodePrinter);
      _repeating = require("repeating");
      _repeating2 = _interopRequireDefault(_repeating);
      _sourceMap = require("./source-map");
      _sourceMap2 = _interopRequireDefault(_sourceMap);
      _position = require("./position");
      _position2 = _interopRequireDefault(_position);
      _messages = require("../messages");
      messages = _interopRequireWildcard(_messages);
      _buffer = require("./buffer");
      _buffer2 = _interopRequireDefault(_buffer);
      _lodashObjectExtend = require("lodash/object/extend");
      _lodashObjectExtend2 = _interopRequireDefault(_lodashObjectExtend);
      _lodashCollectionEach = require("lodash/collection/each");
      _lodashCollectionEach2 = _interopRequireDefault(_lodashCollectionEach);
      _node2 = require("./node");
      _node3 = _interopRequireDefault(_node2);
      _types = require("../types");
      t = _interopRequireWildcard(_types);

      CodeGenerator = function () {
        function CodeGenerator(ast, opts, code) {
          _classCallCheck(this, CodeGenerator);

          opts = opts || {};

          this.comments = ast.comments || [];
          this.tokens = ast.tokens || [];
          this.format = CodeGenerator.normalizeOptions(code, opts, this.tokens);
          this.opts = opts;
          this.ast = ast;

          this.whitespace = new _whitespace2["default"](this.tokens);
          this.position = new _position2["default"]();
          this.map = new _sourceMap2["default"](this.position, opts, code);
          this.buffer = new _buffer2["default"](this.position, this.format);
        }

        /**
         * [Please add a description.]
         */

        /**
         * Normalize generator options, setting defaults.
         *
         * - Detects code indentation.
         * - If `opts.compact = "auto"` and the code is over 100KB, `compact` will be set to `true`.
         */

        CodeGenerator.normalizeOptions = function normalizeOptions(code, opts, tokens) {
          var style = "  ";
          if (code) {
            var indent = _detectIndent2["default"](code).indent;
            if (indent && indent !== " ") style = indent;
          }

          var format = {
            shouldPrintComment: opts.shouldPrintComment,
            retainLines: opts.retainLines,
            comments: opts.comments == null || opts.comments,
            compact: opts.compact,
            quotes: CodeGenerator.findCommonStringDelimiter(code, tokens),
            indent: {
              adjustMultilineComment: true,
              style: style,
              base: 0
            }
          };

          if (format.compact === "auto") {
            format.compact = code.length > 100000; // 100KB

            if (format.compact) {
              console.error("[BABEL] " + messages.get("codeGeneratorDeopt", opts.filename, "100KB"));
            }
          }

          if (format.compact) {
            format.indent.adjustMultilineComment = false;
          }

          return format;
        };

        /**
         * Determine if input code uses more single or double quotes.
         */

        CodeGenerator.findCommonStringDelimiter = function findCommonStringDelimiter(code, tokens) {
          var occurences = {
            single: 0,
            double: 0
          };

          var checked = 0;

          for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (token.type.label !== "string") continue;

            var raw = code.slice(token.start, token.end);
            if (raw[0] === "'") {
              occurences.single++;
            } else {
              occurences.double++;
            }

            checked++;
            if (checked >= 3) break;
          }
          if (occurences.single > occurences.double) {
            return "single";
          } else {
            return "double";
          }
        };

        /**
         * All node generators.
         */

        /**
         * Generate code and sourcemap from ast.
         *
         * Appends comments that weren't attached to any node to the end of the generated output.
         */

        CodeGenerator.prototype.generate = function generate() {
          var ast = this.ast;

          this.print(ast);

          if (ast.comments) {
            var comments = [];
            var _arr = ast.comments;
            for (var _i = 0; _i < _arr.length; _i++) {
              var comment = _arr[_i];
              if (!comment._displayed) comments.push(comment);
            }
            this._printComments(comments);
          }

          return {
            map: this.map.get(),
            code: this.buffer.get()
          };
        };

        /**
         * Build NodePrinter.
         */

        CodeGenerator.prototype.buildPrint = function buildPrint(parent) {
          return new _nodePrinter2["default"](this, parent);
        };

        /**
         * [Please add a description.]
         */

        CodeGenerator.prototype.catchUp = function catchUp(node) {
          // catch up to this nodes newline if we're behind
          if (node.loc && this.format.retainLines && this.buffer.buf) {
            while (this.position.line < node.loc.start.line) {
              this._push("\n");
            }
          }
        };

        /**
         * [Please add a description.]
         */

        CodeGenerator.prototype._printNewline = function _printNewline(leading, node, parent, opts) {
          if (!opts.statement && !_node3["default"].isUserWhitespacable(node, parent)) {
            return;
          }

          var lines = 0;

          if (node.start != null && !node._ignoreUserWhitespace) {
            // user node
            if (leading) {
              lines = this.whitespace.getNewlinesBefore(node);
            } else {
              lines = this.whitespace.getNewlinesAfter(node);
            }
          } else {
            // generated node
            if (!leading) lines++; // always include at least a single line after
            if (opts.addNewlines) lines += opts.addNewlines(leading, node) || 0;

            var needs = _node3["default"].needsWhitespaceAfter;
            if (leading) needs = _node3["default"].needsWhitespaceBefore;
            if (needs(node, parent)) lines++;

            // generated nodes can't add starting file whitespace
            if (!this.buffer.buf) lines = 0;
          }

          this.newline(lines);
        };

        /**
         * [Please add a description.]
         */

        CodeGenerator.prototype.print = function print(node, parent) {
          var opts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

          if (!node) return;

          if (parent && parent._compact) {
            node._compact = true;
          }

          var oldConcise = this.format.concise;
          if (node._compact) {
            this.format.concise = true;
          }

          if (!this[node.type]) {
            throw new ReferenceError("unknown node of type " + JSON.stringify(node.type) + " with constructor " + JSON.stringify(node && node.constructor.name));
          }

          var needsParens = _node3["default"].needsParens(node, parent);
          if (needsParens) this.push("(");

          this.printLeadingComments(node, parent);

          this.catchUp(node);

          this._printNewline(true, node, parent, opts);

          if (opts.before) opts.before();
          this.map.mark(node, "start");

          this[node.type](node, this.buildPrint(node), parent);

          if (needsParens) this.push(")");

          this.map.mark(node, "end");
          if (opts.after) opts.after();

          this.format.concise = oldConcise;

          this._printNewline(false, node, parent, opts);

          this.printTrailingComments(node, parent);
        };

        /**
         * [Please add a description.]
         */

        CodeGenerator.prototype.printJoin = function printJoin(print, nodes) {
          // istanbul ignore next

          var _this = this;

          var opts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

          if (!nodes || !nodes.length) return;

          var len = nodes.length;

          if (opts.indent) this.indent();

          var printOpts = {
            statement: opts.statement,
            addNewlines: opts.addNewlines,
            after: function after() {
              if (opts.iterator) {
                opts.iterator(node, i);
              }

              if (opts.separator && i < len - 1) {
                _this.push(opts.separator);
              }
            }
          };

          for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            print.plain(node, printOpts);
          }

          if (opts.indent) this.dedent();
        };

        /**
         * [Please add a description.]
         */

        CodeGenerator.prototype.printAndIndentOnComments = function printAndIndentOnComments(print, node) {
          var indent = !!node.leadingComments;
          if (indent) this.indent();
          print.plain(node);
          if (indent) this.dedent();
        };

        /**
         * [Please add a description.]
         */

        CodeGenerator.prototype.printBlock = function printBlock(print, node) {
          if (t.isEmptyStatement(node)) {
            this.semicolon();
          } else {
            this.push(" ");
            print.plain(node);
          }
        };

        /**
         * [Please add a description.]
         */

        CodeGenerator.prototype.generateComment = function generateComment(comment) {
          var val = comment.value;
          if (comment.type === "CommentLine") {
            val = "//" + val;
          } else {
            val = "/*" + val + "*/";
          }
          return val;
        };

        /**
         * [Please add a description.]
         */

        CodeGenerator.prototype.printTrailingComments = function printTrailingComments(node, parent) {
          this._printComments(this.getComments("trailingComments", node, parent));
        };

        /**
         * [Please add a description.]
         */

        CodeGenerator.prototype.printLeadingComments = function printLeadingComments(node, parent) {
          this._printComments(this.getComments("leadingComments", node, parent));
        };

        /**
         * [Please add a description.]
         */

        CodeGenerator.prototype.getComments = function getComments(key, node, parent) {
          if (t.isExpressionStatement(parent)) {
            return [];
          }

          var comments = [];
          var nodes = [node];

          if (t.isExpressionStatement(node)) {
            nodes.push(node.argument);
          }

          var _arr2 = nodes;
          for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
            var _node = _arr2[_i2];
            comments = comments.concat(this._getComments(key, _node));
          }

          return comments;
        };

        /**
         * [Please add a description.]
         */

        CodeGenerator.prototype._getComments = function _getComments(key, node) {
          return node && node[key] || [];
        };

        /**
         * [Please add a description.]
         */

        CodeGenerator.prototype.shouldPrintComment = function shouldPrintComment(comment) {
          if (this.format.shouldPrintComment) {
            return this.format.shouldPrintComment(comment.value);
          } else {
            if (comment.value.indexOf("@license") >= 0 || comment.value.indexOf("@preserve") >= 0) {
              return true;
            } else {
              return this.format.comments;
            }
          }
        };

        /**
         * [Please add a description.]
         */

        CodeGenerator.prototype._printComments = function _printComments(comments) {
          if (!comments || !comments.length) return;

          var _arr3 = comments;
          for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
            var comment = _arr3[_i3];
            if (!this.shouldPrintComment(comment)) continue;
            if (comment._displayed) continue;
            comment._displayed = true;

            this.catchUp(comment);

            // whitespace before
            this.newline(this.whitespace.getNewlinesBefore(comment));

            var column = this.position.column;
            var val = this.generateComment(comment);

            if (column && !this.isLast(["\n", " ", "[", "{"])) {
              this._push(" ");
              column++;
            }

            //
            if (comment.type === "CommentBlock" && this.format.indent.adjustMultilineComment) {
              var offset = comment.loc && comment.loc.start.column;
              if (offset) {
                var newlineRegex = new RegExp("\\n\\s{1," + offset + "}", "g");
                val = val.replace(newlineRegex, "\n");
              }

              var indent = Math.max(this.indentSize(), column);
              val = val.replace(/\n/g, "\n" + _repeating2["default"](" ", indent));
            }

            if (column === 0) {
              val = this.getIndent() + val;
            }

            // force a newline for line comments when retainLines is set in case the next printed node
            // doesn't catch up
            if ((this.format.compact || this.format.retainLines) && comment.type === "CommentLine") {
              val += "\n";
            }

            //
            this._push(val);

            // whitespace after
            this.newline(this.whitespace.getNewlinesAfter(comment));
          }
        };

        _createClass(CodeGenerator, null, [{
          key: "generators",
          value: {
            templateLiterals: require("./generators/template-literals"),
            comprehensions: require("./generators/comprehensions"),
            expressions: require("./generators/expressions"),
            statements: require("./generators/statements"),
            classes: require("./generators/classes"),
            methods: require("./generators/methods"),
            modules: require("./generators/modules"),
            types: require("./generators/types"),
            flow: require("./generators/flow"),
            base: require("./generators/base"),
            jsx: require("./generators/jsx")
          },
          enumerable: true
        }]);

        return CodeGenerator;
      }();

      _lodashCollectionEach2["default"](_buffer2["default"].prototype, function (fn, key) {
        CodeGenerator.prototype[key] = function () {
          return fn.apply(this.buffer, arguments);
        };
      });

      /**
       * [Please add a description.]
       */

      _lodashCollectionEach2["default"](CodeGenerator.generators, function (generator) {
        _lodashObjectExtend2["default"](CodeGenerator.prototype, generator);
      });

      /**
       * [Please add a description.]
       */

      module.exports = function (ast, opts, code) {
        var gen = new CodeGenerator(ast, opts, code);
        return gen.generate();
      };

      module.exports.CodeGenerator = CodeGenerator;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvZ2VuZXJhdGlvbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBUUEsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7OztBQUlBLFdBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLEdBQXhCLEdBQThCLEVBQUUsV0FBVyxHQUFYLEVBQWhDLENBQVQ7R0FBckM7Ozs7QUFJQSxXQUFTLGVBQVQsQ0FBeUIsUUFBekIsRUFBbUMsV0FBbkMsRUFBZ0Q7QUFBRSxRQUFJLEVBQUUsb0JBQW9CLFdBQXBCLENBQUYsRUFBb0M7QUFBRSxZQUFNLElBQUksU0FBSixDQUFjLG1DQUFkLENBQU4sQ0FBRjtLQUF4QztHQUFsRDs7Ozs7QUFaSSxxQkFBZSxZQUFhO0FBQUUsaUJBQVMsZ0JBQVQsQ0FBMEIsTUFBMUIsRUFBa0MsS0FBbEMsRUFBeUM7QUFBRSxlQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxNQUFNLE1BQU4sRUFBYyxHQUFsQyxFQUF1QztBQUFFLGdCQUFJLGFBQWEsTUFBTSxDQUFOLENBQWIsQ0FB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RUFBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCO0FBQzFDLFlBQUksTUFBTSxJQUFJLGFBQUosQ0FBa0IsR0FBbEIsRUFBdUIsSUFBdkIsRUFBNkIsSUFBN0IsQ0FBTixDQURzQztBQUUxQyxlQUFPLElBQUksUUFBSixFQUFQLENBRjBDO09BQTNCOztBQUtqQixhQUFPLE9BQVAsQ0FBZSxhQUFmLEdBQStCLGFBQS9CIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvZ2VuZXJhdGlvbi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgX2RldGVjdEluZGVudCA9IHJlcXVpcmUoXCJkZXRlY3QtaW5kZW50XCIpO1xuXG52YXIgX2RldGVjdEluZGVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZXRlY3RJbmRlbnQpO1xuXG52YXIgX3doaXRlc3BhY2UgPSByZXF1aXJlKFwiLi93aGl0ZXNwYWNlXCIpO1xuXG52YXIgX3doaXRlc3BhY2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2hpdGVzcGFjZSk7XG5cbnZhciBfbm9kZVByaW50ZXIgPSByZXF1aXJlKFwiLi9ub2RlL3ByaW50ZXJcIik7XG5cbnZhciBfbm9kZVByaW50ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbm9kZVByaW50ZXIpO1xuXG52YXIgX3JlcGVhdGluZyA9IHJlcXVpcmUoXCJyZXBlYXRpbmdcIik7XG5cbnZhciBfcmVwZWF0aW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlcGVhdGluZyk7XG5cbnZhciBfc291cmNlTWFwID0gcmVxdWlyZShcIi4vc291cmNlLW1hcFwiKTtcblxudmFyIF9zb3VyY2VNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc291cmNlTWFwKTtcblxudmFyIF9wb3NpdGlvbiA9IHJlcXVpcmUoXCIuL3Bvc2l0aW9uXCIpO1xuXG52YXIgX3Bvc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc2l0aW9uKTtcblxudmFyIF9tZXNzYWdlcyA9IHJlcXVpcmUoXCIuLi9tZXNzYWdlc1wiKTtcblxudmFyIG1lc3NhZ2VzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX21lc3NhZ2VzKTtcblxudmFyIF9idWZmZXIgPSByZXF1aXJlKFwiLi9idWZmZXJcIik7XG5cbnZhciBfYnVmZmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1ZmZlcik7XG5cbnZhciBfbG9kYXNoT2JqZWN0RXh0ZW5kID0gcmVxdWlyZShcImxvZGFzaC9vYmplY3QvZXh0ZW5kXCIpO1xuXG52YXIgX2xvZGFzaE9iamVjdEV4dGVuZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hPYmplY3RFeHRlbmQpO1xuXG52YXIgX2xvZGFzaENvbGxlY3Rpb25FYWNoID0gcmVxdWlyZShcImxvZGFzaC9jb2xsZWN0aW9uL2VhY2hcIik7XG5cbnZhciBfbG9kYXNoQ29sbGVjdGlvbkVhY2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoQ29sbGVjdGlvbkVhY2gpO1xuXG52YXIgX25vZGUyID0gcmVxdWlyZShcIi4vbm9kZVwiKTtcblxudmFyIF9ub2RlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX25vZGUyKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG4vKipcbiAqIEJhYmVsJ3MgY29kZSBnZW5lcmF0b3IsIHR1cm5zIGFuIGFzdCBpbnRvIGNvZGUsIG1haW50YWluaW5nIHNvdXJjZW1hcHMsXG4gKiB1c2VyIHByZWZlcmVuY2VzLCBhbmQgdmFsaWQgb3V0cHV0LlxuICovXG5cbnZhciBDb2RlR2VuZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29kZUdlbmVyYXRvcihhc3QsIG9wdHMsIGNvZGUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29kZUdlbmVyYXRvcik7XG5cbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgIHRoaXMuY29tbWVudHMgPSBhc3QuY29tbWVudHMgfHwgW107XG4gICAgdGhpcy50b2tlbnMgPSBhc3QudG9rZW5zIHx8IFtdO1xuICAgIHRoaXMuZm9ybWF0ID0gQ29kZUdlbmVyYXRvci5ub3JtYWxpemVPcHRpb25zKGNvZGUsIG9wdHMsIHRoaXMudG9rZW5zKTtcbiAgICB0aGlzLm9wdHMgPSBvcHRzO1xuICAgIHRoaXMuYXN0ID0gYXN0O1xuXG4gICAgdGhpcy53aGl0ZXNwYWNlID0gbmV3IF93aGl0ZXNwYWNlMltcImRlZmF1bHRcIl0odGhpcy50b2tlbnMpO1xuICAgIHRoaXMucG9zaXRpb24gPSBuZXcgX3Bvc2l0aW9uMltcImRlZmF1bHRcIl0oKTtcbiAgICB0aGlzLm1hcCA9IG5ldyBfc291cmNlTWFwMltcImRlZmF1bHRcIl0odGhpcy5wb3NpdGlvbiwgb3B0cywgY29kZSk7XG4gICAgdGhpcy5idWZmZXIgPSBuZXcgX2J1ZmZlcjJbXCJkZWZhdWx0XCJdKHRoaXMucG9zaXRpb24sIHRoaXMuZm9ybWF0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZSBnZW5lcmF0b3Igb3B0aW9ucywgc2V0dGluZyBkZWZhdWx0cy5cbiAgICpcbiAgICogLSBEZXRlY3RzIGNvZGUgaW5kZW50YXRpb24uXG4gICAqIC0gSWYgYG9wdHMuY29tcGFjdCA9IFwiYXV0b1wiYCBhbmQgdGhlIGNvZGUgaXMgb3ZlciAxMDBLQiwgYGNvbXBhY3RgIHdpbGwgYmUgc2V0IHRvIGB0cnVlYC5cbiAgICovXG5cbiAgQ29kZUdlbmVyYXRvci5ub3JtYWxpemVPcHRpb25zID0gZnVuY3Rpb24gbm9ybWFsaXplT3B0aW9ucyhjb2RlLCBvcHRzLCB0b2tlbnMpIHtcbiAgICB2YXIgc3R5bGUgPSBcIiAgXCI7XG4gICAgaWYgKGNvZGUpIHtcbiAgICAgIHZhciBpbmRlbnQgPSBfZGV0ZWN0SW5kZW50MltcImRlZmF1bHRcIl0oY29kZSkuaW5kZW50O1xuICAgICAgaWYgKGluZGVudCAmJiBpbmRlbnQgIT09IFwiIFwiKSBzdHlsZSA9IGluZGVudDtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0ID0ge1xuICAgICAgc2hvdWxkUHJpbnRDb21tZW50OiBvcHRzLnNob3VsZFByaW50Q29tbWVudCxcbiAgICAgIHJldGFpbkxpbmVzOiBvcHRzLnJldGFpbkxpbmVzLFxuICAgICAgY29tbWVudHM6IG9wdHMuY29tbWVudHMgPT0gbnVsbCB8fCBvcHRzLmNvbW1lbnRzLFxuICAgICAgY29tcGFjdDogb3B0cy5jb21wYWN0LFxuICAgICAgcXVvdGVzOiBDb2RlR2VuZXJhdG9yLmZpbmRDb21tb25TdHJpbmdEZWxpbWl0ZXIoY29kZSwgdG9rZW5zKSxcbiAgICAgIGluZGVudDoge1xuICAgICAgICBhZGp1c3RNdWx0aWxpbmVDb21tZW50OiB0cnVlLFxuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIGJhc2U6IDBcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGZvcm1hdC5jb21wYWN0ID09PSBcImF1dG9cIikge1xuICAgICAgZm9ybWF0LmNvbXBhY3QgPSBjb2RlLmxlbmd0aCA+IDEwMDAwMDsgLy8gMTAwS0JcblxuICAgICAgaWYgKGZvcm1hdC5jb21wYWN0KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbQkFCRUxdIFwiICsgbWVzc2FnZXMuZ2V0KFwiY29kZUdlbmVyYXRvckRlb3B0XCIsIG9wdHMuZmlsZW5hbWUsIFwiMTAwS0JcIikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmb3JtYXQuY29tcGFjdCkge1xuICAgICAgZm9ybWF0LmluZGVudC5hZGp1c3RNdWx0aWxpbmVDb21tZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIGlucHV0IGNvZGUgdXNlcyBtb3JlIHNpbmdsZSBvciBkb3VibGUgcXVvdGVzLlxuICAgKi9cblxuICBDb2RlR2VuZXJhdG9yLmZpbmRDb21tb25TdHJpbmdEZWxpbWl0ZXIgPSBmdW5jdGlvbiBmaW5kQ29tbW9uU3RyaW5nRGVsaW1pdGVyKGNvZGUsIHRva2Vucykge1xuICAgIHZhciBvY2N1cmVuY2VzID0ge1xuICAgICAgc2luZ2xlOiAwLFxuICAgICAgZG91YmxlOiAwXG4gICAgfTtcblxuICAgIHZhciBjaGVja2VkID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICBpZiAodG9rZW4udHlwZS5sYWJlbCAhPT0gXCJzdHJpbmdcIikgY29udGludWU7XG5cbiAgICAgIHZhciByYXcgPSBjb2RlLnNsaWNlKHRva2VuLnN0YXJ0LCB0b2tlbi5lbmQpO1xuICAgICAgaWYgKHJhd1swXSA9PT0gXCInXCIpIHtcbiAgICAgICAgb2NjdXJlbmNlcy5zaW5nbGUrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9jY3VyZW5jZXMuZG91YmxlKys7XG4gICAgICB9XG5cbiAgICAgIGNoZWNrZWQrKztcbiAgICAgIGlmIChjaGVja2VkID49IDMpIGJyZWFrO1xuICAgIH1cbiAgICBpZiAob2NjdXJlbmNlcy5zaW5nbGUgPiBvY2N1cmVuY2VzLmRvdWJsZSkge1xuICAgICAgcmV0dXJuIFwic2luZ2xlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcImRvdWJsZVwiO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQWxsIG5vZGUgZ2VuZXJhdG9ycy5cbiAgICovXG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGNvZGUgYW5kIHNvdXJjZW1hcCBmcm9tIGFzdC5cbiAgICpcbiAgICogQXBwZW5kcyBjb21tZW50cyB0aGF0IHdlcmVuJ3QgYXR0YWNoZWQgdG8gYW55IG5vZGUgdG8gdGhlIGVuZCBvZiB0aGUgZ2VuZXJhdGVkIG91dHB1dC5cbiAgICovXG5cbiAgQ29kZUdlbmVyYXRvci5wcm90b3R5cGUuZ2VuZXJhdGUgPSBmdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgICB2YXIgYXN0ID0gdGhpcy5hc3Q7XG5cbiAgICB0aGlzLnByaW50KGFzdCk7XG5cbiAgICBpZiAoYXN0LmNvbW1lbnRzKSB7XG4gICAgICB2YXIgY29tbWVudHMgPSBbXTtcbiAgICAgIHZhciBfYXJyID0gYXN0LmNvbW1lbnRzO1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IF9hcnIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBjb21tZW50ID0gX2FycltfaV07XG4gICAgICAgIGlmICghY29tbWVudC5fZGlzcGxheWVkKSBjb21tZW50cy5wdXNoKGNvbW1lbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fcHJpbnRDb21tZW50cyhjb21tZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1hcDogdGhpcy5tYXAuZ2V0KCksXG4gICAgICBjb2RlOiB0aGlzLmJ1ZmZlci5nZXQoKVxuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIEJ1aWxkIE5vZGVQcmludGVyLlxuICAgKi9cblxuICBDb2RlR2VuZXJhdG9yLnByb3RvdHlwZS5idWlsZFByaW50ID0gZnVuY3Rpb24gYnVpbGRQcmludChwYXJlbnQpIHtcbiAgICByZXR1cm4gbmV3IF9ub2RlUHJpbnRlcjJbXCJkZWZhdWx0XCJdKHRoaXMsIHBhcmVudCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBDb2RlR2VuZXJhdG9yLnByb3RvdHlwZS5jYXRjaFVwID0gZnVuY3Rpb24gY2F0Y2hVcChub2RlKSB7XG4gICAgLy8gY2F0Y2ggdXAgdG8gdGhpcyBub2RlcyBuZXdsaW5lIGlmIHdlJ3JlIGJlaGluZFxuICAgIGlmIChub2RlLmxvYyAmJiB0aGlzLmZvcm1hdC5yZXRhaW5MaW5lcyAmJiB0aGlzLmJ1ZmZlci5idWYpIHtcbiAgICAgIHdoaWxlICh0aGlzLnBvc2l0aW9uLmxpbmUgPCBub2RlLmxvYy5zdGFydC5saW5lKSB7XG4gICAgICAgIHRoaXMuX3B1c2goXCJcXG5cIik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgQ29kZUdlbmVyYXRvci5wcm90b3R5cGUuX3ByaW50TmV3bGluZSA9IGZ1bmN0aW9uIF9wcmludE5ld2xpbmUobGVhZGluZywgbm9kZSwgcGFyZW50LCBvcHRzKSB7XG4gICAgaWYgKCFvcHRzLnN0YXRlbWVudCAmJiAhX25vZGUzW1wiZGVmYXVsdFwiXS5pc1VzZXJXaGl0ZXNwYWNhYmxlKG5vZGUsIHBhcmVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbGluZXMgPSAwO1xuXG4gICAgaWYgKG5vZGUuc3RhcnQgIT0gbnVsbCAmJiAhbm9kZS5faWdub3JlVXNlcldoaXRlc3BhY2UpIHtcbiAgICAgIC8vIHVzZXIgbm9kZVxuICAgICAgaWYgKGxlYWRpbmcpIHtcbiAgICAgICAgbGluZXMgPSB0aGlzLndoaXRlc3BhY2UuZ2V0TmV3bGluZXNCZWZvcmUobm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaW5lcyA9IHRoaXMud2hpdGVzcGFjZS5nZXROZXdsaW5lc0FmdGVyKG5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBnZW5lcmF0ZWQgbm9kZVxuICAgICAgaWYgKCFsZWFkaW5nKSBsaW5lcysrOyAvLyBhbHdheXMgaW5jbHVkZSBhdCBsZWFzdCBhIHNpbmdsZSBsaW5lIGFmdGVyXG4gICAgICBpZiAob3B0cy5hZGROZXdsaW5lcykgbGluZXMgKz0gb3B0cy5hZGROZXdsaW5lcyhsZWFkaW5nLCBub2RlKSB8fCAwO1xuXG4gICAgICB2YXIgbmVlZHMgPSBfbm9kZTNbXCJkZWZhdWx0XCJdLm5lZWRzV2hpdGVzcGFjZUFmdGVyO1xuICAgICAgaWYgKGxlYWRpbmcpIG5lZWRzID0gX25vZGUzW1wiZGVmYXVsdFwiXS5uZWVkc1doaXRlc3BhY2VCZWZvcmU7XG4gICAgICBpZiAobmVlZHMobm9kZSwgcGFyZW50KSkgbGluZXMrKztcblxuICAgICAgLy8gZ2VuZXJhdGVkIG5vZGVzIGNhbid0IGFkZCBzdGFydGluZyBmaWxlIHdoaXRlc3BhY2VcbiAgICAgIGlmICghdGhpcy5idWZmZXIuYnVmKSBsaW5lcyA9IDA7XG4gICAgfVxuXG4gICAgdGhpcy5uZXdsaW5lKGxpbmVzKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIENvZGVHZW5lcmF0b3IucHJvdG90eXBlLnByaW50ID0gZnVuY3Rpb24gcHJpbnQobm9kZSwgcGFyZW50KSB7XG4gICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1syXTtcblxuICAgIGlmICghbm9kZSkgcmV0dXJuO1xuXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuX2NvbXBhY3QpIHtcbiAgICAgIG5vZGUuX2NvbXBhY3QgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBvbGRDb25jaXNlID0gdGhpcy5mb3JtYXQuY29uY2lzZTtcbiAgICBpZiAobm9kZS5fY29tcGFjdCkge1xuICAgICAgdGhpcy5mb3JtYXQuY29uY2lzZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzW25vZGUudHlwZV0pIHtcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInVua25vd24gbm9kZSBvZiB0eXBlIFwiICsgSlNPTi5zdHJpbmdpZnkobm9kZS50eXBlKSArIFwiIHdpdGggY29uc3RydWN0b3IgXCIgKyBKU09OLnN0cmluZ2lmeShub2RlICYmIG5vZGUuY29uc3RydWN0b3IubmFtZSkpO1xuICAgIH1cblxuICAgIHZhciBuZWVkc1BhcmVucyA9IF9ub2RlM1tcImRlZmF1bHRcIl0ubmVlZHNQYXJlbnMobm9kZSwgcGFyZW50KTtcbiAgICBpZiAobmVlZHNQYXJlbnMpIHRoaXMucHVzaChcIihcIik7XG5cbiAgICB0aGlzLnByaW50TGVhZGluZ0NvbW1lbnRzKG5vZGUsIHBhcmVudCk7XG5cbiAgICB0aGlzLmNhdGNoVXAobm9kZSk7XG5cbiAgICB0aGlzLl9wcmludE5ld2xpbmUodHJ1ZSwgbm9kZSwgcGFyZW50LCBvcHRzKTtcblxuICAgIGlmIChvcHRzLmJlZm9yZSkgb3B0cy5iZWZvcmUoKTtcbiAgICB0aGlzLm1hcC5tYXJrKG5vZGUsIFwic3RhcnRcIik7XG5cbiAgICB0aGlzW25vZGUudHlwZV0obm9kZSwgdGhpcy5idWlsZFByaW50KG5vZGUpLCBwYXJlbnQpO1xuXG4gICAgaWYgKG5lZWRzUGFyZW5zKSB0aGlzLnB1c2goXCIpXCIpO1xuXG4gICAgdGhpcy5tYXAubWFyayhub2RlLCBcImVuZFwiKTtcbiAgICBpZiAob3B0cy5hZnRlcikgb3B0cy5hZnRlcigpO1xuXG4gICAgdGhpcy5mb3JtYXQuY29uY2lzZSA9IG9sZENvbmNpc2U7XG5cbiAgICB0aGlzLl9wcmludE5ld2xpbmUoZmFsc2UsIG5vZGUsIHBhcmVudCwgb3B0cyk7XG5cbiAgICB0aGlzLnByaW50VHJhaWxpbmdDb21tZW50cyhub2RlLCBwYXJlbnQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgQ29kZUdlbmVyYXRvci5wcm90b3R5cGUucHJpbnRKb2luID0gZnVuY3Rpb24gcHJpbnRKb2luKHByaW50LCBub2Rlcykge1xuICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1syXTtcblxuICAgIGlmICghbm9kZXMgfHwgIW5vZGVzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgdmFyIGxlbiA9IG5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChvcHRzLmluZGVudCkgdGhpcy5pbmRlbnQoKTtcblxuICAgIHZhciBwcmludE9wdHMgPSB7XG4gICAgICBzdGF0ZW1lbnQ6IG9wdHMuc3RhdGVtZW50LFxuICAgICAgYWRkTmV3bGluZXM6IG9wdHMuYWRkTmV3bGluZXMsXG4gICAgICBhZnRlcjogZnVuY3Rpb24gYWZ0ZXIoKSB7XG4gICAgICAgIGlmIChvcHRzLml0ZXJhdG9yKSB7XG4gICAgICAgICAgb3B0cy5pdGVyYXRvcihub2RlLCBpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRzLnNlcGFyYXRvciAmJiBpIDwgbGVuIC0gMSkge1xuICAgICAgICAgIF90aGlzLnB1c2gob3B0cy5zZXBhcmF0b3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBub2RlID0gbm9kZXNbaV07XG4gICAgICBwcmludC5wbGFpbihub2RlLCBwcmludE9wdHMpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmluZGVudCkgdGhpcy5kZWRlbnQoKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIENvZGVHZW5lcmF0b3IucHJvdG90eXBlLnByaW50QW5kSW5kZW50T25Db21tZW50cyA9IGZ1bmN0aW9uIHByaW50QW5kSW5kZW50T25Db21tZW50cyhwcmludCwgbm9kZSkge1xuICAgIHZhciBpbmRlbnQgPSAhIW5vZGUubGVhZGluZ0NvbW1lbnRzO1xuICAgIGlmIChpbmRlbnQpIHRoaXMuaW5kZW50KCk7XG4gICAgcHJpbnQucGxhaW4obm9kZSk7XG4gICAgaWYgKGluZGVudCkgdGhpcy5kZWRlbnQoKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIENvZGVHZW5lcmF0b3IucHJvdG90eXBlLnByaW50QmxvY2sgPSBmdW5jdGlvbiBwcmludEJsb2NrKHByaW50LCBub2RlKSB7XG4gICAgaWYgKHQuaXNFbXB0eVN0YXRlbWVudChub2RlKSkge1xuICAgICAgdGhpcy5zZW1pY29sb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wdXNoKFwiIFwiKTtcbiAgICAgIHByaW50LnBsYWluKG5vZGUpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIENvZGVHZW5lcmF0b3IucHJvdG90eXBlLmdlbmVyYXRlQ29tbWVudCA9IGZ1bmN0aW9uIGdlbmVyYXRlQ29tbWVudChjb21tZW50KSB7XG4gICAgdmFyIHZhbCA9IGNvbW1lbnQudmFsdWU7XG4gICAgaWYgKGNvbW1lbnQudHlwZSA9PT0gXCJDb21tZW50TGluZVwiKSB7XG4gICAgICB2YWwgPSBcIi8vXCIgKyB2YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbCA9IFwiLypcIiArIHZhbCArIFwiKi9cIjtcbiAgICB9XG4gICAgcmV0dXJuIHZhbDtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIENvZGVHZW5lcmF0b3IucHJvdG90eXBlLnByaW50VHJhaWxpbmdDb21tZW50cyA9IGZ1bmN0aW9uIHByaW50VHJhaWxpbmdDb21tZW50cyhub2RlLCBwYXJlbnQpIHtcbiAgICB0aGlzLl9wcmludENvbW1lbnRzKHRoaXMuZ2V0Q29tbWVudHMoXCJ0cmFpbGluZ0NvbW1lbnRzXCIsIG5vZGUsIHBhcmVudCkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgQ29kZUdlbmVyYXRvci5wcm90b3R5cGUucHJpbnRMZWFkaW5nQ29tbWVudHMgPSBmdW5jdGlvbiBwcmludExlYWRpbmdDb21tZW50cyhub2RlLCBwYXJlbnQpIHtcbiAgICB0aGlzLl9wcmludENvbW1lbnRzKHRoaXMuZ2V0Q29tbWVudHMoXCJsZWFkaW5nQ29tbWVudHNcIiwgbm9kZSwgcGFyZW50KSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBDb2RlR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRDb21tZW50cyA9IGZ1bmN0aW9uIGdldENvbW1lbnRzKGtleSwgbm9kZSwgcGFyZW50KSB7XG4gICAgaWYgKHQuaXNFeHByZXNzaW9uU3RhdGVtZW50KHBhcmVudCkpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICB2YXIgY29tbWVudHMgPSBbXTtcbiAgICB2YXIgbm9kZXMgPSBbbm9kZV07XG5cbiAgICBpZiAodC5pc0V4cHJlc3Npb25TdGF0ZW1lbnQobm9kZSkpIHtcbiAgICAgIG5vZGVzLnB1c2gobm9kZS5hcmd1bWVudCk7XG4gICAgfVxuXG4gICAgdmFyIF9hcnIyID0gbm9kZXM7XG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgX2FycjIubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIF9ub2RlID0gX2FycjJbX2kyXTtcbiAgICAgIGNvbW1lbnRzID0gY29tbWVudHMuY29uY2F0KHRoaXMuX2dldENvbW1lbnRzKGtleSwgX25vZGUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tbWVudHM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBDb2RlR2VuZXJhdG9yLnByb3RvdHlwZS5fZ2V0Q29tbWVudHMgPSBmdW5jdGlvbiBfZ2V0Q29tbWVudHMoa2V5LCBub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUgJiYgbm9kZVtrZXldIHx8IFtdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgQ29kZUdlbmVyYXRvci5wcm90b3R5cGUuc2hvdWxkUHJpbnRDb21tZW50ID0gZnVuY3Rpb24gc2hvdWxkUHJpbnRDb21tZW50KGNvbW1lbnQpIHtcbiAgICBpZiAodGhpcy5mb3JtYXQuc2hvdWxkUHJpbnRDb21tZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXQuc2hvdWxkUHJpbnRDb21tZW50KGNvbW1lbnQudmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29tbWVudC52YWx1ZS5pbmRleE9mKFwiQGxpY2Vuc2VcIikgPj0gMCB8fCBjb21tZW50LnZhbHVlLmluZGV4T2YoXCJAcHJlc2VydmVcIikgPj0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdC5jb21tZW50cztcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBDb2RlR2VuZXJhdG9yLnByb3RvdHlwZS5fcHJpbnRDb21tZW50cyA9IGZ1bmN0aW9uIF9wcmludENvbW1lbnRzKGNvbW1lbnRzKSB7XG4gICAgaWYgKCFjb21tZW50cyB8fCAhY29tbWVudHMubGVuZ3RoKSByZXR1cm47XG5cbiAgICB2YXIgX2FycjMgPSBjb21tZW50cztcbiAgICBmb3IgKHZhciBfaTMgPSAwOyBfaTMgPCBfYXJyMy5sZW5ndGg7IF9pMysrKSB7XG4gICAgICB2YXIgY29tbWVudCA9IF9hcnIzW19pM107XG4gICAgICBpZiAoIXRoaXMuc2hvdWxkUHJpbnRDb21tZW50KGNvbW1lbnQpKSBjb250aW51ZTtcbiAgICAgIGlmIChjb21tZW50Ll9kaXNwbGF5ZWQpIGNvbnRpbnVlO1xuICAgICAgY29tbWVudC5fZGlzcGxheWVkID0gdHJ1ZTtcblxuICAgICAgdGhpcy5jYXRjaFVwKGNvbW1lbnQpO1xuXG4gICAgICAvLyB3aGl0ZXNwYWNlIGJlZm9yZVxuICAgICAgdGhpcy5uZXdsaW5lKHRoaXMud2hpdGVzcGFjZS5nZXROZXdsaW5lc0JlZm9yZShjb21tZW50KSk7XG5cbiAgICAgIHZhciBjb2x1bW4gPSB0aGlzLnBvc2l0aW9uLmNvbHVtbjtcbiAgICAgIHZhciB2YWwgPSB0aGlzLmdlbmVyYXRlQ29tbWVudChjb21tZW50KTtcblxuICAgICAgaWYgKGNvbHVtbiAmJiAhdGhpcy5pc0xhc3QoW1wiXFxuXCIsIFwiIFwiLCBcIltcIiwgXCJ7XCJdKSkge1xuICAgICAgICB0aGlzLl9wdXNoKFwiIFwiKTtcbiAgICAgICAgY29sdW1uKys7XG4gICAgICB9XG5cbiAgICAgIC8vXG4gICAgICBpZiAoY29tbWVudC50eXBlID09PSBcIkNvbW1lbnRCbG9ja1wiICYmIHRoaXMuZm9ybWF0LmluZGVudC5hZGp1c3RNdWx0aWxpbmVDb21tZW50KSB7XG4gICAgICAgIHZhciBvZmZzZXQgPSBjb21tZW50LmxvYyAmJiBjb21tZW50LmxvYy5zdGFydC5jb2x1bW47XG4gICAgICAgIGlmIChvZmZzZXQpIHtcbiAgICAgICAgICB2YXIgbmV3bGluZVJlZ2V4ID0gbmV3IFJlZ0V4cChcIlxcXFxuXFxcXHN7MSxcIiArIG9mZnNldCArIFwifVwiLCBcImdcIik7XG4gICAgICAgICAgdmFsID0gdmFsLnJlcGxhY2UobmV3bGluZVJlZ2V4LCBcIlxcblwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpbmRlbnQgPSBNYXRoLm1heCh0aGlzLmluZGVudFNpemUoKSwgY29sdW1uKTtcbiAgICAgICAgdmFsID0gdmFsLnJlcGxhY2UoL1xcbi9nLCBcIlxcblwiICsgX3JlcGVhdGluZzJbXCJkZWZhdWx0XCJdKFwiIFwiLCBpbmRlbnQpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbHVtbiA9PT0gMCkge1xuICAgICAgICB2YWwgPSB0aGlzLmdldEluZGVudCgpICsgdmFsO1xuICAgICAgfVxuXG4gICAgICAvLyBmb3JjZSBhIG5ld2xpbmUgZm9yIGxpbmUgY29tbWVudHMgd2hlbiByZXRhaW5MaW5lcyBpcyBzZXQgaW4gY2FzZSB0aGUgbmV4dCBwcmludGVkIG5vZGVcbiAgICAgIC8vIGRvZXNuJ3QgY2F0Y2ggdXBcbiAgICAgIGlmICgodGhpcy5mb3JtYXQuY29tcGFjdCB8fCB0aGlzLmZvcm1hdC5yZXRhaW5MaW5lcykgJiYgY29tbWVudC50eXBlID09PSBcIkNvbW1lbnRMaW5lXCIpIHtcbiAgICAgICAgdmFsICs9IFwiXFxuXCI7XG4gICAgICB9XG5cbiAgICAgIC8vXG4gICAgICB0aGlzLl9wdXNoKHZhbCk7XG5cbiAgICAgIC8vIHdoaXRlc3BhY2UgYWZ0ZXJcbiAgICAgIHRoaXMubmV3bGluZSh0aGlzLndoaXRlc3BhY2UuZ2V0TmV3bGluZXNBZnRlcihjb21tZW50KSk7XG4gICAgfVxuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhDb2RlR2VuZXJhdG9yLCBudWxsLCBbe1xuICAgIGtleTogXCJnZW5lcmF0b3JzXCIsXG4gICAgdmFsdWU6IHtcbiAgICAgIHRlbXBsYXRlTGl0ZXJhbHM6IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvdGVtcGxhdGUtbGl0ZXJhbHNcIiksXG4gICAgICBjb21wcmVoZW5zaW9uczogcmVxdWlyZShcIi4vZ2VuZXJhdG9ycy9jb21wcmVoZW5zaW9uc1wiKSxcbiAgICAgIGV4cHJlc3Npb25zOiByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2V4cHJlc3Npb25zXCIpLFxuICAgICAgc3RhdGVtZW50czogcmVxdWlyZShcIi4vZ2VuZXJhdG9ycy9zdGF0ZW1lbnRzXCIpLFxuICAgICAgY2xhc3NlczogcmVxdWlyZShcIi4vZ2VuZXJhdG9ycy9jbGFzc2VzXCIpLFxuICAgICAgbWV0aG9kczogcmVxdWlyZShcIi4vZ2VuZXJhdG9ycy9tZXRob2RzXCIpLFxuICAgICAgbW9kdWxlczogcmVxdWlyZShcIi4vZ2VuZXJhdG9ycy9tb2R1bGVzXCIpLFxuICAgICAgdHlwZXM6IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvdHlwZXNcIiksXG4gICAgICBmbG93OiByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2Zsb3dcIiksXG4gICAgICBiYXNlOiByZXF1aXJlKFwiLi9nZW5lcmF0b3JzL2Jhc2VcIiksXG4gICAgICBqc3g6IHJlcXVpcmUoXCIuL2dlbmVyYXRvcnMvanN4XCIpXG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlXG4gIH1dKTtcblxuICByZXR1cm4gQ29kZUdlbmVyYXRvcjtcbn0pKCk7XG5cbl9sb2Rhc2hDb2xsZWN0aW9uRWFjaDJbXCJkZWZhdWx0XCJdKF9idWZmZXIyW1wiZGVmYXVsdFwiXS5wcm90b3R5cGUsIGZ1bmN0aW9uIChmbiwga2V5KSB7XG4gIENvZGVHZW5lcmF0b3IucHJvdG90eXBlW2tleV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMuYnVmZmVyLCBhcmd1bWVudHMpO1xuICB9O1xufSk7XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuX2xvZGFzaENvbGxlY3Rpb25FYWNoMltcImRlZmF1bHRcIl0oQ29kZUdlbmVyYXRvci5nZW5lcmF0b3JzLCBmdW5jdGlvbiAoZ2VuZXJhdG9yKSB7XG4gIF9sb2Rhc2hPYmplY3RFeHRlbmQyW1wiZGVmYXVsdFwiXShDb2RlR2VuZXJhdG9yLnByb3RvdHlwZSwgZ2VuZXJhdG9yKTtcbn0pO1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFzdCwgb3B0cywgY29kZSkge1xuICB2YXIgZ2VuID0gbmV3IENvZGVHZW5lcmF0b3IoYXN0LCBvcHRzLCBjb2RlKTtcbiAgcmV0dXJuIGdlbi5nZW5lcmF0ZSgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMuQ29kZUdlbmVyYXRvciA9IENvZGVHZW5lcmF0b3I7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
