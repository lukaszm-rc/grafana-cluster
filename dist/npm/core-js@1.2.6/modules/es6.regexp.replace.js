'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      require('./$.fix-re-wks')('replace', 2, function (defined, REPLACE, $replace) {
        return function replace(searchValue, replaceValue) {
          'use strict';

          var O = defined(this),
              fn = searchValue == undefined ? undefined : searchValue[REPLACE];
          return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
        };
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnJlZ2V4cC5yZXBsYWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxjQUFRLGdCQUFSLEVBQTBCLFNBQTFCLEVBQXFDLENBQXJDLEVBQXdDLFVBQVMsT0FBVCxFQUFrQixPQUFsQixFQUEyQixRQUEzQixFQUFxQztBQUMzRSxlQUFPLFNBQVMsT0FBVCxDQUFpQixXQUFqQixFQUE4QixZQUE5QixFQUE0QztBQUNqRCx1QkFEaUQ7O0FBRWpELGNBQUksSUFBSSxRQUFRLElBQVIsQ0FBSjtjQUNBLEtBQUssZUFBZSxTQUFmLEdBQTJCLFNBQTNCLEdBQXVDLFlBQVksT0FBWixDQUF2QyxDQUh3QztBQUlqRCxpQkFBTyxPQUFPLFNBQVAsR0FBbUIsR0FBRyxJQUFILENBQVEsV0FBUixFQUFxQixDQUFyQixFQUF3QixZQUF4QixDQUFuQixHQUEyRCxTQUFTLElBQVQsQ0FBYyxPQUFPLENBQVAsQ0FBZCxFQUF5QixXQUF6QixFQUFzQyxZQUF0QyxDQUEzRCxDQUowQztTQUE1QyxDQURvRTtPQUFyQyxDQUF4QyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5yZWdleHAucmVwbGFjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxucmVxdWlyZSgnLi8kLmZpeC1yZS13a3MnKSgncmVwbGFjZScsIDIsIGZ1bmN0aW9uKGRlZmluZWQsIFJFUExBQ0UsICRyZXBsYWNlKSB7XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpLFxuICAgICAgICBmbiA9IHNlYXJjaFZhbHVlID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlYXJjaFZhbHVlW1JFUExBQ0VdO1xuICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChzZWFyY2hWYWx1ZSwgTywgcmVwbGFjZVZhbHVlKSA6ICRyZXBsYWNlLmNhbGwoU3RyaW5nKE8pLCBzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTtcbiAgfTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
