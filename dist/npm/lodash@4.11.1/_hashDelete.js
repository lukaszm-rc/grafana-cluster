'use strict';

System.register([], function (_export, _context) {
  var hashHas;

  function hashDelete(hash, key) {
    return hashHas(hash, key) && delete hash[key];
  }
  return {
    setters: [],
    execute: function () {
      hashHas = require('./_hashHas');
      module.exports = hashDelete;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19oYXNoRGVsZXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsV0FBUyxVQUFULENBQW9CLElBQXBCLEVBQTBCLEdBQTFCLEVBQStCO0FBQzdCLFdBQU8sUUFBUSxJQUFSLEVBQWMsR0FBZCxLQUFzQixPQUFPLEtBQUssR0FBTCxDQUFQLENBREE7R0FBL0I7Ozs7QUFESSxnQkFBVSxRQUFRLFlBQVI7QUFJZCxhQUFPLE9BQVAsR0FBaUIsVUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2hhc2hEZWxldGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBoYXNoSGFzID0gcmVxdWlyZSgnLi9faGFzaEhhcycpO1xuZnVuY3Rpb24gaGFzaERlbGV0ZShoYXNoLCBrZXkpIHtcbiAgcmV0dXJuIGhhc2hIYXMoaGFzaCwga2V5KSAmJiBkZWxldGUgaGFzaFtrZXldO1xufVxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
