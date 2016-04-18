'use strict';

System.register([], function (_export, _context) {
  var getTag, isArguments, isArray, isArrayLike, isBuffer, isFunction, isObjectLike, isString, keys, mapTag, setTag, objectProto, hasOwnProperty, propertyIsEnumerable, nonEnumShadows;

  function isEmpty(value) {
    if (isArrayLike(value) && (isArray(value) || isString(value) || isFunction(value.splice) || isArguments(value) || isBuffer(value))) {
      return !value.length;
    }
    if (isObjectLike(value)) {
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
    }
    for (var key in value) {
      if (hasOwnProperty.call(value, key)) {
        return false;
      }
    }
    return !(nonEnumShadows && keys(value).length);
  }
  return {
    setters: [],
    execute: function () {
      getTag = require('./_getTag');
      isArguments = require('./isArguments');
      isArray = require('./isArray');
      isArrayLike = require('./isArrayLike');
      isBuffer = require('./isBuffer');
      isFunction = require('./isFunction');
      isObjectLike = require('./isObjectLike');
      isString = require('./isString');
      keys = require('./keys');
      mapTag = '[object Map]';
      setTag = '[object Set]';
      objectProto = Object.prototype;
      hasOwnProperty = objectProto.hasOwnProperty;
      propertyIsEnumerable = objectProto.propertyIsEnumerable;
      nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');
      module.exports = isEmpty;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzRW1wdHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFnQkEsV0FBUyxPQUFULENBQWlCLEtBQWpCLEVBQXdCO0FBQ3RCLFFBQUksWUFBWSxLQUFaLE1BQXVCLFFBQVEsS0FBUixLQUFrQixTQUFTLEtBQVQsQ0FBbEIsSUFBcUMsV0FBVyxNQUFNLE1BQU4sQ0FBaEQsSUFBaUUsWUFBWSxLQUFaLENBQWpFLElBQXVGLFNBQVMsS0FBVCxDQUF2RixDQUF2QixFQUFnSTtBQUNsSSxhQUFPLENBQUMsTUFBTSxNQUFOLENBRDBIO0tBQXBJO0FBR0EsUUFBSSxhQUFhLEtBQWIsQ0FBSixFQUF5QjtBQUN2QixVQUFJLE1BQU0sT0FBTyxLQUFQLENBQU4sQ0FEbUI7QUFFdkIsVUFBSSxPQUFPLE1BQVAsSUFBaUIsT0FBTyxNQUFQLEVBQWU7QUFDbEMsZUFBTyxDQUFDLE1BQU0sSUFBTixDQUQwQjtPQUFwQztLQUZGO0FBTUEsU0FBSyxJQUFJLEdBQUosSUFBVyxLQUFoQixFQUF1QjtBQUNyQixVQUFJLGVBQWUsSUFBZixDQUFvQixLQUFwQixFQUEyQixHQUEzQixDQUFKLEVBQXFDO0FBQ25DLGVBQU8sS0FBUCxDQURtQztPQUFyQztLQURGO0FBS0EsV0FBTyxFQUFFLGtCQUFrQixLQUFLLEtBQUwsRUFBWSxNQUFaLENBQXBCLENBZmU7R0FBeEI7Ozs7QUFmSSxlQUFTLFFBQVEsV0FBUjtBQUNULG9CQUFjLFFBQVEsZUFBUjtBQUNkLGdCQUFVLFFBQVEsV0FBUjtBQUNWLG9CQUFjLFFBQVEsZUFBUjtBQUNkLGlCQUFXLFFBQVEsWUFBUjtBQUNYLG1CQUFhLFFBQVEsY0FBUjtBQUNiLHFCQUFlLFFBQVEsZ0JBQVI7QUFDZixpQkFBVyxRQUFRLFlBQVI7QUFDWCxhQUFPLFFBQVEsUUFBUjtBQUNQLGVBQVM7QUFDVCxlQUFTO0FBQ1Qsb0JBQWMsT0FBTyxTQUFQO0FBQ2QsdUJBQWlCLFlBQVksY0FBWjtBQUNqQiw2QkFBdUIsWUFBWSxvQkFBWjtBQUN2Qix1QkFBaUIsQ0FBQyxxQkFBcUIsSUFBckIsQ0FBMEIsRUFBQyxXQUFXLENBQVgsRUFBM0IsRUFBMEMsU0FBMUMsQ0FBRDtBQWtCckIsYUFBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2lzRW1wdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyksXG4gICAgaXNTdHJpbmcgPSByZXF1aXJlKCcuL2lzU3RyaW5nJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nO1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgbm9uRW51bVNoYWRvd3MgPSAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7J3ZhbHVlT2YnOiAxfSwgJ3ZhbHVlT2YnKTtcbmZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgaWYgKGlzQXJyYXlMaWtlKHZhbHVlKSAmJiAoaXNBcnJheSh2YWx1ZSkgfHwgaXNTdHJpbmcodmFsdWUpIHx8IGlzRnVuY3Rpb24odmFsdWUuc3BsaWNlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkgfHwgaXNCdWZmZXIodmFsdWUpKSkge1xuICAgIHJldHVybiAhdmFsdWUubGVuZ3RoO1xuICB9XG4gIGlmIChpc09iamVjdExpa2UodmFsdWUpKSB7XG4gICAgdmFyIHRhZyA9IGdldFRhZyh2YWx1ZSk7XG4gICAgaWYgKHRhZyA9PSBtYXBUYWcgfHwgdGFnID09IHNldFRhZykge1xuICAgICAgcmV0dXJuICF2YWx1ZS5zaXplO1xuICAgIH1cbiAgfVxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gIShub25FbnVtU2hhZG93cyAmJiBrZXlzKHZhbHVlKS5sZW5ndGgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpc0VtcHR5O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
