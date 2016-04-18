'use strict';

System.register([], function (_export, _context) {
  var baseGet;

  function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
  }
  return {
    setters: [],
    execute: function () {
      baseGet = require('./_baseGet');
      module.exports = get;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2dldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLFdBQVMsR0FBVCxDQUFhLE1BQWIsRUFBcUIsSUFBckIsRUFBMkIsWUFBM0IsRUFBeUM7QUFDdkMsUUFBSSxTQUFTLFVBQVUsSUFBVixHQUFpQixTQUFqQixHQUE2QixRQUFRLE1BQVIsRUFBZ0IsSUFBaEIsQ0FBN0IsQ0FEMEI7QUFFdkMsV0FBTyxXQUFXLFNBQVgsR0FBdUIsWUFBdkIsR0FBc0MsTUFBdEMsQ0FGZ0M7R0FBekM7Ozs7QUFESSxnQkFBVSxRQUFRLFlBQVI7QUFLZCxhQUFPLE9BQVAsR0FBaUIsR0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvZ2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vX2Jhc2VHZXQnKTtcbmZ1bmN0aW9uIGdldChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHJlc3VsdDtcbn1cbm1vZHVsZS5leHBvcnRzID0gZ2V0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
