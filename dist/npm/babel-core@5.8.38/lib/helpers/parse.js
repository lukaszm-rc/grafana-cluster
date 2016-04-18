/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _babylon, babylon;

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
      exports.__esModule = true;_babylon = require("babylon");
      babylon = _interopRequireWildcard(_babylon);


      /**
       * Parse `code` with normalized options, collecting tokens and comments.
       */

      exports["default"] = function (code) {
        var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        var parseOpts = {
          allowImportExportEverywhere: opts.looseModules,
          allowReturnOutsideFunction: opts.looseModules,
          allowHashBang: true,
          ecmaVersion: 6,
          strictMode: opts.strictMode,
          sourceType: opts.sourceType,
          locations: true,
          features: opts.features || {},
          plugins: opts.plugins || {}
        };

        if (opts.nonStandard) {
          parseOpts.plugins.jsx = true;
          parseOpts.plugins.flow = true;
        }

        return babylon.parse(code, parseOpts);
      };

      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvaGVscGVycy9wYXJzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQUtBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7O0FBSEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBS0ksV0FBVyxRQUFRLFNBQVI7QUFFWCxnQkFBVSx3QkFBd0IsUUFBeEI7Ozs7Ozs7QUFNZCxjQUFRLFNBQVIsSUFBcUIsVUFBVSxJQUFWLEVBQWdCO0FBQ25DLFlBQUksT0FBTyxVQUFVLE1BQVYsSUFBb0IsQ0FBcEIsSUFBeUIsVUFBVSxDQUFWLE1BQWlCLFNBQWpCLEdBQTZCLEVBQXRELEdBQTJELFVBQVUsQ0FBVixDQUEzRCxDQUR3Qjs7QUFHbkMsWUFBSSxZQUFZO0FBQ2QsdUNBQTZCLEtBQUssWUFBTDtBQUM3QixzQ0FBNEIsS0FBSyxZQUFMO0FBQzVCLHlCQUFlLElBQWY7QUFDQSx1QkFBYSxDQUFiO0FBQ0Esc0JBQVksS0FBSyxVQUFMO0FBQ1osc0JBQVksS0FBSyxVQUFMO0FBQ1oscUJBQVcsSUFBWDtBQUNBLG9CQUFVLEtBQUssUUFBTCxJQUFpQixFQUFqQjtBQUNWLG1CQUFTLEtBQUssT0FBTCxJQUFnQixFQUFoQjtTQVRQLENBSCtCOztBQWVuQyxZQUFJLEtBQUssV0FBTCxFQUFrQjtBQUNwQixvQkFBVSxPQUFWLENBQWtCLEdBQWxCLEdBQXdCLElBQXhCLENBRG9CO0FBRXBCLG9CQUFVLE9BQVYsQ0FBa0IsSUFBbEIsR0FBeUIsSUFBekIsQ0FGb0I7U0FBdEI7O0FBS0EsZUFBTyxRQUFRLEtBQVIsQ0FBYyxJQUFkLEVBQW9CLFNBQXBCLENBQVAsQ0FwQm1DO09BQWhCOztBQXVCckIsYUFBTyxPQUFQLEdBQWlCLFFBQVEsU0FBUixDQUFqQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL2hlbHBlcnMvcGFyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfYmFieWxvbiA9IHJlcXVpcmUoXCJiYWJ5bG9uXCIpO1xuXG52YXIgYmFieWxvbiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9iYWJ5bG9uKTtcblxuLyoqXG4gKiBQYXJzZSBgY29kZWAgd2l0aCBub3JtYWxpemVkIG9wdGlvbnMsIGNvbGxlY3RpbmcgdG9rZW5zIGFuZCBjb21tZW50cy5cbiAqL1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChjb2RlKSB7XG4gIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgdmFyIHBhcnNlT3B0cyA9IHtcbiAgICBhbGxvd0ltcG9ydEV4cG9ydEV2ZXJ5d2hlcmU6IG9wdHMubG9vc2VNb2R1bGVzLFxuICAgIGFsbG93UmV0dXJuT3V0c2lkZUZ1bmN0aW9uOiBvcHRzLmxvb3NlTW9kdWxlcyxcbiAgICBhbGxvd0hhc2hCYW5nOiB0cnVlLFxuICAgIGVjbWFWZXJzaW9uOiA2LFxuICAgIHN0cmljdE1vZGU6IG9wdHMuc3RyaWN0TW9kZSxcbiAgICBzb3VyY2VUeXBlOiBvcHRzLnNvdXJjZVR5cGUsXG4gICAgbG9jYXRpb25zOiB0cnVlLFxuICAgIGZlYXR1cmVzOiBvcHRzLmZlYXR1cmVzIHx8IHt9LFxuICAgIHBsdWdpbnM6IG9wdHMucGx1Z2lucyB8fCB7fVxuICB9O1xuXG4gIGlmIChvcHRzLm5vblN0YW5kYXJkKSB7XG4gICAgcGFyc2VPcHRzLnBsdWdpbnMuanN4ID0gdHJ1ZTtcbiAgICBwYXJzZU9wdHMucGx1Z2lucy5mbG93ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBiYWJ5bG9uLnBhcnNlKGNvZGUsIHBhcnNlT3B0cyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
