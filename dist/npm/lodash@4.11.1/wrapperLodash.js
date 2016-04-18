'use strict';

System.register([], function (_export, _context) {
  var LazyWrapper, LodashWrapper, baseLodash, isArray, isObjectLike, wrapperClone, objectProto, hasOwnProperty;

  function lodash(value) {
    if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
      if (value instanceof LodashWrapper) {
        return value;
      }
      if (hasOwnProperty.call(value, '__wrapped__')) {
        return wrapperClone(value);
      }
    }
    return new LodashWrapper(value);
  }
  return {
    setters: [],
    execute: function () {
      LazyWrapper = require('./_LazyWrapper');
      LodashWrapper = require('./_LodashWrapper');
      baseLodash = require('./_baseLodash');
      isArray = require('./isArray');
      isObjectLike = require('./isObjectLike');
      wrapperClone = require('./_wrapperClone');
      objectProto = Object.prototype;
      hasOwnProperty = objectProto.hasOwnProperty;
      lodash.prototype = baseLodash.prototype;
      lodash.prototype.constructor = lodash;
      module.exports = lodash;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3dyYXBwZXJMb2Rhc2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSxXQUFTLE1BQVQsQ0FBZ0IsS0FBaEIsRUFBdUI7QUFDckIsUUFBSSxhQUFhLEtBQWIsS0FBdUIsQ0FBQyxRQUFRLEtBQVIsQ0FBRCxJQUFtQixFQUFFLGlCQUFpQixXQUFqQixDQUFGLEVBQWlDO0FBQzdFLFVBQUksaUJBQWlCLGFBQWpCLEVBQWdDO0FBQ2xDLGVBQU8sS0FBUCxDQURrQztPQUFwQztBQUdBLFVBQUksZUFBZSxJQUFmLENBQW9CLEtBQXBCLEVBQTJCLGFBQTNCLENBQUosRUFBK0M7QUFDN0MsZUFBTyxhQUFhLEtBQWIsQ0FBUCxDQUQ2QztPQUEvQztLQUpGO0FBUUEsV0FBTyxJQUFJLGFBQUosQ0FBa0IsS0FBbEIsQ0FBUCxDQVRxQjtHQUF2Qjs7OztBQVJJLG9CQUFjLFFBQVEsZ0JBQVI7QUFDZCxzQkFBZ0IsUUFBUSxrQkFBUjtBQUNoQixtQkFBYSxRQUFRLGVBQVI7QUFDYixnQkFBVSxRQUFRLFdBQVI7QUFDVixxQkFBZSxRQUFRLGdCQUFSO0FBQ2YscUJBQWUsUUFBUSxpQkFBUjtBQUNmLG9CQUFjLE9BQU8sU0FBUDtBQUNkLHVCQUFpQixZQUFZLGNBQVo7QUFZckIsYUFBTyxTQUFQLEdBQW1CLFdBQVcsU0FBWDtBQUNuQixhQUFPLFNBQVAsQ0FBaUIsV0FBakIsR0FBK0IsTUFBL0I7QUFDQSxhQUFPLE9BQVAsR0FBaUIsTUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvd3JhcHBlckxvZGFzaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIExhenlXcmFwcGVyID0gcmVxdWlyZSgnLi9fTGF6eVdyYXBwZXInKSxcbiAgICBMb2Rhc2hXcmFwcGVyID0gcmVxdWlyZSgnLi9fTG9kYXNoV3JhcHBlcicpLFxuICAgIGJhc2VMb2Rhc2ggPSByZXF1aXJlKCcuL19iYXNlTG9kYXNoJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyksXG4gICAgd3JhcHBlckNsb25lID0gcmVxdWlyZSgnLi9fd3JhcHBlckNsb25lJyk7XG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiBsb2Rhc2godmFsdWUpIHtcbiAgaWYgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgIWlzQXJyYXkodmFsdWUpICYmICEodmFsdWUgaW5zdGFuY2VvZiBMYXp5V3JhcHBlcikpIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBMb2Rhc2hXcmFwcGVyKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnX193cmFwcGVkX18nKSkge1xuICAgICAgcmV0dXJuIHdyYXBwZXJDbG9uZSh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXcgTG9kYXNoV3JhcHBlcih2YWx1ZSk7XG59XG5sb2Rhc2gucHJvdG90eXBlID0gYmFzZUxvZGFzaC5wcm90b3R5cGU7XG5sb2Rhc2gucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbG9kYXNoO1xubW9kdWxlLmV4cG9ydHMgPSBsb2Rhc2g7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
