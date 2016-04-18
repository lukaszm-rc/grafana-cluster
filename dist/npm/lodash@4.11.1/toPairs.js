'use strict';

System.register([], function (_export, _context) {
  var baseToPairs, keys;

  function toPairs(object) {
    return baseToPairs(object, keys(object));
  }
  return {
    setters: [],
    execute: function () {
      baseToPairs = require('./_baseToPairs');
      keys = require('./keys');
      module.exports = toPairs;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3RvUGFpcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLE9BQVQsQ0FBaUIsTUFBakIsRUFBeUI7QUFDdkIsV0FBTyxZQUFZLE1BQVosRUFBb0IsS0FBSyxNQUFMLENBQXBCLENBQVAsQ0FEdUI7R0FBekI7Ozs7QUFGSSxvQkFBYyxRQUFRLGdCQUFSO0FBQ2QsYUFBTyxRQUFRLFFBQVI7QUFJWCxhQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvdG9QYWlycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VUb1BhaXJzID0gcmVxdWlyZSgnLi9fYmFzZVRvUGFpcnMnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5mdW5jdGlvbiB0b1BhaXJzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZVRvUGFpcnMob2JqZWN0LCBrZXlzKG9iamVjdCkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSB0b1BhaXJzO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
