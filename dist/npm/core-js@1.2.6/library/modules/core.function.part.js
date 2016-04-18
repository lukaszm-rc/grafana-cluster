'use strict';

System.register([], function (_export, _context) {
    var path, $export;
    return {
        setters: [],
        execute: function () {
            path = require('./$.path');
            $export = require('./$.export');

            require('./$.core')._ = path._ = path._ || {};
            $export($export.P + $export.F, 'Function', { part: require('./$.partial') });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9jb3JlLmZ1bmN0aW9uLnBhcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLG1CQUFPLFFBQVEsVUFBUjtBQUNQLHNCQUFVLFFBQVEsWUFBUjs7QUFDZCxvQkFBUSxVQUFSLEVBQW9CLENBQXBCLEdBQXdCLEtBQUssQ0FBTCxHQUFTLEtBQUssQ0FBTCxJQUFVLEVBQVY7QUFDakMsb0JBQVEsUUFBUSxDQUFSLEdBQVksUUFBUSxDQUFSLEVBQVcsVUFBL0IsRUFBMkMsRUFBQyxNQUFNLFFBQVEsYUFBUixDQUFOLEVBQTVDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9jb3JlLmZ1bmN0aW9uLnBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBwYXRoID0gcmVxdWlyZSgnLi8kLnBhdGgnKSxcbiAgICAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xucmVxdWlyZSgnLi8kLmNvcmUnKS5fID0gcGF0aC5fID0gcGF0aC5fIHx8IHt9O1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYsICdGdW5jdGlvbicsIHtwYXJ0OiByZXF1aXJlKCcuLyQucGFydGlhbCcpfSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
