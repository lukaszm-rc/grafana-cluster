'use strict';

System.register([], function (_export, _context) {
    var global, core, $export, partial;
    return {
        setters: [],
        execute: function () {
            global = require('./$.global');
            core = require('./$.core');
            $export = require('./$.export');
            partial = require('./$.partial');

            $export($export.G + $export.F, { delay: function delay(time) {
                    return new (core.Promise || global.Promise)(function (resolve) {
                        setTimeout(partial.call(resolve, true), time);
                    });
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9jb3JlLmRlbGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxxQkFBUyxRQUFRLFlBQVI7QUFDVCxtQkFBTyxRQUFRLFVBQVI7QUFDUCxzQkFBVSxRQUFRLFlBQVI7QUFDVixzQkFBVSxRQUFRLGFBQVI7O0FBQ2Qsb0JBQVEsUUFBUSxDQUFSLEdBQVksUUFBUSxDQUFSLEVBQVcsRUFBQyxPQUFPLFNBQVMsS0FBVCxDQUFlLElBQWYsRUFBcUI7QUFDeEQsMkJBQU8sS0FBSyxLQUFLLE9BQUwsSUFBZ0IsT0FBTyxPQUFQLENBQXJCLENBQXFDLFVBQVMsT0FBVCxFQUFrQjtBQUM1RCxtQ0FBVyxRQUFRLElBQVIsQ0FBYSxPQUFiLEVBQXNCLElBQXRCLENBQVgsRUFBd0MsSUFBeEMsRUFENEQ7cUJBQWxCLENBQTVDLENBRHdEO2lCQUFyQixFQUF2QyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvY29yZS5kZWxheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKSxcbiAgICBjb3JlID0gcmVxdWlyZSgnLi8kLmNvcmUnKSxcbiAgICAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgIHBhcnRpYWwgPSByZXF1aXJlKCcuLyQucGFydGlhbCcpO1xuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LkYsIHtkZWxheTogZnVuY3Rpb24gZGVsYXkodGltZSkge1xuICAgIHJldHVybiBuZXcgKGNvcmUuUHJvbWlzZSB8fCBnbG9iYWwuUHJvbWlzZSkoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgc2V0VGltZW91dChwYXJ0aWFsLmNhbGwocmVzb2x2ZSwgdHJ1ZSksIHRpbWUpO1xuICAgIH0pO1xuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
