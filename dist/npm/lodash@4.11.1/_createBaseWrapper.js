'use strict';

System.register([], function (_export, _context) {
  var createCtorWrapper, root, BIND_FLAG;

  function createBaseWrapper(func, bitmask, thisArg) {
    var isBind = bitmask & BIND_FLAG,
        Ctor = createCtorWrapper(func);
    function wrapper() {
      var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
      return fn.apply(isBind ? thisArg : this, arguments);
    }
    return wrapper;
  }
  return {
    setters: [],
    execute: function () {
      createCtorWrapper = require('./_createCtorWrapper');
      root = require('./_root');
      BIND_FLAG = 1;
      module.exports = createBaseWrapper;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jcmVhdGVCYXNlV3JhcHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLFdBQVMsaUJBQVQsQ0FBMkIsSUFBM0IsRUFBaUMsT0FBakMsRUFBMEMsT0FBMUMsRUFBbUQ7QUFDakQsUUFBSSxTQUFTLFVBQVUsU0FBVjtRQUNULE9BQU8sa0JBQWtCLElBQWxCLENBQVAsQ0FGNkM7QUFHakQsYUFBUyxPQUFULEdBQW1CO0FBQ2pCLFVBQUksS0FBSyxJQUFDLElBQVEsU0FBUyxJQUFULElBQWlCLGdCQUFnQixPQUFoQixHQUEyQixJQUFyRCxHQUE0RCxJQUE1RCxDQURRO0FBRWpCLGFBQU8sR0FBRyxLQUFILENBQVMsU0FBUyxPQUFULEdBQW1CLElBQW5CLEVBQXlCLFNBQWxDLENBQVAsQ0FGaUI7S0FBbkI7QUFJQSxXQUFPLE9BQVAsQ0FQaUQ7R0FBbkQ7Ozs7QUFISSwwQkFBb0IsUUFBUSxzQkFBUjtBQUNwQixhQUFPLFFBQVEsU0FBUjtBQUNQLGtCQUFZO0FBVWhCLGFBQU8sT0FBUCxHQUFpQixpQkFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2NyZWF0ZUJhc2VXcmFwcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgY3JlYXRlQ3RvcldyYXBwZXIgPSByZXF1aXJlKCcuL19jcmVhdGVDdG9yV3JhcHBlcicpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG52YXIgQklORF9GTEFHID0gMTtcbmZ1bmN0aW9uIGNyZWF0ZUJhc2VXcmFwcGVyKGZ1bmMsIGJpdG1hc2ssIHRoaXNBcmcpIHtcbiAgdmFyIGlzQmluZCA9IGJpdG1hc2sgJiBCSU5EX0ZMQUcsXG4gICAgICBDdG9yID0gY3JlYXRlQ3RvcldyYXBwZXIoZnVuYyk7XG4gIGZ1bmN0aW9uIHdyYXBwZXIoKSB7XG4gICAgdmFyIGZuID0gKHRoaXMgJiYgdGhpcyAhPT0gcm9vdCAmJiB0aGlzIGluc3RhbmNlb2Ygd3JhcHBlcikgPyBDdG9yIDogZnVuYztcbiAgICByZXR1cm4gZm4uYXBwbHkoaXNCaW5kID8gdGhpc0FyZyA6IHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUJhc2VXcmFwcGVyO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
