/* */
"format cjs";
/**
 * Returns `i`th number from `base`, continuing from 0 when `max` is reached.
 * Useful for shifting `for` loop by a fixed number but going over all items.
 *
 * @param {Number} i Current index in the loop
 * @param {Number} base Start index for which to return 0
 * @param {Number} max Array length
 * @returns {Number} shiftedIndex
 */

"use strict";

System.register([], function (_export, _context) {
  var Whitespace;

  // istanbul ignore next

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function getLookupIndex(i, base, max) {
    i += base;

    if (i >= max) {
      i -= max;
    }

    return i;
  }

  /**
   * Get whitespace around tokens.
   */

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      Whitespace = function () {
        function Whitespace(tokens) {
          _classCallCheck(this, Whitespace);

          this.tokens = tokens;
          this.used = {};

          // Profiling this code shows that while generator passes over it, indexes
          // returned by `getNewlinesBefore` and `getNewlinesAfter` are always increasing.

          // We use this implementation detail for an optimization: instead of always
          // starting to look from `this.tokens[0]`, we will start `for` loops from the
          // previous successful match. We will enumerate all tokens—but the common
          // case will be much faster.

          this._lastFoundIndex = 0;
        }

        /**
         * Count all the newlines before a node.
         */

        Whitespace.prototype.getNewlinesBefore = function getNewlinesBefore(node) {
          var startToken;
          var endToken;
          var tokens = this.tokens;

          for (var j = 0; j < tokens.length; j++) {
            // optimize for forward traversal by shifting for loop index
            var i = getLookupIndex(j, this._lastFoundIndex, this.tokens.length);
            var token = tokens[i];

            // this is the token this node starts with
            if (node.start === token.start) {
              startToken = tokens[i - 1];
              endToken = token;

              this._lastFoundIndex = i;
              break;
            }
          }

          return this.getNewlinesBetween(startToken, endToken);
        };

        /**
         * Count all the newlines after a node.
         */

        Whitespace.prototype.getNewlinesAfter = function getNewlinesAfter(node) {
          var startToken;
          var endToken;
          var tokens = this.tokens;

          for (var j = 0; j < tokens.length; j++) {
            // optimize for forward traversal by shifting for loop index
            var i = getLookupIndex(j, this._lastFoundIndex, this.tokens.length);
            var token = tokens[i];

            // this is the token this node ends with
            if (node.end === token.end) {
              startToken = token;
              endToken = tokens[i + 1];
              if (endToken.type.label === ",") endToken = tokens[i + 2];

              this._lastFoundIndex = i;
              break;
            }
          }

          if (endToken && endToken.type.label === "eof") {
            return 1;
          } else {
            var lines = this.getNewlinesBetween(startToken, endToken);
            if (node.type === "CommentLine" && !lines) {
              // line comment
              return 1;
            } else {
              return lines;
            }
          }
        };

        /**
         * Count all the newlines between two tokens.
         */

        Whitespace.prototype.getNewlinesBetween = function getNewlinesBetween(startToken, endToken) {
          if (!endToken || !endToken.loc) return 0;

          var start = startToken ? startToken.loc.end.line : 1;
          var end = endToken.loc.start.line;
          var lines = 0;

          for (var line = start; line < end; line++) {
            if (typeof this.used[line] === "undefined") {
              this.used[line] = true;
              lines++;
            }
          }

          return lines;
        };

        return Whitespace;
      }();

      exports["default"] = Whitespace;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvZ2VuZXJhdGlvbi93aGl0ZXNwYWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7OztBQUtBLFdBQVMsZUFBVCxDQUF5QixRQUF6QixFQUFtQyxXQUFuQyxFQUFnRDtBQUFFLFFBQUksRUFBRSxvQkFBb0IsV0FBcEIsQ0FBRixFQUFvQztBQUFFLFlBQU0sSUFBSSxTQUFKLENBQWMsbUNBQWQsQ0FBTixDQUFGO0tBQXhDO0dBQWxEOztBQUVBLFdBQVMsY0FBVCxDQUF3QixDQUF4QixFQUEyQixJQUEzQixFQUFpQyxHQUFqQyxFQUFzQztBQUNwQyxTQUFLLElBQUwsQ0FEb0M7O0FBR3BDLFFBQUksS0FBSyxHQUFMLEVBQVU7QUFDWixXQUFLLEdBQUwsQ0FEWTtLQUFkOztBQUlBLFdBQU8sQ0FBUCxDQVBvQztHQUF0Qzs7Ozs7Ozs7O0FBTEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCO0FBbUJJLG1CQUFhLFlBQWE7QUFDNUIsaUJBQVMsVUFBVCxDQUFvQixNQUFwQixFQUE0QjtBQUMxQiwwQkFBZ0IsSUFBaEIsRUFBc0IsVUFBdEIsRUFEMEI7O0FBRzFCLGVBQUssTUFBTCxHQUFjLE1BQWQsQ0FIMEI7QUFJMUIsZUFBSyxJQUFMLEdBQVksRUFBWjs7Ozs7Ozs7OztBQUowQixjQWMxQixDQUFLLGVBQUwsR0FBdUIsQ0FBdkIsQ0FkMEI7U0FBNUI7Ozs7OztBQUQ0QixrQkFzQjVCLENBQVcsU0FBWCxDQUFxQixpQkFBckIsR0FBeUMsU0FBUyxpQkFBVCxDQUEyQixJQUEzQixFQUFpQztBQUN4RSxjQUFJLFVBQUosQ0FEd0U7QUFFeEUsY0FBSSxRQUFKLENBRndFO0FBR3hFLGNBQUksU0FBUyxLQUFLLE1BQUwsQ0FIMkQ7O0FBS3hFLGVBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLE9BQU8sTUFBUCxFQUFlLEdBQW5DLEVBQXdDOztBQUV0QyxnQkFBSSxJQUFJLGVB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akIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi9nZW5lcmF0aW9uL3doaXRlc3BhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuLyoqXG4gKiBSZXR1cm5zIGBpYHRoIG51bWJlciBmcm9tIGBiYXNlYCwgY29udGludWluZyBmcm9tIDAgd2hlbiBgbWF4YCBpcyByZWFjaGVkLlxuICogVXNlZnVsIGZvciBzaGlmdGluZyBgZm9yYCBsb29wIGJ5IGEgZml4ZWQgbnVtYmVyIGJ1dCBnb2luZyBvdmVyIGFsbCBpdGVtcy5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaSBDdXJyZW50IGluZGV4IGluIHRoZSBsb29wXG4gKiBAcGFyYW0ge051bWJlcn0gYmFzZSBTdGFydCBpbmRleCBmb3Igd2hpY2ggdG8gcmV0dXJuIDBcbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXggQXJyYXkgbGVuZ3RoXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzaGlmdGVkSW5kZXhcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIGdldExvb2t1cEluZGV4KGksIGJhc2UsIG1heCkge1xuICBpICs9IGJhc2U7XG5cbiAgaWYgKGkgPj0gbWF4KSB7XG4gICAgaSAtPSBtYXg7XG4gIH1cblxuICByZXR1cm4gaTtcbn1cblxuLyoqXG4gKiBHZXQgd2hpdGVzcGFjZSBhcm91bmQgdG9rZW5zLlxuICovXG5cbnZhciBXaGl0ZXNwYWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gV2hpdGVzcGFjZSh0b2tlbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2hpdGVzcGFjZSk7XG5cbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLnVzZWQgPSB7fTtcblxuICAgIC8vIFByb2ZpbGluZyB0aGlzIGNvZGUgc2hvd3MgdGhhdCB3aGlsZSBnZW5lcmF0b3IgcGFzc2VzIG92ZXIgaXQsIGluZGV4ZXNcbiAgICAvLyByZXR1cm5lZCBieSBgZ2V0TmV3bGluZXNCZWZvcmVgIGFuZCBgZ2V0TmV3bGluZXNBZnRlcmAgYXJlIGFsd2F5cyBpbmNyZWFzaW5nLlxuXG4gICAgLy8gV2UgdXNlIHRoaXMgaW1wbGVtZW50YXRpb24gZGV0YWlsIGZvciBhbiBvcHRpbWl6YXRpb246IGluc3RlYWQgb2YgYWx3YXlzXG4gICAgLy8gc3RhcnRpbmcgdG8gbG9vayBmcm9tIGB0aGlzLnRva2Vuc1swXWAsIHdlIHdpbGwgc3RhcnQgYGZvcmAgbG9vcHMgZnJvbSB0aGVcbiAgICAvLyBwcmV2aW91cyBzdWNjZXNzZnVsIG1hdGNoLiBXZSB3aWxsIGVudW1lcmF0ZSBhbGwgdG9rZW5z4oCUYnV0IHRoZSBjb21tb25cbiAgICAvLyBjYXNlIHdpbGwgYmUgbXVjaCBmYXN0ZXIuXG5cbiAgICB0aGlzLl9sYXN0Rm91bmRJbmRleCA9IDA7XG4gIH1cblxuICAvKipcbiAgICogQ291bnQgYWxsIHRoZSBuZXdsaW5lcyBiZWZvcmUgYSBub2RlLlxuICAgKi9cblxuICBXaGl0ZXNwYWNlLnByb3RvdHlwZS5nZXROZXdsaW5lc0JlZm9yZSA9IGZ1bmN0aW9uIGdldE5ld2xpbmVzQmVmb3JlKG5vZGUpIHtcbiAgICB2YXIgc3RhcnRUb2tlbjtcbiAgICB2YXIgZW5kVG9rZW47XG4gICAgdmFyIHRva2VucyA9IHRoaXMudG9rZW5zO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0b2tlbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vIG9wdGltaXplIGZvciBmb3J3YXJkIHRyYXZlcnNhbCBieSBzaGlmdGluZyBmb3IgbG9vcCBpbmRleFxuICAgICAgdmFyIGkgPSBnZXRMb29rdXBJbmRleChqLCB0aGlzLl9sYXN0Rm91bmRJbmRleCwgdGhpcy50b2tlbnMubGVuZ3RoKTtcbiAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcblxuICAgICAgLy8gdGhpcyBpcyB0aGUgdG9rZW4gdGhpcyBub2RlIHN0YXJ0cyB3aXRoXG4gICAgICBpZiAobm9kZS5zdGFydCA9PT0gdG9rZW4uc3RhcnQpIHtcbiAgICAgICAgc3RhcnRUb2tlbiA9IHRva2Vuc1tpIC0gMV07XG4gICAgICAgIGVuZFRva2VuID0gdG9rZW47XG5cbiAgICAgICAgdGhpcy5fbGFzdEZvdW5kSW5kZXggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5nZXROZXdsaW5lc0JldHdlZW4oc3RhcnRUb2tlbiwgZW5kVG9rZW4pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb3VudCBhbGwgdGhlIG5ld2xpbmVzIGFmdGVyIGEgbm9kZS5cbiAgICovXG5cbiAgV2hpdGVzcGFjZS5wcm90b3R5cGUuZ2V0TmV3bGluZXNBZnRlciA9IGZ1bmN0aW9uIGdldE5ld2xpbmVzQWZ0ZXIobm9kZSkge1xuICAgIHZhciBzdGFydFRva2VuO1xuICAgIHZhciBlbmRUb2tlbjtcbiAgICB2YXIgdG9rZW5zID0gdGhpcy50b2tlbnM7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRva2Vucy5sZW5ndGg7IGorKykge1xuICAgICAgLy8gb3B0aW1pemUgZm9yIGZvcndhcmQgdHJhdmVyc2FsIGJ5IHNoaWZ0aW5nIGZvciBsb29wIGluZGV4XG4gICAgICB2YXIgaSA9IGdldExvb2t1cEluZGV4KGosIHRoaXMuX2xhc3RGb3VuZEluZGV4LCB0aGlzLnRva2Vucy5sZW5ndGgpO1xuICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuXG4gICAgICAvLyB0aGlzIGlzIHRoZSB0b2tlbiB0aGlzIG5vZGUgZW5kcyB3aXRoXG4gICAgICBpZiAobm9kZS5lbmQgPT09IHRva2VuLmVuZCkge1xuICAgICAgICBzdGFydFRva2VuID0gdG9rZW47XG4gICAgICAgIGVuZFRva2VuID0gdG9rZW5zW2kgKyAxXTtcbiAgICAgICAgaWYgKGVuZFRva2VuLnR5cGUubGFiZWwgPT09IFwiLFwiKSBlbmRUb2tlbiA9IHRva2Vuc1tpICsgMl07XG5cbiAgICAgICAgdGhpcy5fbGFzdEZvdW5kSW5kZXggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZW5kVG9rZW4gJiYgZW5kVG9rZW4udHlwZS5sYWJlbCA9PT0gXCJlb2ZcIikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBsaW5lcyA9IHRoaXMuZ2V0TmV3bGluZXNCZXR3ZWVuKHN0YXJ0VG9rZW4sIGVuZFRva2VuKTtcbiAgICAgIGlmIChub2RlLnR5cGUgPT09IFwiQ29tbWVudExpbmVcIiAmJiAhbGluZXMpIHtcbiAgICAgICAgLy8gbGluZSBjb21tZW50XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ291bnQgYWxsIHRoZSBuZXdsaW5lcyBiZXR3ZWVuIHR3byB0b2tlbnMuXG4gICAqL1xuXG4gIFdoaXRlc3BhY2UucHJvdG90eXBlLmdldE5ld2xpbmVzQmV0d2VlbiA9IGZ1bmN0aW9uIGdldE5ld2xpbmVzQmV0d2VlbihzdGFydFRva2VuLCBlbmRUb2tlbikge1xuICAgIGlmICghZW5kVG9rZW4gfHwgIWVuZFRva2VuLmxvYykgcmV0dXJuIDA7XG5cbiAgICB2YXIgc3RhcnQgPSBzdGFydFRva2VuID8gc3RhcnRUb2tlbi5sb2MuZW5kLmxpbmUgOiAxO1xuICAgIHZhciBlbmQgPSBlbmRUb2tlbi5sb2Muc3RhcnQubGluZTtcbiAgICB2YXIgbGluZXMgPSAwO1xuXG4gICAgZm9yICh2YXIgbGluZSA9IHN0YXJ0OyBsaW5lIDwgZW5kOyBsaW5lKyspIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy51c2VkW2xpbmVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHRoaXMudXNlZFtsaW5lXSA9IHRydWU7XG4gICAgICAgIGxpbmVzKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbmVzO1xuICB9O1xuXG4gIHJldHVybiBXaGl0ZXNwYWNlO1xufSkoKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBXaGl0ZXNwYWNlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
