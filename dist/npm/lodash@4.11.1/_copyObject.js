'use strict';

System.register([], function (_export, _context) {
  var assignValue;

  function copyObject(source, props, object, customizer) {
    object || (object = {});
    var index = -1,
        length = props.length;
    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : source[key];
      assignValue(object, key, newValue);
    }
    return object;
  }
  return {
    setters: [],
    execute: function () {
      assignValue = require('./_assignValue');
      module.exports = copyObject;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jb3B5T2JqZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsV0FBUyxVQUFULENBQW9CLE1BQXBCLEVBQTRCLEtBQTVCLEVBQW1DLE1BQW5DLEVBQTJDLFVBQTNDLEVBQXVEO0FBQ3JELGVBQVcsU0FBUyxFQUFULENBQVgsQ0FEcUQ7QUFFckQsUUFBSSxRQUFRLENBQUMsQ0FBRDtRQUNSLFNBQVMsTUFBTSxNQUFOLENBSHdDO0FBSXJELFdBQU8sRUFBRSxLQUFGLEdBQVUsTUFBVixFQUFrQjtBQUN2QixVQUFJLE1BQU0sTUFBTSxLQUFOLENBQU4sQ0FEbUI7QUFFdkIsVUFBSSxXQUFXLGFBQWEsV0FBVyxPQUFPLEdBQVAsQ0FBWCxFQUF3QixPQUFPLEdBQVAsQ0FBeEIsRUFBcUMsR0FBckMsRUFBMEMsTUFBMUMsRUFBa0QsTUFBbEQsQ0FBYixHQUF5RSxPQUFPLEdBQVAsQ0FBekUsQ0FGUTtBQUd2QixrQkFBWSxNQUFaLEVBQW9CLEdBQXBCLEVBQXlCLFFBQXpCLEVBSHVCO0tBQXpCO0FBS0EsV0FBTyxNQUFQLENBVHFEO0dBQXZEOzs7O0FBREksb0JBQWMsUUFBUSxnQkFBUjtBQVlsQixhQUFPLE9BQVAsR0FBaUIsVUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2NvcHlPYmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyk7XG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpIDogc291cmNlW2tleV07XG4gICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxubW9kdWxlLmV4cG9ydHMgPSBjb3B5T2JqZWN0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
