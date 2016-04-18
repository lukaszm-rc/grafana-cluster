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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLHNCQUFVLFFBQVEsWUFBUjtBQUNWLHNCQUFVLFFBQVEsY0FBUjtBQUNWLDJCQUFlLE9BQU8sWUFBUDtBQUNmLDZCQUFpQixPQUFPLGFBQVA7O0FBQ3JCLG9CQUFRLFFBQVEsQ0FBUixHQUFZLFFBQVEsQ0FBUixJQUFhLENBQUMsQ0FBQyxjQUFELElBQW1CLGVBQWUsTUFBZixJQUF5QixDQUF6QixDQUFqQyxFQUE4RCxRQUFsRixFQUE0RixFQUFDLGVBQWUsU0FBUyxhQUFULENBQXVCLENBQXZCLEVBQTBCO0FBQ2xJLHdCQUFJLE1BQU0sRUFBTjt3QkFDQSxLQUFLLFNBQUw7d0JBQ0EsUUFBUSxHQUFHLE1BQUg7d0JBQ1IsSUFBSSxDQUFKO3dCQUNBLElBSkosQ0FEa0k7QUFNbEksMkJBQU8sUUFBUSxDQUFSLEVBQVc7QUFDaEIsK0JBQU8sQ0FBQyxHQUFHLEdBQUgsQ0FBRCxDQURTO0FBRWhCLDRCQUFJLFFBQVEsSUFBUixFQUFjLFFBQWQsTUFBNEIsSUFBNUIsRUFDRixNQUFNLFdBQVcsT0FBTyw0QkFBUCxDQUFqQixDQURGO0FBRUEsNEJBQUksSUFBSixDQUFTLE9BQU8sT0FBUCxHQUFpQixhQUFhLElBQWIsQ0FBakIsR0FBc0MsYUFBYSxDQUFDLENBQUMsUUFBUSxPQUFSLENBQUQsSUFBcUIsRUFBckIsQ0FBRCxHQUE0QixNQUE1QixFQUFvQyxPQUFPLEtBQVAsR0FBZSxNQUFmLENBQXZGLENBQVQsQ0FKZ0I7cUJBQWxCO0FBTUEsMkJBQU8sSUFBSSxJQUFKLENBQVMsRUFBVCxDQUFQLENBWmtJO2lCQUExQixFQUE1RyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5zdHJpbmcuZnJvbS1jb2RlLXBvaW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICB0b0luZGV4ID0gcmVxdWlyZSgnLi8kLnRvLWluZGV4JyksXG4gICAgZnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZSxcbiAgICAkZnJvbUNvZGVQb2ludCA9IFN0cmluZy5mcm9tQ29kZVBvaW50O1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoISEkZnJvbUNvZGVQb2ludCAmJiAkZnJvbUNvZGVQb2ludC5sZW5ndGggIT0gMSksICdTdHJpbmcnLCB7ZnJvbUNvZGVQb2ludDogZnVuY3Rpb24gZnJvbUNvZGVQb2ludCh4KSB7XG4gICAgdmFyIHJlcyA9IFtdLFxuICAgICAgICAkJCA9IGFyZ3VtZW50cyxcbiAgICAgICAgJCRsZW4gPSAkJC5sZW5ndGgsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBjb2RlO1xuICAgIHdoaWxlICgkJGxlbiA+IGkpIHtcbiAgICAgIGNvZGUgPSArJCRbaSsrXTtcbiAgICAgIGlmICh0b0luZGV4KGNvZGUsIDB4MTBmZmZmKSAhPT0gY29kZSlcbiAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcihjb2RlICsgJyBpcyBub3QgYSB2YWxpZCBjb2RlIHBvaW50Jyk7XG4gICAgICByZXMucHVzaChjb2RlIDwgMHgxMDAwMCA/IGZyb21DaGFyQ29kZShjb2RlKSA6IGZyb21DaGFyQ29kZSgoKGNvZGUgLT0gMHgxMDAwMCkgPj4gMTApICsgMHhkODAwLCBjb2RlICUgMHg0MDAgKyAweGRjMDApKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qb2luKCcnKTtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
