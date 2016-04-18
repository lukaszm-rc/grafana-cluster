'use strict';

System.register([], function (_export, _context) {
  var baseToPairs, keysIn;

  function toPairsIn(object) {
    return baseToPairs(object, keysIn(object));
  }
  return {
    setters: [],
    execute: function () {
      baseToPairs = require('./_baseToPairs');
      keysIn = require('./keysIn');
      module.exports = toPairsIn;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3RvUGFpcnNJbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsU0FBVCxDQUFtQixNQUFuQixFQUEyQjtBQUN6QixXQUFPLFlBQVksTUFBWixFQUFvQixPQUFPLE1BQVAsQ0FBcEIsQ0FBUCxDQUR5QjtHQUEzQjs7OztBQUZJLG9CQUFjLFFBQVEsZ0JBQVI7QUFDZCxlQUFTLFFBQVEsVUFBUjtBQUliLGFBQU8sT0FBUCxHQUFpQixTQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS90b1BhaXJzSW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlVG9QYWlycyA9IHJlcXVpcmUoJy4vX2Jhc2VUb1BhaXJzJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcbmZ1bmN0aW9uIHRvUGFpcnNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VUb1BhaXJzKG9iamVjdCwga2V5c0luKG9iamVjdCkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSB0b1BhaXJzSW47XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
