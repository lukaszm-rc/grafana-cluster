'use strict';

System.register([], function (_export, _context) {
  var baseMean, identity;

  function mean(array) {
    return baseMean(array, identity);
  }
  return {
    setters: [],
    execute: function () {
      baseMean = require('./_baseMean');
      identity = require('./identity');
      module.exports = mean;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL21lYW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCO0FBQ25CLFdBQU8sU0FBUyxLQUFULEVBQWdCLFFBQWhCLENBQVAsQ0FEbUI7R0FBckI7Ozs7QUFGSSxpQkFBVyxRQUFRLGFBQVI7QUFDWCxpQkFBVyxRQUFRLFlBQVI7QUFJZixhQUFPLE9BQVAsR0FBaUIsSUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvbWVhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VNZWFuID0gcmVxdWlyZSgnLi9fYmFzZU1lYW4nKSxcbiAgICBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKTtcbmZ1bmN0aW9uIG1lYW4oYXJyYXkpIHtcbiAgcmV0dXJuIGJhc2VNZWFuKGFycmF5LCBpZGVudGl0eSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IG1lYW47XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
