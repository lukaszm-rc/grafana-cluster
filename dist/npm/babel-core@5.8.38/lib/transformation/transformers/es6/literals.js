/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var metadata, visitor;
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      metadata = {
        group: "builtin-pre"
      };


      exports.metadata = metadata;
      visitor = {
        Literal: function Literal(node) {
          // number octal like 0b10 or 0o70
          if (typeof node.value === "number" && /^0[ob]/i.test(node.raw)) {
            node.raw = undefined;
          }

          // unicode escape
          if (typeof node.value === "string" && /\\[u]/gi.test(node.raw)) {
            node.raw = undefined;
          }
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9saXRlcmFscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQUVBLGNBQVEsVUFBUixHQUFxQixJQUFyQjtBQUNJLGlCQUFXO0FBQ2IsZUFBTyxhQUFQOzs7O0FBR0YsY0FBUSxRQUFSLEdBQW1CLFFBQW5CO0FBQ0ksZ0JBQVU7QUFDWixpQkFBUyxTQUFTLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUI7O0FBRTlCLGNBQUksT0FBTyxLQUFLLEtBQUwsS0FBZSxRQUF0QixJQUFrQyxVQUFVLElBQVYsQ0FBZSxLQUFLLEdBQUwsQ0FBakQsRUFBNEQ7QUFDOUQsaUJBQUssR0FBTCxHQUFXLFNBQVgsQ0FEOEQ7V0FBaEU7OztBQUY4QixjQU8xQixPQUFPLEtBQUssS0FBTCxLQUFlLFFBQXRCLElBQWtDLFVBQVUsSUFBVixDQUFlLEtBQUssR0FBTCxDQUFqRCxFQUE0RDtBQUM5RCxpQkFBSyxHQUFMLEdBQVcsU0FBWCxDQUQ4RDtXQUFoRTtTQVBPOzs7QUFZWCxjQUFRLE9BQVIsR0FBa0IsT0FBbEIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmFuc2Zvcm1hdGlvbi90cmFuc2Zvcm1lcnMvZXM2L2xpdGVyYWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIG1ldGFkYXRhID0ge1xuICBncm91cDogXCJidWlsdGluLXByZVwiXG59O1xuXG5leHBvcnRzLm1ldGFkYXRhID0gbWV0YWRhdGE7XG52YXIgdmlzaXRvciA9IHtcbiAgTGl0ZXJhbDogZnVuY3Rpb24gTGl0ZXJhbChub2RlKSB7XG4gICAgLy8gbnVtYmVyIG9jdGFsIGxpa2UgMGIxMCBvciAwbzcwXG4gICAgaWYgKHR5cGVvZiBub2RlLnZhbHVlID09PSBcIm51bWJlclwiICYmIC9eMFtvYl0vaS50ZXN0KG5vZGUucmF3KSkge1xuICAgICAgbm9kZS5yYXcgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLy8gdW5pY29kZSBlc2NhcGVcbiAgICBpZiAodHlwZW9mIG5vZGUudmFsdWUgPT09IFwic3RyaW5nXCIgJiYgL1xcXFxbdV0vZ2kudGVzdChub2RlLnJhdykpIHtcbiAgICAgIG5vZGUucmF3ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMudmlzaXRvciA9IHZpc2l0b3I7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
