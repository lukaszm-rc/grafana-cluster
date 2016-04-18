/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _index, t;

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

  /**
   * Return a list of binding identifiers associated with the input `node`.
   */

  function getBindingIdentifiers(node, duplicates) {
    var search = [].concat(node);
    var ids = Object.create(null);

    while (search.length) {
      var id = search.shift();
      if (!id) continue;

      var keys = t.getBindingIdentifiers.keys[id.type];

      if (t.isIdentifier(id)) {
        if (duplicates) {
          var _ids = ids[id.name] = ids[id.name] || [];
          _ids.push(id);
        } else {
          ids[id.name] = id;
        }
      } else if (t.isExportDeclaration(id)) {
        if (t.isDeclaration(node.declaration)) {
          search.push(node.declaration);
        }
      } else if (keys) {
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (id[key]) {
            search = search.concat(id[key]);
          }
        }
      }
    }

    return ids;
  }

  /**
   * Mapping of types to their identifier keys.
   */

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.getBindingIdentifiers = getBindingIdentifiers;_index = require("./index");
      t = _interopRequireWildcard(_index);
      getBindingIdentifiers.keys = {
        DeclareClass: ["id"],
        DeclareFunction: ["id"],
        DeclareModule: ["id"],
        DeclareVariable: ["id"],
        InterfaceDeclaration: ["id"],
        TypeAlias: ["id"],

        ComprehensionExpression: ["blocks"],
        ComprehensionBlock: ["left"],

        CatchClause: ["param"],
        LabeledStatement: ["label"],
        UnaryExpression: ["argument"],
        AssignmentExpression: ["left"],

        ImportSpecifier: ["local"],
        ImportNamespaceSpecifier: ["local"],
        ImportDefaultSpecifier: ["local"],
        ImportDeclaration: ["specifiers"],

        FunctionDeclaration: ["id", "params"],
        FunctionExpression: ["id", "params"],

        ClassDeclaration: ["id"],
        ClassExpression: ["id"],

        RestElement: ["argument"],
        UpdateExpression: ["argument"],

        SpreadProperty: ["argument"],
        Property: ["value"],

        AssignmentPattern: ["left"],
        ArrayPattern: ["elements"],
        ObjectPattern: ["properties"],

        VariableDeclaration: ["declarations"],
        VariableDeclarator: ["id"]
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHlwZXMvcmV0cmlldmVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQU1BLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7OztBQVVBLFdBQVMscUJBQVQsQ0FBK0IsSUFBL0IsRUFBcUMsVUFBckMsRUFBaUQ7QUFDL0MsUUFBSSxTQUFTLEdBQUcsTUFBSCxDQUFVLElBQVYsQ0FBVCxDQUQyQztBQUUvQyxRQUFJLE1BQU0sT0FBTyxNQUFQLENBQWMsSUFBZCxDQUFOLENBRjJDOztBQUkvQyxXQUFPLE9BQU8sTUFBUCxFQUFlO0FBQ3BCLFVBQUksS0FBSyxPQUFPLEtBQVAsRUFBTCxDQURnQjtBQUVwQixVQUFJLENBQUMsRUFBRCxFQUFLLFNBQVQ7O0FBRUEsVUFBSSxPQUFPLEVBQUUscUJBQUYsQ0FBd0IsSUFBeEIsQ0FBNkIsR0FBRyxJQUFILENBQXBDLENBSmdCOztBQU1wQixVQUFJLEVBQUUsWUFBRixDQUFlLEVBQWYsQ0FBSixFQUF3QjtBQUN0QixZQUFJLFVBQUosRUFBZ0I7QUFDZCxjQUFJLE9BQU8sSUFBSSxHQUFHLElBQUgsQ0FBSixHQUFlLElBQUksR0FBRyxJQUFILENBQUosSUFBZ0IsRUFBaEIsQ0FEWjtBQUVkLGVBQUssSUFBTCxDQUFVLEVBQVYsRUFGYztTQUFoQixNQUdPO0FBQ0wsY0FBSSxHQUFHLElBQUgsQ0FBSixHQUFlLEVBQWYsQ0FESztTQUhQO09BREYsTUFPTyxJQUFJLEVBQUUsbUJBQUYsQ0FBc0IsRUFBdEIsQ0FBSixFQUErQjtBQUNwQyxZQUFJLEVBQUUsYUFBRixDQUFnQixLQUFLLFdBQUwsQ0FBcEIsRUFBdUM7QUFDckMsaUJBQU8sSUFBUCxDQUFZLEtBQUssV0FBTCxDQUFaLENBRHFDO1NBQXZDO09BREssTUFJQSxJQUFJLElBQUosRUFBVTtBQUNmLGFBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLEtBQUssTUFBTCxFQUFhLEdBQWpDLEVBQXNDO0FBQ3BDLGNBQUksTUFBTSxLQUFLLENBQUwsQ0FBTixDQURnQztBQUVwQyxjQUFJLEdBQUcsR0FBSCxDQUFKLEVBQWE7QUFDWCxxQkFBUyxPQUFPLE1BQVAsQ0FBYyxHQUFHLEdBQUgsQ0FBZCxDQUFULENBRFc7V0FBYjtTQUZGO09BREs7S0FqQlQ7O0FBMkJBLFdBQU8sR0FBUCxDQS9CK0M7R0FBakQ7Ozs7Ozs7OztBQWRBLGNBQVEsVUFBUixHQUFxQixJQUFyQjtBQUNBLGNBQVEscUJBQVIsR0FBZ0MscUJBQWhDLENBS0ksU0FBUyxRQUFRLFNBQVI7QUFFVCxVQUFJLHdCQUF3QixNQUF4QjtBQTRDUiw0QkFBc0IsSUFBdEIsR0FBNkI7QUFDM0Isc0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQSx5QkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0EsdUJBQWUsQ0FBQyxJQUFELENBQWY7QUFDQSx5QkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0EsOEJBQXNCLENBQUMsSUFBRCxDQUF0QjtBQUNBLG1CQUFXLENBQUMsSUFBRCxDQUFYOztBQUVBLGlDQUF5QixDQUFDLFFBQUQsQ0FBekI7QUFDQSw0QkFBb0IsQ0FBQyxNQUFELENBQXBCOztBQUVBLHFCQUFhLENBQUMsT0FBRCxDQUFiO0FBQ0EsMEJBQWtCLENBQUMsT0FBRCxDQUFsQjtBQUNBLHlCQUFpQixDQUFDLFVBQUQsQ0FBakI7QUFDQSw4QkFBc0IsQ0FBQyxNQUFELENBQXRCOztBQUVBLHlCQUFpQixDQUFDLE9BQUQsQ0FBakI7QUFDQSxrQ0FBMEIsQ0FBQyxPQUFELENBQTFCO0FBQ0EsZ0NBQXdCLENBQUMsT0FBRCxDQUF4QjtBQUNBLDJCQUFtQixDQUFDLFlBQUQsQ0FBbkI7O0FBRUEsNkJBQXFCLENBQUMsSUFBRCxFQUFPLFFBQVAsQ0FBckI7QUFDQSw0QkFBb0IsQ0FBQyxJQUFELEVBQU8sUUFBUCxDQUFwQjs7QUFFQSwwQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0EseUJBQWlCLENBQUMsSUFBRCxDQUFqQjs7QUFFQSxxQkFBYSxDQUFDLFVBQUQsQ0FBYjtBQUNBLDBCQUFrQixDQUFDLFVBQUQsQ0FBbEI7O0FBRUEsd0JBQWdCLENBQUMsVUFBRCxDQUFoQjtBQUNBLGtCQUFVLENBQUMsT0FBRCxDQUFWOztBQUVBLDJCQUFtQixDQUFDLE1BQUQsQ0FBbkI7QUFDQSxzQkFBYyxDQUFDLFVBQUQsQ0FBZDtBQUNBLHVCQUFlLENBQUMsWUFBRCxDQUFmOztBQUVBLDZCQUFxQixDQUFDLGNBQUQsQ0FBckI7QUFDQSw0QkFBb0IsQ0FBQyxJQUFELENBQXBCO09BdENGIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHlwZXMvcmV0cmlldmVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZ2V0QmluZGluZ0lkZW50aWZpZXJzID0gZ2V0QmluZGluZ0lkZW50aWZpZXJzO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vaW5kZXhcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2luZGV4KTtcblxuLyoqXG4gKiBSZXR1cm4gYSBsaXN0IG9mIGJpbmRpbmcgaWRlbnRpZmllcnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBpbnB1dCBgbm9kZWAuXG4gKi9cblxuZnVuY3Rpb24gZ2V0QmluZGluZ0lkZW50aWZpZXJzKG5vZGUsIGR1cGxpY2F0ZXMpIHtcbiAgdmFyIHNlYXJjaCA9IFtdLmNvbmNhdChub2RlKTtcbiAgdmFyIGlkcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgd2hpbGUgKHNlYXJjaC5sZW5ndGgpIHtcbiAgICB2YXIgaWQgPSBzZWFyY2guc2hpZnQoKTtcbiAgICBpZiAoIWlkKSBjb250aW51ZTtcblxuICAgIHZhciBrZXlzID0gdC5nZXRCaW5kaW5nSWRlbnRpZmllcnMua2V5c1tpZC50eXBlXTtcblxuICAgIGlmICh0LmlzSWRlbnRpZmllcihpZCkpIHtcbiAgICAgIGlmIChkdXBsaWNhdGVzKSB7XG4gICAgICAgIHZhciBfaWRzID0gaWRzW2lkLm5hbWVdID0gaWRzW2lkLm5hbWVdIHx8IFtdO1xuICAgICAgICBfaWRzLnB1c2goaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWRzW2lkLm5hbWVdID0gaWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0LmlzRXhwb3J0RGVjbGFyYXRpb24oaWQpKSB7XG4gICAgICBpZiAodC5pc0RlY2xhcmF0aW9uKG5vZGUuZGVjbGFyYXRpb24pKSB7XG4gICAgICAgIHNlYXJjaC5wdXNoKG5vZGUuZGVjbGFyYXRpb24pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoa2V5cykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBpZiAoaWRba2V5XSkge1xuICAgICAgICAgIHNlYXJjaCA9IHNlYXJjaC5jb25jYXQoaWRba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaWRzO1xufVxuXG4vKipcbiAqIE1hcHBpbmcgb2YgdHlwZXMgdG8gdGhlaXIgaWRlbnRpZmllciBrZXlzLlxuICovXG5cbmdldEJpbmRpbmdJZGVudGlmaWVycy5rZXlzID0ge1xuICBEZWNsYXJlQ2xhc3M6IFtcImlkXCJdLFxuICBEZWNsYXJlRnVuY3Rpb246IFtcImlkXCJdLFxuICBEZWNsYXJlTW9kdWxlOiBbXCJpZFwiXSxcbiAgRGVjbGFyZVZhcmlhYmxlOiBbXCJpZFwiXSxcbiAgSW50ZXJmYWNlRGVjbGFyYXRpb246IFtcImlkXCJdLFxuICBUeXBlQWxpYXM6IFtcImlkXCJdLFxuXG4gIENvbXByZWhlbnNpb25FeHByZXNzaW9uOiBbXCJibG9ja3NcIl0sXG4gIENvbXByZWhlbnNpb25CbG9jazogW1wibGVmdFwiXSxcblxuICBDYXRjaENsYXVzZTogW1wicGFyYW1cIl0sXG4gIExhYmVsZWRTdGF0ZW1lbnQ6IFtcImxhYmVsXCJdLFxuICBVbmFyeUV4cHJlc3Npb246IFtcImFyZ3VtZW50XCJdLFxuICBBc3NpZ25tZW50RXhwcmVzc2lvbjogW1wibGVmdFwiXSxcblxuICBJbXBvcnRTcGVjaWZpZXI6IFtcImxvY2FsXCJdLFxuICBJbXBvcnROYW1lc3BhY2VTcGVjaWZpZXI6IFtcImxvY2FsXCJdLFxuICBJbXBvcnREZWZhdWx0U3BlY2lmaWVyOiBbXCJsb2NhbFwiXSxcbiAgSW1wb3J0RGVjbGFyYXRpb246IFtcInNwZWNpZmllcnNcIl0sXG5cbiAgRnVuY3Rpb25EZWNsYXJhdGlvbjogW1wiaWRcIiwgXCJwYXJhbXNcIl0sXG4gIEZ1bmN0aW9uRXhwcmVzc2lvbjogW1wiaWRcIiwgXCJwYXJhbXNcIl0sXG5cbiAgQ2xhc3NEZWNsYXJhdGlvbjogW1wiaWRcIl0sXG4gIENsYXNzRXhwcmVzc2lvbjogW1wiaWRcIl0sXG5cbiAgUmVzdEVsZW1lbnQ6IFtcImFyZ3VtZW50XCJdLFxuICBVcGRhdGVFeHByZXNzaW9uOiBbXCJhcmd1bWVudFwiXSxcblxuICBTcHJlYWRQcm9wZXJ0eTogW1wiYXJndW1lbnRcIl0sXG4gIFByb3BlcnR5OiBbXCJ2YWx1ZVwiXSxcblxuICBBc3NpZ25tZW50UGF0dGVybjogW1wibGVmdFwiXSxcbiAgQXJyYXlQYXR0ZXJuOiBbXCJlbGVtZW50c1wiXSxcbiAgT2JqZWN0UGF0dGVybjogW1wicHJvcGVydGllc1wiXSxcblxuICBWYXJpYWJsZURlY2xhcmF0aW9uOiBbXCJkZWNsYXJhdGlvbnNcIl0sXG4gIFZhcmlhYmxlRGVjbGFyYXRvcjogW1wiaWRcIl1cbn07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
