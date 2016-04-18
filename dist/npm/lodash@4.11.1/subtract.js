'use strict';

System.register([], function (_export, _context) {
  var createMathOperation, subtract;
  return {
    setters: [],
    execute: function () {
      createMathOperation = require('./_createMathOperation');
      subtract = createMathOperation(function (minuend, subtrahend) {
        return minuend - subtrahend;
      });

      module.exports = subtract;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3N1YnRyYWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSw0QkFBc0IsUUFBUSx3QkFBUjtBQUN0QixpQkFBVyxvQkFBb0IsVUFBUyxPQUFULEVBQWtCLFVBQWxCLEVBQThCO0FBQy9ELGVBQU8sVUFBVSxVQUFWLENBRHdEO09BQTlCOztBQUduQyxhQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvc3VidHJhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBjcmVhdGVNYXRoT3BlcmF0aW9uID0gcmVxdWlyZSgnLi9fY3JlYXRlTWF0aE9wZXJhdGlvbicpO1xudmFyIHN1YnRyYWN0ID0gY3JlYXRlTWF0aE9wZXJhdGlvbihmdW5jdGlvbihtaW51ZW5kLCBzdWJ0cmFoZW5kKSB7XG4gIHJldHVybiBtaW51ZW5kIC0gc3VidHJhaGVuZDtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBzdWJ0cmFjdDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
