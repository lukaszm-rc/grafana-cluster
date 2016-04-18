/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _parsers, parsers, _config, _config2;

  // istanbul ignore next

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }

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

  /**
   * Validate an option.
   */

  function validateOption(key, val, pipeline) {
    var opt = _config2["default"][key];
    var parser = opt && parsers[opt.type];
    if (parser && parser.validate) {
      return parser.validate(key, val, pipeline);
    } else {
      return val;
    }
  }

  /**
   * Normalize all options.
   */

  function normaliseOptions() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    for (var key in options) {
      var val = options[key];
      if (val == null) continue;

      var opt = _config2["default"][key];
      if (!opt) continue;

      var parser = parsers[opt.type];
      if (parser) val = parser(val);

      options[key] = val;
    }

    return options;
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.validateOption = validateOption;
      exports.normaliseOptions = normaliseOptions;_parsers = require("./parsers");
      parsers = _interopRequireWildcard(_parsers);
      _config = require("./config");
      _config2 = _interopRequireDefault(_config);


      exports.config = _config2["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vZmlsZS9vcHRpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBT0EsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBRSxXQUFXLEdBQVgsRUFBaEMsQ0FBVDtHQUFyQzs7OztBQUlBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7OztBQWdCQSxXQUFTLGNBQVQsQ0FBd0IsR0FBeEIsRUFBNkIsR0FBN0IsRUFBa0MsUUFBbEMsRUFBNEM7QUFDMUMsUUFBSSxNQUFNLFNBQVMsU0FBVCxFQUFvQixHQUFwQixDQUFOLENBRHNDO0FBRTFDLFFBQUksU0FBUyxPQUFPLFFBQVEsSUFBSSxJQUFKLENBQWYsQ0FGNkI7QUFHMUMsUUFBSSxVQUFVLE9BQU8sUUFBUCxFQUFpQjtBQUM3QixhQUFPLE9BQU8sUUFBUCxDQUFnQixHQUFoQixFQUFxQixHQUFyQixFQUEwQixRQUExQixDQUFQLENBRDZCO0tBQS9CLE1BRU87QUFDTCxhQUFPLEdBQVAsQ0FESztLQUZQO0dBSEY7Ozs7OztBQWNBLFdBQVMsZ0JBQVQsR0FBNEI7QUFDMUIsUUFBSSxVQUFVLFVBQVUsTUFBVixJQUFvQixDQUFwQixJQUF5QixVQUFVLENBQVYsTUFBaUIsU0FBakIsR0FBNkIsRUFBdEQsR0FBMkQsVUFBVSxDQUFWLENBQTNELENBRFk7O0FBRzFCLFNBQUssSUFBSSxHQUFKLElBQVcsT0FBaEIsRUFBeUI7QUFDdkIsVUFBSSxNQUFNLFFBQVEsR0FBUixDQUFOLENBRG1CO0FBRXZCLFVBQUksT0FBTyxJQUFQLEVBQWEsU0FBakI7O0FBRUEsVUFBSSxNQUFNLFNBQVMsU0FBVCxFQUFvQixHQUFwQixDQUFOLENBSm1CO0FBS3ZCLFVBQUksQ0FBQyxHQUFELEVBQU0sU0FBVjs7QUFFQSxVQUFJLFNBQVMsUUFBUSxJQUFJLElBQUosQ0FBakIsQ0FQbUI7QUFRdkIsVUFBSSxNQUFKLEVBQVksTUFBTSxPQUFPLEdBQVAsQ0FBTixDQUFaOztBQUVBLGNBQVEsR0FBUixJQUFlLEdBQWYsQ0FWdUI7S0FBekI7O0FBYUEsV0FBTyxPQUFQLENBaEIwQjtHQUE1Qjs7OztBQXZDQSxjQUFRLFVBQVIsR0FBcUIsSUFBckI7QUFDQSxjQUFRLGNBQVIsR0FBeUIsY0FBekI7QUFDQSxjQUFRLGdCQUFSLEdBQTJCLGdCQUEzQixDQVNJLFdBQVcsUUFBUSxXQUFSO0FBRVgsZ0JBQVUsd0JBQXdCLFFBQXhCO0FBRVYsZ0JBQVUsUUFBUSxVQUFSO0FBRVYsaUJBQVcsdUJBQXVCLE9BQXZCOzs7QUFFZixjQUFRLE1BQVIsR0FBaUIsU0FBUyxTQUFULENBQWpCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vZmlsZS9vcHRpb25zL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy52YWxpZGF0ZU9wdGlvbiA9IHZhbGlkYXRlT3B0aW9uO1xuZXhwb3J0cy5ub3JtYWxpc2VPcHRpb25zID0gbm9ybWFsaXNlT3B0aW9ucztcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfcGFyc2VycyA9IHJlcXVpcmUoXCIuL3BhcnNlcnNcIik7XG5cbnZhciBwYXJzZXJzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3BhcnNlcnMpO1xuXG52YXIgX2NvbmZpZyA9IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKTtcblxudmFyIF9jb25maWcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29uZmlnKTtcblxuZXhwb3J0cy5jb25maWcgPSBfY29uZmlnMltcImRlZmF1bHRcIl07XG5cbi8qKlxuICogVmFsaWRhdGUgYW4gb3B0aW9uLlxuICovXG5cbmZ1bmN0aW9uIHZhbGlkYXRlT3B0aW9uKGtleSwgdmFsLCBwaXBlbGluZSkge1xuICB2YXIgb3B0ID0gX2NvbmZpZzJbXCJkZWZhdWx0XCJdW2tleV07XG4gIHZhciBwYXJzZXIgPSBvcHQgJiYgcGFyc2Vyc1tvcHQudHlwZV07XG4gIGlmIChwYXJzZXIgJiYgcGFyc2VyLnZhbGlkYXRlKSB7XG4gICAgcmV0dXJuIHBhcnNlci52YWxpZGF0ZShrZXksIHZhbCwgcGlwZWxpbmUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWw7XG4gIH1cbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgYWxsIG9wdGlvbnMuXG4gKi9cblxuZnVuY3Rpb24gbm9ybWFsaXNlT3B0aW9ucygpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICBmb3IgKHZhciBrZXkgaW4gb3B0aW9ucykge1xuICAgIHZhciB2YWwgPSBvcHRpb25zW2tleV07XG4gICAgaWYgKHZhbCA9PSBudWxsKSBjb250aW51ZTtcblxuICAgIHZhciBvcHQgPSBfY29uZmlnMltcImRlZmF1bHRcIl1ba2V5XTtcbiAgICBpZiAoIW9wdCkgY29udGludWU7XG5cbiAgICB2YXIgcGFyc2VyID0gcGFyc2Vyc1tvcHQudHlwZV07XG4gICAgaWYgKHBhcnNlcikgdmFsID0gcGFyc2VyKHZhbCk7XG5cbiAgICBvcHRpb25zW2tleV0gPSB2YWw7XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucztcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
