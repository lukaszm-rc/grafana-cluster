'use strict';

System.register([], function (_export, _context) {
  var keys;

  function baseConforms(source) {
    var props = keys(source),
        length = props.length;
    return function (object) {
      if (object == null) {
        return !length;
      }
      var index = length;
      while (index--) {
        var key = props[index],
            predicate = source[key],
            value = object[key];
        if (value === undefined && !(key in Object(object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    };
  }
  return {
    setters: [],
    execute: function () {
      keys = require('./keys');
      module.exports = baseConforms;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlQ29uZm9ybXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxXQUFTLFlBQVQsQ0FBc0IsTUFBdEIsRUFBOEI7QUFDNUIsUUFBSSxRQUFRLEtBQUssTUFBTCxDQUFSO1FBQ0EsU0FBUyxNQUFNLE1BQU4sQ0FGZTtBQUc1QixXQUFPLFVBQVMsTUFBVCxFQUFpQjtBQUN0QixVQUFJLFVBQVUsSUFBVixFQUFnQjtBQUNsQixlQUFPLENBQUMsTUFBRCxDQURXO09BQXBCO0FBR0EsVUFBSSxRQUFRLE1BQVIsQ0FKa0I7QUFLdEIsYUFBTyxPQUFQLEVBQWdCO0FBQ2QsWUFBSSxNQUFNLE1BQU0sS0FBTixDQUFOO1lBQ0EsWUFBWSxPQUFPLEdBQVAsQ0FBWjtZQUNBLFFBQVEsT0FBTyxHQUFQLENBQVIsQ0FIVTtBQUlkLFlBQUksS0FBQyxLQUFVLFNBQVYsSUFBdUIsRUFBRSxPQUFPLE9BQU8sTUFBUCxDQUFQLENBQUYsSUFBNkIsQ0FBQyxVQUFVLEtBQVYsQ0FBRCxFQUFtQjtBQUMxRSxpQkFBTyxLQUFQLENBRDBFO1NBQTVFO09BSkY7QUFRQSxhQUFPLElBQVAsQ0Fic0I7S0FBakIsQ0FIcUI7R0FBOUI7Ozs7QUFESSxhQUFPLFFBQVEsUUFBUjtBQW9CWCxhQUFPLE9BQVAsR0FBaUIsWUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2Jhc2VDb25mb3Jtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcbmZ1bmN0aW9uIGJhc2VDb25mb3Jtcyhzb3VyY2UpIHtcbiAgdmFyIHByb3BzID0ga2V5cyhzb3VyY2UpLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gIWxlbmd0aDtcbiAgICB9XG4gICAgdmFyIGluZGV4ID0gbGVuZ3RoO1xuICAgIHdoaWxlIChpbmRleC0tKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdLFxuICAgICAgICAgIHByZWRpY2F0ZSA9IHNvdXJjZVtrZXldLFxuICAgICAgICAgIHZhbHVlID0gb2JqZWN0W2tleV07XG4gICAgICBpZiAoKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gT2JqZWN0KG9iamVjdCkpKSB8fCAhcHJlZGljYXRlKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ29uZm9ybXM7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
