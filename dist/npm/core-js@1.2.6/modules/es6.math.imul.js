'use strict';

System.register([], function (_export, _context) {
    var $export, $imul;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            $imul = Math.imul;

            $export($export.S + $export.F * require('./$.fails')(function () {
                return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
            }), 'Math', { imul: function imul(x, y) {
                    var UINT16 = 0xffff,
                        xn = +x,
                        yn = +y,
                        xl = UINT16 & xn,
                        yl = UINT16 & yn;
                    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm1hdGguaW11bC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxZQUFSO0FBQ1Ysb0JBQVEsS0FBSyxJQUFMOztBQUNaLG9CQUFRLFFBQVEsQ0FBUixHQUFZLFFBQVEsQ0FBUixHQUFZLFFBQVEsV0FBUixFQUFxQixZQUFXO0FBQzlELHVCQUFPLE1BQU0sVUFBTixFQUFrQixDQUFsQixLQUF3QixDQUFDLENBQUQsSUFBTSxNQUFNLE1BQU4sSUFBZ0IsQ0FBaEIsQ0FEeUI7YUFBWCxDQUFqQyxFQUVoQixNQUZKLEVBRVksRUFBQyxNQUFNLFNBQVMsSUFBVCxDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0I7QUFDbkMsd0JBQUksU0FBUyxNQUFUO3dCQUNBLEtBQUssQ0FBQyxDQUFEO3dCQUNMLEtBQUssQ0FBQyxDQUFEO3dCQUNMLEtBQUssU0FBUyxFQUFUO3dCQUNMLEtBQUssU0FBUyxFQUFULENBTDBCO0FBTW5DLDJCQUFPLElBQUksS0FBSyxFQUFMLElBQVcsQ0FBQyxTQUFTLE9BQU8sRUFBUCxDQUFWLEdBQXVCLEVBQXZCLEdBQTRCLE1BQU0sU0FBUyxPQUFPLEVBQVAsQ0FBZixJQUE2QixFQUF6RCxLQUFnRSxDQUFoRSxDQUFYLENBTndCO2lCQUFwQixFQUZuQiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5tYXRoLmltdWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgICRpbXVsID0gTWF0aC5pbXVsO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpIHtcbiAgcmV0dXJuICRpbXVsKDB4ZmZmZmZmZmYsIDUpICE9IC01IHx8ICRpbXVsLmxlbmd0aCAhPSAyO1xufSksICdNYXRoJywge2ltdWw6IGZ1bmN0aW9uIGltdWwoeCwgeSkge1xuICAgIHZhciBVSU5UMTYgPSAweGZmZmYsXG4gICAgICAgIHhuID0gK3gsXG4gICAgICAgIHluID0gK3ksXG4gICAgICAgIHhsID0gVUlOVDE2ICYgeG4sXG4gICAgICAgIHlsID0gVUlOVDE2ICYgeW47XG4gICAgcmV0dXJuIDAgfCB4bCAqIHlsICsgKChVSU5UMTYgJiB4biA+Pj4gMTYpICogeWwgKyB4bCAqIChVSU5UMTYgJiB5biA+Pj4gMTYpIDw8IDE2ID4+PiAwKTtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
