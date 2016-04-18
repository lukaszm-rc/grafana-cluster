'use strict';

System.register([], function (_export, _context) {
  var baseSortedIndex, eq;

  function sortedLastIndexOf(array, value) {
    var length = array ? array.length : 0;
    if (length) {
      var index = baseSortedIndex(array, value, true) - 1;
      if (eq(array[index], value)) {
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
      module.exports = sortedLastIndexOf;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3NvcnRlZExhc3RJbmRleE9mLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxpQkFBVCxDQUEyQixLQUEzQixFQUFrQyxLQUFsQyxFQUF5QztBQUN2QyxRQUFJLFNBQVMsUUFBUSxNQUFNLE1BQU4sR0FBZSxDQUF2QixDQUQwQjtBQUV2QyxRQUFJLE1BQUosRUFBWTtBQUNWLFVBQUksUUFBUSxnQkFBZ0IsS0FBaEIsRUFBdUIsS0FBdkIsRUFBOEIsSUFBOUIsSUFBc0MsQ0FBdEMsQ0FERjtBQUVWLFVBQUksR0FBRyxNQUFNLEtBQU4sQ0FBSCxFQUFpQixLQUFqQixDQUFKLEVBQTZCO0FBQzNCLGVBQU8sS0FBUCxDQUQyQjtPQUE3QjtLQUZGO0FBTUEsV0FBTyxDQUFDLENBQUQsQ0FSZ0M7R0FBekM7Ozs7QUFGSSx3QkFBa0IsUUFBUSxvQkFBUjtBQUNsQixXQUFLLFFBQVEsTUFBUjtBQVdULGFBQU8sT0FBUCxHQUFpQixpQkFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvc29ydGVkTGFzdEluZGV4T2YuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlU29ydGVkSW5kZXggPSByZXF1aXJlKCcuL19iYXNlU29ydGVkSW5kZXgnKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcbmZ1bmN0aW9uIHNvcnRlZExhc3RJbmRleE9mKGFycmF5LCB2YWx1ZSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuICBpZiAobGVuZ3RoKSB7XG4gICAgdmFyIGluZGV4ID0gYmFzZVNvcnRlZEluZGV4KGFycmF5LCB2YWx1ZSwgdHJ1ZSkgLSAxO1xuICAgIGlmIChlcShhcnJheVtpbmRleF0sIHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNvcnRlZExhc3RJbmRleE9mO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
