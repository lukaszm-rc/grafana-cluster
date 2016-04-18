/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _types, t, metadata, visitor;

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

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_types = require("../../../types");
      t = _interopRequireWildcard(_types);
      metadata = {
        optional: true,
        group: "builtin-pre"
      };


      exports.metadata = metadata;
      /**
       * [Please add a description.]
       */

      visitor = {

        /**
         * [Please add a description.]
         */

        TemplateLiteral: function TemplateLiteral(node, parent) {
          if (t.isTaggedTemplateExpression(parent)) return;

          for (var i = 0; i < node.expressions.length; i++) {
            node.expressions[i] = t.callExpression(t.identifier("String"), [node.expressions[i]]);
          }
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9zcGVjLnRlbXBsYXRlLWxpdGVyYWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBS0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7Ozs7QUFIQSxjQUFRLFVBQVIsR0FBcUIsSUFBckIsQ0FLSSxTQUFTLFFBQVEsZ0JBQVI7QUFFVCxVQUFJLHdCQUF3QixNQUF4QjtBQUVKLGlCQUFXO0FBQ2Isa0JBQVUsSUFBVjtBQUNBLGVBQU8sYUFBUDs7OztBQUdGLGNBQVEsUUFBUixHQUFtQixRQUFuQjs7Ozs7QUFLSSxnQkFBVTs7Ozs7O0FBTVoseUJBQWlCLFNBQVMsZUFBVCxDQUF5QixJQUF6QixFQUErQixNQUEvQixFQUF1QztBQUN0RCxjQUFJLEVBQUUsMEJBQUYsQ0FBNkIsTUFBN0IsQ0FBSixFQUEwQyxPQUExQzs7QUFFQSxlQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxLQUFLLFdBQUwsQ0FBaUIsTUFBakIsRUFBeUIsR0FBN0MsRUFBa0Q7QUFDaEQsaUJBQUssV0FBTCxDQUFpQixDQUFqQixJQUFzQixFQUFFLGNBQUYsQ0FBaUIsRUFBRSxVQUFGLENBQWEsUUFBYixDQUFqQixFQUF5QyxDQUFDLEtBQUssV0FBTCxDQUFpQixDQUFqQixDQUFELENBQXpDLENBQXRCLENBRGdEO1dBQWxEO1NBSGU7OztBQVFuQixjQUFRLE9BQVIsR0FBa0IsT0FBbEIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmFuc2Zvcm1hdGlvbi90cmFuc2Zvcm1lcnMvZXM2L3NwZWMudGVtcGxhdGUtbGl0ZXJhbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxudmFyIG1ldGFkYXRhID0ge1xuICBvcHRpb25hbDogdHJ1ZSxcbiAgZ3JvdXA6IFwiYnVpbHRpbi1wcmVcIlxufTtcblxuZXhwb3J0cy5tZXRhZGF0YSA9IG1ldGFkYXRhO1xuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgdmlzaXRvciA9IHtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFRlbXBsYXRlTGl0ZXJhbDogZnVuY3Rpb24gVGVtcGxhdGVMaXRlcmFsKG5vZGUsIHBhcmVudCkge1xuICAgIGlmICh0LmlzVGFnZ2VkVGVtcGxhdGVFeHByZXNzaW9uKHBhcmVudCkpIHJldHVybjtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5leHByZXNzaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgbm9kZS5leHByZXNzaW9uc1tpXSA9IHQuY2FsbEV4cHJlc3Npb24odC5pZGVudGlmaWVyKFwiU3RyaW5nXCIpLCBbbm9kZS5leHByZXNzaW9uc1tpXV0pO1xuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMudmlzaXRvciA9IHZpc2l0b3I7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
