'use strict';

System.register([], function (_export, _context) {
    var baseDifference, baseFlatten, isArrayLikeObject, rest, difference;
    return {
        setters: [],
        execute: function () {
            baseDifference = require('./_baseDifference');
            baseFlatten = require('./_baseFlatten');
            isArrayLikeObject = require('./isArrayLikeObject');
            rest = require('./rest');
            difference = rest(function (array, values) {
                return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
            });

            module.exports = difference;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2RpZmZlcmVuY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLDZCQUFpQixRQUFRLG1CQUFSO0FBQ2pCLDBCQUFjLFFBQVEsZ0JBQVI7QUFDZCxnQ0FBb0IsUUFBUSxxQkFBUjtBQUNwQixtQkFBTyxRQUFRLFFBQVI7QUFDUCx5QkFBYSxLQUFLLFVBQVMsS0FBVCxFQUFnQixNQUFoQixFQUF3QjtBQUM1Qyx1QkFBTyxrQkFBa0IsS0FBbEIsSUFBMkIsZUFBZSxLQUFmLEVBQXNCLFlBQVksTUFBWixFQUFvQixDQUFwQixFQUF1QixpQkFBdkIsRUFBMEMsSUFBMUMsQ0FBdEIsQ0FBM0IsR0FBb0csRUFBcEcsQ0FEcUM7YUFBeEI7O0FBR3RCLG1CQUFPLE9BQVAsR0FBaUIsVUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvZGlmZmVyZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VEaWZmZXJlbmNlID0gcmVxdWlyZSgnLi9fYmFzZURpZmZlcmVuY2UnKSxcbiAgICBiYXNlRmxhdHRlbiA9IHJlcXVpcmUoJy4vX2Jhc2VGbGF0dGVuJyksXG4gICAgaXNBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlT2JqZWN0JyksXG4gICAgcmVzdCA9IHJlcXVpcmUoJy4vcmVzdCcpO1xudmFyIGRpZmZlcmVuY2UgPSByZXN0KGZ1bmN0aW9uKGFycmF5LCB2YWx1ZXMpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlT2JqZWN0KGFycmF5KSA/IGJhc2VEaWZmZXJlbmNlKGFycmF5LCBiYXNlRmxhdHRlbih2YWx1ZXMsIDEsIGlzQXJyYXlMaWtlT2JqZWN0LCB0cnVlKSkgOiBbXTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBkaWZmZXJlbmNlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
