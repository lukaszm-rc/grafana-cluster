'use strict';

System.register([], function (_export, _context) {
  var isArrayLike;

  function createBaseEach(eachFunc, fromRight) {
    return function (collection, iteratee) {
      if (collection == null) {
        return collection;
      }
      if (!isArrayLike(collection)) {
        return eachFunc(collection, iteratee);
      }
      var length = collection.length,
          index = fromRight ? length : -1,
          iterable = Object(collection);
      while (fromRight ? index-- : ++index < length) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }
      return collection;
    };
  }
  return {
    setters: [],
    execute: function () {
      isArrayLike = require('./isArrayLike');
      module.exports = createBaseEach;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jcmVhdGVCYXNlRWFjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLFdBQVMsY0FBVCxDQUF3QixRQUF4QixFQUFrQyxTQUFsQyxFQUE2QztBQUMzQyxXQUFPLFVBQVMsVUFBVCxFQUFxQixRQUFyQixFQUErQjtBQUNwQyxVQUFJLGNBQWMsSUFBZCxFQUFvQjtBQUN0QixlQUFPLFVBQVAsQ0FEc0I7T0FBeEI7QUFHQSxVQUFJLENBQUMsWUFBWSxVQUFaLENBQUQsRUFBMEI7QUFDNUIsZUFBTyxTQUFTLFVBQVQsRUFBcUIsUUFBckIsQ0FBUCxDQUQ0QjtPQUE5QjtBQUdBLFVBQUksU0FBUyxXQUFXLE1BQVg7VUFDVCxRQUFRLFlBQVksTUFBWixHQUFxQixDQUFDLENBQUQ7VUFDN0IsV0FBVyxPQUFPLFVBQVAsQ0FBWCxDQVRnQztBQVVwQyxhQUFRLFlBQVksT0FBWixHQUFzQixFQUFFLEtBQUYsR0FBVSxNQUFWLEVBQW1CO0FBQy9DLFlBQUksU0FBUyxTQUFTLEtBQVQsQ0FBVCxFQUEwQixLQUExQixFQUFpQyxRQUFqQyxNQUErQyxLQUEvQyxFQUFzRDtBQUN4RCxnQkFEd0Q7U0FBMUQ7T0FERjtBQUtBLGFBQU8sVUFBUCxDQWZvQztLQUEvQixDQURvQztHQUE3Qzs7OztBQURJLG9CQUFjLFFBQVEsZUFBUjtBQW9CbEIsYUFBTyxPQUFQLEdBQWlCLGNBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19jcmVhdGVCYXNlRWFjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuZnVuY3Rpb24gY3JlYXRlQmFzZUVhY2goZWFjaEZ1bmMsIGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24oY29sbGVjdGlvbiwgaXRlcmF0ZWUpIHtcbiAgICBpZiAoY29sbGVjdGlvbiA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgICB9XG4gICAgaWYgKCFpc0FycmF5TGlrZShjb2xsZWN0aW9uKSkge1xuICAgICAgcmV0dXJuIGVhY2hGdW5jKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKTtcbiAgICB9XG4gICAgdmFyIGxlbmd0aCA9IGNvbGxlY3Rpb24ubGVuZ3RoLFxuICAgICAgICBpbmRleCA9IGZyb21SaWdodCA/IGxlbmd0aCA6IC0xLFxuICAgICAgICBpdGVyYWJsZSA9IE9iamVjdChjb2xsZWN0aW9uKTtcbiAgICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgICAgaWYgKGl0ZXJhdGVlKGl0ZXJhYmxlW2luZGV4XSwgaW5kZXgsIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVCYXNlRWFjaDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
