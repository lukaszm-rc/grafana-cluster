'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      (function (process) {
        var _Symbol = require('./_Symbol'),
            isSymbol = require('./isSymbol');
        var INFINITY = 1 / 0;
        var symbolProto = _Symbol ? _Symbol.prototype : undefined,
            symbolToString = symbolProto ? symbolProto.toString : undefined;
        function toString(value) {
          if (typeof value == 'string') {
            return value;
          }
          if (value == null) {
            return '';
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : '';
          }
          var result = value + '';
          return result == '0' && 1 / value == -INFINITY ? '-0' : result;
        }
        module.exports = toString;
      })(require('process'));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3RvU3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFDLFVBQVMsT0FBVCxFQUFrQjtBQUNqQixZQUFJLFVBQVMsUUFBUSxXQUFSLENBQVQ7WUFDQSxXQUFXLFFBQVEsWUFBUixDQUFYLENBRmE7QUFHakIsWUFBSSxXQUFXLElBQUksQ0FBSixDQUhFO0FBSWpCLFlBQUksY0FBYyxVQUFTLFFBQU8sU0FBUCxHQUFtQixTQUE1QjtZQUNkLGlCQUFpQixjQUFjLFlBQVksUUFBWixHQUF1QixTQUFyQyxDQUxKO0FBTWpCLGlCQUFTLFFBQVQsQ0FBa0IsS0FBbEIsRUFBeUI7QUFDdkIsY0FBSSxPQUFPLEtBQVAsSUFBZ0IsUUFBaEIsRUFBMEI7QUFDNUIsbUJBQU8sS0FBUCxDQUQ0QjtXQUE5QjtBQUdBLGNBQUksU0FBUyxJQUFULEVBQWU7QUFDakIsbUJBQU8sRUFBUCxDQURpQjtXQUFuQjtBQUdBLGNBQUksU0FBUyxLQUFULENBQUosRUFBcUI7QUFDbkIsbUJBQU8saUJBQWlCLGVBQWUsSUFBZixDQUFvQixLQUFwQixDQUFqQixHQUE4QyxFQUE5QyxDQURZO1dBQXJCO0FBR0EsY0FBSSxTQUFVLFFBQVEsRUFBUixDQVZTO0FBV3ZCLGlCQUFPLE1BQUMsSUFBVSxHQUFWLElBQWlCLENBQUMsR0FBSSxLQUFKLElBQWMsQ0FBQyxRQUFELEdBQWEsSUFBOUMsR0FBcUQsTUFBckQsQ0FYZ0I7U0FBekI7QUFhQSxlQUFPLE9BQVAsR0FBaUIsUUFBakIsQ0FuQmlCO09BQWxCLENBQUQsQ0FvQkcsUUFBUSxTQUFSLENBcEJIIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3RvU3RyaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4oZnVuY3Rpb24ocHJvY2Vzcykge1xuICB2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcbiAgdmFyIElORklOSVRZID0gMSAvIDA7XG4gIHZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG4gIGZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICAgIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbiAgfVxuICBtb2R1bGUuZXhwb3J0cyA9IHRvU3RyaW5nO1xufSkocmVxdWlyZSgncHJvY2VzcycpKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
