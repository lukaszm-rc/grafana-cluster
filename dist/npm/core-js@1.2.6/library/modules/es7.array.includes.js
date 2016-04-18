/* */
'use strict';

System.register([], function (_export, _context) {
    var $export, $includes;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            $includes = require('./$.array-includes')(true);

            $export($export.P, 'Array', { includes: function includes(el) {
                    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
                } });
            require('./$.add-to-unscopables')('includes');
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczcuYXJyYXkuaW5jbHVkZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxZQUFSO0FBQ1Ysd0JBQVksUUFBUSxvQkFBUixFQUE4QixJQUE5Qjs7QUFDaEIsb0JBQVEsUUFBUSxDQUFSLEVBQVcsT0FBbkIsRUFBNEIsRUFBQyxVQUFVLFNBQVMsUUFBVCxDQUFrQixFQUFsQixFQUFzQjtBQUN6RCwyQkFBTyxVQUFVLElBQVYsRUFBZ0IsRUFBaEIsRUFBb0IsVUFBVSxNQUFWLEdBQW1CLENBQW5CLEdBQXVCLFVBQVUsQ0FBVixDQUF2QixHQUFzQyxTQUF0QyxDQUEzQixDQUR5RDtpQkFBdEIsRUFBdkM7QUFHQSxvQkFBUSx3QkFBUixFQUFrQyxVQUFsQyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvZXM3LmFycmF5LmluY2x1ZGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICAkaW5jbHVkZXMgPSByZXF1aXJlKCcuLyQuYXJyYXktaW5jbHVkZXMnKSh0cnVlKTtcbiRleHBvcnQoJGV4cG9ydC5QLCAnQXJyYXknLCB7aW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKGVsKSB7XG4gICAgcmV0dXJuICRpbmNsdWRlcyh0aGlzLCBlbCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9fSk7XG5yZXF1aXJlKCcuLyQuYWRkLXRvLXVuc2NvcGFibGVzJykoJ2luY2x1ZGVzJyk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
