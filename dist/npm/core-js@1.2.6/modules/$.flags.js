/* */
'use strict';

System.register([], function (_export, _context) {
  var anObject;
  return {
    setters: [],
    execute: function () {
      anObject = require('./$.an-object');

      module.exports = function () {
        var that = anObject(this),
            result = '';
        if (that.global) result += 'g';
        if (that.ignoreCase) result += 'i';
        if (that.multiline) result += 'm';
        if (that.unicode) result += 'u';
        if (that.sticky) result += 'y';
        return result;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5mbGFncy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7QUFDSSxpQkFBVyxRQUFRLGVBQVI7O0FBQ2YsYUFBTyxPQUFQLEdBQWlCLFlBQVc7QUFDMUIsWUFBSSxPQUFPLFNBQVMsSUFBVCxDQUFQO1lBQ0EsU0FBUyxFQUFULENBRnNCO0FBRzFCLFlBQUksS0FBSyxNQUFMLEVBQ0YsVUFBVSxHQUFWLENBREY7QUFFQSxZQUFJLEtBQUssVUFBTCxFQUNGLFVBQVUsR0FBVixDQURGO0FBRUEsWUFBSSxLQUFLLFNBQUwsRUFDRixVQUFVLEdBQVYsQ0FERjtBQUVBLFlBQUksS0FBSyxPQUFMLEVBQ0YsVUFBVSxHQUFWLENBREY7QUFFQSxZQUFJLEtBQUssTUFBTCxFQUNGLFVBQVUsR0FBVixDQURGO0FBRUEsZUFBTyxNQUFQLENBYjBCO09BQVgiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy8kLmZsYWdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgdGhhdCA9IGFuT2JqZWN0KHRoaXMpLFxuICAgICAgcmVzdWx0ID0gJyc7XG4gIGlmICh0aGF0Lmdsb2JhbClcbiAgICByZXN1bHQgKz0gJ2cnO1xuICBpZiAodGhhdC5pZ25vcmVDYXNlKVxuICAgIHJlc3VsdCArPSAnaSc7XG4gIGlmICh0aGF0Lm11bHRpbGluZSlcbiAgICByZXN1bHQgKz0gJ20nO1xuICBpZiAodGhhdC51bmljb2RlKVxuICAgIHJlc3VsdCArPSAndSc7XG4gIGlmICh0aGF0LnN0aWNreSlcbiAgICByZXN1bHQgKz0gJ3knO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
