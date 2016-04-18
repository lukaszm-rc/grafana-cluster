'use strict';

System.register([], function (_export, _context) {
  var isObject;
  return {
    setters: [],
    execute: function () {
      isObject = require('./$.is-object');

      module.exports = function (it, S) {
        if (!isObject(it)) return it;
        var fn, val;
        if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
        if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
        if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
        throw TypeError("Can't convert object to primitive value");
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnRvLXByaW1pdGl2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksaUJBQVcsUUFBUSxlQUFSOztBQUNmLGFBQU8sT0FBUCxHQUFpQixVQUFTLEVBQVQsRUFBYSxDQUFiLEVBQWdCO0FBQy9CLFlBQUksQ0FBQyxTQUFTLEVBQVQsQ0FBRCxFQUNGLE9BQU8sRUFBUCxDQURGO0FBRUEsWUFBSSxFQUFKLEVBQ0ksR0FESixDQUgrQjtBQUsvQixZQUFJLEtBQUssUUFBTyxLQUFLLEdBQUcsUUFBSCxDQUFaLElBQTRCLFVBQTVCLElBQTBDLENBQUMsU0FBUyxNQUFNLEdBQUcsSUFBSCxDQUFRLEVBQVIsQ0FBTixDQUFWLEVBQ2pELE9BQU8sR0FBUCxDQURGO0FBRUEsWUFBSSxRQUFPLEtBQUssR0FBRyxPQUFILENBQVosSUFBMkIsVUFBM0IsSUFBeUMsQ0FBQyxTQUFTLE1BQU0sR0FBRyxJQUFILENBQVEsRUFBUixDQUFOLENBQVYsRUFDM0MsT0FBTyxHQUFQLENBREY7QUFFQSxZQUFJLENBQUMsQ0FBRCxJQUFNLFFBQU8sS0FBSyxHQUFHLFFBQUgsQ0FBWixJQUE0QixVQUE1QixJQUEwQyxDQUFDLFNBQVMsTUFBTSxHQUFHLElBQUgsQ0FBUSxFQUFSLENBQU4sQ0FBVixFQUNsRCxPQUFPLEdBQVAsQ0FERjtBQUVBLGNBQU0sVUFBVSx5Q0FBVixDQUFOLENBWCtCO09BQWhCIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnRvLXByaW1pdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSlcbiAgICByZXR1cm4gaXQ7XG4gIHZhciBmbixcbiAgICAgIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlcbiAgICByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKVxuICAgIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKVxuICAgIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
