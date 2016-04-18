'use strict';

System.register([], function (_export, _context) {
  var eq, objectProto, hasOwnProperty;

  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
      object[key] = value;
    }
  }
  return {
    setters: [],
    execute: function () {
      eq = require('./eq');
      objectProto = Object.prototype;
      hasOwnProperty = objectProto.hasOwnProperty;
      module.exports = assignValue;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19hc3NpZ25WYWx1ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLFdBQVMsV0FBVCxDQUFxQixNQUFyQixFQUE2QixHQUE3QixFQUFrQyxLQUFsQyxFQUF5QztBQUN2QyxRQUFJLFdBQVcsT0FBTyxHQUFQLENBQVgsQ0FEbUM7QUFFdkMsUUFBSSxFQUFFLGVBQWUsSUFBZixDQUFvQixNQUFwQixFQUE0QixHQUE1QixLQUFvQyxHQUFHLFFBQUgsRUFBYSxLQUFiLENBQXBDLENBQUYsSUFBK0QsVUFBVSxTQUFWLElBQXVCLEVBQUUsT0FBTyxNQUFQLENBQUYsRUFBbUI7QUFDM0csYUFBTyxHQUFQLElBQWMsS0FBZCxDQUQyRztLQUE3RztHQUZGOzs7O0FBSEksV0FBSyxRQUFRLE1BQVI7QUFDTCxvQkFBYyxPQUFPLFNBQVA7QUFDZCx1QkFBaUIsWUFBWSxjQUFaO0FBT3JCLGFBQU8sT0FBUCxHQUFpQixXQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fYXNzaWduVmFsdWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHwgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnblZhbHVlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
