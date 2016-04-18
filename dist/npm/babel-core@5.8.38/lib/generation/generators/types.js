/* */
"format cjs";
/* eslint quotes: 0 */

"use strict";

System.register([], function (_export, _context) {
  var _typeof, _types, t;

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
   * Prints Identifier, prints name.
   */

  function Identifier(node) {
    this.push(node.name);
  }

  /**
   * Prints RestElement, prints argument.
   */

  function RestElement(node, print) {
    this.push("...");
    print.plain(node.argument);
  }

  /**
   * Alias RestElement printer as SpreadElement,
   * and RestElement printer as SpreadProperty.
   */

  /**
   * Prints ObjectExpression, prints properties.
   */

  function ObjectExpression(node, print) {
    var props = node.properties;

    this.push("{");
    print.printInnerComments();

    if (props.length) {
      this.space();
      print.list(props, { indent: true });
      this.space();
    }

    this.push("}");
  }

  /**
   * Alias ObjectExpression printer as ObjectPattern.
   */

  /**
   * Prints Property, prints decorators, key, and value, handles kind, computed, and shorthand.
   */

  function Property(node, print) {
    print.list(node.decorators, { separator: "" });

    if (node.method || node.kind === "get" || node.kind === "set") {
      this._method(node, print);
    } else {
      if (node.computed) {
        this.push("[");
        print.plain(node.key);
        this.push("]");
      } else {
        // print `({ foo: foo = 5 } = {})` as `({ foo = 5 } = {});`
        if (t.isAssignmentPattern(node.value) && t.isIdentifier(node.key) && node.key.name === node.value.left.name) {
          print.plain(node.value);
          return;
        }

        print.plain(node.key);

        // shorthand!
        if (node.shorthand && t.isIdentifier(node.key) && t.isIdentifier(node.value) && node.key.name === node.value.name) {
          return;
        }
      }

      this.push(":");
      this.space();
      print.plain(node.value);
    }
  }

  /**
   * Prints ArrayExpression, prints elements.
   */

  function ArrayExpression(node, print) {
    var elems = node.elements;
    var len = elems.length;

    this.push("[");
    print.printInnerComments();

    for (var i = 0; i < elems.length; i++) {
      var elem = elems[i];
      if (elem) {
        if (i > 0) this.space();
        print.plain(elem);
        if (i < len - 1) this.push(",");
      } else {
        // If the array expression ends with a hole, that hole
        // will be ignored by the interpreter, but if it ends with
        // two (or more) holes, we need to write out two (or more)
        // commas so that the resulting code is interpreted with
        // both (all) of the holes.
        this.push(",");
      }
    }

    this.push("]");
  }

  /**
   * Alias ArrayExpression printer as ArrayPattern.
   */

  /**
   * Prints Literal, prints value, regex, raw, handles val type.
   */

  function Literal(node) {
    this.push(""); // hack: catch up indentation
    this._push(this._Literal(node));
  }

  function _Literal(node) {
    var val = node.value;

    if (node.regex) {
      return "/" + node.regex.pattern + "/" + node.regex.flags;
    }

    // just use the raw property if our current value is equivalent to the one we got
    // when we populated raw
    if (node.raw != null && node.rawValue != null && val === node.rawValue) {
      return node.raw;
    }

    switch (typeof val === "undefined" ? "undefined" : _typeof(val)) {
      case "string":
        return this._stringLiteral(val);

      case "number":
        return val + "";

      case "boolean":
        return val ? "true" : "false";

      default:
        if (val === null) {
          return "null";
        } else {
          throw new Error("Invalid Literal type");
        }
    }
  }

  /**
   * Prints string literals, handles format.
   */

  function _stringLiteral(val) {
    val = JSON.stringify(val);

    // escape illegal js but valid json unicode characters
    val = val.replace(/[\u000A\u000D\u2028\u2029]/g, function (c) {
      return "\\u" + ("0000" + c.charCodeAt(0).toString(16)).slice(-4);
    });

    if (this.format.quotes === "single") {
      // remove double quotes
      val = val.slice(1, -1);

      // unescape double quotes
      val = val.replace(/\\"/g, '"');

      // escape single quotes
      val = val.replace(/'/g, "\\'");

      // add single quotes
      val = "'" + val + "'";
    }

    return val;
  }
  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      exports.__esModule = true;
      exports.Identifier = Identifier;
      exports.RestElement = RestElement;
      exports.ObjectExpression = ObjectExpression;
      exports.Property = Property;
      exports.ArrayExpression = ArrayExpression;
      exports.Literal = Literal;
      exports._Literal = _Literal;
      exports._stringLiteral = _stringLiteral;_types = require("../../types");
      t = _interopRequireWildcard(_types);
      exports.SpreadElement = RestElement;
      exports.SpreadProperty = RestElement;exports.ObjectPattern = ObjectExpression;exports.ArrayPattern = ArrayExpression;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvZ2VuZXJhdGlvbi9nZW5lcmF0b3JzL3R5cGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7O0FBR0E7Ozs7Ozs7QUFhQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7Ozs7QUFVQSxXQUFTLFVBQVQsQ0FBb0IsSUFBcEIsRUFBMEI7QUFDeEIsU0FBSyxJQUFMLENBQVUsS0FBSyxJQUFMLENBQVYsQ0FEd0I7R0FBMUI7Ozs7OztBQVFBLFdBQVMsV0FBVCxDQUFxQixJQUFyQixFQUEyQixLQUEzQixFQUFrQztBQUNoQyxTQUFLLElBQUwsQ0FBVSxLQUFWLEVBRGdDO0FBRWhDLFVBQU0sS0FBTixDQUFZLEtBQUssUUFBTCxDQUFaLENBRmdDO0dBQWxDOzs7Ozs7Ozs7OztBQWlCQSxXQUFTLGdCQUFULENBQTBCLElBQTFCLEVBQWdDLEtBQWhDLEVBQXVDO0FBQ3JDLFFBQUksUUFBUSxLQUFLLFVBQUwsQ0FEeUI7O0FBR3JDLFNBQUssSUFBTCxDQUFVLEdBQVYsRUFIcUM7QUFJckMsVUFBTSxrQkFBTixHQUpxQzs7QUFNckMsUUFBSSxNQUFNLE1BQU4sRUFBYztBQUNoQixXQUFLLEtBQUws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SSxPQUFKLENBQVksTUFBWixFQUFvQixHQUFwQixDQUFOOzs7QUFMbUMsU0FRbkMsR0FBTSxJQUFJLE9BQUosQ0FBWSxJQUFaLEVBQWtCLEtBQWxCLENBQU47OztBQVJtQyxTQVduQyxHQUFNLE1BQU0sR0FBTixHQUFZLEdBQVosQ0FYNkI7S0FBckM7O0FBY0EsV0FBTyxHQUFQLENBdEIyQjtHQUE3Qjs7Ozs7Ozs7O0FBdkxBLGNBQVEsVUFBUixHQUFxQixJQUFyQjtBQUNBLGNBQVEsVUFBUixHQUFxQixVQUFyQjtBQUNBLGNBQVEsV0FBUixHQUFzQixXQUF0QjtBQUNBLGNBQVEsZ0JBQVIsR0FBMkIsZ0JBQTNCO0FBQ0EsY0FBUSxRQUFSLEdBQW1CLFFBQW5CO0FBQ0EsY0FBUSxlQUFSLEdBQTBCLGVBQTFCO0FBQ0EsY0FBUSxPQUFSLEdBQWtCLE9BQWxCO0FBQ0EsY0FBUSxRQUFSLEdBQW1CLFFBQW5CO0FBQ0EsY0FBUSxjQUFSLEdBQXlCLGNBQXpCLENBS0ksU0FBUyxRQUFRLGFBQVI7QUFFVCxVQUFJLHdCQUF3QixNQUF4QjtBQXdCUixjQUFRLGFBQVIsR0FBd0IsV0FBeEI7QUFDQSxjQUFRLGNBQVIsR0FBeUIsV0FBekIsQ0F5QkEsUUFBUSxhQUFSLEdBQXdCLGdCQUF4QixDQXVFQSxRQUFRLFlBQVIsR0FBdUIsZUFBdkIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi9nZW5lcmF0aW9uL2dlbmVyYXRvcnMvdHlwZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuLyogZXNsaW50IHF1b3RlczogMCAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuSWRlbnRpZmllciA9IElkZW50aWZpZXI7XG5leHBvcnRzLlJlc3RFbGVtZW50ID0gUmVzdEVsZW1lbnQ7XG5leHBvcnRzLk9iamVjdEV4cHJlc3Npb24gPSBPYmplY3RFeHByZXNzaW9uO1xuZXhwb3J0cy5Qcm9wZXJ0eSA9IFByb3BlcnR5O1xuZXhwb3J0cy5BcnJheUV4cHJlc3Npb24gPSBBcnJheUV4cHJlc3Npb247XG5leHBvcnRzLkxpdGVyYWwgPSBMaXRlcmFsO1xuZXhwb3J0cy5fTGl0ZXJhbCA9IF9MaXRlcmFsO1xuZXhwb3J0cy5fc3RyaW5nTGl0ZXJhbCA9IF9zdHJpbmdMaXRlcmFsO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uLy4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbi8qKlxuICogUHJpbnRzIElkZW50aWZpZXIsIHByaW50cyBuYW1lLlxuICovXG5cbmZ1bmN0aW9uIElkZW50aWZpZXIobm9kZSkge1xuICB0aGlzLnB1c2gobm9kZS5uYW1lKTtcbn1cblxuLyoqXG4gKiBQcmludHMgUmVzdEVsZW1lbnQsIHByaW50cyBhcmd1bWVudC5cbiAqL1xuXG5mdW5jdGlvbiBSZXN0RWxlbWVudChub2RlLCBwcmludCkge1xuICB0aGlzLnB1c2goXCIuLi5cIik7XG4gIHByaW50LnBsYWluKG5vZGUuYXJndW1lbnQpO1xufVxuXG4vKipcbiAqIEFsaWFzIFJlc3RFbGVtZW50IHByaW50ZXIgYXMgU3ByZWFkRWxlbWVudCxcbiAqIGFuZCBSZXN0RWxlbWVudCBwcmludGVyIGFzIFNwcmVhZFByb3BlcnR5LlxuICovXG5cbmV4cG9ydHMuU3ByZWFkRWxlbWVudCA9IFJlc3RFbGVtZW50O1xuZXhwb3J0cy5TcHJlYWRQcm9wZXJ0eSA9IFJlc3RFbGVtZW50O1xuXG4vKipcbiAqIFByaW50cyBPYmplY3RFeHByZXNzaW9uLCBwcmludHMgcHJvcGVydGllcy5cbiAqL1xuXG5mdW5jdGlvbiBPYmplY3RFeHByZXNzaW9uKG5vZGUsIHByaW50KSB7XG4gIHZhciBwcm9wcyA9IG5vZGUucHJvcGVydGllcztcblxuICB0aGlzLnB1c2goXCJ7XCIpO1xuICBwcmludC5wcmludElubmVyQ29tbWVudHMoKTtcblxuICBpZiAocHJvcHMubGVuZ3RoKSB7XG4gICAgdGhpcy5zcGFjZSgpO1xuICAgIHByaW50Lmxpc3QocHJvcHMsIHsgaW5kZW50OiB0cnVlIH0pO1xuICAgIHRoaXMuc3BhY2UoKTtcbiAgfVxuXG4gIHRoaXMucHVzaChcIn1cIik7XG59XG5cbi8qKlxuICogQWxpYXMgT2JqZWN0RXhwcmVzc2lvbiBwcmludGVyIGFzIE9iamVjdFBhdHRlcm4uXG4gKi9cblxuZXhwb3J0cy5PYmplY3RQYXR0ZXJuID0gT2JqZWN0RXhwcmVzc2lvbjtcblxuLyoqXG4gKiBQcmludHMgUHJvcGVydHksIHByaW50cyBkZWNvcmF0b3JzLCBrZXksIGFuZCB2YWx1ZSwgaGFuZGxlcyBraW5kLCBjb21wdXRlZCwgYW5kIHNob3J0aGFuZC5cbiAqL1xuXG5mdW5jdGlvbiBQcm9wZXJ0eShub2RlLCBwcmludCkge1xuICBwcmludC5saXN0KG5vZGUuZGVjb3JhdG9ycywgeyBzZXBhcmF0b3I6IFwiXCIgfSk7XG5cbiAgaWYgKG5vZGUubWV0aG9kIHx8IG5vZGUua2luZCA9PT0gXCJnZXRcIiB8fCBub2RlLmtpbmQgPT09IFwic2V0XCIpIHtcbiAgICB0aGlzLl9tZXRob2Qobm9kZSwgcHJpbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmIChub2RlLmNvbXB1dGVkKSB7XG4gICAgICB0aGlzLnB1c2goXCJbXCIpO1xuICAgICAgcHJpbnQucGxhaW4obm9kZS5rZXkpO1xuICAgICAgdGhpcy5wdXNoKFwiXVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcHJpbnQgYCh7IGZvbzogZm9vID0gNSB9ID0ge30pYCBhcyBgKHsgZm9vID0gNSB9ID0ge30pO2BcbiAgICAgIGlmICh0LmlzQXNzaWdubWVudFBhdHRlcm4obm9kZS52YWx1ZSkgJiYgdC5pc0lkZW50aWZpZXIobm9kZS5rZXkpICYmIG5vZGUua2V5Lm5hbWUgPT09IG5vZGUudmFsdWUubGVmdC5uYW1lKSB7XG4gICAgICAgIHByaW50LnBsYWluKG5vZGUudmFsdWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHByaW50LnBsYWluKG5vZGUua2V5KTtcblxuICAgICAgLy8gc2hvcnRoYW5kIVxuICAgICAgaWYgKG5vZGUuc2hvcnRoYW5kICYmIHQuaXNJZGVudGlmaWVyKG5vZGUua2V5KSAmJiB0LmlzSWRlbnRpZmllcihub2RlLnZhbHVlKSAmJiBub2RlLmtleS5uYW1lID09PSBub2RlLnZhbHVlLm5hbWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucHVzaChcIjpcIik7XG4gICAgdGhpcy5zcGFjZSgpO1xuICAgIHByaW50LnBsYWluKG5vZGUudmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogUHJpbnRzIEFycmF5RXhwcmVzc2lvbiwgcHJpbnRzIGVsZW1lbnRzLlxuICovXG5cbmZ1bmN0aW9uIEFycmF5RXhwcmVzc2lvbihub2RlLCBwcmludCkge1xuICB2YXIgZWxlbXMgPSBub2RlLmVsZW1lbnRzO1xuICB2YXIgbGVuID0gZWxlbXMubGVuZ3RoO1xuXG4gIHRoaXMucHVzaChcIltcIik7XG4gIHByaW50LnByaW50SW5uZXJDb21tZW50cygpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZWxlbSA9IGVsZW1zW2ldO1xuICAgIGlmIChlbGVtKSB7XG4gICAgICBpZiAoaSA+IDApIHRoaXMuc3BhY2UoKTtcbiAgICAgIHByaW50LnBsYWluKGVsZW0pO1xuICAgICAgaWYgKGkgPCBsZW4gLSAxKSB0aGlzLnB1c2goXCIsXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB0aGUgYXJyYXkgZXhwcmVzc2lvbiBlbmRzIHdpdGggYSBob2xlLCB0aGF0IGhvbGVcbiAgICAgIC8vIHdpbGwgYmUgaWdub3JlZCBieSB0aGUgaW50ZXJwcmV0ZXIsIGJ1dCBpZiBpdCBlbmRzIHdpdGhcbiAgICAgIC8vIHR3byAob3IgbW9yZSkgaG9sZXMsIHdlIG5lZWQgdG8gd3JpdGUgb3V0IHR3byAob3IgbW9yZSlcbiAgICAgIC8vIGNvbW1hcyBzbyB0aGF0IHRoZSByZXN1bHRpbmcgY29kZSBpcyBpbnRlcnByZXRlZCB3aXRoXG4gICAgICAvLyBib3RoIChhbGwpIG9mIHRoZSBob2xlcy5cbiAgICAgIHRoaXMucHVzaChcIixcIik7XG4gICAgfVxuICB9XG5cbiAgdGhpcy5wdXNoKFwiXVwiKTtcbn1cblxuLyoqXG4gKiBBbGlhcyBBcnJheUV4cHJlc3Npb24gcHJpbnRlciBhcyBBcnJheVBhdHRlcm4uXG4gKi9cblxuZXhwb3J0cy5BcnJheVBhdHRlcm4gPSBBcnJheUV4cHJlc3Npb247XG5cbi8qKlxuICogUHJpbnRzIExpdGVyYWwsIHByaW50cyB2YWx1ZSwgcmVnZXgsIHJhdywgaGFuZGxlcyB2YWwgdHlwZS5cbiAqL1xuXG5mdW5jdGlvbiBMaXRlcmFsKG5vZGUpIHtcbiAgdGhpcy5wdXNoKFwiXCIpOyAvLyBoYWNrOiBjYXRjaCB1cCBpbmRlbnRhdGlvblxuICB0aGlzLl9wdXNoKHRoaXMuX0xpdGVyYWwobm9kZSkpO1xufVxuXG5mdW5jdGlvbiBfTGl0ZXJhbChub2RlKSB7XG4gIHZhciB2YWwgPSBub2RlLnZhbHVlO1xuXG4gIGlmIChub2RlLnJlZ2V4KSB7XG4gICAgcmV0dXJuIFwiL1wiICsgbm9kZS5yZWdleC5wYXR0ZXJuICsgXCIvXCIgKyBub2RlLnJlZ2V4LmZsYWdzO1xuICB9XG5cbiAgLy8ganVzdCB1c2UgdGhlIHJhdyBwcm9wZXJ0eSBpZiBvdXIgY3VycmVudCB2YWx1ZSBpcyBlcXVpdmFsZW50IHRvIHRoZSBvbmUgd2UgZ290XG4gIC8vIHdoZW4gd2UgcG9wdWxhdGVkIHJhd1xuICBpZiAobm9kZS5yYXcgIT0gbnVsbCAmJiBub2RlLnJhd1ZhbHVlICE9IG51bGwgJiYgdmFsID09PSBub2RlLnJhd1ZhbHVlKSB7XG4gICAgcmV0dXJuIG5vZGUucmF3O1xuICB9XG5cbiAgc3dpdGNoICh0eXBlb2YgdmFsKSB7XG4gICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgcmV0dXJuIHRoaXMuX3N0cmluZ0xpdGVyYWwodmFsKTtcblxuICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgIHJldHVybiB2YWwgKyBcIlwiO1xuXG4gICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgIHJldHVybiB2YWwgPyBcInRydWVcIiA6IFwiZmFsc2VcIjtcblxuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBcIm51bGxcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgTGl0ZXJhbCB0eXBlXCIpO1xuICAgICAgfVxuICB9XG59XG5cbi8qKlxuICogUHJpbnRzIHN0cmluZyBsaXRlcmFscywgaGFuZGxlcyBmb3JtYXQuXG4gKi9cblxuZnVuY3Rpb24gX3N0cmluZ0xpdGVyYWwodmFsKSB7XG4gIHZhbCA9IEpTT04uc3RyaW5naWZ5KHZhbCk7XG5cbiAgLy8gZXNjYXBlIGlsbGVnYWwganMgYnV0IHZhbGlkIGpzb24gdW5pY29kZSBjaGFyYWN0ZXJzXG4gIHZhbCA9IHZhbC5yZXBsYWNlKC9bXFx1MDAwQVxcdTAwMERcXHUyMDI4XFx1MjAyOV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gXCJcXFxcdVwiICsgKFwiMDAwMFwiICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTQpO1xuICB9KTtcblxuICBpZiAodGhpcy5mb3JtYXQucXVvdGVzID09PSBcInNpbmdsZVwiKSB7XG4gICAgLy8gcmVtb3ZlIGRvdWJsZSBxdW90ZXNcbiAgICB2YWwgPSB2YWwuc2xpY2UoMSwgLTEpO1xuXG4gICAgLy8gdW5lc2NhcGUgZG91YmxlIHF1b3Rlc1xuICAgIHZhbCA9IHZhbC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJyk7XG5cbiAgICAvLyBlc2NhcGUgc2luZ2xlIHF1b3Rlc1xuICAgIHZhbCA9IHZhbC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIik7XG5cbiAgICAvLyBhZGQgc2luZ2xlIHF1b3Rlc1xuICAgIHZhbCA9IFwiJ1wiICsgdmFsICsgXCInXCI7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
