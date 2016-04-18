'use strict';
/* */
"format cjs";

System.register([], function (_export, _context) {
  var _typeof;

  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      (function (process) {
        ;
        (function () {
          var undefined;
          var VERSION = '4.11.1';
          var FUNC_ERROR_TEXT = 'Expected a function';
          var BIND_FLAG = 1,
              PARTIAL_FLAG = 32;
          var UNORDERED_COMPARE_FLAG = 1,
              PARTIAL_COMPARE_FLAG = 2;
          var INFINITY = 1 / 0,
              MAX_SAFE_INTEGER = 9007199254740991;
          var argsTag = '[object Arguments]',
              arrayTag = '[object Array]',
              boolTag = '[object Boolean]',
              dateTag = '[object Date]',
              errorTag = '[object Error]',
              funcTag = '[object Function]',
              genTag = '[object GeneratorFunction]',
              numberTag = '[object Number]',
              objectTag = '[object Object]',
              regexpTag = '[object RegExp]',
              stringTag = '[object String]';
          var reUnescapedHtml = /[&<>"'`]/g,
              reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
          var reIsUint = /^(?:0|[1-9]\d*)$/;
          var htmlEscapes = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
            '`': '&#96;'
          };
          var objectTypes = {
            'function': true,
            'object': true
          };
          var freeExports = objectTypes[typeof exports === 'undefined' ? 'undefined' : _typeof(exports)] && exports && !exports.nodeType ? exports : undefined;
          var freeModule = objectTypes[typeof module === 'undefined' ? 'undefined' : _typeof(module)] && module && !module.nodeType ? module : undefined;
          var moduleExports = freeModule && freeModule.exports === freeExports ? freeExports : undefined;
          var freeGlobal = checkGlobal(freeExports && freeModule && (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global);
          var freeSelf = checkGlobal(objectTypes[typeof self === 'undefined' ? 'undefined' : _typeof(self)] && self);
          var freeWindow = checkGlobal(objectTypes[typeof window === 'undefined' ? 'undefined' : _typeof(window)] && window);
          var thisGlobal = checkGlobal(objectTypes[_typeof(this)] && this);
          var root = freeGlobal || freeWindow !== (thisGlobal && thisGlobal.window) && freeWindow || freeSelf || thisGlobal || Function('return this')();
          function arrayConcat(array, other) {
            return arrayPush(copyArray(array), values);
          }
          function arrayPush(array, values) {
            array.push.apply(array, values);
            return array;
          }
          function baseExtremum(array, iteratee, comparator) {
            var index = -1,
                length = array.length;
            while (++index < length) {
              var value = array[index],
                  current = iteratee(value);
              if (current != null && (computed === undefined ? current === current : comparator(current, computed))) {
                var computed = current,
                    result = value;
              }
            }
            return result;
          }
          function baseFind(collection, predicate, eachFunc, retKey) {
            var result;
            eachFunc(collection, function (value, key, collection) {
              if (predicate(value, key, collection)) {
                result = retKey ? key : value;
                return false;
              }
            });
            return result;
          }
          function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
            eachFunc(collection, function (value, index, collection) {
              accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection);
            });
            return accumulator;
          }
          function baseTimes(n, iteratee) {
            var index = -1,
                result = Array(n);
            while (++index < n) {
              result[index] = iteratee(index);
            }
            return result;
          }
          function baseValues(object, props) {
            return baseMap(props, function (key) {
              return object[key];
            });
          }
          function checkGlobal(value) {
            return value && value.Object === Object ? value : null;
          }
          function compareAscending(value, other) {
            if (value !== other) {
              var valIsNull = value === null,
                  valIsUndef = value === undefined,
                  valIsReflexive = value === value;
              var othIsNull = other === null,
                  othIsUndef = other === undefined,
                  othIsReflexive = other === other;
              if (value > other && !othIsNull || !valIsReflexive || valIsNull && !othIsUndef && othIsReflexive || valIsUndef && othIsReflexive) {
                return 1;
              }
              if (value < other && !valIsNull || !othIsReflexive || othIsNull && !valIsUndef && valIsReflexive || othIsUndef && valIsReflexive) {
                return -1;
              }
            }
            return 0;
          }
          function escapeHtmlChar(chr) {
            return htmlEscapes[chr];
          }
          function isHostObject(value) {
            var result = false;
            if (value != null && typeof value.toString != 'function') {
              try {
                result = !!(value + '');
              } catch (e) {}
            }
            return result;
          }
          function isIndex(value, length) {
            value = typeof value == 'number' || reIsUint.test(value) ? +value : -1;
            length = length == null ? MAX_SAFE_INTEGER : length;
            return value > -1 && value % 1 == 0 && value < length;
          }
          function iteratorToArray(iterator) {
            var data,
                result = [];
            while (!(data = iterator.next()).done) {
              result.push(data.value);
            }
            return result;
          }
          var arrayProto = Array.prototype,
              objectProto = Object.prototype;
          var hasOwnProperty = objectProto.hasOwnProperty;
          var idCounter = 0;
          var objectToString = objectProto.toString;
          var oldDash = root._;
          var Reflect = root.Reflect,
              _Symbol = root.Symbol,
              Uint8Array = root.Uint8Array,
              enumerate = Reflect ? Reflect.enumerate : undefined,
              objectCreate = Object.create,
              propertyIsEnumerable = objectProto.propertyIsEnumerable;
          var nativeIsFinite = root.isFinite,
              nativeKeys = Object.keys,
              nativeMax = Math.max;
          var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');
          function lodash(value) {
            return value instanceof LodashWrapper ? value : new LodashWrapper(value);
          }
          function LodashWrapper(value, chainAll) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__chain__ = !!chainAll;
          }
          LodashWrapper.prototype = baseCreate(lodash.prototype);
          LodashWrapper.prototype.constructor = LodashWrapper;
          function assignInDefaults(objValue, srcValue, key, object) {
            if (objValue === undefined || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
              return srcValue;
            }
            return objValue;
          }
          function assignValue(object, key, value) {
            var objValue = object[key];
            if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
              object[key] = value;
            }
          }
          function baseCreate(proto) {
            return isObject(proto) ? objectCreate(proto) : {};
          }
          function baseDelay(func, wait, args) {
            if (typeof func != 'function') {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            return setTimeout(function () {
              func.apply(undefined, args);
            }, wait);
          }
          var baseEach = createBaseEach(baseForOwn);
          function baseEvery(collection, predicate) {
            var result = true;
            baseEach(collection, function (value, index, collection) {
              result = !!predicate(value, index, collection);
              return result;
            });
            return result;
          }
          function baseFilter(collection, predicate) {
            var result = [];
            baseEach(collection, function (value, index, collection) {
              if (predicate(value, index, collection)) {
                result.push(value);
              }
            });
            return result;
          }
          function baseFlatten(array, depth, predicate, isStrict, result) {
            var index = -1,
                length = array.length;
            predicate || (predicate = isFlattenable);
            result || (result = []);
            while (++index < length) {
              var value = array[index];
              if (depth > 0 && predicate(value)) {
                if (depth > 1) {
                  baseFlatten(value, depth - 1, predicate, isStrict, result);
                } else {
                  arrayPush(result, value);
                }
              } else if (!isStrict) {
                result[result.length] = value;
              }
            }
            return result;
          }
          var baseFor = createBaseFor();
          function baseForOwn(object, iteratee) {
            return object && baseFor(object, iteratee, keys);
          }
          function baseFunctions(object, props) {
            return baseFilter(props, function (key) {
              return isFunction(object[key]);
            });
          }
          function baseIsEqual(value, other, customizer, bitmask, stack) {
            if (value === other) {
              return true;
            }
            if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
              return value !== value && other !== other;
            }
            return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
          }
          function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
            var objIsArr = isArray(object),
                othIsArr = isArray(other),
                objTag = arrayTag,
                othTag = arrayTag;
            if (!objIsArr) {
              objTag = objectToString.call(object);
              objTag = objTag == argsTag ? objectTag : objTag;
            }
            if (!othIsArr) {
              othTag = objectToString.call(other);
              othTag = othTag == argsTag ? objectTag : othTag;
            }
            var objIsObj = objTag == objectTag && !isHostObject(object),
                othIsObj = othTag == objectTag && !isHostObject(other),
                isSameTag = objTag == othTag;
            stack || (stack = []);
            var stacked = find(stack, function (entry) {
              return entry[0] === object;
            });
            if (stacked && stacked[1]) {
              return stacked[1] == other;
            }
            stack.push([object, other]);
            if (isSameTag && !objIsObj) {
              var result = objIsArr || isTypedArray(object) ? equalArrays(object, other, equalFunc, customizer, bitmask, stack) : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
              stack.pop();
              return result;
            }
            if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
              var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
                  othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
              if (objIsWrapped || othIsWrapped) {
                var objUnwrapped = objIsWrapped ? object.value() : object,
                    othUnwrapped = othIsWrapped ? other.value() : other;
                var result = equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
                stack.pop();
                return result;
              }
            }
            if (!isSameTag) {
              return false;
            }
            var result = equalObjects(object, other, equalFunc, customizer, bitmask, stack);
            stack.pop();
            return result;
          }
          function baseIteratee(func) {
            if (typeof func == 'function') {
              return func;
            }
            if (func == null) {
              return identity;
            }
            return ((typeof func === 'undefined' ? 'undefined' : _typeof(func)) == 'object' ? baseMatches : baseProperty)(func);
          }
          function baseKeys(object) {
            return nativeKeys(Object(object));
          }
          function baseKeysIn(object) {
            object = object == null ? object : Object(object);
            var result = [];
            for (var key in object) {
              result.push(key);
            }
            return result;
          }
          if (enumerate && !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf')) {
            baseKeysIn = function baseKeysIn(object) {
              return iteratorToArray(enumerate(object));
            };
          }
          function baseMap(collection, iteratee) {
            var index = -1,
                result = isArrayLike(collection) ? Array(collection.length) : [];
            baseEach(collection, function (value, key, collection) {
              result[++index] = iteratee(value, key, collection);
            });
            return result;
          }
          function baseMatches(source) {
            var props = keys(source);
            return function (object) {
              var length = props.length;
              if (object == null) {
                return !length;
              }
              object = Object(object);
              while (length--) {
                var key = props[length];
                if (!(key in object && baseIsEqual(source[key], object[key], undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG))) {
                  return false;
                }
              }
              return true;
            };
          }
          function basePick(object, props) {
            object = Object(object);
            return reduce(props, function (result, key) {
              if (key in object) {
                result[key] = object[key];
              }
              return result;
            }, {});
          }
          function baseProperty(key) {
            return function (object) {
              return object == null ? undefined : object[key];
            };
          }
          function baseSlice(array, start, end) {
            var index = -1,
                length = array.length;
            if (start < 0) {
              start = -start > length ? 0 : length + start;
            }
            end = end > length ? length : end;
            if (end < 0) {
              end += length;
            }
            length = start > end ? 0 : end - start >>> 0;
            start >>>= 0;
            var result = Array(length);
            while (++index < length) {
              result[index] = array[index + start];
            }
            return result;
          }
          function copyArray(source) {
            return baseSlice(source, 0, source.length);
          }
          function baseSome(collection, predicate) {
            var result;
            baseEach(collection, function (value, index, collection) {
              result = predicate(value, index, collection);
              return !result;
            });
            return !!result;
          }
          function baseWrapperValue(value, actions) {
            var result = value;
            return reduce(actions, function (result, action) {
              return action.func.apply(action.thisArg, arrayPush([result], action.args));
            }, result);
          }
          function copyObject(source, props, object, customizer) {
            object || (object = {});
            var index = -1,
                length = props.length;
            while (++index < length) {
              var key = props[index];
              var newValue = customizer ? customizer(object[key], source[key], key, object, source) : source[key];
              assignValue(object, key, newValue);
            }
            return object;
          }
          function createAssigner(assigner) {
            return rest(function (object, sources) {
              var index = -1,
                  length = sources.length,
                  customizer = length > 1 ? sources[length - 1] : undefined;
              customizer = typeof customizer == 'function' ? (length--, customizer) : undefined;
              object = Object(object);
              while (++index < length) {
                var source = sources[index];
                if (source) {
                  assigner(object, source, index, customizer);
                }
              }
              return object;
            });
          }
          function createBaseEach(eachFunc, fromRight) {
            return function (collection, iteratee) {
              if (collection == null) {
                return collection;
              }
              if (!isArrayLike(collection)) {
                return eachFunc(collection, iteratee);
              }
              var length = collection.length,
                  index = fromRight ? length : -1,
                  iterable = Object(collection);
              while (fromRight ? index-- : ++index < length) {
                if (iteratee(iterable[index], index, iterable) === false) {
                  break;
                }
              }
              return collection;
            };
          }
          function createBaseFor(fromRight) {
            return function (object, iteratee, keysFunc) {
              var index = -1,
                  iterable = Object(object),
                  props = keysFunc(object),
                  length = props.length;
              while (length--) {
                var key = props[fromRight ? length : ++index];
                if (iteratee(iterable[key], key, iterable) === false) {
                  break;
                }
              }
              return object;
            };
          }
          function createCtorWrapper(Ctor) {
            return function () {
              var args = arguments;
              var thisBinding = baseCreate(Ctor.prototype),
                  result = Ctor.apply(thisBinding, args);
              return isObject(result) ? result : thisBinding;
            };
          }
          function createPartialWrapper(func, bitmask, thisArg, partials) {
            if (typeof func != 'function') {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            var isBind = bitmask & BIND_FLAG,
                Ctor = createCtorWrapper(func);
            function wrapper() {
              var argsIndex = -1,
                  argsLength = arguments.length,
                  leftIndex = -1,
                  leftLength = partials.length,
                  args = Array(leftLength + argsLength),
                  fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              while (++leftIndex < leftLength) {
                args[leftIndex] = partials[leftIndex];
              }
              while (argsLength--) {
                args[leftIndex++] = arguments[++argsIndex];
              }
              return fn.apply(isBind ? thisArg : this, args);
            }
            return wrapper;
          }
          function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
            var index = -1,
                isPartial = bitmask & PARTIAL_COMPARE_FLAG,
                isUnordered = bitmask & UNORDERED_COMPARE_FLAG,
                arrLength = array.length,
                othLength = other.length;
            if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
              return false;
            }
            var result = true;
            while (++index < arrLength) {
              var arrValue = array[index],
                  othValue = other[index];
              var compared;
              if (compared !== undefined) {
                if (compared) {
                  continue;
                }
                result = false;
                break;
              }
              if (isUnordered) {
                if (!baseSome(other, function (othValue) {
                  return arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack);
                })) {
                  result = false;
                  break;
                }
              } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
                result = false;
                break;
              }
            }
            return result;
          }
          function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
            switch (tag) {
              case boolTag:
              case dateTag:
                return +object == +other;
              case errorTag:
                return object.name == other.name && object.message == other.message;
              case numberTag:
                return object != +object ? other != +other : object == +other;
              case regexpTag:
              case stringTag:
                return object == other + '';
            }
            return false;
          }
          function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
            var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
                objProps = keys(object),
                objLength = objProps.length,
                othProps = keys(other),
                othLength = othProps.length;
            if (objLength != othLength && !isPartial) {
              return false;
            }
            var index = objLength;
            while (index--) {
              var key = objProps[index];
              if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
                return false;
              }
            }
            var result = true;
            var skipCtor = isPartial;
            while (++index < objLength) {
              key = objProps[index];
              var objValue = object[key],
                  othValue = other[key];
              var compared;
              if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack) : compared)) {
                result = false;
                break;
              }
              skipCtor || (skipCtor = key == 'constructor');
            }
            if (result && !skipCtor) {
              var objCtor = object.constructor,
                  othCtor = other.constructor;
              if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
                result = false;
              }
            }
            return result;
          }
          var getLength = baseProperty('length');
          function indexKeys(object) {
            var length = object ? object.length : undefined;
            if (isLength(length) && (isArray(object) || isString(object) || isArguments(object))) {
              return baseTimes(length, String);
            }
            return null;
          }
          function isFlattenable(value) {
            return isArrayLikeObject(value) && (isArray(value) || isArguments(value));
          }
          function isPrototype(value) {
            var Ctor = value && value.constructor,
                proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
            return value === proto;
          }
          function compact(array) {
            return baseFilter(array, Boolean);
          }
          function concat() {
            var length = arguments.length,
                array = castArray(arguments[0]);
            if (length < 2) {
              return length ? copyArray(array) : [];
            }
            var args = Array(length - 1);
            while (length--) {
              args[length - 1] = arguments[length];
            }
            return arrayConcat(array, baseFlatten(args, 1));
          }
          function flatten(array) {
            var length = array ? array.length : 0;
            return length ? baseFlatten(array, 1) : [];
          }
          function flattenDeep(array) {
            var length = array ? array.length : 0;
            return length ? baseFlatten(array, INFINITY) : [];
          }
          function head(array) {
            return array && array.length ? array[0] : undefined;
          }
          function indexOf(array, value, fromIndex) {
            var length = array ? array.length : 0;
            if (typeof fromIndex == 'number') {
              fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex;
            } else {
              fromIndex = 0;
            }
            var index = (fromIndex || 0) - 1,
                isReflexive = value === value;
            while (++index < length) {
              var other = array[index];
              if (isReflexive ? other === value : other !== other) {
                return index;
              }
            }
            return -1;
          }
          function last(array) {
            var length = array ? array.length : 0;
            return length ? array[length - 1] : undefined;
          }
          function slice(array, start, end) {
            var length = array ? array.length : 0;
            start = start == null ? 0 : +start;
            end = end === undefined ? length : +end;
            return length ? baseSlice(array, start, end) : [];
          }
          function chain(value) {
            var result = lodash(value);
            result.__chain__ = true;
            return result;
          }
          function tap(value, interceptor) {
            interceptor(value);
            return value;
          }
          function thru(value, interceptor) {
            return interceptor(value);
          }
          function wrapperChain() {
            return chain(this);
          }
          function wrapperValue() {
            return baseWrapperValue(this.__wrapped__, this.__actions__);
          }
          function every(collection, predicate, guard) {
            predicate = guard ? undefined : predicate;
            return baseEvery(collection, baseIteratee(predicate));
          }
          function filter(collection, predicate) {
            return baseFilter(collection, baseIteratee(predicate));
          }
          function find(collection, predicate) {
            return baseFind(collection, baseIteratee(predicate), baseEach);
          }
          function forEach(collection, iteratee) {
            return baseEach(collection, baseIteratee(iteratee));
          }
          function map(collection, iteratee) {
            return baseMap(collection, baseIteratee(iteratee));
          }
          function reduce(collection, iteratee, accumulator) {
            return baseReduce(collection, baseIteratee(iteratee), accumulator, arguments.length < 3, baseEach);
          }
          function size(collection) {
            if (collection == null) {
              return 0;
            }
            collection = isArrayLike(collection) ? collection : keys(collection);
            return collection.length;
          }
          function some(collection, predicate, guard) {
            predicate = guard ? undefined : predicate;
            return baseSome(collection, baseIteratee(predicate));
          }
          function sortBy(collection, iteratee) {
            var index = 0;
            iteratee = baseIteratee(iteratee);
            return baseMap(baseMap(collection, function (value, key, collection) {
              return {
                'value': value,
                'index': index++,
                'criteria': iteratee(value, key, collection)
              };
            }).sort(function (object, other) {
              return compareAscending(object.criteria, other.criteria) || object.index - other.index;
            }), baseProperty('value'));
          }
          function before(n, func) {
            var result;
            if (typeof func != 'function') {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            n = toInteger(n);
            return function () {
              if (--n > 0) {
                result = func.apply(this, arguments);
              }
              if (n <= 1) {
                func = undefined;
              }
              return result;
            };
          }
          var bind = rest(function (func, thisArg, partials) {
            return createPartialWrapper(func, BIND_FLAG | PARTIAL_FLAG, thisArg, partials);
          });
          var defer = rest(function (func, args) {
            return baseDelay(func, 1, args);
          });
          var delay = rest(function (func, wait, args) {
            return baseDelay(func, toNumber(wait) || 0, args);
          });
          function negate(predicate) {
            if (typeof predicate != 'function') {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            return function () {
              return !predicate.apply(this, arguments);
            };
          }
          function once(func) {
            return before(2, func);
          }
          function rest(func, start) {
            if (typeof func != 'function') {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            start = nativeMax(start === undefined ? func.length - 1 : toInteger(start), 0);
            return function () {
              var args = arguments,
                  index = -1,
                  length = nativeMax(args.length - start, 0),
                  array = Array(length);
              while (++index < length) {
                array[index] = args[start + index];
              }
              var otherArgs = Array(start + 1);
              index = -1;
              while (++index < start) {
                otherArgs[index] = args[index];
              }
              otherArgs[start] = array;
              return func.apply(this, otherArgs);
            };
          }
          function castArray() {
            if (!arguments.length) {
              return [];
            }
            var value = arguments[0];
            return isArray(value) ? value : [value];
          }
          function clone(value) {
            if (!isObject(value)) {
              return value;
            }
            return isArray(value) ? copyArray(value) : copyObject(value, keys(value));
          }
          function eq(value, other) {
            return value === other || value !== value && other !== other;
          }
          function gt(value, other) {
            return value > other;
          }
          function isArguments(value) {
            return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
          }
          var isArray = Array.isArray;
          function isArrayLike(value) {
            return value != null && isLength(getLength(value)) && !isFunction(value);
          }
          function isArrayLikeObject(value) {
            return isObjectLike(value) && isArrayLike(value);
          }
          function isBoolean(value) {
            return value === true || value === false || isObjectLike(value) && objectToString.call(value) == boolTag;
          }
          function isDate(value) {
            return isObjectLike(value) && objectToString.call(value) == dateTag;
          }
          function isEmpty(value) {
            if (isArrayLike(value) && (isArray(value) || isString(value) || isFunction(value.splice) || isArguments(value))) {
              return !value.length;
            }
            for (var key in value) {
              if (hasOwnProperty.call(value, key)) {
                return false;
              }
            }
            return !(nonEnumShadows && keys(value).length);
          }
          function isEqual(value, other) {
            return baseIsEqual(value, other);
          }
          function isFinite(value) {
            return typeof value == 'number' && nativeIsFinite(value);
          }
          function isFunction(value) {
            var tag = isObject(value) ? objectToString.call(value) : '';
            return tag == funcTag || tag == genTag;
          }
          function isLength(value) {
            return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
          }
          function isObject(value) {
            var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
            return !!value && (type == 'object' || type == 'function');
          }
          function isObjectLike(value) {
            return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
          }
          function isNaN(value) {
            return isNumber(value) && value != +value;
          }
          function isNull(value) {
            return value === null;
          }
          function isNumber(value) {
            return typeof value == 'number' || isObjectLike(value) && objectToString.call(value) == numberTag;
          }
          function isRegExp(value) {
            return isObject(value) && objectToString.call(value) == regexpTag;
          }
          function isString(value) {
            return typeof value == 'string' || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
          }
          function isUndefined(value) {
            return value === undefined;
          }
          function lt(value, other) {
            return value < other;
          }
          function toArray(value) {
            if (!isArrayLike(value)) {
              return values(value);
            }
            return value.length ? copyArray(value) : [];
          }
          var toInteger = Number;
          var toNumber = Number;
          function toString(value) {
            if (typeof value == 'string') {
              return value;
            }
            return value == null ? '' : value + '';
          }
          var assign = createAssigner(function (object, source) {
            copyObject(source, keys(source), object);
          });
          var assignIn = createAssigner(function (object, source) {
            copyObject(source, keysIn(source), object);
          });
          var assignInWith = createAssigner(function (object, source, srcIndex, customizer) {
            copyObject(source, keysIn(source), object, customizer);
          });
          function create(prototype, properties) {
            var result = baseCreate(prototype);
            return properties ? assign(result, properties) : result;
          }
          var defaults = rest(function (args) {
            args.push(undefined, assignInDefaults);
            return assignInWith.apply(undefined, args);
          });
          function has(object, path) {
            return object != null && hasOwnProperty.call(object, path);
          }
          function keys(object) {
            var isProto = isPrototype(object);
            if (!(isProto || isArrayLike(object))) {
              return baseKeys(object);
            }
            var indexes = indexKeys(object),
                skipIndexes = !!indexes,
                result = indexes || [],
                length = result.length;
            for (var key in object) {
              if (hasOwnProperty.call(object, key) && !(skipIndexes && (key == 'length' || isIndex(key, length))) && !(isProto && key == 'constructor')) {
                result.push(key);
              }
            }
            return result;
          }
          function keysIn(object) {
            var index = -1,
                isProto = isPrototype(object),
                props = baseKeysIn(object),
                propsLength = props.length,
                indexes = indexKeys(object),
                skipIndexes = !!indexes,
                result = indexes || [],
                length = result.length;
            while (++index < propsLength) {
              var key = props[index];
              if (!(skipIndexes && (key == 'length' || isIndex(key, length))) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
                result.push(key);
              }
            }
            return result;
          }
          var pick = rest(function (object, props) {
            return object == null ? {} : basePick(object, baseFlatten(props, 1));
          });
          function result(object, path, defaultValue) {
            var value = object == null ? undefined : object[path];
            if (value === undefined) {
              value = defaultValue;
            }
            return isFunction(value) ? value.call(object) : value;
          }
          function values(object) {
            return object ? baseValues(object, keys(object)) : [];
          }
          function escape(string) {
            string = toString(string);
            return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
          }
          function identity(value) {
            return value;
          }
          var iteratee = baseIteratee;
          function matches(source) {
            return baseMatches(assign({}, source));
          }
          function mixin(object, source, options) {
            var props = keys(source),
                methodNames = baseFunctions(source, props);
            if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
              options = source;
              source = object;
              object = this;
              methodNames = baseFunctions(source, keys(source));
            }
            var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
                isFunc = isFunction(object);
            baseEach(methodNames, function (methodName) {
              var func = source[methodName];
              object[methodName] = func;
              if (isFunc) {
                object.prototype[methodName] = function () {
                  var chainAll = this.__chain__;
                  if (chain || chainAll) {
                    var result = object(this.__wrapped__),
                        actions = result.__actions__ = copyArray(this.__actions__);
                    actions.push({
                      'func': func,
                      'args': arguments,
                      'thisArg': object
                    });
                    result.__chain__ = chainAll;
                    return result;
                  }
                  return func.apply(object, arrayPush([this.value()], arguments));
                };
              }
            });
            return object;
          }
          function noConflict() {
            if (root._ === this) {
              root._ = oldDash;
            }
            return this;
          }
          function noop() {}
          function uniqueId(prefix) {
            var id = ++idCounter;
            return toString(prefix) + id;
          }
          function max(array) {
            return array && array.length ? baseExtremum(array, identity, gt) : undefined;
          }
          function min(array) {
            return array && array.length ? baseExtremum(array, identity, lt) : undefined;
          }
          lodash.assignIn = assignIn;
          lodash.before = before;
          lodash.bind = bind;
          lodash.chain = chain;
          lodash.compact = compact;
          lodash.concat = concat;
          lodash.create = create;
          lodash.defaults = defaults;
          lodash.defer = defer;
          lodash.delay = delay;
          lodash.filter = filter;
          lodash.flatten = flatten;
          lodash.flattenDeep = flattenDeep;
          lodash.iteratee = iteratee;
          lodash.keys = keys;
          lodash.map = map;
          lodash.matches = matches;
          lodash.mixin = mixin;
          lodash.negate = negate;
          lodash.once = once;
          lodash.pick = pick;
          lodash.slice = slice;
          lodash.sortBy = sortBy;
          lodash.tap = tap;
          lodash.thru = thru;
          lodash.toArray = toArray;
          lodash.values = values;
          lodash.extend = assignIn;
          mixin(lodash, lodash);
          lodash.clone = clone;
          lodash.escape = escape;
          lodash.every = every;
          lodash.find = find;
          lodash.forEach = forEach;
          lodash.has = has;
          lodash.head = head;
          lodash.identity = identity;
          lodash.indexOf = indexOf;
          lodash.isArguments = isArguments;
          lodash.isArray = isArray;
          lodash.isBoolean = isBoolean;
          lodash.isDate = isDate;
          lodash.isEmpty = isEmpty;
          lodash.isEqual = isEqual;
          lodash.isFinite = isFinite;
          lodash.isFunction = isFunction;
          lodash.isNaN = isNaN;
          lodash.isNull = isNull;
          lodash.isNumber = isNumber;
          lodash.isObject = isObject;
          lodash.isRegExp = isRegExp;
          lodash.isString = isString;
          lodash.isUndefined = isUndefined;
          lodash.last = last;
          lodash.max = max;
          lodash.min = min;
          lodash.noConflict = noConflict;
          lodash.noop = noop;
          lodash.reduce = reduce;
          lodash.result = result;
          lodash.size = size;
          lodash.some = some;
          lodash.uniqueId = uniqueId;
          lodash.each = forEach;
          lodash.first = head;
          mixin(lodash, function () {
            var source = {};
            baseForOwn(lodash, function (func, methodName) {
              if (!hasOwnProperty.call(lodash.prototype, methodName)) {
                source[methodName] = func;
              }
            });
            return source;
          }(), { 'chain': false });
          lodash.VERSION = VERSION;
          baseEach(['pop', 'join', 'replace', 'reverse', 'split', 'push', 'shift', 'sort', 'splice', 'unshift'], function (methodName) {
            var func = (/^(?:replace|split)$/.test(methodName) ? String.prototype : arrayProto)[methodName],
                chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
                retUnwrapped = /^(?:pop|join|replace|shift)$/.test(methodName);
            lodash.prototype[methodName] = function () {
              var args = arguments;
              if (retUnwrapped && !this.__chain__) {
                var value = this.value();
                return func.apply(isArray(value) ? value : [], args);
              }
              return this[chainName](function (value) {
                return func.apply(isArray(value) ? value : [], args);
              });
            };
          });
          lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
          (freeWindow || freeSelf || {})._ = lodash;
          if (typeof define == 'function' && _typeof(define.amd) == 'object' && define.amd) {
            define(function () {
              return lodash;
            });
          } else if (freeExports && freeModule) {
            if (moduleExports) {
              (freeModule.exports = lodash)._ = lodash;
            }
            freeExports._ = lodash;
          } else {
            root._ = lodash;
          }
        }).call(this);
      })(require('process'));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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LE1BQWhCLENBSm9DO1dBQS9CLE1BS0E7QUFDTCxpQkFBSyxDQUFMLEdBQVMsTUFBVCxDQURLO1dBTEE7U0F6akNSLEVBaWtDQyxJQWprQ0QsQ0Fpa0NNLElBamtDTixDQUFELENBRmlCO09BQWxCLENBQUQsQ0Fva0NHLFFBQVEsU0FBUixDQXBrQ0giLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG4oZnVuY3Rpb24ocHJvY2Vzcykge1xuICA7XG4gIChmdW5jdGlvbigpIHtcbiAgICB2YXIgdW5kZWZpbmVkO1xuICAgIHZhciBWRVJTSU9OID0gJzQuMTEuMSc7XG4gICAgdmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcbiAgICB2YXIgQklORF9GTEFHID0gMSxcbiAgICAgICAgUEFSVElBTF9GTEFHID0gMzI7XG4gICAgdmFyIFVOT1JERVJFRF9DT01QQVJFX0ZMQUcgPSAxLFxuICAgICAgICBQQVJUSUFMX0NPTVBBUkVfRkxBRyA9IDI7XG4gICAgdmFyIElORklOSVRZID0gMSAvIDAsXG4gICAgICAgIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuICAgIHZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICAgICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICAgICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICAgICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgICAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICAgICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICAgICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgICAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICAgICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXSc7XG4gICAgdmFyIHJlVW5lc2NhcGVkSHRtbCA9IC9bJjw+XCInYF0vZyxcbiAgICAgICAgcmVIYXNVbmVzY2FwZWRIdG1sID0gUmVnRXhwKHJlVW5lc2NhcGVkSHRtbC5zb3VyY2UpO1xuICAgIHZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG4gICAgdmFyIGh0bWxFc2NhcGVzID0ge1xuICAgICAgJyYnOiAnJmFtcDsnLFxuICAgICAgJzwnOiAnJmx0OycsXG4gICAgICAnPic6ICcmZ3Q7JyxcbiAgICAgICdcIic6ICcmcXVvdDsnLFxuICAgICAgXCInXCI6ICcmIzM5OycsXG4gICAgICAnYCc6ICcmIzk2OydcbiAgICB9O1xuICAgIHZhciBvYmplY3RUeXBlcyA9IHtcbiAgICAgICdmdW5jdGlvbic6IHRydWUsXG4gICAgICAnb2JqZWN0JzogdHJ1ZVxuICAgIH07XG4gICAgdmFyIGZyZWVFeHBvcnRzID0gKG9iamVjdFR5cGVzW3R5cGVvZiBleHBvcnRzXSAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlKSA/IGV4cG9ydHMgOiB1bmRlZmluZWQ7XG4gICAgdmFyIGZyZWVNb2R1bGUgPSAob2JqZWN0VHlwZXNbdHlwZW9mIG1vZHVsZV0gJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUpID8gbW9kdWxlIDogdW5kZWZpbmVkO1xuICAgIHZhciBtb2R1bGVFeHBvcnRzID0gKGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cykgPyBmcmVlRXhwb3J0cyA6IHVuZGVmaW5lZDtcbiAgICB2YXIgZnJlZUdsb2JhbCA9IGNoZWNrR2xvYmFsKGZyZWVFeHBvcnRzICYmIGZyZWVNb2R1bGUgJiYgdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpO1xuICAgIHZhciBmcmVlU2VsZiA9IGNoZWNrR2xvYmFsKG9iamVjdFR5cGVzW3R5cGVvZiBzZWxmXSAmJiBzZWxmKTtcbiAgICB2YXIgZnJlZVdpbmRvdyA9IGNoZWNrR2xvYmFsKG9iamVjdFR5cGVzW3R5cGVvZiB3aW5kb3ddICYmIHdpbmRvdyk7XG4gICAgdmFyIHRoaXNHbG9iYWwgPSBjaGVja0dsb2JhbChvYmplY3RUeXBlc1t0eXBlb2YgdGhpc10gJiYgdGhpcyk7XG4gICAgdmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8ICgoZnJlZVdpbmRvdyAhPT0gKHRoaXNHbG9iYWwgJiYgdGhpc0dsb2JhbC53aW5kb3cpKSAmJiBmcmVlV2luZG93KSB8fCBmcmVlU2VsZiB8fCB0aGlzR2xvYmFsIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4gICAgZnVuY3Rpb24gYXJyYXlDb25jYXQoYXJyYXksIG90aGVyKSB7XG4gICAgICByZXR1cm4gYXJyYXlQdXNoKGNvcHlBcnJheShhcnJheSksIHZhbHVlcyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gICAgICBhcnJheS5wdXNoLmFwcGx5KGFycmF5LCB2YWx1ZXMpO1xuICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbiAgICBmdW5jdGlvbiBiYXNlRXh0cmVtdW0oYXJyYXksIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG4gICAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgICBjdXJyZW50ID0gaXRlcmF0ZWUodmFsdWUpO1xuICAgICAgICBpZiAoY3VycmVudCAhPSBudWxsICYmIChjb21wdXRlZCA9PT0gdW5kZWZpbmVkID8gY3VycmVudCA9PT0gY3VycmVudCA6IGNvbXBhcmF0b3IoY3VycmVudCwgY29tcHV0ZWQpKSkge1xuICAgICAgICAgIHZhciBjb21wdXRlZCA9IGN1cnJlbnQsXG4gICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBiYXNlRmluZChjb2xsZWN0aW9uLCBwcmVkaWNhdGUsIGVhY2hGdW5jLCByZXRLZXkpIHtcbiAgICAgIHZhciByZXN1bHQ7XG4gICAgICBlYWNoRnVuYyhjb2xsZWN0aW9uLCBmdW5jdGlvbih2YWx1ZSwga2V5LCBjb2xsZWN0aW9uKSB7XG4gICAgICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGtleSwgY29sbGVjdGlvbikpIHtcbiAgICAgICAgICByZXN1bHQgPSByZXRLZXkgPyBrZXkgOiB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gYmFzZVJlZHVjZShjb2xsZWN0aW9uLCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIGluaXRBY2N1bSwgZWFjaEZ1bmMpIHtcbiAgICAgIGVhY2hGdW5jKGNvbGxlY3Rpb24sIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgICBhY2N1bXVsYXRvciA9IGluaXRBY2N1bSA/IChpbml0QWNjdW0gPSBmYWxzZSwgdmFsdWUpIDogaXRlcmF0ZWUoYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gICAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgICByZXN1bHQgPSBBcnJheShuKTtcbiAgICAgIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgICAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gYmFzZVZhbHVlcyhvYmplY3QsIHByb3BzKSB7XG4gICAgICByZXR1cm4gYmFzZU1hcChwcm9wcywgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHJldHVybiBvYmplY3Rba2V5XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja0dsb2JhbCh2YWx1ZSkge1xuICAgICAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZS5PYmplY3QgPT09IE9iamVjdCkgPyB2YWx1ZSA6IG51bGw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbXBhcmVBc2NlbmRpbmcodmFsdWUsIG90aGVyKSB7XG4gICAgICBpZiAodmFsdWUgIT09IG90aGVyKSB7XG4gICAgICAgIHZhciB2YWxJc051bGwgPSB2YWx1ZSA9PT0gbnVsbCxcbiAgICAgICAgICAgIHZhbElzVW5kZWYgPSB2YWx1ZSA9PT0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgdmFsSXNSZWZsZXhpdmUgPSB2YWx1ZSA9PT0gdmFsdWU7XG4gICAgICAgIHZhciBvdGhJc051bGwgPSBvdGhlciA9PT0gbnVsbCxcbiAgICAgICAgICAgIG90aElzVW5kZWYgPSBvdGhlciA9PT0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgb3RoSXNSZWZsZXhpdmUgPSBvdGhlciA9PT0gb3RoZXI7XG4gICAgICAgIGlmICgodmFsdWUgPiBvdGhlciAmJiAhb3RoSXNOdWxsKSB8fCAhdmFsSXNSZWZsZXhpdmUgfHwgKHZhbElzTnVsbCAmJiAhb3RoSXNVbmRlZiAmJiBvdGhJc1JlZmxleGl2ZSkgfHwgKHZhbElzVW5kZWYgJiYgb3RoSXNSZWZsZXhpdmUpKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh2YWx1ZSA8IG90aGVyICYmICF2YWxJc051bGwpIHx8ICFvdGhJc1JlZmxleGl2ZSB8fCAob3RoSXNOdWxsICYmICF2YWxJc1VuZGVmICYmIHZhbElzUmVmbGV4aXZlKSB8fCAob3RoSXNVbmRlZiAmJiB2YWxJc1JlZmxleGl2ZSkpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBlc2NhcGVIdG1sQ2hhcihjaHIpIHtcbiAgICAgIHJldHVybiBodG1sRXNjYXBlc1tjaHJdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0hvc3RPYmplY3QodmFsdWUpIHtcbiAgICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0ID0gISEodmFsdWUgKyAnJyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgICAgIHZhbHVlID0gKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgPyArdmFsdWUgOiAtMTtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgICAgIHJldHVybiB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpdGVyYXRvclRvQXJyYXkoaXRlcmF0b3IpIHtcbiAgICAgIHZhciBkYXRhLFxuICAgICAgICAgIHJlc3VsdCA9IFtdO1xuICAgICAgd2hpbGUgKCEoZGF0YSA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICByZXN1bHQucHVzaChkYXRhLnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlLFxuICAgICAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG4gICAgdmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG4gICAgdmFyIGlkQ291bnRlciA9IDA7XG4gICAgdmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG4gICAgdmFyIG9sZERhc2ggPSByb290Ll87XG4gICAgdmFyIFJlZmxlY3QgPSByb290LlJlZmxlY3QsXG4gICAgICAgIFN5bWJvbCA9IHJvb3QuU3ltYm9sLFxuICAgICAgICBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5LFxuICAgICAgICBlbnVtZXJhdGUgPSBSZWZsZWN0ID8gUmVmbGVjdC5lbnVtZXJhdGUgOiB1bmRlZmluZWQsXG4gICAgICAgIG9iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGUsXG4gICAgICAgIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG4gICAgdmFyIG5hdGl2ZUlzRmluaXRlID0gcm9vdC5pc0Zpbml0ZSxcbiAgICAgICAgbmF0aXZlS2V5cyA9IE9iamVjdC5rZXlzLFxuICAgICAgICBuYXRpdmVNYXggPSBNYXRoLm1heDtcbiAgICB2YXIgbm9uRW51bVNoYWRvd3MgPSAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7J3ZhbHVlT2YnOiAxfSwgJ3ZhbHVlT2YnKTtcbiAgICBmdW5jdGlvbiBsb2Rhc2godmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIExvZGFzaFdyYXBwZXIgPyB2YWx1ZSA6IG5ldyBMb2Rhc2hXcmFwcGVyKHZhbHVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gTG9kYXNoV3JhcHBlcih2YWx1ZSwgY2hhaW5BbGwpIHtcbiAgICAgIHRoaXMuX193cmFwcGVkX18gPSB2YWx1ZTtcbiAgICAgIHRoaXMuX19hY3Rpb25zX18gPSBbXTtcbiAgICAgIHRoaXMuX19jaGFpbl9fID0gISFjaGFpbkFsbDtcbiAgICB9XG4gICAgTG9kYXNoV3JhcHBlci5wcm90b3R5cGUgPSBiYXNlQ3JlYXRlKGxvZGFzaC5wcm90b3R5cGUpO1xuICAgIExvZGFzaFdyYXBwZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTG9kYXNoV3JhcHBlcjtcbiAgICBmdW5jdGlvbiBhc3NpZ25JbkRlZmF1bHRzKG9ialZhbHVlLCBzcmNWYWx1ZSwga2V5LCBvYmplY3QpIHtcbiAgICAgIGlmIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IChlcShvYmpWYWx1ZSwgb2JqZWN0UHJvdG9ba2V5XSkgJiYgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkge1xuICAgICAgICByZXR1cm4gc3JjVmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqVmFsdWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICAgICAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gICAgICBpZiAoIShoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBlcShvYmpWYWx1ZSwgdmFsdWUpKSB8fCAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgICAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBiYXNlQ3JlYXRlKHByb3RvKSB7XG4gICAgICByZXR1cm4gaXNPYmplY3QocHJvdG8pID8gb2JqZWN0Q3JlYXRlKHByb3RvKSA6IHt9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBiYXNlRGVsYXkoZnVuYywgd2FpdCwgYXJncykge1xuICAgICAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgIH0sIHdhaXQpO1xuICAgIH1cbiAgICB2YXIgYmFzZUVhY2ggPSBjcmVhdGVCYXNlRWFjaChiYXNlRm9yT3duKTtcbiAgICBmdW5jdGlvbiBiYXNlRXZlcnkoY29sbGVjdGlvbiwgcHJlZGljYXRlKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgIGJhc2VFYWNoKGNvbGxlY3Rpb24sIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgICByZXN1bHQgPSAhIXByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBiYXNlRmlsdGVyKGNvbGxlY3Rpb24sIHByZWRpY2F0ZSkge1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBiYXNlRmxhdHRlbihhcnJheSwgZGVwdGgsIHByZWRpY2F0ZSwgaXNTdHJpY3QsIHJlc3VsdCkge1xuICAgICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgICAgcHJlZGljYXRlIHx8IChwcmVkaWNhdGUgPSBpc0ZsYXR0ZW5hYmxlKTtcbiAgICAgIHJlc3VsdCB8fCAocmVzdWx0ID0gW10pO1xuICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgICAgICBpZiAoZGVwdGggPiAwICYmIHByZWRpY2F0ZSh2YWx1ZSkpIHtcbiAgICAgICAgICBpZiAoZGVwdGggPiAxKSB7XG4gICAgICAgICAgICBiYXNlRmxhdHRlbih2YWx1ZSwgZGVwdGggLSAxLCBwcmVkaWNhdGUsIGlzU3RyaWN0LCByZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcnJheVB1c2gocmVzdWx0LCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFpc1N0cmljdCkge1xuICAgICAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICB2YXIgYmFzZUZvciA9IGNyZWF0ZUJhc2VGb3IoKTtcbiAgICBmdW5jdGlvbiBiYXNlRm9yT3duKG9iamVjdCwgaXRlcmF0ZWUpIHtcbiAgICAgIHJldHVybiBvYmplY3QgJiYgYmFzZUZvcihvYmplY3QsIGl0ZXJhdGVlLCBrZXlzKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYmFzZUZ1bmN0aW9ucyhvYmplY3QsIHByb3BzKSB7XG4gICAgICByZXR1cm4gYmFzZUZpbHRlcihwcm9wcywgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHJldHVybiBpc0Z1bmN0aW9uKG9iamVjdFtrZXldKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGN1c3RvbWl6ZXIsIGJpdG1hc2ssIHN0YWNrKSB7XG4gICAgICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgb3RoZXIgPT0gbnVsbCB8fCAoIWlzT2JqZWN0KHZhbHVlKSAmJiAhaXNPYmplY3RMaWtlKG90aGVyKSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gYmFzZUlzRXF1YWxEZWVwKHZhbHVlLCBvdGhlciwgYmFzZUlzRXF1YWwsIGN1c3RvbWl6ZXIsIGJpdG1hc2ssIHN0YWNrKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYmFzZUlzRXF1YWxEZWVwKG9iamVjdCwgb3RoZXIsIGVxdWFsRnVuYywgY3VzdG9taXplciwgYml0bWFzaywgc3RhY2spIHtcbiAgICAgIHZhciBvYmpJc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgICAgICBvdGhJc0FyciA9IGlzQXJyYXkob3RoZXIpLFxuICAgICAgICAgIG9ialRhZyA9IGFycmF5VGFnLFxuICAgICAgICAgIG90aFRhZyA9IGFycmF5VGFnO1xuICAgICAgaWYgKCFvYmpJc0Fycikge1xuICAgICAgICBvYmpUYWcgPSBvYmplY3RUb1N0cmluZy5jYWxsKG9iamVjdCk7XG4gICAgICAgIG9ialRhZyA9IG9ialRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb2JqVGFnO1xuICAgICAgfVxuICAgICAgaWYgKCFvdGhJc0Fycikge1xuICAgICAgICBvdGhUYWcgPSBvYmplY3RUb1N0cmluZy5jYWxsKG90aGVyKTtcbiAgICAgICAgb3RoVGFnID0gb3RoVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvdGhUYWc7XG4gICAgICB9XG4gICAgICB2YXIgb2JqSXNPYmogPSBvYmpUYWcgPT0gb2JqZWN0VGFnICYmICFpc0hvc3RPYmplY3Qob2JqZWN0KSxcbiAgICAgICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcgJiYgIWlzSG9zdE9iamVjdChvdGhlciksXG4gICAgICAgICAgaXNTYW1lVGFnID0gb2JqVGFnID09IG90aFRhZztcbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IFtdKTtcbiAgICAgIHZhciBzdGFja2VkID0gZmluZChzdGFjaywgZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgcmV0dXJuIGVudHJ5WzBdID09PSBvYmplY3Q7XG4gICAgICB9KTtcbiAgICAgIGlmIChzdGFja2VkICYmIHN0YWNrZWRbMV0pIHtcbiAgICAgICAgcmV0dXJuIHN0YWNrZWRbMV0gPT0gb3RoZXI7XG4gICAgICB9XG4gICAgICBzdGFjay5wdXNoKFtvYmplY3QsIG90aGVyXSk7XG4gICAgICBpZiAoaXNTYW1lVGFnICYmICFvYmpJc09iaikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gKG9iaklzQXJyIHx8IGlzVHlwZWRBcnJheShvYmplY3QpKSA/IGVxdWFsQXJyYXlzKG9iamVjdCwgb3RoZXIsIGVxdWFsRnVuYywgY3VzdG9taXplciwgYml0bWFzaywgc3RhY2spIDogZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCBvYmpUYWcsIGVxdWFsRnVuYywgY3VzdG9taXplciwgYml0bWFzaywgc3RhY2spO1xuICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIGlmICghKGJpdG1hc2sgJiBQQVJUSUFMX0NPTVBBUkVfRkxBRykpIHtcbiAgICAgICAgdmFyIG9iaklzV3JhcHBlZCA9IG9iaklzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnX193cmFwcGVkX18nKSxcbiAgICAgICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuICAgICAgICBpZiAob2JqSXNXcmFwcGVkIHx8IG90aElzV3JhcHBlZCkge1xuICAgICAgICAgIHZhciBvYmpVbndyYXBwZWQgPSBvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCxcbiAgICAgICAgICAgICAgb3RoVW53cmFwcGVkID0gb3RoSXNXcmFwcGVkID8gb3RoZXIudmFsdWUoKSA6IG90aGVyO1xuICAgICAgICAgIHZhciByZXN1bHQgPSBlcXVhbEZ1bmMob2JqVW53cmFwcGVkLCBvdGhVbndyYXBwZWQsIGN1c3RvbWl6ZXIsIGJpdG1hc2ssIHN0YWNrKTtcbiAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWlzU2FtZVRhZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB2YXIgcmVzdWx0ID0gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGVxdWFsRnVuYywgY3VzdG9taXplciwgYml0bWFzaywgc3RhY2spO1xuICAgICAgc3RhY2sucG9wKCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBiYXNlSXRlcmF0ZWUoZnVuYykge1xuICAgICAgaWYgKHR5cGVvZiBmdW5jID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmM7XG4gICAgICB9XG4gICAgICBpZiAoZnVuYyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBpZGVudGl0eTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAodHlwZW9mIGZ1bmMgPT0gJ29iamVjdCcgPyBiYXNlTWF0Y2hlcyA6IGJhc2VQcm9wZXJ0eSkoZnVuYyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICAgICAgcmV0dXJuIG5hdGl2ZUtleXMoT2JqZWN0KG9iamVjdCkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBiYXNlS2V5c0luKG9iamVjdCkge1xuICAgICAgb2JqZWN0ID0gb2JqZWN0ID09IG51bGwgPyBvYmplY3QgOiBPYmplY3Qob2JqZWN0KTtcbiAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGlmIChlbnVtZXJhdGUgJiYgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyd2YWx1ZU9mJzogMX0sICd2YWx1ZU9mJykpIHtcbiAgICAgIGJhc2VLZXlzSW4gPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yVG9BcnJheShlbnVtZXJhdGUob2JqZWN0KSk7XG4gICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBiYXNlTWFwKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gICAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgICByZXN1bHQgPSBpc0FycmF5TGlrZShjb2xsZWN0aW9uKSA/IEFycmF5KGNvbGxlY3Rpb24ubGVuZ3RoKSA6IFtdO1xuICAgICAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGtleSwgY29sbGVjdGlvbikge1xuICAgICAgICByZXN1bHRbKytpbmRleF0gPSBpdGVyYXRlZSh2YWx1ZSwga2V5LCBjb2xsZWN0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gYmFzZU1hdGNoZXMoc291cmNlKSB7XG4gICAgICB2YXIgcHJvcHMgPSBrZXlzKHNvdXJjZSk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgIHZhciBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG4gICAgICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiAhbGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICAgICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgICB2YXIga2V5ID0gcHJvcHNbbGVuZ3RoXTtcbiAgICAgICAgICBpZiAoIShrZXkgaW4gb2JqZWN0ICYmIGJhc2VJc0VxdWFsKHNvdXJjZVtrZXldLCBvYmplY3Rba2V5XSwgdW5kZWZpbmVkLCBVTk9SREVSRURfQ09NUEFSRV9GTEFHIHwgUEFSVElBTF9DT01QQVJFX0ZMQUcpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJhc2VQaWNrKG9iamVjdCwgcHJvcHMpIHtcbiAgICAgIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICAgICAgcmV0dXJuIHJlZHVjZShwcm9wcywgZnVuY3Rpb24ocmVzdWx0LCBrZXkpIHtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IG9iamVjdFtrZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9LCB7fSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBiYXNlU2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICAgIGlmIChzdGFydCA8IDApIHtcbiAgICAgICAgc3RhcnQgPSAtc3RhcnQgPiBsZW5ndGggPyAwIDogKGxlbmd0aCArIHN0YXJ0KTtcbiAgICAgIH1cbiAgICAgIGVuZCA9IGVuZCA+IGxlbmd0aCA/IGxlbmd0aCA6IGVuZDtcbiAgICAgIGlmIChlbmQgPCAwKSB7XG4gICAgICAgIGVuZCArPSBsZW5ndGg7XG4gICAgICB9XG4gICAgICBsZW5ndGggPSBzdGFydCA+IGVuZCA/IDAgOiAoKGVuZCAtIHN0YXJ0KSA+Pj4gMCk7XG4gICAgICBzdGFydCA+Pj49IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcbiAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdFtpbmRleF0gPSBhcnJheVtpbmRleCArIHN0YXJ0XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UpIHtcbiAgICAgIHJldHVybiBiYXNlU2xpY2Uoc291cmNlLCAwLCBzb3VyY2UubGVuZ3RoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYmFzZVNvbWUoY29sbGVjdGlvbiwgcHJlZGljYXRlKSB7XG4gICAgICB2YXIgcmVzdWx0O1xuICAgICAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICAgIHJlc3VsdCA9IHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgICAgICByZXR1cm4gIXJlc3VsdDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuICEhcmVzdWx0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBiYXNlV3JhcHBlclZhbHVlKHZhbHVlLCBhY3Rpb25zKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdmFsdWU7XG4gICAgICByZXR1cm4gcmVkdWNlKGFjdGlvbnMsIGZ1bmN0aW9uKHJlc3VsdCwgYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBhY3Rpb24uZnVuYy5hcHBseShhY3Rpb24udGhpc0FyZywgYXJyYXlQdXNoKFtyZXN1bHRdLCBhY3Rpb24uYXJncykpO1xuICAgICAgfSwgcmVzdWx0KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgICAgIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuICAgICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplciA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKSA6IHNvdXJjZVtrZXldO1xuICAgICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlQXNzaWduZXIoYXNzaWduZXIpIHtcbiAgICAgIHJldHVybiByZXN0KGZ1bmN0aW9uKG9iamVjdCwgc291cmNlcykge1xuICAgICAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgICAgIGxlbmd0aCA9IHNvdXJjZXMubGVuZ3RoLFxuICAgICAgICAgICAgY3VzdG9taXplciA9IGxlbmd0aCA+IDEgPyBzb3VyY2VzW2xlbmd0aCAtIDFdIDogdW5kZWZpbmVkO1xuICAgICAgICBjdXN0b21pemVyID0gdHlwZW9mIGN1c3RvbWl6ZXIgPT0gJ2Z1bmN0aW9uJyA/IChsZW5ndGgtLSwgY3VzdG9taXplcikgOiB1bmRlZmluZWQ7XG4gICAgICAgIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICAgICAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzW2luZGV4XTtcbiAgICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgICBhc3NpZ25lcihvYmplY3QsIHNvdXJjZSwgaW5kZXgsIGN1c3RvbWl6ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJhc2VFYWNoKGVhY2hGdW5jLCBmcm9tUmlnaHQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICAgICAgICBpZiAoY29sbGVjdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0FycmF5TGlrZShjb2xsZWN0aW9uKSkge1xuICAgICAgICAgIHJldHVybiBlYWNoRnVuYyhjb2xsZWN0aW9uLCBpdGVyYXRlZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxlbmd0aCA9IGNvbGxlY3Rpb24ubGVuZ3RoLFxuICAgICAgICAgICAgaW5kZXggPSBmcm9tUmlnaHQgPyBsZW5ndGggOiAtMSxcbiAgICAgICAgICAgIGl0ZXJhYmxlID0gT2JqZWN0KGNvbGxlY3Rpb24pO1xuICAgICAgICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgICAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtpbmRleF0sIGluZGV4LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVCYXNlRm9yKGZyb21SaWdodCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgaXRlcmF0ZWUsIGtleXNGdW5jKSB7XG4gICAgICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICAgICAgaXRlcmFibGUgPSBPYmplY3Qob2JqZWN0KSxcbiAgICAgICAgICAgIHByb3BzID0ga2V5c0Z1bmMob2JqZWN0KSxcbiAgICAgICAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAgICAgdmFyIGtleSA9IHByb3BzW2Zyb21SaWdodCA/IGxlbmd0aCA6ICsraW5kZXhdO1xuICAgICAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtrZXldLCBrZXksIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlQ3RvcldyYXBwZXIoQ3Rvcikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgdmFyIHRoaXNCaW5kaW5nID0gYmFzZUNyZWF0ZShDdG9yLnByb3RvdHlwZSksXG4gICAgICAgICAgICByZXN1bHQgPSBDdG9yLmFwcGx5KHRoaXNCaW5kaW5nLCBhcmdzKTtcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KHJlc3VsdCkgPyByZXN1bHQgOiB0aGlzQmluZGluZztcbiAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVBhcnRpYWxXcmFwcGVyKGZ1bmMsIGJpdG1hc2ssIHRoaXNBcmcsIHBhcnRpYWxzKSB7XG4gICAgICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gICAgICB9XG4gICAgICB2YXIgaXNCaW5kID0gYml0bWFzayAmIEJJTkRfRkxBRyxcbiAgICAgICAgICBDdG9yID0gY3JlYXRlQ3RvcldyYXBwZXIoZnVuYyk7XG4gICAgICBmdW5jdGlvbiB3cmFwcGVyKCkge1xuICAgICAgICB2YXIgYXJnc0luZGV4ID0gLTEsXG4gICAgICAgICAgICBhcmdzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIGxlZnRJbmRleCA9IC0xLFxuICAgICAgICAgICAgbGVmdExlbmd0aCA9IHBhcnRpYWxzLmxlbmd0aCxcbiAgICAgICAgICAgIGFyZ3MgPSBBcnJheShsZWZ0TGVuZ3RoICsgYXJnc0xlbmd0aCksXG4gICAgICAgICAgICBmbiA9ICh0aGlzICYmIHRoaXMgIT09IHJvb3QgJiYgdGhpcyBpbnN0YW5jZW9mIHdyYXBwZXIpID8gQ3RvciA6IGZ1bmM7XG4gICAgICAgIHdoaWxlICgrK2xlZnRJbmRleCA8IGxlZnRMZW5ndGgpIHtcbiAgICAgICAgICBhcmdzW2xlZnRJbmRleF0gPSBwYXJ0aWFsc1tsZWZ0SW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChhcmdzTGVuZ3RoLS0pIHtcbiAgICAgICAgICBhcmdzW2xlZnRJbmRleCsrXSA9IGFyZ3VtZW50c1srK2FyZ3NJbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KGlzQmluZCA/IHRoaXNBcmcgOiB0aGlzLCBhcmdzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB3cmFwcGVyO1xuICAgIH1cbiAgICBmdW5jdGlvbiBlcXVhbEFycmF5cyhhcnJheSwgb3RoZXIsIGVxdWFsRnVuYywgY3VzdG9taXplciwgYml0bWFzaywgc3RhY2spIHtcbiAgICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICAgIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBQQVJUSUFMX0NPTVBBUkVfRkxBRyxcbiAgICAgICAgICBpc1Vub3JkZXJlZCA9IGJpdG1hc2sgJiBVTk9SREVSRURfQ09NUEFSRV9GTEFHLFxuICAgICAgICAgIGFyckxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgICAgICBvdGhMZW5ndGggPSBvdGhlci5sZW5ndGg7XG4gICAgICBpZiAoYXJyTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhKGlzUGFydGlhbCAmJiBvdGhMZW5ndGggPiBhcnJMZW5ndGgpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHZhciByZXN1bHQgPSB0cnVlO1xuICAgICAgd2hpbGUgKCsraW5kZXggPCBhcnJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGFyclZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF07XG4gICAgICAgIHZhciBjb21wYXJlZDtcbiAgICAgICAgaWYgKGNvbXBhcmVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoY29tcGFyZWQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNVbm9yZGVyZWQpIHtcbiAgICAgICAgICBpZiAoIWJhc2VTb21lKG90aGVyLCBmdW5jdGlvbihvdGhWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBjdXN0b21pemVyLCBiaXRtYXNrLCBzdGFjayk7XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCEoYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGN1c3RvbWl6ZXIsIGJpdG1hc2ssIHN0YWNrKSkpIHtcbiAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCB0YWcsIGVxdWFsRnVuYywgY3VzdG9taXplciwgYml0bWFzaywgc3RhY2spIHtcbiAgICAgIHN3aXRjaCAodGFnKSB7XG4gICAgICAgIGNhc2UgYm9vbFRhZzpcbiAgICAgICAgY2FzZSBkYXRlVGFnOlxuICAgICAgICAgIHJldHVybiArb2JqZWN0ID09ICtvdGhlcjtcbiAgICAgICAgY2FzZSBlcnJvclRhZzpcbiAgICAgICAgICByZXR1cm4gb2JqZWN0Lm5hbWUgPT0gb3RoZXIubmFtZSAmJiBvYmplY3QubWVzc2FnZSA9PSBvdGhlci5tZXNzYWdlO1xuICAgICAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgICAgICByZXR1cm4gKG9iamVjdCAhPSArb2JqZWN0KSA/IG90aGVyICE9ICtvdGhlciA6IG9iamVjdCA9PSArb3RoZXI7XG4gICAgICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgICAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgICAgICByZXR1cm4gb2JqZWN0ID09IChvdGhlciArICcnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGVxdWFsRnVuYywgY3VzdG9taXplciwgYml0bWFzaywgc3RhY2spIHtcbiAgICAgIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgUEFSVElBTF9DT01QQVJFX0ZMQUcsXG4gICAgICAgICAgb2JqUHJvcHMgPSBrZXlzKG9iamVjdCksXG4gICAgICAgICAgb2JqTGVuZ3RoID0gb2JqUHJvcHMubGVuZ3RoLFxuICAgICAgICAgIG90aFByb3BzID0ga2V5cyhvdGhlciksXG4gICAgICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuICAgICAgaWYgKG9iakxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIWlzUGFydGlhbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB2YXIgaW5kZXggPSBvYmpMZW5ndGg7XG4gICAgICB3aGlsZSAoaW5kZXgtLSkge1xuICAgICAgICB2YXIga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgICAgICBpZiAoIShpc1BhcnRpYWwgPyBrZXkgaW4gb3RoZXIgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCBrZXkpKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIHJlc3VsdCA9IHRydWU7XG4gICAgICB2YXIgc2tpcEN0b3IgPSBpc1BhcnRpYWw7XG4gICAgICB3aGlsZSAoKytpbmRleCA8IG9iakxlbmd0aCkge1xuICAgICAgICBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgICAgIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltrZXldO1xuICAgICAgICB2YXIgY29tcGFyZWQ7XG4gICAgICAgIGlmICghKGNvbXBhcmVkID09PSB1bmRlZmluZWQgPyAob2JqVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhvYmpWYWx1ZSwgb3RoVmFsdWUsIGN1c3RvbWl6ZXIsIGJpdG1hc2ssIHN0YWNrKSkgOiBjb21wYXJlZCkpIHtcbiAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBza2lwQ3RvciB8fCAoc2tpcEN0b3IgPSBrZXkgPT0gJ2NvbnN0cnVjdG9yJyk7XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0ICYmICFza2lwQ3Rvcikge1xuICAgICAgICB2YXIgb2JqQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaWYgKG9iakN0b3IgIT0gb3RoQ3RvciAmJiAoJ2NvbnN0cnVjdG9yJyBpbiBvYmplY3QgJiYgJ2NvbnN0cnVjdG9yJyBpbiBvdGhlcikgJiYgISh0eXBlb2Ygb2JqQ3RvciA9PSAnZnVuY3Rpb24nICYmIG9iakN0b3IgaW5zdGFuY2VvZiBvYmpDdG9yICYmIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHZhciBnZXRMZW5ndGggPSBiYXNlUHJvcGVydHkoJ2xlbmd0aCcpO1xuICAgIGZ1bmN0aW9uIGluZGV4S2V5cyhvYmplY3QpIHtcbiAgICAgIHZhciBsZW5ndGggPSBvYmplY3QgPyBvYmplY3QubGVuZ3RoIDogdW5kZWZpbmVkO1xuICAgICAgaWYgKGlzTGVuZ3RoKGxlbmd0aCkgJiYgKGlzQXJyYXkob2JqZWN0KSB8fCBpc1N0cmluZyhvYmplY3QpIHx8IGlzQXJndW1lbnRzKG9iamVjdCkpKSB7XG4gICAgICAgIHJldHVybiBiYXNlVGltZXMobGVuZ3RoLCBTdHJpbmcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzRmxhdHRlbmFibGUodmFsdWUpIHtcbiAgICAgIHJldHVybiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkgJiYgKGlzQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gICAgICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuICAgICAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbiAgICB9XG4gICAgZnVuY3Rpb24gY29tcGFjdChhcnJheSkge1xuICAgICAgcmV0dXJuIGJhc2VGaWx0ZXIoYXJyYXksIEJvb2xlYW4pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjb25jYXQoKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgICAgICBhcnJheSA9IGNhc3RBcnJheShhcmd1bWVudHNbMF0pO1xuICAgICAgaWYgKGxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIGxlbmd0aCA/IGNvcHlBcnJheShhcnJheSkgOiBbXTtcbiAgICAgIH1cbiAgICAgIHZhciBhcmdzID0gQXJyYXkobGVuZ3RoIC0gMSk7XG4gICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgYXJnc1tsZW5ndGggLSAxXSA9IGFyZ3VtZW50c1tsZW5ndGhdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFycmF5Q29uY2F0KGFycmF5LCBiYXNlRmxhdHRlbihhcmdzLCAxKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXkpIHtcbiAgICAgIHZhciBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG4gICAgICByZXR1cm4gbGVuZ3RoID8gYmFzZUZsYXR0ZW4oYXJyYXksIDEpIDogW107XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZsYXR0ZW5EZWVwKGFycmF5KSB7XG4gICAgICB2YXIgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuICAgICAgcmV0dXJuIGxlbmd0aCA/IGJhc2VGbGF0dGVuKGFycmF5LCBJTkZJTklUWSkgOiBbXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGVhZChhcnJheSkge1xuICAgICAgcmV0dXJuIChhcnJheSAmJiBhcnJheS5sZW5ndGgpID8gYXJyYXlbMF0gOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgICAgIHZhciBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG4gICAgICBpZiAodHlwZW9mIGZyb21JbmRleCA9PSAnbnVtYmVyJykge1xuICAgICAgICBmcm9tSW5kZXggPSBmcm9tSW5kZXggPCAwID8gbmF0aXZlTWF4KGxlbmd0aCArIGZyb21JbmRleCwgMCkgOiBmcm9tSW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmcm9tSW5kZXggPSAwO1xuICAgICAgfVxuICAgICAgdmFyIGluZGV4ID0gKGZyb21JbmRleCB8fCAwKSAtIDEsXG4gICAgICAgICAgaXNSZWZsZXhpdmUgPSB2YWx1ZSA9PT0gdmFsdWU7XG4gICAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICB2YXIgb3RoZXIgPSBhcnJheVtpbmRleF07XG4gICAgICAgIGlmICgoaXNSZWZsZXhpdmUgPyBvdGhlciA9PT0gdmFsdWUgOiBvdGhlciAhPT0gb3RoZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxhc3QoYXJyYXkpIHtcbiAgICAgIHZhciBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG4gICAgICByZXR1cm4gbGVuZ3RoID8gYXJyYXlbbGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNsaWNlKGFycmF5LCBzdGFydCwgZW5kKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuICAgICAgc3RhcnQgPSBzdGFydCA9PSBudWxsID8gMCA6ICtzdGFydDtcbiAgICAgIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogK2VuZDtcbiAgICAgIHJldHVybiBsZW5ndGggPyBiYXNlU2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIDogW107XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoYWluKHZhbHVlKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gbG9kYXNoKHZhbHVlKTtcbiAgICAgIHJlc3VsdC5fX2NoYWluX18gPSB0cnVlO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGFwKHZhbHVlLCBpbnRlcmNlcHRvcikge1xuICAgICAgaW50ZXJjZXB0b3IodmFsdWUpO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0aHJ1KHZhbHVlLCBpbnRlcmNlcHRvcikge1xuICAgICAgcmV0dXJuIGludGVyY2VwdG9yKHZhbHVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gd3JhcHBlckNoYWluKCkge1xuICAgICAgcmV0dXJuIGNoYWluKHRoaXMpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB3cmFwcGVyVmFsdWUoKSB7XG4gICAgICByZXR1cm4gYmFzZVdyYXBwZXJWYWx1ZSh0aGlzLl9fd3JhcHBlZF9fLCB0aGlzLl9fYWN0aW9uc19fKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZXZlcnkoY29sbGVjdGlvbiwgcHJlZGljYXRlLCBndWFyZCkge1xuICAgICAgcHJlZGljYXRlID0gZ3VhcmQgPyB1bmRlZmluZWQgOiBwcmVkaWNhdGU7XG4gICAgICByZXR1cm4gYmFzZUV2ZXJ5KGNvbGxlY3Rpb24sIGJhc2VJdGVyYXRlZShwcmVkaWNhdGUpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmlsdGVyKGNvbGxlY3Rpb24sIHByZWRpY2F0ZSkge1xuICAgICAgcmV0dXJuIGJhc2VGaWx0ZXIoY29sbGVjdGlvbiwgYmFzZUl0ZXJhdGVlKHByZWRpY2F0ZSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmaW5kKGNvbGxlY3Rpb24sIHByZWRpY2F0ZSkge1xuICAgICAgcmV0dXJuIGJhc2VGaW5kKGNvbGxlY3Rpb24sIGJhc2VJdGVyYXRlZShwcmVkaWNhdGUpLCBiYXNlRWFjaCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZvckVhY2goY29sbGVjdGlvbiwgaXRlcmF0ZWUpIHtcbiAgICAgIHJldHVybiBiYXNlRWFjaChjb2xsZWN0aW9uLCBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbWFwKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gICAgICByZXR1cm4gYmFzZU1hcChjb2xsZWN0aW9uLCBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVkdWNlKGNvbGxlY3Rpb24sIGl0ZXJhdGVlLCBhY2N1bXVsYXRvcikge1xuICAgICAgcmV0dXJuIGJhc2VSZWR1Y2UoY29sbGVjdGlvbiwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlKSwgYWNjdW11bGF0b3IsIGFyZ3VtZW50cy5sZW5ndGggPCAzLCBiYXNlRWFjaCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNpemUoY29sbGVjdGlvbikge1xuICAgICAgaWYgKGNvbGxlY3Rpb24gPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIGNvbGxlY3Rpb24gPSBpc0FycmF5TGlrZShjb2xsZWN0aW9uKSA/IGNvbGxlY3Rpb24gOiBrZXlzKGNvbGxlY3Rpb24pO1xuICAgICAgcmV0dXJuIGNvbGxlY3Rpb24ubGVuZ3RoO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzb21lKGNvbGxlY3Rpb24sIHByZWRpY2F0ZSwgZ3VhcmQpIHtcbiAgICAgIHByZWRpY2F0ZSA9IGd1YXJkID8gdW5kZWZpbmVkIDogcHJlZGljYXRlO1xuICAgICAgcmV0dXJuIGJhc2VTb21lKGNvbGxlY3Rpb24sIGJhc2VJdGVyYXRlZShwcmVkaWNhdGUpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc29ydEJ5KGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgaXRlcmF0ZWUgPSBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUpO1xuICAgICAgcmV0dXJuIGJhc2VNYXAoYmFzZU1hcChjb2xsZWN0aW9uLCBmdW5jdGlvbih2YWx1ZSwga2V5LCBjb2xsZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgJ3ZhbHVlJzogdmFsdWUsXG4gICAgICAgICAgJ2luZGV4JzogaW5kZXgrKyxcbiAgICAgICAgICAnY3JpdGVyaWEnOiBpdGVyYXRlZSh2YWx1ZSwga2V5LCBjb2xsZWN0aW9uKVxuICAgICAgICB9O1xuICAgICAgfSkuc29ydChmdW5jdGlvbihvYmplY3QsIG90aGVyKSB7XG4gICAgICAgIHJldHVybiBjb21wYXJlQXNjZW5kaW5nKG9iamVjdC5jcml0ZXJpYSwgb3RoZXIuY3JpdGVyaWEpIHx8IChvYmplY3QuaW5kZXggLSBvdGhlci5pbmRleCk7XG4gICAgICB9KSwgYmFzZVByb3BlcnR5KCd2YWx1ZScpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYmVmb3JlKG4sIGZ1bmMpIHtcbiAgICAgIHZhciByZXN1bHQ7XG4gICAgICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gICAgICB9XG4gICAgICBuID0gdG9JbnRlZ2VyKG4pO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoLS1uID4gMCkge1xuICAgICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobiA8PSAxKSB7XG4gICAgICAgICAgZnVuYyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfTtcbiAgICB9XG4gICAgdmFyIGJpbmQgPSByZXN0KGZ1bmN0aW9uKGZ1bmMsIHRoaXNBcmcsIHBhcnRpYWxzKSB7XG4gICAgICByZXR1cm4gY3JlYXRlUGFydGlhbFdyYXBwZXIoZnVuYywgQklORF9GTEFHIHwgUEFSVElBTF9GTEFHLCB0aGlzQXJnLCBwYXJ0aWFscyk7XG4gICAgfSk7XG4gICAgdmFyIGRlZmVyID0gcmVzdChmdW5jdGlvbihmdW5jLCBhcmdzKSB7XG4gICAgICByZXR1cm4gYmFzZURlbGF5KGZ1bmMsIDEsIGFyZ3MpO1xuICAgIH0pO1xuICAgIHZhciBkZWxheSA9IHJlc3QoZnVuY3Rpb24oZnVuYywgd2FpdCwgYXJncykge1xuICAgICAgcmV0dXJuIGJhc2VEZWxheShmdW5jLCB0b051bWJlcih3YWl0KSB8fCAwLCBhcmdzKTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBuZWdhdGUocHJlZGljYXRlKSB7XG4gICAgICBpZiAodHlwZW9mIHByZWRpY2F0ZSAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICFwcmVkaWNhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uY2UoZnVuYykge1xuICAgICAgcmV0dXJuIGJlZm9yZSgyLCBmdW5jKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzdChmdW5jLCBzdGFydCkge1xuICAgICAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICAgICAgfVxuICAgICAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogdG9JbnRlZ2VyKHN0YXJ0KSwgMCk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgICAgIGFycmF5ID0gQXJyYXkobGVuZ3RoKTtcbiAgICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICBhcnJheVtpbmRleF0gPSBhcmdzW3N0YXJ0ICsgaW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvdGhlckFyZ3MgPSBBcnJheShzdGFydCArIDEpO1xuICAgICAgICBpbmRleCA9IC0xO1xuICAgICAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIG90aGVyQXJnc1tzdGFydF0gPSBhcnJheTtcbiAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgb3RoZXJBcmdzKTtcbiAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNhc3RBcnJheSgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICB2YXIgdmFsdWUgPSBhcmd1bWVudHNbMF07XG4gICAgICByZXR1cm4gaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsb25lKHZhbHVlKSB7XG4gICAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXNBcnJheSh2YWx1ZSkgPyBjb3B5QXJyYXkodmFsdWUpIDogY29weU9iamVjdCh2YWx1ZSwga2V5cyh2YWx1ZSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBndCh2YWx1ZSwgb3RoZXIpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA+IG90aGVyO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiYgKCFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgfHwgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJnc1RhZyk7XG4gICAgfVxuICAgIHZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbiAgICBmdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgoZ2V0TGVuZ3RoKHZhbHVlKSkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0Jvb2xlYW4odmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gZmFsc2UgfHwgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYm9vbFRhZyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gZGF0ZVRhZztcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZSkge1xuICAgICAgaWYgKGlzQXJyYXlMaWtlKHZhbHVlKSAmJiAoaXNBcnJheSh2YWx1ZSkgfHwgaXNTdHJpbmcodmFsdWUpIHx8IGlzRnVuY3Rpb24odmFsdWUuc3BsaWNlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkpKSB7XG4gICAgICAgIHJldHVybiAhdmFsdWUubGVuZ3RoO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gIShub25FbnVtU2hhZG93cyAmJiBrZXlzKHZhbHVlKS5sZW5ndGgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0VxdWFsKHZhbHVlLCBvdGhlcikge1xuICAgICAgcmV0dXJuIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzRmluaXRlKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmIG5hdGl2ZUlzRmluaXRlKHZhbHVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIHRhZyA9IGlzT2JqZWN0KHZhbHVlKSA/IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gICAgICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiYgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgICAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gICAgICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgICAgIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JztcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNOYU4odmFsdWUpIHtcbiAgICAgIHJldHVybiBpc051bWJlcih2YWx1ZSkgJiYgdmFsdWUgIT0gK3ZhbHVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc051bGwodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gbnVtYmVyVGFnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNSZWdFeHAodmFsdWUpIHtcbiAgICAgIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gcmVnZXhwVGFnO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCAoIWlzQXJyYXkodmFsdWUpICYmIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3RyaW5nVGFnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBmdW5jdGlvbiBsdCh2YWx1ZSwgb3RoZXIpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA8IG90aGVyO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0b0FycmF5KHZhbHVlKSB7XG4gICAgICBpZiAoIWlzQXJyYXlMaWtlKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWVzKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPyBjb3B5QXJyYXkodmFsdWUpIDogW107XG4gICAgfVxuICAgIHZhciB0b0ludGVnZXIgPSBOdW1iZXI7XG4gICAgdmFyIHRvTnVtYmVyID0gTnVtYmVyO1xuICAgIGZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiAodmFsdWUgKyAnJyk7XG4gICAgfVxuICAgIHZhciBhc3NpZ24gPSBjcmVhdGVBc3NpZ25lcihmdW5jdGlvbihvYmplY3QsIHNvdXJjZSkge1xuICAgICAgY29weU9iamVjdChzb3VyY2UsIGtleXMoc291cmNlKSwgb2JqZWN0KTtcbiAgICB9KTtcbiAgICB2YXIgYXNzaWduSW4gPSBjcmVhdGVBc3NpZ25lcihmdW5jdGlvbihvYmplY3QsIHNvdXJjZSkge1xuICAgICAgY29weU9iamVjdChzb3VyY2UsIGtleXNJbihzb3VyY2UpLCBvYmplY3QpO1xuICAgIH0pO1xuICAgIHZhciBhc3NpZ25JbldpdGggPSBjcmVhdGVBc3NpZ25lcihmdW5jdGlvbihvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIpIHtcbiAgICAgIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzSW4oc291cmNlKSwgb2JqZWN0LCBjdXN0b21pemVyKTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBjcmVhdGUocHJvdG90eXBlLCBwcm9wZXJ0aWVzKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gYmFzZUNyZWF0ZShwcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIHByb3BlcnRpZXMgPyBhc3NpZ24ocmVzdWx0LCBwcm9wZXJ0aWVzKSA6IHJlc3VsdDtcbiAgICB9XG4gICAgdmFyIGRlZmF1bHRzID0gcmVzdChmdW5jdGlvbihhcmdzKSB7XG4gICAgICBhcmdzLnB1c2godW5kZWZpbmVkLCBhc3NpZ25JbkRlZmF1bHRzKTtcbiAgICAgIHJldHVybiBhc3NpZ25JbldpdGguYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBoYXMob2JqZWN0LCBwYXRoKSB7XG4gICAgICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHBhdGgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICAgICAgdmFyIGlzUHJvdG8gPSBpc1Byb3RvdHlwZShvYmplY3QpO1xuICAgICAgaWYgKCEoaXNQcm90byB8fCBpc0FycmF5TGlrZShvYmplY3QpKSkge1xuICAgICAgICByZXR1cm4gYmFzZUtleXMob2JqZWN0KTtcbiAgICAgIH1cbiAgICAgIHZhciBpbmRleGVzID0gaW5kZXhLZXlzKG9iamVjdCksXG4gICAgICAgICAgc2tpcEluZGV4ZXMgPSAhIWluZGV4ZXMsXG4gICAgICAgICAgcmVzdWx0ID0gaW5kZXhlcyB8fCBbXSxcbiAgICAgICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgIShza2lwSW5kZXhlcyAmJiAoa2V5ID09ICdsZW5ndGgnIHx8IGlzSW5kZXgoa2V5LCBsZW5ndGgpKSkgJiYgIShpc1Byb3RvICYmIGtleSA9PSAnY29uc3RydWN0b3InKSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICAgIGlzUHJvdG8gPSBpc1Byb3RvdHlwZShvYmplY3QpLFxuICAgICAgICAgIHByb3BzID0gYmFzZUtleXNJbihvYmplY3QpLFxuICAgICAgICAgIHByb3BzTGVuZ3RoID0gcHJvcHMubGVuZ3RoLFxuICAgICAgICAgIGluZGV4ZXMgPSBpbmRleEtleXMob2JqZWN0KSxcbiAgICAgICAgICBza2lwSW5kZXhlcyA9ICEhaW5kZXhlcyxcbiAgICAgICAgICByZXN1bHQgPSBpbmRleGVzIHx8IFtdLFxuICAgICAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICB3aGlsZSAoKytpbmRleCA8IHByb3BzTGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG4gICAgICAgIGlmICghKHNraXBJbmRleGVzICYmIChrZXkgPT0gJ2xlbmd0aCcgfHwgaXNJbmRleChrZXksIGxlbmd0aCkpKSAmJiAhKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgdmFyIHBpY2sgPSByZXN0KGZ1bmN0aW9uKG9iamVjdCwgcHJvcHMpIHtcbiAgICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHt9IDogYmFzZVBpY2sob2JqZWN0LCBiYXNlRmxhdHRlbihwcm9wcywgMSkpO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHJlc3VsdChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgdmFyIHZhbHVlID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3RbcGF0aF07XG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpc0Z1bmN0aW9uKHZhbHVlKSA/IHZhbHVlLmNhbGwob2JqZWN0KSA6IHZhbHVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiB2YWx1ZXMob2JqZWN0KSB7XG4gICAgICByZXR1cm4gb2JqZWN0ID8gYmFzZVZhbHVlcyhvYmplY3QsIGtleXMob2JqZWN0KSkgOiBbXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZXNjYXBlKHN0cmluZykge1xuICAgICAgc3RyaW5nID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgICAgIHJldHVybiAoc3RyaW5nICYmIHJlSGFzVW5lc2NhcGVkSHRtbC50ZXN0KHN0cmluZykpID8gc3RyaW5nLnJlcGxhY2UocmVVbmVzY2FwZWRIdG1sLCBlc2NhcGVIdG1sQ2hhcikgOiBzdHJpbmc7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHZhciBpdGVyYXRlZSA9IGJhc2VJdGVyYXRlZTtcbiAgICBmdW5jdGlvbiBtYXRjaGVzKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIGJhc2VNYXRjaGVzKGFzc2lnbih7fSwgc291cmNlKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1peGluKG9iamVjdCwgc291cmNlLCBvcHRpb25zKSB7XG4gICAgICB2YXIgcHJvcHMgPSBrZXlzKHNvdXJjZSksXG4gICAgICAgICAgbWV0aG9kTmFtZXMgPSBiYXNlRnVuY3Rpb25zKHNvdXJjZSwgcHJvcHMpO1xuICAgICAgaWYgKG9wdGlvbnMgPT0gbnVsbCAmJiAhKGlzT2JqZWN0KHNvdXJjZSkgJiYgKG1ldGhvZE5hbWVzLmxlbmd0aCB8fCAhcHJvcHMubGVuZ3RoKSkpIHtcbiAgICAgICAgb3B0aW9ucyA9IHNvdXJjZTtcbiAgICAgICAgc291cmNlID0gb2JqZWN0O1xuICAgICAgICBvYmplY3QgPSB0aGlzO1xuICAgICAgICBtZXRob2ROYW1lcyA9IGJhc2VGdW5jdGlvbnMoc291cmNlLCBrZXlzKHNvdXJjZSkpO1xuICAgICAgfVxuICAgICAgdmFyIGNoYWluID0gIShpc09iamVjdChvcHRpb25zKSAmJiAnY2hhaW4nIGluIG9wdGlvbnMpIHx8ICEhb3B0aW9ucy5jaGFpbixcbiAgICAgICAgICBpc0Z1bmMgPSBpc0Z1bmN0aW9uKG9iamVjdCk7XG4gICAgICBiYXNlRWFjaChtZXRob2ROYW1lcywgZnVuY3Rpb24obWV0aG9kTmFtZSkge1xuICAgICAgICB2YXIgZnVuYyA9IHNvdXJjZVttZXRob2ROYW1lXTtcbiAgICAgICAgb2JqZWN0W21ldGhvZE5hbWVdID0gZnVuYztcbiAgICAgICAgaWYgKGlzRnVuYykge1xuICAgICAgICAgIG9iamVjdC5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBjaGFpbkFsbCA9IHRoaXMuX19jaGFpbl9fO1xuICAgICAgICAgICAgaWYgKGNoYWluIHx8IGNoYWluQWxsKSB7XG4gICAgICAgICAgICAgIHZhciByZXN1bHQgPSBvYmplY3QodGhpcy5fX3dyYXBwZWRfXyksXG4gICAgICAgICAgICAgICAgICBhY3Rpb25zID0gcmVzdWx0Ll9fYWN0aW9uc19fID0gY29weUFycmF5KHRoaXMuX19hY3Rpb25zX18pO1xuICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgICdmdW5jJzogZnVuYyxcbiAgICAgICAgICAgICAgICAnYXJncyc6IGFyZ3VtZW50cyxcbiAgICAgICAgICAgICAgICAndGhpc0FyZyc6IG9iamVjdFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmVzdWx0Ll9fY2hhaW5fXyA9IGNoYWluQWxsO1xuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkob2JqZWN0LCBhcnJheVB1c2goW3RoaXMudmFsdWUoKV0sIGFyZ3VtZW50cykpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gbm9Db25mbGljdCgpIHtcbiAgICAgIGlmIChyb290Ll8gPT09IHRoaXMpIHtcbiAgICAgICAgcm9vdC5fID0gb2xkRGFzaDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBub29wKCkge31cbiAgICBmdW5jdGlvbiB1bmlxdWVJZChwcmVmaXgpIHtcbiAgICAgIHZhciBpZCA9ICsraWRDb3VudGVyO1xuICAgICAgcmV0dXJuIHRvU3RyaW5nKHByZWZpeCkgKyBpZDtcbiAgICB9XG4gICAgZnVuY3Rpb24gbWF4KGFycmF5KSB7XG4gICAgICByZXR1cm4gKGFycmF5ICYmIGFycmF5Lmxlbmd0aCkgPyBiYXNlRXh0cmVtdW0oYXJyYXksIGlkZW50aXR5LCBndCkgOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1pbihhcnJheSkge1xuICAgICAgcmV0dXJuIChhcnJheSAmJiBhcnJheS5sZW5ndGgpID8gYmFzZUV4dHJlbXVtKGFycmF5LCBpZGVudGl0eSwgbHQpIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICBsb2Rhc2guYXNzaWduSW4gPSBhc3NpZ25JbjtcbiAgICBsb2Rhc2guYmVmb3JlID0gYmVmb3JlO1xuICAgIGxvZGFzaC5iaW5kID0gYmluZDtcbiAgICBsb2Rhc2guY2hhaW4gPSBjaGFpbjtcbiAgICBsb2Rhc2guY29tcGFjdCA9IGNvbXBhY3Q7XG4gICAgbG9kYXNoLmNvbmNhdCA9IGNvbmNhdDtcbiAgICBsb2Rhc2guY3JlYXRlID0gY3JlYXRlO1xuICAgIGxvZGFzaC5kZWZhdWx0cyA9IGRlZmF1bHRzO1xuICAgIGxvZGFzaC5kZWZlciA9IGRlZmVyO1xuICAgIGxvZGFzaC5kZWxheSA9IGRlbGF5O1xuICAgIGxvZGFzaC5maWx0ZXIgPSBmaWx0ZXI7XG4gICAgbG9kYXNoLmZsYXR0ZW4gPSBmbGF0dGVuO1xuICAgIGxvZGFzaC5mbGF0dGVuRGVlcCA9IGZsYXR0ZW5EZWVwO1xuICAgIGxvZGFzaC5pdGVyYXRlZSA9IGl0ZXJhdGVlO1xuICAgIGxvZGFzaC5rZXlzID0ga2V5cztcbiAgICBsb2Rhc2gubWFwID0gbWFwO1xuICAgIGxvZGFzaC5tYXRjaGVzID0gbWF0Y2hlcztcbiAgICBsb2Rhc2gubWl4aW4gPSBtaXhpbjtcbiAgICBsb2Rhc2gubmVnYXRlID0gbmVnYXRlO1xuICAgIGxvZGFzaC5vbmNlID0gb25jZTtcbiAgICBsb2Rhc2gucGljayA9IHBpY2s7XG4gICAgbG9kYXNoLnNsaWNlID0gc2xpY2U7XG4gICAgbG9kYXNoLnNvcnRCeSA9IHNvcnRCeTtcbiAgICBsb2Rhc2gudGFwID0gdGFwO1xuICAgIGxvZGFzaC50aHJ1ID0gdGhydTtcbiAgICBsb2Rhc2gudG9BcnJheSA9IHRvQXJyYXk7XG4gICAgbG9kYXNoLnZhbHVlcyA9IHZhbHVlcztcbiAgICBsb2Rhc2guZXh0ZW5kID0gYXNzaWduSW47XG4gICAgbWl4aW4obG9kYXNoLCBsb2Rhc2gpO1xuICAgIGxvZGFzaC5jbG9uZSA9IGNsb25lO1xuICAgIGxvZGFzaC5lc2NhcGUgPSBlc2NhcGU7XG4gICAgbG9kYXNoLmV2ZXJ5ID0gZXZlcnk7XG4gICAgbG9kYXNoLmZpbmQgPSBmaW5kO1xuICAgIGxvZGFzaC5mb3JFYWNoID0gZm9yRWFjaDtcbiAgICBsb2Rhc2guaGFzID0gaGFzO1xuICAgIGxvZGFzaC5oZWFkID0gaGVhZDtcbiAgICBsb2Rhc2guaWRlbnRpdHkgPSBpZGVudGl0eTtcbiAgICBsb2Rhc2guaW5kZXhPZiA9IGluZGV4T2Y7XG4gICAgbG9kYXNoLmlzQXJndW1lbnRzID0gaXNBcmd1bWVudHM7XG4gICAgbG9kYXNoLmlzQXJyYXkgPSBpc0FycmF5O1xuICAgIGxvZGFzaC5pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG4gICAgbG9kYXNoLmlzRGF0ZSA9IGlzRGF0ZTtcbiAgICBsb2Rhc2guaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgbG9kYXNoLmlzRXF1YWwgPSBpc0VxdWFsO1xuICAgIGxvZGFzaC5pc0Zpbml0ZSA9IGlzRmluaXRlO1xuICAgIGxvZGFzaC5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbiAgICBsb2Rhc2guaXNOYU4gPSBpc05hTjtcbiAgICBsb2Rhc2guaXNOdWxsID0gaXNOdWxsO1xuICAgIGxvZGFzaC5pc051bWJlciA9IGlzTnVtYmVyO1xuICAgIGxvZGFzaC5pc09iamVjdCA9IGlzT2JqZWN0O1xuICAgIGxvZGFzaC5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuICAgIGxvZGFzaC5pc1N0cmluZyA9IGlzU3RyaW5nO1xuICAgIGxvZGFzaC5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuICAgIGxvZGFzaC5sYXN0ID0gbGFzdDtcbiAgICBsb2Rhc2gubWF4ID0gbWF4O1xuICAgIGxvZGFzaC5taW4gPSBtaW47XG4gICAgbG9kYXNoLm5vQ29uZmxpY3QgPSBub0NvbmZsaWN0O1xuICAgIGxvZGFzaC5ub29wID0gbm9vcDtcbiAgICBsb2Rhc2gucmVkdWNlID0gcmVkdWNlO1xuICAgIGxvZGFzaC5yZXN1bHQgPSByZXN1bHQ7XG4gICAgbG9kYXNoLnNpemUgPSBzaXplO1xuICAgIGxvZGFzaC5zb21lID0gc29tZTtcbiAgICBsb2Rhc2gudW5pcXVlSWQgPSB1bmlxdWVJZDtcbiAgICBsb2Rhc2guZWFjaCA9IGZvckVhY2g7XG4gICAgbG9kYXNoLmZpcnN0ID0gaGVhZDtcbiAgICBtaXhpbihsb2Rhc2gsIChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzb3VyY2UgPSB7fTtcbiAgICAgIGJhc2VGb3JPd24obG9kYXNoLCBmdW5jdGlvbihmdW5jLCBtZXRob2ROYW1lKSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcGVydHkuY2FsbChsb2Rhc2gucHJvdG90eXBlLCBtZXRob2ROYW1lKSkge1xuICAgICAgICAgIHNvdXJjZVttZXRob2ROYW1lXSA9IGZ1bmM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9KCkpLCB7J2NoYWluJzogZmFsc2V9KTtcbiAgICBsb2Rhc2guVkVSU0lPTiA9IFZFUlNJT047XG4gICAgYmFzZUVhY2goWydwb3AnLCAnam9pbicsICdyZXBsYWNlJywgJ3JldmVyc2UnLCAnc3BsaXQnLCAncHVzaCcsICdzaGlmdCcsICdzb3J0JywgJ3NwbGljZScsICd1bnNoaWZ0J10sIGZ1bmN0aW9uKG1ldGhvZE5hbWUpIHtcbiAgICAgIHZhciBmdW5jID0gKC9eKD86cmVwbGFjZXxzcGxpdCkkLy50ZXN0KG1ldGhvZE5hbWUpID8gU3RyaW5nLnByb3RvdHlwZSA6IGFycmF5UHJvdG8pW21ldGhvZE5hbWVdLFxuICAgICAgICAgIGNoYWluTmFtZSA9IC9eKD86cHVzaHxzb3J0fHVuc2hpZnQpJC8udGVzdChtZXRob2ROYW1lKSA/ICd0YXAnIDogJ3RocnUnLFxuICAgICAgICAgIHJldFVud3JhcHBlZCA9IC9eKD86cG9wfGpvaW58cmVwbGFjZXxzaGlmdCkkLy50ZXN0KG1ldGhvZE5hbWUpO1xuICAgICAgbG9kYXNoLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgaWYgKHJldFVud3JhcHBlZCAmJiAhdGhpcy5fX2NoYWluX18pIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlKCk7XG4gICAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFtdLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpc1tjaGFpbk5hbWVdKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFtdLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH0pO1xuICAgIGxvZGFzaC5wcm90b3R5cGUudG9KU09OID0gbG9kYXNoLnByb3RvdHlwZS52YWx1ZU9mID0gbG9kYXNoLnByb3RvdHlwZS52YWx1ZSA9IHdyYXBwZXJWYWx1ZTtcbiAgICAoZnJlZVdpbmRvdyB8fCBmcmVlU2VsZiB8fCB7fSkuXyA9IGxvZGFzaDtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcbiAgICAgIGRlZmluZShmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGxvZGFzaDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoZnJlZUV4cG9ydHMgJiYgZnJlZU1vZHVsZSkge1xuICAgICAgaWYgKG1vZHVsZUV4cG9ydHMpIHtcbiAgICAgICAgKGZyZWVNb2R1bGUuZXhwb3J0cyA9IGxvZGFzaCkuXyA9IGxvZGFzaDtcbiAgICAgIH1cbiAgICAgIGZyZWVFeHBvcnRzLl8gPSBsb2Rhc2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvb3QuXyA9IGxvZGFzaDtcbiAgICB9XG4gIH0uY2FsbCh0aGlzKSk7XG59KShyZXF1aXJlKCdwcm9jZXNzJykpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
