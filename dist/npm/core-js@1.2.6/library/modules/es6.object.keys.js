'use strict';

System.register([], function (_export, _context) {
  var toObject;
  return {
    setters: [],
    execute: function () {
      toObject = require('./$.to-object');

      require('./$.object-sap')('keys', function ($keys) {
        return function keys(it) {
          return $keys(toObject(it));
        };
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGlCQUFXLFFBQVEsZUFBUjs7QUFDZixjQUFRLGdCQUFSLEVBQTBCLE1BQTFCLEVBQWtDLFVBQVMsS0FBVCxFQUFnQjtBQUNoRCxlQUFPLFNBQVMsSUFBVCxDQUFjLEVBQWQsRUFBa0I7QUFDdkIsaUJBQU8sTUFBTSxTQUFTLEVBQVQsQ0FBTixDQUFQLENBRHVCO1NBQWxCLENBRHlDO09BQWhCLENBQWxDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKTtcbnJlcXVpcmUoJy4vJC5vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbigka2V5cykge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
