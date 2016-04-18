'use strict';

System.register([], function (_export, _context) {
  var isInteger, MAX_SAFE_INTEGER;

  function isSafeInteger(value) {
    return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
  }
  return {
    setters: [],
    execute: function () {
      isInteger = require('./isInteger');
      MAX_SAFE_INTEGER = 9007199254740991;
      module.exports = isSafeInteger;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzU2FmZUludGVnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLGFBQVQsQ0FBdUIsS0FBdkIsRUFBOEI7QUFDNUIsV0FBTyxVQUFVLEtBQVYsS0FBb0IsU0FBUyxDQUFDLGdCQUFELElBQXFCLFNBQVMsZ0JBQVQsQ0FEN0I7R0FBOUI7Ozs7QUFGSSxrQkFBWSxRQUFRLGFBQVI7QUFDWix5QkFBbUI7QUFJdkIsYUFBTyxPQUFQLEdBQWlCLGFBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2lzU2FmZUludGVnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBpc0ludGVnZXIgPSByZXF1aXJlKCcuL2lzSW50ZWdlcicpO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuZnVuY3Rpb24gaXNTYWZlSW50ZWdlcih2YWx1ZSkge1xuICByZXR1cm4gaXNJbnRlZ2VyKHZhbHVlKSAmJiB2YWx1ZSA+PSAtTUFYX1NBRkVfSU5URUdFUiAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpc1NhZmVJbnRlZ2VyO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
