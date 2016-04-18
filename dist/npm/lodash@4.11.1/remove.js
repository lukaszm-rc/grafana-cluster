'use strict';

System.register([], function (_export, _context) {
  var baseIteratee, basePullAt;

  function remove(array, predicate) {
    var result = [];
    if (!(array && array.length)) {
      return result;
    }
    var index = -1,
        indexes = [],
        length = array.length;
    predicate = baseIteratee(predicate, 3);
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result.push(value);
        indexes.push(index);
      }
    }
    basePullAt(array, indexes);
    return result;
  }
  return {
    setters: [],
    execute: function () {
      baseIteratee = require('./_baseIteratee');
      basePullAt = require('./_basePullAt');
      module.exports = remove;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3JlbW92ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsTUFBVCxDQUFnQixLQUFoQixFQUF1QixTQUF2QixFQUFrQztBQUNoQyxRQUFJLFNBQVMsRUFBVCxDQUQ0QjtBQUVoQyxRQUFJLEVBQUUsU0FBUyxNQUFNLE1BQU4sQ0FBWCxFQUEwQjtBQUM1QixhQUFPLE1BQVAsQ0FENEI7S0FBOUI7QUFHQSxRQUFJLFFBQVEsQ0FBQyxDQUFEO1FBQ1IsVUFBVSxFQUFWO1FBQ0EsU0FBUyxNQUFNLE1BQU4sQ0FQbUI7QUFRaEMsZ0JBQVksYUFBYSxTQUFiLEVBQXdCLENBQXhCLENBQVosQ0FSZ0M7QUFTaEMsV0FBTyxFQUFFLEtBQUYsR0FBVSxNQUFWLEVBQWtCO0FBQ3ZCLFVBQUksUUFBUSxNQUFNLEtBQU4sQ0FBUixDQURtQjtBQUV2QixVQUFJLFVBQVUsS0FBVixFQUFpQixLQUFqQixFQUF3QixLQUF4QixDQUFKLEVBQW9DO0FBQ2xDLGVBQU8sSUFBUCxDQUFZLEtBQVosRUFEa0M7QUFFbEMsZ0JBQVEsSUFBUixDQUFhLEtBQWIsRUFGa0M7T0FBcEM7S0FGRjtBQU9BLGVBQVcsS0FBWCxFQUFrQixPQUFsQixFQWhCZ0M7QUFpQmhDLFdBQU8sTUFBUCxDQWpCZ0M7R0FBbEM7Ozs7QUFGSSxxQkFBZSxRQUFRLGlCQUFSO0FBQ2YsbUJBQWEsUUFBUSxlQUFSO0FBb0JqQixhQUFPLE9BQVAsR0FBaUIsTUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvcmVtb3ZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgYmFzZVB1bGxBdCA9IHJlcXVpcmUoJy4vX2Jhc2VQdWxsQXQnKTtcbmZ1bmN0aW9uIHJlbW92ZShhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKCEoYXJyYXkgJiYgYXJyYXkubGVuZ3RoKSkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBpbmRleGVzID0gW10sXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHByZWRpY2F0ZSA9IGJhc2VJdGVyYXRlZShwcmVkaWNhdGUsIDMpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgICBpbmRleGVzLnB1c2goaW5kZXgpO1xuICAgIH1cbiAgfVxuICBiYXNlUHVsbEF0KGFycmF5LCBpbmRleGVzKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbm1vZHVsZS5leHBvcnRzID0gcmVtb3ZlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
