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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYucmVmbGVjdC5wcmV2ZW50LWV4dGVuc2lvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGdCQUFVLFFBQVEsWUFBUjtBQUNWLGlCQUFXLFFBQVEsZUFBUjtBQUNYLDJCQUFxQixPQUFPLGlCQUFQOztBQUN6QixjQUFRLFFBQVEsQ0FBUixFQUFXLFNBQW5CLEVBQThCLEVBQUMsbUJBQW1CLFNBQVMsaUJBQVQsQ0FBMkIsTUFBM0IsRUFBbUM7QUFDakYsbUJBQVMsTUFBVCxFQURpRjtBQUVqRixjQUFJO0FBQ0YsZ0JBQUksa0JBQUosRUFDRSxtQkFBbUIsTUFBbkIsRUFERjtBQUVBLG1CQUFPLElBQVAsQ0FIRTtXQUFKLENBSUUsT0FBTyxDQUFQLEVBQVU7QUFDVixtQkFBTyxLQUFQLENBRFU7V0FBVjtTQU40QyxFQUFsRCIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvZXM2LnJlZmxlY3QucHJldmVudC1leHRlbnNpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKSxcbiAgICAkcHJldmVudEV4dGVuc2lvbnMgPSBPYmplY3QucHJldmVudEV4dGVuc2lvbnM7XG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7cHJldmVudEV4dGVuc2lvbnM6IGZ1bmN0aW9uIHByZXZlbnRFeHRlbnNpb25zKHRhcmdldCkge1xuICAgIGFuT2JqZWN0KHRhcmdldCk7XG4gICAgdHJ5IHtcbiAgICAgIGlmICgkcHJldmVudEV4dGVuc2lvbnMpXG4gICAgICAgICRwcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
