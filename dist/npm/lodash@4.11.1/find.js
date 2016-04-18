'use strict';

System.register([], function (_export, _context) {
  var baseEach, baseFind, baseFindIndex, baseIteratee, isArray;

  function find(collection, predicate) {
    predicate = baseIteratee(predicate, 3);
    if (isArray(collection)) {
      var index = baseFindIndex(collection, predicate);
      return index > -1 ? collection[index] : undefined;
    }
    return baseFind(collection, predicate, baseEach);
  }
  return {
    setters: [],
    execute: function () {
      baseEach = require('./_baseEach');
      baseFind = require('./_baseFind');
      baseFindIndex = require('./_baseFindIndex');
      baseIteratee = require('./_baseIteratee');
      isArray = require('./isArray');
      module.exports = find;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZpbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxXQUFTLElBQVQsQ0FBYyxVQUFkLEVBQTBCLFNBQTFCLEVBQXFDO0FBQ25DLGdCQUFZLGFBQWEsU0FBYixFQUF3QixDQUF4QixDQUFaLENBRG1DO0FBRW5DLFFBQUksUUFBUSxVQUFSLENBQUosRUFBeUI7QUFDdkIsVUFBSSxRQUFRLGNBQWMsVUFBZCxFQUEwQixTQUExQixDQUFSLENBRG1CO0FBRXZCLGFBQU8sUUFBUSxDQUFDLENBQUQsR0FBSyxXQUFXLEtBQVgsQ0FBYixHQUFpQyxTQUFqQyxDQUZnQjtLQUF6QjtBQUlBLFdBQU8sU0FBUyxVQUFULEVBQXFCLFNBQXJCLEVBQWdDLFFBQWhDLENBQVAsQ0FObUM7R0FBckM7Ozs7QUFMSSxpQkFBVyxRQUFRLGFBQVI7QUFDWCxpQkFBVyxRQUFRLGFBQVI7QUFDWCxzQkFBZ0IsUUFBUSxrQkFBUjtBQUNoQixxQkFBZSxRQUFRLGlCQUFSO0FBQ2YsZ0JBQVUsUUFBUSxXQUFSO0FBU2QsYUFBTyxPQUFQLEdBQWlCLElBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2ZpbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlRWFjaCA9IHJlcXVpcmUoJy4vX2Jhc2VFYWNoJyksXG4gICAgYmFzZUZpbmQgPSByZXF1aXJlKCcuL19iYXNlRmluZCcpLFxuICAgIGJhc2VGaW5kSW5kZXggPSByZXF1aXJlKCcuL19iYXNlRmluZEluZGV4JyksXG4gICAgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuZnVuY3Rpb24gZmluZChjb2xsZWN0aW9uLCBwcmVkaWNhdGUpIHtcbiAgcHJlZGljYXRlID0gYmFzZUl0ZXJhdGVlKHByZWRpY2F0ZSwgMyk7XG4gIGlmIChpc0FycmF5KGNvbGxlY3Rpb24pKSB7XG4gICAgdmFyIGluZGV4ID0gYmFzZUZpbmRJbmRleChjb2xsZWN0aW9uLCBwcmVkaWNhdGUpO1xuICAgIHJldHVybiBpbmRleCA+IC0xID8gY29sbGVjdGlvbltpbmRleF0gOiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGJhc2VGaW5kKGNvbGxlY3Rpb24sIHByZWRpY2F0ZSwgYmFzZUVhY2gpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmaW5kO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
