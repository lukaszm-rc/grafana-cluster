'use strict';

System.register([], function (_export, _context) {
  var baseLodash, wrapperClone;

  function wrapperPlant(value) {
    var result,
        parent = this;
    while (parent instanceof baseLodash) {
      var clone = wrapperClone(parent);
      clone.__index__ = 0;
      clone.__values__ = undefined;
      if (result) {
        previous.__wrapped__ = clone;
      } else {
        result = clone;
      }
      var previous = clone;
      parent = parent.__wrapped__;
    }
    previous.__wrapped__ = value;
    return result;
  }
  return {
    setters: [],
    execute: function () {
      baseLodash = require('./_baseLodash');
      wrapperClone = require('./_wrapperClone');
      module.exports = wrapperPlant;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3BsYW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxZQUFULENBQXNCLEtBQXRCLEVBQTZCO0FBQzNCLFFBQUksTUFBSjtRQUNJLFNBQVMsSUFBVCxDQUZ1QjtBQUczQixXQUFPLGtCQUFrQixVQUFsQixFQUE4QjtBQUNuQyxVQUFJLFFBQVEsYUFBYSxNQUFiLENBQVIsQ0FEK0I7QUFFbkMsWUFBTSxTQUFOLEdBQWtCLENBQWxCLENBRm1DO0FBR25DLFlBQU0sVUFBTixHQUFtQixTQUFuQixDQUhtQztBQUluQyxVQUFJLE1BQUosRUFBWTtBQUNWLGlCQUFTLFdBQVQsR0FBdUIsS0FBdkIsQ0FEVTtPQUFaLE1BRU87QUFDTCxpQkFBUyxLQUFULENBREs7T0FGUDtBQUtBLFVBQUksV0FBVyxLQUFYLENBVCtCO0FBVW5DLGVBQVMsT0FBTyxXQUFQLENBVjBCO0tBQXJDO0FBWUEsYUFBUyxXQUFULEdBQXVCLEtBQXZCLENBZjJCO0FBZ0IzQixXQUFPLE1BQVAsQ0FoQjJCO0dBQTdCOzs7O0FBRkksbUJBQWEsUUFBUSxlQUFSO0FBQ2IscUJBQWUsUUFBUSxpQkFBUjtBQW1CbkIsYUFBTyxPQUFQLEdBQWlCLFlBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3BsYW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUxvZGFzaCA9IHJlcXVpcmUoJy4vX2Jhc2VMb2Rhc2gnKSxcbiAgICB3cmFwcGVyQ2xvbmUgPSByZXF1aXJlKCcuL193cmFwcGVyQ2xvbmUnKTtcbmZ1bmN0aW9uIHdyYXBwZXJQbGFudCh2YWx1ZSkge1xuICB2YXIgcmVzdWx0LFxuICAgICAgcGFyZW50ID0gdGhpcztcbiAgd2hpbGUgKHBhcmVudCBpbnN0YW5jZW9mIGJhc2VMb2Rhc2gpIHtcbiAgICB2YXIgY2xvbmUgPSB3cmFwcGVyQ2xvbmUocGFyZW50KTtcbiAgICBjbG9uZS5fX2luZGV4X18gPSAwO1xuICAgIGNsb25lLl9fdmFsdWVzX18gPSB1bmRlZmluZWQ7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcHJldmlvdXMuX193cmFwcGVkX18gPSBjbG9uZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gY2xvbmU7XG4gICAgfVxuICAgIHZhciBwcmV2aW91cyA9IGNsb25lO1xuICAgIHBhcmVudCA9IHBhcmVudC5fX3dyYXBwZWRfXztcbiAgfVxuICBwcmV2aW91cy5fX3dyYXBwZWRfXyA9IHZhbHVlO1xuICByZXR1cm4gcmVzdWx0O1xufVxubW9kdWxlLmV4cG9ydHMgPSB3cmFwcGVyUGxhbnQ7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
