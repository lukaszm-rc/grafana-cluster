/* */
'use strict';

System.register([], function (_export, _context) {
  var _typeof, $, global, has, DESCRIPTORS, $export, redefine, $fails, shared, setToStringTag, uid, wks, keyOf, $names, enumKeys, isArray, anObject, toIObject, createDesc, getDesc, setDesc, _create, getNames, $Symbol, $JSON, _stringify, setter, HIDDEN, isEnum, SymbolRegistry, AllSymbols, useNative, ObjectProto, setSymbolDesc, wrap, isSymbol, $defineProperty, $defineProperties, $create, $propertyIsEnumerable, $getOwnPropertyDescriptor, $getOwnPropertyNames, $getOwnPropertySymbols, $stringify, buggyJSON, symbolStatics;

  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      $ = require('./$');
      global = require('./$.global');
      has = require('./$.has');
      DESCRIPTORS = require('./$.descriptors');
      $export = require('./$.export');
      redefine = require('./$.redefine');
      $fails = require('./$.fails');
      shared = require('./$.shared');
      setToStringTag = require('./$.set-to-string-tag');
      uid = require('./$.uid');
      wks = require('./$.wks');
      keyOf = require('./$.keyof');
      $names = require('./$.get-names');
      enumKeys = require('./$.enum-keys');
      isArray = require('./$.is-array');
      anObject = require('./$.an-object');
      toIObject = require('./$.to-iobject');
      createDesc = require('./$.property-desc');
      getDesc = $.getDesc;
      setDesc = $.setDesc;
      _create = $.create;
      getNames = $names.get;
      $Symbol = global.Symbol;
      $JSON = global.JSON;
      _stringify = $JSON && $JSON.stringify;
      setter = false;
      HIDDEN = wks('_hidden');
      isEnum = $.isEnum;
      SymbolRegistry = shared('symbol-registry');
      AllSymbols = shared('symbols');
      useNative = typeof $Symbol == 'function';
      ObjectProto = Object.prototype;
      setSymbolDesc = DESCRIPTORS && $fails(function () {
        return _create(setDesc({}, 'a', { get: function get() {
            return setDesc(this, 'a', { value: 7 }).a;
          } })).a != 7;
      }) ? function (it, key, D) {
        var protoDesc = getDesc(ObjectProto, key);
        if (protoDesc) delete ObjectProto[key];
        setDesc(it, key, D);
        if (protoDesc && it !== ObjectProto) setDesc(ObjectProto, key, protoDesc);
      } : setDesc;

      wrap = function wrap(tag) {
        var sym = AllSymbols[tag] = _create($Symbol.prototype);
        sym._k = tag;
        DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
          configurable: true,
          set: function set(value) {
            if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
            setSymbolDesc(this, tag, createDesc(1, value));
          }
        });
        return sym;
      };

      isSymbol = function isSymbol(it) {
        return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol';
      };

      $defineProperty = function defineProperty(it, key, D) {
        if (D && has(AllSymbols, key)) {
          if (!D.enumerable) {
            if (!has(it, HIDDEN)) setDesc(it, HIDDEN, createDesc(1, {}));
            it[HIDDEN][key] = true;
          } else {
            if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
            D = _create(D, { enumerable: createDesc(0, false) });
          }
          return setSymbolDesc(it, key, D);
        }
        return setDesc(it, key, D);
      };

      $defineProperties = function defineProperties(it, P) {
        anObject(it);
        var keys = enumKeys(P = toIObject(P)),
            i = 0,
            l = keys.length,
            key;
        while (l > i) {
          $defineProperty(it, key = keys[i++], P[key]);
        }return it;
      };

      $create = function create(it, P) {
        return P === undefined ? _create(it) : $defineProperties(_create(it), P);
      };

      $propertyIsEnumerable = function propertyIsEnumerable(key) {
        var E = isEnum.call(this, key);
        return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
      };

      $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
        var D = getDesc(it = toIObject(it), key);
        if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
        return D;
      };

      $getOwnPropertyNames = function getOwnPropertyNames(it) {
        var names = getNames(toIObject(it)),
            result = [],
            i = 0,
            key;
        while (names.length > i) {
          if (!has(AllSymbols, key = names[i++]) && key != HIDDEN) result.push(key);
        }return result;
      };

      $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
        var names = getNames(toIObject(it)),
            result = [],
            i = 0,
            key;
        while (names.length > i) {
          if (has(AllSymbols, key = names[i++])) result.push(AllSymbols[key]);
        }return result;
      };

      $stringify = function stringify(it) {
        if (it === undefined || isSymbol(it)) return;
        var args = [it],
            i = 1,
            $$ = arguments,
            replacer,
            $replacer;
        while ($$.length > i) {
          args.push($$[i++]);
        }replacer = args[1];
        if (typeof replacer == 'function') $replacer = replacer;
        if ($replacer || !isArray(replacer)) replacer = function replacer(key, value) {
          if ($replacer) value = $replacer.call(this, key, value);
          if (!isSymbol(value)) return value;
        };
        args[1] = replacer;
        return _stringify.apply($JSON, args);
      };

      buggyJSON = $fails(function () {
        var S = $Symbol();
        return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
      });

      if (!useNative) {
        $Symbol = function _Symbol() {
          if (isSymbol(this)) throw TypeError('Symbol is not a constructor');
          return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
        };
        redefine($Symbol.prototype, 'toString', function toString() {
          return this._k;
        });
        isSymbol = function isSymbol(it) {
          return it instanceof $Symbol;
        };
        $.create = $create;
        $.isEnum = $propertyIsEnumerable;
        $.getDesc = $getOwnPropertyDescriptor;
        $.setDesc = $defineProperty;
        $.setDescs = $defineProperties;
        $.getNames = $names.get = $getOwnPropertyNames;
        $.getSymbols = $getOwnPropertySymbols;
        if (DESCRIPTORS && !require('./$.library')) {
          redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
        }
      }
      symbolStatics = {
        'for': function _for(key) {
          return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
        },
        keyFor: function keyFor(key) {
          return keyOf(SymbolRegistry, key);
        },
        useSetter: function useSetter() {
          setter = true;
        },
        useSimple: function useSimple() {
          setter = false;
        }
      };

      $.each.call(('hasInstance,isConcatSpreadable,iterator,match,replace,search,' + 'species,split,toPrimitive,toStringTag,unscopables').split(','), function (it) {
        var sym = wks(it);
        symbolStatics[it] = useNative ? sym : wrap(sym);
      });
      setter = true;
      $export($export.G + $export.W, { Symbol: $Symbol });
      $export($export.S, 'Symbol', symbolStatics);
      $export($export.S + $export.F * !useNative, 'Object', {
        create: $create,
        defineProperty: $defineProperty,
        defineProperties: $defineProperties,
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
        getOwnPropertyNames: $getOwnPropertyNames,
        getOwnPropertySymbols: $getOwnPropertySymbols
      });
      $JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', { stringify: $stringify });
      setToStringTag($Symbol, 'Symbol');
      setToStringTag(Math, 'Math', true);
      setToStringTag(global.JSON, 'JSON', true);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNJLFVBQUksUUFBUSxLQUFSO0FBQ0osZUFBUyxRQUFRLFlBQVI7QUFDVCxZQUFNLFFBQVEsU0FBUjtBQUNOLG9CQUFjLFFBQVEsaUJBQVI7QUFDZCxnQkFBVSxRQUFRLFlBQVI7QUFDVixpQkFBVyxRQUFRLGNBQVI7QUFDWCxlQUFTLFFBQVEsV0FBUjtBQUNULGVBQVMsUUFBUSxZQUFSO0FBQ1QsdUJBQWlCLFFBQVEsdUJBQVI7QUFDakIsWUFBTSxRQUFRLFNBQVI7QUFDTixZQUFNLFFBQVEsU0FBUjtBQUNOLGNBQVEsUUFBUSxXQUFSO0FBQ1IsZUFBUyxRQUFRLGVBQVI7QUFDVCxpQkFBVyxRQUFRLGVBQVI7QUFDWCxnQkFBVSxRQUFRLGNBQVI7QUFDVixpQkFBVyxRQUFRLGVBQVI7QUFDWCxrQkFBWSxRQUFRLGdCQUFSO0FBQ1osbUJBQWEsUUFBUSxtQkFBUjtBQUNiLGdCQUFVLEVBQUUsT0FBRjtBQUNWLGdCQUFVLEVBQUUsT0FBRjtBQUNWLGdCQUFVLEVBQUUsTUFBRjtBQUNWLGlCQUFXLE9BQU8sR0FBUDtBQUNYLGdCQUFVLE9BQU8sTUFBUDtBQUNWLGNBQVEsT0FBTyxJQUFQO0FBQ1IsbUJBQWEsU0FBUyxNQUFNLFNBQU47QUFDdEIsZUFBUztBQUNULGVBQVMsSUFBSSxTQUFKO0FBQ1QsZUFBUyxFQUFFLE1BQUY7QUFDVCx1QkFBaUIsT0FBTyxpQkFBUDtBQUNqQixtQkFBYSxPQUFPLFNBQVA7QUFDYixrQkFBWSxPQUFPLE9BQVAsSUFBa0IsVUFBbEI7QUFDWixvQkFBYyxPQUFPLFNBQVA7QUFDZCxzQkFBZ0IsZUFBZSxPQUFPLFlBQVc7QUFDbkQsZUFBTyxRQUFRLFFBQVEsRUFBUixFQUFZLEdBQVosRUFBaUIsRUFBQyxLQUFLLGVBQVc7QUFDN0MsbUJBQU8sUUFBUSxJQUFSLEVB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T0FBUjtBQUNBLHdCQUFnQixlQUFoQjtBQUNBLDBCQUFrQixpQkFBbEI7QUFDQSxrQ0FBMEIseUJBQTFCO0FBQ0EsNkJBQXFCLG9CQUFyQjtBQUNBLCtCQUF1QixzQkFBdkI7T0FORjtBQVFBLGVBQVMsUUFBUSxRQUFRLENBQVIsR0FBWSxRQUFRLENBQVIsSUFBYSxDQUFDLFNBQUQsSUFBYyxTQUFkLENBQWIsRUFBdUMsTUFBM0QsRUFBbUUsRUFBQyxXQUFXLFVBQVgsRUFBcEUsQ0FBVDtBQUNBLHFCQUFlLE9BQWYsRUFBd0IsUUFBeEI7QUFDQSxxQkFBZSxJQUFmLEVBQXFCLE1BQXJCLEVBQTZCLElBQTdCO0FBQ0EscUJBQWUsT0FBTyxJQUFQLEVBQWEsTUFBNUIsRUFBb0MsSUFBcEMiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi8kJyksXG4gICAgZ2xvYmFsID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLFxuICAgIGhhcyA9IHJlcXVpcmUoJy4vJC5oYXMnKSxcbiAgICBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpLFxuICAgICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgcmVkZWZpbmUgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUnKSxcbiAgICAkZmFpbHMgPSByZXF1aXJlKCcuLyQuZmFpbHMnKSxcbiAgICBzaGFyZWQgPSByZXF1aXJlKCcuLyQuc2hhcmVkJyksXG4gICAgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKSxcbiAgICB1aWQgPSByZXF1aXJlKCcuLyQudWlkJyksXG4gICAgd2tzID0gcmVxdWlyZSgnLi8kLndrcycpLFxuICAgIGtleU9mID0gcmVxdWlyZSgnLi8kLmtleW9mJyksXG4gICAgJG5hbWVzID0gcmVxdWlyZSgnLi8kLmdldC1uYW1lcycpLFxuICAgIGVudW1LZXlzID0gcmVxdWlyZSgnLi8kLmVudW0ta2V5cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLyQuaXMtYXJyYXknKSxcbiAgICBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKSxcbiAgICB0b0lPYmplY3QgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpLFxuICAgIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpLFxuICAgIGdldERlc2MgPSAkLmdldERlc2MsXG4gICAgc2V0RGVzYyA9ICQuc2V0RGVzYyxcbiAgICBfY3JlYXRlID0gJC5jcmVhdGUsXG4gICAgZ2V0TmFtZXMgPSAkbmFtZXMuZ2V0LFxuICAgICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sLFxuICAgICRKU09OID0gZ2xvYmFsLkpTT04sXG4gICAgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeSxcbiAgICBzZXR0ZXIgPSBmYWxzZSxcbiAgICBISURERU4gPSB3a3MoJ19oaWRkZW4nKSxcbiAgICBpc0VudW0gPSAkLmlzRW51bSxcbiAgICBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JyksXG4gICAgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpLFxuICAgIHVzZU5hdGl2ZSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbicsXG4gICAgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24oKSB7XG4gIHJldHVybiBfY3JlYXRlKHNldERlc2Moe30sICdhJywge2dldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc2V0RGVzYyh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7XG4gICAgfX0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdldERlc2MoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpXG4gICAgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIHNldERlc2MoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKVxuICAgIHNldERlc2MoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBzZXREZXNjO1xudmFyIHdyYXAgPSBmdW5jdGlvbih0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbC5wcm90b3R5cGUpO1xuICBzeW0uX2sgPSB0YWc7XG4gIERFU0NSSVBUT1JTICYmIHNldHRlciAmJiBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpXG4gICAgICAgIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzeW07XG59O1xudmFyIGlzU3ltYm9sID0gZnVuY3Rpb24oaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn07XG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSlcbiAgICAgICAgc2V0RGVzYyhpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSlcbiAgICAgICAgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9XG4gICAgcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH1cbiAgcmV0dXJuIHNldERlc2MoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSksXG4gICAgICBpID0gMCxcbiAgICAgIGwgPSBrZXlzLmxlbmd0aCxcbiAgICAgIGtleTtcbiAgd2hpbGUgKGwgPiBpKVxuICAgICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkpO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICB2YXIgRCA9IGdldERlc2MoaXQgPSB0b0lPYmplY3QoaXQpLCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKVxuICAgIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ2V0TmFtZXModG9JT2JqZWN0KGl0KSksXG4gICAgICByZXN1bHQgPSBbXSxcbiAgICAgIGkgPSAwLFxuICAgICAga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSlcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOKVxuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgbmFtZXMgPSBnZXROYW1lcyh0b0lPYmplY3QoaXQpKSxcbiAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgaSA9IDAsXG4gICAgICBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKVxuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkpXG4gICAgICByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gIGlmIChpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlcbiAgICByZXR1cm47XG4gIHZhciBhcmdzID0gW2l0XSxcbiAgICAgIGkgPSAxLFxuICAgICAgJCQgPSBhcmd1bWVudHMsXG4gICAgICByZXBsYWNlcixcbiAgICAgICRyZXBsYWNlcjtcbiAgd2hpbGUgKCQkLmxlbmd0aCA+IGkpXG4gICAgYXJncy5wdXNoKCQkW2krK10pO1xuICByZXBsYWNlciA9IGFyZ3NbMV07XG4gIGlmICh0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJylcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgaWYgKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpXG4gICAgcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICBpZiAoJHJlcGxhY2VyKVxuICAgICAgICB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbn07XG52YXIgYnVnZ3lKU09OID0gJGZhaWxzKGZ1bmN0aW9uKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pO1xuaWYgKCF1c2VOYXRpdmUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAoaXNTeW1ib2wodGhpcykpXG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvcicpO1xuICAgIHJldHVybiB3cmFwKHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCkpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sLnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuICBpc1N5bWJvbCA9IGZ1bmN0aW9uKGl0KSB7XG4gICAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbiAgfTtcbiAgJC5jcmVhdGUgPSAkY3JlYXRlO1xuICAkLmlzRW51bSA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgJC5nZXREZXNjID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJC5zZXREZXNjID0gJGRlZmluZVByb3BlcnR5O1xuICAkLnNldERlc2NzID0gJGRlZmluZVByb3BlcnRpZXM7XG4gICQuZ2V0TmFtZXMgPSAkbmFtZXMuZ2V0ID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gICQuZ2V0U3ltYm9scyA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi8kLmxpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG59XG52YXIgc3ltYm9sU3RhdGljcyA9IHtcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJykgPyBTeW1ib2xSZWdpc3RyeVtrZXldIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioa2V5KSB7XG4gICAgcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCkge1xuICAgIHNldHRlciA9IHRydWU7XG4gIH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKSB7XG4gICAgc2V0dGVyID0gZmFsc2U7XG4gIH1cbn07XG4kLmVhY2guY2FsbCgoJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCwnICsgJ3NwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnKS5zcGxpdCgnLCcpLCBmdW5jdGlvbihpdCkge1xuICB2YXIgc3ltID0gd2tzKGl0KTtcbiAgc3ltYm9sU3RhdGljc1tpdF0gPSB1c2VOYXRpdmUgPyBzeW0gOiB3cmFwKHN5bSk7XG59KTtcbnNldHRlciA9IHRydWU7XG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVywge1N5bWJvbDogJFN5bWJvbH0pO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdTeW1ib2wnLCBzeW1ib2xTdGF0aWNzKTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXVzZU5hdGl2ZSwgJ09iamVjdCcsIHtcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCF1c2VOYXRpdmUgfHwgYnVnZ3lKU09OKSwgJ0pTT04nLCB7c3RyaW5naWZ5OiAkc3RyaW5naWZ5fSk7XG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
