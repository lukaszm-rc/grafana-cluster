'use strict';

System.register([], function (_export, _context) {
    var $export, sign;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            sign = require('./$.math-sign');

            $export($export.S, 'Math', { cbrt: function cbrt(x) {
                    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYubWF0aC5jYnJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxzQkFBVSxRQUFRLFlBQVI7QUFDVixtQkFBTyxRQUFRLGVBQVI7O0FBQ1gsb0JBQVEsUUFBUSxDQUFSLEVBQVcsTUFBbkIsRUFBMkIsRUFBQyxNQUFNLFNBQVMsSUFBVCxDQUFjLENBQWQsRUFBaUI7QUFDL0MsMkJBQU8sS0FBSyxJQUFJLENBQUMsQ0FBRCxDQUFULEdBQWUsS0FBSyxHQUFMLENBQVMsS0FBSyxHQUFMLENBQVMsQ0FBVCxDQUFULEVBQXNCLElBQUksQ0FBSixDQUFyQyxDQUR3QztpQkFBakIsRUFBbEMiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzL2VzNi5tYXRoLmNicnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgIHNpZ24gPSByZXF1aXJlKCcuLyQubWF0aC1zaWduJyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7Y2JydDogZnVuY3Rpb24gY2JydCh4KSB7XG4gICAgcmV0dXJuIHNpZ24oeCA9ICt4KSAqIE1hdGgucG93KE1hdGguYWJzKHgpLCAxIC8gMyk7XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
