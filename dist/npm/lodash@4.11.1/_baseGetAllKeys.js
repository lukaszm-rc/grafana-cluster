'use strict';

System.register([], function (_export, _context) {
  var arrayPush, isArray;

  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }
  return {
    setters: [],
    execute: function () {
      arrayPush = require('./_arrayPush');
      isArray = require('./isArray');
      module.exports = baseGetAllKeys;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlR2V0QWxsS2V5cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsY0FBVCxDQUF3QixNQUF4QixFQUFnQyxRQUFoQyxFQUEwQyxXQUExQyxFQUF1RDtBQUNyRCxRQUFJLFNBQVMsU0FBUyxNQUFULENBQVQsQ0FEaUQ7QUFFckQsV0FBTyxRQUFRLE1BQVIsSUFBa0IsTUFBbEIsR0FBMkIsVUFBVSxNQUFWLEVBQWtCLFlBQVksTUFBWixDQUFsQixDQUEzQixDQUY4QztHQUF2RDs7OztBQUZJLGtCQUFZLFFBQVEsY0FBUjtBQUNaLGdCQUFVLFFBQVEsV0FBUjtBQUtkLGFBQU8sT0FBUCxHQUFpQixjQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fYmFzZUdldEFsbEtleXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0QWxsS2V5cztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
