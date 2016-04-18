'use strict';

System.register([], function (_export, _context) {
    var $export, expm1, exp;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            expm1 = require('./$.math-expm1');
            exp = Math.exp;

            $export($export.S + $export.F * require('./$.fails')(function () {
                return !Math.sinh(-2e-17) != -2e-17;
            }), 'Math', { sinh: function sinh(x) {
                    return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYubWF0aC5zaW5oLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxzQkFBVSxRQUFRLFlBQVI7QUFDVixvQkFBUSxRQUFRLGdCQUFSO0FBQ1Isa0JBQU0sS0FBSyxHQUFMOztBQUNWLG9CQUFRLFFBQVEsQ0FBUixHQUFZLFFBQVEsQ0FBUixHQUFZLFFBQVEsV0FBUixFQUFxQixZQUFXO0FBQzlELHVCQUFPLENBQUMsS0FBSyxJQUFMLENBQVUsQ0FBQyxLQUFELENBQVgsSUFBc0IsQ0FBQyxLQUFELENBRGlDO2FBQVgsQ0FBakMsRUFFaEIsTUFGSixFQUVZLEVBQUMsTUFBTSxTQUFTLElBQVQsQ0FBYyxDQUFkLEVBQWlCO0FBQ2hDLDJCQUFPLEtBQUssR0FBTCxDQUFTLElBQUksQ0FBQyxDQUFELENBQWIsR0FBbUIsQ0FBbkIsR0FBdUIsQ0FBQyxNQUFNLENBQU4sSUFBVyxNQUFNLENBQUMsQ0FBRCxDQUFqQixDQUFELEdBQXlCLENBQXpCLEdBQTZCLENBQUMsSUFBSSxJQUFJLENBQUosQ0FBSixHQUFhLElBQUksQ0FBQyxDQUFELEdBQUssQ0FBTCxDQUFqQixDQUFELElBQThCLEtBQUssQ0FBTCxHQUFTLENBQVQsQ0FBOUIsQ0FEM0I7aUJBQWpCLEVBRm5CIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYubWF0aC5zaW5oLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICBleHBtMSA9IHJlcXVpcmUoJy4vJC5tYXRoLWV4cG0xJyksXG4gICAgZXhwID0gTWF0aC5leHA7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vJC5mYWlscycpKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gIU1hdGguc2luaCgtMmUtMTcpICE9IC0yZS0xNztcbn0pLCAnTWF0aCcsIHtzaW5oOiBmdW5jdGlvbiBzaW5oKHgpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMoeCA9ICt4KSA8IDEgPyAoZXhwbTEoeCkgLSBleHBtMSgteCkpIC8gMiA6IChleHAoeCAtIDEpIC0gZXhwKC14IC0gMSkpICogKE1hdGguRSAvIDIpO1xuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
