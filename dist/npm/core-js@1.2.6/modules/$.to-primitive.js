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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC50by1wcmltaXRpdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGlCQUFXLFFBQVEsZUFBUjs7QUFDZixhQUFPLE9BQVAsR0FBaUIsVUFBUyxFQUFULEVBQWEsQ0FBYixFQUFnQjtBQUMvQixZQUFJLENBQUMsU0FBUyxFQUFULENBQUQsRUFDRixPQUFPLEVBQVAsQ0FERjtBQUVBLFlBQUksRUFBSixFQUNJLEdBREosQ0FIK0I7QUFLL0IsWUFBSSxLQUFLLFFBQU8sS0FBSyxHQUFHLFFBQUgsQ0FBWixJQUE0QixVQUE1QixJQUEwQyxDQUFDLFNBQVMsTUFBTSxHQUFHLElBQUgsQ0FBUSxFQUFSLENBQU4sQ0FBVixFQUNqRCxPQUFPLEdBQVAsQ0FERjtBQUVBLFlBQUksUUFBTyxLQUFLLEdBQUcsT0FBSCxDQUFaLElBQTJCLFVBQTNCLElBQXlDLENBQUMsU0FBUyxNQUFNLEdBQUcsSUFBSCxDQUFRLEVBQVIsQ0FBTixDQUFWLEVBQzNDLE9BQU8sR0FBUCxDQURGO0FBRUEsWUFBSSxDQUFDLENBQUQsSUFBTSxRQUFPLEtBQUssR0FBRyxRQUFILENBQVosSUFBNEIsVUFBNUIsSUFBMEMsQ0FBQyxTQUFTLE1BQU0sR0FBRyxJQUFILENBQVEsRUFBUixDQUFOLENBQVYsRUFDbEQsT0FBTyxHQUFQLENBREY7QUFFQSxjQUFNLFVBQVUseUNBQVYsQ0FBTixDQVgrQjtPQUFoQiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzLyQudG8tcHJpbWl0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKVxuICAgIHJldHVybiBpdDtcbiAgdmFyIGZuLFxuICAgICAgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKVxuICAgIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpXG4gICAgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZihmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpXG4gICAgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
