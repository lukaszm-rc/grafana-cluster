/* */
'use strict';

System.register([], function (_export, _context) {
    var $export, context, INCLUDES;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            context = require('./$.string-context');
            INCLUDES = 'includes';

            $export($export.P + $export.F * require('./$.fails-is-regexp')(INCLUDES), 'String', { includes: function includes(searchString) {
                    return !! ~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLmluY2x1ZGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQUNJLHNCQUFVLFFBQVEsWUFBUjtBQUNWLHNCQUFVLFFBQVEsb0JBQVI7QUFDVix1QkFBVzs7QUFDZixvQkFBUSxRQUFRLENBQVIsR0FBWSxRQUFRLENBQVIsR0FBWSxRQUFRLHFCQUFSLEVBQStCLFFBQS9CLENBQVosRUFBc0QsUUFBMUUsRUFBb0YsRUFBQyxVQUFVLFNBQVMsUUFBVCxDQUFrQixZQUFsQixFQUFnQztBQUMzSCwyQkFBTyxDQUFDLEVBQUMsQ0FBQyxRQUFRLElBQVIsRUFBYyxZQUFkLEVBQTRCLFFBQTVCLEVBQXNDLE9BQXRDLENBQThDLFlBQTlDLEVBQTRELFVBQVUsTUFBVixHQUFtQixDQUFuQixHQUF1QixVQUFVLENBQVYsQ0FBdkIsR0FBc0MsU0FBdEMsQ0FBN0QsQ0FEa0g7aUJBQWhDLEVBQS9GIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLmluY2x1ZGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICBjb250ZXh0ID0gcmVxdWlyZSgnLi8kLnN0cmluZy1jb250ZXh0JyksXG4gICAgSU5DTFVERVMgPSAnaW5jbHVkZXMnO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuLyQuZmFpbHMtaXMtcmVnZXhwJykoSU5DTFVERVMpLCAnU3RyaW5nJywge2luY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2hTdHJpbmcpIHtcbiAgICByZXR1cm4gISF+Y29udGV4dCh0aGlzLCBzZWFyY2hTdHJpbmcsIElOQ0xVREVTKS5pbmRleE9mKHNlYXJjaFN0cmluZywgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
