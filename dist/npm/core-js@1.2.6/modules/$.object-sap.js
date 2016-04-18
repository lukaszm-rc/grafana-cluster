'use strict';

System.register([], function (_export, _context) {
    var $export, core, fails;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            core = require('./$.core');
            fails = require('./$.fails');

            module.exports = function (KEY, exec) {
                var fn = (core.Object || {})[KEY] || Object[KEY],
                    exp = {};
                exp[KEY] = exec(fn);
                $export($export.S + $export.F * fails(function () {
                    fn(1);
                }), 'Object', exp);
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5vYmplY3Qtc2FwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxzQkFBVSxRQUFRLFlBQVI7QUFDVixtQkFBTyxRQUFRLFVBQVI7QUFDUCxvQkFBUSxRQUFRLFdBQVI7O0FBQ1osbUJBQU8sT0FBUCxHQUFpQixVQUFTLEdBQVQsRUFBYyxJQUFkLEVBQW9CO0FBQ25DLG9CQUFJLEtBQUssQ0FBQyxLQUFLLE1BQUwsSUFBZSxFQUFmLENBQUQsQ0FBb0IsR0FBcEIsS0FBNEIsT0FBTyxHQUFQLENBQTVCO29CQUNMLE1BQU0sRUFBTixDQUYrQjtBQUduQyxvQkFBSSxHQUFKLElBQVcsS0FBSyxFQUFMLENBQVgsQ0FIbUM7QUFJbkMsd0JBQVEsUUFBUSxDQUFSLEdBQVksUUFBUSxDQUFSLEdBQVksTUFBTSxZQUFXO0FBQy9DLHVCQUFHLENBQUgsRUFEK0M7aUJBQVgsQ0FBbEIsRUFFaEIsUUFGSixFQUVjLEdBRmQsRUFKbUM7YUFBcEIiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy8kLm9iamVjdC1zYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgIGNvcmUgPSByZXF1aXJlKCcuLyQuY29yZScpLFxuICAgIGZhaWxzID0gcmVxdWlyZSgnLi8kLmZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYykge1xuICB2YXIgZm4gPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV0sXG4gICAgICBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpIHtcbiAgICBmbigxKTtcbiAgfSksICdPYmplY3QnLCBleHApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
