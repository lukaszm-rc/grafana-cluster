'use strict';

System.register([], function (_export, _context) {
  var arrayEach, baseCreate, baseForOwn, baseIteratee, getPrototype, isArray, isFunction, isObject, isTypedArray;

  function transform(object, iteratee, accumulator) {
    var isArr = isArray(object) || isTypedArray(object);
    iteratee = baseIteratee(iteratee, 4);
    if (accumulator == null) {
      if (isArr || isObject(object)) {
        var Ctor = object.constructor;
        if (isArr) {
          accumulator = isArray(object) ? new Ctor() : [];
        } else {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
      } else {
        accumulator = {};
      }
    }
    (isArr ? arrayEach : baseForOwn)(object, function (value, index, object) {
      return iteratee(accumulator, value, index, object);
    });
    return accumulator;
  }
  return {
    setters: [],
    execute: function () {
      arrayEach = require('./_arrayEach');
      baseCreate = require('./_baseCreate');
      baseForOwn = require('./_baseForOwn');
      baseIteratee = require('./_baseIteratee');
      getPrototype = require('./_getPrototype');
      isArray = require('./isArray');
      isFunction = require('./isFunction');
      isObject = require('./isObject');
      isTypedArray = require('./isTypedArray');
      module.exports = transform;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3RyYW5zZm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVVBLFdBQVMsU0FBVCxDQUFtQixNQUFuQixFQUEyQixRQUEzQixFQUFxQyxXQUFyQyxFQUFrRDtBQUNoRCxRQUFJLFFBQVEsUUFBUSxNQUFSLEtBQW1CLGFBQWEsTUFBYixDQUFuQixDQURvQztBQUVoRCxlQUFXLGFBQWEsUUFBYixFQUF1QixDQUF2QixDQUFYLENBRmdEO0FBR2hELFFBQUksZUFBZSxJQUFmLEVBQXFCO0FBQ3ZCLFVBQUksU0FBUyxTQUFTLE1BQVQsQ0FBVCxFQUEyQjtBQUM3QixZQUFJLE9BQU8sT0FBTyxXQUFQLENBRGtCO0FBRTdCLFlBQUksS0FBSixFQUFXO0FBQ1Qsd0JBQWMsUUFBUSxNQUFSLElBQWtCLElBQUksSUFBSixFQUFsQixHQUE2QixFQUE3QixDQURMO1NBQVgsTUFFTztBQUNMLHdCQUFjLFdBQVcsSUFBWCxJQUFtQixXQUFXLGFBQWEsTUFBYixDQUFYLENBQW5CLEdBQXNELEVBQXRELENBRFQ7U0FGUDtPQUZGLE1BT087QUFDTCxzQkFBYyxFQUFkLENBREs7T0FQUDtLQURGO0FBWUEsS0FBQyxRQUFRLFNBQVIsR0FBb0IsVUFBcEIsQ0FBRCxDQUFpQyxNQUFqQyxFQUF5QyxVQUFTLEtBQVQsRUFBZ0IsS0FBaEIsRUFBdUIsTUFBdkIsRUFBK0I7QUFDdEUsYUFBTyxTQUFTLFdBQVQsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsTUFBcEMsQ0FBUCxDQURzRTtLQUEvQixDQUF6QyxDQWZnRDtBQWtCaEQsV0FBTyxXQUFQLENBbEJnRDtHQUFsRDs7OztBQVRJLGtCQUFZLFFBQVEsY0FBUjtBQUNaLG1CQUFhLFFBQVEsZUFBUjtBQUNiLG1CQUFhLFFBQVEsZUFBUjtBQUNiLHFCQUFlLFFBQVEsaUJBQVI7QUFDZixxQkFBZSxRQUFRLGlCQUFSO0FBQ2YsZ0JBQVUsUUFBUSxXQUFSO0FBQ1YsbUJBQWEsUUFBUSxjQUFSO0FBQ2IsaUJBQVcsUUFBUSxZQUFSO0FBQ1gscUJBQWUsUUFBUSxnQkFBUjtBQXFCbkIsYUFBTyxPQUFQLEdBQWlCLFNBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3RyYW5zZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFycmF5RWFjaCA9IHJlcXVpcmUoJy4vX2FycmF5RWFjaCcpLFxuICAgIGJhc2VDcmVhdGUgPSByZXF1aXJlKCcuL19iYXNlQ3JlYXRlJyksXG4gICAgYmFzZUZvck93biA9IHJlcXVpcmUoJy4vX2Jhc2VGb3JPd24nKSxcbiAgICBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5mdW5jdGlvbiB0cmFuc2Zvcm0ob2JqZWN0LCBpdGVyYXRlZSwgYWNjdW11bGF0b3IpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheShvYmplY3QpIHx8IGlzVHlwZWRBcnJheShvYmplY3QpO1xuICBpdGVyYXRlZSA9IGJhc2VJdGVyYXRlZShpdGVyYXRlZSwgNCk7XG4gIGlmIChhY2N1bXVsYXRvciA9PSBudWxsKSB7XG4gICAgaWYgKGlzQXJyIHx8IGlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yO1xuICAgICAgaWYgKGlzQXJyKSB7XG4gICAgICAgIGFjY3VtdWxhdG9yID0gaXNBcnJheShvYmplY3QpID8gbmV3IEN0b3IgOiBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjY3VtdWxhdG9yID0gaXNGdW5jdGlvbihDdG9yKSA/IGJhc2VDcmVhdGUoZ2V0UHJvdG90eXBlKG9iamVjdCkpIDoge307XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjY3VtdWxhdG9yID0ge307XG4gICAgfVxuICB9XG4gIChpc0FyciA/IGFycmF5RWFjaCA6IGJhc2VGb3JPd24pKG9iamVjdCwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBvYmplY3QpIHtcbiAgICByZXR1cm4gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgb2JqZWN0KTtcbiAgfSk7XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
