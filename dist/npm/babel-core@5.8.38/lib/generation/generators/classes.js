/* */
"format cjs";
/**
 * Print ClassDeclaration, prints decorators, typeParameters, extends, implements, and body.
 */

"use strict";

System.register([], function (_export, _context) {

  function ClassDeclaration(node, print) {
    print.list(node.decorators, { separator: "" });
    this.push("class");

    if (node.id) {
      this.push(" ");
      print.plain(node.id);
    }

    print.plain(node.typeParameters);

    if (node.superClass) {
      this.push(" extends ");
      print.plain(node.superClass);
      print.plain(node.superTypeParameters);
    }

    if (node["implements"]) {
      this.push(" implements ");
      print.join(node["implements"], { separator: ", " });
    }

    this.space();
    print.plain(node.body);
  }

  /**
   * Alias ClassDeclaration printer as ClassExpression.
   */

  /**
   * Print ClassBody, collapses empty blocks, prints body.
   */

  function ClassBody(node, print) {
    this.push("{");
    if (node.body.length === 0) {
      print.printInnerComments();
      this.push("}");
    } else {
      this.newline();

      this.indent();
      print.sequence(node.body);
      this.dedent();

      this.rightBrace();
    }
  }

  /**
   * Print ClassProperty, prints decorators, static, key, typeAnnotation, and value.
   * Also: semicolons, deal with it.
   */

  function ClassProperty(node, print) {
    print.list(node.decorators, { separator: "" });

    if (node["static"]) this.push("static ");
    print.plain(node.key);
    print.plain(node.typeAnnotation);
    if (node.value) {
      this.space();
      this.push("=");
      this.space();
      print.plain(node.value);
    }
    this.semicolon();
  }

  /**
   * Print MethodDefinition, prints decorations, static, and method.
   */

  function MethodDefinition(node, print) {
    print.list(node.decorators, { separator: "" });

    if (node["static"]) {
      this.push("static ");
    }

    this._method(node, print);
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.ClassDeclaration = ClassDeclaration;
      exports.ClassBody = ClassBody;
      exports.ClassProperty = ClassProperty;
      exports.MethodDefinition = MethodDefinition;exports.ClassExpression = ClassDeclaration;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvZ2VuZXJhdGlvbi9nZW5lcmF0b3JzL2NsYXNzZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7OztBQUtBOzs7O0FBUUEsV0FBUyxnQkFBVCxDQUEwQixJQUExQixFQUFnQyxLQUFoQyxFQUF1QztBQUNyQyxVQUFNLElBQU4sQ0FBVyxLQUFLLFVBQUwsRUFBaUIsRUFBRSxXQUFXLEVBQVgsRUFBOUIsRUFEcUM7QUFFckMsU0FBSyxJQUFMLENBQVUsT0FBVixFQUZxQzs7QUFJckMsUUFBSSxLQUFLLEVBQUwsRUFBUztBQUNYLFdBQUssSUFBTCxDQUFVLEdBQVYsRUFEVztBQUVYLFlBQU0sS0FBTixDQUFZLEtBQUssRUFBTCxDQUFaLENBRlc7S0FBYjs7QUFLQSxVQUFNLEtBQU4sQ0FBWSxLQUFLLGNBQUwsQ0FBWixDQVRxQzs7QUFXckMsUUFBSSxLQUFLLFVBQUwsRUFBaUI7QUFDbkIsV0FBSyxJQUFMLENBQVUsV0FBVixFQURtQjtBQUVuQixZQUFNLEtBQU4sQ0FBWSxLQUFLLFVBQUwsQ0FBWixDQUZtQjtBQUduQixZQUFNLEtBQU4sQ0FBWSxLQUFLLG1CQUFMLENBQVosQ0FIbUI7S0FBckI7O0FBTUEsUUFBSSxLQUFLLFlBQUwsQ0FBSixFQUF3QjtBQUN0QixXQUFLLElBQUwsQ0FBVSxjQUFWLEVBRHNCO0FBRXRCLFlBQU0sSUFBTixDQUFXLEtBQUssWUFBTCxDQUFYLEVBQStCLEVBQUUsV0FBVyxJQUFYLEVBQWpDLEVBRnNCO0tBQXhCOztBQUtBLFNBQUssS0FBTCxHQXRCcUM7QUF1QnJDLFVBQU0sS0FBTixDQUFZLEtBQUssSUFBTCxDQUFaLENBdkJxQztHQUF2Qzs7Ozs7Ozs7OztBQW9DQSxXQUFTLFNBQVQsQ0FBbUIsSUFBbkIsRUFBeUIsS0FBekIsRUFBZ0M7QUFDOUIsU0FBSyxJQUFMLENBQVUsR0FBVixFQUQ4QjtBQUU5QixRQUFJLEtBQUssSUFBTCxDQUFVLE1BQVYsS0FBcUIsQ0FBckIsRUFBd0I7QUFDMUIsWUFBTSxrQkFBTixHQUQwQjtBQUUxQixXQUFLLElBQUwsQ0FBVSxHQUFWLEVBRjBCO0tBQTVCLE1BR087QUFDTCxXQUFLLE9BQUwsR0FESzs7QUFHTCxXQUFLLE1BQUwsR0FISztBQUlMLFlBQU0sUUFBTixDQUFlLEtBQUssSUFBTCxDQUFmLENBSks7QUFLTCxXQUFLLE1BQUwsR0FMSzs7QUFPTCxXQUFLLFVBQUwsR0FQSztLQUhQO0dBRkY7Ozs7Ozs7QUFxQkEsV0FBUyxhQUFULENBQXVCLElBQXZCLEVBQTZCLEtBQTdCLEVBQW9DO0FBQ2xDLFVBQU0sSUFBTixDQUFXLEtBQUssVUFBTCxFQUFpQixFQUFFLFdBQVcsRUFBWCxFQUE5QixFQURrQzs7QUFHbEMsUUFBSSxLQUFLLFFBQUwsQ0FBSixFQUFvQixLQUFLLElBQUwsQ0FBVSxTQUFWLEVBQXBCO0FBQ0EsVUFBTSxLQUFOLENBQVksS0FBSyxHQUFMLENBQVosQ0FKa0M7QUFLbEMsVUFBTSxLQUFOLENBQVksS0FBSyxjQUFMLENBQVosQ0FMa0M7QUFNbEMsUUFBSSxLQUFLLEtBQUwsRUFBWTtBQUNkLFdBQUssS0FBTCxHQURjO0FBRWQsV0FBSyxJQUFMLENBQVUsR0FBVixFQUZjO0FBR2QsV0FBSyxLQUFMLEdBSGM7QUFJZCxZQUFNLEtBQU4sQ0FBWSxLQUFLLEtBQUwsQ0FBWixDQUpjO0tBQWhCO0FBTUEsU0FBSyxTQUFMLEdBWmtDO0dBQXBDOzs7Ozs7QUFtQkEsV0FBUyxnQkFBVCxDQUEwQixJQUExQixFQUFnQyxLQUFoQyxFQUF1QztBQUNyQyxVQUFNLElBQU4sQ0FBVyxLQUFLLFVBQUwsRUFBaUIsRUFBRSxXQUFXLEVBQVgsRUFBOUIsRUFEcUM7O0FBR3JDLFFBQUksS0FBSyxRQUFMLENBQUosRUFBb0I7QUFDbEIsV0FBSyxJQUFMLENBQVUsU0FBVixFQURrQjtLQUFwQjs7QUFJQSxTQUFLLE9BQUwsQ0FBYSxJQUFiLEVBQW1CLEtBQW5CLEVBUHFDO0dBQXZDOzs7O0FBbEZBLGNBQVEsVUFBUixHQUFxQixJQUFyQjtBQUNBLGNBQVEsZ0JBQVIsR0FBMkIsZ0JBQTNCO0FBQ0EsY0FBUSxTQUFSLEdBQW9CLFNBQXBCO0FBQ0EsY0FBUSxhQUFSLEdBQXdCLGFBQXhCO0FBQ0EsY0FBUSxnQkFBUixHQUEyQixnQkFBM0IsQ0FnQ0EsUUFBUSxlQUFSLEdBQTBCLGdCQUExQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL2dlbmVyYXRpb24vZ2VuZXJhdG9ycy9jbGFzc2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcbi8qKlxuICogUHJpbnQgQ2xhc3NEZWNsYXJhdGlvbiwgcHJpbnRzIGRlY29yYXRvcnMsIHR5cGVQYXJhbWV0ZXJzLCBleHRlbmRzLCBpbXBsZW1lbnRzLCBhbmQgYm9keS5cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuQ2xhc3NEZWNsYXJhdGlvbiA9IENsYXNzRGVjbGFyYXRpb247XG5leHBvcnRzLkNsYXNzQm9keSA9IENsYXNzQm9keTtcbmV4cG9ydHMuQ2xhc3NQcm9wZXJ0eSA9IENsYXNzUHJvcGVydHk7XG5leHBvcnRzLk1ldGhvZERlZmluaXRpb24gPSBNZXRob2REZWZpbml0aW9uO1xuXG5mdW5jdGlvbiBDbGFzc0RlY2xhcmF0aW9uKG5vZGUsIHByaW50KSB7XG4gIHByaW50Lmxpc3Qobm9kZS5kZWNvcmF0b3JzLCB7IHNlcGFyYXRvcjogXCJcIiB9KTtcbiAgdGhpcy5wdXNoKFwiY2xhc3NcIik7XG5cbiAgaWYgKG5vZGUuaWQpIHtcbiAgICB0aGlzLnB1c2goXCIgXCIpO1xuICAgIHByaW50LnBsYWluKG5vZGUuaWQpO1xuICB9XG5cbiAgcHJpbnQucGxhaW4obm9kZS50eXBlUGFyYW1ldGVycyk7XG5cbiAgaWYgKG5vZGUuc3VwZXJDbGFzcykge1xuICAgIHRoaXMucHVzaChcIiBleHRlbmRzIFwiKTtcbiAgICBwcmludC5wbGFpbihub2RlLnN1cGVyQ2xhc3MpO1xuICAgIHByaW50LnBsYWluKG5vZGUuc3VwZXJUeXBlUGFyYW1ldGVycyk7XG4gIH1cblxuICBpZiAobm9kZVtcImltcGxlbWVudHNcIl0pIHtcbiAgICB0aGlzLnB1c2goXCIgaW1wbGVtZW50cyBcIik7XG4gICAgcHJpbnQuam9pbihub2RlW1wiaW1wbGVtZW50c1wiXSwgeyBzZXBhcmF0b3I6IFwiLCBcIiB9KTtcbiAgfVxuXG4gIHRoaXMuc3BhY2UoKTtcbiAgcHJpbnQucGxhaW4obm9kZS5ib2R5KTtcbn1cblxuLyoqXG4gKiBBbGlhcyBDbGFzc0RlY2xhcmF0aW9uIHByaW50ZXIgYXMgQ2xhc3NFeHByZXNzaW9uLlxuICovXG5cbmV4cG9ydHMuQ2xhc3NFeHByZXNzaW9uID0gQ2xhc3NEZWNsYXJhdGlvbjtcblxuLyoqXG4gKiBQcmludCBDbGFzc0JvZHksIGNvbGxhcHNlcyBlbXB0eSBibG9ja3MsIHByaW50cyBib2R5LlxuICovXG5cbmZ1bmN0aW9uIENsYXNzQm9keShub2RlLCBwcmludCkge1xuICB0aGlzLnB1c2goXCJ7XCIpO1xuICBpZiAobm9kZS5ib2R5Lmxlbmd0aCA9PT0gMCkge1xuICAgIHByaW50LnByaW50SW5uZXJDb21tZW50cygpO1xuICAgIHRoaXMucHVzaChcIn1cIik7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5uZXdsaW5lKCk7XG5cbiAgICB0aGlzLmluZGVudCgpO1xuICAgIHByaW50LnNlcXVlbmNlKG5vZGUuYm9keSk7XG4gICAgdGhpcy5kZWRlbnQoKTtcblxuICAgIHRoaXMucmlnaHRCcmFjZSgpO1xuICB9XG59XG5cbi8qKlxuICogUHJpbnQgQ2xhc3NQcm9wZXJ0eSwgcHJpbnRzIGRlY29yYXRvcnMsIHN0YXRpYywga2V5LCB0eXBlQW5ub3RhdGlvbiwgYW5kIHZhbHVlLlxuICogQWxzbzogc2VtaWNvbG9ucywgZGVhbCB3aXRoIGl0LlxuICovXG5cbmZ1bmN0aW9uIENsYXNzUHJvcGVydHkobm9kZSwgcHJpbnQpIHtcbiAgcHJpbnQubGlzdChub2RlLmRlY29yYXRvcnMsIHsgc2VwYXJhdG9yOiBcIlwiIH0pO1xuXG4gIGlmIChub2RlW1wic3RhdGljXCJdKSB0aGlzLnB1c2goXCJzdGF0aWMgXCIpO1xuICBwcmludC5wbGFpbihub2RlLmtleSk7XG4gIHByaW50LnBsYWluKG5vZGUudHlwZUFubm90YXRpb24pO1xuICBpZiAobm9kZS52YWx1ZSkge1xuICAgIHRoaXMuc3BhY2UoKTtcbiAgICB0aGlzLnB1c2goXCI9XCIpO1xuICAgIHRoaXMuc3BhY2UoKTtcbiAgICBwcmludC5wbGFpbihub2RlLnZhbHVlKTtcbiAgfVxuICB0aGlzLnNlbWljb2xvbigpO1xufVxuXG4vKipcbiAqIFByaW50IE1ldGhvZERlZmluaXRpb24sIHByaW50cyBkZWNvcmF0aW9ucywgc3RhdGljLCBhbmQgbWV0aG9kLlxuICovXG5cbmZ1bmN0aW9uIE1ldGhvZERlZmluaXRpb24obm9kZSwgcHJpbnQpIHtcbiAgcHJpbnQubGlzdChub2RlLmRlY29yYXRvcnMsIHsgc2VwYXJhdG9yOiBcIlwiIH0pO1xuXG4gIGlmIChub2RlW1wic3RhdGljXCJdKSB7XG4gICAgdGhpcy5wdXNoKFwic3RhdGljIFwiKTtcbiAgfVxuXG4gIHRoaXMuX21ldGhvZChub2RlLCBwcmludCk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
