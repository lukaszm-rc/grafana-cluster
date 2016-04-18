'use strict';

System.register([], function (_export, _context) {
  var eq;

  function baseSortedUniqBy(array, iteratee) {
    var index = 0,
        length = array.length,
        value = array[0],
        computed = iteratee ? iteratee(value) : value,
        seen = computed,
        resIndex = 1,
        result = [value];
    while (++index < length) {
      value = array[index], computed = iteratee ? iteratee(value) : value;
      if (!eq(computed, seen)) {
        seen = computed;
        result[resIndex++] = value;
      }
    }
    return result;
  }
  return {
    setters: [],
    execute: function () {
      eq = require('./eq');
      module.exports = baseSortedUniqBy;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlU29ydGVkVW5pcUJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsV0FBUyxnQkFBVCxDQUEwQixLQUExQixFQUFpQyxRQUFqQyxFQUEyQztBQUN6QyxRQUFJLFFBQVEsQ0FBUjtRQUNBLFNBQVMsTUFBTSxNQUFOO1FBQ1QsUUFBUSxNQUFNLENBQU4sQ0FBUjtRQUNBLFdBQVcsV0FBVyxTQUFTLEtBQVQsQ0FBWCxHQUE2QixLQUE3QjtRQUNYLE9BQU8sUUFBUDtRQUNBLFdBQVcsQ0FBWDtRQUNBLFNBQVMsQ0FBQyxLQUFELENBQVQsQ0FQcUM7QUFRekMsV0FBTyxFQUFFLEtBQUYsR0FBVSxNQUFWLEVBQWtCO0FBQ3ZCLGNBQVEsTUFBTSxLQUFOLENBQVIsRUFBc0IsV0FBVyxXQUFXLFNBQVMsS0FBVCxDQUFYLEdBQTZCLEtBQTdCLENBRFY7QUFFdkIsVUFBSSxDQUFDLEdBQUcsUUFBSCxFQUFhLElBQWIsQ0FBRCxFQUFxQjtBQUN2QixlQUFPLFFBQVAsQ0FEdUI7QUFFdkIsZUFBTyxVQUFQLElBQXFCLEtBQXJCLENBRnVCO09BQXpCO0tBRkY7QUFPQSxXQUFPLE1BQVAsQ0FmeUM7R0FBM0M7Ozs7QUFESSxXQUFLLFFBQVEsTUFBUjtBQWtCVCxhQUFPLE9BQVAsR0FBaUIsZ0JBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19iYXNlU29ydGVkVW5pcUJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5mdW5jdGlvbiBiYXNlU29ydGVkVW5pcUJ5KGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgdmFsdWUgPSBhcnJheVswXSxcbiAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZSxcbiAgICAgIHNlZW4gPSBjb21wdXRlZCxcbiAgICAgIHJlc0luZGV4ID0gMSxcbiAgICAgIHJlc3VsdCA9IFt2YWx1ZV07XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFsdWUgPSBhcnJheVtpbmRleF0sIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZTtcbiAgICBpZiAoIWVxKGNvbXB1dGVkLCBzZWVuKSkge1xuICAgICAgc2VlbiA9IGNvbXB1dGVkO1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTb3J0ZWRVbmlxQnk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
