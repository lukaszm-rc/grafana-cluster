/* */
'use strict';

System.register([], function (_export, _context) {
    var $export, context, INCLUDES;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            context = require('./$.string-context');
            INCLUDES = 'includes';

            $export($export.P + $export.F * require('./$.fails-is-regexp')(INCLUDES), 'String', { includes: function includes(searchString) {
                    return !! ~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnN0cmluZy5pbmNsdWRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7QUFDSSxzQkFBVSxRQUFRLFlBQVI7QUFDVixzQkFBVSxRQUFRLG9CQUFSO0FBQ1YsdUJBQVc7O0FBQ2Ysb0JBQVEsUUFBUSxDQUFSLEdBQVksUUFBUSxDQUFSLEdBQVksUUFBUSxxQkFBUixFQUErQixRQUEvQixDQUFaLEVBQXNELFFBQTFFLEVBQW9GLEVBQUMsVUFBVSxTQUFTLFFBQVQsQ0FBa0IsWUFBbEIsRUFBZ0M7QUFDM0gsMkJBQU8sQ0FBQyxFQUFDLENBQUMsUUFBUSxJQUFSLEVBQWMsWUFBZCxFQUE0QixRQUE1QixFQUFzQyxPQUF0QyxDQUE4QyxZQUE5QyxFQUE0RCxVQUFVLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUIsVUFBVSxDQUFWLENBQXZCLEdBQXNDLFNBQXRDLENBQTdELENBRGtIO2lCQUFoQyxFQUEvRiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5zdHJpbmcuaW5jbHVkZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgIGNvbnRleHQgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWNvbnRleHQnKSxcbiAgICBJTkNMVURFUyA9ICdpbmNsdWRlcyc7XG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vJC5mYWlscy1pcy1yZWdleHAnKShJTkNMVURFUyksICdTdHJpbmcnLCB7aW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKHNlYXJjaFN0cmluZykge1xuICAgIHJldHVybiAhIX5jb250ZXh0KHRoaXMsIHNlYXJjaFN0cmluZywgSU5DTFVERVMpLmluZGV4T2Yoc2VhcmNoU3RyaW5nLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
