'use strict';

System.register([], function (_export, _context) {
  var cloneArrayBuffer, cloneDataView, cloneMap, cloneRegExp, cloneSet, cloneSymbol, cloneTypedArray, boolTag, dateTag, mapTag, numberTag, regexpTag, setTag, stringTag, symbolTag, arrayBufferTag, dataViewTag, float32Tag, float64Tag, int8Tag, int16Tag, int32Tag, uint8Tag, uint8ClampedTag, uint16Tag, uint32Tag;

  function initCloneByTag(object, tag, cloneFunc, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag:
        return cloneArrayBuffer(object);
      case boolTag:
      case dateTag:
        return new Ctor(+object);
      case dataViewTag:
        return cloneDataView(object, isDeep);
      case float32Tag:
      case float64Tag:
      case int8Tag:
      case int16Tag:
      case int32Tag:
      case uint8Tag:
      case uint8ClampedTag:
      case uint16Tag:
      case uint32Tag:
        return cloneTypedArray(object, isDeep);
      case mapTag:
        return cloneMap(object, isDeep, cloneFunc);
      case numberTag:
      case stringTag:
        return new Ctor(object);
      case regexpTag:
        return cloneRegExp(object);
      case setTag:
        return cloneSet(object, isDeep, cloneFunc);
      case symbolTag:
        return cloneSymbol(object);
    }
  }
  return {
    setters: [],
    execute: function () {
      cloneArrayBuffer = require('./_cloneArrayBuffer');
      cloneDataView = require('./_cloneDataView');
      cloneMap = require('./_cloneMap');
      cloneRegExp = require('./_cloneRegExp');
      cloneSet = require('./_cloneSet');
      cloneSymbol = require('./_cloneSymbol');
      cloneTypedArray = require('./_cloneTypedArray');
      boolTag = '[object Boolean]';
      dateTag = '[object Date]';
      mapTag = '[object Map]';
      numberTag = '[object Number]';
      regexpTag = '[object RegExp]';
      setTag = '[object Set]';
      stringTag = '[object String]';
      symbolTag = '[object Symbol]';
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
      module.exports = initCloneByTag;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19pbml0Q2xvbmVCeVRhZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQTJCQSxXQUFTLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0MsR0FBaEMsRUFBcUMsU0FBckMsRUFBZ0QsTUFBaEQsRUFBd0Q7QUFDdEQsUUFBSSxPQUFPLE9BQU8sV0FBUCxDQUQyQztBQUV0RCxZQUFRLEdBQVI7QUFDRSxXQUFLLGNBQUw7QUFDRSxlQUFPLGlCQUFpQixNQUFqQixDQUFQLENBREY7QUFERixXQUdPLE9BQUwsQ0FIRjtBQUlFLFdBQUssT0FBTDtBQUNFLGVBQU8sSUFBSSxJQUFKLENBQVMsQ0FBQyxNQUFELENBQWhCLENBREY7QUFKRixXQU1PLFdBQUw7QUFDRSxlQUFPLGNBQWMsTUFBZCxFQUFzQixNQUF0QixDQUFQLENBREY7QUFORixXQVFPLFVBQUwsQ0FSRjtBQVNFLFdBQUssVUFBTCxDQVRGO0FBVUUsV0FBSyxPQUFMLENBVkY7QUFXRSxXQUFLLFFBQUwsQ0FYRjtBQVlFLFdBQUssUUFBTCxDQVpGO0FBYUUsV0FBSyxRQUFMLENBYkY7QUFjRSxXQUFLLGVBQUwsQ0FkRjtBQWVFLFdBQUssU0FBTCxDQWZGO0FBZ0JFLFdBQUssU0FBTDtBQUNFLGVBQU8sZ0JBQWdCLE1BQWhCLEVBQXdCLE1BQXhCLENBQVAsQ0FERjtBQWhCRixXQWtCTyxNQUFMO0FBQ0UsZUFBTyxTQUFTLE1BQVQsRUFBaUIsTUFBakIsRUFBeUIsU0FBekIsQ0FBUCxDQURGO0FBbEJGLFdBb0JPLFNBQUwsQ0FwQkY7QUFxQkUsV0FBSyxTQUFMO0FBQ0UsZUFBTyxJQUFJLElBQUosQ0FBUyxNQUFULENBQVAsQ0FERjtBQXJCRixXQXVCTyxTQUFMO0FBQ0UsZUFBTyxZQUFZLE1BQVosQ0FBUCxDQURGO0FBdkJGLFdBeUJPLE1BQUw7QUFDRSxlQUFPLFNBQVMsTUFBVCxFQUFpQixNQUFqQixFQUF5QixTQUF6QixDQUFQLENBREY7QUF6QkYsV0EyQk8sU0FBTDtBQUNFLGVBQU8sWUFBWSxNQUFaLENBQVAsQ0FERjtBQTNCRixLQUZzRDtHQUF4RDs7OztBQTFCSSx5QkFBbUIsUUFBUSxxQkFBUjtBQUNuQixzQkFBZ0IsUUFBUSxrQkFBUjtBQUNoQixpQkFBVyxRQUFRLGFBQVI7QUFDWCxvQkFBYyxRQUFRLGdCQUFSO0FBQ2QsaUJBQVcsUUFBUSxhQUFSO0FBQ1gsb0JBQWMsUUFBUSxnQkFBUjtBQUNkLHdCQUFrQixRQUFRLG9CQUFSO0FBQ2xCLGdCQUFVO0FBQ1YsZ0JBQVU7QUFDVixlQUFTO0FBQ1Qsa0JBQVk7QUFDWixrQkFBWTtBQUNaLGVBQVM7QUFDVCxrQkFBWTtBQUNaLGtCQUFZO0FBQ1osdUJBQWlCO0FBQ2pCLG9CQUFjO0FBQ2QsbUJBQWE7QUFDYixtQkFBYTtBQUNiLGdCQUFVO0FBQ1YsaUJBQVc7QUFDWCxpQkFBVztBQUNYLGlCQUFXO0FBQ1gsd0JBQWtCO0FBQ2xCLGtCQUFZO0FBQ1osa0JBQVk7QUFrQ2hCLGFBQU8sT0FBUCxHQUFpQixjQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9faW5pdENsb25lQnlUYWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpLFxuICAgIGNsb25lRGF0YVZpZXcgPSByZXF1aXJlKCcuL19jbG9uZURhdGFWaWV3JyksXG4gICAgY2xvbmVNYXAgPSByZXF1aXJlKCcuL19jbG9uZU1hcCcpLFxuICAgIGNsb25lUmVnRXhwID0gcmVxdWlyZSgnLi9fY2xvbmVSZWdFeHAnKSxcbiAgICBjbG9uZVNldCA9IHJlcXVpcmUoJy4vX2Nsb25lU2V0JyksXG4gICAgY2xvbmVTeW1ib2wgPSByZXF1aXJlKCcuL19jbG9uZVN5bWJvbCcpLFxuICAgIGNsb25lVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Nsb25lVHlwZWRBcnJheScpO1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuZnVuY3Rpb24gaW5pdENsb25lQnlUYWcob2JqZWN0LCB0YWcsIGNsb25lRnVuYywgaXNEZWVwKSB7XG4gIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVBcnJheUJ1ZmZlcihvYmplY3QpO1xuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3IoK29iamVjdCk7XG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIHJldHVybiBjbG9uZURhdGFWaWV3KG9iamVjdCwgaXNEZWVwKTtcbiAgICBjYXNlIGZsb2F0MzJUYWc6XG4gICAgY2FzZSBmbG9hdDY0VGFnOlxuICAgIGNhc2UgaW50OFRhZzpcbiAgICBjYXNlIGludDE2VGFnOlxuICAgIGNhc2UgaW50MzJUYWc6XG4gICAgY2FzZSB1aW50OFRhZzpcbiAgICBjYXNlIHVpbnQ4Q2xhbXBlZFRhZzpcbiAgICBjYXNlIHVpbnQxNlRhZzpcbiAgICBjYXNlIHVpbnQzMlRhZzpcbiAgICAgIHJldHVybiBjbG9uZVR5cGVkQXJyYXkob2JqZWN0LCBpc0RlZXApO1xuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lTWFwKG9iamVjdCwgaXNEZWVwLCBjbG9uZUZ1bmMpO1xuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKG9iamVjdCk7XG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgICByZXR1cm4gY2xvbmVSZWdFeHAob2JqZWN0KTtcbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVNldChvYmplY3QsIGlzRGVlcCwgY2xvbmVGdW5jKTtcbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVN5bWJvbChvYmplY3QpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZUJ5VGFnO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
