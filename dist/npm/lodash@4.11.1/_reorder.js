'use strict';

System.register([], function (_export, _context) {
  var copyArray, isIndex, nativeMin;

  function reorder(array, indexes) {
    var arrLength = array.length,
        length = nativeMin(indexes.length, arrLength),
        oldArray = copyArray(array);
    while (length--) {
      var index = indexes[length];
      array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
    }
    return array;
  }
  return {
    setters: [],
    execute: function () {
      copyArray = require('./_copyArray');
      isIndex = require('./_isIndex');
      nativeMin = Math.min;
      module.exports = reorder;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19yZW9yZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsV0FBUyxPQUFULENBQWlCLEtBQWpCLEVBQXdCLE9BQXhCLEVBQWlDO0FBQy9CLFFBQUksWUFBWSxNQUFNLE1BQU47UUFDWixTQUFTLFVBQVUsUUFBUSxNQUFSLEVBQWdCLFNBQTFCLENBQVQ7UUFDQSxXQUFXLFVBQVUsS0FBVixDQUFYLENBSDJCO0FBSS9CLFdBQU8sUUFBUCxFQUFpQjtBQUNmLFVBQUksUUFBUSxRQUFRLE1BQVIsQ0FBUixDQURXO0FBRWYsWUFBTSxNQUFOLElBQWdCLFFBQVEsS0FBUixFQUFlLFNBQWYsSUFBNEIsU0FBUyxLQUFULENBQTVCLEdBQThDLFNBQTlDLENBRkQ7S0FBakI7QUFJQSxXQUFPLEtBQVAsQ0FSK0I7R0FBakM7Ozs7QUFISSxrQkFBWSxRQUFRLGNBQVI7QUFDWixnQkFBVSxRQUFRLFlBQVI7QUFDVixrQkFBWSxLQUFLLEdBQUw7QUFXaEIsYUFBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19yZW9yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgY29weUFycmF5ID0gcmVxdWlyZSgnLi9fY29weUFycmF5JyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKTtcbnZhciBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcbmZ1bmN0aW9uIHJlb3JkZXIoYXJyYXksIGluZGV4ZXMpIHtcbiAgdmFyIGFyckxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGxlbmd0aCA9IG5hdGl2ZU1pbihpbmRleGVzLmxlbmd0aCwgYXJyTGVuZ3RoKSxcbiAgICAgIG9sZEFycmF5ID0gY29weUFycmF5KGFycmF5KTtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgdmFyIGluZGV4ID0gaW5kZXhlc1tsZW5ndGhdO1xuICAgIGFycmF5W2xlbmd0aF0gPSBpc0luZGV4KGluZGV4LCBhcnJMZW5ndGgpID8gb2xkQXJyYXlbaW5kZXhdIDogdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cbm1vZHVsZS5leHBvcnRzID0gcmVvcmRlcjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
