/* */
"use strict";

System.register([], function (_export, _context) {
  var _Object$defineProperty;

  return {
    setters: [],
    execute: function () {
      _Object$defineProperty = require('../core-js/object/define-property')["default"];

      exports["default"] = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            _Object$defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      exports.__esModule = true;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL2NyZWF0ZS1jbGFzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7O0FBQ0ksK0JBQXlCLFFBQVEsbUNBQVIsRUFBNkMsU0FBN0M7O0FBQzdCLGNBQVEsU0FBUixJQUFxQixZQUFZO0FBQy9CLGlCQUFTLGdCQUFULENBQTBCLE1BQTFCLEVBQWtDLEtBQWxDLEVBQXlDO0FBQ3ZDLGVBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLE1BQU0sTUFBTixFQUFjLEdBQWxDLEVBQXVDO0FBQ3JDLGdCQUFJLGFBQWEsTUFBTSxDQUFOLENBQWIsQ0FEaUM7QUFFckMsdUJBQVcsVUFBWCxHQUF3QixXQUFXLFVBQVgsSUFBeUIsS0FBekIsQ0FGYTtBQUdyQyx1QkFBVyxZQUFYLEdBQTBCLElBQTFCLENBSHFDO0FBSXJDLGdCQUFJLFdBQVcsVUFBWCxFQUNGLFdBQVcsUUFBWCxHQUFzQixJQUF0QixDQURGO0FBRUEsbUNBQXVCLE1BQXZCLEVBQStCLFdBQVcsR0FBWCxFQUFnQixVQUEvQyxFQU5xQztXQUF2QztTQURGO0FBVUEsZUFBTyxVQUFTLFdBQVQsRUFBc0IsVUFBdEIsRUFBa0MsV0FBbEMsRUFBK0M7QUFDcEQsY0FBSSxVQUFKLEVBQ0UsaUJBQWlCLFlBQVksU0FBWixFQUF1QixVQUF4QyxFQURGO0FBRUEsY0FBSSxXQUFKLEVBQ0UsaUJBQWlCLFdBQWpCLEVBQThCLFdBQTlCLEVBREY7QUFFQSxpQkFBTyxXQUFQLENBTG9EO1NBQS9DLENBWHdCO09BQVgsRUFBdEI7QUFtQkEsY0FBUSxVQUFSLEdBQXFCLElBQXJCIiwiZmlsZSI6Im5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL2NyZWF0ZS1jbGFzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eScpW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKVxuICAgICAgICBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIF9PYmplY3QkZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG4gIHJldHVybiBmdW5jdGlvbihDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcylcbiAgICAgIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpXG4gICAgICBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSkoKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
