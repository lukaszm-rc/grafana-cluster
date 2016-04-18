'use strict';

System.register([], function (_export, _context) {
    var $export;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');

            $export($export.S, 'Reflect', { has: function has(target, propertyKey) {
                    return propertyKey in target;
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnJlZmxlY3QuaGFzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxzQkFBVSxRQUFRLFlBQVI7O0FBQ2Qsb0JBQVEsUUFBUSxDQUFSLEVBQVcsU0FBbkIsRUFBOEIsRUFBQyxLQUFLLFNBQVMsR0FBVCxDQUFhLE1BQWIsRUFBcUIsV0FBckIsRUFBa0M7QUFDbEUsMkJBQU8sZUFBZSxNQUFmLENBRDJEO2lCQUFsQyxFQUFwQyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5yZWZsZWN0Lmhhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7aGFzOiBmdW5jdGlvbiBoYXModGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgIHJldHVybiBwcm9wZXJ0eUtleSBpbiB0YXJnZXQ7XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
