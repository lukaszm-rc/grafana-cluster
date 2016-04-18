/* */
'use strict';

System.register([], function (_export, _context) {
  var $, redefine, weak, isObject, has, frozenStore, WEAK, isExtensible, tmp, $WeakMap;
  return {
    setters: [],
    execute: function () {
      $ = require('./$');
      redefine = require('./$.redefine');
      weak = require('./$.collection-weak');
      isObject = require('./$.is-object');
      has = require('./$.has');
      frozenStore = weak.frozenStore;
      WEAK = weak.WEAK;
      isExtensible = Object.isExtensible || isObject;
      tmp = {};
      $WeakMap = require('./$.collection')('WeakMap', function (get) {
        return function WeakMap() {
          return get(this, arguments.length > 0 ? arguments[0] : undefined);
        };
      }, {
        get: function get(key) {
          if (isObject(key)) {
            if (!isExtensible(key)) return frozenStore(this).get(key);
            if (has(key, WEAK)) return key[WEAK][this._i];
          }
        },
        set: function set(key, value) {
          return weak.def(this, key, value);
        }
      }, weak, true, true);

      if (new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7) {
        $.each.call(['delete', 'has', 'get', 'set'], function (key) {
          var proto = $WeakMap.prototype,
              method = proto[key];
          redefine(proto, key, function (a, b) {
            if (isObject(a) && !isExtensible(a)) {
              var result = frozenStore(this)[key](a, b);
              return key == 'set' ? this : result;
            }
            return method.call(this, a, b);
          });
        });
      }
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYud2Vhay1tYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7O0FBQ0ksVUFBSSxRQUFRLEtBQVI7QUFDSixpQkFBVyxRQUFRLGNBQVI7QUFDWCxhQUFPLFFBQVEscUJBQVI7QUFDUCxpQkFBVyxRQUFRLGVBQVI7QUFDWCxZQUFNLFFBQVEsU0FBUjtBQUNOLG9CQUFjLEtBQUssV0FBTDtBQUNkLGFBQU8sS0FBSyxJQUFMO0FBQ1AscUJBQWUsT0FBTyxZQUFQLElBQXVCLFFBQXZCO0FBQ2YsWUFBTTtBQUNOLGlCQUFXLFFBQVEsZ0JBQVIsRUFBMEIsU0FBMUIsRUFBcUMsVUFBUyxHQUFULEVBQWM7QUFDaEUsZUFBTyxTQUFTLE9BQVQsR0FBbUI7QUFDeEIsaUJBQU8sSUFBSSxJQUFKLEVBQVUsVUFBVSxNQUFWLEdBQW1CLENBQW5CLEdBQXVCLFVBQVUsQ0FBVixDQUF2QixHQUFzQyxTQUF0QyxDQUFqQixDQUR3QjtTQUFuQixDQUR5RDtPQUFkLEVBSWpEO0FBQ0QsYUFBSyxTQUFTLEdBQVQsQ0FBYSxHQUFiLEVBQWtCO0FBQ3JCLGNBQUksU0FBUyxHQUFULENBQUosRUFBbUI7QUFDakIsZ0JBQUksQ0FBQyxhQUFhLEdBQWIsQ0FBRCxFQUNGLE9BQU8sWUFBWSxJQUFaLEVBQWtCLEdBQWxCLENBQXNCLEdBQXRCLENBQVAsQ0FERjtBQUVBLGdCQUFJLElBQUksR0FBSixFQUFTLElBQVQsQ0FBSixFQUNFLE9BQU8sSUFBSSxJQUFKLEVBQVUsS0FBSyxFQUFMLENBQWpCLENBREY7V0FIRjtTQURHO0FBUUwsYUFBSyxTQUFTLEdBQVQsQ0FBYSxHQUFiLEVBQWtCLEtBQWxCLEVBQXlCO0FBQzVCLGlCQUFPLEtBQUssR0FBTCxDQUFTLElBQVQsRUFBZSxHQUFmLEVBQW9CLEtBQXBCLENBQVAsQ0FENEI7U0FBekI7T0FiUSxFQWdCWixJQWhCWSxFQWdCTixJQWhCTSxFQWdCQSxJQWhCQTs7QUFpQmYsVUFBSSxJQUFJLFFBQUosR0FBZSxHQUFmLENBQW1CLENBQUMsT0FBTyxNQUFQLElBQWlCLE1BQWpCLENBQUQsQ0FBMEIsR0FBMUIsQ0FBbkIsRUFBbUQsQ0FBbkQsRUFBc0QsR0FBdEQsQ0FBMEQsR0FBMUQsS0FBa0UsQ0FBbEUsRUFBcUU7QUFDdkUsVUFBRSxJQUFGLENBQU8sSUFBUCxDQUFZLENBQUMsUUFBRCxFQUFXLEtBQVgsRUFBa0IsS0FBbEIsRUFBeUIsS0FBekIsQ0FBWixFQUE2QyxVQUFTLEdBQVQsRUFBYztBQUN6RCxjQUFJLFFBQVEsU0FBUyxTQUFUO2NBQ1IsU0FBUyxNQUFNLEdBQU4sQ0FBVCxDQUZxRDtBQUd6RCxtQkFBUyxLQUFULEVBQWdCLEdBQWhCLEVBQXFCLFVBQVMsQ0FBVCxFQUFZLENBQVosRUFBZTtBQUNsQyxnQkFBSSxTQUFTLENBQVQsS0FBZSxDQUFDLGFBQWEsQ0FBYixDQUFELEVBQWtCO0FBQ25DLGtCQUFJLFNBQVMsWUFBWSxJQUFaLEVBQWtCLEdBQWxCLEVBQXVCLENBQXZCLEVBQTBCLENBQTFCLENBQVQsQ0FEK0I7QUFFbkMscUJBQU8sT0FBTyxLQUFQLEdBQWUsSUFBZixHQUFzQixNQUF0QixDQUY0QjthQUFyQztBQUlBLG1CQUFPLE9BQU8sSUFBUCxDQUFZLElBQVosRUFBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsQ0FBUCxDQUxrQztXQUFmLENBQXJCLENBSHlEO1NBQWQsQ0FBN0MsQ0FEdUU7T0FBekUiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzL2VzNi53ZWFrLW1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLyQnKSxcbiAgICByZWRlZmluZSA9IHJlcXVpcmUoJy4vJC5yZWRlZmluZScpLFxuICAgIHdlYWsgPSByZXF1aXJlKCcuLyQuY29sbGVjdGlvbi13ZWFrJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JyksXG4gICAgaGFzID0gcmVxdWlyZSgnLi8kLmhhcycpLFxuICAgIGZyb3plblN0b3JlID0gd2Vhay5mcm96ZW5TdG9yZSxcbiAgICBXRUFLID0gd2Vhay5XRUFLLFxuICAgIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgaXNPYmplY3QsXG4gICAgdG1wID0ge307XG52YXIgJFdlYWtNYXAgPSByZXF1aXJlKCcuLyQuY29sbGVjdGlvbicpKCdXZWFrTWFwJywgZnVuY3Rpb24oZ2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBXZWFrTWFwKCkge1xuICAgIHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICB9O1xufSwge1xuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICBpZiAoaXNPYmplY3Qoa2V5KSkge1xuICAgICAgaWYgKCFpc0V4dGVuc2libGUoa2V5KSlcbiAgICAgICAgcmV0dXJuIGZyb3plblN0b3JlKHRoaXMpLmdldChrZXkpO1xuICAgICAgaWYgKGhhcyhrZXksIFdFQUspKVxuICAgICAgICByZXR1cm4ga2V5W1dFQUtdW3RoaXMuX2ldO1xuICAgIH1cbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiB3ZWFrLmRlZih0aGlzLCBrZXksIHZhbHVlKTtcbiAgfVxufSwgd2VhaywgdHJ1ZSwgdHJ1ZSk7XG5pZiAobmV3ICRXZWFrTWFwKCkuc2V0KChPYmplY3QuZnJlZXplIHx8IE9iamVjdCkodG1wKSwgNykuZ2V0KHRtcCkgIT0gNykge1xuICAkLmVhY2guY2FsbChbJ2RlbGV0ZScsICdoYXMnLCAnZ2V0JywgJ3NldCddLCBmdW5jdGlvbihrZXkpIHtcbiAgICB2YXIgcHJvdG8gPSAkV2Vha01hcC5wcm90b3R5cGUsXG4gICAgICAgIG1ldGhvZCA9IHByb3RvW2tleV07XG4gICAgcmVkZWZpbmUocHJvdG8sIGtleSwgZnVuY3Rpb24oYSwgYikge1xuICAgICAgaWYgKGlzT2JqZWN0KGEpICYmICFpc0V4dGVuc2libGUoYSkpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZyb3plblN0b3JlKHRoaXMpW2tleV0oYSwgYik7XG4gICAgICAgIHJldHVybiBrZXkgPT0gJ3NldCcgPyB0aGlzIDogcmVzdWx0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1ldGhvZC5jYWxsKHRoaXMsIGEsIGIpO1xuICAgIH0pO1xuICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
