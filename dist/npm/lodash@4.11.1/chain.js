'use strict';

System.register([], function (_export, _context) {
  var lodash;

  function chain(value) {
    var result = lodash(value);
    result.__chain__ = true;
    return result;
  }
  return {
    setters: [],
    execute: function () {
      lodash = require('./wrapperLodash');
      module.exports = chain;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2NoYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsV0FBUyxLQUFULENBQWUsS0FBZixFQUFzQjtBQUNwQixRQUFJLFNBQVMsT0FBTyxLQUFQLENBQVQsQ0FEZ0I7QUFFcEIsV0FBTyxTQUFQLEdBQW1CLElBQW5CLENBRm9CO0FBR3BCLFdBQU8sTUFBUCxDQUhvQjtHQUF0Qjs7OztBQURJLGVBQVMsUUFBUSxpQkFBUjtBQU1iLGFBQU8sT0FBUCxHQUFpQixLQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9jaGFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGxvZGFzaCA9IHJlcXVpcmUoJy4vd3JhcHBlckxvZGFzaCcpO1xuZnVuY3Rpb24gY2hhaW4odmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IGxvZGFzaCh2YWx1ZSk7XG4gIHJlc3VsdC5fX2NoYWluX18gPSB0cnVlO1xuICByZXR1cm4gcmVzdWx0O1xufVxubW9kdWxlLmV4cG9ydHMgPSBjaGFpbjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
