'use strict';

System.register([], function (_export, _context) {
  var assocDelete;

  function stackDelete(key) {
    var data = this.__data__,
        array = data.array;
    return array ? assocDelete(array, key) : data.map['delete'](key);
  }
  return {
    setters: [],
    execute: function () {
      assocDelete = require('./_assocDelete');
      module.exports = stackDelete;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19zdGFja0RlbGV0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLFdBQVMsV0FBVCxDQUFxQixHQUFyQixFQUEwQjtBQUN4QixRQUFJLE9BQU8sS0FBSyxRQUFMO1FBQ1AsUUFBUSxLQUFLLEtBQUwsQ0FGWTtBQUd4QixXQUFPLFFBQVEsWUFBWSxLQUFaLEVBQW1CLEdBQW5CLENBQVIsR0FBa0MsS0FBSyxHQUFMLENBQVMsUUFBVCxFQUFtQixHQUFuQixDQUFsQyxDQUhpQjtHQUExQjs7OztBQURJLG9CQUFjLFFBQVEsZ0JBQVI7QUFNbEIsYUFBTyxPQUFQLEdBQWlCLFdBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19zdGFja0RlbGV0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFzc29jRGVsZXRlID0gcmVxdWlyZSgnLi9fYXNzb2NEZWxldGUnKTtcbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBhcnJheSA9IGRhdGEuYXJyYXk7XG4gIHJldHVybiBhcnJheSA/IGFzc29jRGVsZXRlKGFycmF5LCBrZXkpIDogZGF0YS5tYXBbJ2RlbGV0ZSddKGtleSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrRGVsZXRlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
