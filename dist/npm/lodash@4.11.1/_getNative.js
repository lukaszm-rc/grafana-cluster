'use strict';

System.register([], function (_export, _context) {
  var isNative;

  function getNative(object, key) {
    var value = object[key];
    return isNative(value) ? value : undefined;
  }
  return {
    setters: [],
    execute: function () {
      isNative = require('./isNative');
      module.exports = getNative;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19nZXROYXRpdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxXQUFTLFNBQVQsQ0FBbUIsTUFBbkIsRUFBMkIsR0FBM0IsRUFBZ0M7QUFDOUIsUUFBSSxRQUFRLE9BQU8sR0FBUCxDQUFSLENBRDBCO0FBRTlCLFdBQU8sU0FBUyxLQUFULElBQWtCLEtBQWxCLEdBQTBCLFNBQTFCLENBRnVCO0dBQWhDOzs7O0FBREksaUJBQVcsUUFBUSxZQUFSO0FBS2YsYUFBTyxPQUFQLEdBQWlCLFNBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19nZXROYXRpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBpc05hdGl2ZSA9IHJlcXVpcmUoJy4vaXNOYXRpdmUnKTtcbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgcmV0dXJuIGlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
