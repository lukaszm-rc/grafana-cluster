'use strict';

System.register([], function (_export, _context) {
  var castPath, has, isKey, last, parent;

  function baseUnset(object, path) {
    path = isKey(path, object) ? [path] : castPath(path);
    object = parent(object, path);
    var key = last(path);
    return object != null && has(object, key) ? delete object[key] : true;
  }
  return {
    setters: [],
    execute: function () {
      castPath = require('./_castPath');
      has = require('./has');
      isKey = require('./_isKey');
      last = require('./last');
      parent = require('./_parent');
      module.exports = baseUnset;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlVW5zZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxXQUFTLFNBQVQsQ0FBbUIsTUFBbkIsRUFBMkIsSUFBM0IsRUFBaUM7QUFDL0IsV0FBTyxNQUFNLElBQU4sRUFBWSxNQUFaLElBQXNCLENBQUMsSUFBRCxDQUF0QixHQUErQixTQUFTLElBQVQsQ0FBL0IsQ0FEd0I7QUFFL0IsYUFBUyxPQUFPLE1BQVAsRUFBZSxJQUFmLENBQVQsQ0FGK0I7QUFHL0IsUUFBSSxNQUFNLEtBQUssSUFBTCxDQUFOLENBSDJCO0FBSS9CLFdBQU8sTUFBQyxJQUFVLElBQVYsSUFBa0IsSUFBSSxNQUFKLEVBQVksR0FBWixDQUFsQixHQUFzQyxPQUFPLE9BQU8sR0FBUCxDQUFQLEdBQXFCLElBQTVELENBSndCO0dBQWpDOzs7O0FBTEksaUJBQVcsUUFBUSxhQUFSO0FBQ1gsWUFBTSxRQUFRLE9BQVI7QUFDTixjQUFRLFFBQVEsVUFBUjtBQUNSLGFBQU8sUUFBUSxRQUFSO0FBQ1AsZUFBUyxRQUFRLFdBQVI7QUFPYixhQUFPLE9BQVAsR0FBaUIsU0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2Jhc2VVbnNldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICBoYXMgPSByZXF1aXJlKCcuL2hhcycpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBsYXN0ID0gcmVxdWlyZSgnLi9sYXN0JyksXG4gICAgcGFyZW50ID0gcmVxdWlyZSgnLi9fcGFyZW50Jyk7XG5mdW5jdGlvbiBiYXNlVW5zZXQob2JqZWN0LCBwYXRoKSB7XG4gIHBhdGggPSBpc0tleShwYXRoLCBvYmplY3QpID8gW3BhdGhdIDogY2FzdFBhdGgocGF0aCk7XG4gIG9iamVjdCA9IHBhcmVudChvYmplY3QsIHBhdGgpO1xuICB2YXIga2V5ID0gbGFzdChwYXRoKTtcbiAgcmV0dXJuIChvYmplY3QgIT0gbnVsbCAmJiBoYXMob2JqZWN0LCBrZXkpKSA/IGRlbGV0ZSBvYmplY3Rba2V5XSA6IHRydWU7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbnNldDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
