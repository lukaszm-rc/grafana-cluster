'use strict';

System.register([], function (_export, _context) {
  var isObject;
  return {
    setters: [],
    execute: function () {
      isObject = require('./$.is-object');

      require('./$.object-sap')('isExtensible', function ($isExtensible) {
        return function isExtensible(it) {
          return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
        };
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmlzLWV4dGVuc2libGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGlCQUFXLFFBQVEsZUFBUjs7QUFDZixjQUFRLGdCQUFSLEVBQTBCLGNBQTFCLEVBQTBDLFVBQVMsYUFBVCxFQUF3QjtBQUNoRSxlQUFPLFNBQVMsWUFBVCxDQUFzQixFQUF0QixFQUEwQjtBQUMvQixpQkFBTyxTQUFTLEVBQVQsSUFBZSxnQkFBZ0IsY0FBYyxFQUFkLENBQWhCLEdBQW9DLElBQXBDLEdBQTJDLEtBQTFELENBRHdCO1NBQTFCLENBRHlEO09BQXhCLENBQTFDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmlzLWV4dGVuc2libGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcbnJlcXVpcmUoJy4vJC5vYmplY3Qtc2FwJykoJ2lzRXh0ZW5zaWJsZScsIGZ1bmN0aW9uKCRpc0V4dGVuc2libGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGlzRXh0ZW5zaWJsZShpdCkge1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyAkaXNFeHRlbnNpYmxlID8gJGlzRXh0ZW5zaWJsZShpdCkgOiB0cnVlIDogZmFsc2U7XG4gIH07XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
