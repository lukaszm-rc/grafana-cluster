'use strict';

System.register([], function (_export, _context) {
  var isObjectLike, isPlainObject;

  function isElement(value) {
    return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
  }
  return {
    setters: [],
    execute: function () {
      isObjectLike = require('./isObjectLike');
      isPlainObject = require('./isPlainObject');
      module.exports = isElement;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzRWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsU0FBVCxDQUFtQixLQUFuQixFQUEwQjtBQUN4QixXQUFPLENBQUMsQ0FBQyxLQUFELElBQVUsTUFBTSxRQUFOLEtBQW1CLENBQW5CLElBQXdCLGFBQWEsS0FBYixDQUFuQyxJQUEwRCxDQUFDLGNBQWMsS0FBZCxDQUFELENBRHpDO0dBQTFCOzs7O0FBRkkscUJBQWUsUUFBUSxnQkFBUjtBQUNmLHNCQUFnQixRQUFRLGlCQUFSO0FBSXBCLGFBQU8sT0FBUCxHQUFpQixTQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9pc0VsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpLFxuICAgIGlzUGxhaW5PYmplY3QgPSByZXF1aXJlKCcuL2lzUGxhaW5PYmplY3QnKTtcbmZ1bmN0aW9uIGlzRWxlbWVudCh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB2YWx1ZS5ub2RlVHlwZSA9PT0gMSAmJiBpc09iamVjdExpa2UodmFsdWUpICYmICFpc1BsYWluT2JqZWN0KHZhbHVlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaXNFbGVtZW50O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
