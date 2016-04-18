'use strict';

System.register([], function (_export, _context) {
  var global, core, ctx, PROTOTYPE, $export;
  return {
    setters: [],
    execute: function () {
      global = require('./$.global');
      core = require('./$.core');
      ctx = require('./$.ctx');
      PROTOTYPE = 'prototype';

      $export = function $export(type, name, source) {
        var IS_FORCED = type & $export.F,
            IS_GLOBAL = type & $export.G,
            IS_STATIC = type & $export.S,
            IS_PROTO = type & $export.P,
            IS_BIND = type & $export.B,
            IS_WRAP = type & $export.W,
            exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
            target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
            key,
            own,
            out;
        if (IS_GLOBAL) source = name;
        for (key in source) {
          // contains in native
          own = !IS_FORCED && target && key in target;
          if (own && key in exports) continue;
          // export native or passed
          out = own ? target[key] : source[key];
          // prevent global pollution for namespaces
          exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
          // bind timers to global for call from export context
          : IS_BIND && own ? ctx(out, global)
          // wrap global constructors for prevent change them in library
          : IS_WRAP && target[key] == out ? function (C) {
            var F = function F(param) {
              return this instanceof C ? new C(param) : C(param);
            };
            F[PROTOTYPE] = C[PROTOTYPE];
            return F;
            // make static versions for prototype methods
          }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
          if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
        }
      };

      // type bitmap
      $export.F = 1; // forced
      $export.G = 2; // global
      $export.S = 4; // static
      $export.P = 8; // proto
      $export.B = 16; // bind
      $export.W = 32; // wrap
      module.exports = $export;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvbGlicmFyeS8kLmV4cG9ydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksZUFBWSxRQUFRLFlBQVI7QUFDWixhQUFZLFFBQVEsVUFBUjtBQUNaLFlBQVksUUFBUSxTQUFSO0FBQ1osa0JBQVk7O0FBRVosZ0JBQVUsU0FBVixPQUFVLENBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsTUFBckIsRUFBNEI7QUFDeEMsWUFBSSxZQUFZLE9BQU8sUUFBUSxDQUFSO1lBQ25CLFlBQVksT0FBTyxRQUFRLENBQVI7WUFDbkIsWUFBWSxPQUFPLFFBQVEsQ0FBUjtZQUNuQixXQUFZLE9BQU8sUUFBUSxDQUFSO1lBQ25CLFVBQVksT0FBTyxRQUFRLENBQVI7WUFDbkIsVUFBWSxPQUFPLFFBQVEsQ0FBUjtZQUNuQixVQUFZLFlBQVksSUFBWixHQUFtQixLQUFLLElBQUwsTUFBZSxLQUFLLElBQUwsSUFBYSxFQUFiLENBQWY7WUFDL0IsU0FBWSxZQUFZLE1BQVosR0FBcUIsWUFBWSxPQUFPLElBQVAsQ0FBWixHQUEyQixDQUFDLE9BQU8sSUFBUCxLQUFnQixFQUFoQixDQUFELENBQXFCLFNBQXJCLENBQTNCO1lBQ2pDLEdBUko7WUFRUyxHQVJUO1lBUWMsR0FSZCxDQUR3QztBQVV4QyxZQUFHLFNBQUgsRUFBYSxTQUFTLElBQVQsQ0FBYjtBQUNBLGFBQUksR0FBSixJQUFXLE1BQVgsRUFBa0I7O0FBRWhCLGdCQUFNLENBQUMsU0FBRCxJQUFjLE1BQWQsSUFBd0IsT0FBTyxNQUFQLENBRmQ7QUFHaEIsY0FBRyxPQUFPLE9BQU8sT0FBUCxFQUFlLFNBQXpCOztBQUhnQixhQUtoQixHQUFNLE1BQU0sT0FBTyxHQUFQLENBQU4sR0FBb0IsT0FBTyxHQUFQLENBQXBCOztBQUxVLGlCQU9oQixDQUFRLEdBQVIsSUFBZSxhQUFhLE9BQU8sT0FBTyxHQUFQLENBQVAsSUFBc0IsVUFBdEIsR0FBbUMsT0FBTyxHQUFQOztBQUFoRCxZQUViLFdBQVcsR0FBWCxHQUFpQixJQUFJLEdBQUosRUFBUyxNQUFUOztBQUFqQixZQUVBLFdBQVcsT0FBTyxHQUFQLEtBQWUsR0FBZixHQUFxQixVQUFVLENBQVQsRUFBVztBQUM1QyxnQkFBSSxJQUFJLFNBQUosQ0FBSSxDQUFTLEtBQVQsRUFBZTtBQUNyQixxQkFBTyxnQkFBZ0IsQ0FBaEIsR0FBb0IsSUFBSSxDQUFKLENBQU0sS0FBTixDQUFwQixHQUFtQyxFQUFFLEtBQUYsQ0FBbkMsQ0FEYzthQUFmLENBRG9DO0FBSTVDLGNBQUUsU0FBRixJQUFlLEVBQUUsU0FBRixDQUFmLENBSjRDO0FBSzVDLG1CQUFPLENBQVA7O0FBTDRDLFdBQVgsQ0FPaEMsR0FQK0IsQ0FBaEMsR0FPUSxZQUFZLE9BQU8sR0FBUCxJQUFjLFVBQWQsR0FBMkIsSUFBSSxTQUFTLElBQVQsRUFBZSxHQUFuQixDQUF2QyxHQUFpRSxHQUFqRSxDQWxCTTtBQW1CaEIsY0FBRyxRQUFILEVBQVksQ0FBQyxRQUFRLFNBQVIsTUFBdUIsUUFBUSxTQUFSLElBQXFCLEVBQXJCLENBQXZCLENBQUQsQ0FBa0QsR0FBbEQsSUFBeUQsR0FBekQsQ0FBWjtTQW5CRjtPQVhZOzs7QUFrQ2QsY0FBUSxDQUFSLEdBQVksQ0FBWjtBQUNBLGNBQVEsQ0FBUixHQUFZLENBQVo7QUFDQSxjQUFRLENBQVIsR0FBWSxDQUFaO0FBQ0EsY0FBUSxDQUFSLEdBQVksQ0FBWjtBQUNBLGNBQVEsQ0FBUixHQUFZLEVBQVo7QUFDQSxjQUFRLENBQVIsR0FBWSxFQUFaO0FBQ0EsYUFBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvbGlicmFyeS8kLmV4cG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vJC5jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgaWYoSVNfUFJPVE8pKGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pKVtrZXldID0gb3V0O1xuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7IC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAvLyB3cmFwXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
