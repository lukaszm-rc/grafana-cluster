/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var metadata, visitor;
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      metadata = {
        group: "builtin-modules"
      };


      exports.metadata = metadata;
      /**
       * [Please add a description.]
       */

      visitor = {

        /**
         * [Please add a description.]
         */

        Program: {
          exit: function exit(program, parent, scope, file) {
            // ensure that these are at the top, just like normal imports
            var _arr = file.dynamicImports;
            for (var _i = 0; _i < _arr.length; _i++) {
              var node = _arr[_i];
              node._blockHoist = 3;
            }

            program.body = file.dynamicImports.concat(program.body);

            if (!file.transformers["es6.modules"].canTransform()) return;

            if (file.moduleFormatter.transform) {
              file.moduleFormatter.transform(program);
            }
          }
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2ludGVybmFsL21vZHVsZS1mb3JtYXR0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFFQSxjQUFRLFVBQVIsR0FBcUIsSUFBckI7QUFDSSxpQkFBVztBQUNiLGVBQU8saUJBQVA7Ozs7QUFHRixjQUFRLFFBQVIsR0FBbUIsUUFBbkI7Ozs7O0FBS0ksZ0JBQVU7Ozs7OztBQU1aLGlCQUFTO0FBQ1AsZ0JBQU0sU0FBUyxJQUFULENBQWMsT0FBZCxFQUF1QixNQUF2QixFQUErQixLQUEvQixFQUFzQyxJQUF0QyxFQUE0Qzs7QUFFaEQsZ0JBQUksT0FBTyxLQUFLLGNBQUwsQ0FGcUM7QUFHaEQsaUJBQUssSUFBSSxLQUFLLENBQUwsRUFBUSxLQUFLLEtBQUssTUFBTCxFQUFhLElBQW5DLEVBQXlDO0FBQ3ZDLGtCQUFJLE9BQU8sS0FBSyxFQUFMLENBQVAsQ0FEbUM7QUFFdkMsbUJBQUssV0FBTCxHQUFtQixDQUFuQixDQUZ1QzthQUF6Qzs7QUFLQSxvQkFBUSxJQUFSLEdBQWUsS0FBSyxjQUFMLENBQW9CLE1BQXBCLENBQTJCLFFBQVEsSUFBUixDQUExQyxDQVJnRDs7QUFVaEQsZ0JBQUksQ0FBQyxLQUFLLFlBQUwsQ0FBa0IsYUFBbEIsRUFBaUMsWUFBakMsRUFBRCxFQUFrRCxPQUF0RDs7QUFFQSxnQkFBSSxLQUFLLGVBQUwsQ0FBcUIsU0FBckIsRUFBZ0M7QUFDbEMsbUJBQUssZUFBTCxDQUFxQixTQUFyQixDQUErQixPQUEvQixFQURrQzthQUFwQztXQVpJO1NBRFI7OztBQW1CRixjQUFRLE9BQVIsR0FBa0IsT0FBbEIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmFuc2Zvcm1hdGlvbi90cmFuc2Zvcm1lcnMvaW50ZXJuYWwvbW9kdWxlLWZvcm1hdHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBtZXRhZGF0YSA9IHtcbiAgZ3JvdXA6IFwiYnVpbHRpbi1tb2R1bGVzXCJcbn07XG5cbmV4cG9ydHMubWV0YWRhdGEgPSBtZXRhZGF0YTtcbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIHZpc2l0b3IgPSB7XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBQcm9ncmFtOiB7XG4gICAgZXhpdDogZnVuY3Rpb24gZXhpdChwcm9ncmFtLCBwYXJlbnQsIHNjb3BlLCBmaWxlKSB7XG4gICAgICAvLyBlbnN1cmUgdGhhdCB0aGVzZSBhcmUgYXQgdGhlIHRvcCwganVzdCBsaWtlIG5vcm1hbCBpbXBvcnRzXG4gICAgICB2YXIgX2FyciA9IGZpbGUuZHluYW1pY0ltcG9ydHM7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Fyci5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIG5vZGUgPSBfYXJyW19pXTtcbiAgICAgICAgbm9kZS5fYmxvY2tIb2lzdCA9IDM7XG4gICAgICB9XG5cbiAgICAgIHByb2dyYW0uYm9keSA9IGZpbGUuZHluYW1pY0ltcG9ydHMuY29uY2F0KHByb2dyYW0uYm9keSk7XG5cbiAgICAgIGlmICghZmlsZS50cmFuc2Zvcm1lcnNbXCJlczYubW9kdWxlc1wiXS5jYW5UcmFuc2Zvcm0oKSkgcmV0dXJuO1xuXG4gICAgICBpZiAoZmlsZS5tb2R1bGVGb3JtYXR0ZXIudHJhbnNmb3JtKSB7XG4gICAgICAgIGZpbGUubW9kdWxlRm9ybWF0dGVyLnRyYW5zZm9ybShwcm9ncmFtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLnZpc2l0b3IgPSB2aXNpdG9yOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
