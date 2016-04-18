'use strict';

System.register([], function (_export, _context) {
  var assocIndexOf;

  function assocSet(array, key, value) {
    var index = assocIndexOf(array, key);
    if (index < 0) {
      array.push([key, value]);
    } else {
      array[index][1] = value;
    }
  }
  return {
    setters: [],
    execute: function () {
      assocIndexOf = require('./_assocIndexOf');
      module.exports = assocSet;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19hc3NvY1NldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLFdBQVMsUUFBVCxDQUFrQixLQUFsQixFQUF5QixHQUF6QixFQUE4QixLQUE5QixFQUFxQztBQUNuQyxRQUFJLFFBQVEsYUFBYSxLQUFiLEVBQW9CLEdBQXBCLENBQVIsQ0FEK0I7QUFFbkMsUUFBSSxRQUFRLENBQVIsRUFBVztBQUNiLFlBQU0sSUFBTixDQUFXLENBQUMsR0FBRCxFQUFNLEtBQU4sQ0FBWCxFQURhO0tBQWYsTUFFTztBQUNMLFlBQU0sS0FBTixFQUFhLENBQWIsSUFBa0IsS0FBbEIsQ0FESztLQUZQO0dBRkY7Ozs7QUFESSxxQkFBZSxRQUFRLGlCQUFSO0FBU25CLGFBQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fYXNzb2NTZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcbmZ1bmN0aW9uIGFzc29jU2V0KGFycmF5LCBrZXksIHZhbHVlKSB7XG4gIHZhciBpbmRleCA9IGFzc29jSW5kZXhPZihhcnJheSwga2V5KTtcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGFycmF5LnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBhcnJheVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY1NldDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
