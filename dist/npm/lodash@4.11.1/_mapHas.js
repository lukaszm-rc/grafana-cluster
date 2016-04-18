'use strict';

System.register([], function (_export, _context) {
  var Map, assocHas, hashHas, isKeyable;

  function mapHas(key) {
    var data = this.__data__;
    if (isKeyable(key)) {
      return hashHas(typeof key == 'string' ? data.string : data.hash, key);
    }
    return Map ? data.map.has(key) : assocHas(data.map, key);
  }
  return {
    setters: [],
    execute: function () {
      Map = require('./_Map');
      assocHas = require('./_assocHas');
      hashHas = require('./_hashHas');
      isKeyable = require('./_isKeyable');
      module.exports = mapHas;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19tYXBIYXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxXQUFTLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUI7QUFDbkIsUUFBSSxPQUFPLEtBQUssUUFBTCxDQURRO0FBRW5CLFFBQUksVUFBVSxHQUFWLENBQUosRUFBb0I7QUFDbEIsYUFBTyxRQUFRLE9BQU8sR0FBUCxJQUFjLFFBQWQsR0FBeUIsS0FBSyxNQUFMLEdBQWMsS0FBSyxJQUFMLEVBQVcsR0FBMUQsQ0FBUCxDQURrQjtLQUFwQjtBQUdBLFdBQU8sTUFBTSxLQUFLLEdBQUwsQ0FBUyxHQUFULENBQWEsR0FBYixDQUFOLEdBQTBCLFNBQVMsS0FBSyxHQUFMLEVBQVUsR0FBbkIsQ0FBMUIsQ0FMWTtHQUFyQjs7OztBQUpJLFlBQU0sUUFBUSxRQUFSO0FBQ04saUJBQVcsUUFBUSxhQUFSO0FBQ1gsZ0JBQVUsUUFBUSxZQUFSO0FBQ1Ysa0JBQVksUUFBUSxjQUFSO0FBUWhCLGFBQU8sT0FBUCxHQUFpQixNQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fbWFwSGFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgYXNzb2NIYXMgPSByZXF1aXJlKCcuL19hc3NvY0hhcycpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5mdW5jdGlvbiBtYXBIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGlzS2V5YWJsZShrZXkpKSB7XG4gICAgcmV0dXJuIGhhc2hIYXModHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/IGRhdGEuc3RyaW5nIDogZGF0YS5oYXNoLCBrZXkpO1xuICB9XG4gIHJldHVybiBNYXAgPyBkYXRhLm1hcC5oYXMoa2V5KSA6IGFzc29jSGFzKGRhdGEubWFwLCBrZXkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBtYXBIYXM7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
