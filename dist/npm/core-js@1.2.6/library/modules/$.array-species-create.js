'use strict';

System.register([], function (_export, _context) {
  var isObject, isArray, SPECIES;
  return {
    setters: [],
    execute: function () {
      isObject = require('./$.is-object');
      isArray = require('./$.is-array');
      SPECIES = require('./$.wks')('species');

      module.exports = function (original, length) {
        var C;
        if (isArray(original)) {
          C = original.constructor;
          if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
          if (isObject(C)) {
            C = C[SPECIES];
            if (C === null) C = undefined;
          }
        }
        return new (C === undefined ? Array : C)(length);
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmFycmF5LXNwZWNpZXMtY3JlYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxpQkFBVyxRQUFRLGVBQVI7QUFDWCxnQkFBVSxRQUFRLGNBQVI7QUFDVixnQkFBVSxRQUFRLFNBQVIsRUFBbUIsU0FBbkI7O0FBQ2QsYUFBTyxPQUFQLEdBQWlCLFVBQVMsUUFBVCxFQUFtQixNQUFuQixFQUEyQjtBQUMxQyxZQUFJLENBQUosQ0FEMEM7QUFFMUMsWUFBSSxRQUFRLFFBQVIsQ0FBSixFQUF1QjtBQUNyQixjQUFJLFNBQVMsV0FBVCxDQURpQjtBQUVyQixjQUFJLE9BQU8sQ0FBUCxJQUFZLFVBQVosS0FBMkIsTUFBTSxLQUFOLElBQWUsUUFBUSxFQUFFLFNBQUYsQ0FBdkIsQ0FBM0IsRUFDRixJQUFJLFNBQUosQ0FERjtBQUVBLGNBQUksU0FBUyxDQUFULENBQUosRUFBaUI7QUFDZixnQkFBSSxFQUFFLE9BQUYsQ0FBSixDQURlO0FBRWYsZ0JBQUksTUFBTSxJQUFOLEVBQ0YsSUFBSSxTQUFKLENBREY7V0FGRjtTQUpGO0FBVUEsZUFBTyxLQUFLLE1BQU0sU0FBTixHQUFrQixLQUFsQixHQUEwQixDQUExQixDQUFMLENBQWtDLE1BQWxDLENBQVAsQ0FaMEM7T0FBM0IiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzLyQuYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi8kLmlzLWFycmF5JyksXG4gICAgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vJC53a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCwgbGVuZ3RoKSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbCkpIHtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgaWYgKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSlcbiAgICAgIEMgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGlzT2JqZWN0KEMpKSB7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmIChDID09PSBudWxsKVxuICAgICAgICBDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3IChDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEMpKGxlbmd0aCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
