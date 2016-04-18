'use strict';

System.register([], function (_export, _context) {
  var Map, assocDelete, hashDelete, isKeyable;

  function mapDelete(key) {
    var data = this.__data__;
    if (isKeyable(key)) {
      return hashDelete(typeof key == 'string' ? data.string : data.hash, key);
    }
    return Map ? data.map['delete'](key) : assocDelete(data.map, key);
  }
  return {
    setters: [],
    execute: function () {
      Map = require('./_Map');
      assocDelete = require('./_assocDelete');
      hashDelete = require('./_hashDelete');
      isKeyable = require('./_isKeyable');
      module.exports = mapDelete;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19tYXBEZWxldGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxXQUFTLFNBQVQsQ0FBbUIsR0FBbkIsRUFBd0I7QUFDdEIsUUFBSSxPQUFPLEtBQUssUUFBTCxDQURXO0FBRXRCLFFBQUksVUFBVSxHQUFWLENBQUosRUFBb0I7QUFDbEIsYUFBTyxXQUFXLE9BQU8sR0FBUCxJQUFjLFFBQWQsR0FBeUIsS0FBSyxNQUFMLEdBQWMsS0FBSyxJQUFMLEVBQVcsR0FBN0QsQ0FBUCxDQURrQjtLQUFwQjtBQUdBLFdBQU8sTUFBTSxLQUFLLEdBQUwsQ0FBUyxRQUFULEVBQW1CLEdBQW5CLENBQU4sR0FBZ0MsWUFBWSxLQUFLLEdBQUwsRUFBVSxHQUF0QixDQUFoQyxDQUxlO0dBQXhCOzs7O0FBSkksWUFBTSxRQUFRLFFBQVI7QUFDTixvQkFBYyxRQUFRLGdCQUFSO0FBQ2QsbUJBQWEsUUFBUSxlQUFSO0FBQ2Isa0JBQVksUUFBUSxjQUFSO0FBUWhCLGFBQU8sT0FBUCxHQUFpQixTQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fbWFwRGVsZXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgYXNzb2NEZWxldGUgPSByZXF1aXJlKCcuL19hc3NvY0RlbGV0ZScpLFxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXG4gICAgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5mdW5jdGlvbiBtYXBEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGlzS2V5YWJsZShrZXkpKSB7XG4gICAgcmV0dXJuIGhhc2hEZWxldGUodHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/IGRhdGEuc3RyaW5nIDogZGF0YS5oYXNoLCBrZXkpO1xuICB9XG4gIHJldHVybiBNYXAgPyBkYXRhLm1hcFsnZGVsZXRlJ10oa2V5KSA6IGFzc29jRGVsZXRlKGRhdGEubWFwLCBrZXkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBtYXBEZWxldGU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
