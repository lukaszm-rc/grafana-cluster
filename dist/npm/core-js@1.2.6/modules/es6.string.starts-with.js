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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnN0cmluZy5zdGFydHMtd2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7QUFDSSxzQkFBVSxRQUFRLFlBQVI7QUFDVix1QkFBVyxRQUFRLGVBQVI7QUFDWCxzQkFBVSxRQUFRLG9CQUFSO0FBQ1YsMEJBQWM7QUFDZCwwQkFBYyxHQUFHLFdBQUg7O0FBQ2xCLG9CQUFRLFFBQVEsQ0FBUixHQUFZLFFBQVEsQ0FBUixHQUFZLFFBQVEscUJBQVIsRUFBK0IsV0FBL0IsQ0FBWixFQUF5RCxRQUE3RSxFQUF1RixFQUFDLFlBQVksU0FBUyxVQUFULENBQW9CLFlBQXBCLEVBQWtDO0FBQ2xJLHdCQUFJLE9BQU8sUUFBUSxJQUFSLEVBQWMsWUFBZCxFQUE0QixXQUE1QixDQUFQO3dCQUNBLEtBQUssU0FBTDt3QkFDQSxRQUFRLFNBQVMsS0FBSyxHQUFMLENBQVMsR0FBRyxNQUFILEdBQVksQ0FBWixHQUFnQixHQUFHLENBQUgsQ0FBaEIsR0FBd0IsU0FBeEIsRUFBbUMsS0FBSyxNQUFMLENBQXJELENBQVI7d0JBQ0EsU0FBUyxPQUFPLFlBQVAsQ0FBVCxDQUo4SDtBQUtsSSwyQkFBTyxjQUFjLFlBQVksSUFBWixDQUFpQixJQUFqQixFQUF1QixNQUF2QixFQUErQixLQUEvQixDQUFkLEdBQXNELEtBQUssS0FBTCxDQUFXLEtBQVgsRUFBa0IsUUFBUSxPQUFPLE1BQVAsQ0FBMUIsS0FBNkMsTUFBN0MsQ0FMcUU7aUJBQWxDLEVBQXBHIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnN0cmluZy5zdGFydHMtd2l0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgdG9MZW5ndGggPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJyksXG4gICAgY29udGV4dCA9IHJlcXVpcmUoJy4vJC5zdHJpbmctY29udGV4dCcpLFxuICAgIFNUQVJUU19XSVRIID0gJ3N0YXJ0c1dpdGgnLFxuICAgICRzdGFydHNXaXRoID0gJydbU1RBUlRTX1dJVEhdO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuLyQuZmFpbHMtaXMtcmVnZXhwJykoU1RBUlRTX1dJVEgpLCAnU3RyaW5nJywge3N0YXJ0c1dpdGg6IGZ1bmN0aW9uIHN0YXJ0c1dpdGgoc2VhcmNoU3RyaW5nKSB7XG4gICAgdmFyIHRoYXQgPSBjb250ZXh0KHRoaXMsIHNlYXJjaFN0cmluZywgU1RBUlRTX1dJVEgpLFxuICAgICAgICAkJCA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSB0b0xlbmd0aChNYXRoLm1pbigkJC5sZW5ndGggPiAxID8gJCRbMV0gOiB1bmRlZmluZWQsIHRoYXQubGVuZ3RoKSksXG4gICAgICAgIHNlYXJjaCA9IFN0cmluZyhzZWFyY2hTdHJpbmcpO1xuICAgIHJldHVybiAkc3RhcnRzV2l0aCA/ICRzdGFydHNXaXRoLmNhbGwodGhhdCwgc2VhcmNoLCBpbmRleCkgOiB0aGF0LnNsaWNlKGluZGV4LCBpbmRleCArIHNlYXJjaC5sZW5ndGgpID09PSBzZWFyY2g7XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
