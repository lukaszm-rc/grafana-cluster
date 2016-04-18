'use strict';

System.register([], function (_export, _context) {
  var baseMerge, createAssigner, merge;
  return {
    setters: [],
    execute: function () {
      baseMerge = require('./_baseMerge');
      createAssigner = require('./_createAssigner');
      merge = createAssigner(function (object, source, srcIndex) {
        baseMerge(object, source, srcIndex);
      });

      module.exports = merge;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL21lcmdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxrQkFBWSxRQUFRLGNBQVI7QUFDWix1QkFBaUIsUUFBUSxtQkFBUjtBQUNqQixjQUFRLGVBQWUsVUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCLFFBQXpCLEVBQW1DO0FBQzVELGtCQUFVLE1BQVYsRUFBa0IsTUFBbEIsRUFBMEIsUUFBMUIsRUFENEQ7T0FBbkM7O0FBRzNCLGFBQU8sT0FBUCxHQUFpQixLQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9tZXJnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VNZXJnZSA9IHJlcXVpcmUoJy4vX2Jhc2VNZXJnZScpLFxuICAgIGNyZWF0ZUFzc2lnbmVyID0gcmVxdWlyZSgnLi9fY3JlYXRlQXNzaWduZXInKTtcbnZhciBtZXJnZSA9IGNyZWF0ZUFzc2lnbmVyKGZ1bmN0aW9uKG9iamVjdCwgc291cmNlLCBzcmNJbmRleCkge1xuICBiYXNlTWVyZ2Uob2JqZWN0LCBzb3VyY2UsIHNyY0luZGV4KTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBtZXJnZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
