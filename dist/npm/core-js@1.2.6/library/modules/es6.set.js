/* */
'use strict';

System.register([], function (_export, _context) {
  var strong;
  return {
    setters: [],
    execute: function () {
      strong = require('./$.collection-strong');

      require('./$.collection')('Set', function (get) {
        return function Set() {
          return get(this, arguments.length > 0 ? arguments[0] : undefined);
        };
      }, { add: function add(value) {
          return strong.def(this, value = value === 0 ? 0 : value, value);
        } }, strong);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYuc2V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQUNJLGVBQVMsUUFBUSx1QkFBUjs7QUFDYixjQUFRLGdCQUFSLEVBQTBCLEtBQTFCLEVBQWlDLFVBQVMsR0FBVCxFQUFjO0FBQzdDLGVBQU8sU0FBUyxHQUFULEdBQWU7QUFDcEIsaUJBQU8sSUFBSSxJQUFKLEVBQVUsVUFBVSxNQUFWLEdBQW1CLENBQW5CLEdBQXVCLFVBQVUsQ0FBVixDQUF2QixHQUFzQyxTQUF0QyxDQUFqQixDQURvQjtTQUFmLENBRHNDO09BQWQsRUFJOUIsRUFBQyxLQUFLLFNBQVMsR0FBVCxDQUFhLEtBQWIsRUFBb0I7QUFDekIsaUJBQU8sT0FBTyxHQUFQLENBQVcsSUFBWCxFQUFpQixRQUFRLFVBQVUsQ0FBVixHQUFjLENBQWQsR0FBa0IsS0FBbEIsRUFBeUIsS0FBbEQsQ0FBUCxDQUR5QjtTQUFwQixFQUpULEVBTU0sTUFOTiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvZXM2LnNldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uLXN0cm9uZycpO1xucmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24nKSgnU2V0JywgZnVuY3Rpb24oZ2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBTZXQoKSB7XG4gICAgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gIH07XG59LCB7YWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCB2YWx1ZSA9IHZhbHVlID09PSAwID8gMCA6IHZhbHVlLCB2YWx1ZSk7XG4gIH19LCBzdHJvbmcpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
