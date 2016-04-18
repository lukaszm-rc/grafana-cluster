"use strict";

System.register([], function (_export, _context) {
  var ceil, floor;
  return {
    setters: [],
    execute: function () {
      ceil = Math.ceil;
      floor = Math.floor;

      module.exports = function (it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC50by1pbnRlZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxhQUFRLEtBQUssSUFBTDtBQUNSLGNBQVEsS0FBSyxLQUFMOztBQUNaLGFBQU8sT0FBUCxHQUFpQixVQUFTLEVBQVQsRUFBWTtBQUMzQixlQUFPLE1BQU0sS0FBSyxDQUFDLEVBQUQsQ0FBWCxHQUFrQixDQUFsQixHQUFzQixDQUFDLEtBQUssQ0FBTCxHQUFTLEtBQVQsR0FBaUIsSUFBakIsQ0FBRCxDQUF3QixFQUF4QixDQUF0QixDQURvQjtPQUFaIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC50by1pbnRlZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
