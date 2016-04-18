'use strict';

System.register([], function (_export, _context) {
  var baseGet, baseSlice;

  function parent(object, path) {
    return path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
  }
  return {
    setters: [],
    execute: function () {
      baseGet = require('./_baseGet');
      baseSlice = require('./_baseSlice');
      module.exports = parent;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19wYXJlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0IsSUFBeEIsRUFBOEI7QUFDNUIsV0FBTyxLQUFLLE1BQUwsSUFBZSxDQUFmLEdBQW1CLE1BQW5CLEdBQTRCLFFBQVEsTUFBUixFQUFnQixVQUFVLElBQVYsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBQyxDQUFELENBQW5DLENBQTVCLENBRHFCO0dBQTlCOzs7O0FBRkksZ0JBQVUsUUFBUSxZQUFSO0FBQ1Ysa0JBQVksUUFBUSxjQUFSO0FBSWhCLGFBQU8sT0FBUCxHQUFpQixNQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fcGFyZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vX2Jhc2VHZXQnKSxcbiAgICBiYXNlU2xpY2UgPSByZXF1aXJlKCcuL19iYXNlU2xpY2UnKTtcbmZ1bmN0aW9uIHBhcmVudChvYmplY3QsIHBhdGgpIHtcbiAgcmV0dXJuIHBhdGgubGVuZ3RoID09IDEgPyBvYmplY3QgOiBiYXNlR2V0KG9iamVjdCwgYmFzZVNsaWNlKHBhdGgsIDAsIC0xKSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHBhcmVudDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
