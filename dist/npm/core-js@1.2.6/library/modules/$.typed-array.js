/* */
'use strict';

System.register([], function (_export, _context) {
  var _typeof, LIBRARY, global, $, fails, $export, $typed, $buffer, ctx, strictNew, propertyDesc, hide, redefineAll, isInteger, toInteger, toLength, toIndex, toPrimitive, isObject, toObject, isArrayIter, isIterable, getIterFn, wks, createArrayMethod, createArrayIncludes, speciesConstructor, ArrayIterators, Iterators, $iterDetect, setSpecies, arrayFill, arrayCopyWithin, ArrayProto, $ArrayBuffer, $DataView, setDesc, getDesc, arrayForEach, arrayMap, arrayFilter, arraySome, arrayEvery, arrayFind, arrayFindIndex, arrayIncludes, arrayIndexOf, arrayValues, arrayKeys, arrayEntries, arrayLastIndexOf, arrayReduce, arrayReduceRight, arrayJoin, arrayReverse, arraySort, arraySlice, arrayToString, arrayToLocaleString, ITERATOR, TAG, TYPED_CONSTRUCTOR, DEF_CONSTRUCTOR, ALL_ARRAYS, TYPED_ARRAY, VIEW, BYTES_PER_ELEMENT, LITTLE_ENDIAN, validate, fromList, allocate, $from, addGetter, $of, $toLocaleString, proto, isTAIndex, $getDesc, $setDesc, $TypedArrayPrototype$;

  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      if (require('./$.descriptors')) {
        LIBRARY = require('./$.library');
        global = require('./$.global');
        $ = require('./$');
        fails = require('./$.fails');
        $export = require('./$.export');
        $typed = require('./$.typed');
        $buffer = require('./$.buffer');
        ctx = require('./$.ctx');
        strictNew = require('./$.strict-new');
        propertyDesc = require('./$.property-desc');
        hide = require('./$.hide');
        redefineAll = require('./$.redefine-all');
        isInteger = require('./$.is-integer');
        toInteger = require('./$.to-integer');
        toLength = require('./$.to-length');
        toIndex = require('./$.to-index');
        toPrimitive = require('./$.to-primitive');
        isObject = require('./$.is-object');
        toObject = require('./$.to-object');
        isArrayIter = require('./$.is-array-iter');
        isIterable = require('./core.is-iterable');
        getIterFn = require('./core.get-iterator-method');
        wks = require('./$.wks');
        createArrayMethod = require('./$.array-methods');
        createArrayIncludes = require('./$.array-includes');
        speciesConstructor = require('./$.species-constructor');
        ArrayIterators = require('./es6.array.iterator');
        Iterators = require('./$.iterators');
        $iterDetect = require('./$.iter-detect');
        setSpecies = require('./$.set-species');
        arrayFill = require('./$.array-fill');
        arrayCopyWithin = require('./$.array-copy-within');
        ArrayProto = Array.prototype;
        $ArrayBuffer = $buffer.ArrayBuffer;
        $DataView = $buffer.DataView;
        setDesc = $.setDesc;
        getDesc = $.getDesc;
        arrayForEach = createArrayMethod(0);
        arrayMap = createArrayMethod(1);
        arrayFilter = createArrayMethod(2);
        arraySome = createArrayMethod(3);
        arrayEvery = createArrayMethod(4);
        arrayFind = createArrayMethod(5);
        arrayFindIndex = createArrayMethod(6);
        arrayIncludes = createArrayIncludes(true);
        arrayIndexOf = createArrayIncludes(false);
        arrayValues = ArrayIterators.values;
        arrayKeys = ArrayIterators.keys;
        arrayEntries = ArrayIterators.entries;
        arrayLastIndexOf = ArrayProto.lastIndexOf;
        arrayReduce = ArrayProto.reduce;
        arrayReduceRight = ArrayProto.reduceRight;
        arrayJoin = ArrayProto.join;
        arrayReverse = ArrayProto.reverse;
        arraySort = ArrayProto.sort;
        arraySlice = ArrayProto.slice;
        arrayToString = ArrayProto.toString;
        arrayToLocaleString = ArrayProto.toLocaleString;
        ITERATOR = wks('iterator');
        TAG = wks('toStringTag');
        TYPED_CONSTRUCTOR = wks('typed_constructor');
        DEF_CONSTRUCTOR = wks('def_constructor');
        ALL_ARRAYS = $typed.ARRAYS;
        TYPED_ARRAY = $typed.TYPED;
        VIEW = $typed.VIEW;
        BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
        LITTLE_ENDIAN = fails(function () {
          return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
        });

        validate = function validate(it) {
          if (isObject(it) && TYPED_ARRAY in it) return it;
          throw TypeError(it + ' is not a typed array!');
        };

        fromList = function fromList(O, list) {
          var index = 0,
              length = list.length,
              result = allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
          while (length > index) {
            result[index] = list[index++];
          }return result;
        };

        allocate = function allocate(C, length) {
          if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
            throw TypeError('It is not a typed array constructor!');
          }
          return new C(length);
        };

        $from = function from(source) {
          var O = toObject(source),
              $$ = arguments,
              $$len = $$.length,
              mapfn = $$len > 1 ? $$[1] : undefined,
              mapping = mapfn !== undefined,
              iterFn = getIterFn(O),
              i,
              length,
              values,
              result,
              step,
              iterator;
          if (iterFn != undefined && !isArrayIter(iterFn)) {
            for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
              values.push(step.value);
            }
            O = values;
          }
          if (mapping && $$len > 2) mapfn = ctx(mapfn, $$[2], 2);
          for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
            result[i] = mapping ? mapfn(O[i], i) : O[i];
          }
          return result;
        };

        addGetter = function addGetter(C, key, internal) {
          setDesc(C.prototype, key, { get: function get() {
              return this._d[internal];
            } });
        };

        $of = function of() {
          var index = 0,
              length = arguments.length,
              result = allocate(this, length);
          while (length > index) {
            result[index] = arguments[index++];
          }return result;
        };

        $toLocaleString = function toLocaleString() {
          return arrayToLocaleString.apply(validate(this), arguments);
        };

        proto = {
          copyWithin: function copyWithin(target, start) {
            return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
          },
          every: function every(callbackfn) {
            return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          },
          fill: function fill(value) {
            return arrayFill.apply(validate(this), arguments);
          },
          filter: function filter(callbackfn) {
            return fromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
          },
          find: function find(predicate) {
            return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
          },
          findIndex: function findIndex(predicate) {
            return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
          },
          forEach: function forEach(callbackfn) {
            arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          },
          indexOf: function indexOf(searchElement) {
            return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
          },
          includes: function includes(searchElement) {
            return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
          },
          join: function join(separator) {
            return arrayJoin.apply(validate(this), arguments);
          },
          lastIndexOf: function lastIndexOf(searchElement) {
            return arrayLastIndexOf.apply(validate(this), arguments);
          },
          map: function map(mapfn) {
            return fromList(this, arrayMap(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined));
          },
          reduce: function reduce(callbackfn) {
            return arrayReduce.apply(validate(this), arguments);
          },
          reduceRight: function reduceRight(callbackfn) {
            return arrayReduceRight.apply(validate(this), arguments);
          },
          reverse: function reverse() {
            return arrayReverse.call(validate(this));
          },
          set: function set(arrayLike) {
            validate(this);
            var offset = toInteger(arguments.length > 1 ? arguments[1] : undefined);
            if (offset < 0) throw RangeError();
            var length = this.length;
            var src = toObject(arrayLike);
            var index = 0;
            var len = toLength(src.length);
            if (len + offset > length) throw RangeError();
            while (index < len) {
              this[offset + index] = src[index++];
            }
          },
          slice: function slice(start, end) {
            return fromList(this, arraySlice.call(validate(this), start, end));
          },
          some: function some(callbackfn) {
            return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          },
          sort: function sort(comparefn) {
            return arraySort.call(validate(this), comparefn);
          },
          subarray: function subarray(begin, end) {
            var O = validate(this),
                length = O.length,
                $begin = toIndex(begin, length);
            return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toIndex(end, length)) - $begin));
          },
          entries: function entries() {
            return arrayEntries.call(validate(this));
          },
          keys: function keys() {
            return arrayKeys.call(validate(this));
          },
          values: function values() {
            return arrayValues.call(validate(this));
          }
        };

        isTAIndex = function isTAIndex(target, key) {
          return isObject(target) && TYPED_ARRAY in target && (typeof key === 'undefined' ? 'undefined' : _typeof(key)) != 'symbol' && key in target && String(+key) == String(key);
        };

        $getDesc = function getOwnPropertyDescriptor(target, key) {
          return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : getDesc(target, key);
        };

        $setDesc = function defineProperty(target, key, desc) {
          if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc)) {
            if ('value' in desc) target[key] = desc.value;
            return target;
          } else return setDesc(target, key, desc);
        };

        if (!ALL_ARRAYS) {
          $.getDesc = $getDesc;
          $.setDesc = $setDesc;
        }
        $export($export.S + $export.F * !ALL_ARRAYS, 'Object', {
          getOwnPropertyDescriptor: $getDesc,
          defineProperty: $setDesc
        });
        $TypedArrayPrototype$ = redefineAll({}, proto);

        redefineAll($TypedArrayPrototype$, {
          constructor: function constructor() {},
          toString: arrayToString,
          toLocaleString: $toLocaleString
        });
        $.setDesc($TypedArrayPrototype$, TAG, { get: function get() {
            return this[TYPED_ARRAY];
          } });
        module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
          CLAMPED = !!CLAMPED;
          var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array',
              GETTER = 'get' + KEY,
              SETTER = 'set' + KEY,
              TypedArray = global[NAME],
              Base = TypedArray || {},
              FORCED = !TypedArray || !$typed.ABV,
              $iterator = proto.values,
              O = {};
          var addElement = function addElement(that, index) {
            setDesc(that, index, {
              get: function get() {
                var data = this._d;
                return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
              },
              set: function set(it) {
                var data = this._d;
                if (CLAMPED) it = (it = Math.round(it)) < 0 ? 0 : it > 0xff ? 0xff : it & 0xff;
                data.v[SETTER](index * BYTES + data.o, it, LITTLE_ENDIAN);
              },
              enumerable: true
            });
          };
          if (!$ArrayBuffer) return;
          if (FORCED) {
            TypedArray = wrapper(function (that, data, $offset, $length) {
              strictNew(that, TypedArray, NAME);
              var index = 0,
                  offset = 0,
                  buffer,
                  byteLength,
                  length;
              if (!isObject(data)) {
                byteLength = toInteger(data) * BYTES;
                buffer = new $ArrayBuffer(byteLength);
              } else if (data instanceof $ArrayBuffer) {
                buffer = data;
                offset = toInteger($offset);
                if (offset < 0 || offset % BYTES) throw RangeError();
                var $len = data.byteLength;
                if ($length === undefined) {
                  if ($len % BYTES) throw RangeError();
                  byteLength = $len - offset;
                  if (byteLength < 0) throw RangeError();
                } else {
                  byteLength = toLength($length) * BYTES;
                  if (byteLength + offset > $len) throw RangeError();
                }
              } else return $from.call(TypedArray, data);
              length = byteLength / BYTES;
              hide(that, '_d', {
                b: buffer,
                o: offset,
                l: byteLength,
                e: length,
                v: new $DataView(buffer)
              });
              while (index < length) {
                addElement(that, index++);
              }
            });
            TypedArray.prototype = $.create($TypedArrayPrototype$);
            addGetter(TypedArray, 'buffer', 'b');
            addGetter(TypedArray, 'byteOffset', 'o');
            addGetter(TypedArray, 'byteLength', 'l');
            addGetter(TypedArray, 'length', 'e');
            hide(TypedArray, BYTES_PER_ELEMENT, BYTES);
            hide(TypedArray.prototype, BYTES_PER_ELEMENT, BYTES);
            hide(TypedArray.prototype, 'constructor', TypedArray);
          } else if (!$iterDetect(function (iter) {
            new TypedArray(iter);
          }, true)) {
            TypedArray = wrapper(function (that, data, $offset, $length) {
              strictNew(that, TypedArray, NAME);
              if (isObject(data) && isIterable(data)) return $from.call(TypedArray, data);
              return $length === undefined ? new Base(data, $offset) : new Base(data, $offset, $length);
            });
            TypedArray.prototype = Base.prototype;
            if (!LIBRARY) TypedArray.prototype.constructor = TypedArray;
          }
          var TypedArrayPrototype = TypedArray.prototype;
          var $nativeIterator = TypedArrayPrototype[ITERATOR];
          hide(TypedArray, TYPED_CONSTRUCTOR, true);
          hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
          hide(TypedArrayPrototype, VIEW, true);
          hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
          TAG in TypedArrayPrototype || $.setDesc(TypedArrayPrototype, TAG, { get: function get() {
              return NAME;
            } });
          O[NAME] = TypedArray;
          $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
          $export($export.S + $export.F * (TypedArray != Base), NAME, {
            BYTES_PER_ELEMENT: BYTES,
            from: Base.from || $from,
            of: Base.of || $of
          });
          $export($export.P + $export.F * FORCED, NAME, proto);
          $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, { toString: arrayToString });
          $export($export.P + $export.F * fails(function () {
            return [1, 2].toLocaleString() != new Typed([1, 2]).toLocaleString();
          }), NAME, { toLocaleString: $toLocaleString });
          Iterators[NAME] = $nativeIterator || $iterator;
          LIBRARY || $nativeIterator || hide(TypedArrayPrototype, ITERATOR, $iterator);
          setSpecies(NAME);
        };
      } else module.exports = function () {};
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnR5cGVkLWFycmF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBLFVBQUksUUFBUSxpQkFBUixDQUFKLEVBQWdDO0FBQzFCLGtCQUFVLFFBQVEsYUFBUixFQURnQjtBQUUxQixpQkFBUyxRQUFRLFlBQVIsRUFGaUI7QUFHMUIsWUFBSSxRQUFRLEtBQVIsRUFIc0I7QUFJMUIsZ0JBQVEsUUFBUSxXQUFSLEVBSmtCO0FBSzFCLGtCQUFVLFFBQVEsWUFBUixFQUxnQjtBQU0xQixpQkFBUyxRQUFRLFdBQVIsRUFOaUI7QUFPMUIsa0JBQVUsUUFBUSxZQUFSLEVBUGdCO0FBUTFCLGNBQU0sUUFBUSxTQUFSLEVBUm9CO0FBUzFCLG9CQUFZLFFBQVEsZ0JBQVIsRUFUYztBQVUxQix1QkFBZSxRQUFRLG1CQUFSLEVBVlc7QUFXMUIsZUFBTyxRQUFRLFVBQVIsRUFYbUI7QUFZMUIsc0JBQWMsUUFBUSxrQkFBUixFQVpZO0FBYTFCLG9CQUFZLFFBQVEsZ0JBQVIsRUFiYztBQWMxQixvQkFBWSxRQUFRLGdCQUFSLEVBZGM7QUFlMUIsbUJBQVcsUUFBUSxlQUFSLEVBZmU7QUFnQjFCLGtCQUFVLFFBQVEsY0FBUixFQWhCZ0I7QUFpQjFCLHNCQUFjLFFBQVEsa0JBQVIsRUFqQlk7QUFrQjFCLG1CQUFXLFFBQVEsZUFBUixFQWxCZTtBQW1CMUIsbUJBQVcsUUFBUSxlQUFSLEVBbkJlO0FBb0IxQixzQkFBYyxRQUFRLG1CQUFSLEVBcEJZO0FBcUIxQixxQkFBYSxRQUFRLG9CQUFSLEVBckJhO0FBc0IxQixvQkFBWSxRQUFRLDRCQUFSLEVBdEJjO0FBdUIxQixjQUFNLFFBQVEsU0FBUixFQXZCb0I7QUF3QjFCLDRCQUFvQixRQUFRLG1CQUFSLEVBeEJNO0FBeUIxQiw4QkFBc0IsUUFBUSxvQkFBUixFQXpCSTtBQTBCMUIsNkJBQXFCLFFBQVEseUJBQVIsRUExQks7QUEy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a0JBQVEsUUFBUSxDQUFSLEdBQVksUUFBUSxDQUFSLElBQWEsY0FBYyxJQUFkLENBQWIsRUFBa0MsSUFBdEQsRUFBNEQ7QUFDMUQsK0JBQW1CLEtBQW5CO0FBQ0Esa0JBQU0sS0FBSyxJQUFMLElBQWEsS0FBYjtBQUNOLGdCQUFJLEtBQUssRUFBTCxJQUFXLEdBQVg7V0FITixFQXBHc0Q7QUF5R3RELGtCQUFRLFFBQVEsQ0FBUixHQUFZLFFBQVEsQ0FBUixHQUFZLE1BQVosRUFBb0IsSUFBeEMsRUFBOEMsS0FBOUMsRUF6R3NEO0FBMEd0RCxrQkFBUSxRQUFRLENBQVIsR0FBWSxRQUFRLENBQVIsSUFBYSxvQkFBb0IsUUFBcEIsSUFBZ0MsYUFBaEMsQ0FBYixFQUE2RCxJQUFqRixFQUF1RixFQUFDLFVBQVUsYUFBVixFQUF4RixFQTFHc0Q7QUEyR3RELGtCQUFRLFFBQVEsQ0FBUixHQUFZLFFBQVEsQ0FBUixHQUFZLE1BQU0sWUFBVztBQUMvQyxtQkFBTyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sY0FBUCxNQUEyQixJQUFJLEtBQUosQ0FBVSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVYsRUFBa0IsY0FBbEIsRUFBM0IsQ0FEd0M7V0FBWCxDQUFsQixFQUVoQixJQUZKLEVBRVUsRUFBQyxnQkFBZ0IsZUFBaEIsRUFGWCxFQTNHc0Q7QUE4R3RELG9CQUFVLElBQVYsSUFBa0IsbUJBQW1CLFNBQW5CLENBOUdvQztBQStHdEQscUJBQVcsZUFBWCxJQUE4QixLQUFLLG1CQUFMLEVBQTBCLFFBQTFCLEVBQW9DLFNBQXBDLENBQTlCLENBL0dzRDtBQWdIdEQscUJBQVcsSUFBWCxFQWhIc0Q7U0FBdkMsQ0F2UGE7T0FBaEMsTUEwV0UsT0FBTyxPQUFQLEdBQWlCLFlBQVcsRUFBWCxDQTFXbkIiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzLyQudHlwZWQtYXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbid1c2Ugc3RyaWN0JztcbmlmIChyZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKSkge1xuICB2YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vJC5saWJyYXJ5JyksXG4gICAgICBnbG9iYWwgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJyksXG4gICAgICAkID0gcmVxdWlyZSgnLi8kJyksXG4gICAgICBmYWlscyA9IHJlcXVpcmUoJy4vJC5mYWlscycpLFxuICAgICAgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICAgICR0eXBlZCA9IHJlcXVpcmUoJy4vJC50eXBlZCcpLFxuICAgICAgJGJ1ZmZlciA9IHJlcXVpcmUoJy4vJC5idWZmZXInKSxcbiAgICAgIGN0eCA9IHJlcXVpcmUoJy4vJC5jdHgnKSxcbiAgICAgIHN0cmljdE5ldyA9IHJlcXVpcmUoJy4vJC5zdHJpY3QtbmV3JyksXG4gICAgICBwcm9wZXJ0eURlc2MgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpLFxuICAgICAgaGlkZSA9IHJlcXVpcmUoJy4vJC5oaWRlJyksXG4gICAgICByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vJC5yZWRlZmluZS1hbGwnKSxcbiAgICAgIGlzSW50ZWdlciA9IHJlcXVpcmUoJy4vJC5pcy1pbnRlZ2VyJyksXG4gICAgICB0b0ludGVnZXIgPSByZXF1aXJlKCcuLyQudG8taW50ZWdlcicpLFxuICAgICAgdG9MZW5ndGggPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJyksXG4gICAgICB0b0luZGV4ID0gcmVxdWlyZSgnLi8kLnRvLWluZGV4JyksXG4gICAgICB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vJC50by1wcmltaXRpdmUnKSxcbiAgICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpLFxuICAgICAgdG9PYmplY3QgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0JyksXG4gICAgICBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vJC5pcy1hcnJheS1pdGVyJyksXG4gICAgICBpc0l0ZXJhYmxlID0gcmVxdWlyZSgnLi9jb3JlLmlzLWl0ZXJhYmxlJyksXG4gICAgICBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpLFxuICAgICAgd2tzID0gcmVxdWlyZSgnLi8kLndrcycpLFxuICAgICAgY3JlYXRlQXJyYXlNZXRob2QgPSByZXF1aXJlKCcuLyQuYXJyYXktbWV0aG9kcycpLFxuICAgICAgY3JlYXRlQXJyYXlJbmNsdWRlcyA9IHJlcXVpcmUoJy4vJC5hcnJheS1pbmNsdWRlcycpLFxuICAgICAgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi8kLnNwZWNpZXMtY29uc3RydWN0b3InKSxcbiAgICAgIEFycmF5SXRlcmF0b3JzID0gcmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKSxcbiAgICAgIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKSxcbiAgICAgICRpdGVyRGV0ZWN0ID0gcmVxdWlyZSgnLi8kLml0ZXItZGV0ZWN0JyksXG4gICAgICBzZXRTcGVjaWVzID0gcmVxdWlyZSgnLi8kLnNldC1zcGVjaWVzJyksXG4gICAgICBhcnJheUZpbGwgPSByZXF1aXJlKCcuLyQuYXJyYXktZmlsbCcpLFxuICAgICAgYXJyYXlDb3B5V2l0aGluID0gcmVxdWlyZSgnLi8kLmFycmF5LWNvcHktd2l0aGluJyksXG4gICAgICBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlLFxuICAgICAgJEFycmF5QnVmZmVyID0gJGJ1ZmZlci5BcnJheUJ1ZmZlcixcbiAgICAgICREYXRhVmlldyA9ICRidWZmZXIuRGF0YVZpZXcsXG4gICAgICBzZXREZXNjID0gJC5zZXREZXNjLFxuICAgICAgZ2V0RGVzYyA9ICQuZ2V0RGVzYyxcbiAgICAgIGFycmF5Rm9yRWFjaCA9IGNyZWF0ZUFycmF5TWV0aG9kKDApLFxuICAgICAgYXJyYXlNYXAgPSBjcmVhdGVBcnJheU1ldGhvZCgxKSxcbiAgICAgIGFycmF5RmlsdGVyID0gY3JlYXRlQXJyYXlNZXRob2QoMiksXG4gICAgICBhcnJheVNvbWUgPSBjcmVhdGVBcnJheU1ldGhvZCgzKSxcbiAgICAgIGFycmF5RXZlcnkgPSBjcmVhdGVBcnJheU1ldGhvZCg0KSxcbiAgICAgIGFycmF5RmluZCA9IGNyZWF0ZUFycmF5TWV0aG9kKDUpLFxuICAgICAgYXJyYXlGaW5kSW5kZXggPSBjcmVhdGVBcnJheU1ldGhvZCg2KSxcbiAgICAgIGFycmF5SW5jbHVkZXMgPSBjcmVhdGVBcnJheUluY2x1ZGVzKHRydWUpLFxuICAgICAgYXJyYXlJbmRleE9mID0gY3JlYXRlQXJyYXlJbmNsdWRlcyhmYWxzZSksXG4gICAgICBhcnJheVZhbHVlcyA9IEFycmF5SXRlcmF0b3JzLnZhbHVlcyxcbiAgICAgIGFycmF5S2V5cyA9IEFycmF5SXRlcmF0b3JzLmtleXMsXG4gICAgICBhcnJheUVudHJpZXMgPSBBcnJheUl0ZXJhdG9ycy5lbnRyaWVzLFxuICAgICAgYXJyYXlMYXN0SW5kZXhPZiA9IEFycmF5UHJvdG8ubGFzdEluZGV4T2YsXG4gICAgICBhcnJheVJlZHVjZSA9IEFycmF5UHJvdG8ucmVkdWNlLFxuICAgICAgYXJyYXlSZWR1Y2VSaWdodCA9IEFycmF5UHJvdG8ucmVkdWNlUmlnaHQsXG4gICAgICBhcnJheUpvaW4gPSBBcnJheVByb3RvLmpvaW4sXG4gICAgICBhcnJheVJldmVyc2UgPSBBcnJheVByb3RvLnJldmVyc2UsXG4gICAgICBhcnJheVNvcnQgPSBBcnJheVByb3RvLnNvcnQsXG4gICAgICBhcnJheVNsaWNlID0gQXJyYXlQcm90by5zbGljZSxcbiAgICAgIGFycmF5VG9TdHJpbmcgPSBBcnJheVByb3RvLnRvU3RyaW5nLFxuICAgICAgYXJyYXlUb0xvY2FsZVN0cmluZyA9IEFycmF5UHJvdG8udG9Mb2NhbGVTdHJpbmcsXG4gICAgICBJVEVSQVRPUiA9IHdrcygnaXRlcmF0b3InKSxcbiAgICAgIFRBRyA9IHdrcygndG9TdHJpbmdUYWcnKSxcbiAgICAgIFRZUEVEX0NPTlNUUlVDVE9SID0gd2tzKCd0eXBlZF9jb25zdHJ1Y3RvcicpLFxuICAgICAgREVGX0NPTlNUUlVDVE9SID0gd2tzKCdkZWZfY29uc3RydWN0b3InKSxcbiAgICAgIEFMTF9BUlJBWVMgPSAkdHlwZWQuQVJSQVlTLFxuICAgICAgVFlQRURfQVJSQVkgPSAkdHlwZWQuVFlQRUQsXG4gICAgICBWSUVXID0gJHR5cGVkLlZJRVcsXG4gICAgICBCWVRFU19QRVJfRUxFTUVOVCA9ICdCWVRFU19QRVJfRUxFTUVOVCc7XG4gIHZhciBMSVRUTEVfRU5ESUFOID0gZmFpbHMoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KG5ldyBVaW50MTZBcnJheShbMV0pLmJ1ZmZlcilbMF0gPT09IDE7XG4gIH0pO1xuICB2YXIgdmFsaWRhdGUgPSBmdW5jdGlvbihpdCkge1xuICAgIGlmIChpc09iamVjdChpdCkgJiYgVFlQRURfQVJSQVkgaW4gaXQpXG4gICAgICByZXR1cm4gaXQ7XG4gICAgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSB0eXBlZCBhcnJheSEnKTtcbiAgfTtcbiAgdmFyIGZyb21MaXN0ID0gZnVuY3Rpb24oTywgbGlzdCkge1xuICAgIHZhciBpbmRleCA9IDAsXG4gICAgICAgIGxlbmd0aCA9IGxpc3QubGVuZ3RoLFxuICAgICAgICByZXN1bHQgPSBhbGxvY2F0ZShzcGVjaWVzQ29uc3RydWN0b3IoTywgT1tERUZfQ09OU1RSVUNUT1JdKSwgbGVuZ3RoKTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpXG4gICAgICByZXN1bHRbaW5kZXhdID0gbGlzdFtpbmRleCsrXTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICB2YXIgYWxsb2NhdGUgPSBmdW5jdGlvbihDLCBsZW5ndGgpIHtcbiAgICBpZiAoIShpc09iamVjdChDKSAmJiBUWVBFRF9DT05TVFJVQ1RPUiBpbiBDKSkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdJdCBpcyBub3QgYSB0eXBlZCBhcnJheSBjb25zdHJ1Y3RvciEnKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBDKGxlbmd0aCk7XG4gIH07XG4gIHZhciAkZnJvbSA9IGZ1bmN0aW9uIGZyb20oc291cmNlKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdChzb3VyY2UpLFxuICAgICAgICAkJCA9IGFyZ3VtZW50cyxcbiAgICAgICAgJCRsZW4gPSAkJC5sZW5ndGgsXG4gICAgICAgIG1hcGZuID0gJCRsZW4gPiAxID8gJCRbMV0gOiB1bmRlZmluZWQsXG4gICAgICAgIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkLFxuICAgICAgICBpdGVyRm4gPSBnZXRJdGVyRm4oTyksXG4gICAgICAgIGksXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgdmFsdWVzLFxuICAgICAgICByZXN1bHQsXG4gICAgICAgIHN0ZXAsXG4gICAgICAgIGl0ZXJhdG9yO1xuICAgIGlmIChpdGVyRm4gIT0gdW5kZWZpbmVkICYmICFpc0FycmF5SXRlcihpdGVyRm4pKSB7XG4gICAgICBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHZhbHVlcyA9IFtdLCBpID0gMDsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpKyspIHtcbiAgICAgICAgdmFsdWVzLnB1c2goc3RlcC52YWx1ZSk7XG4gICAgICB9XG4gICAgICBPID0gdmFsdWVzO1xuICAgIH1cbiAgICBpZiAobWFwcGluZyAmJiAkJGxlbiA+IDIpXG4gICAgICBtYXBmbiA9IGN0eChtYXBmbiwgJCRbMl0sIDIpO1xuICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKSwgcmVzdWx0ID0gYWxsb2NhdGUodGhpcywgbGVuZ3RoKTsgbGVuZ3RoID4gaTsgaSsrKSB7XG4gICAgICByZXN1bHRbaV0gPSBtYXBwaW5nID8gbWFwZm4oT1tpXSwgaSkgOiBPW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICB2YXIgYWRkR2V0dGVyID0gZnVuY3Rpb24oQywga2V5LCBpbnRlcm5hbCkge1xuICAgIHNldERlc2MoQy5wcm90b3R5cGUsIGtleSwge2dldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kW2ludGVybmFsXTtcbiAgICAgIH19KTtcbiAgfTtcbiAgdmFyICRvZiA9IGZ1bmN0aW9uIG9mKCkge1xuICAgIHZhciBpbmRleCA9IDAsXG4gICAgICAgIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgIHJlc3VsdCA9IGFsbG9jYXRlKHRoaXMsIGxlbmd0aCk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KVxuICAgICAgcmVzdWx0W2luZGV4XSA9IGFyZ3VtZW50c1tpbmRleCsrXTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICB2YXIgJHRvTG9jYWxlU3RyaW5nID0gZnVuY3Rpb24gdG9Mb2NhbGVTdHJpbmcoKSB7XG4gICAgcmV0dXJuIGFycmF5VG9Mb2NhbGVTdHJpbmcuYXBwbHkodmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG4gIH07XG4gIHZhciBwcm90byA9IHtcbiAgICBjb3B5V2l0aGluOiBmdW5jdGlvbiBjb3B5V2l0aGluKHRhcmdldCwgc3RhcnQpIHtcbiAgICAgIHJldHVybiBhcnJheUNvcHlXaXRoaW4uY2FsbCh2YWxpZGF0ZSh0aGlzKSwgdGFyZ2V0LCBzdGFydCwgYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgZXZlcnk6IGZ1bmN0aW9uIGV2ZXJ5KGNhbGxiYWNrZm4pIHtcbiAgICAgIHJldHVybiBhcnJheUV2ZXJ5KHZhbGlkYXRlKHRoaXMpLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBmaWxsOiBmdW5jdGlvbiBmaWxsKHZhbHVlKSB7XG4gICAgICByZXR1cm4gYXJyYXlGaWxsLmFwcGx5KHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbikge1xuICAgICAgcmV0dXJuIGZyb21MaXN0KHRoaXMsIGFycmF5RmlsdGVyKHZhbGlkYXRlKHRoaXMpLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCkpO1xuICAgIH0sXG4gICAgZmluZDogZnVuY3Rpb24gZmluZChwcmVkaWNhdGUpIHtcbiAgICAgIHJldHVybiBhcnJheUZpbmQodmFsaWRhdGUodGhpcyksIHByZWRpY2F0ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgZmluZEluZGV4OiBmdW5jdGlvbiBmaW5kSW5kZXgocHJlZGljYXRlKSB7XG4gICAgICByZXR1cm4gYXJyYXlGaW5kSW5kZXgodmFsaWRhdGUodGhpcyksIHByZWRpY2F0ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuKSB7XG4gICAgICBhcnJheUZvckVhY2godmFsaWRhdGUodGhpcyksIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCkge1xuICAgICAgcmV0dXJuIGFycmF5SW5kZXhPZih2YWxpZGF0ZSh0aGlzKSwgc2VhcmNoRWxlbWVudCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKHNlYXJjaEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBhcnJheUluY2x1ZGVzKHZhbGlkYXRlKHRoaXMpLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcikge1xuICAgICAgcmV0dXJuIGFycmF5Sm9pbi5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIGxhc3RJbmRleE9mOiBmdW5jdGlvbiBsYXN0SW5kZXhPZihzZWFyY2hFbGVtZW50KSB7XG4gICAgICByZXR1cm4gYXJyYXlMYXN0SW5kZXhPZi5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIG1hcDogZnVuY3Rpb24gbWFwKG1hcGZuKSB7XG4gICAgICByZXR1cm4gZnJvbUxpc3QodGhpcywgYXJyYXlNYXAodmFsaWRhdGUodGhpcyksIG1hcGZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCkpO1xuICAgIH0sXG4gICAgcmVkdWNlOiBmdW5jdGlvbiByZWR1Y2UoY2FsbGJhY2tmbikge1xuICAgICAgcmV0dXJuIGFycmF5UmVkdWNlLmFwcGx5KHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgcmVkdWNlUmlnaHQ6IGZ1bmN0aW9uIHJlZHVjZVJpZ2h0KGNhbGxiYWNrZm4pIHtcbiAgICAgIHJldHVybiBhcnJheVJlZHVjZVJpZ2h0LmFwcGx5KHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgcmV2ZXJzZTogZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICAgIHJldHVybiBhcnJheVJldmVyc2UuY2FsbCh2YWxpZGF0ZSh0aGlzKSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChhcnJheUxpa2UpIHtcbiAgICAgIHZhbGlkYXRlKHRoaXMpO1xuICAgICAgdmFyIG9mZnNldCA9IHRvSW50ZWdlcihhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgICBpZiAob2Zmc2V0IDwgMClcbiAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcigpO1xuICAgICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICAgICAgdmFyIHNyYyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIGxlbiA9IHRvTGVuZ3RoKHNyYy5sZW5ndGgpO1xuICAgICAgaWYgKGxlbiArIG9mZnNldCA+IGxlbmd0aClcbiAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcigpO1xuICAgICAgd2hpbGUgKGluZGV4IDwgbGVuKVxuICAgICAgICB0aGlzW29mZnNldCArIGluZGV4XSA9IHNyY1tpbmRleCsrXTtcbiAgICB9LFxuICAgIHNsaWNlOiBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKSB7XG4gICAgICByZXR1cm4gZnJvbUxpc3QodGhpcywgYXJyYXlTbGljZS5jYWxsKHZhbGlkYXRlKHRoaXMpLCBzdGFydCwgZW5kKSk7XG4gICAgfSxcbiAgICBzb21lOiBmdW5jdGlvbiBzb21lKGNhbGxiYWNrZm4pIHtcbiAgICAgIHJldHVybiBhcnJheVNvbWUodmFsaWRhdGUodGhpcyksIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIHNvcnQ6IGZ1bmN0aW9uIHNvcnQoY29tcGFyZWZuKSB7XG4gICAgICByZXR1cm4gYXJyYXlTb3J0LmNhbGwodmFsaWRhdGUodGhpcyksIGNvbXBhcmVmbik7XG4gICAgfSxcbiAgICBzdWJhcnJheTogZnVuY3Rpb24gc3ViYXJyYXkoYmVnaW4sIGVuZCkge1xuICAgICAgdmFyIE8gPSB2YWxpZGF0ZSh0aGlzKSxcbiAgICAgICAgICBsZW5ndGggPSBPLmxlbmd0aCxcbiAgICAgICAgICAkYmVnaW4gPSB0b0luZGV4KGJlZ2luLCBsZW5ndGgpO1xuICAgICAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKE8sIE9bREVGX0NPTlNUUlVDVE9SXSkpKE8uYnVmZmVyLCBPLmJ5dGVPZmZzZXQgKyAkYmVnaW4gKiBPLkJZVEVTX1BFUl9FTEVNRU5ULCB0b0xlbmd0aCgoZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiB0b0luZGV4KGVuZCwgbGVuZ3RoKSkgLSAkYmVnaW4pKTtcbiAgICB9LFxuICAgIGVudHJpZXM6IGZ1bmN0aW9uIGVudHJpZXMoKSB7XG4gICAgICByZXR1cm4gYXJyYXlFbnRyaWVzLmNhbGwodmFsaWRhdGUodGhpcykpO1xuICAgIH0sXG4gICAga2V5czogZnVuY3Rpb24ga2V5cygpIHtcbiAgICAgIHJldHVybiBhcnJheUtleXMuY2FsbCh2YWxpZGF0ZSh0aGlzKSk7XG4gICAgfSxcbiAgICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcygpIHtcbiAgICAgIHJldHVybiBhcnJheVZhbHVlcy5jYWxsKHZhbGlkYXRlKHRoaXMpKTtcbiAgICB9XG4gIH07XG4gIHZhciBpc1RBSW5kZXggPSBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICAgIHJldHVybiBpc09iamVjdCh0YXJnZXQpICYmIFRZUEVEX0FSUkFZIGluIHRhcmdldCAmJiB0eXBlb2Yga2V5ICE9ICdzeW1ib2wnICYmIGtleSBpbiB0YXJnZXQgJiYgU3RyaW5nKCtrZXkpID09IFN0cmluZyhrZXkpO1xuICB9O1xuICB2YXIgJGdldERlc2MgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIHtcbiAgICByZXR1cm4gaXNUQUluZGV4KHRhcmdldCwga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSkgPyBwcm9wZXJ0eURlc2MoMiwgdGFyZ2V0W2tleV0pIDogZ2V0RGVzYyh0YXJnZXQsIGtleSk7XG4gIH07XG4gIHZhciAkc2V0RGVzYyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgaWYgKGlzVEFJbmRleCh0YXJnZXQsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpICYmIGlzT2JqZWN0KGRlc2MpKSB7XG4gICAgICBpZiAoJ3ZhbHVlJyBpbiBkZXNjKVxuICAgICAgICB0YXJnZXRba2V5XSA9IGRlc2MudmFsdWU7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0gZWxzZVxuICAgICAgcmV0dXJuIHNldERlc2ModGFyZ2V0LCBrZXksIGRlc2MpO1xuICB9O1xuICBpZiAoIUFMTF9BUlJBWVMpIHtcbiAgICAkLmdldERlc2MgPSAkZ2V0RGVzYztcbiAgICAkLnNldERlc2MgPSAkc2V0RGVzYztcbiAgfVxuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFBTExfQVJSQVlTLCAnT2JqZWN0Jywge1xuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldERlc2MsXG4gICAgZGVmaW5lUHJvcGVydHk6ICRzZXREZXNjXG4gIH0pO1xuICB2YXIgJFR5cGVkQXJyYXlQcm90b3R5cGUkID0gcmVkZWZpbmVBbGwoe30sIHByb3RvKTtcbiAgcmVkZWZpbmVBbGwoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCB7XG4gICAgY29uc3RydWN0b3I6IGZ1bmN0aW9uKCkge30sXG4gICAgdG9TdHJpbmc6IGFycmF5VG9TdHJpbmcsXG4gICAgdG9Mb2NhbGVTdHJpbmc6ICR0b0xvY2FsZVN0cmluZ1xuICB9KTtcbiAgJC5zZXREZXNjKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgVEFHLCB7Z2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzW1RZUEVEX0FSUkFZXTtcbiAgICB9fSk7XG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBCWVRFUywgd3JhcHBlciwgQ0xBTVBFRCkge1xuICAgIENMQU1QRUQgPSAhIUNMQU1QRUQ7XG4gICAgdmFyIE5BTUUgPSBLRVkgKyAoQ0xBTVBFRCA/ICdDbGFtcGVkJyA6ICcnKSArICdBcnJheScsXG4gICAgICAgIEdFVFRFUiA9ICdnZXQnICsgS0VZLFxuICAgICAgICBTRVRURVIgPSAnc2V0JyArIEtFWSxcbiAgICAgICAgVHlwZWRBcnJheSA9IGdsb2JhbFtOQU1FXSxcbiAgICAgICAgQmFzZSA9IFR5cGVkQXJyYXkgfHwge30sXG4gICAgICAgIEZPUkNFRCA9ICFUeXBlZEFycmF5IHx8ICEkdHlwZWQuQUJWLFxuICAgICAgICAkaXRlcmF0b3IgPSBwcm90by52YWx1ZXMsXG4gICAgICAgIE8gPSB7fTtcbiAgICB2YXIgYWRkRWxlbWVudCA9IGZ1bmN0aW9uKHRoYXQsIGluZGV4KSB7XG4gICAgICBzZXREZXNjKHRoYXQsIGluZGV4LCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kO1xuICAgICAgICAgIHJldHVybiBkYXRhLnZbR0VUVEVSXShpbmRleCAqIEJZVEVTICsgZGF0YS5vLCBMSVRUTEVfRU5ESUFOKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbihpdCkge1xuICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fZDtcbiAgICAgICAgICBpZiAoQ0xBTVBFRClcbiAgICAgICAgICAgIGl0ID0gKGl0ID0gTWF0aC5yb3VuZChpdCkpIDwgMCA/IDAgOiBpdCA+IDB4ZmYgPyAweGZmIDogaXQgJiAweGZmO1xuICAgICAgICAgIGRhdGEudltTRVRURVJdKGluZGV4ICogQllURVMgKyBkYXRhLm8sIGl0LCBMSVRUTEVfRU5ESUFOKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfTtcbiAgICBpZiAoISRBcnJheUJ1ZmZlcilcbiAgICAgIHJldHVybjtcbiAgICBpZiAoRk9SQ0VEKSB7XG4gICAgICBUeXBlZEFycmF5ID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBkYXRhLCAkb2Zmc2V0LCAkbGVuZ3RoKSB7XG4gICAgICAgIHN0cmljdE5ldyh0aGF0LCBUeXBlZEFycmF5LCBOQU1FKTtcbiAgICAgICAgdmFyIGluZGV4ID0gMCxcbiAgICAgICAgICAgIG9mZnNldCA9IDAsXG4gICAgICAgICAgICBidWZmZXIsXG4gICAgICAgICAgICBieXRlTGVuZ3RoLFxuICAgICAgICAgICAgbGVuZ3RoO1xuICAgICAgICBpZiAoIWlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICAgICAgYnl0ZUxlbmd0aCA9IHRvSW50ZWdlcihkYXRhKSAqIEJZVEVTO1xuICAgICAgICAgIGJ1ZmZlciA9IG5ldyAkQXJyYXlCdWZmZXIoYnl0ZUxlbmd0aCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mICRBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIGJ1ZmZlciA9IGRhdGE7XG4gICAgICAgICAgb2Zmc2V0ID0gdG9JbnRlZ2VyKCRvZmZzZXQpO1xuICAgICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCAlIEJZVEVTKVxuICAgICAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcigpO1xuICAgICAgICAgIHZhciAkbGVuID0gZGF0YS5ieXRlTGVuZ3RoO1xuICAgICAgICAgIGlmICgkbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICgkbGVuICUgQllURVMpXG4gICAgICAgICAgICAgIHRocm93IFJhbmdlRXJyb3IoKTtcbiAgICAgICAgICAgIGJ5dGVMZW5ndGggPSAkbGVuIC0gb2Zmc2V0O1xuICAgICAgICAgICAgaWYgKGJ5dGVMZW5ndGggPCAwKVxuICAgICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ5dGVMZW5ndGggPSB0b0xlbmd0aCgkbGVuZ3RoKSAqIEJZVEVTO1xuICAgICAgICAgICAgaWYgKGJ5dGVMZW5ndGggKyBvZmZzZXQgPiAkbGVuKVxuICAgICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2VcbiAgICAgICAgICByZXR1cm4gJGZyb20uY2FsbChUeXBlZEFycmF5LCBkYXRhKTtcbiAgICAgICAgbGVuZ3RoID0gYnl0ZUxlbmd0aCAvIEJZVEVTO1xuICAgICAgICBoaWRlKHRoYXQsICdfZCcsIHtcbiAgICAgICAgICBiOiBidWZmZXIsXG4gICAgICAgICAgbzogb2Zmc2V0LFxuICAgICAgICAgIGw6IGJ5dGVMZW5ndGgsXG4gICAgICAgICAgZTogbGVuZ3RoLFxuICAgICAgICAgIHY6IG5ldyAkRGF0YVZpZXcoYnVmZmVyKVxuICAgICAgICB9KTtcbiAgICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKVxuICAgICAgICAgIGFkZEVsZW1lbnQodGhhdCwgaW5kZXgrKyk7XG4gICAgICB9KTtcbiAgICAgIFR5cGVkQXJyYXkucHJvdG90eXBlID0gJC5jcmVhdGUoJFR5cGVkQXJyYXlQcm90b3R5cGUkKTtcbiAgICAgIGFkZEdldHRlcihUeXBlZEFycmF5LCAnYnVmZmVyJywgJ2InKTtcbiAgICAgIGFkZEdldHRlcihUeXBlZEFycmF5LCAnYnl0ZU9mZnNldCcsICdvJyk7XG4gICAgICBhZGRHZXR0ZXIoVHlwZWRBcnJheSwgJ2J5dGVMZW5ndGgnLCAnbCcpO1xuICAgICAgYWRkR2V0dGVyKFR5cGVkQXJyYXksICdsZW5ndGgnLCAnZScpO1xuICAgICAgaGlkZShUeXBlZEFycmF5LCBCWVRFU19QRVJfRUxFTUVOVCwgQllURVMpO1xuICAgICAgaGlkZShUeXBlZEFycmF5LnByb3RvdHlwZSwgQllURVNfUEVSX0VMRU1FTlQsIEJZVEVTKTtcbiAgICAgIGhpZGUoVHlwZWRBcnJheS5wcm90b3R5cGUsICdjb25zdHJ1Y3RvcicsIFR5cGVkQXJyYXkpO1xuICAgIH0gZWxzZSBpZiAoISRpdGVyRGV0ZWN0KGZ1bmN0aW9uKGl0ZXIpIHtcbiAgICAgIG5ldyBUeXBlZEFycmF5KGl0ZXIpO1xuICAgIH0sIHRydWUpKSB7XG4gICAgICBUeXBlZEFycmF5ID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBkYXRhLCAkb2Zmc2V0LCAkbGVuZ3RoKSB7XG4gICAgICAgIHN0cmljdE5ldyh0aGF0LCBUeXBlZEFycmF5LCBOQU1FKTtcbiAgICAgICAgaWYgKGlzT2JqZWN0KGRhdGEpICYmIGlzSXRlcmFibGUoZGF0YSkpXG4gICAgICAgICAgcmV0dXJuICRmcm9tLmNhbGwoVHlwZWRBcnJheSwgZGF0YSk7XG4gICAgICAgIHJldHVybiAkbGVuZ3RoID09PSB1bmRlZmluZWQgPyBuZXcgQmFzZShkYXRhLCAkb2Zmc2V0KSA6IG5ldyBCYXNlKGRhdGEsICRvZmZzZXQsICRsZW5ndGgpO1xuICAgICAgfSk7XG4gICAgICBUeXBlZEFycmF5LnByb3RvdHlwZSA9IEJhc2UucHJvdG90eXBlO1xuICAgICAgaWYgKCFMSUJSQVJZKVxuICAgICAgICBUeXBlZEFycmF5LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFR5cGVkQXJyYXk7XG4gICAgfVxuICAgIHZhciBUeXBlZEFycmF5UHJvdG90eXBlID0gVHlwZWRBcnJheS5wcm90b3R5cGU7XG4gICAgdmFyICRuYXRpdmVJdGVyYXRvciA9IFR5cGVkQXJyYXlQcm90b3R5cGVbSVRFUkFUT1JdO1xuICAgIGhpZGUoVHlwZWRBcnJheSwgVFlQRURfQ09OU1RSVUNUT1IsIHRydWUpO1xuICAgIGhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgVFlQRURfQVJSQVksIE5BTUUpO1xuICAgIGhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgVklFVywgdHJ1ZSk7XG4gICAgaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCBERUZfQ09OU1RSVUNUT1IsIFR5cGVkQXJyYXkpO1xuICAgIFRBRyBpbiBUeXBlZEFycmF5UHJvdG90eXBlIHx8ICQuc2V0RGVzYyhUeXBlZEFycmF5UHJvdG90eXBlLCBUQUcsIHtnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gTkFNRTtcbiAgICAgIH19KTtcbiAgICBPW05BTUVdID0gVHlwZWRBcnJheTtcbiAgICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqIChUeXBlZEFycmF5ICE9IEJhc2UpLCBPKTtcbiAgICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChUeXBlZEFycmF5ICE9IEJhc2UpLCBOQU1FLCB7XG4gICAgICBCWVRFU19QRVJfRUxFTUVOVDogQllURVMsXG4gICAgICBmcm9tOiBCYXNlLmZyb20gfHwgJGZyb20sXG4gICAgICBvZjogQmFzZS5vZiB8fCAkb2ZcbiAgICB9KTtcbiAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIEZPUkNFRCwgTkFNRSwgcHJvdG8pO1xuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKFR5cGVkQXJyYXlQcm90b3R5cGUudG9TdHJpbmcgIT0gYXJyYXlUb1N0cmluZyksIE5BTUUsIHt0b1N0cmluZzogYXJyYXlUb1N0cmluZ30pO1xuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gWzEsIDJdLnRvTG9jYWxlU3RyaW5nKCkgIT0gbmV3IFR5cGVkKFsxLCAyXSkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICB9KSwgTkFNRSwge3RvTG9jYWxlU3RyaW5nOiAkdG9Mb2NhbGVTdHJpbmd9KTtcbiAgICBJdGVyYXRvcnNbTkFNRV0gPSAkbmF0aXZlSXRlcmF0b3IgfHwgJGl0ZXJhdG9yO1xuICAgIExJQlJBUlkgfHwgJG5hdGl2ZUl0ZXJhdG9yIHx8IGhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgSVRFUkFUT1IsICRpdGVyYXRvcik7XG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfTtcbn0gZWxzZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge307XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
