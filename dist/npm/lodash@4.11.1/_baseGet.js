'use strict';

System.register([], function (_export, _context) {
  var castPath, isKey;

  function baseGet(object, path) {
    path = isKey(path, object) ? [path] : castPath(path);
    var index = 0,
        length = path.length;
    while (object != null && index < length) {
      object = object[path[index++]];
    }
    return index && index == length ? object : undefined;
  }
  return {
    setters: [],
    execute: function () {
      castPath = require('./_castPath');
      isKey = require('./_isKey');
      module.exports = baseGet;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlR2V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxPQUFULENBQWlCLE1BQWpCLEVBQXlCLElBQXpCLEVBQStCO0FBQzdCLFdBQU8sTUFBTSxJQUFOLEVBQVksTUFBWixJQUFzQixDQUFDLElBQUQsQ0FBdEIsR0FBK0IsU0FBUyxJQUFULENBQS9CLENBRHNCO0FBRTdCLFFBQUksUUFBUSxDQUFSO1FBQ0EsU0FBUyxLQUFLLE1BQUwsQ0FIZ0I7QUFJN0IsV0FBTyxVQUFVLElBQVYsSUFBa0IsUUFBUSxNQUFSLEVBQWdCO0FBQ3ZDLGVBQVMsT0FBTyxLQUFLLE9BQUwsQ0FBUCxDQUFULENBRHVDO0tBQXpDO0FBR0EsV0FBTyxLQUFDLElBQVMsU0FBUyxNQUFULEdBQW1CLE1BQTdCLEdBQXNDLFNBQXRDLENBUHNCO0dBQS9COzs7O0FBRkksaUJBQVcsUUFBUSxhQUFSO0FBQ1gsY0FBUSxRQUFRLFVBQVI7QUFVWixhQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2Jhc2VHZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpO1xuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHBhdGgpIHtcbiAgcGF0aCA9IGlzS2V5KHBhdGgsIG9iamVjdCkgPyBbcGF0aF0gOiBjYXN0UGF0aChwYXRoKTtcbiAgdmFyIGluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuICB3aGlsZSAob2JqZWN0ICE9IG51bGwgJiYgaW5kZXggPCBsZW5ndGgpIHtcbiAgICBvYmplY3QgPSBvYmplY3RbcGF0aFtpbmRleCsrXV07XG4gIH1cbiAgcmV0dXJuIChpbmRleCAmJiBpbmRleCA9PSBsZW5ndGgpID8gb2JqZWN0IDogdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
