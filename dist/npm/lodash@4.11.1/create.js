'use strict';

System.register([], function (_export, _context) {
  var baseAssign, baseCreate;

  function create(prototype, properties) {
    var result = baseCreate(prototype);
    return properties ? baseAssign(result, properties) : result;
  }
  return {
    setters: [],
    execute: function () {
      baseAssign = require('./_baseAssign');
      baseCreate = require('./_baseCreate');
      module.exports = create;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2NyZWF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsTUFBVCxDQUFnQixTQUFoQixFQUEyQixVQUEzQixFQUF1QztBQUNyQyxRQUFJLFNBQVMsV0FBVyxTQUFYLENBQVQsQ0FEaUM7QUFFckMsV0FBTyxhQUFhLFdBQVcsTUFBWCxFQUFtQixVQUFuQixDQUFiLEdBQThDLE1BQTlDLENBRjhCO0dBQXZDOzs7O0FBRkksbUJBQWEsUUFBUSxlQUFSO0FBQ2IsbUJBQWEsUUFBUSxlQUFSO0FBS2pCLGFBQU8sT0FBUCxHQUFpQixNQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9jcmVhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlQXNzaWduID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnbicpLFxuICAgIGJhc2VDcmVhdGUgPSByZXF1aXJlKCcuL19iYXNlQ3JlYXRlJyk7XG5mdW5jdGlvbiBjcmVhdGUocHJvdG90eXBlLCBwcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQgPSBiYXNlQ3JlYXRlKHByb3RvdHlwZSk7XG4gIHJldHVybiBwcm9wZXJ0aWVzID8gYmFzZUFzc2lnbihyZXN1bHQsIHByb3BlcnRpZXMpIDogcmVzdWx0O1xufVxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
