'use strict';

System.register([], function (_export, _context) {
  var baseValues, keys;

  function values(object) {
    return object ? baseValues(object, keys(object)) : [];
  }
  return {
    setters: [],
    execute: function () {
      baseValues = require('./_baseValues');
      keys = require('./keys');
      module.exports = values;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3ZhbHVlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsTUFBVCxDQUFnQixNQUFoQixFQUF3QjtBQUN0QixXQUFPLFNBQVMsV0FBVyxNQUFYLEVBQW1CLEtBQUssTUFBTCxDQUFuQixDQUFULEdBQTRDLEVBQTVDLENBRGU7R0FBeEI7Ozs7QUFGSSxtQkFBYSxRQUFRLGVBQVI7QUFDYixhQUFPLFFBQVEsUUFBUjtBQUlYLGFBQU8sT0FBUCxHQUFpQixNQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS92YWx1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlVmFsdWVzID0gcmVxdWlyZSgnLi9fYmFzZVZhbHVlcycpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcbmZ1bmN0aW9uIHZhbHVlcyhvYmplY3QpIHtcbiAgcmV0dXJuIG9iamVjdCA/IGJhc2VWYWx1ZXMob2JqZWN0LCBrZXlzKG9iamVjdCkpIDogW107XG59XG5tb2R1bGUuZXhwb3J0cyA9IHZhbHVlcztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
