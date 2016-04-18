/* */
"use strict";

System.register([], function (_export, _context) {
  var _Object$getOwnPropertyDescriptor;

  return {
    setters: [],
    execute: function () {
      _Object$getOwnPropertyDescriptor = require('../core-js/object/get-own-property-descriptor')["default"];

      exports["default"] = function get(_x, _x2, _x3) {
        var _again = true;
        _function: while (_again) {
          var object = _x,
              property = _x2,
              receiver = _x3;
          _again = false;
          if (object === null) object = Function.prototype;
          var desc = _Object$getOwnPropertyDescriptor(object, property);
          if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return undefined;
            } else {
              _x = parent;
              _x2 = property;
              _x3 = receiver;
              _again = true;
              desc = parent = undefined;
              continue _function;
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === undefined) {
              return undefined;
            }
            return getter.call(receiver);
          }
        }
      };
      exports.__esModule = true;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL2dldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7O0FBQ0kseUNBQW1DLFFBQVEsK0NBQVIsRUFBeUQsU0FBekQ7O0FBQ3ZDLGNBQVEsU0FBUixJQUFxQixTQUFTLEdBQVQsQ0FBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLEVBQTJCO0FBQzlDLFlBQUksU0FBUyxJQUFULENBRDBDO0FBRTlDLG1CQUFXLE9BQU8sTUFBUCxFQUFlO0FBQ3hCLGNBQUksU0FBUyxFQUFUO2NBQ0EsV0FBVyxHQUFYO2NBQ0EsV0FBVyxHQUFYLENBSG9CO0FBSXhCLG1CQUFTLEtBQVQsQ0FKd0I7QUFLeEIsY0FBSSxXQUFXLElBQVgsRUFDRixTQUFTLFNBQVMsU0FBVCxDQURYO0FBRUEsY0FBSSxPQUFPLGlDQUFpQyxNQUFqQyxFQUF5QyxRQUF6QyxDQUFQLENBUG9CO0FBUXhCLGNBQUksU0FBUyxTQUFULEVBQW9CO0FBQ3RCLGdCQUFJLFNBQVMsT0FBTyxjQUFQLENBQXNCLE1BQXRCLENBQVQsQ0FEa0I7QUFFdEIsZ0JBQUksV0FBVyxJQUFYLEVBQWlCO0FBQ25CLHFCQUFPLFNBQVAsQ0FEbUI7YUFBckIsTUFFTztBQUNMLG1CQUFLLE1BQUwsQ0FESztBQUVMLG9CQUFNLFFBQU4sQ0FGSztBQUdMLG9CQUFNLFFBQU4sQ0FISztBQUlMLHVCQUFTLElBQVQsQ0FKSztBQUtMLHFCQUFPLFNBQVMsU0FBVCxDQUxGO0FBTUwsdUJBQVMsU0FBVCxDQU5LO2FBRlA7V0FGRixNQVlPLElBQUksV0FBVyxJQUFYLEVBQWlCO0FBQzFCLG1CQUFPLEtBQUssS0FBTCxDQURtQjtXQUFyQixNQUVBO0FBQ0wsZ0JBQUksU0FBUyxLQUFLLEdBQUwsQ0FEUjtBQUVMLGdCQUFJLFdBQVcsU0FBWCxFQUFzQjtBQUN4QixxQkFBTyxTQUFQLENBRHdCO2FBQTFCO0FBR0EsbUJBQU8sT0FBTyxJQUFQLENBQVksUUFBWixDQUFQLENBTEs7V0FGQTtTQXBCRTtPQUZRO0FBaUNyQixjQUFRLFVBQVIsR0FBcUIsSUFBckIiLCJmaWxlIjoibnBtL2JhYmVsLXJ1bnRpbWVANS44LjM4L2hlbHBlcnMvZ2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cInVzZSBzdHJpY3RcIjtcbnZhciBfT2JqZWN0JGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gZ2V0KF94LCBfeDIsIF94Mykge1xuICB2YXIgX2FnYWluID0gdHJ1ZTtcbiAgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7XG4gICAgdmFyIG9iamVjdCA9IF94LFxuICAgICAgICBwcm9wZXJ0eSA9IF94MixcbiAgICAgICAgcmVjZWl2ZXIgPSBfeDM7XG4gICAgX2FnYWluID0gZmFsc2U7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbClcbiAgICAgIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgICB2YXIgZGVzYyA9IF9PYmplY3QkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpO1xuICAgIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF94ID0gcGFyZW50O1xuICAgICAgICBfeDIgPSBwcm9wZXJ0eTtcbiAgICAgICAgX3gzID0gcmVjZWl2ZXI7XG4gICAgICAgIF9hZ2FpbiA9IHRydWU7XG4gICAgICAgIGRlc2MgPSBwYXJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnRpbnVlIF9mdW5jdGlvbjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuICAgICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpO1xuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
