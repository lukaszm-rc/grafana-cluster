'use strict';

System.register([], function (_export, _context) {
  var nativeCreate, HASH_UNDEFINED;

  function hashSet(hash, key, value) {
    hash[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  }
  return {
    setters: [],
    execute: function () {
      nativeCreate = require('./_nativeCreate');
      HASH_UNDEFINED = '__lodash_hash_undefined__';
      module.exports = hashSet;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19oYXNoU2V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxPQUFULENBQWlCLElBQWpCLEVBQXVCLEdBQXZCLEVBQTRCLEtBQTVCLEVBQW1DO0FBQ2pDLFNBQUssR0FBTCxJQUFZLFlBQUMsSUFBZ0IsVUFBVSxTQUFWLEdBQXVCLGNBQXhDLEdBQXlELEtBQXpELENBRHFCO0dBQW5DOzs7O0FBRkkscUJBQWUsUUFBUSxpQkFBUjtBQUNmLHVCQUFpQjtBQUlyQixhQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2hhc2hTZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcbmZ1bmN0aW9uIGhhc2hTZXQoaGFzaCwga2V5LCB2YWx1ZSkge1xuICBoYXNoW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
