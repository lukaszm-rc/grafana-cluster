'use strict';

System.register([], function (_export, _context) {
  var $, $export, anObject;
  return {
    setters: [],
    execute: function () {
      $ = require('./$');
      $export = require('./$.export');
      anObject = require('./$.an-object');

      $export($export.S + $export.F * require('./$.fails')(function () {
        Reflect.defineProperty($.setDesc({}, 1, { value: 1 }), 1, { value: 2 });
      }), 'Reflect', { defineProperty: function defineProperty(target, propertyKey, attributes) {
          anObject(target);
          try {
            $.setDesc(target, propertyKey, attributes);
            return true;
          } catch (e) {
            return false;
          }
        } });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnJlZmxlY3QuZGVmaW5lLXByb3BlcnR5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxVQUFJLFFBQVEsS0FBUjtBQUNKLGdCQUFVLFFBQVEsWUFBUjtBQUNWLGlCQUFXLFFBQVEsZUFBUjs7QUFDZixjQUFRLFFBQVEsQ0FBUixHQUFZLFFBQVEsQ0FBUixHQUFZLFFBQVEsV0FBUixFQUFxQixZQUFXO0FBQzlELGdCQUFRLGNBQVIsQ0FBdUIsRUFBRSxPQUFGLENBQVUsRUFBVixFQUFjLENBQWQsRUFBaUIsRUFBQyxPQUFPLENBQVAsRUFBbEIsQ0FBdkIsRUFBcUQsQ0FBckQsRUFBd0QsRUFBQyxPQUFPLENBQVAsRUFBekQsRUFEOEQ7T0FBWCxDQUFqQyxFQUVoQixTQUZKLEVBRWUsRUFBQyxnQkFBZ0IsU0FBUyxjQUFULENBQXdCLE1BQXhCLEVBQWdDLFdBQWhDLEVBQTZDLFVBQTdDLEVBQXlEO0FBQ3JGLG1CQUFTLE1BQVQsRUFEcUY7QUFFckYsY0FBSTtBQUNGLGNBQUUsT0FBRixDQUFVLE1BQVYsRUFBa0IsV0FBbEIsRUFBK0IsVUFBL0IsRUFERTtBQUVGLG1CQUFPLElBQVAsQ0FGRTtXQUFKLENBR0UsT0FBTyxDQUFQLEVBQVU7QUFDVixtQkFBTyxLQUFQLENBRFU7V0FBVjtTQUwwQixFQUZoQyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICQgPSByZXF1aXJlKCcuLyQnKSxcbiAgICAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpIHtcbiAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSgkLnNldERlc2Moe30sIDEsIHt2YWx1ZTogMX0pLCAxLCB7dmFsdWU6IDJ9KTtcbn0pLCAnUmVmbGVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcykge1xuICAgIGFuT2JqZWN0KHRhcmdldCk7XG4gICAgdHJ5IHtcbiAgICAgICQuc2V0RGVzYyh0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
