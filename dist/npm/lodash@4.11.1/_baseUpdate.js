'use strict';

System.register([], function (_export, _context) {
  var baseGet, baseSet;

  function baseUpdate(object, path, updater, customizer) {
    return baseSet(object, path, updater(baseGet(object, path)), customizer);
  }
  return {
    setters: [],
    execute: function () {
      baseGet = require('./_baseGet');
      baseSet = require('./_baseSet');
      module.exports = baseUpdate;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlVXBkYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxVQUFULENBQW9CLE1BQXBCLEVBQTRCLElBQTVCLEVBQWtDLE9BQWxDLEVBQTJDLFVBQTNDLEVBQXVEO0FBQ3JELFdBQU8sUUFBUSxNQUFSLEVBQWdCLElBQWhCLEVBQXNCLFFBQVEsUUFBUSxNQUFSLEVBQWdCLElBQWhCLENBQVIsQ0FBdEIsRUFBc0QsVUFBdEQsQ0FBUCxDQURxRDtHQUF2RDs7OztBQUZJLGdCQUFVLFFBQVEsWUFBUjtBQUNWLGdCQUFVLFFBQVEsWUFBUjtBQUlkLGFBQU8sT0FBUCxHQUFpQixVQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fYmFzZVVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0JyksXG4gICAgYmFzZVNldCA9IHJlcXVpcmUoJy4vX2Jhc2VTZXQnKTtcbmZ1bmN0aW9uIGJhc2VVcGRhdGUob2JqZWN0LCBwYXRoLCB1cGRhdGVyLCBjdXN0b21pemVyKSB7XG4gIHJldHVybiBiYXNlU2V0KG9iamVjdCwgcGF0aCwgdXBkYXRlcihiYXNlR2V0KG9iamVjdCwgcGF0aCkpLCBjdXN0b21pemVyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVwZGF0ZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
