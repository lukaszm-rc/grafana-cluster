'use strict';

System.register([], function (_export, _context) {
    var $export, isInteger, abs;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            isInteger = require('./$.is-integer');
            abs = Math.abs;

            $export($export.S, 'Number', { isSafeInteger: function isSafeInteger(number) {
                    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYubnVtYmVyLmlzLXNhZmUtaW50ZWdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxZQUFSO0FBQ1Ysd0JBQVksUUFBUSxnQkFBUjtBQUNaLGtCQUFNLEtBQUssR0FBTDs7QUFDVixvQkFBUSxRQUFRLENBQVIsRUFBVyxRQUFuQixFQUE2QixFQUFDLGVBQWUsU0FBUyxhQUFULENBQXVCLE1BQXZCLEVBQStCO0FBQ3hFLDJCQUFPLFVBQVUsTUFBVixLQUFxQixJQUFJLE1BQUosS0FBZSxnQkFBZixDQUQ0QztpQkFBL0IsRUFBN0MiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzL2VzNi5udW1iZXIuaXMtc2FmZS1pbnRlZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICBpc0ludGVnZXIgPSByZXF1aXJlKCcuLyQuaXMtaW50ZWdlcicpLFxuICAgIGFicyA9IE1hdGguYWJzO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7aXNTYWZlSW50ZWdlcjogZnVuY3Rpb24gaXNTYWZlSW50ZWdlcihudW1iZXIpIHtcbiAgICByZXR1cm4gaXNJbnRlZ2VyKG51bWJlcikgJiYgYWJzKG51bWJlcikgPD0gMHgxZmZmZmZmZmZmZmZmZjtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
