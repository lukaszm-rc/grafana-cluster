/* */
"use strict";

System.register([], function (_export, _context) {
  var _defineProperty, _defineProperty2;

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      _defineProperty = require('../core-js/object/define-property');
      _defineProperty2 = _interopRequireDefault(_defineProperty);
      exports.default = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            (0, _defineProperty2.default)(target, descriptor.key, descriptor);
          }
        }
        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7QUFJQSxXQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQ25DLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBQyxTQUFTLEdBQVQsRUFBL0IsQ0FENEI7R0FBckM7Ozs7QUFIQSxjQUFRLFVBQVIsR0FBcUIsSUFBckI7QUFDSSx3QkFBa0IsUUFBUSxtQ0FBUjtBQUNsQix5QkFBbUIsdUJBQXVCLGVBQXZCO0FBSXZCLGNBQVEsT0FBUixHQUFrQixZQUFXO0FBQzNCLGlCQUFTLGdCQUFULENBQTBCLE1BQTFCLEVBQWtDLEtBQWxDLEVBQXlDO0FBQ3ZDLGVBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLE1BQU0sTUFBTixFQUFjLEdBQWxDLEVBQXVDO0FBQ3JDLGdCQUFJLGFBQWEsTUFBTSxDQUFOLENBQWIsQ0FEaUM7QUFFckMsdUJBQVcsVUFBWCxHQUF3QixXQUFXLFVBQVgsSUFBeUIsS0FBekIsQ0FGYTtBQUdyQyx1QkFBVyxZQUFYLEdBQTBCLElBQTFCLENBSHFDO0FBSXJDLGdCQUFJLFdBQVcsVUFBWCxFQUNGLFdBQVcsUUFBWCxHQUFzQixJQUF0QixDQURGO0FBRUEsYUFBQyxHQUFHLGlCQUFpQixPQUFqQixDQUFKLENBQThCLE1BQTlCLEVBQXNDLFdBQVcsR0FBWCxFQUFnQixVQUF0RCxFQU5xQztXQUF2QztTQURGO0FBVUEsZUFBTyxVQUFTLFdBQVQsRUFBc0IsVUFBdEIsRUFBa0MsV0FBbEMsRUFBK0M7QUFDcEQsY0FBSSxVQUFKLEVBQ0UsaUJBQWlCLFlBQVksU0FBWixFQUF1QixVQUF4QyxFQURGO0FBRUEsY0FBSSxXQUFKLEVBQ0UsaUJBQWlCLFdBQWpCLEVBQThCLFdBQTlCLEVBREY7QUFFQSxpQkFBTyxXQUFQLENBTG9EO1NBQS9DLENBWG9CO09BQVgsRUFBbEIiLCJmaWxlIjoibnBtL2JhYmVsLXJ1bnRpbWVANS44LjM4L2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHknKTtcbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtkZWZhdWx0OiBvYmp9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpXG4gICAgICAgIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG4gIHJldHVybiBmdW5jdGlvbihDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcylcbiAgICAgIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpXG4gICAgICBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
