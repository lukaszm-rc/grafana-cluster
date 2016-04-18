'use strict';

System.register([], function (_export, _context) {
  var arrayMap, baseIntersection, castArrayLikeObject, last, rest, intersectionWith;
  return {
    setters: [],
    execute: function () {
      arrayMap = require('./_arrayMap');
      baseIntersection = require('./_baseIntersection');
      castArrayLikeObject = require('./_castArrayLikeObject');
      last = require('./last');
      rest = require('./rest');
      intersectionWith = rest(function (arrays) {
        var comparator = last(arrays),
            mapped = arrayMap(arrays, castArrayLikeObject);
        if (comparator === last(mapped)) {
          comparator = undefined;
        } else {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined, comparator) : [];
      });

      module.exports = intersectionWith;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ludGVyc2VjdGlvbldpdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGlCQUFXLFFBQVEsYUFBUjtBQUNYLHlCQUFtQixRQUFRLHFCQUFSO0FBQ25CLDRCQUFzQixRQUFRLHdCQUFSO0FBQ3RCLGFBQU8sUUFBUSxRQUFSO0FBQ1AsYUFBTyxRQUFRLFFBQVI7QUFDUCx5QkFBbUIsS0FBSyxVQUFTLE1BQVQsRUFBaUI7QUFDM0MsWUFBSSxhQUFhLEtBQUssTUFBTCxDQUFiO1lBQ0EsU0FBUyxTQUFTLE1BQVQsRUFBaUIsbUJBQWpCLENBQVQsQ0FGdUM7QUFHM0MsWUFBSSxlQUFlLEtBQUssTUFBTCxDQUFmLEVBQTZCO0FBQy9CLHVCQUFhLFNBQWIsQ0FEK0I7U0FBakMsTUFFTztBQUNMLGlCQUFPLEdBQVAsR0FESztTQUZQO0FBS0EsZUFBTyxNQUFDLENBQU8sTUFBUCxJQUFpQixPQUFPLENBQVAsTUFBYyxPQUFPLENBQVAsQ0FBZCxHQUEyQixpQkFBaUIsTUFBakIsRUFBeUIsU0FBekIsRUFBb0MsVUFBcEMsQ0FBN0MsR0FBK0YsRUFBL0YsQ0FSb0M7T0FBakI7O0FBVTVCLGFBQU8sT0FBUCxHQUFpQixnQkFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvaW50ZXJzZWN0aW9uV2l0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBiYXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZSgnLi9fYmFzZUludGVyc2VjdGlvbicpLFxuICAgIGNhc3RBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL19jYXN0QXJyYXlMaWtlT2JqZWN0JyksXG4gICAgbGFzdCA9IHJlcXVpcmUoJy4vbGFzdCcpLFxuICAgIHJlc3QgPSByZXF1aXJlKCcuL3Jlc3QnKTtcbnZhciBpbnRlcnNlY3Rpb25XaXRoID0gcmVzdChmdW5jdGlvbihhcnJheXMpIHtcbiAgdmFyIGNvbXBhcmF0b3IgPSBsYXN0KGFycmF5cyksXG4gICAgICBtYXBwZWQgPSBhcnJheU1hcChhcnJheXMsIGNhc3RBcnJheUxpa2VPYmplY3QpO1xuICBpZiAoY29tcGFyYXRvciA9PT0gbGFzdChtYXBwZWQpKSB7XG4gICAgY29tcGFyYXRvciA9IHVuZGVmaW5lZDtcbiAgfSBlbHNlIHtcbiAgICBtYXBwZWQucG9wKCk7XG4gIH1cbiAgcmV0dXJuIChtYXBwZWQubGVuZ3RoICYmIG1hcHBlZFswXSA9PT0gYXJyYXlzWzBdKSA/IGJhc2VJbnRlcnNlY3Rpb24obWFwcGVkLCB1bmRlZmluZWQsIGNvbXBhcmF0b3IpIDogW107XG59KTtcbm1vZHVsZS5leHBvcnRzID0gaW50ZXJzZWN0aW9uV2l0aDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
