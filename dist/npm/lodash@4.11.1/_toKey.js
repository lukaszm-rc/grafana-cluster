'use strict';

System.register([], function (_export, _context) {
  var isSymbol;

  function toKey(key) {
    return typeof key == 'string' || isSymbol(key) ? key : key + '';
  }
  return {
    setters: [],
    execute: function () {
      isSymbol = require('./isSymbol');
      module.exports = toKey;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL190b0tleS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLFdBQVMsS0FBVCxDQUFlLEdBQWYsRUFBb0I7QUFDbEIsV0FBTyxPQUFRLEdBQVAsSUFBYyxRQUFkLElBQTBCLFNBQVMsR0FBVCxDQUExQixHQUEyQyxHQUE1QyxHQUFtRCxNQUFNLEVBQU4sQ0FEeEM7R0FBcEI7Ozs7QUFESSxpQkFBVyxRQUFRLFlBQVI7QUFJZixhQUFPLE9BQVAsR0FBaUIsS0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX3RvS2V5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5mdW5jdGlvbiB0b0tleShrZXkpIHtcbiAgcmV0dXJuICh0eXBlb2Yga2V5ID09ICdzdHJpbmcnIHx8IGlzU3ltYm9sKGtleSkpID8ga2V5IDogKGtleSArICcnKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gdG9LZXk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
