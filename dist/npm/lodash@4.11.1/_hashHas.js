'use strict';

System.register([], function (_export, _context) {
  var nativeCreate, objectProto, hasOwnProperty;

  function hashHas(hash, key) {
    return nativeCreate ? hash[key] !== undefined : hasOwnProperty.call(hash, key);
  }
  return {
    setters: [],
    execute: function () {
      nativeCreate = require('./_nativeCreate');
      objectProto = Object.prototype;
      hasOwnProperty = objectProto.hasOwnProperty;
      module.exports = hashHas;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19oYXNoSGFzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsV0FBUyxPQUFULENBQWlCLElBQWpCLEVBQXVCLEdBQXZCLEVBQTRCO0FBQzFCLFdBQU8sZUFBZSxLQUFLLEdBQUwsTUFBYyxTQUFkLEdBQTBCLGVBQWUsSUFBZixDQUFvQixJQUFwQixFQUEwQixHQUExQixDQUF6QyxDQURtQjtHQUE1Qjs7OztBQUhJLHFCQUFlLFFBQVEsaUJBQVI7QUFDZixvQkFBYyxPQUFPLFNBQVA7QUFDZCx1QkFBaUIsWUFBWSxjQUFaO0FBSXJCLGFBQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9faGFzaEhhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gaGFzaEhhcyhoYXNoLCBrZXkpIHtcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IGhhc2hba2V5XSAhPT0gdW5kZWZpbmVkIDogaGFzT3duUHJvcGVydHkuY2FsbChoYXNoLCBrZXkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
