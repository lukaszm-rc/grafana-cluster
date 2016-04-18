'use strict';

System.register([], function (_export, _context) {
  var baseForOwn;

  function baseInverter(object, setter, iteratee, accumulator) {
    baseForOwn(object, function (value, key, object) {
      setter(accumulator, iteratee(value), key, object);
    });
    return accumulator;
  }
  return {
    setters: [],
    execute: function () {
      baseForOwn = require('./_baseForOwn');
      module.exports = baseInverter;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlSW52ZXJ0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxXQUFTLFlBQVQsQ0FBc0IsTUFBdEIsRUFBOEIsTUFBOUIsRUFBc0MsUUFBdEMsRUFBZ0QsV0FBaEQsRUFBNkQ7QUFDM0QsZUFBVyxNQUFYLEVBQW1CLFVBQVMsS0FBVCxFQUFnQixHQUFoQixFQUFxQixNQUFyQixFQUE2QjtBQUM5QyxhQUFPLFdBQVAsRUFBb0IsU0FBUyxLQUFULENBQXBCLEVBQXFDLEdBQXJDLEVBQTBDLE1BQTFDLEVBRDhDO0tBQTdCLENBQW5CLENBRDJEO0FBSTNELFdBQU8sV0FBUCxDQUoyRDtHQUE3RDs7OztBQURJLG1CQUFhLFFBQVEsZUFBUjtBQU9qQixhQUFPLE9BQVAsR0FBaUIsWUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2Jhc2VJbnZlcnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VGb3JPd24gPSByZXF1aXJlKCcuL19iYXNlRm9yT3duJyk7XG5mdW5jdGlvbiBiYXNlSW52ZXJ0ZXIob2JqZWN0LCBzZXR0ZXIsIGl0ZXJhdGVlLCBhY2N1bXVsYXRvcikge1xuICBiYXNlRm9yT3duKG9iamVjdCwgZnVuY3Rpb24odmFsdWUsIGtleSwgb2JqZWN0KSB7XG4gICAgc2V0dGVyKGFjY3VtdWxhdG9yLCBpdGVyYXRlZSh2YWx1ZSksIGtleSwgb2JqZWN0KTtcbiAgfSk7XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gYmFzZUludmVydGVyO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
