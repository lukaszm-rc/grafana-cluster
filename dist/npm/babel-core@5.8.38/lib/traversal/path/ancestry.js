/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _types, t, _index, _index2;

  // istanbul ignore next

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }

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
   * Call the provided `callback` with the `NodePath`s of all the parents.
   * When the `callback` returns a truthy value, we return that node path.
   */

  function findParent(callback) {
    var path = this;
    while (path = path.parentPath) {
      if (callback(path)) return path;
    }
    return null;
  }

  /**
   * Get the parent function of the current path.
   */

  function getFunctionParent() {
    return this.findParent(function (path) {
      return path.isFunction() || path.isProgram();
    });
  }

  /**
   * Walk up the tree until we hit a parent node path in a list.
   */

  function getStatementParent() {
    var path = this;
    do {
      if (Array.isArray(path.container)) {
        return path;
      }
    } while (path = path.parentPath);
  }

  /**
   * Get the deepest common ancestor and then from it, get the earliest relationship path
   * to that ancestor.
   *
   * Earliest is defined as being "before" all the other nodes in terms of list container
   * position and visiting key.
   */

  function getEarliestCommonAncestorFrom(paths) {
    return this.getDeepestCommonAncestorFrom(paths, function (deepest, i, ancestries) {
      var earliest;
      var keys = t.VISITOR_KEYS[deepest.type];

      var _arr = ancestries;
      for (var _i = 0; _i < _arr.length; _i++) {
        var ancestry = _arr[_i];
        var path = ancestry[i + 1];

        // first path
        if (!earliest) {
          earliest = path;
          continue;
        }

        // handle containers
        if (path.listKey && earliest.listKey === path.listKey) {
          // we're in the same container so check if we're earlier
          if (path.key < earliest.key) {
            earliest = path;
            continue;
          }
        }

        // handle keys
        var earliestKeyIndex = keys.indexOf(earliest.parentKey);
        var currentKeyIndex = keys.indexOf(path.parentKey);
        if (earliestKeyIndex > currentKeyIndex) {
          // key appears before so it's earlier
          earliest = path;
        }
      }

      return earliest;
    });
  }

  /**
   * Get the earliest path in the tree where the provided `paths` intersect.
   *
   * TODO: Possible optimisation target.
   */

  function getDeepestCommonAncestorFrom(paths, filter) {
    // istanbul ignore next

    var _this = this;

    if (!paths.length) {
      return this;
    }

    if (paths.length === 1) {
      return paths[0];
    }

    // minimum depth of the tree so we know the highest node
    var minDepth = Infinity;

    // last common ancestor
    var lastCommonIndex, lastCommon;

    // get the ancestors of the path, breaking when the parent exceeds ourselves
    var ancestries = paths.map(function (path) {
      var ancestry = [];

      do {
        ancestry.unshift(path);
      } while ((path = path.parentPath) && path !== _this);

      // save min depth to avoid going too far in
      if (ancestry.length < minDepth) {
        minDepth = ancestry.length;
      }

      return ancestry;
    });

    // get the first ancestry so we have a seed to assess all other ancestries with
    var first = ancestries[0];

    // check ancestor equality
    depthLoop: for (var i = 0; i < minDepth; i++) {
      var shouldMatch = first[i];

      var _arr2 = ancestries;
      for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
        var ancestry = _arr2[_i2];
        if (ancestry[i] !== shouldMatch) {
          // we've hit a snag
          break depthLoop;
        }
      }

      // next iteration may break so store these so they can be returned
      lastCommonIndex = i;
      lastCommon = shouldMatch;
    }

    if (lastCommon) {
      if (filter) {
        return filter(lastCommon, lastCommonIndex, ancestries);
      } else {
        return lastCommon;
      }
    } else {
      throw new Error("Couldn't find intersection");
    }
  }

  /**
   * Build an array of node paths containing the entire ancestry of the current node path.
   *
   * NOTE: The current node path is included in this.
   */

  function getAncestry() {
    var path = this;
    var paths = [];
    do {
      paths.push(path);
    } while (path = path.parentPath);
    return paths;
  }

  /**
   * [Please add a description.]
   */

  function inType() {
    var path = this;
    while (path) {
      var _arr3 = arguments;

      for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
        var type = _arr3[_i3];
        if (path.node.type === type) return true;
      }
      path = path.parentPath;
    }

    return false;
  }

  /**
   * Check if we're inside a shadowed function.
   */

  function inShadow(key) {
    var path = this;
    do {
      if (path.isFunction()) {
        var shadow = path.node.shadow;
        if (shadow) {
          // this is because sometimes we may have a `shadow` value of:
          //
          //   { this: false }
          //
          // we need to catch this case if `inShadow` has been passed a `key`
          if (!key || shadow[key] !== false) {
            return path;
          }
        } else if (path.isArrowFunctionExpression()) {
          return path;
        }

        // normal function, we've found our function context
        return null;
      }
    } while (path = path.parentPath);
    return null;
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.findParent = findParent;
      exports.getFunctionParent = getFunctionParent;
      exports.getStatementParent = getStatementParent;
      exports.getEarliestCommonAncestorFrom = getEarliestCommonAncestorFrom;
      exports.getDeepestCommonAncestorFrom = getDeepestCommonAncestorFrom;
      exports.getAncestry = getAncestry;
      exports.inType = inType;
      exports.inShadow = inShadow;_types = require("../../types");
      t = _interopRequireWildcard(_types);
      _index = require("./index");
      _index2 = _interopRequireDefault(_index);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3BhdGgvYW5jZXN0cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFhQSxXQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBSixHQUFpQixHQUF4QixHQUE4QixFQUFFLFdBQVcsR0FBWCxFQUFoQyxDQUFUO0dBQXJDOzs7O0FBSUEsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7Ozs7OztBQWVBLFdBQVMsVUFBVCxDQUFvQixRQUFwQixFQUE4QjtBQUM1QixRQUFJLE9BQU8sSUFBUCxDQUR3QjtBQUU1QixXQUFPLE9BQU8sS0FBSyxVQUFMLEVBQWlCO0FBQzdCLFVBQUksU0FBUyxJQUFULENBQUosRUFBb0IsT0FBTyxJQUFQLENBQXBCO0tBREY7QUFHQSxXQUFPLElBQVAsQ0FMNEI7R0FBOUI7Ozs7OztBQVlBLFdBQVMsaUJBQVQsR0FBNkI7QUFDM0IsV0FBTyxLQUFLLFVBQUwsQ0FBZ0IsVUFBVSxJQUFWLEVBQWdCO0FBQ3JDLGFBQU8sS0FBSyxVQUFMLE1BQXFCLEtBQUssU0FBTCxFQUFyQixDQUQ4QjtL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QUFULENBQWtCLEdBQWxCLEVBQXVCO0FBQ3JCLFFBQUksT0FBTyxJQUFQLENBRGlCO0FBRXJCLE9BQUc7QUFDRCxVQUFJLEtBQUssVUFBTCxFQUFKLEVBQXVCO0FBQ3JCLFlBQUksU0FBUyxLQUFLLElBQUwsQ0FBVSxNQUFWLENBRFE7QUFFckIsWUFBSSxNQUFKLEVBQVk7Ozs7OztBQU1WLGNBQUksQ0FBQyxHQUFELElBQVEsT0FBTyxHQUFQLE1BQWdCLEtBQWhCLEVBQXVCO0FBQ2pDLG1CQUFPLElBQVAsQ0FEaUM7V0FBbkM7U0FORixNQVNPLElBQUksS0FBSyx5QkFBTCxFQUFKLEVBQXNDO0FBQzNDLGlCQUFPLElBQVAsQ0FEMkM7U0FBdEM7OztBQVhjLGVBZ0JkLElBQVAsQ0FoQnFCO09BQXZCO0tBREYsUUFtQlMsT0FBTyxLQUFLLFVBQUwsRUFyQks7QUFzQnJCLFdBQU8sSUFBUCxDQXRCcUI7R0FBdkI7Ozs7QUExTkEsY0FBUSxVQUFSLEdBQXFCLElBQXJCO0FBQ0EsY0FBUSxVQUFSLEdBQXFCLFVBQXJCO0FBQ0EsY0FBUSxpQkFBUixHQUE0QixpQkFBNUI7QUFDQSxjQUFRLGtCQUFSLEdBQTZCLGtCQUE3QjtBQUNBLGNBQVEsNkJBQVIsR0FBd0MsNkJBQXhDO0FBQ0EsY0FBUSw0QkFBUixHQUF1Qyw0QkFBdkM7QUFDQSxjQUFRLFdBQVIsR0FBc0IsV0FBdEI7QUFDQSxjQUFRLE1BQVIsR0FBaUIsTUFBakI7QUFDQSxjQUFRLFFBQVIsR0FBbUIsUUFBbkIsQ0FTSSxTQUFTLFFBQVEsYUFBUjtBQUVULFVBQUksd0JBQXdCLE1BQXhCO0FBRUosZUFBUyxRQUFRLFNBQVI7QUFFVCxnQkFBVSx1QkFBdUIsTUFBdkIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmF2ZXJzYWwvcGF0aC9hbmNlc3RyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZmluZFBhcmVudCA9IGZpbmRQYXJlbnQ7XG5leHBvcnRzLmdldEZ1bmN0aW9uUGFyZW50ID0gZ2V0RnVuY3Rpb25QYXJlbnQ7XG5leHBvcnRzLmdldFN0YXRlbWVudFBhcmVudCA9IGdldFN0YXRlbWVudFBhcmVudDtcbmV4cG9ydHMuZ2V0RWFybGllc3RDb21tb25BbmNlc3RvckZyb20gPSBnZXRFYXJsaWVzdENvbW1vbkFuY2VzdG9yRnJvbTtcbmV4cG9ydHMuZ2V0RGVlcGVzdENvbW1vbkFuY2VzdG9yRnJvbSA9IGdldERlZXBlc3RDb21tb25BbmNlc3RvckZyb207XG5leHBvcnRzLmdldEFuY2VzdHJ5ID0gZ2V0QW5jZXN0cnk7XG5leHBvcnRzLmluVHlwZSA9IGluVHlwZTtcbmV4cG9ydHMuaW5TaGFkb3cgPSBpblNoYWRvdztcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuL2luZGV4XCIpO1xuXG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luZGV4KTtcblxuLyoqXG4gKiBDYWxsIHRoZSBwcm92aWRlZCBgY2FsbGJhY2tgIHdpdGggdGhlIGBOb2RlUGF0aGBzIG9mIGFsbCB0aGUgcGFyZW50cy5cbiAqIFdoZW4gdGhlIGBjYWxsYmFja2AgcmV0dXJucyBhIHRydXRoeSB2YWx1ZSwgd2UgcmV0dXJuIHRoYXQgbm9kZSBwYXRoLlxuICovXG5cbmZ1bmN0aW9uIGZpbmRQYXJlbnQoY2FsbGJhY2spIHtcbiAgdmFyIHBhdGggPSB0aGlzO1xuICB3aGlsZSAocGF0aCA9IHBhdGgucGFyZW50UGF0aCkge1xuICAgIGlmIChjYWxsYmFjayhwYXRoKSkgcmV0dXJuIHBhdGg7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogR2V0IHRoZSBwYXJlbnQgZnVuY3Rpb24gb2YgdGhlIGN1cnJlbnQgcGF0aC5cbiAqL1xuXG5mdW5jdGlvbiBnZXRGdW5jdGlvblBhcmVudCgpIHtcbiAgcmV0dXJuIHRoaXMuZmluZFBhcmVudChmdW5jdGlvbiAocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmlzRnVuY3Rpb24oKSB8fCBwYXRoLmlzUHJvZ3JhbSgpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBXYWxrIHVwIHRoZSB0cmVlIHVudGlsIHdlIGhpdCBhIHBhcmVudCBub2RlIHBhdGggaW4gYSBsaXN0LlxuICovXG5cbmZ1bmN0aW9uIGdldFN0YXRlbWVudFBhcmVudCgpIHtcbiAgdmFyIHBhdGggPSB0aGlzO1xuICBkbyB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aC5jb250YWluZXIpKSB7XG4gICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG4gIH0gd2hpbGUgKHBhdGggPSBwYXRoLnBhcmVudFBhdGgpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgZGVlcGVzdCBjb21tb24gYW5jZXN0b3IgYW5kIHRoZW4gZnJvbSBpdCwgZ2V0IHRoZSBlYXJsaWVzdCByZWxhdGlvbnNoaXAgcGF0aFxuICogdG8gdGhhdCBhbmNlc3Rvci5cbiAqXG4gKiBFYXJsaWVzdCBpcyBkZWZpbmVkIGFzIGJlaW5nIFwiYmVmb3JlXCIgYWxsIHRoZSBvdGhlciBub2RlcyBpbiB0ZXJtcyBvZiBsaXN0IGNvbnRhaW5lclxuICogcG9zaXRpb24gYW5kIHZpc2l0aW5nIGtleS5cbiAqL1xuXG5mdW5jdGlvbiBnZXRFYXJsaWVzdENvbW1vbkFuY2VzdG9yRnJvbShwYXRocykge1xuICByZXR1cm4gdGhpcy5nZXREZWVwZXN0Q29tbW9uQW5jZXN0b3JGcm9tKHBhdGhzLCBmdW5jdGlvbiAoZGVlcGVzdCwgaSwgYW5jZXN0cmllcykge1xuICAgIHZhciBlYXJsaWVzdDtcbiAgICB2YXIga2V5cyA9IHQuVklTSVRPUl9LRVlTW2RlZXBlc3QudHlwZV07XG5cbiAgICB2YXIgX2FyciA9IGFuY2VzdHJpZXM7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IF9hcnIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgYW5jZXN0cnkgPSBfYXJyW19pXTtcbiAgICAgIHZhciBwYXRoID0gYW5jZXN0cnlbaSArIDFdO1xuXG4gICAgICAvLyBmaXJzdCBwYXRoXG4gICAgICBpZiAoIWVhcmxpZXN0KSB7XG4gICAgICAgIGVhcmxpZXN0ID0gcGF0aDtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIGhhbmRsZSBjb250YWluZXJzXG4gICAgICBpZiAocGF0aC5saXN0S2V5ICYmIGVhcmxpZXN0Lmxpc3RLZXkgPT09IHBhdGgubGlzdEtleSkge1xuICAgICAgICAvLyB3ZSdyZSBpbiB0aGUgc2FtZSBjb250YWluZXIgc28gY2hlY2sgaWYgd2UncmUgZWFybGllclxuICAgICAgICBpZiAocGF0aC5rZXkgPCBlYXJsaWVzdC5rZXkpIHtcbiAgICAgICAgICBlYXJsaWVzdCA9IHBhdGg7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gaGFuZGxlIGtleXNcbiAgICAgIHZhciBlYXJsaWVzdEtleUluZGV4ID0ga2V5cy5pbmRleE9mKGVhcmxpZXN0LnBhcmVudEtleSk7XG4gICAgICB2YXIgY3VycmVudEtleUluZGV4ID0ga2V5cy5pbmRleE9mKHBhdGgucGFyZW50S2V5KTtcbiAgICAgIGlmIChlYXJsaWVzdEtleUluZGV4ID4gY3VycmVudEtleUluZGV4KSB7XG4gICAgICAgIC8vIGtleSBhcHBlYXJzIGJlZm9yZSBzbyBpdCdzIGVhcmxpZXJcbiAgICAgICAgZWFybGllc3QgPSBwYXRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlYXJsaWVzdDtcbiAgfSk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBlYXJsaWVzdCBwYXRoIGluIHRoZSB0cmVlIHdoZXJlIHRoZSBwcm92aWRlZCBgcGF0aHNgIGludGVyc2VjdC5cbiAqXG4gKiBUT0RPOiBQb3NzaWJsZSBvcHRpbWlzYXRpb24gdGFyZ2V0LlxuICovXG5cbmZ1bmN0aW9uIGdldERlZXBlc3RDb21tb25BbmNlc3RvckZyb20ocGF0aHMsIGZpbHRlcikge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgaWYgKCFwYXRocy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlmIChwYXRocy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gcGF0aHNbMF07XG4gIH1cblxuICAvLyBtaW5pbXVtIGRlcHRoIG9mIHRoZSB0cmVlIHNvIHdlIGtub3cgdGhlIGhpZ2hlc3Qgbm9kZVxuICB2YXIgbWluRGVwdGggPSBJbmZpbml0eTtcblxuICAvLyBsYXN0IGNvbW1vbiBhbmNlc3RvclxuICB2YXIgbGFzdENvbW1vbkluZGV4LCBsYXN0Q29tbW9uO1xuXG4gIC8vIGdldCB0aGUgYW5jZXN0b3JzIG9mIHRoZSBwYXRoLCBicmVha2luZyB3aGVuIHRoZSBwYXJlbnQgZXhjZWVkcyBvdXJzZWx2ZXNcbiAgdmFyIGFuY2VzdHJpZXMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHtcbiAgICB2YXIgYW5jZXN0cnkgPSBbXTtcblxuICAgIGRvIHtcbiAgICAgIGFuY2VzdHJ5LnVuc2hpZnQocGF0aCk7XG4gICAgfSB3aGlsZSAoKHBhdGggPSBwYXRoLnBhcmVudFBhdGgpICYmIHBhdGggIT09IF90aGlzKTtcblxuICAgIC8vIHNhdmUgbWluIGRlcHRoIHRvIGF2b2lkIGdvaW5nIHRvbyBmYXIgaW5cbiAgICBpZiAoYW5jZXN0cnkubGVuZ3RoIDwgbWluRGVwdGgpIHtcbiAgICAgIG1pbkRlcHRoID0gYW5jZXN0cnkubGVuZ3RoO1xuICAgIH1cblxuICAgIHJldHVybiBhbmNlc3RyeTtcbiAgfSk7XG5cbiAgLy8gZ2V0IHRoZSBmaXJzdCBhbmNlc3RyeSBzbyB3ZSBoYXZlIGEgc2VlZCB0byBhc3Nlc3MgYWxsIG90aGVyIGFuY2VzdHJpZXMgd2l0aFxuICB2YXIgZmlyc3QgPSBhbmNlc3RyaWVzWzBdO1xuXG4gIC8vIGNoZWNrIGFuY2VzdG9yIGVxdWFsaXR5XG4gIGRlcHRoTG9vcDogZm9yICh2YXIgaSA9IDA7IGkgPCBtaW5EZXB0aDsgaSsrKSB7XG4gICAgdmFyIHNob3VsZE1hdGNoID0gZmlyc3RbaV07XG5cbiAgICB2YXIgX2FycjIgPSBhbmNlc3RyaWVzO1xuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IF9hcnIyLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBhbmNlc3RyeSA9IF9hcnIyW19pMl07XG4gICAgICBpZiAoYW5jZXN0cnlbaV0gIT09IHNob3VsZE1hdGNoKSB7XG4gICAgICAgIC8vIHdlJ3ZlIGhpdCBhIHNuYWdcbiAgICAgICAgYnJlYWsgZGVwdGhMb29wO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIG5leHQgaXRlcmF0aW9uIG1heSBicmVhayBzbyBzdG9yZSB0aGVzZSBzbyB0aGV5IGNhbiBiZSByZXR1cm5lZFxuICAgIGxhc3RDb21tb25JbmRleCA9IGk7XG4gICAgbGFzdENvbW1vbiA9IHNob3VsZE1hdGNoO1xuICB9XG5cbiAgaWYgKGxhc3RDb21tb24pIHtcbiAgICBpZiAoZmlsdGVyKSB7XG4gICAgICByZXR1cm4gZmlsdGVyKGxhc3RDb21tb24sIGxhc3RDb21tb25JbmRleCwgYW5jZXN0cmllcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsYXN0Q29tbW9uO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGludGVyc2VjdGlvblwiKTtcbiAgfVxufVxuXG4vKipcbiAqIEJ1aWxkIGFuIGFycmF5IG9mIG5vZGUgcGF0aHMgY29udGFpbmluZyB0aGUgZW50aXJlIGFuY2VzdHJ5IG9mIHRoZSBjdXJyZW50IG5vZGUgcGF0aC5cbiAqXG4gKiBOT1RFOiBUaGUgY3VycmVudCBub2RlIHBhdGggaXMgaW5jbHVkZWQgaW4gdGhpcy5cbiAqL1xuXG5mdW5jdGlvbiBnZXRBbmNlc3RyeSgpIHtcbiAgdmFyIHBhdGggPSB0aGlzO1xuICB2YXIgcGF0aHMgPSBbXTtcbiAgZG8ge1xuICAgIHBhdGhzLnB1c2gocGF0aCk7XG4gIH0gd2hpbGUgKHBhdGggPSBwYXRoLnBhcmVudFBhdGgpO1xuICByZXR1cm4gcGF0aHM7XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gaW5UeXBlKCkge1xuICB2YXIgcGF0aCA9IHRoaXM7XG4gIHdoaWxlIChwYXRoKSB7XG4gICAgdmFyIF9hcnIzID0gYXJndW1lbnRzO1xuXG4gICAgZm9yICh2YXIgX2kzID0gMDsgX2kzIDwgX2FycjMubGVuZ3RoOyBfaTMrKykge1xuICAgICAgdmFyIHR5cGUgPSBfYXJyM1tfaTNdO1xuICAgICAgaWYgKHBhdGgubm9kZS50eXBlID09PSB0eXBlKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcGF0aCA9IHBhdGgucGFyZW50UGF0aDtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB3ZSdyZSBpbnNpZGUgYSBzaGFkb3dlZCBmdW5jdGlvbi5cbiAqL1xuXG5mdW5jdGlvbiBpblNoYWRvdyhrZXkpIHtcbiAgdmFyIHBhdGggPSB0aGlzO1xuICBkbyB7XG4gICAgaWYgKHBhdGguaXNGdW5jdGlvbigpKSB7XG4gICAgICB2YXIgc2hhZG93ID0gcGF0aC5ub2RlLnNoYWRvdztcbiAgICAgIGlmIChzaGFkb3cpIHtcbiAgICAgICAgLy8gdGhpcyBpcyBiZWNhdXNlIHNvbWV0aW1lcyB3ZSBtYXkgaGF2ZSBhIGBzaGFkb3dgIHZhbHVlIG9mOlxuICAgICAgICAvL1xuICAgICAgICAvLyAgIHsgdGhpczogZmFsc2UgfVxuICAgICAgICAvL1xuICAgICAgICAvLyB3ZSBuZWVkIHRvIGNhdGNoIHRoaXMgY2FzZSBpZiBgaW5TaGFkb3dgIGhhcyBiZWVuIHBhc3NlZCBhIGBrZXlgXG4gICAgICAgIGlmICgha2V5IHx8IHNoYWRvd1trZXldICE9PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiBwYXRoO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBhdGguaXNBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbigpKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgICAgfVxuXG4gICAgICAvLyBub3JtYWwgZnVuY3Rpb24sIHdlJ3ZlIGZvdW5kIG91ciBmdW5jdGlvbiBjb250ZXh0XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0gd2hpbGUgKHBhdGggPSBwYXRoLnBhcmVudFBhdGgpO1xuICByZXR1cm4gbnVsbDtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
