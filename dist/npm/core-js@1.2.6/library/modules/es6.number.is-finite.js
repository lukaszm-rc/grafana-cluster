'use strict';

System.register([], function (_export, _context) {
    var $export, _isFinite;

    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            _isFinite = require('./$.global').isFinite;

            $export($export.S, 'Number', { isFinite: function isFinite(it) {
                    return typeof it == 'number' && _isFinite(it);
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYubnVtYmVyLmlzLWZpbml0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNJLHNCQUFVLFFBQVEsWUFBUjtBQUNWLHdCQUFZLFFBQVEsWUFBUixFQUFzQixRQUF0Qjs7QUFDaEIsb0JBQVEsUUFBUSxDQUFSLEVBQVcsUUFBbkIsRUFBNkIsRUFBQyxVQUFVLFNBQVMsUUFBVCxDQUFrQixFQUFsQixFQUFzQjtBQUMxRCwyQkFBTyxPQUFPLEVBQVAsSUFBYSxRQUFiLElBQXlCLFVBQVUsRUFBVixDQUF6QixDQURtRDtpQkFBdEIsRUFBeEMiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzL2VzNi5udW1iZXIuaXMtZmluaXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICBfaXNGaW5pdGUgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJykuaXNGaW5pdGU7XG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtpc0Zpbml0ZTogZnVuY3Rpb24gaXNGaW5pdGUoaXQpIHtcbiAgICByZXR1cm4gdHlwZW9mIGl0ID09ICdudW1iZXInICYmIF9pc0Zpbml0ZShpdCk7XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
