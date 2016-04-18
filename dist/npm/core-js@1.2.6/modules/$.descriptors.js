'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      module.exports = !require('./$.fails')(function () {
        return Object.defineProperty({}, 'a', { get: function get() {
            return 7;
          } }).a != 7;
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5kZXNjcmlwdG9ycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsYUFBTyxPQUFQLEdBQWlCLENBQUMsUUFBUSxXQUFSLEVBQXFCLFlBQVc7QUFDaEQsZUFBTyxPQUFPLGNBQVAsQ0FBc0IsRUFBdEIsRUFBMEIsR0FBMUIsRUFBK0IsRUFBQyxLQUFLLGVBQVc7QUFDbkQsbUJBQU8sQ0FBUCxDQURtRDtXQUFYLEVBQXJDLEVBRUQsQ0FGQyxJQUVJLENBRkosQ0FEeUM7T0FBWCxDQUF0QiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzLyQuZGVzY3JpcHRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vJC5mYWlscycpKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIDc7XG4gICAgfX0pLmEgIT0gNztcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
