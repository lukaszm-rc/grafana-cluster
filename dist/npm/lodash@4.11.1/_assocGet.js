'use strict';

System.register([], function (_export, _context) {
  var assocIndexOf;

  function assocGet(array, key) {
    var index = assocIndexOf(array, key);
    return index < 0 ? undefined : array[index][1];
  }
  return {
    setters: [],
    execute: function () {
      assocIndexOf = require('./_assocIndexOf');
      module.exports = assocGet;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19hc3NvY0dldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLFdBQVMsUUFBVCxDQUFrQixLQUFsQixFQUF5QixHQUF6QixFQUE4QjtBQUM1QixRQUFJLFFBQVEsYUFBYSxLQUFiLEVBQW9CLEdBQXBCLENBQVIsQ0FEd0I7QUFFNUIsV0FBTyxRQUFRLENBQVIsR0FBWSxTQUFaLEdBQXdCLE1BQU0sS0FBTixFQUFhLENBQWIsQ0FBeEIsQ0FGcUI7R0FBOUI7Ozs7QUFESSxxQkFBZSxRQUFRLGlCQUFSO0FBS25CLGFBQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fYXNzb2NHZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcbmZ1bmN0aW9uIGFzc29jR2V0KGFycmF5LCBrZXkpIHtcbiAgdmFyIGluZGV4ID0gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpO1xuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogYXJyYXlbaW5kZXhdWzFdO1xufVxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0dldDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
