'use strict';

System.register([], function (_export, _context) {
  var toArray;

  function wrapperNext() {
    if (this.__values__ === undefined) {
      this.__values__ = toArray(this.value());
    }
    var done = this.__index__ >= this.__values__.length,
        value = done ? undefined : this.__values__[this.__index__++];
    return {
      'done': done,
      'value': value
    };
  }
  return {
    setters: [],
    execute: function () {
      toArray = require('./toArray');
      module.exports = wrapperNext;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL25leHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxXQUFTLFdBQVQsR0FBdUI7QUFDckIsUUFBSSxLQUFLLFVBQUwsS0FBb0IsU0FBcEIsRUFBK0I7QUFDakMsV0FBSyxVQUFMLEdBQWtCLFFBQVEsS0FBSyxLQUFMLEVBQVIsQ0FBbEIsQ0FEaUM7S0FBbkM7QUFHQSxRQUFJLE9BQU8sS0FBSyxTQUFMLElBQWtCLEtBQUssVUFBTCxDQUFnQixNQUFoQjtRQUN6QixRQUFRLE9BQU8sU0FBUCxHQUFtQixLQUFLLFVBQUwsQ0FBZ0IsS0FBSyxTQUFMLEVBQWhCLENBQW5CLENBTFM7QUFNckIsV0FBTztBQUNMLGNBQVEsSUFBUjtBQUNBLGVBQVMsS0FBVDtLQUZGLENBTnFCO0dBQXZCOzs7O0FBREksZ0JBQVUsUUFBUSxXQUFSO0FBWWQsYUFBTyxPQUFQLEdBQWlCLFdBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL25leHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciB0b0FycmF5ID0gcmVxdWlyZSgnLi90b0FycmF5Jyk7XG5mdW5jdGlvbiB3cmFwcGVyTmV4dCgpIHtcbiAgaWYgKHRoaXMuX192YWx1ZXNfXyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fX3ZhbHVlc19fID0gdG9BcnJheSh0aGlzLnZhbHVlKCkpO1xuICB9XG4gIHZhciBkb25lID0gdGhpcy5fX2luZGV4X18gPj0gdGhpcy5fX3ZhbHVlc19fLmxlbmd0aCxcbiAgICAgIHZhbHVlID0gZG9uZSA/IHVuZGVmaW5lZCA6IHRoaXMuX192YWx1ZXNfX1t0aGlzLl9faW5kZXhfXysrXTtcbiAgcmV0dXJuIHtcbiAgICAnZG9uZSc6IGRvbmUsXG4gICAgJ3ZhbHVlJzogdmFsdWVcbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gd3JhcHBlck5leHQ7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
