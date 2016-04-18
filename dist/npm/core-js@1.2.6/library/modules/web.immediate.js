'use strict';

System.register([], function (_export, _context) {
  var $export, $task;
  return {
    setters: [],
    execute: function () {
      $export = require('./$.export');
      $task = require('./$.task');

      $export($export.G + $export.B, {
        setImmediate: $task.set,
        clearImmediate: $task.clear
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy93ZWIuaW1tZWRpYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxnQkFBVSxRQUFRLFlBQVI7QUFDVixjQUFRLFFBQVEsVUFBUjs7QUFDWixjQUFRLFFBQVEsQ0FBUixHQUFZLFFBQVEsQ0FBUixFQUFXO0FBQzdCLHNCQUFjLE1BQU0sR0FBTjtBQUNkLHdCQUFnQixNQUFNLEtBQU47T0FGbEIiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzL3dlYi5pbW1lZGlhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgICR0YXNrID0gcmVxdWlyZSgnLi8kLnRhc2snKTtcbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5CLCB7XG4gIHNldEltbWVkaWF0ZTogJHRhc2suc2V0LFxuICBjbGVhckltbWVkaWF0ZTogJHRhc2suY2xlYXJcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
