'use strict';

System.register([], function (_export, _context) {
  var arrayEach, baseFlatten, bind, rest, bindAll;
  return {
    setters: [],
    execute: function () {
      arrayEach = require('./_arrayEach');
      baseFlatten = require('./_baseFlatten');
      bind = require('./bind');
      rest = require('./rest');
      bindAll = rest(function (object, methodNames) {
        arrayEach(baseFlatten(methodNames, 1), function (key) {
          object[key] = bind(object[key], object);
        });
        return object;
      });

      module.exports = bindAll;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2JpbmRBbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGtCQUFZLFFBQVEsY0FBUjtBQUNaLG9CQUFjLFFBQVEsZ0JBQVI7QUFDZCxhQUFPLFFBQVEsUUFBUjtBQUNQLGFBQU8sUUFBUSxRQUFSO0FBQ1AsZ0JBQVUsS0FBSyxVQUFTLE1BQVQsRUFBaUIsV0FBakIsRUFBOEI7QUFDL0Msa0JBQVUsWUFBWSxXQUFaLEVBQXlCLENBQXpCLENBQVYsRUFBdUMsVUFBUyxHQUFULEVBQWM7QUFDbkQsaUJBQU8sR0FBUCxJQUFjLEtBQUssT0FBTyxHQUFQLENBQUwsRUFBa0IsTUFBbEIsQ0FBZCxDQURtRDtTQUFkLENBQXZDLENBRCtDO0FBSS9DLGVBQU8sTUFBUCxDQUorQztPQUE5Qjs7QUFNbkIsYUFBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2JpbmRBbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBhcnJheUVhY2ggPSByZXF1aXJlKCcuL19hcnJheUVhY2gnKSxcbiAgICBiYXNlRmxhdHRlbiA9IHJlcXVpcmUoJy4vX2Jhc2VGbGF0dGVuJyksXG4gICAgYmluZCA9IHJlcXVpcmUoJy4vYmluZCcpLFxuICAgIHJlc3QgPSByZXF1aXJlKCcuL3Jlc3QnKTtcbnZhciBiaW5kQWxsID0gcmVzdChmdW5jdGlvbihvYmplY3QsIG1ldGhvZE5hbWVzKSB7XG4gIGFycmF5RWFjaChiYXNlRmxhdHRlbihtZXRob2ROYW1lcywgMSksIGZ1bmN0aW9uKGtleSkge1xuICAgIG9iamVjdFtrZXldID0gYmluZChvYmplY3Rba2V5XSwgb2JqZWN0KTtcbiAgfSk7XG4gIHJldHVybiBvYmplY3Q7XG59KTtcbm1vZHVsZS5leHBvcnRzID0gYmluZEFsbDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
