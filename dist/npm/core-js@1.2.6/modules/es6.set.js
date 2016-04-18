/* */
'use strict';

System.register([], function (_export, _context) {
  var strong;
  return {
    setters: [],
    execute: function () {
      strong = require('./$.collection-strong');

      require('./$.collection')('Set', function (get) {
        return function Set() {
          return get(this, arguments.length > 0 ? arguments[0] : undefined);
        };
      }, { add: function add(value) {
          return strong.def(this, value = value === 0 ? 0 : value, value);
        } }, strong);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnNldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7QUFDSSxlQUFTLFFBQVEsdUJBQVI7O0FBQ2IsY0FBUSxnQkFBUixFQUEwQixLQUExQixFQUFpQyxVQUFTLEdBQVQsRUFBYztBQUM3QyxlQUFPLFNBQVMsR0FBVCxHQUFlO0FBQ3BCLGlCQUFPLElBQUksSUFBSixFQUFVLFVBQVUsTUFBVixHQUFtQixDQUFuQixHQUF1QixVQUFVLENBQVYsQ0FBdkIsR0FBc0MsU0FBdEMsQ0FBakIsQ0FEb0I7U0FBZixDQURzQztPQUFkLEVBSTlCLEVBQUMsS0FBSyxTQUFTLEdBQVQsQ0FBYSxLQUFiLEVBQW9CO0FBQ3pCLGlCQUFPLE9BQU8sR0FBUCxDQUFXLElBQVgsRUFBaUIsUUFBUSxVQUFVLENBQVYsR0FBYyxDQUFkLEdBQWtCLEtBQWxCLEVBQXlCLEtBQWxELENBQVAsQ0FEeUI7U0FBcEIsRUFKVCxFQU1NLE1BTk4iLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy9lczYuc2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24tc3Ryb25nJyk7XG5yZXF1aXJlKCcuLyQuY29sbGVjdGlvbicpKCdTZXQnLCBmdW5jdGlvbihnZXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIFNldCgpIHtcbiAgICByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgfTtcbn0sIHthZGQ6IGZ1bmN0aW9uIGFkZCh2YWx1ZSkge1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHRoaXMsIHZhbHVlID0gdmFsdWUgPT09IDAgPyAwIDogdmFsdWUsIHZhbHVlKTtcbiAgfX0sIHN0cm9uZyk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
