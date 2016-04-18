/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _path, _path2, _fs, _fs2, _homeOrTmp, _homeOrTmp2, _pathExists, _pathExists2, FILENAME, data;

  // istanbul ignore next

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }

  /**
   * Write stringified cache to disk.
   */

  function save() {
    _fs2["default"].writeFileSync(FILENAME, JSON.stringify(data, null, "  "));
  }

  /**
   * Load cache from disk and parse.
   */

  function load() {
    if (process.env.BABEL_DISABLE_CACHE) return;

    process.on("exit", save);
    process.nextTick(save);

    if (!_pathExists2["default"].sync(FILENAME)) return;

    try {
      data = JSON.parse(_fs2["default"].readFileSync(FILENAME));
    } catch (err) {
      return;
    }
  }

  /**
   * Retrieve data from cache.
   */

  function get() {
    return data;
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.save = save;
      exports.load = load;
      exports.get = get;_path = require("path");
      _path2 = _interopRequireDefault(_path);
      _fs = require("fs");
      _fs2 = _interopRequireDefault(_fs);
      _homeOrTmp = require("home-or-tmp");
      _homeOrTmp2 = _interopRequireDefault(_homeOrTmp);
      _pathExists = require("path-exists");
      _pathExists2 = _interopRequireDefault(_pathExists);
      FILENAME = process.env.BABEL_CACHE_PATH || _path2["default"].join(_homeOrTmp2["default"], ".babel.json");
      data = {};
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvYXBpL3JlZ2lzdGVyL2NhY2hlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBUUEsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBRSxXQUFXLEdBQVgsRUFBaEMsQ0FBVDtHQUFyQzs7Ozs7O0FBeUJBLFdBQVMsSUFBVCxHQUFnQjtBQUNkLFNBQUssU0FBTCxFQUFnQixhQUFoQixDQUE4QixRQUE5QixFQUF3QyxLQUFLLFNBQUwsQ0FBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLElBQTNCLENBQXhDLEVBRGM7R0FBaEI7Ozs7OztBQVFBLFdBQVMsSUFBVCxHQUFnQjtBQUNkLFFBQUksUUFBUSxHQUFSLENBQVksbUJBQVosRUFBaUMsT0FBckM7O0FBRUEsWUFBUSxFQUFSLENBQVcsTUFBWCxFQUFtQixJQUFuQixFQUhjO0FBSWQsWUFBUSxRQUFSLENBQWlCLElBQWpCLEVBSmM7O0FBTWQsUUFBSSxDQUFDLGFBQWEsU0FBYixFQUF3QixJQUF4QixDQUE2QixRQUE3QixDQUFELEVBQXlDLE9BQTdDOztBQUVBLFFBQUk7QUFDRixhQUFPLEtBQUssS0FBTCxDQUFXLEtBQUssU0FBTCxFQUFnQixZQUFoQixDQUE2QixRQUE3QixDQUFYLENBQVAsQ0FERTtLQUFKLENBRUUsT0FBTyxHQUFQLEVBQVk7QUFDWixhQURZO0tBQVo7R0FWSjs7Ozs7O0FBbUJBLFdBQVMsR0FBVCxHQUFlO0FBQ2IsV0FBTyxJQUFQLENBRGE7R0FBZjs7OztBQTFEQSxjQUFRLFVBQVIsR0FBcUIsSUFBckI7QUFDQSxjQUFRLElBQVIsR0FBZSxJQUFmO0FBQ0EsY0FBUSxJQUFSLEdBQWUsSUFBZjtBQUNBLGNBQVEsR0FBUixHQUFjLEdBQWQsQ0FLSSxRQUFRLFFBQVEsTUFBUjtBQUVSLGVBQVMsdUJBQXVCLEtBQXZCO0FBRVQsWUFBTSxRQUFRLElBQVI7QUFFTixhQUFPLHVCQUF1QixHQUF2QjtBQUVQLG1CQUFhLFFBQVEsYUFBUjtBQUViLG9CQUFjLHVCQUF1QixVQUF2QjtBQUVkLG9CQUFjLFFBQVEsYUFBUjtBQUVkLHFCQUFlLHVCQUF1QixXQUF2QjtBQUVmLGlCQUFXLFFBQVEsR0FBUixDQUFZLGdCQUFaLElBQWdDLE9BQU8sU0FBUCxFQUFrQixJQUFsQixDQUF1QixZQUFZLFNBQVosQ0FBdkIsRUFBK0MsYUFBL0MsQ0FBaEM7QUFDWCxhQUFPIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvYXBpL3JlZ2lzdGVyL2NhY2hlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLmdldCA9IGdldDtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX3BhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2ZzID0gcmVxdWlyZShcImZzXCIpO1xuXG52YXIgX2ZzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZzKTtcblxudmFyIF9ob21lT3JUbXAgPSByZXF1aXJlKFwiaG9tZS1vci10bXBcIik7XG5cbnZhciBfaG9tZU9yVG1wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hvbWVPclRtcCk7XG5cbnZhciBfcGF0aEV4aXN0cyA9IHJlcXVpcmUoXCJwYXRoLWV4aXN0c1wiKTtcblxudmFyIF9wYXRoRXhpc3RzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGhFeGlzdHMpO1xuXG52YXIgRklMRU5BTUUgPSBwcm9jZXNzLmVudi5CQUJFTF9DQUNIRV9QQVRIIHx8IF9wYXRoMltcImRlZmF1bHRcIl0uam9pbihfaG9tZU9yVG1wMltcImRlZmF1bHRcIl0sIFwiLmJhYmVsLmpzb25cIik7XG52YXIgZGF0YSA9IHt9O1xuXG4vKipcbiAqIFdyaXRlIHN0cmluZ2lmaWVkIGNhY2hlIHRvIGRpc2suXG4gKi9cblxuZnVuY3Rpb24gc2F2ZSgpIHtcbiAgX2ZzMltcImRlZmF1bHRcIl0ud3JpdGVGaWxlU3luYyhGSUxFTkFNRSwgSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgXCIgIFwiKSk7XG59XG5cbi8qKlxuICogTG9hZCBjYWNoZSBmcm9tIGRpc2sgYW5kIHBhcnNlLlxuICovXG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIGlmIChwcm9jZXNzLmVudi5CQUJFTF9ESVNBQkxFX0NBQ0hFKSByZXR1cm47XG5cbiAgcHJvY2Vzcy5vbihcImV4aXRcIiwgc2F2ZSk7XG4gIHByb2Nlc3MubmV4dFRpY2soc2F2ZSk7XG5cbiAgaWYgKCFfcGF0aEV4aXN0czJbXCJkZWZhdWx0XCJdLnN5bmMoRklMRU5BTUUpKSByZXR1cm47XG5cbiAgdHJ5IHtcbiAgICBkYXRhID0gSlNPTi5wYXJzZShfZnMyW1wiZGVmYXVsdFwiXS5yZWFkRmlsZVN5bmMoRklMRU5BTUUpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8qKlxuICogUmV0cmlldmUgZGF0YSBmcm9tIGNhY2hlLlxuICovXG5cbmZ1bmN0aW9uIGdldCgpIHtcbiAgcmV0dXJuIGRhdGE7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
