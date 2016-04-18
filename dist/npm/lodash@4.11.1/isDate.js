'use strict';

System.register([], function (_export, _context) {
  var isObjectLike, dateTag, objectProto, objectToString;

  function isDate(value) {
    return isObjectLike(value) && objectToString.call(value) == dateTag;
  }
  return {
    setters: [],
    execute: function () {
      isObjectLike = require('./isObjectLike');
      dateTag = '[object Date]';
      objectProto = Object.prototype;
      objectToString = objectProto.toString;
      module.exports = isDate;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzRGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLFdBQVMsTUFBVCxDQUFnQixLQUFoQixFQUF1QjtBQUNyQixXQUFPLGFBQWEsS0FBYixLQUF1QixlQUFlLElBQWYsQ0FBb0IsS0FBcEIsS0FBOEIsT0FBOUIsQ0FEVDtHQUF2Qjs7OztBQUpJLHFCQUFlLFFBQVEsZ0JBQVI7QUFDZixnQkFBVTtBQUNWLG9CQUFjLE9BQU8sU0FBUDtBQUNkLHVCQUFpQixZQUFZLFFBQVo7QUFJckIsYUFBTyxPQUFQLEdBQWlCLE1BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2lzRGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG52YXIgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJztcbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcbmZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBkYXRlVGFnO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpc0RhdGU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
