'use strict';

System.register([], function (_export, _context) {
  var isObject;
  return {
    setters: [],
    execute: function () {
      isObject = require('./$.is-object');

      require('./$.object-sap')('freeze', function ($freeze) {
        return function freeze(it) {
          return $freeze && isObject(it) ? $freeze(it) : it;
        };
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGlCQUFXLFFBQVEsZUFBUjs7QUFDZixjQUFRLGdCQUFSLEVBQTBCLFFBQTFCLEVBQW9DLFVBQVMsT0FBVCxFQUFrQjtBQUNwRCxlQUFPLFNBQVMsTUFBVCxDQUFnQixFQUFoQixFQUFvQjtBQUN6QixpQkFBTyxXQUFXLFNBQVMsRUFBVCxDQUFYLEdBQTBCLFFBQVEsRUFBUixDQUExQixHQUF3QyxFQUF4QyxDQURrQjtTQUFwQixDQUQ2QztPQUFsQixDQUFwQyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XG5yZXF1aXJlKCcuLyQub2JqZWN0LXNhcCcpKCdmcmVlemUnLCBmdW5jdGlvbigkZnJlZXplKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmcmVlemUoaXQpIHtcbiAgICByZXR1cm4gJGZyZWV6ZSAmJiBpc09iamVjdChpdCkgPyAkZnJlZXplKGl0KSA6IGl0O1xuICB9O1xufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
