'use strict';

System.register([], function (_export, _context) {
  var basePullAll;

  function pullAllWith(array, values, comparator) {
    return array && array.length && values && values.length ? basePullAll(array, values, undefined, comparator) : array;
  }
  return {
    setters: [],
    execute: function () {
      basePullAll = require('./_basePullAll');
      module.exports = pullAllWith;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3B1bGxBbGxXaXRoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsV0FBUyxXQUFULENBQXFCLEtBQXJCLEVBQTRCLE1BQTVCLEVBQW9DLFVBQXBDLEVBQWdEO0FBQzlDLFdBQU8sS0FBQyxJQUFTLE1BQU0sTUFBTixJQUFnQixNQUF6QixJQUFtQyxPQUFPLE1BQVAsR0FBaUIsWUFBWSxLQUFaLEVBQW1CLE1BQW5CLEVBQTJCLFNBQTNCLEVBQXNDLFVBQXRDLENBQXJELEdBQXlHLEtBQXpHLENBRHVDO0dBQWhEOzs7O0FBREksb0JBQWMsUUFBUSxnQkFBUjtBQUlsQixhQUFPLE9BQVAsR0FBaUIsV0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvcHVsbEFsbFdpdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlUHVsbEFsbCA9IHJlcXVpcmUoJy4vX2Jhc2VQdWxsQWxsJyk7XG5mdW5jdGlvbiBwdWxsQWxsV2l0aChhcnJheSwgdmFsdWVzLCBjb21wYXJhdG9yKSB7XG4gIHJldHVybiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoICYmIHZhbHVlcyAmJiB2YWx1ZXMubGVuZ3RoKSA/IGJhc2VQdWxsQWxsKGFycmF5LCB2YWx1ZXMsIHVuZGVmaW5lZCwgY29tcGFyYXRvcikgOiBhcnJheTtcbn1cbm1vZHVsZS5leHBvcnRzID0gcHVsbEFsbFdpdGg7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
