'use strict';

System.register([], function (_export, _context) {
    var baseDifference, isArrayLikeObject, rest, without;
    return {
        setters: [],
        execute: function () {
            baseDifference = require('./_baseDifference');
            isArrayLikeObject = require('./isArrayLikeObject');
            rest = require('./rest');
            without = rest(function (array, values) {
                return isArrayLikeObject(array) ? baseDifference(array, values) : [];
            });

            module.exports = without;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3dpdGhvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLDZCQUFpQixRQUFRLG1CQUFSO0FBQ2pCLGdDQUFvQixRQUFRLHFCQUFSO0FBQ3BCLG1CQUFPLFFBQVEsUUFBUjtBQUNQLHNCQUFVLEtBQUssVUFBUyxLQUFULEVBQWdCLE1BQWhCLEVBQXdCO0FBQ3pDLHVCQUFPLGtCQUFrQixLQUFsQixJQUEyQixlQUFlLEtBQWYsRUFBc0IsTUFBdEIsQ0FBM0IsR0FBMkQsRUFBM0QsQ0FEa0M7YUFBeEI7O0FBR25CLG1CQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvd2l0aG91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VEaWZmZXJlbmNlID0gcmVxdWlyZSgnLi9fYmFzZURpZmZlcmVuY2UnKSxcbiAgICBpc0FycmF5TGlrZU9iamVjdCA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2VPYmplY3QnKSxcbiAgICByZXN0ID0gcmVxdWlyZSgnLi9yZXN0Jyk7XG52YXIgd2l0aG91dCA9IHJlc3QoZnVuY3Rpb24oYXJyYXksIHZhbHVlcykge1xuICByZXR1cm4gaXNBcnJheUxpa2VPYmplY3QoYXJyYXkpID8gYmFzZURpZmZlcmVuY2UoYXJyYXksIHZhbHVlcykgOiBbXTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSB3aXRob3V0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
