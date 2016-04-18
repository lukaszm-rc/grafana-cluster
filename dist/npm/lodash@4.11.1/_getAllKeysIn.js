'use strict';

System.register([], function (_export, _context) {
    var baseGetAllKeys, getSymbolsIn, keysIn;

    function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }
    return {
        setters: [],
        execute: function () {
            baseGetAllKeys = require('./_baseGetAllKeys');
            getSymbolsIn = require('./_getSymbolsIn');
            keysIn = require('./keysIn');
            module.exports = getAllKeysIn;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19nZXRBbGxLZXlzSW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxhQUFTLFlBQVQsQ0FBc0IsTUFBdEIsRUFBOEI7QUFDNUIsZUFBTyxlQUFlLE1BQWYsRUFBdUIsTUFBdkIsRUFBK0IsWUFBL0IsQ0FBUCxDQUQ0QjtLQUE5Qjs7OztBQUhJLDZCQUFpQixRQUFRLG1CQUFSO0FBQ2pCLDJCQUFlLFFBQVEsaUJBQVI7QUFDZixxQkFBUyxRQUFRLFVBQVI7QUFJYixtQkFBTyxPQUFQLEdBQWlCLFlBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19nZXRBbGxLZXlzSW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9sc0luJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcbmZ1bmN0aW9uIGdldEFsbEtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0luLCBnZXRTeW1ib2xzSW4pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzSW47XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
