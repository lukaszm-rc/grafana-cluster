'use strict';

System.register([], function (_export, _context) {
    var $export;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');

            $export($export.S, 'Math', { atanh: function atanh(x) {
                    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYubWF0aC5hdGFuaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxZQUFSOztBQUNkLG9CQUFRLFFBQVEsQ0FBUixFQUFXLE1BQW5CLEVBQTJCLEVBQUMsT0FBTyxTQUFTLEtBQVQsQ0FBZSxDQUFmLEVBQWtCO0FBQ2pELDJCQUFPLENBQUMsSUFBSSxDQUFDLENBQUQsQ0FBTCxJQUFZLENBQVosR0FBZ0IsQ0FBaEIsR0FBb0IsS0FBSyxHQUFMLENBQVMsQ0FBQyxJQUFJLENBQUosQ0FBRCxJQUFXLElBQUksQ0FBSixDQUFYLENBQVQsR0FBOEIsQ0FBOUIsQ0FEc0I7aUJBQWxCLEVBQW5DIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYubWF0aC5hdGFuaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7YXRhbmg6IGZ1bmN0aW9uIGF0YW5oKHgpIHtcbiAgICByZXR1cm4gKHggPSAreCkgPT0gMCA/IHggOiBNYXRoLmxvZygoMSArIHgpIC8gKDEgLSB4KSkgLyAyO1xuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
