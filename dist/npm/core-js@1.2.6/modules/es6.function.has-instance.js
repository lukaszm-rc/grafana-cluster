/* */
'use strict';

System.register([], function (_export, _context) {
  var $, isObject, HAS_INSTANCE, FunctionProto;
  return {
    setters: [],
    execute: function () {
      $ = require('./$');
      isObject = require('./$.is-object');
      HAS_INSTANCE = require('./$.wks')('hasInstance');
      FunctionProto = Function.prototype;

      if (!(HAS_INSTANCE in FunctionProto)) $.setDesc(FunctionProto, HAS_INSTANCE, { value: function value(O) {
          if (typeof this != 'function' || !isObject(O)) return false;
          if (!isObject(this.prototype)) return O instanceof this;
          while (O = $.getProto(O)) {
            if (this.prototype === O) return true;
          }return false;
        } });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LmZ1bmN0aW9uLmhhcy1pbnN0YW5jZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7QUFDSSxVQUFJLFFBQVEsS0FBUjtBQUNKLGlCQUFXLFFBQVEsZUFBUjtBQUNYLHFCQUFlLFFBQVEsU0FBUixFQUFtQixhQUFuQjtBQUNmLHNCQUFnQixTQUFTLFNBQVQ7O0FBQ3BCLFVBQUksRUFBRSxnQkFBZ0IsYUFBaEIsQ0FBRixFQUNGLEVBQUUsT0FBRixDQUFVLGFBQVYsRUFBeUIsWUFBekIsRUFBdUMsRUFBQyxPQUFPLGVBQVMsQ0FBVCxFQUFZO0FBQ3ZELGNBQUksT0FBTyxJQUFQLElBQWUsVUFBZixJQUE2QixDQUFDLFNBQVMsQ0FBVCxDQUFELEVBQy9CLE9BQU8sS0FBUCxDQURGO0FBRUEsY0FBSSxDQUFDLFNBQVMsS0FBSyxTQUFMLENBQVYsRUFDRixPQUFPLGFBQWEsSUFBYixDQURUO0FBRUEsaUJBQU8sSUFBSSxFQUFFLFFBQUYsQ0FBVyxDQUFYLENBQUo7QUFDTCxnQkFBSSxLQUFLLFNBQUwsS0FBbUIsQ0FBbkIsRUFDRixPQUFPLElBQVAsQ0FERjtXQURGLE9BR08sS0FBUCxDQVJ1RDtTQUFaLEVBQS9DLEVBREYiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy9lczYuZnVuY3Rpb24uaGFzLWluc3RhbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpLFxuICAgIEhBU19JTlNUQU5DRSA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaGFzSW5zdGFuY2UnKSxcbiAgICBGdW5jdGlvblByb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuaWYgKCEoSEFTX0lOU1RBTkNFIGluIEZ1bmN0aW9uUHJvdG8pKVxuICAkLnNldERlc2MoRnVuY3Rpb25Qcm90bywgSEFTX0lOU1RBTkNFLCB7dmFsdWU6IGZ1bmN0aW9uKE8pIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcyAhPSAnZnVuY3Rpb24nIHx8ICFpc09iamVjdChPKSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKCFpc09iamVjdCh0aGlzLnByb3RvdHlwZSkpXG4gICAgICAgIHJldHVybiBPIGluc3RhbmNlb2YgdGhpcztcbiAgICAgIHdoaWxlIChPID0gJC5nZXRQcm90byhPKSlcbiAgICAgICAgaWYgKHRoaXMucHJvdG90eXBlID09PSBPKVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
