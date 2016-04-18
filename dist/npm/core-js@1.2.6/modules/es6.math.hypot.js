'use strict';

System.register([], function (_export, _context) {
  var $export, abs;
  return {
    setters: [],
    execute: function () {
      $export = require('./$.export');
      abs = Math.abs;

      $export($export.S, 'Math', { hypot: function hypot(value1, value2) {
          var sum = 0,
              i = 0,
              $$ = arguments,
              $$len = $$.length,
              larg = 0,
              arg,
              div;
          while (i < $$len) {
            arg = abs($$[i++]);
            if (larg < arg) {
              div = larg / arg;
              sum = sum * div * div + 1;
              larg = arg;
            } else if (arg > 0) {
              div = arg / larg;
              sum += div * div;
            } else sum += arg;
          }
          return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
        } });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm1hdGguaHlwb3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGdCQUFVLFFBQVEsWUFBUjtBQUNWLFlBQU0sS0FBSyxHQUFMOztBQUNWLGNBQVEsUUFBUSxDQUFSLEVBQVcsTUFBbkIsRUFBMkIsRUFBQyxPQUFPLFNBQVMsS0FBVCxDQUFlLE1BQWYsRUFBdUIsTUFBdkIsRUFBK0I7QUFDOUQsY0FBSSxNQUFNLENBQU47Y0FDQSxJQUFJLENBQUo7Y0FDQSxLQUFLLFNBQUw7Y0FDQSxRQUFRLEdBQUcsTUFBSDtjQUNSLE9BQU8sQ0FBUDtjQUNBLEdBTEo7Y0FNSSxHQU5KLENBRDhEO0FBUTlELGlCQUFPLElBQUksS0FBSixFQUFXO0FBQ2hCLGtCQUFNLElBQUksR0FBRyxHQUFILENBQUosQ0FBTixDQURnQjtBQUVoQixnQkFBSSxPQUFPLEdBQVAsRUFBWTtBQUNkLG9CQUFNLE9BQU8sR0FBUCxDQURRO0FBRWQsb0JBQU0sTUFBTSxHQUFOLEdBQVksR0FBWixHQUFrQixDQUFsQixDQUZRO0FBR2QscUJBQU8sR0FBUCxDQUhjO2FBQWhCLE1BSU8sSUFBSSxNQUFNLENBQU4sRUFBUztBQUNsQixvQkFBTSxNQUFNLElBQU4sQ0FEWTtBQUVsQixxQkFBTyxNQUFNLEdBQU4sQ0FGVzthQUFiLE1BSUwsT0FBTyxHQUFQLENBSks7V0FOVDtBQVlBLGlCQUFPLFNBQVMsUUFBVCxHQUFvQixRQUFwQixHQUErQixPQUFPLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBUCxDQXBCd0I7U0FBL0IsRUFBbkMiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy9lczYubWF0aC5oeXBvdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgYWJzID0gTWF0aC5hYnM7XG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7aHlwb3Q6IGZ1bmN0aW9uIGh5cG90KHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgdmFyIHN1bSA9IDAsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICAkJCA9IGFyZ3VtZW50cyxcbiAgICAgICAgJCRsZW4gPSAkJC5sZW5ndGgsXG4gICAgICAgIGxhcmcgPSAwLFxuICAgICAgICBhcmcsXG4gICAgICAgIGRpdjtcbiAgICB3aGlsZSAoaSA8ICQkbGVuKSB7XG4gICAgICBhcmcgPSBhYnMoJCRbaSsrXSk7XG4gICAgICBpZiAobGFyZyA8IGFyZykge1xuICAgICAgICBkaXYgPSBsYXJnIC8gYXJnO1xuICAgICAgICBzdW0gPSBzdW0gKiBkaXYgKiBkaXYgKyAxO1xuICAgICAgICBsYXJnID0gYXJnO1xuICAgICAgfSBlbHNlIGlmIChhcmcgPiAwKSB7XG4gICAgICAgIGRpdiA9IGFyZyAvIGxhcmc7XG4gICAgICAgIHN1bSArPSBkaXYgKiBkaXY7XG4gICAgICB9IGVsc2VcbiAgICAgICAgc3VtICs9IGFyZztcbiAgICB9XG4gICAgcmV0dXJuIGxhcmcgPT09IEluZmluaXR5ID8gSW5maW5pdHkgOiBsYXJnICogTWF0aC5zcXJ0KHN1bSk7XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
