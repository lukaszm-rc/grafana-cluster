'use strict';

System.register([], function (_export, _context) {
  var chain;

  function wrapperChain() {
    return chain(this);
  }
  return {
    setters: [],
    execute: function () {
      chain = require('./chain');
      module.exports = wrapperChain;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3dyYXBwZXJDaGFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLFdBQVMsWUFBVCxHQUF3QjtBQUN0QixXQUFPLE1BQU0sSUFBTixDQUFQLENBRHNCO0dBQXhCOzs7O0FBREksY0FBUSxRQUFRLFNBQVI7QUFJWixhQUFPLE9BQVAsR0FBaUIsWUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvd3JhcHBlckNoYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgY2hhaW4gPSByZXF1aXJlKCcuL2NoYWluJyk7XG5mdW5jdGlvbiB3cmFwcGVyQ2hhaW4oKSB7XG4gIHJldHVybiBjaGFpbih0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gd3JhcHBlckNoYWluO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
