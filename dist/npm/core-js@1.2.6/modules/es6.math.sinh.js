'use strict';

System.register([], function (_export, _context) {
    var $export, expm1, exp;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            expm1 = require('./$.math-expm1');
            exp = Math.exp;

            $export($export.S + $export.F * require('./$.fails')(function () {
                return !Math.sinh(-2e-17) != -2e-17;
            }), 'Math', { sinh: function sinh(x) {
                    return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm1hdGguc2luaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxZQUFSO0FBQ1Ysb0JBQVEsUUFBUSxnQkFBUjtBQUNSLGtCQUFNLEtBQUssR0FBTDs7QUFDVixvQkFBUSxRQUFRLENBQVIsR0FBWSxRQUFRLENBQVIsR0FBWSxRQUFRLFdBQVIsRUFBcUIsWUFBVztBQUM5RCx1QkFBTyxDQUFDLEtBQUssSUFBTCxDQUFVLENBQUMsS0FBRCxDQUFYLElBQXNCLENBQUMsS0FBRCxDQURpQzthQUFYLENBQWpDLEVBRWhCLE1BRkosRUFFWSxFQUFDLE1BQU0sU0FBUyxJQUFULENBQWMsQ0FBZCxFQUFpQjtBQUNoQywyQkFBTyxLQUFLLEdBQUwsQ0FBUyxJQUFJLENBQUMsQ0FBRCxDQUFiLEdBQW1CLENBQW5CLEdBQXVCLENBQUMsTUFBTSxDQUFOLElBQVcsTUFBTSxDQUFDLENBQUQsQ0FBakIsQ0FBRCxHQUF5QixDQUF6QixHQUE2QixDQUFDLElBQUksSUFBSSxDQUFKLENBQUosR0FBYSxJQUFJLENBQUMsQ0FBRCxHQUFLLENBQUwsQ0FBakIsQ0FBRCxJQUE4QixLQUFLLENBQUwsR0FBUyxDQUFULENBQTlCLENBRDNCO2lCQUFqQixFQUZuQiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5tYXRoLnNpbmguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgIGV4cG0xID0gcmVxdWlyZSgnLi8kLm1hdGgtZXhwbTEnKSxcbiAgICBleHAgPSBNYXRoLmV4cDtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKSB7XG4gIHJldHVybiAhTWF0aC5zaW5oKC0yZS0xNykgIT0gLTJlLTE3O1xufSksICdNYXRoJywge3Npbmg6IGZ1bmN0aW9uIHNpbmgoeCkge1xuICAgIHJldHVybiBNYXRoLmFicyh4ID0gK3gpIDwgMSA/IChleHBtMSh4KSAtIGV4cG0xKC14KSkgLyAyIDogKGV4cCh4IC0gMSkgLSBleHAoLXggLSAxKSkgKiAoTWF0aC5FIC8gMik7XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
