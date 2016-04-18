'use strict';

System.register([], function (_export, _context) {
  var assignValue, copyObject, createAssigner, isArrayLike, isPrototype, keysIn, objectProto, propertyIsEnumerable, nonEnumShadows, assignIn;
  return {
    setters: [],
    execute: function () {
      assignValue = require('./_assignValue');
      copyObject = require('./_copyObject');
      createAssigner = require('./_createAssigner');
      isArrayLike = require('./isArrayLike');
      isPrototype = require('./_isPrototype');
      keysIn = require('./keysIn');
      objectProto = Object.prototype;
      propertyIsEnumerable = objectProto.propertyIsEnumerable;
      nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');
      assignIn = createAssigner(function (object, source) {
        if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
          copyObject(source, keysIn(source), object);
          return;
        }
        for (var key in source) {
          assignValue(object, key, source[key]);
        }
      });

      module.exports = assignIn;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2Fzc2lnbkluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxvQkFBYyxRQUFRLGdCQUFSO0FBQ2QsbUJBQWEsUUFBUSxlQUFSO0FBQ2IsdUJBQWlCLFFBQVEsbUJBQVI7QUFDakIsb0JBQWMsUUFBUSxlQUFSO0FBQ2Qsb0JBQWMsUUFBUSxnQkFBUjtBQUNkLGVBQVMsUUFBUSxVQUFSO0FBQ1Qsb0JBQWMsT0FBTyxTQUFQO0FBQ2QsNkJBQXVCLFlBQVksb0JBQVo7QUFDdkIsdUJBQWlCLENBQUMscUJBQXFCLElBQXJCLENBQTBCLEVBQUMsV0FBVyxDQUFYLEVBQTNCLEVBQTBDLFNBQTFDLENBQUQ7QUFDakIsaUJBQVcsZUFBZSxVQUFTLE1BQVQsRUFBaUIsTUFBakIsRUFBeUI7QUFDckQsWUFBSSxrQkFBa0IsWUFBWSxNQUFaLENBQWxCLElBQXlDLFlBQVksTUFBWixDQUF6QyxFQUE4RDtBQUNoRSxxQkFBVyxNQUFYLEVBQW1CLE9BQU8sTUFBUCxDQUFuQixFQUFtQyxNQUFuQyxFQURnRTtBQUVoRSxpQkFGZ0U7U0FBbEU7QUFJQSxhQUFLLElBQUksR0FBSixJQUFXLE1BQWhCLEVBQXdCO0FBQ3RCLHNCQUFZLE1BQVosRUFBb0IsR0FBcEIsRUFBeUIsT0FBTyxHQUFQLENBQXpCLEVBRHNCO1NBQXhCO09BTDRCOztBQVM5QixhQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvYXNzaWduSW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBjcmVhdGVBc3NpZ25lciA9IHJlcXVpcmUoJy4vX2NyZWF0ZUFzc2lnbmVyJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyk7XG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgbm9uRW51bVNoYWRvd3MgPSAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7J3ZhbHVlT2YnOiAxfSwgJ3ZhbHVlT2YnKTtcbnZhciBhc3NpZ25JbiA9IGNyZWF0ZUFzc2lnbmVyKGZ1bmN0aW9uKG9iamVjdCwgc291cmNlKSB7XG4gIGlmIChub25FbnVtU2hhZG93cyB8fCBpc1Byb3RvdHlwZShzb3VyY2UpIHx8IGlzQXJyYXlMaWtlKHNvdXJjZSkpIHtcbiAgICBjb3B5T2JqZWN0KHNvdXJjZSwga2V5c0luKHNvdXJjZSksIG9iamVjdCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgc291cmNlW2tleV0pO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0gYXNzaWduSW47XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
