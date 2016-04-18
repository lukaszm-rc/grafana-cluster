/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _types, t;

  // istanbul ignore next

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }newObj["default"] = obj;return newObj;
    }
  }

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_types = require("../../types");
      t = _interopRequireWildcard(_types);


      /**
       * [Please add a description.]
       */

      exports["default"] = function (node) {
        var lastNonDefault = 0;
        for (var i = 0; i < node.params.length; i++) {
          var param = node.params[i];
          if (!t.isAssignmentPattern(param) && !t.isRestElement(param)) {
            lastNonDefault = i + 1;
          }
        }
        return lastNonDefault;
      };

      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vaGVscGVycy9nZXQtZnVuY3Rpb24tYXJpdHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7OztBQUhBLGNBQVEsVUFBUixHQUFxQixJQUFyQixDQUtJLFNBQVMsUUFBUSxhQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEI7Ozs7Ozs7QUFNUixjQUFRLFNBQVIsSUFBcUIsVUFBVSxJQUFWLEVBQWdCO0FBQ25DLFlBQUksaUJBQWlCLENBQWpCLENBRCtCO0FBRW5DLGFBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLEtBQUssTUFBTCxDQUFZLE1BQVosRUFBb0IsR0FBeEMsRUFBNkM7QUFDM0MsY0FBSSxRQUFRLEtBQUssTUFBTCxDQUFZLENBQVosQ0FBUixDQUR1QztBQUUzQyxjQUFJLENBQUMsRUFBRSxtQkFBRixDQUFzQixLQUF0QixDQUFELElBQWlDLENBQUMsRUFBRSxhQUFGLENBQWdCLEtBQWhCLENBQUQsRUFBeUI7QUFDNUQsNkJBQWlCLElBQUksQ0FBSixDQUQyQztXQUE5RDtTQUZGO0FBTUEsZUFBTyxjQUFQLENBUm1DO09BQWhCOztBQVdyQixhQUFPLE9BQVAsR0FBaUIsUUFBUSxTQUFSLENBQWpCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vaGVscGVycy9nZXQtZnVuY3Rpb24tYXJpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciBsYXN0Tm9uRGVmYXVsdCA9IDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5wYXJhbXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGFyYW0gPSBub2RlLnBhcmFtc1tpXTtcbiAgICBpZiAoIXQuaXNBc3NpZ25tZW50UGF0dGVybihwYXJhbSkgJiYgIXQuaXNSZXN0RWxlbWVudChwYXJhbSkpIHtcbiAgICAgIGxhc3ROb25EZWZhdWx0ID0gaSArIDE7XG4gICAgfVxuICB9XG4gIHJldHVybiBsYXN0Tm9uRGVmYXVsdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
