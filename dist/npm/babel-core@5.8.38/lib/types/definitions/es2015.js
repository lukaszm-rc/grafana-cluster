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


      _index2["default"]("AssignmentPattern", {
        visitor: ["left", "right"],
        aliases: ["Pattern"]
      });

      _index2["default"]("ArrayPattern", {
        visitor: ["elements", "typeAnnotation"],
        aliases: ["Pattern"]
      });

      _index2["default"]("ArrowFunctionExpression", {
        builder: ["params", "body", "async"],
        visitor: ["params", "body", "returnType"],
        aliases: ["Scopable", "Function", "Func", "BlockParent", "FunctionParent", "Expression", "Pure"]
      });

      _index2["default"]("ClassBody", {
        visitor: ["body"]
      });

      _index2["default"]("ClassDeclaration", {
        visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"],
        aliases: ["Scopable", "Class", "Statement", "Declaration"]
      });

      _index2["default"]("ClassExpression", {
        visitor: ["id", "body", "superClass", "typeParameters", "superTypeParameters", "implements", "decorators"],
        aliases: ["Scopable", "Class", "Expression"]
      });

      _index2["default"]("ExportAllDeclaration", {
        visitor: ["source", "exported"],
        aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"]
      });

      _index2["default"]("ExportDefaultDeclaration", {
        visitor: ["declaration"],
        aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"]
      });

      _index2["default"]("ExportNamedDeclaration", {
        visitor: ["declaration", "specifiers", "source"],
        aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"]
      });

      _index2["default"]("ExportDefaultSpecifier", {
        visitor: ["exported"],
        aliases: ["ModuleSpecifier"]
      });

      _index2["default"]("ExportNamespaceSpecifier", {
        visitor: ["exported"],
        aliases: ["ModuleSpecifier"]
      });

      _index2["default"]("ExportSpecifier", {
        visitor: ["local", "exported"],
        aliases: ["ModuleSpecifier"]
      });

      _index2["default"]("ForOfStatement", {
        visitor: ["left", "right", "body"],
        aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"]
      });

      _index2["default"]("ImportDeclaration", {
        visitor: ["specifiers", "source"],
        aliases: ["Statement", "Declaration", "ModuleDeclaration"]
      });

      _index2["default"]("ImportDefaultSpecifier", {
        visitor: ["local"],
        aliases: ["ModuleSpecifier"]
      });

      _index2["default"]("ImportNamespaceSpecifier", {
        visitor: ["local"],
        aliases: ["ModuleSpecifier"]
      });

      _index2["default"]("ImportSpecifier", {
        visitor: ["local", "imported"],
        aliases: ["ModuleSpecifier"]
      });

      _index2["default"]("MetaProperty", {
        visitor: ["meta", "property"],
        aliases: ["Expression"]
      });

      _index2["default"]("MethodDefinition", {
        builder: {
          key: null,
          value: null,
          kind: "method",
          computed: false,
          "static": false
        },
        visitor: ["key", "value", "decorators"]
      });

      _index2["default"]("ObjectPattern", {
        visitor: ["properties", "typeAnnotation"],
        aliases: ["Pattern"]
      });

      _index2["default"]("SpreadElement", {
        visitor: ["argument"],
        aliases: ["UnaryLike"]
      });

      _index2["default"]("Super", {
        aliases: ["Expression"]
      });

      _index2["default"]("TaggedTemplateExpression", {
        visitor: ["tag", "quasi"],
        aliases: ["Expression"]
      });

      _index2["default"]("TemplateElement");

      _index2["default"]("TemplateLiteral", {
        visitor: ["quasis", "expressions"],
        aliases: ["Expression"]
      });

      _index2["default"]("YieldExpression", {
        builder: ["argument", "delegate"],
        visitor: ["argument"],
        aliases: ["Expression", "Terminatorless"]
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHlwZXMvZGVmaW5pdGlvbnMvZXMyMDE1LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBSUEsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBRSxXQUFXLEdBQVgsRUFBaEMsQ0FBVDtHQUFyQzs7Ozs7QUFFSSxlQUFTLFFBQVEsU0FBUjtBQUVULGdCQUFVLHVCQUF1QixNQUF2Qjs7O0FBRWQsY0FBUSxTQUFSLEVBQW1CLG1CQUFuQixFQUF3QztBQUN0QyxpQkFBUyxDQUFDLE1BQUQsRUFBUyxPQUFULENBQVQ7QUFDQSxpQkFBUyxDQUFDLFNBQUQsQ0FBVDtPQUZGOztBQUtBLGNBQVEsU0FBUixFQUFtQixjQUFuQixFQUFtQztBQUNqQyxpQkFBUyxDQUFDLFVBQUQsRUFBYSxnQkFBYixDQUFUO0FBQ0EsaUJBQVMsQ0FBQyxTQUFELENBQVQ7T0FGRjs7QUFLQSxjQUFRLFNBQVIsRUFBbUIseUJBQW5CLEVBQThDO0FBQzVDLGlCQUFTLENBQUMsUUFBRCxFQUFXLE1BQVgsRUFBbUIsT0FBbkIsQ0FBVDtBQUNBLGlCQUFTLENBQUMsUUFBRCxFQUFXLE1BQVgsRUFBbUIsWUFBbkIsQ0FBVDtBQUNBLGlCQUFTLENBQUMsVUFBRCxFQUFhLFVBQWIsRUFBeUIsTUFBekIsRUFBaUMsYUFBakMsRUFBZ0QsZ0JBQWhELEVBQWtFLFlBQWxFLEVBQWdGLE1BQWhGLENBQVQ7T0FIRjs7QUFNQSxjQUFRLFNBQVIsRUFBbUIsV0FBbkIsRUFBZ0M7QUFDOUIsaUJBQVMsQ0FBQyxNQUFELENBQVQ7T0FERjs7QUFJQSxjQUFRLFNBQVIsRUFBbUIsa0JBQW5CLEVBQXVDO0FBQ3JDLGlCQUFTLENBQUMsSUFBRCxFQUFPLE1BQVAsRUFBZSxZQUFmLEVBQTZCLFFBQTdCLEVBQXVDLGdCQUF2QyxFQUF5RCxxQkFBekQs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b0JBQVUsS0FBVjtTQUxGO0FBT0EsaUJBQVMsQ0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixZQUFqQixDQUFUO09BUkY7O0FBV0EsY0FBUSxTQUFSLEVBQW1CLGVBQW5CLEVBQW9DO0FBQ2xDLGlCQUFTLENBQUMsWUFBRCxFQUFlLGdCQUFmLENBQVQ7QUFDQSxpQkFBUyxDQUFDLFNBQUQsQ0FBVDtPQUZGOztBQUtBLGNBQVEsU0FBUixFQUFtQixlQUFuQixFQUFvQztBQUNsQyxpQkFBUyxDQUFDLFVBQUQsQ0FBVDtBQUNBLGlCQUFTLENBQUMsV0FBRCxDQUFUO09BRkY7O0FBS0EsY0FBUSxTQUFSLEVBQW1CLE9BQW5CLEVBQTRCO0FBQzFCLGlCQUFTLENBQUMsWUFBRCxDQUFUO09BREY7O0FBSUEsY0FBUSxTQUFSLEVBQW1CLDBCQUFuQixFQUErQztBQUM3QyxpQkFBUyxDQUFDLEtBQUQsRUFBUSxPQUFSLENBQVQ7QUFDQSxpQkFBUyxDQUFDLFlBQUQsQ0FBVDtPQUZGOztBQUtBLGNBQVEsU0FBUixFQUFtQixpQkFBbkI7O0FBRUEsY0FBUSxTQUFSLEVBQW1CLGlCQUFuQixFQUFzQztBQUNwQyxpQkFBUyxDQUFDLFFBQUQsRUFBVyxhQUFYLENBQVQ7QUFDQSxpQkFBUyxDQUFDLFlBQUQsQ0FBVDtPQUZGOztBQUtBLGNBQVEsU0FBUixFQUFtQixpQkFBbkIsRUFBc0M7QUFDcEMsaUJBQVMsQ0FBQyxVQUFELEVBQWEsVUFBYixDQUFUO0FBQ0EsaUJBQVMsQ0FBQyxVQUFELENBQVQ7QUFDQSxpQkFBUyxDQUFDLFlBQUQsRUFBZSxnQkFBZixDQUFUO09BSEYiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90eXBlcy9kZWZpbml0aW9ucy9lczIwMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vaW5kZXhcIik7XG5cbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5kZXgpO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIkFzc2lnbm1lbnRQYXR0ZXJuXCIsIHtcbiAgdmlzaXRvcjogW1wibGVmdFwiLCBcInJpZ2h0XCJdLFxuICBhbGlhc2VzOiBbXCJQYXR0ZXJuXCJdXG59KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJBcnJheVBhdHRlcm5cIiwge1xuICB2aXNpdG9yOiBbXCJlbGVtZW50c1wiLCBcInR5cGVBbm5vdGF0aW9uXCJdLFxuICBhbGlhc2VzOiBbXCJQYXR0ZXJuXCJdXG59KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvblwiLCB7XG4gIGJ1aWxkZXI6IFtcInBhcmFtc1wiLCBcImJvZHlcIiwgXCJhc3luY1wiXSxcbiAgdmlzaXRvcjogW1wicGFyYW1zXCIsIFwiYm9keVwiLCBcInJldHVyblR5cGVcIl0sXG4gIGFsaWFzZXM6IFtcIlNjb3BhYmxlXCIsIFwiRnVuY3Rpb25cIiwgXCJGdW5jXCIsIFwiQmxvY2tQYXJlbnRcIiwgXCJGdW5jdGlvblBhcmVudFwiLCBcIkV4cHJlc3Npb25cIiwgXCJQdXJlXCJdXG59KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJDbGFzc0JvZHlcIiwge1xuICB2aXNpdG9yOiBbXCJib2R5XCJdXG59KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJDbGFzc0RlY2xhcmF0aW9uXCIsIHtcbiAgdmlzaXRvcjogW1wiaWRcIiwgXCJib2R5XCIsIFwic3VwZXJDbGFzc1wiLCBcIm1peGluc1wiLCBcInR5cGVQYXJhbWV0ZXJzXCIsIFwic3VwZXJUeXBlUGFyYW1ldGVyc1wiLCBcImltcGxlbWVudHNcIiwgXCJkZWNvcmF0b3JzXCJdLFxuICBhbGlhc2VzOiBbXCJTY29wYWJsZVwiLCBcIkNsYXNzXCIsIFwiU3RhdGVtZW50XCIsIFwiRGVjbGFyYXRpb25cIl1cbn0pO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIkNsYXNzRXhwcmVzc2lvblwiLCB7XG4gIHZpc2l0b3I6IFtcImlkXCIsIFwiYm9keVwiLCBcInN1cGVyQ2xhc3NcIiwgXCJ0eXBlUGFyYW1ldGVyc1wiLCBcInN1cGVyVHlwZVBhcmFtZXRlcnNcIiwgXCJpbXBsZW1lbnRzXCIsIFwiZGVjb3JhdG9yc1wiXSxcbiAgYWxpYXNlczogW1wiU2NvcGFibGVcIiwgXCJDbGFzc1wiLCBcIkV4cHJlc3Npb25cIl1cbn0pO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIkV4cG9ydEFsbERlY2xhcmF0aW9uXCIsIHtcbiAgdmlzaXRvcjogW1wic291cmNlXCIsIFwiZXhwb3J0ZWRcIl0sXG4gIGFsaWFzZXM6IFtcIlN0YXRlbWVudFwiLCBcIkRlY2xhcmF0aW9uXCIsIFwiTW9kdWxlRGVjbGFyYXRpb25cIiwgXCJFeHBvcnREZWNsYXJhdGlvblwiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiRXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uXCIsIHtcbiAgdmlzaXRvcjogW1wiZGVjbGFyYXRpb25cIl0sXG4gIGFsaWFzZXM6IFtcIlN0YXRlbWVudFwiLCBcIkRlY2xhcmF0aW9uXCIsIFwiTW9kdWxlRGVjbGFyYXRpb25cIiwgXCJFeHBvcnREZWNsYXJhdGlvblwiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiRXhwb3J0TmFtZWREZWNsYXJhdGlvblwiLCB7XG4gIHZpc2l0b3I6IFtcImRlY2xhcmF0aW9uXCIsIFwic3BlY2lmaWVyc1wiLCBcInNvdXJjZVwiXSxcbiAgYWxpYXNlczogW1wiU3RhdGVtZW50XCIsIFwiRGVjbGFyYXRpb25cIiwgXCJNb2R1bGVEZWNsYXJhdGlvblwiLCBcIkV4cG9ydERlY2xhcmF0aW9uXCJdXG59KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJFeHBvcnREZWZhdWx0U3BlY2lmaWVyXCIsIHtcbiAgdmlzaXRvcjogW1wiZXhwb3J0ZWRcIl0sXG4gIGFsaWFzZXM6IFtcIk1vZHVsZVNwZWNpZmllclwiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiRXhwb3J0TmFtZXNwYWNlU3BlY2lmaWVyXCIsIHtcbiAgdmlzaXRvcjogW1wiZXhwb3J0ZWRcIl0sXG4gIGFsaWFzZXM6IFtcIk1vZHVsZVNwZWNpZmllclwiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiRXhwb3J0U3BlY2lmaWVyXCIsIHtcbiAgdmlzaXRvcjogW1wibG9jYWxcIiwgXCJleHBvcnRlZFwiXSxcbiAgYWxpYXNlczogW1wiTW9kdWxlU3BlY2lmaWVyXCJdXG59KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJGb3JPZlN0YXRlbWVudFwiLCB7XG4gIHZpc2l0b3I6IFtcImxlZnRcIiwgXCJyaWdodFwiLCBcImJvZHlcIl0sXG4gIGFsaWFzZXM6IFtcIlNjb3BhYmxlXCIsIFwiU3RhdGVtZW50XCIsIFwiRm9yXCIsIFwiQmxvY2tQYXJlbnRcIiwgXCJMb29wXCIsIFwiRm9yWFN0YXRlbWVudFwiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiSW1wb3J0RGVjbGFyYXRpb25cIiwge1xuICB2aXNpdG9yOiBbXCJzcGVjaWZpZXJzXCIsIFwic291cmNlXCJdLFxuICBhbGlhc2VzOiBbXCJTdGF0ZW1lbnRcIiwgXCJEZWNsYXJhdGlvblwiLCBcIk1vZHVsZURlY2xhcmF0aW9uXCJdXG59KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJJbXBvcnREZWZhdWx0U3BlY2lmaWVyXCIsIHtcbiAgdmlzaXRvcjogW1wibG9jYWxcIl0sXG4gIGFsaWFzZXM6IFtcIk1vZHVsZVNwZWNpZmllclwiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiSW1wb3J0TmFtZXNwYWNlU3BlY2lmaWVyXCIsIHtcbiAgdmlzaXRvcjogW1wibG9jYWxcIl0sXG4gIGFsaWFzZXM6IFtcIk1vZHVsZVNwZWNpZmllclwiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiSW1wb3J0U3BlY2lmaWVyXCIsIHtcbiAgdmlzaXRvcjogW1wibG9jYWxcIiwgXCJpbXBvcnRlZFwiXSxcbiAgYWxpYXNlczogW1wiTW9kdWxlU3BlY2lmaWVyXCJdXG59KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJNZXRhUHJvcGVydHlcIiwge1xuICB2aXNpdG9yOiBbXCJtZXRhXCIsIFwicHJvcGVydHlcIl0sXG4gIGFsaWFzZXM6IFtcIkV4cHJlc3Npb25cIl1cbn0pO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIk1ldGhvZERlZmluaXRpb25cIiwge1xuICBidWlsZGVyOiB7XG4gICAga2V5OiBudWxsLFxuICAgIHZhbHVlOiBudWxsLFxuICAgIGtpbmQ6IFwibWV0aG9kXCIsXG4gICAgY29tcHV0ZWQ6IGZhbHNlLFxuICAgIFwic3RhdGljXCI6IGZhbHNlXG4gIH0sXG4gIHZpc2l0b3I6IFtcImtleVwiLCBcInZhbHVlXCIsIFwiZGVjb3JhdG9yc1wiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiT2JqZWN0UGF0dGVyblwiLCB7XG4gIHZpc2l0b3I6IFtcInByb3BlcnRpZXNcIiwgXCJ0eXBlQW5ub3RhdGlvblwiXSxcbiAgYWxpYXNlczogW1wiUGF0dGVyblwiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiU3ByZWFkRWxlbWVudFwiLCB7XG4gIHZpc2l0b3I6IFtcImFyZ3VtZW50XCJdLFxuICBhbGlhc2VzOiBbXCJVbmFyeUxpa2VcIl1cbn0pO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIlN1cGVyXCIsIHtcbiAgYWxpYXNlczogW1wiRXhwcmVzc2lvblwiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiVGFnZ2VkVGVtcGxhdGVFeHByZXNzaW9uXCIsIHtcbiAgdmlzaXRvcjogW1widGFnXCIsIFwicXVhc2lcIl0sXG4gIGFsaWFzZXM6IFtcIkV4cHJlc3Npb25cIl1cbn0pO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIlRlbXBsYXRlRWxlbWVudFwiKTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJUZW1wbGF0ZUxpdGVyYWxcIiwge1xuICB2aXNpdG9yOiBbXCJxdWFzaXNcIiwgXCJleHByZXNzaW9uc1wiXSxcbiAgYWxpYXNlczogW1wiRXhwcmVzc2lvblwiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiWWllbGRFeHByZXNzaW9uXCIsIHtcbiAgYnVpbGRlcjogW1wiYXJndW1lbnRcIiwgXCJkZWxlZ2F0ZVwiXSxcbiAgdmlzaXRvcjogW1wiYXJndW1lbnRcIl0sXG4gIGFsaWFzZXM6IFtcIkV4cHJlc3Npb25cIiwgXCJUZXJtaW5hdG9ybGVzc1wiXVxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
