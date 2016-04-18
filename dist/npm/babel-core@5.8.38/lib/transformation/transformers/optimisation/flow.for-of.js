/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _es6ForOf, metadata, visitor;

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;

      _es6ForOf = require("../es6/for-of");
      metadata = {
        optional: true
      };


      exports.metadata = metadata;
      /**
       * [Please add a description.]
       */

      visitor = {

        /**
         * [Please add a description.]
         */

        ForOfStatement: function ForOfStatement(node, parent, scope, file) {
          if (this.get("right").isGenericType("Array")) {
            return _es6ForOf._ForOfStatementArray.call(this, node, scope, file);
          }
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL29wdGltaXNhdGlvbi9mbG93LmZvci1vZi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFFQSxjQUFRLFVBQVIsR0FBcUIsSUFBckI7O0FBRUksa0JBQVksUUFBUSxlQUFSO0FBRVosaUJBQVc7QUFDYixrQkFBVSxJQUFWOzs7O0FBR0YsY0FBUSxRQUFSLEdBQW1CLFFBQW5COzs7OztBQUtJLGdCQUFVOzs7Ozs7QUFNWix3QkFBZ0IsU0FBUyxjQUFULENBQXdCLElBQXhCLEVBQThCLE1BQTlCLEVBQXNDLEtBQXRDLEVBQTZDLElBQTdDLEVBQW1EO0FBQ2pFLGNBQUksS0FBSyxHQUFMLENBQVMsT0FBVCxFQUFrQixhQUFsQixDQUFnQyxPQUFoQyxDQUFKLEVBQThDO0FBQzVDLG1CQUFPLFVBQVUsb0JBQVYsQ0FBK0IsSUFBL0IsQ0FBb0MsSUFBcEMsRUFBMEMsSUFBMUMsRUFBZ0QsS0FBaEQsRUFBdUQsSUFBdkQsQ0FBUCxDQUQ0QztXQUE5QztTQURjOzs7QUFNbEIsY0FBUSxPQUFSLEdBQWtCLE9BQWxCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL29wdGltaXNhdGlvbi9mbG93LmZvci1vZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9lczZGb3JPZiA9IHJlcXVpcmUoXCIuLi9lczYvZm9yLW9mXCIpO1xuXG52YXIgbWV0YWRhdGEgPSB7XG4gIG9wdGlvbmFsOiB0cnVlXG59O1xuXG5leHBvcnRzLm1ldGFkYXRhID0gbWV0YWRhdGE7XG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciB2aXNpdG9yID0ge1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRm9yT2ZTdGF0ZW1lbnQ6IGZ1bmN0aW9uIEZvck9mU3RhdGVtZW50KG5vZGUsIHBhcmVudCwgc2NvcGUsIGZpbGUpIHtcbiAgICBpZiAodGhpcy5nZXQoXCJyaWdodFwiKS5pc0dlbmVyaWNUeXBlKFwiQXJyYXlcIikpIHtcbiAgICAgIHJldHVybiBfZXM2Rm9yT2YuX0Zvck9mU3RhdGVtZW50QXJyYXkuY2FsbCh0aGlzLCBub2RlLCBzY29wZSwgZmlsZSk7XG4gICAgfVxuICB9XG59O1xuZXhwb3J0cy52aXNpdG9yID0gdmlzaXRvcjsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
