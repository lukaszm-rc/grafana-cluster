'use strict';

System.register([], function (_export, _context) {
  var baseIsEqual;

  function isEqualWith(value, other, customizer) {
    customizer = typeof customizer == 'function' ? customizer : undefined;
    var result = customizer ? customizer(value, other) : undefined;
    return result === undefined ? baseIsEqual(value, other, customizer) : !!result;
  }
  return {
    setters: [],
    execute: function () {
      baseIsEqual = require('./_baseIsEqual');
      module.exports = isEqualWith;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzRXF1YWxXaXRoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsV0FBUyxXQUFULENBQXFCLEtBQXJCLEVBQTRCLEtBQTVCLEVBQW1DLFVBQW5DLEVBQStDO0FBQzdDLGlCQUFhLE9BQU8sVUFBUCxJQUFxQixVQUFyQixHQUFrQyxVQUFsQyxHQUErQyxTQUEvQyxDQURnQztBQUU3QyxRQUFJLFNBQVMsYUFBYSxXQUFXLEtBQVgsRUFBa0IsS0FBbEIsQ0FBYixHQUF3QyxTQUF4QyxDQUZnQztBQUc3QyxXQUFPLFdBQVcsU0FBWCxHQUF1QixZQUFZLEtBQVosRUFBbUIsS0FBbkIsRUFBMEIsVUFBMUIsQ0FBdkIsR0FBK0QsQ0FBQyxDQUFDLE1BQUQsQ0FIMUI7R0FBL0M7Ozs7QUFESSxvQkFBYyxRQUFRLGdCQUFSO0FBTWxCLGFBQU8sT0FBUCxHQUFpQixXQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9pc0VxdWFsV2l0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKTtcbmZ1bmN0aW9uIGlzRXF1YWxXaXRoKHZhbHVlLCBvdGhlciwgY3VzdG9taXplcikge1xuICBjdXN0b21pemVyID0gdHlwZW9mIGN1c3RvbWl6ZXIgPT0gJ2Z1bmN0aW9uJyA/IGN1c3RvbWl6ZXIgOiB1bmRlZmluZWQ7XG4gIHZhciByZXN1bHQgPSBjdXN0b21pemVyID8gY3VzdG9taXplcih2YWx1ZSwgb3RoZXIpIDogdW5kZWZpbmVkO1xuICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGN1c3RvbWl6ZXIpIDogISFyZXN1bHQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGlzRXF1YWxXaXRoO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
