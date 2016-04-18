'use strict';

System.register([], function (_export, _context) {
  var baseHas, hasPath;

  function has(object, path) {
    return object != null && hasPath(object, path, baseHas);
  }
  return {
    setters: [],
    execute: function () {
      baseHas = require('./_baseHas');
      hasPath = require('./_hasPath');
      module.exports = has;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2hhcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsR0FBVCxDQUFhLE1BQWIsRUFBcUIsSUFBckIsRUFBMkI7QUFDekIsV0FBTyxVQUFVLElBQVYsSUFBa0IsUUFBUSxNQUFSLEVBQWdCLElBQWhCLEVBQXNCLE9BQXRCLENBQWxCLENBRGtCO0dBQTNCOzs7O0FBRkksZ0JBQVUsUUFBUSxZQUFSO0FBQ1YsZ0JBQVUsUUFBUSxZQUFSO0FBSWQsYUFBTyxPQUFQLEdBQWlCLEdBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2hhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VIYXMgPSByZXF1aXJlKCcuL19iYXNlSGFzJyksXG4gICAgaGFzUGF0aCA9IHJlcXVpcmUoJy4vX2hhc1BhdGgnKTtcbmZ1bmN0aW9uIGhhcyhvYmplY3QsIHBhdGgpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBiYXNlSGFzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaGFzO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
