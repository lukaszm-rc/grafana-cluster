'use strict';

System.register([], function (_export, _context) {
  var baseClone, baseConforms;

  function conforms(source) {
    return baseConforms(baseClone(source, true));
  }
  return {
    setters: [],
    execute: function () {
      baseClone = require('./_baseClone');
      baseConforms = require('./_baseConforms');
      module.exports = conforms;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2NvbmZvcm1zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxRQUFULENBQWtCLE1BQWxCLEVBQTBCO0FBQ3hCLFdBQU8sYUFBYSxVQUFVLE1BQVYsRUFBa0IsSUFBbEIsQ0FBYixDQUFQLENBRHdCO0dBQTFCOzs7O0FBRkksa0JBQVksUUFBUSxjQUFSO0FBQ1oscUJBQWUsUUFBUSxpQkFBUjtBQUluQixhQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvY29uZm9ybXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlQ2xvbmUgPSByZXF1aXJlKCcuL19iYXNlQ2xvbmUnKSxcbiAgICBiYXNlQ29uZm9ybXMgPSByZXF1aXJlKCcuL19iYXNlQ29uZm9ybXMnKTtcbmZ1bmN0aW9uIGNvbmZvcm1zKHNvdXJjZSkge1xuICByZXR1cm4gYmFzZUNvbmZvcm1zKGJhc2VDbG9uZShzb3VyY2UsIHRydWUpKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gY29uZm9ybXM7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
