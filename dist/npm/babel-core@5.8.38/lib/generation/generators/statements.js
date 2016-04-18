/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _repeating, _repeating2, _types, t, buildForXStatement, ForInStatement, ForOfStatement, buildLabelStatement, ContinueStatement, ReturnStatement, BreakStatement, ThrowStatement;

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

  /**
   * Prints WithStatement, prints object and body.
   */

  function WithStatement(node, print) {
    this.keyword("with");
    this.push("(");
    print.plain(node.object);
    this.push(")");
    print.block(node.body);
  }

  /**
   * Prints IfStatement, prints test, consequent, and alternate.
   */

  function IfStatement(node, print) {
    this.keyword("if");
    this.push("(");
    print.plain(node.test);
    this.push(")");
    this.space();

    print.indentOnComments(node.consequent);

    if (node.alternate) {
      if (this.isLast("}")) this.space();
      this.push("else ");
      print.indentOnComments(node.alternate);
    }
  }

  /**
   * Prints ForStatement, prints init, test, update, and body.
   */

  function ForStatement(node, print) {
    this.keyword("for");
    this.push("(");

    this._inForStatementInit = true;
    print.plain(node.init);
    this._inForStatementInit = false;
    this.push(";");

    if (node.test) {
      this.space();
      print.plain(node.test);
    }
    this.push(";");

    if (node.update) {
      this.space();
      print.plain(node.update);
    }

    this.push(")");
    print.block(node.body);
  }

  /**
   * Prints WhileStatement, prints test and body.
   */

  function WhileStatement(node, print) {
    this.keyword("while");
    this.push("(");
    print.plain(node.test);
    this.push(")");
    print.block(node.body);
  }

  /**
   * Builds ForIn or ForOf statement printers.
   * Prints left, right, and body.
   */

  /**
   * Prints DoWhileStatement, prints body and test.
   */

  function DoWhileStatement(node, print) {
    this.push("do ");
    print.plain(node.body);
    this.space();
    this.keyword("while");
    this.push("(");
    print.plain(node.test);
    this.push(");");
  }

  /**
   * Builds continue, return, or break statement printers.
   * Prints label (or key).
   */

  /**
   * Prints LabeledStatement, prints label and body.
   */

  function LabeledStatement(node, print) {
    print.plain(node.label);
    this.push(": ");
    print.plain(node.body);
  }

  /**
   * Prints TryStatement, prints block, handlers, and finalizer.
   */

  function TryStatement(node, print) {
    this.keyword("try");
    print.plain(node.block);
    this.space();

    // Esprima bug puts the catch clause in a `handlers` array.
    // see https://code.google.com/p/esprima/issues/detail?id=433
    // We run into this from regenerator generated ast.
    if (node.handlers) {
      print.plain(node.handlers[0]);
    } else {
      print.plain(node.handler);
    }

    if (node.finalizer) {
      this.space();
      this.push("finally ");
      print.plain(node.finalizer);
    }
  }

  /**
   * Prints CatchClause, prints param and body.
   */

  function CatchClause(node, print) {
    this.keyword("catch");
    this.push("(");
    print.plain(node.param);
    this.push(") ");
    print.plain(node.body);
  }

  /**
   * Prints SwitchStatement, prints discriminant and cases.
   */

  function SwitchStatement(node, print) {
    this.keyword("switch");
    this.push("(");
    print.plain(node.discriminant);
    this.push(")");
    this.space();
    this.push("{");

    print.sequence(node.cases, {
      indent: true,
      addNewlines: function addNewlines(leading, cas) {
        if (!leading && node.cases[node.cases.length - 1] === cas) return -1;
      }
    });

    this.push("}");
  }

  /**
   * Prints SwitchCase, prints test and consequent.
   */

  function SwitchCase(node, print) {
    if (node.test) {
      this.push("case ");
      print.plain(node.test);
      this.push(":");
    } else {
      this.push("default:");
    }

    if (node.consequent.length) {
      this.newline();
      print.sequence(node.consequent, { indent: true });
    }
  }

  /**
   * Prints DebuggerStatement.
   */

  function DebuggerStatement() {
    this.push("debugger;");
  }

  /**
   * Prints VariableDeclaration, prints declarations, handles kind and format.
   */

  function VariableDeclaration(node, print, parent) {
    this.push(node.kind + " ");

    var hasInits = false;
    // don't add whitespace to loop heads
    if (!t.isFor(parent)) {
      var _arr = node.declarations;

      for (var _i = 0; _i < _arr.length; _i++) {
        var declar = _arr[_i];
        if (declar.init) {
          // has an init so let's split it up over multiple lines
          hasInits = true;
        }
      }
    }

    //
    // use a pretty separator when we aren't in compact mode, have initializers and don't have retainLines on
    // this will format declarations like:
    //
    //   var foo = "bar", bar = "foo";
    //
    // into
    //
    //   var foo = "bar",
    //       bar = "foo";
    //

    var sep;
    if (!this.format.compact && !this.format.concise && hasInits && !this.format.retainLines) {
      sep = ",\n" + _repeating2["default"](" ", node.kind.length + 1);
    }

    //

    print.list(node.declarations, { separator: sep });

    if (t.isFor(parent)) {
      // don't give semicolons to these nodes since they'll be inserted in the parent generator
      if (parent.left === node || parent.init === node) return;
    }

    this.semicolon();
  }

  /**
   * Prints VariableDeclarator, handles id, id.typeAnnotation, and init.
   */

  function VariableDeclarator(node, print) {
    print.plain(node.id);
    print.plain(node.id.typeAnnotation);
    if (node.init) {
      this.space();
      this.push("=");
      this.space();
      print.plain(node.init);
    }
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.WithStatement = WithStatement;
      exports.IfStatement = IfStatement;
      exports.ForStatement = ForStatement;
      exports.WhileStatement = WhileStatement;
      exports.DoWhileStatement = DoWhileStatement;
      exports.LabeledStatement = LabeledStatement;
      exports.TryStatement = TryStatement;
      exports.CatchClause = CatchClause;
      exports.SwitchStatement = SwitchStatement;
      exports.SwitchCase = SwitchCase;
      exports.DebuggerStatement = DebuggerStatement;
      exports.VariableDeclaration = VariableDeclaration;
      exports.VariableDeclarator = VariableDeclarator;_repeating = require("repeating");
      _repeating2 = _interopRequireDefault(_repeating);
      _types = require("../../types");
      t = _interopRequireWildcard(_types);

      buildForXStatement = function buildForXStatement(op) {
        return function (node, print) {
          this.keyword("for");
          this.push("(");
          print.plain(node.left);
          this.push(" " + op + " ");
          print.plain(node.right);
          this.push(")");
          print.block(node.body);
        };
      };

      ForInStatement = buildForXStatement("in");

      exports.ForInStatement = ForInStatement;
      ForOfStatement = buildForXStatement("of");


      exports.ForOfStatement = ForOfStatement;
      buildLabelStatement = function buildLabelStatement(prefix) {
        var key = arguments.length <= 1 || arguments[1] === undefined ? "label" : arguments[1];

        return function (node, print) {
          this.push(prefix);

          var label = node[key];
          if (label) {
            this.push(" ");
            var terminatorState = this.startTerminatorless();
            print.plain(label);
            this.endTerminatorless(terminatorState);
          }

          this.semicolon();
        };
      };

      ContinueStatement = buildLabelStatement("continue");

      exports.ContinueStatement = ContinueStatement;
      ReturnStatement = buildLabelStatement("return", "argument");

      exports.ReturnStatement = ReturnStatement;
      BreakStatement = buildLabelStatement("break");

      exports.BreakStatement = BreakStatement;
      ThrowStatement = buildLabelStatement("throw", "argument");


      exports.ThrowStatement = ThrowStatement;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvZ2VuZXJhdGlvbi9nZW5lcmF0b3JzL3N0YXRlbWVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFrQkEsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7OztBQUlBLFdBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLEdBQXhCLEdBQThCLEVBQUUsV0FBVyxHQUFYLEVBQWhDLENBQVQ7R0FBckM7Ozs7OztBQWNBLFdBQVMsYUFBVCxDQUF1QixJQUF2QixFQUE2QixLQUE3QixFQUFvQztBQUNsQyxTQUFLLE9BQUwsQ0FBYSxNQUFiLEVBRGtDO0FBRWxDLFNBQUssSUFBTCxDQUFVLEdBQVYsRUFGa0M7QUFHbEMsVUFBTSxLQUFOLENBQVksS0FBSyxNQUFMLENBQVosQ0FIa0M7QUFJbEMsU0FBSyxJQUFMLENBQVUsR0FBVixFQUprQztBQUtsQyxVQUFNLEtBQU4sQ0FBWSxLQUFLLElBQUwsQ0FBWixDQUxrQztHQUFwQzs7Ozs7O0FBWUEsV0FBUyxXQUFULENBQXFCLElBQXJCLEVBQTJCLEtBQTNCLEVBQWtDO0FB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QztBQUM3RCxZQUFJLE1BQU0sVUFBVSxNQUFWLElBQW9CLENBQXBCLElBQXlCLFVBQVUsQ0FBVixNQUFpQixTQUFqQixHQUE2QixPQUF0RCxHQUFnRSxVQUFVLENBQVYsQ0FBaEUsQ0FEbUQ7O0FBRzdELGVBQU8sVUFBVSxJQUFWLEVBQWdCLEtBQWhCLEVBQXVCO0FBQzVCLGVBQUssSUFBTCxDQUFVLE1BQVYsRUFENEI7O0FBRzVCLGNBQUksUUFBUSxLQUFLLEdBQUwsQ0FBUixDQUh3QjtBQUk1QixjQUFJLEtBQUosRUFBVztBQUNULGlCQUFLLElBQUwsQ0FBVSxHQUFWLEVBRFM7QUFFVCxnQkFBSSxrQkFBa0IsS0FBSyxtQkFBTCxFQUFsQixDQUZLO0FBR1Qsa0JBQU0sS0FBTixDQUFZLEtBQVosRUFIUztBQUlULGlCQUFLLGlCQUFMLENBQXVCLGVBQXZCLEVBSlM7V0FBWDs7QUFPQSxlQUFLLFNBQUwsR0FYNEI7U0FBdkIsQ0FIc0Q7T0FBckM7O0FBc0J0QiwwQkFBb0Isb0JBQW9CLFVBQXBCOztBQUN4QixjQUFRLGlCQUFSLEdBQTRCLGlCQUE1QjtBQUNJLHdCQUFrQixvQkFBb0IsUUFBcEIsRUFBOEIsVUFBOUI7O0FBQ3RCLGNBQVEsZUFBUixHQUEwQixlQUExQjtBQUNJLHVCQUFpQixvQkFBb0IsT0FBcEI7O0FBQ3JCLGNBQVEsY0FBUixHQUF5QixjQUF6QjtBQUNJLHVCQUFpQixvQkFBb0IsT0FBcEIsRUFBNkIsVUFBN0I7OztBQUVyQixjQUFRLGNBQVIsR0FBeUIsY0FBekIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi9nZW5lcmF0aW9uL2dlbmVyYXRvcnMvc3RhdGVtZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuV2l0aFN0YXRlbWVudCA9IFdpdGhTdGF0ZW1lbnQ7XG5leHBvcnRzLklmU3RhdGVtZW50ID0gSWZTdGF0ZW1lbnQ7XG5leHBvcnRzLkZvclN0YXRlbWVudCA9IEZvclN0YXRlbWVudDtcbmV4cG9ydHMuV2hpbGVTdGF0ZW1lbnQgPSBXaGlsZVN0YXRlbWVudDtcbmV4cG9ydHMuRG9XaGlsZVN0YXRlbWVudCA9IERvV2hpbGVTdGF0ZW1lbnQ7XG5leHBvcnRzLkxhYmVsZWRTdGF0ZW1lbnQgPSBMYWJlbGVkU3RhdGVtZW50O1xuZXhwb3J0cy5UcnlTdGF0ZW1lbnQgPSBUcnlTdGF0ZW1lbnQ7XG5leHBvcnRzLkNhdGNoQ2xhdXNlID0gQ2F0Y2hDbGF1c2U7XG5leHBvcnRzLlN3aXRjaFN0YXRlbWVudCA9IFN3aXRjaFN0YXRlbWVudDtcbmV4cG9ydHMuU3dpdGNoQ2FzZSA9IFN3aXRjaENhc2U7XG5leHBvcnRzLkRlYnVnZ2VyU3RhdGVtZW50ID0gRGVidWdnZXJTdGF0ZW1lbnQ7XG5leHBvcnRzLlZhcmlhYmxlRGVjbGFyYXRpb24gPSBWYXJpYWJsZURlY2xhcmF0aW9uO1xuZXhwb3J0cy5WYXJpYWJsZURlY2xhcmF0b3IgPSBWYXJpYWJsZURlY2xhcmF0b3I7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX3JlcGVhdGluZyA9IHJlcXVpcmUoXCJyZXBlYXRpbmdcIik7XG5cbnZhciBfcmVwZWF0aW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlcGVhdGluZyk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxuLyoqXG4gKiBQcmludHMgV2l0aFN0YXRlbWVudCwgcHJpbnRzIG9iamVjdCBhbmQgYm9keS5cbiAqL1xuXG5mdW5jdGlvbiBXaXRoU3RhdGVtZW50KG5vZGUsIHByaW50KSB7XG4gIHRoaXMua2V5d29yZChcIndpdGhcIik7XG4gIHRoaXMucHVzaChcIihcIik7XG4gIHByaW50LnBsYWluKG5vZGUub2JqZWN0KTtcbiAgdGhpcy5wdXNoKFwiKVwiKTtcbiAgcHJpbnQuYmxvY2sobm9kZS5ib2R5KTtcbn1cblxuLyoqXG4gKiBQcmludHMgSWZTdGF0ZW1lbnQsIHByaW50cyB0ZXN0LCBjb25zZXF1ZW50LCBhbmQgYWx0ZXJuYXRlLlxuICovXG5cbmZ1bmN0aW9uIElmU3RhdGVtZW50KG5vZGUsIHByaW50KSB7XG4gIHRoaXMua2V5d29yZChcImlmXCIpO1xuICB0aGlzLnB1c2goXCIoXCIpO1xuICBwcmludC5wbGFpbihub2RlLnRlc3QpO1xuICB0aGlzLnB1c2goXCIpXCIpO1xuICB0aGlzLnNwYWNlKCk7XG5cbiAgcHJpbnQuaW5kZW50T25Db21tZW50cyhub2RlLmNvbnNlcXVlbnQpO1xuXG4gIGlmIChub2RlLmFsdGVybmF0ZSkge1xuICAgIGlmICh0aGlzLmlzTGFzdChcIn1cIikpIHRoaXMuc3BhY2UoKTtcbiAgICB0aGlzLnB1c2goXCJlbHNlIFwiKTtcbiAgICBwcmludC5pbmRlbnRPbkNvbW1lbnRzKG5vZGUuYWx0ZXJuYXRlKTtcbiAgfVxufVxuXG4vKipcbiAqIFByaW50cyBGb3JTdGF0ZW1lbnQsIHByaW50cyBpbml0LCB0ZXN0LCB1cGRhdGUsIGFuZCBib2R5LlxuICovXG5cbmZ1bmN0aW9uIEZvclN0YXRlbWVudChub2RlLCBwcmludCkge1xuICB0aGlzLmtleXdvcmQoXCJmb3JcIik7XG4gIHRoaXMucHVzaChcIihcIik7XG5cbiAgdGhpcy5faW5Gb3JTdGF0ZW1lbnRJbml0ID0gdHJ1ZTtcbiAgcHJpbnQucGxhaW4obm9kZS5pbml0KTtcbiAgdGhpcy5faW5Gb3JTdGF0ZW1lbnRJbml0ID0gZmFsc2U7XG4gIHRoaXMucHVzaChcIjtcIik7XG5cbiAgaWYgKG5vZGUudGVzdCkge1xuICAgIHRoaXMuc3BhY2UoKTtcbiAgICBwcmludC5wbGFpbihub2RlLnRlc3QpO1xuICB9XG4gIHRoaXMucHVzaChcIjtcIik7XG5cbiAgaWYgKG5vZGUudXBkYXRlKSB7XG4gICAgdGhpcy5zcGFjZSgpO1xuICAgIHByaW50LnBsYWluKG5vZGUudXBkYXRlKTtcbiAgfVxuXG4gIHRoaXMucHVzaChcIilcIik7XG4gIHByaW50LmJsb2NrKG5vZGUuYm9keSk7XG59XG5cbi8qKlxuICogUHJpbnRzIFdoaWxlU3RhdGVtZW50LCBwcmludHMgdGVzdCBhbmQgYm9keS5cbiAqL1xuXG5mdW5jdGlvbiBXaGlsZVN0YXRlbWVudChub2RlLCBwcmludCkge1xuICB0aGlzLmtleXdvcmQoXCJ3aGlsZVwiKTtcbiAgdGhpcy5wdXNoKFwiKFwiKTtcbiAgcHJpbnQucGxhaW4obm9kZS50ZXN0KTtcbiAgdGhpcy5wdXNoKFwiKVwiKTtcbiAgcHJpbnQuYmxvY2sobm9kZS5ib2R5KTtcbn1cblxuLyoqXG4gKiBCdWlsZHMgRm9ySW4gb3IgRm9yT2Ygc3RhdGVtZW50IHByaW50ZXJzLlxuICogUHJpbnRzIGxlZnQsIHJpZ2h0LCBhbmQgYm9keS5cbiAqL1xuXG52YXIgYnVpbGRGb3JYU3RhdGVtZW50ID0gZnVuY3Rpb24gYnVpbGRGb3JYU3RhdGVtZW50KG9wKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobm9kZSwgcHJpbnQpIHtcbiAgICB0aGlzLmtleXdvcmQoXCJmb3JcIik7XG4gICAgdGhpcy5wdXNoKFwiKFwiKTtcbiAgICBwcmludC5wbGFpbihub2RlLmxlZnQpO1xuICAgIHRoaXMucHVzaChcIiBcIiArIG9wICsgXCIgXCIpO1xuICAgIHByaW50LnBsYWluKG5vZGUucmlnaHQpO1xuICAgIHRoaXMucHVzaChcIilcIik7XG4gICAgcHJpbnQuYmxvY2sobm9kZS5ib2R5KTtcbiAgfTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIEZvckluU3RhdGVtZW50IGFuZCBGb3JPZlN0YXRlbWVudCBwcmludGVycy5cbiAqL1xuXG52YXIgRm9ySW5TdGF0ZW1lbnQgPSBidWlsZEZvclhTdGF0ZW1lbnQoXCJpblwiKTtcbmV4cG9ydHMuRm9ySW5TdGF0ZW1lbnQgPSBGb3JJblN0YXRlbWVudDtcbnZhciBGb3JPZlN0YXRlbWVudCA9IGJ1aWxkRm9yWFN0YXRlbWVudChcIm9mXCIpO1xuXG5leHBvcnRzLkZvck9mU3RhdGVtZW50ID0gRm9yT2ZTdGF0ZW1lbnQ7XG4vKipcbiAqIFByaW50cyBEb1doaWxlU3RhdGVtZW50LCBwcmludHMgYm9keSBhbmQgdGVzdC5cbiAqL1xuXG5mdW5jdGlvbiBEb1doaWxlU3RhdGVtZW50KG5vZGUsIHByaW50KSB7XG4gIHRoaXMucHVzaChcImRvIFwiKTtcbiAgcHJpbnQucGxhaW4obm9kZS5ib2R5KTtcbiAgdGhpcy5zcGFjZSgpO1xuICB0aGlzLmtleXdvcmQoXCJ3aGlsZVwiKTtcbiAgdGhpcy5wdXNoKFwiKFwiKTtcbiAgcHJpbnQucGxhaW4obm9kZS50ZXN0KTtcbiAgdGhpcy5wdXNoKFwiKTtcIik7XG59XG5cbi8qKlxuICogQnVpbGRzIGNvbnRpbnVlLCByZXR1cm4sIG9yIGJyZWFrIHN0YXRlbWVudCBwcmludGVycy5cbiAqIFByaW50cyBsYWJlbCAob3Iga2V5KS5cbiAqL1xuXG52YXIgYnVpbGRMYWJlbFN0YXRlbWVudCA9IGZ1bmN0aW9uIGJ1aWxkTGFiZWxTdGF0ZW1lbnQocHJlZml4KSB7XG4gIHZhciBrZXkgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBcImxhYmVsXCIgOiBhcmd1bWVudHNbMV07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChub2RlLCBwcmludCkge1xuICAgIHRoaXMucHVzaChwcmVmaXgpO1xuXG4gICAgdmFyIGxhYmVsID0gbm9kZVtrZXldO1xuICAgIGlmIChsYWJlbCkge1xuICAgICAgdGhpcy5wdXNoKFwiIFwiKTtcbiAgICAgIHZhciB0ZXJtaW5hdG9yU3RhdGUgPSB0aGlzLnN0YXJ0VGVybWluYXRvcmxlc3MoKTtcbiAgICAgIHByaW50LnBsYWluKGxhYmVsKTtcbiAgICAgIHRoaXMuZW5kVGVybWluYXRvcmxlc3ModGVybWluYXRvclN0YXRlKTtcbiAgICB9XG5cbiAgICB0aGlzLnNlbWljb2xvbigpO1xuICB9O1xufTtcblxuLyoqXG4gKiBDcmVhdGUgQ29udGludWVTdGF0ZW1lbnQsIFJldHVyblN0YXRlbWVudCwgYW5kIEJyZWFrU3RhdGVtZW50IHByaW50ZXJzLlxuICovXG5cbnZhciBDb250aW51ZVN0YXRlbWVudCA9IGJ1aWxkTGFiZWxTdGF0ZW1lbnQoXCJjb250aW51ZVwiKTtcbmV4cG9ydHMuQ29udGludWVTdGF0ZW1lbnQgPSBDb250aW51ZVN0YXRlbWVudDtcbnZhciBSZXR1cm5TdGF0ZW1lbnQgPSBidWlsZExhYmVsU3RhdGVtZW50KFwicmV0dXJuXCIsIFwiYXJndW1lbnRcIik7XG5leHBvcnRzLlJldHVyblN0YXRlbWVudCA9IFJldHVyblN0YXRlbWVudDtcbnZhciBCcmVha1N0YXRlbWVudCA9IGJ1aWxkTGFiZWxTdGF0ZW1lbnQoXCJicmVha1wiKTtcbmV4cG9ydHMuQnJlYWtTdGF0ZW1lbnQgPSBCcmVha1N0YXRlbWVudDtcbnZhciBUaHJvd1N0YXRlbWVudCA9IGJ1aWxkTGFiZWxTdGF0ZW1lbnQoXCJ0aHJvd1wiLCBcImFyZ3VtZW50XCIpO1xuXG5leHBvcnRzLlRocm93U3RhdGVtZW50ID0gVGhyb3dTdGF0ZW1lbnQ7XG4vKipcbiAqIFByaW50cyBMYWJlbGVkU3RhdGVtZW50LCBwcmludHMgbGFiZWwgYW5kIGJvZHkuXG4gKi9cblxuZnVuY3Rpb24gTGFiZWxlZFN0YXRlbWVudChub2RlLCBwcmludCkge1xuICBwcmludC5wbGFpbihub2RlLmxhYmVsKTtcbiAgdGhpcy5wdXNoKFwiOiBcIik7XG4gIHByaW50LnBsYWluKG5vZGUuYm9keSk7XG59XG5cbi8qKlxuICogUHJpbnRzIFRyeVN0YXRlbWVudCwgcHJpbnRzIGJsb2NrLCBoYW5kbGVycywgYW5kIGZpbmFsaXplci5cbiAqL1xuXG5mdW5jdGlvbiBUcnlTdGF0ZW1lbnQobm9kZSwgcHJpbnQpIHtcbiAgdGhpcy5rZXl3b3JkKFwidHJ5XCIpO1xuICBwcmludC5wbGFpbihub2RlLmJsb2NrKTtcbiAgdGhpcy5zcGFjZSgpO1xuXG4gIC8vIEVzcHJpbWEgYnVnIHB1dHMgdGhlIGNhdGNoIGNsYXVzZSBpbiBhIGBoYW5kbGVyc2AgYXJyYXkuXG4gIC8vIHNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2VzcHJpbWEvaXNzdWVzL2RldGFpbD9pZD00MzNcbiAgLy8gV2UgcnVuIGludG8gdGhpcyBmcm9tIHJlZ2VuZXJhdG9yIGdlbmVyYXRlZCBhc3QuXG4gIGlmIChub2RlLmhhbmRsZXJzKSB7XG4gICAgcHJpbnQucGxhaW4obm9kZS5oYW5kbGVyc1swXSk7XG4gIH0gZWxzZSB7XG4gICAgcHJpbnQucGxhaW4obm9kZS5oYW5kbGVyKTtcbiAgfVxuXG4gIGlmIChub2RlLmZpbmFsaXplcikge1xuICAgIHRoaXMuc3BhY2UoKTtcbiAgICB0aGlzLnB1c2goXCJmaW5hbGx5IFwiKTtcbiAgICBwcmludC5wbGFpbihub2RlLmZpbmFsaXplcik7XG4gIH1cbn1cblxuLyoqXG4gKiBQcmludHMgQ2F0Y2hDbGF1c2UsIHByaW50cyBwYXJhbSBhbmQgYm9keS5cbiAqL1xuXG5mdW5jdGlvbiBDYXRjaENsYXVzZShub2RlLCBwcmludCkge1xuICB0aGlzLmtleXdvcmQoXCJjYXRjaFwiKTtcbiAgdGhpcy5wdXNoKFwiKFwiKTtcbiAgcHJpbnQucGxhaW4obm9kZS5wYXJhbSk7XG4gIHRoaXMucHVzaChcIikgXCIpO1xuICBwcmludC5wbGFpbihub2RlLmJvZHkpO1xufVxuXG4vKipcbiAqIFByaW50cyBTd2l0Y2hTdGF0ZW1lbnQsIHByaW50cyBkaXNjcmltaW5hbnQgYW5kIGNhc2VzLlxuICovXG5cbmZ1bmN0aW9uIFN3aXRjaFN0YXRlbWVudChub2RlLCBwcmludCkge1xuICB0aGlzLmtleXdvcmQoXCJzd2l0Y2hcIik7XG4gIHRoaXMucHVzaChcIihcIik7XG4gIHByaW50LnBsYWluKG5vZGUuZGlzY3JpbWluYW50KTtcbiAgdGhpcy5wdXNoKFwiKVwiKTtcbiAgdGhpcy5zcGFjZSgpO1xuICB0aGlzLnB1c2goXCJ7XCIpO1xuXG4gIHByaW50LnNlcXVlbmNlKG5vZGUuY2FzZXMsIHtcbiAgICBpbmRlbnQ6IHRydWUsXG4gICAgYWRkTmV3bGluZXM6IGZ1bmN0aW9uIGFkZE5ld2xpbmVzKGxlYWRpbmcsIGNhcykge1xuICAgICAgaWYgKCFsZWFkaW5nICYmIG5vZGUuY2FzZXNbbm9kZS5jYXNlcy5sZW5ndGggLSAxXSA9PT0gY2FzKSByZXR1cm4gLTE7XG4gICAgfVxuICB9KTtcblxuICB0aGlzLnB1c2goXCJ9XCIpO1xufVxuXG4vKipcbiAqIFByaW50cyBTd2l0Y2hDYXNlLCBwcmludHMgdGVzdCBhbmQgY29uc2VxdWVudC5cbiAqL1xuXG5mdW5jdGlvbiBTd2l0Y2hDYXNlKG5vZGUsIHByaW50KSB7XG4gIGlmIChub2RlLnRlc3QpIHtcbiAgICB0aGlzLnB1c2goXCJjYXNlIFwiKTtcbiAgICBwcmludC5wbGFpbihub2RlLnRlc3QpO1xuICAgIHRoaXMucHVzaChcIjpcIik7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5wdXNoKFwiZGVmYXVsdDpcIik7XG4gIH1cblxuICBpZiAobm9kZS5jb25zZXF1ZW50Lmxlbmd0aCkge1xuICAgIHRoaXMubmV3bGluZSgpO1xuICAgIHByaW50LnNlcXVlbmNlKG5vZGUuY29uc2VxdWVudCwgeyBpbmRlbnQ6IHRydWUgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBQcmludHMgRGVidWdnZXJTdGF0ZW1lbnQuXG4gKi9cblxuZnVuY3Rpb24gRGVidWdnZXJTdGF0ZW1lbnQoKSB7XG4gIHRoaXMucHVzaChcImRlYnVnZ2VyO1wiKTtcbn1cblxuLyoqXG4gKiBQcmludHMgVmFyaWFibGVEZWNsYXJhdGlvbiwgcHJpbnRzIGRlY2xhcmF0aW9ucywgaGFuZGxlcyBraW5kIGFuZCBmb3JtYXQuXG4gKi9cblxuZnVuY3Rpb24gVmFyaWFibGVEZWNsYXJhdGlvbihub2RlLCBwcmludCwgcGFyZW50KSB7XG4gIHRoaXMucHVzaChub2RlLmtpbmQgKyBcIiBcIik7XG5cbiAgdmFyIGhhc0luaXRzID0gZmFsc2U7XG4gIC8vIGRvbid0IGFkZCB3aGl0ZXNwYWNlIHRvIGxvb3AgaGVhZHNcbiAgaWYgKCF0LmlzRm9yKHBhcmVudCkpIHtcbiAgICB2YXIgX2FyciA9IG5vZGUuZGVjbGFyYXRpb25zO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IF9hcnIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgZGVjbGFyID0gX2FycltfaV07XG4gICAgICBpZiAoZGVjbGFyLmluaXQpIHtcbiAgICAgICAgLy8gaGFzIGFuIGluaXQgc28gbGV0J3Mgc3BsaXQgaXQgdXAgb3ZlciBtdWx0aXBsZSBsaW5lc1xuICAgICAgICBoYXNJbml0cyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy9cbiAgLy8gdXNlIGEgcHJldHR5IHNlcGFyYXRvciB3aGVuIHdlIGFyZW4ndCBpbiBjb21wYWN0IG1vZGUsIGhhdmUgaW5pdGlhbGl6ZXJzIGFuZCBkb24ndCBoYXZlIHJldGFpbkxpbmVzIG9uXG4gIC8vIHRoaXMgd2lsbCBmb3JtYXQgZGVjbGFyYXRpb25zIGxpa2U6XG4gIC8vXG4gIC8vICAgdmFyIGZvbyA9IFwiYmFyXCIsIGJhciA9IFwiZm9vXCI7XG4gIC8vXG4gIC8vIGludG9cbiAgLy9cbiAgLy8gICB2YXIgZm9vID0gXCJiYXJcIixcbiAgLy8gICAgICAgYmFyID0gXCJmb29cIjtcbiAgLy9cblxuICB2YXIgc2VwO1xuICBpZiAoIXRoaXMuZm9ybWF0LmNvbXBhY3QgJiYgIXRoaXMuZm9ybWF0LmNvbmNpc2UgJiYgaGFzSW5pdHMgJiYgIXRoaXMuZm9ybWF0LnJldGFpbkxpbmVzKSB7XG4gICAgc2VwID0gXCIsXFxuXCIgKyBfcmVwZWF0aW5nMltcImRlZmF1bHRcIl0oXCIgXCIsIG5vZGUua2luZC5sZW5ndGggKyAxKTtcbiAgfVxuXG4gIC8vXG5cbiAgcHJpbnQubGlzdChub2RlLmRlY2xhcmF0aW9ucywgeyBzZXBhcmF0b3I6IHNlcCB9KTtcblxuICBpZiAodC5pc0ZvcihwYXJlbnQpKSB7XG4gICAgLy8gZG9uJ3QgZ2l2ZSBzZW1pY29sb25zIHRvIHRoZXNlIG5vZGVzIHNpbmNlIHRoZXknbGwgYmUgaW5zZXJ0ZWQgaW4gdGhlIHBhcmVudCBnZW5lcmF0b3JcbiAgICBpZiAocGFyZW50LmxlZnQgPT09IG5vZGUgfHwgcGFyZW50LmluaXQgPT09IG5vZGUpIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuc2VtaWNvbG9uKCk7XG59XG5cbi8qKlxuICogUHJpbnRzIFZhcmlhYmxlRGVjbGFyYXRvciwgaGFuZGxlcyBpZCwgaWQudHlwZUFubm90YXRpb24sIGFuZCBpbml0LlxuICovXG5cbmZ1bmN0aW9uIFZhcmlhYmxlRGVjbGFyYXRvcihub2RlLCBwcmludCkge1xuICBwcmludC5wbGFpbihub2RlLmlkKTtcbiAgcHJpbnQucGxhaW4obm9kZS5pZC50eXBlQW5ub3RhdGlvbik7XG4gIGlmIChub2RlLmluaXQpIHtcbiAgICB0aGlzLnNwYWNlKCk7XG4gICAgdGhpcy5wdXNoKFwiPVwiKTtcbiAgICB0aGlzLnNwYWNlKCk7XG4gICAgcHJpbnQucGxhaW4obm9kZS5pbml0KTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
