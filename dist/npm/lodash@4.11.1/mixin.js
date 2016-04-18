'use strict';

System.register([], function (_export, _context) {
  var arrayEach, arrayPush, baseFunctions, copyArray, isFunction, isObject, keys;

  function mixin(object, source, options) {
    var props = keys(source),
        methodNames = baseFunctions(source, props);
    var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
        isFunc = isFunction(object);
    arrayEach(methodNames, function (methodName) {
      var func = source[methodName];
      object[methodName] = func;
      if (isFunc) {
        object.prototype[methodName] = function () {
          var chainAll = this.__chain__;
          if (chain || chainAll) {
            var result = object(this.__wrapped__),
                actions = result.__actions__ = copyArray(this.__actions__);
            actions.push({
              'func': func,
              'args': arguments,
              'thisArg': object
            });
            result.__chain__ = chainAll;
            return result;
          }
          return func.apply(object, arrayPush([this.value()], arguments));
        };
      }
    });
    return object;
  }
  return {
    setters: [],
    execute: function () {
      arrayEach = require('./_arrayEach');
      arrayPush = require('./_arrayPush');
      baseFunctions = require('./_baseFunctions');
      copyArray = require('./_copyArray');
      isFunction = require('./isFunction');
      isObject = require('./isObject');
      keys = require('./keys');
      module.exports = mixin;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL21peGluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBUUEsV0FBUyxLQUFULENBQWUsTUFBZixFQUF1QixNQUF2QixFQUErQixPQUEvQixFQUF3QztBQUN0QyxRQUFJLFFBQVEsS0FBSyxNQUFMLENBQVI7UUFDQSxjQUFjLGNBQWMsTUFBZCxFQUFzQixLQUF0QixDQUFkLENBRmtDO0FBR3RDLFFBQUksUUFBUSxFQUFFLFNBQVMsT0FBVCxLQUFxQixXQUFXLE9BQVgsQ0FBdkIsSUFBOEMsQ0FBQyxDQUFDLFFBQVEsS0FBUjtRQUN4RCxTQUFTLFdBQVcsTUFBWCxDQUFULENBSmtDO0FBS3RDLGNBQVUsV0FBVixFQUF1QixVQUFTLFVBQVQsRUFBcUI7QUFDMUMsVUFBSSxPQUFPLE9BQU8sVUFBUCxDQUFQLENBRHNDO0FBRTFDLGFBQU8sVUFBUCxJQUFxQixJQUFyQixDQUYwQztBQUcxQyxVQUFJLE1BQUosRUFBWTtBQUNWLGVBQU8sU0FBUCxDQUFpQixVQUFqQixJQUErQixZQUFXO0FBQ3hDLGNBQUksV0FBVyxLQUFLLFNBQUwsQ0FEeUI7QUFFeEMsY0FBSSxTQUFTLFFBQVQsRUFBbUI7QUFDckIsZ0JBQUksU0FBUyxPQUFPLEtBQUssV0FBTCxDQUFoQjtnQkFDQSxVQUFVLE9BQU8sV0FBUCxHQUFxQixVQUFVLEtBQUssV0FBTCxDQUEvQixDQUZPO0FBR3JCLG9CQUFRLElBQVIsQ0FBYTtBQUNYLHNCQUFRLElBQVI7QUFDQSxzQkFBUSxTQUFSO0FBQ0EseUJBQVcsTUFBWDthQUhGLEVBSHFCO0FBUXJCLG1CQUFPLFNBQVAsR0FBbUIsUUFBbkIsQ0FScUI7QUFTckIsbUJBQU8sTUFBUCxDQVRxQjtXQUF2QjtBQVdBLGlCQUFPLEtBQUssS0FBTCxDQUFXLE1BQVgsRUFBbUIsVUFBVSxDQUFDLEtBQUssS0FBTCxFQUFELENBQVYsRUFBMEIsU0FBMUIsQ0FBbkIsQ0FBUCxDQWJ3QztTQUFYLENBRHJCO09BQVo7S0FIcUIsQ0FBdkIsQ0FMc0M7QUEwQnRDLFdBQU8sTUFBUCxDQTFCc0M7R0FBeEM7Ozs7QUFQSSxrQkFBWSxRQUFRLGNBQVI7QUFDWixrQkFBWSxRQUFRLGNBQVI7QUFDWixzQkFBZ0IsUUFBUSxrQkFBUjtBQUNoQixrQkFBWSxRQUFRLGNBQVI7QUFDWixtQkFBYSxRQUFRLGNBQVI7QUFDYixpQkFBVyxRQUFRLFlBQVI7QUFDWCxhQUFPLFFBQVEsUUFBUjtBQTZCWCxhQUFPLE9BQVAsR0FBaUIsS0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvbWl4aW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBhcnJheUVhY2ggPSByZXF1aXJlKCcuL19hcnJheUVhY2gnKSxcbiAgICBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBiYXNlRnVuY3Rpb25zID0gcmVxdWlyZSgnLi9fYmFzZUZ1bmN0aW9ucycpLFxuICAgIGNvcHlBcnJheSA9IHJlcXVpcmUoJy4vX2NvcHlBcnJheScpLFxuICAgIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5mdW5jdGlvbiBtaXhpbihvYmplY3QsIHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgcHJvcHMgPSBrZXlzKHNvdXJjZSksXG4gICAgICBtZXRob2ROYW1lcyA9IGJhc2VGdW5jdGlvbnMoc291cmNlLCBwcm9wcyk7XG4gIHZhciBjaGFpbiA9ICEoaXNPYmplY3Qob3B0aW9ucykgJiYgJ2NoYWluJyBpbiBvcHRpb25zKSB8fCAhIW9wdGlvbnMuY2hhaW4sXG4gICAgICBpc0Z1bmMgPSBpc0Z1bmN0aW9uKG9iamVjdCk7XG4gIGFycmF5RWFjaChtZXRob2ROYW1lcywgZnVuY3Rpb24obWV0aG9kTmFtZSkge1xuICAgIHZhciBmdW5jID0gc291cmNlW21ldGhvZE5hbWVdO1xuICAgIG9iamVjdFttZXRob2ROYW1lXSA9IGZ1bmM7XG4gICAgaWYgKGlzRnVuYykge1xuICAgICAgb2JqZWN0LnByb3RvdHlwZVttZXRob2ROYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY2hhaW5BbGwgPSB0aGlzLl9fY2hhaW5fXztcbiAgICAgICAgaWYgKGNoYWluIHx8IGNoYWluQWxsKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IG9iamVjdCh0aGlzLl9fd3JhcHBlZF9fKSxcbiAgICAgICAgICAgICAgYWN0aW9ucyA9IHJlc3VsdC5fX2FjdGlvbnNfXyA9IGNvcHlBcnJheSh0aGlzLl9fYWN0aW9uc19fKTtcbiAgICAgICAgICBhY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgJ2Z1bmMnOiBmdW5jLFxuICAgICAgICAgICAgJ2FyZ3MnOiBhcmd1bWVudHMsXG4gICAgICAgICAgICAndGhpc0FyZyc6IG9iamVjdFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlc3VsdC5fX2NoYWluX18gPSBjaGFpbkFsbDtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jLmFwcGx5KG9iamVjdCwgYXJyYXlQdXNoKFt0aGlzLnZhbHVlKCldLCBhcmd1bWVudHMpKTtcbiAgICAgIH07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG9iamVjdDtcbn1cbm1vZHVsZS5leHBvcnRzID0gbWl4aW47XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
