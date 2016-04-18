'use strict';

System.register([], function (_export, _context) {
  var isObject;
  return {
    setters: [],
    execute: function () {
      isObject = require('./$.is-object');

      require('./$.object-sap')('preventExtensions', function ($preventExtensions) {
        return function preventExtensions(it) {
          return $preventExtensions && isObject(it) ? $preventExtensions(it) : it;
        };
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm9iamVjdC5wcmV2ZW50LWV4dGVuc2lvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGlCQUFXLFFBQVEsZUFBUjs7QUFDZixjQUFRLGdCQUFSLEVBQTBCLG1CQUExQixFQUErQyxVQUFTLGtCQUFULEVBQTZCO0FBQzFFLGVBQU8sU0FBUyxpQkFBVCxDQUEyQixFQUEzQixFQUErQjtBQUNwQyxpQkFBTyxzQkFBc0IsU0FBUyxFQUFULENBQXRCLEdBQXFDLG1CQUFtQixFQUFuQixDQUFyQyxHQUE4RCxFQUE5RCxDQUQ2QjtTQUEvQixDQURtRTtPQUE3QixDQUEvQyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5vYmplY3QucHJldmVudC1leHRlbnNpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XG5yZXF1aXJlKCcuLyQub2JqZWN0LXNhcCcpKCdwcmV2ZW50RXh0ZW5zaW9ucycsIGZ1bmN0aW9uKCRwcmV2ZW50RXh0ZW5zaW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnMoaXQpIHtcbiAgICByZXR1cm4gJHByZXZlbnRFeHRlbnNpb25zICYmIGlzT2JqZWN0KGl0KSA/ICRwcmV2ZW50RXh0ZW5zaW9ucyhpdCkgOiBpdDtcbiAgfTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
