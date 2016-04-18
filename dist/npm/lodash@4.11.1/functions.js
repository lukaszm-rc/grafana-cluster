'use strict';

System.register([], function (_export, _context) {
  var baseFunctions, keys;

  function functions(object) {
    return object == null ? [] : baseFunctions(object, keys(object));
  }
  return {
    setters: [],
    execute: function () {
      baseFunctions = require('./_baseFunctions');
      keys = require('./keys');
      module.exports = functions;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2Z1bmN0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsU0FBVCxDQUFtQixNQUFuQixFQUEyQjtBQUN6QixXQUFPLFVBQVUsSUFBVixHQUFpQixFQUFqQixHQUFzQixjQUFjLE1BQWQsRUFBc0IsS0FBSyxNQUFMLENBQXRCLENBQXRCLENBRGtCO0dBQTNCOzs7O0FBRkksc0JBQWdCLFFBQVEsa0JBQVI7QUFDaEIsYUFBTyxRQUFRLFFBQVI7QUFJWCxhQUFPLE9BQVAsR0FBaUIsU0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvZnVuY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUZ1bmN0aW9ucyA9IHJlcXVpcmUoJy4vX2Jhc2VGdW5jdGlvbnMnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5mdW5jdGlvbiBmdW5jdGlvbnMob2JqZWN0KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IFtdIDogYmFzZUZ1bmN0aW9ucyhvYmplY3QsIGtleXMob2JqZWN0KSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9ucztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
