'use strict';

System.register([], function (_export, _context) {
  var sampleSize, MAX_ARRAY_LENGTH;

  function shuffle(collection) {
    return sampleSize(collection, MAX_ARRAY_LENGTH);
  }
  return {
    setters: [],
    execute: function () {
      sampleSize = require('./sampleSize');
      MAX_ARRAY_LENGTH = 4294967295;
      module.exports = shuffle;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3NodWZmbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLE9BQVQsQ0FBaUIsVUFBakIsRUFBNkI7QUFDM0IsV0FBTyxXQUFXLFVBQVgsRUFBdUIsZ0JBQXZCLENBQVAsQ0FEMkI7R0FBN0I7Ozs7QUFGSSxtQkFBYSxRQUFRLGNBQVI7QUFDYix5QkFBbUI7QUFJdkIsYUFBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3NodWZmbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBzYW1wbGVTaXplID0gcmVxdWlyZSgnLi9zYW1wbGVTaXplJyk7XG52YXIgTUFYX0FSUkFZX0xFTkdUSCA9IDQyOTQ5NjcyOTU7XG5mdW5jdGlvbiBzaHVmZmxlKGNvbGxlY3Rpb24pIHtcbiAgcmV0dXJuIHNhbXBsZVNpemUoY29sbGVjdGlvbiwgTUFYX0FSUkFZX0xFTkdUSCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNodWZmbGU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
