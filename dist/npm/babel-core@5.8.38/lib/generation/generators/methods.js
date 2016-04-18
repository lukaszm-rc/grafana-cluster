/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _types, t;

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
   * Prints nodes with params, prints typeParameters, params, and returnType, handles optional params.
   */

  function _params(node, print) {
    // istanbul ignore next

    var _this = this;

    print.plain(node.typeParameters);
    this.push("(");
    print.list(node.params, {
      iterator: function iterator(node) {
        if (node.optional) _this.push("?");
        print.plain(node.typeAnnotation);
      }
    });
    this.push(")");

    if (node.returnType) {
      print.plain(node.returnType);
    }
  }

  /**
   * Prints method-like nodes, prints key, value, and body, handles async, generator, computed, and get or set.
   */

  function _method(node, print) {
    var value = node.value;
    var kind = node.kind;
    var key = node.key;

    if (kind === "method" || kind === "init") {
      if (value.generator) {
        this.push("*");
      }
    }

    if (kind === "get" || kind === "set") {
      this.push(kind + " ");
    }

    if (value.async) this.push("async ");

    if (node.computed) {
      this.push("[");
      print.plain(key);
      this.push("]");
    } else {
      print.plain(key);
    }

    this._params(value, print);
    this.space();
    print.plain(value.body);
  }

  /**
   * Prints FunctionExpression, prints id and body, handles async and generator.
   */

  function FunctionExpression(node, print) {
    if (node.async) this.push("async ");
    this.push("function");
    if (node.generator) this.push("*");

    if (node.id) {
      this.push(" ");
      print.plain(node.id);
    } else {
      this.space();
    }

    this._params(node, print);
    this.space();
    print.plain(node.body);
  }

  /**
   * Alias FunctionExpression printer as FunctionDeclaration.
   */

  /**
   * Prints ArrowFunctionExpression, prints params and body, handles async.
   * Leaves out parentheses when single param.
   */

  function ArrowFunctionExpression(node, print) {
    if (node.async) this.push("async ");

    if (node.params.length === 1 && t.isIdentifier(node.params[0])) {
      print.plain(node.params[0]);
    } else {
      this._params(node, print);
    }

    this.push(" => ");

    var bodyNeedsParens = t.isObjectExpression(node.body);

    if (bodyNeedsParens) {
      this.push("(");
    }

    print.plain(node.body);

    if (bodyNeedsParens) {
      this.push(")");
    }
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports._params = _params;
      exports._method = _method;
      exports.FunctionExpression = FunctionExpression;
      exports.ArrowFunctionExpression = ArrowFunctionExpression;_types = require("../../types");
      t = _interopRequireWildcard(_types);
      exports.FunctionDeclaration = FunctionExpression;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvZ2VuZXJhdGlvbi9nZW5lcmF0b3JzL21ldGhvZHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFTQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7Ozs7QUFVQSxXQUFTLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUIsS0FBdkIsRUFBOEI7OztBQUc1QixRQUFJLFFBQVEsSUFBUixDQUh3Qjs7QUFLNUIsVUFBTSxLQUFOLENBQVksS0FBSyxjQUFMLENBQVosQ0FMNEI7QUFNNUIsU0FBSyxJQUFMLENBQVUsR0FBVixFQU40QjtBQU81QixVQUFNLElBQU4sQ0FBVyxLQUFLLE1BQUwsRUFBYTtBQUN0QixnQkFBVSxTQUFTLFFBQVQsQ0FBa0IsSUFBbEIsRUFBd0I7QUFDaEMsWUFBSSxLQUFLLFFBQUwsRUFBZSxNQUFNLElBQU4sQ0FBVyxHQUFYLEVBQW5CO0FBQ0EsY0FBTSxLQUFOLENBQVksS0FBSyxjQUFMLENBQVosQ0FGZ0M7T0FBeEI7S0FEWixFQVA0QjtBQWE1QixTQUFLLElBQUwsQ0FBVSxHQUFWLEVBYjRCOztBQWU1QixRQUFJLEtBQUssVUFBTCxFQUFpQjtBQUNu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LEdBQWtCLE9BQWxCO0FBQ0EsY0FBUSxPQUFSLEdBQWtCLE9BQWxCO0FBQ0EsY0FBUSxrQkFBUixHQUE2QixrQkFBN0I7QUFDQSxjQUFRLHVCQUFSLEdBQWtDLHVCQUFsQyxDQUtJLFNBQVMsUUFBUSxhQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEI7QUFxRlIsY0FBUSxtQkFBUixHQUE4QixrQkFBOUIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi9nZW5lcmF0aW9uL2dlbmVyYXRvcnMvbWV0aG9kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuX3BhcmFtcyA9IF9wYXJhbXM7XG5leHBvcnRzLl9tZXRob2QgPSBfbWV0aG9kO1xuZXhwb3J0cy5GdW5jdGlvbkV4cHJlc3Npb24gPSBGdW5jdGlvbkV4cHJlc3Npb247XG5leHBvcnRzLkFycm93RnVuY3Rpb25FeHByZXNzaW9uID0gQXJyb3dGdW5jdGlvbkV4cHJlc3Npb247XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxuLyoqXG4gKiBQcmludHMgbm9kZXMgd2l0aCBwYXJhbXMsIHByaW50cyB0eXBlUGFyYW1ldGVycywgcGFyYW1zLCBhbmQgcmV0dXJuVHlwZSwgaGFuZGxlcyBvcHRpb25hbCBwYXJhbXMuXG4gKi9cblxuZnVuY3Rpb24gX3BhcmFtcyhub2RlLCBwcmludCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgcHJpbnQucGxhaW4obm9kZS50eXBlUGFyYW1ldGVycyk7XG4gIHRoaXMucHVzaChcIihcIik7XG4gIHByaW50Lmxpc3Qobm9kZS5wYXJhbXMsIHtcbiAgICBpdGVyYXRvcjogZnVuY3Rpb24gaXRlcmF0b3Iobm9kZSkge1xuICAgICAgaWYgKG5vZGUub3B0aW9uYWwpIF90aGlzLnB1c2goXCI/XCIpO1xuICAgICAgcHJpbnQucGxhaW4obm9kZS50eXBlQW5ub3RhdGlvbik7XG4gICAgfVxuICB9KTtcbiAgdGhpcy5wdXNoKFwiKVwiKTtcblxuICBpZiAobm9kZS5yZXR1cm5UeXBlKSB7XG4gICAgcHJpbnQucGxhaW4obm9kZS5yZXR1cm5UeXBlKTtcbiAgfVxufVxuXG4vKipcbiAqIFByaW50cyBtZXRob2QtbGlrZSBub2RlcywgcHJpbnRzIGtleSwgdmFsdWUsIGFuZCBib2R5LCBoYW5kbGVzIGFzeW5jLCBnZW5lcmF0b3IsIGNvbXB1dGVkLCBhbmQgZ2V0IG9yIHNldC5cbiAqL1xuXG5mdW5jdGlvbiBfbWV0aG9kKG5vZGUsIHByaW50KSB7XG4gIHZhciB2YWx1ZSA9IG5vZGUudmFsdWU7XG4gIHZhciBraW5kID0gbm9kZS5raW5kO1xuICB2YXIga2V5ID0gbm9kZS5rZXk7XG5cbiAgaWYgKGtpbmQgPT09IFwibWV0aG9kXCIgfHwga2luZCA9PT0gXCJpbml0XCIpIHtcbiAgICBpZiAodmFsdWUuZ2VuZXJhdG9yKSB7XG4gICAgICB0aGlzLnB1c2goXCIqXCIpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChraW5kID09PSBcImdldFwiIHx8IGtpbmQgPT09IFwic2V0XCIpIHtcbiAgICB0aGlzLnB1c2goa2luZCArIFwiIFwiKTtcbiAgfVxuXG4gIGlmICh2YWx1ZS5hc3luYykgdGhpcy5wdXNoKFwiYXN5bmMgXCIpO1xuXG4gIGlmIChub2RlLmNvbXB1dGVkKSB7XG4gICAgdGhpcy5wdXNoKFwiW1wiKTtcbiAgICBwcmludC5wbGFpbihrZXkpO1xuICAgIHRoaXMucHVzaChcIl1cIik7XG4gIH0gZWxzZSB7XG4gICAgcHJpbnQucGxhaW4oa2V5KTtcbiAgfVxuXG4gIHRoaXMuX3BhcmFtcyh2YWx1ZSwgcHJpbnQpO1xuICB0aGlzLnNwYWNlKCk7XG4gIHByaW50LnBsYWluKHZhbHVlLmJvZHkpO1xufVxuXG4vKipcbiAqIFByaW50cyBGdW5jdGlvbkV4cHJlc3Npb24sIHByaW50cyBpZCBhbmQgYm9keSwgaGFuZGxlcyBhc3luYyBhbmQgZ2VuZXJhdG9yLlxuICovXG5cbmZ1bmN0aW9uIEZ1bmN0aW9uRXhwcmVzc2lvbihub2RlLCBwcmludCkge1xuICBpZiAobm9kZS5hc3luYykgdGhpcy5wdXNoKFwiYXN5bmMgXCIpO1xuICB0aGlzLnB1c2goXCJmdW5jdGlvblwiKTtcbiAgaWYgKG5vZGUuZ2VuZXJhdG9yKSB0aGlzLnB1c2goXCIqXCIpO1xuXG4gIGlmIChub2RlLmlkKSB7XG4gICAgdGhpcy5wdXNoKFwiIFwiKTtcbiAgICBwcmludC5wbGFpbihub2RlLmlkKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnNwYWNlKCk7XG4gIH1cblxuICB0aGlzLl9wYXJhbXMobm9kZSwgcHJpbnQpO1xuICB0aGlzLnNwYWNlKCk7XG4gIHByaW50LnBsYWluKG5vZGUuYm9keSk7XG59XG5cbi8qKlxuICogQWxpYXMgRnVuY3Rpb25FeHByZXNzaW9uIHByaW50ZXIgYXMgRnVuY3Rpb25EZWNsYXJhdGlvbi5cbiAqL1xuXG5leHBvcnRzLkZ1bmN0aW9uRGVjbGFyYXRpb24gPSBGdW5jdGlvbkV4cHJlc3Npb247XG5cbi8qKlxuICogUHJpbnRzIEFycm93RnVuY3Rpb25FeHByZXNzaW9uLCBwcmludHMgcGFyYW1zIGFuZCBib2R5LCBoYW5kbGVzIGFzeW5jLlxuICogTGVhdmVzIG91dCBwYXJlbnRoZXNlcyB3aGVuIHNpbmdsZSBwYXJhbS5cbiAqL1xuXG5mdW5jdGlvbiBBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihub2RlLCBwcmludCkge1xuICBpZiAobm9kZS5hc3luYykgdGhpcy5wdXNoKFwiYXN5bmMgXCIpO1xuXG4gIGlmIChub2RlLnBhcmFtcy5sZW5ndGggPT09IDEgJiYgdC5pc0lkZW50aWZpZXIobm9kZS5wYXJhbXNbMF0pKSB7XG4gICAgcHJpbnQucGxhaW4obm9kZS5wYXJhbXNbMF0pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX3BhcmFtcyhub2RlLCBwcmludCk7XG4gIH1cblxuICB0aGlzLnB1c2goXCIgPT4gXCIpO1xuXG4gIHZhciBib2R5TmVlZHNQYXJlbnMgPSB0LmlzT2JqZWN0RXhwcmVzc2lvbihub2RlLmJvZHkpO1xuXG4gIGlmIChib2R5TmVlZHNQYXJlbnMpIHtcbiAgICB0aGlzLnB1c2goXCIoXCIpO1xuICB9XG5cbiAgcHJpbnQucGxhaW4obm9kZS5ib2R5KTtcblxuICBpZiAoYm9keU5lZWRzUGFyZW5zKSB7XG4gICAgdGhpcy5wdXNoKFwiKVwiKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
