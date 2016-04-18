'use strict';

System.register([], function (_export, _context) {
  var _typeof, checkGlobal, objectTypes, freeExports, freeModule, freeGlobal, freeSelf, freeWindow, thisGlobal, root;

  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      checkGlobal = require('./_checkGlobal');
      objectTypes = {
        'function': true,
        'object': true
      };
      freeExports = objectTypes[typeof exports === 'undefined' ? 'undefined' : _typeof(exports)] && exports && !exports.nodeType ? exports : undefined;
      freeModule = objectTypes[typeof module === 'undefined' ? 'undefined' : _typeof(module)] && module && !module.nodeType ? module : undefined;
      freeGlobal = checkGlobal(freeExports && freeModule && (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global);
      freeSelf = checkGlobal(objectTypes[typeof self === 'undefined' ? 'undefined' : _typeof(self)] && self);
      freeWindow = checkGlobal(objectTypes[typeof window === 'undefined' ? 'undefined' : _typeof(window)] && window);
      thisGlobal = checkGlobal(objectTypes[_typeof(undefined)] && undefined);
      root = freeGlobal || freeWindow !== (thisGlobal && thisGlobal.window) && freeWindow || freeSelf || thisGlobal || Function('return this')();

      module.exports = root;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19yb290LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDSSxvQkFBYyxRQUFRLGdCQUFSO0FBQ2Qsb0JBQWM7QUFDaEIsb0JBQVksSUFBWjtBQUNBLGtCQUFVLElBQVY7O0FBRUUsb0JBQWMsV0FBQyxRQUFtQix3REFBbkIsS0FBK0IsT0FBL0IsSUFBMEMsQ0FBQyxRQUFRLFFBQVIsR0FBb0IsT0FBaEUsR0FBMEUsU0FBMUU7QUFDZCxtQkFBYSxXQUFDLFFBQW1CLHNEQUFuQixLQUE4QixNQUE5QixJQUF3QyxDQUFDLE9BQU8sUUFBUCxHQUFtQixNQUE3RCxHQUFzRSxTQUF0RTtBQUNiLG1CQUFhLFlBQVksZUFBZSxVQUFmLElBQTZCLFFBQU8sdURBQVAsSUFBaUIsUUFBakIsSUFBNkIsTUFBMUQ7QUFDekIsaUJBQVcsWUFBWSxtQkFBbUIsa0RBQW5CLEtBQTRCLElBQTVCO0FBQ3ZCLG1CQUFhLFlBQVksbUJBQW1CLHNEQUFuQixLQUE4QixNQUE5QjtBQUN6QixtQkFBYSxZQUFZLDRDQUFaO0FBQ2IsYUFBTyxjQUFlLFVBQUMsTUFBZ0IsY0FBYyxXQUFXLE1BQVgsQ0FBOUIsSUFBcUQsVUFBdEQsSUFBcUUsUUFBcEYsSUFBZ0csVUFBaEcsSUFBOEcsU0FBUyxhQUFULEdBQTlHOztBQUNYLGFBQU8sT0FBUCxHQUFpQixJQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fcm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGNoZWNrR2xvYmFsID0gcmVxdWlyZSgnLi9fY2hlY2tHbG9iYWwnKTtcbnZhciBvYmplY3RUeXBlcyA9IHtcbiAgJ2Z1bmN0aW9uJzogdHJ1ZSxcbiAgJ29iamVjdCc6IHRydWVcbn07XG52YXIgZnJlZUV4cG9ydHMgPSAob2JqZWN0VHlwZXNbdHlwZW9mIGV4cG9ydHNdICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUpID8gZXhwb3J0cyA6IHVuZGVmaW5lZDtcbnZhciBmcmVlTW9kdWxlID0gKG9iamVjdFR5cGVzW3R5cGVvZiBtb2R1bGVdICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlKSA/IG1vZHVsZSA6IHVuZGVmaW5lZDtcbnZhciBmcmVlR2xvYmFsID0gY2hlY2tHbG9iYWwoZnJlZUV4cG9ydHMgJiYgZnJlZU1vZHVsZSAmJiB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCk7XG52YXIgZnJlZVNlbGYgPSBjaGVja0dsb2JhbChvYmplY3RUeXBlc1t0eXBlb2Ygc2VsZl0gJiYgc2VsZik7XG52YXIgZnJlZVdpbmRvdyA9IGNoZWNrR2xvYmFsKG9iamVjdFR5cGVzW3R5cGVvZiB3aW5kb3ddICYmIHdpbmRvdyk7XG52YXIgdGhpc0dsb2JhbCA9IGNoZWNrR2xvYmFsKG9iamVjdFR5cGVzW3R5cGVvZiB0aGlzXSAmJiB0aGlzKTtcbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCAoKGZyZWVXaW5kb3cgIT09ICh0aGlzR2xvYmFsICYmIHRoaXNHbG9iYWwud2luZG93KSkgJiYgZnJlZVdpbmRvdykgfHwgZnJlZVNlbGYgfHwgdGhpc0dsb2JhbCB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
