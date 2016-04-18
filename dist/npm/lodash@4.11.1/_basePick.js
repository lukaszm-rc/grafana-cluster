'use strict';

System.register([], function (_export, _context) {
  var arrayReduce;

  function basePick(object, props) {
    object = Object(object);
    return arrayReduce(props, function (result, key) {
      if (key in object) {
        result[key] = object[key];
      }
      return result;
    }, {});
  }
  return {
    setters: [],
    execute: function () {
      arrayReduce = require('./_arrayReduce');
      module.exports = basePick;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlUGljay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLFdBQVMsUUFBVCxDQUFrQixNQUFsQixFQUEwQixLQUExQixFQUFpQztBQUMvQixhQUFTLE9BQU8sTUFBUCxDQUFULENBRCtCO0FBRS9CLFdBQU8sWUFBWSxLQUFaLEVBQW1CLFVBQVMsTUFBVCxFQUFpQixHQUFqQixFQUFzQjtBQUM5QyxVQUFJLE9BQU8sTUFBUCxFQUFlO0FBQ2pCLGVBQU8sR0FBUCxJQUFjLE9BQU8sR0FBUCxDQUFkLENBRGlCO09BQW5CO0FBR0EsYUFBTyxNQUFQLENBSjhDO0tBQXRCLEVBS3ZCLEVBTEksQ0FBUCxDQUYrQjtHQUFqQzs7OztBQURJLG9CQUFjLFFBQVEsZ0JBQVI7QUFVbEIsYUFBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19iYXNlUGljay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFycmF5UmVkdWNlID0gcmVxdWlyZSgnLi9fYXJyYXlSZWR1Y2UnKTtcbmZ1bmN0aW9uIGJhc2VQaWNrKG9iamVjdCwgcHJvcHMpIHtcbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheVJlZHVjZShwcm9wcywgZnVuY3Rpb24ocmVzdWx0LCBrZXkpIHtcbiAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgcmVzdWx0W2tleV0gPSBvYmplY3Rba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwge30pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUGljaztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
