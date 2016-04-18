'use strict';

System.register([], function (_export, _context) {
  var baseClamp, toInteger, MAX_SAFE_INTEGER;

  function toSafeInteger(value) {
    return baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
  }
  return {
    setters: [],
    execute: function () {
      baseClamp = require('./_baseClamp');
      toInteger = require('./toInteger');
      MAX_SAFE_INTEGER = 9007199254740991;
      module.exports = toSafeInteger;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3RvU2FmZUludGVnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxXQUFTLGFBQVQsQ0FBdUIsS0FBdkIsRUFBOEI7QUFDNUIsV0FBTyxVQUFVLFVBQVUsS0FBVixDQUFWLEVBQTRCLENBQUMsZ0JBQUQsRUFBbUIsZ0JBQS9DLENBQVAsQ0FENEI7R0FBOUI7Ozs7QUFISSxrQkFBWSxRQUFRLGNBQVI7QUFDWixrQkFBWSxRQUFRLGFBQVI7QUFDWix5QkFBbUI7QUFJdkIsYUFBTyxPQUFQLEdBQWlCLGFBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3RvU2FmZUludGVnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlQ2xhbXAgPSByZXF1aXJlKCcuL19iYXNlQ2xhbXAnKSxcbiAgICB0b0ludGVnZXIgPSByZXF1aXJlKCcuL3RvSW50ZWdlcicpO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuZnVuY3Rpb24gdG9TYWZlSW50ZWdlcih2YWx1ZSkge1xuICByZXR1cm4gYmFzZUNsYW1wKHRvSW50ZWdlcih2YWx1ZSksIC1NQVhfU0FGRV9JTlRFR0VSLCBNQVhfU0FGRV9JTlRFR0VSKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gdG9TYWZlSW50ZWdlcjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
