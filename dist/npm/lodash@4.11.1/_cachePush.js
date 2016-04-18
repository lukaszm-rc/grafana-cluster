'use strict';

System.register([], function (_export, _context) {
  var isKeyable, HASH_UNDEFINED;

  function cachePush(value) {
    var map = this.__data__;
    if (isKeyable(value)) {
      var data = map.__data__,
          hash = typeof value == 'string' ? data.string : data.hash;
      hash[value] = HASH_UNDEFINED;
    } else {
      map.set(value, HASH_UNDEFINED);
    }
  }
  return {
    setters: [],
    execute: function () {
      isKeyable = require('./_isKeyable');
      HASH_UNDEFINED = '__lodash_hash_undefined__';
      module.exports = cachePush;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jYWNoZVB1c2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLFNBQVQsQ0FBbUIsS0FBbkIsRUFBMEI7QUFDeEIsUUFBSSxNQUFNLEtBQUssUUFBTCxDQURjO0FBRXhCLFFBQUksVUFBVSxLQUFWLENBQUosRUFBc0I7QUFDcEIsVUFBSSxPQUFPLElBQUksUUFBSjtVQUNQLE9BQU8sT0FBTyxLQUFQLElBQWdCLFFBQWhCLEdBQTJCLEtBQUssTUFBTCxHQUFjLEtBQUssSUFBTCxDQUZoQztBQUdwQixXQUFLLEtBQUwsSUFBYyxjQUFkLENBSG9CO0tBQXRCLE1BSU87QUFDTCxVQUFJLEdBQUosQ0FBUSxLQUFSLEVBQWUsY0FBZixFQURLO0tBSlA7R0FGRjs7OztBQUZJLGtCQUFZLFFBQVEsY0FBUjtBQUNaLHVCQUFpQjtBQVdyQixhQUFPLE9BQVAsR0FBaUIsU0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2NhY2hlUHVzaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuZnVuY3Rpb24gY2FjaGVQdXNoKHZhbHVlKSB7XG4gIHZhciBtYXAgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoaXNLZXlhYmxlKHZhbHVlKSkge1xuICAgIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fLFxuICAgICAgICBoYXNoID0gdHlwZW9mIHZhbHVlID09ICdzdHJpbmcnID8gZGF0YS5zdHJpbmcgOiBkYXRhLmhhc2g7XG4gICAgaGFzaFt2YWx1ZV0gPSBIQVNIX1VOREVGSU5FRDtcbiAgfSBlbHNlIHtcbiAgICBtYXAuc2V0KHZhbHVlLCBIQVNIX1VOREVGSU5FRCk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gY2FjaGVQdXNoO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
