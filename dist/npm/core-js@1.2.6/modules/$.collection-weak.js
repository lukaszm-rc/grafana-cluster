/* */
'use strict';

System.register([], function (_export, _context) {
  var hide, redefineAll, anObject, isObject, strictNew, forOf, createArrayMethod, $has, WEAK, isExtensible, arrayFind, arrayFindIndex, id, frozenStore, FrozenStore, findFrozen;
  return {
    setters: [],
    execute: function () {
      hide = require('./$.hide');
      redefineAll = require('./$.redefine-all');
      anObject = require('./$.an-object');
      isObject = require('./$.is-object');
      strictNew = require('./$.strict-new');
      forOf = require('./$.for-of');
      createArrayMethod = require('./$.array-methods');
      $has = require('./$.has');
      WEAK = require('./$.uid')('weak');
      isExtensible = Object.isExtensible || isObject;
      arrayFind = createArrayMethod(5);
      arrayFindIndex = createArrayMethod(6);
      id = 0;

      frozenStore = function frozenStore(that) {
        return that._l || (that._l = new FrozenStore());
      };

      FrozenStore = function FrozenStore() {
        this.a = [];
      };

      findFrozen = function findFrozen(store, key) {
        return arrayFind(store.a, function (it) {
          return it[0] === key;
        });
      };

      FrozenStore.prototype = {
        get: function get(key) {
          var entry = findFrozen(this, key);
          if (entry) return entry[1];
        },
        has: function has(key) {
          return !!findFrozen(this, key);
        },
        set: function set(key, value) {
          var entry = findFrozen(this, key);
          if (entry) entry[1] = value;else this.a.push([key, value]);
        },
        'delete': function _delete(key) {
          var index = arrayFindIndex(this.a, function (it) {
            return it[0] === key;
          });
          if (~index) this.a.splice(index, 1);
          return !! ~index;
        }
      };
      module.exports = {
        getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
          var C = wrapper(function (that, iterable) {
            strictNew(that, C, NAME);
            that._i = id++;
            that._l = undefined;
            if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
          });
          redefineAll(C.prototype, {
            'delete': function _delete(key) {
              if (!isObject(key)) return false;
              if (!isExtensible(key)) return frozenStore(this)['delete'](key);
              return $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i];
            },
            has: function has(key) {
              if (!isObject(key)) return false;
              if (!isExtensible(key)) return frozenStore(this).has(key);
              return $has(key, WEAK) && $has(key[WEAK], this._i);
            }
          });
          return C;
        },
        def: function def(that, key, value) {
          if (!isExtensible(anObject(key))) {
            frozenStore(that).set(key, value);
          } else {
            $has(key, WEAK) || hide(key, WEAK, {});
            key[WEAK][that._i] = value;
          }
          return that;
        },
        frozenStore: frozenStore,
        WEAK: WEAK
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5jb2xsZWN0aW9uLXdlYWsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7O0FBQ0ksYUFBTyxRQUFRLFVBQVI7QUFDUCxvQkFBYyxRQUFRLGtCQUFSO0FBQ2QsaUJBQVcsUUFBUSxlQUFSO0FBQ1gsaUJBQVcsUUFBUSxlQUFSO0FBQ1gsa0JBQVksUUFBUSxnQkFBUjtBQUNaLGNBQVEsUUFBUSxZQUFSO0FBQ1IsMEJBQW9CLFFBQVEsbUJBQVI7QUFDcEIsYUFBTyxRQUFRLFNBQVI7QUFDUCxhQUFPLFFBQVEsU0FBUixFQUFtQixNQUFuQjtBQUNQLHFCQUFlLE9BQU8sWUFBUCxJQUF1QixRQUF2QjtBQUNmLGtCQUFZLGtCQUFrQixDQUFsQjtBQUNaLHVCQUFpQixrQkFBa0IsQ0FBbEI7QUFDakIsV0FBSzs7QUFDTCxvQkFBYyxTQUFkLFdBQWMsQ0FBUyxJQUFULEVBQWU7QUFDL0IsZUFBTyxLQUFLLEVBQUwsS0FBWSxLQUFLLEVBQUwsR0FBVSxJQUFJLFdBQUosRUFBVixDQUFaLENBRHdCO09BQWY7O0FBR2Qsb0JBQWMsU0FBZCxXQUFjLEdBQVc7QUFDM0IsYUFBSyxDQUFMLEdBQVMsRUFBVCxDQUQyQjtPQUFYOztBQUdkLG1CQUFhLFNBQWIsVUFBYSxDQUFTLEtBQVQsRUFBZ0IsR0FBaEIsRUFBcUI7QUFDcEMsZUFBTyxVQUFVLE1BQU0sQ0FBTixFQUFTLFVBQVMsRUFBVCxFQUFhO0FBQ3JDLGlCQUFPLEdBQUcsQ0FBSCxNQUFVLEdBQVYsQ0FEOEI7U0FBYixDQUExQixDQURvQztPQUFyQjs7QUFLakIsa0JBQVksU0FBWixHQUF3QjtBQUN0QixhQUFLLGFBQVMsR0FBVCxFQUFjO0FBQ2pCLGNBQUksUUFBUSxXQUFXLElBQVgsRUFBaUIsR0FBakIsQ0FBUixDQURhO0FBRWpCLGNBQUksS0FBSixFQUNFLE9BQU8sTUFBTSxDQUFOLENBQVAsQ0FERjtTQUZHO0FBS0wsYUFBSyxhQUFTLEdB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QSxpQkFBTyxJQUFQLENBUDhCO1NBQTNCO0FBU0wscUJBQWEsV0FBYjtBQUNBLGNBQU0sSUFBTjtPQXJDRiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzLyQuY29sbGVjdGlvbi13ZWFrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vJC5oaWRlJyksXG4gICAgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUtYWxsJyksXG4gICAgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JyksXG4gICAgc3RyaWN0TmV3ID0gcmVxdWlyZSgnLi8kLnN0cmljdC1uZXcnKSxcbiAgICBmb3JPZiA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKSxcbiAgICBjcmVhdGVBcnJheU1ldGhvZCA9IHJlcXVpcmUoJy4vJC5hcnJheS1tZXRob2RzJyksXG4gICAgJGhhcyA9IHJlcXVpcmUoJy4vJC5oYXMnKSxcbiAgICBXRUFLID0gcmVxdWlyZSgnLi8kLnVpZCcpKCd3ZWFrJyksXG4gICAgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBpc09iamVjdCxcbiAgICBhcnJheUZpbmQgPSBjcmVhdGVBcnJheU1ldGhvZCg1KSxcbiAgICBhcnJheUZpbmRJbmRleCA9IGNyZWF0ZUFycmF5TWV0aG9kKDYpLFxuICAgIGlkID0gMDtcbnZhciBmcm96ZW5TdG9yZSA9IGZ1bmN0aW9uKHRoYXQpIHtcbiAgcmV0dXJuIHRoYXQuX2wgfHwgKHRoYXQuX2wgPSBuZXcgRnJvemVuU3RvcmUpO1xufTtcbnZhciBGcm96ZW5TdG9yZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmEgPSBbXTtcbn07XG52YXIgZmluZEZyb3plbiA9IGZ1bmN0aW9uKHN0b3JlLCBrZXkpIHtcbiAgcmV0dXJuIGFycmF5RmluZChzdG9yZS5hLCBmdW5jdGlvbihpdCkge1xuICAgIHJldHVybiBpdFswXSA9PT0ga2V5O1xuICB9KTtcbn07XG5Gcm96ZW5TdG9yZS5wcm90b3R5cGUgPSB7XG4gIGdldDogZnVuY3Rpb24oa2V5KSB7XG4gICAgdmFyIGVudHJ5ID0gZmluZEZyb3plbih0aGlzLCBrZXkpO1xuICAgIGlmIChlbnRyeSlcbiAgICAgIHJldHVybiBlbnRyeVsxXTtcbiAgfSxcbiAgaGFzOiBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gISFmaW5kRnJvemVuKHRoaXMsIGtleSk7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgIHZhciBlbnRyeSA9IGZpbmRGcm96ZW4odGhpcywga2V5KTtcbiAgICBpZiAoZW50cnkpXG4gICAgICBlbnRyeVsxXSA9IHZhbHVlO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuYS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0sXG4gICdkZWxldGUnOiBmdW5jdGlvbihrZXkpIHtcbiAgICB2YXIgaW5kZXggPSBhcnJheUZpbmRJbmRleCh0aGlzLmEsIGZ1bmN0aW9uKGl0KSB7XG4gICAgICByZXR1cm4gaXRbMF0gPT09IGtleTtcbiAgICB9KTtcbiAgICBpZiAofmluZGV4KVxuICAgICAgdGhpcy5hLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuICEhfmluZGV4O1xuICB9XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKSB7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGl0ZXJhYmxlKSB7XG4gICAgICBzdHJpY3ROZXcodGhhdCwgQywgTkFNRSk7XG4gICAgICB0aGF0Ll9pID0gaWQrKztcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7XG4gICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKVxuICAgICAgICBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKCFpc09iamVjdChrZXkpKVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKCFpc0V4dGVuc2libGUoa2V5KSlcbiAgICAgICAgICByZXR1cm4gZnJvemVuU3RvcmUodGhpcylbJ2RlbGV0ZSddKGtleSk7XG4gICAgICAgIHJldHVybiAkaGFzKGtleSwgV0VBSykgJiYgJGhhcyhrZXlbV0VBS10sIHRoaXMuX2kpICYmIGRlbGV0ZSBrZXlbV0VBS11bdGhpcy5faV07XG4gICAgICB9LFxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgICAgIGlmICghaXNPYmplY3Qoa2V5KSlcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICghaXNFeHRlbnNpYmxlKGtleSkpXG4gICAgICAgICAgcmV0dXJuIGZyb3plblN0b3JlKHRoaXMpLmhhcyhrZXkpO1xuICAgICAgICByZXR1cm4gJGhhcyhrZXksIFdFQUspICYmICRoYXMoa2V5W1dFQUtdLCB0aGlzLl9pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKCFpc0V4dGVuc2libGUoYW5PYmplY3Qoa2V5KSkpIHtcbiAgICAgIGZyb3plblN0b3JlKHRoYXQpLnNldChrZXksIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJGhhcyhrZXksIFdFQUspIHx8IGhpZGUoa2V5LCBXRUFLLCB7fSk7XG4gICAgICBrZXlbV0VBS11bdGhhdC5faV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIGZyb3plblN0b3JlOiBmcm96ZW5TdG9yZSxcbiAgV0VBSzogV0VBS1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
