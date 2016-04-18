/* */
"use strict";

System.register([], function (_export, _context) {
  var _defineProperty, _defineProperty2;

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      _defineProperty = require('../core-js/object/define-property');
      _defineProperty2 = _interopRequireDefault(_defineProperty);
      exports.default = function (obj, descs) {
        for (var key in descs) {
          var desc = descs[key];
          desc.configurable = desc.enumerable = true;
          if ("value" in desc) desc.writable = true;
          (0, _defineProperty2.default)(obj, key, desc);
        }
        return obj;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL2RlZmluZUVudW1lcmFibGVQcm9wZXJ0aWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7QUFJQSxXQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQ25DLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBQyxTQUFTLEdBQVQsRUFBL0IsQ0FENEI7R0FBckM7Ozs7QUFIQSxjQUFRLFVBQVIsR0FBcUIsSUFBckI7QUFDSSx3QkFBa0IsUUFBUSxtQ0FBUjtBQUNsQix5QkFBbUIsdUJBQXVCLGVBQXZCO0FBSXZCLGNBQVEsT0FBUixHQUFrQixVQUFTLEdBQVQsRUFBYyxLQUFkLEVBQXFCO0FBQ3JDLGFBQUssSUFBSSxHQUFKLElBQVcsS0FBaEIsRUFBdUI7QUFDckIsY0FBSSxPQUFPLE1BQU0sR0FBTixDQUFQLENBRGlCO0FBRXJCLGVBQUssWUFBTCxHQUFvQixLQUFLLFVBQUwsR0FBa0IsSUFBbEIsQ0FGQztBQUdyQixjQUFJLFdBQVcsSUFBWCxFQUNGLEtBQUssUUFBTCxHQUFnQixJQUFoQixDQURGO0FBRUEsV0FBQyxHQUFHLGlCQUFpQixPQUFqQixDQUFKLENBQThCLEdBQTlCLEVBQW1DLEdBQW5DLEVBQXdDLElBQXhDLEVBTHFCO1NBQXZCO0FBT0EsZUFBTyxHQUFQLENBUnFDO09BQXJCIiwiZmlsZSI6Im5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL2RlZmluZUVudW1lcmFibGVQcm9wZXJ0aWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ZGVmYXVsdDogb2JqfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uKG9iaiwgZGVzY3MpIHtcbiAgZm9yICh2YXIga2V5IGluIGRlc2NzKSB7XG4gICAgdmFyIGRlc2MgPSBkZXNjc1trZXldO1xuICAgIGRlc2MuY29uZmlndXJhYmxlID0gZGVzYy5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpXG4gICAgICBkZXNjLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KShvYmosIGtleSwgZGVzYyk7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
