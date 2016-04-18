'use strict';

System.register([], function (_export, _context) {
  var copyObject, getSymbols;

  function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
  }
  return {
    setters: [],
    execute: function () {
      copyObject = require('./_copyObject');
      getSymbols = require('./_getSymbols');
      module.exports = copySymbols;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jb3B5U3ltYm9scy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsV0FBVCxDQUFxQixNQUFyQixFQUE2QixNQUE3QixFQUFxQztBQUNuQyxXQUFPLFdBQVcsTUFBWCxFQUFtQixXQUFXLE1BQVgsQ0FBbkIsRUFBdUMsTUFBdkMsQ0FBUCxDQURtQztHQUFyQzs7OztBQUZJLG1CQUFhLFFBQVEsZUFBUjtBQUNiLG1CQUFhLFFBQVEsZUFBUjtBQUlqQixhQUFPLE9BQVAsR0FBaUIsV0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2NvcHlTeW1ib2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpO1xuZnVuY3Rpb24gY29weVN5bWJvbHMoc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzKHNvdXJjZSksIG9iamVjdCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlTeW1ib2xzO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
