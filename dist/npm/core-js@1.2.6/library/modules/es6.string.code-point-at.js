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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLmNvZGUtcG9pbnQtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxZQUFSO0FBQ1Ysa0JBQU0sUUFBUSxlQUFSLEVBQXlCLEtBQXpCOztBQUNWLG9CQUFRLFFBQVEsQ0FBUixFQUFXLFFBQW5CLEVBQTZCLEVBQUMsYUFBYSxTQUFTLFdBQVQsQ0FBcUIsR0FBckIsRUFBMEI7QUFDakUsMkJBQU8sSUFBSSxJQUFKLEVBQVUsR0FBVixDQUFQLENBRGlFO2lCQUExQixFQUEzQyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5jb2RlLXBvaW50LWF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICAkYXQgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWF0JykoZmFsc2UpO1xuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7Y29kZVBvaW50QXQ6IGZ1bmN0aW9uIGNvZGVQb2ludEF0KHBvcykge1xuICAgIHJldHVybiAkYXQodGhpcywgcG9zKTtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
