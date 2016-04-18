'use strict';

System.register([], function (_export, _context) {
  var UNSCOPABLES, ArrayProto;
  return {
    setters: [],
    execute: function () {
      UNSCOPABLES = require('./$.wks')('unscopables');
      ArrayProto = Array.prototype;

      if (ArrayProto[UNSCOPABLES] == undefined) require('./$.hide')(ArrayProto, UNSCOPABLES, {});
      module.exports = function (key) {
        ArrayProto[UNSCOPABLES][key] = true;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5hZGQtdG8tdW5zY29wYWJsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLG9CQUFjLFFBQVEsU0FBUixFQUFtQixhQUFuQjtBQUNkLG1CQUFhLE1BQU0sU0FBTjs7QUFDakIsVUFBSSxXQUFXLFdBQVgsS0FBMkIsU0FBM0IsRUFDRixRQUFRLFVBQVIsRUFBb0IsVUFBcEIsRUFBZ0MsV0FBaEMsRUFBNkMsRUFBN0MsRUFERjtBQUVBLGFBQU8sT0FBUCxHQUFpQixVQUFTLEdBQVQsRUFBYztBQUM3QixtQkFBVyxXQUFYLEVBQXdCLEdBQXhCLElBQStCLElBQS9CLENBRDZCO09BQWQiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy8kLmFkZC10by11bnNjb3BhYmxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi8kLndrcycpKCd1bnNjb3BhYmxlcycpLFxuICAgIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5pZiAoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKVxuICByZXF1aXJlKCcuLyQuaGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSkge1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
