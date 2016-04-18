/* */
"format cjs";
"use strict";

// istanbul ignore next

System.register([], function (_export, _context) {
  var _index, _index2;

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }

  return {
    setters: [],
    execute: function () {
      _index = require("./index");
      _index2 = _interopRequireDefault(_index);


      _index2["default"]("ArrayExpression", {
        visitor: ["elements"],
        aliases: ["Expression"]
      });

      _index2["default"]("AssignmentExpression", {
        builder: ["operator", "left", "right"],
        visitor: ["left", "right"],
        aliases: ["Expression"]
      });

      _index2["default"]("BinaryExpression", {
        builder: ["operator", "left", "right"],
        visitor: ["left", "right"],
        aliases: ["Binary", "Expression"]
      });

      _index2["default"]("BlockStatement", {
        visitor: ["body"],
        aliases: ["Scopable", "BlockParent", "Block", "Statement"]
      });

      _index2["default"]("BreakStatement", {
        visitor: ["label"],
        aliases: ["Statement", "Terminatorless", "CompletionStatement"]
      });

      _index2["default"]("CallExpression", {
        visitor: ["callee", "arguments"],
        aliases: ["Expression"]
      });

      _index2["default"]("CatchClause", {
        visitor: ["param", "body"],
        aliases: ["Scopable"]
      });

      _index2["default"]("ConditionalExpression", {
        visitor: ["test", "consequent", "alternate"],
        aliases: ["Expression"]
      });

      _index2["default"]("ContinueStatement", {
        visitor: ["label"],
        aliases: ["Statement", "Terminatorless", "CompletionStatement"]
      });

      _index2["default"]("DebuggerStatement", {
        aliases: ["Statement"]
      });

      _index2["default"]("DoWhileStatement", {
        visitor: ["body", "test"],
        aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
      });

      _index2["default"]("EmptyStatement", {
        aliases: ["Statement"]
      });

      _index2["default"]("ExpressionStatement", {
        visitor: ["expression"],
        aliases: ["Statement"]
      });

      _index2["default"]("File", {
        builder: ["program", "comments", "tokens"],
        visitor: ["program"]
      });

      _index2["default"]("ForInStatement", {
        visitor: ["left", "right", "body"],
        aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"]
      });

      _index2["default"]("ForStatement", {
        visitor: ["init", "test", "update", "body"],
        aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"]
      });

      _index2["default"]("FunctionDeclaration", {
        builder: {
          id: null,
          params: null,
          body: null,
          generator: false,
          async: false
        },
        visitor: ["id", "params", "body", "returnType", "typeParameters"],
        aliases: ["Scopable", "Function", "Func", "BlockParent", "FunctionParent", "Statement", "Pure", "Declaration"]
      });

      _index2["default"]("FunctionExpression", {
        builder: {
          id: null,
          params: null,
          body: null,
          generator: false,
          async: false
        },
        visitor: ["id", "params", "body", "returnType", "typeParameters"],
        aliases: ["Scopable", "Function", "Func", "BlockParent", "FunctionParent", "Expression", "Pure"]
      });

      _index2["default"]("Identifier", {
        builder: ["name"],
        visitor: ["typeAnnotation"],
        aliases: ["Expression"]
      });

      _index2["default"]("IfStatement", {
        visitor: ["test", "consequent", "alternate"],
        aliases: ["Statement"]
      });

      _index2["default"]("LabeledStatement", {
        visitor: ["label", "body"],
        aliases: ["Statement"]
      });

      _index2["default"]("Literal", {
        builder: ["value"],
        aliases: ["Expression", "Pure"]
      });

      _index2["default"]("LogicalExpression", {
        builder: ["operator", "left", "right"],
        visitor: ["left", "right"],
        aliases: ["Binary", "Expression"]
      });

      _index2["default"]("MemberExpression", {
        builder: {
          object: null,
          property: null,
          computed: false
        },
        visitor: ["object", "property"],
        aliases: ["Expression"]
      });

      _index2["default"]("NewExpression", {
        visitor: ["callee", "arguments"],
        aliases: ["Expression"]
      });

      _index2["default"]("ObjectExpression", {
        visitor: ["properties"],
        aliases: ["Expression"]
      });

      _index2["default"]("Program", {
        visitor: ["body"],
        aliases: ["Scopable", "BlockParent", "Block", "FunctionParent"]
      });

      _index2["default"]("Property", {
        builder: {
          kind: "init",
          key: null,
          value: null,
          computed: false
        },
        visitor: ["key", "value", "decorators"],
        aliases: ["UserWhitespacable"]
      });

      _index2["default"]("RestElement", {
        visitor: ["argument", "typeAnnotation"]
      });

      _index2["default"]("ReturnStatement", {
        visitor: ["argument"],
        aliases: ["Statement", "Terminatorless", "CompletionStatement"]
      });

      _index2["default"]("SequenceExpression", {
        visitor: ["expressions"],
        aliases: ["Expression"]
      });

      _index2["default"]("SwitchCase", {
        visitor: ["test", "consequent"]
      });

      _index2["default"]("SwitchStatement", {
        visitor: ["discriminant", "cases"],
        aliases: ["Statement", "BlockParent", "Scopable"]
      });

      _index2["default"]("ThisExpression", {
        aliases: ["Expression"]
      });

      _index2["default"]("ThrowStatement", {
        visitor: ["argument"],
        aliases: ["Statement", "Terminatorless", "CompletionStatement"]
      });

      _index2["default"]("TryStatement", {
        builder: ["block", "handler", "finalizer"],
        visitor: ["block", "handlers", "handler", "guardedHandlers", "finalizer"],
        aliases: ["Statement"]
      });

      _index2["default"]("UnaryExpression", {
        builder: {
          operator: null,
          argument: null,
          prefix: false
        },
        visitor: ["argument"],
        aliases: ["UnaryLike", "Expression"]
      });

      _index2["default"]("UpdateExpression", {
        builder: {
          operator: null,
          argument: null,
          prefix: false
        },
        visitor: ["argument"],
        aliases: ["Expression"]
      });

      _index2["default"]("VariableDeclaration", {
        builder: ["kind", "declarations"],
        visitor: ["declarations"],
        aliases: ["Statement", "Declaration"]
      });

      _index2["default"]("VariableDeclarator", {
        visitor: ["id", "init"]
      });

      _index2["default"]("WhileStatement", {
        visitor: ["test", "body"],
        aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
      });

      _index2["default"]("WithStatement", {
        visitor: ["object", "body"],
        aliases: ["Statement"]
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHlwZXMvZGVmaW5pdGlvbnMvY29yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQUlBLFdBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLEdBQXhCLEdBQThCLEVBQUUsV0FBVyxHQUFYLEVBQWhDLENBQVQ7R0FBckM7Ozs7O0FBRUksZUFBUyxRQUFRLFNBQVI7QUFFVCxnQkFBVSx1QkFBdUIsTUFBdkI7OztBQUVkLGNBQVEsU0FBUixFQUFtQixpQkFBbkIsRUFBc0M7QUFDcEMsaUJBQVMsQ0FBQyxVQUFELENBQVQ7QUFDQSxpQkFBUyxDQUFDLFlBQUQsQ0FBVDtPQUZGOztBQUtBLGNBQVEsU0FBUixFQUFtQixzQkFBbkIsRUFBMkM7QUFDekMsaUJBQVMsQ0FBQyxVQUFELEVBQWEsTUFBYixFQUFxQixPQUFyQixDQUFUO0FBQ0EsaUJBQVMsQ0FBQyxNQUFELEVBQVMsT0FBVCxDQUFUO0FBQ0EsaUJBQVMsQ0FBQyxZQUFELENBQVQ7T0FIRjs7QUFNQSxjQUFRLFNBQVIsRUFBbUIsa0JBQW5CLEVBQXVDO0FBQ3JDLGlCQUFTLENBQUMsVUFBRCxFQUFhLE1BQWIsRUFBcUIsT0FBckIsQ0FBVDtBQUNBLGlCQUFTLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FBVDtBQUNBLGlCQUFTLENBQUMsUUFBRCxFQUFXLFlBQVgsQ0FBVDtPQUhGOztBQU1BLGNBQVEsU0FBUixFQUFtQixnQkFBbkIsRUFBcUM7QUFDbkMsaUJBQVMsQ0FBQyxNQUFELENBQVQ7QUFDQSxpQkFBUyxDQUFDLFVBQUQsRUFBYSxhQUFiLEVBQTRCLE9BQTVCLEVBQXFDLFdBQXJDLENBQVQ7T0FGRjs7QUFLQSxjQUFRLFNBQVIsRUFBbUIsZ0JBQW5CLEVBQXFDO0FBQ25DLGlCQUFTLENBQUMsT0FBRCxDQUFUO0FBQ0EsaUJBQVMsQ0FBQyxXQUFELEVBQWMsZ0JB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QUMsV0FBRCxFQUFjLGFBQWQsQ0FBVDtPQUhGOztBQU1BLGNBQVEsU0FBUixFQUFtQixvQkFBbkIsRUFBeUM7QUFDdkMsaUJBQVMsQ0FBQyxJQUFELEVBQU8sTUFBUCxDQUFUO09BREY7O0FBSUEsY0FBUSxTQUFSLEVBQW1CLGdCQUFuQixFQUFxQztBQUNuQyxpQkFBUyxDQUFDLE1BQUQsRUFBUyxNQUFULENBQVQ7QUFDQSxpQkFBUyxDQUFDLFdBQUQsRUFBYyxhQUFkLEVBQTZCLE1BQTdCLEVBQXFDLE9BQXJDLEVBQThDLFVBQTlDLENBQVQ7T0FGRjs7QUFLQSxjQUFRLFNBQVIsRUFBbUIsZUFBbkIsRUFBb0M7QUFDbEMsaUJBQVMsQ0FBQyxRQUFELEVBQVcsTUFBWCxDQUFUO0FBQ0EsaUJBQVMsQ0FBQyxXQUFELENBQVQ7T0FGRiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3R5cGVzL2RlZmluaXRpb25zL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vaW5kZXhcIik7XG5cbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5kZXgpO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIkFycmF5RXhwcmVzc2lvblwiLCB7XG4gIHZpc2l0b3I6IFtcImVsZW1lbnRzXCJdLFxuICBhbGlhc2VzOiBbXCJFeHByZXNzaW9uXCJdXG59KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJBc3NpZ25tZW50RXhwcmVzc2lvblwiLCB7XG4gIGJ1aWxkZXI6IFtcIm9wZXJhdG9yXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJdLFxuICB2aXNpdG9yOiBbXCJsZWZ0XCIsIFwicmlnaHRcIl0sXG4gIGFsaWFzZXM6IFtcIkV4cHJlc3Npb25cIl1cbn0pO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIkJpbmFyeUV4cHJlc3Npb25cIiwge1xuICBidWlsZGVyOiBbXCJvcGVyYXRvclwiLCBcImxlZnRcIiwgXCJyaWdodFwiXSxcbiAgdmlzaXRvcjogW1wibGVmdFwiLCBcInJpZ2h0XCJdLFxuICBhbGlhc2VzOiBbXCJCaW5hcnlcIiwgXCJFeHByZXNzaW9uXCJdXG59KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJCbG9ja1N0YXRlbWVudFwiLCB7XG4gIHZpc2l0b3I6IFtcImJvZHlcIl0sXG4gIGFsaWFzZXM6IFtcIlNjb3BhYmxlXCIsIFwiQmxvY2tQYXJlbnRcIiwgXCJCbG9ja1wiLCBcIlN0YXRlbWVudFwiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiQnJlYWtTdGF0ZW1lbnRcIiwge1xuICB2aXNpdG9yOiBbXCJsYWJlbFwiXSxcbiAgYWxpYXNlczogW1wiU3RhdGVtZW50XCIsIFwiVGVybWluYXRvcmxlc3NcIiwgXCJDb21wbGV0aW9uU3RhdGVtZW50XCJdXG59KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJDYWxsRXhwcmVzc2lvblwiLCB7XG4gIHZpc2l0b3I6IFtcImNhbGxlZVwiLCBcImFyZ3VtZW50c1wiXSxcbiAgYWxpYXNlczogW1wiRXhwcmVzc2lvblwiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiQ2F0Y2hDbGF1c2VcIiwge1xuICB2aXNpdG9yOiBbXCJwYXJhbVwiLCBcImJvZHlcIl0sXG4gIGFsaWFzZXM6IFtcIlNjb3BhYmxlXCJdXG59KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJDb25kaXRpb25hbEV4cHJlc3Npb25cIiwge1xuICB2aXNpdG9yOiBbXCJ0ZXN0XCIsIFwiY29uc2VxdWVudFwiLCBcImFsdGVybmF0ZVwiXSxcbiAgYWxpYXNlczogW1wiRXhwcmVzc2lvblwiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiQ29udGludWVTdGF0ZW1lbnRcIiwge1xuICB2aXNpdG9yOiBbXCJsYWJlbFwiXSxcbiAgYWxpYXNlczogW1wiU3RhdGVtZW50XCIsIFwiVGVybWluYXRvcmxlc3NcIiwgXCJDb21wbGV0aW9uU3RhdGVtZW50XCJdXG59KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJEZWJ1Z2dlclN0YXRlbWVudFwiLCB7XG4gIGFsaWFzZXM6IFtcIlN0YXRlbWVudFwiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiRG9XaGlsZVN0YXRlbWVudFwiLCB7XG4gIHZpc2l0b3I6IFtcImJvZHlcIiwgXCJ0ZXN0XCJdLFxuICBhbGlhc2VzOiBbXCJTdGF0ZW1lbnRcIiwgXCJCbG9ja1BhcmVudFwiLCBcIkxvb3BcIiwgXCJXaGlsZVwiLCBcIlNjb3BhYmxlXCJdXG59KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJFbXB0eVN0YXRlbWVudFwiLCB7XG4gIGFsaWFzZXM6IFtcIlN0YXRlbWVudFwiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiRXhwcmVzc2lvblN0YXRlbWVudFwiLCB7XG4gIHZpc2l0b3I6IFtcImV4cHJlc3Npb25cIl0sXG4gIGFsaWFzZXM6IFtcIlN0YXRlbWVudFwiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiRmlsZVwiLCB7XG4gIGJ1aWxkZXI6IFtcInByb2dyYW1cIiwgXCJjb21tZW50c1wiLCBcInRva2Vuc1wiXSxcbiAgdmlzaXRvcjogW1wicHJvZ3JhbVwiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiRm9ySW5TdGF0ZW1lbnRcIiwge1xuICB2aXNpdG9yOiBbXCJsZWZ0XCIsIFwicmlnaHRcIiwgXCJib2R5XCJdLFxuICBhbGlhc2VzOiBbXCJTY29wYWJsZVwiLCBcIlN0YXRlbWVudFwiLCBcIkZvclwiLCBcIkJsb2NrUGFyZW50XCIsIFwiTG9vcFwiLCBcIkZvclhTdGF0ZW1lbnRcIl1cbn0pO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIkZvclN0YXRlbWVudFwiLCB7XG4gIHZpc2l0b3I6IFtcImluaXRcIiwgXCJ0ZXN0XCIsIFwidXBkYXRlXCIsIFwiYm9keVwiXSxcbiAgYWxpYXNlczogW1wiU2NvcGFibGVcIiwgXCJTdGF0ZW1lbnRcIiwgXCJGb3JcIiwgXCJCbG9ja1BhcmVudFwiLCBcIkxvb3BcIl1cbn0pO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIkZ1bmN0aW9uRGVjbGFyYXRpb25cIiwge1xuICBidWlsZGVyOiB7XG4gICAgaWQ6IG51bGwsXG4gICAgcGFyYW1zOiBudWxsLFxuICAgIGJvZHk6IG51bGwsXG4gICAgZ2VuZXJhdG9yOiBmYWxzZSxcbiAgICBhc3luYzogZmFsc2VcbiAgfSxcbiAgdmlzaXRvcjogW1wiaWRcIiwgXCJwYXJhbXNcIiwgXCJib2R5XCIsIFwicmV0dXJuVHlwZVwiLCBcInR5cGVQYXJhbWV0ZXJzXCJdLFxuICBhbGlhc2VzOiBbXCJTY29wYWJsZVwiLCBcIkZ1bmN0aW9uXCIsIFwiRnVuY1wiLCBcIkJsb2NrUGFyZW50XCIsIFwiRnVuY3Rpb25QYXJlbnRcIiwgXCJTdGF0ZW1lbnRcIiwgXCJQdXJlXCIsIFwiRGVjbGFyYXRpb25cIl1cbn0pO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIkZ1bmN0aW9uRXhwcmVzc2lvblwiLCB7XG4gIGJ1aWxkZXI6IHtcbiAgICBpZDogbnVsbCxcbiAgICBwYXJhbXM6IG51bGwsXG4gICAgYm9keTogbnVsbCxcbiAgICBnZW5lcmF0b3I6IGZhbHNlLFxuICAgIGFzeW5jOiBmYWxzZVxuICB9LFxuICB2aXNpdG9yOiBbXCJpZFwiLCBcInBhcmFtc1wiLCBcImJvZHlcIiwgXCJyZXR1cm5UeXBlXCIsIFwidHlwZVBhcmFtZXRlcnNcIl0sXG4gIGFsaWFzZXM6IFtcIlNjb3BhYmxlXCIsIFwiRnVuY3Rpb25cIiwgXCJGdW5jXCIsIFwiQmxvY2tQYXJlbnRcIiwgXCJGdW5jdGlvblBhcmVudFwiLCBcIkV4cHJlc3Npb25cIiwgXCJQdXJlXCJdXG59KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJJZGVudGlmaWVyXCIsIHtcbiAgYnVpbGRlcjogW1wibmFtZVwiXSxcbiAgdmlzaXRvcjogW1widHlwZUFubm90YXRpb25cIl0sXG4gIGFsaWFzZXM6IFtcIkV4cHJlc3Npb25cIl1cbn0pO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIklmU3RhdGVtZW50XCIsIHtcbiAgdmlzaXRvcjogW1widGVzdFwiLCBcImNvbnNlcXVlbnRcIiwgXCJhbHRlcm5hdGVcIl0sXG4gIGFsaWFzZXM6IFtcIlN0YXRlbWVudFwiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiTGFiZWxlZFN0YXRlbWVudFwiLCB7XG4gIHZpc2l0b3I6IFtcImxhYmVsXCIsIFwiYm9keVwiXSxcbiAgYWxpYXNlczogW1wiU3RhdGVtZW50XCJdXG59KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJMaXRlcmFsXCIsIHtcbiAgYnVpbGRlcjogW1widmFsdWVcIl0sXG4gIGFsaWFzZXM6IFtcIkV4cHJlc3Npb25cIiwgXCJQdXJlXCJdXG59KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJMb2dpY2FsRXhwcmVzc2lvblwiLCB7XG4gIGJ1aWxkZXI6IFtcIm9wZXJhdG9yXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJdLFxuICB2aXNpdG9yOiBbXCJsZWZ0XCIsIFwicmlnaHRcIl0sXG4gIGFsaWFzZXM6IFtcIkJpbmFyeVwiLCBcIkV4cHJlc3Npb25cIl1cbn0pO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIk1lbWJlckV4cHJlc3Npb25cIiwge1xuICBidWlsZGVyOiB7XG4gICAgb2JqZWN0OiBudWxsLFxuICAgIHByb3BlcnR5OiBudWxsLFxuICAgIGNvbXB1dGVkOiBmYWxzZVxuICB9LFxuICB2aXNpdG9yOiBbXCJvYmplY3RcIiwgXCJwcm9wZXJ0eVwiXSxcbiAgYWxpYXNlczogW1wiRXhwcmVzc2lvblwiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiTmV3RXhwcmVzc2lvblwiLCB7XG4gIHZpc2l0b3I6IFtcImNhbGxlZVwiLCBcImFyZ3VtZW50c1wiXSxcbiAgYWxpYXNlczogW1wiRXhwcmVzc2lvblwiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiT2JqZWN0RXhwcmVzc2lvblwiLCB7XG4gIHZpc2l0b3I6IFtcInByb3BlcnRpZXNcIl0sXG4gIGFsaWFzZXM6IFtcIkV4cHJlc3Npb25cIl1cbn0pO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIlByb2dyYW1cIiwge1xuICB2aXNpdG9yOiBbXCJib2R5XCJdLFxuICBhbGlhc2VzOiBbXCJTY29wYWJsZVwiLCBcIkJsb2NrUGFyZW50XCIsIFwiQmxvY2tcIiwgXCJGdW5jdGlvblBhcmVudFwiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiUHJvcGVydHlcIiwge1xuICBidWlsZGVyOiB7XG4gICAga2luZDogXCJpbml0XCIsXG4gICAga2V5OiBudWxsLFxuICAgIHZhbHVlOiBudWxsLFxuICAgIGNvbXB1dGVkOiBmYWxzZVxuICB9LFxuICB2aXNpdG9yOiBbXCJrZXlcIiwgXCJ2YWx1ZVwiLCBcImRlY29yYXRvcnNcIl0sXG4gIGFsaWFzZXM6IFtcIlVzZXJXaGl0ZXNwYWNhYmxlXCJdXG59KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJSZXN0RWxlbWVudFwiLCB7XG4gIHZpc2l0b3I6IFtcImFyZ3VtZW50XCIsIFwidHlwZUFubm90YXRpb25cIl1cbn0pO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIlJldHVyblN0YXRlbWVudFwiLCB7XG4gIHZpc2l0b3I6IFtcImFyZ3VtZW50XCJdLFxuICBhbGlhc2VzOiBbXCJTdGF0ZW1lbnRcIiwgXCJUZXJtaW5hdG9ybGVzc1wiLCBcIkNvbXBsZXRpb25TdGF0ZW1lbnRcIl1cbn0pO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIlNlcXVlbmNlRXhwcmVzc2lvblwiLCB7XG4gIHZpc2l0b3I6IFtcImV4cHJlc3Npb25zXCJdLFxuICBhbGlhc2VzOiBbXCJFeHByZXNzaW9uXCJdXG59KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJTd2l0Y2hDYXNlXCIsIHtcbiAgdmlzaXRvcjogW1widGVzdFwiLCBcImNvbnNlcXVlbnRcIl1cbn0pO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIlN3aXRjaFN0YXRlbWVudFwiLCB7XG4gIHZpc2l0b3I6IFtcImRpc2NyaW1pbmFudFwiLCBcImNhc2VzXCJdLFxuICBhbGlhc2VzOiBbXCJTdGF0ZW1lbnRcIiwgXCJCbG9ja1BhcmVudFwiLCBcIlNjb3BhYmxlXCJdXG59KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJUaGlzRXhwcmVzc2lvblwiLCB7XG4gIGFsaWFzZXM6IFtcIkV4cHJlc3Npb25cIl1cbn0pO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIlRocm93U3RhdGVtZW50XCIsIHtcbiAgdmlzaXRvcjogW1wiYXJndW1lbnRcIl0sXG4gIGFsaWFzZXM6IFtcIlN0YXRlbWVudFwiLCBcIlRlcm1pbmF0b3JsZXNzXCIsIFwiQ29tcGxldGlvblN0YXRlbWVudFwiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiVHJ5U3RhdGVtZW50XCIsIHtcbiAgYnVpbGRlcjogW1wiYmxvY2tcIiwgXCJoYW5kbGVyXCIsIFwiZmluYWxpemVyXCJdLFxuICB2aXNpdG9yOiBbXCJibG9ja1wiLCBcImhhbmRsZXJzXCIsIFwiaGFuZGxlclwiLCBcImd1YXJkZWRIYW5kbGVyc1wiLCBcImZpbmFsaXplclwiXSxcbiAgYWxpYXNlczogW1wiU3RhdGVtZW50XCJdXG59KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJVbmFyeUV4cHJlc3Npb25cIiwge1xuICBidWlsZGVyOiB7XG4gICAgb3BlcmF0b3I6IG51bGwsXG4gICAgYXJndW1lbnQ6IG51bGwsXG4gICAgcHJlZml4OiBmYWxzZVxuICB9LFxuICB2aXNpdG9yOiBbXCJhcmd1bWVudFwiXSxcbiAgYWxpYXNlczogW1wiVW5hcnlMaWtlXCIsIFwiRXhwcmVzc2lvblwiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiVXBkYXRlRXhwcmVzc2lvblwiLCB7XG4gIGJ1aWxkZXI6IHtcbiAgICBvcGVyYXRvcjogbnVsbCxcbiAgICBhcmd1bWVudDogbnVsbCxcbiAgICBwcmVmaXg6IGZhbHNlXG4gIH0sXG4gIHZpc2l0b3I6IFtcImFyZ3VtZW50XCJdLFxuICBhbGlhc2VzOiBbXCJFeHByZXNzaW9uXCJdXG59KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJWYXJpYWJsZURlY2xhcmF0aW9uXCIsIHtcbiAgYnVpbGRlcjogW1wia2luZFwiLCBcImRlY2xhcmF0aW9uc1wiXSxcbiAgdmlzaXRvcjogW1wiZGVjbGFyYXRpb25zXCJdLFxuICBhbGlhc2VzOiBbXCJTdGF0ZW1lbnRcIiwgXCJEZWNsYXJhdGlvblwiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiVmFyaWFibGVEZWNsYXJhdG9yXCIsIHtcbiAgdmlzaXRvcjogW1wiaWRcIiwgXCJpbml0XCJdXG59KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJXaGlsZVN0YXRlbWVudFwiLCB7XG4gIHZpc2l0b3I6IFtcInRlc3RcIiwgXCJib2R5XCJdLFxuICBhbGlhc2VzOiBbXCJTdGF0ZW1lbnRcIiwgXCJCbG9ja1BhcmVudFwiLCBcIkxvb3BcIiwgXCJXaGlsZVwiLCBcIlNjb3BhYmxlXCJdXG59KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJXaXRoU3RhdGVtZW50XCIsIHtcbiAgdmlzaXRvcjogW1wib2JqZWN0XCIsIFwiYm9keVwiXSxcbiAgYWxpYXNlczogW1wiU3RhdGVtZW50XCJdXG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
