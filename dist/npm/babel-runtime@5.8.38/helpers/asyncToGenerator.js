/* */
"use strict";

System.register([], function (_export, _context) {
  var _promise, _promise2;

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      _promise = require('../core-js/promise');
      _promise2 = _interopRequireDefault(_promise);
      exports.default = function (fn) {
        return function () {
          var gen = fn.apply(this, arguments);
          return new _promise2.default(function (resolve, reject) {
            function step(key, arg) {
              try {
                var info = gen[key](arg);
                var value = info.value;
              } catch (error) {
                reject(error);
                return;
              }
              if (info.done) {
                resolve(value);
              } else {
                return _promise2.default.resolve(value).then(function (value) {
                  return step("next", value);
                }, function (err) {
                  return step("throw", err);
                });
              }
            }
            return step("next");
          });
        };
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7OztBQUlBLFdBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFDbkMsV0FBTyxPQUFPLElBQUksVUFBSixHQUFpQixHQUF4QixHQUE4QixFQUFDLFNBQVMsR0FBVCxFQUEvQixDQUQ0QjtHQUFyQzs7OztBQUhBLGNBQVEsVUFBUixHQUFxQixJQUFyQjtBQUNJLGlCQUFXLFFBQVEsb0JBQVI7QUFDWCxrQkFBWSx1QkFBdUIsUUFBdkI7QUFJaEIsY0FBUSxPQUFSLEdBQWtCLFVBQVMsRUFBVCxFQUFhO0FBQzdCLGVBQU8sWUFBVztBQUNoQixjQUFJLE1BQU0sR0FBRyxLQUFILENBQVMsSUFBVCxFQUFlLFNBQWYsQ0FBTixDQURZO0FBRWhCLGlCQUFPLElBQUksVUFBVSxPQUFWLENBQWtCLFVBQVMsT0FBVCxFQUFrQixNQUFsQixFQUEwQjtBQUNyRCxxQkFBUyxJQUFULENBQWMsR0FBZCxFQUFtQixHQUFuQixFQUF3QjtBQUN0QixrQkFBSTtBQUNGLG9CQUFJLE9BQU8sSUFBSSxHQUFKLEVBQVMsR0FBVCxDQUFQLENBREY7QUFFRixvQkFBSSxRQUFRLEtBQUssS0FBTCxDQUZWO2VBQUosQ0FHRSxPQUFPLEtBQVAsRUFBYztBQUNkLHVCQUFPLEtBQVAsRUFEYztBQUVkLHVCQUZjO2VBQWQ7QUFJRixrQkFBSSxLQUFLLElBQUwsRUFBVztBQUNiLHdCQUFRLEtBQVIsRUFEYTtlQUFmLE1BRU87QUFDTCx1QkFBTyxVQUFVLE9BQVYsQ0FBa0IsT0FBbEIsQ0FBMEIsS0FBMUIsRUFBaUMsSUFBakMsQ0FBc0MsVUFBUyxLQUFULEVBQWdCO0FBQzNELHlCQUFPLEtBQUssTUFBTCxFQUFhLEtBQWIsQ0FBUCxDQUQyRDtpQkFBaEIsRUFFMUMsVUFBUyxHQUFULEVBQWM7QUFDZix5QkFBTyxLQUFLLE9BQUwsRUFBYyxHQUFkLENBQVAsQ0FEZTtpQkFBZCxDQUZILENBREs7ZUFGUDthQVJGO0FBa0JBLG1CQUFPLEtBQUssTUFBTCxDQUFQLENBbkJxRDtXQUExQixDQUE3QixDQUZnQjtTQUFYLENBRHNCO09BQWIiLCJmaWxlIjoibnBtL2JhYmVsLXJ1bnRpbWVANS44LjM4L2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIF9wcm9taXNlID0gcmVxdWlyZSgnLi4vY29yZS1qcy9wcm9taXNlJyk7XG52YXIgX3Byb21pc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvbWlzZSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge2RlZmF1bHQ6IG9ian07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbihmbikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIG5ldyBfcHJvbWlzZTIuZGVmYXVsdChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGZ1bmN0aW9uIHN0ZXAoa2V5LCBhcmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIF9wcm9taXNlMi5kZWZhdWx0LnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RlcChcInRocm93XCIsIGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGVwKFwibmV4dFwiKTtcbiAgICB9KTtcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
