'use strict';

System.register([], function (_export, _context) {
  var baseSlice;

  function castSlice(array, start, end) {
    var length = array.length;
    end = end === undefined ? length : end;
    return !start && end >= length ? array : baseSlice(array, start, end);
  }
  return {
    setters: [],
    execute: function () {
      baseSlice = require('./_baseSlice');
      module.exports = castSlice;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jYXN0U2xpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxXQUFTLFNBQVQsQ0FBbUIsS0FBbkIsRUFBMEIsS0FBMUIsRUFBaUMsR0FBakMsRUFBc0M7QUFDcEMsUUFBSSxTQUFTLE1BQU0sTUFBTixDQUR1QjtBQUVwQyxVQUFNLFFBQVEsU0FBUixHQUFvQixNQUFwQixHQUE2QixHQUE3QixDQUY4QjtBQUdwQyxXQUFPLENBQUUsS0FBRCxJQUFVLE9BQU8sTUFBUCxHQUFpQixLQUE1QixHQUFvQyxVQUFVLEtBQVYsRUFBaUIsS0FBakIsRUFBd0IsR0FBeEIsQ0FBcEMsQ0FINkI7R0FBdEM7Ozs7QUFESSxrQkFBWSxRQUFRLGNBQVI7QUFNaEIsYUFBTyxPQUFQLEdBQWlCLFNBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19jYXN0U2xpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlU2xpY2UgPSByZXF1aXJlKCcuL19iYXNlU2xpY2UnKTtcbmZ1bmN0aW9uIGNhc3RTbGljZShhcnJheSwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IGVuZDtcbiAgcmV0dXJuICghc3RhcnQgJiYgZW5kID49IGxlbmd0aCkgPyBhcnJheSA6IGJhc2VTbGljZShhcnJheSwgc3RhcnQsIGVuZCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RTbGljZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
