'use strict';

System.register([], function (_export, _context) {
  var assignValue, copyObject, createAssigner, isArrayLike, isPrototype, keys, objectProto, hasOwnProperty, propertyIsEnumerable, nonEnumShadows, assign;
  return {
    setters: [],
    execute: function () {
      assignValue = require('./_assignValue');
      copyObject = require('./_copyObject');
      createAssigner = require('./_createAssigner');
      isArrayLike = require('./isArrayLike');
      isPrototype = require('./_isPrototype');
      keys = require('./keys');
      objectProto = Object.prototype;
      hasOwnProperty = objectProto.hasOwnProperty;
      propertyIsEnumerable = objectProto.propertyIsEnumerable;
      nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');
      assign = createAssigner(function (object, source) {
        if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
          copyObject(source, keys(source), object);
          return;
        }
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            assignValue(object, key, source[key]);
          }
        }
      });

      module.exports = assign;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2Fzc2lnbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksb0JBQWMsUUFBUSxnQkFBUjtBQUNkLG1CQUFhLFFBQVEsZUFBUjtBQUNiLHVCQUFpQixRQUFRLG1CQUFSO0FBQ2pCLG9CQUFjLFFBQVEsZUFBUjtBQUNkLG9CQUFjLFFBQVEsZ0JBQVI7QUFDZCxhQUFPLFFBQVEsUUFBUjtBQUNQLG9CQUFjLE9BQU8sU0FBUDtBQUNkLHVCQUFpQixZQUFZLGNBQVo7QUFDakIsNkJBQXVCLFlBQVksb0JBQVo7QUFDdkIsdUJBQWlCLENBQUMscUJBQXFCLElBQXJCLENBQTBCLEVBQUMsV0FBVyxDQUFYLEVBQTNCLEVBQTBDLFNBQTFDLENBQUQ7QUFDakIsZUFBUyxlQUFlLFVBQVMsTUFBVCxFQUFpQixNQUFqQixFQUF5QjtBQUNuRCxZQUFJLGtCQUFrQixZQUFZLE1BQVosQ0FBbEIsSUFBeUMsWUFBWSxNQUFaLENBQXpDLEVBQThEO0FBQ2hFLHFCQUFXLE1BQVgsRUFBbUIsS0FBSyxNQUFMLENBQW5CLEVBQWlDLE1BQWpDLEVBRGdFO0FBRWhFLGlCQUZnRTtTQUFsRTtBQUlBLGFBQUssSUFBSSxHQUFKLElBQVcsTUFBaEIsRUFBd0I7QUFDdEIsY0FBSSxlQUFlLElBQWYsQ0FBb0IsTUFBcEIsRUFBNEIsR0FBNUIsQ0FBSixFQUFzQztBQUNwQyx3QkFBWSxNQUFaLEVBQW9CLEdBQXBCLEVBQXlCLE9BQU8sR0FBUCxDQUF6QixFQURvQztXQUF0QztTQURGO09BTDBCOztBQVc1QixhQUFPLE9BQVAsR0FBaUIsTUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvYXNzaWduLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAgY3JlYXRlQXNzaWduZXIgPSByZXF1aXJlKCcuL19jcmVhdGVBc3NpZ25lcicpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBub25FbnVtU2hhZG93cyA9ICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsndmFsdWVPZic6IDF9LCAndmFsdWVPZicpO1xudmFyIGFzc2lnbiA9IGNyZWF0ZUFzc2lnbmVyKGZ1bmN0aW9uKG9iamVjdCwgc291cmNlKSB7XG4gIGlmIChub25FbnVtU2hhZG93cyB8fCBpc1Byb3RvdHlwZShzb3VyY2UpIHx8IGlzQXJyYXlMaWtlKHNvdXJjZSkpIHtcbiAgICBjb3B5T2JqZWN0KHNvdXJjZSwga2V5cyhzb3VyY2UpLCBvYmplY3QpO1xuICAgIHJldHVybjtcbiAgfVxuICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH1cbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnbjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
