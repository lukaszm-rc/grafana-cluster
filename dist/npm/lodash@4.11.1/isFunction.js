'use strict';

System.register([], function (_export, _context) {
  var isObject, funcTag, genTag, objectProto, objectToString;

  function isFunction(value) {
    var tag = isObject(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag;
  }
  return {
    setters: [],
    execute: function () {
      isObject = require('./isObject');
      funcTag = '[object Function]';
      genTag = '[object GeneratorFunction]';
      objectProto = Object.prototype;
      objectToString = objectProto.toString;
      module.exports = isFunction;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzRnVuY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxXQUFTLFVBQVQsQ0FBb0IsS0FBcEIsRUFBMkI7QUFDekIsUUFBSSxNQUFNLFNBQVMsS0FBVCxJQUFrQixlQUFlLElBQWYsQ0FBb0IsS0FBcEIsQ0FBbEIsR0FBK0MsRUFBL0MsQ0FEZTtBQUV6QixXQUFPLE9BQU8sT0FBUCxJQUFrQixPQUFPLE1BQVAsQ0FGQTtHQUEzQjs7OztBQUxJLGlCQUFXLFFBQVEsWUFBUjtBQUNYLGdCQUFVO0FBQ1YsZUFBUztBQUNULG9CQUFjLE9BQU8sU0FBUDtBQUNkLHVCQUFpQixZQUFZLFFBQVo7QUFLckIsYUFBTyxPQUFQLEdBQWlCLFVBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2lzRnVuY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcbnZhciBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICB2YXIgdGFnID0gaXNPYmplY3QodmFsdWUpID8gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
