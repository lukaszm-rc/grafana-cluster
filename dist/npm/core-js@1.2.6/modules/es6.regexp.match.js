'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      require('./$.fix-re-wks')('match', 1, function (defined, MATCH) {
        return function match(regexp) {
          'use strict';

          var O = defined(this),
              fn = regexp == undefined ? undefined : regexp[MATCH];
          return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
        };
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsY0FBUSxnQkFBUixFQUEwQixPQUExQixFQUFtQyxDQUFuQyxFQUFzQyxVQUFTLE9BQVQsRUFBa0IsS0FBbEIsRUFBeUI7QUFDN0QsZUFBTyxTQUFTLEtBQVQsQ0FBZSxNQUFmLEVBQXVCO0FBQzVCLHVCQUQ0Qjs7QUFFNUIsY0FBSSxJQUFJLFFBQVEsSUFBUixDQUFKO2NBQ0EsS0FBSyxVQUFVLFNBQVYsR0FBc0IsU0FBdEIsR0FBa0MsT0FBTyxLQUFQLENBQWxDLENBSG1CO0FBSTVCLGlCQUFPLE9BQU8sU0FBUCxHQUFtQixHQUFHLElBQUgsQ0FBUSxNQUFSLEVBQWdCLENBQWhCLENBQW5CLEdBQXdDLElBQUksTUFBSixDQUFXLE1BQVgsRUFBbUIsS0FBbkIsRUFBMEIsT0FBTyxDQUFQLENBQTFCLENBQXhDLENBSnFCO1NBQXZCLENBRHNEO09BQXpCLENBQXRDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxucmVxdWlyZSgnLi8kLmZpeC1yZS13a3MnKSgnbWF0Y2gnLCAxLCBmdW5jdGlvbihkZWZpbmVkLCBNQVRDSCkge1xuICByZXR1cm4gZnVuY3Rpb24gbWF0Y2gocmVnZXhwKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKSxcbiAgICAgICAgZm4gPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmVnZXhwW01BVENIXTtcbiAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtNQVRDSF0oU3RyaW5nKE8pKTtcbiAgfTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
