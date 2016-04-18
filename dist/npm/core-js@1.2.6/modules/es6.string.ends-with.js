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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnN0cmluZy5lbmRzLXdpdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxZQUFSO0FBQ1YsdUJBQVcsUUFBUSxlQUFSO0FBQ1gsc0JBQVUsUUFBUSxvQkFBUjtBQUNWLHdCQUFZO0FBQ1osd0JBQVksR0FBRyxTQUFIOztBQUNoQixvQkFBUSxRQUFRLENBQVIsR0FBWSxRQUFRLENBQVIsR0FBWSxRQUFRLHFCQUFSLEVBQStCLFNBQS9CLENBQVosRUFBdUQsUUFBM0UsRUFBcUYsRUFBQyxVQUFVLFNBQVMsUUFBVCxDQUFrQixZQUFsQixFQUFnQztBQUM1SCx3QkFBSSxPQUFPLFFBQVEsSUFBUixFQUFjLFlBQWQsRUFBNEIsU0FBNUIsQ0FBUDt3QkFDQSxLQUFLLFNBQUw7d0JBQ0EsY0FBYyxHQUFHLE1BQUgsR0FBWSxDQUFaLEdBQWdCLEdBQUcsQ0FBSCxDQUFoQixHQUF3QixTQUF4Qjt3QkFDZCxNQUFNLFNBQVMsS0FBSyxNQUFMLENBQWY7d0JBQ0EsTUFBTSxnQkFBZ0IsU0FBaEIsR0FBNEIsR0FBNUIsR0FBa0MsS0FBSyxHQUFMLENBQVMsU0FBUyxXQUFULENBQVQsRUFBZ0MsR0FBaEMsQ0FBbEM7d0JBQ04sU0FBUyxPQUFPLFlBQVAsQ0FBVCxDQU53SDtBQU81SCwyQkFBTyxZQUFZLFVBQVUsSUFBVixDQUFlLElBQWYsRUFBcUIsTUFBckIsRUFBNkIsR0FBN0IsQ0FBWixHQUFnRCxLQUFLLEtBQUwsQ0FBVyxNQUFNLE9BQU8sTUFBUCxFQUFlLEdBQWhDLE1BQXlDLE1BQXpDLENBUHFFO2lCQUFoQyxFQUFoRyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5zdHJpbmcuZW5kcy13aXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vJC50by1sZW5ndGgnKSxcbiAgICBjb250ZXh0ID0gcmVxdWlyZSgnLi8kLnN0cmluZy1jb250ZXh0JyksXG4gICAgRU5EU19XSVRIID0gJ2VuZHNXaXRoJyxcbiAgICAkZW5kc1dpdGggPSAnJ1tFTkRTX1dJVEhdO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuLyQuZmFpbHMtaXMtcmVnZXhwJykoRU5EU19XSVRIKSwgJ1N0cmluZycsIHtlbmRzV2l0aDogZnVuY3Rpb24gZW5kc1dpdGgoc2VhcmNoU3RyaW5nKSB7XG4gICAgdmFyIHRoYXQgPSBjb250ZXh0KHRoaXMsIHNlYXJjaFN0cmluZywgRU5EU19XSVRIKSxcbiAgICAgICAgJCQgPSBhcmd1bWVudHMsXG4gICAgICAgIGVuZFBvc2l0aW9uID0gJCQubGVuZ3RoID4gMSA/ICQkWzFdIDogdW5kZWZpbmVkLFxuICAgICAgICBsZW4gPSB0b0xlbmd0aCh0aGF0Lmxlbmd0aCksXG4gICAgICAgIGVuZCA9IGVuZFBvc2l0aW9uID09PSB1bmRlZmluZWQgPyBsZW4gOiBNYXRoLm1pbih0b0xlbmd0aChlbmRQb3NpdGlvbiksIGxlbiksXG4gICAgICAgIHNlYXJjaCA9IFN0cmluZyhzZWFyY2hTdHJpbmcpO1xuICAgIHJldHVybiAkZW5kc1dpdGggPyAkZW5kc1dpdGguY2FsbCh0aGF0LCBzZWFyY2gsIGVuZCkgOiB0aGF0LnNsaWNlKGVuZCAtIHNlYXJjaC5sZW5ndGgsIGVuZCkgPT09IHNlYXJjaDtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
