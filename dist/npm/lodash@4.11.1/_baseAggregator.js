'use strict';

System.register([], function (_export, _context) {
  var baseEach;

  function baseAggregator(collection, setter, iteratee, accumulator) {
    baseEach(collection, function (value, key, collection) {
      setter(accumulator, value, iteratee(value), collection);
    });
    return accumulator;
  }
  return {
    setters: [],
    execute: function () {
      baseEach = require('./_baseEach');
      module.exports = baseAggregator;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlQWdncmVnYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLFdBQVMsY0FBVCxDQUF3QixVQUF4QixFQUFvQyxNQUFwQyxFQUE0QyxRQUE1QyxFQUFzRCxXQUF0RCxFQUFtRTtBQUNqRSxhQUFTLFVBQVQsRUFBcUIsVUFBUyxLQUFULEVBQWdCLEdBQWhCLEVBQXFCLFVBQXJCLEVBQWlDO0FBQ3BELGFBQU8sV0FBUCxFQUFvQixLQUFwQixFQUEyQixTQUFTLEtBQVQsQ0FBM0IsRUFBNEMsVUFBNUMsRUFEb0Q7S0FBakMsQ0FBckIsQ0FEaUU7QUFJakUsV0FBTyxXQUFQLENBSmlFO0dBQW5FOzs7O0FBREksaUJBQVcsUUFBUSxhQUFSO0FBT2YsYUFBTyxPQUFQLEdBQWlCLGNBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19iYXNlQWdncmVnYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VFYWNoID0gcmVxdWlyZSgnLi9fYmFzZUVhY2gnKTtcbmZ1bmN0aW9uIGJhc2VBZ2dyZWdhdG9yKGNvbGxlY3Rpb24sIHNldHRlciwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yKSB7XG4gIGJhc2VFYWNoKGNvbGxlY3Rpb24sIGZ1bmN0aW9uKHZhbHVlLCBrZXksIGNvbGxlY3Rpb24pIHtcbiAgICBzZXR0ZXIoYWNjdW11bGF0b3IsIHZhbHVlLCBpdGVyYXRlZSh2YWx1ZSksIGNvbGxlY3Rpb24pO1xuICB9KTtcbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQWdncmVnYXRvcjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
