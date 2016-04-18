'use strict';

System.register([], function (_export, _context) {
  var assocIndexOf, arrayProto, splice;

  function assocDelete(array, key) {
    var index = assocIndexOf(array, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = array.length - 1;
    if (index == lastIndex) {
      array.pop();
    } else {
      splice.call(array, index, 1);
    }
    return true;
  }
  return {
    setters: [],
    execute: function () {
      assocIndexOf = require('./_assocIndexOf');
      arrayProto = Array.prototype;
      splice = arrayProto.splice;
      module.exports = assocDelete;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19hc3NvY0RlbGV0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLFdBQVMsV0FBVCxDQUFxQixLQUFyQixFQUE0QixHQUE1QixFQUFpQztBQUMvQixRQUFJLFFBQVEsYUFBYSxLQUFiLEVBQW9CLEdBQXBCLENBQVIsQ0FEMkI7QUFFL0IsUUFBSSxRQUFRLENBQVIsRUFBVztBQUNiLGFBQU8sS0FBUCxDQURhO0tBQWY7QUFHQSxRQUFJLFlBQVksTUFBTSxNQUFOLEdBQWUsQ0FBZixDQUxlO0FBTS9CLFFBQUksU0FBUyxTQUFULEVBQW9CO0FBQ3RCLFlBQU0sR0FBTixHQURzQjtLQUF4QixNQUVPO0FBQ0wsYUFBTyxJQUFQLENBQVksS0FBWixFQUFtQixLQUFuQixFQUEwQixDQUExQixFQURLO0tBRlA7QUFLQSxXQUFPLElBQVAsQ0FYK0I7R0FBakM7Ozs7QUFISSxxQkFBZSxRQUFRLGlCQUFSO0FBQ2YsbUJBQWEsTUFBTSxTQUFOO0FBQ2IsZUFBUyxXQUFXLE1BQVg7QUFjYixhQUFPLE9BQVAsR0FBaUIsV0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2Fzc29jRGVsZXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcbmZ1bmN0aW9uIGFzc29jRGVsZXRlKGFycmF5LCBrZXkpIHtcbiAgdmFyIGluZGV4ID0gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpO1xuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBhcnJheS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgYXJyYXkucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoYXJyYXksIGluZGV4LCAxKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NEZWxldGU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
