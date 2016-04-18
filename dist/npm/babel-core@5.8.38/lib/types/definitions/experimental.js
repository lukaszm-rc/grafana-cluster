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


      _index2["default"]("AwaitExpression", {
        builder: ["argument", "all"],
        visitor: ["argument"],
        aliases: ["Expression", "Terminatorless"]
      });

      _index2["default"]("BindExpression", {
        visitor: ["object", "callee"]
      });

      _index2["default"]("ComprehensionBlock", {
        visitor: ["left", "right"]
      });

      _index2["default"]("ComprehensionExpression", {
        visitor: ["filter", "blocks", "body"],
        aliases: ["Expression", "Scopable"]
      });

      _index2["default"]("Decorator", {
        visitor: ["expression"]
      });

      _index2["default"]("DoExpression", {
        visitor: ["body"],
        aliases: ["Expression"]
      });

      _index2["default"]("SpreadProperty", {
        visitor: ["argument"],
        aliases: ["UnaryLike"]
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHlwZXMvZGVmaW5pdGlvbnMvZXhwZXJpbWVudGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBSUEsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBRSxXQUFXLEdBQVgsRUFBaEMsQ0FBVDtHQUFyQzs7Ozs7QUFFSSxlQUFTLFFBQVEsU0FBUjtBQUVULGdCQUFVLHVCQUF1QixNQUF2Qjs7O0FBRWQsY0FBUSxTQUFSLEVBQW1CLGlCQUFuQixFQUFzQztBQUNwQyxpQkFBUyxDQUFDLFVBQUQsRUFBYSxLQUFiLENBQVQ7QUFDQSxpQkFBUyxDQUFDLFVBQUQsQ0FBVDtBQUNBLGlCQUFTLENBQUMsWUFBRCxFQUFlLGdCQUFmLENBQVQ7T0FIRjs7QUFNQSxjQUFRLFNBQVIsRUFBbUIsZ0JBQW5CLEVBQXFDO0FBQ25DLGlCQUFTLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FBVDtPQURGOztBQUlBLGNBQVEsU0FBUixFQUFtQixvQkFBbkIsRUFBeUM7QUFDdkMsaUJBQVMsQ0FBQyxNQUFELEVBQVMsT0FBVCxDQUFUO09BREY7O0FBSUEsY0FBUSxTQUFSLEVBQW1CLHlCQUFuQixFQUE4QztBQUM1QyxpQkFBUyxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLE1BQXJCLENBQVQ7QUFDQSxpQkFBUyxDQUFDLFlBQUQsRUFBZSxVQUFmLENBQVQ7T0FGRjs7QUFLQSxjQUFRLFNBQVIsRUFBbUIsV0FBbkIsRUFBZ0M7QUFDOUIsaUJBQVMsQ0FBQyxZQUFELENBQVQ7T0FERjs7QUFJQSxjQUFRLFNBQVIsRUFBbUIsY0FBbkIsRUFBbUM7QUFDakMsaUJBQVMsQ0FBQyxNQUFELENBQVQ7QUFDQSxpQkFBUyxDQUFDLFlBQUQsQ0FBVDtPQUZGOztBQUtBLGNBQVEsU0FBUixFQUFtQixnQkFBbkIsRUFBcUM7QUFDbkMsaUJBQVMsQ0FBQyxVQUFELENBQVQ7QUFDQSxpQkFBUyxDQUFDLFdBQUQsQ0FBVDtPQUZGIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHlwZXMvZGVmaW5pdGlvbnMvZXhwZXJpbWVudGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuL2luZGV4XCIpO1xuXG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luZGV4KTtcblxuX2luZGV4MltcImRlZmF1bHRcIl0oXCJBd2FpdEV4cHJlc3Npb25cIiwge1xuICBidWlsZGVyOiBbXCJhcmd1bWVudFwiLCBcImFsbFwiXSxcbiAgdmlzaXRvcjogW1wiYXJndW1lbnRcIl0sXG4gIGFsaWFzZXM6IFtcIkV4cHJlc3Npb25cIiwgXCJUZXJtaW5hdG9ybGVzc1wiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiQmluZEV4cHJlc3Npb25cIiwge1xuICB2aXNpdG9yOiBbXCJvYmplY3RcIiwgXCJjYWxsZWVcIl1cbn0pO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIkNvbXByZWhlbnNpb25CbG9ja1wiLCB7XG4gIHZpc2l0b3I6IFtcImxlZnRcIiwgXCJyaWdodFwiXVxufSk7XG5cbl9pbmRleDJbXCJkZWZhdWx0XCJdKFwiQ29tcHJlaGVuc2lvbkV4cHJlc3Npb25cIiwge1xuICB2aXNpdG9yOiBbXCJmaWx0ZXJcIiwgXCJibG9ja3NcIiwgXCJib2R5XCJdLFxuICBhbGlhc2VzOiBbXCJFeHByZXNzaW9uXCIsIFwiU2NvcGFibGVcIl1cbn0pO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIkRlY29yYXRvclwiLCB7XG4gIHZpc2l0b3I6IFtcImV4cHJlc3Npb25cIl1cbn0pO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIkRvRXhwcmVzc2lvblwiLCB7XG4gIHZpc2l0b3I6IFtcImJvZHlcIl0sXG4gIGFsaWFzZXM6IFtcIkV4cHJlc3Npb25cIl1cbn0pO1xuXG5faW5kZXgyW1wiZGVmYXVsdFwiXShcIlNwcmVhZFByb3BlcnR5XCIsIHtcbiAgdmlzaXRvcjogW1wiYXJndW1lbnRcIl0sXG4gIGFsaWFzZXM6IFtcIlVuYXJ5TGlrZVwiXVxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
