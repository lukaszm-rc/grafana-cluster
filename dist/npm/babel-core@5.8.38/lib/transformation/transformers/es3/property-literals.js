/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _types, t, metadata, visitor;

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
      exports.__esModule = true;_types = require("../../../types");
      t = _interopRequireWildcard(_types);
      metadata = {
        group: "builtin-trailing"
      };


      exports.metadata = metadata;
      /**
       * Turn reserved word properties into literals.
       *
       * **In**
       *
       * ```javascript
       * var foo = {
       *   catch: function () {}
       * };
       * ```
       *
       * **Out**
       *
       * ```javascript
       * var foo = {
       *   "catch": function () {}
       * };
       * ```
       */

      visitor = {

        /**
         * Look for non-computed keys with names that are not valid identifiers.
         * Turn them into literals.
         */

        Property: {
          exit: function exit(node) {
            var key = node.key;
            if (!node.computed && t.isIdentifier(key) && !t.isValidIdentifier(key.name)) {
              // default: "bar" -> "default": "bar"
              node.key = t.literal(key.name);
            }
          }
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzMy9wcm9wZXJ0eS1saXRlcmFscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQUtBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7O0FBSEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBS0ksU0FBUyxRQUFRLGdCQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEI7QUFFSixpQkFBVztBQUNiLGVBQU8sa0JBQVA7Ozs7QUFHRixjQUFRLFFBQVIsR0FBbUIsUUFBbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCSSxnQkFBVTs7Ozs7OztBQU9aLGtCQUFVO0FBQ1IsZ0JBQU0sU0FBUyxJQUFULENBQWMsSUFBZCxFQUFvQjtBQUN4QixnQkFBSSxNQUFNLEtBQUssR0FBTCxDQURjO0FBRXhCLGdCQUFJLENBQUMsS0FBSyxRQUFMLElBQWlCLEVBQUUsWUFBRixDQUFlLEdBQWYsQ0FBbEIsSUFBeUMsQ0FBQyxFQUFFLGlCQUFGLENBQW9CLElBQUksSUFBSixDQUFyQixFQUFnQzs7QUFFM0UsbUJBQUssR0FBTCxHQUFXLEVBQUUsT0FBRixDQUFVLElBQUksSUFBSixDQUFyQixDQUYyRTthQUE3RTtXQUZJO1NBRFI7OztBQVVGLGNBQVEsT0FBUixHQUFrQixPQUFsQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYW5zZm9ybWF0aW9uL3RyYW5zZm9ybWVycy9lczMvcHJvcGVydHktbGl0ZXJhbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxudmFyIG1ldGFkYXRhID0ge1xuICBncm91cDogXCJidWlsdGluLXRyYWlsaW5nXCJcbn07XG5cbmV4cG9ydHMubWV0YWRhdGEgPSBtZXRhZGF0YTtcbi8qKlxuICogVHVybiByZXNlcnZlZCB3b3JkIHByb3BlcnRpZXMgaW50byBsaXRlcmFscy5cbiAqXG4gKiAqKkluKipcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiB2YXIgZm9vID0ge1xuICogICBjYXRjaDogZnVuY3Rpb24gKCkge31cbiAqIH07XG4gKiBgYGBcbiAqXG4gKiAqKk91dCoqXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogdmFyIGZvbyA9IHtcbiAqICAgXCJjYXRjaFwiOiBmdW5jdGlvbiAoKSB7fVxuICogfTtcbiAqIGBgYFxuICovXG5cbnZhciB2aXNpdG9yID0ge1xuXG4gIC8qKlxuICAgKiBMb29rIGZvciBub24tY29tcHV0ZWQga2V5cyB3aXRoIG5hbWVzIHRoYXQgYXJlIG5vdCB2YWxpZCBpZGVudGlmaWVycy5cbiAgICogVHVybiB0aGVtIGludG8gbGl0ZXJhbHMuXG4gICAqL1xuXG4gIFByb3BlcnR5OiB7XG4gICAgZXhpdDogZnVuY3Rpb24gZXhpdChub2RlKSB7XG4gICAgICB2YXIga2V5ID0gbm9kZS5rZXk7XG4gICAgICBpZiAoIW5vZGUuY29tcHV0ZWQgJiYgdC5pc0lkZW50aWZpZXIoa2V5KSAmJiAhdC5pc1ZhbGlkSWRlbnRpZmllcihrZXkubmFtZSkpIHtcbiAgICAgICAgLy8gZGVmYXVsdDogXCJiYXJcIiAtPiBcImRlZmF1bHRcIjogXCJiYXJcIlxuICAgICAgICBub2RlLmtleSA9IHQubGl0ZXJhbChrZXkubmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuZXhwb3J0cy52aXNpdG9yID0gdmlzaXRvcjsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
