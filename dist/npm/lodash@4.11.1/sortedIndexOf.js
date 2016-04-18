'use strict';

System.register([], function (_export, _context) {
  var baseSortedIndex, eq;

  function sortedIndexOf(array, value) {
    var length = array ? array.length : 0;
    if (length) {
      var index = baseSortedIndex(array, value);
      if (index < length && eq(array[index], value)) {
        return index;
      }
    }
    return -1;
  }
  return {
    setters: [],
    execute: function () {
      baseSortedIndex = require('./_baseSortedIndex');
      eq = require('./eq');
      module.exports = sortedIndexOf;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3NvcnRlZEluZGV4T2YuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLGFBQVQsQ0FBdUIsS0FBdkIsRUFBOEIsS0FBOUIsRUFBcUM7QUFDbkMsUUFBSSxTQUFTLFFBQVEsTUFBTSxNQUFOLEdBQWUsQ0FBdkIsQ0FEc0I7QUFFbkMsUUFBSSxNQUFKLEVBQVk7QUFDVixVQUFJLFFBQVEsZ0JBQWdCLEtBQWhCLEVBQXVCLEtBQXZCLENBQVIsQ0FETTtBQUVWLFVBQUksUUFBUSxNQUFSLElBQWtCLEdBQUcsTUFBTSxLQUFOLENBQUgsRUFBaUIsS0FBakIsQ0FBbEIsRUFBMkM7QUFDN0MsZUFBTyxLQUFQLENBRDZDO09BQS9DO0tBRkY7QUFNQSxXQUFPLENBQUMsQ0FBRCxDQVI0QjtHQUFyQzs7OztBQUZJLHdCQUFrQixRQUFRLG9CQUFSO0FBQ2xCLFdBQUssUUFBUSxNQUFSO0FBV1QsYUFBTyxPQUFQLEdBQWlCLGFBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3NvcnRlZEluZGV4T2YuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlU29ydGVkSW5kZXggPSByZXF1aXJlKCcuL19iYXNlU29ydGVkSW5kZXgnKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcbmZ1bmN0aW9uIHNvcnRlZEluZGV4T2YoYXJyYXksIHZhbHVlKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG4gIGlmIChsZW5ndGgpIHtcbiAgICB2YXIgaW5kZXggPSBiYXNlU29ydGVkSW5kZXgoYXJyYXksIHZhbHVlKTtcbiAgICBpZiAoaW5kZXggPCBsZW5ndGggJiYgZXEoYXJyYXlbaW5kZXhdLCB2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxubW9kdWxlLmV4cG9ydHMgPSBzb3J0ZWRJbmRleE9mO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
