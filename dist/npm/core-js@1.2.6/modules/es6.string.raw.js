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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnN0cmluZy5yYXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLHNCQUFVLFFBQVEsWUFBUjtBQUNWLHdCQUFZLFFBQVEsZ0JBQVI7QUFDWix1QkFBVyxRQUFRLGVBQVI7O0FBQ2Ysb0JBQVEsUUFBUSxDQUFSLEVBQVcsUUFBbkIsRUFBNkIsRUFBQyxLQUFLLFNBQVMsR0FBVCxDQUFhLFFBQWIsRUFBdUI7QUFDdEQsd0JBQUksTUFBTSxVQUFVLFNBQVMsR0FBVCxDQUFoQjt3QkFDQSxNQUFNLFNBQVMsSUFBSSxNQUFKLENBQWY7d0JBQ0EsS0FBSyxTQUFMO3dCQUNBLFFBQVEsR0FBRyxNQUFIO3dCQUNSLE1BQU0sRUFBTjt3QkFDQSxJQUFJLENBQUosQ0FOa0Q7QUFPdEQsMkJBQU8sTUFBTSxDQUFOLEVBQVM7QUFDZCw0QkFBSSxJQUFKLENBQVMsT0FBTyxJQUFJLEdBQUosQ0FBUCxDQUFULEVBRGM7QUFFZCw0QkFBSSxJQUFJLEtBQUosRUFDRixJQUFJLElBQUosQ0FBUyxPQUFPLEdBQUcsQ0FBSCxDQUFQLENBQVQsRUFERjtxQkFGRjtBQUtBLDJCQUFPLElBQUksSUFBSixDQUFTLEVBQVQsQ0FBUCxDQVpzRDtpQkFBdkIsRUFBbkMiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy9lczYuc3RyaW5nLnJhdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKSxcbiAgICB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vJC50by1sZW5ndGgnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnU3RyaW5nJywge3JhdzogZnVuY3Rpb24gcmF3KGNhbGxTaXRlKSB7XG4gICAgdmFyIHRwbCA9IHRvSU9iamVjdChjYWxsU2l0ZS5yYXcpLFxuICAgICAgICBsZW4gPSB0b0xlbmd0aCh0cGwubGVuZ3RoKSxcbiAgICAgICAgJCQgPSBhcmd1bWVudHMsXG4gICAgICAgICQkbGVuID0gJCQubGVuZ3RoLFxuICAgICAgICByZXMgPSBbXSxcbiAgICAgICAgaSA9IDA7XG4gICAgd2hpbGUgKGxlbiA+IGkpIHtcbiAgICAgIHJlcy5wdXNoKFN0cmluZyh0cGxbaSsrXSkpO1xuICAgICAgaWYgKGkgPCAkJGxlbilcbiAgICAgICAgcmVzLnB1c2goU3RyaW5nKCQkW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiByZXMuam9pbignJyk7XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
