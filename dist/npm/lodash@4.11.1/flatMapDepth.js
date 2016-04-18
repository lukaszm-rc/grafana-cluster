'use strict';

System.register([], function (_export, _context) {
  var baseFlatten, map, toInteger;

  function flatMapDepth(collection, iteratee, depth) {
    depth = depth === undefined ? 1 : toInteger(depth);
    return baseFlatten(map(collection, iteratee), depth);
  }
  return {
    setters: [],
    execute: function () {
      baseFlatten = require('./_baseFlatten');
      map = require('./map');
      toInteger = require('./toInteger');
      module.exports = flatMapDepth;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZsYXRNYXBEZXB0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLFdBQVMsWUFBVCxDQUFzQixVQUF0QixFQUFrQyxRQUFsQyxFQUE0QyxLQUE1QyxFQUFtRDtBQUNqRCxZQUFRLFVBQVUsU0FBVixHQUFzQixDQUF0QixHQUEwQixVQUFVLEtBQVYsQ0FBMUIsQ0FEeUM7QUFFakQsV0FBTyxZQUFZLElBQUksVUFBSixFQUFnQixRQUFoQixDQUFaLEVBQXVDLEtBQXZDLENBQVAsQ0FGaUQ7R0FBbkQ7Ozs7QUFISSxvQkFBYyxRQUFRLGdCQUFSO0FBQ2QsWUFBTSxRQUFRLE9BQVI7QUFDTixrQkFBWSxRQUFRLGFBQVI7QUFLaEIsYUFBTyxPQUFQLEdBQWlCLFlBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2ZsYXRNYXBEZXB0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VGbGF0dGVuID0gcmVxdWlyZSgnLi9fYmFzZUZsYXR0ZW4nKSxcbiAgICBtYXAgPSByZXF1aXJlKCcuL21hcCcpLFxuICAgIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vdG9JbnRlZ2VyJyk7XG5mdW5jdGlvbiBmbGF0TWFwRGVwdGgoY29sbGVjdGlvbiwgaXRlcmF0ZWUsIGRlcHRoKSB7XG4gIGRlcHRoID0gZGVwdGggPT09IHVuZGVmaW5lZCA/IDEgOiB0b0ludGVnZXIoZGVwdGgpO1xuICByZXR1cm4gYmFzZUZsYXR0ZW4obWFwKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSwgZGVwdGgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmbGF0TWFwRGVwdGg7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
