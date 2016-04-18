'use strict';

System.register([], function (_export, _context) {
  var Uint8Array;

  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }
  return {
    setters: [],
    execute: function () {
      Uint8Array = require('./_Uint8Array');
      module.exports = cloneArrayBuffer;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jbG9uZUFycmF5QnVmZmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsV0FBUyxnQkFBVCxDQUEwQixXQUExQixFQUF1QztBQUNyQyxRQUFJLFNBQVMsSUFBSSxZQUFZLFdBQVosQ0FBd0IsWUFBWSxVQUFaLENBQXJDLENBRGlDO0FBRXJDLFFBQUksVUFBSixDQUFlLE1BQWYsRUFBdUIsR0FBdkIsQ0FBMkIsSUFBSSxVQUFKLENBQWUsV0FBZixDQUEzQixFQUZxQztBQUdyQyxXQUFPLE1BQVAsQ0FIcUM7R0FBdkM7Ozs7QUFESSxtQkFBYSxRQUFRLGVBQVI7QUFNakIsYUFBTyxPQUFQLEdBQWlCLGdCQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fY2xvbmVBcnJheUJ1ZmZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5Jyk7XG5mdW5jdGlvbiBjbG9uZUFycmF5QnVmZmVyKGFycmF5QnVmZmVyKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgYXJyYXlCdWZmZXIuY29uc3RydWN0b3IoYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG4gIG5ldyBVaW50OEFycmF5KHJlc3VsdCkuc2V0KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQXJyYXlCdWZmZXI7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
