'use strict';

System.register([], function (_export, _context) {
  var baseConvert, util;

  function convert(name, func, options) {
    return baseConvert(util, name, func, options);
  }
  return {
    setters: [],
    execute: function () {
      baseConvert = require('./_baseConvert');
      util = require('./_util');
      module.exports = convert;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZwL2NvbnZlcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUIsSUFBdkIsRUFBNkIsT0FBN0IsRUFBc0M7QUFDcEMsV0FBTyxZQUFZLElBQVosRUFBa0IsSUFBbEIsRUFBd0IsSUFBeEIsRUFBOEIsT0FBOUIsQ0FBUCxDQURvQztHQUF0Qzs7OztBQUZJLG9CQUFjLFFBQVEsZ0JBQVI7QUFDZCxhQUFPLFFBQVEsU0FBUjtBQUlYLGFBQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9mcC9jb252ZXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUNvbnZlcnQgPSByZXF1aXJlKCcuL19iYXNlQ29udmVydCcpLFxuICAgIHV0aWwgPSByZXF1aXJlKCcuL191dGlsJyk7XG5mdW5jdGlvbiBjb252ZXJ0KG5hbWUsIGZ1bmMsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGJhc2VDb252ZXJ0KHV0aWwsIG5hbWUsIGZ1bmMsIG9wdGlvbnMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
