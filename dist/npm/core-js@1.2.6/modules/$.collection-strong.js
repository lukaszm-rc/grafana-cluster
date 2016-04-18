/* */
'use strict';

System.register([], function (_export, _context) {
  var _typeof, $, hide, redefineAll, ctx, strictNew, defined, forOf, $iterDefine, step, ID, $has, isObject, setSpecies, DESCRIPTORS, isExtensible, SIZE, id, fastKey, getEntry;

  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      $ = require('./$');
      hide = require('./$.hide');
      redefineAll = require('./$.redefine-all');
      ctx = require('./$.ctx');
      strictNew = require('./$.strict-new');
      defined = require('./$.defined');
      forOf = require('./$.for-of');
      $iterDefine = require('./$.iter-define');
      step = require('./$.iter-step');
      ID = require('./$.uid')('id');
      $has = require('./$.has');
      isObject = require('./$.is-object');
      setSpecies = require('./$.set-species');
      DESCRIPTORS = require('./$.descriptors');
      isExtensible = Object.isExtensible || isObject;
      SIZE = DESCRIPTORS ? '_s' : 'size';
      id = 0;

      fastKey = function fastKey(it, create) {
        if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
        if (!$has(it, ID)) {
          if (!isExtensible(it)) return 'F';
          if (!create) return 'E';
          hide(it, ID, ++id);
        }
        return 'O' + it[ID];
      };

      getEntry = function getEntry(that, key) {
        var index = fastKey(key),
            entry;
        if (index !== 'F') return that._i[index];
        for (entry = that._f; entry; entry = entry.n) {
          if (entry.k == key) return entry;
        }
      };

      module.exports = {
        getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
          var C = wrapper(function (that, iterable) {
            strictNew(that, C, NAME);
            that._i = $.create(null);
            that._f = undefined;
            that._l = undefined;
            that[SIZE] = 0;
            if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
          });
          redefineAll(C.prototype, {
            clear: function clear() {
              for (var that = this, data = that._i, entry = that._f; entry; entry = entry.n) {
                entry.r = true;
                if (entry.p) entry.p = entry.p.n = undefined;
                delete data[entry.i];
              }
              that._f = that._l = undefined;
              that[SIZE] = 0;
            },
            'delete': function _delete(key) {
              var that = this,
                  entry = getEntry(that, key);
              if (entry) {
                var next = entry.n,
                    prev = entry.p;
                delete that._i[entry.i];
                entry.r = true;
                if (prev) prev.n = next;
                if (next) next.p = prev;
                if (that._f == entry) that._f = next;
                if (that._l == entry) that._l = prev;
                that[SIZE]--;
              }
              return !!entry;
            },
            forEach: function forEach(callbackfn) {
              var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3),
                  entry;
              while (entry = entry ? entry.n : this._f) {
                f(entry.v, entry.k, this);
                while (entry && entry.r) {
                  entry = entry.p;
                }
              }
            },
            has: function has(key) {
              return !!getEntry(this, key);
            }
          });
          if (DESCRIPTORS) $.setDesc(C.prototype, 'size', { get: function get() {
              return defined(this[SIZE]);
            } });
          return C;
        },
        def: function def(that, key, value) {
          var entry = getEntry(that, key),
              prev,
              index;
          if (entry) {
            entry.v = value;
          } else {
            that._l = entry = {
              i: index = fastKey(key, true),
              k: key,
              v: value,
              p: prev = that._l,
              n: undefined,
              r: false
            };
            if (!that._f) that._f = entry;
            if (prev) prev.n = entry;
            that[SIZE]++;
            if (index !== 'F') that._i[index] = entry;
          }
          return that;
        },
        getEntry: getEntry,
        setStrong: function setStrong(C, NAME, IS_MAP) {
          $iterDefine(C, NAME, function (iterated, kind) {
            this._t = iterated;
            this._k = kind;
            this._l = undefined;
          }, function () {
            var that = this,
                kind = that._k,
                entry = that._l;
            while (entry && entry.r) {
              entry = entry.p;
            }if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
              that._t = undefined;
              return step(1);
            }
            if (kind == 'keys') return step(0, entry.k);
            if (kind == 'values') return step(0, entry.v);
            return step(0, [entry.k, entry.v]);
          }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
          setSpecies(NAME);
        }
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5jb2xsZWN0aW9uLXN0cm9uZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDSSxVQUFJLFFBQVEsS0FBUjtBQUNKLGFBQU8sUUFBUSxVQUFSO0FBQ1Asb0JBQWMsUUFBUSxrQkFBUjtBQUNkLFlBQU0sUUFBUSxTQUFSO0FBQ04sa0JBQVksUUFBUSxnQkFBUjtBQUNaLGdCQUFVLFFBQVEsYUFBUjtBQUNWLGNBQVEsUUFBUSxZQUFSO0FBQ1Isb0JBQWMsUUFBUSxpQkFBUjtBQUNkLGFBQU8sUUFBUSxlQUFSO0FBQ1AsV0FBSyxRQUFRLFNBQVIsRUFBbUIsSUFBbkI7QUFDTCxhQUFPLFFBQVEsU0FBUjtBQUNQLGlCQUFXLFFBQVEsZUFBUjtBQUNYLG1CQUFhLFFBQVEsaUJBQVI7QUFDYixvQkFBYyxRQUFRLGlCQUFSO0FBQ2QscUJBQWUsT0FBTyxZQUFQLElBQXVCLFFBQXZCO0FBQ2YsYUFBTyxjQUFjLElBQWQsR0FBcUIsTUFBckI7QUFDUCxXQUFLOztBQUNMLGdCQUFVLFNBQVYsT0FBVSxDQUFTLEVBQVQsRUFBYSxNQUFiLEVBQXFCO0FBQ2pDLFlBQUksQ0FBQyxTQUFTLEVBQVQsQ0FBRCxFQUNGLE9BQU8sUUFBTywrQ0FBUCxJQUFhLFFBQWIsR0FBd0IsRUFBeEIsR0FBNkIsQ0FBQyxPQUFPLEVBQVAsSUFBYSxRQUFiLEdBQXdCLEdBQXhCLEdBQThCLEdBQTlCLENBQUQsR0FBc0MsRUFBdEMsQ0FEdEM7QUFFQSxZQUFJLENBQUMsS0FBSyxFQUFMLEVBQVMsRUFBVCxDQUFELEVBQWU7QUFDakIsY0FBSSxDQUFDLGFBQWEsRUFBYixDQUFELEVBQ0YsT0FBTyxHQUFQLENBREY7QUFFQSxjQUFJLENBQUMsTUFBRCxFQUNGLE9BQU8sR0FBUCxDQURGO0FBRUEsZUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQUUsRUFBRixDQUFiLENBTGlCO1NBQW5CO0FBT0EsZUFBTyxN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LEdBQXFCLFFBQXJCLEVBQStCLENBQUMsTUFBRCxFQUFTLElBbkIzQyxFQURtQztBQXFCbkMscUJBQVcsSUFBWCxFQXJCbUM7U0FBMUI7T0F6RmIiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy8kLmNvbGxlY3Rpb24tc3Ryb25nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpLFxuICAgIGhpZGUgPSByZXF1aXJlKCcuLyQuaGlkZScpLFxuICAgIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lLWFsbCcpLFxuICAgIGN0eCA9IHJlcXVpcmUoJy4vJC5jdHgnKSxcbiAgICBzdHJpY3ROZXcgPSByZXF1aXJlKCcuLyQuc3RyaWN0LW5ldycpLFxuICAgIGRlZmluZWQgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpLFxuICAgIGZvck9mID0gcmVxdWlyZSgnLi8kLmZvci1vZicpLFxuICAgICRpdGVyRGVmaW5lID0gcmVxdWlyZSgnLi8kLml0ZXItZGVmaW5lJyksXG4gICAgc3RlcCA9IHJlcXVpcmUoJy4vJC5pdGVyLXN0ZXAnKSxcbiAgICBJRCA9IHJlcXVpcmUoJy4vJC51aWQnKSgnaWQnKSxcbiAgICAkaGFzID0gcmVxdWlyZSgnLi8kLmhhcycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpLFxuICAgIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuLyQuc2V0LXNwZWNpZXMnKSxcbiAgICBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpLFxuICAgIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgaXNPYmplY3QsXG4gICAgU0laRSA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJyxcbiAgICBpZCA9IDA7XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpXG4gICAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCEkaGFzKGl0LCBJRCkpIHtcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpXG4gICAgICByZXR1cm4gJ0YnO1xuICAgIGlmICghY3JlYXRlKVxuICAgICAgcmV0dXJuICdFJztcbiAgICBoaWRlKGl0LCBJRCwgKytpZCk7XG4gIH1cbiAgcmV0dXJuICdPJyArIGl0W0lEXTtcbn07XG52YXIgZ2V0RW50cnkgPSBmdW5jdGlvbih0aGF0LCBrZXkpIHtcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpLFxuICAgICAgZW50cnk7XG4gIGlmIChpbmRleCAhPT0gJ0YnKVxuICAgIHJldHVybiB0aGF0Ll9pW2luZGV4XTtcbiAgZm9yIChlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pIHtcbiAgICBpZiAoZW50cnkuayA9PSBrZXkpXG4gICAgICByZXR1cm4gZW50cnk7XG4gIH1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpIHtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGhhdCwgaXRlcmFibGUpIHtcbiAgICAgIHN0cmljdE5ldyh0aGF0LCBDLCBOQU1FKTtcbiAgICAgIHRoYXQuX2kgPSAkLmNyZWF0ZShudWxsKTtcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKVxuICAgICAgICBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgZm9yICh2YXIgdGhhdCA9IHRoaXMsXG4gICAgICAgICAgICBkYXRhID0gdGhhdC5faSxcbiAgICAgICAgICAgIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmIChlbnRyeS5wKVxuICAgICAgICAgICAgZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXMsXG4gICAgICAgICAgICBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkubixcbiAgICAgICAgICAgICAgcHJldiA9IGVudHJ5LnA7XG4gICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKHByZXYpXG4gICAgICAgICAgICBwcmV2Lm4gPSBuZXh0O1xuICAgICAgICAgIGlmIChuZXh0KVxuICAgICAgICAgICAgbmV4dC5wID0gcHJldjtcbiAgICAgICAgICBpZiAodGhhdC5fZiA9PSBlbnRyeSlcbiAgICAgICAgICAgIHRoYXQuX2YgPSBuZXh0O1xuICAgICAgICAgIGlmICh0aGF0Ll9sID09IGVudHJ5KVxuICAgICAgICAgICAgdGhhdC5fbCA9IHByZXY7XG4gICAgICAgICAgdGhhdFtTSVpFXS0tO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhIWVudHJ5O1xuICAgICAgfSxcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbikge1xuICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMyksXG4gICAgICAgICAgICBlbnRyeTtcbiAgICAgICAgd2hpbGUgKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhpcy5fZikge1xuICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XG4gICAgICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnIpXG4gICAgICAgICAgICBlbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoREVTQ1JJUFRPUlMpXG4gICAgICAkLnNldERlc2MoQy5wcm90b3R5cGUsICdzaXplJywge2dldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZmluZWQodGhpc1tTSVpFXSk7XG4gICAgICAgIH19KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KSxcbiAgICAgICAgcHJldixcbiAgICAgICAgaW5kZXg7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksXG4gICAgICAgIGs6IGtleSxcbiAgICAgICAgdjogdmFsdWUsXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLFxuICAgICAgICBuOiB1bmRlZmluZWQsXG4gICAgICAgIHI6IGZhbHNlXG4gICAgICB9O1xuICAgICAgaWYgKCF0aGF0Ll9mKVxuICAgICAgICB0aGF0Ll9mID0gZW50cnk7XG4gICAgICBpZiAocHJldilcbiAgICAgICAgcHJldi5uID0gZW50cnk7XG4gICAgICB0aGF0W1NJWkVdKys7XG4gICAgICBpZiAoaW5kZXggIT09ICdGJylcbiAgICAgICAgdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9XG4gICAgcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIGdldEVudHJ5OiBnZXRFbnRyeSxcbiAgc2V0U3Ryb25nOiBmdW5jdGlvbihDLCBOQU1FLCBJU19NQVApIHtcbiAgICAkaXRlckRlZmluZShDLCBOQU1FLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCkge1xuICAgICAgdGhpcy5fdCA9IGl0ZXJhdGVkO1xuICAgICAgdGhpcy5fayA9IGtpbmQ7XG4gICAgICB0aGlzLl9sID0gdW5kZWZpbmVkO1xuICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzLFxuICAgICAgICAgIGtpbmQgPSB0aGF0Ll9rLFxuICAgICAgICAgIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yKVxuICAgICAgICBlbnRyeSA9IGVudHJ5LnA7XG4gICAgICBpZiAoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSkge1xuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIGlmIChraW5kID09ICdrZXlzJylcbiAgICAgICAgcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZiAoa2luZCA9PSAndmFsdWVzJylcbiAgICAgICAgcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnLCAhSVNfTUFQLCB0cnVlKTtcbiAgICBzZXRTcGVjaWVzKE5BTUUpO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
