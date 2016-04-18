'use strict';

System.register([], function (_export, _context) {
  var getPrototype, isHostObject, isObjectLike, objectTag, objectProto, funcToString, hasOwnProperty, objectCtorString, objectToString;

  function isPlainObject(value) {
    if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }
  return {
    setters: [],
    execute: function () {
      getPrototype = require('./_getPrototype');
      isHostObject = require('./_isHostObject');
      isObjectLike = require('./isObjectLike');
      objectTag = '[object Object]';
      objectProto = Object.prototype;
      funcToString = Function.prototype.toString;
      hasOwnProperty = objectProto.hasOwnProperty;
      objectCtorString = funcToString.call(Object);
      objectToString = objectProto.toString;
      module.exports = isPlainObject;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzUGxhaW5PYmplY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFVQSxXQUFTLGFBQVQsQ0FBdUIsS0FBdkIsRUFBOEI7QUFDNUIsUUFBSSxDQUFDLGFBQWEsS0FBYixDQUFELElBQXdCLGVBQWUsSUFBZixDQUFvQixLQUFwQixLQUE4QixTQUE5QixJQUEyQyxhQUFhLEtBQWIsQ0FBbkUsRUFBd0Y7QUFDMUYsYUFBTyxLQUFQLENBRDBGO0tBQTVGO0FBR0EsUUFBSSxRQUFRLGFBQWEsS0FBYixDQUFSLENBSndCO0FBSzVCLFFBQUksVUFBVSxJQUFWLEVBQWdCO0FBQ2xCLGFBQU8sSUFBUCxDQURrQjtLQUFwQjtBQUdBLFFBQUksT0FBTyxlQUFlLElBQWYsQ0FBb0IsS0FBcEIsRUFBMkIsYUFBM0IsS0FBNkMsTUFBTSxXQUFOLENBUjVCO0FBUzVCLFdBQVEsT0FBTyxJQUFQLElBQWUsVUFBZixJQUE2QixnQkFBZ0IsSUFBaEIsSUFBd0IsYUFBYSxJQUFiLENBQWtCLElBQWxCLEtBQTJCLGdCQUEzQixDQVRqQztHQUE5Qjs7OztBQVRJLHFCQUFlLFFBQVEsaUJBQVI7QUFDZixxQkFBZSxRQUFRLGlCQUFSO0FBQ2YscUJBQWUsUUFBUSxnQkFBUjtBQUNmLGtCQUFZO0FBQ1osb0JBQWMsT0FBTyxTQUFQO0FBQ2QscUJBQWUsU0FBUyxTQUFULENBQW1CLFFBQW5CO0FBQ2YsdUJBQWlCLFlBQVksY0FBWjtBQUNqQix5QkFBbUIsYUFBYSxJQUFiLENBQWtCLE1BQWxCO0FBQ25CLHVCQUFpQixZQUFZLFFBQVo7QUFZckIsYUFBTyxPQUFQLEdBQWlCLGFBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2lzUGxhaW5PYmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBpc0hvc3RPYmplY3QgPSByZXF1aXJlKCcuL19pc0hvc3RPYmplY3QnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xudmFyIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBmdW5jVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcbnZhciBvYmplY3RDdG9yU3RyaW5nID0gZnVuY1RvU3RyaW5nLmNhbGwoT2JqZWN0KTtcbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgfHwgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgIT0gb2JqZWN0VGFnIHx8IGlzSG9zdE9iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHByb3RvID0gZ2V0UHJvdG90eXBlKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIEN0b3IgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCAnY29uc3RydWN0b3InKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmcpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpc1BsYWluT2JqZWN0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
