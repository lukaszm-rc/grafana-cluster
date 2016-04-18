/* */
'use strict';

System.register([], function (_export, _context) {
    var $export, toLength, context, STARTS_WITH, $startsWith;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            toLength = require('./$.to-length');
            context = require('./$.string-context');
            STARTS_WITH = 'startsWith';
            $startsWith = ''[STARTS_WITH];

            $export($export.P + $export.F * require('./$.fails-is-regexp')(STARTS_WITH), 'String', { startsWith: function startsWith(searchString) {
                    var that = context(this, searchString, STARTS_WITH),
                        $$ = arguments,
                        index = toLength(Math.min($$.length > 1 ? $$[1] : undefined, that.length)),
                        search = String(searchString);
                    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLnN0YXJ0cy13aXRoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQUNJLHNCQUFVLFFBQVEsWUFBUjtBQUNWLHVCQUFXLFFBQVEsZUFBUjtBQUNYLHNCQUFVLFFBQVEsb0JBQVI7QUFDViwwQkFBYztBQUNkLDBCQUFjLEdBQUcsV0FBSDs7QUFDbEIsb0JBQVEsUUFBUSxDQUFSLEdBQVksUUFBUSxDQUFSLEdBQVksUUFBUSxxQkFBUixFQUErQixXQUEvQixDQUFaLEVBQXlELFFBQTdFLEVBQXVGLEVBQUMsWUFBWSxTQUFTLFVBQVQsQ0FBb0IsWUFBcEIsRUFBa0M7QUFDbEksd0JBQUksT0FBTyxRQUFRLElBQVIsRUFBYyxZQUFkLEVBQTRCLFdBQTVCLENBQVA7d0JBQ0EsS0FBSyxTQUFMO3dCQUNBLFFBQVEsU0FBUyxLQUFLLEdBQUwsQ0FBUyxHQUFHLE1BQUgsR0FBWSxDQUFaLEdBQWdCLEdBQUcsQ0FBSCxDQUFoQixHQUF3QixTQUF4QixFQUFtQyxLQUFLLE1BQUwsQ0FBckQsQ0FBUjt3QkFDQSxTQUFTLE9BQU8sWUFBUCxDQUFULENBSjhIO0FBS2xJLDJCQUFPLGNBQWMsWUFBWSxJQUFaLENBQWlCLElBQWpCLEVBQXVCLE1BQXZCLEVBQStCLEtBQS9CLENBQWQsR0FBc0QsS0FBSyxLQUFMLENBQVcsS0FBWCxFQUFrQixRQUFRLE9BQU8sTUFBUCxDQUExQixLQUE2QyxNQUE3QyxDQUxxRTtpQkFBbEMsRUFBcEciLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuc3RhcnRzLXdpdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpLFxuICAgIGNvbnRleHQgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWNvbnRleHQnKSxcbiAgICBTVEFSVFNfV0lUSCA9ICdzdGFydHNXaXRoJyxcbiAgICAkc3RhcnRzV2l0aCA9ICcnW1NUQVJUU19XSVRIXTtcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi8kLmZhaWxzLWlzLXJlZ2V4cCcpKFNUQVJUU19XSVRIKSwgJ1N0cmluZycsIHtzdGFydHNXaXRoOiBmdW5jdGlvbiBzdGFydHNXaXRoKHNlYXJjaFN0cmluZykge1xuICAgIHZhciB0aGF0ID0gY29udGV4dCh0aGlzLCBzZWFyY2hTdHJpbmcsIFNUQVJUU19XSVRIKSxcbiAgICAgICAgJCQgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gdG9MZW5ndGgoTWF0aC5taW4oJCQubGVuZ3RoID4gMSA/ICQkWzFdIDogdW5kZWZpbmVkLCB0aGF0Lmxlbmd0aCkpLFxuICAgICAgICBzZWFyY2ggPSBTdHJpbmcoc2VhcmNoU3RyaW5nKTtcbiAgICByZXR1cm4gJHN0YXJ0c1dpdGggPyAkc3RhcnRzV2l0aC5jYWxsKHRoYXQsIHNlYXJjaCwgaW5kZXgpIDogdGhhdC5zbGljZShpbmRleCwgaW5kZXggKyBzZWFyY2gubGVuZ3RoKSA9PT0gc2VhcmNoO1xuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
