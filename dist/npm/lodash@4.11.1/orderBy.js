'use strict';

System.register([], function (_export, _context) {
  var baseOrderBy, isArray;

  function orderBy(collection, iteratees, orders, guard) {
    if (collection == null) {
      return [];
    }
    if (!isArray(iteratees)) {
      iteratees = iteratees == null ? [] : [iteratees];
    }
    orders = guard ? undefined : orders;
    if (!isArray(orders)) {
      orders = orders == null ? [] : [orders];
    }
    return baseOrderBy(collection, iteratees, orders);
  }
  return {
    setters: [],
    execute: function () {
      baseOrderBy = require('./_baseOrderBy');
      isArray = require('./isArray');
      module.exports = orderBy;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL29yZGVyQnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLE9BQVQsQ0FBaUIsVUFBakIsRUFBNkIsU0FBN0IsRUFBd0MsTUFBeEMsRUFBZ0QsS0FBaEQsRUFBdUQ7QUFDckQsUUFBSSxjQUFjLElBQWQsRUFBb0I7QUFDdEIsYUFBTyxFQUFQLENBRHNCO0tBQXhCO0FBR0EsUUFBSSxDQUFDLFFBQVEsU0FBUixDQUFELEVBQXFCO0FBQ3ZCLGtCQUFZLGFBQWEsSUFBYixHQUFvQixFQUFwQixHQUF5QixDQUFDLFNBQUQsQ0FBekIsQ0FEVztLQUF6QjtBQUdBLGFBQVMsUUFBUSxTQUFSLEdBQW9CLE1BQXBCLENBUDRDO0FBUXJELFFBQUksQ0FBQyxRQUFRLE1BQVIsQ0FBRCxFQUFrQjtBQUNwQixlQUFTLFVBQVUsSUFBVixHQUFpQixFQUFqQixHQUFzQixDQUFDLE1BQUQsQ0FBdEIsQ0FEVztLQUF0QjtBQUdBLFdBQU8sWUFBWSxVQUFaLEVBQXdCLFNBQXhCLEVBQW1DLE1BQW5DLENBQVAsQ0FYcUQ7R0FBdkQ7Ozs7QUFGSSxvQkFBYyxRQUFRLGdCQUFSO0FBQ2QsZ0JBQVUsUUFBUSxXQUFSO0FBY2QsYUFBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL29yZGVyQnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlT3JkZXJCeSA9IHJlcXVpcmUoJy4vX2Jhc2VPcmRlckJ5JyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuZnVuY3Rpb24gb3JkZXJCeShjb2xsZWN0aW9uLCBpdGVyYXRlZXMsIG9yZGVycywgZ3VhcmQpIHtcbiAgaWYgKGNvbGxlY3Rpb24gPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBpZiAoIWlzQXJyYXkoaXRlcmF0ZWVzKSkge1xuICAgIGl0ZXJhdGVlcyA9IGl0ZXJhdGVlcyA9PSBudWxsID8gW10gOiBbaXRlcmF0ZWVzXTtcbiAgfVxuICBvcmRlcnMgPSBndWFyZCA/IHVuZGVmaW5lZCA6IG9yZGVycztcbiAgaWYgKCFpc0FycmF5KG9yZGVycykpIHtcbiAgICBvcmRlcnMgPSBvcmRlcnMgPT0gbnVsbCA/IFtdIDogW29yZGVyc107XG4gIH1cbiAgcmV0dXJuIGJhc2VPcmRlckJ5KGNvbGxlY3Rpb24sIGl0ZXJhdGVlcywgb3JkZXJzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gb3JkZXJCeTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
