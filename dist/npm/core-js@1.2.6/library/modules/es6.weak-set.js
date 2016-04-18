/* */
'use strict';

System.register([], function (_export, _context) {
  var weak;
  return {
    setters: [],
    execute: function () {
      weak = require('./$.collection-weak');

      require('./$.collection')('WeakSet', function (get) {
        return function WeakSet() {
          return get(this, arguments.length > 0 ? arguments[0] : undefined);
        };
      }, { add: function add(value) {
          return weak.def(this, value, true);
        } }, weak, false, true);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYud2Vhay1zZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7O0FBQ0ksYUFBTyxRQUFRLHFCQUFSOztBQUNYLGNBQVEsZ0JBQVIsRUFBMEIsU0FBMUIsRUFBcUMsVUFBUyxHQUFULEVBQWM7QUFDakQsZUFBTyxTQUFTLE9BQVQsR0FBbUI7QUFDeEIsaUJBQU8sSUFBSSxJQUFKLEVBQVUsVUFBVSxNQUFWLEdBQW1CLENBQW5CLEdBQXVCLFVBQVUsQ0FBVixDQUF2QixHQUFzQyxTQUF0QyxDQUFqQixDQUR3QjtTQUFuQixDQUQwQztPQUFkLEVBSWxDLEVBQUMsS0FBSyxTQUFTLEdBQVQsQ0FBYSxLQUFiLEVBQW9CO0FBQ3pCLGlCQUFPLEtBQUssR0FBTCxDQUFTLElBQVQsRUFBZSxLQUFmLEVBQXNCLElBQXRCLENBQVAsQ0FEeUI7U0FBcEIsRUFKVCxFQU1NLElBTk4sRUFNWSxLQU5aLEVBTW1CLElBTm5CIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYud2Vhay1zZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbid1c2Ugc3RyaWN0JztcbnZhciB3ZWFrID0gcmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24td2VhaycpO1xucmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24nKSgnV2Vha1NldCcsIGZ1bmN0aW9uKGdldCkge1xuICByZXR1cm4gZnVuY3Rpb24gV2Vha1NldCgpIHtcbiAgICByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgfTtcbn0sIHthZGQ6IGZ1bmN0aW9uIGFkZCh2YWx1ZSkge1xuICAgIHJldHVybiB3ZWFrLmRlZih0aGlzLCB2YWx1ZSwgdHJ1ZSk7XG4gIH19LCB3ZWFrLCBmYWxzZSwgdHJ1ZSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
