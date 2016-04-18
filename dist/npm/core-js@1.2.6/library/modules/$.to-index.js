'use strict';

System.register([], function (_export, _context) {
  var toInteger, max, min;
  return {
    setters: [],
    execute: function () {
      toInteger = require('./$.to-integer');
      max = Math.max;
      min = Math.min;

      module.exports = function (index, length) {
        index = toInteger(index);
        return index < 0 ? max(index + length, 0) : min(index, length);
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnRvLWluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxrQkFBWSxRQUFRLGdCQUFSO0FBQ1osWUFBTSxLQUFLLEdBQUw7QUFDTixZQUFNLEtBQUssR0FBTDs7QUFDVixhQUFPLE9BQVAsR0FBaUIsVUFBUyxLQUFULEVBQWdCLE1BQWhCLEVBQXdCO0FBQ3ZDLGdCQUFRLFVBQVUsS0FBVixDQUFSLENBRHVDO0FBRXZDLGVBQU8sUUFBUSxDQUFSLEdBQVksSUFBSSxRQUFRLE1BQVIsRUFBZ0IsQ0FBcEIsQ0FBWixHQUFxQyxJQUFJLEtBQUosRUFBVyxNQUFYLENBQXJDLENBRmdDO09BQXhCIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnRvLWluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi8kLnRvLWludGVnZXInKSxcbiAgICBtYXggPSBNYXRoLm1heCxcbiAgICBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
