'use strict';

System.register([], function (_export, _context) {
    var anObject, aFunction, SPECIES;
    return {
        setters: [],
        execute: function () {
            anObject = require('./$.an-object');
            aFunction = require('./$.a-function');
            SPECIES = require('./$.wks')('species');

            module.exports = function (O, D) {
                var C = anObject(O).constructor,
                    S;
                return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSx1QkFBVyxRQUFRLGVBQVI7QUFDWCx3QkFBWSxRQUFRLGdCQUFSO0FBQ1osc0JBQVUsUUFBUSxTQUFSLEVBQW1CLFNBQW5COztBQUNkLG1CQUFPLE9BQVAsR0FBaUIsVUFBUyxDQUFULEVBQVksQ0FBWixFQUFlO0FBQzlCLG9CQUFJLElBQUksU0FBUyxDQUFULEVBQVksV0FBWjtvQkFDSixDQURKLENBRDhCO0FBRzlCLHVCQUFPLE1BQU0sU0FBTixJQUFtQixDQUFDLElBQUksU0FBUyxDQUFULEVBQVksT0FBWixDQUFKLENBQUQsSUFBOEIsU0FBOUIsR0FBMEMsQ0FBN0QsR0FBaUUsVUFBVSxDQUFWLENBQWpFLENBSHVCO2FBQWYiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy8kLnNwZWNpZXMtY29uc3RydWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKSxcbiAgICBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLyQuYS1mdW5jdGlvbicpLFxuICAgIFNQRUNJRVMgPSByZXF1aXJlKCcuLyQud2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLFxuICAgICAgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
