'use strict';

System.register([], function (_export, _context) {
  var cloneArrayBuffer;

  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }
  return {
    setters: [],
    execute: function () {
      cloneArrayBuffer = require('./_cloneArrayBuffer');
      module.exports = cloneDataView;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jbG9uZURhdGFWaWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsV0FBUyxhQUFULENBQXVCLFFBQXZCLEVBQWlDLE1BQWpDLEVBQXlDO0FBQ3ZDLFFBQUksU0FBUyxTQUFTLGlCQUFpQixTQUFTLE1BQVQsQ0FBMUIsR0FBNkMsU0FBUyxNQUFULENBRG5CO0FBRXZDLFdBQU8sSUFBSSxTQUFTLFdBQVQsQ0FBcUIsTUFBekIsRUFBaUMsU0FBUyxVQUFULEVBQXFCLFNBQVMsVUFBVCxDQUE3RCxDQUZ1QztHQUF6Qzs7OztBQURJLHlCQUFtQixRQUFRLHFCQUFSO0FBS3ZCLGFBQU8sT0FBUCxHQUFpQixhQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fY2xvbmVEYXRhVmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyk7XG5mdW5jdGlvbiBjbG9uZURhdGFWaWV3KGRhdGFWaWV3LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIoZGF0YVZpZXcuYnVmZmVyKSA6IGRhdGFWaWV3LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyBkYXRhVmlldy5jb25zdHJ1Y3RvcihidWZmZXIsIGRhdGFWaWV3LmJ5dGVPZmZzZXQsIGRhdGFWaWV3LmJ5dGVMZW5ndGgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURhdGFWaWV3O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
