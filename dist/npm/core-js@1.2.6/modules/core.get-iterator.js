'use strict';

System.register([], function (_export, _context) {
  var anObject, get;
  return {
    setters: [],
    execute: function () {
      anObject = require('./$.an-object');
      get = require('./core.get-iterator-method');

      module.exports = require('./$.core').getIterator = function (it) {
        var iterFn = get(it);
        if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
        return anObject(iterFn.call(it));
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGlCQUFXLFFBQVEsZUFBUjtBQUNYLFlBQU0sUUFBUSw0QkFBUjs7QUFDVixhQUFPLE9BQVAsR0FBaUIsUUFBUSxVQUFSLEVBQW9CLFdBQXBCLEdBQWtDLFVBQVMsRUFBVCxFQUFhO0FBQzlELFlBQUksU0FBUyxJQUFJLEVBQUosQ0FBVCxDQUQwRDtBQUU5RCxZQUFJLE9BQU8sTUFBUCxJQUFpQixVQUFqQixFQUNGLE1BQU0sVUFBVSxLQUFLLG1CQUFMLENBQWhCLENBREY7QUFFQSxlQUFPLFNBQVMsT0FBTyxJQUFQLENBQVksRUFBWixDQUFULENBQVAsQ0FKOEQ7T0FBYiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JyksXG4gICAgZ2V0ID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmNvcmUnKS5nZXRJdGVyYXRvciA9IGZ1bmN0aW9uKGl0KSB7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKVxuICAgIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
