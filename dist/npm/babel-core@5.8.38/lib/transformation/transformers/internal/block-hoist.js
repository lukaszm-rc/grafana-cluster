/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _lodashCollectionSortBy, _lodashCollectionSortBy2, metadata, visitor;

  // istanbul ignore next

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_lodashCollectionSortBy = require("lodash/collection/sortBy");
      _lodashCollectionSortBy2 = _interopRequireDefault(_lodashCollectionSortBy);
      metadata = {
        group: "builtin-trailing"
      };


      exports.metadata = metadata;
      /**
       * [Please add a description.]
       *
       * Priority:
       *
       *  - 0 We want this to be at the **very** bottom
       *  - 1 Default node position
       *  - 2 Priority over normal nodes
       *  - 3 We want this to be at the **very** top
       */

      visitor = {

        /**
         * [Please add a description.]
         */

        Block: {
          exit: function exit(node) {
            var hasChange = false;
            for (var i = 0; i < node.body.length; i++) {
              var bodyNode = node.body[i];
              if (bodyNode && bodyNode._blockHoist != null) {
                hasChange = true;
                break;
              }
            }
            if (!hasChange) return;

            node.body = _lodashCollectionSortBy2["default"](node.body, function (bodyNode) {
              var priority = bodyNode && bodyNode._blockHoist;
              if (priority == null) priority = 1;
              if (priority === true) priority = 2;

              // Higher priorities should move toward the top.
              return -1 * priority;
            });
          }
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2ludGVybmFsL2Jsb2NrLWhvaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBS0EsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBRSxXQUFXLEdBQVgsRUFBaEMsQ0FBVDtHQUFyQzs7Ozs7QUFIQSxjQUFRLFVBQVIsR0FBcUIsSUFBckIsQ0FLSSwwQkFBMEIsUUFBUSwwQkFBUjtBQUUxQixpQ0FBMkIsdUJBQXVCLHVCQUF2QjtBQUUzQixpQkFBVztBQUNiLGVBQU8sa0JBQVA7Ozs7QUFHRixjQUFRLFFBQVIsR0FBbUIsUUFBbkI7Ozs7Ozs7Ozs7OztBQVlJLGdCQUFVOzs7Ozs7QUFNWixlQUFPO0FBQ0wsZ0JBQU0sU0FBUyxJQUFULENBQWMsSUFBZCxFQUFvQjtBQUN4QixnQkFBSSxZQUFZLEtBQVosQ0FEb0I7QUFFeEIsaUJBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLEtBQUssSUFBTCxDQUFVLE1BQVYsRUFBa0IsR0FBdEMsRUFBMkM7QUFDekMsa0JBQUksV0FBVyxLQUFLLElBQUwsQ0FBVSxDQUFWLENBQVgsQ0FEcUM7QUFFekMsa0JBQUksWUFBWSxTQUFTLFdBQVQsSUFBd0IsSUFBeEIsRUFBOEI7QUFDNUMsNEJBQVksSUFBWixDQUQ0QztBQUU1QyxzQkFGNEM7ZUFBOUM7YUFGRjtBQU9BLGdCQUFJLENBQUMsU0FBRCxFQUFZLE9BQWhCOztBQUVBLGlCQUFLLElBQUwsR0FBWSx5QkFBeUIsU0FBekIsRUFBb0MsS0FBSyxJQUFMLEVBQVcsVUFBVSxRQUFWLEVBQW9CO0FBQzdFLGtCQUFJLFdBQVcsWUFBWSxTQUFTLFdBQVQsQ0FEa0Q7QUFFN0Usa0JBQUksWUFBWSxJQUFaLEVBQWtCLFdBQVcsQ0FBWCxDQUF0QjtBQUNBLGtCQUFJLGFBQWEsSUFBYixFQUFtQixXQUFXLENBQVgsQ0FBdkI7OztBQUg2RSxxQkFNdEUsQ0FBQyxDQUFELEdBQUssUUFBTCxDQU5zRTthQUFwQixDQUEzRCxDQVh3QjtXQUFwQjtTQURSOzs7QUF1QkYsY0FBUSxPQUFSLEdBQWtCLE9BQWxCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2ludGVybmFsL2Jsb2NrLWhvaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfbG9kYXNoQ29sbGVjdGlvblNvcnRCeSA9IHJlcXVpcmUoXCJsb2Rhc2gvY29sbGVjdGlvbi9zb3J0QnlcIik7XG5cbnZhciBfbG9kYXNoQ29sbGVjdGlvblNvcnRCeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hDb2xsZWN0aW9uU29ydEJ5KTtcblxudmFyIG1ldGFkYXRhID0ge1xuICBncm91cDogXCJidWlsdGluLXRyYWlsaW5nXCJcbn07XG5cbmV4cG9ydHMubWV0YWRhdGEgPSBtZXRhZGF0YTtcbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKlxuICogUHJpb3JpdHk6XG4gKlxuICogIC0gMCBXZSB3YW50IHRoaXMgdG8gYmUgYXQgdGhlICoqdmVyeSoqIGJvdHRvbVxuICogIC0gMSBEZWZhdWx0IG5vZGUgcG9zaXRpb25cbiAqICAtIDIgUHJpb3JpdHkgb3ZlciBub3JtYWwgbm9kZXNcbiAqICAtIDMgV2Ugd2FudCB0aGlzIHRvIGJlIGF0IHRoZSAqKnZlcnkqKiB0b3BcbiAqL1xuXG52YXIgdmlzaXRvciA9IHtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEJsb2NrOiB7XG4gICAgZXhpdDogZnVuY3Rpb24gZXhpdChub2RlKSB7XG4gICAgICB2YXIgaGFzQ2hhbmdlID0gZmFsc2U7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUuYm9keS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgYm9keU5vZGUgPSBub2RlLmJvZHlbaV07XG4gICAgICAgIGlmIChib2R5Tm9kZSAmJiBib2R5Tm9kZS5fYmxvY2tIb2lzdCAhPSBudWxsKSB7XG4gICAgICAgICAgaGFzQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFoYXNDaGFuZ2UpIHJldHVybjtcblxuICAgICAgbm9kZS5ib2R5ID0gX2xvZGFzaENvbGxlY3Rpb25Tb3J0QnkyW1wiZGVmYXVsdFwiXShub2RlLmJvZHksIGZ1bmN0aW9uIChib2R5Tm9kZSkge1xuICAgICAgICB2YXIgcHJpb3JpdHkgPSBib2R5Tm9kZSAmJiBib2R5Tm9kZS5fYmxvY2tIb2lzdDtcbiAgICAgICAgaWYgKHByaW9yaXR5ID09IG51bGwpIHByaW9yaXR5ID0gMTtcbiAgICAgICAgaWYgKHByaW9yaXR5ID09PSB0cnVlKSBwcmlvcml0eSA9IDI7XG5cbiAgICAgICAgLy8gSGlnaGVyIHByaW9yaXRpZXMgc2hvdWxkIG1vdmUgdG93YXJkIHRoZSB0b3AuXG4gICAgICAgIHJldHVybiAtMSAqIHByaW9yaXR5O1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuZXhwb3J0cy52aXNpdG9yID0gdmlzaXRvcjsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
