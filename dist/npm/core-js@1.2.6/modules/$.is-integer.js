'use strict';

System.register([], function (_export, _context) {
  var isObject, floor;
  return {
    setters: [],
    execute: function () {
      isObject = require('./$.is-object');
      floor = Math.floor;

      module.exports = function isInteger(it) {
        return !isObject(it) && isFinite(it) && floor(it) === it;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5pcy1pbnRlZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxpQkFBVyxRQUFRLGVBQVI7QUFDWCxjQUFRLEtBQUssS0FBTDs7QUFDWixhQUFPLE9BQVAsR0FBaUIsU0FBUyxTQUFULENBQW1CLEVBQW5CLEVBQXVCO0FBQ3RDLGVBQU8sQ0FBQyxTQUFTLEVBQVQsQ0FBRCxJQUFpQixTQUFTLEVBQVQsQ0FBakIsSUFBaUMsTUFBTSxFQUFOLE1BQWMsRUFBZCxDQURGO09BQXZCIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5pcy1pbnRlZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JyksXG4gICAgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0ludGVnZXIoaXQpIHtcbiAgcmV0dXJuICFpc09iamVjdChpdCkgJiYgaXNGaW5pdGUoaXQpICYmIGZsb29yKGl0KSA9PT0gaXQ7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
