/* */
"use strict";

System.register([], function (_export, _context) {
  var _typeof, _Object$defineProperty;

  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      _Object$defineProperty = require('../core-js/object/define-property')["default"];

      exports["default"] = function () {
        function defineProperties(target, descriptors, initializers) {
          for (var i = 0; i < descriptors.length; i++) {
            var descriptor = descriptors[i];
            var decorators = descriptor.decorators;
            var key = descriptor.key;
            delete descriptor.key;
            delete descriptor.decorators;
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor || descriptor.initializer) descriptor.writable = true;
            if (decorators) {
              for (var f = 0; f < decorators.length; f++) {
                var decorator = decorators[f];
                if (typeof decorator === "function") {
                  descriptor = decorator(target, key, descriptor) || descriptor;
                } else {
                  throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + (typeof decorator === "undefined" ? "undefined" : _typeof(decorator)));
                }
              }
              if (descriptor.initializer !== undefined) {
                initializers[key] = descriptor;
                continue;
              }
            }
            _Object$defineProperty(target, key, descriptor);
          }
        }
        return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers);
          if (staticProps) defineProperties(Constructor, staticProps, staticInitializers);
          return Constructor;
        };
      }();
      exports.__esModule = true;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL2NyZWF0ZS1kZWNvcmF0ZWQtY2xhc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0ksK0JBQXlCLFFBQVEsbUNBQVIsRUFBNkMsU0FBN0M7O0FBQzdCLGNBQVEsU0FBUixJQUFxQixZQUFZO0FBQy9CLGlCQUFTLGdCQUFULENBQTBCLE1BQTFCLEVBQWtDLFdBQWxDLEVBQStDLFlBQS9DLEVBQTZEO0FBQzNELGVBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLFlBQVksTUFBWixFQUFvQixHQUF4QyxFQUE2QztBQUMzQyxnQkFBSSxhQUFhLFlBQVksQ0FBWixDQUFiLENBRHVDO0FBRTNDLGdCQUFJLGFBQWEsV0FBVyxVQUFYLENBRjBCO0FBRzNDLGdCQUFJLE1BQU0sV0FBVyxHQUFYLENBSGlDO0FBSTNDLG1CQUFPLFdBQVcsR0FBWCxDQUpvQztBQUszQyxtQkFBTyxXQUFXLFVBQVgsQ0FMb0M7QUFNM0MsdUJBQVcsVUFBWCxHQUF3QixXQUFXLFVBQVgsSUFBeUIsS0FBekIsQ0FObUI7QUFPM0MsdUJBQVcsWUFBWCxHQUEwQixJQUExQixDQVAyQztBQVEzQyxnQkFBSSxXQUFXLFVBQVgsSUFBeUIsV0FBVyxXQUFYLEVBQzNCLFdBQVcsUUFBWCxHQUFzQixJQUF0QixDQURGO0FBRUEsZ0JBQUksVUFBSixFQUFnQjtBQUNkLG1CQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxXQUFXLE1BQVgsRUFBbUIsR0FBdkMsRUFBNEM7QUFDMUMsb0JBQUksWUFBWSxXQUFXLENBQVgsQ0FBWixDQURzQztBQUUxQyxvQkFBSSxPQUFPLFNBQVAsS0FBcUIsVUFBckIsRUFBaUM7QUFDbkMsK0JBQWEsVUFBVSxNQUFWLEVBQWtCLEdBQWxCLEVBQXVCLFVBQXZCLEtBQXNDLFVBQXRDLENBRHNCO2lCQUFyQyxNQUVPO0FBQ0wsd0JBQU0sSUFBSSxTQUFKLENBQWMsOEJBQThCLFdBQVcsR0FBWCxHQUFpQiwwQkFBL0MsV0FBbUYsNkRBQW5GLENBQXBCLENBREs7aUJBRlA7ZUFGRjtBQVFBLGtCQUFJLFdBQVcsV0FBWCxLQUEyQixTQUEzQixFQUFzQztBQUN4Qyw2QkFBYSxHQUFiLElBQW9CLFVBQXBCLENBRHdDO0FBRXhDLHlCQUZ3QztlQUExQzthQVRGO0FBY0EsbUNBQXVCLE1BQXZCLEVBQStCLEdBQS9CLEVBQW9DLFVBQXBDLEVBeEIyQztXQUE3QztTQURGO0FBNEJBLGVBQU8sVUFBUyxXQUFULEVBQXNCLFVBQXRCLEVBQWtDLFdBQWxDLEVBQStDLGlCQUEvQyxFQUFrRSxrQkFBbEUsRUFBc0Y7QUFDM0YsY0FBSSxVQUFKLEVBQ0UsaUJBQWlCLFlBQVksU0FBWixFQUF1QixVQUF4QyxFQUFvRCxpQkFBcEQsRUFERjtBQUVBLGNBQUksV0FBSixFQUNFLGlCQUFpQixXQUFqQixFQUE4QixXQUE5QixFQUEyQyxrQkFBM0MsRUFERjtBQUVBLGlCQUFPLFdBQVAsQ0FMMkY7U0FBdEYsQ0E3QndCO09BQVgsRUFBdEI7QUFxQ0EsY0FBUSxVQUFSLEdBQXFCLElBQXJCIiwiZmlsZSI6Im5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL2NyZWF0ZS1kZWNvcmF0ZWQtY2xhc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwidXNlIHN0cmljdFwiO1xudmFyIF9PYmplY3QkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHknKVtcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIGRlc2NyaXB0b3JzLCBpbml0aWFsaXplcnMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRlc2NyaXB0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JzW2ldO1xuICAgICAgdmFyIGRlY29yYXRvcnMgPSBkZXNjcmlwdG9yLmRlY29yYXRvcnM7XG4gICAgICB2YXIga2V5ID0gZGVzY3JpcHRvci5rZXk7XG4gICAgICBkZWxldGUgZGVzY3JpcHRvci5rZXk7XG4gICAgICBkZWxldGUgZGVzY3JpcHRvci5kZWNvcmF0b3JzO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yIHx8IGRlc2NyaXB0b3IuaW5pdGlhbGl6ZXIpXG4gICAgICAgIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgaWYgKGRlY29yYXRvcnMpIHtcbiAgICAgICAgZm9yICh2YXIgZiA9IDA7IGYgPCBkZWNvcmF0b3JzLmxlbmd0aDsgZisrKSB7XG4gICAgICAgICAgdmFyIGRlY29yYXRvciA9IGRlY29yYXRvcnNbZl07XG4gICAgICAgICAgaWYgKHR5cGVvZiBkZWNvcmF0b3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZGVzY3JpcHRvciA9IGRlY29yYXRvcih0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikgfHwgZGVzY3JpcHRvcjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBkZWNvcmF0b3IgZm9yIG1ldGhvZCBcIiArIGRlc2NyaXB0b3Iua2V5ICsgXCIgaXMgb2YgdGhlIGludmFsaWQgdHlwZSBcIiArIHR5cGVvZiBkZWNvcmF0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVzY3JpcHRvci5pbml0aWFsaXplciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaW5pdGlhbGl6ZXJzW2tleV0gPSBkZXNjcmlwdG9yO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBfT2JqZWN0JGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcywgcHJvdG9Jbml0aWFsaXplcnMsIHN0YXRpY0luaXRpYWxpemVycykge1xuICAgIGlmIChwcm90b1Byb3BzKVxuICAgICAgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMsIHByb3RvSW5pdGlhbGl6ZXJzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpXG4gICAgICBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcywgc3RhdGljSW5pdGlhbGl6ZXJzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KSgpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
