/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _helpersReact, react, _types, t, metadata, visitor;

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

  /**
   * [Please add a description.]
   */

  function hasRefOrSpread(attrs) {
    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];
      if (t.isJSXSpreadAttribute(attr)) return true;
      if (isJSXAttributeOfName(attr, "ref")) return true;
    }
    return false;
  }

  /**
   * [Please add a description.]
   */

  function isJSXAttributeOfName(attr, name) {
    return t.isJSXAttribute(attr) && t.isJSXIdentifier(attr.name, { name: name });
  }

  /**
   * [Please add a description.]
   */
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_helpersReact = require("../../helpers/react");
      react = _interopRequireWildcard(_helpersReact);
      _types = require("../../../types");
      t = _interopRequireWildcard(_types);
      metadata = {
        optional: true
      };


      exports.metadata = metadata;visitor = {

        /**
         * [Please add a description.]
         */

        JSXElement: function JSXElement(node, parent, scope, file) {
          // filter
          var open = node.openingElement;
          if (hasRefOrSpread(open.attributes)) return;

          // init
          var isComponent = true;
          var props = t.objectExpression([]);
          var obj = t.objectExpression([]);
          var key = t.literal(null);
          var type = open.name;

          if (t.isJSXIdentifier(type) && react.isCompatTag(type.name)) {
            type = t.literal(type.name);
            isComponent = false;
          }

          function pushElemProp(key, value) {
            pushProp(obj.properties, t.identifier(key), value);
          }

          function pushProp(objProps, key, value) {
            objProps.push(t.property("init", key, value));
          }

          if (node.children.length) {
            var children = react.buildChildren(node);
            children = children.length === 1 ? children[0] : t.arrayExpression(children);
            pushProp(props.properties, t.identifier("children"), children);
          }

          // props
          for (var i = 0; i < open.attributes.length; i++) {
            var attr = open.attributes[i];
            if (isJSXAttributeOfName(attr, "key")) {
              key = attr.value;
            } else {
              pushProp(props.properties, attr.name, attr.value || t.identifier("true"));
            }
          }

          if (isComponent) {
            props = t.callExpression(file.addHelper("default-props"), [t.memberExpression(type, t.identifier("defaultProps")), props]);
          }

          // metadata
          pushElemProp("$$typeof", file.addHelper("typeof-react-element"));
          pushElemProp("type", type);
          pushElemProp("key", key);
          pushElemProp("ref", t.literal(null));

          pushElemProp("props", props);
          pushElemProp("_owner", t.literal(null));

          return obj;
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL29wdGltaXNhdGlvbi9yZWFjdC5pbmxpbmUtZWxlbWVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7Ozs7QUFtQkEsV0FBUyxjQUFULENBQXdCLEtBQXhCLEVBQStCO0FBQzdCLFNBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLE1BQU0sTUFBTixFQUFjLEdBQWxDLEVBQXVDO0FBQ3JDLFVBQUksT0FBTyxNQUFNLENBQU4sQ0FBUCxDQURpQztBQUVyQyxVQUFJLEVBQUUsb0JBQUYsQ0FBdUIsSUFBdkIsQ0FBSixFQUFrQyxPQUFPLElBQVAsQ0FBbEM7QUFDQSxVQUFJLHFCQUFxQixJQUFyQixFQUEyQixLQUEzQixDQUFKLEVBQXVDLE9BQU8sSUFBUCxDQUF2QztLQUhGO0FBS0EsV0FBTyxLQUFQLENBTjZCO0dBQS9COzs7Ozs7QUFhQSxXQUFTLG9CQUFULENBQThCLElBQTlCLEVBQW9DLElBQXBDLEVBQTBDO0FBQ3hDLFdBQU8sRUFBRSxjQUFGLENBQWlC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QUF6RCxDQUFsRCxDQUFSLENBRGU7V0FBakI7OztBQXpDeUQsc0JBOEN6RCxDQUFhLFVBQWIsRUFBeUIsS0FBSyxTQUFMLENBQWUsc0JBQWYsQ0FBekIsRUE5Q3lEO0FBK0N6RCx1QkFBYSxNQUFiLEVBQXFCLElBQXJCLEVBL0N5RDtBQWdEekQsdUJBQWEsS0FBYixFQUFvQixHQUFwQixFQWhEeUQ7QUFpRHpELHVCQUFhLEtBQWIsRUFBb0IsRUFBRSxPQUFGLENBQVUsSUFBVixDQUFwQixFQWpEeUQ7O0FBbUR6RCx1QkFBYSxPQUFiLEVBQXNCLEtBQXRCLEVBbkR5RDtBQW9EekQsdUJBQWEsUUFBYixFQUF1QixFQUFFLE9BQUYsQ0FBVSxJQUFWLENBQXZCLEVBcER5RDs7QUFzRHpELGlCQUFPLEdBQVAsQ0F0RHlEO1NBQS9DOzs7QUF5RGQsY0FBUSxPQUFSLEdBQWtCLE9BQWxCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL29wdGltaXNhdGlvbi9yZWFjdC5pbmxpbmUtZWxlbWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfaGVscGVyc1JlYWN0ID0gcmVxdWlyZShcIi4uLy4uL2hlbHBlcnMvcmVhY3RcIik7XG5cbnZhciByZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9oZWxwZXJzUmVhY3QpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uLy4uLy4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbnZhciBtZXRhZGF0YSA9IHtcbiAgb3B0aW9uYWw6IHRydWVcbn07XG5cbmV4cG9ydHMubWV0YWRhdGEgPSBtZXRhZGF0YTtcbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gaGFzUmVmT3JTcHJlYWQoYXR0cnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhdHRycy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBhdHRyID0gYXR0cnNbaV07XG4gICAgaWYgKHQuaXNKU1hTcHJlYWRBdHRyaWJ1dGUoYXR0cikpIHJldHVybiB0cnVlO1xuICAgIGlmIChpc0pTWEF0dHJpYnV0ZU9mTmFtZShhdHRyLCBcInJlZlwiKSkgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIGlzSlNYQXR0cmlidXRlT2ZOYW1lKGF0dHIsIG5hbWUpIHtcbiAgcmV0dXJuIHQuaXNKU1hBdHRyaWJ1dGUoYXR0cikgJiYgdC5pc0pTWElkZW50aWZpZXIoYXR0ci5uYW1lLCB7IG5hbWU6IG5hbWUgfSk7XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cbnZhciB2aXNpdG9yID0ge1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgSlNYRWxlbWVudDogZnVuY3Rpb24gSlNYRWxlbWVudChub2RlLCBwYXJlbnQsIHNjb3BlLCBmaWxlKSB7XG4gICAgLy8gZmlsdGVyXG4gICAgdmFyIG9wZW4gPSBub2RlLm9wZW5pbmdFbGVtZW50O1xuICAgIGlmIChoYXNSZWZPclNwcmVhZChvcGVuLmF0dHJpYnV0ZXMpKSByZXR1cm47XG5cbiAgICAvLyBpbml0XG4gICAgdmFyIGlzQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICB2YXIgcHJvcHMgPSB0Lm9iamVjdEV4cHJlc3Npb24oW10pO1xuICAgIHZhciBvYmogPSB0Lm9iamVjdEV4cHJlc3Npb24oW10pO1xuICAgIHZhciBrZXkgPSB0LmxpdGVyYWwobnVsbCk7XG4gICAgdmFyIHR5cGUgPSBvcGVuLm5hbWU7XG5cbiAgICBpZiAodC5pc0pTWElkZW50aWZpZXIodHlwZSkgJiYgcmVhY3QuaXNDb21wYXRUYWcodHlwZS5uYW1lKSkge1xuICAgICAgdHlwZSA9IHQubGl0ZXJhbCh0eXBlLm5hbWUpO1xuICAgICAgaXNDb21wb25lbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwdXNoRWxlbVByb3Aoa2V5LCB2YWx1ZSkge1xuICAgICAgcHVzaFByb3Aob2JqLnByb3BlcnRpZXMsIHQuaWRlbnRpZmllcihrZXkpLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHVzaFByb3Aob2JqUHJvcHMsIGtleSwgdmFsdWUpIHtcbiAgICAgIG9ialByb3BzLnB1c2godC5wcm9wZXJ0eShcImluaXRcIiwga2V5LCB2YWx1ZSkpO1xuICAgIH1cblxuICAgIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcmVhY3QuYnVpbGRDaGlsZHJlbihub2RlKTtcbiAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW4ubGVuZ3RoID09PSAxID8gY2hpbGRyZW5bMF0gOiB0LmFycmF5RXhwcmVzc2lvbihjaGlsZHJlbik7XG4gICAgICBwdXNoUHJvcChwcm9wcy5wcm9wZXJ0aWVzLCB0LmlkZW50aWZpZXIoXCJjaGlsZHJlblwiKSwgY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIC8vIHByb3BzXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcGVuLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBhdHRyID0gb3Blbi5hdHRyaWJ1dGVzW2ldO1xuICAgICAgaWYgKGlzSlNYQXR0cmlidXRlT2ZOYW1lKGF0dHIsIFwia2V5XCIpKSB7XG4gICAgICAgIGtleSA9IGF0dHIudmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwdXNoUHJvcChwcm9wcy5wcm9wZXJ0aWVzLCBhdHRyLm5hbWUsIGF0dHIudmFsdWUgfHwgdC5pZGVudGlmaWVyKFwidHJ1ZVwiKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzQ29tcG9uZW50KSB7XG4gICAgICBwcm9wcyA9IHQuY2FsbEV4cHJlc3Npb24oZmlsZS5hZGRIZWxwZXIoXCJkZWZhdWx0LXByb3BzXCIpLCBbdC5tZW1iZXJFeHByZXNzaW9uKHR5cGUsIHQuaWRlbnRpZmllcihcImRlZmF1bHRQcm9wc1wiKSksIHByb3BzXSk7XG4gICAgfVxuXG4gICAgLy8gbWV0YWRhdGFcbiAgICBwdXNoRWxlbVByb3AoXCIkJHR5cGVvZlwiLCBmaWxlLmFkZEhlbHBlcihcInR5cGVvZi1yZWFjdC1lbGVtZW50XCIpKTtcbiAgICBwdXNoRWxlbVByb3AoXCJ0eXBlXCIsIHR5cGUpO1xuICAgIHB1c2hFbGVtUHJvcChcImtleVwiLCBrZXkpO1xuICAgIHB1c2hFbGVtUHJvcChcInJlZlwiLCB0LmxpdGVyYWwobnVsbCkpO1xuXG4gICAgcHVzaEVsZW1Qcm9wKFwicHJvcHNcIiwgcHJvcHMpO1xuICAgIHB1c2hFbGVtUHJvcChcIl9vd25lclwiLCB0LmxpdGVyYWwobnVsbCkpO1xuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxufTtcbmV4cG9ydHMudmlzaXRvciA9IHZpc2l0b3I7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
