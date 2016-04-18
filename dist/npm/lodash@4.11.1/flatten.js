'use strict';

System.register([], function (_export, _context) {
  var baseFlatten;

  function flatten(array) {
    var length = array ? array.length : 0;
    return length ? baseFlatten(array, 1) : [];
  }
  return {
    setters: [],
    execute: function () {
      baseFlatten = require('./_baseFlatten');
      module.exports = flatten;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZsYXR0ZW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxXQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0I7QUFDdEIsUUFBSSxTQUFTLFFBQVEsTUFBTSxNQUFOLEdBQWUsQ0FBdkIsQ0FEUztBQUV0QixXQUFPLFNBQVMsWUFBWSxLQUFaLEVBQW1CLENBQW5CLENBQVQsR0FBaUMsRUFBakMsQ0FGZTtHQUF4Qjs7OztBQURJLG9CQUFjLFFBQVEsZ0JBQVI7QUFLbEIsYUFBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2ZsYXR0ZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlRmxhdHRlbiA9IHJlcXVpcmUoJy4vX2Jhc2VGbGF0dGVuJyk7XG5mdW5jdGlvbiBmbGF0dGVuKGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG4gIHJldHVybiBsZW5ndGggPyBiYXNlRmxhdHRlbihhcnJheSwgMSkgOiBbXTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZmxhdHRlbjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
