'use strict';

System.register([], function (_export, _context) {
  var arrayFilter, baseXor, isArrayLikeObject, last, rest, xorWith;
  return {
    setters: [],
    execute: function () {
      arrayFilter = require('./_arrayFilter');
      baseXor = require('./_baseXor');
      isArrayLikeObject = require('./isArrayLikeObject');
      last = require('./last');
      rest = require('./rest');
      xorWith = rest(function (arrays) {
        var comparator = last(arrays);
        if (isArrayLikeObject(comparator)) {
          comparator = undefined;
        }
        return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
      });

      module.exports = xorWith;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3hvcldpdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLG9CQUFjLFFBQVEsZ0JBQVI7QUFDZCxnQkFBVSxRQUFRLFlBQVI7QUFDViwwQkFBb0IsUUFBUSxxQkFBUjtBQUNwQixhQUFPLFFBQVEsUUFBUjtBQUNQLGFBQU8sUUFBUSxRQUFSO0FBQ1AsZ0JBQVUsS0FBSyxVQUFTLE1BQVQsRUFBaUI7QUFDbEMsWUFBSSxhQUFhLEtBQUssTUFBTCxDQUFiLENBRDhCO0FBRWxDLFlBQUksa0JBQWtCLFVBQWxCLENBQUosRUFBbUM7QUFDakMsdUJBQWEsU0FBYixDQURpQztTQUFuQztBQUdBLGVBQU8sUUFBUSxZQUFZLE1BQVosRUFBb0IsaUJBQXBCLENBQVIsRUFBZ0QsU0FBaEQsRUFBMkQsVUFBM0QsQ0FBUCxDQUxrQztPQUFqQjs7QUFPbkIsYUFBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3hvcldpdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgYmFzZVhvciA9IHJlcXVpcmUoJy4vX2Jhc2VYb3InKSxcbiAgICBpc0FycmF5TGlrZU9iamVjdCA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2VPYmplY3QnKSxcbiAgICBsYXN0ID0gcmVxdWlyZSgnLi9sYXN0JyksXG4gICAgcmVzdCA9IHJlcXVpcmUoJy4vcmVzdCcpO1xudmFyIHhvcldpdGggPSByZXN0KGZ1bmN0aW9uKGFycmF5cykge1xuICB2YXIgY29tcGFyYXRvciA9IGxhc3QoYXJyYXlzKTtcbiAgaWYgKGlzQXJyYXlMaWtlT2JqZWN0KGNvbXBhcmF0b3IpKSB7XG4gICAgY29tcGFyYXRvciA9IHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4gYmFzZVhvcihhcnJheUZpbHRlcihhcnJheXMsIGlzQXJyYXlMaWtlT2JqZWN0KSwgdW5kZWZpbmVkLCBjb21wYXJhdG9yKTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSB4b3JXaXRoO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
