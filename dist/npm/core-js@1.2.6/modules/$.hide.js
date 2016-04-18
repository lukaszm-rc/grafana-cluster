'use strict';

System.register([], function (_export, _context) {
  var $, createDesc;
  return {
    setters: [],
    execute: function () {
      $ = require('./$');
      createDesc = require('./$.property-desc');

      module.exports = require('./$.descriptors') ? function (object, key, value) {
        return $.setDesc(object, key, createDesc(1, value));
      } : function (object, key, value) {
        object[key] = value;
        return object;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5oaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxVQUFJLFFBQVEsS0FBUjtBQUNKLG1CQUFhLFFBQVEsbUJBQVI7O0FBQ2pCLGFBQU8sT0FBUCxHQUFpQixRQUFRLGlCQUFSLElBQTZCLFVBQVMsTUFBVCxFQUFpQixHQUFqQixFQUFzQixLQUF0QixFQUE2QjtBQUN6RSxlQUFPLEVBQUUsT0FBRixDQUFVLE1BQVYsRUFBa0IsR0FBbEIsRUFBdUIsV0FBVyxDQUFYLEVBQWMsS0FBZCxDQUF2QixDQUFQLENBRHlFO09BQTdCLEdBRTFDLFVBQVMsTUFBVCxFQUFpQixHQUFqQixFQUFzQixLQUF0QixFQUE2QjtBQUMvQixlQUFPLEdBQVAsSUFBYyxLQUFkLENBRCtCO0FBRS9CLGVBQU8sTUFBUCxDQUYrQjtPQUE3QiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzLyQuaGlkZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICQgPSByZXF1aXJlKCcuLyQnKSxcbiAgICBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuICQuc2V0RGVzYyhvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
