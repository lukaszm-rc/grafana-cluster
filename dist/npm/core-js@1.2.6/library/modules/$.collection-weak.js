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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmNvbGxlY3Rpb24td2Vhay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7QUFDSSxhQUFPLFFBQVEsVUFBUjtBQUNQLG9CQUFjLFFBQVEsa0JBQVI7QUFDZCxpQkFBVyxRQUFRLGVBQVI7QUFDWCxpQkFBVyxRQUFRLGVBQVI7QUFDWCxrQkFBWSxRQUFRLGdCQUFSO0FBQ1osY0FBUSxRQUFRLFlBQVI7QUFDUiwwQkFBb0IsUUFBUSxtQkFBUjtBQUNwQixhQUFPLFFBQVEsU0FBUjtBQUNQLGFBQU8sUUFBUSxTQUFSLEVBQW1CLE1BQW5CO0FBQ1AscUJBQWUsT0FBTyxZQUFQLElBQXVCLFFBQXZCO0FBQ2Ysa0JBQVksa0JBQWtCLENBQWxCO0FBQ1osdUJBQWlCLGtCQUFrQixDQUFsQjtBQUNqQixXQUFLOztBQUNMLG9CQUFjLFNBQWQsV0FBYyxDQUFTLElBQVQsRUFBZTtBQUMvQixlQUFPLEtBQUssRUFBTCxLQUFZLEtBQUssRUFBTCxHQUFVLElBQUksV0FBSixFQUFWLENBQVosQ0FEd0I7T0FBZjs7QUFHZCxvQkFBYyxTQUFkLFdBQWMsR0FBVztBQUMzQixhQUFLLENBQUwsR0FBUyxFQUFULENBRDJCO09BQVg7O0FBR2QsbUJBQWEsU0FBYixVQUFhLENBQVMsS0FBVCxFQUFnQixHQUFoQixFQUFxQjtBQUNwQyxlQUFPLFVBQVUsTUFBTSxDQUFOLEVBQVMsVUFBUyxFQUFULEVBQWE7QUFDckMsaUJBQU8sR0FBRyxDQUFILE1BQVUsR0FBVixDQUQ4QjtTQUFiLENBQTFCLENBRG9DO09BQXJCOztBQUtqQixrQkFBWSxTQUFaLEdBQXdCO0FBQ3RCLGFBQUssYUFBUyxHQUFULEVBQWM7QUFDakIsY0FBSSxRQUFRLFdBQVcsSUFBWCxFQUFpQixHQUFqQixDQUFSLENBRGE7QUFFakIsY0FBSSxLQUFKLEVBQ0UsT0FBTyxNQUFNLENBQU4sQ0FBUCxDQURGO1NBRkc7QUFLTCxhQUFL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V0FGUDtBQU1BLGlCQUFPLElBQVAsQ0FQOEI7U0FBM0I7QUFTTCxxQkFBYSxXQUFiO0FBQ0EsY0FBTSxJQUFOO09BckNGIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmNvbGxlY3Rpb24td2Vhay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuJ3VzZSBzdHJpY3QnO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuLyQuaGlkZScpLFxuICAgIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lLWFsbCcpLFxuICAgIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpLFxuICAgIHN0cmljdE5ldyA9IHJlcXVpcmUoJy4vJC5zdHJpY3QtbmV3JyksXG4gICAgZm9yT2YgPSByZXF1aXJlKCcuLyQuZm9yLW9mJyksXG4gICAgY3JlYXRlQXJyYXlNZXRob2QgPSByZXF1aXJlKCcuLyQuYXJyYXktbWV0aG9kcycpLFxuICAgICRoYXMgPSByZXF1aXJlKCcuLyQuaGFzJyksXG4gICAgV0VBSyA9IHJlcXVpcmUoJy4vJC51aWQnKSgnd2VhaycpLFxuICAgIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgaXNPYmplY3QsXG4gICAgYXJyYXlGaW5kID0gY3JlYXRlQXJyYXlNZXRob2QoNSksXG4gICAgYXJyYXlGaW5kSW5kZXggPSBjcmVhdGVBcnJheU1ldGhvZCg2KSxcbiAgICBpZCA9IDA7XG52YXIgZnJvemVuU3RvcmUgPSBmdW5jdGlvbih0aGF0KSB7XG4gIHJldHVybiB0aGF0Ll9sIHx8ICh0aGF0Ll9sID0gbmV3IEZyb3plblN0b3JlKTtcbn07XG52YXIgRnJvemVuU3RvcmUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5hID0gW107XG59O1xudmFyIGZpbmRGcm96ZW4gPSBmdW5jdGlvbihzdG9yZSwga2V5KSB7XG4gIHJldHVybiBhcnJheUZpbmQoc3RvcmUuYSwgZnVuY3Rpb24oaXQpIHtcbiAgICByZXR1cm4gaXRbMF0gPT09IGtleTtcbiAgfSk7XG59O1xuRnJvemVuU3RvcmUucHJvdG90eXBlID0ge1xuICBnZXQ6IGZ1bmN0aW9uKGtleSkge1xuICAgIHZhciBlbnRyeSA9IGZpbmRGcm96ZW4odGhpcywga2V5KTtcbiAgICBpZiAoZW50cnkpXG4gICAgICByZXR1cm4gZW50cnlbMV07XG4gIH0sXG4gIGhhczogZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuICEhZmluZEZyb3plbih0aGlzLCBrZXkpO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICB2YXIgZW50cnkgPSBmaW5kRnJvemVuKHRoaXMsIGtleSk7XG4gICAgaWYgKGVudHJ5KVxuICAgICAgZW50cnlbMV0gPSB2YWx1ZTtcbiAgICBlbHNlXG4gICAgICB0aGlzLmEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9LFxuICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KSB7XG4gICAgdmFyIGluZGV4ID0gYXJyYXlGaW5kSW5kZXgodGhpcy5hLCBmdW5jdGlvbihpdCkge1xuICAgICAgcmV0dXJuIGl0WzBdID09PSBrZXk7XG4gICAgfSk7XG4gICAgaWYgKH5pbmRleClcbiAgICAgIHRoaXMuYS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiAhIX5pbmRleDtcbiAgfVxufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24od3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUikge1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBpdGVyYWJsZSkge1xuICAgICAgc3RyaWN0TmV3KHRoYXQsIEMsIE5BTUUpO1xuICAgICAgdGhhdC5faSA9IGlkKys7XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClcbiAgICAgICAgZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIGlmICghaXNPYmplY3Qoa2V5KSlcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICghaXNFeHRlbnNpYmxlKGtleSkpXG4gICAgICAgICAgcmV0dXJuIGZyb3plblN0b3JlKHRoaXMpWydkZWxldGUnXShrZXkpO1xuICAgICAgICByZXR1cm4gJGhhcyhrZXksIFdFQUspICYmICRoYXMoa2V5W1dFQUtdLCB0aGlzLl9pKSAmJiBkZWxldGUga2V5W1dFQUtdW3RoaXMuX2ldO1xuICAgICAgfSxcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgICBpZiAoIWlzT2JqZWN0KGtleSkpXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoIWlzRXh0ZW5zaWJsZShrZXkpKVxuICAgICAgICAgIHJldHVybiBmcm96ZW5TdG9yZSh0aGlzKS5oYXMoa2V5KTtcbiAgICAgICAgcmV0dXJuICRoYXMoa2V5LCBXRUFLKSAmJiAkaGFzKGtleVtXRUFLXSwgdGhpcy5faSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24odGhhdCwga2V5LCB2YWx1ZSkge1xuICAgIGlmICghaXNFeHRlbnNpYmxlKGFuT2JqZWN0KGtleSkpKSB7XG4gICAgICBmcm96ZW5TdG9yZSh0aGF0KS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICRoYXMoa2V5LCBXRUFLKSB8fCBoaWRlKGtleSwgV0VBSywge30pO1xuICAgICAga2V5W1dFQUtdW3RoYXQuX2ldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB0aGF0O1xuICB9LFxuICBmcm96ZW5TdG9yZTogZnJvemVuU3RvcmUsXG4gIFdFQUs6IFdFQUtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
