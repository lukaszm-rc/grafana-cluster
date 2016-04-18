'use strict';

System.register([], function (_export, _context) {
  var baseEach;

  function baseFilter(collection, predicate) {
    var result = [];
    baseEach(collection, function (value, index, collection) {
      if (predicate(value, index, collection)) {
        result.push(value);
      }
    });
    return result;
  }
  return {
    setters: [],
    execute: function () {
      baseEach = require('./_baseEach');
      module.exports = baseFilter;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlRmlsdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsV0FBUyxVQUFULENBQW9CLFVBQXBCLEVBQWdDLFNBQWhDLEVBQTJDO0FBQ3pDLFFBQUksU0FBUyxFQUFULENBRHFDO0FBRXpDLGFBQVMsVUFBVCxFQUFxQixVQUFTLEtBQVQsRUFBZ0IsS0FBaEIsRUFBdUIsVUFBdkIsRUFBbUM7QUFDdEQsVUFBSSxVQUFVLEtBQVYsRUFBaUIsS0FBakIsRUFBd0IsVUFBeEIsQ0FBSixFQUF5QztBQUN2QyxlQUFPLElBQVAsQ0FBWSxLQUFaLEVBRHVDO09BQXpDO0tBRG1CLENBQXJCLENBRnlDO0FBT3pDLFdBQU8sTUFBUCxDQVB5QztHQUEzQzs7OztBQURJLGlCQUFXLFFBQVEsYUFBUjtBQVVmLGFBQU8sT0FBUCxHQUFpQixVQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fYmFzZUZpbHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VFYWNoID0gcmVxdWlyZSgnLi9fYmFzZUVhY2gnKTtcbmZ1bmN0aW9uIGJhc2VGaWx0ZXIoY29sbGVjdGlvbiwgcHJlZGljYXRlKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pKSB7XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZpbHRlcjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
