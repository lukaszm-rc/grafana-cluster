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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnN5bWJvbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDSSxVQUFJLFFBQVEsS0FBUjtBQUNKLGVBQVMsUUFBUSxZQUFSO0FBQ1QsWUFBTSxRQUFRLFNBQVI7QUFDTixvQkFBYyxRQUFRLGlCQUFSO0FBQ2QsZ0JBQVUsUUFBUSxZQUFSO0FBQ1YsaUJBQVcsUUFBUSxjQUFSO0FBQ1gsZUFBUyxRQUFRLFdBQVI7QUFDVCxlQUFTLFFBQVEsWUFBUjtBQUNULHVCQUFpQixRQUFRLHVCQUFSO0FBQ2pCLFlBQU0sUUFBUSxTQUFSO0FBQ04sWUFBTSxRQUFRLFNBQVI7QUFDTixjQUFRLFFBQVEsV0FBUjtBQUNSLGVBQVMsUUFBUSxlQUFSO0FBQ1QsaUJBQVcsUUFBUSxlQUFSO0FBQ1gsZ0JBQVUsUUFBUSxjQUFSO0FBQ1YsaUJBQVcsUUFBUSxlQUFSO0FBQ1gsa0JBQVksUUFBUSxnQkFBUjtBQUNaLG1CQUFhLFFBQVEsbUJBQVI7QUFDYixnQkFBVSxFQUFFLE9BQUY7QUFDVixnQkFBVSxFQUFFLE9BQUY7QUFDVixnQkFBVSxFQUFFLE1BQUY7QUFDVixpQkFBVyxPQUFPLEdBQVA7QUFDWCxnQkFBVSxPQUFPLE1BQVA7QUFDVixjQUFRLE9BQU8sSUFBUDtBQUNSLG1CQUFhLFNBQVMsTUFBTSxTQUFOO0FBQ3RCLGVBQVM7QUFDVCxlQUFTLElBQUksU0FBSjtBQUNULGVBQVMsRUFBRSxNQUFGO0FBQ1QsdUJBQWlCLE9BQU8saUJBQVA7QUFDakIsbUJBQWEsT0FBTyxTQUFQO0FBQ2Isa0JBQVksT0FBTyxPQUFQLElBQWtCLFVBQWxCO0FBQ1osb0JBQWMsT0FBTyxTQUFQO0FBQ2Qsc0JBQWdCLGVBQWUsT0FBTyxZQUFXO0FBQ25ELGVBQU8sUUFBUSxRQUFRLEVBQVIsRUFBWSxHQUFaLEVBQWlCLEVBQUMsS0FBSyxlQUFXO0FBQzdDLG1CQUFPLFFBQVEsSUFBUixFQUFjLEdBQWQs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QSx3QkFBZ0IsZUFBaEI7QUFDQSwwQkFBa0IsaUJBQWxCO0FBQ0Esa0NBQTBCLHlCQUExQjtBQUNBLDZCQUFxQixvQkFBckI7QUFDQSwrQkFBdUIsc0JBQXZCO09BTkY7QUFRQSxlQUFTLFFBQVEsUUFBUSxDQUFSLEdBQVksUUFBUSxDQUFSLElBQWEsQ0FBQyxTQUFELElBQWMsU0FBZCxDQUFiLEVBQXVDLE1BQTNELEVBQW1FLEVBQUMsV0FBVyxVQUFYLEVBQXBFLENBQVQ7QUFDQSxxQkFBZSxPQUFmLEVBQXdCLFFBQXhCO0FBQ0EscUJBQWUsSUFBZixFQUFxQixNQUFyQixFQUE2QixJQUE3QjtBQUNBLHFCQUFlLE9BQU8sSUFBUCxFQUFhLE1BQTVCLEVBQW9DLElBQXBDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLyQnKSxcbiAgICBnbG9iYWwgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJyksXG4gICAgaGFzID0gcmVxdWlyZSgnLi8kLmhhcycpLFxuICAgIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJyksXG4gICAgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICByZWRlZmluZSA9IHJlcXVpcmUoJy4vJC5yZWRlZmluZScpLFxuICAgICRmYWlscyA9IHJlcXVpcmUoJy4vJC5mYWlscycpLFxuICAgIHNoYXJlZCA9IHJlcXVpcmUoJy4vJC5zaGFyZWQnKSxcbiAgICBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vJC5zZXQtdG8tc3RyaW5nLXRhZycpLFxuICAgIHVpZCA9IHJlcXVpcmUoJy4vJC51aWQnKSxcbiAgICB3a3MgPSByZXF1aXJlKCcuLyQud2tzJyksXG4gICAga2V5T2YgPSByZXF1aXJlKCcuLyQua2V5b2YnKSxcbiAgICAkbmFtZXMgPSByZXF1aXJlKCcuLyQuZ2V0LW5hbWVzJyksXG4gICAgZW51bUtleXMgPSByZXF1aXJlKCcuLyQuZW51bS1rZXlzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vJC5pcy1hcnJheScpLFxuICAgIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpLFxuICAgIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0JyksXG4gICAgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJyksXG4gICAgZ2V0RGVzYyA9ICQuZ2V0RGVzYyxcbiAgICBzZXREZXNjID0gJC5zZXREZXNjLFxuICAgIF9jcmVhdGUgPSAkLmNyZWF0ZSxcbiAgICBnZXROYW1lcyA9ICRuYW1lcy5nZXQsXG4gICAgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2wsXG4gICAgJEpTT04gPSBnbG9iYWwuSlNPTixcbiAgICBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5LFxuICAgIHNldHRlciA9IGZhbHNlLFxuICAgIEhJRERFTiA9IHdrcygnX2hpZGRlbicpLFxuICAgIGlzRW51bSA9ICQuaXNFbnVtLFxuICAgIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKSxcbiAgICBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyksXG4gICAgdXNlTmF0aXZlID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJyxcbiAgICBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpIHtcbiAgcmV0dXJuIF9jcmVhdGUoc2V0RGVzYyh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzZXREZXNjKHRoaXMsICdhJywge3ZhbHVlOiA3fSkuYTtcbiAgICB9fSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ2V0RGVzYyhPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYylcbiAgICBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgc2V0RGVzYyhpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pXG4gICAgc2V0RGVzYyhPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IHNldERlc2M7XG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sLnByb3RvdHlwZSk7XG4gIHN5bS5fayA9IHRhZztcbiAgREVTQ1JJUFRPUlMgJiYgc2V0dGVyICYmIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSlcbiAgICAgICAgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHN5bTtcbn07XG52YXIgaXNTeW1ib2wgPSBmdW5jdGlvbihpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKVxuICAgICAgICBzZXREZXNjKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKVxuICAgICAgICBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHtlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKX0pO1xuICAgIH1cbiAgICByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfVxuICByZXR1cm4gc2V0RGVzYyhpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKSxcbiAgICAgIGkgPSAwLFxuICAgICAgbCA9IGtleXMubGVuZ3RoLFxuICAgICAga2V5O1xuICB3aGlsZSAobCA+IGkpXG4gICAgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSk7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIHZhciBEID0gZ2V0RGVzYyhpdCA9IHRvSU9iamVjdChpdCksIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpXG4gICAgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnZXROYW1lcyh0b0lPYmplY3QoaXQpKSxcbiAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgaSA9IDAsXG4gICAgICBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKVxuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4pXG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdldE5hbWVzKHRvSU9iamVjdChpdCkpLFxuICAgICAgcmVzdWx0ID0gW10sXG4gICAgICBpID0gMCxcbiAgICAgIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpXG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSlcbiAgICAgIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyICRzdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgaWYgKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKVxuICAgIHJldHVybjtcbiAgdmFyIGFyZ3MgPSBbaXRdLFxuICAgICAgaSA9IDEsXG4gICAgICAkJCA9IGFyZ3VtZW50cyxcbiAgICAgIHJlcGxhY2VyLFxuICAgICAgJHJlcGxhY2VyO1xuICB3aGlsZSAoJCQubGVuZ3RoID4gaSlcbiAgICBhcmdzLnB1c2goJCRbaSsrXSk7XG4gIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgaWYgKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKVxuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICBpZiAoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSlcbiAgICByZXBsYWNlciA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICgkcmVwbGFjZXIpXG4gICAgICAgIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSlcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xufTtcbnZhciBidWdneUpTT04gPSAkZmFpbHMoZnVuY3Rpb24oKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSk7XG5pZiAoIXVzZU5hdGl2ZSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmIChpc1N5bWJvbCh0aGlzKSlcbiAgICAgIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yJyk7XG4gICAgcmV0dXJuIHdyYXAodWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKSk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2wucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG4gIGlzU3ltYm9sID0gZnVuY3Rpb24oaXQpIHtcbiAgICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xuICB9O1xuICAkLmNyZWF0ZSA9ICRjcmVhdGU7XG4gICQuaXNFbnVtID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICAkLmdldERlc2MgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkLnNldERlc2MgPSAkZGVmaW5lUHJvcGVydHk7XG4gICQuc2V0RGVzY3MgPSAkZGVmaW5lUHJvcGVydGllcztcbiAgJC5nZXROYW1lcyA9ICRuYW1lcy5nZXQgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgJC5nZXRTeW1ib2xzID0gJGdldE93blByb3BlcnR5U3ltYm9scztcbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuLyQubGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cbn1cbnZhciBzeW1ib2xTdGF0aWNzID0ge1xuICAnZm9yJzogZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKSA/IFN5bWJvbFJlZ2lzdHJ5W2tleV0gOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpIHtcbiAgICByZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24oKSB7XG4gICAgc2V0dGVyID0gdHJ1ZTtcbiAgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpIHtcbiAgICBzZXR0ZXIgPSBmYWxzZTtcbiAgfVxufTtcbiQuZWFjaC5jYWxsKCgnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLCcgKyAnc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcycpLnNwbGl0KCcsJyksIGZ1bmN0aW9uKGl0KSB7XG4gIHZhciBzeW0gPSB3a3MoaXQpO1xuICBzeW1ib2xTdGF0aWNzW2l0XSA9IHVzZU5hdGl2ZSA/IHN5bSA6IHdyYXAoc3ltKTtcbn0pO1xuc2V0dGVyID0gdHJ1ZTtcbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XLCB7U3ltYm9sOiAkU3ltYm9sfSk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ1N5bWJvbCcsIHN5bWJvbFN0YXRpY3MpO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhdXNlTmF0aXZlLCAnT2JqZWN0Jywge1xuICBjcmVhdGU6ICRjcmVhdGUsXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIXVzZU5hdGl2ZSB8fCBidWdneUpTT04pLCAnSlNPTicsIHtzdHJpbmdpZnk6ICRzdHJpbmdpZnl9KTtcbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
