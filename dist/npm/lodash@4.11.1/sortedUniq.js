'use strict';

System.register([], function (_export, _context) {
  var baseSortedUniq;

  function sortedUniq(array) {
    return array && array.length ? baseSortedUniq(array) : [];
  }
  return {
    setters: [],
    execute: function () {
      baseSortedUniq = require('./_baseSortedUniq');
      module.exports = sortedUniq;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3NvcnRlZFVuaXEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxXQUFTLFVBQVQsQ0FBb0IsS0FBcEIsRUFBMkI7QUFDekIsV0FBTyxLQUFDLElBQVMsTUFBTSxNQUFOLEdBQWdCLGVBQWUsS0FBZixDQUExQixHQUFrRCxFQUFsRCxDQURrQjtHQUEzQjs7OztBQURJLHVCQUFpQixRQUFRLG1CQUFSO0FBSXJCLGFBQU8sT0FBUCxHQUFpQixVQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9zb3J0ZWRVbmlxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZVNvcnRlZFVuaXEgPSByZXF1aXJlKCcuL19iYXNlU29ydGVkVW5pcScpO1xuZnVuY3Rpb24gc29ydGVkVW5pcShhcnJheSkge1xuICByZXR1cm4gKGFycmF5ICYmIGFycmF5Lmxlbmd0aCkgPyBiYXNlU29ydGVkVW5pcShhcnJheSkgOiBbXTtcbn1cbm1vZHVsZS5leHBvcnRzID0gc29ydGVkVW5pcTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
