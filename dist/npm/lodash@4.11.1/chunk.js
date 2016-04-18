'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      (function (process) {
        var baseSlice = require('./_baseSlice'),
            isIterateeCall = require('./_isIterateeCall'),
            toInteger = require('./toInteger');
        var nativeCeil = Math.ceil,
            nativeMax = Math.max;
        function chunk(array, size, guard) {
          if (guard ? isIterateeCall(array, size, guard) : size === undefined) {
            size = 1;
          } else {
            size = nativeMax(toInteger(size), 0);
          }
          var length = array ? array.length : 0;
          if (!length || size < 1) {
            return [];
          }
          var index = 0,
              resIndex = 0,
              result = Array(nativeCeil(length / size));
          while (index < length) {
            result[resIndex++] = baseSlice(array, index, index += size);
          }
          return result;
        }
        module.exports = chunk;
      })(require('process'));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2NodW5rLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFDLFVBQVMsT0FBVCxFQUFrQjtBQUNqQixZQUFJLFlBQVksUUFBUSxjQUFSLENBQVo7WUFDQSxpQkFBaUIsUUFBUSxtQkFBUixDQUFqQjtZQUNBLFlBQVksUUFBUSxhQUFSLENBQVosQ0FIYTtBQUlqQixZQUFJLGFBQWEsS0FBSyxJQUFMO1lBQ2IsWUFBWSxLQUFLLEdBQUwsQ0FMQztBQU1qQixpQkFBUyxLQUFULENBQWUsS0FBZixFQUFzQixJQUF0QixFQUE0QixLQUE1QixFQUFtQztBQUNqQyxjQUFLLFFBQVEsZUFBZSxLQUFmLEVBQXNCLElBQXRCLEVBQTRCLEtBQTVCLENBQVIsR0FBNkMsU0FBUyxTQUFULEVBQXFCO0FBQ3JFLG1CQUFPLENBQVAsQ0FEcUU7V0FBdkUsTUFFTztBQUNMLG1CQUFPLFVBQVUsVUFBVSxJQUFWLENBQVYsRUFBMkIsQ0FBM0IsQ0FBUCxDQURLO1dBRlA7QUFLQSxjQUFJLFNBQVMsUUFBUSxNQUFNLE1BQU4sR0FBZSxDQUF2QixDQU5vQjtBQU9qQyxjQUFJLENBQUMsTUFBRCxJQUFXLE9BQU8sQ0FBUCxFQUFVO0FBQ3ZCLG1CQUFPLEVBQVAsQ0FEdUI7V0FBekI7QUFHQSxjQUFJLFFBQVEsQ0FBUjtjQUNBLFdBQVcsQ0FBWDtjQUNBLFNBQVMsTUFBTSxXQUFXLFNBQVMsSUFBVCxDQUFqQixDQUFULENBWjZCO0FBYWpDLGlCQUFPLFFBQVEsTUFBUixFQUFnQjtBQUNyQixtQkFBTyxVQUFQLElBQXFCLFVBQVUsS0FBVixFQUFpQixLQUFqQixFQUF5QixTQUFTLElBQVQsQ0FBOUMsQ0FEcUI7V0FBdkI7QUFHQSxpQkFBTyxNQUFQLENBaEJpQztTQUFuQztBQWtCQSxlQUFPLE9BQVAsR0FBaUIsS0FBakIsQ0F4QmlCO09BQWxCLENBQUQsQ0F5QkcsUUFBUSxTQUFSLENBekJIIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2NodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4oZnVuY3Rpb24ocHJvY2Vzcykge1xuICB2YXIgYmFzZVNsaWNlID0gcmVxdWlyZSgnLi9fYmFzZVNsaWNlJyksXG4gICAgICBpc0l0ZXJhdGVlQ2FsbCA9IHJlcXVpcmUoJy4vX2lzSXRlcmF0ZWVDYWxsJyksXG4gICAgICB0b0ludGVnZXIgPSByZXF1aXJlKCcuL3RvSW50ZWdlcicpO1xuICB2YXIgbmF0aXZlQ2VpbCA9IE1hdGguY2VpbCxcbiAgICAgIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuICBmdW5jdGlvbiBjaHVuayhhcnJheSwgc2l6ZSwgZ3VhcmQpIHtcbiAgICBpZiAoKGd1YXJkID8gaXNJdGVyYXRlZUNhbGwoYXJyYXksIHNpemUsIGd1YXJkKSA6IHNpemUgPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgIHNpemUgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaXplID0gbmF0aXZlTWF4KHRvSW50ZWdlcihzaXplKSwgMCk7XG4gICAgfVxuICAgIHZhciBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG4gICAgaWYgKCFsZW5ndGggfHwgc2l6ZSA8IDEpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgdmFyIGluZGV4ID0gMCxcbiAgICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgICByZXN1bHQgPSBBcnJheShuYXRpdmVDZWlsKGxlbmd0aCAvIHNpemUpKTtcbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IGJhc2VTbGljZShhcnJheSwgaW5kZXgsIChpbmRleCArPSBzaXplKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgbW9kdWxlLmV4cG9ydHMgPSBjaHVuaztcbn0pKHJlcXVpcmUoJ3Byb2Nlc3MnKSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
