'use strict';

System.register([], function (_export, _context) {
    var $export;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');

            $export($export.S, 'Number', { isNaN: function isNaN(number) {
                    return number != number;
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYubnVtYmVyLmlzLW5hbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxZQUFSOztBQUNkLG9CQUFRLFFBQVEsQ0FBUixFQUFXLFFBQW5CLEVBQTZCLEVBQUMsT0FBTyxTQUFTLEtBQVQsQ0FBZSxNQUFmLEVBQXVCO0FBQ3hELDJCQUFPLFVBQVUsTUFBVixDQURpRDtpQkFBdkIsRUFBckMiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzL2VzNi5udW1iZXIuaXMtbmFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge2lzTmFOOiBmdW5jdGlvbiBpc05hTihudW1iZXIpIHtcbiAgICByZXR1cm4gbnVtYmVyICE9IG51bWJlcjtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
