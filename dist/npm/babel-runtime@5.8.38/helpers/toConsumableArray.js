/* */
"use strict";

System.register([], function (_export, _context) {
  var _from, _from2;

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      _from = require('../core-js/array/from');
      _from2 = _interopRequireDefault(_from);
      exports.default = function (arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        } else {
          return (0, _from2.default)(arr);
        }
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7QUFJQSxXQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQ25DLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBQyxTQUFTLEdBQVQsRUFBL0IsQ0FENEI7R0FBckM7Ozs7QUFIQSxjQUFRLFVBQVIsR0FBcUIsSUFBckI7QUFDSSxjQUFRLFFBQVEsdUJBQVI7QUFDUixlQUFTLHVCQUF1QixLQUF2QjtBQUliLGNBQVEsT0FBUixHQUFrQixVQUFTLEdBQVQsRUFBYztBQUM5QixZQUFJLE1BQU0sT0FBTixDQUFjLEdBQWQsQ0FBSixFQUF3QjtBQUN0QixlQUFLLElBQUksSUFBSSxDQUFKLEVBQ0wsT0FBTyxNQUFNLElBQUksTUFBSixDQUFiLEVBQTBCLElBQUksSUFBSSxNQUFKLEVBQVksR0FEOUMsRUFDbUQ7QUFDakQsaUJBQUssQ0FBTCxJQUFVLElBQUksQ0FBSixDQUFWLENBRGlEO1dBRG5EO0FBSUEsaUJBQU8sSUFBUCxDQUxzQjtTQUF4QixNQU1PO0FBQ0wsaUJBQU8sQ0FBQyxHQUFHLE9BQU8sT0FBUCxDQUFKLENBQW9CLEdBQXBCLENBQVAsQ0FESztTQU5QO09BRGdCIiwiZmlsZSI6Im5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgX2Zyb20gPSByZXF1aXJlKCcuLi9jb3JlLWpzL2FycmF5L2Zyb20nKTtcbnZhciBfZnJvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcm9tKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ZGVmYXVsdDogb2JqfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsXG4gICAgICAgIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
