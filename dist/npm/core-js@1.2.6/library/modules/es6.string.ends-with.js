/* */
'use strict';

System.register([], function (_export, _context) {
    var $export, toLength, context, ENDS_WITH, $endsWith;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            toLength = require('./$.to-length');
            context = require('./$.string-context');
            ENDS_WITH = 'endsWith';
            $endsWith = ''[ENDS_WITH];

            $export($export.P + $export.F * require('./$.fails-is-regexp')(ENDS_WITH), 'String', { endsWith: function endsWith(searchString) {
                    var that = context(this, searchString, ENDS_WITH),
                        $$ = arguments,
                        endPosition = $$.length > 1 ? $$[1] : undefined,
                        len = toLength(that.length),
                        end = endPosition === undefined ? len : Math.min(toLength(endPosition), len),
                        search = String(searchString);
                    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7QUFDSSxzQkFBVSxRQUFRLFlBQVI7QUFDVix1QkFBVyxRQUFRLGVBQVI7QUFDWCxzQkFBVSxRQUFRLG9CQUFSO0FBQ1Ysd0JBQVk7QUFDWix3QkFBWSxHQUFHLFNBQUg7O0FBQ2hCLG9CQUFRLFFBQVEsQ0FBUixHQUFZLFFBQVEsQ0FBUixHQUFZLFFBQVEscUJBQVIsRUFBK0IsU0FBL0IsQ0FBWixFQUF1RCxRQUEzRSxFQUFxRixFQUFDLFVBQVUsU0FBUyxRQUFULENBQWtCLFlBQWxCLEVBQWdDO0FBQzVILHdCQUFJLE9BQU8sUUFBUSxJQUFSLEVBQWMsWUFBZCxFQUE0QixTQUE1QixDQUFQO3dCQUNBLEtBQUssU0FBTDt3QkFDQSxjQUFjLEdBQUcsTUFBSCxHQUFZLENBQVosR0FBZ0IsR0FBRyxDQUFILENBQWhCLEdBQXdCLFNBQXhCO3dCQUNkLE1BQU0sU0FBUyxLQUFLLE1BQUwsQ0FBZjt3QkFDQSxNQUFNLGdCQUFnQixTQUFoQixHQUE0QixHQUE1QixHQUFrQyxLQUFLLEdBQUwsQ0FBUyxTQUFTLFdBQVQsQ0FBVCxFQUFnQyxHQUFoQyxDQUFsQzt3QkFDTixTQUFTLE9BQU8sWUFBUCxDQUFULENBTndIO0FBTzVILDJCQUFPLFlBQVksVUFBVSxJQUFWLENBQWUsSUFBZixFQUFxQixNQUFyQixFQUE2QixHQUE3QixDQUFaLEdBQWdELEtBQUssS0FBTCxDQUFXLE1BQU0sT0FBTyxNQUFQLEVBQWUsR0FBaEMsTUFBeUMsTUFBekMsQ0FQcUU7aUJBQWhDLEVBQWhHIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgdG9MZW5ndGggPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJyksXG4gICAgY29udGV4dCA9IHJlcXVpcmUoJy4vJC5zdHJpbmctY29udGV4dCcpLFxuICAgIEVORFNfV0lUSCA9ICdlbmRzV2l0aCcsXG4gICAgJGVuZHNXaXRoID0gJydbRU5EU19XSVRIXTtcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi8kLmZhaWxzLWlzLXJlZ2V4cCcpKEVORFNfV0lUSCksICdTdHJpbmcnLCB7ZW5kc1dpdGg6IGZ1bmN0aW9uIGVuZHNXaXRoKHNlYXJjaFN0cmluZykge1xuICAgIHZhciB0aGF0ID0gY29udGV4dCh0aGlzLCBzZWFyY2hTdHJpbmcsIEVORFNfV0lUSCksXG4gICAgICAgICQkID0gYXJndW1lbnRzLFxuICAgICAgICBlbmRQb3NpdGlvbiA9ICQkLmxlbmd0aCA+IDEgPyAkJFsxXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgbGVuID0gdG9MZW5ndGgodGhhdC5sZW5ndGgpLFxuICAgICAgICBlbmQgPSBlbmRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkID8gbGVuIDogTWF0aC5taW4odG9MZW5ndGgoZW5kUG9zaXRpb24pLCBsZW4pLFxuICAgICAgICBzZWFyY2ggPSBTdHJpbmcoc2VhcmNoU3RyaW5nKTtcbiAgICByZXR1cm4gJGVuZHNXaXRoID8gJGVuZHNXaXRoLmNhbGwodGhhdCwgc2VhcmNoLCBlbmQpIDogdGhhdC5zbGljZShlbmQgLSBzZWFyY2gubGVuZ3RoLCBlbmQpID09PSBzZWFyY2g7XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
