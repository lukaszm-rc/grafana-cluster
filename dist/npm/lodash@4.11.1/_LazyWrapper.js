'use strict';

System.register([], function (_export, _context) {
  var baseCreate, baseLodash, MAX_ARRAY_LENGTH;

  function LazyWrapper(value) {
    this.__wrapped__ = value;
    this.__actions__ = [];
    this.__dir__ = 1;
    this.__filtered__ = false;
    this.__iteratees__ = [];
    this.__takeCount__ = MAX_ARRAY_LENGTH;
    this.__views__ = [];
  }
  return {
    setters: [],
    execute: function () {
      baseCreate = require('./_baseCreate');
      baseLodash = require('./_baseLodash');
      MAX_ARRAY_LENGTH = 4294967295;
      LazyWrapper.prototype = baseCreate(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
      module.exports = LazyWrapper;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19MYXp5V3JhcHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLFdBQVMsV0FBVCxDQUFxQixLQUFyQixFQUE0QjtBQUMxQixTQUFLLFdBQUwsR0FBbUIsS0FBbkIsQ0FEMEI7QUFFMUIsU0FBSyxXQUFMLEdBQW1CLEVBQW5CLENBRjBCO0FBRzFCLFNBQUssT0FBTCxHQUFlLENBQWYsQ0FIMEI7QUFJMUIsU0FBSyxZQUFMLEdBQW9CLEtBQXBCLENBSjBCO0FBSzFCLFNBQUssYUFBTCxHQUFxQixFQUFyQixDQUwwQjtBQU0xQixTQUFLLGFBQUwsR0FBcUIsZ0JBQXJCLENBTjBCO0FBTzFCLFNBQUssU0FBTCxHQUFpQixFQUFqQixDQVAwQjtHQUE1Qjs7OztBQUhJLG1CQUFhLFFBQVEsZUFBUjtBQUNiLG1CQUFhLFFBQVEsZUFBUjtBQUNiLHlCQUFtQjtBQVV2QixrQkFBWSxTQUFaLEdBQXdCLFdBQVcsV0FBVyxTQUFYLENBQW5DO0FBQ0Esa0JBQVksU0FBWixDQUFzQixXQUF0QixHQUFvQyxXQUFwQztBQUNBLGFBQU8sT0FBUCxHQUFpQixXQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fTGF6eVdyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlQ3JlYXRlID0gcmVxdWlyZSgnLi9fYmFzZUNyZWF0ZScpLFxuICAgIGJhc2VMb2Rhc2ggPSByZXF1aXJlKCcuL19iYXNlTG9kYXNoJyk7XG52YXIgTUFYX0FSUkFZX0xFTkdUSCA9IDQyOTQ5NjcyOTU7XG5mdW5jdGlvbiBMYXp5V3JhcHBlcih2YWx1ZSkge1xuICB0aGlzLl9fd3JhcHBlZF9fID0gdmFsdWU7XG4gIHRoaXMuX19hY3Rpb25zX18gPSBbXTtcbiAgdGhpcy5fX2Rpcl9fID0gMTtcbiAgdGhpcy5fX2ZpbHRlcmVkX18gPSBmYWxzZTtcbiAgdGhpcy5fX2l0ZXJhdGVlc19fID0gW107XG4gIHRoaXMuX190YWtlQ291bnRfXyA9IE1BWF9BUlJBWV9MRU5HVEg7XG4gIHRoaXMuX192aWV3c19fID0gW107XG59XG5MYXp5V3JhcHBlci5wcm90b3R5cGUgPSBiYXNlQ3JlYXRlKGJhc2VMb2Rhc2gucHJvdG90eXBlKTtcbkxhenlXcmFwcGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IExhenlXcmFwcGVyO1xubW9kdWxlLmV4cG9ydHMgPSBMYXp5V3JhcHBlcjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
