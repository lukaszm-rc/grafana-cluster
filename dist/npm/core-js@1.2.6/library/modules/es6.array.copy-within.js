'use strict';

System.register([], function (_export, _context) {
  var $export;
  return {
    setters: [],
    execute: function () {
      $export = require('./$.export');

      $export($export.P, 'Array', { copyWithin: require('./$.array-copy-within') });
      require('./$.add-to-unscopables')('copyWithin');
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuY29weS13aXRoaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGdCQUFVLFFBQVEsWUFBUjs7QUFDZCxjQUFRLFFBQVEsQ0FBUixFQUFXLE9BQW5CLEVBQTRCLEVBQUMsWUFBWSxRQUFRLHVCQUFSLENBQVosRUFBN0I7QUFDQSxjQUFRLHdCQUFSLEVBQWtDLFlBQWxDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuY29weS13aXRoaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHtjb3B5V2l0aGluOiByZXF1aXJlKCcuLyQuYXJyYXktY29weS13aXRoaW4nKX0pO1xucmVxdWlyZSgnLi8kLmFkZC10by11bnNjb3BhYmxlcycpKCdjb3B5V2l0aGluJyk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
