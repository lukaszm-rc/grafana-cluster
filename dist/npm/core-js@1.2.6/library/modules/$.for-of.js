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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmZvci1vZi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksWUFBTSxRQUFRLFNBQVI7QUFDTixhQUFPLFFBQVEsZUFBUjtBQUNQLG9CQUFjLFFBQVEsbUJBQVI7QUFDZCxpQkFBVyxRQUFRLGVBQVI7QUFDWCxpQkFBVyxRQUFRLGVBQVI7QUFDWCxrQkFBWSxRQUFRLDRCQUFSOztBQUNoQixhQUFPLE9BQVAsR0FBaUIsVUFBUyxRQUFULEVBQW1CLE9BQW5CLEVBQTRCLEVBQTVCLEVBQWdDLElBQWhDLEVBQXNDO0FBQ3JELFlBQUksU0FBUyxVQUFVLFFBQVYsQ0FBVDtZQUNBLElBQUksSUFBSSxFQUFKLEVBQVEsSUFBUixFQUFjLFVBQVUsQ0FBVixHQUFjLENBQWQsQ0FBbEI7WUFDQSxRQUFRLENBQVI7WUFDQSxNQUhKO1lBSUksSUFKSjtZQUtJLFFBTEosQ0FEcUQ7QUFPckQsWUFBSSxPQUFPLE1BQVAsSUFBaUIsVUFBakIsRUFDRixNQUFNLFVBQVUsV0FBVyxtQkFBWCxDQUFoQixDQURGO0FBRUEsWUFBSSxZQUFZLE1BQVosQ0FBSixFQUNFLEtBQUssU0FBUyxTQUFTLFNBQVMsTUFBVCxDQUFsQixFQUFvQyxTQUFTLEtBQVQsRUFBZ0IsT0FBekQsRUFBa0U7QUFDaEUsb0JBQVUsRUFBRSxTQUFTLE9BQU8sU0FBUyxLQUFULENBQVAsQ0FBVCxDQUFpQyxDQUFqQyxDQUFGLEVBQXVDLEtBQUssQ0FBTCxDQUF2QyxDQUFWLEdBQTRELEVBQUUsU0FBUyxLQUFULENBQUYsQ0FBNUQsQ0FEZ0U7U0FBbEUsTUFJQSxLQUFLLFdBQVcsT0FBTyxJQUFQLENBQVksUUFBWixDQUFYLEVBQWtDLENBQUMsQ0FBQyxPQUFPLFNBQVMsSUFBVCxFQUFQLENBQUQsQ0FBeUIsSUFBekIsR0FBaUM7QUFDdkUsZUFBSyxRQUFMLEVBQWUsQ0FBZixFQUFrQixLQUFLLEtBQUwsRUFBWSxPQUE5QixFQUR1RTtTQUF6RTtPQWRhIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmZvci1vZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGN0eCA9IHJlcXVpcmUoJy4vJC5jdHgnKSxcbiAgICBjYWxsID0gcmVxdWlyZSgnLi8kLml0ZXItY2FsbCcpLFxuICAgIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi8kLmlzLWFycmF5LWl0ZXInKSxcbiAgICBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKSxcbiAgICB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vJC50by1sZW5ndGgnKSxcbiAgICBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQpIHtcbiAgdmFyIGl0ZXJGbiA9IGdldEl0ZXJGbihpdGVyYWJsZSksXG4gICAgICBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpLFxuICAgICAgaW5kZXggPSAwLFxuICAgICAgbGVuZ3RoLFxuICAgICAgc3RlcCxcbiAgICAgIGl0ZXJhdG9yO1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKVxuICAgIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSlcbiAgICBmb3IgKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgfVxuICBlbHNlXG4gICAgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApIHtcbiAgICAgIGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
