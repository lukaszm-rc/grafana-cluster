/* */
"format cjs";
// https://github.com/leebyron/ecmascript-more-export-from

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

  /**
   * [Please add a description.]
   */

  function build(node, nodes, scope) {
    var first = node.specifiers[0];
    if (!t.isExportNamespaceSpecifier(first) && !t.isExportDefaultSpecifier(first)) return;

    var specifier = node.specifiers.shift();
    var uid = scope.generateUidIdentifier(specifier.exported.name);

    var newSpecifier;
    if (t.isExportNamespaceSpecifier(specifier)) {
      newSpecifier = t.importNamespaceSpecifier(uid);
    } else {
      newSpecifier = t.importDefaultSpecifier(uid);
    }

    nodes.push(t.importDeclaration([newSpecifier], node.source));
    nodes.push(t.exportNamedDeclaration(null, [t.exportSpecifier(uid, specifier.exported)]));

    build(node, nodes, scope);
  }

  /**
   * [Please add a description.]
   */

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_types = require("../../../types");
      t = _interopRequireWildcard(_types);
      metadata = {
        stage: 1
      };


      exports.metadata = metadata;visitor = {

        /**
         * [Please add a description.]
         */

        ExportNamedDeclaration: function ExportNamedDeclaration(node, parent, scope) {
          var nodes = [];
          build(node, nodes, scope);
          if (!nodes.length) return;

          if (node.specifiers.length >= 1) {
            nodes.push(node);
          }

          return nodes;
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNy9leHBvcnQtZXh0ZW5zaW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7OztBQUdBOzs7Ozs7O0FBS0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7Ozs7O0FBZUEsV0FBUyxLQUFULENBQWUsSUFBZixFQUFxQixLQUFyQixFQUE0QixLQUE1QixFQUFtQztBQUNqQyxRQUFJLFFBQVEsS0FBSyxVQUFMLENBQWdCLENBQWhCLENBQVIsQ0FENkI7QUFFakMsUUFBSSxDQUFDLEVBQUUsMEJBQUYsQ0FBNkIsS0FBN0IsQ0FBRCxJQUF3QyxDQUFDLEVBQUUsd0JBQUYsQ0FBMkIsS0FBM0IsQ0FBRCxFQUFvQyxPQUFoRjs7QUFFQSxRQUFJLFlBQVksS0FBSyxVQUFMLENBQWdCLEtBQWhCLEVBQVosQ0FKNkI7QUFLakMsUUFBSSxNQUFNLE1BQU0scUJBQU4sQ0FBNEIsVUFBVSxRQUFWLENBQW1CLElBQW5CLENBQWxDLENBTDZCOztBQU9qQyxRQUFJLFlBQUosQ0FQaUM7QUFRakMsUUFBSSxFQUFFLDBCQUFGLENBQTZCLFNBQTdCLENBQUosRUFBNkM7QUFDM0MscUJBQWUsRUFBRSx3QkFBRixDQUEyQixHQUEzQixDQUFmLENBRDJDO0tBQTdDLE1BRU87QUFDTCxxQkFBZSxFQUFFLHNCQUFGLENBQXlCLEdBQXpCLENBQWYsQ0FESztLQUZQOztBQU1BLFVBQU0sSUFBTixDQUFXLEVBQUUsaUJBQUYsQ0FBb0IsQ0FBQyxZQUFELENBQXBCLEVBQW9DLEtBQUssTUFBTCxDQUEvQyxFQWRpQztBQWVqQyxVQUFNLElBQU4sQ0FBVyxFQUFFLHNCQUFGLENBQXlCLElBQXpCLEVBQStCLENBQUMsRUFBRSxlQUFGLENBQWtCLEdBQWxCLEVBQXVCLFVBQVUsUUFBVixDQUF4QixDQUEvQixDQUFYLEVBZmlDOztBQWlCakMsVUFBTSxJQUFOLEVBQVksS0FBWixFQUFtQixLQUFuQixFQWpCaUM7R0FBbkM7Ozs7Ozs7OztBQWxCQSxjQUFRLFVBQVIsR0FBcUIsSUFBckIsQ0FLSSxTQUFTLFFBQVEsZ0JBQVI7QUFFVCxVQUFJLHdCQUF3QixNQUF4QjtBQUVKLGlCQUFXO0FBQ2IsZUFBTyxDQUFQOzs7O0FBR0YsY0FBUSxRQUFSLEdBQW1CLFFBQW5CLENBNkJJLFVBQVU7Ozs7OztBQU1aLGdDQUF3QixTQUFTLHNCQUFULENBQWdDLElBQWhDLEVBQXNDLE1BQXRDLEVBQThDLEtBQTlDLEVBQXFEO0FBQzNFLGNBQUksUUFBUSxFQUFSLENBRHVFO0FBRTNFLGdCQUFNLElBQU4sRUFBWSxLQUFaLEVBQW1CLEtBQW5CLEVBRjJFO0FBRzNFLGNBQUksQ0FBQyxNQUFNLE1BQU4sRUFBYyxPQUFuQjs7QUFFQSxjQUFJLEtBQUssVUFBTCxDQUFnQixNQUFoQixJQUEwQixDQUExQixFQUE2QjtBQUMvQixrQkFBTSxJQUFOLENBQVcsSUFBWCxFQUQrQjtXQUFqQzs7QUFJQSxpQkFBTyxLQUFQLENBVDJFO1NBQXJEOzs7QUFZMUIsY0FBUSxPQUFSLEdBQWtCLE9BQWxCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNy9leHBvcnQtZXh0ZW5zaW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vbGVlYnlyb24vZWNtYXNjcmlwdC1tb3JlLWV4cG9ydC1mcm9tXG5cblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uLy4uLy4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbnZhciBtZXRhZGF0YSA9IHtcbiAgc3RhZ2U6IDFcbn07XG5cbmV4cG9ydHMubWV0YWRhdGEgPSBtZXRhZGF0YTtcbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gYnVpbGQobm9kZSwgbm9kZXMsIHNjb3BlKSB7XG4gIHZhciBmaXJzdCA9IG5vZGUuc3BlY2lmaWVyc1swXTtcbiAgaWYgKCF0LmlzRXhwb3J0TmFtZXNwYWNlU3BlY2lmaWVyKGZpcnN0KSAmJiAhdC5pc0V4cG9ydERlZmF1bHRTcGVjaWZpZXIoZmlyc3QpKSByZXR1cm47XG5cbiAgdmFyIHNwZWNpZmllciA9IG5vZGUuc3BlY2lmaWVycy5zaGlmdCgpO1xuICB2YXIgdWlkID0gc2NvcGUuZ2VuZXJhdGVVaWRJZGVudGlmaWVyKHNwZWNpZmllci5leHBvcnRlZC5uYW1lKTtcblxuICB2YXIgbmV3U3BlY2lmaWVyO1xuICBpZiAodC5pc0V4cG9ydE5hbWVzcGFjZVNwZWNpZmllcihzcGVjaWZpZXIpKSB7XG4gICAgbmV3U3BlY2lmaWVyID0gdC5pbXBvcnROYW1lc3BhY2VTcGVjaWZpZXIodWlkKTtcbiAgfSBlbHNlIHtcbiAgICBuZXdTcGVjaWZpZXIgPSB0LmltcG9ydERlZmF1bHRTcGVjaWZpZXIodWlkKTtcbiAgfVxuXG4gIG5vZGVzLnB1c2godC5pbXBvcnREZWNsYXJhdGlvbihbbmV3U3BlY2lmaWVyXSwgbm9kZS5zb3VyY2UpKTtcbiAgbm9kZXMucHVzaCh0LmV4cG9ydE5hbWVkRGVjbGFyYXRpb24obnVsbCwgW3QuZXhwb3J0U3BlY2lmaWVyKHVpZCwgc3BlY2lmaWVyLmV4cG9ydGVkKV0pKTtcblxuICBidWlsZChub2RlLCBub2Rlcywgc2NvcGUpO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciB2aXNpdG9yID0ge1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRXhwb3J0TmFtZWREZWNsYXJhdGlvbjogZnVuY3Rpb24gRXhwb3J0TmFtZWREZWNsYXJhdGlvbihub2RlLCBwYXJlbnQsIHNjb3BlKSB7XG4gICAgdmFyIG5vZGVzID0gW107XG4gICAgYnVpbGQobm9kZSwgbm9kZXMsIHNjb3BlKTtcbiAgICBpZiAoIW5vZGVzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgaWYgKG5vZGUuc3BlY2lmaWVycy5sZW5ndGggPj0gMSkge1xuICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbn07XG5leHBvcnRzLnZpc2l0b3IgPSB2aXNpdG9yOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
