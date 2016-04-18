/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _regexpuRewritePattern, _regexpuRewritePattern2, _helpersRegex, regex, visitor;

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
      exports.__esModule = true;_regexpuRewritePattern = require("regexpu/rewrite-pattern");
      _regexpuRewritePattern2 = _interopRequireDefault(_regexpuRewritePattern);
      _helpersRegex = require("../../helpers/regex");
      regex = _interopRequireWildcard(_helpersRegex);
      visitor = {

        /**
         * [Please add a description.]
         */

        Literal: function Literal(node) {
          if (!regex.is(node, "u")) return;
          node.regex.pattern = _regexpuRewritePattern2["default"](node.regex.pattern, node.regex.flags);
          regex.pullFlag(node, "u");
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9yZWdleC51bmljb2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBS0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7OztBQUlBLFdBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLEdBQXhCLEdBQThCLEVBQUUsV0FBVyxHQUFYLEVBQWhDLENBQVQ7R0FBckM7Ozs7O0FBUEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBU0kseUJBQXlCLFFBQVEseUJBQVI7QUFFekIsZ0NBQTBCLHVCQUF1QixzQkFBdkI7QUFFMUIsc0JBQWdCLFFBQVEscUJBQVI7QUFFaEIsY0FBUSx3QkFBd0IsYUFBeEI7QUFNUixnQkFBVTs7Ozs7O0FBTVosaUJBQVMsU0FBUyxPQUFULENBQWlCLElBQWpCLEVBQXVCO0FBQzlCLGNBQUksQ0FBQyxNQUFNLEVBQU4sQ0FBUyxJQUFULEVBQWUsR0FBZixDQUFELEVBQXNCLE9BQTFCO0FBQ0EsZUFBSyxLQUFMLENBQVcsT0FBWCxHQUFxQix3QkFBd0IsU0FBeEIsRUFBbUMsS0FBSyxLQUFMLENBQVcsT0FBWCxFQUFvQixLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQTVFLENBRjhCO0FBRzlCLGdCQUFNLFFBQU4sQ0FBZSxJQUFmLEVBQXFCLEdBQXJCLEVBSDhCO1NBQXZCOzs7QUFNWCxjQUFRLE9BQVIsR0FBa0IsT0FBbEIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmFuc2Zvcm1hdGlvbi90cmFuc2Zvcm1lcnMvZXM2L3JlZ2V4LnVuaWNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX3JlZ2V4cHVSZXdyaXRlUGF0dGVybiA9IHJlcXVpcmUoXCJyZWdleHB1L3Jld3JpdGUtcGF0dGVyblwiKTtcblxudmFyIF9yZWdleHB1UmV3cml0ZVBhdHRlcm4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVnZXhwdVJld3JpdGVQYXR0ZXJuKTtcblxudmFyIF9oZWxwZXJzUmVnZXggPSByZXF1aXJlKFwiLi4vLi4vaGVscGVycy9yZWdleFwiKTtcblxudmFyIHJlZ2V4ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hlbHBlcnNSZWdleCk7XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIHZpc2l0b3IgPSB7XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBMaXRlcmFsOiBmdW5jdGlvbiBMaXRlcmFsKG5vZGUpIHtcbiAgICBpZiAoIXJlZ2V4LmlzKG5vZGUsIFwidVwiKSkgcmV0dXJuO1xuICAgIG5vZGUucmVnZXgucGF0dGVybiA9IF9yZWdleHB1UmV3cml0ZVBhdHRlcm4yW1wiZGVmYXVsdFwiXShub2RlLnJlZ2V4LnBhdHRlcm4sIG5vZGUucmVnZXguZmxhZ3MpO1xuICAgIHJlZ2V4LnB1bGxGbGFnKG5vZGUsIFwidVwiKTtcbiAgfVxufTtcbmV4cG9ydHMudmlzaXRvciA9IHZpc2l0b3I7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
