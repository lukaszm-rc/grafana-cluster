'use strict';

System.register([], function (_export, _context) {
  var MATCH;
  return {
    setters: [],
    execute: function () {
      MATCH = require('./$.wks')('match');

      module.exports = function (KEY) {
        var re = /./;
        try {
          '/./'[KEY](re);
        } catch (e) {
          try {
            re[MATCH] = false;
            return !'/./'[KEY](re);
          } catch (f) {}
        }
        return true;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmZhaWxzLWlzLXJlZ2V4cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksY0FBUSxRQUFRLFNBQVIsRUFBbUIsT0FBbkI7O0FBQ1osYUFBTyxPQUFQLEdBQWlCLFVBQVMsR0FBVCxFQUFjO0FBQzdCLFlBQUksS0FBSyxHQUFMLENBRHlCO0FBRTdCLFlBQUk7QUFDRixnQkFBTSxHQUFOLEVBQVcsRUFBWCxFQURFO1NBQUosQ0FFRSxPQUFPLENBQVAsRUFBVTtBQUNWLGNBQUk7QUFDRixlQUFHLEtBQUgsSUFBWSxLQUFaLENBREU7QUFFRixtQkFBTyxDQUFDLE1BQU0sR0FBTixFQUFXLEVBQVgsQ0FBRCxDQUZMO1dBQUosQ0FHRSxPQUFPLENBQVAsRUFBVSxFQUFWO1NBSkY7QUFNRixlQUFPLElBQVAsQ0FWNkI7T0FBZCIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvJC5mYWlscy1pcy1yZWdleHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBNQVRDSCA9IHJlcXVpcmUoJy4vJC53a3MnKSgnbWF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKSB7XG4gIHZhciByZSA9IC8uLztcbiAgdHJ5IHtcbiAgICAnLy4vJ1tLRVldKHJlKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRyeSB7XG4gICAgICByZVtNQVRDSF0gPSBmYWxzZTtcbiAgICAgIHJldHVybiAhJy8uLydbS0VZXShyZSk7XG4gICAgfSBjYXRjaCAoZikge31cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
