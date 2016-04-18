/* */
"format cjs";
/**
 * Print File.program
 */

"use strict";

System.register([], function (_export, _context) {

  function File(node, print) {
    print.plain(node.program);
  }

  /**
   * Print all nodes in a Program.body.
   */

  function Program(node, print) {
    print.sequence(node.body);
  }

  /**
   * Print BlockStatement, collapses empty blocks, prints body.
   */

  function BlockStatement(node, print) {
    this.push("{");
    if (node.body.length) {
      this.newline();
      print.sequence(node.body, { indent: true });
      if (!this.format.retainLines) this.removeLast("\n");
      this.rightBrace();
    } else {
      print.printInnerComments();
      this.push("}");
    }
  }

  /**
   * What is my purpose?
   * Why am I here?
   * Why are any of us here?
   * Does any of this really matter?
   */

  function Noop() {}
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.File = File;
      exports.Program = Program;
      exports.BlockStatement = BlockStatement;
      exports.Noop = Noop;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvZ2VuZXJhdGlvbi9nZW5lcmF0b3JzL2Jhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7OztBQUtBOzs7O0FBUUEsV0FBUyxJQUFULENBQWMsSUFBZCxFQUFvQixLQUFwQixFQUEyQjtBQUN6QixVQUFNLEtBQU4sQ0FBWSxLQUFLLE9BQUwsQ0FBWixDQUR5QjtHQUEzQjs7Ozs7O0FBUUEsV0FBUyxPQUFULENBQWlCLElBQWpCLEVBQXVCLEtBQXZCLEVBQThCO0FBQzVCLFVBQU0sUUFBTixDQUFlLEtBQUssSUFBTCxDQUFmLENBRDRCO0dBQTlCOzs7Ozs7QUFRQSxXQUFTLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsS0FBOUIsRUFBcUM7QUFDbkMsU0FBSyxJQUFMLENBQVUsR0FBVixFQURtQztBQUVuQyxRQUFJLEtBQUssSUFBTCxDQUFVLE1BQVYsRUFBa0I7QUFDcEIsV0FBSyxPQUFMLEdBRG9CO0FBRXBCLFlBQU0sUUFBTixDQUFlLEtBQUssSUFBTCxFQUFXLEVBQUUsUUFBUSxJQUFSLEVBQTVCLEVBRm9CO0FBR3BCLFVBQUksQ0FBQyxLQUFLLE1BQUwsQ0FBWSxXQUFaLEVBQXlCLEtBQUssVUFBTCxDQUFnQixJQUFoQixFQUE5QjtBQUNBLFdBQUssVUFBTCxHQUpvQjtLQUF0QixNQUtPO0FBQ0wsWUFBTSxrQkFBTixHQURLO0FBRUwsV0FBSyxJQUFMLENBQVUsR0FBVixFQUZLO0tBTFA7R0FGRjs7Ozs7Ozs7O0FBb0JBLFdBQVMsSUFBVCxHQUFnQixFQUFoQjs7OztBQTFDQSxjQUFRLFVBQVIsR0FBcUIsSUFBckI7QUFDQSxjQUFRLElBQVIsR0FBZSxJQUFmO0FBQ0EsY0FBUSxPQUFSLEdBQWtCLE9BQWxCO0FBQ0EsY0FBUSxjQUFSLEdBQXlCLGNBQXpCO0FBQ0EsY0FBUSxJQUFSLEdBQWUsSUFBZiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL2dlbmVyYXRpb24vZ2VuZXJhdG9ycy9iYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcbi8qKlxuICogUHJpbnQgRmlsZS5wcm9ncmFtXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkZpbGUgPSBGaWxlO1xuZXhwb3J0cy5Qcm9ncmFtID0gUHJvZ3JhbTtcbmV4cG9ydHMuQmxvY2tTdGF0ZW1lbnQgPSBCbG9ja1N0YXRlbWVudDtcbmV4cG9ydHMuTm9vcCA9IE5vb3A7XG5cbmZ1bmN0aW9uIEZpbGUobm9kZSwgcHJpbnQpIHtcbiAgcHJpbnQucGxhaW4obm9kZS5wcm9ncmFtKTtcbn1cblxuLyoqXG4gKiBQcmludCBhbGwgbm9kZXMgaW4gYSBQcm9ncmFtLmJvZHkuXG4gKi9cblxuZnVuY3Rpb24gUHJvZ3JhbShub2RlLCBwcmludCkge1xuICBwcmludC5zZXF1ZW5jZShub2RlLmJvZHkpO1xufVxuXG4vKipcbiAqIFByaW50IEJsb2NrU3RhdGVtZW50LCBjb2xsYXBzZXMgZW1wdHkgYmxvY2tzLCBwcmludHMgYm9keS5cbiAqL1xuXG5mdW5jdGlvbiBCbG9ja1N0YXRlbWVudChub2RlLCBwcmludCkge1xuICB0aGlzLnB1c2goXCJ7XCIpO1xuICBpZiAobm9kZS5ib2R5Lmxlbmd0aCkge1xuICAgIHRoaXMubmV3bGluZSgpO1xuICAgIHByaW50LnNlcXVlbmNlKG5vZGUuYm9keSwgeyBpbmRlbnQ6IHRydWUgfSk7XG4gICAgaWYgKCF0aGlzLmZvcm1hdC5yZXRhaW5MaW5lcykgdGhpcy5yZW1vdmVMYXN0KFwiXFxuXCIpO1xuICAgIHRoaXMucmlnaHRCcmFjZSgpO1xuICB9IGVsc2Uge1xuICAgIHByaW50LnByaW50SW5uZXJDb21tZW50cygpO1xuICAgIHRoaXMucHVzaChcIn1cIik7XG4gIH1cbn1cblxuLyoqXG4gKiBXaGF0IGlzIG15IHB1cnBvc2U/XG4gKiBXaHkgYW0gSSBoZXJlP1xuICogV2h5IGFyZSBhbnkgb2YgdXMgaGVyZT9cbiAqIERvZXMgYW55IG9mIHRoaXMgcmVhbGx5IG1hdHRlcj9cbiAqL1xuXG5mdW5jdGlvbiBOb29wKCkge30iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
