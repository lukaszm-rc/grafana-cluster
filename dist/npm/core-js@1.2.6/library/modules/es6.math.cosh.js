'use strict';

System.register([], function (_export, _context) {
    var $export, exp;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            exp = Math.exp;

            $export($export.S, 'Math', { cosh: function cosh(x) {
                    return (exp(x = +x) + exp(-x)) / 2;
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYubWF0aC5jb3NoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxzQkFBVSxRQUFRLFlBQVI7QUFDVixrQkFBTSxLQUFLLEdBQUw7O0FBQ1Ysb0JBQVEsUUFBUSxDQUFSLEVBQVcsTUFBbkIsRUFBMkIsRUFBQyxNQUFNLFNBQVMsSUFBVCxDQUFjLENBQWQsRUFBaUI7QUFDL0MsMkJBQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFELENBQVIsR0FBYyxJQUFJLENBQUMsQ0FBRCxDQUFsQixDQUFELEdBQTBCLENBQTFCLENBRHdDO2lCQUFqQixFQUFsQyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvZXM2Lm1hdGguY29zaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgZXhwID0gTWF0aC5leHA7XG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7Y29zaDogZnVuY3Rpb24gY29zaCh4KSB7XG4gICAgcmV0dXJuIChleHAoeCA9ICt4KSArIGV4cCgteCkpIC8gMjtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
