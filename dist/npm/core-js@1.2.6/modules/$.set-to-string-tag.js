'use strict';

System.register([], function (_export, _context) {
  var def, has, TAG;
  return {
    setters: [],
    execute: function () {
      def = require('./$').setDesc;
      has = require('./$.has');
      TAG = require('./$.wks')('toStringTag');

      module.exports = function (it, tag, stat) {
        if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
          configurable: true,
          value: tag
        });
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5zZXQtdG8tc3RyaW5nLXRhZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksWUFBTSxRQUFRLEtBQVIsRUFBZSxPQUFmO0FBQ04sWUFBTSxRQUFRLFNBQVI7QUFDTixZQUFNLFFBQVEsU0FBUixFQUFtQixhQUFuQjs7QUFDVixhQUFPLE9BQVAsR0FBaUIsVUFBUyxFQUFULEVBQWEsR0FBYixFQUFrQixJQUFsQixFQUF3QjtBQUN2QyxZQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFQLEdBQVksR0FBRyxTQUFILEVBQWMsR0FBbkMsQ0FBRCxFQUNSLElBQUksRUFBSixFQUFRLEdBQVIsRUFBYTtBQUNYLHdCQUFjLElBQWQ7QUFDQSxpQkFBTyxHQUFQO1NBRkYsRUFERjtPQURlIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5zZXQtdG8tc3RyaW5nLXRhZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGRlZiA9IHJlcXVpcmUoJy4vJCcpLnNldERlc2MsXG4gICAgaGFzID0gcmVxdWlyZSgnLi8kLmhhcycpLFxuICAgIFRBRyA9IHJlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlcbiAgICBkZWYoaXQsIFRBRywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IHRhZ1xuICAgIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
