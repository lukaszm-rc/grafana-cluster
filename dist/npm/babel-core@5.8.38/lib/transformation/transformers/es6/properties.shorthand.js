/* */
"format cjs";
/**
 * [Please add a description.]
 */

"use strict";

System.register([], function (_export, _context) {
  var visitor;
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      visitor = {

        /**
         * [Please add a description.]
         */

        Property: function Property(node) {
          if (node.method) {
            node.method = false;
          }

          if (node.shorthand) {
            node.shorthand = false;
          }
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9wcm9wZXJ0aWVzLnNob3J0aGFuZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7O0FBS0E7Ozs7Ozs7QUFFQSxjQUFRLFVBQVIsR0FBcUIsSUFBckI7QUFDSSxnQkFBVTs7Ozs7O0FBTVosa0JBQVUsU0FBUyxRQUFULENBQWtCLElBQWxCLEVBQXdCO0FBQ2hDLGNBQUksS0FBSyxNQUFMLEVBQWE7QUFDZixpQkFBSyxNQUFMLEdBQWMsS0FBZCxDQURlO1dBQWpCOztBQUlBLGNBQUksS0FBSyxTQUFMLEVBQWdCO0FBQ2xCLGlCQUFLLFNBQUwsR0FBaUIsS0FBakIsQ0FEa0I7V0FBcEI7U0FMUTs7O0FBVVosY0FBUSxPQUFSLEdBQWtCLE9BQWxCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9wcm9wZXJ0aWVzLnNob3J0aGFuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIHZpc2l0b3IgPSB7XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBQcm9wZXJ0eTogZnVuY3Rpb24gUHJvcGVydHkobm9kZSkge1xuICAgIGlmIChub2RlLm1ldGhvZCkge1xuICAgICAgbm9kZS5tZXRob2QgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5zaG9ydGhhbmQpIHtcbiAgICAgIG5vZGUuc2hvcnRoYW5kID0gZmFsc2U7XG4gICAgfVxuICB9XG59O1xuZXhwb3J0cy52aXNpdG9yID0gdmlzaXRvcjsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
