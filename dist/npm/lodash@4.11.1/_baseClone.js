'use strict';

System.register([], function (_export, _context) {
  var Stack, arrayEach, assignValue, baseAssign, cloneBuffer, copyArray, copySymbols, getAllKeys, getTag, initCloneArray, initCloneByTag, initCloneObject, isArray, isBuffer, isHostObject, isObject, keys, argsTag, arrayTag, boolTag, dateTag, errorTag, funcTag, genTag, mapTag, numberTag, objectTag, regexpTag, setTag, stringTag, symbolTag, weakMapTag, arrayBufferTag, dataViewTag, float32Tag, float64Tag, int8Tag, int16Tag, int32Tag, uint8Tag, uint8ClampedTag, uint16Tag, uint32Tag, cloneableTags;

  function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
    var result;
    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== undefined) {
      return result;
    }
    if (!isObject(value)) {
      return value;
    }
    var isArr = isArray(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag(value),
          isFunc = tag == funcTag || tag == genTag;
      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag || tag == argsTag || isFunc && !object) {
        if (isHostObject(value)) {
          return object ? value : {};
        }
        result = initCloneObject(isFunc ? {} : value);
        if (!isDeep) {
          return copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, baseClone, isDeep);
      }
    }
    stack || (stack = new Stack());
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);
    if (!isArr) {
      var props = isFull ? getAllKeys(value) : keys(value);
    }
    arrayEach(props || value, function (subValue, key) {
      if (props) {
        key = subValue;
        subValue = value[key];
      }
      assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
    });
    return result;
  }
  return {
    setters: [],
    execute: function () {
      Stack = require('./_Stack');
      arrayEach = require('./_arrayEach');
      assignValue = require('./_assignValue');
      baseAssign = require('./_baseAssign');
      cloneBuffer = require('./_cloneBuffer');
      copyArray = require('./_copyArray');
      copySymbols = require('./_copySymbols');
      getAllKeys = require('./_getAllKeys');
      getTag = require('./_getTag');
      initCloneArray = require('./_initCloneArray');
      initCloneByTag = require('./_initCloneByTag');
      initCloneObject = require('./_initCloneObject');
      isArray = require('./isArray');
      isBuffer = require('./isBuffer');
      isHostObject = require('./_isHostObject');
      isObject = require('./isObject');
      keys = require('./keys');
      argsTag = '[object Arguments]';
      arrayTag = '[object Array]';
      boolTag = '[object Boolean]';
      dateTag = '[object Date]';
      errorTag = '[object Error]';
      funcTag = '[object Function]';
      genTag = '[object GeneratorFunction]';
      mapTag = '[object Map]';
      numberTag = '[object Number]';
      objectTag = '[object Object]';
      regexpTag = '[object RegExp]';
      setTag = '[object Set]';
      stringTag = '[object String]';
      symbolTag = '[object Symbol]';
      weakMapTag = '[object WeakMap]';
      arrayBufferTag = '[object ArrayBuffer]';
      dataViewTag = '[object DataView]';
      float32Tag = '[object Float32Array]';
      float64Tag = '[object Float64Array]';
      int8Tag = '[object Int8Array]';
      int16Tag = '[object Int16Array]';
      int32Tag = '[object Int32Array]';
      uint8Tag = '[object Uint8Array]';
      uint8ClampedTag = '[object Uint8ClampedArray]';
      uint16Tag = '[object Uint16Array]';
      uint32Tag = '[object Uint32Array]';
      cloneableTags = {};

      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;module.exports = baseClone;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlQ2xvbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUErQ0EsV0FBUyxTQUFULENBQW1CLEtBQW5CLEVBQTBCLE1BQTFCLEVBQWtDLE1BQWxDLEVBQTBDLFVBQTFDLEVBQXNELEdBQXRELEVBQTJELE1BQTNELEVBQW1FLEtBQW5FLEVBQTBFO0FBQ3hFLFFBQUksTUFBSixDQUR3RTtBQUV4RSxRQUFJLFVBQUosRUFBZ0I7QUFDZCxlQUFTLFNBQVMsV0FBVyxLQUFYLEVBQWtCLEdBQWxCLEVBQXVCLE1BQXZCLEVBQStCLEtBQS9CLENBQVQsR0FBaUQsV0FBVyxLQUFYLENBQWpELENBREs7S0FBaEI7QUFHQSxRQUFJLFdBQVcsU0FBWCxFQUFzQjtBQUN4QixhQUFPLE1BQVAsQ0FEd0I7S0FBMUI7QUFHQSxRQUFJLENBQUMsU0FBUyxLQUFULENBQUQsRUFBa0I7QUFDcEIsYUFBTyxLQUFQLENBRG9CO0tBQXRCO0FBR0EsUUFBSSxRQUFRLFFBQVEsS0FBUixDQUFSLENBWG9FO0FBWXhFLFFBQUksS0FBSixFQUFXO0FBQ1QsZUFBUyxlQUFlLEtBQWYsQ0FBVCxDQURTO0FBRVQsVUFBSSxDQUFDLE1BQUQsRUFBUztBQUNYLGVBQU8sVUFBVSxLQUFWLEVBQWlCLE1BQWpCLENBQVAsQ0FEVztPQUFiO0tBRkYsTUFLTztBQUNMLFVBQUksTUFBTSxPQUFPLEtBQVAsQ0FBTjtVQUNBLFNBQVMsT0FBTyxPQUFQLElBQWtCLE9BQU8sTUFBUCxDQUYxQjtBQUdMLFVBQUksU0FBUyxLQUFULENBQUosRUFBcUI7QUFDbkIsZUFBTyxZQUFZLEtBQVosRUFBbUIsTUFBbkIsQ0FBUCxDQURtQjtPQUFyQjtBQUdBLFVBQUksT0FBTyxTQUFQLElBQW9CLE9BQU8sT0FBUCxJQUFtQixVQUFVLENBQUMsTUFBRCxFQUFVO0FBQzdELFlBQUksYUFBYSxLQUFiLENBQUosRUFBeUI7QUFDdkIsaUJBQU8sU0FBUyxLQUFULEdBQWlCLEVB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QixjQUFjLFNBQWQsSUFBMkIsY0FBYyxTQUFkLElBQTJCLGNBQWMsTUFBZCxJQUF3QixjQUFjLFNBQWQsSUFBMkIsY0FBYyxTQUFkLElBQTJCLGNBQWMsUUFBZCxJQUEwQixjQUFjLGVBQWQsSUFBaUMsY0FBYyxTQUFkLElBQTJCLGNBQWMsU0FBZCxJQUEyQixJQUEzQjtBQUNwakIsb0JBQWMsUUFBZCxJQUEwQixjQUFjLE9BQWQsSUFBeUIsY0FBYyxVQUFkLElBQTRCLEtBQTVCLENBeURuRCxPQUFPLE9BQVAsR0FBaUIsU0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2Jhc2VDbG9uZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBhcnJheUVhY2ggPSByZXF1aXJlKCcuL19hcnJheUVhY2gnKSxcbiAgICBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgYmFzZUFzc2lnbiA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ24nKSxcbiAgICBjbG9uZUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQnVmZmVyJyksXG4gICAgY29weUFycmF5ID0gcmVxdWlyZSgnLi9fY29weUFycmF5JyksXG4gICAgY29weVN5bWJvbHMgPSByZXF1aXJlKCcuL19jb3B5U3ltYm9scycpLFxuICAgIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaW5pdENsb25lQXJyYXkgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVBcnJheScpLFxuICAgIGluaXRDbG9uZUJ5VGFnID0gcmVxdWlyZSgnLi9faW5pdENsb25lQnlUYWcnKSxcbiAgICBpbml0Q2xvbmVPYmplY3QgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVPYmplY3QnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNIb3N0T2JqZWN0ID0gcmVxdWlyZSgnLi9faXNIb3N0T2JqZWN0JyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcbnZhciBjbG9uZWFibGVUYWdzID0ge307XG5jbG9uZWFibGVUYWdzW2FyZ3NUYWddID0gY2xvbmVhYmxlVGFnc1thcnJheVRhZ10gPSBjbG9uZWFibGVUYWdzW2FycmF5QnVmZmVyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0YVZpZXdUYWddID0gY2xvbmVhYmxlVGFnc1tib29sVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0ZVRhZ10gPSBjbG9uZWFibGVUYWdzW2Zsb2F0MzJUYWddID0gY2xvbmVhYmxlVGFnc1tmbG9hdDY0VGFnXSA9IGNsb25lYWJsZVRhZ3NbaW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW2ludDE2VGFnXSA9IGNsb25lYWJsZVRhZ3NbaW50MzJUYWddID0gY2xvbmVhYmxlVGFnc1ttYXBUYWddID0gY2xvbmVhYmxlVGFnc1tudW1iZXJUYWddID0gY2xvbmVhYmxlVGFnc1tvYmplY3RUYWddID0gY2xvbmVhYmxlVGFnc1tyZWdleHBUYWddID0gY2xvbmVhYmxlVGFnc1tzZXRUYWddID0gY2xvbmVhYmxlVGFnc1tzdHJpbmdUYWddID0gY2xvbmVhYmxlVGFnc1tzeW1ib2xUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQxNlRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xuY2xvbmVhYmxlVGFnc1tlcnJvclRhZ10gPSBjbG9uZWFibGVUYWdzW2Z1bmNUYWddID0gY2xvbmVhYmxlVGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuZnVuY3Rpb24gYmFzZUNsb25lKHZhbHVlLCBpc0RlZXAsIGlzRnVsbCwgY3VzdG9taXplciwga2V5LCBvYmplY3QsIHN0YWNrKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChjdXN0b21pemVyKSB7XG4gICAgcmVzdWx0ID0gb2JqZWN0ID8gY3VzdG9taXplcih2YWx1ZSwga2V5LCBvYmplY3QsIHN0YWNrKSA6IGN1c3RvbWl6ZXIodmFsdWUpO1xuICB9XG4gIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSk7XG4gIGlmIChpc0Fycikge1xuICAgIHJlc3VsdCA9IGluaXRDbG9uZUFycmF5KHZhbHVlKTtcbiAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgcmV0dXJuIGNvcHlBcnJheSh2YWx1ZSwgcmVzdWx0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhZyA9IGdldFRhZyh2YWx1ZSksXG4gICAgICAgIGlzRnVuYyA9IHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG4gICAgaWYgKGlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNsb25lQnVmZmVyKHZhbHVlLCBpc0RlZXApO1xuICAgIH1cbiAgICBpZiAodGFnID09IG9iamVjdFRhZyB8fCB0YWcgPT0gYXJnc1RhZyB8fCAoaXNGdW5jICYmICFvYmplY3QpKSB7XG4gICAgICBpZiAoaXNIb3N0T2JqZWN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gb2JqZWN0ID8gdmFsdWUgOiB7fTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGluaXRDbG9uZU9iamVjdChpc0Z1bmMgPyB7fSA6IHZhbHVlKTtcbiAgICAgIGlmICghaXNEZWVwKSB7XG4gICAgICAgIHJldHVybiBjb3B5U3ltYm9scyh2YWx1ZSwgYmFzZUFzc2lnbihyZXN1bHQsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY2xvbmVhYmxlVGFnc1t0YWddKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lQnlUYWcodmFsdWUsIHRhZywgYmFzZUNsb25lLCBpc0RlZXApO1xuICAgIH1cbiAgfVxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldCh2YWx1ZSk7XG4gIGlmIChzdGFja2VkKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQ7XG4gIH1cbiAgc3RhY2suc2V0KHZhbHVlLCByZXN1bHQpO1xuICBpZiAoIWlzQXJyKSB7XG4gICAgdmFyIHByb3BzID0gaXNGdWxsID8gZ2V0QWxsS2V5cyh2YWx1ZSkgOiBrZXlzKHZhbHVlKTtcbiAgfVxuICBhcnJheUVhY2gocHJvcHMgfHwgdmFsdWUsIGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIGtleSA9IHN1YlZhbHVlO1xuICAgICAgc3ViVmFsdWUgPSB2YWx1ZVtrZXldO1xuICAgIH1cbiAgICBhc3NpZ25WYWx1ZShyZXN1bHQsIGtleSwgYmFzZUNsb25lKHN1YlZhbHVlLCBpc0RlZXAsIGlzRnVsbCwgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2spKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDbG9uZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
