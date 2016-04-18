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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5zdHJpbmctcGFkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxpQkFBVyxRQUFRLGVBQVI7QUFDWCxlQUFTLFFBQVEsbUJBQVI7QUFDVCxnQkFBVSxRQUFRLGFBQVI7O0FBQ2QsYUFBTyxPQUFQLEdBQWlCLFVBQVMsSUFBVCxFQUFlLFNBQWYsRUFBMEIsVUFBMUIsRUFBc0MsSUFBdEMsRUFBNEM7QUFDM0QsWUFBSSxJQUFJLE9BQU8sUUFBUSxJQUFSLENBQVAsQ0FBSjtZQUNBLGVBQWUsRUFBRSxNQUFGO1lBQ2YsVUFBVSxlQUFlLFNBQWYsR0FBMkIsR0FBM0IsR0FBaUMsT0FBTyxVQUFQLENBQWpDO1lBQ1YsZUFBZSxTQUFTLFNBQVQsQ0FBZixDQUp1RDtBQUszRCxZQUFJLGdCQUFnQixZQUFoQixFQUNGLE9BQU8sQ0FBUCxDQURGO0FBRUEsWUFBSSxXQUFXLEVBQVgsRUFDRixVQUFVLEdBQVYsQ0FERjtBQUVBLFlBQUksVUFBVSxlQUFlLFlBQWY7WUFDVixlQUFlLE9BQU8sSUFBUCxDQUFZLE9BQVosRUFBcUIsS0FBSyxJQUFMLENBQVUsVUFBVSxRQUFRLE1BQVIsQ0FBekMsQ0FBZixDQVZ1RDtBQVczRCxZQUFJLGFBQWEsTUFBYixHQUFzQixPQUF0QixFQUNGLGVBQWUsYUFBYSxLQUFiLENBQW1CLENBQW5CLEVBQXNCLE9BQXRCLENBQWYsQ0FERjtBQUVBLGVBQU8sT0FBTyxlQUFlLENBQWYsR0FBbUIsSUFBSSxZQUFKLENBYjBCO09BQTVDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5zdHJpbmctcGFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJyksXG4gICAgcmVwZWF0ID0gcmVxdWlyZSgnLi8kLnN0cmluZy1yZXBlYXQnKSxcbiAgICBkZWZpbmVkID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGhhdCwgbWF4TGVuZ3RoLCBmaWxsU3RyaW5nLCBsZWZ0KSB7XG4gIHZhciBTID0gU3RyaW5nKGRlZmluZWQodGhhdCkpLFxuICAgICAgc3RyaW5nTGVuZ3RoID0gUy5sZW5ndGgsXG4gICAgICBmaWxsU3RyID0gZmlsbFN0cmluZyA9PT0gdW5kZWZpbmVkID8gJyAnIDogU3RyaW5nKGZpbGxTdHJpbmcpLFxuICAgICAgaW50TWF4TGVuZ3RoID0gdG9MZW5ndGgobWF4TGVuZ3RoKTtcbiAgaWYgKGludE1heExlbmd0aCA8PSBzdHJpbmdMZW5ndGgpXG4gICAgcmV0dXJuIFM7XG4gIGlmIChmaWxsU3RyID09ICcnKVxuICAgIGZpbGxTdHIgPSAnICc7XG4gIHZhciBmaWxsTGVuID0gaW50TWF4TGVuZ3RoIC0gc3RyaW5nTGVuZ3RoLFxuICAgICAgc3RyaW5nRmlsbGVyID0gcmVwZWF0LmNhbGwoZmlsbFN0ciwgTWF0aC5jZWlsKGZpbGxMZW4gLyBmaWxsU3RyLmxlbmd0aCkpO1xuICBpZiAoc3RyaW5nRmlsbGVyLmxlbmd0aCA+IGZpbGxMZW4pXG4gICAgc3RyaW5nRmlsbGVyID0gc3RyaW5nRmlsbGVyLnNsaWNlKDAsIGZpbGxMZW4pO1xuICByZXR1cm4gbGVmdCA/IHN0cmluZ0ZpbGxlciArIFMgOiBTICsgc3RyaW5nRmlsbGVyO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
