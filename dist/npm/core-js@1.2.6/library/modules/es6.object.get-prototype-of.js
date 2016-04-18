'use strict';

System.register([], function (_export, _context) {
  var toObject;
  return {
    setters: [],
    execute: function () {
      toObject = require('./$.to-object');

      require('./$.object-sap')('getPrototypeOf', function ($getPrototypeOf) {
        return function getPrototypeOf(it) {
          return $getPrototypeOf(toObject(it));
        };
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGlCQUFXLFFBQVEsZUFBUjs7QUFDZixjQUFRLGdCQUFSLEVBQTBCLGdCQUExQixFQUE0QyxVQUFTLGVBQVQsRUFBMEI7QUFDcEUsZUFBTyxTQUFTLGNBQVQsQ0FBd0IsRUFBeEIsRUFBNEI7QUFDakMsaUJBQU8sZ0JBQWdCLFNBQVMsRUFBVCxDQUFoQixDQUFQLENBRGlDO1NBQTVCLENBRDZEO09BQTFCLENBQTVDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKTtcbnJlcXVpcmUoJy4vJC5vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24oJGdldFByb3RvdHlwZU9mKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCkge1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
