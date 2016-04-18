'use strict';

System.register([], function (_export, _context) {
  var nativeCreate, HASH_UNDEFINED, objectProto, hasOwnProperty;

  function hashGet(hash, key) {
    if (nativeCreate) {
      var result = hash[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(hash, key) ? hash[key] : undefined;
  }
  return {
    setters: [],
    execute: function () {
      nativeCreate = require('./_nativeCreate');
      HASH_UNDEFINED = '__lodash_hash_undefined__';
      objectProto = Object.prototype;
      hasOwnProperty = objectProto.hasOwnProperty;
      module.exports = hashGet;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19oYXNoR2V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsV0FBUyxPQUFULENBQWlCLElBQWpCLEVBQXVCLEdBQXZCLEVBQTRCO0FBQzFCLFFBQUksWUFBSixFQUFrQjtBQUNoQixVQUFJLFNBQVMsS0FBSyxHQUFMLENBQVQsQ0FEWTtBQUVoQixhQUFPLFdBQVcsY0FBWCxHQUE0QixTQUE1QixHQUF3QyxNQUF4QyxDQUZTO0tBQWxCO0FBSUEsV0FBTyxlQUFlLElBQWYsQ0FBb0IsSUFBcEIsRUFBMEIsR0FBMUIsSUFBaUMsS0FBSyxHQUFMLENBQWpDLEdBQTZDLFNBQTdDLENBTG1CO0dBQTVCOzs7O0FBSkkscUJBQWUsUUFBUSxpQkFBUjtBQUNmLHVCQUFpQjtBQUNqQixvQkFBYyxPQUFPLFNBQVA7QUFDZCx1QkFBaUIsWUFBWSxjQUFaO0FBUXJCLGFBQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9faGFzaEdldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gaGFzaEdldChoYXNoLCBrZXkpIHtcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBoYXNoW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaGFzaCwga2V5KSA/IGhhc2hba2V5XSA6IHVuZGVmaW5lZDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
