'use strict';

System.register([], function (_export, _context) {
  var $export, abs;
  return {
    setters: [],
    execute: function () {
      $export = require('./$.export');
      abs = Math.abs;

      $export($export.S, 'Math', { hypot: function hypot(value1, value2) {
          var sum = 0,
              i = 0,
              $$ = arguments,
              $$len = $$.length,
              larg = 0,
              arg,
              div;
          while (i < $$len) {
            arg = abs($$[i++]);
            if (larg < arg) {
              div = larg / arg;
              sum = sum * div * div + 1;
              larg = arg;
            } else if (arg > 0) {
              div = arg / larg;
              sum += div * div;
            } else sum += arg;
          }
          return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
        } });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYubWF0aC5oeXBvdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksZ0JBQVUsUUFBUSxZQUFSO0FBQ1YsWUFBTSxLQUFLLEdBQUw7O0FBQ1YsY0FBUSxRQUFRLENBQVIsRUFBVyxNQUFuQixFQUEyQixFQUFDLE9BQU8sU0FBUyxLQUFULENBQWUsTUFBZixFQUF1QixNQUF2QixFQUErQjtBQUM5RCxjQUFJLE1BQU0sQ0FBTjtjQUNBLElBQUksQ0FBSjtjQUNBLEtBQUssU0FBTDtjQUNBLFFBQVEsR0FBRyxNQUFIO2NBQ1IsT0FBTyxDQUFQO2NBQ0EsR0FMSjtjQU1JLEdBTkosQ0FEOEQ7QUFROUQsaUJBQU8sSUFBSSxLQUFKLEVBQVc7QUFDaEIsa0JBQU0sSUFBSSxHQUFHLEdBQUgsQ0FBSixDQUFOLENBRGdCO0FBRWhCLGdCQUFJLE9BQU8sR0FBUCxFQUFZO0FBQ2Qsb0JBQU0sT0FBTyxHQUFQLENBRFE7QUFFZCxvQkFBTSxNQUFNLEdBQU4sR0FBWSxHQUFaLEdBQWtCLENBQWxCLENBRlE7QUFHZCxxQkFBTyxHQUFQLENBSGM7YUFBaEIsTUFJTyxJQUFJLE1BQU0sQ0FBTixFQUFTO0FBQ2xCLG9CQUFNLE1BQU0sSUFBTixDQURZO0FBRWxCLHFCQUFPLE1BQU0sR0FBTixDQUZXO2FBQWIsTUFJTCxPQUFPLEdBQVAsQ0FKSztXQU5UO0FBWUEsaUJBQU8sU0FBUyxRQUFULEdBQW9CLFFBQXBCLEdBQStCLE9BQU8sS0FBSyxJQUFMLENBQVUsR0FBVixDQUFQLENBcEJ3QjtTQUEvQixFQUFuQyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvZXM2Lm1hdGguaHlwb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgIGFicyA9IE1hdGguYWJzO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge2h5cG90OiBmdW5jdGlvbiBoeXBvdCh2YWx1ZTEsIHZhbHVlMikge1xuICAgIHZhciBzdW0gPSAwLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgJCQgPSBhcmd1bWVudHMsXG4gICAgICAgICQkbGVuID0gJCQubGVuZ3RoLFxuICAgICAgICBsYXJnID0gMCxcbiAgICAgICAgYXJnLFxuICAgICAgICBkaXY7XG4gICAgd2hpbGUgKGkgPCAkJGxlbikge1xuICAgICAgYXJnID0gYWJzKCQkW2krK10pO1xuICAgICAgaWYgKGxhcmcgPCBhcmcpIHtcbiAgICAgICAgZGl2ID0gbGFyZyAvIGFyZztcbiAgICAgICAgc3VtID0gc3VtICogZGl2ICogZGl2ICsgMTtcbiAgICAgICAgbGFyZyA9IGFyZztcbiAgICAgIH0gZWxzZSBpZiAoYXJnID4gMCkge1xuICAgICAgICBkaXYgPSBhcmcgLyBsYXJnO1xuICAgICAgICBzdW0gKz0gZGl2ICogZGl2O1xuICAgICAgfSBlbHNlXG4gICAgICAgIHN1bSArPSBhcmc7XG4gICAgfVxuICAgIHJldHVybiBsYXJnID09PSBJbmZpbml0eSA/IEluZmluaXR5IDogbGFyZyAqIE1hdGguc3FydChzdW0pO1xuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
