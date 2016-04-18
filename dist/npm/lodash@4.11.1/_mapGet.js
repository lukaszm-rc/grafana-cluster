'use strict';

System.register([], function (_export, _context) {
  var Map, assocGet, hashGet, isKeyable;

  function mapGet(key) {
    var data = this.__data__;
    if (isKeyable(key)) {
      return hashGet(typeof key == 'string' ? data.string : data.hash, key);
    }
    return Map ? data.map.get(key) : assocGet(data.map, key);
  }
  return {
    setters: [],
    execute: function () {
      Map = require('./_Map');
      assocGet = require('./_assocGet');
      hashGet = require('./_hashGet');
      isKeyable = require('./_isKeyable');
      module.exports = mapGet;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19tYXBHZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxXQUFTLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUI7QUFDbkIsUUFBSSxPQUFPLEtBQUssUUFBTCxDQURRO0FBRW5CLFFBQUksVUFBVSxHQUFWLENBQUosRUFBb0I7QUFDbEIsYUFBTyxRQUFRLE9BQU8sR0FBUCxJQUFjLFFBQWQsR0FBeUIsS0FBSyxNQUFMLEdBQWMsS0FBSyxJQUFMLEVBQVcsR0FBMUQsQ0FBUCxDQURrQjtLQUFwQjtBQUdBLFdBQU8sTUFBTSxLQUFLLEdBQUwsQ0FBUyxHQUFULENBQWEsR0FBYixDQUFOLEdBQTBCLFNBQVMsS0FBSyxHQUFMLEVBQVUsR0FBbkIsQ0FBMUIsQ0FMWTtHQUFyQjs7OztBQUpJLFlBQU0sUUFBUSxRQUFSO0FBQ04saUJBQVcsUUFBUSxhQUFSO0FBQ1gsZ0JBQVUsUUFBUSxZQUFSO0FBQ1Ysa0JBQVksUUFBUSxjQUFSO0FBUWhCLGFBQU8sT0FBUCxHQUFpQixNQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fbWFwR2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgYXNzb2NHZXQgPSByZXF1aXJlKCcuL19hc3NvY0dldCcpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5mdW5jdGlvbiBtYXBHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGlzS2V5YWJsZShrZXkpKSB7XG4gICAgcmV0dXJuIGhhc2hHZXQodHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/IGRhdGEuc3RyaW5nIDogZGF0YS5oYXNoLCBrZXkpO1xuICB9XG4gIHJldHVybiBNYXAgPyBkYXRhLm1hcC5nZXQoa2V5KSA6IGFzc29jR2V0KGRhdGEubWFwLCBrZXkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBtYXBHZXQ7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
