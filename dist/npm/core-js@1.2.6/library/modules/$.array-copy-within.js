/* */
'use strict';

System.register([], function (_export, _context) {
  var toObject, toIndex, toLength;
  return {
    setters: [],
    execute: function () {
      toObject = require('./$.to-object');
      toIndex = require('./$.to-index');
      toLength = require('./$.to-length');

      module.exports = [].copyWithin || function copyWithin(target, start) {
        var O = toObject(this),
            len = toLength(O.length),
            to = toIndex(target, len),
            from = toIndex(start, len),
            $$ = arguments,
            end = $$.length > 2 ? $$[2] : undefined,
            count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to),
            inc = 1;
        if (from < to && to < from + count) {
          inc = -1;
          from += count - 1;
          to += count - 1;
        }
        while (count-- > 0) {
          if (from in O) O[to] = O[from];else delete O[to];
          to += inc;
          from += inc;
        }
        return O;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmFycmF5LWNvcHktd2l0aGluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQUNJLGlCQUFXLFFBQVEsZUFBUjtBQUNYLGdCQUFVLFFBQVEsY0FBUjtBQUNWLGlCQUFXLFFBQVEsZUFBUjs7QUFDZixhQUFPLE9BQVAsR0FBaUIsR0FBRyxVQUFILElBQWlCLFNBQVMsVUFBVCxDQUFvQixNQUFwQixFQUE0QixLQUE1QixFQUFtQztBQUNuRSxZQUFJLElBQUksU0FBUyxJQUFULENBQUo7WUFDQSxNQUFNLFNBQVMsRUFBRSxNQUFGLENBQWY7WUFDQSxLQUFLLFFBQVEsTUFBUixFQUFnQixHQUFoQixDQUFMO1lBQ0EsT0FBTyxRQUFRLEtBQVIsRUFBZSxHQUFmLENBQVA7WUFDQSxLQUFLLFNBQUw7WUFDQSxNQUFNLEdBQUcsTUFBSCxHQUFZLENBQVosR0FBZ0IsR0FBRyxDQUFILENBQWhCLEdBQXdCLFNBQXhCO1lBQ04sUUFBUSxLQUFLLEdBQUwsQ0FBUyxDQUFDLFFBQVEsU0FBUixHQUFvQixHQUFwQixHQUEwQixRQUFRLEdBQVIsRUFBYSxHQUFiLENBQTFCLENBQUQsR0FBZ0QsSUFBaEQsRUFBc0QsTUFBTSxFQUFOLENBQXZFO1lBQ0EsTUFBTSxDQUFOLENBUitEO0FBU25FLFlBQUksT0FBTyxFQUFQLElBQWEsS0FBSyxPQUFPLEtBQVAsRUFBYztBQUNsQyxnQkFBTSxDQUFDLENBQUQsQ0FENEI7QUFFbEMsa0JBQVEsUUFBUSxDQUFSLENBRjBCO0FBR2xDLGdCQUFNLFFBQVEsQ0FBUixDQUg0QjtTQUFwQztBQUtBLGVBQU8sVUFBVSxDQUFWLEVBQWE7QUFDbEIsY0FBSSxRQUFRLENBQVIsRUFDRixFQUFFLEVBQUYsSUFBUSxFQUFFLElBQUYsQ0FBUixDQURGLEtBR0UsT0FBTyxFQUFFLEVBQUYsQ0FBUCxDQUhGO0FBSUEsZ0JBQU0sR0FBTixDQUxrQjtBQU1sQixrQkFBUSxHQUFSLENBTmtCO1NBQXBCO0FBUUEsZUFBTyxDQUFQLENBdEJtRTtPQUFuQyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvJC5hcnJheS1jb3B5LXdpdGhpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuJ3VzZSBzdHJpY3QnO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpLFxuICAgIHRvSW5kZXggPSByZXF1aXJlKCcuLyQudG8taW5kZXgnKSxcbiAgICB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vJC50by1sZW5ndGgnKTtcbm1vZHVsZS5leHBvcnRzID0gW10uY29weVdpdGhpbiB8fCBmdW5jdGlvbiBjb3B5V2l0aGluKHRhcmdldCwgc3RhcnQpIHtcbiAgdmFyIE8gPSB0b09iamVjdCh0aGlzKSxcbiAgICAgIGxlbiA9IHRvTGVuZ3RoKE8ubGVuZ3RoKSxcbiAgICAgIHRvID0gdG9JbmRleCh0YXJnZXQsIGxlbiksXG4gICAgICBmcm9tID0gdG9JbmRleChzdGFydCwgbGVuKSxcbiAgICAgICQkID0gYXJndW1lbnRzLFxuICAgICAgZW5kID0gJCQubGVuZ3RoID4gMiA/ICQkWzJdIDogdW5kZWZpbmVkLFxuICAgICAgY291bnQgPSBNYXRoLm1pbigoZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB0b0luZGV4KGVuZCwgbGVuKSkgLSBmcm9tLCBsZW4gLSB0byksXG4gICAgICBpbmMgPSAxO1xuICBpZiAoZnJvbSA8IHRvICYmIHRvIDwgZnJvbSArIGNvdW50KSB7XG4gICAgaW5jID0gLTE7XG4gICAgZnJvbSArPSBjb3VudCAtIDE7XG4gICAgdG8gKz0gY291bnQgLSAxO1xuICB9XG4gIHdoaWxlIChjb3VudC0tID4gMCkge1xuICAgIGlmIChmcm9tIGluIE8pXG4gICAgICBPW3RvXSA9IE9bZnJvbV07XG4gICAgZWxzZVxuICAgICAgZGVsZXRlIE9bdG9dO1xuICAgIHRvICs9IGluYztcbiAgICBmcm9tICs9IGluYztcbiAgfVxuICByZXR1cm4gTztcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
