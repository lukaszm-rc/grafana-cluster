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


      _index2["default"]("JSXAttribute", {
        visitor: ["name", "value"],
        aliases: ["JSX", "Immutable"]
      });

      _index2["default"]("JSXClosingElement", {
        visitor: ["name"],
        aliases: ["JSX", "Immutable"]
      });

      _index2["default"]("JSXElement", {
        visitor: ["openingElement", "closingElement", "children"],
        aliases: ["JSX", "Immutable", "Expression"]
      });

      _index2["default"]("JSXEmptyExpression", {
        aliases: ["JSX", "Expression"]
      });

      _index2["default"]("JSXExpressionContainer", {
        visitor: ["expression"],
        aliases: ["JSX", "Immutable"]
      });

      _index2["default"]("JSXIdentifier", {
        aliases: ["JSX", "Expression"]
      });

      _index2["default"]("JSXMemberExpression", {
        visitor: ["object", "property"],
        aliases: ["JSX", "Expression"]
      });

      _index2["default"]("JSXNamespacedName", {
        visitor: ["namespace", "name"],
        aliases: ["JSX"]
      });

      _index2["default"]("JSXOpeningElement", {
        visitor: ["name", "attributes"],
        aliases: ["JSX", "Immutable"]
      });

      _index2["default"]("JSXSpreadAttribute", {
        visitor: ["argument"],
        aliases: ["JSX"]
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHlwZXMvZGVmaW5pdGlvbnMvanN4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBSUEsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBRSxXQUFXLEdBQVgsRUFBaEMsQ0FBVDtHQUFyQzs7Ozs7QUFFSSxlQUFTLFFBQVEsU0FBUjtBQUVULGdCQUFVLHVCQUF1QixNQUF2Qjs7O0FBRWQsY0FBUSxTQUFSLEVBQW1CLGNBQW5CLEVBQW1DO0FBQ2pDLGlCQUFTLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FBVDtBQUNBLGlCQUFTLENBQUMsS0FBRCxFQUFRLFdBQVIsQ0FBVDtPQUZGOztBQUtBLGNBQVEsU0FBUixFQUFtQixtQkFBbkIsRUFBd0M7QUFDdEMsaUJBQVMsQ0FBQyxNQUFELENBQVQ7QUFDQSxpQkFBUyxDQUFDLEtBQUQsRUFBUSxXQUFSLENBQVQ7T0FGRjs7QUFLQSxjQUFRLFNBQVIsRUFBbUIsWUFBbkIsRUFBaUM7QUFDL0IsaUJBQVMsQ0FBQyxnQkFBRCxFQUFtQixnQkFBbkIsRUFBcUMsVUFBckMsQ0FBVDtBQUNBLGlCQUFTLENBQUMsS0FBRCxFQUFRLFdBQVIsRUFBcUIsWUFBckIsQ0FBVDtPQUZGOztBQUtBLGNBQVEsU0FBUixFQUFtQixvQkFBbkIsRUFBeUM7QUFDdkMsaUJBQVMsQ0FBQyxLQUFELEVBQVEsWUFBUixDQUFUO09BREY7O0FBSUEsY0FBUSxTQUFSLEVBQW1CLHdCQUFuQixFQUE2QztBQUMzQyxpQkFBUyxDQUFDLFlBQUQsQ0FBVDtBQUNBLGlCQUFTLENBQUMsS0FBRCxFQUFRLFdBQVIsQ0FBVDtPQUZGOztBQUtBLGNBQVEsU0FBUixFQUFtQixlQUFuQixFQUFvQztBQUNsQyxpQkFBUyxDQUFDLEtBQUQsRUFBUSxZQUFSLENBQVQ7T0FERjs7QUFJQSxjQUFRLFNBQVIsRUFBbUIscUJBQW5CLEVBQTBDO0FBQ3hDLGlCQUFTLENBQUMsUUFBRCxFQUFXLFVBQVgsQ0FBVDtBQUNBLGlCQUFTLENBQUMsS0FBRCxFQUFRLFlBQVIsQ0FBVDtPQUZGOztBQUtBLGNBQVEsU0FBUixFQUFtQixtQkFBbkIsRUFBd0M7QUFDdEMsaUJBQVMsQ0FBQyxXQUFELEVBQWMsTUFBZCxDQUFUO0FBQ0EsaUJBQVMsQ0FBQyxLQUFELENBQVQ7T0FGRjs7QUFLQSxjQUFRLFNBQVIsRUFBbUIsbUJBQW5CLEVBQXdDO0FBQ3RDLGlCQUFTLENBQUMsTUFBRCxFQUFTLFlBQVQsQ0FBVDtBQUNBLGlCQUFTLENBQUMsS0FBRCxFQUFRLFdBQVIsQ0FBVDtPQUZGOztBQUtBLGNBQVEsU0FBUixFQUFtQixvQkFBbkIsRUFBeUM7QUFDdkMsaUJBQVMsQ0FBQyxVQUFELENBQVQ7QUFDQSxpQkFBUyxDQUFDLEtBQUQsQ0FBVDtPQUZGIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHlwZXMvZGVmaW5pdGlvbnMvanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuL2luZGV4XCIpO1xuXG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luZGV4KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJKU1hBdHRyaWJ1dGVcIiwge1xuICB2aXNpdG9yOiBbXCJuYW1lXCIsIFwidmFsdWVcIl0sXG4gIGFsaWFzZXM6IFtcIkpTWFwiLCBcIkltbXV0YWJsZVwiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiSlNYQ2xvc2luZ0VsZW1lbnRcIiwge1xuICB2aXNpdG9yOiBbXCJuYW1lXCJdLFxuICBhbGlhc2VzOiBbXCJKU1hcIiwgXCJJbW11dGFibGVcIl1cbn0pO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIkpTWEVsZW1lbnRcIiwge1xuICB2aXNpdG9yOiBbXCJvcGVuaW5nRWxlbWVudFwiLCBcImNsb3NpbmdFbGVtZW50XCIsIFwiY2hpbGRyZW5cIl0sXG4gIGFsaWFzZXM6IFtcIkpTWFwiLCBcIkltbXV0YWJsZVwiLCBcIkV4cHJlc3Npb25cIl1cbn0pO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIkpTWEVtcHR5RXhwcmVzc2lvblwiLCB7XG4gIGFsaWFzZXM6IFtcIkpTWFwiLCBcIkV4cHJlc3Npb25cIl1cbn0pO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIkpTWEV4cHJlc3Npb25Db250YWluZXJcIiwge1xuICB2aXNpdG9yOiBbXCJleHByZXNzaW9uXCJdLFxuICBhbGlhc2VzOiBbXCJKU1hcIiwgXCJJbW11dGFibGVcIl1cbn0pO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIkpTWElkZW50aWZpZXJcIiwge1xuICBhbGlhc2VzOiBbXCJKU1hcIiwgXCJFeHByZXNzaW9uXCJdXG59KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJKU1hNZW1iZXJFeHByZXNzaW9uXCIsIHtcbiAgdmlzaXRvcjogW1wib2JqZWN0XCIsIFwicHJvcGVydHlcIl0sXG4gIGFsaWFzZXM6IFtcIkpTWFwiLCBcIkV4cHJlc3Npb25cIl1cbn0pO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIkpTWE5hbWVzcGFjZWROYW1lXCIsIHtcbiAgdmlzaXRvcjogW1wibmFtZXNwYWNlXCIsIFwibmFtZVwiXSxcbiAgYWxpYXNlczogW1wiSlNYXCJdXG59KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJKU1hPcGVuaW5nRWxlbWVudFwiLCB7XG4gIHZpc2l0b3I6IFtcIm5hbWVcIiwgXCJhdHRyaWJ1dGVzXCJdLFxuICBhbGlhc2VzOiBbXCJKU1hcIiwgXCJJbW11dGFibGVcIl1cbn0pO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIkpTWFNwcmVhZEF0dHJpYnV0ZVwiLCB7XG4gIHZpc2l0b3I6IFtcImFyZ3VtZW50XCJdLFxuICBhbGlhc2VzOiBbXCJKU1hcIl1cbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
