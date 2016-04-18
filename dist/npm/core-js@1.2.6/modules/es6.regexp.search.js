'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      require('./$.fix-re-wks')('search', 1, function (defined, SEARCH) {
        return function search(regexp) {
          'use strict';

          var O = defined(this),
              fn = regexp == undefined ? undefined : regexp[SEARCH];
          return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
        };
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnJlZ2V4cC5zZWFyY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLGNBQVEsZ0JBQVIsRUFBMEIsUUFBMUIsRUFBb0MsQ0FBcEMsRUFBdUMsVUFBUyxPQUFULEVBQWtCLE1BQWxCLEVBQTBCO0FBQy9ELGVBQU8sU0FBUyxNQUFULENBQWdCLE1BQWhCLEVBQXdCO0FBQzdCLHVCQUQ2Qjs7QUFFN0IsY0FBSSxJQUFJLFFBQVEsSUFBUixDQUFKO2NBQ0EsS0FBSyxVQUFVLFNBQVYsR0FBc0IsU0FBdEIsR0FBa0MsT0FBTyxNQUFQLENBQWxDLENBSG9CO0FBSTdCLGlCQUFPLE9BQU8sU0FBUCxHQUFtQixHQUFHLElBQUgsQ0FBUSxNQUFSLEVBQWdCLENBQWhCLENBQW5CLEdBQXdDLElBQUksTUFBSixDQUFXLE1BQVgsRUFBbUIsTUFBbkIsRUFBMkIsT0FBTyxDQUFQLENBQTNCLENBQXhDLENBSnNCO1NBQXhCLENBRHdEO09BQTFCLENBQXZDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnJlZ2V4cC5zZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnJlcXVpcmUoJy4vJC5maXgtcmUtd2tzJykoJ3NlYXJjaCcsIDEsIGZ1bmN0aW9uKGRlZmluZWQsIFNFQVJDSCkge1xuICByZXR1cm4gZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgTyA9IGRlZmluZWQodGhpcyksXG4gICAgICAgIGZuID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtTRUFSQ0hdO1xuICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0oU3RyaW5nKE8pKTtcbiAgfTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
