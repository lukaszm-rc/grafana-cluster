'use strict';

System.register([], function (_export, _context) {
    var baseFind, baseForOwn, baseIteratee;

    function findKey(object, predicate) {
        return baseFind(object, baseIteratee(predicate, 3), baseForOwn, true);
    }
    return {
        setters: [],
        execute: function () {
            baseFind = require('./_baseFind');
            baseForOwn = require('./_baseForOwn');
            baseIteratee = require('./_baseIteratee');
            module.exports = findKey;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZpbmRLZXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxhQUFTLE9BQVQsQ0FBaUIsTUFBakIsRUFBeUIsU0FBekIsRUFBb0M7QUFDbEMsZUFBTyxTQUFTLE1BQVQsRUFBaUIsYUFBYSxTQUFiLEVBQXdCLENBQXhCLENBQWpCLEVBQTZDLFVBQTdDLEVBQXlELElBQXpELENBQVAsQ0FEa0M7S0FBcEM7Ozs7QUFISSx1QkFBVyxRQUFRLGFBQVI7QUFDWCx5QkFBYSxRQUFRLGVBQVI7QUFDYiwyQkFBZSxRQUFRLGlCQUFSO0FBSW5CLG1CQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvZmluZEtleS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VGaW5kID0gcmVxdWlyZSgnLi9fYmFzZUZpbmQnKSxcbiAgICBiYXNlRm9yT3duID0gcmVxdWlyZSgnLi9fYmFzZUZvck93bicpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpO1xuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICByZXR1cm4gYmFzZUZpbmQob2JqZWN0LCBiYXNlSXRlcmF0ZWUocHJlZGljYXRlLCAzKSwgYmFzZUZvck93biwgdHJ1ZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZpbmRLZXk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
