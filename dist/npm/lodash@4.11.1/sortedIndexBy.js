'use strict';

System.register([], function (_export, _context) {
  var baseIteratee, baseSortedIndexBy;

  function sortedIndexBy(array, value, iteratee) {
    return baseSortedIndexBy(array, value, baseIteratee(iteratee));
  }
  return {
    setters: [],
    execute: function () {
      baseIteratee = require('./_baseIteratee');
      baseSortedIndexBy = require('./_baseSortedIndexBy');
      module.exports = sortedIndexBy;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3NvcnRlZEluZGV4QnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLGFBQVQsQ0FBdUIsS0FBdkIsRUFBOEIsS0FBOUIsRUFBcUMsUUFBckMsRUFBK0M7QUFDN0MsV0FBTyxrQkFBa0IsS0FBbEIsRUFBeUIsS0FBekIsRUFBZ0MsYUFBYSxRQUFiLENBQWhDLENBQVAsQ0FENkM7R0FBL0M7Ozs7QUFGSSxxQkFBZSxRQUFRLGlCQUFSO0FBQ2YsMEJBQW9CLFFBQVEsc0JBQVI7QUFJeEIsYUFBTyxPQUFQLEdBQWlCLGFBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3NvcnRlZEluZGV4QnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBiYXNlU29ydGVkSW5kZXhCeSA9IHJlcXVpcmUoJy4vX2Jhc2VTb3J0ZWRJbmRleEJ5Jyk7XG5mdW5jdGlvbiBzb3J0ZWRJbmRleEJ5KGFycmF5LCB2YWx1ZSwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuIGJhc2VTb3J0ZWRJbmRleEJ5KGFycmF5LCB2YWx1ZSwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlKSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNvcnRlZEluZGV4Qnk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
