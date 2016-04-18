'use strict';

System.register([], function (_export, _context) {
  var getDesc, isObject, anObject, check;
  return {
    setters: [],
    execute: function () {
      getDesc = require('./$').getDesc;
      isObject = require('./$.is-object');
      anObject = require('./$.an-object');

      check = function check(O, proto) {
        anObject(O);
        if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
      };

      module.exports = {
        set: Object.setPrototypeOf || ('__proto__' in {} ? function (test, buggy, set) {
          try {
            set = require('./$.ctx')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
            set(test, []);
            buggy = !(test instanceof Array);
          } catch (e) {
            buggy = true;
          }
          return function setPrototypeOf(O, proto) {
            check(O, proto);
            if (buggy) O.__proto__ = proto;else set(O, proto);
            return O;
          };
        }({}, false) : undefined),
        check: check
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnNldC1wcm90by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksZ0JBQVUsUUFBUSxLQUFSLEVBQWUsT0FBZjtBQUNWLGlCQUFXLFFBQVEsZUFBUjtBQUNYLGlCQUFXLFFBQVEsZUFBUjs7QUFDWCxjQUFRLFNBQVIsS0FBUSxDQUFTLENBQVQsRUFBWSxLQUFaLEVBQW1CO0FBQzdCLGlCQUFTLENBQVQsRUFENkI7QUFFN0IsWUFBSSxDQUFDLFNBQVMsS0FBVCxDQUFELElBQW9CLFVBQVUsSUFBVixFQUN0QixNQUFNLFVBQVUsUUFBUSwyQkFBUixDQUFoQixDQURGO09BRlU7O0FBS1osYUFBTyxPQUFQLEdBQWlCO0FBQ2YsYUFBSyxPQUFPLGNBQVAsS0FBMEIsZUFBZSxFQUFmLEdBQW9CLFVBQVMsSUFBVCxFQUFlLEtBQWYsRUFBc0IsR0FBdEIsRUFBMkI7QUFDNUUsY0FBSTtBQUNGLGtCQUFNLFFBQVEsU0FBUixFQUFtQixTQUFTLElBQVQsRUFBZSxRQUFRLE9BQU8sU0FBUCxFQUFrQixXQUExQixFQUF1QyxHQUF2QyxFQUE0QyxDQUE5RSxDQUFOLENBREU7QUFFRixnQkFBSSxJQUFKLEVBQVUsRUFBVixFQUZFO0FBR0Ysb0JBQVEsRUFBRSxnQkFBZ0IsS0FBaEIsQ0FBRixDQUhOO1dBQUosQ0FJRSxPQUFPLENBQVAsRUFBVTtBQUNWLG9CQUFRLElBQVIsQ0FEVTtXQUFWO0FBR0YsaUJBQU8sU0FBUyxjQUFULENBQXdCLENBQXhCLEVBQTJCLEtBQTNCLEVBQWtDO0FBQ3ZDLGtCQUFNLENBQU4sRUFBUyxLQUFULEVBRHVDO0FBRXZDLGdCQUFJLEtBQUosRUFDRSxFQUFFLFNBQUYsR0FBYyxLQUFkLENBREYsS0FHRSxJQUFJLENBQUosRUFBTyxLQUFQLEVBSEY7QUFJQSxtQkFBTyxDQUFQLENBTnVDO1dBQWxDLENBUnFFO1NBQTNCLENBZ0JqRCxFQWhCaUQsRUFnQjdDLEtBaEI2QyxDQUFwQixHQWdCaEIsU0FoQmdCLENBQTFCO0FBaUJMLGVBQU8sS0FBUDtPQWxCRiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvJC5zZXQtcHJvdG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBnZXREZXNjID0gcmVxdWlyZSgnLi8kJykuZ2V0RGVzYyxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKSxcbiAgICBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbClcbiAgICB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IGZ1bmN0aW9uKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICB0cnkge1xuICAgICAgc2V0ID0gcmVxdWlyZSgnLi8kLmN0eCcpKEZ1bmN0aW9uLmNhbGwsIGdldERlc2MoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYnVnZ3kgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgIGlmIChidWdneSlcbiAgICAgICAgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgIGVsc2VcbiAgICAgICAgc2V0KE8sIHByb3RvKTtcbiAgICAgIHJldHVybiBPO1xuICAgIH07XG4gIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
