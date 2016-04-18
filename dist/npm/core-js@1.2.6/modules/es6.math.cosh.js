'use strict';

System.register([], function (_export, _context) {
    var $export, exp;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            exp = Math.exp;

            $export($export.S, 'Math', { cosh: function cosh(x) {
                    return (exp(x = +x) + exp(-x)) / 2;
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm1hdGguY29zaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxZQUFSO0FBQ1Ysa0JBQU0sS0FBSyxHQUFMOztBQUNWLG9CQUFRLFFBQVEsQ0FBUixFQUFXLE1BQW5CLEVBQTJCLEVBQUMsTUFBTSxTQUFTLElBQVQsQ0FBYyxDQUFkLEVBQWlCO0FBQy9DLDJCQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBRCxDQUFSLEdBQWMsSUFBSSxDQUFDLENBQUQsQ0FBbEIsQ0FBRCxHQUEwQixDQUExQixDQUR3QztpQkFBakIsRUFBbEMiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy9lczYubWF0aC5jb3NoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICBleHAgPSBNYXRoLmV4cDtcbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtjb3NoOiBmdW5jdGlvbiBjb3NoKHgpIHtcbiAgICByZXR1cm4gKGV4cCh4ID0gK3gpICsgZXhwKC14KSkgLyAyO1xuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
