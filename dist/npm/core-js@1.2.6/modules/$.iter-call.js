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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5pdGVyLWNhbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGlCQUFXLFFBQVEsZUFBUjs7QUFDZixhQUFPLE9BQVAsR0FBaUIsVUFBUyxRQUFULEVBQW1CLEVBQW5CLEVBQXVCLEtBQXZCLEVBQThCLE9BQTlCLEVBQXVDO0FBQ3RELFlBQUk7QUFDRixpQkFBTyxVQUFVLEdBQUcsU0FBUyxLQUFULEVBQWdCLENBQWhCLENBQUgsRUFBdUIsTUFBTSxDQUFOLENBQXZCLENBQVYsR0FBNkMsR0FBRyxLQUFILENBQTdDLENBREw7U0FBSixDQUVFLE9BQU8sQ0FBUCxFQUFVO0FBQ1YsY0FBSSxNQUFNLFNBQVMsUUFBVCxDQUFOLENBRE07QUFFVixjQUFJLFFBQVEsU0FBUixFQUNGLFNBQVMsSUFBSSxJQUFKLENBQVMsUUFBVCxDQUFULEVBREY7QUFFQSxnQkFBTSxDQUFOLENBSlU7U0FBVjtPQUhhIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5pdGVyLWNhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZClcbiAgICAgIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
