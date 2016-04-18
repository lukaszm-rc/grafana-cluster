'use strict';

System.register([], function (_export, _context) {
  var isObjectLike, errorTag, objectProto, objectToString;

  function isError(value) {
    if (!isObjectLike(value)) {
      return false;
    }
    return objectToString.call(value) == errorTag || typeof value.message == 'string' && typeof value.name == 'string';
  }
  return {
    setters: [],
    execute: function () {
      isObjectLike = require('./isObjectLike');
      errorTag = '[object Error]';
      objectProto = Object.prototype;
      objectToString = objectProto.toString;
      module.exports = isError;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzRXJyb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxXQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0I7QUFDdEIsUUFBSSxDQUFDLGFBQWEsS0FBYixDQUFELEVBQXNCO0FBQ3hCLGFBQU8sS0FBUCxDQUR3QjtLQUExQjtBQUdBLFdBQU8sY0FBQyxDQUFlLElBQWYsQ0FBb0IsS0FBcEIsS0FBOEIsUUFBOUIsSUFBNEMsT0FBTyxNQUFNLE9BQU4sSUFBaUIsUUFBeEIsSUFBb0MsT0FBTyxNQUFNLElBQU4sSUFBYyxRQUFyQixDQUpsRTtHQUF4Qjs7OztBQUpJLHFCQUFlLFFBQVEsZ0JBQVI7QUFDZixpQkFBVztBQUNYLG9CQUFjLE9BQU8sU0FBUDtBQUNkLHVCQUFpQixZQUFZLFFBQVo7QUFPckIsYUFBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2lzRXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xudmFyIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJztcbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcbmZ1bmN0aW9uIGlzRXJyb3IodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAob2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gZXJyb3JUYWcpIHx8ICh0eXBlb2YgdmFsdWUubWVzc2FnZSA9PSAnc3RyaW5nJyAmJiB0eXBlb2YgdmFsdWUubmFtZSA9PSAnc3RyaW5nJyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGlzRXJyb3I7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
