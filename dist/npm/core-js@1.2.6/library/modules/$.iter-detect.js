'use strict';

System.register([], function (_export, _context) {
  var ITERATOR, SAFE_CLOSING, riter;
  return {
    setters: [],
    execute: function () {
      ITERATOR = require('./$.wks')('iterator');
      SAFE_CLOSING = false;

      try {
        riter = [7][ITERATOR]();

        riter['return'] = function () {
          SAFE_CLOSING = true;
        };
        Array.from(riter, function () {
          throw 2;
        });
      } catch (e) {}
      module.exports = function (exec, skipClosing) {
        if (!skipClosing && !SAFE_CLOSING) return false;
        var safe = false;
        try {
          var arr = [7],
              iter = arr[ITERATOR]();
          iter.next = function () {
            safe = true;
          };
          arr[ITERATOR] = function () {
            return iter;
          };
          exec(arr);
        } catch (e) {}
        return safe;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItZGV0ZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxpQkFBVyxRQUFRLFNBQVIsRUFBbUIsVUFBbkI7QUFDWCxxQkFBZTs7QUFDbkIsVUFBSTtBQUNFLGdCQUFRLENBQUMsQ0FBRCxFQUFJLFFBQUosSUFEVjs7QUFFRixjQUFNLFFBQU4sSUFBa0IsWUFBVztBQUMzQix5QkFBZSxJQUFmLENBRDJCO1NBQVgsQ0FGaEI7QUFLRixjQUFNLElBQU4sQ0FBVyxLQUFYLEVBQWtCLFlBQVc7QUFDM0IsZ0JBQU0sQ0FBTixDQUQyQjtTQUFYLENBQWxCLENBTEU7T0FBSixDQVFFLE9BQU8sQ0FBUCxFQUFVLEVBQVY7QUFDRixhQUFPLE9BQVAsR0FBaUIsVUFBUyxJQUFULEVBQWUsV0FBZixFQUE0QjtBQUMzQyxZQUFJLENBQUMsV0FBRCxJQUFnQixDQUFDLFlBQUQsRUFDbEIsT0FBTyxLQUFQLENBREY7QUFFQSxZQUFJLE9BQU8sS0FBUCxDQUh1QztBQUkzQyxZQUFJO0FBQ0YsY0FBSSxNQUFNLENBQUMsQ0FBRCxDQUFOO2NBQ0EsT0FBTyxJQUFJLFFBQUosR0FBUCxDQUZGO0FBR0YsZUFBSyxJQUFMLEdBQVksWUFBVztBQUNyQixtQkFBTyxJQUFQLENBRHFCO1dBQVgsQ0FIVjtBQU1GLGNBQUksUUFBSixJQUFnQixZQUFXO0FBQ3pCLG1CQUFPLElBQVAsQ0FEeUI7V0FBWCxDQU5kO0FBU0YsZUFBSyxHQUFMLEVBVEU7U0FBSixDQVVFLE9BQU8sQ0FBUCxFQUFVLEVBQVY7QUFDRixlQUFPLElBQVAsQ0FmMkM7T0FBNUIiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1kZXRlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKSxcbiAgICBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKSB7XG4gICAgU0FGRV9DTE9TSU5HID0gdHJ1ZTtcbiAgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKSB7XG4gICAgdGhyb3cgMjtcbiAgfSk7XG59IGNhdGNoIChlKSB7fVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpXG4gICAgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN10sXG4gICAgICAgIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBzYWZlID0gdHJ1ZTtcbiAgICB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpdGVyO1xuICAgIH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7fVxuICByZXR1cm4gc2FmZTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
