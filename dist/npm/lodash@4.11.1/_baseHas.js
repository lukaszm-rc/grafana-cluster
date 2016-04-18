'use strict';

System.register([], function (_export, _context) {
  var _typeof, getPrototype, objectProto, hasOwnProperty;

  function baseHas(object, key) {
    return hasOwnProperty.call(object, key) || (typeof object === 'undefined' ? 'undefined' : _typeof(object)) == 'object' && key in object && getPrototype(object) === null;
  }
  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      getPrototype = require('./_getPrototype');
      objectProto = Object.prototype;
      hasOwnProperty = objectProto.hasOwnProperty;
      module.exports = baseHas;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlSGFzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsV0FBUyxPQUFULENBQWlCLE1BQWpCLEVBQXlCLEdBQXpCLEVBQThCO0FBQzVCLFdBQU8sZUFBZSxJQUFmLENBQW9CLE1BQXBCLEVBQTRCLEdBQTVCLEtBQXFDLFFBQU8sdURBQVAsSUFBaUIsUUFBakIsSUFBNkIsT0FBTyxNQUFQLElBQWlCLGFBQWEsTUFBYixNQUF5QixJQUF6QixDQUQ5RDtHQUE5Qjs7Ozs7Ozs7O0FBSEkscUJBQWUsUUFBUSxpQkFBUjtBQUNmLG9CQUFjLE9BQU8sU0FBUDtBQUNkLHVCQUFpQixZQUFZLGNBQVo7QUFJckIsYUFBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19iYXNlSGFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyk7XG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiBiYXNlSGFzKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSB8fCAodHlwZW9mIG9iamVjdCA9PSAnb2JqZWN0JyAmJiBrZXkgaW4gb2JqZWN0ICYmIGdldFByb3RvdHlwZShvYmplY3QpID09PSBudWxsKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gYmFzZUhhcztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
