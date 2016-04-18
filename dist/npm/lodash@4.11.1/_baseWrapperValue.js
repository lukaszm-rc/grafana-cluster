'use strict';

System.register([], function (_export, _context) {
  var LazyWrapper, arrayPush, arrayReduce;

  function baseWrapperValue(value, actions) {
    var result = value;
    if (result instanceof LazyWrapper) {
      result = result.value();
    }
    return arrayReduce(actions, function (result, action) {
      return action.func.apply(action.thisArg, arrayPush([result], action.args));
    }, result);
  }
  return {
    setters: [],
    execute: function () {
      LazyWrapper = require('./_LazyWrapper');
      arrayPush = require('./_arrayPush');
      arrayReduce = require('./_arrayReduce');
      module.exports = baseWrapperValue;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlV3JhcHBlclZhbHVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsV0FBUyxnQkFBVCxDQUEwQixLQUExQixFQUFpQyxPQUFqQyxFQUEwQztBQUN4QyxRQUFJLFNBQVMsS0FBVCxDQURvQztBQUV4QyxRQUFJLGtCQUFrQixXQUFsQixFQUErQjtBQUNqQyxlQUFTLE9BQU8sS0FBUCxFQUFULENBRGlDO0tBQW5DO0FBR0EsV0FBTyxZQUFZLE9BQVosRUFBcUIsVUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCO0FBQ25ELGFBQU8sT0FBTyxJQUFQLENBQVksS0FBWixDQUFrQixPQUFPLE9BQVAsRUFBZ0IsVUFBVSxDQUFDLE1BQUQsQ0FBVixFQUFvQixPQUFPLElBQVAsQ0FBdEQsQ0FBUCxDQURtRDtLQUF6QixFQUV6QixNQUZJLENBQVAsQ0FMd0M7R0FBMUM7Ozs7QUFISSxvQkFBYyxRQUFRLGdCQUFSO0FBQ2Qsa0JBQVksUUFBUSxjQUFSO0FBQ1osb0JBQWMsUUFBUSxnQkFBUjtBQVVsQixhQUFPLE9BQVAsR0FBaUIsZ0JBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19iYXNlV3JhcHBlclZhbHVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgTGF6eVdyYXBwZXIgPSByZXF1aXJlKCcuL19MYXp5V3JhcHBlcicpLFxuICAgIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGFycmF5UmVkdWNlID0gcmVxdWlyZSgnLi9fYXJyYXlSZWR1Y2UnKTtcbmZ1bmN0aW9uIGJhc2VXcmFwcGVyVmFsdWUodmFsdWUsIGFjdGlvbnMpIHtcbiAgdmFyIHJlc3VsdCA9IHZhbHVlO1xuICBpZiAocmVzdWx0IGluc3RhbmNlb2YgTGF6eVdyYXBwZXIpIHtcbiAgICByZXN1bHQgPSByZXN1bHQudmFsdWUoKTtcbiAgfVxuICByZXR1cm4gYXJyYXlSZWR1Y2UoYWN0aW9ucywgZnVuY3Rpb24ocmVzdWx0LCBhY3Rpb24pIHtcbiAgICByZXR1cm4gYWN0aW9uLmZ1bmMuYXBwbHkoYWN0aW9uLnRoaXNBcmcsIGFycmF5UHVzaChbcmVzdWx0XSwgYWN0aW9uLmFyZ3MpKTtcbiAgfSwgcmVzdWx0KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gYmFzZVdyYXBwZXJWYWx1ZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
