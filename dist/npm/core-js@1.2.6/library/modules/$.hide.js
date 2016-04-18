'use strict';

System.register([], function (_export, _context) {
  var $, createDesc;
  return {
    setters: [],
    execute: function () {
      $ = require('./$');
      createDesc = require('./$.property-desc');

      module.exports = require('./$.descriptors') ? function (object, key, value) {
        return $.setDesc(object, key, createDesc(1, value));
      } : function (object, key, value) {
        object[key] = value;
        return object;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmhpZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLFVBQUksUUFBUSxLQUFSO0FBQ0osbUJBQWEsUUFBUSxtQkFBUjs7QUFDakIsYUFBTyxPQUFQLEdBQWlCLFFBQVEsaUJBQVIsSUFBNkIsVUFBUyxNQUFULEVBQWlCLEdBQWpCLEVBQXNCLEtBQXRCLEVBQTZCO0FBQ3pFLGVBQU8sRUFBRSxPQUFGLENBQVUsTUFBVixFQUFrQixHQUFsQixFQUF1QixXQUFXLENBQVgsRUFBYyxLQUFkLENBQXZCLENBQVAsQ0FEeUU7T0FBN0IsR0FFMUMsVUFBUyxNQUFULEVBQWlCLEdBQWpCLEVBQXNCLEtBQXRCLEVBQTZCO0FBQy9CLGVBQU8sR0FBUCxJQUFjLEtBQWQsQ0FEK0I7QUFFL0IsZUFBTyxNQUFQLENBRitCO09BQTdCIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmhpZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkID0gcmVxdWlyZSgnLi8kJyksXG4gICAgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiAkLnNldERlc2Mob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
