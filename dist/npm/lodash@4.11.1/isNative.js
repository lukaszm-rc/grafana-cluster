'use strict';

System.register([], function (_export, _context) {
  var isFunction, isHostObject, isObject, toSource, reRegExpChar, reIsHostCtor, objectProto, funcToString, hasOwnProperty, reIsNative;

  function isNative(value) {
    if (!isObject(value)) {
      return false;
    }
    var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  return {
    setters: [],
    execute: function () {
      isFunction = require('./isFunction');
      isHostObject = require('./_isHostObject');
      isObject = require('./isObject');
      toSource = require('./_toSource');
      reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      reIsHostCtor = /^\[object .+?Constructor\]$/;
      objectProto = Object.prototype;
      funcToString = Function.prototype.toString;
      hasOwnProperty = objectProto.hasOwnProperty;
      reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
      module.exports = isNative;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzTmF0aXZlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBV0EsV0FBUyxRQUFULENBQWtCLEtBQWxCLEVBQXlCO0FBQ3ZCLFFBQUksQ0FBQyxTQUFTLEtBQVQsQ0FBRCxFQUFrQjtBQUNwQixhQUFPLEtBQVAsQ0FEb0I7S0FBdEI7QUFHQSxRQUFJLFVBQVUsVUFBQyxDQUFXLEtBQVgsS0FBcUIsYUFBYSxLQUFiLENBQXJCLEdBQTRDLFVBQTdDLEdBQTBELFlBQTFELENBSlM7QUFLdkIsV0FBTyxRQUFRLElBQVIsQ0FBYSxTQUFTLEtBQVQsQ0FBYixDQUFQLENBTHVCO0dBQXpCOzs7O0FBVkksbUJBQWEsUUFBUSxjQUFSO0FBQ2IscUJBQWUsUUFBUSxpQkFBUjtBQUNmLGlCQUFXLFFBQVEsWUFBUjtBQUNYLGlCQUFXLFFBQVEsYUFBUjtBQUNYLHFCQUFlO0FBQ2YscUJBQWU7QUFDZixvQkFBYyxPQUFPLFNBQVA7QUFDZCxxQkFBZSxTQUFTLFNBQVQsQ0FBbUIsUUFBbkI7QUFDZix1QkFBaUIsWUFBWSxjQUFaO0FBQ2pCLG1CQUFhLE9BQU8sTUFBTSxhQUFhLElBQWIsQ0FBa0IsY0FBbEIsRUFBa0MsT0FBbEMsQ0FBMEMsWUFBMUMsRUFBd0QsTUFBeEQsRUFBZ0UsT0FBaEUsQ0FBd0Usd0RBQXhFLEVBQWtJLE9BQWxJLENBQU4sR0FBbUosR0FBbko7QUFReEIsYUFBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2lzTmF0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzSG9zdE9iamVjdCA9IHJlcXVpcmUoJy4vX2lzSG9zdE9iamVjdCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG52YXIgZnVuY1RvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgKyBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKS5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJyk7XG5mdW5jdGlvbiBpc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IChpc0Z1bmN0aW9uKHZhbHVlKSB8fCBpc0hvc3RPYmplY3QodmFsdWUpKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaXNOYXRpdmU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
