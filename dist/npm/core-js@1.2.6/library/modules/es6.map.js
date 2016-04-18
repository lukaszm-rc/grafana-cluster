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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYubWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQUNJLGVBQVMsUUFBUSx1QkFBUjs7QUFDYixjQUFRLGdCQUFSLEVBQTBCLEtBQTFCLEVBQWlDLFVBQVMsR0FBVCxFQUFjO0FBQzdDLGVBQU8sU0FBUyxHQUFULEdBQWU7QUFDcEIsaUJBQU8sSUFBSSxJQUFKLEVBQVUsVUFBVSxNQUFWLEdBQW1CLENBQW5CLEdBQXVCLFVBQVUsQ0FBVixDQUF2QixHQUFzQyxTQUF0QyxDQUFqQixDQURvQjtTQUFmLENBRHNDO09BQWQsRUFJOUI7QUFDRCxhQUFLLFNBQVMsR0FBVCxDQUFhLEdBQWIsRUFBa0I7QUFDckIsY0FBSSxRQUFRLE9BQU8sUUFBUCxDQUFnQixJQUFoQixFQUFzQixHQUF0QixDQUFSLENBRGlCO0FBRXJCLGlCQUFPLFNBQVMsTUFBTSxDQUFOLENBRks7U0FBbEI7QUFJTCxhQUFLLFNBQVMsR0FBVCxDQUFhLEdBQWIsRUFBa0IsS0FBbEIsRUFBeUI7QUFDNUIsaUJBQU8sT0FBTyxHQUFQLENBQVcsSUFBWCxFQUFpQixRQUFRLENBQVIsR0FBWSxDQUFaLEdBQWdCLEdBQWhCLEVBQXFCLEtBQXRDLENBQVAsQ0FENEI7U0FBekI7T0FUUCxFQVlHLE1BWkgsRUFZVyxJQVpYIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYubWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24tc3Ryb25nJyk7XG5yZXF1aXJlKCcuLyQuY29sbGVjdGlvbicpKCdNYXAnLCBmdW5jdGlvbihnZXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIE1hcCgpIHtcbiAgICByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgfTtcbn0sIHtcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgdmFyIGVudHJ5ID0gc3Ryb25nLmdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnY7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZywgdHJ1ZSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
