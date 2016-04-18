'use strict';

System.register([], function (_export, _context) {
    var arrayFilter, baseXor, isArrayLikeObject, rest, xor;
    return {
        setters: [],
        execute: function () {
            arrayFilter = require('./_arrayFilter');
            baseXor = require('./_baseXor');
            isArrayLikeObject = require('./isArrayLikeObject');
            rest = require('./rest');
            xor = rest(function (arrays) {
                return baseXor(arrayFilter(arrays, isArrayLikeObject));
            });

            module.exports = xor;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3hvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksMEJBQWMsUUFBUSxnQkFBUjtBQUNkLHNCQUFVLFFBQVEsWUFBUjtBQUNWLGdDQUFvQixRQUFRLHFCQUFSO0FBQ3BCLG1CQUFPLFFBQVEsUUFBUjtBQUNQLGtCQUFNLEtBQUssVUFBUyxNQUFULEVBQWlCO0FBQzlCLHVCQUFPLFFBQVEsWUFBWSxNQUFaLEVBQW9CLGlCQUFwQixDQUFSLENBQVAsQ0FEOEI7YUFBakI7O0FBR2YsbUJBQU8sT0FBUCxHQUFpQixHQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS94b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgYmFzZVhvciA9IHJlcXVpcmUoJy4vX2Jhc2VYb3InKSxcbiAgICBpc0FycmF5TGlrZU9iamVjdCA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2VPYmplY3QnKSxcbiAgICByZXN0ID0gcmVxdWlyZSgnLi9yZXN0Jyk7XG52YXIgeG9yID0gcmVzdChmdW5jdGlvbihhcnJheXMpIHtcbiAgcmV0dXJuIGJhc2VYb3IoYXJyYXlGaWx0ZXIoYXJyYXlzLCBpc0FycmF5TGlrZU9iamVjdCkpO1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHhvcjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
