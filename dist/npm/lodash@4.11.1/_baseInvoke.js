'use strict';

System.register([], function (_export, _context) {
  var apply, castPath, isKey, last, parent;

  function baseInvoke(object, path, args) {
    if (!isKey(path, object)) {
      path = castPath(path);
      object = parent(object, path);
      path = last(path);
    }
    var func = object == null ? object : object[path];
    return func == null ? undefined : apply(func, object, args);
  }
  return {
    setters: [],
    execute: function () {
      apply = require('./_apply');
      castPath = require('./_castPath');
      isKey = require('./_isKey');
      last = require('./last');
      parent = require('./_parent');
      module.exports = baseInvoke;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlSW52b2tlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBTUEsV0FBUyxVQUFULENBQW9CLE1BQXBCLEVBQTRCLElBQTVCLEVBQWtDLElBQWxDLEVBQXdDO0FBQ3RDLFFBQUksQ0FBQyxNQUFNLElBQU4sRUFBWSxNQUFaLENBQUQsRUFBc0I7QUFDeEIsYUFBTyxTQUFTLElBQVQsQ0FBUCxDQUR3QjtBQUV4QixlQUFTLE9BQU8sTUFBUCxFQUFlLElBQWYsQ0FBVCxDQUZ3QjtBQUd4QixhQUFPLEtBQUssSUFBTCxDQUFQLENBSHdCO0tBQTFCO0FBS0EsUUFBSSxPQUFPLFVBQVUsSUFBVixHQUFpQixNQUFqQixHQUEwQixPQUFPLElBQVAsQ0FBMUIsQ0FOMkI7QUFPdEMsV0FBTyxRQUFRLElBQVIsR0FBZSxTQUFmLEdBQTJCLE1BQU0sSUFBTixFQUFZLE1BQVosRUFBb0IsSUFBcEIsQ0FBM0IsQ0FQK0I7R0FBeEM7Ozs7QUFMSSxjQUFRLFFBQVEsVUFBUjtBQUNSLGlCQUFXLFFBQVEsYUFBUjtBQUNYLGNBQVEsUUFBUSxVQUFSO0FBQ1IsYUFBTyxRQUFRLFFBQVI7QUFDUCxlQUFTLFFBQVEsV0FBUjtBQVViLGFBQU8sT0FBUCxHQUFpQixVQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fYmFzZUludm9rZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi9fYXBwbHknKSxcbiAgICBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIGxhc3QgPSByZXF1aXJlKCcuL2xhc3QnKSxcbiAgICBwYXJlbnQgPSByZXF1aXJlKCcuL19wYXJlbnQnKTtcbmZ1bmN0aW9uIGJhc2VJbnZva2Uob2JqZWN0LCBwYXRoLCBhcmdzKSB7XG4gIGlmICghaXNLZXkocGF0aCwgb2JqZWN0KSkge1xuICAgIHBhdGggPSBjYXN0UGF0aChwYXRoKTtcbiAgICBvYmplY3QgPSBwYXJlbnQob2JqZWN0LCBwYXRoKTtcbiAgICBwYXRoID0gbGFzdChwYXRoKTtcbiAgfVxuICB2YXIgZnVuYyA9IG9iamVjdCA9PSBudWxsID8gb2JqZWN0IDogb2JqZWN0W3BhdGhdO1xuICByZXR1cm4gZnVuYyA9PSBudWxsID8gdW5kZWZpbmVkIDogYXBwbHkoZnVuYywgb2JqZWN0LCBhcmdzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gYmFzZUludm9rZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
