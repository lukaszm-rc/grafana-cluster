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

      exports["default"] = function (descriptors) {
        var target = {};
        for (var i = 0; i < descriptors.length; i++) {
          var descriptor = descriptors[i];
          var decorators = descriptor.decorators;
          var key = descriptor.key;
          delete descriptor.key;
          delete descriptor.decorators;
          descriptor.enumerable = true;
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
          }
          if (descriptor.initializer) {
            descriptor.value = descriptor.initializer.call(target);
          }
          _Object$defineProperty(target, key, descriptor);
        }
        return target;
      };
      exports.__esModule = true;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL2NyZWF0ZS1kZWNvcmF0ZWQtb2JqZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNJLCtCQUF5QixRQUFRLG1DQUFSLEVBQTZDLFNBQTdDOztBQUM3QixjQUFRLFNBQVIsSUFBcUIsVUFBUyxXQUFULEVBQXNCO0FBQ3pDLFlBQUksU0FBUyxFQUFULENBRHFDO0FBRXpDLGFBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLFlBQVksTUFBWixFQUFvQixHQUF4QyxFQUE2QztBQUMzQyxjQUFJLGFBQWEsWUFBWSxDQUFaLENBQWIsQ0FEdUM7QUFFM0MsY0FBSSxhQUFhLFdBQVcsVUFBWCxDQUYwQjtBQUczQyxjQUFJLE1BQU0sV0FBVyxHQUFYLENBSGlDO0FBSTNDLGlCQUFPLFdBQVcsR0FBWCxDQUpvQztBQUszQyxpQkFBTyxXQUFXLFVBQVgsQ0FMb0M7QUFNM0MscUJBQVcsVUFBWCxHQUF3QixJQUF4QixDQU4yQztBQU8zQyxxQkFBVyxZQUFYLEdBQTBCLElBQTFCLENBUDJDO0FBUTNDLGNBQUksV0FBVyxVQUFYLElBQXlCLFdBQVcsV0FBWCxFQUMzQixXQUFXLFFBQVgsR0FBc0IsSUFBdEIsQ0FERjtBQUVBLGNBQUksVUFBSixFQUFnQjtBQUNkLGlCQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxXQUFXLE1BQVgsRUFBbUIsR0FBdkMsRUFBNEM7QUFDMUMsa0JBQUksWUFBWSxXQUFXLENBQVgsQ0FBWixDQURzQztBQUUxQyxrQkFBSSxPQUFPLFNBQVAsS0FBcUIsVUFBckIsRUFBaUM7QUFDbkMsNkJBQWEsVUFBVSxNQUFWLEVBQWtCLEdBQWxCLEVBQXVCLFVBQXZCLEtBQXNDLFVBQXRDLENBRHNCO2VBQXJDLE1BRU87QUFDTCxzQkFBTSxJQUFJLFNBQUosQ0FBYyw4QkFBOEIsV0FBVyxHQUFYLEdBQWlCLDBCQUEvQyxXQUFtRiw2REFBbkYsQ0FBcEIsQ0FESztlQUZQO2FBRkY7V0FERjtBQVVBLGNBQUksV0FBVyxXQUFYLEVBQXdCO0FBQzFCLHVCQUFXLEtBQVgsR0FBbUIsV0FBVyxXQUFYLENBQXVCLElBQXZCLENBQTRCLE1BQTVCLENBQW5CLENBRDBCO1dBQTVCO0FBR0EsaUNBQXVCLE1BQXZCLEVBQStCLEdBQS9CLEVBQW9DLFVBQXBDLEVBdkIyQztTQUE3QztBQXlCQSxlQUFPLE1BQVAsQ0EzQnlDO09BQXRCO0FBNkJyQixjQUFRLFVBQVIsR0FBcUIsSUFBckIiLCJmaWxlIjoibnBtL2JhYmVsLXJ1bnRpbWVANS44LjM4L2hlbHBlcnMvY3JlYXRlLWRlY29yYXRlZC1vYmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwidXNlIHN0cmljdFwiO1xudmFyIF9PYmplY3QkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHknKVtcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uKGRlc2NyaXB0b3JzKSB7XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZXNjcmlwdG9ycy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gZGVzY3JpcHRvcnNbaV07XG4gICAgdmFyIGRlY29yYXRvcnMgPSBkZXNjcmlwdG9yLmRlY29yYXRvcnM7XG4gICAgdmFyIGtleSA9IGRlc2NyaXB0b3Iua2V5O1xuICAgIGRlbGV0ZSBkZXNjcmlwdG9yLmtleTtcbiAgICBkZWxldGUgZGVzY3JpcHRvci5kZWNvcmF0b3JzO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IHRydWU7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvciB8fCBkZXNjcmlwdG9yLmluaXRpYWxpemVyKVxuICAgICAgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgaWYgKGRlY29yYXRvcnMpIHtcbiAgICAgIGZvciAodmFyIGYgPSAwOyBmIDwgZGVjb3JhdG9ycy5sZW5ndGg7IGYrKykge1xuICAgICAgICB2YXIgZGVjb3JhdG9yID0gZGVjb3JhdG9yc1tmXTtcbiAgICAgICAgaWYgKHR5cGVvZiBkZWNvcmF0b3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIGRlc2NyaXB0b3IgPSBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHx8IGRlc2NyaXB0b3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBkZWNvcmF0b3IgZm9yIG1ldGhvZCBcIiArIGRlc2NyaXB0b3Iua2V5ICsgXCIgaXMgb2YgdGhlIGludmFsaWQgdHlwZSBcIiArIHR5cGVvZiBkZWNvcmF0b3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkZXNjcmlwdG9yLmluaXRpYWxpemVyKSB7XG4gICAgICBkZXNjcmlwdG9yLnZhbHVlID0gZGVzY3JpcHRvci5pbml0aWFsaXplci5jYWxsKHRhcmdldCk7XG4gICAgfVxuICAgIF9PYmplY3QkZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpO1xuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
