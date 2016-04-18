'use strict';

System.register([], function (_export, _context) {
    var baseGetAllKeys, getSymbols, keys;

    function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
    }
    return {
        setters: [],
        execute: function () {
            baseGetAllKeys = require('./_baseGetAllKeys');
            getSymbols = require('./_getSymbols');
            keys = require('./keys');
            module.exports = getAllKeys;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19nZXRBbGxLZXlzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsYUFBUyxVQUFULENBQW9CLE1BQXBCLEVBQTRCO0FBQzFCLGVBQU8sZUFBZSxNQUFmLEVBQXVCLElBQXZCLEVBQTZCLFVBQTdCLENBQVAsQ0FEMEI7S0FBNUI7Ozs7QUFISSw2QkFBaUIsUUFBUSxtQkFBUjtBQUNqQix5QkFBYSxRQUFRLGVBQVI7QUFDYixtQkFBTyxRQUFRLFFBQVI7QUFJWCxtQkFBTyxPQUFQLEdBQWlCLFVBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19nZXRBbGxLZXlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXM7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
