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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LndlYWstbWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQUNJLFVBQUksUUFBUSxLQUFSO0FBQ0osaUJBQVcsUUFBUSxjQUFSO0FBQ1gsYUFBTyxRQUFRLHFCQUFSO0FBQ1AsaUJBQVcsUUFBUSxlQUFSO0FBQ1gsWUFBTSxRQUFRLFNBQVI7QUFDTixvQkFBYyxLQUFLLFdBQUw7QUFDZCxhQUFPLEtBQUssSUFBTDtBQUNQLHFCQUFlLE9BQU8sWUFBUCxJQUF1QixRQUF2QjtBQUNmLFlBQU07QUFDTixpQkFBVyxRQUFRLGdCQUFSLEVBQTBCLFNBQTFCLEVBQXFDLFVBQVMsR0FBVCxFQUFjO0FBQ2hFLGVBQU8sU0FBUyxPQUFULEdBQW1CO0FBQ3hCLGlCQUFPLElBQUksSUFBSixFQUFVLFVBQVUsTUFBVixHQUFtQixDQUFuQixHQUF1QixVQUFVLENBQVYsQ0FBdkIsR0FBc0MsU0FBdEMsQ0FBakIsQ0FEd0I7U0FBbkIsQ0FEeUQ7T0FBZCxFQUlqRDtBQUNELGFBQUssU0FBUyxHQUFULENBQWEsR0FBYixFQUFrQjtBQUNyQixjQUFJLFNBQVMsR0FBVCxDQUFKLEVBQW1CO0FBQ2pCLGdCQUFJLENBQUMsYUFBYSxHQUFiLENBQUQsRUFDRixPQUFPLFlBQVksSUFBWixFQUFrQixHQUFsQixDQUFzQixHQUF0QixDQUFQLENBREY7QUFFQSxnQkFBSSxJQUFJLEdBQUosRUFBUyxJQUFULENBQUosRUFDRSxPQUFPLElBQUksSUFBSixFQUFVLEtBQUssRUFBTCxDQUFqQixDQURGO1dBSEY7U0FERztBQVFMLGFBQUssU0FBUyxHQUFULENBQWEsR0FBYixFQUFrQixLQUFsQixFQUF5QjtBQUM1QixpQkFBTyxLQUFLLEdBQUwsQ0FBUyxJQUFULEVBQWUsR0FBZixFQUFvQixLQUFwQixDQUFQLENBRDRCO1NBQXpCO09BYlEsRUFnQlosSUFoQlksRUFnQk4sSUFoQk0sRUFnQkEsSUFoQkE7O0FBaUJmLFVBQUksSUFBSSxRQUFKLEdBQWUsR0FBZixDQUFtQixDQUFDLE9BQU8sTUFBUCxJQUFpQixNQUFqQixDQUFELENBQTBCLEdBQTFCLENBQW5CLEVBQW1ELENBQW5ELEVBQXNELEdBQXRELENBQTBELEdBQTFELEtBQWtFLENBQWxFLEVBQXFFO0FBQ3ZFLFVBQUUsSUFBRixDQUFPLElBQVAsQ0FBWSxDQUFDLFFBQUQsRUFBVyxLQUFYLEVBQWtCLEtBQWxCLEVBQXlCLEtBQXpCLENBQVosRUFBNkMsVUFBUyxHQUFULEVBQWM7QUFDekQsY0FBSSxRQUFRLFNBQVMsU0FBVDtjQUNSLFNBQVMsTUFBTSxHQUFOLENBQVQsQ0FGcUQ7QUFHekQsbUJBQVMsS0FBVCxFQUFnQixHQUFoQixFQUFxQixVQUFTLENBQVQsRUFBWSxDQUFaLEVBQWU7QUFDbEMsZ0JBQUksU0FBUyxDQUFULEtBQWUsQ0FBQyxhQUFhLENBQWIsQ0FBRCxFQUFrQjtBQUNuQyxrQkFBSSxTQUFTLFlBQVksSUFBWixFQUFrQixHQUFsQixFQUF1QixDQUF2QixFQUEwQixDQUExQixDQUFULENBRCtCO0FBRW5DLHFCQUFPLE9BQU8sS0FBUCxHQUFlLElBQWYsR0FBc0IsTUFBdEIsQ0FGNEI7YUFBckM7QUFJQSxtQkFBTyxPQUFPLElBQVAsQ0FBWSxJQUFaLEVBQWtCLENBQWxCLEVBQXFCLENBQXJCLENBQVAsQ0FMa0M7V0FBZixDQUFyQixDQUh5RDtTQUFkLENBQTdDLENBRHVFO09BQXpFIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LndlYWstbWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpLFxuICAgIHJlZGVmaW5lID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJyksXG4gICAgd2VhayA9IHJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uLXdlYWsnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKSxcbiAgICBoYXMgPSByZXF1aXJlKCcuLyQuaGFzJyksXG4gICAgZnJvemVuU3RvcmUgPSB3ZWFrLmZyb3plblN0b3JlLFxuICAgIFdFQUsgPSB3ZWFrLldFQUssXG4gICAgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBpc09iamVjdCxcbiAgICB0bXAgPSB7fTtcbnZhciAkV2Vha01hcCA9IHJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uJykoJ1dlYWtNYXAnLCBmdW5jdGlvbihnZXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIFdlYWtNYXAoKSB7XG4gICAgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gIH07XG59LCB7XG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIGlmIChpc09iamVjdChrZXkpKSB7XG4gICAgICBpZiAoIWlzRXh0ZW5zaWJsZShrZXkpKVxuICAgICAgICByZXR1cm4gZnJvemVuU3RvcmUodGhpcykuZ2V0KGtleSk7XG4gICAgICBpZiAoaGFzKGtleSwgV0VBSykpXG4gICAgICAgIHJldHVybiBrZXlbV0VBS11bdGhpcy5faV07XG4gICAgfVxuICB9LFxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHdlYWsuZGVmKHRoaXMsIGtleSwgdmFsdWUpO1xuICB9XG59LCB3ZWFrLCB0cnVlLCB0cnVlKTtcbmlmIChuZXcgJFdlYWtNYXAoKS5zZXQoKE9iamVjdC5mcmVlemUgfHwgT2JqZWN0KSh0bXApLCA3KS5nZXQodG1wKSAhPSA3KSB7XG4gICQuZWFjaC5jYWxsKFsnZGVsZXRlJywgJ2hhcycsICdnZXQnLCAnc2V0J10sIGZ1bmN0aW9uKGtleSkge1xuICAgIHZhciBwcm90byA9ICRXZWFrTWFwLnByb3RvdHlwZSxcbiAgICAgICAgbWV0aG9kID0gcHJvdG9ba2V5XTtcbiAgICByZWRlZmluZShwcm90bywga2V5LCBmdW5jdGlvbihhLCBiKSB7XG4gICAgICBpZiAoaXNPYmplY3QoYSkgJiYgIWlzRXh0ZW5zaWJsZShhKSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gZnJvemVuU3RvcmUodGhpcylba2V5XShhLCBiKTtcbiAgICAgICAgcmV0dXJuIGtleSA9PSAnc2V0JyA/IHRoaXMgOiByZXN1bHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWV0aG9kLmNhbGwodGhpcywgYSwgYik7XG4gICAgfSk7XG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
