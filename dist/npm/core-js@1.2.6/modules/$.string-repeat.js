/* */
'use strict';

System.register([], function (_export, _context) {
  var toInteger, defined;
  return {
    setters: [],
    execute: function () {
      toInteger = require('./$.to-integer');
      defined = require('./$.defined');

      module.exports = function repeat(count) {
        var str = String(defined(this)),
            res = '',
            n = toInteger(count);
        if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
        for (; n > 0; (n >>>= 1) && (str += str)) {
          if (n & 1) res += str;
        }return res;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5zdHJpbmctcmVwZWF0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQUNJLGtCQUFZLFFBQVEsZ0JBQVI7QUFDWixnQkFBVSxRQUFRLGFBQVI7O0FBQ2QsYUFBTyxPQUFQLEdBQWlCLFNBQVMsTUFBVCxDQUFnQixLQUFoQixFQUF1QjtBQUN0QyxZQUFJLE1BQU0sT0FBTyxRQUFRLElBQVIsQ0FBUCxDQUFOO1lBQ0EsTUFBTSxFQUFOO1lBQ0EsSUFBSSxVQUFVLEtBQVYsQ0FBSixDQUhrQztBQUl0QyxZQUFJLElBQUksQ0FBSixJQUFTLEtBQUssUUFBTCxFQUNYLE1BQU0sV0FBVyx5QkFBWCxDQUFOLENBREY7QUFFQSxlQUFPLElBQUksQ0FBSixFQUFPLENBQUMsT0FBTyxDQUFQLENBQUQsS0FBZSxPQUFPLEdBQVAsQ0FBZjtBQUNaLGNBQUksSUFBSSxDQUFKLEVBQ0YsT0FBTyxHQUFQLENBREY7U0FERixPQUdPLEdBQVAsQ0FUc0M7T0FBdkIiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy8kLnN0cmluZy1yZXBlYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLyQudG8taW50ZWdlcicpLFxuICAgIGRlZmluZWQgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZXBlYXQoY291bnQpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyhkZWZpbmVkKHRoaXMpKSxcbiAgICAgIHJlcyA9ICcnLFxuICAgICAgbiA9IHRvSW50ZWdlcihjb3VudCk7XG4gIGlmIChuIDwgMCB8fCBuID09IEluZmluaXR5KVxuICAgIHRocm93IFJhbmdlRXJyb3IoXCJDb3VudCBjYW4ndCBiZSBuZWdhdGl2ZVwiKTtcbiAgZm9yICg7IG4gPiAwOyAobiA+Pj49IDEpICYmIChzdHIgKz0gc3RyKSlcbiAgICBpZiAobiAmIDEpXG4gICAgICByZXMgKz0gc3RyO1xuICByZXR1cm4gcmVzO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
