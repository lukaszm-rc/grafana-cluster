'use strict';

System.register([], function (_export, _context) {
    var arrayMap, baseIntersection, castArrayLikeObject, rest, intersection;
    return {
        setters: [],
        execute: function () {
            arrayMap = require('./_arrayMap');
            baseIntersection = require('./_baseIntersection');
            castArrayLikeObject = require('./_castArrayLikeObject');
            rest = require('./rest');
            intersection = rest(function (arrays) {
                var mapped = arrayMap(arrays, castArrayLikeObject);
                return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
            });

            module.exports = intersection;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ludGVyc2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksdUJBQVcsUUFBUSxhQUFSO0FBQ1gsK0JBQW1CLFFBQVEscUJBQVI7QUFDbkIsa0NBQXNCLFFBQVEsd0JBQVI7QUFDdEIsbUJBQU8sUUFBUSxRQUFSO0FBQ1AsMkJBQWUsS0FBSyxVQUFTLE1BQVQsRUFBaUI7QUFDdkMsb0JBQUksU0FBUyxTQUFTLE1BQVQsRUFBaUIsbUJBQWpCLENBQVQsQ0FEbUM7QUFFdkMsdUJBQU8sTUFBQyxDQUFPLE1BQVAsSUFBaUIsT0FBTyxDQUFQLE1BQWMsT0FBTyxDQUFQLENBQWQsR0FBMkIsaUJBQWlCLE1BQWpCLENBQTdDLEdBQXdFLEVBQXhFLENBRmdDO2FBQWpCOztBQUl4QixtQkFBTyxPQUFQLEdBQWlCLFlBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2ludGVyc2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBiYXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZSgnLi9fYmFzZUludGVyc2VjdGlvbicpLFxuICAgIGNhc3RBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL19jYXN0QXJyYXlMaWtlT2JqZWN0JyksXG4gICAgcmVzdCA9IHJlcXVpcmUoJy4vcmVzdCcpO1xudmFyIGludGVyc2VjdGlvbiA9IHJlc3QoZnVuY3Rpb24oYXJyYXlzKSB7XG4gIHZhciBtYXBwZWQgPSBhcnJheU1hcChhcnJheXMsIGNhc3RBcnJheUxpa2VPYmplY3QpO1xuICByZXR1cm4gKG1hcHBlZC5sZW5ndGggJiYgbWFwcGVkWzBdID09PSBhcnJheXNbMF0pID8gYmFzZUludGVyc2VjdGlvbihtYXBwZWQpIDogW107XG59KTtcbm1vZHVsZS5leHBvcnRzID0gaW50ZXJzZWN0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
