'use strict';

System.register([], function (_export, _context) {
  var baseEachRight, baseFind, baseFindIndex, baseIteratee, isArray;

  function findLast(collection, predicate) {
    predicate = baseIteratee(predicate, 3);
    if (isArray(collection)) {
      var index = baseFindIndex(collection, predicate, true);
      return index > -1 ? collection[index] : undefined;
    }
    return baseFind(collection, predicate, baseEachRight);
  }
  return {
    setters: [],
    execute: function () {
      baseEachRight = require('./_baseEachRight');
      baseFind = require('./_baseFind');
      baseFindIndex = require('./_baseFindIndex');
      baseIteratee = require('./_baseIteratee');
      isArray = require('./isArray');
      module.exports = findLast;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZpbmRMYXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBTUEsV0FBUyxRQUFULENBQWtCLFVBQWxCLEVBQThCLFNBQTlCLEVBQXlDO0FBQ3ZDLGdCQUFZLGFBQWEsU0FBYixFQUF3QixDQUF4QixDQUFaLENBRHVDO0FBRXZDLFFBQUksUUFBUSxVQUFSLENBQUosRUFBeUI7QUFDdkIsVUFBSSxRQUFRLGNBQWMsVUFBZCxFQUEwQixTQUExQixFQUFxQyxJQUFyQyxDQUFSLENBRG1CO0FBRXZCLGFBQU8sUUFBUSxDQUFDLENBQUQsR0FBSyxXQUFXLEtBQVgsQ0FBYixHQUFpQyxTQUFqQyxDQUZnQjtLQUF6QjtBQUlBLFdBQU8sU0FBUyxVQUFULEVBQXFCLFNBQXJCLEVBQWdDLGFBQWhDLENBQVAsQ0FOdUM7R0FBekM7Ozs7QUFMSSxzQkFBZ0IsUUFBUSxrQkFBUjtBQUNoQixpQkFBVyxRQUFRLGFBQVI7QUFDWCxzQkFBZ0IsUUFBUSxrQkFBUjtBQUNoQixxQkFBZSxRQUFRLGlCQUFSO0FBQ2YsZ0JBQVUsUUFBUSxXQUFSO0FBU2QsYUFBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2ZpbmRMYXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUVhY2hSaWdodCA9IHJlcXVpcmUoJy4vX2Jhc2VFYWNoUmlnaHQnKSxcbiAgICBiYXNlRmluZCA9IHJlcXVpcmUoJy4vX2Jhc2VGaW5kJyksXG4gICAgYmFzZUZpbmRJbmRleCA9IHJlcXVpcmUoJy4vX2Jhc2VGaW5kSW5kZXgnKSxcbiAgICBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5mdW5jdGlvbiBmaW5kTGFzdChjb2xsZWN0aW9uLCBwcmVkaWNhdGUpIHtcbiAgcHJlZGljYXRlID0gYmFzZUl0ZXJhdGVlKHByZWRpY2F0ZSwgMyk7XG4gIGlmIChpc0FycmF5KGNvbGxlY3Rpb24pKSB7XG4gICAgdmFyIGluZGV4ID0gYmFzZUZpbmRJbmRleChjb2xsZWN0aW9uLCBwcmVkaWNhdGUsIHRydWUpO1xuICAgIHJldHVybiBpbmRleCA+IC0xID8gY29sbGVjdGlvbltpbmRleF0gOiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGJhc2VGaW5kKGNvbGxlY3Rpb24sIHByZWRpY2F0ZSwgYmFzZUVhY2hSaWdodCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZpbmRMYXN0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
