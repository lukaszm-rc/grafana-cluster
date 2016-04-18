'use strict';

System.register([], function (_export, _context) {
  var _typeof, baseMatches, baseMatchesProperty, identity, isArray, property;

  function baseIteratee(value) {
    if (typeof value == 'function') {
      return value;
    }
    if (value == null) {
      return identity;
    }
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
      return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
    }
    return property(value);
  }
  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      baseMatches = require('./_baseMatches');
      baseMatchesProperty = require('./_baseMatchesProperty');
      identity = require('./identity');
      isArray = require('./isArray');
      property = require('./property');
      module.exports = baseIteratee;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlSXRlcmF0ZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxXQUFTLFlBQVQsQ0FBc0IsS0FBdEIsRUFBNkI7QUFDM0IsUUFBSSxPQUFPLEtBQVAsSUFBZ0IsVUFBaEIsRUFBNEI7QUFDOUIsYUFBTyxLQUFQLENBRDhCO0tBQWhDO0FBR0EsUUFBSSxTQUFTLElBQVQsRUFBZTtBQUNqQixhQUFPLFFBQVAsQ0FEaUI7S0FBbkI7QUFHQSxRQUFJLFFBQU8scURBQVAsSUFBZ0IsUUFBaEIsRUFBMEI7QUFDNUIsYUFBTyxRQUFRLEtBQVIsSUFBaUIsb0JBQW9CLE1BQU0sQ0FBTixDQUFwQixFQUE4QixNQUFNLENBQU4sQ0FBOUIsQ0FBakIsR0FBMkQsWUFBWSxLQUFaLENBQTNELENBRHFCO0tBQTlCO0FBR0EsV0FBTyxTQUFTLEtBQVQsQ0FBUCxDQVYyQjtHQUE3Qjs7Ozs7Ozs7O0FBTEksb0JBQWMsUUFBUSxnQkFBUjtBQUNkLDRCQUFzQixRQUFRLHdCQUFSO0FBQ3RCLGlCQUFXLFFBQVEsWUFBUjtBQUNYLGdCQUFVLFFBQVEsV0FBUjtBQUNWLGlCQUFXLFFBQVEsWUFBUjtBQWFmLGFBQU8sT0FBUCxHQUFpQixZQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fYmFzZUl0ZXJhdGVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZU1hdGNoZXMgPSByZXF1aXJlKCcuL19iYXNlTWF0Y2hlcycpLFxuICAgIGJhc2VNYXRjaGVzUHJvcGVydHkgPSByZXF1aXJlKCcuL19iYXNlTWF0Y2hlc1Byb3BlcnR5JyksXG4gICAgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5JyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIHByb3BlcnR5ID0gcmVxdWlyZSgnLi9wcm9wZXJ0eScpO1xuZnVuY3Rpb24gYmFzZUl0ZXJhdGVlKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBpZGVudGl0eTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodmFsdWUpID8gYmFzZU1hdGNoZXNQcm9wZXJ0eSh2YWx1ZVswXSwgdmFsdWVbMV0pIDogYmFzZU1hdGNoZXModmFsdWUpO1xuICB9XG4gIHJldHVybiBwcm9wZXJ0eSh2YWx1ZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJdGVyYXRlZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
