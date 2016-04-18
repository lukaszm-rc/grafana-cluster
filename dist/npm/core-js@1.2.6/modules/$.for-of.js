'use strict';

System.register([], function (_export, _context) {
  var ctx, call, isArrayIter, anObject, toLength, getIterFn;
  return {
    setters: [],
    execute: function () {
      ctx = require('./$.ctx');
      call = require('./$.iter-call');
      isArrayIter = require('./$.is-array-iter');
      anObject = require('./$.an-object');
      toLength = require('./$.to-length');
      getIterFn = require('./core.get-iterator-method');

      module.exports = function (iterable, entries, fn, that) {
        var iterFn = getIterFn(iterable),
            f = ctx(fn, that, entries ? 2 : 1),
            index = 0,
            length,
            step,
            iterator;
        if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
        if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
          entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
        } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
          call(iterator, f, step.value, entries);
        }
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5mb3Itb2YuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLFlBQU0sUUFBUSxTQUFSO0FBQ04sYUFBTyxRQUFRLGVBQVI7QUFDUCxvQkFBYyxRQUFRLG1CQUFSO0FBQ2QsaUJBQVcsUUFBUSxlQUFSO0FBQ1gsaUJBQVcsUUFBUSxlQUFSO0FBQ1gsa0JBQVksUUFBUSw0QkFBUjs7QUFDaEIsYUFBTyxPQUFQLEdBQWlCLFVBQVMsUUFBVCxFQUFtQixPQUFuQixFQUE0QixFQUE1QixFQUFnQyxJQUFoQyxFQUFzQztBQUNyRCxZQUFJLFNBQVMsVUFBVSxRQUFWLENBQVQ7WUFDQSxJQUFJLElBQUksRUFBSixFQUFRLElBQVIsRUFBYyxVQUFVLENBQVYsR0FBYyxDQUFkLENBQWxCO1lBQ0EsUUFBUSxDQUFSO1lBQ0EsTUFISjtZQUlJLElBSko7WUFLSSxRQUxKLENBRHFEO0FBT3JELFlBQUksT0FBTyxNQUFQLElBQWlCLFVBQWpCLEVBQ0YsTUFBTSxVQUFVLFdBQVcsbUJBQVgsQ0FBaEIsQ0FERjtBQUVBLFlBQUksWUFBWSxNQUFaLENBQUosRUFDRSxLQUFLLFNBQVMsU0FBUyxTQUFTLE1BQVQsQ0FBbEIsRUFBb0MsU0FBUyxLQUFULEVBQWdCLE9BQXpELEVBQWtFO0FBQ2hFLG9CQUFVLEVBQUUsU0FBUyxPQUFPLFNBQVMsS0FBVCxDQUFQLENBQVQsQ0FBaUMsQ0FBakMsQ0FBRixFQUF1QyxLQUFLLENBQUwsQ0FBdkMsQ0FBVixHQUE0RCxFQUFFLFNBQVMsS0FBVCxDQUFGLENBQTVELENBRGdFO1NBQWxFLE1BSUEsS0FBSyxXQUFXLE9BQU8sSUFBUCxDQUFZLFFBQVosQ0FBWCxFQUFrQyxDQUFDLENBQUMsT0FBTyxTQUFTLElBQVQsRUFBUCxDQUFELENBQXlCLElBQXpCLEdBQWlDO0FBQ3ZFLGVBQUssUUFBTCxFQUFlLENBQWYsRUFBa0IsS0FBSyxLQUFMLEVBQVksT0FBOUIsRUFEdUU7U0FBekU7T0FkYSIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzLyQuZm9yLW9mLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgY3R4ID0gcmVxdWlyZSgnLi8kLmN0eCcpLFxuICAgIGNhbGwgPSByZXF1aXJlKCcuLyQuaXRlci1jYWxsJyksXG4gICAgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuLyQuaXMtYXJyYXktaXRlcicpLFxuICAgIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpLFxuICAgIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpLFxuICAgIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCkge1xuICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKGl0ZXJhYmxlKSxcbiAgICAgIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSksXG4gICAgICBpbmRleCA9IDAsXG4gICAgICBsZW5ndGgsXG4gICAgICBzdGVwLFxuICAgICAgaXRlcmF0b3I7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpXG4gICAgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIGlmIChpc0FycmF5SXRlcihpdGVyRm4pKVxuICAgIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICB9XG4gIGVsc2VcbiAgICBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICkge1xuICAgICAgY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
