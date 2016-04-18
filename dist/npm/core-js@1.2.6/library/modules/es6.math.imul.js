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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYubWF0aC5pbXVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxzQkFBVSxRQUFRLFlBQVI7QUFDVixvQkFBUSxLQUFLLElBQUw7O0FBQ1osb0JBQVEsUUFBUSxDQUFSLEdBQVksUUFBUSxDQUFSLEdBQVksUUFBUSxXQUFSLEVBQXFCLFlBQVc7QUFDOUQsdUJBQU8sTUFBTSxVQUFOLEVBQWtCLENBQWxCLEtBQXdCLENBQUMsQ0FBRCxJQUFNLE1BQU0sTUFBTixJQUFnQixDQUFoQixDQUR5QjthQUFYLENBQWpDLEVBRWhCLE1BRkosRUFFWSxFQUFDLE1BQU0sU0FBUyxJQUFULENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQjtBQUNuQyx3QkFBSSxTQUFTLE1BQVQ7d0JBQ0EsS0FBSyxDQUFDLENBQUQ7d0JBQ0wsS0FBSyxDQUFDLENBQUQ7d0JBQ0wsS0FBSyxTQUFTLEVBQVQ7d0JBQ0wsS0FBSyxTQUFTLEVBQVQsQ0FMMEI7QUFNbkMsMkJBQU8sSUFBSSxLQUFLLEVBQUwsSUFBVyxDQUFDLFNBQVMsT0FBTyxFQUFQLENBQVYsR0FBdUIsRUFBdkIsR0FBNEIsTUFBTSxTQUFTLE9BQU8sRUFBUCxDQUFmLElBQTZCLEVBQXpELEtBQWdFLENBQWhFLENBQVgsQ0FOd0I7aUJBQXBCLEVBRm5CIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYubWF0aC5pbXVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICAkaW11bCA9IE1hdGguaW11bDtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKSB7XG4gIHJldHVybiAkaW11bCgweGZmZmZmZmZmLCA1KSAhPSAtNSB8fCAkaW11bC5sZW5ndGggIT0gMjtcbn0pLCAnTWF0aCcsIHtpbXVsOiBmdW5jdGlvbiBpbXVsKHgsIHkpIHtcbiAgICB2YXIgVUlOVDE2ID0gMHhmZmZmLFxuICAgICAgICB4biA9ICt4LFxuICAgICAgICB5biA9ICt5LFxuICAgICAgICB4bCA9IFVJTlQxNiAmIHhuLFxuICAgICAgICB5bCA9IFVJTlQxNiAmIHluO1xuICAgIHJldHVybiAwIHwgeGwgKiB5bCArICgoVUlOVDE2ICYgeG4gPj4+IDE2KSAqIHlsICsgeGwgKiAoVUlOVDE2ICYgeW4gPj4+IDE2KSA8PCAxNiA+Pj4gMCk7XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
