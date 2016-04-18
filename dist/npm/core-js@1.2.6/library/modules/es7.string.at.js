/* */
'use strict';

System.register([], function (_export, _context) {
    var $export, $at;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            $at = require('./$.string-at')(true);

            $export($export.P, 'String', { at: function at(pos) {
                    return $at(this, pos);
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczcuc3RyaW5nLmF0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQUNJLHNCQUFVLFFBQVEsWUFBUjtBQUNWLGtCQUFNLFFBQVEsZUFBUixFQUF5QixJQUF6Qjs7QUFDVixvQkFBUSxRQUFRLENBQVIsRUFBVyxRQUFuQixFQUE2QixFQUFDLElBQUksU0FBUyxFQUFULENBQVksR0FBWixFQUFpQjtBQUMvQywyQkFBTyxJQUFJLElBQUosRUFBVSxHQUFWLENBQVAsQ0FEK0M7aUJBQWpCLEVBQWxDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczcuc3RyaW5nLmF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICAkYXQgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWF0JykodHJ1ZSk7XG4kZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHthdDogZnVuY3Rpb24gYXQocG9zKSB7XG4gICAgcmV0dXJuICRhdCh0aGlzLCBwb3MpO1xuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
