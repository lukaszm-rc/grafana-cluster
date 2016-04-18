'use strict';

System.register([], function (_export, _context) {
  var isNumber;

  function isNaN(value) {
    return isNumber(value) && value != +value;
  }
  return {
    setters: [],
    execute: function () {
      isNumber = require('./isNumber');
      module.exports = isNaN;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzTmFOLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsV0FBUyxLQUFULENBQWUsS0FBZixFQUFzQjtBQUNwQixXQUFPLFNBQVMsS0FBVCxLQUFtQixTQUFTLENBQUMsS0FBRCxDQURmO0dBQXRCOzs7O0FBREksaUJBQVcsUUFBUSxZQUFSO0FBSWYsYUFBTyxPQUFQLEdBQWlCLEtBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2lzTmFOLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgaXNOdW1iZXIgPSByZXF1aXJlKCcuL2lzTnVtYmVyJyk7XG5mdW5jdGlvbiBpc05hTih2YWx1ZSkge1xuICByZXR1cm4gaXNOdW1iZXIodmFsdWUpICYmIHZhbHVlICE9ICt2YWx1ZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaXNOYU47XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
