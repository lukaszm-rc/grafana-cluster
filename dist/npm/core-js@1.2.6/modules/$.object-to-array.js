'use strict';

System.register([], function (_export, _context) {
  var $, toIObject, isEnum;
  return {
    setters: [],
    execute: function () {
      $ = require('./$');
      toIObject = require('./$.to-iobject');
      isEnum = $.isEnum;

      module.exports = function (isEntries) {
        return function (it) {
          var O = toIObject(it),
              keys = $.getKeys(O),
              length = keys.length,
              i = 0,
              result = [],
              key;
          while (length > i) {
            if (isEnum.call(O, key = keys[i++])) {
              result.push(isEntries ? [key, O[key]] : O[key]);
            }
          }return result;
        };
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5vYmplY3QtdG8tYXJyYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLFVBQUksUUFBUSxLQUFSO0FBQ0osa0JBQVksUUFBUSxnQkFBUjtBQUNaLGVBQVMsRUFBRSxNQUFGOztBQUNiLGFBQU8sT0FBUCxHQUFpQixVQUFTLFNBQVQsRUFBb0I7QUFDbkMsZUFBTyxVQUFTLEVBQVQsRUFBYTtBQUNsQixjQUFJLElBQUksVUFBVSxFQUFWLENBQUo7Y0FDQSxPQUFPLEVBQUUsT0FBRixDQUFVLENBQVYsQ0FBUDtjQUNBLFNBQVMsS0FBSyxNQUFMO2NBQ1QsSUFBSSxDQUFKO2NBQ0EsU0FBUyxFQUFUO2NBQ0EsR0FMSixDQURrQjtBQU9sQixpQkFBTyxTQUFTLENBQVQ7QUFDTCxnQkFBSSxPQUFPLElBQVAsQ0FBWSxDQUFaLEVBQWUsTUFBTSxLQUFLLEdBQUwsQ0FBTixDQUFuQixFQUFxQztBQUNuQyxxQkFBTyxJQUFQLENBQVksWUFBWSxDQUFDLEdBQUQsRUFBTSxFQUFFLEdBQUYsQ0FBTixDQUFaLEdBQTRCLEVBQUUsR0FBRixDQUE1QixDQUFaLENBRG1DO2FBQXJDO1dBREYsT0FJTyxNQUFQLENBWGtCO1NBQWIsQ0FENEI7T0FBcEIiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy8kLm9iamVjdC10by1hcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICQgPSByZXF1aXJlKCcuLyQnKSxcbiAgICB0b0lPYmplY3QgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpLFxuICAgIGlzRW51bSA9ICQuaXNFbnVtO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc0VudHJpZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGl0KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoaXQpLFxuICAgICAgICBrZXlzID0gJC5nZXRLZXlzKE8pLFxuICAgICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgICBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGkpXG4gICAgICBpZiAoaXNFbnVtLmNhbGwoTywga2V5ID0ga2V5c1tpKytdKSkge1xuICAgICAgICByZXN1bHQucHVzaChpc0VudHJpZXMgPyBba2V5LCBPW2tleV1dIDogT1trZXldKTtcbiAgICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
