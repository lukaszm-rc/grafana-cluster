/* */
'use strict';

System.register([], function (_export, _context) {
    var $export, $at;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            $at = require('./$.string-at')(true);

            $export($export.P, 'String', { at: function at(pos) {
                    return $at(this, pos);
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM3LnN0cmluZy5hdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7QUFDSSxzQkFBVSxRQUFRLFlBQVI7QUFDVixrQkFBTSxRQUFRLGVBQVIsRUFBeUIsSUFBekI7O0FBQ1Ysb0JBQVEsUUFBUSxDQUFSLEVBQVcsUUFBbkIsRUFBNkIsRUFBQyxJQUFJLFNBQVMsRUFBVCxDQUFZLEdBQVosRUFBaUI7QUFDL0MsMkJBQU8sSUFBSSxJQUFKLEVBQVUsR0FBVixDQUFQLENBRCtDO2lCQUFqQixFQUFsQyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNy5zdHJpbmcuYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgICRhdCA9IHJlcXVpcmUoJy4vJC5zdHJpbmctYXQnKSh0cnVlKTtcbiRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge2F0OiBmdW5jdGlvbiBhdChwb3MpIHtcbiAgICByZXR1cm4gJGF0KHRoaXMsIHBvcyk7XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
