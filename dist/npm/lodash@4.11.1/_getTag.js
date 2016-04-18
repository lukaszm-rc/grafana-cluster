'use strict';

System.register([], function (_export, _context) {
  var DataView, Map, Promise, Set, WeakMap, toSource, mapTag, objectTag, promiseTag, setTag, weakMapTag, dataViewTag, objectProto, objectToString, dataViewCtorString, mapCtorString, promiseCtorString, setCtorString, weakMapCtorString;

  function getTag(value) {
    return objectToString.call(value);
  }
  return {
    setters: [],
    execute: function () {
      DataView = require('./_DataView');
      Map = require('./_Map');
      Promise = require('./_Promise');
      Set = require('./_Set');
      WeakMap = require('./_WeakMap');
      toSource = require('./_toSource');
      mapTag = '[object Map]';
      objectTag = '[object Object]';
      promiseTag = '[object Promise]';
      setTag = '[object Set]';
      weakMapTag = '[object WeakMap]';
      dataViewTag = '[object DataView]';
      objectProto = Object.prototype;
      objectToString = objectProto.toString;
      dataViewCtorString = toSource(DataView);
      mapCtorString = toSource(Map);
      promiseCtorString = toSource(Promise);
      setCtorString = toSource(Set);
      weakMapCtorString = toSource(WeakMap);
      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
        getTag = function getTag(value) {
          var result = objectToString.call(value),
              Ctor = result == objectTag ? value.constructor : undefined,
              ctorString = Ctor ? toSource(Ctor) : undefined;
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result;
        };
      }
      module.exports = getTag;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19nZXRUYWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFvQkEsV0FBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCO0FBQ3JCLFdBQU8sZUFBZSxJQUFmLENBQW9CLEtBQXBCLENBQVAsQ0FEcUI7R0FBdkI7Ozs7QUFuQkksaUJBQVcsUUFBUSxhQUFSO0FBQ1gsWUFBTSxRQUFRLFFBQVI7QUFDTixnQkFBVSxRQUFRLFlBQVI7QUFDVixZQUFNLFFBQVEsUUFBUjtBQUNOLGdCQUFVLFFBQVEsWUFBUjtBQUNWLGlCQUFXLFFBQVEsYUFBUjtBQUNYLGVBQVM7QUFDVCxrQkFBWTtBQUNaLG1CQUFhO0FBQ2IsZUFBUztBQUNULG1CQUFhO0FBQ2Isb0JBQWM7QUFDZCxvQkFBYyxPQUFPLFNBQVA7QUFDZCx1QkFBaUIsWUFBWSxRQUFaO0FBQ2pCLDJCQUFxQixTQUFTLFFBQVQ7QUFDckIsc0JBQWdCLFNBQVMsR0FBVDtBQUNoQiwwQkFBb0IsU0FBUyxPQUFUO0FBQ3BCLHNCQUFnQixTQUFTLEdBQVQ7QUFDaEIsMEJBQW9CLFNBQVMsT0FBVDtBQUl4QixVQUFJLFFBQUMsSUFBWSxPQUFPLElBQUksUUFBSixDQUFhLElBQUksV0FBSixDQUFnQixDQUFoQixDQUFiLENBQVAsS0FBNEMsV0FBNUMsSUFBNkQsT0FBTyxPQUFPLElBQUksR0FBSixFQUFQLEtBQW1CLE1BQW5CLElBQStCLFdBQVcsT0FBTyxRQUFRLE9BQVIsRUFBUCxLQUE2QixVQUE3QixJQUE2QyxPQUFPLE9BQU8sSUFBSSxHQUFKLEVBQVAsS0FBbUIsTUFBbkIsSUFBK0IsV0FBVyxPQUFPLElBQUksT0FBSixFQUFQLEtBQXVCLFVBQXZCLEVBQW9DO0FBQy9QLGlCQUFTLGdCQUFTLEtBQVQsRUFBZ0I7QUFDdkIsY0FBSSxTQUFTLGVBQWUsSUFBZixDQUFvQixLQUFwQixDQUFUO2NBQ0EsT0FBTyxVQUFVLFNBQVYsR0FBc0IsTUFBTSxXQUFOLEdBQW9CLFNBQTFDO2NBQ1AsYUFBYSxPQUFPLFNBQVMsSUFBVCxDQUFQLEdBQXdCLFNBQXhCLENBSE07QUFJdkIsY0FBSSxVQUFKLEVBQWdCO0FBQ2Qsb0JBQVEsVUFBUjtBQUNFLG1CQUFLLGtCQUFMO0FBQ0UsdUJBQU8sV0FBUCxDQURGO0FBREYsbUJBR08sYUFBTDtBQUNFLHVCQUFPLE1BQVAsQ0FERjtBQUhGLG1CQUtPLGlCQUFMO0FBQ0UsdUJBQU8sVUFBUCxDQURGO0FBTEYsbUJBT08sYUFBTDtBQUNFLHVCQUFPLE1BQVAsQ0FERjtBQVBGLG1CQVNPLGlCQUFMO0FBQ0UsdUJBQU8sVUFBUCxDQURGO0FBVEYsYUFEYztXQUFoQjtBQWNBLGlCQUFPLE1BQVAsQ0FsQnVCO1NBQWhCLENBRHNQO09BQWpRO0FBc0JBLGFBQU8sT0FBUCxHQUFpQixNQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fZ2V0VGFnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuZnVuY3Rpb24gZ2V0VGFnKHZhbHVlKSB7XG4gIHJldHVybiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHwgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fCAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8IChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHwgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6IHVuZGVmaW5lZDtcbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOlxuICAgICAgICAgIHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOlxuICAgICAgICAgIHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6XG4gICAgICAgICAgcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzpcbiAgICAgICAgICByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOlxuICAgICAgICAgIHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
