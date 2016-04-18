'use strict';

System.register([], function (_export, _context) {
  var $, $export, aFunction, anObject, isObject, bind;
  return {
    setters: [],
    execute: function () {
      $ = require('./$');
      $export = require('./$.export');
      aFunction = require('./$.a-function');
      anObject = require('./$.an-object');
      isObject = require('./$.is-object');
      bind = Function.bind || require('./$.core').Function.prototype.bind;

      $export($export.S + $export.F * require('./$.fails')(function () {
        function F() {}
        return !(Reflect.construct(function () {}, [], F) instanceof F);
      }), 'Reflect', { construct: function construct(Target, args) {
          aFunction(Target);
          var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
          if (Target == newTarget) {
            if (args != undefined) switch (anObject(args).length) {
              case 0:
                return new Target();
              case 1:
                return new Target(args[0]);
              case 2:
                return new Target(args[0], args[1]);
              case 3:
                return new Target(args[0], args[1], args[2]);
              case 4:
                return new Target(args[0], args[1], args[2], args[3]);
            }
            var $args = [null];
            $args.push.apply($args, args);
            return new (bind.apply(Target, $args))();
          }
          var proto = newTarget.prototype,
              instance = $.create(isObject(proto) ? proto : Object.prototype),
              result = Function.apply.call(Target, instance, args);
          return isObject(result) ? result : instance;
        } });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnJlZmxlY3QuY29uc3RydWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxVQUFJLFFBQVEsS0FBUjtBQUNKLGdCQUFVLFFBQVEsWUFBUjtBQUNWLGtCQUFZLFFBQVEsZ0JBQVI7QUFDWixpQkFBVyxRQUFRLGVBQVI7QUFDWCxpQkFBVyxRQUFRLGVBQVI7QUFDWCxhQUFPLFNBQVMsSUFBVCxJQUFpQixRQUFRLFVBQVIsRUFBb0IsUUFBcEIsQ0FBNkIsU0FBN0IsQ0FBdUMsSUFBdkM7O0FBQzVCLGNBQVEsUUFBUSxDQUFSLEdBQVksUUFBUSxDQUFSLEdBQVksUUFBUSxXQUFSLEVBQXFCLFlBQVc7QUFDOUQsaUJBQVMsQ0FBVCxHQUFhLEVBQWI7QUFDQSxlQUFPLEVBQUUsUUFBUSxTQUFSLENBQWtCLFlBQVcsRUFBWCxFQUFlLEVBQWpDLEVBQXFDLENBQXJDLGFBQW1ELENBQW5ELENBQUYsQ0FGdUQ7T0FBWCxDQUFqQyxFQUdoQixTQUhKLEVBR2UsRUFBQyxXQUFXLFNBQVMsU0FBVCxDQUFtQixNQUFuQixFQUEyQixJQUEzQixFQUFpQztBQUN4RCxvQkFBVSxNQUFWLEVBRHdEO0FBRXhELGNBQUksWUFBWSxVQUFVLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUIsTUFBdkIsR0FBZ0MsVUFBVSxVQUFVLENBQVYsQ0FBVixDQUFoQyxDQUZ3QztBQUd4RCxjQUFJLFVBQVUsU0FBVixFQUFxQjtBQUN2QixnQkFBSSxRQUFRLFNBQVIsRUFDRixRQUFRLFNBQVMsSUFBVCxFQUFlLE1BQWY7QUFDTixtQkFBSyxDQUFMO0FBQ0UsdUJBQU8sSUFBSSxNQUFKLEVBQVAsQ0FERjtBQURGLG1CQUdPLENBQUw7QUFDRSx1QkFBTyxJQUFJLE1BQUosQ0FBVyxLQUFLLENBQUwsQ0FBWCxDQUFQLENBREY7QUFIRixtQkFLTyxDQUFMO0FBQ0UsdUJBQU8sSUFBSSxNQUFKLENBQVcsS0FBSyxDQUFMLENBQVgsRUFBb0IsS0FBSyxDQUFMLENBQXBCLENBQVAsQ0FERjtBQUxGLG1CQU9PLENBQUw7QUFDRSx1QkFBTyxJQUFJLE1BQUosQ0FBVyxLQUFLLENBQUwsQ0FBWCxFQUFvQixLQUFLLENBQUwsQ0FBcEIsRUFBNkIsS0FBSyxDQUFMLENBQTdCLENBQVAsQ0FERjtBQVBGLG1CQVNPLENBQUw7QUFDRSx1QkFBTyxJQUFJLE1BQUosQ0FBVyxLQUFLLENBQUwsQ0FBWCxFQUFvQixLQUFLLENBQUwsQ0FBcEIsRUFBNkIsS0FBSyxDQUFMLENBQTdCLEVBQXNDLEtBQUssQ0FBTCxDQUF0QyxDQUFQLENBREY7QUFURixhQURGO0FBYUEsZ0JBQUksUUFBUSxDQUFDLElBQUQsQ0FBUixDQWRtQjtBQWV2QixrQkFBTSxJQUFOLENBQVcsS0FBWCxDQUFpQixLQUFqQixFQUF3QixJQUF4QixFQWZ1QjtBQWdCdkIsbUJBQU8sS0FBSyxLQUFLLEtBQUwsQ0FBVyxNQUFYLEVBQW1CLEtBQW5CLEVBQUwsRUFBUCxDQWhCdUI7V0FBekI7QUFrQkEsY0FBSSxRQUFRLFVBQVUsU0FBVjtjQUNSLFdBQVcsRUFBRSxNQUFGLENBQVMsU0FBUyxLQUFULElBQWtCLEtBQWxCLEdBQTBCLE9BQU8sU0FBUCxDQUE5QztjQUNBLFNBQVMsU0FBUyxLQUFULENBQWUsSUFBZixDQUFvQixNQUFwQixFQUE0QixRQUE1QixFQUFzQyxJQUF0QyxDQUFULENBdkJvRDtBQXdCeEQsaUJBQU8sU0FBUyxNQUFULElBQW1CLE1BQW5CLEdBQTRCLFFBQTVCLENBeEJpRDtTQUFqQyxFQUgzQiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5yZWZsZWN0LmNvbnN0cnVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICQgPSByZXF1aXJlKCcuLyQnKSxcbiAgICAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vJC5hLWZ1bmN0aW9uJyksXG4gICAgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JyksXG4gICAgYmluZCA9IEZ1bmN0aW9uLmJpbmQgfHwgcmVxdWlyZSgnLi8kLmNvcmUnKS5GdW5jdGlvbi5wcm90b3R5cGUuYmluZDtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEYoKSB7fVxuICByZXR1cm4gIShSZWZsZWN0LmNvbnN0cnVjdChmdW5jdGlvbigpIHt9LCBbXSwgRikgaW5zdGFuY2VvZiBGKTtcbn0pLCAnUmVmbGVjdCcsIHtjb25zdHJ1Y3Q6IGZ1bmN0aW9uIGNvbnN0cnVjdChUYXJnZXQsIGFyZ3MpIHtcbiAgICBhRnVuY3Rpb24oVGFyZ2V0KTtcbiAgICB2YXIgbmV3VGFyZ2V0ID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyBUYXJnZXQgOiBhRnVuY3Rpb24oYXJndW1lbnRzWzJdKTtcbiAgICBpZiAoVGFyZ2V0ID09IG5ld1RhcmdldCkge1xuICAgICAgaWYgKGFyZ3MgIT0gdW5kZWZpbmVkKVxuICAgICAgICBzd2l0Y2ggKGFuT2JqZWN0KGFyZ3MpLmxlbmd0aCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGFyZ2V0O1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0pO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICAgICAgICB9XG4gICAgICB2YXIgJGFyZ3MgPSBbbnVsbF07XG4gICAgICAkYXJncy5wdXNoLmFwcGx5KCRhcmdzLCBhcmdzKTtcbiAgICAgIHJldHVybiBuZXcgKGJpbmQuYXBwbHkoVGFyZ2V0LCAkYXJncykpO1xuICAgIH1cbiAgICB2YXIgcHJvdG8gPSBuZXdUYXJnZXQucHJvdG90eXBlLFxuICAgICAgICBpbnN0YW5jZSA9ICQuY3JlYXRlKGlzT2JqZWN0KHByb3RvKSA/IHByb3RvIDogT2JqZWN0LnByb3RvdHlwZSksXG4gICAgICAgIHJlc3VsdCA9IEZ1bmN0aW9uLmFwcGx5LmNhbGwoVGFyZ2V0LCBpbnN0YW5jZSwgYXJncyk7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHJlc3VsdCkgPyByZXN1bHQgOiBpbnN0YW5jZTtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
