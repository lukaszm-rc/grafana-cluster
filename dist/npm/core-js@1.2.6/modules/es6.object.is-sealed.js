'use strict';

System.register([], function (_export, _context) {
  var isObject;
  return {
    setters: [],
    execute: function () {
      isObject = require('./$.is-object');

      require('./$.object-sap')('isSealed', function ($isSealed) {
        return function isSealed(it) {
          return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
        };
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm9iamVjdC5pcy1zZWFsZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGlCQUFXLFFBQVEsZUFBUjs7QUFDZixjQUFRLGdCQUFSLEVBQTBCLFVBQTFCLEVBQXNDLFVBQVMsU0FBVCxFQUFvQjtBQUN4RCxlQUFPLFNBQVMsUUFBVCxDQUFrQixFQUFsQixFQUFzQjtBQUMzQixpQkFBTyxTQUFTLEVBQVQsSUFBZSxZQUFZLFVBQVUsRUFBVixDQUFaLEdBQTRCLEtBQTVCLEdBQW9DLElBQW5ELENBRG9CO1NBQXRCLENBRGlEO09BQXBCLENBQXRDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm9iamVjdC5pcy1zZWFsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcbnJlcXVpcmUoJy4vJC5vYmplY3Qtc2FwJykoJ2lzU2VhbGVkJywgZnVuY3Rpb24oJGlzU2VhbGVkKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpc1NlYWxlZChpdCkge1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyAkaXNTZWFsZWQgPyAkaXNTZWFsZWQoaXQpIDogZmFsc2UgOiB0cnVlO1xuICB9O1xufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
