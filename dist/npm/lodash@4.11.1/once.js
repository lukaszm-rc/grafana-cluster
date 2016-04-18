'use strict';

System.register([], function (_export, _context) {
  var before;

  function once(func) {
    return before(2, func);
  }
  return {
    setters: [],
    execute: function () {
      before = require('./before');
      module.exports = once;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL29uY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxXQUFTLElBQVQsQ0FBYyxJQUFkLEVBQW9CO0FBQ2xCLFdBQU8sT0FBTyxDQUFQLEVBQVUsSUFBVixDQUFQLENBRGtCO0dBQXBCOzs7O0FBREksZUFBUyxRQUFRLFVBQVI7QUFJYixhQUFPLE9BQVAsR0FBaUIsSUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvb25jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJlZm9yZSA9IHJlcXVpcmUoJy4vYmVmb3JlJyk7XG5mdW5jdGlvbiBvbmNlKGZ1bmMpIHtcbiAgcmV0dXJuIGJlZm9yZSgyLCBmdW5jKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gb25jZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
