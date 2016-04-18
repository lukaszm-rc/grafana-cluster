'use strict';

System.register([], function (_export, _context) {
    var arrayEach, baseEach, baseIteratee, isArray;

    function forEach(collection, iteratee) {
        return typeof iteratee == 'function' && isArray(collection) ? arrayEach(collection, iteratee) : baseEach(collection, baseIteratee(iteratee));
    }
    return {
        setters: [],
        execute: function () {
            arrayEach = require('./_arrayEach');
            baseEach = require('./_baseEach');
            baseIteratee = require('./_baseIteratee');
            isArray = require('./isArray');
            module.exports = forEach;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZvckVhY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxhQUFTLE9BQVQsQ0FBaUIsVUFBakIsRUFBNkIsUUFBN0IsRUFBdUM7QUFDckMsZUFBTyxPQUFRLFFBQVAsSUFBbUIsVUFBbkIsSUFBaUMsUUFBUSxVQUFSLENBQWpDLEdBQXdELFVBQVUsVUFBVixFQUFzQixRQUF0QixDQUF6RCxHQUEyRixTQUFTLFVBQVQsRUFBcUIsYUFBYSxRQUFiLENBQXJCLENBQTNGLENBRDhCO0tBQXZDOzs7O0FBSkksd0JBQVksUUFBUSxjQUFSO0FBQ1osdUJBQVcsUUFBUSxhQUFSO0FBQ1gsMkJBQWUsUUFBUSxpQkFBUjtBQUNmLHNCQUFVLFFBQVEsV0FBUjtBQUlkLG1CQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvZm9yRWFjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFycmF5RWFjaCA9IHJlcXVpcmUoJy4vX2FycmF5RWFjaCcpLFxuICAgIGJhc2VFYWNoID0gcmVxdWlyZSgnLi9fYmFzZUVhY2gnKSxcbiAgICBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5mdW5jdGlvbiBmb3JFYWNoKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gIHJldHVybiAodHlwZW9mIGl0ZXJhdGVlID09ICdmdW5jdGlvbicgJiYgaXNBcnJheShjb2xsZWN0aW9uKSkgPyBhcnJheUVhY2goY29sbGVjdGlvbiwgaXRlcmF0ZWUpIDogYmFzZUVhY2goY29sbGVjdGlvbiwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlKSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZvckVhY2g7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
