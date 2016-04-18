'use strict';

System.register([], function (_export, _context) {
  var baseNth, rest, toInteger;

  function nthArg(n) {
    n = toInteger(n);
    return rest(function (args) {
      return baseNth(args, n);
    });
  }
  return {
    setters: [],
    execute: function () {
      baseNth = require('./_baseNth');
      rest = require('./rest');
      toInteger = require('./toInteger');
      module.exports = nthArg;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL250aEFyZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLFdBQVMsTUFBVCxDQUFnQixDQUFoQixFQUFtQjtBQUNqQixRQUFJLFVBQVUsQ0FBVixDQUFKLENBRGlCO0FBRWpCLFdBQU8sS0FBSyxVQUFTLElBQVQsRUFBZTtBQUN6QixhQUFPLFFBQVEsSUFBUixFQUFjLENBQWQsQ0FBUCxDQUR5QjtLQUFmLENBQVosQ0FGaUI7R0FBbkI7Ozs7QUFISSxnQkFBVSxRQUFRLFlBQVI7QUFDVixhQUFPLFFBQVEsUUFBUjtBQUNQLGtCQUFZLFFBQVEsYUFBUjtBQU9oQixhQUFPLE9BQVAsR0FBaUIsTUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvbnRoQXJnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZU50aCA9IHJlcXVpcmUoJy4vX2Jhc2VOdGgnKSxcbiAgICByZXN0ID0gcmVxdWlyZSgnLi9yZXN0JyksXG4gICAgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi90b0ludGVnZXInKTtcbmZ1bmN0aW9uIG50aEFyZyhuKSB7XG4gIG4gPSB0b0ludGVnZXIobik7XG4gIHJldHVybiByZXN0KGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICByZXR1cm4gYmFzZU50aChhcmdzLCBuKTtcbiAgfSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IG50aEFyZztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
