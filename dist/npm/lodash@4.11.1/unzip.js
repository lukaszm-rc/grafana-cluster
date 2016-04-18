'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      (function (process) {
        var arrayFilter = require('./_arrayFilter'),
            arrayMap = require('./_arrayMap'),
            baseProperty = require('./_baseProperty'),
            baseTimes = require('./_baseTimes'),
            isArrayLikeObject = require('./isArrayLikeObject');
        var nativeMax = Math.max;
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function (group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function (index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        module.exports = unzip;
      })(require('process'));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3VuemlwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFDLFVBQVMsT0FBVCxFQUFrQjtBQUNqQixZQUFJLGNBQWMsUUFBUSxnQkFBUixDQUFkO1lBQ0EsV0FBVyxRQUFRLGFBQVIsQ0FBWDtZQUNBLGVBQWUsUUFBUSxpQkFBUixDQUFmO1lBQ0EsWUFBWSxRQUFRLGNBQVIsQ0FBWjtZQUNBLG9CQUFvQixRQUFRLHFCQUFSLENBQXBCLENBTGE7QUFNakIsWUFBSSxZQUFZLEtBQUssR0FBTCxDQU5DO0FBT2pCLGlCQUFTLEtBQVQsQ0FBZSxLQUFmLEVBQXNCO0FBQ3BCLGNBQUksRUFBRSxTQUFTLE1BQU0sTUFBTixDQUFYLEVBQTBCO0FBQzVCLG1CQUFPLEVBQVAsQ0FENEI7V0FBOUI7QUFHQSxjQUFJLFNBQVMsQ0FBVCxDQUpnQjtBQUtwQixrQkFBUSxZQUFZLEtBQVosRUFBbUIsVUFBUyxLQUFULEVBQWdCO0FBQ3pDLGdCQUFJLGtCQUFrQixLQUFsQixDQUFKLEVBQThCO0FBQzVCLHVCQUFTLFVBQVUsTUFBTSxNQUFOLEVBQWMsTUFBeEIsQ0FBVCxDQUQ0QjtBQUU1QixxQkFBTyxJQUFQLENBRjRCO2FBQTlCO1dBRHlCLENBQTNCLENBTG9CO0FBV3BCLGlCQUFPLFVBQVUsTUFBVixFQUFrQixVQUFTLEtBQVQsRUFBZ0I7QUFDdkMsbUJBQU8sU0FBUyxLQUFULEVBQWdCLGFBQWEsS0FBYixDQUFoQixDQUFQLENBRHVDO1dBQWhCLENBQXpCLENBWG9CO1NBQXRCO0FBZUEsZUFBTyxPQUFQLEdBQWlCLEtBQWpCLENBdEJpQjtPQUFsQixDQUFELENBdUJHLFFBQVEsU0FBUixDQXZCSCIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS91bnppcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuKGZ1bmN0aW9uKHByb2Nlc3MpIHtcbiAgdmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICAgIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICAgIGJhc2VQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eScpLFxuICAgICAgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgICBpc0FycmF5TGlrZU9iamVjdCA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2VPYmplY3QnKTtcbiAgdmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuICBmdW5jdGlvbiB1bnppcChhcnJheSkge1xuICAgIGlmICghKGFycmF5ICYmIGFycmF5Lmxlbmd0aCkpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgYXJyYXkgPSBhcnJheUZpbHRlcihhcnJheSwgZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgIGlmIChpc0FycmF5TGlrZU9iamVjdChncm91cCkpIHtcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGdyb3VwLmxlbmd0aCwgbGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGJhc2VUaW1lcyhsZW5ndGgsIGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICByZXR1cm4gYXJyYXlNYXAoYXJyYXksIGJhc2VQcm9wZXJ0eShpbmRleCkpO1xuICAgIH0pO1xuICB9XG4gIG1vZHVsZS5leHBvcnRzID0gdW56aXA7XG59KShyZXF1aXJlKCdwcm9jZXNzJykpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
