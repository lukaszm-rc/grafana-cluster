'use strict';

System.register([], function (_export, _context) {
  var memoize, toString, rePropName, reEscapeChar, stringToPath;
  return {
    setters: [],
    execute: function () {
      memoize = require('./memoize');
      toString = require('./toString');
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;
      reEscapeChar = /\\(\\)?/g;
      stringToPath = memoize(function (string) {
        var result = [];
        toString(string).replace(rePropName, function (match, number, quote, string) {
          result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
        });
        return result;
      });


      module.exports = stringToPath;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19zdHJpbmdUb1BhdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGdCQUFVLFFBQVEsV0FBUjtBQUNWLGlCQUFXLFFBQVEsWUFBUjtBQUdYLG1CQUFhO0FBR2IscUJBQWU7QUFTZixxQkFBZSxRQUFRLFVBQVMsTUFBVCxFQUFpQjtBQUMxQyxZQUFJLFNBQVMsRUFBVCxDQURzQztBQUUxQyxpQkFBUyxNQUFULEVBQWlCLE9BQWpCLENBQXlCLFVBQXpCLEVBQXFDLFVBQVMsS0FBVCxFQUFnQixNQUFoQixFQUF3QixLQUF4QixFQUErQixNQUEvQixFQUF1QztBQUMxRSxpQkFBTyxJQUFQLENBQVksUUFBUSxPQUFPLE9BQVAsQ0FBZSxZQUFmLEVBQTZCLElBQTdCLENBQVIsR0FBOEMsVUFBVSxLQUFWLENBQTFELENBRDBFO1NBQXZDLENBQXJDLENBRjBDO0FBSzFDLGVBQU8sTUFBUCxDQUwwQztPQUFqQjs7O0FBUTNCLGFBQU8sT0FBUCxHQUFpQixZQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fc3RyaW5nVG9QYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgbWVtb2l6ZSA9IHJlcXVpcmUoJy4vbWVtb2l6ZScpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVQcm9wTmFtZSA9IC9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGJhY2tzbGFzaGVzIGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBtZW1vaXplKGZ1bmN0aW9uKHN0cmluZykge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHRvU3RyaW5nKHN0cmluZykucmVwbGFjZShyZVByb3BOYW1lLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3RyaW5nKSB7XG4gICAgcmVzdWx0LnB1c2gocXVvdGUgPyBzdHJpbmcucmVwbGFjZShyZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1RvUGF0aDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
