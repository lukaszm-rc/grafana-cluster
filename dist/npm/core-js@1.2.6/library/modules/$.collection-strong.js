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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmNvbGxlY3Rpb24tc3Ryb25nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNJLFVBQUksUUFBUSxLQUFSO0FBQ0osYUFBTyxRQUFRLFVBQVI7QUFDUCxvQkFBYyxRQUFRLGtCQUFSO0FBQ2QsWUFBTSxRQUFRLFNBQVI7QUFDTixrQkFBWSxRQUFRLGdCQUFSO0FBQ1osZ0JBQVUsUUFBUSxhQUFSO0FBQ1YsY0FBUSxRQUFRLFlBQVI7QUFDUixvQkFBYyxRQUFRLGlCQUFSO0FBQ2QsYUFBTyxRQUFRLGVBQVI7QUFDUCxXQUFLLFFBQVEsU0FBUixFQUFtQixJQUFuQjtBQUNMLGFBQU8sUUFBUSxTQUFSO0FBQ1AsaUJBQVcsUUFBUSxlQUFSO0FBQ1gsbUJBQWEsUUFBUSxpQkFBUjtBQUNiLG9CQUFjLFFBQVEsaUJBQVI7QUFDZCxxQkFBZSxPQUFPLFlBQVAsSUFBdUIsUUFBdkI7QUFDZixhQUFPLGNBQWMsSUFBZCxHQUFxQixNQUFyQjtBQUNQLFdBQUs7O0FBQ0wsZ0JBQVUsU0FBVixPQUFVLENBQVMsRUFBVCxFQUFhLE1BQWIsRUFBcUI7QUFDakMsWUFBSSxDQUFDLFNBQVMsRUFBVCxDQUFELEVBQ0YsT0FBTyxRQUFPLCtDQUFQLElBQWEsUUFBYixHQUF3QixFQUF4QixHQUE2QixDQUFDLE9BQU8sRUFBUCxJQUFhLFFBQWIsR0FBd0IsR0FBeEIsR0FBOEIsR0FBOUIsQ0FBRCxHQUFzQyxFQUF0QyxDQUR0QztBQUVBLFlBQUksQ0FBQyxLQUFLLEVBQUwsRUFBUyxFQUFULENBQUQsRUFBZTtBQUNqQixjQUFJLENBQUMsYUFBYSxFQUFiLENBQUQsRUFDRixPQUFPLEdBQVAsQ0FERjtBQUVBLGNBQUksQ0FBQyxNQUFELEVBQ0YsT0FBTyxHQUFQLENBREY7QUFFQSxlQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBRSxFQUFGLENBQWIsQ0FMaUI7U0FBbkI7QUFP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QUFTLFNBQVQsR0FBcUIsUUFBckIsRUFBK0IsQ0FBQyxNQUFELEVBQVMsSUFuQjNDLEVBRG1DO0FBcUJuQyxxQkFBVyxJQUFYLEVBckJtQztTQUExQjtPQXpGYiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvJC5jb2xsZWN0aW9uLXN0cm9uZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLyQnKSxcbiAgICBoaWRlID0gcmVxdWlyZSgnLi8kLmhpZGUnKSxcbiAgICByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vJC5yZWRlZmluZS1hbGwnKSxcbiAgICBjdHggPSByZXF1aXJlKCcuLyQuY3R4JyksXG4gICAgc3RyaWN0TmV3ID0gcmVxdWlyZSgnLi8kLnN0cmljdC1uZXcnKSxcbiAgICBkZWZpbmVkID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKSxcbiAgICBmb3JPZiA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKSxcbiAgICAkaXRlckRlZmluZSA9IHJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpLFxuICAgIHN0ZXAgPSByZXF1aXJlKCcuLyQuaXRlci1zdGVwJyksXG4gICAgSUQgPSByZXF1aXJlKCcuLyQudWlkJykoJ2lkJyksXG4gICAgJGhhcyA9IHJlcXVpcmUoJy4vJC5oYXMnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKSxcbiAgICBzZXRTcGVjaWVzID0gcmVxdWlyZSgnLi8kLnNldC1zcGVjaWVzJyksXG4gICAgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKSxcbiAgICBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGlzT2JqZWN0LFxuICAgIFNJWkUgPSBERVNDUklQVE9SUyA/ICdfcycgOiAnc2l6ZScsXG4gICAgaWQgPSAwO1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbihpdCwgY3JlYXRlKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKVxuICAgIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghJGhhcyhpdCwgSUQpKSB7XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKVxuICAgICAgcmV0dXJuICdGJztcbiAgICBpZiAoIWNyZWF0ZSlcbiAgICAgIHJldHVybiAnRSc7XG4gICAgaGlkZShpdCwgSUQsICsraWQpO1xuICB9XG4gIHJldHVybiAnTycgKyBpdFtJRF07XG59O1xudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24odGhhdCwga2V5KSB7XG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KSxcbiAgICAgIGVudHJ5O1xuICBpZiAoaW5kZXggIT09ICdGJylcbiAgICByZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIGZvciAoZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKSB7XG4gICAgaWYgKGVudHJ5LmsgPT0ga2V5KVxuICAgICAgcmV0dXJuIGVudHJ5O1xuICB9XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKSB7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGl0ZXJhYmxlKSB7XG4gICAgICBzdHJpY3ROZXcodGhhdCwgQywgTkFNRSk7XG4gICAgICB0aGF0Ll9pID0gJC5jcmVhdGUobnVsbCk7XG4gICAgICB0aGF0Ll9mID0gdW5kZWZpbmVkO1xuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClcbiAgICAgICAgZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIGZvciAodmFyIHRoYXQgPSB0aGlzLFxuICAgICAgICAgICAgZGF0YSA9IHRoYXQuX2ksXG4gICAgICAgICAgICBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pIHtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoZW50cnkucClcbiAgICAgICAgICAgIGVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5fZiA9IHRoYXQuX2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgfSxcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzLFxuICAgICAgICAgICAgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICB2YXIgbmV4dCA9IGVudHJ5Lm4sXG4gICAgICAgICAgICAgIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmIChwcmV2KVxuICAgICAgICAgICAgcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZiAobmV4dClcbiAgICAgICAgICAgIG5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYgKHRoYXQuX2YgPT0gZW50cnkpXG4gICAgICAgICAgICB0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZiAodGhhdC5fbCA9PSBlbnRyeSlcbiAgICAgICAgICAgIHRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4pIHtcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpLFxuICAgICAgICAgICAgZW50cnk7XG4gICAgICAgIHdoaWxlIChlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2YpIHtcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuICAgICAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yKVxuICAgICAgICAgICAgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKERFU0NSSVBUT1JTKVxuICAgICAgJC5zZXREZXNjKEMucHJvdG90eXBlLCAnc2l6ZScsIHtnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBkZWZpbmVkKHRoaXNbU0laRV0pO1xuICAgICAgICB9fSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24odGhhdCwga2V5LCB2YWx1ZSkge1xuICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSksXG4gICAgICAgIHByZXYsXG4gICAgICAgIGluZGV4O1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgZW50cnkudiA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLFxuICAgICAgICBrOiBrZXksXG4gICAgICAgIHY6IHZhbHVlLFxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCxcbiAgICAgICAgbjogdW5kZWZpbmVkLFxuICAgICAgICByOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIGlmICghdGhhdC5fZilcbiAgICAgICAgdGhhdC5fZiA9IGVudHJ5O1xuICAgICAgaWYgKHByZXYpXG4gICAgICAgIHByZXYubiA9IGVudHJ5O1xuICAgICAgdGhhdFtTSVpFXSsrO1xuICAgICAgaWYgKGluZGV4ICE9PSAnRicpXG4gICAgICAgIHRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfVxuICAgIHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24oQywgTkFNRSwgSVNfTUFQKSB7XG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpIHtcbiAgICAgIHRoaXMuX3QgPSBpdGVyYXRlZDtcbiAgICAgIHRoaXMuX2sgPSBraW5kO1xuICAgICAgdGhpcy5fbCA9IHVuZGVmaW5lZDtcbiAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcyxcbiAgICAgICAgICBraW5kID0gdGhhdC5fayxcbiAgICAgICAgICBlbnRyeSA9IHRoYXQuX2w7XG4gICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucilcbiAgICAgICAgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgaWYgKCF0aGF0Ll90IHx8ICEodGhhdC5fbCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhhdC5fdC5fZikpIHtcbiAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICBpZiAoa2luZCA9PSAna2V5cycpXG4gICAgICAgIHJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpXG4gICAgICAgIHJldHVybiBzdGVwKDAsIGVudHJ5LnYpO1xuICAgICAgcmV0dXJuIHN0ZXAoMCwgW2VudHJ5LmssIGVudHJ5LnZdKTtcbiAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJywgIUlTX01BUCwgdHJ1ZSk7XG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
