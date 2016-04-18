'use strict';

System.register([], function (_export, _context) {
  var identity, metaMap, baseSetData;
  return {
    setters: [],
    execute: function () {
      identity = require('./identity');
      metaMap = require('./_metaMap');
      baseSetData = !metaMap ? identity : function (func, data) {
        metaMap.set(func, data);
        return func;
      };

      module.exports = baseSetData;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlU2V0RGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksaUJBQVcsUUFBUSxZQUFSO0FBQ1gsZ0JBQVUsUUFBUSxZQUFSO0FBQ1Ysb0JBQWMsQ0FBQyxPQUFELEdBQVcsUUFBWCxHQUFzQixVQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCO0FBQzNELGdCQUFRLEdBQVIsQ0FBWSxJQUFaLEVBQWtCLElBQWxCLEVBRDJEO0FBRTNELGVBQU8sSUFBUCxDQUYyRDtPQUFyQjs7QUFJeEMsYUFBTyxPQUFQLEdBQWlCLFdBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19iYXNlU2V0RGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpLFxuICAgIG1ldGFNYXAgPSByZXF1aXJlKCcuL19tZXRhTWFwJyk7XG52YXIgYmFzZVNldERhdGEgPSAhbWV0YU1hcCA/IGlkZW50aXR5IDogZnVuY3Rpb24oZnVuYywgZGF0YSkge1xuICBtZXRhTWFwLnNldChmdW5jLCBkYXRhKTtcbiAgcmV0dXJuIGZ1bmM7XG59O1xubW9kdWxlLmV4cG9ydHMgPSBiYXNlU2V0RGF0YTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
