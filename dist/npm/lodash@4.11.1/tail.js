'use strict';

System.register([], function (_export, _context) {
  var drop;

  function tail(array) {
    return drop(array, 1);
  }
  return {
    setters: [],
    execute: function () {
      drop = require('./drop');
      module.exports = tail;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3RhaWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxXQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCO0FBQ25CLFdBQU8sS0FBSyxLQUFMLEVBQVksQ0FBWixDQUFQLENBRG1CO0dBQXJCOzs7O0FBREksYUFBTyxRQUFRLFFBQVI7QUFJWCxhQUFPLE9BQVAsR0FBaUIsSUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvdGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGRyb3AgPSByZXF1aXJlKCcuL2Ryb3AnKTtcbmZ1bmN0aW9uIHRhaWwoYXJyYXkpIHtcbiAgcmV0dXJuIGRyb3AoYXJyYXksIDEpO1xufVxubW9kdWxlLmV4cG9ydHMgPSB0YWlsO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
