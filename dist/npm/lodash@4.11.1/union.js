'use strict';

System.register([], function (_export, _context) {
    var baseFlatten, baseUniq, isArrayLikeObject, rest, union;
    return {
        setters: [],
        execute: function () {
            baseFlatten = require('./_baseFlatten');
            baseUniq = require('./_baseUniq');
            isArrayLikeObject = require('./isArrayLikeObject');
            rest = require('./rest');
            union = rest(function (arrays) {
                return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
            });

            module.exports = union;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3VuaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSwwQkFBYyxRQUFRLGdCQUFSO0FBQ2QsdUJBQVcsUUFBUSxhQUFSO0FBQ1gsZ0NBQW9CLFFBQVEscUJBQVI7QUFDcEIsbUJBQU8sUUFBUSxRQUFSO0FBQ1Asb0JBQVEsS0FBSyxVQUFTLE1BQVQsRUFBaUI7QUFDaEMsdUJBQU8sU0FBUyxZQUFZLE1BQVosRUFBb0IsQ0FBcEIsRUFBdUIsaUJBQXZCLEVBQTBDLElBQTFDLENBQVQsQ0FBUCxDQURnQzthQUFqQjs7QUFHakIsbUJBQU8sT0FBUCxHQUFpQixLQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS91bmlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VGbGF0dGVuID0gcmVxdWlyZSgnLi9fYmFzZUZsYXR0ZW4nKSxcbiAgICBiYXNlVW5pcSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmlxJyksXG4gICAgaXNBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlT2JqZWN0JyksXG4gICAgcmVzdCA9IHJlcXVpcmUoJy4vcmVzdCcpO1xudmFyIHVuaW9uID0gcmVzdChmdW5jdGlvbihhcnJheXMpIHtcbiAgcmV0dXJuIGJhc2VVbmlxKGJhc2VGbGF0dGVuKGFycmF5cywgMSwgaXNBcnJheUxpa2VPYmplY3QsIHRydWUpKTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSB1bmlvbjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
