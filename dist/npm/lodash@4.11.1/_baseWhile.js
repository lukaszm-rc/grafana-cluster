'use strict';

System.register([], function (_export, _context) {
  var baseSlice;

  function baseWhile(array, predicate, isDrop, fromRight) {
    var length = array.length,
        index = fromRight ? length : -1;
    while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
    return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
  }
  return {
    setters: [],
    execute: function () {
      baseSlice = require('./_baseSlice');
      module.exports = baseWhile;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlV2hpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxXQUFTLFNBQVQsQ0FBbUIsS0FBbkIsRUFBMEIsU0FBMUIsRUFBcUMsTUFBckMsRUFBNkMsU0FBN0MsRUFBd0Q7QUFDdEQsUUFBSSxTQUFTLE1BQU0sTUFBTjtRQUNULFFBQVEsWUFBWSxNQUFaLEdBQXFCLENBQUMsQ0FBRCxDQUZxQjtBQUd0RCxXQUFPLENBQUMsWUFBWSxPQUFaLEdBQXNCLEVBQUUsS0FBRixHQUFVLE1BQVYsQ0FBdkIsSUFBNEMsVUFBVSxNQUFNLEtBQU4sQ0FBVixFQUF3QixLQUF4QixFQUErQixLQUEvQixDQUE1QyxFQUFtRixFQUExRjtBQUNBLFdBQU8sU0FBUyxVQUFVLEtBQVYsRUFBa0IsWUFBWSxDQUFaLEdBQWdCLEtBQWhCLEVBQXlCLFlBQVksUUFBUSxDQUFSLEdBQVksTUFBeEIsQ0FBcEQsR0FBdUYsVUFBVSxLQUFWLEVBQWtCLFlBQVksUUFBUSxDQUFSLEdBQVksQ0FBeEIsRUFBNkIsWUFBWSxNQUFaLEdBQXFCLEtBQXJCLENBQXRJLENBSitDO0dBQXhEOzs7O0FBREksa0JBQVksUUFBUSxjQUFSO0FBT2hCLGFBQU8sT0FBUCxHQUFpQixTQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fYmFzZVdoaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZVNsaWNlID0gcmVxdWlyZSgnLi9fYmFzZVNsaWNlJyk7XG5mdW5jdGlvbiBiYXNlV2hpbGUoYXJyYXksIHByZWRpY2F0ZSwgaXNEcm9wLCBmcm9tUmlnaHQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGluZGV4ID0gZnJvbVJpZ2h0ID8gbGVuZ3RoIDogLTE7XG4gIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpICYmIHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHt9XG4gIHJldHVybiBpc0Ryb3AgPyBiYXNlU2xpY2UoYXJyYXksIChmcm9tUmlnaHQgPyAwIDogaW5kZXgpLCAoZnJvbVJpZ2h0ID8gaW5kZXggKyAxIDogbGVuZ3RoKSkgOiBiYXNlU2xpY2UoYXJyYXksIChmcm9tUmlnaHQgPyBpbmRleCArIDEgOiAwKSwgKGZyb21SaWdodCA/IGxlbmd0aCA6IGluZGV4KSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VXaGlsZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
