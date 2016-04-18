/* */
'use strict';

System.register([], function (_export, _context) {
  var strong;
  return {
    setters: [],
    execute: function () {
      strong = require('./$.collection-strong');

      require('./$.collection')('Map', function (get) {
        return function Map() {
          return get(this, arguments.length > 0 ? arguments[0] : undefined);
        };
      }, {
        get: function get(key) {
          var entry = strong.getEntry(this, key);
          return entry && entry.v;
        },
        set: function set(key, value) {
          return strong.def(this, key === 0 ? 0 : key, value);
        }
      }, strong, true);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7QUFDSSxlQUFTLFFBQVEsdUJBQVI7O0FBQ2IsY0FBUSxnQkFBUixFQUEwQixLQUExQixFQUFpQyxVQUFTLEdBQVQsRUFBYztBQUM3QyxlQUFPLFNBQVMsR0FBVCxHQUFlO0FBQ3BCLGlCQUFPLElBQUksSUFBSixFQUFVLFVBQVUsTUFBVixHQUFtQixDQUFuQixHQUF1QixVQUFVLENBQVYsQ0FBdkIsR0FBc0MsU0FBdEMsQ0FBakIsQ0FEb0I7U0FBZixDQURzQztPQUFkLEVBSTlCO0FBQ0QsYUFBSyxTQUFTLEdBQVQsQ0FBYSxHQUFiLEVBQWtCO0FBQ3JCLGNBQUksUUFBUSxPQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsRUFBc0IsR0FBdEIsQ0FBUixDQURpQjtBQUVyQixpQkFBTyxTQUFTLE1BQU0sQ0FBTixDQUZLO1NBQWxCO0FBSUwsYUFBSyxTQUFTLEdBQVQsQ0FBYSxHQUFiLEVBQWtCLEtBQWxCLEVBQXlCO0FBQzVCLGlCQUFPLE9BQU8sR0FBUCxDQUFXLElBQVgsRUFBaUIsUUFBUSxDQUFSLEdBQVksQ0FBWixHQUFnQixHQUFoQixFQUFxQixLQUF0QyxDQUFQLENBRDRCO1NBQXpCO09BVFAsRUFZRyxNQVpILEVBWVcsSUFaWCIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5tYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuLyQuY29sbGVjdGlvbi1zdHJvbmcnKTtcbnJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uJykoJ01hcCcsIGZ1bmN0aW9uKGdldCkge1xuICByZXR1cm4gZnVuY3Rpb24gTWFwKCkge1xuICAgIHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICB9O1xufSwge1xuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nLCB0cnVlKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
