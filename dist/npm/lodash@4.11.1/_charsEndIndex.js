'use strict';

System.register([], function (_export, _context) {
  var baseIndexOf;

  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;
    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }
  return {
    setters: [],
    execute: function () {
      baseIndexOf = require('./_baseIndexOf');
      module.exports = charsEndIndex;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jaGFyc0VuZEluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsV0FBUyxhQUFULENBQXVCLFVBQXZCLEVBQW1DLFVBQW5DLEVBQStDO0FBQzdDLFFBQUksUUFBUSxXQUFXLE1BQVgsQ0FEaUM7QUFFN0MsV0FBTyxXQUFXLFlBQVksVUFBWixFQUF3QixXQUFXLEtBQVgsQ0FBeEIsRUFBMkMsQ0FBM0MsSUFBZ0QsQ0FBQyxDQUFELEVBQUksRUFBdEU7QUFDQSxXQUFPLEtBQVAsQ0FINkM7R0FBL0M7Ozs7QUFESSxvQkFBYyxRQUFRLGdCQUFSO0FBTWxCLGFBQU8sT0FBUCxHQUFpQixhQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fY2hhcnNFbmRJbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VJbmRleE9mID0gcmVxdWlyZSgnLi9fYmFzZUluZGV4T2YnKTtcbmZ1bmN0aW9uIGNoYXJzRW5kSW5kZXgoc3RyU3ltYm9scywgY2hyU3ltYm9scykge1xuICB2YXIgaW5kZXggPSBzdHJTeW1ib2xzLmxlbmd0aDtcbiAgd2hpbGUgKGluZGV4LS0gJiYgYmFzZUluZGV4T2YoY2hyU3ltYm9scywgc3RyU3ltYm9sc1tpbmRleF0sIDApID4gLTEpIHt9XG4gIHJldHVybiBpbmRleDtcbn1cbm1vZHVsZS5leHBvcnRzID0gY2hhcnNFbmRJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
