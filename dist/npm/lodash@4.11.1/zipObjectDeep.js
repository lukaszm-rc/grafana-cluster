'use strict';

System.register([], function (_export, _context) {
  var baseSet, baseZipObject;

  function zipObjectDeep(props, values) {
    return baseZipObject(props || [], values || [], baseSet);
  }
  return {
    setters: [],
    execute: function () {
      baseSet = require('./_baseSet');
      baseZipObject = require('./_baseZipObject');
      module.exports = zipObjectDeep;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3ppcE9iamVjdERlZXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLGFBQVQsQ0FBdUIsS0FBdkIsRUFBOEIsTUFBOUIsRUFBc0M7QUFDcEMsV0FBTyxjQUFjLFNBQVMsRUFBVCxFQUFhLFVBQVUsRUFBVixFQUFjLE9BQXpDLENBQVAsQ0FEb0M7R0FBdEM7Ozs7QUFGSSxnQkFBVSxRQUFRLFlBQVI7QUFDVixzQkFBZ0IsUUFBUSxrQkFBUjtBQUlwQixhQUFPLE9BQVAsR0FBaUIsYUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvemlwT2JqZWN0RGVlcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VTZXQgPSByZXF1aXJlKCcuL19iYXNlU2V0JyksXG4gICAgYmFzZVppcE9iamVjdCA9IHJlcXVpcmUoJy4vX2Jhc2VaaXBPYmplY3QnKTtcbmZ1bmN0aW9uIHppcE9iamVjdERlZXAocHJvcHMsIHZhbHVlcykge1xuICByZXR1cm4gYmFzZVppcE9iamVjdChwcm9wcyB8fCBbXSwgdmFsdWVzIHx8IFtdLCBiYXNlU2V0KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gemlwT2JqZWN0RGVlcDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
