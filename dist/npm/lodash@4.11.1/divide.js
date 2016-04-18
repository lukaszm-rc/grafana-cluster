'use strict';

System.register([], function (_export, _context) {
  var createMathOperation, divide;
  return {
    setters: [],
    execute: function () {
      createMathOperation = require('./_createMathOperation');
      divide = createMathOperation(function (dividend, divisor) {
        return dividend / divisor;
      });

      module.exports = divide;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2RpdmlkZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksNEJBQXNCLFFBQVEsd0JBQVI7QUFDdEIsZUFBUyxvQkFBb0IsVUFBUyxRQUFULEVBQW1CLE9BQW5CLEVBQTRCO0FBQzNELGVBQU8sV0FBVyxPQUFYLENBRG9EO09BQTVCOztBQUdqQyxhQUFPLE9BQVAsR0FBaUIsTUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvZGl2aWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgY3JlYXRlTWF0aE9wZXJhdGlvbiA9IHJlcXVpcmUoJy4vX2NyZWF0ZU1hdGhPcGVyYXRpb24nKTtcbnZhciBkaXZpZGUgPSBjcmVhdGVNYXRoT3BlcmF0aW9uKGZ1bmN0aW9uKGRpdmlkZW5kLCBkaXZpc29yKSB7XG4gIHJldHVybiBkaXZpZGVuZCAvIGRpdmlzb3I7XG59KTtcbm1vZHVsZS5leHBvcnRzID0gZGl2aWRlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
