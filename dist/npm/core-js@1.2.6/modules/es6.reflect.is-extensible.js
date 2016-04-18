'use strict';

System.register([], function (_export, _context) {
    var $export, anObject, $isExtensible;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            anObject = require('./$.an-object');
            $isExtensible = Object.isExtensible;

            $export($export.S, 'Reflect', { isExtensible: function isExtensible(target) {
                    anObject(target);
                    return $isExtensible ? $isExtensible(target) : true;
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnJlZmxlY3QuaXMtZXh0ZW5zaWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxZQUFSO0FBQ1YsdUJBQVcsUUFBUSxlQUFSO0FBQ1gsNEJBQWdCLE9BQU8sWUFBUDs7QUFDcEIsb0JBQVEsUUFBUSxDQUFSLEVBQVcsU0FBbkIsRUFBOEIsRUFBQyxjQUFjLFNBQVMsWUFBVCxDQUFzQixNQUF0QixFQUE4QjtBQUN2RSw2QkFBUyxNQUFULEVBRHVFO0FBRXZFLDJCQUFPLGdCQUFnQixjQUFjLE1BQWQsQ0FBaEIsR0FBd0MsSUFBeEMsQ0FGZ0U7aUJBQTlCLEVBQTdDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnJlZmxlY3QuaXMtZXh0ZW5zaWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JyksXG4gICAgJGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGU7XG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7aXNFeHRlbnNpYmxlOiBmdW5jdGlvbiBpc0V4dGVuc2libGUodGFyZ2V0KSB7XG4gICAgYW5PYmplY3QodGFyZ2V0KTtcbiAgICByZXR1cm4gJGlzRXh0ZW5zaWJsZSA/ICRpc0V4dGVuc2libGUodGFyZ2V0KSA6IHRydWU7XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
