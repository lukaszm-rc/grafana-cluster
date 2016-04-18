/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _debugNode, _debugNode2, verboseDebug, generalDebug, seenDeprecatedMessages, Logger;

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
      exports.__esModule = true;_debugNode = require("debug/node");
      _debugNode2 = _interopRequireDefault(_debugNode);
      verboseDebug = _debugNode2["default"]("babel:verbose");
      generalDebug = _debugNode2["default"]("babel");
      seenDeprecatedMessages = [];

      Logger = function () {
        function Logger(file, filename) {
          _classCallCheck(this, Logger);

          this.filename = filename;
          this.file = file;
        }

        /**
         * [Please add a description.]
         */

        Logger.prototype._buildMessage = function _buildMessage(msg) {
          var parts = "[BABEL] " + this.filename;
          if (msg) parts += ": " + msg;
          return parts;
        };

        /**
         * [Please add a description.]
         */

        Logger.prototype.warn = function warn(msg) {
          console.warn(this._buildMessage(msg));
        };

        /**
         * [Please add a description.]
         */

        Logger.prototype.error = function error(msg) {
          var Constructor = arguments.length <= 1 || arguments[1] === undefined ? Error : arguments[1];

          throw new Constructor(this._buildMessage(msg));
        };

        /**
         * [Please add a description.]
         */

        Logger.prototype.deprecate = function deprecate(msg) {
          if (this.file.opts && this.file.opts.suppressDeprecationMessages) return;

          msg = this._buildMessage(msg);

          // already seen this message
          if (seenDeprecatedMessages.indexOf(msg) >= 0) return;

          // make sure we don't see it again
          seenDeprecatedMessages.push(msg);

          console.error(msg);
        };

        /**
         * [Please add a description.]
         */

        Logger.prototype.verbose = function verbose(msg) {
          if (verboseDebug.enabled) verboseDebug(this._buildMessage(msg));
        };

        /**
         * [Please add a description.]
         */

        Logger.prototype.debug = function debug(msg) {
          if (generalDebug.enabled) generalDebug(this._buildMessage(msg));
        };

        /**
         * [Please add a description.]
         */

        Logger.prototype.deopt = function deopt(node, msg) {
          this.debug(msg);
        };

        return Logger;
      }();

      exports["default"] = Logger;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vZmlsZS9sb2dnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBSixHQUFpQixHQUF4QixHQUE4QixFQUFFLFdBQVcsR0FBWCxFQUFoQyxDQUFUO0dBQXJDOzs7O0FBSUEsV0FBUyxlQUFULENBQXlCLFFBQXpCLEVBQW1DLFdBQW5DLEVBQWdEO0FBQUUsUUFBSSxFQUFFLG9CQUFvQixXQUFwQixDQUFGLEVBQW9DO0FBQUUsWUFBTSxJQUFJLFNBQUosQ0FBYyxtQ0FBZCxDQUFOLENBQUY7S0FBeEM7R0FBbEQ7Ozs7O0FBUEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBU0ksYUFBYSxRQUFRLFlBQVI7QUFFYixvQkFBYyx1QkFBdUIsVUFBdkI7QUFFZCxxQkFBZSxZQUFZLFNBQVosRUFBdUIsZUFBdkI7QUFDZixxQkFBZSxZQUFZLFNBQVosRUFBdUIsT0FBdkI7QUFFZiwrQkFBeUI7O0FBTXpCLGVBQVMsWUFBYTtBQUN4QixpQkFBUyxNQUFULENBQWdCLElBQWhCLEVBQXNCLFFBQXRCLEVBQWdDO0FBQzlCLDBCQUFnQixJQUFoQixFQUFzQixNQUF0QixFQUQ4Qjs7QUFHOUIsZUFBSyxRQUFMLEdBQWdCLFFBQWhCLENBSDhCO0FBSTlCLGVBQUssSUFBTCxHQUFZLElBQVosQ0FKOEI7U0FBaEM7Ozs7OztBQUR3QixjQVl4QixDQUFPLFNBQVAsQ0FBaUIsYUFBakIsR0FBaUMsU0FBUyxhQUFULENBQXVCLEdBQXZCLEVBQTRCO0FBQzNELGNBQUksUUFBUSxhQUFhLEtBQUssUUFBTCxDQURrQztBQUUzRCxjQUFJLEdBQUosRUFBUyxTQUFTLE9BQU8sR0FBUCxDQUFsQjtBQUNBLGlCQUFPLEtBQVAsQ0FIMkQ7U0FBNUI7Ozs7OztBQVpULGNBc0J4QixDQUFPLFNBQVAsQ0FBaUIsSUFBakIsR0FBd0IsU0FBUyxJQUFULENBQWMsR0FBZCxFQUFtQjtBQUN6QyxrQkFBUSxJQUFSLENBQWEsS0FBSyxhQUFMLENBQW1CLEdBQW5CLENBQWIsRUFEeUM7U0FBbkI7Ozs7OztBQXRCQSxjQThCeEIsQ0FBTyxTQUFQLENBQWlCLEtBQWpCLEdBQXlCLFNBQVMsS0FBVCxDQUFlLEdBQWYsRUFBb0I7QUFDM0MsY0FBSSxjQUFjLFVBQVUsTUFBVixJQUFvQixDQUFwQixJQUF5QixVQUFVLENBQVYsTUFBaUIsU0FBakIsR0FBNkIsS0FBdEQsR0FBOEQsVUFBVSxDQUFWLENBQTlELENBRHlCOztBQUczQyxnQkFBTSxJQUFJLFdBQUosQ0FBZ0IsS0FBSyxhQUFMLENBQW1CLEdBQW5CLENBQWhCLENBQU4sQ0FIMkM7U0FBcEI7Ozs7OztBQTlCRCxjQXdDeEIsQ0FBTyxTQUFQLENBQWlCLFNBQWpCLEdBQTZCLFNBQVMsU0FBVCxDQUFtQixHQUFuQixFQUF3QjtBQUNuRCxjQUFJLEtBQUssSUFBTCxDQUFVLElBQVYsSUFBa0IsS0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLDJCQUFmLEVBQTRDLE9BQWxFOztBQUVBLGdCQUFNLEtBQUssYUFBTCxDQUFtQixHQUFuQixDQUFOOzs7QUFIbUQsY0FNL0MsdUJBQXVCLE9BQXZCLENBQStCLEdBQS9CLEtBQXVDLENBQXZDLEVBQTBDLE9BQTlDOzs7QUFObUQsZ0NBU25ELENBQXVCLElBQXZCLENBQTRCLEdBQTVCLEVBVG1EOztBQVduRCxrQkFBUSxLQUFSLENBQWMsR0FBZCxFQVhtRDtTQUF4Qjs7Ozs7O0FBeENMLGNBMER4QixDQUFPLFNBQVAsQ0FBaUIsT0FBakIsR0FBMkIsU0FBUyxPQUFULENBQWlCLEdBQWpCLEVBQXNCO0FBQy9DLGNBQUksYUFBYSxPQUFiLEVBQXNCLGFBQWEsS0FBSyxhQUFMLENBQW1CLEdBQW5CLENBQWIsRUFBMUI7U0FEeUI7Ozs7OztBQTFESCxjQWtFeEIsQ0FBTyxTQUFQLENBQWlCLEtBQWpCLEdBQXlCLFNBQVMsS0FBVCxDQUFlLEdBQWYsRUFBb0I7QUFDM0MsY0FBSSxhQUFhLE9BQWIsRUFBc0IsYUFBYSxLQUFLLGFBQUwsQ0FBbUIsR0FBbkIsQ0FBYixFQUExQjtTQUR1Qjs7Ozs7O0FBbEVELGNBMEV4QixDQUFPLFNBQVAsQ0FBaUIsS0FBakIsR0FBeUIsU0FBUyxLQUFULENBQWUsSUFBZixFQUFxQixHQUFyQixFQUEwQjtBQUNqRCxlQUFLLEtBQUwsQ0FBVyxHQUFYLEVBRGlEO1NBQTFCLENBMUVEOztBQThFeEIsZUFBTyxNQUFQLENBOUV3QjtPQUFaOztBQWlGZCxjQUFRLFNBQVIsSUFBcUIsTUFBckI7QUFDQSxhQUFPLE9BQVAsR0FBaUIsUUFBUSxTQUFSLENBQWpCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vZmlsZS9sb2dnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIF9kZWJ1Z05vZGUgPSByZXF1aXJlKFwiZGVidWcvbm9kZVwiKTtcblxudmFyIF9kZWJ1Z05vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVidWdOb2RlKTtcblxudmFyIHZlcmJvc2VEZWJ1ZyA9IF9kZWJ1Z05vZGUyW1wiZGVmYXVsdFwiXShcImJhYmVsOnZlcmJvc2VcIik7XG52YXIgZ2VuZXJhbERlYnVnID0gX2RlYnVnTm9kZTJbXCJkZWZhdWx0XCJdKFwiYmFiZWxcIik7XG5cbnZhciBzZWVuRGVwcmVjYXRlZE1lc3NhZ2VzID0gW107XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIExvZ2dlciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIExvZ2dlcihmaWxlLCBmaWxlbmFtZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb2dnZXIpO1xuXG4gICAgdGhpcy5maWxlbmFtZSA9IGZpbGVuYW1lO1xuICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gIH1cblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIExvZ2dlci5wcm90b3R5cGUuX2J1aWxkTWVzc2FnZSA9IGZ1bmN0aW9uIF9idWlsZE1lc3NhZ2UobXNnKSB7XG4gICAgdmFyIHBhcnRzID0gXCJbQkFCRUxdIFwiICsgdGhpcy5maWxlbmFtZTtcbiAgICBpZiAobXNnKSBwYXJ0cyArPSBcIjogXCIgKyBtc2c7XG4gICAgcmV0dXJuIHBhcnRzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgTG9nZ2VyLnByb3RvdHlwZS53YXJuID0gZnVuY3Rpb24gd2Fybihtc2cpIHtcbiAgICBjb25zb2xlLndhcm4odGhpcy5fYnVpbGRNZXNzYWdlKG1zZykpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgTG9nZ2VyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIGVycm9yKG1zZykge1xuICAgIHZhciBDb25zdHJ1Y3RvciA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IEVycm9yIDogYXJndW1lbnRzWzFdO1xuXG4gICAgdGhyb3cgbmV3IENvbnN0cnVjdG9yKHRoaXMuX2J1aWxkTWVzc2FnZShtc2cpKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIExvZ2dlci5wcm90b3R5cGUuZGVwcmVjYXRlID0gZnVuY3Rpb24gZGVwcmVjYXRlKG1zZykge1xuICAgIGlmICh0aGlzLmZpbGUub3B0cyAmJiB0aGlzLmZpbGUub3B0cy5zdXBwcmVzc0RlcHJlY2F0aW9uTWVzc2FnZXMpIHJldHVybjtcblxuICAgIG1zZyA9IHRoaXMuX2J1aWxkTWVzc2FnZShtc2cpO1xuXG4gICAgLy8gYWxyZWFkeSBzZWVuIHRoaXMgbWVzc2FnZVxuICAgIGlmIChzZWVuRGVwcmVjYXRlZE1lc3NhZ2VzLmluZGV4T2YobXNnKSA+PSAwKSByZXR1cm47XG5cbiAgICAvLyBtYWtlIHN1cmUgd2UgZG9uJ3Qgc2VlIGl0IGFnYWluXG4gICAgc2VlbkRlcHJlY2F0ZWRNZXNzYWdlcy5wdXNoKG1zZyk7XG5cbiAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBMb2dnZXIucHJvdG90eXBlLnZlcmJvc2UgPSBmdW5jdGlvbiB2ZXJib3NlKG1zZykge1xuICAgIGlmICh2ZXJib3NlRGVidWcuZW5hYmxlZCkgdmVyYm9zZURlYnVnKHRoaXMuX2J1aWxkTWVzc2FnZShtc2cpKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIExvZ2dlci5wcm90b3R5cGUuZGVidWcgPSBmdW5jdGlvbiBkZWJ1Zyhtc2cpIHtcbiAgICBpZiAoZ2VuZXJhbERlYnVnLmVuYWJsZWQpIGdlbmVyYWxEZWJ1Zyh0aGlzLl9idWlsZE1lc3NhZ2UobXNnKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBMb2dnZXIucHJvdG90eXBlLmRlb3B0ID0gZnVuY3Rpb24gZGVvcHQobm9kZSwgbXNnKSB7XG4gICAgdGhpcy5kZWJ1Zyhtc2cpO1xuICB9O1xuXG4gIHJldHVybiBMb2dnZXI7XG59KSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IExvZ2dlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
