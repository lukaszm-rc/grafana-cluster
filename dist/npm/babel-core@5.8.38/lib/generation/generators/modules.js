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
   * Prints ImportSpecifier, prints imported and local.
   */

  function ImportSpecifier(node, print) {
    print.plain(node.imported);
    if (node.local && node.local.name !== node.imported.name) {
      this.push(" as ");
      print.plain(node.local);
    }
  }

  /**
   * Prints ImportDefaultSpecifier, prints local.
   */

  function ImportDefaultSpecifier(node, print) {
    print.plain(node.local);
  }

  /**
   * Prints ExportDefaultSpecifier, prints exported.
   */

  function ExportDefaultSpecifier(node, print) {
    print.plain(node.exported);
  }

  /**
   * Prints ExportSpecifier, prints local and exported.
   */

  function ExportSpecifier(node, print) {
    print.plain(node.local);
    if (node.exported && node.local.name !== node.exported.name) {
      this.push(" as ");
      print.plain(node.exported);
    }
  }

  /**
   * Prints ExportNamespaceSpecifier, prints exported.
   */

  function ExportNamespaceSpecifier(node, print) {
    this.push("* as ");
    print.plain(node.exported);
  }

  /**
   * Prints ExportAllDeclaration, prints exported and source.
   */

  function ExportAllDeclaration(node, print) {
    this.push("export *");
    if (node.exported) {
      this.push(" as ");
      print.plain(node.exported);
    }
    this.push(" from ");
    print.plain(node.source);
    this.semicolon();
  }

  /**
   * Prints ExportNamedDeclaration, delegates to ExportDeclaration.
   */

  function ExportNamedDeclaration(node, print) {
    this.push("export ");
    ExportDeclaration.call(this, node, print);
  }

  /**
   * Prints ExportDefaultDeclaration, delegates to ExportDeclaration.
   */

  function ExportDefaultDeclaration(node, print) {
    this.push("export default ");
    ExportDeclaration.call(this, node, print);
  }

  /**
   * Prints ExportDeclaration, prints specifiers, declration, and source.
   */

  function ExportDeclaration(node, print) {
    var specifiers = node.specifiers;

    if (node.declaration) {
      var declar = node.declaration;
      print.plain(declar);
      if (t.isStatement(declar) || t.isFunction(declar) || t.isClass(declar)) return;
    } else {
      if (node.exportKind === "type") {
        this.push("type ");
      }

      var first = specifiers[0];
      var hasSpecial = false;
      if (t.isExportDefaultSpecifier(first) || t.isExportNamespaceSpecifier(first)) {
        hasSpecial = true;
        print.plain(specifiers.shift());
        if (specifiers.length) {
          this.push(", ");
        }
      }

      if (specifiers.length || !specifiers.length && !hasSpecial) {
        this.push("{");
        if (specifiers.length) {
          this.space();
          print.join(specifiers, { separator: ", " });
          this.space();
        }
        this.push("}");
      }

      if (node.source) {
        this.push(" from ");
        print.plain(node.source);
      }
    }

    this.ensureSemicolon();
  }

  /**
   * Prints ImportDeclaration, prints specifiers and source, handles isType.
   */

  function ImportDeclaration(node, print) {
    this.push("import ");

    if (node.importKind === "type" || node.importKind === "typeof") {
      this.push(node.importKind + " ");
    }

    var specfiers = node.specifiers;
    if (specfiers && specfiers.length) {
      var first = node.specifiers[0];
      if (t.isImportDefaultSpecifier(first) || t.isImportNamespaceSpecifier(first)) {
        print.plain(node.specifiers.shift());
        if (node.specifiers.length) {
          this.push(", ");
        }
      }

      if (node.specifiers.length) {
        this.push("{");
        this.space();
        print.join(node.specifiers, { separator: ", " });
        this.space();
        this.push("}");
      }

      this.push(" from ");
    }

    print.plain(node.source);
    this.semicolon();
  }

  /**
   * Prints ImportNamespaceSpecifier, prints local.
   */

  function ImportNamespaceSpecifier(node, print) {
    this.push("* as ");
    print.plain(node.local);
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.ImportSpecifier = ImportSpecifier;
      exports.ImportDefaultSpecifier = ImportDefaultSpecifier;
      exports.ExportDefaultSpecifier = ExportDefaultSpecifier;
      exports.ExportSpecifier = ExportSpecifier;
      exports.ExportNamespaceSpecifier = ExportNamespaceSpecifier;
      exports.ExportAllDeclaration = ExportAllDeclaration;
      exports.ExportNamedDeclaration = ExportNamedDeclaration;
      exports.ExportDefaultDeclaration = ExportDefaultDeclaration;
      exports.ImportDeclaration = ImportDeclaration;
      exports.ImportNamespaceSpecifier = ImportNamespaceSpecifier;_types = require("../../types");
      t = _interopRequireWildcard(_types);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvZ2VuZXJhdGlvbi9nZW5lcmF0b3JzL21vZHVsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFlQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7Ozs7QUFVQSxXQUFTLGVBQVQsQ0FBeUIsSUFBekIsRUFBK0IsS0FBL0IsRUFBc0M7QUFDcEMsVUFBTSxLQUFOLENBQVksS0FBSyxRQUFMLENBQVosQ0FEb0M7QUFFcEMsUUFBSSxLQUFLLEtBQUwsSUFBYyxLQUFLLEtBQUwsQ0FBVyxJQUFYLEtBQW9CLEtBQUssUUFBTCxDQUFjLElBQWQsRUFBb0I7QUFDeEQsV0FBSyxJQUFMLENBQVUsTUFBVixFQUR3RDtBQUV4RCxZQUFNLEtBQU4sQ0FBWSxLQUFLLEtBQUwsQ0FBWixDQUZ3RDtLQUExRDtHQUZGOzs7Ozs7QUFZQSxXQUFTLHNCQUFULENBQWdDLElBQWhDLEVBQXNDLEtBQXRDLEVBQTZDO0FBQzNDLFVBQU0sS0FBTixDQUFZLEtBQUssS0FBTCxDQUFaLENBRDJDO0dBQTdDOzs7Ozs7QUFRQSxXQUFTLHNCQUFULENBQWdDLElBQWhDLEVBQXNDLEtBQXRDLEVBQTZD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QUFHMUIsY0FBTSxJQUFOLENBQVcsS0FBSyxVQUFMLEVBQWlCLEVBQUUsV0FBVyxJQUFYLEVBQTlCLEVBSDBCO0FBSTFCLGFBQUssS0FBTCxHQUowQjtBQUsxQixhQUFLLElBQUwsQ0FBVSxHQUFWLEVBTDBCO09BQTVCOztBQVFBLFdBQUssSUFBTCxDQUFVLFFBQVYsRUFqQmlDO0tBQW5DOztBQW9CQSxVQUFNLEtBQU4sQ0FBWSxLQUFLLE1BQUwsQ0FBWixDQTVCc0M7QUE2QnRDLFNBQUssU0FBTCxHQTdCc0M7R0FBeEM7Ozs7OztBQW9DQSxXQUFTLHdCQUFULENBQWtDLElBQWxDLEVBQXdDLEtBQXhDLEVBQStDO0FBQzdDLFNBQUssSUFBTCxDQUFVLE9BQVYsRUFENkM7QUFFN0MsVUFBTSxLQUFOLENBQVksS0FBSyxLQUFMLENBQVosQ0FGNkM7R0FBL0M7Ozs7QUExTEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCO0FBQ0EsY0FBUSxlQUFSLEdBQTBCLGVBQTFCO0FBQ0EsY0FBUSxzQkFBUixHQUFpQyxzQkFBakM7QUFDQSxjQUFRLHNCQUFSLEdBQWlDLHNCQUFqQztBQUNBLGNBQVEsZUFBUixHQUEwQixlQUExQjtBQUNBLGNBQVEsd0JBQVIsR0FBbUMsd0JBQW5DO0FBQ0EsY0FBUSxvQkFBUixHQUErQixvQkFBL0I7QUFDQSxjQUFRLHNCQUFSLEdBQWlDLHNCQUFqQztBQUNBLGNBQVEsd0JBQVIsR0FBbUMsd0JBQW5DO0FBQ0EsY0FBUSxpQkFBUixHQUE0QixpQkFBNUI7QUFDQSxjQUFRLHdCQUFSLEdBQW1DLHdCQUFuQyxDQUtJLFNBQVMsUUFBUSxhQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi9nZW5lcmF0aW9uL2dlbmVyYXRvcnMvbW9kdWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuSW1wb3J0U3BlY2lmaWVyID0gSW1wb3J0U3BlY2lmaWVyO1xuZXhwb3J0cy5JbXBvcnREZWZhdWx0U3BlY2lmaWVyID0gSW1wb3J0RGVmYXVsdFNwZWNpZmllcjtcbmV4cG9ydHMuRXhwb3J0RGVmYXVsdFNwZWNpZmllciA9IEV4cG9ydERlZmF1bHRTcGVjaWZpZXI7XG5leHBvcnRzLkV4cG9ydFNwZWNpZmllciA9IEV4cG9ydFNwZWNpZmllcjtcbmV4cG9ydHMuRXhwb3J0TmFtZXNwYWNlU3BlY2lmaWVyID0gRXhwb3J0TmFtZXNwYWNlU3BlY2lmaWVyO1xuZXhwb3J0cy5FeHBvcnRBbGxEZWNsYXJhdGlvbiA9IEV4cG9ydEFsbERlY2xhcmF0aW9uO1xuZXhwb3J0cy5FeHBvcnROYW1lZERlY2xhcmF0aW9uID0gRXhwb3J0TmFtZWREZWNsYXJhdGlvbjtcbmV4cG9ydHMuRXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uID0gRXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uO1xuZXhwb3J0cy5JbXBvcnREZWNsYXJhdGlvbiA9IEltcG9ydERlY2xhcmF0aW9uO1xuZXhwb3J0cy5JbXBvcnROYW1lc3BhY2VTcGVjaWZpZXIgPSBJbXBvcnROYW1lc3BhY2VTcGVjaWZpZXI7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxuLyoqXG4gKiBQcmludHMgSW1wb3J0U3BlY2lmaWVyLCBwcmludHMgaW1wb3J0ZWQgYW5kIGxvY2FsLlxuICovXG5cbmZ1bmN0aW9uIEltcG9ydFNwZWNpZmllcihub2RlLCBwcmludCkge1xuICBwcmludC5wbGFpbihub2RlLmltcG9ydGVkKTtcbiAgaWYgKG5vZGUubG9jYWwgJiYgbm9kZS5sb2NhbC5uYW1lICE9PSBub2RlLmltcG9ydGVkLm5hbWUpIHtcbiAgICB0aGlzLnB1c2goXCIgYXMgXCIpO1xuICAgIHByaW50LnBsYWluKG5vZGUubG9jYWwpO1xuICB9XG59XG5cbi8qKlxuICogUHJpbnRzIEltcG9ydERlZmF1bHRTcGVjaWZpZXIsIHByaW50cyBsb2NhbC5cbiAqL1xuXG5mdW5jdGlvbiBJbXBvcnREZWZhdWx0U3BlY2lmaWVyKG5vZGUsIHByaW50KSB7XG4gIHByaW50LnBsYWluKG5vZGUubG9jYWwpO1xufVxuXG4vKipcbiAqIFByaW50cyBFeHBvcnREZWZhdWx0U3BlY2lmaWVyLCBwcmludHMgZXhwb3J0ZWQuXG4gKi9cblxuZnVuY3Rpb24gRXhwb3J0RGVmYXVsdFNwZWNpZmllcihub2RlLCBwcmludCkge1xuICBwcmludC5wbGFpbihub2RlLmV4cG9ydGVkKTtcbn1cblxuLyoqXG4gKiBQcmludHMgRXhwb3J0U3BlY2lmaWVyLCBwcmludHMgbG9jYWwgYW5kIGV4cG9ydGVkLlxuICovXG5cbmZ1bmN0aW9uIEV4cG9ydFNwZWNpZmllcihub2RlLCBwcmludCkge1xuICBwcmludC5wbGFpbihub2RlLmxvY2FsKTtcbiAgaWYgKG5vZGUuZXhwb3J0ZWQgJiYgbm9kZS5sb2NhbC5uYW1lICE9PSBub2RlLmV4cG9ydGVkLm5hbWUpIHtcbiAgICB0aGlzLnB1c2goXCIgYXMgXCIpO1xuICAgIHByaW50LnBsYWluKG5vZGUuZXhwb3J0ZWQpO1xuICB9XG59XG5cbi8qKlxuICogUHJpbnRzIEV4cG9ydE5hbWVzcGFjZVNwZWNpZmllciwgcHJpbnRzIGV4cG9ydGVkLlxuICovXG5cbmZ1bmN0aW9uIEV4cG9ydE5hbWVzcGFjZVNwZWNpZmllcihub2RlLCBwcmludCkge1xuICB0aGlzLnB1c2goXCIqIGFzIFwiKTtcbiAgcHJpbnQucGxhaW4obm9kZS5leHBvcnRlZCk7XG59XG5cbi8qKlxuICogUHJpbnRzIEV4cG9ydEFsbERlY2xhcmF0aW9uLCBwcmludHMgZXhwb3J0ZWQgYW5kIHNvdXJjZS5cbiAqL1xuXG5mdW5jdGlvbiBFeHBvcnRBbGxEZWNsYXJhdGlvbihub2RlLCBwcmludCkge1xuICB0aGlzLnB1c2goXCJleHBvcnQgKlwiKTtcbiAgaWYgKG5vZGUuZXhwb3J0ZWQpIHtcbiAgICB0aGlzLnB1c2goXCIgYXMgXCIpO1xuICAgIHByaW50LnBsYWluKG5vZGUuZXhwb3J0ZWQpO1xuICB9XG4gIHRoaXMucHVzaChcIiBmcm9tIFwiKTtcbiAgcHJpbnQucGxhaW4obm9kZS5zb3VyY2UpO1xuICB0aGlzLnNlbWljb2xvbigpO1xufVxuXG4vKipcbiAqIFByaW50cyBFeHBvcnROYW1lZERlY2xhcmF0aW9uLCBkZWxlZ2F0ZXMgdG8gRXhwb3J0RGVjbGFyYXRpb24uXG4gKi9cblxuZnVuY3Rpb24gRXhwb3J0TmFtZWREZWNsYXJhdGlvbihub2RlLCBwcmludCkge1xuICB0aGlzLnB1c2goXCJleHBvcnQgXCIpO1xuICBFeHBvcnREZWNsYXJhdGlvbi5jYWxsKHRoaXMsIG5vZGUsIHByaW50KTtcbn1cblxuLyoqXG4gKiBQcmludHMgRXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uLCBkZWxlZ2F0ZXMgdG8gRXhwb3J0RGVjbGFyYXRpb24uXG4gKi9cblxuZnVuY3Rpb24gRXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uKG5vZGUsIHByaW50KSB7XG4gIHRoaXMucHVzaChcImV4cG9ydCBkZWZhdWx0IFwiKTtcbiAgRXhwb3J0RGVjbGFyYXRpb24uY2FsbCh0aGlzLCBub2RlLCBwcmludCk7XG59XG5cbi8qKlxuICogUHJpbnRzIEV4cG9ydERlY2xhcmF0aW9uLCBwcmludHMgc3BlY2lmaWVycywgZGVjbHJhdGlvbiwgYW5kIHNvdXJjZS5cbiAqL1xuXG5mdW5jdGlvbiBFeHBvcnREZWNsYXJhdGlvbihub2RlLCBwcmludCkge1xuICB2YXIgc3BlY2lmaWVycyA9IG5vZGUuc3BlY2lmaWVycztcblxuICBpZiAobm9kZS5kZWNsYXJhdGlvbikge1xuICAgIHZhciBkZWNsYXIgPSBub2RlLmRlY2xhcmF0aW9uO1xuICAgIHByaW50LnBsYWluKGRlY2xhcik7XG4gICAgaWYgKHQuaXNTdGF0ZW1lbnQoZGVjbGFyKSB8fCB0LmlzRnVuY3Rpb24oZGVjbGFyKSB8fCB0LmlzQ2xhc3MoZGVjbGFyKSkgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIGlmIChub2RlLmV4cG9ydEtpbmQgPT09IFwidHlwZVwiKSB7XG4gICAgICB0aGlzLnB1c2goXCJ0eXBlIFwiKTtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3QgPSBzcGVjaWZpZXJzWzBdO1xuICAgIHZhciBoYXNTcGVjaWFsID0gZmFsc2U7XG4gICAgaWYgKHQuaXNFeHBvcnREZWZhdWx0U3BlY2lmaWVyKGZpcnN0KSB8fCB0LmlzRXhwb3J0TmFtZXNwYWNlU3BlY2lmaWVyKGZpcnN0KSkge1xuICAgICAgaGFzU3BlY2lhbCA9IHRydWU7XG4gICAgICBwcmludC5wbGFpbihzcGVjaWZpZXJzLnNoaWZ0KCkpO1xuICAgICAgaWYgKHNwZWNpZmllcnMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMucHVzaChcIiwgXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzcGVjaWZpZXJzLmxlbmd0aCB8fCAhc3BlY2lmaWVycy5sZW5ndGggJiYgIWhhc1NwZWNpYWwpIHtcbiAgICAgIHRoaXMucHVzaChcIntcIik7XG4gICAgICBpZiAoc3BlY2lmaWVycy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zcGFjZSgpO1xuICAgICAgICBwcmludC5qb2luKHNwZWNpZmllcnMsIHsgc2VwYXJhdG9yOiBcIiwgXCIgfSk7XG4gICAgICAgIHRoaXMuc3BhY2UoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHVzaChcIn1cIik7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuc291cmNlKSB7XG4gICAgICB0aGlzLnB1c2goXCIgZnJvbSBcIik7XG4gICAgICBwcmludC5wbGFpbihub2RlLnNvdXJjZSk7XG4gICAgfVxuICB9XG5cbiAgdGhpcy5lbnN1cmVTZW1pY29sb24oKTtcbn1cblxuLyoqXG4gKiBQcmludHMgSW1wb3J0RGVjbGFyYXRpb24sIHByaW50cyBzcGVjaWZpZXJzIGFuZCBzb3VyY2UsIGhhbmRsZXMgaXNUeXBlLlxuICovXG5cbmZ1bmN0aW9uIEltcG9ydERlY2xhcmF0aW9uKG5vZGUsIHByaW50KSB7XG4gIHRoaXMucHVzaChcImltcG9ydCBcIik7XG5cbiAgaWYgKG5vZGUuaW1wb3J0S2luZCA9PT0gXCJ0eXBlXCIgfHwgbm9kZS5pbXBvcnRLaW5kID09PSBcInR5cGVvZlwiKSB7XG4gICAgdGhpcy5wdXNoKG5vZGUuaW1wb3J0S2luZCArIFwiIFwiKTtcbiAgfVxuXG4gIHZhciBzcGVjZmllcnMgPSBub2RlLnNwZWNpZmllcnM7XG4gIGlmIChzcGVjZmllcnMgJiYgc3BlY2ZpZXJzLmxlbmd0aCkge1xuICAgIHZhciBmaXJzdCA9IG5vZGUuc3BlY2lmaWVyc1swXTtcbiAgICBpZiAodC5pc0ltcG9ydERlZmF1bHRTcGVjaWZpZXIoZmlyc3QpIHx8IHQuaXNJbXBvcnROYW1lc3BhY2VTcGVjaWZpZXIoZmlyc3QpKSB7XG4gICAgICBwcmludC5wbGFpbihub2RlLnNwZWNpZmllcnMuc2hpZnQoKSk7XG4gICAgICBpZiAobm9kZS5zcGVjaWZpZXJzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnB1c2goXCIsIFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobm9kZS5zcGVjaWZpZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5wdXNoKFwie1wiKTtcbiAgICAgIHRoaXMuc3BhY2UoKTtcbiAgICAgIHByaW50LmpvaW4obm9kZS5zcGVjaWZpZXJzLCB7IHNlcGFyYXRvcjogXCIsIFwiIH0pO1xuICAgICAgdGhpcy5zcGFjZSgpO1xuICAgICAgdGhpcy5wdXNoKFwifVwiKTtcbiAgICB9XG5cbiAgICB0aGlzLnB1c2goXCIgZnJvbSBcIik7XG4gIH1cblxuICBwcmludC5wbGFpbihub2RlLnNvdXJjZSk7XG4gIHRoaXMuc2VtaWNvbG9uKCk7XG59XG5cbi8qKlxuICogUHJpbnRzIEltcG9ydE5hbWVzcGFjZVNwZWNpZmllciwgcHJpbnRzIGxvY2FsLlxuICovXG5cbmZ1bmN0aW9uIEltcG9ydE5hbWVzcGFjZVNwZWNpZmllcihub2RlLCBwcmludCkge1xuICB0aGlzLnB1c2goXCIqIGFzIFwiKTtcbiAgcHJpbnQucGxhaW4obm9kZS5sb2NhbCk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
