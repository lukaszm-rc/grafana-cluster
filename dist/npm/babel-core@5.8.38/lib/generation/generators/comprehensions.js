/* */
"format cjs";
/**
 * Prints ComprehensionBlock, prints left and right.
 */

"use strict";

System.register([], function (_export, _context) {

  function ComprehensionBlock(node, print) {
    this.keyword("for");
    this.push("(");
    print.plain(node.left);
    this.push(" of ");
    print.plain(node.right);
    this.push(")");
  }

  /**
   * Prints ComprehensionExpression, prints blocks, filter, and body. Handles generators.
   */

  function ComprehensionExpression(node, print) {
    this.push(node.generator ? "(" : "[");

    print.join(node.blocks, { separator: " " });
    this.space();

    if (node.filter) {
      this.keyword("if");
      this.push("(");
      print.plain(node.filter);
      this.push(")");
      this.space();
    }

    print.plain(node.body);

    this.push(node.generator ? ")" : "]");
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.ComprehensionBlock = ComprehensionBlock;
      exports.ComprehensionExpression = ComprehensionExpression;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvZ2VuZXJhdGlvbi9nZW5lcmF0b3JzL2NvbXByZWhlbnNpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7QUFLQTs7OztBQU1BLFdBQVMsa0JBQVQsQ0FBNEIsSUFBNUIsRUFBa0MsS0FBbEMsRUFBeUM7QUFDdkMsU0FBSyxPQUFMLENBQWEsS0FBYixFQUR1QztBQUV2QyxTQUFLLElBQUwsQ0FBVSxHQUFWLEVBRnVDO0FBR3ZDLFVBQU0sS0FBTixDQUFZLEtBQUssSUFBTCxDQUFaLENBSHVDO0FBSXZDLFNBQUssSUFBTCxDQUFVLE1BQVYsRUFKdUM7QUFLdkMsVUFBTSxLQUFOLENBQVksS0FBSyxLQUFMLENBQVosQ0FMdUM7QUFNdkMsU0FBSyxJQUFMLENBQVUsR0FBVixFQU51QztHQUF6Qzs7Ozs7O0FBYUEsV0FBUyx1QkFBVCxDQUFpQyxJQUFqQyxFQUF1QyxLQUF2QyxFQUE4QztBQUM1QyxTQUFLLElBQUwsQ0FBVSxLQUFLLFNBQUwsR0FBaUIsR0FBakIsR0FBdUIsR0FBdkIsQ0FBVixDQUQ0Qzs7QUFHNUMsVUFBTSxJQUFOLENBQVcsS0FBSyxNQUFMLEVBQWEsRUFBRSxXQUFXLEdBQVgsRUFBMUIsRUFINEM7QUFJNUMsU0FBSyxLQUFMLEdBSjRDOztBQU01QyxRQUFJLEtBQUssTUFBTCxFQUFhO0FBQ2YsV0FBSyxPQUFMLENBQWEsSUFBYixFQURlO0FBRWYsV0FBSyxJQUFMLENBQVUsR0FBVixFQUZlO0FBR2YsWUFBTSxLQUFOLENBQVksS0FBSyxNQUFMLENBQVosQ0FIZTtBQUlmLFdBQUssSUFBTCxDQUFVLEdBQVYsRUFKZTtBQUtmLFdBQUssS0FBTCxHQUxlO0tBQWpCOztBQVFBLFVBQU0sS0FBTixDQUFZLEtBQUssSUFBTCxDQUFaLENBZDRDOztBQWdCNUMsU0FBSyxJQUFMLENBQVUsS0FBSyxTQUFMLEdBQWlCLEdBQWpCLEdBQXVCLEdBQXZCLENBQVYsQ0FoQjRDO0dBQTlDOzs7O0FBakJBLGNBQVEsVUFBUixHQUFxQixJQUFyQjtBQUNBLGNBQVEsa0JBQVIsR0FBNkIsa0JBQTdCO0FBQ0EsY0FBUSx1QkFBUixHQUFrQyx1QkFBbEMiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi9nZW5lcmF0aW9uL2dlbmVyYXRvcnMvY29tcHJlaGVuc2lvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuLyoqXG4gKiBQcmludHMgQ29tcHJlaGVuc2lvbkJsb2NrLCBwcmludHMgbGVmdCBhbmQgcmlnaHQuXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkNvbXByZWhlbnNpb25CbG9jayA9IENvbXByZWhlbnNpb25CbG9jaztcbmV4cG9ydHMuQ29tcHJlaGVuc2lvbkV4cHJlc3Npb24gPSBDb21wcmVoZW5zaW9uRXhwcmVzc2lvbjtcblxuZnVuY3Rpb24gQ29tcHJlaGVuc2lvbkJsb2NrKG5vZGUsIHByaW50KSB7XG4gIHRoaXMua2V5d29yZChcImZvclwiKTtcbiAgdGhpcy5wdXNoKFwiKFwiKTtcbiAgcHJpbnQucGxhaW4obm9kZS5sZWZ0KTtcbiAgdGhpcy5wdXNoKFwiIG9mIFwiKTtcbiAgcHJpbnQucGxhaW4obm9kZS5yaWdodCk7XG4gIHRoaXMucHVzaChcIilcIik7XG59XG5cbi8qKlxuICogUHJpbnRzIENvbXByZWhlbnNpb25FeHByZXNzaW9uLCBwcmludHMgYmxvY2tzLCBmaWx0ZXIsIGFuZCBib2R5LiBIYW5kbGVzIGdlbmVyYXRvcnMuXG4gKi9cblxuZnVuY3Rpb24gQ29tcHJlaGVuc2lvbkV4cHJlc3Npb24obm9kZSwgcHJpbnQpIHtcbiAgdGhpcy5wdXNoKG5vZGUuZ2VuZXJhdG9yID8gXCIoXCIgOiBcIltcIik7XG5cbiAgcHJpbnQuam9pbihub2RlLmJsb2NrcywgeyBzZXBhcmF0b3I6IFwiIFwiIH0pO1xuICB0aGlzLnNwYWNlKCk7XG5cbiAgaWYgKG5vZGUuZmlsdGVyKSB7XG4gICAgdGhpcy5rZXl3b3JkKFwiaWZcIik7XG4gICAgdGhpcy5wdXNoKFwiKFwiKTtcbiAgICBwcmludC5wbGFpbihub2RlLmZpbHRlcik7XG4gICAgdGhpcy5wdXNoKFwiKVwiKTtcbiAgICB0aGlzLnNwYWNlKCk7XG4gIH1cblxuICBwcmludC5wbGFpbihub2RlLmJvZHkpO1xuXG4gIHRoaXMucHVzaChub2RlLmdlbmVyYXRvciA/IFwiKVwiIDogXCJdXCIpO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
