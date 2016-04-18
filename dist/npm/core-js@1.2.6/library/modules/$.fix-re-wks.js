/* */
'use strict';

System.register([], function (_export, _context) {
  var hide, redefine, fails, defined, wks;
  return {
    setters: [],
    execute: function () {
      hide = require('./$.hide');
      redefine = require('./$.redefine');
      fails = require('./$.fails');
      defined = require('./$.defined');
      wks = require('./$.wks');

      module.exports = function (KEY, length, exec) {
        var SYMBOL = wks(KEY),
            original = ''[KEY];
        if (fails(function () {
          var O = {};
          O[SYMBOL] = function () {
            return 7;
          };
          return ''[KEY](O) != 7;
        })) {
          redefine(String.prototype, KEY, exec(defined, SYMBOL, original));
          hide(RegExp.prototype, SYMBOL, length == 2 ? function (string, arg) {
            return original.call(string, this, arg);
          } : function (string) {
            return original.call(string, this);
          });
        }
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmZpeC1yZS13a3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7O0FBQ0ksYUFBTyxRQUFRLFVBQVI7QUFDUCxpQkFBVyxRQUFRLGNBQVI7QUFDWCxjQUFRLFFBQVEsV0FBUjtBQUNSLGdCQUFVLFFBQVEsYUFBUjtBQUNWLFlBQU0sUUFBUSxTQUFSOztBQUNWLGFBQU8sT0FBUCxHQUFpQixVQUFTLEdBQVQsRUFBYyxNQUFkLEVBQXNCLElBQXRCLEVBQTRCO0FBQzNDLFlBQUksU0FBUyxJQUFJLEdBQUosQ0FBVDtZQUNBLFdBQVcsR0FBRyxHQUFILENBQVgsQ0FGdUM7QUFHM0MsWUFBSSxNQUFNLFlBQVc7QUFDbkIsY0FBSSxJQUFJLEVBQUosQ0FEZTtBQUVuQixZQUFFLE1BQUYsSUFBWSxZQUFXO0FBQ3JCLG1CQUFPLENBQVAsQ0FEcUI7V0FBWCxDQUZPO0FBS25CLGlCQUFPLEdBQUcsR0FBSCxFQUFRLENBQVIsS0FBYyxDQUFkLENBTFk7U0FBWCxDQUFWLEVBTUk7QUFDRixtQkFBUyxPQUFPLFNBQVAsRUFBa0IsR0FBM0IsRUFBZ0MsS0FBSyxPQUFMLEVBQWMsTUFBZCxFQUFzQixRQUF0QixDQUFoQyxFQURFO0FBRUYsZUFBSyxPQUFPLFNBQVAsRUFBa0IsTUFBdkIsRUFBK0IsVUFBVSxDQUFWLEdBQWMsVUFBUyxNQUFULEVBQWlCLEdBQWpCLEVBQXNCO0FBQ2pFLG1CQUFPLFNBQVMsSUFBVCxDQUFjLE1BQWQsRUFBc0IsSUFBdEIsRUFBNEIsR0FBNUIsQ0FBUCxDQURpRTtXQUF0QixHQUV6QyxVQUFTLE1BQVQsRUFBaUI7QUFDbkIsbUJBQU8sU0FBUyxJQUFULENBQWMsTUFBZCxFQUFzQixJQUF0QixDQUFQLENBRG1CO1dBQWpCLENBRkosQ0FGRTtTQU5KO09BSGUiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzLyQuZml4LXJlLXdrcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuJ3VzZSBzdHJpY3QnO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuLyQuaGlkZScpLFxuICAgIHJlZGVmaW5lID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJyksXG4gICAgZmFpbHMgPSByZXF1aXJlKCcuLyQuZmFpbHMnKSxcbiAgICBkZWZpbmVkID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKSxcbiAgICB3a3MgPSByZXF1aXJlKCcuLyQud2tzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgbGVuZ3RoLCBleGVjKSB7XG4gIHZhciBTWU1CT0wgPSB3a3MoS0VZKSxcbiAgICAgIG9yaWdpbmFsID0gJydbS0VZXTtcbiAgaWYgKGZhaWxzKGZ1bmN0aW9uKCkge1xuICAgIHZhciBPID0ge307XG4gICAgT1tTWU1CT0xdID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gNztcbiAgICB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pKSB7XG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBleGVjKGRlZmluZWQsIFNZTUJPTCwgb3JpZ2luYWwpKTtcbiAgICBoaWRlKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDIgPyBmdW5jdGlvbihzdHJpbmcsIGFyZykge1xuICAgICAgcmV0dXJuIG9yaWdpbmFsLmNhbGwoc3RyaW5nLCB0aGlzLCBhcmcpO1xuICAgIH0gOiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgIHJldHVybiBvcmlnaW5hbC5jYWxsKHN0cmluZywgdGhpcyk7XG4gICAgfSk7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
