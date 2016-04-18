'use strict';

System.register([], function (_export, _context) {
  var isObjectLike, weakSetTag, objectProto, objectToString;

  function isWeakSet(value) {
    return isObjectLike(value) && objectToString.call(value) == weakSetTag;
  }
  return {
    setters: [],
    execute: function () {
      isObjectLike = require('./isObjectLike');
      weakSetTag = '[object WeakSet]';
      objectProto = Object.prototype;
      objectToString = objectProto.toString;
      module.exports = isWeakSet;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzV2Vha1NldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLFdBQVMsU0FBVCxDQUFtQixLQUFuQixFQUEwQjtBQUN4QixXQUFPLGFBQWEsS0FBYixLQUF1QixlQUFlLElBQWYsQ0FBb0IsS0FBcEIsS0FBOEIsVUFBOUIsQ0FETjtHQUExQjs7OztBQUpJLHFCQUFlLFFBQVEsZ0JBQVI7QUFDZixtQkFBYTtBQUNiLG9CQUFjLE9BQU8sU0FBUDtBQUNkLHVCQUFpQixZQUFZLFFBQVo7QUFJckIsYUFBTyxPQUFQLEdBQWlCLFNBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2lzV2Vha1NldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG52YXIgd2Vha1NldFRhZyA9ICdbb2JqZWN0IFdlYWtTZXRdJztcbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcbmZ1bmN0aW9uIGlzV2Vha1NldCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSB3ZWFrU2V0VGFnO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpc1dlYWtTZXQ7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
