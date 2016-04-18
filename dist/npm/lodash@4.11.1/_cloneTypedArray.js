'use strict';

System.register([], function (_export, _context) {
  var cloneArrayBuffer;

  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  return {
    setters: [],
    execute: function () {
      cloneArrayBuffer = require('./_cloneArrayBuffer');
      module.exports = cloneTypedArray;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jbG9uZVR5cGVkQXJyYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxXQUFTLGVBQVQsQ0FBeUIsVUFBekIsRUFBcUMsTUFBckMsRUFBNkM7QUFDM0MsUUFBSSxTQUFTLFNBQVMsaUJBQWlCLFdBQVcsTUFBWCxDQUExQixHQUErQyxXQUFXLE1BQVgsQ0FEakI7QUFFM0MsV0FBTyxJQUFJLFdBQVcsV0FBWCxDQUF1QixNQUEzQixFQUFtQyxXQUFXLFVBQVgsRUFBdUIsV0FBVyxNQUFYLENBQWpFLENBRjJDO0dBQTdDOzs7O0FBREkseUJBQW1CLFFBQVEscUJBQVI7QUFLdkIsYUFBTyxPQUFQLEdBQWlCLGVBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19jbG9uZVR5cGVkQXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpO1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lVHlwZWRBcnJheTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
