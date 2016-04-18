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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC50eXBlZC1hcnJheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQSxVQUFJLFFBQVEsaUJBQVIsQ0FBSixFQUFnQztBQUMxQixrQkFBVSxRQUFRLGFBQVIsRUFEZ0I7QUFFMUIsaUJBQVMsUUFBUSxZQUFSLEVBRmlCO0FBRzFCLFlBQUksUUFBUSxLQUFSLEVBSHNCO0FBSTFCLGdCQUFRLFFBQVEsV0FBUixFQUprQjtBQUsxQixrQkFBVSxRQUFRLFlBQVIsRUFMZ0I7QUFNMUIsaUJBQVMsUUFBUSxXQUFSLEVBTmlCO0FBTzFCLGtCQUFVLFFBQVEsWUFBUixFQVBnQjtBQVExQixjQUFNLFFBQVEsU0FBUixFQVJvQjtBQVMxQixvQkFBWSxRQUFRLGdCQUFSLEVBVGM7QUFVMUIsdUJBQWUsUUFBUSxtQkFBUixFQVZXO0FBVzFCLGVBQU8sUUFBUSxVQUFSLEVBWG1CO0FBWTFCLHNCQUFjLFFBQVEsa0JBQVIsRUFaWTtBQWExQixvQkFBWSxRQUFRLGdCQUFSLEVBYmM7QUFjMUIsb0JBQVksUUFBUSxnQkFBUixFQWRjO0FBZTFCLG1CQUFXLFFBQVEsZUFBUixFQWZlO0FBZ0IxQixrQkFBVSxRQUFRLGNBQVIsRUFoQmdCO0FBaUIxQixzQkFBYyxRQUFRLGtCQUFSLEVBakJZO0FBa0IxQixtQkFBVyxRQUFRLGVBQVIsRUFsQmU7QUFtQjFCLG1CQUFXLFFBQVEsZUFBUixFQW5CZTtBQW9CMUIsc0JBQWMsUUFBUSxtQkFBUixFQXBCWTtBQXFCMUIscUJBQWEsUUFBUSxvQkFBUixFQXJCYTtBQXNCMUIsb0JBQVksUUFBUSw0QkFBUixFQXRCYztBQXVCMUIsY0FBTSxRQUFRLFNBQVIsRUF2Qm9CO0FBd0IxQiw0QkFBb0IsUUFBUSxtQkFBUixFQXhCTTtBQXlCMUIsOEJBQXNCLFFBQVEsb0JBQVIsRUF6Qkk7QUEwQjFCLDZCQUFxQixRQUFRLHlCQUFSLEVBMUJLO0FBMkIxQix5QkFB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QVEsQ0FBUixHQUFZLFFBQVEsQ0FBUixJQUFhLGNBQWMsSUFBZCxDQUFiLEVBQWtDLElBQXRELEVBQTREO0FBQzFELCtCQUFtQixLQUFuQjtBQUNBLGtCQUFNLEtBQUssSUFBTCxJQUFhLEtBQWI7QUFDTixnQkFBSSxLQUFLLEVBQUwsSUFBVyxHQUFYO1dBSE4sRUFwR3NEO0FBeUd0RCxrQkFBUSxRQUFRLENBQVIsR0FBWSxRQUFRLENBQVIsR0FBWSxNQUFaLEVBQW9CLElBQXhDLEVBQThDLEtBQTlDLEVBekdzRDtBQTBHdEQsa0JBQVEsUUFBUSxDQUFSLEdBQVksUUFBUSxDQUFSLElBQWEsb0JBQW9CLFFBQXBCLElBQWdDLGFBQWhDLENBQWIsRUFBNkQsSUFBakYsRUFBdUYsRUFBQyxVQUFVLGFBQVYsRUFBeEYsRUExR3NEO0FBMkd0RCxrQkFBUSxRQUFRLENBQVIsR0FBWSxRQUFRLENBQVIsR0FBWSxNQUFNLFlBQVc7QUFDL0MsbUJBQU8sQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLGNBQVAsTUFBMkIsSUFBSSxLQUFKLENBQVUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFWLEVBQWtCLGNBQWxCLEVBQTNCLENBRHdDO1dBQVgsQ0FBbEIsRUFFaEIsSUFGSixFQUVVLEVBQUMsZ0JBQWdCLGVBQWhCLEVBRlgsRUEzR3NEO0FBOEd0RCxvQkFBVSxJQUFWLElBQWtCLG1CQUFtQixTQUFuQixDQTlHb0M7QUErR3RELHFCQUFXLGVBQVgsSUFBOEIsS0FBSyxtQkFBTCxFQUEwQixRQUExQixFQUFvQyxTQUFwQyxDQUE5QixDQS9Hc0Q7QUFnSHRELHFCQUFXLElBQVgsRUFoSHNEO1NBQXZDLENBdlBhO09BQWhDLE1BMFdFLE9BQU8sT0FBUCxHQUFpQixZQUFXLEVBQVgsQ0ExV25CIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC50eXBlZC1hcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuJ3VzZSBzdHJpY3QnO1xuaWYgKHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpKSB7XG4gIHZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi8kLmxpYnJhcnknKSxcbiAgICAgIGdsb2JhbCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKSxcbiAgICAgICQgPSByZXF1aXJlKCcuLyQnKSxcbiAgICAgIGZhaWxzID0gcmVxdWlyZSgnLi8kLmZhaWxzJyksXG4gICAgICAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgICAgJHR5cGVkID0gcmVxdWlyZSgnLi8kLnR5cGVkJyksXG4gICAgICAkYnVmZmVyID0gcmVxdWlyZSgnLi8kLmJ1ZmZlcicpLFxuICAgICAgY3R4ID0gcmVxdWlyZSgnLi8kLmN0eCcpLFxuICAgICAgc3RyaWN0TmV3ID0gcmVxdWlyZSgnLi8kLnN0cmljdC1uZXcnKSxcbiAgICAgIHByb3BlcnR5RGVzYyA9IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJyksXG4gICAgICBoaWRlID0gcmVxdWlyZSgnLi8kLmhpZGUnKSxcbiAgICAgIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lLWFsbCcpLFxuICAgICAgaXNJbnRlZ2VyID0gcmVxdWlyZSgnLi8kLmlzLWludGVnZXInKSxcbiAgICAgIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vJC50by1pbnRlZ2VyJyksXG4gICAgICB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vJC50by1sZW5ndGgnKSxcbiAgICAgIHRvSW5kZXggPSByZXF1aXJlKCcuLyQudG8taW5kZXgnKSxcbiAgICAgIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi8kLnRvLXByaW1pdGl2ZScpLFxuICAgICAgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JyksXG4gICAgICB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKSxcbiAgICAgIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi8kLmlzLWFycmF5LWl0ZXInKSxcbiAgICAgIGlzSXRlcmFibGUgPSByZXF1aXJlKCcuL2NvcmUuaXMtaXRlcmFibGUnKSxcbiAgICAgIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyksXG4gICAgICB3a3MgPSByZXF1aXJlKCcuLyQud2tzJyksXG4gICAgICBjcmVhdGVBcnJheU1ldGhvZCA9IHJlcXVpcmUoJy4vJC5hcnJheS1tZXRob2RzJyksXG4gICAgICBjcmVhdGVBcnJheUluY2x1ZGVzID0gcmVxdWlyZSgnLi8kLmFycmF5LWluY2x1ZGVzJyksXG4gICAgICBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLyQuc3BlY2llcy1jb25zdHJ1Y3RvcicpLFxuICAgICAgQXJyYXlJdGVyYXRvcnMgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpLFxuICAgICAgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpLFxuICAgICAgJGl0ZXJEZXRlY3QgPSByZXF1aXJlKCcuLyQuaXRlci1kZXRlY3QnKSxcbiAgICAgIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuLyQuc2V0LXNwZWNpZXMnKSxcbiAgICAgIGFycmF5RmlsbCA9IHJlcXVpcmUoJy4vJC5hcnJheS1maWxsJyksXG4gICAgICBhcnJheUNvcHlXaXRoaW4gPSByZXF1aXJlKCcuLyQuYXJyYXktY29weS13aXRoaW4nKSxcbiAgICAgIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgICAkQXJyYXlCdWZmZXIgPSAkYnVmZmVyLkFycmF5QnVmZmVyLFxuICAgICAgJERhdGFWaWV3ID0gJGJ1ZmZlci5EYXRhVmlldyxcbiAgICAgIHNldERlc2MgPSAkLnNldERlc2MsXG4gICAgICBnZXREZXNjID0gJC5nZXREZXNjLFxuICAgICAgYXJyYXlGb3JFYWNoID0gY3JlYXRlQXJyYXlNZXRob2QoMCksXG4gICAgICBhcnJheU1hcCA9IGNyZWF0ZUFycmF5TWV0aG9kKDEpLFxuICAgICAgYXJyYXlGaWx0ZXIgPSBjcmVhdGVBcnJheU1ldGhvZCgyKSxcbiAgICAgIGFycmF5U29tZSA9IGNyZWF0ZUFycmF5TWV0aG9kKDMpLFxuICAgICAgYXJyYXlFdmVyeSA9IGNyZWF0ZUFycmF5TWV0aG9kKDQpLFxuICAgICAgYXJyYXlGaW5kID0gY3JlYXRlQXJyYXlNZXRob2QoNSksXG4gICAgICBhcnJheUZpbmRJbmRleCA9IGNyZWF0ZUFycmF5TWV0aG9kKDYpLFxuICAgICAgYXJyYXlJbmNsdWRlcyA9IGNyZWF0ZUFycmF5SW5jbHVkZXModHJ1ZSksXG4gICAgICBhcnJheUluZGV4T2YgPSBjcmVhdGVBcnJheUluY2x1ZGVzKGZhbHNlKSxcbiAgICAgIGFycmF5VmFsdWVzID0gQXJyYXlJdGVyYXRvcnMudmFsdWVzLFxuICAgICAgYXJyYXlLZXlzID0gQXJyYXlJdGVyYXRvcnMua2V5cyxcbiAgICAgIGFycmF5RW50cmllcyA9IEFycmF5SXRlcmF0b3JzLmVudHJpZXMsXG4gICAgICBhcnJheUxhc3RJbmRleE9mID0gQXJyYXlQcm90by5sYXN0SW5kZXhPZixcbiAgICAgIGFycmF5UmVkdWNlID0gQXJyYXlQcm90by5yZWR1Y2UsXG4gICAgICBhcnJheVJlZHVjZVJpZ2h0ID0gQXJyYXlQcm90by5yZWR1Y2VSaWdodCxcbiAgICAgIGFycmF5Sm9pbiA9IEFycmF5UHJvdG8uam9pbixcbiAgICAgIGFycmF5UmV2ZXJzZSA9IEFycmF5UHJvdG8ucmV2ZXJzZSxcbiAgICAgIGFycmF5U29ydCA9IEFycmF5UHJvdG8uc29ydCxcbiAgICAgIGFycmF5U2xpY2UgPSBBcnJheVByb3RvLnNsaWNlLFxuICAgICAgYXJyYXlUb1N0cmluZyA9IEFycmF5UHJvdG8udG9TdHJpbmcsXG4gICAgICBhcnJheVRvTG9jYWxlU3RyaW5nID0gQXJyYXlQcm90by50b0xvY2FsZVN0cmluZyxcbiAgICAgIElURVJBVE9SID0gd2tzKCdpdGVyYXRvcicpLFxuICAgICAgVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpLFxuICAgICAgVFlQRURfQ09OU1RSVUNUT1IgPSB3a3MoJ3R5cGVkX2NvbnN0cnVjdG9yJyksXG4gICAgICBERUZfQ09OU1RSVUNUT1IgPSB3a3MoJ2RlZl9jb25zdHJ1Y3RvcicpLFxuICAgICAgQUxMX0FSUkFZUyA9ICR0eXBlZC5BUlJBWVMsXG4gICAgICBUWVBFRF9BUlJBWSA9ICR0eXBlZC5UWVBFRCxcbiAgICAgIFZJRVcgPSAkdHlwZWQuVklFVyxcbiAgICAgIEJZVEVTX1BFUl9FTEVNRU5UID0gJ0JZVEVTX1BFUl9FTEVNRU5UJztcbiAgdmFyIExJVFRMRV9FTkRJQU4gPSBmYWlscyhmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkobmV3IFVpbnQxNkFycmF5KFsxXSkuYnVmZmVyKVswXSA9PT0gMTtcbiAgfSk7XG4gIHZhciB2YWxpZGF0ZSA9IGZ1bmN0aW9uKGl0KSB7XG4gICAgaWYgKGlzT2JqZWN0KGl0KSAmJiBUWVBFRF9BUlJBWSBpbiBpdClcbiAgICAgIHJldHVybiBpdDtcbiAgICB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIHR5cGVkIGFycmF5IScpO1xuICB9O1xuICB2YXIgZnJvbUxpc3QgPSBmdW5jdGlvbihPLCBsaXN0KSB7XG4gICAgdmFyIGluZGV4ID0gMCxcbiAgICAgICAgbGVuZ3RoID0gbGlzdC5sZW5ndGgsXG4gICAgICAgIHJlc3VsdCA9IGFsbG9jYXRlKHNwZWNpZXNDb25zdHJ1Y3RvcihPLCBPW0RFRl9DT05TVFJVQ1RPUl0pLCBsZW5ndGgpO1xuICAgIHdoaWxlIChsZW5ndGggPiBpbmRleClcbiAgICAgIHJlc3VsdFtpbmRleF0gPSBsaXN0W2luZGV4KytdO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHZhciBhbGxvY2F0ZSA9IGZ1bmN0aW9uKEMsIGxlbmd0aCkge1xuICAgIGlmICghKGlzT2JqZWN0KEMpICYmIFRZUEVEX0NPTlNUUlVDVE9SIGluIEMpKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ0l0IGlzIG5vdCBhIHR5cGVkIGFycmF5IGNvbnN0cnVjdG9yIScpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEMobGVuZ3RoKTtcbiAgfTtcbiAgdmFyICRmcm9tID0gZnVuY3Rpb24gZnJvbShzb3VyY2UpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHNvdXJjZSksXG4gICAgICAgICQkID0gYXJndW1lbnRzLFxuICAgICAgICAkJGxlbiA9ICQkLmxlbmd0aCxcbiAgICAgICAgbWFwZm4gPSAkJGxlbiA+IDEgPyAkJFsxXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQsXG4gICAgICAgIGl0ZXJGbiA9IGdldEl0ZXJGbihPKSxcbiAgICAgICAgaSxcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICB2YWx1ZXMsXG4gICAgICAgIHJlc3VsdCxcbiAgICAgICAgc3RlcCxcbiAgICAgICAgaXRlcmF0b3I7XG4gICAgaWYgKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIWlzQXJyYXlJdGVyKGl0ZXJGbikpIHtcbiAgICAgIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgdmFsdWVzID0gW10sIGkgPSAwOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGkrKykge1xuICAgICAgICB2YWx1ZXMucHVzaChzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIE8gPSB2YWx1ZXM7XG4gICAgfVxuICAgIGlmIChtYXBwaW5nICYmICQkbGVuID4gMilcbiAgICAgIG1hcGZuID0gY3R4KG1hcGZuLCAkJFsyXSwgMik7XG4gICAgZm9yIChpID0gMCwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpLCByZXN1bHQgPSBhbGxvY2F0ZSh0aGlzLCBsZW5ndGgpOyBsZW5ndGggPiBpOyBpKyspIHtcbiAgICAgIHJlc3VsdFtpXSA9IG1hcHBpbmcgPyBtYXBmbihPW2ldLCBpKSA6IE9baV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHZhciBhZGRHZXR0ZXIgPSBmdW5jdGlvbihDLCBrZXksIGludGVybmFsKSB7XG4gICAgc2V0RGVzYyhDLnByb3RvdHlwZSwga2V5LCB7Z2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RbaW50ZXJuYWxdO1xuICAgICAgfX0pO1xuICB9O1xuICB2YXIgJG9mID0gZnVuY3Rpb24gb2YoKSB7XG4gICAgdmFyIGluZGV4ID0gMCxcbiAgICAgICAgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgICAgcmVzdWx0ID0gYWxsb2NhdGUodGhpcywgbGVuZ3RoKTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpXG4gICAgICByZXN1bHRbaW5kZXhdID0gYXJndW1lbnRzW2luZGV4KytdO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHZhciAkdG9Mb2NhbGVTdHJpbmcgPSBmdW5jdGlvbiB0b0xvY2FsZVN0cmluZygpIHtcbiAgICByZXR1cm4gYXJyYXlUb0xvY2FsZVN0cmluZy5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcbiAgfTtcbiAgdmFyIHByb3RvID0ge1xuICAgIGNvcHlXaXRoaW46IGZ1bmN0aW9uIGNvcHlXaXRoaW4odGFyZ2V0LCBzdGFydCkge1xuICAgICAgcmV0dXJuIGFycmF5Q29weVdpdGhpbi5jYWxsKHZhbGlkYXRlKHRoaXMpLCB0YXJnZXQsIHN0YXJ0LCBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBldmVyeTogZnVuY3Rpb24gZXZlcnkoY2FsbGJhY2tmbikge1xuICAgICAgcmV0dXJuIGFycmF5RXZlcnkodmFsaWRhdGUodGhpcyksIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGZpbGw6IGZ1bmN0aW9uIGZpbGwodmFsdWUpIHtcbiAgICAgIHJldHVybiBhcnJheUZpbGwuYXBwbHkodmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuKSB7XG4gICAgICByZXR1cm4gZnJvbUxpc3QodGhpcywgYXJyYXlGaWx0ZXIodmFsaWRhdGUodGhpcyksIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKSk7XG4gICAgfSxcbiAgICBmaW5kOiBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSkge1xuICAgICAgcmV0dXJuIGFycmF5RmluZCh2YWxpZGF0ZSh0aGlzKSwgcHJlZGljYXRlLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBmaW5kSW5kZXg6IGZ1bmN0aW9uIGZpbmRJbmRleChwcmVkaWNhdGUpIHtcbiAgICAgIHJldHVybiBhcnJheUZpbmRJbmRleCh2YWxpZGF0ZSh0aGlzKSwgcHJlZGljYXRlLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4pIHtcbiAgICAgIGFycmF5Rm9yRWFjaCh2YWxpZGF0ZSh0aGlzKSwgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgaW5kZXhPZjogZnVuY3Rpb24gaW5kZXhPZihzZWFyY2hFbGVtZW50KSB7XG4gICAgICByZXR1cm4gYXJyYXlJbmRleE9mKHZhbGlkYXRlKHRoaXMpLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoRWxlbWVudCkge1xuICAgICAgcmV0dXJuIGFycmF5SW5jbHVkZXModmFsaWRhdGUodGhpcyksIHNlYXJjaEVsZW1lbnQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKSB7XG4gICAgICByZXR1cm4gYXJyYXlKb2luLmFwcGx5KHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgbGFzdEluZGV4T2Y6IGZ1bmN0aW9uIGxhc3RJbmRleE9mKHNlYXJjaEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBhcnJheUxhc3RJbmRleE9mLmFwcGx5KHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgbWFwOiBmdW5jdGlvbiBtYXAobWFwZm4pIHtcbiAgICAgIHJldHVybiBmcm9tTGlzdCh0aGlzLCBhcnJheU1hcCh2YWxpZGF0ZSh0aGlzKSwgbWFwZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKSk7XG4gICAgfSxcbiAgICByZWR1Y2U6IGZ1bmN0aW9uIHJlZHVjZShjYWxsYmFja2ZuKSB7XG4gICAgICByZXR1cm4gYXJyYXlSZWR1Y2UuYXBwbHkodmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICByZWR1Y2VSaWdodDogZnVuY3Rpb24gcmVkdWNlUmlnaHQoY2FsbGJhY2tmbikge1xuICAgICAgcmV0dXJuIGFycmF5UmVkdWNlUmlnaHQuYXBwbHkodmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICByZXZlcnNlOiBmdW5jdGlvbiByZXZlcnNlKCkge1xuICAgICAgcmV0dXJuIGFycmF5UmV2ZXJzZS5jYWxsKHZhbGlkYXRlKHRoaXMpKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KGFycmF5TGlrZSkge1xuICAgICAgdmFsaWRhdGUodGhpcyk7XG4gICAgICB2YXIgb2Zmc2V0ID0gdG9JbnRlZ2VyKGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICAgIGlmIChvZmZzZXQgPCAwKVxuICAgICAgICB0aHJvdyBSYW5nZUVycm9yKCk7XG4gICAgICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG4gICAgICB2YXIgc3JjID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgbGVuID0gdG9MZW5ndGgoc3JjLmxlbmd0aCk7XG4gICAgICBpZiAobGVuICsgb2Zmc2V0ID4gbGVuZ3RoKVxuICAgICAgICB0aHJvdyBSYW5nZUVycm9yKCk7XG4gICAgICB3aGlsZSAoaW5kZXggPCBsZW4pXG4gICAgICAgIHRoaXNbb2Zmc2V0ICsgaW5kZXhdID0gc3JjW2luZGV4KytdO1xuICAgIH0sXG4gICAgc2xpY2U6IGZ1bmN0aW9uIHNsaWNlKHN0YXJ0LCBlbmQpIHtcbiAgICAgIHJldHVybiBmcm9tTGlzdCh0aGlzLCBhcnJheVNsaWNlLmNhbGwodmFsaWRhdGUodGhpcyksIHN0YXJ0LCBlbmQpKTtcbiAgICB9LFxuICAgIHNvbWU6IGZ1bmN0aW9uIHNvbWUoY2FsbGJhY2tmbikge1xuICAgICAgcmV0dXJuIGFycmF5U29tZSh2YWxpZGF0ZSh0aGlzKSwgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgc29ydDogZnVuY3Rpb24gc29ydChjb21wYXJlZm4pIHtcbiAgICAgIHJldHVybiBhcnJheVNvcnQuY2FsbCh2YWxpZGF0ZSh0aGlzKSwgY29tcGFyZWZuKTtcbiAgICB9LFxuICAgIHN1YmFycmF5OiBmdW5jdGlvbiBzdWJhcnJheShiZWdpbiwgZW5kKSB7XG4gICAgICB2YXIgTyA9IHZhbGlkYXRlKHRoaXMpLFxuICAgICAgICAgIGxlbmd0aCA9IE8ubGVuZ3RoLFxuICAgICAgICAgICRiZWdpbiA9IHRvSW5kZXgoYmVnaW4sIGxlbmd0aCk7XG4gICAgICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3IoTywgT1tERUZfQ09OU1RSVUNUT1JdKSkoTy5idWZmZXIsIE8uYnl0ZU9mZnNldCArICRiZWdpbiAqIE8uQllURVNfUEVSX0VMRU1FTlQsIHRvTGVuZ3RoKChlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IHRvSW5kZXgoZW5kLCBsZW5ndGgpKSAtICRiZWdpbikpO1xuICAgIH0sXG4gICAgZW50cmllczogZnVuY3Rpb24gZW50cmllcygpIHtcbiAgICAgIHJldHVybiBhcnJheUVudHJpZXMuY2FsbCh2YWxpZGF0ZSh0aGlzKSk7XG4gICAgfSxcbiAgICBrZXlzOiBmdW5jdGlvbiBrZXlzKCkge1xuICAgICAgcmV0dXJuIGFycmF5S2V5cy5jYWxsKHZhbGlkYXRlKHRoaXMpKTtcbiAgICB9LFxuICAgIHZhbHVlczogZnVuY3Rpb24gdmFsdWVzKCkge1xuICAgICAgcmV0dXJuIGFycmF5VmFsdWVzLmNhbGwodmFsaWRhdGUodGhpcykpO1xuICAgIH1cbiAgfTtcbiAgdmFyIGlzVEFJbmRleCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRhcmdldCkgJiYgVFlQRURfQVJSQVkgaW4gdGFyZ2V0ICYmIHR5cGVvZiBrZXkgIT0gJ3N5bWJvbCcgJiYga2V5IGluIHRhcmdldCAmJiBTdHJpbmcoK2tleSkgPT0gU3RyaW5nKGtleSk7XG4gIH07XG4gIHZhciAkZ2V0RGVzYyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkge1xuICAgIHJldHVybiBpc1RBSW5kZXgodGFyZ2V0LCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKSA/IHByb3BlcnR5RGVzYygyLCB0YXJnZXRba2V5XSkgOiBnZXREZXNjKHRhcmdldCwga2V5KTtcbiAgfTtcbiAgdmFyICRzZXREZXNjID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICBpZiAoaXNUQUluZGV4KHRhcmdldCwga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSkgJiYgaXNPYmplY3QoZGVzYykpIHtcbiAgICAgIGlmICgndmFsdWUnIGluIGRlc2MpXG4gICAgICAgIHRhcmdldFtrZXldID0gZGVzYy52YWx1ZTtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSBlbHNlXG4gICAgICByZXR1cm4gc2V0RGVzYyh0YXJnZXQsIGtleSwgZGVzYyk7XG4gIH07XG4gIGlmICghQUxMX0FSUkFZUykge1xuICAgICQuZ2V0RGVzYyA9ICRnZXREZXNjO1xuICAgICQuc2V0RGVzYyA9ICRzZXREZXNjO1xuICB9XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIUFMTF9BUlJBWVMsICdPYmplY3QnLCB7XG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0RGVzYyxcbiAgICBkZWZpbmVQcm9wZXJ0eTogJHNldERlc2NcbiAgfSk7XG4gIHZhciAkVHlwZWRBcnJheVByb3RvdHlwZSQgPSByZWRlZmluZUFsbCh7fSwgcHJvdG8pO1xuICByZWRlZmluZUFsbCgkVHlwZWRBcnJheVByb3RvdHlwZSQsIHtcbiAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24oKSB7fSxcbiAgICB0b1N0cmluZzogYXJyYXlUb1N0cmluZyxcbiAgICB0b0xvY2FsZVN0cmluZzogJHRvTG9jYWxlU3RyaW5nXG4gIH0pO1xuICAkLnNldERlc2MoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCBUQUcsIHtnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXNbVFlQRURfQVJSQVldO1xuICAgIH19KTtcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIEJZVEVTLCB3cmFwcGVyLCBDTEFNUEVEKSB7XG4gICAgQ0xBTVBFRCA9ICEhQ0xBTVBFRDtcbiAgICB2YXIgTkFNRSA9IEtFWSArIChDTEFNUEVEID8gJ0NsYW1wZWQnIDogJycpICsgJ0FycmF5JyxcbiAgICAgICAgR0VUVEVSID0gJ2dldCcgKyBLRVksXG4gICAgICAgIFNFVFRFUiA9ICdzZXQnICsgS0VZLFxuICAgICAgICBUeXBlZEFycmF5ID0gZ2xvYmFsW05BTUVdLFxuICAgICAgICBCYXNlID0gVHlwZWRBcnJheSB8fCB7fSxcbiAgICAgICAgRk9SQ0VEID0gIVR5cGVkQXJyYXkgfHwgISR0eXBlZC5BQlYsXG4gICAgICAgICRpdGVyYXRvciA9IHByb3RvLnZhbHVlcyxcbiAgICAgICAgTyA9IHt9O1xuICAgIHZhciBhZGRFbGVtZW50ID0gZnVuY3Rpb24odGhhdCwgaW5kZXgpIHtcbiAgICAgIHNldERlc2ModGhhdCwgaW5kZXgsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2Q7XG4gICAgICAgICAgcmV0dXJuIGRhdGEudltHRVRURVJdKGluZGV4ICogQllURVMgKyBkYXRhLm8sIExJVFRMRV9FTkRJQU4pO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKGl0KSB7XG4gICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kO1xuICAgICAgICAgIGlmIChDTEFNUEVEKVxuICAgICAgICAgICAgaXQgPSAoaXQgPSBNYXRoLnJvdW5kKGl0KSkgPCAwID8gMCA6IGl0ID4gMHhmZiA/IDB4ZmYgOiBpdCAmIDB4ZmY7XG4gICAgICAgICAgZGF0YS52W1NFVFRFUl0oaW5kZXggKiBCWVRFUyArIGRhdGEubywgaXQsIExJVFRMRV9FTkRJQU4pO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9O1xuICAgIGlmICghJEFycmF5QnVmZmVyKVxuICAgICAgcmV0dXJuO1xuICAgIGlmIChGT1JDRUQpIHtcbiAgICAgIFR5cGVkQXJyYXkgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGRhdGEsICRvZmZzZXQsICRsZW5ndGgpIHtcbiAgICAgICAgc3RyaWN0TmV3KHRoYXQsIFR5cGVkQXJyYXksIE5BTUUpO1xuICAgICAgICB2YXIgaW5kZXggPSAwLFxuICAgICAgICAgICAgb2Zmc2V0ID0gMCxcbiAgICAgICAgICAgIGJ1ZmZlcixcbiAgICAgICAgICAgIGJ5dGVMZW5ndGgsXG4gICAgICAgICAgICBsZW5ndGg7XG4gICAgICAgIGlmICghaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgICAgICBieXRlTGVuZ3RoID0gdG9JbnRlZ2VyKGRhdGEpICogQllURVM7XG4gICAgICAgICAgYnVmZmVyID0gbmV3ICRBcnJheUJ1ZmZlcihieXRlTGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhIGluc3RhbmNlb2YgJEFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgYnVmZmVyID0gZGF0YTtcbiAgICAgICAgICBvZmZzZXQgPSB0b0ludGVnZXIoJG9mZnNldCk7XG4gICAgICAgICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ICUgQllURVMpXG4gICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKCk7XG4gICAgICAgICAgdmFyICRsZW4gPSBkYXRhLmJ5dGVMZW5ndGg7XG4gICAgICAgICAgaWYgKCRsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKCRsZW4gJSBCWVRFUylcbiAgICAgICAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcigpO1xuICAgICAgICAgICAgYnl0ZUxlbmd0aCA9ICRsZW4gLSBvZmZzZXQ7XG4gICAgICAgICAgICBpZiAoYnl0ZUxlbmd0aCA8IDApXG4gICAgICAgICAgICAgIHRocm93IFJhbmdlRXJyb3IoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnl0ZUxlbmd0aCA9IHRvTGVuZ3RoKCRsZW5ndGgpICogQllURVM7XG4gICAgICAgICAgICBpZiAoYnl0ZUxlbmd0aCArIG9mZnNldCA+ICRsZW4pXG4gICAgICAgICAgICAgIHRocm93IFJhbmdlRXJyb3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgIHJldHVybiAkZnJvbS5jYWxsKFR5cGVkQXJyYXksIGRhdGEpO1xuICAgICAgICBsZW5ndGggPSBieXRlTGVuZ3RoIC8gQllURVM7XG4gICAgICAgIGhpZGUodGhhdCwgJ19kJywge1xuICAgICAgICAgIGI6IGJ1ZmZlcixcbiAgICAgICAgICBvOiBvZmZzZXQsXG4gICAgICAgICAgbDogYnl0ZUxlbmd0aCxcbiAgICAgICAgICBlOiBsZW5ndGgsXG4gICAgICAgICAgdjogbmV3ICREYXRhVmlldyhidWZmZXIpXG4gICAgICAgIH0pO1xuICAgICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpXG4gICAgICAgICAgYWRkRWxlbWVudCh0aGF0LCBpbmRleCsrKTtcbiAgICAgIH0pO1xuICAgICAgVHlwZWRBcnJheS5wcm90b3R5cGUgPSAkLmNyZWF0ZSgkVHlwZWRBcnJheVByb3RvdHlwZSQpO1xuICAgICAgYWRkR2V0dGVyKFR5cGVkQXJyYXksICdidWZmZXInLCAnYicpO1xuICAgICAgYWRkR2V0dGVyKFR5cGVkQXJyYXksICdieXRlT2Zmc2V0JywgJ28nKTtcbiAgICAgIGFkZEdldHRlcihUeXBlZEFycmF5LCAnYnl0ZUxlbmd0aCcsICdsJyk7XG4gICAgICBhZGRHZXR0ZXIoVHlwZWRBcnJheSwgJ2xlbmd0aCcsICdlJyk7XG4gICAgICBoaWRlKFR5cGVkQXJyYXksIEJZVEVTX1BFUl9FTEVNRU5ULCBCWVRFUyk7XG4gICAgICBoaWRlKFR5cGVkQXJyYXkucHJvdG90eXBlLCBCWVRFU19QRVJfRUxFTUVOVCwgQllURVMpO1xuICAgICAgaGlkZShUeXBlZEFycmF5LnByb3RvdHlwZSwgJ2NvbnN0cnVjdG9yJywgVHlwZWRBcnJheSk7XG4gICAgfSBlbHNlIGlmICghJGl0ZXJEZXRlY3QoZnVuY3Rpb24oaXRlcikge1xuICAgICAgbmV3IFR5cGVkQXJyYXkoaXRlcik7XG4gICAgfSwgdHJ1ZSkpIHtcbiAgICAgIFR5cGVkQXJyYXkgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGRhdGEsICRvZmZzZXQsICRsZW5ndGgpIHtcbiAgICAgICAgc3RyaWN0TmV3KHRoYXQsIFR5cGVkQXJyYXksIE5BTUUpO1xuICAgICAgICBpZiAoaXNPYmplY3QoZGF0YSkgJiYgaXNJdGVyYWJsZShkYXRhKSlcbiAgICAgICAgICByZXR1cm4gJGZyb20uY2FsbChUeXBlZEFycmF5LCBkYXRhKTtcbiAgICAgICAgcmV0dXJuICRsZW5ndGggPT09IHVuZGVmaW5lZCA/IG5ldyBCYXNlKGRhdGEsICRvZmZzZXQpIDogbmV3IEJhc2UoZGF0YSwgJG9mZnNldCwgJGxlbmd0aCk7XG4gICAgICB9KTtcbiAgICAgIFR5cGVkQXJyYXkucHJvdG90eXBlID0gQmFzZS5wcm90b3R5cGU7XG4gICAgICBpZiAoIUxJQlJBUlkpXG4gICAgICAgIFR5cGVkQXJyYXkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVHlwZWRBcnJheTtcbiAgICB9XG4gICAgdmFyIFR5cGVkQXJyYXlQcm90b3R5cGUgPSBUeXBlZEFycmF5LnByb3RvdHlwZTtcbiAgICB2YXIgJG5hdGl2ZUl0ZXJhdG9yID0gVHlwZWRBcnJheVByb3RvdHlwZVtJVEVSQVRPUl07XG4gICAgaGlkZShUeXBlZEFycmF5LCBUWVBFRF9DT05TVFJVQ1RPUiwgdHJ1ZSk7XG4gICAgaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCBUWVBFRF9BUlJBWSwgTkFNRSk7XG4gICAgaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCBWSUVXLCB0cnVlKTtcbiAgICBoaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsIERFRl9DT05TVFJVQ1RPUiwgVHlwZWRBcnJheSk7XG4gICAgVEFHIGluIFR5cGVkQXJyYXlQcm90b3R5cGUgfHwgJC5zZXREZXNjKFR5cGVkQXJyYXlQcm90b3R5cGUsIFRBRywge2dldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBOQU1FO1xuICAgICAgfX0pO1xuICAgIE9bTkFNRV0gPSBUeXBlZEFycmF5O1xuICAgICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogKFR5cGVkQXJyYXkgIT0gQmFzZSksIE8pO1xuICAgICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKFR5cGVkQXJyYXkgIT0gQmFzZSksIE5BTUUsIHtcbiAgICAgIEJZVEVTX1BFUl9FTEVNRU5UOiBCWVRFUyxcbiAgICAgIGZyb206IEJhc2UuZnJvbSB8fCAkZnJvbSxcbiAgICAgIG9mOiBCYXNlLm9mIHx8ICRvZlxuICAgIH0pO1xuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogRk9SQ0VELCBOQU1FLCBwcm90byk7XG4gICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoVHlwZWRBcnJheVByb3RvdHlwZS50b1N0cmluZyAhPSBhcnJheVRvU3RyaW5nKSwgTkFNRSwge3RvU3RyaW5nOiBhcnJheVRvU3RyaW5nfSk7XG4gICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBbMSwgMl0udG9Mb2NhbGVTdHJpbmcoKSAhPSBuZXcgVHlwZWQoWzEsIDJdKS50b0xvY2FsZVN0cmluZygpO1xuICAgIH0pLCBOQU1FLCB7dG9Mb2NhbGVTdHJpbmc6ICR0b0xvY2FsZVN0cmluZ30pO1xuICAgIEl0ZXJhdG9yc1tOQU1FXSA9ICRuYXRpdmVJdGVyYXRvciB8fCAkaXRlcmF0b3I7XG4gICAgTElCUkFSWSB8fCAkbmF0aXZlSXRlcmF0b3IgfHwgaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCBJVEVSQVRPUiwgJGl0ZXJhdG9yKTtcbiAgICBzZXRTcGVjaWVzKE5BTUUpO1xuICB9O1xufSBlbHNlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7fTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
