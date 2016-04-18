'use strict';

System.register([], function (_export, _context) {
    var $export, $re;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            $re = require('./$.replacer')(/[\\^$*+?.()|[\]{}]/g, '\\$&');

            $export($export.S, 'RegExp', { escape: function escape(it) {
                    return $re(it);
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM3LnJlZ2V4cC5lc2NhcGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLHNCQUFVLFFBQVEsWUFBUjtBQUNWLGtCQUFNLFFBQVEsY0FBUixFQUF3QixxQkFBeEIsRUFBK0MsTUFBL0M7O0FBQ1Ysb0JBQVEsUUFBUSxDQUFSLEVBQVcsUUFBbkIsRUFBNkIsRUFBQyxRQUFRLFNBQVMsTUFBVCxDQUFnQixFQUFoQixFQUFvQjtBQUN0RCwyQkFBTyxJQUFJLEVBQUosQ0FBUCxDQURzRDtpQkFBcEIsRUFBdEMiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy9lczcucmVnZXhwLmVzY2FwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgJHJlID0gcmVxdWlyZSgnLi8kLnJlcGxhY2VyJykoL1tcXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZ0V4cCcsIHtlc2NhcGU6IGZ1bmN0aW9uIGVzY2FwZShpdCkge1xuICAgIHJldHVybiAkcmUoaXQpO1xuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
