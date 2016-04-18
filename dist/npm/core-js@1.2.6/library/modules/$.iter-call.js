'use strict';

System.register([], function (_export, _context) {
  var anObject;
  return {
    setters: [],
    execute: function () {
      anObject = require('./$.an-object');

      module.exports = function (iterator, fn, value, entries) {
        try {
          return entries ? fn(anObject(value)[0], value[1]) : fn(value);
        } catch (e) {
          var ret = iterator['return'];
          if (ret !== undefined) anObject(ret.call(iterator));
          throw e;
        }
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItY2FsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksaUJBQVcsUUFBUSxlQUFSOztBQUNmLGFBQU8sT0FBUCxHQUFpQixVQUFTLFFBQVQsRUFBbUIsRUFBbkIsRUFBdUIsS0FBdkIsRUFBOEIsT0FBOUIsRUFBdUM7QUFDdEQsWUFBSTtBQUNGLGlCQUFPLFVBQVUsR0FBRyxTQUFTLEtBQVQsRUFBZ0IsQ0FBaEIsQ0FBSCxFQUF1QixNQUFNLENBQU4sQ0FBdkIsQ0FBVixHQUE2QyxHQUFHLEtBQUgsQ0FBN0MsQ0FETDtTQUFKLENBRUUsT0FBTyxDQUFQLEVBQVU7QUFDVixjQUFJLE1BQU0sU0FBUyxRQUFULENBQU4sQ0FETTtBQUVWLGNBQUksUUFBUSxTQUFSLEVBQ0YsU0FBUyxJQUFJLElBQUosQ0FBUyxRQUFULENBQVQsRUFERjtBQUVBLGdCQUFNLENBQU4sQ0FKVTtTQUFWO09BSGEiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1jYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpXG4gICAgICBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
