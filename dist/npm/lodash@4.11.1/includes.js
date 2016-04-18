'use strict';

System.register([], function (_export, _context) {
  var baseIndexOf, isArrayLike, isString, toInteger, values, nativeMax;

  function includes(collection, value, fromIndex, guard) {
    collection = isArrayLike(collection) ? collection : values(collection);
    fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
    var length = collection.length;
    if (fromIndex < 0) {
      fromIndex = nativeMax(length + fromIndex, 0);
    }
    return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
  }
  return {
    setters: [],
    execute: function () {
      baseIndexOf = require('./_baseIndexOf');
      isArrayLike = require('./isArrayLike');
      isString = require('./isString');
      toInteger = require('./toInteger');
      values = require('./values');
      nativeMax = Math.max;
      module.exports = includes;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2luY2x1ZGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBT0EsV0FBUyxRQUFULENBQWtCLFVBQWxCLEVBQThCLEtBQTlCLEVBQXFDLFNBQXJDLEVBQWdELEtBQWhELEVBQXVEO0FBQ3JELGlCQUFhLFlBQVksVUFBWixJQUEwQixVQUExQixHQUF1QyxPQUFPLFVBQVAsQ0FBdkMsQ0FEd0M7QUFFckQsZ0JBQVksU0FBQyxJQUFhLENBQUMsS0FBRCxHQUFVLFVBQVUsU0FBVixDQUF4QixHQUErQyxDQUEvQyxDQUZ5QztBQUdyRCxRQUFJLFNBQVMsV0FBVyxNQUFYLENBSHdDO0FBSXJELFFBQUksWUFBWSxDQUFaLEVBQWU7QUFDakIsa0JBQVksVUFBVSxTQUFTLFNBQVQsRUFBb0IsQ0FBOUIsQ0FBWixDQURpQjtLQUFuQjtBQUdBLFdBQU8sU0FBUyxVQUFULElBQXdCLGFBQWEsTUFBYixJQUF1QixXQUFXLE9BQVgsQ0FBbUIsS0FBbkIsRUFBMEIsU0FBMUIsSUFBdUMsQ0FBQyxDQUFELEdBQU8sQ0FBQyxDQUFDLE1BQUQsSUFBVyxZQUFZLFVBQVosRUFBd0IsS0FBeEIsRUFBK0IsU0FBL0IsSUFBNEMsQ0FBQyxDQUFELENBUHZHO0dBQXZEOzs7O0FBTkksb0JBQWMsUUFBUSxnQkFBUjtBQUNkLG9CQUFjLFFBQVEsZUFBUjtBQUNkLGlCQUFXLFFBQVEsWUFBUjtBQUNYLGtCQUFZLFFBQVEsYUFBUjtBQUNaLGVBQVMsUUFBUSxVQUFSO0FBQ1Qsa0JBQVksS0FBSyxHQUFMO0FBVWhCLGFBQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9pbmNsdWRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VJbmRleE9mID0gcmVxdWlyZSgnLi9fYmFzZUluZGV4T2YnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc1N0cmluZyA9IHJlcXVpcmUoJy4vaXNTdHJpbmcnKSxcbiAgICB0b0ludGVnZXIgPSByZXF1aXJlKCcuL3RvSW50ZWdlcicpLFxuICAgIHZhbHVlcyA9IHJlcXVpcmUoJy4vdmFsdWVzJyk7XG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5mdW5jdGlvbiBpbmNsdWRlcyhjb2xsZWN0aW9uLCB2YWx1ZSwgZnJvbUluZGV4LCBndWFyZCkge1xuICBjb2xsZWN0aW9uID0gaXNBcnJheUxpa2UoY29sbGVjdGlvbikgPyBjb2xsZWN0aW9uIDogdmFsdWVzKGNvbGxlY3Rpb24pO1xuICBmcm9tSW5kZXggPSAoZnJvbUluZGV4ICYmICFndWFyZCkgPyB0b0ludGVnZXIoZnJvbUluZGV4KSA6IDA7XG4gIHZhciBsZW5ndGggPSBjb2xsZWN0aW9uLmxlbmd0aDtcbiAgaWYgKGZyb21JbmRleCA8IDApIHtcbiAgICBmcm9tSW5kZXggPSBuYXRpdmVNYXgobGVuZ3RoICsgZnJvbUluZGV4LCAwKTtcbiAgfVxuICByZXR1cm4gaXNTdHJpbmcoY29sbGVjdGlvbikgPyAoZnJvbUluZGV4IDw9IGxlbmd0aCAmJiBjb2xsZWN0aW9uLmluZGV4T2YodmFsdWUsIGZyb21JbmRleCkgPiAtMSkgOiAoISFsZW5ndGggJiYgYmFzZUluZGV4T2YoY29sbGVjdGlvbiwgdmFsdWUsIGZyb21JbmRleCkgPiAtMSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluY2x1ZGVzO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
