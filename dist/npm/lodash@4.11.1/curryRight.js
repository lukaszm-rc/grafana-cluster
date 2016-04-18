'use strict';

System.register([], function (_export, _context) {
  var createWrapper, CURRY_RIGHT_FLAG;

  function curryRight(func, arity, guard) {
    arity = guard ? undefined : arity;
    var result = createWrapper(func, CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
    result.placeholder = curryRight.placeholder;
    return result;
  }
  return {
    setters: [],
    execute: function () {
      createWrapper = require('./_createWrapper');
      CURRY_RIGHT_FLAG = 16;
      curryRight.placeholder = {};
      module.exports = curryRight;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2N1cnJ5UmlnaHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLFVBQVQsQ0FBb0IsSUFBcEIsRUFBMEIsS0FBMUIsRUFBaUMsS0FBakMsRUFBd0M7QUFDdEMsWUFBUSxRQUFRLFNBQVIsR0FBb0IsS0FBcEIsQ0FEOEI7QUFFdEMsUUFBSSxTQUFTLGNBQWMsSUFBZCxFQUFvQixnQkFBcEIsRUFBc0MsU0FBdEMsRUFBaUQsU0FBakQsRUFBNEQsU0FBNUQsRUFBdUUsU0FBdkUsRUFBa0YsU0FBbEYsRUFBNkYsS0FBN0YsQ0FBVCxDQUZrQztBQUd0QyxXQUFPLFdBQVAsR0FBcUIsV0FBVyxXQUFYLENBSGlCO0FBSXRDLFdBQU8sTUFBUCxDQUpzQztHQUF4Qzs7OztBQUZJLHNCQUFnQixRQUFRLGtCQUFSO0FBQ2hCLHlCQUFtQjtBQU92QixpQkFBVyxXQUFYLEdBQXlCLEVBQXpCO0FBQ0EsYUFBTyxPQUFQLEdBQWlCLFVBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2N1cnJ5UmlnaHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBjcmVhdGVXcmFwcGVyID0gcmVxdWlyZSgnLi9fY3JlYXRlV3JhcHBlcicpO1xudmFyIENVUlJZX1JJR0hUX0ZMQUcgPSAxNjtcbmZ1bmN0aW9uIGN1cnJ5UmlnaHQoZnVuYywgYXJpdHksIGd1YXJkKSB7XG4gIGFyaXR5ID0gZ3VhcmQgPyB1bmRlZmluZWQgOiBhcml0eTtcbiAgdmFyIHJlc3VsdCA9IGNyZWF0ZVdyYXBwZXIoZnVuYywgQ1VSUllfUklHSFRfRkxBRywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGFyaXR5KTtcbiAgcmVzdWx0LnBsYWNlaG9sZGVyID0gY3VycnlSaWdodC5wbGFjZWhvbGRlcjtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmN1cnJ5UmlnaHQucGxhY2Vob2xkZXIgPSB7fTtcbm1vZHVsZS5leHBvcnRzID0gY3VycnlSaWdodDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
