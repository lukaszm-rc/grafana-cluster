/* */
'use strict';

System.register([], function (_export, _context) {
  var hide, redefine, fails, defined, wks;
  return {
    setters: [],
    execute: function () {
      hide = require('./$.hide');
      redefine = require('./$.redefine');
      fails = require('./$.fails');
      defined = require('./$.defined');
      wks = require('./$.wks');

      module.exports = function (KEY, length, exec) {
        var SYMBOL = wks(KEY),
            original = ''[KEY];
        if (fails(function () {
          var O = {};
          O[SYMBOL] = function () {
            return 7;
          };
          return ''[KEY](O) != 7;
        })) {
          redefine(String.prototype, KEY, exec(defined, SYMBOL, original));
          hide(RegExp.prototype, SYMBOL, length == 2 ? function (string, arg) {
            return original.call(string, this, arg);
          } : function (string) {
            return original.call(string, this);
          });
        }
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5maXgtcmUtd2tzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQUNJLGFBQU8sUUFBUSxVQUFSO0FBQ1AsaUJBQVcsUUFBUSxjQUFSO0FBQ1gsY0FBUSxRQUFRLFdBQVI7QUFDUixnQkFBVSxRQUFRLGFBQVI7QUFDVixZQUFNLFFBQVEsU0FBUjs7QUFDVixhQUFPLE9BQVAsR0FBaUIsVUFBUyxHQUFULEVBQWMsTUFBZCxFQUFzQixJQUF0QixFQUE0QjtBQUMzQyxZQUFJLFNBQVMsSUFBSSxHQUFKLENBQVQ7WUFDQSxXQUFXLEdBQUcsR0FBSCxDQUFYLENBRnVDO0FBRzNDLFlBQUksTUFBTSxZQUFXO0FBQ25CLGNBQUksSUFBSSxFQUFKLENBRGU7QUFFbkIsWUFBRSxNQUFGLElBQVksWUFBVztBQUNyQixtQkFBTyxDQUFQLENBRHFCO1dBQVgsQ0FGTztBQUtuQixpQkFBTyxHQUFHLEdBQUgsRUFBUSxDQUFSLEtBQWMsQ0FBZCxDQUxZO1NBQVgsQ0FBVixFQU1JO0FBQ0YsbUJBQVMsT0FBTyxTQUFQLEVBQWtCLEdBQTNCLEVBQWdDLEtBQUssT0FBTCxFQUFjLE1BQWQsRUFBc0IsUUFBdEIsQ0FBaEMsRUFERTtBQUVGLGVBQUssT0FBTyxTQUFQLEVBQWtCLE1BQXZCLEVBQStCLFVBQVUsQ0FBVixHQUFjLFVBQVMsTUFBVCxFQUFpQixHQUFqQixFQUFzQjtBQUNqRSxtQkFBTyxTQUFTLElBQVQsQ0FBYyxNQUFkLEVBQXNCLElBQXRCLEVBQTRCLEdBQTVCLENBQVAsQ0FEaUU7V0FBdEIsR0FFekMsVUFBUyxNQUFULEVBQWlCO0FBQ25CLG1CQUFPLFNBQVMsSUFBVCxDQUFjLE1BQWQsRUFBc0IsSUFBdEIsQ0FBUCxDQURtQjtXQUFqQixDQUZKLENBRkU7U0FOSjtPQUhlIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5maXgtcmUtd2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vJC5oaWRlJyksXG4gICAgcmVkZWZpbmUgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUnKSxcbiAgICBmYWlscyA9IHJlcXVpcmUoJy4vJC5mYWlscycpLFxuICAgIGRlZmluZWQgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpLFxuICAgIHdrcyA9IHJlcXVpcmUoJy4vJC53a3MnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBsZW5ndGgsIGV4ZWMpIHtcbiAgdmFyIFNZTUJPTCA9IHdrcyhLRVkpLFxuICAgICAgb3JpZ2luYWwgPSAnJ1tLRVldO1xuICBpZiAoZmFpbHMoZnVuY3Rpb24oKSB7XG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiA3O1xuICAgIH07XG4gICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcbiAgfSkpIHtcbiAgICByZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIGV4ZWMoZGVmaW5lZCwgU1lNQk9MLCBvcmlnaW5hbCkpO1xuICAgIGhpZGUoUmVnRXhwLnByb3RvdHlwZSwgU1lNQk9MLCBsZW5ndGggPT0gMiA/IGZ1bmN0aW9uKHN0cmluZywgYXJnKSB7XG4gICAgICByZXR1cm4gb3JpZ2luYWwuY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7XG4gICAgfSA6IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgcmV0dXJuIG9yaWdpbmFsLmNhbGwoc3RyaW5nLCB0aGlzKTtcbiAgICB9KTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
