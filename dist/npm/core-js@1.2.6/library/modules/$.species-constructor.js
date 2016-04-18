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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnNwZWNpZXMtY29uc3RydWN0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLHVCQUFXLFFBQVEsZUFBUjtBQUNYLHdCQUFZLFFBQVEsZ0JBQVI7QUFDWixzQkFBVSxRQUFRLFNBQVIsRUFBbUIsU0FBbkI7O0FBQ2QsbUJBQU8sT0FBUCxHQUFpQixVQUFTLENBQVQsRUFBWSxDQUFaLEVBQWU7QUFDOUIsb0JBQUksSUFBSSxTQUFTLENBQVQsRUFBWSxXQUFaO29CQUNKLENBREosQ0FEOEI7QUFHOUIsdUJBQU8sTUFBTSxTQUFOLElBQW1CLENBQUMsSUFBSSxTQUFTLENBQVQsRUFBWSxPQUFaLENBQUosQ0FBRCxJQUE4QixTQUE5QixHQUEwQyxDQUE3RCxHQUFpRSxVQUFVLENBQVYsQ0FBakUsQ0FIdUI7YUFBZiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvJC5zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JyksXG4gICAgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi8kLmEtZnVuY3Rpb24nKSxcbiAgICBTUEVDSUVTID0gcmVxdWlyZSgnLi8kLndrcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcixcbiAgICAgIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
