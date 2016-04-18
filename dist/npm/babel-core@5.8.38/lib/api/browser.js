/* */
"format cjs";
/* eslint no-new-func: 0 */

"use strict";

System.register([], function (_export, _context) {
  var transform, runScripts;
  return {
    setters: [],
    execute: function () {
      require("./node");
      transform = module.exports = require("../transformation");


      /**
       * Add `options` and `version` to `babel` global.
       */

      transform.options = require("../transformation/file/options");
      transform.version = require("../../package").version;

      /**
       * Add `transform` api to `babel` global.
       */

      transform.transform = transform;

      /**
       * Tranform and execute script, adding in inline sourcemaps.
       */

      transform.run = function (code) {
        var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        opts.sourceMaps = "inline";
        return new Function(transform(code, opts).code)();
      };

      /**
       * Load scripts via xhr, and `transform` when complete (optional).
       */

      transform.load = function (url, callback, opts, hold) {
        if (opts === undefined) opts = {};

        opts.filename = opts.filename || url;

        var xhr = global.ActiveXObject ? new global.ActiveXObject("Microsoft.XMLHTTP") : new global.XMLHttpRequest();
        xhr.open("GET", url, true);
        if ("overrideMimeType" in xhr) xhr.overrideMimeType("text/plain");

        /**
         * When successfully loaded, transform (optional), and call `callback`.
         */

        xhr.onreadystatechange = function () {
          if (xhr.readyState !== 4) return;

          var status = xhr.status;
          if (status === 0 || status === 200) {
            var param = [xhr.responseText, opts];
            if (!hold) transform.run.apply(transform, param);
            if (callback) callback(param);
          } else {
            throw new Error("Could not load " + url);
          }
        };

        xhr.send(null);
      };

      /**
       * Load and transform all scripts of `types`.
       *
       * @example
       * <script type="module"></script>
       */

      runScripts = function runScripts() {
        var scripts = [];
        var types = ["text/ecmascript-6", "text/6to5", "text/babel", "module"];
        var index = 0;

        /**
         * Transform and execute script. Ensures correct load order.
         */

        var exec = function exec() {
          var param = scripts[index];
          if (param instanceof Array) {
            transform.run.apply(transform, param);
            index++;
            exec();
          }
        };

        /**
         * Load, transform, and execute all scripts.
         */

        var run = function run(script, i) {
          var opts = {};

          if (script.src) {
            transform.load(script.src, function (param) {
              scripts[i] = param;
              exec();
            }, opts, true);
          } else {
            opts.filename = "embedded";
            scripts[i] = [script.innerHTML, opts];
          }
        };

        // Collect scripts with Babel `types`.

        var _scripts = global.document.getElementsByTagName("script");

        for (var i = 0; i < _scripts.length; ++i) {
          var _script = _scripts[i];
          if (types.indexOf(_script.type) >= 0) scripts.push(_script);
        }

        for (i in scripts) {
          run(scripts[i], i);
        }

        exec();
      };

      /**
       * Register load event to transform and execute scripts.
       */

      if (global.addEventListener) {
        global.addEventListener("DOMContentLoaded", runScripts, false);
      } else if (global.attachEvent) {
        global.attachEvent("onload", runScripts);
      }
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvYXBpL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7QUFHQTs7Ozs7OztBQUVBLGNBQVEsUUFBUjtBQUNJLGtCQUFZLE9BQU8sT0FBUCxHQUFpQixRQUFRLG1CQUFSLENBQWpCOzs7Ozs7O0FBTWhCLGdCQUFVLE9BQVYsR0FBb0IsUUFBUSxnQ0FBUixDQUFwQjtBQUNBLGdCQUFVLE9BQVYsR0FBb0IsUUFBUSxlQUFSLEVBQXlCLE9BQXpCOzs7Ozs7QUFNcEIsZ0JBQVUsU0FBVixHQUFzQixTQUF0Qjs7Ozs7O0FBTUEsZ0JBQVUsR0FBVixHQUFnQixVQUFVLElBQVYsRUFBZ0I7QUFDOUIsWUFBSSxPQUFPLFVBQVUsTUFBVixJQUFvQixDQUFwQixJQUF5QixVQUFVLENBQVYsTUFBaUIsU0FBakIsR0FBNkIsRUFBdEQsR0FBMkQsVUFBVSxDQUFWLENBQTNELENBRG1COztBQUc5QixhQUFLLFVBQUwsR0FBa0IsUUFBbEIsQ0FIOEI7QUFJOUIsZUFBTyxJQUFJLFFBQUosQ0FBYSxVQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0IsSUFBdEIsQ0FBYixFQUFQLENBSjhCO09BQWhCOzs7Ozs7QUFXaEIsZ0JBQVUsSUFBVixHQUFpQixVQUFVLEdBQVYsRUFBZSxRQUFmLEVBQXlCLElBQXpCLEVBQStCLElBQS9CLEVBQXFDO0FBQ3BELFlBQUksU0FBUyxTQUFULEVBQW9CLE9BQU8sRUFBUCxDQUF4Qjs7QUFFQSxhQUFLLFFBQUwsR0FBZ0IsS0FBSyxRQUFMLElBQWlCLEdBQWpCLENBSG9DOztBQUtwRCxZQUFJLE1BQU0sT0FBTyxhQUFQLEdBQXVCLElBQUksT0FBTyxhQUFQLENBQXFCLG1CQUF6QixDQUF2QixHQUF1RSxJQUFJLE9BQU8sY0FBUCxFQUEzRSxDQUwwQztBQU1wRCxZQUFJLElBQUosQ0FBUyxLQUFULEVBQWdCLEdBQWhCLEVBQXFCLElBQXJCLEVBTm9EO0FBT3BELFlBQUksc0JBQXNCLEdBQXRCLEVBQTJCLElBQUksZ0JBQUosQ0FBcUIsWUFBckIsRUFBL0I7Ozs7OztBQVBvRCxXQWFwRCxDQUFJLGtCQUFKLEdBQXlCLFlBQVk7QUFDbkMsY0FBSSxJQUFJLFVBQUosS0FBbUIsQ0FBbkIsRUFBc0IsT0FBMUI7O0FBRUEsY0FBSSxTQUFTLElBQUksTUFBSixDQUhzQjtBQUluQyxjQUFJLFdBQVcsQ0FBWCxJQUFnQixXQUFXLEdBQVgsRUFBZ0I7QUFDbEMsZ0JBQUksUUFBUSxDQUFDLElBQUksWUFBSixFQUFrQixJQUFuQixDQUFSLENBRDhCO0FBRWxDLGdCQUFJLENBQUMsSUFBRCxFQUFPLFVBQVUsR0FBVixDQUFjLEtBQWQsQ0FBb0IsU0FBcEIsRUFBK0IsS0FBL0IsRUFBWDtBQUNBLGdCQUFJLFFBQUosRUFBYyxTQUFTLEtBQVQsRUFBZDtXQUhGLE1BSU87QUFDTCxrQkFBTSxJQUFJLEtBQUosQ0FBVSxvQkFBb0IsR0FBcEIsQ0FBaEIsQ0FESztXQUpQO1NBSnVCLENBYjJCOztBQTBCcEQsWUFBSSxJQUFKLENBQVMsSUFBVCxFQTFCb0Q7T0FBckM7Ozs7Ozs7OztBQW9DYixtQkFBYSxTQUFTLFVBQVQsR0FBc0I7QUFDckMsWUFBSSxVQUFVLEVBQVYsQ0FEaUM7QUFFckMsWUFBSSxRQUFRLENBQUMsbUJBQUQsRUFBc0IsV0FBdEIsRUFBbUMsWUFBbkMsRUFBaUQsUUFBakQsQ0FBUixDQUZpQztBQUdyQyxZQUFJLFFBQVEsQ0FBUjs7Ozs7O0FBSGlDLFlBU2pDLE9BQU8sU0FBUyxJQUFULEdBQWdCO0FBQ3pCLGNBQUksUUFBUSxRQUFRLEtBQVIsQ0FBUixDQURxQjtBQUV6QixjQUFJLGlCQUFpQixLQUFqQixFQUF3QjtBQUMxQixzQkFBVSxHQUFWLENBQWMsS0FBZCxDQUFvQixTQUFwQixFQUErQixLQUEvQixFQUQwQjtBQUUxQixvQkFGMEI7QUFHMUIsbUJBSDBCO1dBQTVCO1NBRlM7Ozs7OztBQVQwQixZQXNCakMsTUFBTSxTQUFTLEdBQVQsQ0FBYSxNQUFiLEVBQXFCLENBQXJCLEVBQXdCO0FBQ2hDLGNBQUksT0FBTyxFQUFQLENBRDRCOztBQUdoQyxjQUFJLE9BQU8sR0FBUCxFQUFZO0FBQ2Qsc0JBQVUsSUFBVixDQUFlLE9BQU8sR0FBUCxFQUFZLFVBQVUsS0FBVixFQUFpQjtBQUMxQyxzQkFBUSxDQUFSLElBQWEsS0FBYixDQUQwQztBQUUxQyxxQkFGMEM7YUFBakIsRUFHeEIsSUFISCxFQUdTLElBSFQsRUFEYztXQUFoQixNQUtPO0FBQ0wsaUJBQUssUUFBTCxHQUFnQixVQUFoQixDQURLO0FBRUwsb0JBQVEsQ0FBUixJQUFhLENBQUMsT0FBTyxTQUFQLEVBQWtCLElBQW5CLENBQWIsQ0FGSztXQUxQO1NBSFE7Ozs7QUF0QjJCLFlBc0NqQyxXQUFXLE9BQU8sUUFBUCxDQUFnQixvQkFBaEIsQ0FBcUMsUUFBckMsQ0FBWCxDQXRDaUM7O0FBd0NyQyxhQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxTQUFTLE1BQVQsRUFBaUIsRUFBRSxDQUFGLEVBQUs7QUFDeEMsY0FBSSxVQUFVLFNBQVMsQ0FBVCxDQUFWLENBRG9DO0FBRXhDLGNBQUksTUFBTSxPQUFOLENBQWMsUUFBUSxJQUFSLENBQWQsSUFBK0IsQ0FBL0IsRUFBa0MsUUFBUSxJQUFSLENBQWEsT0FBYixFQUF0QztTQUZGOztBQUtBLGFBQUssQ0FBTCxJQUFVLE9BQVYsRUFBbUI7QUFDakIsY0FBSSxRQUFRLENBQVIsQ0FBSixFQUFnQixDQUFoQixFQURpQjtTQUFuQjs7QUFJQSxlQWpEcUM7T0FBdEI7Ozs7OztBQXdEakIsVUFBSSxPQUFPLGdCQUFQLEVBQXlCO0FBQzNCLGVBQU8sZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFVBQTVDLEVBQXdELEtBQXhELEVBRDJCO09BQTdCLE1BRU8sSUFBSSxPQUFPLFdBQVAsRUFBb0I7QUFDN0IsZUFBTyxXQUFQLENBQW1CLFFBQW5CLEVBQTZCLFVBQTdCLEVBRDZCO09BQXhCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvYXBpL2Jyb3dzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuLyogZXNsaW50IG5vLW5ldy1mdW5jOiAwICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiLi9ub2RlXCIpO1xudmFyIHRyYW5zZm9ybSA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL3RyYW5zZm9ybWF0aW9uXCIpO1xuXG4vKipcbiAqIEFkZCBgb3B0aW9uc2AgYW5kIGB2ZXJzaW9uYCB0byBgYmFiZWxgIGdsb2JhbC5cbiAqL1xuXG50cmFuc2Zvcm0ub3B0aW9ucyA9IHJlcXVpcmUoXCIuLi90cmFuc2Zvcm1hdGlvbi9maWxlL29wdGlvbnNcIik7XG50cmFuc2Zvcm0udmVyc2lvbiA9IHJlcXVpcmUoXCIuLi8uLi9wYWNrYWdlXCIpLnZlcnNpb247XG5cbi8qKlxuICogQWRkIGB0cmFuc2Zvcm1gIGFwaSB0byBgYmFiZWxgIGdsb2JhbC5cbiAqL1xuXG50cmFuc2Zvcm0udHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuXG4vKipcbiAqIFRyYW5mb3JtIGFuZCBleGVjdXRlIHNjcmlwdCwgYWRkaW5nIGluIGlubGluZSBzb3VyY2VtYXBzLlxuICovXG5cbnRyYW5zZm9ybS5ydW4gPSBmdW5jdGlvbiAoY29kZSkge1xuICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gIG9wdHMuc291cmNlTWFwcyA9IFwiaW5saW5lXCI7XG4gIHJldHVybiBuZXcgRnVuY3Rpb24odHJhbnNmb3JtKGNvZGUsIG9wdHMpLmNvZGUpKCk7XG59O1xuXG4vKipcbiAqIExvYWQgc2NyaXB0cyB2aWEgeGhyLCBhbmQgYHRyYW5zZm9ybWAgd2hlbiBjb21wbGV0ZSAob3B0aW9uYWwpLlxuICovXG5cbnRyYW5zZm9ybS5sb2FkID0gZnVuY3Rpb24gKHVybCwgY2FsbGJhY2ssIG9wdHMsIGhvbGQpIHtcbiAgaWYgKG9wdHMgPT09IHVuZGVmaW5lZCkgb3B0cyA9IHt9O1xuXG4gIG9wdHMuZmlsZW5hbWUgPSBvcHRzLmZpbGVuYW1lIHx8IHVybDtcblxuICB2YXIgeGhyID0gZ2xvYmFsLkFjdGl2ZVhPYmplY3QgPyBuZXcgZ2xvYmFsLkFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MSFRUUFwiKSA6IG5ldyBnbG9iYWwuWE1MSHR0cFJlcXVlc3QoKTtcbiAgeGhyLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcbiAgaWYgKFwib3ZlcnJpZGVNaW1lVHlwZVwiIGluIHhocikgeGhyLm92ZXJyaWRlTWltZVR5cGUoXCJ0ZXh0L3BsYWluXCIpO1xuXG4gIC8qKlxuICAgKiBXaGVuIHN1Y2Nlc3NmdWxseSBsb2FkZWQsIHRyYW5zZm9ybSAob3B0aW9uYWwpLCBhbmQgY2FsbCBgY2FsbGJhY2tgLlxuICAgKi9cblxuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh4aHIucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuXG4gICAgdmFyIHN0YXR1cyA9IHhoci5zdGF0dXM7XG4gICAgaWYgKHN0YXR1cyA9PT0gMCB8fCBzdGF0dXMgPT09IDIwMCkge1xuICAgICAgdmFyIHBhcmFtID0gW3hoci5yZXNwb25zZVRleHQsIG9wdHNdO1xuICAgICAgaWYgKCFob2xkKSB0cmFuc2Zvcm0ucnVuLmFwcGx5KHRyYW5zZm9ybSwgcGFyYW0pO1xuICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhwYXJhbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBsb2FkIFwiICsgdXJsKTtcbiAgICB9XG4gIH07XG5cbiAgeGhyLnNlbmQobnVsbCk7XG59O1xuXG4vKipcbiAqIExvYWQgYW5kIHRyYW5zZm9ybSBhbGwgc2NyaXB0cyBvZiBgdHlwZXNgLlxuICpcbiAqIEBleGFtcGxlXG4gKiA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIj48L3NjcmlwdD5cbiAqL1xuXG52YXIgcnVuU2NyaXB0cyA9IGZ1bmN0aW9uIHJ1blNjcmlwdHMoKSB7XG4gIHZhciBzY3JpcHRzID0gW107XG4gIHZhciB0eXBlcyA9IFtcInRleHQvZWNtYXNjcmlwdC02XCIsIFwidGV4dC82dG81XCIsIFwidGV4dC9iYWJlbFwiLCBcIm1vZHVsZVwiXTtcbiAgdmFyIGluZGV4ID0gMDtcblxuICAvKipcbiAgICogVHJhbnNmb3JtIGFuZCBleGVjdXRlIHNjcmlwdC4gRW5zdXJlcyBjb3JyZWN0IGxvYWQgb3JkZXIuXG4gICAqL1xuXG4gIHZhciBleGVjID0gZnVuY3Rpb24gZXhlYygpIHtcbiAgICB2YXIgcGFyYW0gPSBzY3JpcHRzW2luZGV4XTtcbiAgICBpZiAocGFyYW0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgdHJhbnNmb3JtLnJ1bi5hcHBseSh0cmFuc2Zvcm0sIHBhcmFtKTtcbiAgICAgIGluZGV4Kys7XG4gICAgICBleGVjKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBMb2FkLCB0cmFuc2Zvcm0sIGFuZCBleGVjdXRlIGFsbCBzY3JpcHRzLlxuICAgKi9cblxuICB2YXIgcnVuID0gZnVuY3Rpb24gcnVuKHNjcmlwdCwgaSkge1xuICAgIHZhciBvcHRzID0ge307XG5cbiAgICBpZiAoc2NyaXB0LnNyYykge1xuICAgICAgdHJhbnNmb3JtLmxvYWQoc2NyaXB0LnNyYywgZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgIHNjcmlwdHNbaV0gPSBwYXJhbTtcbiAgICAgICAgZXhlYygpO1xuICAgICAgfSwgb3B0cywgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdHMuZmlsZW5hbWUgPSBcImVtYmVkZGVkXCI7XG4gICAgICBzY3JpcHRzW2ldID0gW3NjcmlwdC5pbm5lckhUTUwsIG9wdHNdO1xuICAgIH1cbiAgfTtcblxuICAvLyBDb2xsZWN0IHNjcmlwdHMgd2l0aCBCYWJlbCBgdHlwZXNgLlxuXG4gIHZhciBfc2NyaXB0cyA9IGdsb2JhbC5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IF9zY3JpcHRzLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIF9zY3JpcHQgPSBfc2NyaXB0c1tpXTtcbiAgICBpZiAodHlwZXMuaW5kZXhPZihfc2NyaXB0LnR5cGUpID49IDApIHNjcmlwdHMucHVzaChfc2NyaXB0KTtcbiAgfVxuXG4gIGZvciAoaSBpbiBzY3JpcHRzKSB7XG4gICAgcnVuKHNjcmlwdHNbaV0sIGkpO1xuICB9XG5cbiAgZXhlYygpO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciBsb2FkIGV2ZW50IHRvIHRyYW5zZm9ybSBhbmQgZXhlY3V0ZSBzY3JpcHRzLlxuICovXG5cbmlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgcnVuU2NyaXB0cywgZmFsc2UpO1xufSBlbHNlIGlmIChnbG9iYWwuYXR0YWNoRXZlbnQpIHtcbiAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25sb2FkXCIsIHJ1blNjcmlwdHMpO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
