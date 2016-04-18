/* */
"use strict";

System.register([], function (_export, _context) {
  var _Promise;

  return {
    setters: [],
    execute: function () {
      _Promise = require('../core-js/promise')["default"];

      exports["default"] = function (fn) {
        return function () {
          var gen = fn.apply(this, arguments);
          return new _Promise(function (resolve, reject) {
            var callNext = step.bind(null, "next");
            var callThrow = step.bind(null, "throw");
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
                _Promise.resolve(value).then(callNext, callThrow);
              }
            }
            callNext();
          });
        };
      };
      exports.__esModule = true;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL2FzeW5jLXRvLWdlbmVyYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7O0FBQ0ksaUJBQVcsUUFBUSxvQkFBUixFQUE4QixTQUE5Qjs7QUFDZixjQUFRLFNBQVIsSUFBcUIsVUFBUyxFQUFULEVBQWE7QUFDaEMsZUFBTyxZQUFXO0FBQ2hCLGNBQUksTUFBTSxHQUFHLEtBQUgsQ0FBUyxJQUFULEVBQWUsU0FBZixDQUFOLENBRFk7QUFFaEIsaUJBQU8sSUFBSSxRQUFKLENBQWEsVUFBUyxPQUFULEVBQWtCLE1BQWxCLEVBQTBCO0FBQzVDLGdCQUFJLFdBQVcsS0FBSyxJQUFMLENBQVUsSUFBVixFQUFnQixNQUFoQixDQUFYLENBRHdDO0FBRTVDLGdCQUFJLFlBQVksS0FBSyxJQUFMLENBQVUsSUFBVixFQUFnQixPQUFoQixDQUFaLENBRndDO0FBRzVDLHFCQUFTLElBQVQsQ0FBYyxHQUFkLEVBQW1CLEdBQW5CLEVBQXdCO0FBQ3RCLGtCQUFJO0FBQ0Ysb0JBQUksT0FBTyxJQUFJLEdBQUosRUFBUyxHQUFULENBQVAsQ0FERjtBQUVGLG9CQUFJLFFBQVEsS0FBSyxLQUFMLENBRlY7ZUFBSixDQUdFLE9BQU8sS0FBUCxFQUFjO0FBQ2QsdUJBQU8sS0FBUCxFQURjO0FBRWQsdUJBRmM7ZUFBZDtBQUlGLGtCQUFJLEtBQUssSUFBTCxFQUFXO0FBQ2Isd0JBQVEsS0FBUixFQURhO2VBQWYsTUFFTztBQUNMLHlCQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0IsSUFBeEIsQ0FBNkIsUUFBN0IsRUFBdUMsU0FBdkMsRUFESztlQUZQO2FBUkY7QUFjQSx1QkFqQjRDO1dBQTFCLENBQXBCLENBRmdCO1NBQVgsQ0FEeUI7T0FBYjtBQXdCckIsY0FBUSxVQUFSLEdBQXFCLElBQXJCIiwiZmlsZSI6Im5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL2FzeW5jLXRvLWdlbmVyYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX1Byb21pc2UgPSByZXF1aXJlKCcuLi9jb3JlLWpzL3Byb21pc2UnKVtcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgZ2VuID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gbmV3IF9Qcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGNhbGxOZXh0ID0gc3RlcC5iaW5kKG51bGwsIFwibmV4dFwiKTtcbiAgICAgIHZhciBjYWxsVGhyb3cgPSBzdGVwLmJpbmQobnVsbCwgXCJ0aHJvd1wiKTtcbiAgICAgIGZ1bmN0aW9uIHN0ZXAoa2V5LCBhcmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX1Byb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihjYWxsTmV4dCwgY2FsbFRocm93KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2FsbE5leHQoKTtcbiAgICB9KTtcbiAgfTtcbn07XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
