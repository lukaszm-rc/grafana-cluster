'use strict';

System.register([], function (_export, _context) {
  var arrayMap;

  function baseToPairs(object, props) {
    return arrayMap(props, function (key) {
      return [key, object[key]];
    });
  }
  return {
    setters: [],
    execute: function () {
      arrayMap = require('./_arrayMap');
      module.exports = baseToPairs;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlVG9QYWlycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLFdBQVMsV0FBVCxDQUFxQixNQUFyQixFQUE2QixLQUE3QixFQUFvQztBQUNsQyxXQUFPLFNBQVMsS0FBVCxFQUFnQixVQUFTLEdBQVQsRUFBYztBQUNuQyxhQUFPLENBQUMsR0FBRCxFQUFNLE9BQU8sR0FBUCxDQUFOLENBQVAsQ0FEbUM7S0FBZCxDQUF2QixDQURrQztHQUFwQzs7OztBQURJLGlCQUFXLFFBQVEsYUFBUjtBQU1mLGFBQU8sT0FBUCxHQUFpQixXQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fYmFzZVRvUGFpcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyk7XG5mdW5jdGlvbiBiYXNlVG9QYWlycyhvYmplY3QsIHByb3BzKSB7XG4gIHJldHVybiBhcnJheU1hcChwcm9wcywgZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIFtrZXksIG9iamVjdFtrZXldXTtcbiAgfSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1BhaXJzO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
