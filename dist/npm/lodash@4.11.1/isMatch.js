'use strict';

System.register([], function (_export, _context) {
  var baseIsMatch, getMatchData;

  function isMatch(object, source) {
    return object === source || baseIsMatch(object, source, getMatchData(source));
  }
  return {
    setters: [],
    execute: function () {
      baseIsMatch = require('./_baseIsMatch');
      getMatchData = require('./_getMatchData');
      module.exports = isMatch;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzTWF0Y2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLE9BQVQsQ0FBaUIsTUFBakIsRUFBeUIsTUFBekIsRUFBaUM7QUFDL0IsV0FBTyxXQUFXLE1BQVgsSUFBcUIsWUFBWSxNQUFaLEVBQW9CLE1BQXBCLEVBQTRCLGFBQWEsTUFBYixDQUE1QixDQUFyQixDQUR3QjtHQUFqQzs7OztBQUZJLG9CQUFjLFFBQVEsZ0JBQVI7QUFDZCxxQkFBZSxRQUFRLGlCQUFSO0FBSW5CLGFBQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9pc01hdGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUlzTWF0Y2ggPSByZXF1aXJlKCcuL19iYXNlSXNNYXRjaCcpLFxuICAgIGdldE1hdGNoRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hdGNoRGF0YScpO1xuZnVuY3Rpb24gaXNNYXRjaChvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ID09PSBzb3VyY2UgfHwgYmFzZUlzTWF0Y2gob2JqZWN0LCBzb3VyY2UsIGdldE1hdGNoRGF0YShzb3VyY2UpKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaXNNYXRjaDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
