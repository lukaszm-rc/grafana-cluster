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
       * Turn member expression reserved word properties into literals.
       *
       * @example
       *
       * **In**
       *
       * ```javascript
       * foo.catch;
       * ```
       *
       * **Out**
       *
       * ```javascript
       * foo["catch"];
       * ```
       */

      visitor = {

        /**
         * Look for non-computed properties with names that are not valid identifiers.
         * Turn them into computed properties with literal names.
         */

        MemberExpression: {
          exit: function exit(node) {
            var prop = node.property;
            if (!node.computed && t.isIdentifier(prop) && !t.isValidIdentifier(prop.name)) {
              // foo.default -> foo["default"]
              node.property = t.literal(prop.name);
              node.computed = true;
            }
          }
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzMy9tZW1iZXItZXhwcmVzc2lvbi1saXRlcmFscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQUtBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7O0FBSEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBS0ksU0FBUyxRQUFRLGdCQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEI7QUFFSixpQkFBVztBQUNiLGVBQU8sa0JBQVA7Ozs7QUFHRixjQUFRLFFBQVIsR0FBbUIsUUFBbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkksZ0JBQVU7Ozs7Ozs7QUFPWiwwQkFBa0I7QUFDaEIsZ0JBQU0sU0FBUyxJQUFULENBQWMsSUFBZCxFQUFvQjtBQUN4QixnQkFBSSxPQUFPLEtBQUssUUFBTCxDQURhO0FBRXhCLGdCQUFJLENBQUMsS0FBSyxRQUFMLElBQWlCLEVBQUUsWUFBRixDQUFlLElBQWYsQ0FBbEIsSUFBMEMsQ0FBQyxFQUFFLGlCQUFGLENBQW9CLEtBQUssSUFBTCxDQUFyQixFQUFpQzs7QUFFN0UsbUJBQUssUUFBTCxHQUFnQixFQUFFLE9BQUYsQ0FBVSxLQUFLLElBQUwsQ0FBMUIsQ0FGNkU7QUFHN0UsbUJBQUssUUFBTCxHQUFnQixJQUFoQixDQUg2RTthQUEvRTtXQUZJO1NBRFI7OztBQVdGLGNBQVEsT0FBUixHQUFrQixPQUFsQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYW5zZm9ybWF0aW9uL3RyYW5zZm9ybWVycy9lczMvbWVtYmVyLWV4cHJlc3Npb24tbGl0ZXJhbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxudmFyIG1ldGFkYXRhID0ge1xuICBncm91cDogXCJidWlsdGluLXRyYWlsaW5nXCJcbn07XG5cbmV4cG9ydHMubWV0YWRhdGEgPSBtZXRhZGF0YTtcbi8qKlxuICogVHVybiBtZW1iZXIgZXhwcmVzc2lvbiByZXNlcnZlZCB3b3JkIHByb3BlcnRpZXMgaW50byBsaXRlcmFscy5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqICoqSW4qKlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGZvby5jYXRjaDtcbiAqIGBgYFxuICpcbiAqICoqT3V0KipcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBmb29bXCJjYXRjaFwiXTtcbiAqIGBgYFxuICovXG5cbnZhciB2aXNpdG9yID0ge1xuXG4gIC8qKlxuICAgKiBMb29rIGZvciBub24tY29tcHV0ZWQgcHJvcGVydGllcyB3aXRoIG5hbWVzIHRoYXQgYXJlIG5vdCB2YWxpZCBpZGVudGlmaWVycy5cbiAgICogVHVybiB0aGVtIGludG8gY29tcHV0ZWQgcHJvcGVydGllcyB3aXRoIGxpdGVyYWwgbmFtZXMuXG4gICAqL1xuXG4gIE1lbWJlckV4cHJlc3Npb246IHtcbiAgICBleGl0OiBmdW5jdGlvbiBleGl0KG5vZGUpIHtcbiAgICAgIHZhciBwcm9wID0gbm9kZS5wcm9wZXJ0eTtcbiAgICAgIGlmICghbm9kZS5jb21wdXRlZCAmJiB0LmlzSWRlbnRpZmllcihwcm9wKSAmJiAhdC5pc1ZhbGlkSWRlbnRpZmllcihwcm9wLm5hbWUpKSB7XG4gICAgICAgIC8vIGZvby5kZWZhdWx0IC0+IGZvb1tcImRlZmF1bHRcIl1cbiAgICAgICAgbm9kZS5wcm9wZXJ0eSA9IHQubGl0ZXJhbChwcm9wLm5hbWUpO1xuICAgICAgICBub2RlLmNvbXB1dGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLnZpc2l0b3IgPSB2aXNpdG9yOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
