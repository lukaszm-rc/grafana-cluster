'use strict';

System.register([], function (_export, _context) {
  var baseFlatten, baseOrderBy, isArray, isFlattenableIteratee, isIterateeCall, rest, sortBy;
  return {
    setters: [],
    execute: function () {
      baseFlatten = require('./_baseFlatten');
      baseOrderBy = require('./_baseOrderBy');
      isArray = require('./isArray');
      isFlattenableIteratee = require('./_isFlattenableIteratee');
      isIterateeCall = require('./_isIterateeCall');
      rest = require('./rest');
      sortBy = rest(function (collection, iteratees) {
        if (collection == null) {
          return [];
        }
        var length = iteratees.length;
        if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
          iteratees = [];
        } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
          iteratees = [iteratees[0]];
        }
        iteratees = iteratees.length == 1 && isArray(iteratees[0]) ? iteratees[0] : baseFlatten(iteratees, 1, isFlattenableIteratee);
        return baseOrderBy(collection, iteratees, []);
      });

      module.exports = sortBy;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3NvcnRCeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksb0JBQWMsUUFBUSxnQkFBUjtBQUNkLG9CQUFjLFFBQVEsZ0JBQVI7QUFDZCxnQkFBVSxRQUFRLFdBQVI7QUFDViw4QkFBd0IsUUFBUSwwQkFBUjtBQUN4Qix1QkFBaUIsUUFBUSxtQkFBUjtBQUNqQixhQUFPLFFBQVEsUUFBUjtBQUNQLGVBQVMsS0FBSyxVQUFTLFVBQVQsRUFBcUIsU0FBckIsRUFBZ0M7QUFDaEQsWUFBSSxjQUFjLElBQWQsRUFBb0I7QUFDdEIsaUJBQU8sRUFBUCxDQURzQjtTQUF4QjtBQUdBLFlBQUksU0FBUyxVQUFVLE1BQVYsQ0FKbUM7QUFLaEQsWUFBSSxTQUFTLENBQVQsSUFBYyxlQUFlLFVBQWYsRUFBMkIsVUFBVSxDQUFWLENBQTNCLEVBQXlDLFVBQVUsQ0FBVixDQUF6QyxDQUFkLEVBQXNFO0FBQ3hFLHNCQUFZLEVBQVosQ0FEd0U7U0FBMUUsTUFFTyxJQUFJLFNBQVMsQ0FBVCxJQUFjLGVBQWUsVUFBVSxDQUFWLENBQWYsRUFBNkIsVUFBVSxDQUFWLENBQTdCLEVBQTJDLFVBQVUsQ0FBVixDQUEzQyxDQUFkLEVBQXdFO0FBQ2pGLHNCQUFZLENBQUMsVUFBVSxDQUFWLENBQUQsQ0FBWixDQURpRjtTQUE1RTtBQUdQLG9CQUFZLFNBQUMsQ0FBVSxNQUFWLElBQW9CLENBQXBCLElBQXlCLFFBQVEsVUFBVSxDQUFWLENBQVIsQ0FBekIsR0FBa0QsVUFBVSxDQUFWLENBQW5ELEdBQWtFLFlBQVksU0FBWixFQUF1QixDQUF2QixFQUEwQixxQkFBMUIsQ0FBbEUsQ0FWb0M7QUFXaEQsZUFBTyxZQUFZLFVBQVosRUFBd0IsU0FBeEIsRUFBbUMsRUFBbkMsQ0FBUCxDQVhnRDtPQUFoQzs7QUFhbEIsYUFBTyxPQUFQLEdBQWlCLE1BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3NvcnRCeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VGbGF0dGVuID0gcmVxdWlyZSgnLi9fYmFzZUZsYXR0ZW4nKSxcbiAgICBiYXNlT3JkZXJCeSA9IHJlcXVpcmUoJy4vX2Jhc2VPcmRlckJ5JyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzRmxhdHRlbmFibGVJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2lzRmxhdHRlbmFibGVJdGVyYXRlZScpLFxuICAgIGlzSXRlcmF0ZWVDYWxsID0gcmVxdWlyZSgnLi9faXNJdGVyYXRlZUNhbGwnKSxcbiAgICByZXN0ID0gcmVxdWlyZSgnLi9yZXN0Jyk7XG52YXIgc29ydEJ5ID0gcmVzdChmdW5jdGlvbihjb2xsZWN0aW9uLCBpdGVyYXRlZXMpIHtcbiAgaWYgKGNvbGxlY3Rpb24gPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gaXRlcmF0ZWVzLmxlbmd0aDtcbiAgaWYgKGxlbmd0aCA+IDEgJiYgaXNJdGVyYXRlZUNhbGwoY29sbGVjdGlvbiwgaXRlcmF0ZWVzWzBdLCBpdGVyYXRlZXNbMV0pKSB7XG4gICAgaXRlcmF0ZWVzID0gW107XG4gIH0gZWxzZSBpZiAobGVuZ3RoID4gMiAmJiBpc0l0ZXJhdGVlQ2FsbChpdGVyYXRlZXNbMF0sIGl0ZXJhdGVlc1sxXSwgaXRlcmF0ZWVzWzJdKSkge1xuICAgIGl0ZXJhdGVlcyA9IFtpdGVyYXRlZXNbMF1dO1xuICB9XG4gIGl0ZXJhdGVlcyA9IChpdGVyYXRlZXMubGVuZ3RoID09IDEgJiYgaXNBcnJheShpdGVyYXRlZXNbMF0pKSA/IGl0ZXJhdGVlc1swXSA6IGJhc2VGbGF0dGVuKGl0ZXJhdGVlcywgMSwgaXNGbGF0dGVuYWJsZUl0ZXJhdGVlKTtcbiAgcmV0dXJuIGJhc2VPcmRlckJ5KGNvbGxlY3Rpb24sIGl0ZXJhdGVlcywgW10pO1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHNvcnRCeTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
