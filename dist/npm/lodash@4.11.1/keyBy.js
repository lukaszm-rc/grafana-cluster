'use strict';

System.register([], function (_export, _context) {
  var createAggregator, keyBy;
  return {
    setters: [],
    execute: function () {
      createAggregator = require('./_createAggregator');
      keyBy = createAggregator(function (result, value, key) {
        result[key] = value;
      });

      module.exports = keyBy;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2tleUJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSx5QkFBbUIsUUFBUSxxQkFBUjtBQUNuQixjQUFRLGlCQUFpQixVQUFTLE1BQVQsRUFBaUIsS0FBakIsRUFBd0IsR0FBeEIsRUFBNkI7QUFDeEQsZUFBTyxHQUFQLElBQWMsS0FBZCxDQUR3RDtPQUE3Qjs7QUFHN0IsYUFBTyxPQUFQLEdBQWlCLEtBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2tleUJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgY3JlYXRlQWdncmVnYXRvciA9IHJlcXVpcmUoJy4vX2NyZWF0ZUFnZ3JlZ2F0b3InKTtcbnZhciBrZXlCeSA9IGNyZWF0ZUFnZ3JlZ2F0b3IoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gIHJlc3VsdFtrZXldID0gdmFsdWU7XG59KTtcbm1vZHVsZS5leHBvcnRzID0ga2V5Qnk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
