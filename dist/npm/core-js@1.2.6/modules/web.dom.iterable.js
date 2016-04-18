'use strict';

System.register([], function (_export, _context) {
  var global, hide, Iterators, ITERATOR, NL, HTC, NLProto, HTCProto, ArrayValues;
  return {
    setters: [],
    execute: function () {
      /* */
      require('./es6.array.iterator');
      global = require('./$.global');
      hide = require('./$.hide');
      Iterators = require('./$.iterators');
      ITERATOR = require('./$.wks')('iterator');
      NL = global.NodeList;
      HTC = global.HTMLCollection;
      NLProto = NL && NL.prototype;
      HTCProto = HTC && HTC.prototype;
      ArrayValues = Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

      if (NLProto && !NLProto[ITERATOR]) hide(NLProto, ITERATOR, ArrayValues);
      if (HTCProto && !HTCProto[ITERATOR]) hide(HTCProto, ITERATOR, ArrayValues);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBLGNBQVEsc0JBQVI7QUFDSSxlQUFTLFFBQVEsWUFBUjtBQUNULGFBQU8sUUFBUSxVQUFSO0FBQ1Asa0JBQVksUUFBUSxlQUFSO0FBQ1osaUJBQVcsUUFBUSxTQUFSLEVBQW1CLFVBQW5CO0FBQ1gsV0FBSyxPQUFPLFFBQVA7QUFDTCxZQUFNLE9BQU8sY0FBUDtBQUNOLGdCQUFVLE1BQU0sR0FBRyxTQUFIO0FBQ2hCLGlCQUFXLE9BQU8sSUFBSSxTQUFKO0FBQ2xCLG9CQUFjLFVBQVUsUUFBVixHQUFxQixVQUFVLGNBQVYsR0FBMkIsVUFBVSxLQUFWOztBQUNsRSxVQUFJLFdBQVcsQ0FBQyxRQUFRLFFBQVIsQ0FBRCxFQUNiLEtBQUssT0FBTCxFQUFjLFFBQWQsRUFBd0IsV0FBeEIsRUFERjtBQUVBLFVBQUksWUFBWSxDQUFDLFNBQVMsUUFBVCxDQUFELEVBQ2QsS0FBSyxRQUFMLEVBQWUsUUFBZixFQUF5QixXQUF6QixFQURGIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxucmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJyksXG4gICAgaGlkZSA9IHJlcXVpcmUoJy4vJC5oaWRlJyksXG4gICAgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpLFxuICAgIElURVJBVE9SID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpLFxuICAgIE5MID0gZ2xvYmFsLk5vZGVMaXN0LFxuICAgIEhUQyA9IGdsb2JhbC5IVE1MQ29sbGVjdGlvbixcbiAgICBOTFByb3RvID0gTkwgJiYgTkwucHJvdG90eXBlLFxuICAgIEhUQ1Byb3RvID0gSFRDICYmIEhUQy5wcm90b3R5cGUsXG4gICAgQXJyYXlWYWx1ZXMgPSBJdGVyYXRvcnMuTm9kZUxpc3QgPSBJdGVyYXRvcnMuSFRNTENvbGxlY3Rpb24gPSBJdGVyYXRvcnMuQXJyYXk7XG5pZiAoTkxQcm90byAmJiAhTkxQcm90b1tJVEVSQVRPUl0pXG4gIGhpZGUoTkxQcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbmlmIChIVENQcm90byAmJiAhSFRDUHJvdG9bSVRFUkFUT1JdKVxuICBoaWRlKEhUQ1Byb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
