'use strict';

System.register([], function (_export, _context) {
  var baseMerge, isObject;

  function mergeDefaults(objValue, srcValue, key, object, source, stack) {
    if (isObject(objValue) && isObject(srcValue)) {
      baseMerge(objValue, srcValue, undefined, mergeDefaults, stack.set(srcValue, objValue));
    }
    return objValue;
  }
  return {
    setters: [],
    execute: function () {
      baseMerge = require('./_baseMerge');
      isObject = require('./isObject');
      module.exports = mergeDefaults;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19tZXJnZURlZmF1bHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxhQUFULENBQXVCLFFBQXZCLEVBQWlDLFFBQWpDLEVBQTJDLEdBQTNDLEVBQWdELE1BQWhELEVBQXdELE1BQXhELEVBQWdFLEtBQWhFLEVBQXVFO0FBQ3JFLFFBQUksU0FBUyxRQUFULEtBQXNCLFNBQVMsUUFBVCxDQUF0QixFQUEwQztBQUM1QyxnQkFBVSxRQUFWLEVBQW9CLFFBQXBCLEVBQThCLFNBQTlCLEVBQXlDLGFBQXpDLEVBQXdELE1BQU0sR0FBTixDQUFVLFFBQVYsRUFBb0IsUUFBcEIsQ0FBeEQsRUFENEM7S0FBOUM7QUFHQSxXQUFPLFFBQVAsQ0FKcUU7R0FBdkU7Ozs7QUFGSSxrQkFBWSxRQUFRLGNBQVI7QUFDWixpQkFBVyxRQUFRLFlBQVI7QUFPZixhQUFPLE9BQVAsR0FBaUIsYUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX21lcmdlRGVmYXVsdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlTWVyZ2UgPSByZXF1aXJlKCcuL19iYXNlTWVyZ2UnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcbmZ1bmN0aW9uIG1lcmdlRGVmYXVsdHMob2JqVmFsdWUsIHNyY1ZhbHVlLCBrZXksIG9iamVjdCwgc291cmNlLCBzdGFjaykge1xuICBpZiAoaXNPYmplY3Qob2JqVmFsdWUpICYmIGlzT2JqZWN0KHNyY1ZhbHVlKSkge1xuICAgIGJhc2VNZXJnZShvYmpWYWx1ZSwgc3JjVmFsdWUsIHVuZGVmaW5lZCwgbWVyZ2VEZWZhdWx0cywgc3RhY2suc2V0KHNyY1ZhbHVlLCBvYmpWYWx1ZSkpO1xuICB9XG4gIHJldHVybiBvYmpWYWx1ZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gbWVyZ2VEZWZhdWx0cztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
