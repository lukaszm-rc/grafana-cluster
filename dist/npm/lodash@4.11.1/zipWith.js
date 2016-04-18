'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      (function (process) {
        var rest = require('./rest'),
            unzipWith = require('./unzipWith');
        var zipWith = rest(function (arrays) {
          var length = arrays.length,
              iteratee = length > 1 ? arrays[length - 1] : undefined;
          iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
          return unzipWith(arrays, iteratee);
        });
        module.exports = zipWith;
      })(require('process'));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3ppcFdpdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQUMsVUFBUyxPQUFULEVBQWtCO0FBQ2pCLFlBQUksT0FBTyxRQUFRLFFBQVIsQ0FBUDtZQUNBLFlBQVksUUFBUSxhQUFSLENBQVosQ0FGYTtBQUdqQixZQUFJLFVBQVUsS0FBSyxVQUFTLE1BQVQsRUFBaUI7QUFDbEMsY0FBSSxTQUFTLE9BQU8sTUFBUDtjQUNULFdBQVcsU0FBUyxDQUFULEdBQWEsT0FBTyxTQUFTLENBQVQsQ0FBcEIsR0FBa0MsU0FBbEMsQ0FGbUI7QUFHbEMscUJBQVcsT0FBTyxRQUFQLElBQW1CLFVBQW5CLElBQWlDLE9BQU8sR0FBUCxJQUFjLFFBQWQsQ0FBakMsR0FBMkQsU0FBM0QsQ0FIdUI7QUFJbEMsaUJBQU8sVUFBVSxNQUFWLEVBQWtCLFFBQWxCLENBQVAsQ0FKa0M7U0FBakIsQ0FBZixDQUhhO0FBU2pCLGVBQU8sT0FBUCxHQUFpQixPQUFqQixDQVRpQjtPQUFsQixDQUFELENBVUcsUUFBUSxTQUFSLENBVkgiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvemlwV2l0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuKGZ1bmN0aW9uKHByb2Nlc3MpIHtcbiAgdmFyIHJlc3QgPSByZXF1aXJlKCcuL3Jlc3QnKSxcbiAgICAgIHVuemlwV2l0aCA9IHJlcXVpcmUoJy4vdW56aXBXaXRoJyk7XG4gIHZhciB6aXBXaXRoID0gcmVzdChmdW5jdGlvbihhcnJheXMpIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXlzLmxlbmd0aCxcbiAgICAgICAgaXRlcmF0ZWUgPSBsZW5ndGggPiAxID8gYXJyYXlzW2xlbmd0aCAtIDFdIDogdW5kZWZpbmVkO1xuICAgIGl0ZXJhdGVlID0gdHlwZW9mIGl0ZXJhdGVlID09ICdmdW5jdGlvbicgPyAoYXJyYXlzLnBvcCgpLCBpdGVyYXRlZSkgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHVuemlwV2l0aChhcnJheXMsIGl0ZXJhdGVlKTtcbiAgfSk7XG4gIG1vZHVsZS5leHBvcnRzID0gemlwV2l0aDtcbn0pKHJlcXVpcmUoJ3Byb2Nlc3MnKSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
