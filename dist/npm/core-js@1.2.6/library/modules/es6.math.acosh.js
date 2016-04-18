'use strict';

System.register([], function (_export, _context) {
    var $export, log1p, sqrt, $acosh;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            log1p = require('./$.math-log1p');
            sqrt = Math.sqrt;
            $acosh = Math.acosh;

            $export($export.S + $export.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710), 'Math', { acosh: function acosh(x) {
                    return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYubWF0aC5hY29zaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxZQUFSO0FBQ1Ysb0JBQVEsUUFBUSxnQkFBUjtBQUNSLG1CQUFPLEtBQUssSUFBTDtBQUNQLHFCQUFTLEtBQUssS0FBTDs7QUFDYixvQkFBUSxRQUFRLENBQVIsR0FBWSxRQUFRLENBQVIsR0FBWSxFQUFFLFVBQVUsS0FBSyxLQUFMLENBQVcsT0FBTyxPQUFPLFNBQVAsQ0FBbEIsS0FBd0MsR0FBeEMsQ0FBWixFQUEwRCxNQUExRixFQUFrRyxFQUFDLE9BQU8sU0FBUyxLQUFULENBQWUsQ0FBZixFQUFrQjtBQUN4SCwyQkFBTyxDQUFDLElBQUksQ0FBQyxDQUFELENBQUwsR0FBVyxDQUFYLEdBQWUsR0FBZixHQUFxQixJQUFJLGlCQUFKLEdBQXdCLEtBQUssR0FBTCxDQUFTLENBQVQsSUFBYyxLQUFLLEdBQUwsR0FBVyxNQUFNLElBQUksQ0FBSixHQUFRLEtBQUssSUFBSSxDQUFKLENBQUwsR0FBYyxLQUFLLElBQUksQ0FBSixDQUFuQixDQUEvRCxDQUQ0RjtpQkFBbEIsRUFBMUciLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzL2VzNi5tYXRoLmFjb3NoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICBsb2cxcCA9IHJlcXVpcmUoJy4vJC5tYXRoLWxvZzFwJyksXG4gICAgc3FydCA9IE1hdGguc3FydCxcbiAgICAkYWNvc2ggPSBNYXRoLmFjb3NoO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKCRhY29zaCAmJiBNYXRoLmZsb29yKCRhY29zaChOdW1iZXIuTUFYX1ZBTFVFKSkgPT0gNzEwKSwgJ01hdGgnLCB7YWNvc2g6IGZ1bmN0aW9uIGFjb3NoKHgpIHtcbiAgICByZXR1cm4gKHggPSAreCkgPCAxID8gTmFOIDogeCA+IDk0OTA2MjY1LjYyNDI1MTU2ID8gTWF0aC5sb2coeCkgKyBNYXRoLkxOMiA6IGxvZzFwKHggLSAxICsgc3FydCh4IC0gMSkgKiBzcXJ0KHggKyAxKSk7XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
