'use strict';

System.register([], function (_export, _context) {
  var baseEach;

  function baseEvery(collection, predicate) {
    var result = true;
    baseEach(collection, function (value, index, collection) {
      result = !!predicate(value, index, collection);
      return result;
    });
    return result;
  }
  return {
    setters: [],
    execute: function () {
      baseEach = require('./_baseEach');
      module.exports = baseEvery;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlRXZlcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxXQUFTLFNBQVQsQ0FBbUIsVUFBbkIsRUFBK0IsU0FBL0IsRUFBMEM7QUFDeEMsUUFBSSxTQUFTLElBQVQsQ0FEb0M7QUFFeEMsYUFBUyxVQUFULEVBQXFCLFVBQVMsS0FBVCxFQUFnQixLQUFoQixFQUF1QixVQUF2QixFQUFtQztBQUN0RCxlQUFTLENBQUMsQ0FBQyxVQUFVLEtBQVYsRUFBaUIsS0FBakIsRUFBd0IsVUFBeEIsQ0FBRCxDQUQ0QztBQUV0RCxhQUFPLE1BQVAsQ0FGc0Q7S0FBbkMsQ0FBckIsQ0FGd0M7QUFNeEMsV0FBTyxNQUFQLENBTndDO0dBQTFDOzs7O0FBREksaUJBQVcsUUFBUSxhQUFSO0FBU2YsYUFBTyxPQUFQLEdBQWlCLFNBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19iYXNlRXZlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlRWFjaCA9IHJlcXVpcmUoJy4vX2Jhc2VFYWNoJyk7XG5mdW5jdGlvbiBiYXNlRXZlcnkoY29sbGVjdGlvbiwgcHJlZGljYXRlKSB7XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICBiYXNlRWFjaChjb2xsZWN0aW9uLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pIHtcbiAgICByZXN1bHQgPSAhIXByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRXZlcnk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
