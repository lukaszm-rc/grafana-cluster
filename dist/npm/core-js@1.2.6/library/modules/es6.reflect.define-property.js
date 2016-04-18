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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYucmVmbGVjdC5kZWZpbmUtcHJvcGVydHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLFVBQUksUUFBUSxLQUFSO0FBQ0osZ0JBQVUsUUFBUSxZQUFSO0FBQ1YsaUJBQVcsUUFBUSxlQUFSOztBQUNmLGNBQVEsUUFBUSxDQUFSLEdBQVksUUFBUSxDQUFSLEdBQVksUUFBUSxXQUFSLEVBQXFCLFlBQVc7QUFDOUQsZ0JBQVEsY0FBUixDQUF1QixFQUFFLE9BQUYsQ0FBVSxFQUFWLEVBQWMsQ0FBZCxFQUFpQixFQUFDLE9BQU8sQ0FBUCxFQUFsQixDQUF2QixFQUFxRCxDQUFyRCxFQUF3RCxFQUFDLE9BQU8sQ0FBUCxFQUF6RCxFQUQ4RDtPQUFYLENBQWpDLEVBRWhCLFNBRkosRUFFZSxFQUFDLGdCQUFnQixTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0MsV0FBaEMsRUFBNkMsVUFBN0MsRUFBeUQ7QUFDckYsbUJBQVMsTUFBVCxFQURxRjtBQUVyRixjQUFJO0FBQ0YsY0FBRSxPQUFGLENBQVUsTUFBVixFQUFrQixXQUFsQixFQUErQixVQUEvQixFQURFO0FBRUYsbUJBQU8sSUFBUCxDQUZFO1dBQUosQ0FHRSxPQUFPLENBQVAsRUFBVTtBQUNWLG1CQUFPLEtBQVAsQ0FEVTtXQUFWO1NBTDBCLEVBRmhDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYucmVmbGVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkID0gcmVxdWlyZSgnLi8kJyksXG4gICAgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKSB7XG4gIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoJC5zZXREZXNjKHt9LCAxLCB7dmFsdWU6IDF9KSwgMSwge3ZhbHVlOiAyfSk7XG59KSwgJ1JlZmxlY3QnLCB7ZGVmaW5lUHJvcGVydHk6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIGF0dHJpYnV0ZXMpIHtcbiAgICBhbk9iamVjdCh0YXJnZXQpO1xuICAgIHRyeSB7XG4gICAgICAkLnNldERlc2ModGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
