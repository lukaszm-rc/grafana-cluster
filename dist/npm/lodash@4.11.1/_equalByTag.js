'use strict';

System.register([], function (_export, _context) {
  var _Symbol, Uint8Array, equalArrays, mapToArray, setToArray, UNORDERED_COMPARE_FLAG, PARTIAL_COMPARE_FLAG, boolTag, dateTag, errorTag, mapTag, numberTag, regexpTag, setTag, stringTag, symbolTag, arrayBufferTag, dataViewTag, symbolProto, symbolValueOf;

  function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
    switch (tag) {
      case dataViewTag:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;
      case arrayBufferTag:
        if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
          return false;
        }
        return true;
      case boolTag:
      case dateTag:
        return +object == +other;
      case errorTag:
        return object.name == other.name && object.message == other.message;
      case numberTag:
        return object != +object ? other != +other : object == +other;
      case regexpTag:
      case stringTag:
        return object == other + '';
      case mapTag:
        var convert = mapToArray;
      case setTag:
        var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
        convert || (convert = setToArray);
        if (object.size != other.size && !isPartial) {
          return false;
        }
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= UNORDERED_COMPARE_FLAG;
        stack.set(object, other);
        return equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }
  return {
    setters: [],
    execute: function () {
      _Symbol = require('./_Symbol');
      Uint8Array = require('./_Uint8Array');
      equalArrays = require('./_equalArrays');
      mapToArray = require('./_mapToArray');
      setToArray = require('./_setToArray');
      UNORDERED_COMPARE_FLAG = 1;
      PARTIAL_COMPARE_FLAG = 2;
      boolTag = '[object Boolean]';
      dateTag = '[object Date]';
      errorTag = '[object Error]';
      mapTag = '[object Map]';
      numberTag = '[object Number]';
      regexpTag = '[object RegExp]';
      setTag = '[object Set]';
      stringTag = '[object String]';
      symbolTag = '[object Symbol]';
      arrayBufferTag = '[object ArrayBuffer]';
      dataViewTag = '[object DataView]';
      symbolProto = _Symbol ? _Symbol.prototype : undefined;
      symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
      module.exports = equalByTag;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19lcXVhbEJ5VGFnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBcUJBLFdBQVMsVUFBVCxDQUFvQixNQUFwQixFQUE0QixLQUE1QixFQUFtQyxHQUFuQyxFQUF3QyxTQUF4QyxFQUFtRCxVQUFuRCxFQUErRCxPQUEvRCxFQUF3RSxLQUF4RSxFQUErRTtBQUM3RSxZQUFRLEdBQVI7QUFDRSxXQUFLLFdBQUw7QUFDRSxZQUFJLE1BQUMsQ0FBTyxVQUFQLElBQXFCLE1BQU0sVUFBTixJQUFzQixPQUFPLFVBQVAsSUFBcUIsTUFBTSxVQUFOLEVBQW1CO0FBQ3RGLGlCQUFPLEtBQVAsQ0FEc0Y7U0FBeEY7QUFHQSxpQkFBUyxPQUFPLE1BQVAsQ0FKWDtBQUtFLGdCQUFRLE1BQU0sTUFBTixDQUxWO0FBREYsV0FPTyxjQUFMO0FBQ0UsWUFBSSxNQUFDLENBQU8sVUFBUCxJQUFxQixNQUFNLFVBQU4sSUFBcUIsQ0FBQyxVQUFVLElBQUksVUFBSixDQUFlLE1BQWYsQ0FBVixFQUFrQyxJQUFJLFVBQUosQ0FBZSxLQUFmLENBQWxDLENBQUQsRUFBMkQ7QUFDeEcsaUJBQU8sS0FBUCxDQUR3RztTQUExRztBQUdBLGVBQU8sSUFBUCxDQUpGO0FBUEYsV0FZTyxPQUFMLENBWkY7QUFhRSxXQUFLLE9BQUw7QUFDRSxlQUFPLENBQUMsTUFBRCxJQUFXLENBQUMsS0FBRCxDQURwQjtBQWJGLFdBZU8sUUFBTDtBQUNFLGVBQU8sT0FBTyxJQUFQLElBQWUsTUFBTSxJQUFOLElBQWMsT0FBTyxPQUFQLElBQWtCLE1BQU0sT0FBTixDQUR4RDtBQWZGLFdBaUJPLFNBQUw7QUFDRSxlQUFPLE1BQUMsSUFBVSxDQUFDLE1BQUQsR0FBVyxTQUFTLENBQUMsS0FBRCxHQUFTLFVBQVUsQ0FBQyxLQUFELENBRDNEO0FBakJGLFdBbUJPLFNBQUwsQ0FuQkY7QUFvQkUsV0FBSyxTQUFMO0FBQ0UsZUFBTyxVQUFXLFFBQVEsRUFBUixDQURwQjtBQXBCRixXQXNCTyxNQUFMO0FBQ0UsWUFBSSxVQUFVLFVBQVYsQ0FETjtBQXRCRixXQXdCTyxNQUFMO0FBQ0UsWUFBSSxZQUFZLFVBQVUsb0JBQVYsQ0FEbEI7QUFFRSxvQkFBWSxVQUFVLFVBQVYsQ0FBWixDQUZGO0FBR0UsWUFBSSxPQUFPLElBQVAsSUFBZSxNQUFNLElBQU4sSUFBYyxDQUFDLFNBQUQsRUFBWTtBQUMzQyxpQkFBTyxLQUFQLENBRDJDO1NBQTdDO0FBR0EsWUFBSSxVQUFVLE1BQU0sR0FBTixDQUFVLE1BQVYsQ0FBVixDQU5OO0FBT0UsWUFBSSxPQUFKLEVBQWE7QUFDWCxpQkFBTyxXQUFXLEtBQVgsQ0FESTtTQUFiO0FBR0EsbUJBQVcsc0JBQVgsQ0FWRjtBQVdFLGNBQU0sR0FBTixDQUFVLE1BQVYsRUFBa0IsS0FBbEIsRUFYRjtBQVlFLGVBQU8sWUFBWSxRQUFRLE1BQVIsQ0FBWixFQUE2QixRQUFRLEtBQVIsQ0FBN0IsRUFBNkMsU0FBN0MsRUFBd0QsVUFBeEQsRUFBb0UsT0FBcEUsRUFBNkUsS0FBN0UsQ0FBUCxDQVpGO0FBeEJGLFdBcUNPLFNBQUw7QUFDRSxZQUFJLGFBQUosRUFBbUI7QUFDakIsaUJBQU8sY0FBYyxJQUFkLENBQW1CLE1BQW5CLEtBQThCLGNBQWMsSUFBZCxDQUFtQixLQUFuQixDQUE5QixDQURVO1NBQW5CO0FBdENKLEtBRDZFO0FBMkM3RSxXQUFPLEtBQVAsQ0EzQzZFO0dBQS9FOzs7O0FBcEJJLGdCQUFTLFFBQVEsV0FBUjtBQUNULG1CQUFhLFFBQVEsZUFBUjtBQUNiLG9CQUFjLFFBQVEsZ0JBQVI7QUFDZCxtQkFBYSxRQUFRLGVBQVI7QUFDYixtQkFBYSxRQUFRLGVBQVI7QUFDYiwrQkFBeUI7QUFDekIsNkJBQXVCO0FBQ3ZCLGdCQUFVO0FBQ1YsZ0JBQVU7QUFDVixpQkFBVztBQUNYLGVBQVM7QUFDVCxrQkFBWTtBQUNaLGtCQUFZO0FBQ1osZUFBUztBQUNULGtCQUFZO0FBQ1osa0JBQVk7QUFDWix1QkFBaUI7QUFDakIsb0JBQWM7QUFDZCxvQkFBYyxVQUFTLFFBQU8sU0FBUCxHQUFtQixTQUE1QjtBQUNkLHNCQUFnQixjQUFjLFlBQVksT0FBWixHQUFzQixTQUFwQztBQThDcEIsYUFBTyxPQUFQLEdBQWlCLFVBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19lcXVhbEJ5VGFnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgbWFwVG9BcnJheSA9IHJlcXVpcmUoJy4vX21hcFRvQXJyYXknKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xudmFyIFVOT1JERVJFRF9DT01QQVJFX0ZMQUcgPSAxLFxuICAgIFBBUlRJQUxfQ09NUEFSRV9GTEFHID0gMjtcbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5mdW5jdGlvbiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIHRhZywgZXF1YWxGdW5jLCBjdXN0b21pemVyLCBiaXRtYXNrLCBzdGFjaykge1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8IChvYmplY3QuYnl0ZU9mZnNldCAhPSBvdGhlci5ieXRlT2Zmc2V0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBvYmplY3QgPSBvYmplY3QuYnVmZmVyO1xuICAgICAgb3RoZXIgPSBvdGhlci5idWZmZXI7XG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHwgIWVxdWFsRnVuYyhuZXcgVWludDhBcnJheShvYmplY3QpLCBuZXcgVWludDhBcnJheShvdGhlcikpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgICByZXR1cm4gK29iamVjdCA9PSArb3RoZXI7XG4gICAgY2FzZSBlcnJvclRhZzpcbiAgICAgIHJldHVybiBvYmplY3QubmFtZSA9PSBvdGhlci5uYW1lICYmIG9iamVjdC5tZXNzYWdlID09IG90aGVyLm1lc3NhZ2U7XG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgICByZXR1cm4gKG9iamVjdCAhPSArb2JqZWN0KSA/IG90aGVyICE9ICtvdGhlciA6IG9iamVjdCA9PSArb3RoZXI7XG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICByZXR1cm4gb2JqZWN0ID09IChvdGhlciArICcnKTtcbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHZhciBjb252ZXJ0ID0gbWFwVG9BcnJheTtcbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgUEFSVElBTF9DT01QQVJFX0ZMQUc7XG4gICAgICBjb252ZXJ0IHx8IChjb252ZXJ0ID0gc2V0VG9BcnJheSk7XG4gICAgICBpZiAob2JqZWN0LnNpemUgIT0gb3RoZXIuc2l6ZSAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gICAgICBpZiAoc3RhY2tlZCkge1xuICAgICAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgICAgIH1cbiAgICAgIGJpdG1hc2sgfD0gVU5PUkRFUkVEX0NPTVBBUkVfRkxBRztcbiAgICAgIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgICAgIHJldHVybiBlcXVhbEFycmF5cyhjb252ZXJ0KG9iamVjdCksIGNvbnZlcnQob3RoZXIpLCBlcXVhbEZ1bmMsIGN1c3RvbWl6ZXIsIGJpdG1hc2ssIHN0YWNrKTtcbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIGlmIChzeW1ib2xWYWx1ZU9mKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xWYWx1ZU9mLmNhbGwob2JqZWN0KSA9PSBzeW1ib2xWYWx1ZU9mLmNhbGwob3RoZXIpO1xuICAgICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxCeVRhZztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
