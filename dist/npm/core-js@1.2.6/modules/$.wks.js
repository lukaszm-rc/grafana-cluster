'use strict';

System.register([], function (_export, _context) {
    var store, uid, _Symbol;

    return {
        setters: [],
        execute: function () {
            store = require('./$.shared')('wks');
            uid = require('./$.uid');
            _Symbol = require('./$.global').Symbol;

            module.exports = function (name) {
                return store[name] || (store[name] = _Symbol && _Symbol[name] || (_Symbol || uid)('Symbol.' + name));
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC53a3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDSSxvQkFBUSxRQUFRLFlBQVIsRUFBc0IsS0FBdEI7QUFDUixrQkFBTSxRQUFRLFNBQVI7QUFDTixzQkFBUyxRQUFRLFlBQVIsRUFBc0IsTUFBdEI7O0FBQ2IsbUJBQU8sT0FBUCxHQUFpQixVQUFTLElBQVQsRUFBZTtBQUM5Qix1QkFBTyxNQUFNLElBQU4sTUFBZ0IsTUFBTSxJQUFOLElBQWMsV0FBVSxRQUFPLElBQVAsQ0FBVixJQUEwQixDQUFDLFdBQVUsR0FBVixDQUFELENBQWdCLFlBQVksSUFBWixDQUExQyxDQUE5QixDQUR1QjthQUFmIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC53a3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4vJC5zaGFyZWQnKSgnd2tzJyksXG4gICAgdWlkID0gcmVxdWlyZSgnLi8kLnVpZCcpLFxuICAgIFN5bWJvbCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKS5TeW1ib2w7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9IFN5bWJvbCAmJiBTeW1ib2xbbmFtZV0gfHwgKFN5bWJvbCB8fCB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
