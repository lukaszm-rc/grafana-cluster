'use strict';

System.register([], function (_export, _context) {
  var $export, anObject, $preventExtensions;
  return {
    setters: [],
    execute: function () {
      $export = require('./$.export');
      anObject = require('./$.an-object');
      $preventExtensions = Object.preventExtensions;

      $export($export.S, 'Reflect', { preventExtensions: function preventExtensions(target) {
          anObject(target);
          try {
            if ($preventExtensions) $preventExtensions(target);
            return true;
          } catch (e) {
            return false;
          }
        } });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnJlZmxlY3QucHJldmVudC1leHRlbnNpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxnQkFBVSxRQUFRLFlBQVI7QUFDVixpQkFBVyxRQUFRLGVBQVI7QUFDWCwyQkFBcUIsT0FBTyxpQkFBUDs7QUFDekIsY0FBUSxRQUFRLENBQVIsRUFBVyxTQUFuQixFQUE4QixFQUFDLG1CQUFtQixTQUFTLGlCQUFULENBQTJCLE1BQTNCLEVBQW1DO0FBQ2pGLG1CQUFTLE1BQVQsRUFEaUY7QUFFakYsY0FBSTtBQUNGLGdCQUFJLGtCQUFKLEVBQ0UsbUJBQW1CLE1BQW5CLEVBREY7QUFFQSxtQkFBTyxJQUFQLENBSEU7V0FBSixDQUlFLE9BQU8sQ0FBUCxFQUFVO0FBQ1YsbUJBQU8sS0FBUCxDQURVO1dBQVY7U0FONEMsRUFBbEQiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy9lczYucmVmbGVjdC5wcmV2ZW50LWV4dGVuc2lvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpLFxuICAgICRwcmV2ZW50RXh0ZW5zaW9ucyA9IE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucztcbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtwcmV2ZW50RXh0ZW5zaW9uczogZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnModGFyZ2V0KSB7XG4gICAgYW5PYmplY3QodGFyZ2V0KTtcbiAgICB0cnkge1xuICAgICAgaWYgKCRwcmV2ZW50RXh0ZW5zaW9ucylcbiAgICAgICAgJHByZXZlbnRFeHRlbnNpb25zKHRhcmdldCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
