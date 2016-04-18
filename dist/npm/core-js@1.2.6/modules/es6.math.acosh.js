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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm1hdGguYWNvc2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLHNCQUFVLFFBQVEsWUFBUjtBQUNWLG9CQUFRLFFBQVEsZ0JBQVI7QUFDUixtQkFBTyxLQUFLLElBQUw7QUFDUCxxQkFBUyxLQUFLLEtBQUw7O0FBQ2Isb0JBQVEsUUFBUSxDQUFSLEdBQVksUUFBUSxDQUFSLEdBQVksRUFBRSxVQUFVLEtBQUssS0FBTCxDQUFXLE9BQU8sT0FBTyxTQUFQLENBQWxCLEtBQXdDLEdBQXhDLENBQVosRUFBMEQsTUFBMUYsRUFBa0csRUFBQyxPQUFPLFNBQVMsS0FBVCxDQUFlLENBQWYsRUFBa0I7QUFDeEgsMkJBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBRCxDQUFMLEdBQVcsQ0FBWCxHQUFlLEdBQWYsR0FBcUIsSUFBSSxpQkFBSixHQUF3QixLQUFLLEdBQUwsQ0FBUyxDQUFULElBQWMsS0FBSyxHQUFMLEdBQVcsTUFBTSxJQUFJLENBQUosR0FBUSxLQUFLLElBQUksQ0FBSixDQUFMLEdBQWMsS0FBSyxJQUFJLENBQUosQ0FBbkIsQ0FBL0QsQ0FENEY7aUJBQWxCLEVBQTFHIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm1hdGguYWNvc2guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgIGxvZzFwID0gcmVxdWlyZSgnLi8kLm1hdGgtbG9nMXAnKSxcbiAgICBzcXJ0ID0gTWF0aC5zcXJ0LFxuICAgICRhY29zaCA9IE1hdGguYWNvc2g7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoJGFjb3NoICYmIE1hdGguZmxvb3IoJGFjb3NoKE51bWJlci5NQVhfVkFMVUUpKSA9PSA3MTApLCAnTWF0aCcsIHthY29zaDogZnVuY3Rpb24gYWNvc2goeCkge1xuICAgIHJldHVybiAoeCA9ICt4KSA8IDEgPyBOYU4gOiB4ID4gOTQ5MDYyNjUuNjI0MjUxNTYgPyBNYXRoLmxvZyh4KSArIE1hdGguTE4yIDogbG9nMXAoeCAtIDEgKyBzcXJ0KHggLSAxKSAqIHNxcnQoeCArIDEpKTtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
