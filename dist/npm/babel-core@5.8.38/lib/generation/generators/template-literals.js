/* */
"format cjs";
/**
 * Prints TaggedTemplateExpression, prints tag and quasi.
 */

"use strict";

System.register([], function (_export, _context) {

  function TaggedTemplateExpression(node, print) {
    print.plain(node.tag);
    print.plain(node.quasi);
  }

  /**
   * Prints TemplateElement, prints value.
   */

  function TemplateElement(node) {
    this._push(node.value.raw);
  }

  /**
   * Prints TemplateLiteral, prints quasis, and expressions.
   */

  function TemplateLiteral(node, print) {
    this.push("`");

    var quasis = node.quasis;
    var len = quasis.length;

    for (var i = 0; i < len; i++) {
      print.plain(quasis[i]);

      if (i + 1 < len) {
        this.push("${ ");
        print.plain(node.expressions[i]);
        this.push(" }");
      }
    }

    this._push("`");
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.TaggedTemplateExpression = TaggedTemplateExpression;
      exports.TemplateElement = TemplateElement;
      exports.TemplateLiteral = TemplateLiteral;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvZ2VuZXJhdGlvbi9nZW5lcmF0b3JzL3RlbXBsYXRlLWxpdGVyYWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7QUFLQTs7OztBQU9BLFdBQVMsd0JBQVQsQ0FBa0MsSUFBbEMsRUFBd0MsS0FBeEMsRUFBK0M7QUFDN0MsVUFBTSxLQUFOLENBQVksS0FBSyxHQUFMLENBQVosQ0FENkM7QUFFN0MsVUFBTSxLQUFOLENBQVksS0FBSyxLQUFMLENBQVosQ0FGNkM7R0FBL0M7Ozs7OztBQVNBLFdBQVMsZUFBVCxDQUF5QixJQUF6QixFQUErQjtBQUM3QixTQUFLLEtBQUwsQ0FBVyxLQUFLLEtBQUwsQ0FBVyxHQUFYLENBQVgsQ0FENkI7R0FBL0I7Ozs7OztBQVFBLFdBQVMsZUFBVCxDQUF5QixJQUF6QixFQUErQixLQUEvQixFQUFzQztBQUNwQyxTQUFLLElBQUwsQ0FBVSxHQUFWLEVBRG9DOztBQUdwQyxRQUFJLFNBQVMsS0FBSyxNQUFMLENBSHVCO0FBSXBDLFFBQUksTUFBTSxPQUFPLE1BQVAsQ0FKMEI7O0FBTXBDLFNBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLEdBQUosRUFBUyxHQUF6QixFQUE4QjtBQUM1QixZQUFNLEtBQU4sQ0FBWSxPQUFPLENBQVAsQ0FBWixFQUQ0Qjs7QUFHNUIsVUFBSSxJQUFJLENBQUosR0FBUSxHQUFSLEVBQWE7QUFDZixhQUFLLElBQUwsQ0FBVSxLQUFWLEVBRGU7QUFFZixjQUFNLEtBQU4sQ0FBWSxLQUFLLFdBQUwsQ0FBaUIsQ0FBakIsQ0FBWixFQUZlO0FBR2YsYUFBSyxJQUFMLENBQVUsSUFBVixFQUhlO09BQWpCO0tBSEY7O0FBVUEsU0FBSyxLQUFMLENBQVcsR0FBWCxFQWhCb0M7R0FBdEM7Ozs7QUF0QkEsY0FBUSxVQUFSLEdBQXFCLElBQXJCO0FBQ0EsY0FBUSx3QkFBUixHQUFtQyx3QkFBbkM7QUFDQSxjQUFRLGVBQVIsR0FBMEIsZUFBMUI7QUFDQSxjQUFRLGVBQVIsR0FBMEIsZUFBMUIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi9nZW5lcmF0aW9uL2dlbmVyYXRvcnMvdGVtcGxhdGUtbGl0ZXJhbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuLyoqXG4gKiBQcmludHMgVGFnZ2VkVGVtcGxhdGVFeHByZXNzaW9uLCBwcmludHMgdGFnIGFuZCBxdWFzaS5cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuVGFnZ2VkVGVtcGxhdGVFeHByZXNzaW9uID0gVGFnZ2VkVGVtcGxhdGVFeHByZXNzaW9uO1xuZXhwb3J0cy5UZW1wbGF0ZUVsZW1lbnQgPSBUZW1wbGF0ZUVsZW1lbnQ7XG5leHBvcnRzLlRlbXBsYXRlTGl0ZXJhbCA9IFRlbXBsYXRlTGl0ZXJhbDtcblxuZnVuY3Rpb24gVGFnZ2VkVGVtcGxhdGVFeHByZXNzaW9uKG5vZGUsIHByaW50KSB7XG4gIHByaW50LnBsYWluKG5vZGUudGFnKTtcbiAgcHJpbnQucGxhaW4obm9kZS5xdWFzaSk7XG59XG5cbi8qKlxuICogUHJpbnRzIFRlbXBsYXRlRWxlbWVudCwgcHJpbnRzIHZhbHVlLlxuICovXG5cbmZ1bmN0aW9uIFRlbXBsYXRlRWxlbWVudChub2RlKSB7XG4gIHRoaXMuX3B1c2gobm9kZS52YWx1ZS5yYXcpO1xufVxuXG4vKipcbiAqIFByaW50cyBUZW1wbGF0ZUxpdGVyYWwsIHByaW50cyBxdWFzaXMsIGFuZCBleHByZXNzaW9ucy5cbiAqL1xuXG5mdW5jdGlvbiBUZW1wbGF0ZUxpdGVyYWwobm9kZSwgcHJpbnQpIHtcbiAgdGhpcy5wdXNoKFwiYFwiKTtcblxuICB2YXIgcXVhc2lzID0gbm9kZS5xdWFzaXM7XG4gIHZhciBsZW4gPSBxdWFzaXMubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBwcmludC5wbGFpbihxdWFzaXNbaV0pO1xuXG4gICAgaWYgKGkgKyAxIDwgbGVuKSB7XG4gICAgICB0aGlzLnB1c2goXCIkeyBcIik7XG4gICAgICBwcmludC5wbGFpbihub2RlLmV4cHJlc3Npb25zW2ldKTtcbiAgICAgIHRoaXMucHVzaChcIiB9XCIpO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMuX3B1c2goXCJgXCIpO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
