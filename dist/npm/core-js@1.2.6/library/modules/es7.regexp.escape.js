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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczcucmVnZXhwLmVzY2FwZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxZQUFSO0FBQ1Ysa0JBQU0sUUFBUSxjQUFSLEVBQXdCLHFCQUF4QixFQUErQyxNQUEvQzs7QUFDVixvQkFBUSxRQUFRLENBQVIsRUFBVyxRQUFuQixFQUE2QixFQUFDLFFBQVEsU0FBUyxNQUFULENBQWdCLEVBQWhCLEVBQW9CO0FBQ3RELDJCQUFPLElBQUksRUFBSixDQUFQLENBRHNEO2lCQUFwQixFQUF0QyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvZXM3LnJlZ2V4cC5lc2NhcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgICRyZSA9IHJlcXVpcmUoJy4vJC5yZXBsYWNlcicpKC9bXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWdFeHAnLCB7ZXNjYXBlOiBmdW5jdGlvbiBlc2NhcGUoaXQpIHtcbiAgICByZXR1cm4gJHJlKGl0KTtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
