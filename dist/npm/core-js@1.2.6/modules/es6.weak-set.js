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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LndlYWstc2V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQUNJLGFBQU8sUUFBUSxxQkFBUjs7QUFDWCxjQUFRLGdCQUFSLEVBQTBCLFNBQTFCLEVBQXFDLFVBQVMsR0FBVCxFQUFjO0FBQ2pELGVBQU8sU0FBUyxPQUFULEdBQW1CO0FBQ3hCLGlCQUFPLElBQUksSUFBSixFQUFVLFVBQVUsTUFBVixHQUFtQixDQUFuQixHQUF1QixVQUFVLENBQVYsQ0FBdkIsR0FBc0MsU0FBdEMsQ0FBakIsQ0FEd0I7U0FBbkIsQ0FEMEM7T0FBZCxFQUlsQyxFQUFDLEtBQUssU0FBUyxHQUFULENBQWEsS0FBYixFQUFvQjtBQUN6QixpQkFBTyxLQUFLLEdBQUwsQ0FBUyxJQUFULEVBQWUsS0FBZixFQUFzQixJQUF0QixDQUFQLENBRHlCO1NBQXBCLEVBSlQsRUFNTSxJQU5OLEVBTVksS0FOWixFQU1tQixJQU5uQiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi53ZWFrLXNldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuJ3VzZSBzdHJpY3QnO1xudmFyIHdlYWsgPSByZXF1aXJlKCcuLyQuY29sbGVjdGlvbi13ZWFrJyk7XG5yZXF1aXJlKCcuLyQuY29sbGVjdGlvbicpKCdXZWFrU2V0JywgZnVuY3Rpb24oZ2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBXZWFrU2V0KCkge1xuICAgIHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICB9O1xufSwge2FkZDogZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHdlYWsuZGVmKHRoaXMsIHZhbHVlLCB0cnVlKTtcbiAgfX0sIHdlYWssIGZhbHNlLCB0cnVlKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
