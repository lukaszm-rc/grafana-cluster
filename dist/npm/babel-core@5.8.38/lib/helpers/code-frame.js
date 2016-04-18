/* */
"format cjs";
//import lineNumbers from "line-numbers";
"use strict";

System.register([], function (_export, _context) {
  var _repeating, _repeating2, _jsTokens, _jsTokens2, _esutils, _esutils2, _chalk, _chalk2, defs, NEWLINE;

  // istanbul ignore next

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }

  function lineNumbers(lines) {
    return lines;
  }

  /**
   * Chalk styles for token types.
   */

  /**
   * Get the type of token, specifying punctuator type.
   */

  function getTokenType(match) {
    var token = _jsTokens2["default"].matchToToken(match);
    if (token.type === "name" && _esutils2["default"].keyword.isReservedWordES6(token.value)) {
      return "keyword";
    }

    if (token.type === "punctuator") {
      switch (token.value) {
        case "{":
        case "}":
          return "curly";
        case "(":
        case ")":
          return "parens";
        case "[":
        case "]":
          return "square";
      }
    }

    return token.type;
  }

  /**
   * Highlight `text`.
   */

  function highlight(text) {
    return text.replace(_jsTokens2["default"], function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var type = getTokenType(args);
      var colorize = defs[type];
      if (colorize) {
        return args[0].split(NEWLINE).map(function (str) {
          return colorize(str);
        }).join("\n");
      } else {
        return args[0];
      }
    });
  }

  /**
   * Create a code frame, adding line numbers, code highlighting, and pointing to a given position.
   */

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_repeating = require("repeating");
      _repeating2 = _interopRequireDefault(_repeating);
      _jsTokens = require("js-tokens");
      _jsTokens2 = _interopRequireDefault(_jsTokens);
      _esutils = require("esutils");
      _esutils2 = _interopRequireDefault(_esutils);
      _chalk = require("chalk");
      _chalk2 = _interopRequireDefault(_chalk);
      defs = {
        string: _chalk2["default"].red,
        punctuator: _chalk2["default"].bold,
        curly: _chalk2["default"].green,
        parens: _chalk2["default"].blue.bold,
        square: _chalk2["default"].yellow,
        keyword: _chalk2["default"].cyan,
        number: _chalk2["default"].magenta,
        regex: _chalk2["default"].magenta,
        comment: _chalk2["default"].grey,
        invalid: _chalk2["default"].inverse
      };
      NEWLINE = /\r\n|[\n\r\u2028\u2029]/;
      exports["default"] = function (lines, lineNumber, colNumber) {
        var opts = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

        colNumber = Math.max(colNumber, 0);

        var highlighted = opts.highlightCode && _chalk2["default"].supportsColor;
        if (highlighted) lines = highlight(lines);

        lines = lines.split(NEWLINE);

        var start = Math.max(lineNumber - 3, 0);
        var end = Math.min(lines.length, lineNumber + 3);

        if (!lineNumber && !colNumber) {
          start = 0;
          end = lines.length;
        }

        var frame = lineNumbers(lines.slice(start, end), {
          start: start + 1,
          before: "  ",
          after: " | ",
          transform: function transform(params) {
            if (params.number !== lineNumber) {
              return;
            }

            if (colNumber) {
              params.line += "\n" + params.before + _repeating2["default"](" ", params.width) + params.after + _repeating2["default"](" ", colNumber - 1) + "^";
            }

            params.before = params.before.replace(/^./, ">");
          }
        }).join("\n");

        if (highlighted) {
          return _chalk2["default"].reset(frame);
        } else {
          return frame;
        }
      };

      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvaGVscGVycy9jb2RlLWZyYW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7QUFFQTs7Ozs7OztBQUtBLFdBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLEdBQXhCLEdBQThCLEVBQUUsV0FBVyxHQUFYLEVBQWhDLENBQVQ7R0FBckM7O0FBa0JBLFdBQVMsV0FBVCxDQUFxQixLQUFyQixFQUE0QjtBQUMxQixXQUFPLEtBQVAsQ0FEMEI7R0FBNUI7Ozs7Ozs7Ozs7QUErQkEsV0FBUyxZQUFULENBQXNCLEtBQXRCLEVBQTZCO0FBQzNCLFFBQUksUUFBUSxXQUFXLFNBQVgsRUFBc0IsWUFBdEIsQ0FBbUMsS0FBbkMsQ0FBUixDQUR1QjtBQUUzQixRQUFJLE1BQU0sSUFBTixLQUFlLE1BQWYsSUFBeUIsVUFBVSxTQUFWLEVBQXFCLE9BQXJCLENBQTZCLGlCQUE3QixDQUErQyxNQUFNLEtBQU4sQ0FBeEUsRUFBc0Y7QUFDeEYsYUFBTyxTQUFQLENBRHdGO0tBQTFGOztBQUlBLFFBQUksTUFBTSxJQUFOLEtBQWUsWUFBZixFQUE2QjtBQUMvQixjQUFRLE1BQU0sS0FBTjtBQUNOLGFBQUssR0FBTCxDQURGO0FBRUUsYUFBSyxHQUFMO0FBQ0UsaUJBQU8sT0FBUCxDQURGO0FBRkYsYUFJTyxHQUFMLENBSkY7QUFLRSxhQUFLLEdBQUw7QUFDRSxpQkFBTyxRQUFQLENBREY7QUFMRixhQU9PLEdBQUwsQ0FQRjtBQVFFLGFBQUssR0FBTDtBQUNFLGlCQUFPLFFBQVAsQ0FERjtBQVJGLE9BRCtCO0tBQWpDOztBQWNBLFdBQU8sTUFBTSxJQUFOLENBcEJvQjtHQUE3Qjs7Ozs7O0FBMkJBLFdBQVMsU0FBVCxDQUFtQixJQUFuQixFQUF5QjtBQUN2QixXQUFPLEtBQUssT0FBTCxDQUFhLFdBQVcsU0FBWCxDQUFiLEVBQW9DLFlBQVk7QUFDckQsV0FBSyxJ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QkFBSSxPQUFPLE1BQVAsS0FBa0IsVUFBbEIsRUFBOEI7QUFDaEMscUJBRGdDO2FBQWxDOztBQUlBLGdCQUFJLFNBQUosRUFBZTtBQUNiLHFCQUFPLElBQVAsSUFBZSxPQUFPLE9BQU8sTUFBUCxHQUFnQixZQUFZLFNBQVosRUFBdUIsR0FBdkIsRUFBNEIsT0FBTyxLQUFQLENBQW5ELEdBQW1FLE9BQU8sS0FBUCxHQUFlLFlBQVksU0FBWixFQUF1QixHQUF2QixFQUE0QixZQUFZLENBQVosQ0FBOUcsR0FBK0gsR0FBL0gsQ0FERjthQUFmOztBQUlBLG1CQUFPLE1BQVAsR0FBZ0IsT0FBTyxNQUFQLENBQWMsT0FBZCxDQUFzQixJQUF0QixFQUE0QixHQUE1QixDQUFoQixDQVRvQztXQUEzQjtTQUpELEVBZVQsSUFmUyxDQWVKLElBZkksQ0FBUixDQWxCdUQ7O0FBbUMzRCxZQUFJLFdBQUosRUFBaUI7QUFDZixpQkFBTyxRQUFRLFNBQVIsRUFBbUIsS0FBbkIsQ0FBeUIsS0FBekIsQ0FBUCxDQURlO1NBQWpCLE1BRU87QUFDTCxpQkFBTyxLQUFQLENBREs7U0FGUDtPQW5DbUI7O0FBMENyQixhQUFPLE9BQVAsR0FBaUIsUUFBUSxTQUFSLENBQWpCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvaGVscGVycy9jb2RlLWZyYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcbi8vaW1wb3J0IGxpbmVOdW1iZXJzIGZyb20gXCJsaW5lLW51bWJlcnNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfcmVwZWF0aW5nID0gcmVxdWlyZShcInJlcGVhdGluZ1wiKTtcblxudmFyIF9yZXBlYXRpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVwZWF0aW5nKTtcblxudmFyIF9qc1Rva2VucyA9IHJlcXVpcmUoXCJqcy10b2tlbnNcIik7XG5cbnZhciBfanNUb2tlbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfanNUb2tlbnMpO1xuXG52YXIgX2VzdXRpbHMgPSByZXF1aXJlKFwiZXN1dGlsc1wiKTtcblxudmFyIF9lc3V0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2VzdXRpbHMpO1xuXG52YXIgX2NoYWxrID0gcmVxdWlyZShcImNoYWxrXCIpO1xuXG52YXIgX2NoYWxrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoYWxrKTtcblxuZnVuY3Rpb24gbGluZU51bWJlcnMobGluZXMpIHtcbiAgcmV0dXJuIGxpbmVzO1xufVxuXG4vKipcbiAqIENoYWxrIHN0eWxlcyBmb3IgdG9rZW4gdHlwZXMuXG4gKi9cblxudmFyIGRlZnMgPSB7XG4gIHN0cmluZzogX2NoYWxrMltcImRlZmF1bHRcIl0ucmVkLFxuICBwdW5jdHVhdG9yOiBfY2hhbGsyW1wiZGVmYXVsdFwiXS5ib2xkLFxuICBjdXJseTogX2NoYWxrMltcImRlZmF1bHRcIl0uZ3JlZW4sXG4gIHBhcmVuczogX2NoYWxrMltcImRlZmF1bHRcIl0uYmx1ZS5ib2xkLFxuICBzcXVhcmU6IF9jaGFsazJbXCJkZWZhdWx0XCJdLnllbGxvdyxcbiAga2V5d29yZDogX2NoYWxrMltcImRlZmF1bHRcIl0uY3lhbixcbiAgbnVtYmVyOiBfY2hhbGsyW1wiZGVmYXVsdFwiXS5tYWdlbnRhLFxuICByZWdleDogX2NoYWxrMltcImRlZmF1bHRcIl0ubWFnZW50YSxcbiAgY29tbWVudDogX2NoYWxrMltcImRlZmF1bHRcIl0uZ3JleSxcbiAgaW52YWxpZDogX2NoYWxrMltcImRlZmF1bHRcIl0uaW52ZXJzZVxufTtcblxuLyoqXG4gKiBSZWdFeHAgdG8gdGVzdCBmb3IgbmV3bGluZXMgaW4gdGVybWluYWwuXG4gKi9cblxudmFyIE5FV0xJTkUgPSAvXFxyXFxufFtcXG5cXHJcXHUyMDI4XFx1MjAyOV0vO1xuXG4vKipcbiAqIEdldCB0aGUgdHlwZSBvZiB0b2tlbiwgc3BlY2lmeWluZyBwdW5jdHVhdG9yIHR5cGUuXG4gKi9cblxuZnVuY3Rpb24gZ2V0VG9rZW5UeXBlKG1hdGNoKSB7XG4gIHZhciB0b2tlbiA9IF9qc1Rva2VuczJbXCJkZWZhdWx0XCJdLm1hdGNoVG9Ub2tlbihtYXRjaCk7XG4gIGlmICh0b2tlbi50eXBlID09PSBcIm5hbWVcIiAmJiBfZXN1dGlsczJbXCJkZWZhdWx0XCJdLmtleXdvcmQuaXNSZXNlcnZlZFdvcmRFUzYodG9rZW4udmFsdWUpKSB7XG4gICAgcmV0dXJuIFwia2V5d29yZFwiO1xuICB9XG5cbiAgaWYgKHRva2VuLnR5cGUgPT09IFwicHVuY3R1YXRvclwiKSB7XG4gICAgc3dpdGNoICh0b2tlbi52YWx1ZSkge1xuICAgICAgY2FzZSBcIntcIjpcbiAgICAgIGNhc2UgXCJ9XCI6XG4gICAgICAgIHJldHVybiBcImN1cmx5XCI7XG4gICAgICBjYXNlIFwiKFwiOlxuICAgICAgY2FzZSBcIilcIjpcbiAgICAgICAgcmV0dXJuIFwicGFyZW5zXCI7XG4gICAgICBjYXNlIFwiW1wiOlxuICAgICAgY2FzZSBcIl1cIjpcbiAgICAgICAgcmV0dXJuIFwic3F1YXJlXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRva2VuLnR5cGU7XG59XG5cbi8qKlxuICogSGlnaGxpZ2h0IGB0ZXh0YC5cbiAqL1xuXG5mdW5jdGlvbiBoaWdobGlnaHQodGV4dCkge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKF9qc1Rva2VuczJbXCJkZWZhdWx0XCJdLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIHR5cGUgPSBnZXRUb2tlblR5cGUoYXJncyk7XG4gICAgdmFyIGNvbG9yaXplID0gZGVmc1t0eXBlXTtcbiAgICBpZiAoY29sb3JpemUpIHtcbiAgICAgIHJldHVybiBhcmdzWzBdLnNwbGl0KE5FV0xJTkUpLm1hcChmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiBjb2xvcml6ZShzdHIpO1xuICAgICAgfSkuam9pbihcIlxcblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFyZ3NbMF07XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBjb2RlIGZyYW1lLCBhZGRpbmcgbGluZSBudW1iZXJzLCBjb2RlIGhpZ2hsaWdodGluZywgYW5kIHBvaW50aW5nIHRvIGEgZ2l2ZW4gcG9zaXRpb24uXG4gKi9cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAobGluZXMsIGxpbmVOdW1iZXIsIGNvbE51bWJlcikge1xuICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMyB8fCBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzNdO1xuXG4gIGNvbE51bWJlciA9IE1hdGgubWF4KGNvbE51bWJlciwgMCk7XG5cbiAgdmFyIGhpZ2hsaWdodGVkID0gb3B0cy5oaWdobGlnaHRDb2RlICYmIF9jaGFsazJbXCJkZWZhdWx0XCJdLnN1cHBvcnRzQ29sb3I7XG4gIGlmIChoaWdobGlnaHRlZCkgbGluZXMgPSBoaWdobGlnaHQobGluZXMpO1xuXG4gIGxpbmVzID0gbGluZXMuc3BsaXQoTkVXTElORSk7XG5cbiAgdmFyIHN0YXJ0ID0gTWF0aC5tYXgobGluZU51bWJlciAtIDMsIDApO1xuICB2YXIgZW5kID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBsaW5lTnVtYmVyICsgMyk7XG5cbiAgaWYgKCFsaW5lTnVtYmVyICYmICFjb2xOdW1iZXIpIHtcbiAgICBzdGFydCA9IDA7XG4gICAgZW5kID0gbGluZXMubGVuZ3RoO1xuICB9XG5cbiAgdmFyIGZyYW1lID0gbGluZU51bWJlcnMobGluZXMuc2xpY2Uoc3RhcnQsIGVuZCksIHtcbiAgICBzdGFydDogc3RhcnQgKyAxLFxuICAgIGJlZm9yZTogXCIgIFwiLFxuICAgIGFmdGVyOiBcIiB8IFwiLFxuICAgIHRyYW5zZm9ybTogZnVuY3Rpb24gdHJhbnNmb3JtKHBhcmFtcykge1xuICAgICAgaWYgKHBhcmFtcy5udW1iZXIgIT09IGxpbmVOdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29sTnVtYmVyKSB7XG4gICAgICAgIHBhcmFtcy5saW5lICs9IFwiXFxuXCIgKyBwYXJhbXMuYmVmb3JlICsgX3JlcGVhdGluZzJbXCJkZWZhdWx0XCJdKFwiIFwiLCBwYXJhbXMud2lkdGgpICsgcGFyYW1zLmFmdGVyICsgX3JlcGVhdGluZzJbXCJkZWZhdWx0XCJdKFwiIFwiLCBjb2xOdW1iZXIgLSAxKSArIFwiXlwiO1xuICAgICAgfVxuXG4gICAgICBwYXJhbXMuYmVmb3JlID0gcGFyYW1zLmJlZm9yZS5yZXBsYWNlKC9eLi8sIFwiPlwiKTtcbiAgICB9XG4gIH0pLmpvaW4oXCJcXG5cIik7XG5cbiAgaWYgKGhpZ2hsaWdodGVkKSB7XG4gICAgcmV0dXJuIF9jaGFsazJbXCJkZWZhdWx0XCJdLnJlc2V0KGZyYW1lKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
