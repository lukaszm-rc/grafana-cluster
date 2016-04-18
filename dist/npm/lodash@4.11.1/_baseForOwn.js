'use strict';

System.register([], function (_export, _context) {
  var baseFor, keys;

  function baseForOwn(object, iteratee) {
    return object && baseFor(object, iteratee, keys);
  }
  return {
    setters: [],
    execute: function () {
      baseFor = require('./_baseFor');
      keys = require('./keys');
      module.exports = baseForOwn;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlRm9yT3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxVQUFULENBQW9CLE1BQXBCLEVBQTRCLFFBQTVCLEVBQXNDO0FBQ3BDLFdBQU8sVUFBVSxRQUFRLE1BQVIsRUFBZ0IsUUFBaEIsRUFBMEIsSUFBMUIsQ0FBVixDQUQ2QjtHQUF0Qzs7OztBQUZJLGdCQUFVLFFBQVEsWUFBUjtBQUNWLGFBQU8sUUFBUSxRQUFSO0FBSVgsYUFBTyxPQUFQLEdBQWlCLFVBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19iYXNlRm9yT3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUZvciA9IHJlcXVpcmUoJy4vX2Jhc2VGb3InKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5mdW5jdGlvbiBiYXNlRm9yT3duKG9iamVjdCwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBiYXNlRm9yKG9iamVjdCwgaXRlcmF0ZWUsIGtleXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRm9yT3duO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
