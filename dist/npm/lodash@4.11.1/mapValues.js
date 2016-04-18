'use strict';

System.register([], function (_export, _context) {
  var baseForOwn, baseIteratee;

  function mapValues(object, iteratee) {
    var result = {};
    iteratee = baseIteratee(iteratee, 3);
    baseForOwn(object, function (value, key, object) {
      result[key] = iteratee(value, key, object);
    });
    return result;
  }
  return {
    setters: [],
    execute: function () {
      baseForOwn = require('./_baseForOwn');
      baseIteratee = require('./_baseIteratee');
      module.exports = mapValues;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL21hcFZhbHVlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsU0FBVCxDQUFtQixNQUFuQixFQUEyQixRQUEzQixFQUFxQztBQUNuQyxRQUFJLFNBQVMsRUFBVCxDQUQrQjtBQUVuQyxlQUFXLGFBQWEsUUFBYixFQUF1QixDQUF2QixDQUFYLENBRm1DO0FBR25DLGVBQVcsTUFBWCxFQUFtQixVQUFTLEtBQVQsRUFBZ0IsR0FBaEIsRUFBcUIsTUFBckIsRUFBNkI7QUFDOUMsYUFBTyxHQUFQLElBQWMsU0FBUyxLQUFULEVBQWdCLEdBQWhCLEVBQXFCLE1BQXJCLENBQWQsQ0FEOEM7S0FBN0IsQ0FBbkIsQ0FIbUM7QUFNbkMsV0FBTyxNQUFQLENBTm1DO0dBQXJDOzs7O0FBRkksbUJBQWEsUUFBUSxlQUFSO0FBQ2IscUJBQWUsUUFBUSxpQkFBUjtBQVNuQixhQUFPLE9BQVAsR0FBaUIsU0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvbWFwVmFsdWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUZvck93biA9IHJlcXVpcmUoJy4vX2Jhc2VGb3JPd24nKSxcbiAgICBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKTtcbmZ1bmN0aW9uIG1hcFZhbHVlcyhvYmplY3QsIGl0ZXJhdGVlKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgaXRlcmF0ZWUgPSBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUsIDMpO1xuICBiYXNlRm9yT3duKG9iamVjdCwgZnVuY3Rpb24odmFsdWUsIGtleSwgb2JqZWN0KSB7XG4gICAgcmVzdWx0W2tleV0gPSBpdGVyYXRlZSh2YWx1ZSwga2V5LCBvYmplY3QpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbm1vZHVsZS5leHBvcnRzID0gbWFwVmFsdWVzO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
