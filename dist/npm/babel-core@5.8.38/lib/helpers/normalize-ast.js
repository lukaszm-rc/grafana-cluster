/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _types, t;

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
      exports.__esModule = true;_types = require("../types");
      t = _interopRequireWildcard(_types);


      /**
       * Normalize an AST.
       *
       * - Wrap `Program` node with a `File` node.
       */

      exports["default"] = function (ast, comments, tokens) {
        if (ast && ast.type === "Program") {
          return t.file(ast, comments || [], tokens || []);
        } else {
          throw new Error("Not a valid ast?");
        }
      };

      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvaGVscGVycy9ub3JtYWxpemUtYXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBS0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7Ozs7QUFIQSxjQUFRLFVBQVIsR0FBcUIsSUFBckIsQ0FLSSxTQUFTLFFBQVEsVUFBUjtBQUVULFVBQUksd0JBQXdCLE1BQXhCOzs7Ozs7Ozs7QUFRUixjQUFRLFNBQVIsSUFBcUIsVUFBVSxHQUFWLEVBQWUsUUFBZixFQUF5QixNQUF6QixFQUFpQztBQUNwRCxZQUFJLE9BQU8sSUFBSSxJQUFKLEtBQWEsU0FBYixFQUF3QjtBQUNqQyxpQkFBTyxFQUFFLElBQUYsQ0FBTyxHQUFQLEVBQVksWUFBWSxFQUFaLEVBQWdCLFVBQVUsRUFBVixDQUFuQyxDQURpQztTQUFuQyxNQUVPO0FBQ0wsZ0JBQU0sSUFBSSxLQUFKLENBQVUsa0JBQVYsQ0FBTixDQURLO1NBRlA7T0FEbUI7O0FBUXJCLGFBQU8sT0FBUCxHQUFpQixRQUFRLFNBQVIsQ0FBakIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi9oZWxwZXJzL25vcm1hbGl6ZS1hc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxuLyoqXG4gKiBOb3JtYWxpemUgYW4gQVNULlxuICpcbiAqIC0gV3JhcCBgUHJvZ3JhbWAgbm9kZSB3aXRoIGEgYEZpbGVgIG5vZGUuXG4gKi9cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoYXN0LCBjb21tZW50cywgdG9rZW5zKSB7XG4gIGlmIChhc3QgJiYgYXN0LnR5cGUgPT09IFwiUHJvZ3JhbVwiKSB7XG4gICAgcmV0dXJuIHQuZmlsZShhc3QsIGNvbW1lbnRzIHx8IFtdLCB0b2tlbnMgfHwgW10pO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBhIHZhbGlkIGFzdD9cIik7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
