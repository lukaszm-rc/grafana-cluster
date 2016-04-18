'use strict';

System.register([], function (_export, _context) {
    var $export, expm1, exp;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            expm1 = require('./$.math-expm1');
            exp = Math.exp;

            $export($export.S, 'Math', { tanh: function tanh(x) {
                    var a = expm1(x = +x),
                        b = expm1(-x);
                    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYubWF0aC50YW5oLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxzQkFBVSxRQUFRLFlBQVI7QUFDVixvQkFBUSxRQUFRLGdCQUFSO0FBQ1Isa0JBQU0sS0FBSyxHQUFMOztBQUNWLG9CQUFRLFFBQVEsQ0FBUixFQUFXLE1BQW5CLEVBQTJCLEVBQUMsTUFBTSxTQUFTLElBQVQsQ0FBYyxDQUFkLEVBQWlCO0FBQy9DLHdCQUFJLElBQUksTUFBTSxJQUFJLENBQUMsQ0FBRCxDQUFkO3dCQUNBLElBQUksTUFBTSxDQUFDLENBQUQsQ0FBVixDQUYyQztBQUcvQywyQkFBTyxLQUFLLFFBQUwsR0FBZ0IsQ0FBaEIsR0FBb0IsS0FBSyxRQUFMLEdBQWdCLENBQUMsQ0FBRCxHQUFLLENBQUMsSUFBSSxDQUFKLENBQUQsSUFBVyxJQUFJLENBQUosSUFBUyxJQUFJLENBQUMsQ0FBRCxDQUFiLENBQVgsQ0FIRDtpQkFBakIsRUFBbEMiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzL2VzNi5tYXRoLnRhbmguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgIGV4cG0xID0gcmVxdWlyZSgnLi8kLm1hdGgtZXhwbTEnKSxcbiAgICBleHAgPSBNYXRoLmV4cDtcbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHt0YW5oOiBmdW5jdGlvbiB0YW5oKHgpIHtcbiAgICB2YXIgYSA9IGV4cG0xKHggPSAreCksXG4gICAgICAgIGIgPSBleHBtMSgteCk7XG4gICAgcmV0dXJuIGEgPT0gSW5maW5pdHkgPyAxIDogYiA9PSBJbmZpbml0eSA/IC0xIDogKGEgLSBiKSAvIChleHAoeCkgKyBleHAoLXgpKTtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
