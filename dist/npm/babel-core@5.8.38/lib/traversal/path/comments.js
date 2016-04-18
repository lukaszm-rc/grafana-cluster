/* */
"format cjs";
/**
 * Share comments amongst siblings.
 */

"use strict";

System.register([], function (_export, _context) {

  function shareCommentsWithSiblings() {
    var node = this.node;
    if (!node) return;

    var trailing = node.trailingComments;
    var leading = node.leadingComments;
    if (!trailing && !leading) return;

    var prev = this.getSibling(this.key - 1);
    var next = this.getSibling(this.key + 1);

    if (!prev.node) prev = next;
    if (!next.node) next = prev;

    prev.addComments("trailing", leading);
    next.addComments("leading", trailing);
  }

  /**
   * [Please add a description.]
   */

  function addComment(type, content, line) {
    this.addComments(type, [{
      type: line ? "CommentLine" : "CommentBlock",
      value: content
    }]);
  }

  /**
   * Give node `comments` of the specified `type`.
   */

  function addComments(type, comments) {
    if (!comments) return;

    var node = this.node;
    if (!node) return;

    var key = type + "Comments";

    if (node[key]) {
      node[key] = node[key].concat(comments);
    } else {
      node[key] = comments;
    }
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.shareCommentsWithSiblings = shareCommentsWithSiblings;
      exports.addComment = addComment;
      exports.addComments = addComments;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3BhdGgvY29tbWVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7OztBQUtBOzs7O0FBT0EsV0FBUyx5QkFBVCxHQUFxQztBQUNuQyxRQUFJLE9BQU8sS0FBSyxJQUFMLENBRHdCO0FBRW5DLFFBQUksQ0FBQyxJQUFELEVBQU8sT0FBWDs7QUFFQSxRQUFJLFdBQVcsS0FBSyxnQkFBTCxDQUpvQjtBQUtuQyxRQUFJLFVBQVUsS0FBSyxlQUFMLENBTHFCO0FBTW5DLFFBQUksQ0FBQyxRQUFELElBQWEsQ0FBQyxPQUFELEVBQVUsT0FBM0I7O0FBRUEsUUFBSSxPQUFPLEtBQUssVUFBTCxDQUFnQixLQUFLLEdBQUwsR0FBVyxDQUFYLENBQXZCLENBUitCO0FBU25DLFFBQUksT0FBTyxLQUFLLFVBQUwsQ0FBZ0IsS0FBSyxHQUFMLEdBQVcsQ0FBWCxDQUF2QixDQVQrQjs7QUFXbkMsUUFBSSxDQUFDLEtBQUssSUFBTCxFQUFXLE9BQU8sSUFBUCxDQUFoQjtBQUNBLFFBQUksQ0FBQyxLQUFLLElBQUwsRUFBVyxPQUFPLElBQVAsQ0FBaEI7O0FBRUEsU0FBSyxXQUFMLENBQWlCLFVBQWpCLEVBQTZCLE9BQTdCLEVBZG1DO0FBZW5DLFNBQUssV0FBTCxDQUFpQixTQUFqQixFQUE0QixRQUE1QixFQWZtQztHQUFyQzs7Ozs7O0FBc0JBLFdBQVMsVUFBVCxDQUFvQixJQUFwQixFQUEwQixPQUExQixFQUFtQyxJQUFuQyxFQUF5QztBQUN2QyxTQUFLLFdBQUwsQ0FBaUIsSUFBakIsRUFBdUIsQ0FBQztBQUN0QixZQUFNLE9BQU8sYUFBUCxHQUF1QixjQUF2QjtBQUNOLGFBQU8sT0FBUDtLQUZxQixDQUF2QixFQUR1QztHQUF6Qzs7Ozs7O0FBV0EsV0FBUyxXQUFULENBQXFCLElBQXJCLEVBQTJCLFFBQTNCLEVBQXFDO0FBQ25DLFFBQUksQ0FBQyxRQUFELEVBQVcsT0FBZjs7QUFFQSxRQUFJLE9BQU8sS0FBSyxJQUFMLENBSHdCO0FBSW5DLFFBQUksQ0FBQyxJQUFELEVBQU8sT0FBWDs7QUFFQSxRQUFJLE1BQU0sT0FBTyxVQUFQLENBTnlCOztBQVFuQyxRQUFJLEtBQUssR0FBTCxDQUFKLEVBQWU7QUFDYixXQUFLLEdBQUwsSUFBWSxLQUFLLEdBQUwsRUFBVSxNQUFWLENBQWlCLFFBQWpCLENBQVosQ0FEYTtLQUFmLE1BRU87QUFDTCxXQUFLLEdBQUwsSUFBWSxRQUFaLENBREs7S0FGUDtHQVJGOzs7O0FBdENBLGNBQVEsVUFBUixHQUFxQixJQUFyQjtBQUNBLGNBQVEseUJBQVIsR0FBb0MseUJBQXBDO0FBQ0EsY0FBUSxVQUFSLEdBQXFCLFVBQXJCO0FBQ0EsY0FBUSxXQUFSLEdBQXNCLFdBQXRCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3BhdGgvY29tbWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuLyoqXG4gKiBTaGFyZSBjb21tZW50cyBhbW9uZ3N0IHNpYmxpbmdzLlxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zaGFyZUNvbW1lbnRzV2l0aFNpYmxpbmdzID0gc2hhcmVDb21tZW50c1dpdGhTaWJsaW5ncztcbmV4cG9ydHMuYWRkQ29tbWVudCA9IGFkZENvbW1lbnQ7XG5leHBvcnRzLmFkZENvbW1lbnRzID0gYWRkQ29tbWVudHM7XG5cbmZ1bmN0aW9uIHNoYXJlQ29tbWVudHNXaXRoU2libGluZ3MoKSB7XG4gIHZhciBub2RlID0gdGhpcy5ub2RlO1xuICBpZiAoIW5vZGUpIHJldHVybjtcblxuICB2YXIgdHJhaWxpbmcgPSBub2RlLnRyYWlsaW5nQ29tbWVudHM7XG4gIHZhciBsZWFkaW5nID0gbm9kZS5sZWFkaW5nQ29tbWVudHM7XG4gIGlmICghdHJhaWxpbmcgJiYgIWxlYWRpbmcpIHJldHVybjtcblxuICB2YXIgcHJldiA9IHRoaXMuZ2V0U2libGluZyh0aGlzLmtleSAtIDEpO1xuICB2YXIgbmV4dCA9IHRoaXMuZ2V0U2libGluZyh0aGlzLmtleSArIDEpO1xuXG4gIGlmICghcHJldi5ub2RlKSBwcmV2ID0gbmV4dDtcbiAgaWYgKCFuZXh0Lm5vZGUpIG5leHQgPSBwcmV2O1xuXG4gIHByZXYuYWRkQ29tbWVudHMoXCJ0cmFpbGluZ1wiLCBsZWFkaW5nKTtcbiAgbmV4dC5hZGRDb21tZW50cyhcImxlYWRpbmdcIiwgdHJhaWxpbmcpO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIGFkZENvbW1lbnQodHlwZSwgY29udGVudCwgbGluZSkge1xuICB0aGlzLmFkZENvbW1lbnRzKHR5cGUsIFt7XG4gICAgdHlwZTogbGluZSA/IFwiQ29tbWVudExpbmVcIiA6IFwiQ29tbWVudEJsb2NrXCIsXG4gICAgdmFsdWU6IGNvbnRlbnRcbiAgfV0pO1xufVxuXG4vKipcbiAqIEdpdmUgbm9kZSBgY29tbWVudHNgIG9mIHRoZSBzcGVjaWZpZWQgYHR5cGVgLlxuICovXG5cbmZ1bmN0aW9uIGFkZENvbW1lbnRzKHR5cGUsIGNvbW1lbnRzKSB7XG4gIGlmICghY29tbWVudHMpIHJldHVybjtcblxuICB2YXIgbm9kZSA9IHRoaXMubm9kZTtcbiAgaWYgKCFub2RlKSByZXR1cm47XG5cbiAgdmFyIGtleSA9IHR5cGUgKyBcIkNvbW1lbnRzXCI7XG5cbiAgaWYgKG5vZGVba2V5XSkge1xuICAgIG5vZGVba2V5XSA9IG5vZGVba2V5XS5jb25jYXQoY29tbWVudHMpO1xuICB9IGVsc2Uge1xuICAgIG5vZGVba2V5XSA9IGNvbW1lbnRzO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
