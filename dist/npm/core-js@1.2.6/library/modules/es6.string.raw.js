'use strict';

System.register([], function (_export, _context) {
    var $export, toIObject, toLength;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            toIObject = require('./$.to-iobject');
            toLength = require('./$.to-length');

            $export($export.S, 'String', { raw: function raw(callSite) {
                    var tpl = toIObject(callSite.raw),
                        len = toLength(tpl.length),
                        $$ = arguments,
                        $$len = $$.length,
                        res = [],
                        i = 0;
                    while (len > i) {
                        res.push(String(tpl[i++]));
                        if (i < $$len) res.push(String($$[i]));
                    }
                    return res.join('');
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLnJhdy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxZQUFSO0FBQ1Ysd0JBQVksUUFBUSxnQkFBUjtBQUNaLHVCQUFXLFFBQVEsZUFBUjs7QUFDZixvQkFBUSxRQUFRLENBQVIsRUFBVyxRQUFuQixFQUE2QixFQUFDLEtBQUssU0FBUyxHQUFULENBQWEsUUFBYixFQUF1QjtBQUN0RCx3QkFBSSxNQUFNLFVBQVUsU0FBUyxHQUFULENBQWhCO3dCQUNBLE1BQU0sU0FBUyxJQUFJLE1BQUosQ0FBZjt3QkFDQSxLQUFLLFNBQUw7d0JBQ0EsUUFBUSxHQUFHLE1BQUg7d0JBQ1IsTUFBTSxFQUFOO3dCQUNBLElBQUksQ0FBSixDQU5rRDtBQU90RCwyQkFBTyxNQUFNLENBQU4sRUFBUztBQUNkLDRCQUFJLElBQUosQ0FBUyxPQUFPLElBQUksR0FBSixDQUFQLENBQVQsRUFEYztBQUVkLDRCQUFJLElBQUksS0FBSixFQUNGLElBQUksSUFBSixDQUFTLE9BQU8sR0FBRyxDQUFILENBQVAsQ0FBVCxFQURGO3FCQUZGO0FBS0EsMkJBQU8sSUFBSSxJQUFKLENBQVMsRUFBVCxDQUFQLENBWnNEO2lCQUF2QixFQUFuQyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5yYXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0JyksXG4gICAgdG9MZW5ndGggPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ1N0cmluZycsIHtyYXc6IGZ1bmN0aW9uIHJhdyhjYWxsU2l0ZSkge1xuICAgIHZhciB0cGwgPSB0b0lPYmplY3QoY2FsbFNpdGUucmF3KSxcbiAgICAgICAgbGVuID0gdG9MZW5ndGgodHBsLmxlbmd0aCksXG4gICAgICAgICQkID0gYXJndW1lbnRzLFxuICAgICAgICAkJGxlbiA9ICQkLmxlbmd0aCxcbiAgICAgICAgcmVzID0gW10sXG4gICAgICAgIGkgPSAwO1xuICAgIHdoaWxlIChsZW4gPiBpKSB7XG4gICAgICByZXMucHVzaChTdHJpbmcodHBsW2krK10pKTtcbiAgICAgIGlmIChpIDwgJCRsZW4pXG4gICAgICAgIHJlcy5wdXNoKFN0cmluZygkJFtpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzLmpvaW4oJycpO1xuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
