'use strict';

System.register([], function (_export, _context) {
  var isObjectLike, boolTag, objectProto, objectToString;

  function isBoolean(value) {
    return value === true || value === false || isObjectLike(value) && objectToString.call(value) == boolTag;
  }
  return {
    setters: [],
    execute: function () {
      isObjectLike = require('./isObjectLike');
      boolTag = '[object Boolean]';
      objectProto = Object.prototype;
      objectToString = objectProto.toString;
      module.exports = isBoolean;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzQm9vbGVhbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLFdBQVMsU0FBVCxDQUFtQixLQUFuQixFQUEwQjtBQUN4QixXQUFPLFVBQVUsSUFBVixJQUFrQixVQUFVLEtBQVYsSUFBb0IsYUFBYSxLQUFiLEtBQXVCLGVBQWUsSUFBZixDQUFvQixLQUFwQixLQUE4QixPQUE5QixDQUQ1QztHQUExQjs7OztBQUpJLHFCQUFlLFFBQVEsZ0JBQVI7QUFDZixnQkFBVTtBQUNWLG9CQUFjLE9BQU8sU0FBUDtBQUNkLHVCQUFpQixZQUFZLFFBQVo7QUFJckIsYUFBTyxPQUFQLEdBQWlCLFNBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2lzQm9vbGVhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJztcbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcbmZ1bmN0aW9uIGlzQm9vbGVhbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09IGZhbHNlIHx8IChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IGJvb2xUYWcpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpc0Jvb2xlYW47XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
