'use strict';

System.register([], function (_export, _context) {
  var baseHas, baseKeys, indexKeys, isArrayLike, isIndex, isPrototype;

  function keys(object) {
    var isProto = isPrototype(object);
    if (!(isProto || isArrayLike(object))) {
      return baseKeys(object);
    }
    var indexes = indexKeys(object),
        skipIndexes = !!indexes,
        result = indexes || [],
        length = result.length;
    for (var key in object) {
      if (baseHas(object, key) && !(skipIndexes && (key == 'length' || isIndex(key, length))) && !(isProto && key == 'constructor')) {
        result.push(key);
      }
    }
    return result;
  }
  return {
    setters: [],
    execute: function () {
      baseHas = require('./_baseHas');
      baseKeys = require('./_baseKeys');
      indexKeys = require('./_indexKeys');
      isArrayLike = require('./isArrayLike');
      isIndex = require('./_isIndex');
      isPrototype = require('./_isPrototype');
      module.exports = keys;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2tleXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFPQSxXQUFTLElBQVQsQ0FBYyxNQUFkLEVBQXNCO0FBQ3BCLFFBQUksVUFBVSxZQUFZLE1BQVosQ0FBVixDQURnQjtBQUVwQixRQUFJLEVBQUUsV0FBVyxZQUFZLE1BQVosQ0FBWCxDQUFGLEVBQW1DO0FBQ3JDLGFBQU8sU0FBUyxNQUFULENBQVAsQ0FEcUM7S0FBdkM7QUFHQSxRQUFJLFVBQVUsVUFBVSxNQUFWLENBQVY7UUFDQSxjQUFjLENBQUMsQ0FBQyxPQUFEO1FBQ2YsU0FBUyxXQUFXLEVBQVg7UUFDVCxTQUFTLE9BQU8sTUFBUCxDQVJPO0FBU3BCLFNBQUssSUFBSSxHQUFKLElBQVcsTUFBaEIsRUFBd0I7QUFDdEIsVUFBSSxRQUFRLE1BQVIsRUFBZ0IsR0FBaEIsS0FBd0IsRUFBRSxnQkFBZ0IsT0FBTyxRQUFQLElBQW1CLFFBQVEsR0FBUixFQUFhLE1BQWIsQ0FBbkIsQ0FBaEIsQ0FBRixJQUErRCxFQUFFLFdBQVcsT0FBTyxhQUFQLENBQWIsRUFBb0M7QUFDN0gsZUFBTyxJQUFQLENBQVksR0FBWixFQUQ2SDtPQUEvSDtLQURGO0FBS0EsV0FBTyxNQUFQLENBZG9CO0dBQXRCOzs7O0FBTkksZ0JBQVUsUUFBUSxZQUFSO0FBQ1YsaUJBQVcsUUFBUSxhQUFSO0FBQ1gsa0JBQVksUUFBUSxjQUFSO0FBQ1osb0JBQWMsUUFBUSxlQUFSO0FBQ2QsZ0JBQVUsUUFBUSxZQUFSO0FBQ1Ysb0JBQWMsUUFBUSxnQkFBUjtBQWlCbEIsYUFBTyxPQUFQLEdBQWlCLElBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2tleXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlSGFzID0gcmVxdWlyZSgnLi9fYmFzZUhhcycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpbmRleEtleXMgPSByZXF1aXJlKCcuL19pbmRleEtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKTtcbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHZhciBpc1Byb3RvID0gaXNQcm90b3R5cGUob2JqZWN0KTtcbiAgaWYgKCEoaXNQcm90byB8fCBpc0FycmF5TGlrZShvYmplY3QpKSkge1xuICAgIHJldHVybiBiYXNlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciBpbmRleGVzID0gaW5kZXhLZXlzKG9iamVjdCksXG4gICAgICBza2lwSW5kZXhlcyA9ICEhaW5kZXhlcyxcbiAgICAgIHJlc3VsdCA9IGluZGV4ZXMgfHwgW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKGJhc2VIYXMob2JqZWN0LCBrZXkpICYmICEoc2tpcEluZGV4ZXMgJiYgKGtleSA9PSAnbGVuZ3RoJyB8fCBpc0luZGV4KGtleSwgbGVuZ3RoKSkpICYmICEoaXNQcm90byAmJiBrZXkgPT0gJ2NvbnN0cnVjdG9yJykpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
