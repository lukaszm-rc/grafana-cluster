'use strict';

System.register([], function (_export, _context) {
    var $export;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');

            $export($export.S, 'Math', { clz32: function clz32(x) {
                    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYubWF0aC5jbHozMi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxZQUFSOztBQUNkLG9CQUFRLFFBQVEsQ0FBUixFQUFXLE1BQW5CLEVBQTJCLEVBQUMsT0FBTyxTQUFTLEtBQVQsQ0FBZSxDQUFmLEVBQWtCO0FBQ2pELDJCQUFPLENBQUMsT0FBTyxDQUFQLENBQUQsR0FBYSxLQUFLLEtBQUssS0FBTCxDQUFXLEtBQUssR0FBTCxDQUFTLElBQUksR0FBSixDQUFULEdBQW9CLEtBQUssS0FBTCxDQUFwQyxHQUFrRCxFQUEvRCxDQUQwQztpQkFBbEIsRUFBbkMiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzL2VzNi5tYXRoLmNsejMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtjbHozMjogZnVuY3Rpb24gY2x6MzIoeCkge1xuICAgIHJldHVybiAoeCA+Pj49IDApID8gMzEgLSBNYXRoLmZsb29yKE1hdGgubG9nKHggKyAwLjUpICogTWF0aC5MT0cyRSkgOiAzMjtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
