/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _regenerator, _regenerator2, _types, t, NodePath, metadata, visitor;

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

  // istanbul ignore next

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }

  // Given a Babel NodePath, return an ast-types NodePath that includes full
  // ancestry information (up to and including the Program node). This is
  // complicated by having to include intermediate objects like blockStatement.body
  // arrays, in addition to Node objects.
  function convertNodePath(path) {
    var programNode;
    var keysAlongPath = [];

    while (path) {
      var pp = path.parentPath;
      var parentNode = pp && pp.node;
      if (parentNode) {
        keysAlongPath.push(path.key);

        if (parentNode !== path.container) {
          var found = Object.keys(parentNode).some(function (listKey) {
            if (parentNode[listKey] === path.container) {
              keysAlongPath.push(listKey);
              return true;
            }
          });

          if (!found) {
            throw new Error("Failed to find container object in parent node");
          }
        }

        if (t.isProgram(parentNode)) {
          programNode = parentNode;
          break;
        }
      }

      path = pp;
    }

    if (!programNode) {
      throw new Error("Failed to find root Program node");
    }

    var nodePath = new NodePath(programNode);

    while (keysAlongPath.length > 0) {
      nodePath = nodePath.get(keysAlongPath.pop());
    }

    return nodePath;
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_regenerator = require("regenerator");
      _regenerator2 = _interopRequireDefault(_regenerator);
      _types = require("../../../types");
      t = _interopRequireWildcard(_types);
      NodePath = _regenerator2["default"].types.NodePath;
      metadata = {
        group: "builtin-advanced"
      };


      exports.metadata = metadata;
      /**
       * [Please add a description.]
       */

      visitor = {

        /**
         * [Please add a description.]
         */

        Function: {
          exit: function exit(node) {
            if (node.async || node.generator) {
              // Although this code transforms only the subtree rooted at the given
              // Function node, that node might contain other generator functions
              // that will also be transformed. It might help performance to ignore
              // nested functions, and rely on the traversal to visit them later,
              // but that's a small optimization. Starting here instead of at the
              // root of the AST is the key optimization, since huge async/generator
              // functions are relatively rare.
              _regenerator2["default"].transform(convertNodePath(this));
            }
          }
        }
      };


      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL290aGVyL3JlZ2VuZXJhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBS0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7OztBQUlBLFdBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLEdBQXhCLEdBQThCLEVBQUUsV0FBVyxHQUFYLEVBQWhDLENBQVQ7R0FBckM7Ozs7OztBQW9EQSxXQUFTLGVBQVQsQ0FBeUIsSUFBekIsRUFBK0I7QUFDN0IsUUFBSSxXQUFKLENBRDZCO0FBRTdCLFFBQUksZ0JBQWdCLEVBQWhCLENBRnlCOztBQUk3QixXQUFPLElBQVAsRUFBYTtBQUNYLFVBQUksS0FBSyxLQUFLLFVBQUwsQ0FERTtBQUVYLFVBQUksYUFBYSxNQUFNLEdBQUcsSUFBSCxDQUZaO0FBR1gsVUFBSSxVQUFKLEVBQWdCO0FBQ2Qsc0JBQWMsSUFBZCxDQUFtQixLQUFLLEdBQUwsQ0FBbkIsQ0FEYzs7QUFHZCxZQUFJLGVBQWUsS0FBSyxTQUFMLEVBQWdCO0FBQ2pDLGNBQUksUUFBUSxPQUFPLElBQVAsQ0FBWSxVQUFaLEVBQXdCLElBQXhCLENBQTZCLFVBQVUsT0FBVixFQUFtQjtBQUMxRCxnQkFBSSxXQUFXLE9BQVgsTUFBd0IsS0FBSyxTQUFMLEVBQWdCO0FBQzFDLDRCQUFjLElBQWQsQ0FBbUIsT0FBbkIsRUFEMEM7QUFFMUMscUJBQU8sSUFBUCxDQUYwQzthQUE1QztXQUR1QyxDQUFyQyxDQUQ2Qjs7QUFRakMsY0FBSSxDQUFDLEtBQUQsRUFBUTtBQUNWLGtCQUFNLElBQUksS0FBSixDQUFVLGdEQUFWLENBQU4sQ0FEVTtXQUFaO1NBUkY7O0FBYUEsWUFBSSxFQUFFLFNBQUYsQ0FBWSxVQUFaLENBQUosRUFBNkI7QUFDM0Isd0JBQWMsVUFBZCxDQUQyQjtBQUUzQixnQkFGMkI7U0FBN0I7T0FoQkY7O0FBc0JBLGFBQU8sRUFBUCxDQXpCVztLQUFiOztBQTRCQSxRQUFJLENBQUMsV0FBRCxFQUFjO0FBQ2hCLFlBQU0sSUFBSSxLQUFKLENBQVUsa0NBQVYsQ0FBTixDQURnQjtLQUFsQjs7QUFJQSxRQUFJLFdBQVcsSUFBSSxRQUFKLENBQWEsV0FBYixDQUFYLENBcEN5Qjs7QUFzQzdCLFdBQU8sY0FBYyxNQUFkLEdBQXVCLENBQXZCLEVBQTBCO0FBQy9CLGlCQUFXLFNBQVMsR0FBVCxDQUFhLGNBQWMsR0FBZCxFQUFiLENBQVgsQ0FEK0I7S0FBakM7O0FBSUEsV0FBTyxRQUFQLENBMUM2QjtHQUEvQjs7OztBQTNEQSxjQUFRLFVBQVIsR0FBcUIsSUFBckIsQ0FTSSxlQUFlLFFBQVEsYUFBUjtBQUVmLHNCQUFnQix1QkFBdUIsWUFBdkI7QUFFaEIsZUFBUyxRQUFRLGdCQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEI7QUFNSixpQkFBVyxjQUFjLFNBQWQsRUFBeUIsS0FBekIsQ0FBK0IsUUFBL0I7QUFFWCxpQkFBVztBQUNiLGVBQU8sa0JBQVA7Ozs7QUFHRixjQUFRLFFBQVIsR0FBbUIsUUFBbkI7Ozs7O0FBS0ksZ0JBQVU7Ozs7OztBQU1aLGtCQUFVO0FBQ1IsZ0JBQU0sU0FBUyxJQUFULENBQWMsSUFBZCxFQUFvQjtBQUN4QixnQkFBSSxLQUFLLEtBQUwsSUFBYyxLQUFLLFNBQUwsRUFBZ0I7Ozs7Ozs7O0FBUWhDLDRCQUFjLFNBQWQsRUFBeUIsU0FBekIsQ0FBbUMsZ0JBQWdCLElBQWhCLENBQW5DLEVBUmdDO2FBQWxDO1dBREk7U0FEUjs7OztBQWdCRixjQUFRLE9BQVIsR0FBa0IsT0FBbEIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmFuc2Zvcm1hdGlvbi90cmFuc2Zvcm1lcnMvb3RoZXIvcmVnZW5lcmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX3JlZ2VuZXJhdG9yID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yXCIpO1xuXG52YXIgX3JlZ2VuZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlZ2VuZXJhdG9yKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG4vLyBJdCdzIGltcG9ydGFudCB0byB1c2UgdGhlIGV4YWN0IHNhbWUgTm9kZVBhdGggY29uc3RydWN0b3IgdGhhdFxuLy8gUmVnZW5lcmF0b3IgdXNlcywgcmF0aGVyIHRoYW4gcmVxdWlyZShcImFzdC10eXBlc1wiKS5Ob2RlUGF0aCwgYmVjYXVzZVxuLy8gdGhlIHZlcnNpb24gb2YgYXN0LXR5cGVzIHRoYXQgQmFiZWwga25vd3MgYWJvdXQgbWlnaHQgYmUgZGlmZmVyZW50IGZyb21cbi8vIHRoZSB2ZXJzaW9uIHRoYXQgUmVnZW5lcmF0b3IgZGVwZW5kcyBvbi4gU2VlIGZvciBleGFtcGxlICMxOTU4LlxudmFyIE5vZGVQYXRoID0gX3JlZ2VuZXJhdG9yMltcImRlZmF1bHRcIl0udHlwZXMuTm9kZVBhdGg7XG5cbnZhciBtZXRhZGF0YSA9IHtcbiAgZ3JvdXA6IFwiYnVpbHRpbi1hZHZhbmNlZFwiXG59O1xuXG5leHBvcnRzLm1ldGFkYXRhID0gbWV0YWRhdGE7XG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciB2aXNpdG9yID0ge1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRnVuY3Rpb246IHtcbiAgICBleGl0OiBmdW5jdGlvbiBleGl0KG5vZGUpIHtcbiAgICAgIGlmIChub2RlLmFzeW5jIHx8IG5vZGUuZ2VuZXJhdG9yKSB7XG4gICAgICAgIC8vIEFsdGhvdWdoIHRoaXMgY29kZSB0cmFuc2Zvcm1zIG9ubHkgdGhlIHN1YnRyZWUgcm9vdGVkIGF0IHRoZSBnaXZlblxuICAgICAgICAvLyBGdW5jdGlvbiBub2RlLCB0aGF0IG5vZGUgbWlnaHQgY29udGFpbiBvdGhlciBnZW5lcmF0b3IgZnVuY3Rpb25zXG4gICAgICAgIC8vIHRoYXQgd2lsbCBhbHNvIGJlIHRyYW5zZm9ybWVkLiBJdCBtaWdodCBoZWxwIHBlcmZvcm1hbmNlIHRvIGlnbm9yZVxuICAgICAgICAvLyBuZXN0ZWQgZnVuY3Rpb25zLCBhbmQgcmVseSBvbiB0aGUgdHJhdmVyc2FsIHRvIHZpc2l0IHRoZW0gbGF0ZXIsXG4gICAgICAgIC8vIGJ1dCB0aGF0J3MgYSBzbWFsbCBvcHRpbWl6YXRpb24uIFN0YXJ0aW5nIGhlcmUgaW5zdGVhZCBvZiBhdCB0aGVcbiAgICAgICAgLy8gcm9vdCBvZiB0aGUgQVNUIGlzIHRoZSBrZXkgb3B0aW1pemF0aW9uLCBzaW5jZSBodWdlIGFzeW5jL2dlbmVyYXRvclxuICAgICAgICAvLyBmdW5jdGlvbnMgYXJlIHJlbGF0aXZlbHkgcmFyZS5cbiAgICAgICAgX3JlZ2VuZXJhdG9yMltcImRlZmF1bHRcIl0udHJhbnNmb3JtKGNvbnZlcnROb2RlUGF0aCh0aGlzKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzLnZpc2l0b3IgPSB2aXNpdG9yO1xuLy8gR2l2ZW4gYSBCYWJlbCBOb2RlUGF0aCwgcmV0dXJuIGFuIGFzdC10eXBlcyBOb2RlUGF0aCB0aGF0IGluY2x1ZGVzIGZ1bGxcbi8vIGFuY2VzdHJ5IGluZm9ybWF0aW9uICh1cCB0byBhbmQgaW5jbHVkaW5nIHRoZSBQcm9ncmFtIG5vZGUpLiBUaGlzIGlzXG4vLyBjb21wbGljYXRlZCBieSBoYXZpbmcgdG8gaW5jbHVkZSBpbnRlcm1lZGlhdGUgb2JqZWN0cyBsaWtlIGJsb2NrU3RhdGVtZW50LmJvZHlcbi8vIGFycmF5cywgaW4gYWRkaXRpb24gdG8gTm9kZSBvYmplY3RzLlxuZnVuY3Rpb24gY29udmVydE5vZGVQYXRoKHBhdGgpIHtcbiAgdmFyIHByb2dyYW1Ob2RlO1xuICB2YXIga2V5c0Fsb25nUGF0aCA9IFtdO1xuXG4gIHdoaWxlIChwYXRoKSB7XG4gICAgdmFyIHBwID0gcGF0aC5wYXJlbnRQYXRoO1xuICAgIHZhciBwYXJlbnROb2RlID0gcHAgJiYgcHAubm9kZTtcbiAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAga2V5c0Fsb25nUGF0aC5wdXNoKHBhdGgua2V5KTtcblxuICAgICAgaWYgKHBhcmVudE5vZGUgIT09IHBhdGguY29udGFpbmVyKSB7XG4gICAgICAgIHZhciBmb3VuZCA9IE9iamVjdC5rZXlzKHBhcmVudE5vZGUpLnNvbWUoZnVuY3Rpb24gKGxpc3RLZXkpIHtcbiAgICAgICAgICBpZiAocGFyZW50Tm9kZVtsaXN0S2V5XSA9PT0gcGF0aC5jb250YWluZXIpIHtcbiAgICAgICAgICAgIGtleXNBbG9uZ1BhdGgucHVzaChsaXN0S2V5KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmaW5kIGNvbnRhaW5lciBvYmplY3QgaW4gcGFyZW50IG5vZGVcIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHQuaXNQcm9ncmFtKHBhcmVudE5vZGUpKSB7XG4gICAgICAgIHByb2dyYW1Ob2RlID0gcGFyZW50Tm9kZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGF0aCA9IHBwO1xuICB9XG5cbiAgaWYgKCFwcm9ncmFtTm9kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmaW5kIHJvb3QgUHJvZ3JhbSBub2RlXCIpO1xuICB9XG5cbiAgdmFyIG5vZGVQYXRoID0gbmV3IE5vZGVQYXRoKHByb2dyYW1Ob2RlKTtcblxuICB3aGlsZSAoa2V5c0Fsb25nUGF0aC5sZW5ndGggPiAwKSB7XG4gICAgbm9kZVBhdGggPSBub2RlUGF0aC5nZXQoa2V5c0Fsb25nUGF0aC5wb3AoKSk7XG4gIH1cblxuICByZXR1cm4gbm9kZVBhdGg7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
