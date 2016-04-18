'use strict';

System.register([], function (_export, _context) {
  var createWrapper, CURRY_FLAG;

  function curry(func, arity, guard) {
    arity = guard ? undefined : arity;
    var result = createWrapper(func, CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
    result.placeholder = curry.placeholder;
    return result;
  }
  return {
    setters: [],
    execute: function () {
      createWrapper = require('./_createWrapper');
      CURRY_FLAG = 8;
      curry.placeholder = {};
      module.exports = curry;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2N1cnJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxLQUFULENBQWUsSUFBZixFQUFxQixLQUFyQixFQUE0QixLQUE1QixFQUFtQztBQUNqQyxZQUFRLFFBQVEsU0FBUixHQUFvQixLQUFwQixDQUR5QjtBQUVqQyxRQUFJLFNBQVMsY0FBYyxJQUFkLEVBQW9CLFVBQXBCLEVBQWdDLFNBQWhDLEVBQTJDLFNBQTNDLEVBQXNELFNBQXRELEVBQWlFLFNBQWpFLEVBQTRFLFNBQTVFLEVBQXVGLEtBQXZGLENBQVQsQ0FGNkI7QUFHakMsV0FBTyxXQUFQLEdBQXFCLE1BQU0sV0FBTixDQUhZO0FBSWpDLFdBQU8sTUFBUCxDQUppQztHQUFuQzs7OztBQUZJLHNCQUFnQixRQUFRLGtCQUFSO0FBQ2hCLG1CQUFhO0FBT2pCLFlBQU0sV0FBTixHQUFvQixFQUFwQjtBQUNBLGFBQU8sT0FBUCxHQUFpQixLQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9jdXJyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGNyZWF0ZVdyYXBwZXIgPSByZXF1aXJlKCcuL19jcmVhdGVXcmFwcGVyJyk7XG52YXIgQ1VSUllfRkxBRyA9IDg7XG5mdW5jdGlvbiBjdXJyeShmdW5jLCBhcml0eSwgZ3VhcmQpIHtcbiAgYXJpdHkgPSBndWFyZCA/IHVuZGVmaW5lZCA6IGFyaXR5O1xuICB2YXIgcmVzdWx0ID0gY3JlYXRlV3JhcHBlcihmdW5jLCBDVVJSWV9GTEFHLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgYXJpdHkpO1xuICByZXN1bHQucGxhY2Vob2xkZXIgPSBjdXJyeS5wbGFjZWhvbGRlcjtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmN1cnJ5LnBsYWNlaG9sZGVyID0ge307XG5tb2R1bGUuZXhwb3J0cyA9IGN1cnJ5O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
