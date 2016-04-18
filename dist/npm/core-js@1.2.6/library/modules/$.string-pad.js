'use strict';

System.register([], function (_export, _context) {
  var toLength, repeat, defined;
  return {
    setters: [],
    execute: function () {
      toLength = require('./$.to-length');
      repeat = require('./$.string-repeat');
      defined = require('./$.defined');

      module.exports = function (that, maxLength, fillString, left) {
        var S = String(defined(that)),
            stringLength = S.length,
            fillStr = fillString === undefined ? ' ' : String(fillString),
            intMaxLength = toLength(maxLength);
        if (intMaxLength <= stringLength) return S;
        if (fillStr == '') fillStr = ' ';
        var fillLen = intMaxLength - stringLength,
            stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
        if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
        return left ? stringFiller + S : S + stringFiller;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnN0cmluZy1wYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGlCQUFXLFFBQVEsZUFBUjtBQUNYLGVBQVMsUUFBUSxtQkFBUjtBQUNULGdCQUFVLFFBQVEsYUFBUjs7QUFDZCxhQUFPLE9BQVAsR0FBaUIsVUFBUyxJQUFULEVBQWUsU0FBZixFQUEwQixVQUExQixFQUFzQyxJQUF0QyxFQUE0QztBQUMzRCxZQUFJLElBQUksT0FBTyxRQUFRLElBQVIsQ0FBUCxDQUFKO1lBQ0EsZUFBZSxFQUFFLE1BQUY7WUFDZixVQUFVLGVBQWUsU0FBZixHQUEyQixHQUEzQixHQUFpQyxPQUFPLFVBQVAsQ0FBakM7WUFDVixlQUFlLFNBQVMsU0FBVCxDQUFmLENBSnVEO0FBSzNELFlBQUksZ0JBQWdCLFlBQWhCLEVBQ0YsT0FBTyxDQUFQLENBREY7QUFFQSxZQUFJLFdBQVcsRUFBWCxFQUNGLFVBQVUsR0FBVixDQURGO0FBRUEsWUFBSSxVQUFVLGVBQWUsWUFBZjtZQUNWLGVBQWUsT0FBTyxJQUFQLENBQVksT0FBWixFQUFxQixLQUFLLElBQUwsQ0FBVSxVQUFVLFFBQVEsTUFBUixDQUF6QyxDQUFmLENBVnVEO0FBVzNELFlBQUksYUFBYSxNQUFiLEdBQXNCLE9BQXRCLEVBQ0YsZUFBZSxhQUFhLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0IsT0FBdEIsQ0FBZixDQURGO0FBRUEsZUFBTyxPQUFPLGVBQWUsQ0FBZixHQUFtQixJQUFJLFlBQUosQ0FiMEI7T0FBNUMiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzLyQuc3RyaW5nLXBhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpLFxuICAgIHJlcGVhdCA9IHJlcXVpcmUoJy4vJC5zdHJpbmctcmVwZWF0JyksXG4gICAgZGVmaW5lZCA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRoYXQsIG1heExlbmd0aCwgZmlsbFN0cmluZywgbGVmdCkge1xuICB2YXIgUyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKSxcbiAgICAgIHN0cmluZ0xlbmd0aCA9IFMubGVuZ3RoLFxuICAgICAgZmlsbFN0ciA9IGZpbGxTdHJpbmcgPT09IHVuZGVmaW5lZCA/ICcgJyA6IFN0cmluZyhmaWxsU3RyaW5nKSxcbiAgICAgIGludE1heExlbmd0aCA9IHRvTGVuZ3RoKG1heExlbmd0aCk7XG4gIGlmIChpbnRNYXhMZW5ndGggPD0gc3RyaW5nTGVuZ3RoKVxuICAgIHJldHVybiBTO1xuICBpZiAoZmlsbFN0ciA9PSAnJylcbiAgICBmaWxsU3RyID0gJyAnO1xuICB2YXIgZmlsbExlbiA9IGludE1heExlbmd0aCAtIHN0cmluZ0xlbmd0aCxcbiAgICAgIHN0cmluZ0ZpbGxlciA9IHJlcGVhdC5jYWxsKGZpbGxTdHIsIE1hdGguY2VpbChmaWxsTGVuIC8gZmlsbFN0ci5sZW5ndGgpKTtcbiAgaWYgKHN0cmluZ0ZpbGxlci5sZW5ndGggPiBmaWxsTGVuKVxuICAgIHN0cmluZ0ZpbGxlciA9IHN0cmluZ0ZpbGxlci5zbGljZSgwLCBmaWxsTGVuKTtcbiAgcmV0dXJuIGxlZnQgPyBzdHJpbmdGaWxsZXIgKyBTIDogUyArIHN0cmluZ0ZpbGxlcjtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
