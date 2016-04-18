'use strict';

System.register([], function (_export, _context) {
    var $export, toIndex, fromCharCode, $fromCodePoint;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            toIndex = require('./$.to-index');
            fromCharCode = String.fromCharCode;
            $fromCodePoint = String.fromCodePoint;

            $export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', { fromCodePoint: function fromCodePoint(x) {
                    var res = [],
                        $$ = arguments,
                        $$len = $$.length,
                        i = 0,
                        code;
                    while ($$len > i) {
                        code = +$$[i++];
                        if (toIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
                        res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
                    }
                    return res.join('');
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLmZyb20tY29kZS1wb2ludC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxZQUFSO0FBQ1Ysc0JBQVUsUUFBUSxjQUFSO0FBQ1YsMkJBQWUsT0FBTyxZQUFQO0FBQ2YsNkJBQWlCLE9BQU8sYUFBUDs7QUFDckIsb0JBQVEsUUFBUSxDQUFSLEdBQVksUUFBUSxDQUFSLElBQWEsQ0FBQyxDQUFDLGNBQUQsSUFBbUIsZUFBZSxNQUFmLElBQXlCLENBQXpCLENBQWpDLEVBQThELFFBQWxGLEVBQTRGLEVBQUMsZUFBZSxTQUFTLGFBQVQsQ0FBdUIsQ0FBdkIsRUFBMEI7QUFDbEksd0JBQUksTUFBTSxFQUFOO3dCQUNBLEtBQUssU0FBTDt3QkFDQSxRQUFRLEdBQUcsTUFBSDt3QkFDUixJQUFJLENBQUo7d0JBQ0EsSUFKSixDQURrSTtBQU1sSSwyQkFBTyxRQUFRLENBQVIsRUFBVztBQUNoQiwrQkFBTyxDQUFDLEdBQUcsR0FBSCxDQUFELENBRFM7QUFFaEIsNEJBQUksUUFBUSxJQUFSLEVBQWMsUUFBZCxNQUE0QixJQUE1QixFQUNGLE1BQU0sV0FBVyxPQUFPLDRCQUFQLENBQWpCLENBREY7QUFFQSw0QkFBSSxJQUFKLENBQVMsT0FBTyxPQUFQLEdBQWlCLGFBQWEsSUFBYixDQUFqQixHQUFzQyxhQUFhLENBQUMsQ0FBQyxRQUFRLE9BQVIsQ0FBRCxJQUFxQixFQUFyQixDQUFELEdBQTRCLE1BQTVCLEVBQW9DLE9BQU8sS0FBUCxHQUFlLE1BQWYsQ0FBdkYsQ0FBVCxDQUpnQjtxQkFBbEI7QUFNQSwyQkFBTyxJQUFJLElBQUosQ0FBUyxFQUFULENBQVAsQ0Faa0k7aUJBQTFCLEVBQTVHIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLmZyb20tY29kZS1wb2ludC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgdG9JbmRleCA9IHJlcXVpcmUoJy4vJC50by1pbmRleCcpLFxuICAgIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUsXG4gICAgJGZyb21Db2RlUG9pbnQgPSBTdHJpbmcuZnJvbUNvZGVQb2ludDtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCEhJGZyb21Db2RlUG9pbnQgJiYgJGZyb21Db2RlUG9pbnQubGVuZ3RoICE9IDEpLCAnU3RyaW5nJywge2Zyb21Db2RlUG9pbnQ6IGZ1bmN0aW9uIGZyb21Db2RlUG9pbnQoeCkge1xuICAgIHZhciByZXMgPSBbXSxcbiAgICAgICAgJCQgPSBhcmd1bWVudHMsXG4gICAgICAgICQkbGVuID0gJCQubGVuZ3RoLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgY29kZTtcbiAgICB3aGlsZSAoJCRsZW4gPiBpKSB7XG4gICAgICBjb2RlID0gKyQkW2krK107XG4gICAgICBpZiAodG9JbmRleChjb2RlLCAweDEwZmZmZikgIT09IGNvZGUpXG4gICAgICAgIHRocm93IFJhbmdlRXJyb3IoY29kZSArICcgaXMgbm90IGEgdmFsaWQgY29kZSBwb2ludCcpO1xuICAgICAgcmVzLnB1c2goY29kZSA8IDB4MTAwMDAgPyBmcm9tQ2hhckNvZGUoY29kZSkgOiBmcm9tQ2hhckNvZGUoKChjb2RlIC09IDB4MTAwMDApID4+IDEwKSArIDB4ZDgwMCwgY29kZSAlIDB4NDAwICsgMHhkYzAwKSk7XG4gICAgfVxuICAgIHJldHVybiByZXMuam9pbignJyk7XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
