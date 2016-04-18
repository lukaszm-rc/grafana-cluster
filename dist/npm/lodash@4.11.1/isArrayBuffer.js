'use strict';

System.register([], function (_export, _context) {
  var isObjectLike, arrayBufferTag, objectProto, objectToString;

  function isArrayBuffer(value) {
    return isObjectLike(value) && objectToString.call(value) == arrayBufferTag;
  }
  return {
    setters: [],
    execute: function () {
      isObjectLike = require('./isObjectLike');
      arrayBufferTag = '[object ArrayBuffer]';
      objectProto = Object.prototype;
      objectToString = objectProto.toString;
      module.exports = isArrayBuffer;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzQXJyYXlCdWZmZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxXQUFTLGFBQVQsQ0FBdUIsS0FBdkIsRUFBOEI7QUFDNUIsV0FBTyxhQUFhLEtBQWIsS0FBdUIsZUFBZSxJQUFmLENBQW9CLEtBQXBCLEtBQThCLGNBQTlCLENBREY7R0FBOUI7Ozs7QUFKSSxxQkFBZSxRQUFRLGdCQUFSO0FBQ2YsdUJBQWlCO0FBQ2pCLG9CQUFjLE9BQU8sU0FBUDtBQUNkLHVCQUFpQixZQUFZLFFBQVo7QUFJckIsYUFBTyxPQUFQLEdBQWlCLGFBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2lzQXJyYXlCdWZmZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJyYXlCdWZmZXJUYWc7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlCdWZmZXI7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
