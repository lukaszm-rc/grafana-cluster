'use strict';

System.register([], function (_export, _context) {
  var copyObject, keysIn;

  function toPlainObject(value) {
    return copyObject(value, keysIn(value));
  }
  return {
    setters: [],
    execute: function () {
      copyObject = require('./_copyObject');
      keysIn = require('./keysIn');
      module.exports = toPlainObject;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3RvUGxhaW5PYmplY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLGFBQVQsQ0FBdUIsS0FBdkIsRUFBOEI7QUFDNUIsV0FBTyxXQUFXLEtBQVgsRUFBa0IsT0FBTyxLQUFQLENBQWxCLENBQVAsQ0FENEI7R0FBOUI7Ozs7QUFGSSxtQkFBYSxRQUFRLGVBQVI7QUFDYixlQUFTLFFBQVEsVUFBUjtBQUliLGFBQU8sT0FBUCxHQUFpQixhQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS90b1BsYWluT2JqZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuZnVuY3Rpb24gdG9QbGFpbk9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gY29weU9iamVjdCh2YWx1ZSwga2V5c0luKHZhbHVlKSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHRvUGxhaW5PYmplY3Q7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
