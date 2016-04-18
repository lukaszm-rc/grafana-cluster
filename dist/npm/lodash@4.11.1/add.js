'use strict';

System.register([], function (_export, _context) {
  var createMathOperation, add;
  return {
    setters: [],
    execute: function () {
      createMathOperation = require('./_createMathOperation');
      add = createMathOperation(function (augend, addend) {
        return augend + addend;
      });

      module.exports = add;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2FkZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksNEJBQXNCLFFBQVEsd0JBQVI7QUFDdEIsWUFBTSxvQkFBb0IsVUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCO0FBQ3JELGVBQU8sU0FBUyxNQUFULENBRDhDO09BQXpCOztBQUc5QixhQUFPLE9BQVAsR0FBaUIsR0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvYWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgY3JlYXRlTWF0aE9wZXJhdGlvbiA9IHJlcXVpcmUoJy4vX2NyZWF0ZU1hdGhPcGVyYXRpb24nKTtcbnZhciBhZGQgPSBjcmVhdGVNYXRoT3BlcmF0aW9uKGZ1bmN0aW9uKGF1Z2VuZCwgYWRkZW5kKSB7XG4gIHJldHVybiBhdWdlbmQgKyBhZGRlbmQ7XG59KTtcbm1vZHVsZS5leHBvcnRzID0gYWRkO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
