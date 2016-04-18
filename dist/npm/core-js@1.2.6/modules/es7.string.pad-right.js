/* */
'use strict';

System.register([], function (_export, _context) {
    var $export, $pad;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            $pad = require('./$.string-pad');

            $export($export.P, 'String', { padRight: function padRight(maxLength) {
                    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM3LnN0cmluZy5wYWQtcmlnaHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxZQUFSO0FBQ1YsbUJBQU8sUUFBUSxnQkFBUjs7QUFDWCxvQkFBUSxRQUFRLENBQVIsRUFBVyxRQUFuQixFQUE2QixFQUFDLFVBQVUsU0FBUyxRQUFULENBQWtCLFNBQWxCLEVBQTZCO0FBQ2pFLDJCQUFPLEtBQUssSUFBTCxFQUFXLFNBQVgsRUFBc0IsVUFBVSxNQUFWLEdBQW1CLENBQW5CLEdBQXVCLFVBQVUsQ0FBVixDQUF2QixHQUFzQyxTQUF0QyxFQUFpRCxLQUF2RSxDQUFQLENBRGlFO2lCQUE3QixFQUF4QyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLXJpZ2h0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICAkcGFkID0gcmVxdWlyZSgnLi8kLnN0cmluZy1wYWQnKTtcbiRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge3BhZFJpZ2h0OiBmdW5jdGlvbiBwYWRSaWdodChtYXhMZW5ndGgpIHtcbiAgICByZXR1cm4gJHBhZCh0aGlzLCBtYXhMZW5ndGgsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCBmYWxzZSk7XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
