'use strict';

System.register([], function (_export, _context) {
    var isLength, isObjectLike, argsTag, arrayTag, boolTag, dateTag, errorTag, funcTag, mapTag, numberTag, objectTag, regexpTag, setTag, stringTag, weakMapTag, arrayBufferTag, dataViewTag, float32Tag, float64Tag, int8Tag, int16Tag, int32Tag, uint8Tag, uint8ClampedTag, uint16Tag, uint32Tag, typedArrayTags, objectProto, objectToString;

    function isTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
    }
    return {
        setters: [],
        execute: function () {
            isLength = require('./isLength');
            isObjectLike = require('./isObjectLike');
            argsTag = '[object Arguments]';
            arrayTag = '[object Array]';
            boolTag = '[object Boolean]';
            dateTag = '[object Date]';
            errorTag = '[object Error]';
            funcTag = '[object Function]';
            mapTag = '[object Map]';
            numberTag = '[object Number]';
            objectTag = '[object Object]';
            regexpTag = '[object RegExp]';
            setTag = '[object Set]';
            stringTag = '[object String]';
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
            typedArrayTags = {};

            typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
            typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
            objectProto = Object.prototype;
            objectToString = objectProto.toString;
            module.exports = isTypedArray;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzVHlwZWRBcnJheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQWdDQSxhQUFTLFlBQVQsQ0FBc0IsS0FBdEIsRUFBNkI7QUFDM0IsZUFBTyxhQUFhLEtBQWIsS0FBdUIsU0FBUyxNQUFNLE1BQU4sQ0FBaEMsSUFBaUQsQ0FBQyxDQUFDLGVBQWUsZUFBZSxJQUFmLENBQW9CLEtBQXBCLENBQWYsQ0FBRCxDQUQ5QjtLQUE3Qjs7OztBQS9CSSx1QkFBVyxRQUFRLFlBQVI7QUFDWCwyQkFBZSxRQUFRLGdCQUFSO0FBQ2Ysc0JBQVU7QUFDVix1QkFBVztBQUNYLHNCQUFVO0FBQ1Ysc0JBQVU7QUFDVix1QkFBVztBQUNYLHNCQUFVO0FBQ1YscUJBQVM7QUFDVCx3QkFBWTtBQUNaLHdCQUFZO0FBQ1osd0JBQVk7QUFDWixxQkFBUztBQUNULHdCQUFZO0FBQ1oseUJBQWE7QUFDYiw2QkFBaUI7QUFDakIsMEJBQWM7QUFDZCx5QkFBYTtBQUNiLHlCQUFhO0FBQ2Isc0JBQVU7QUFDVix1QkFBVztBQUNYLHVCQUFXO0FBQ1gsdUJBQVc7QUFDWCw4QkFBa0I7QUFDbEIsd0JBQVk7QUFDWix3QkFBWTtBQUNaLDZCQUFpQjs7QUFDckIsMkJBQWUsVUFBZixJQUE2QixlQUFlLFVBQWYsSUFBNkIsZUFBZSxPQUFmLElBQTBCLGVBQWUsUUFBZixJQUEyQixlQUFlLFFBQWYsSUFBMkIsZUFBZSxRQUFmLElBQTJCLGVBQWUsZUFBZixJQUFrQyxlQUFlLFNBQWYsSUFBNEIsZUFBZSxTQUFmLElBQTRCLElBQTVCO0FBQ25PLDJCQUFlLE9BQWYsSUFBMEIsZUFBZSxRQUFmLElBQTJCLGVBQWUsY0FBZixJQUFpQyxlQUFlLE9BQWYsSUFBMEIsZUFBZSxXQUFmLElBQThCLGVBQWUsT0FBZixJQUEwQixlQUFlLFFBQWYsSUFBMkIsZUFBZSxPQUFmLElBQTBCLGVBQWUsTUFBZixJQUF5QixlQUFlLFNBQWYsSUFBNEIsZUFBZSxTQUFmLElBQTRCLGVBQWUsU0FBZixJQUE0QixlQUFlLE1BQWYsSUFBeUIsZUFBZSxTQUFmLElBQTRCLGVBQWUsVUFBZixJQUE2QixLQUE3QjtBQUMzWCwwQkFBYyxPQUFPLFNBQVA7QUFDZCw2QkFBaUIsWUFBWSxRQUFaO0FBSXJCLG1CQUFPLE9BQVAsR0FBaUIsWUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvaXNUeXBlZEFycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID0gdHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPSB0eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID0gdHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPSB0eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuZnVuY3Rpb24gaXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKV07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
