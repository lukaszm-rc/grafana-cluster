'use strict';

System.register([], function (_export, _context) {
  var baseUpdate, castFunction;

  function updateWith(object, path, updater, customizer) {
    customizer = typeof customizer == 'function' ? customizer : undefined;
    return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
  }
  return {
    setters: [],
    execute: function () {
      baseUpdate = require('./_baseUpdate');
      castFunction = require('./_castFunction');
      module.exports = updateWith;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3VwZGF0ZVdpdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLFVBQVQsQ0FBb0IsTUFBcEIsRUFBNEIsSUFBNUIsRUFBa0MsT0FBbEMsRUFBMkMsVUFBM0MsRUFBdUQ7QUFDckQsaUJBQWEsT0FBTyxVQUFQLElBQXFCLFVBQXJCLEdBQWtDLFVBQWxDLEdBQStDLFNBQS9DLENBRHdDO0FBRXJELFdBQU8sVUFBVSxJQUFWLEdBQWlCLE1BQWpCLEdBQTBCLFdBQVcsTUFBWCxFQUFtQixJQUFuQixFQUF5QixhQUFhLE9BQWIsQ0FBekIsRUFBZ0QsVUFBaEQsQ0FBMUIsQ0FGOEM7R0FBdkQ7Ozs7QUFGSSxtQkFBYSxRQUFRLGVBQVI7QUFDYixxQkFBZSxRQUFRLGlCQUFSO0FBS25CLGFBQU8sT0FBUCxHQUFpQixVQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS91cGRhdGVXaXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZVVwZGF0ZSA9IHJlcXVpcmUoJy4vX2Jhc2VVcGRhdGUnKSxcbiAgICBjYXN0RnVuY3Rpb24gPSByZXF1aXJlKCcuL19jYXN0RnVuY3Rpb24nKTtcbmZ1bmN0aW9uIHVwZGF0ZVdpdGgob2JqZWN0LCBwYXRoLCB1cGRhdGVyLCBjdXN0b21pemVyKSB7XG4gIGN1c3RvbWl6ZXIgPSB0eXBlb2YgY3VzdG9taXplciA9PSAnZnVuY3Rpb24nID8gY3VzdG9taXplciA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gb2JqZWN0IDogYmFzZVVwZGF0ZShvYmplY3QsIHBhdGgsIGNhc3RGdW5jdGlvbih1cGRhdGVyKSwgY3VzdG9taXplcik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHVwZGF0ZVdpdGg7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
