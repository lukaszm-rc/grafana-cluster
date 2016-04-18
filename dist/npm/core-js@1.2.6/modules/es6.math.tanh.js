'use strict';

System.register([], function (_export, _context) {
    var $export, expm1, exp;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            expm1 = require('./$.math-expm1');
            exp = Math.exp;

            $export($export.S, 'Math', { tanh: function tanh(x) {
                    var a = expm1(x = +x),
                        b = expm1(-x);
                    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm1hdGgudGFuaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxZQUFSO0FBQ1Ysb0JBQVEsUUFBUSxnQkFBUjtBQUNSLGtCQUFNLEtBQUssR0FBTDs7QUFDVixvQkFBUSxRQUFRLENBQVIsRUFBVyxNQUFuQixFQUEyQixFQUFDLE1BQU0sU0FBUyxJQUFULENBQWMsQ0FBZCxFQUFpQjtBQUMvQyx3QkFBSSxJQUFJLE1BQU0sSUFBSSxDQUFDLENBQUQsQ0FBZDt3QkFDQSxJQUFJLE1BQU0sQ0FBQyxDQUFELENBQVYsQ0FGMkM7QUFHL0MsMkJBQU8sS0FBSyxRQUFMLEdBQWdCLENBQWhCLEdBQW9CLEtBQUssUUFBTCxHQUFnQixDQUFDLENBQUQsR0FBSyxDQUFDLElBQUksQ0FBSixDQUFELElBQVcsSUFBSSxDQUFKLElBQVMsSUFBSSxDQUFDLENBQUQsQ0FBYixDQUFYLENBSEQ7aUJBQWpCLEVBQWxDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm1hdGgudGFuaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgZXhwbTEgPSByZXF1aXJlKCcuLyQubWF0aC1leHBtMScpLFxuICAgIGV4cCA9IE1hdGguZXhwO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge3Rhbmg6IGZ1bmN0aW9uIHRhbmgoeCkge1xuICAgIHZhciBhID0gZXhwbTEoeCA9ICt4KSxcbiAgICAgICAgYiA9IGV4cG0xKC14KTtcbiAgICByZXR1cm4gYSA9PSBJbmZpbml0eSA/IDEgOiBiID09IEluZmluaXR5ID8gLTEgOiAoYSAtIGIpIC8gKGV4cCh4KSArIGV4cCgteCkpO1xuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
