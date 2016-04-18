/* */
'use strict';

System.register([], function (_export, _context) {
  var addToUnscopables, step, Iterators, toIObject;
  return {
    setters: [],
    execute: function () {
      addToUnscopables = require('./$.add-to-unscopables');
      step = require('./$.iter-step');
      Iterators = require('./$.iterators');
      toIObject = require('./$.to-iobject');

      module.exports = require('./$.iter-define')(Array, 'Array', function (iterated, kind) {
        this._t = toIObject(iterated);
        this._i = 0;
        this._k = kind;
      }, function () {
        var O = this._t,
            kind = this._k,
            index = this._i++;
        if (!O || index >= O.length) {
          this._t = undefined;
          return step(1);
        }
        if (kind == 'keys') return step(0, index);
        if (kind == 'values') return step(0, O[index]);
        return step(0, [index, O[index]]);
      }, 'values');
      Iterators.Arguments = Iterators.Array;
      addToUnscopables('keys');
      addToUnscopables('values');
      addToUnscopables('entries');
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQUNJLHlCQUFtQixRQUFRLHdCQUFSO0FBQ25CLGFBQU8sUUFBUSxlQUFSO0FBQ1Asa0JBQVksUUFBUSxlQUFSO0FBQ1osa0JBQVksUUFBUSxnQkFBUjs7QUFDaEIsYUFBTyxPQUFQLEdBQWlCLFFBQVEsaUJBQVIsRUFBMkIsS0FBM0IsRUFBa0MsT0FBbEMsRUFBMkMsVUFBUyxRQUFULEVBQW1CLElBQW5CLEVBQXlCO0FBQ25GLGFBQUssRUFBTCxHQUFVLFVBQVUsUUFBVixDQUFWLENBRG1GO0FBRW5GLGFBQUssRUFBTCxHQUFVLENBQVYsQ0FGbUY7QUFHbkYsYUFBSyxFQUFMLEdBQVUsSUFBVixDQUhtRjtPQUF6QixFQUl6RCxZQUFXO0FBQ1osWUFBSSxJQUFJLEtBQUssRUFBTDtZQUNKLE9BQU8sS0FBSyxFQUFMO1lBQ1AsUUFBUSxLQUFLLEVBQUwsRUFBUixDQUhRO0FBSVosWUFBSSxDQUFDLENBQUQsSUFBTSxTQUFTLEVBQUUsTUFBRixFQUFVO0FBQzNCLGVBQUssRUFBTCxHQUFVLFNBQVYsQ0FEMkI7QUFFM0IsaUJBQU8sS0FBSyxDQUFMLENBQVAsQ0FGMkI7U0FBN0I7QUFJQSxZQUFJLFFBQVEsTUFBUixFQUNGLE9BQU8sS0FBSyxDQUFMLEVBQVEsS0FBUixDQUFQLENBREY7QUFFQSxZQUFJLFFBQVEsUUFBUixFQUNGLE9BQU8sS0FBSyxDQUFMLEVBQVEsRUFBRSxLQUFGLENBQVIsQ0FBUCxDQURGO0FBRUEsZUFBTyxLQUFLLENBQUwsRUFBUSxDQUFDLEtBQUQsRUFBUSxFQUFFLEtBQUYsQ0FBUixDQUFSLENBQVAsQ0FaWTtPQUFYLEVBYUEsUUFqQmMsQ0FBakI7QUFrQkEsZ0JBQVUsU0FBVixHQUFzQixVQUFVLEtBQVY7QUFDdEIsdUJBQWlCLE1BQWpCO0FBQ0EsdUJBQWlCLFFBQWpCO0FBQ0EsdUJBQWlCLFNBQWpCIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vJC5hZGQtdG8tdW5zY29wYWJsZXMnKSxcbiAgICBzdGVwID0gcmVxdWlyZSgnLi8kLml0ZXItc3RlcCcpLFxuICAgIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKSxcbiAgICB0b0lPYmplY3QgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuaXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7XG4gIHRoaXMuX2kgPSAwO1xuICB0aGlzLl9rID0ga2luZDtcbn0sIGZ1bmN0aW9uKCkge1xuICB2YXIgTyA9IHRoaXMuX3QsXG4gICAgICBraW5kID0gdGhpcy5fayxcbiAgICAgIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJylcbiAgICByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKVxuICAgIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
