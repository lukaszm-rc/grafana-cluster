'use strict';

System.register([], function (_export, _context) {
  var castPath, isFunction, isKey;

  function result(object, path, defaultValue) {
    path = isKey(path, object) ? [path] : castPath(path);
    var index = -1,
        length = path.length;
    if (!length) {
      object = undefined;
      length = 1;
    }
    while (++index < length) {
      var value = object == null ? undefined : object[path[index]];
      if (value === undefined) {
        index = length;
        value = defaultValue;
      }
      object = isFunction(value) ? value.call(object) : value;
    }
    return object;
  }
  return {
    setters: [],
    execute: function () {
      castPath = require('./_castPath');
      isFunction = require('./isFunction');
      isKey = require('./_isKey');
      module.exports = result;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3Jlc3VsdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLFdBQVMsTUFBVCxDQUFnQixNQUFoQixFQUF3QixJQUF4QixFQUE4QixZQUE5QixFQUE0QztBQUMxQyxXQUFPLE1BQU0sSUFBTixFQUFZLE1BQVosSUFBc0IsQ0FBQyxJQUFELENBQXRCLEdBQStCLFNBQVMsSUFBVCxDQUEvQixDQURtQztBQUUxQyxRQUFJLFFBQVEsQ0FBQyxDQUFEO1FBQ1IsU0FBUyxLQUFLLE1BQUwsQ0FINkI7QUFJMUMsUUFBSSxDQUFDLE1BQUQsRUFBUztBQUNYLGVBQVMsU0FBVCxDQURXO0FBRVgsZUFBUyxDQUFULENBRlc7S0FBYjtBQUlBLFdBQU8sRUFBRSxLQUFGLEdBQVUsTUFBVixFQUFrQjtBQUN2QixVQUFJLFFBQVEsVUFBVSxJQUFWLEdBQWlCLFNBQWpCLEdBQTZCLE9BQU8sS0FBSyxLQUFMLENBQVAsQ0FBN0IsQ0FEVztBQUV2QixVQUFJLFVBQVUsU0FBVixFQUFxQjtBQUN2QixnQkFBUSxNQUFSLENBRHVCO0FBRXZCLGdCQUFRLFlBQVIsQ0FGdUI7T0FBekI7QUFJQSxlQUFTLFdBQVcsS0FBWCxJQUFvQixNQUFNLElBQU4sQ0FBVyxNQUFYLENBQXBCLEdBQXlDLEtBQXpDLENBTmM7S0FBekI7QUFRQSxXQUFPLE1BQVAsQ0FoQjBDO0dBQTVDOzs7O0FBSEksaUJBQVcsUUFBUSxhQUFSO0FBQ1gsbUJBQWEsUUFBUSxjQUFSO0FBQ2IsY0FBUSxRQUFRLFVBQVI7QUFtQlosYUFBTyxPQUFQLEdBQWlCLE1BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3Jlc3VsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpO1xuZnVuY3Rpb24gcmVzdWx0KG9iamVjdCwgcGF0aCwgZGVmYXVsdFZhbHVlKSB7XG4gIHBhdGggPSBpc0tleShwYXRoLCBvYmplY3QpID8gW3BhdGhdIDogY2FzdFBhdGgocGF0aCk7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgb2JqZWN0ID0gdW5kZWZpbmVkO1xuICAgIGxlbmd0aCA9IDE7XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtwYXRoW2luZGV4XV07XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGluZGV4ID0gbGVuZ3RoO1xuICAgICAgdmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIG9iamVjdCA9IGlzRnVuY3Rpb24odmFsdWUpID8gdmFsdWUuY2FsbChvYmplY3QpIDogdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cbm1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
