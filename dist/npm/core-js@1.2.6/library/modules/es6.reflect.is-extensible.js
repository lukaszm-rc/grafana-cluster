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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYucmVmbGVjdC5pcy1leHRlbnNpYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxzQkFBVSxRQUFRLFlBQVI7QUFDVix1QkFBVyxRQUFRLGVBQVI7QUFDWCw0QkFBZ0IsT0FBTyxZQUFQOztBQUNwQixvQkFBUSxRQUFRLENBQVIsRUFBVyxTQUFuQixFQUE4QixFQUFDLGNBQWMsU0FBUyxZQUFULENBQXNCLE1BQXRCLEVBQThCO0FBQ3ZFLDZCQUFTLE1BQVQsRUFEdUU7QUFFdkUsMkJBQU8sZ0JBQWdCLGNBQWMsTUFBZCxDQUFoQixHQUF3QyxJQUF4QyxDQUZnRTtpQkFBOUIsRUFBN0MiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzL2VzNi5yZWZsZWN0LmlzLWV4dGVuc2libGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpLFxuICAgICRpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge2lzRXh0ZW5zaWJsZTogZnVuY3Rpb24gaXNFeHRlbnNpYmxlKHRhcmdldCkge1xuICAgIGFuT2JqZWN0KHRhcmdldCk7XG4gICAgcmV0dXJuICRpc0V4dGVuc2libGUgPyAkaXNFeHRlbnNpYmxlKHRhcmdldCkgOiB0cnVlO1xuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
