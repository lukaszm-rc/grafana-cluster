'use strict';

System.register([], function (_export, _context) {
  var baseForOwn, baseIteratee;

  function mapKeys(object, iteratee) {
    var result = {};
    iteratee = baseIteratee(iteratee, 3);
    baseForOwn(object, function (value, key, object) {
      result[iteratee(value, key, object)] = value;
    });
    return result;
  }
  return {
    setters: [],
    execute: function () {
      baseForOwn = require('./_baseForOwn');
      baseIteratee = require('./_baseIteratee');
      module.exports = mapKeys;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL21hcEtleXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLE9BQVQsQ0FBaUIsTUFBakIsRUFBeUIsUUFBekIsRUFBbUM7QUFDakMsUUFBSSxTQUFTLEVBQVQsQ0FENkI7QUFFakMsZUFBVyxhQUFhLFFBQWIsRUFBdUIsQ0FBdkIsQ0FBWCxDQUZpQztBQUdqQyxlQUFXLE1BQVgsRUFBbUIsVUFBUyxLQUFULEVBQWdCLEdBQWhCLEVBQXFCLE1BQXJCLEVBQTZCO0FBQzlDLGFBQU8sU0FBUyxLQUFULEVBQWdCLEdBQWhCLEVBQXFCLE1BQXJCLENBQVAsSUFBdUMsS0FBdkMsQ0FEOEM7S0FBN0IsQ0FBbkIsQ0FIaUM7QUFNakMsV0FBTyxNQUFQLENBTmlDO0dBQW5DOzs7O0FBRkksbUJBQWEsUUFBUSxlQUFSO0FBQ2IscUJBQWUsUUFBUSxpQkFBUjtBQVNuQixhQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvbWFwS2V5cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VGb3JPd24gPSByZXF1aXJlKCcuL19iYXNlRm9yT3duJyksXG4gICAgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyk7XG5mdW5jdGlvbiBtYXBLZXlzKG9iamVjdCwgaXRlcmF0ZWUpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBpdGVyYXRlZSA9IGJhc2VJdGVyYXRlZShpdGVyYXRlZSwgMyk7XG4gIGJhc2VGb3JPd24ob2JqZWN0LCBmdW5jdGlvbih2YWx1ZSwga2V5LCBvYmplY3QpIHtcbiAgICByZXN1bHRbaXRlcmF0ZWUodmFsdWUsIGtleSwgb2JqZWN0KV0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IG1hcEtleXM7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
