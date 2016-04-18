'use strict';

System.register([], function (_export, _context) {
    var $export, sign;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            sign = require('./$.math-sign');

            $export($export.S, 'Math', { cbrt: function cbrt(x) {
                    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm1hdGguY2JydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxZQUFSO0FBQ1YsbUJBQU8sUUFBUSxlQUFSOztBQUNYLG9CQUFRLFFBQVEsQ0FBUixFQUFXLE1BQW5CLEVBQTJCLEVBQUMsTUFBTSxTQUFTLElBQVQsQ0FBYyxDQUFkLEVBQWlCO0FBQy9DLDJCQUFPLEtBQUssSUFBSSxDQUFDLENBQUQsQ0FBVCxHQUFlLEtBQUssR0FBTCxDQUFTLEtBQUssR0FBTCxDQUFTLENBQVQsQ0FBVCxFQUFzQixJQUFJLENBQUosQ0FBckMsQ0FEd0M7aUJBQWpCLEVBQWxDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm1hdGguY2JydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgc2lnbiA9IHJlcXVpcmUoJy4vJC5tYXRoLXNpZ24nKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtjYnJ0OiBmdW5jdGlvbiBjYnJ0KHgpIHtcbiAgICByZXR1cm4gc2lnbih4ID0gK3gpICogTWF0aC5wb3coTWF0aC5hYnMoeCksIDEgLyAzKTtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
