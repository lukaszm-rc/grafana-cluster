'use strict';

System.register([], function (_export, _context) {
  var isArrayLikeObject, argsTag, objectProto, hasOwnProperty, objectToString, propertyIsEnumerable;

  function isArguments(value) {
    return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
  }
  return {
    setters: [],
    execute: function () {
      isArrayLikeObject = require('./isArrayLikeObject');
      argsTag = '[object Arguments]';
      objectProto = Object.prototype;
      hasOwnProperty = objectProto.hasOwnProperty;
      objectToString = objectProto.toString;
      propertyIsEnumerable = objectProto.propertyIsEnumerable;
      module.exports = isArguments;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzQXJndW1lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBT0EsV0FBUyxXQUFULENBQXFCLEtBQXJCLEVBQTRCO0FBQzFCLFdBQU8sa0JBQWtCLEtBQWxCLEtBQTRCLGVBQWUsSUFBZixDQUFvQixLQUFwQixFQUEyQixRQUEzQixDQUE1QixLQUFxRSxDQUFDLHFCQUFxQixJQUFyQixDQUEwQixLQUExQixFQUFpQyxRQUFqQyxDQUFELElBQStDLGVBQWUsSUFBZixDQUFvQixLQUFwQixLQUE4QixPQUE5QixDQUFwSCxDQURtQjtHQUE1Qjs7OztBQU5JLDBCQUFvQixRQUFRLHFCQUFSO0FBQ3BCLGdCQUFVO0FBQ1Ysb0JBQWMsT0FBTyxTQUFQO0FBQ2QsdUJBQWlCLFlBQVksY0FBWjtBQUNqQix1QkFBaUIsWUFBWSxRQUFaO0FBQ2pCLDZCQUF1QixZQUFZLG9CQUFaO0FBSTNCLGFBQU8sT0FBUCxHQUFpQixXQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9pc0FyZ3VtZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlzQXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZU9iamVjdCcpO1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5mdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJiAoIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKSB8fCBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBhcmdzVGFnKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
