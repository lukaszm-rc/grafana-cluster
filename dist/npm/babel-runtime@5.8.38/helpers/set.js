/* */
"use strict";

System.register([], function (_export, _context) {
  var _Object$getOwnPropertyDescriptor;

  return {
    setters: [],
    execute: function () {
      _Object$getOwnPropertyDescriptor = require('../core-js/object/get-own-property-descriptor')["default"];

      exports["default"] = function set(object, property, value, receiver) {
        var desc = _Object$getOwnPropertyDescriptor(object, property);
        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);
          if (parent !== null) {
            set(parent, property, value, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          desc.value = value;
        } else {
          var setter = desc.set;
          if (setter !== undefined) {
            setter.call(receiver, value);
          }
        }
        return value;
      };
      exports.__esModule = true;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL3NldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7O0FBQ0kseUNBQW1DLFFBQVEsK0NBQVIsRUFBeUQsU0FBekQ7O0FBQ3ZDLGNBQVEsU0FBUixJQUFxQixTQUFTLEdBQVQsQ0FBYSxNQUFiLEVBQXFCLFFBQXJCLEVBQStCLEtBQS9CLEVBQXNDLFFBQXRDLEVBQWdEO0FBQ25FLFlBQUksT0FBTyxpQ0FBaUMsTUFBakMsRUFBeUMsUUFBekMsQ0FBUCxDQUQrRDtBQUVuRSxZQUFJLFNBQVMsU0FBVCxFQUFvQjtBQUN0QixjQUFJLFNBQVMsT0FBTyxjQUFQLENBQXNCLE1BQXRCLENBQVQsQ0FEa0I7QUFFdEIsY0FBSSxXQUFXLElBQVgsRUFBaUI7QUFDbkIsZ0JBQUksTUFBSixFQUFZLFFBQVosRUFBc0IsS0FBdEIsRUFBNkIsUUFBN0IsRUFEbUI7V0FBckI7U0FGRixNQUtPLElBQUksV0FBVyxJQUFYLElBQW1CLEtBQUssUUFBTCxFQUFlO0FBQzNDLGVBQUssS0FBTCxHQUFhLEtBQWIsQ0FEMkM7U0FBdEMsTUFFQTtBQUNMLGNBQUksU0FBUyxLQUFLLEdBQUwsQ0FEUjtBQUVMLGNBQUksV0FBVyxTQUFYLEVBQXNCO0FBQ3hCLG1CQUFPLElBQVAsQ0FBWSxRQUFaLEVBQXNCLEtBQXRCLEVBRHdCO1dBQTFCO1NBSks7QUFRUCxlQUFPLEtBQVAsQ0FmbUU7T0FBaEQ7QUFpQnJCLGNBQVEsVUFBUixHQUFxQixJQUFyQiIsImZpbGUiOiJucG0vYmFiZWwtcnVudGltZUA1LjguMzgvaGVscGVycy9zZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwidXNlIHN0cmljdFwiO1xudmFyIF9PYmplY3QkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJylbXCJkZWZhdWx0XCJdO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiBzZXQob2JqZWN0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gIHZhciBkZXNjID0gX09iamVjdCRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7XG4gIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKHBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgc2V0KHBhcmVudCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjICYmIGRlc2Mud3JpdGFibGUpIHtcbiAgICBkZXNjLnZhbHVlID0gdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHNldHRlciA9IGRlc2Muc2V0O1xuICAgIGlmIChzZXR0ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0dGVyLmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
