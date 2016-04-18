/* */
"format cjs";
/**
 * Printer for nodes, needs a `generator` and a `parent`.
 */

"use strict";

System.register([], function (_export, _context) {
  var NodePrinter;

  // istanbul ignore next

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      NodePrinter = function () {
        function NodePrinter(generator, parent) {
          _classCallCheck(this, NodePrinter);

          this.generator = generator;
          this.parent = parent;
        }

        /**
         * Description
         */

        NodePrinter.prototype.printInnerComments = function printInnerComments() {
          if (!this.parent.innerComments) return;
          var gen = this.generator;
          gen.indent();
          gen._printComments(this.parent.innerComments);
          gen.dedent();
        };

        /**
         * Print a plain node.
         */

        NodePrinter.prototype.plain = function plain(node, opts) {
          return this.generator.print(node, this.parent, opts);
        };

        /**
         * Print a sequence of nodes as statements.
         */

        NodePrinter.prototype.sequence = function sequence(nodes) {
          var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

          opts.statement = true;
          return this.generator.printJoin(this, nodes, opts);
        };

        /**
         * Print a sequence of nodes as expressions.
         */

        NodePrinter.prototype.join = function join(nodes, opts) {
          return this.generator.printJoin(this, nodes, opts);
        };

        /**
         * Print a list of nodes, with a customizable separator (defaults to ",").
         */

        NodePrinter.prototype.list = function list(items) {
          var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

          if (opts.separator == null) {
            opts.separator = ",";
            if (!this.generator.format.compact) opts.separator += " ";
          }

          return this.join(items, opts);
        };

        /**
         * Print a block-like node.
         */

        NodePrinter.prototype.block = function block(node) {
          return this.generator.printBlock(this, node);
        };

        /**
         * Print node and indent comments.
         */

        NodePrinter.prototype.indentOnComments = function indentOnComments(node) {
          return this.generator.printAndIndentOnComments(this, node);
        };

        return NodePrinter;
      }();

      exports["default"] = NodePrinter;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvZ2VuZXJhdGlvbi9ub2RlL3ByaW50ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7OztBQUtBOzs7Ozs7O0FBS0EsV0FBUyxlQUFULENBQXlCLFFBQXpCLEVBQW1DLFdBQW5DLEVBQWdEO0FBQUUsUUFBSSxFQUFFLG9CQUFvQixXQUFwQixDQUFGLEVBQW9DO0FBQUUsWUFBTSxJQUFJLFNBQUosQ0FBYyxtQ0FBZCxDQUFOLENBQUY7S0FBeEM7R0FBbEQ7Ozs7O0FBSEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCO0FBS0ksb0JBQWMsWUFBYTtBQUM3QixpQkFBUyxXQUFULENBQXFCLFNBQXJCLEVBQWdDLE1BQWhDLEVBQXdDO0FBQ3RDLDBCQUFnQixJQUFoQixFQUFzQixXQUF0QixFQURzQzs7QUFHdEMsZUFBSyxTQUFMLEdBQWlCLFNBQWpCLENBSHNDO0FBSXRDLGVBQUssTUFBTCxHQUFjLE1BQWQsQ0FKc0M7U0FBeEM7Ozs7OztBQUQ2QixtQkFZN0IsQ0FBWSxTQUFaLENBQXNCLGtCQUF0QixHQUEyQyxTQUFTLGtCQUFULEdBQThCO0FBQ3ZFLGNBQUksQ0FBQyxLQUFLLE1BQUwsQ0FBWSxhQUFaLEVBQTJCLE9BQWhDO0FBQ0EsY0FBSSxNQUFNLEtBQUssU0FBTCxDQUY2RDtBQUd2RSxjQUFJLE1BQUosR0FIdUU7QUFJdkUsY0FBSSxjQUFKLENBQW1CLEtBQUssTUFBTCxDQUFZLGFBQVosQ0FBbkIsQ0FKdUU7QUFLdkUsY0FBSSxNQUFKLEdBTHVFO1NBQTlCOzs7Ozs7QUFaZCxtQkF3QjdCLENBQVksU0FBWixDQUFzQixLQUF0QixHQUE4QixTQUFTLEtBQVQsQ0FBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCO0FBQ3ZELGlCQUFPLEtBQUssU0FBTCxDQUFlLEtBQWYsQ0FBcUIsSUFBckIsRUFBMkIsS0FBSyxNQUFMLEVBQWEsSUFBeEMsQ0FBUCxDQUR1RDtTQUEzQjs7Ozs7O0FBeEJELG1CQWdDN0IsQ0FBWSxTQUFaLENBQXNCLFFBQXRCLEdBQWlDLFNBQVMsUUFBVCxDQUFrQixLQUFsQixFQUF5QjtBQUN4RCxjQUFJLE9BQU8sVUFBVSxNQUFWLElBQW9CLENBQXBCLElBQXlCLFVBQVUsQ0FBVixNQUFpQixTQUFqQixHQUE2QixFQUF0RCxHQUEyRCxVQUFVLENBQVYsQ0FBM0QsQ0FENkM7O0FBR3hELGVBQUssU0FBTCxHQUFpQixJQUFqQixDQUh3RDtBQUl4RCxpQkFBTyxLQUFLLFNBQUwsQ0FBZSxTQUFmLENBQXlCLElBQXpCLEVBQStCLEtBQS9CLEVBQXNDLElBQXRDLENBQVAsQ0FKd0Q7U0FBekI7Ozs7OztBQWhDSixtQkEyQzdCLENBQVksU0FBWixDQUFzQixJQUF0QixHQUE2QixTQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCLElBQXJCLEVBQTJCO0FBQ3RELGlCQUFPLEtBQUssU0FBTCxDQUFlLFNBQWYsQ0FBeUIsSUFBekIsRUFBK0IsS0FBL0IsRUFBc0MsSUFBdEMsQ0FBUCxDQURzRDtTQUEzQjs7Ozs7O0FBM0NBLG1CQW1EN0IsQ0FBWSxTQUFaLENBQXNCLElBQXRCLEdBQTZCLFNBQVMsSUFBVCxDQUFjLEtBQWQsRUFBcUI7QUFDaEQsY0FBSSxPQUFPLFVBQVUsTUFBVixJQUFvQixDQUFwQixJQUF5QixVQUFVLENBQVYsTUFBaUIsU0FBakIsR0FBNkIsRUFBdEQsR0FBMkQsVUFBVSxDQUFWLENBQTNELENBRHFDOztBQUdoRCxjQUFJLEtBQUssU0FBTCxJQUFrQixJQUFsQixFQUF3QjtBQUMxQixpQkFBSyxTQUFMLEdBQWlCLEdBQWpCLENBRDBCO0FBRTFCLGdCQUFJLENBQUMsS0FBSyxTQUFMLENBQWUsTUFBZixDQUFzQixPQUF0QixFQUErQixLQUFLLFNBQUwsSUFBa0IsR0FBbEIsQ0FBcEM7V0FGRjs7QUFLQSxpQkFBTyxLQUFLLElBQUwsQ0FBVSxLQUFWLEVBQWlCLElBQWpCLENBQVAsQ0FSZ0Q7U0FBckI7Ozs7OztBQW5EQSxtQkFrRTdCLENBQVksU0FBWixDQUFzQixLQUF0QixHQUE4QixTQUFTLEtBQVQsQ0FBZSxJQUFmLEVBQXFCO0FBQ2pELGlCQUFPLEtBQUssU0FBTCxDQUFlLFVBQWYsQ0FBMEIsSUFBMUIsRUFBZ0MsSUFBaEMsQ0FBUCxDQURpRDtTQUFyQjs7Ozs7O0FBbEVELG1CQTBFN0IsQ0FBWSxTQUFaLENBQXNCLGdCQUF0QixHQUF5QyxTQUFTLGdCQUFULENBQTBCLElBQTFCLEVBQWdDO0FBQ3ZFLGlCQUFPLEtBQUssU0FBTCxDQUFlLHdCQUFmLENBQXdDLElBQXhDLEVBQThDLElBQTlDLENBQVAsQ0FEdUU7U0FBaEMsQ0ExRVo7O0FBOEU3QixlQUFPLFdBQVAsQ0E5RTZCO09BQVo7O0FBaUZuQixjQUFRLFNBQVIsSUFBcUIsV0FBckI7QUFDQSxhQUFPLE9BQVAsR0FBaUIsUUFBUSxTQUFSLENBQWpCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvZ2VuZXJhdGlvbi9ub2RlL3ByaW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuLyoqXG4gKiBQcmludGVyIGZvciBub2RlcywgbmVlZHMgYSBgZ2VuZXJhdG9yYCBhbmQgYSBgcGFyZW50YC5cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBOb2RlUHJpbnRlciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE5vZGVQcmludGVyKGdlbmVyYXRvciwgcGFyZW50KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vZGVQcmludGVyKTtcblxuICAgIHRoaXMuZ2VuZXJhdG9yID0gZ2VuZXJhdG9yO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2NyaXB0aW9uXG4gICAqL1xuXG4gIE5vZGVQcmludGVyLnByb3RvdHlwZS5wcmludElubmVyQ29tbWVudHMgPSBmdW5jdGlvbiBwcmludElubmVyQ29tbWVudHMoKSB7XG4gICAgaWYgKCF0aGlzLnBhcmVudC5pbm5lckNvbW1lbnRzKSByZXR1cm47XG4gICAgdmFyIGdlbiA9IHRoaXMuZ2VuZXJhdG9yO1xuICAgIGdlbi5pbmRlbnQoKTtcbiAgICBnZW4uX3ByaW50Q29tbWVudHModGhpcy5wYXJlbnQuaW5uZXJDb21tZW50cyk7XG4gICAgZ2VuLmRlZGVudCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcmludCBhIHBsYWluIG5vZGUuXG4gICAqL1xuXG4gIE5vZGVQcmludGVyLnByb3RvdHlwZS5wbGFpbiA9IGZ1bmN0aW9uIHBsYWluKG5vZGUsIG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5nZW5lcmF0b3IucHJpbnQobm9kZSwgdGhpcy5wYXJlbnQsIG9wdHMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcmludCBhIHNlcXVlbmNlIG9mIG5vZGVzIGFzIHN0YXRlbWVudHMuXG4gICAqL1xuXG4gIE5vZGVQcmludGVyLnByb3RvdHlwZS5zZXF1ZW5jZSA9IGZ1bmN0aW9uIHNlcXVlbmNlKG5vZGVzKSB7XG4gICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIG9wdHMuc3RhdGVtZW50ID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5nZW5lcmF0b3IucHJpbnRKb2luKHRoaXMsIG5vZGVzLCBvcHRzKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJpbnQgYSBzZXF1ZW5jZSBvZiBub2RlcyBhcyBleHByZXNzaW9ucy5cbiAgICovXG5cbiAgTm9kZVByaW50ZXIucHJvdG90eXBlLmpvaW4gPSBmdW5jdGlvbiBqb2luKG5vZGVzLCBvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2VuZXJhdG9yLnByaW50Sm9pbih0aGlzLCBub2Rlcywgb3B0cyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaW50IGEgbGlzdCBvZiBub2Rlcywgd2l0aCBhIGN1c3RvbWl6YWJsZSBzZXBhcmF0b3IgKGRlZmF1bHRzIHRvIFwiLFwiKS5cbiAgICovXG5cbiAgTm9kZVByaW50ZXIucHJvdG90eXBlLmxpc3QgPSBmdW5jdGlvbiBsaXN0KGl0ZW1zKSB7XG4gICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIGlmIChvcHRzLnNlcGFyYXRvciA9PSBudWxsKSB7XG4gICAgICBvcHRzLnNlcGFyYXRvciA9IFwiLFwiO1xuICAgICAgaWYgKCF0aGlzLmdlbmVyYXRvci5mb3JtYXQuY29tcGFjdCkgb3B0cy5zZXBhcmF0b3IgKz0gXCIgXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuam9pbihpdGVtcywgb3B0cyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaW50IGEgYmxvY2stbGlrZSBub2RlLlxuICAgKi9cblxuICBOb2RlUHJpbnRlci5wcm90b3R5cGUuYmxvY2sgPSBmdW5jdGlvbiBibG9jayhub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2VuZXJhdG9yLnByaW50QmxvY2sodGhpcywgbm9kZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByaW50IG5vZGUgYW5kIGluZGVudCBjb21tZW50cy5cbiAgICovXG5cbiAgTm9kZVByaW50ZXIucHJvdG90eXBlLmluZGVudE9uQ29tbWVudHMgPSBmdW5jdGlvbiBpbmRlbnRPbkNvbW1lbnRzKG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5nZW5lcmF0b3IucHJpbnRBbmRJbmRlbnRPbkNvbW1lbnRzKHRoaXMsIG5vZGUpO1xuICB9O1xuXG4gIHJldHVybiBOb2RlUHJpbnRlcjtcbn0pKCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTm9kZVByaW50ZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
