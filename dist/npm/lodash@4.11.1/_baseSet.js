'use strict';

System.register([], function (_export, _context) {
  var assignValue, castPath, isIndex, isKey, isObject;

  function baseSet(object, path, value, customizer) {
    path = isKey(path, object) ? [path] : castPath(path);
    var index = -1,
        length = path.length,
        lastIndex = length - 1,
        nested = object;
    while (nested != null && ++index < length) {
      var key = path[index];
      if (isObject(nested)) {
        var newValue = value;
        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined;
          if (newValue === undefined) {
            newValue = objValue == null ? isIndex(path[index + 1]) ? [] : {} : objValue;
          }
        }
        assignValue(nested, key, newValue);
      }
      nested = nested[key];
    }
    return object;
  }
  return {
    setters: [],
    execute: function () {
      assignValue = require('./_assignValue');
      castPath = require('./_castPath');
      isIndex = require('./_isIndex');
      isKey = require('./_isKey');
      isObject = require('./isObject');
      module.exports = baseSet;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlU2V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBTUEsV0FBUyxPQUFULENBQWlCLE1BQWpCLEVBQXlCLElBQXpCLEVBQStCLEtBQS9CLEVBQXNDLFVBQXRDLEVBQWtEO0FBQ2hELFdBQU8sTUFBTSxJQUFOLEVBQVksTUFBWixJQUFzQixDQUFDLElBQUQsQ0FBdEIsR0FBK0IsU0FBUyxJQUFULENBQS9CLENBRHlDO0FBRWhELFFBQUksUUFBUSxDQUFDLENBQUQ7UUFDUixTQUFTLEtBQUssTUFBTDtRQUNULFlBQVksU0FBUyxDQUFUO1FBQ1osU0FBUyxNQUFULENBTDRDO0FBTWhELFdBQU8sVUFBVSxJQUFWLElBQWtCLEVBQUUsS0FBRixHQUFVLE1BQVYsRUFBa0I7QUFDekMsVUFBSSxNQUFNLEtBQUssS0FBTCxDQUFOLENBRHFDO0FBRXpDLFVBQUksU0FBUyxNQUFULENBQUosRUFBc0I7QUFDcEIsWUFBSSxXQUFXLEtBQVgsQ0FEZ0I7QUFFcEIsWUFBSSxTQUFTLFNBQVQsRUFBb0I7QUFDdEIsY0FBSSxXQUFXLE9BQU8sR0FBUCxDQUFYLENBRGtCO0FBRXRCLHFCQUFXLGFBQWEsV0FBVyxRQUFYLEVBQXFCLEdBQXJCLEVBQTBCLE1BQTFCLENBQWIsR0FBaUQsU0FBakQsQ0FGVztBQUd0QixjQUFJLGFBQWEsU0FBYixFQUF3QjtBQUMxQix1QkFBVyxZQUFZLElBQVosR0FBb0IsUUFBUSxLQUFLLFFBQVEsQ0FBUixDQUFiLElBQTJCLEVBQTNCLEdBQWdDLEVBQWhDLEdBQXNDLFFBQTFELENBRGU7V0FBNUI7U0FIRjtBQU9BLG9CQUFZLE1BQVosRUFBb0IsR0FBcEIsRUFBeUIsUUFBekIsRUFUb0I7T0FBdEI7QUFXQSxlQUFTLE9BQU8sR0FBUCxDQUFULENBYnlDO0tBQTNDO0FBZUEsV0FBTyxNQUFQLENBckJnRDtHQUFsRDs7OztBQUxJLG9CQUFjLFFBQVEsZ0JBQVI7QUFDZCxpQkFBVyxRQUFRLGFBQVI7QUFDWCxnQkFBVSxRQUFRLFlBQVI7QUFDVixjQUFRLFFBQVEsVUFBUjtBQUNSLGlCQUFXLFFBQVEsWUFBUjtBQXdCZixhQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2Jhc2VTZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuZnVuY3Rpb24gYmFzZVNldChvYmplY3QsIHBhdGgsIHZhbHVlLCBjdXN0b21pemVyKSB7XG4gIHBhdGggPSBpc0tleShwYXRoLCBvYmplY3QpID8gW3BhdGhdIDogY2FzdFBhdGgocGF0aCk7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGgsXG4gICAgICBsYXN0SW5kZXggPSBsZW5ndGggLSAxLFxuICAgICAgbmVzdGVkID0gb2JqZWN0O1xuICB3aGlsZSAobmVzdGVkICE9IG51bGwgJiYgKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwYXRoW2luZGV4XTtcbiAgICBpZiAoaXNPYmplY3QobmVzdGVkKSkge1xuICAgICAgdmFyIG5ld1ZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAoaW5kZXggIT0gbGFzdEluZGV4KSB7XG4gICAgICAgIHZhciBvYmpWYWx1ZSA9IG5lc3RlZFtrZXldO1xuICAgICAgICBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXIgPyBjdXN0b21pemVyKG9ialZhbHVlLCBrZXksIG5lc3RlZCkgOiB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBvYmpWYWx1ZSA9PSBudWxsID8gKGlzSW5kZXgocGF0aFtpbmRleCArIDFdKSA/IFtdIDoge30pIDogb2JqVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGFzc2lnblZhbHVlKG5lc3RlZCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICAgIG5lc3RlZCA9IG5lc3RlZFtrZXldO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTZXQ7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
