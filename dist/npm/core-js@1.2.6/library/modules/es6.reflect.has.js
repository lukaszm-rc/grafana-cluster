'use strict';

System.register([], function (_export, _context) {
    var $export;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');

            $export($export.S, 'Reflect', { has: function has(target, propertyKey) {
                    return propertyKey in target;
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYucmVmbGVjdC5oYXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLHNCQUFVLFFBQVEsWUFBUjs7QUFDZCxvQkFBUSxRQUFRLENBQVIsRUFBVyxTQUFuQixFQUE4QixFQUFDLEtBQUssU0FBUyxHQUFULENBQWEsTUFBYixFQUFxQixXQUFyQixFQUFrQztBQUNsRSwyQkFBTyxlQUFlLE1BQWYsQ0FEMkQ7aUJBQWxDLEVBQXBDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYucmVmbGVjdC5oYXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge2hhczogZnVuY3Rpb24gaGFzKHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICByZXR1cm4gcHJvcGVydHlLZXkgaW4gdGFyZ2V0O1xuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
