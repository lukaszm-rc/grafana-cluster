'use strict';

System.register([], function (_export, _context) {
  var aFunction;
  return {
    setters: [],
    execute: function () {
      aFunction = require('./$.a-function');

      module.exports = function (fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;
        switch (length) {
          case 1:
            return function (a) {
              return fn.call(that, a);
            };
          case 2:
            return function (a, b) {
              return fn.call(that, a, b);
            };
          case 3:
            return function (a, b, c) {
              return fn.call(that, a, b, c);
            };
        }
        return function () {
          return fn.apply(that, arguments);
        };
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmN0eC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksa0JBQVksUUFBUSxnQkFBUjs7QUFDaEIsYUFBTyxPQUFQLEdBQWlCLFVBQVMsRUFBVCxFQUFhLElBQWIsRUFBbUIsTUFBbkIsRUFBMkI7QUFDMUMsa0JBQVUsRUFBVixFQUQwQztBQUUxQyxZQUFJLFNBQVMsU0FBVCxFQUNGLE9BQU8sRUFBUCxDQURGO0FBRUEsZ0JBQVEsTUFBUjtBQUNFLGVBQUssQ0FBTDtBQUNFLG1CQUFPLFVBQVMsQ0FBVCxFQUFZO0FBQ2pCLHFCQUFPLEdBQUcsSUFBSCxDQUFRLElBQVIsRUFBYyxDQUFkLENBQVAsQ0FEaUI7YUFBWixDQURUO0FBREYsZUFLTyxDQUFMO0FBQ0UsbUJBQU8sVUFBUyxDQUFULEVBQVksQ0FBWixFQUFlO0FBQ3BCLHFCQUFPLEdBQUcsSUFBSCxDQUFRLElBQVIsRUFBYyxDQUFkLEVBQWlCLENBQWpCLENBQVAsQ0FEb0I7YUFBZixDQURUO0FBTEYsZUFTTyxDQUFMO0FBQ0UsbUJBQU8sVUFBUyxDQUFULEVBQVksQ0FBWixFQUFlLENBQWYsRUFBa0I7QUFDdkIscUJBQU8sR0FBRyxJQUFILENBQVEsSUFBUixFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBUCxDQUR1QjthQUFsQixDQURUO0FBVEYsU0FKMEM7QUFrQjFDLGVBQU8sWUFBVztBQUNoQixpQkFBTyxHQUFHLEtBQUgsQ0FBUyxJQUFULEVBQWUsU0FBZixDQUFQLENBRGdCO1NBQVgsQ0FsQm1DO09BQTNCIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmN0eC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vJC5hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgICB9O1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgICAgfTtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYykge1xuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
