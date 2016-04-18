'use strict';

System.register([], function (_export, _context) {
  var Stack, equalArrays, equalByTag, equalObjects, getTag, isArray, isHostObject, isTypedArray, PARTIAL_COMPARE_FLAG, argsTag, arrayTag, objectTag, objectProto, hasOwnProperty;

  function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
    var objIsArr = isArray(object),
        othIsArr = isArray(other),
        objTag = arrayTag,
        othTag = arrayTag;
    if (!objIsArr) {
      objTag = getTag(object);
      objTag = objTag == argsTag ? objectTag : objTag;
    }
    if (!othIsArr) {
      othTag = getTag(other);
      othTag = othTag == argsTag ? objectTag : othTag;
    }
    var objIsObj = objTag == objectTag && !isHostObject(object),
        othIsObj = othTag == objectTag && !isHostObject(other),
        isSameTag = objTag == othTag;
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack());
      return objIsArr || isTypedArray(object) ? equalArrays(object, other, equalFunc, customizer, bitmask, stack) : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
    }
    if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
          othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object,
            othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new Stack());
        return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack());
    return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
  }
  return {
    setters: [],
    execute: function () {
      Stack = require('./_Stack');
      equalArrays = require('./_equalArrays');
      equalByTag = require('./_equalByTag');
      equalObjects = require('./_equalObjects');
      getTag = require('./_getTag');
      isArray = require('./isArray');
      isHostObject = require('./_isHostObject');
      isTypedArray = require('./isTypedArray');
      PARTIAL_COMPARE_FLAG = 2;
      argsTag = '[object Arguments]';
      arrayTag = '[object Array]';
      objectTag = '[object Object]';
      objectProto = Object.prototype;
      hasOwnProperty = objectProto.hasOwnProperty;
      module.exports = baseIsEqualDeep;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlSXNFcXVhbERlZXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFlQSxXQUFTLGVBQVQsQ0FBeUIsTUFBekIsRUFBaUMsS0FBakMsRUFBd0MsU0FBeEMsRUFBbUQsVUFBbkQsRUFBK0QsT0FBL0QsRUFBd0UsS0FBeEUsRUFBK0U7QUFDN0UsUUFBSSxXQUFXLFFBQVEsTUFBUixDQUFYO1FBQ0EsV0FBVyxRQUFRLEtBQVIsQ0FBWDtRQUNBLFNBQVMsUUFBVDtRQUNBLFNBQVMsUUFBVCxDQUp5RTtBQUs3RSxRQUFJLENBQUMsUUFBRCxFQUFXO0FBQ2IsZUFBUyxPQUFPLE1BQVAsQ0FBVCxDQURhO0FBRWIsZUFBUyxVQUFVLE9BQVYsR0FBb0IsU0FBcEIsR0FBZ0MsTUFBaEMsQ0FGSTtLQUFmO0FBSUEsUUFBSSxDQUFDLFFBQUQsRUFBVztBQUNiLGVBQVMsT0FBTyxLQUFQLENBQVQsQ0FEYTtBQUViLGVBQVMsVUFBVSxPQUFWLEdBQW9CLFNBQXBCLEdBQWdDLE1BQWhDLENBRkk7S0FBZjtBQUlBLFFBQUksV0FBVyxVQUFVLFNBQVYsSUFBdUIsQ0FBQyxhQUFhLE1BQWIsQ0FBRDtRQUNsQyxXQUFXLFVBQVUsU0FBVixJQUF1QixDQUFDLGFBQWEsS0FBYixDQUFEO1FBQ2xDLFlBQVksVUFBVSxNQUFWLENBZjZEO0FBZ0I3RSxRQUFJLGFBQWEsQ0FBQyxRQUFELEVBQVc7QUFDMUIsZ0JBQVUsUUFBUSxJQUFJLEtBQUosRUFBUixDQUFWLENBRDBCO0FBRTFCLGFBQU8sUUFBQyxJQUFZLGFBQWEsTUFBYixDQUFaLEdBQW9DLFlBQVksTUFBWixFQUFvQixLQUFwQixFQUEyQixTQUEzQixFQUFzQyxVQUF0QyxFQUFrRCxPQUFsRCxFQUEyRCxLQUEzRCxDQUFyQyxHQUF5RyxXQUFXLE1BQVgsRUFBbUIsS0FBbkIsRUFBMEIsTUFBMUIsRUFBa0MsU0FBbEMsRUFBNkMsVUFBN0MsRUFBeUQsT0FBekQsRUFBa0UsS0FBbEUsQ0FBekcsQ0FGbUI7S0FBNUI7QUFJQSxRQUFJLEVBQUUsVUFBVSxvQkFBVixDQUFGLEVBQW1DO0FBQ3JDLFVBQUksZUFBZSxZQUFZLGVBQWUsSUFBZixDQUFvQixNQUFwQixFQUE0QixhQUE1QixDQUFaO1VBQ2YsZUFBZSxZQUFZLGVBQWUsSUFBZixDQUFvQixLQUFwQixFQUEyQixhQUEzQixDQUFaLENBRmtCO0FBR3JDLFVBQUksZ0JBQWdCLFlBQWhCLEVBQThCO0FBQ2hDLFlBQUksZUFBZSxlQUFlLE9BQU8sS0FBUCxFQUFmLEdBQWdDLE1BQWhDO1lBQ2YsZUFBZSxlQUFlLE1BQU0sS0FBTixFQUFmLEdBQStCLEtBQS9CLENBRmE7QUFHaEMsa0JBQVUsUUFBUSxJQUFJLEtBQUosRUFBUixDQUFWLENBSGdDO0FBSWhDLGVBQU8sVUFBVSxZQUFWLEVBQXdCLFlBQXhCLEVBQXNDLFVBQXRDLEVBQWtELE9BQWxELEVBQTJELEtBQTNELENBQVAsQ0FKZ0M7T0FBbEM7S0FIRjtBQVVBLFFBQUksQ0FBQyxTQUFELEVBQVk7QUFDZCxhQUFPLEtBQVAsQ0FEYztLQUFoQjtBQUdBLGNBQVUsUUFBUSxJQUFJLEtBQUosRUFBUixDQUFWLENBakM2RTtBQWtDN0UsV0FBTyxhQUFhLE1BQWIsRUFBcUIsS0FBckIsRUFBNEIsU0FBNUIsRUFBdUMsVUFBdkMsRUFBbUQsT0FBbkQsRUFBNEQsS0FBNUQsQ0FBUCxDQWxDNkU7R0FBL0U7Ozs7QUFkSSxjQUFRLFFBQVEsVUFBUjtBQUNSLG9CQUFjLFFBQVEsZ0JBQVI7QUFDZCxtQkFBYSxRQUFRLGVBQVI7QUFDYixxQkFBZSxRQUFRLGlCQUFSO0FBQ2YsZUFBUyxRQUFRLFdBQVI7QUFDVCxnQkFBVSxRQUFRLFdBQVI7QUFDVixxQkFBZSxRQUFRLGlCQUFSO0FBQ2YscUJBQWUsUUFBUSxnQkFBUjtBQUNmLDZCQUF1QjtBQUN2QixnQkFBVTtBQUNWLGlCQUFXO0FBQ1gsa0JBQVk7QUFDWixvQkFBYyxPQUFPLFNBQVA7QUFDZCx1QkFBaUIsWUFBWSxjQUFaO0FBcUNyQixhQUFPLE9BQVAsR0FBaUIsZUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2Jhc2VJc0VxdWFsRGVlcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgZXF1YWxCeVRhZyA9IHJlcXVpcmUoJy4vX2VxdWFsQnlUYWcnKSxcbiAgICBlcXVhbE9iamVjdHMgPSByZXF1aXJlKCcuL19lcXVhbE9iamVjdHMnKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNIb3N0T2JqZWN0ID0gcmVxdWlyZSgnLi9faXNIb3N0T2JqZWN0JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcbnZhciBQQVJUSUFMX0NPTVBBUkVfRkxBRyA9IDI7XG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIGJhc2VJc0VxdWFsRGVlcChvYmplY3QsIG90aGVyLCBlcXVhbEZ1bmMsIGN1c3RvbWl6ZXIsIGJpdG1hc2ssIHN0YWNrKSB7XG4gIHZhciBvYmpJc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgIG90aElzQXJyID0gaXNBcnJheShvdGhlciksXG4gICAgICBvYmpUYWcgPSBhcnJheVRhZyxcbiAgICAgIG90aFRhZyA9IGFycmF5VGFnO1xuICBpZiAoIW9iaklzQXJyKSB7XG4gICAgb2JqVGFnID0gZ2V0VGFnKG9iamVjdCk7XG4gICAgb2JqVGFnID0gb2JqVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvYmpUYWc7XG4gIH1cbiAgaWYgKCFvdGhJc0Fycikge1xuICAgIG90aFRhZyA9IGdldFRhZyhvdGhlcik7XG4gICAgb3RoVGFnID0gb3RoVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvdGhUYWc7XG4gIH1cbiAgdmFyIG9iaklzT2JqID0gb2JqVGFnID09IG9iamVjdFRhZyAmJiAhaXNIb3N0T2JqZWN0KG9iamVjdCksXG4gICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcgJiYgIWlzSG9zdE9iamVjdChvdGhlciksXG4gICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuICBpZiAoaXNTYW1lVGFnICYmICFvYmpJc09iaikge1xuICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgcmV0dXJuIChvYmpJc0FyciB8fCBpc1R5cGVkQXJyYXkob2JqZWN0KSkgPyBlcXVhbEFycmF5cyhvYmplY3QsIG90aGVyLCBlcXVhbEZ1bmMsIGN1c3RvbWl6ZXIsIGJpdG1hc2ssIHN0YWNrKSA6IGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgb2JqVGFnLCBlcXVhbEZ1bmMsIGN1c3RvbWl6ZXIsIGJpdG1hc2ssIHN0YWNrKTtcbiAgfVxuICBpZiAoIShiaXRtYXNrICYgUEFSVElBTF9DT01QQVJFX0ZMQUcpKSB7XG4gICAgdmFyIG9iaklzV3JhcHBlZCA9IG9iaklzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnX193cmFwcGVkX18nKSxcbiAgICAgICAgb3RoSXNXcmFwcGVkID0gb3RoSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwgJ19fd3JhcHBlZF9fJyk7XG4gICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcbiAgICAgIHZhciBvYmpVbndyYXBwZWQgPSBvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCxcbiAgICAgICAgICBvdGhVbndyYXBwZWQgPSBvdGhJc1dyYXBwZWQgPyBvdGhlci52YWx1ZSgpIDogb3RoZXI7XG4gICAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgICAgcmV0dXJuIGVxdWFsRnVuYyhvYmpVbndyYXBwZWQsIG90aFVud3JhcHBlZCwgY3VzdG9taXplciwgYml0bWFzaywgc3RhY2spO1xuICAgIH1cbiAgfVxuICBpZiAoIWlzU2FtZVRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICByZXR1cm4gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGVxdWFsRnVuYywgY3VzdG9taXplciwgYml0bWFzaywgc3RhY2spO1xufVxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbERlZXA7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
