'use strict';

System.register([], function (_export, _context) {
    var $export, define, create;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            define = require('./$.object-define');
            create = require('./$').create;

            $export($export.S + $export.F, 'Object', { make: function make(proto, mixin) {
                    return define(create(proto), mixin);
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvY29yZS5vYmplY3QubWFrZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxZQUFSO0FBQ1YscUJBQVMsUUFBUSxtQkFBUjtBQUNULHFCQUFTLFFBQVEsS0FBUixFQUFlLE1BQWY7O0FBQ2Isb0JBQVEsUUFBUSxDQUFSLEdBQVksUUFBUSxDQUFSLEVBQVcsUUFBL0IsRUFBeUMsRUFBQyxNQUFNLGNBQVMsS0FBVCxFQUFnQixLQUFoQixFQUF1QjtBQUNuRSwyQkFBTyxPQUFPLE9BQU8sS0FBUCxDQUFQLEVBQXNCLEtBQXRCLENBQVAsQ0FEbUU7aUJBQXZCLEVBQWhEIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvY29yZS5vYmplY3QubWFrZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgZGVmaW5lID0gcmVxdWlyZSgnLi8kLm9iamVjdC1kZWZpbmUnKSxcbiAgICBjcmVhdGUgPSByZXF1aXJlKCcuLyQnKS5jcmVhdGU7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHttYWtlOiBmdW5jdGlvbihwcm90bywgbWl4aW4pIHtcbiAgICByZXR1cm4gZGVmaW5lKGNyZWF0ZShwcm90byksIG1peGluKTtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
