/* */
'use strict';

System.register([], function (_export, _context) {
    var $export, $at;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            $at = require('./$.string-at')(false);

            $export($export.P, 'String', { codePointAt: function codePointAt(pos) {
                    return $at(this, pos);
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnN0cmluZy5jb2RlLXBvaW50LWF0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQUNJLHNCQUFVLFFBQVEsWUFBUjtBQUNWLGtCQUFNLFFBQVEsZUFBUixFQUF5QixLQUF6Qjs7QUFDVixvQkFBUSxRQUFRLENBQVIsRUFBVyxRQUFuQixFQUE2QixFQUFDLGFBQWEsU0FBUyxXQUFULENBQXFCLEdBQXJCLEVBQTBCO0FBQ2pFLDJCQUFPLElBQUksSUFBSixFQUFVLEdBQVYsQ0FBUCxDQURpRTtpQkFBMUIsRUFBM0MiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy9lczYuc3RyaW5nLmNvZGUtcG9pbnQtYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgICRhdCA9IHJlcXVpcmUoJy4vJC5zdHJpbmctYXQnKShmYWxzZSk7XG4kZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtjb2RlUG9pbnRBdDogZnVuY3Rpb24gY29kZVBvaW50QXQocG9zKSB7XG4gICAgcmV0dXJuICRhdCh0aGlzLCBwb3MpO1xuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
