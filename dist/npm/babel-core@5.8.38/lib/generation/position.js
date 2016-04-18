/* */
"format cjs";
/**
 * Track current position in code generation.
 */

"use strict";

System.register([], function (_export, _context) {
  var Position;

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
      Position = function () {
        function Position() {
          _classCallCheck(this, Position);

          this.line = 1;
          this.column = 0;
        }

        /**
         * Push a string to the current position, mantaining the current line and column.
         */

        Position.prototype.push = function push(str) {
          for (var i = 0; i < str.length; i++) {
            if (str[i] === "\n") {
              this.line++;
              this.column = 0;
            } else {
              this.column++;
            }
          }
        };

        /**
         * Unshift a string from the current position, mantaining the current line and column.
         */

        Position.prototype.unshift = function unshift(str) {
          for (var i = 0; i < str.length; i++) {
            if (str[i] === "\n") {
              this.line--;
            } else {
              this.column--;
            }
          }
        };

        return Position;
      }();

      exports["default"] = Position;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvZ2VuZXJhdGlvbi9wb3NpdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7O0FBS0E7Ozs7Ozs7QUFLQSxXQUFTLGVBQVQsQ0FBeUIsUUFBekIsRUFBbUMsV0FBbkMsRUFBZ0Q7QUFBRSxRQUFJLEVBQUUsb0JBQW9CLFdBQXBCLENBQUYsRUFBb0M7QUFBRSxZQUFNLElBQUksU0FBSixDQUFjLG1DQUFkLENBQU4sQ0FBRjtLQUF4QztHQUFsRDs7Ozs7QUFIQSxjQUFRLFVBQVIsR0FBcUIsSUFBckI7QUFLSSxpQkFBVyxZQUFhO0FBQzFCLGlCQUFTLFFBQVQsR0FBb0I7QUFDbEIsMEJBQWdCLElBQWhCLEVBQXNCLFFBQXRCLEVBRGtCOztBQUdsQixlQUFLLElBQUwsR0FBWSxDQUFaLENBSGtCO0FBSWxCLGVBQUssTUFBTCxHQUFjLENBQWQsQ0FKa0I7U0FBcEI7Ozs7OztBQUQwQixnQkFZMUIsQ0FBUyxTQUFULENBQW1CLElBQW5CLEdBQTBCLFNBQVMsSUFBVCxDQUFjLEdBQWQsRUFBbUI7QUFDM0MsZUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksSUFBSSxNQUFKLEVBQVksR0FBaEMsRUFBcUM7QUFDbkMsZ0JBQUksSUFBSSxDQUFKLE1BQVcsSUFBWCxFQUFpQjtBQUNuQixtQkFBSyxJQUFMLEdBRG1CO0FBRW5CLG1CQUFLLE1BQUwsR0FBYyxDQUFkLENBRm1CO2FBQXJCLE1BR087QUFDTCxtQkFBSyxNQUFMLEdBREs7YUFIUDtXQURGO1NBRHdCOzs7Ozs7QUFaQSxnQkEyQjFCLENBQVMsU0FBVCxDQUFtQixPQUFuQixHQUE2QixTQUFTLE9BQVQsQ0FBaUIsR0FBakIsRUFBc0I7QUFDakQsZUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksSUFBSSxNQUFKLEVBQVksR0FBaEMsRUFBcUM7QUFDbkMsZ0JBQUksSUFBSSxDQUFKLE1BQVcsSUFBWCxFQUFpQjtBQUNuQixtQkFBSyxJQUFMLEdBRG1CO2FBQXJCLE1BRU87QUFDTCxtQkFBSyxNQUFMLEdBREs7YUFGUDtXQURGO1NBRDJCLENBM0JIOztBQXFDMUIsZUFBTyxRQUFQLENBckMwQjtPQUFaOztBQXdDaEIsY0FBUSxTQUFSLElBQXFCLFFBQXJCO0FBQ0EsYUFBTyxPQUFQLEdBQWlCLFFBQVEsU0FBUixDQUFqQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL2dlbmVyYXRpb24vcG9zaXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuLyoqXG4gKiBUcmFjayBjdXJyZW50IHBvc2l0aW9uIGluIGNvZGUgZ2VuZXJhdGlvbi5cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBQb3NpdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBvc2l0aW9uKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb3NpdGlvbik7XG5cbiAgICB0aGlzLmxpbmUgPSAxO1xuICAgIHRoaXMuY29sdW1uID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdXNoIGEgc3RyaW5nIHRvIHRoZSBjdXJyZW50IHBvc2l0aW9uLCBtYW50YWluaW5nIHRoZSBjdXJyZW50IGxpbmUgYW5kIGNvbHVtbi5cbiAgICovXG5cbiAgUG9zaXRpb24ucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoKHN0cikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc3RyW2ldID09PSBcIlxcblwiKSB7XG4gICAgICAgIHRoaXMubGluZSsrO1xuICAgICAgICB0aGlzLmNvbHVtbiA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbHVtbisrO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVW5zaGlmdCBhIHN0cmluZyBmcm9tIHRoZSBjdXJyZW50IHBvc2l0aW9uLCBtYW50YWluaW5nIHRoZSBjdXJyZW50IGxpbmUgYW5kIGNvbHVtbi5cbiAgICovXG5cbiAgUG9zaXRpb24ucHJvdG90eXBlLnVuc2hpZnQgPSBmdW5jdGlvbiB1bnNoaWZ0KHN0cikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc3RyW2ldID09PSBcIlxcblwiKSB7XG4gICAgICAgIHRoaXMubGluZS0tO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb2x1bW4tLTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFBvc2l0aW9uO1xufSkoKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBQb3NpdGlvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
