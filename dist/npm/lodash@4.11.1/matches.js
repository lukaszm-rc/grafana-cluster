'use strict';

System.register([], function (_export, _context) {
  var baseClone, baseMatches;

  function matches(source) {
    return baseMatches(baseClone(source, true));
  }
  return {
    setters: [],
    execute: function () {
      baseClone = require('./_baseClone');
      baseMatches = require('./_baseMatches');
      module.exports = matches;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL21hdGNoZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLE9BQVQsQ0FBaUIsTUFBakIsRUFBeUI7QUFDdkIsV0FBTyxZQUFZLFVBQVUsTUFBVixFQUFrQixJQUFsQixDQUFaLENBQVAsQ0FEdUI7R0FBekI7Ozs7QUFGSSxrQkFBWSxRQUFRLGNBQVI7QUFDWixvQkFBYyxRQUFRLGdCQUFSO0FBSWxCLGFBQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9tYXRjaGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUNsb25lID0gcmVxdWlyZSgnLi9fYmFzZUNsb25lJyksXG4gICAgYmFzZU1hdGNoZXMgPSByZXF1aXJlKCcuL19iYXNlTWF0Y2hlcycpO1xuZnVuY3Rpb24gbWF0Y2hlcyhzb3VyY2UpIHtcbiAgcmV0dXJuIGJhc2VNYXRjaGVzKGJhc2VDbG9uZShzb3VyY2UsIHRydWUpKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gbWF0Y2hlcztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
