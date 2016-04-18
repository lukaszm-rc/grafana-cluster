'use strict';

System.register([], function (_export, _context) {
    var $export;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');

            $export($export.S, 'Math', { trunc: function trunc(it) {
                    return (it > 0 ? Math.floor : Math.ceil)(it);
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm1hdGgudHJ1bmMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLHNCQUFVLFFBQVEsWUFBUjs7QUFDZCxvQkFBUSxRQUFRLENBQVIsRUFBVyxNQUFuQixFQUEyQixFQUFDLE9BQU8sU0FBUyxLQUFULENBQWUsRUFBZixFQUFtQjtBQUNsRCwyQkFBTyxDQUFDLEtBQUssQ0FBTCxHQUFTLEtBQUssS0FBTCxHQUFhLEtBQUssSUFBTCxDQUF2QixDQUFrQyxFQUFsQyxDQUFQLENBRGtEO2lCQUFuQixFQUFuQyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5tYXRoLnRydW5jLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHt0cnVuYzogZnVuY3Rpb24gdHJ1bmMoaXQpIHtcbiAgICByZXR1cm4gKGl0ID4gMCA/IE1hdGguZmxvb3IgOiBNYXRoLmNlaWwpKGl0KTtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
