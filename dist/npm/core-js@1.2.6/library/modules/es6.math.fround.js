'use strict';

System.register([], function (_export, _context) {
  var $export, sign, pow, EPSILON, EPSILON32, MAX32, MIN32, roundTiesToEven;
  return {
    setters: [],
    execute: function () {
      $export = require('./$.export');
      sign = require('./$.math-sign');
      pow = Math.pow;
      EPSILON = pow(2, -52);
      EPSILON32 = pow(2, -23);
      MAX32 = pow(2, 127) * (2 - EPSILON32);
      MIN32 = pow(2, -126);

      roundTiesToEven = function roundTiesToEven(n) {
        return n + 1 / EPSILON - 1 / EPSILON;
      };

      $export($export.S, 'Math', { fround: function fround(x) {
          var $abs = Math.abs(x),
              $sign = sign(x),
              a,
              result;
          if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
          a = (1 + EPSILON32 / EPSILON) * $abs;
          result = a - (a - $abs);
          if (result > MAX32 || result != result) return $sign * Infinity;
          return $sign * result;
        } });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYubWF0aC5mcm91bmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGdCQUFVLFFBQVEsWUFBUjtBQUNWLGFBQU8sUUFBUSxlQUFSO0FBQ1AsWUFBTSxLQUFLLEdBQUw7QUFDTixnQkFBVSxJQUFJLENBQUosRUFBTyxDQUFDLEVBQUQ7QUFDakIsa0JBQVksSUFBSSxDQUFKLEVBQU8sQ0FBQyxFQUFEO0FBQ25CLGNBQVEsSUFBSSxDQUFKLEVBQU8sR0FBUCxLQUFlLElBQUksU0FBSixDQUFmO0FBQ1IsY0FBUSxJQUFJLENBQUosRUFBTyxDQUFDLEdBQUQ7O0FBQ2Ysd0JBQWtCLFNBQWxCLGVBQWtCLENBQVMsQ0FBVCxFQUFZO0FBQ2hDLGVBQU8sSUFBSSxJQUFJLE9BQUosR0FBYyxJQUFJLE9BQUosQ0FETztPQUFaOztBQUd0QixjQUFRLFFBQVEsQ0FBUixFQUFXLE1BQW5CLEVBQTJCLEVBQUMsUUFBUSxTQUFTLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUI7QUFDbkQsY0FBSSxPQUFPLEtBQUssR0FBTCxDQUFTLENBQVQsQ0FBUDtjQUNBLFFBQVEsS0FBSyxDQUFMLENBQVI7Y0FDQSxDQUZKO2NBR0ksTUFISixDQURtRDtBQUtuRCxjQUFJLE9BQU8sS0FBUCxFQUNGLE9BQU8sUUFBUSxnQkFBZ0IsT0FBTyxLQUFQLEdBQWUsU0FBZixDQUF4QixHQUFvRCxLQUFwRCxHQUE0RCxTQUE1RCxDQURUO0FBRUEsY0FBSSxDQUFDLElBQUksWUFBWSxPQUFaLENBQUwsR0FBNEIsSUFBNUIsQ0FQK0M7QUFRbkQsbUJBQVMsS0FBSyxJQUFJLElBQUosQ0FBTCxDQVIwQztBQVNuRCxjQUFJLFNBQVMsS0FBVCxJQUFrQixVQUFVLE1BQVYsRUFDcEIsT0FBTyxRQUFRLFFBQVIsQ0FEVDtBQUVBLGlCQUFPLFFBQVEsTUFBUixDQVg0QztTQUFuQixFQUFwQyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvZXM2Lm1hdGguZnJvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICBzaWduID0gcmVxdWlyZSgnLi8kLm1hdGgtc2lnbicpLFxuICAgIHBvdyA9IE1hdGgucG93LFxuICAgIEVQU0lMT04gPSBwb3coMiwgLTUyKSxcbiAgICBFUFNJTE9OMzIgPSBwb3coMiwgLTIzKSxcbiAgICBNQVgzMiA9IHBvdygyLCAxMjcpICogKDIgLSBFUFNJTE9OMzIpLFxuICAgIE1JTjMyID0gcG93KDIsIC0xMjYpO1xudmFyIHJvdW5kVGllc1RvRXZlbiA9IGZ1bmN0aW9uKG4pIHtcbiAgcmV0dXJuIG4gKyAxIC8gRVBTSUxPTiAtIDEgLyBFUFNJTE9OO1xufTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtmcm91bmQ6IGZ1bmN0aW9uIGZyb3VuZCh4KSB7XG4gICAgdmFyICRhYnMgPSBNYXRoLmFicyh4KSxcbiAgICAgICAgJHNpZ24gPSBzaWduKHgpLFxuICAgICAgICBhLFxuICAgICAgICByZXN1bHQ7XG4gICAgaWYgKCRhYnMgPCBNSU4zMilcbiAgICAgIHJldHVybiAkc2lnbiAqIHJvdW5kVGllc1RvRXZlbigkYWJzIC8gTUlOMzIgLyBFUFNJTE9OMzIpICogTUlOMzIgKiBFUFNJTE9OMzI7XG4gICAgYSA9ICgxICsgRVBTSUxPTjMyIC8gRVBTSUxPTikgKiAkYWJzO1xuICAgIHJlc3VsdCA9IGEgLSAoYSAtICRhYnMpO1xuICAgIGlmIChyZXN1bHQgPiBNQVgzMiB8fCByZXN1bHQgIT0gcmVzdWx0KVxuICAgICAgcmV0dXJuICRzaWduICogSW5maW5pdHk7XG4gICAgcmV0dXJuICRzaWduICogcmVzdWx0O1xuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=