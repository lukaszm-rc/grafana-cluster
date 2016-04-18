'use strict';

System.register([], function (_export, _context) {
  var createWrapper, FLIP_FLAG;

  function flip(func) {
    return createWrapper(func, FLIP_FLAG);
  }
  return {
    setters: [],
    execute: function () {
      createWrapper = require('./_createWrapper');
      FLIP_FLAG = 512;
      module.exports = flip;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZsaXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLElBQVQsQ0FBYyxJQUFkLEVBQW9CO0FBQ2xCLFdBQU8sY0FBYyxJQUFkLEVBQW9CLFNBQXBCLENBQVAsQ0FEa0I7R0FBcEI7Ozs7QUFGSSxzQkFBZ0IsUUFBUSxrQkFBUjtBQUNoQixrQkFBWTtBQUloQixhQUFPLE9BQVAsR0FBaUIsSUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvZmxpcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGNyZWF0ZVdyYXBwZXIgPSByZXF1aXJlKCcuL19jcmVhdGVXcmFwcGVyJyk7XG52YXIgRkxJUF9GTEFHID0gNTEyO1xuZnVuY3Rpb24gZmxpcChmdW5jKSB7XG4gIHJldHVybiBjcmVhdGVXcmFwcGVyKGZ1bmMsIEZMSVBfRkxBRyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZsaXA7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
