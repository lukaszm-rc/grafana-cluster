'use strict';

System.register([], function (_export, _context) {
  var baseMerge, createAssigner, mergeWith;
  return {
    setters: [],
    execute: function () {
      baseMerge = require('./_baseMerge');
      createAssigner = require('./_createAssigner');
      mergeWith = createAssigner(function (object, source, srcIndex, customizer) {
        baseMerge(object, source, srcIndex, customizer);
      });

      module.exports = mergeWith;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL21lcmdlV2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksa0JBQVksUUFBUSxjQUFSO0FBQ1osdUJBQWlCLFFBQVEsbUJBQVI7QUFDakIsa0JBQVksZUFBZSxVQUFTLE1BQVQsRUFBaUIsTUFBakIsRUFBeUIsUUFBekIsRUFBbUMsVUFBbkMsRUFBK0M7QUFDNUUsa0JBQVUsTUFBVixFQUFrQixNQUFsQixFQUEwQixRQUExQixFQUFvQyxVQUFwQyxFQUQ0RTtPQUEvQzs7QUFHL0IsYUFBTyxPQUFQLEdBQWlCLFNBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL21lcmdlV2l0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VNZXJnZSA9IHJlcXVpcmUoJy4vX2Jhc2VNZXJnZScpLFxuICAgIGNyZWF0ZUFzc2lnbmVyID0gcmVxdWlyZSgnLi9fY3JlYXRlQXNzaWduZXInKTtcbnZhciBtZXJnZVdpdGggPSBjcmVhdGVBc3NpZ25lcihmdW5jdGlvbihvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIpIHtcbiAgYmFzZU1lcmdlKG9iamVjdCwgc291cmNlLCBzcmNJbmRleCwgY3VzdG9taXplcik7XG59KTtcbm1vZHVsZS5leHBvcnRzID0gbWVyZ2VXaXRoO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
