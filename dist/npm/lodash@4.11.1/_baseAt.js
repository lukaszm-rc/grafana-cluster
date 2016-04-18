'use strict';

System.register([], function (_export, _context) {
  var get;

  function baseAt(object, paths) {
    var index = -1,
        isNil = object == null,
        length = paths.length,
        result = Array(length);
    while (++index < length) {
      result[index] = isNil ? undefined : get(object, paths[index]);
    }
    return result;
  }
  return {
    setters: [],
    execute: function () {
      get = require('./get');
      module.exports = baseAt;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlQXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxXQUFTLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0IsS0FBeEIsRUFBK0I7QUFDN0IsUUFBSSxRQUFRLENBQUMsQ0FBRDtRQUNSLFFBQVEsVUFBVSxJQUFWO1FBQ1IsU0FBUyxNQUFNLE1BQU47UUFDVCxTQUFTLE1BQU0sTUFBTixDQUFULENBSnlCO0FBSzdCLFdBQU8sRUFBRSxLQUFGLEdBQVUsTUFBVixFQUFrQjtBQUN2QixhQUFPLEtBQVAsSUFBZ0IsUUFBUSxTQUFSLEdBQW9CLElBQUksTUFBSixFQUFZLE1BQU0sS0FBTixDQUFaLENBQXBCLENBRE87S0FBekI7QUFHQSxXQUFPLE1BQVAsQ0FSNkI7R0FBL0I7Ozs7QUFESSxZQUFNLFFBQVEsT0FBUjtBQVdWLGFBQU8sT0FBUCxHQUFpQixNQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fYmFzZUF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgZ2V0ID0gcmVxdWlyZSgnLi9nZXQnKTtcbmZ1bmN0aW9uIGJhc2VBdChvYmplY3QsIHBhdGhzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgaXNOaWwgPSBvYmplY3QgPT0gbnVsbCxcbiAgICAgIGxlbmd0aCA9IHBhdGhzLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGlzTmlsID8gdW5kZWZpbmVkIDogZ2V0KG9iamVjdCwgcGF0aHNbaW5kZXhdKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXQ7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
