'use strict';

System.register([], function (_export, _context) {
    var $export;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');

            $export($export.S, 'Math', { atanh: function atanh(x) {
                    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm1hdGguYXRhbmguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLHNCQUFVLFFBQVEsWUFBUjs7QUFDZCxvQkFBUSxRQUFRLENBQVIsRUFBVyxNQUFuQixFQUEyQixFQUFDLE9BQU8sU0FBUyxLQUFULENBQWUsQ0FBZixFQUFrQjtBQUNqRCwyQkFBTyxDQUFDLElBQUksQ0FBQyxDQUFELENBQUwsSUFBWSxDQUFaLEdBQWdCLENBQWhCLEdBQW9CLEtBQUssR0FBTCxDQUFTLENBQUMsSUFBSSxDQUFKLENBQUQsSUFBVyxJQUFJLENBQUosQ0FBWCxDQUFULEdBQThCLENBQTlCLENBRHNCO2lCQUFsQixFQUFuQyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5tYXRoLmF0YW5oLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHthdGFuaDogZnVuY3Rpb24gYXRhbmgoeCkge1xuICAgIHJldHVybiAoeCA9ICt4KSA9PSAwID8geCA6IE1hdGgubG9nKCgxICsgeCkgLyAoMSAtIHgpKSAvIDI7XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
