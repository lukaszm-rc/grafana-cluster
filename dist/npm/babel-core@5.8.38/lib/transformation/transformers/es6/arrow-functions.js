/* */
"format cjs";
/**
 * Turn arrow functions into normal functions.
 *
 * @example
 *
 * **In**
 *
 * ```javascript
 * arr.map(x => x * x);
 * ```
 *
 * **Out**
 *
 * ```javascript
 * arr.map(function (x) {
 *   return x * x;
 * });
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
         * Look for arrow functions and mark them as "shadow functions".
         * @see /transformation/transformers/internal/shadow-functions.js
         */

        ArrowFunctionExpression: function ArrowFunctionExpression(node) {
          this.ensureBlock();
          node.expression = false;
          node.type = "FunctionExpression";
          node.shadow = node.shadow || true;
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9hcnJvdy1mdW5jdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7Ozs7OztBQUVBLGNBQVEsVUFBUixHQUFxQixJQUFyQjtBQUNJLGdCQUFVOzs7Ozs7O0FBT1osaUNBQXlCLFNBQVMsdUJBQVQsQ0FBaUMsSUFBakMsRUFBdUM7QUFDOUQsZUFBSyxXQUFMLEdBRDhEO0FBRTlELGVBQUssVUFBTCxHQUFrQixLQUFsQixDQUY4RDtBQUc5RCxlQUFLLElBQUwsR0FBWSxvQkFBWixDQUg4RDtBQUk5RCxlQUFLLE1BQUwsR0FBYyxLQUFLLE1BQUwsSUFBZSxJQUFmLENBSmdEO1NBQXZDOzs7QUFPM0IsY0FBUSxPQUFSLEdBQWtCLE9BQWxCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9hcnJvdy1mdW5jdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuLyoqXG4gKiBUdXJuIGFycm93IGZ1bmN0aW9ucyBpbnRvIG5vcm1hbCBmdW5jdGlvbnMuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiAqKkluKipcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBhcnIubWFwKHggPT4geCAqIHgpO1xuICogYGBgXG4gKlxuICogKipPdXQqKlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGFyci5tYXAoZnVuY3Rpb24gKHgpIHtcbiAqICAgcmV0dXJuIHggKiB4O1xuICogfSk7XG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgdmlzaXRvciA9IHtcblxuICAvKipcbiAgICogTG9vayBmb3IgYXJyb3cgZnVuY3Rpb25zIGFuZCBtYXJrIHRoZW0gYXMgXCJzaGFkb3cgZnVuY3Rpb25zXCIuXG4gICAqIEBzZWUgL3RyYW5zZm9ybWF0aW9uL3RyYW5zZm9ybWVycy9pbnRlcm5hbC9zaGFkb3ctZnVuY3Rpb25zLmpzXG4gICAqL1xuXG4gIEFycm93RnVuY3Rpb25FeHByZXNzaW9uOiBmdW5jdGlvbiBBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihub2RlKSB7XG4gICAgdGhpcy5lbnN1cmVCbG9jaygpO1xuICAgIG5vZGUuZXhwcmVzc2lvbiA9IGZhbHNlO1xuICAgIG5vZGUudHlwZSA9IFwiRnVuY3Rpb25FeHByZXNzaW9uXCI7XG4gICAgbm9kZS5zaGFkb3cgPSBub2RlLnNoYWRvdyB8fCB0cnVlO1xuICB9XG59O1xuZXhwb3J0cy52aXNpdG9yID0gdmlzaXRvcjsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
