'use strict';

System.register([], function (_export, _context) {
  var castPath, isArguments, isArray, isIndex, isKey, isLength, isString;

  function hasPath(object, path, hasFunc) {
    path = isKey(path, object) ? [path] : castPath(path);
    var result,
        index = -1,
        length = path.length;
    while (++index < length) {
      var key = path[index];
      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
    if (result) {
      return result;
    }
    var length = object ? object.length : 0;
    return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isString(object) || isArguments(object));
  }
  return {
    setters: [],
    execute: function () {
      castPath = require('./_castPath');
      isArguments = require('./isArguments');
      isArray = require('./isArray');
      isIndex = require('./_isIndex');
      isKey = require('./_isKey');
      isLength = require('./isLength');
      isString = require('./isString');
      module.exports = hasPath;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19oYXNQYXRoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBUUEsV0FBUyxPQUFULENBQWlCLE1BQWpCLEVBQXlCLElBQXpCLEVBQStCLE9BQS9CLEVBQXdDO0FBQ3RDLFdBQU8sTUFBTSxJQUFOLEVBQVksTUFBWixJQUFzQixDQUFDLElBQUQsQ0FBdEIsR0FBK0IsU0FBUyxJQUFULENBQS9CLENBRCtCO0FBRXRDLFFBQUksTUFBSjtRQUNJLFFBQVEsQ0FBQyxDQUFEO1FBQ1IsU0FBUyxLQUFLLE1BQUwsQ0FKeUI7QUFLdEMsV0FBTyxFQUFFLEtBQUYsR0FBVSxNQUFWLEVBQWtCO0FBQ3ZCLFVBQUksTUFBTSxLQUFLLEtBQUwsQ0FBTixDQURtQjtBQUV2QixVQUFJLEVBQUUsU0FBUyxVQUFVLElBQVYsSUFBa0IsUUFBUSxNQUFSLEVBQWdCLEdBQWhCLENBQWxCLENBQVgsRUFBb0Q7QUFDdEQsY0FEc0Q7T0FBeEQ7QUFHQSxlQUFTLE9BQU8sR0FBUCxDQUFULENBTHVCO0tBQXpCO0FBT0EsUUFBSSxNQUFKLEVBQVk7QUFDVixhQUFPLE1BQVAsQ0FEVTtLQUFaO0FBR0EsUUFBSSxTQUFTLFNBQVMsT0FBTyxNQUFQLEdBQWdCLENBQXpCLENBZnlCO0FBZ0J0QyxXQUFPLENBQUMsQ0FBQyxNQUFELElBQVcsU0FBUyxNQUFULENBQVosSUFBZ0MsUUFBUSxHQUFSLEVBQWEsTUFBYixDQUFoQyxLQUF5RCxRQUFRLE1BQVIsS0FBbUIsU0FBUyxNQUFULENBQW5CLElBQXVDLFlBQVksTUFBWixDQUF2QyxDQUF6RCxDQWhCK0I7R0FBeEM7Ozs7QUFQSSxpQkFBVyxRQUFRLGFBQVI7QUFDWCxvQkFBYyxRQUFRLGVBQVI7QUFDZCxnQkFBVSxRQUFRLFdBQVI7QUFDVixnQkFBVSxRQUFRLFlBQVI7QUFDVixjQUFRLFFBQVEsVUFBUjtBQUNSLGlCQUFXLFFBQVEsWUFBUjtBQUNYLGlCQUFXLFFBQVEsWUFBUjtBQW1CZixhQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2hhc1BhdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzU3RyaW5nID0gcmVxdWlyZSgnLi9pc1N0cmluZycpO1xuZnVuY3Rpb24gaGFzUGF0aChvYmplY3QsIHBhdGgsIGhhc0Z1bmMpIHtcbiAgcGF0aCA9IGlzS2V5KHBhdGgsIG9iamVjdCkgPyBbcGF0aF0gOiBjYXN0UGF0aChwYXRoKTtcbiAgdmFyIHJlc3VsdCxcbiAgICAgIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcGF0aFtpbmRleF07XG4gICAgaWYgKCEocmVzdWx0ID0gb2JqZWN0ICE9IG51bGwgJiYgaGFzRnVuYyhvYmplY3QsIGtleSkpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgb2JqZWN0ID0gb2JqZWN0W2tleV07XG4gIH1cbiAgaWYgKHJlc3VsdCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgdmFyIGxlbmd0aCA9IG9iamVjdCA/IG9iamVjdC5sZW5ndGggOiAwO1xuICByZXR1cm4gISFsZW5ndGggJiYgaXNMZW5ndGgobGVuZ3RoKSAmJiBpc0luZGV4KGtleSwgbGVuZ3RoKSAmJiAoaXNBcnJheShvYmplY3QpIHx8IGlzU3RyaW5nKG9iamVjdCkgfHwgaXNBcmd1bWVudHMob2JqZWN0KSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGhhc1BhdGg7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
