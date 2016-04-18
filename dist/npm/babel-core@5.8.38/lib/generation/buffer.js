/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _repeating, _repeating2, _trimRight, _trimRight2, _lodashLangIsBoolean, _lodashLangIsBoolean2, _lodashCollectionIncludes, _lodashCollectionIncludes2, _lodashLangIsNumber, _lodashLangIsNumber2, Buffer;

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
      exports.__esModule = true;_repeating = require("repeating");
      _repeating2 = _interopRequireDefault(_repeating);
      _trimRight = require("trim-right");
      _trimRight2 = _interopRequireDefault(_trimRight);
      _lodashLangIsBoolean = require("lodash/lang/isBoolean");
      _lodashLangIsBoolean2 = _interopRequireDefault(_lodashLangIsBoolean);
      _lodashCollectionIncludes = require("lodash/collection/includes");
      _lodashCollectionIncludes2 = _interopRequireDefault(_lodashCollectionIncludes);
      _lodashLangIsNumber = require("lodash/lang/isNumber");
      _lodashLangIsNumber2 = _interopRequireDefault(_lodashLangIsNumber);

      Buffer = function () {
        function Buffer(position, format) {
          _classCallCheck(this, Buffer);

          this.parenPushNewlineState = null;

          this.position = position;
          this._indent = format.indent.base;
          this.format = format;
          this.buf = "";
        }

        /**
         * Get the current trimmed buffer.
         */

        Buffer.prototype.get = function get() {
          return _trimRight2["default"](this.buf);
        };

        /**
         * Get the current indent.
         */

        Buffer.prototype.getIndent = function getIndent() {
          if (this.format.compact || this.format.concise) {
            return "";
          } else {
            return _repeating2["default"](this.format.indent.style, this._indent);
          }
        };

        /**
         * Get the current indent size.
         */

        Buffer.prototype.indentSize = function indentSize() {
          return this.getIndent().length;
        };

        /**
         * Increment indent size.
         */

        Buffer.prototype.indent = function indent() {
          this._indent++;
        };

        /**
         * Decrement indent size.
         */

        Buffer.prototype.dedent = function dedent() {
          this._indent--;
        };

        /**
         * Add a semicolon to the buffer.
         */

        Buffer.prototype.semicolon = function semicolon() {
          this.push(";");
        };

        /**
         * Ensure last character is a semicolon.
         */

        Buffer.prototype.ensureSemicolon = function ensureSemicolon() {
          if (!this.isLast(";")) this.semicolon();
        };

        /**
         * Add a right brace to the buffer.
         */

        Buffer.prototype.rightBrace = function rightBrace() {
          this.newline(true);
          //if (this.format.compact) this._removeLast(";");
          this.push("}");
        };

        /**
         * Add a keyword to the buffer.
         */

        Buffer.prototype.keyword = function keyword(name) {
          this.push(name);
          this.space();
        };

        /**
         * Add a space to the buffer unless it is compact (override with force).
         */

        Buffer.prototype.space = function space(force) {
          if (!force && this.format.compact) return;

          if (force || this.buf && !this.isLast(" ") && !this.isLast("\n")) {
            this.push(" ");
          }
        };

        /**
         * Remove the last character.
         */

        Buffer.prototype.removeLast = function removeLast(cha) {
          if (this.format.compact) return;
          return this._removeLast(cha);
        };

        Buffer.prototype._removeLast = function _removeLast(cha) {
          if (!this._isLast(cha)) return;
          this.buf = this.buf.substr(0, this.buf.length - 1);
          this.position.unshift(cha);
        };

        /**
         * Set some state that will be modified if a newline has been inserted before any
         * non-space characters.
         *
         * This is to prevent breaking semantics for terminatorless separator nodes. eg:
         *
         *    return foo;
         *
         * returns `foo`. But if we do:
         *
         *   return
         *   foo;
         *
         *  `undefined` will be returned and not `foo` due to the terminator.
         */

        Buffer.prototype.startTerminatorless = function startTerminatorless() {
          return this.parenPushNewlineState = {
            printed: false
          };
        };

        /**
         * Print an ending parentheses if a starting one has been printed.
         */

        Buffer.prototype.endTerminatorless = function endTerminatorless(state) {
          if (state.printed) {
            this.dedent();
            this.newline();
            this.push(")");
          }
        };

        /**
         * Add a newline (or many newlines), maintaining formatting.
         * Strips multiple newlines if removeLast is true.
         */

        Buffer.prototype.newline = function newline(i, removeLast) {
          if (this.format.compact || this.format.retainLines) return;

          if (this.format.concise) {
            this.space();
            return;
          }

          removeLast = removeLast || false;

          if (_lodashLangIsNumber2["default"](i)) {
            i = Math.min(2, i);

            if (this.endsWith("{\n") || this.endsWith(":\n")) i--;
            if (i <= 0) return;

            while (i > 0) {
              this._newline(removeLast);
              i--;
            }
            return;
          }

          if (_lodashLangIsBoolean2["default"](i)) {
            removeLast = i;
          }

          this._newline(removeLast);
        };

        /**
         * Adds a newline unless there is already two previous newlines.
         */

        Buffer.prototype._newline = function _newline(removeLast) {
          // never allow more than two lines
          if (this.endsWith("\n\n")) return;

          // remove the last newline
          if (removeLast && this.isLast("\n")) this.removeLast("\n");

          this.removeLast(" ");
          this._removeSpacesAfterLastNewline();
          this._push("\n");
        };

        /**
         * If buffer ends with a newline and some spaces after it, trim those spaces.
         */

        Buffer.prototype._removeSpacesAfterLastNewline = function _removeSpacesAfterLastNewline() {
          var lastNewlineIndex = this.buf.lastIndexOf("\n");
          if (lastNewlineIndex === -1) {
            return;
          }

          var index = this.buf.length - 1;
          while (index > lastNewlineIndex) {
            if (this.buf[index] !== " ") {
              break;
            }

            index--;
          }

          if (index === lastNewlineIndex) {
            this.buf = this.buf.substring(0, index + 1);
          }
        };

        /**
         * Push a string to the buffer, maintaining indentation and newlines.
         */

        Buffer.prototype.push = function push(str, noIndent) {
          if (!this.format.compact && this._indent && !noIndent && str !== "\n") {
            // we have an indent level and we aren't pushing a newline
            var indent = this.getIndent();

            // replace all newlines with newlines with the indentation
            str = str.replace(/\n/g, "\n" + indent);

            // we've got a newline before us so prepend on the indentation
            if (this.isLast("\n")) this._push(indent);
          }

          this._push(str);
        };

        /**
         * Push a string to the buffer.
         */

        Buffer.prototype._push = function _push(str) {
          // see startTerminatorless() instance method
          var parenPushNewlineState = this.parenPushNewlineState;
          if (parenPushNewlineState) {
            for (var i = 0; i < str.length; i++) {
              var cha = str[i];

              // we can ignore spaces since they wont interupt a terminatorless separator
              if (cha === " ") continue;

              this.parenPushNewlineState = null;

              if (cha === "\n" || cha === "/") {
                // we're going to break this terminator expression so we need to add a parentheses
                this._push("(");
                this.indent();
                parenPushNewlineState.printed = true;
              }

              break;
            }
          }

          //
          this.position.push(str);
          this.buf += str;
        };

        /**
         * Test if the buffer ends with a string.
         */

        Buffer.prototype.endsWith = function endsWith(str) {
          var buf = arguments.length <= 1 || arguments[1] === undefined ? this.buf : arguments[1];

          if (str.length === 1) {
            return buf[buf.length - 1] === str;
          } else {
            return buf.slice(-str.length) === str;
          }
        };

        /**
         * Test if a character is last in the buffer.
         */

        Buffer.prototype.isLast = function isLast(cha) {
          if (this.format.compact) return false;
          return this._isLast(cha);
        };

        Buffer.prototype._isLast = function _isLast(cha) {
          var buf = this.buf;
          var last = buf[buf.length - 1];

          if (Array.isArray(cha)) {
            return _lodashCollectionIncludes2["default"](cha, last);
          } else {
            return cha === last;
          }
        };

        return Buffer;
      }();

      exports["default"] = Buffer;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvZ2VuZXJhdGlvbi9idWZmZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBSixHQUFpQixHQUF4QixHQUE4QixFQUFFLFdBQVcsR0FBWCxFQUFoQyxDQUFUO0dBQXJDOzs7O0FBSUEsV0FBUyxlQUFULENBQXlCLFFBQXpCLEVBQW1DLFdBQW5DLEVBQWdEO0FBQUUsUUFBSSxFQUFFLG9CQUFvQixXQUFwQixDQUFGLEVBQW9DO0FBQUUsWUFBTSxJQUFJLFNBQUosQ0FBYyxtQ0FBZCxDQUFOLENBQUY7S0FBeEM7R0FBbEQ7Ozs7O0FBUEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBU0ksYUFBYSxRQUFRLFdBQVI7QUFFYixvQkFBYyx1QkFBdUIsVUFBdkI7QUFFZCxtQkFBYSxRQUFRLFlBQVI7QUFFYixvQkFBYyx1QkFBdUIsVUFBdkI7QUFFZCw2QkFBdUIsUUFBUSx1QkFBUjtBQUV2Qiw4QkFBd0IsdUJBQXVCLG9CQUF2QjtBQUV4QixrQ0FBNEIsUUFBUSw0QkFBUjtBQUU1QixtQ0FBNkIsdUJBQXVCLHlCQUF2QjtBQUU3Qiw0QkFBc0IsUUFBUSxzQkFBUjtBQUV0Qiw2QkFBdUIsdUJBQXVCLG1CQUF2Qjs7QUFNdkIsZUFBUyxZQUFhO0FBQ3hCLGlCQUFTLE1BQVQsQ0FBZ0IsUUFBaEIsRUFBMEIsTUFBMUIsRUFBa0M7QUFDaEMsMEJBQWdCLElBQWhCLEVBQXNCLE1BQXRCLEVBRGdDOztBQUdoQyxlQUFLLHFCQUFMLEdBQTZCLElBQTdCLENBSGdDOztBQUtoQyxlQUFLLFFBQUwsR0FBZ0IsUUFBaEIsQ0FMZ0M7QUFNaEMsZUFBSyxPQUFMLEdBQWUsT0FBTyxNQUFQLENBQWMsSUFBZCxDQU5pQjtBQU9oQyxlQUFLLE1BQUwsR0FBYyxNQUFkLENBUGdDO0FBUWhDLGVBQUssR0FB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QyxJQUEzQyxDQUFQLENBRHNCO1dBQXhCLE1BRU87QUFDTCxtQkFBTyxRQUFRLElBQVIsQ0FERjtXQUZQO1NBSnlCLENBN1NIOztBQXdUeEIsZUFBTyxNQUFQLENBeFR3QjtPQUFaOztBQTJUZCxjQUFRLFNBQVIsSUFBcUIsTUFBckI7QUFDQSxhQUFPLE9BQVAsR0FBaUIsUUFBUSxTQUFSLENBQWpCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvZ2VuZXJhdGlvbi9idWZmZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIF9yZXBlYXRpbmcgPSByZXF1aXJlKFwicmVwZWF0aW5nXCIpO1xuXG52YXIgX3JlcGVhdGluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZXBlYXRpbmcpO1xuXG52YXIgX3RyaW1SaWdodCA9IHJlcXVpcmUoXCJ0cmltLXJpZ2h0XCIpO1xuXG52YXIgX3RyaW1SaWdodDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmltUmlnaHQpO1xuXG52YXIgX2xvZGFzaExhbmdJc0Jvb2xlYW4gPSByZXF1aXJlKFwibG9kYXNoL2xhbmcvaXNCb29sZWFuXCIpO1xuXG52YXIgX2xvZGFzaExhbmdJc0Jvb2xlYW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoTGFuZ0lzQm9vbGVhbik7XG5cbnZhciBfbG9kYXNoQ29sbGVjdGlvbkluY2x1ZGVzID0gcmVxdWlyZShcImxvZGFzaC9jb2xsZWN0aW9uL2luY2x1ZGVzXCIpO1xuXG52YXIgX2xvZGFzaENvbGxlY3Rpb25JbmNsdWRlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hDb2xsZWN0aW9uSW5jbHVkZXMpO1xuXG52YXIgX2xvZGFzaExhbmdJc051bWJlciA9IHJlcXVpcmUoXCJsb2Rhc2gvbGFuZy9pc051bWJlclwiKTtcblxudmFyIF9sb2Rhc2hMYW5nSXNOdW1iZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoTGFuZ0lzTnVtYmVyKTtcblxuLyoqXG4gKiBCdWZmZXIgZm9yIGNvbGxlY3RpbmcgZ2VuZXJhdGVkIG91dHB1dC5cbiAqL1xuXG52YXIgQnVmZmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQnVmZmVyKHBvc2l0aW9uLCBmb3JtYXQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQnVmZmVyKTtcblxuICAgIHRoaXMucGFyZW5QdXNoTmV3bGluZVN0YXRlID0gbnVsbDtcblxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLl9pbmRlbnQgPSBmb3JtYXQuaW5kZW50LmJhc2U7XG4gICAgdGhpcy5mb3JtYXQgPSBmb3JtYXQ7XG4gICAgdGhpcy5idWYgPSBcIlwiO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCB0cmltbWVkIGJ1ZmZlci5cbiAgICovXG5cbiAgQnVmZmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF90cmltUmlnaHQyW1wiZGVmYXVsdFwiXSh0aGlzLmJ1Zik7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBpbmRlbnQuXG4gICAqL1xuXG4gIEJ1ZmZlci5wcm90b3R5cGUuZ2V0SW5kZW50ID0gZnVuY3Rpb24gZ2V0SW5kZW50KCkge1xuICAgIGlmICh0aGlzLmZvcm1hdC5jb21wYWN0IHx8IHRoaXMuZm9ybWF0LmNvbmNpc2UpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX3JlcGVhdGluZzJbXCJkZWZhdWx0XCJdKHRoaXMuZm9ybWF0LmluZGVudC5zdHlsZSwgdGhpcy5faW5kZW50KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBpbmRlbnQgc2l6ZS5cbiAgICovXG5cbiAgQnVmZmVyLnByb3RvdHlwZS5pbmRlbnRTaXplID0gZnVuY3Rpb24gaW5kZW50U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRJbmRlbnQoKS5sZW5ndGg7XG4gIH07XG5cbiAgLyoqXG4gICAqIEluY3JlbWVudCBpbmRlbnQgc2l6ZS5cbiAgICovXG5cbiAgQnVmZmVyLnByb3RvdHlwZS5pbmRlbnQgPSBmdW5jdGlvbiBpbmRlbnQoKSB7XG4gICAgdGhpcy5faW5kZW50Kys7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlY3JlbWVudCBpbmRlbnQgc2l6ZS5cbiAgICovXG5cbiAgQnVmZmVyLnByb3RvdHlwZS5kZWRlbnQgPSBmdW5jdGlvbiBkZWRlbnQoKSB7XG4gICAgdGhpcy5faW5kZW50LS07XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBhIHNlbWljb2xvbiB0byB0aGUgYnVmZmVyLlxuICAgKi9cblxuICBCdWZmZXIucHJvdG90eXBlLnNlbWljb2xvbiA9IGZ1bmN0aW9uIHNlbWljb2xvbigpIHtcbiAgICB0aGlzLnB1c2goXCI7XCIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFbnN1cmUgbGFzdCBjaGFyYWN0ZXIgaXMgYSBzZW1pY29sb24uXG4gICAqL1xuXG4gIEJ1ZmZlci5wcm90b3R5cGUuZW5zdXJlU2VtaWNvbG9uID0gZnVuY3Rpb24gZW5zdXJlU2VtaWNvbG9uKCkge1xuICAgIGlmICghdGhpcy5pc0xhc3QoXCI7XCIpKSB0aGlzLnNlbWljb2xvbigpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgYSByaWdodCBicmFjZSB0byB0aGUgYnVmZmVyLlxuICAgKi9cblxuICBCdWZmZXIucHJvdG90eXBlLnJpZ2h0QnJhY2UgPSBmdW5jdGlvbiByaWdodEJyYWNlKCkge1xuICAgIHRoaXMubmV3bGluZSh0cnVlKTtcbiAgICAvL2lmICh0aGlzLmZvcm1hdC5jb21wYWN0KSB0aGlzLl9yZW1vdmVMYXN0KFwiO1wiKTtcbiAgICB0aGlzLnB1c2goXCJ9XCIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgYSBrZXl3b3JkIHRvIHRoZSBidWZmZXIuXG4gICAqL1xuXG4gIEJ1ZmZlci5wcm90b3R5cGUua2V5d29yZCA9IGZ1bmN0aW9uIGtleXdvcmQobmFtZSkge1xuICAgIHRoaXMucHVzaChuYW1lKTtcbiAgICB0aGlzLnNwYWNlKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBhIHNwYWNlIHRvIHRoZSBidWZmZXIgdW5sZXNzIGl0IGlzIGNvbXBhY3QgKG92ZXJyaWRlIHdpdGggZm9yY2UpLlxuICAgKi9cblxuICBCdWZmZXIucHJvdG90eXBlLnNwYWNlID0gZnVuY3Rpb24gc3BhY2UoZm9yY2UpIHtcbiAgICBpZiAoIWZvcmNlICYmIHRoaXMuZm9ybWF0LmNvbXBhY3QpIHJldHVybjtcblxuICAgIGlmIChmb3JjZSB8fCB0aGlzLmJ1ZiAmJiAhdGhpcy5pc0xhc3QoXCIgXCIpICYmICF0aGlzLmlzTGFzdChcIlxcblwiKSkge1xuICAgICAgdGhpcy5wdXNoKFwiIFwiKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgbGFzdCBjaGFyYWN0ZXIuXG4gICAqL1xuXG4gIEJ1ZmZlci5wcm90b3R5cGUucmVtb3ZlTGFzdCA9IGZ1bmN0aW9uIHJlbW92ZUxhc3QoY2hhKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0LmNvbXBhY3QpIHJldHVybjtcbiAgICByZXR1cm4gdGhpcy5fcmVtb3ZlTGFzdChjaGEpO1xuICB9O1xuXG4gIEJ1ZmZlci5wcm90b3R5cGUuX3JlbW92ZUxhc3QgPSBmdW5jdGlvbiBfcmVtb3ZlTGFzdChjaGEpIHtcbiAgICBpZiAoIXRoaXMuX2lzTGFzdChjaGEpKSByZXR1cm47XG4gICAgdGhpcy5idWYgPSB0aGlzLmJ1Zi5zdWJzdHIoMCwgdGhpcy5idWYubGVuZ3RoIC0gMSk7XG4gICAgdGhpcy5wb3NpdGlvbi51bnNoaWZ0KGNoYSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCBzb21lIHN0YXRlIHRoYXQgd2lsbCBiZSBtb2RpZmllZCBpZiBhIG5ld2xpbmUgaGFzIGJlZW4gaW5zZXJ0ZWQgYmVmb3JlIGFueVxuICAgKiBub24tc3BhY2UgY2hhcmFjdGVycy5cbiAgICpcbiAgICogVGhpcyBpcyB0byBwcmV2ZW50IGJyZWFraW5nIHNlbWFudGljcyBmb3IgdGVybWluYXRvcmxlc3Mgc2VwYXJhdG9yIG5vZGVzLiBlZzpcbiAgICpcbiAgICogICAgcmV0dXJuIGZvbztcbiAgICpcbiAgICogcmV0dXJucyBgZm9vYC4gQnV0IGlmIHdlIGRvOlxuICAgKlxuICAgKiAgIHJldHVyblxuICAgKiAgIGZvbztcbiAgICpcbiAgICogIGB1bmRlZmluZWRgIHdpbGwgYmUgcmV0dXJuZWQgYW5kIG5vdCBgZm9vYCBkdWUgdG8gdGhlIHRlcm1pbmF0b3IuXG4gICAqL1xuXG4gIEJ1ZmZlci5wcm90b3R5cGUuc3RhcnRUZXJtaW5hdG9ybGVzcyA9IGZ1bmN0aW9uIHN0YXJ0VGVybWluYXRvcmxlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW5QdXNoTmV3bGluZVN0YXRlID0ge1xuICAgICAgcHJpbnRlZDogZmFsc2VcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcmludCBhbiBlbmRpbmcgcGFyZW50aGVzZXMgaWYgYSBzdGFydGluZyBvbmUgaGFzIGJlZW4gcHJpbnRlZC5cbiAgICovXG5cbiAgQnVmZmVyLnByb3RvdHlwZS5lbmRUZXJtaW5hdG9ybGVzcyA9IGZ1bmN0aW9uIGVuZFRlcm1pbmF0b3JsZXNzKHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLnByaW50ZWQpIHtcbiAgICAgIHRoaXMuZGVkZW50KCk7XG4gICAgICB0aGlzLm5ld2xpbmUoKTtcbiAgICAgIHRoaXMucHVzaChcIilcIik7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXdsaW5lIChvciBtYW55IG5ld2xpbmVzKSwgbWFpbnRhaW5pbmcgZm9ybWF0dGluZy5cbiAgICogU3RyaXBzIG11bHRpcGxlIG5ld2xpbmVzIGlmIHJlbW92ZUxhc3QgaXMgdHJ1ZS5cbiAgICovXG5cbiAgQnVmZmVyLnByb3RvdHlwZS5uZXdsaW5lID0gZnVuY3Rpb24gbmV3bGluZShpLCByZW1vdmVMYXN0KSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0LmNvbXBhY3QgfHwgdGhpcy5mb3JtYXQucmV0YWluTGluZXMpIHJldHVybjtcblxuICAgIGlmICh0aGlzLmZvcm1hdC5jb25jaXNlKSB7XG4gICAgICB0aGlzLnNwYWNlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmVtb3ZlTGFzdCA9IHJlbW92ZUxhc3QgfHwgZmFsc2U7XG5cbiAgICBpZiAoX2xvZGFzaExhbmdJc051bWJlcjJbXCJkZWZhdWx0XCJdKGkpKSB7XG4gICAgICBpID0gTWF0aC5taW4oMiwgaSk7XG5cbiAgICAgIGlmICh0aGlzLmVuZHNXaXRoKFwie1xcblwiKSB8fCB0aGlzLmVuZHNXaXRoKFwiOlxcblwiKSkgaS0tO1xuICAgICAgaWYgKGkgPD0gMCkgcmV0dXJuO1xuXG4gICAgICB3aGlsZSAoaSA+IDApIHtcbiAgICAgICAgdGhpcy5fbmV3bGluZShyZW1vdmVMYXN0KTtcbiAgICAgICAgaS0tO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfbG9kYXNoTGFuZ0lzQm9vbGVhbjJbXCJkZWZhdWx0XCJdKGkpKSB7XG4gICAgICByZW1vdmVMYXN0ID0gaTtcbiAgICB9XG5cbiAgICB0aGlzLl9uZXdsaW5lKHJlbW92ZUxhc3QpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGRzIGEgbmV3bGluZSB1bmxlc3MgdGhlcmUgaXMgYWxyZWFkeSB0d28gcHJldmlvdXMgbmV3bGluZXMuXG4gICAqL1xuXG4gIEJ1ZmZlci5wcm90b3R5cGUuX25ld2xpbmUgPSBmdW5jdGlvbiBfbmV3bGluZShyZW1vdmVMYXN0KSB7XG4gICAgLy8gbmV2ZXIgYWxsb3cgbW9yZSB0aGFuIHR3byBsaW5lc1xuICAgIGlmICh0aGlzLmVuZHNXaXRoKFwiXFxuXFxuXCIpKSByZXR1cm47XG5cbiAgICAvLyByZW1vdmUgdGhlIGxhc3QgbmV3bGluZVxuICAgIGlmIChyZW1vdmVMYXN0ICYmIHRoaXMuaXNMYXN0KFwiXFxuXCIpKSB0aGlzLnJlbW92ZUxhc3QoXCJcXG5cIik7XG5cbiAgICB0aGlzLnJlbW92ZUxhc3QoXCIgXCIpO1xuICAgIHRoaXMuX3JlbW92ZVNwYWNlc0FmdGVyTGFzdE5ld2xpbmUoKTtcbiAgICB0aGlzLl9wdXNoKFwiXFxuXCIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJZiBidWZmZXIgZW5kcyB3aXRoIGEgbmV3bGluZSBhbmQgc29tZSBzcGFjZXMgYWZ0ZXIgaXQsIHRyaW0gdGhvc2Ugc3BhY2VzLlxuICAgKi9cblxuICBCdWZmZXIucHJvdG90eXBlLl9yZW1vdmVTcGFjZXNBZnRlckxhc3ROZXdsaW5lID0gZnVuY3Rpb24gX3JlbW92ZVNwYWNlc0FmdGVyTGFzdE5ld2xpbmUoKSB7XG4gICAgdmFyIGxhc3ROZXdsaW5lSW5kZXggPSB0aGlzLmJ1Zi5sYXN0SW5kZXhPZihcIlxcblwiKTtcbiAgICBpZiAobGFzdE5ld2xpbmVJbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLmJ1Zi5sZW5ndGggLSAxO1xuICAgIHdoaWxlIChpbmRleCA+IGxhc3ROZXdsaW5lSW5kZXgpIHtcbiAgICAgIGlmICh0aGlzLmJ1ZltpbmRleF0gIT09IFwiIFwiKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpbmRleC0tO1xuICAgIH1cblxuICAgIGlmIChpbmRleCA9PT0gbGFzdE5ld2xpbmVJbmRleCkge1xuICAgICAgdGhpcy5idWYgPSB0aGlzLmJ1Zi5zdWJzdHJpbmcoMCwgaW5kZXggKyAxKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFB1c2ggYSBzdHJpbmcgdG8gdGhlIGJ1ZmZlciwgbWFpbnRhaW5pbmcgaW5kZW50YXRpb24gYW5kIG5ld2xpbmVzLlxuICAgKi9cblxuICBCdWZmZXIucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoKHN0ciwgbm9JbmRlbnQpIHtcbiAgICBpZiAoIXRoaXMuZm9ybWF0LmNvbXBhY3QgJiYgdGhpcy5faW5kZW50ICYmICFub0luZGVudCAmJiBzdHIgIT09IFwiXFxuXCIpIHtcbiAgICAgIC8vIHdlIGhhdmUgYW4gaW5kZW50IGxldmVsIGFuZCB3ZSBhcmVuJ3QgcHVzaGluZyBhIG5ld2xpbmVcbiAgICAgIHZhciBpbmRlbnQgPSB0aGlzLmdldEluZGVudCgpO1xuXG4gICAgICAvLyByZXBsYWNlIGFsbCBuZXdsaW5lcyB3aXRoIG5ld2xpbmVzIHdpdGggdGhlIGluZGVudGF0aW9uXG4gICAgICBzdHIgPSBzdHIucmVwbGFjZSgvXFxuL2csIFwiXFxuXCIgKyBpbmRlbnQpO1xuXG4gICAgICAvLyB3ZSd2ZSBnb3QgYSBuZXdsaW5lIGJlZm9yZSB1cyBzbyBwcmVwZW5kIG9uIHRoZSBpbmRlbnRhdGlvblxuICAgICAgaWYgKHRoaXMuaXNMYXN0KFwiXFxuXCIpKSB0aGlzLl9wdXNoKGluZGVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5fcHVzaChzdHIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQdXNoIGEgc3RyaW5nIHRvIHRoZSBidWZmZXIuXG4gICAqL1xuXG4gIEJ1ZmZlci5wcm90b3R5cGUuX3B1c2ggPSBmdW5jdGlvbiBfcHVzaChzdHIpIHtcbiAgICAvLyBzZWUgc3RhcnRUZXJtaW5hdG9ybGVzcygpIGluc3RhbmNlIG1ldGhvZFxuICAgIHZhciBwYXJlblB1c2hOZXdsaW5lU3RhdGUgPSB0aGlzLnBhcmVuUHVzaE5ld2xpbmVTdGF0ZTtcbiAgICBpZiAocGFyZW5QdXNoTmV3bGluZVN0YXRlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hhID0gc3RyW2ldO1xuXG4gICAgICAgIC8vIHdlIGNhbiBpZ25vcmUgc3BhY2VzIHNpbmNlIHRoZXkgd29udCBpbnRlcnVwdCBhIHRlcm1pbmF0b3JsZXNzIHNlcGFyYXRvclxuICAgICAgICBpZiAoY2hhID09PSBcIiBcIikgY29udGludWU7XG5cbiAgICAgICAgdGhpcy5wYXJlblB1c2hOZXdsaW5lU3RhdGUgPSBudWxsO1xuXG4gICAgICAgIGlmIChjaGEgPT09IFwiXFxuXCIgfHwgY2hhID09PSBcIi9cIikge1xuICAgICAgICAgIC8vIHdlJ3JlIGdvaW5nIHRvIGJyZWFrIHRoaXMgdGVybWluYXRvciBleHByZXNzaW9uIHNvIHdlIG5lZWQgdG8gYWRkIGEgcGFyZW50aGVzZXNcbiAgICAgICAgICB0aGlzLl9wdXNoKFwiKFwiKTtcbiAgICAgICAgICB0aGlzLmluZGVudCgpO1xuICAgICAgICAgIHBhcmVuUHVzaE5ld2xpbmVTdGF0ZS5wcmludGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vXG4gICAgdGhpcy5wb3NpdGlvbi5wdXNoKHN0cik7XG4gICAgdGhpcy5idWYgKz0gc3RyO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUZXN0IGlmIHRoZSBidWZmZXIgZW5kcyB3aXRoIGEgc3RyaW5nLlxuICAgKi9cblxuICBCdWZmZXIucHJvdG90eXBlLmVuZHNXaXRoID0gZnVuY3Rpb24gZW5kc1dpdGgoc3RyKSB7XG4gICAgdmFyIGJ1ZiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHRoaXMuYnVmIDogYXJndW1lbnRzWzFdO1xuXG4gICAgaWYgKHN0ci5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiBidWZbYnVmLmxlbmd0aCAtIDFdID09PSBzdHI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYuc2xpY2UoLXN0ci5sZW5ndGgpID09PSBzdHI7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBUZXN0IGlmIGEgY2hhcmFjdGVyIGlzIGxhc3QgaW4gdGhlIGJ1ZmZlci5cbiAgICovXG5cbiAgQnVmZmVyLnByb3RvdHlwZS5pc0xhc3QgPSBmdW5jdGlvbiBpc0xhc3QoY2hhKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0LmNvbXBhY3QpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5faXNMYXN0KGNoYSk7XG4gIH07XG5cbiAgQnVmZmVyLnByb3RvdHlwZS5faXNMYXN0ID0gZnVuY3Rpb24gX2lzTGFzdChjaGEpIHtcbiAgICB2YXIgYnVmID0gdGhpcy5idWY7XG4gICAgdmFyIGxhc3QgPSBidWZbYnVmLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hhKSkge1xuICAgICAgcmV0dXJuIF9sb2Rhc2hDb2xsZWN0aW9uSW5jbHVkZXMyW1wiZGVmYXVsdFwiXShjaGEsIGxhc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY2hhID09PSBsYXN0O1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gQnVmZmVyO1xufSkoKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBCdWZmZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
