'use strict';

System.register([], function (_export, _context) {
  var identity;

  function castFunction(value) {
    return typeof value == 'function' ? value : identity;
  }
  return {
    setters: [],
    execute: function () {
      identity = require('./identity');
      module.exports = castFunction;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jYXN0RnVuY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxXQUFTLFlBQVQsQ0FBc0IsS0FBdEIsRUFBNkI7QUFDM0IsV0FBTyxPQUFPLEtBQVAsSUFBZ0IsVUFBaEIsR0FBNkIsS0FBN0IsR0FBcUMsUUFBckMsQ0FEb0I7R0FBN0I7Ozs7QUFESSxpQkFBVyxRQUFRLFlBQVI7QUFJZixhQUFPLE9BQVAsR0FBaUIsWUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2Nhc3RGdW5jdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xuZnVuY3Rpb24gY2FzdEZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlIDogaWRlbnRpdHk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RGdW5jdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
