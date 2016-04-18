'use strict';

System.register([], function (_export, _context) {
    var $export;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');

            $export($export.S, 'Math', { clz32: function clz32(x) {
                    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm1hdGguY2x6MzIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLHNCQUFVLFFBQVEsWUFBUjs7QUFDZCxvQkFBUSxRQUFRLENBQVIsRUFBVyxNQUFuQixFQUEyQixFQUFDLE9BQU8sU0FBUyxLQUFULENBQWUsQ0FBZixFQUFrQjtBQUNqRCwyQkFBTyxDQUFDLE9BQU8sQ0FBUCxDQUFELEdBQWEsS0FBSyxLQUFLLEtBQUwsQ0FBVyxLQUFLLEdBQUwsQ0FBUyxJQUFJLEdBQUosQ0FBVCxHQUFvQixLQUFLLEtBQUwsQ0FBcEMsR0FBa0QsRUFBL0QsQ0FEMEM7aUJBQWxCLEVBQW5DIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm1hdGguY2x6MzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge2NsejMyOiBmdW5jdGlvbiBjbHozMih4KSB7XG4gICAgcmV0dXJuICh4ID4+Pj0gMCkgPyAzMSAtIE1hdGguZmxvb3IoTWF0aC5sb2coeCArIDAuNSkgKiBNYXRoLkxPRzJFKSA6IDMyO1xuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
