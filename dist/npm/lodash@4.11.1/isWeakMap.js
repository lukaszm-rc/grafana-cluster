'use strict';

System.register([], function (_export, _context) {
  var getTag, isObjectLike, weakMapTag;

  function isWeakMap(value) {
    return isObjectLike(value) && getTag(value) == weakMapTag;
  }
  return {
    setters: [],
    execute: function () {
      getTag = require('./_getTag');
      isObjectLike = require('./isObjectLike');
      weakMapTag = '[object WeakMap]';
      module.exports = isWeakMap;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzV2Vha01hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLFdBQVMsU0FBVCxDQUFtQixLQUFuQixFQUEwQjtBQUN4QixXQUFPLGFBQWEsS0FBYixLQUF1QixPQUFPLEtBQVAsS0FBaUIsVUFBakIsQ0FETjtHQUExQjs7OztBQUhJLGVBQVMsUUFBUSxXQUFSO0FBQ1QscUJBQWUsUUFBUSxnQkFBUjtBQUNmLG1CQUFhO0FBSWpCLGFBQU8sT0FBUCxHQUFpQixTQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9pc1dlYWtNYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xudmFyIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5mdW5jdGlvbiBpc1dlYWtNYXAodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSB3ZWFrTWFwVGFnO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpc1dlYWtNYXA7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
