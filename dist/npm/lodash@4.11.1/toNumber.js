'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      (function (process) {
        var isFunction = require('./isFunction'),
            isObject = require('./isObject'),
            isSymbol = require('./isSymbol');
        var NAN = 0 / 0;
        var reTrim = /^\s+|\s+$/g;
        var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
        var reIsBinary = /^0b[01]+$/i;
        var reIsOctal = /^0o[0-7]+$/i;
        var freeParseInt = parseInt;
        function toNumber(value) {
          if (typeof value == 'number') {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = isFunction(value.valueOf) ? value.valueOf() : value;
            value = isObject(other) ? other + '' : other;
          }
          if (typeof value != 'string') {
            return value === 0 ? value : +value;
          }
          value = value.replace(reTrim, '');
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        module.exports = toNumber;
      })(require('process'));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3RvTnVtYmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFDLFVBQVMsT0FBVCxFQUFrQjtBQUNqQixZQUFJLGFBQWEsUUFBUSxjQUFSLENBQWI7WUFDQSxXQUFXLFFBQVEsWUFBUixDQUFYO1lBQ0EsV0FBVyxRQUFRLFlBQVIsQ0FBWCxDQUhhO0FBSWpCLFlBQUksTUFBTSxJQUFJLENBQUosQ0FKTztBQUtqQixZQUFJLFNBQVMsWUFBVCxDQUxhO0FBTWpCLFlBQUksYUFBYSxvQkFBYixDQU5hO0FBT2pCLFlBQUksYUFBYSxZQUFiLENBUGE7QUFRakIsWUFBSSxZQUFZLGFBQVosQ0FSYTtBQVNqQixZQUFJLGVBQWUsUUFBZixDQVRhO0FBVWpCLGlCQUFTLFFBQVQsQ0FBa0IsS0FBbEIsRUFBeUI7QUFDdkIsY0FBSSxPQUFPLEtBQVAsSUFBZ0IsUUFBaEIsRUFBMEI7QUFDNUIsbUJBQU8sS0FBUCxDQUQ0QjtXQUE5QjtBQUdBLGNBQUksU0FBUyxLQUFULENBQUosRUFBcUI7QUFDbkIsbUJBQU8sR0FBUCxDQURtQjtXQUFyQjtBQUdBLGNBQUksU0FBUyxLQUFULENBQUosRUFBcUI7QUFDbkIsZ0JBQUksUUFBUSxXQUFXLE1BQU0sT0FBTixDQUFYLEdBQTRCLE1BQU0sT0FBTixFQUE1QixHQUE4QyxLQUE5QyxDQURPO0FBRW5CLG9CQUFRLFNBQVMsS0FBVCxJQUFtQixRQUFRLEVBQVIsR0FBYyxLQUFqQyxDQUZXO1dBQXJCO0FBSUEsY0FBSSxPQUFPLEtBQVAsSUFBZ0IsUUFBaEIsRUFBMEI7QUFDNUIsbUJBQU8sVUFBVSxDQUFWLEdBQWMsS0FBZCxHQUFzQixDQUFDLEtBQUQsQ0FERDtXQUE5QjtBQUdBLGtCQUFRLE1BQU0sT0FBTixDQUFjLE1BQWQsRUFBc0IsRUFBdEIsQ0FBUixDQWR1QjtBQWV2QixjQUFJLFdBQVcsV0FBVyxJQUFYLENBQWdCLEtBQWhCLENBQVgsQ0FmbUI7QUFnQnZCLGlCQUFPLFFBQUMsSUFBWSxVQUFVLElBQVYsQ0FBZSxLQUFmLENBQVosR0FBcUMsYUFBYSxNQUFNLEtBQU4sQ0FBWSxDQUFaLENBQWIsRUFBNkIsV0FBVyxDQUFYLEdBQWUsQ0FBZixDQUFuRSxHQUF3RixXQUFXLElBQVgsQ0FBZ0IsS0FBaEIsSUFBeUIsR0FBekIsR0FBK0IsQ0FBQyxLQUFELENBaEJ2RztTQUF6QjtBQWtCQSxlQUFPLE9BQVAsR0FBaUIsUUFBakIsQ0E1QmlCO09BQWxCLENBQUQsQ0E2QkcsUUFBUSxTQUFSLENBN0JIIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3RvTnVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4oZnVuY3Rpb24ocHJvY2Vzcykge1xuICB2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcbiAgdmFyIE5BTiA9IDAgLyAwO1xuICB2YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG4gIHZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG4gIHZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuICB2YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcbiAgdmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuICBmdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIE5BTjtcbiAgICB9XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgdmFyIG90aGVyID0gaXNGdW5jdGlvbih2YWx1ZS52YWx1ZU9mKSA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gICAgfVxuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICAgIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKSA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOCkgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG4gIH1cbiAgbW9kdWxlLmV4cG9ydHMgPSB0b051bWJlcjtcbn0pKHJlcXVpcmUoJ3Byb2Nlc3MnKSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
