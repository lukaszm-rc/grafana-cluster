/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _index, _index2, _types, t;

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

  /**
   * [Please add a description.]
   */

  function getStatementParent() {
    var path = this;

    do {
      if (!path.parentPath || Array.isArray(path.container) && path.isStatement()) {
        break;
      } else {
        path = path.parentPath;
      }
    } while (path);

    if (path && (path.isProgram() || path.isFile())) {
      throw new Error("File/Program node, we can't possibly find a statement parent to this");
    }

    return path;
  }

  /**
   * [Please add a description.]
   */

  function getOpposite() {
    if (this.key === "left") {
      return this.getSibling("right");
    } else if (this.key === "right") {
      return this.getSibling("left");
    }
  }

  /**
   * [Please add a description.]
   */

  function getCompletionRecords() {
    var paths = [];

    var add = function add(path) {
      if (path) paths = paths.concat(path.getCompletionRecords());
    };

    if (this.isIfStatement()) {
      add(this.get("consequent"));
      add(this.get("alternate"));
    } else if (this.isDoExpression() || this.isFor() || this.isWhile()) {
      add(this.get("body"));
    } else if (this.isProgram() || this.isBlockStatement()) {
      add(this.get("body").pop());
    } else if (this.isFunction()) {
      return this.get("body").getCompletionRecords();
    } else if (this.isTryStatement()) {
      add(this.get("block"));
      add(this.get("handler"));
      add(this.get("finalizer"));
    } else {
      paths.push(this);
    }

    return paths;
  }

  /**
   * [Please add a description.]
   */

  function getSibling(key) {
    return _index2["default"].get({
      parentPath: this.parentPath,
      parent: this.parent,
      container: this.container,
      listKey: this.listKey,
      key: key
    });
  }

  /**
   * [Please add a description.]
   */

  function get(key, context) {
    if (context === true) context = this.context;
    var parts = key.split(".");
    if (parts.length === 1) {
      // "foo"
      return this._getKey(key, context);
    } else {
      // "foo.bar"
      return this._getPattern(parts, context);
    }
  }

  /**
   * [Please add a description.]
   */

  function _getKey(key, context) {
    // istanbul ignore next

    var _this = this;

    var node = this.node;
    var container = node[key];

    if (Array.isArray(container)) {
      // requested a container so give them all the paths
      return container.map(function (_, i) {
        return _index2["default"].get({
          listKey: key,
          parentPath: _this,
          parent: node,
          container: container,
          key: i
        }).setContext(context);
      });
    } else {
      return _index2["default"].get({
        parentPath: this,
        parent: node,
        container: node,
        key: key
      }).setContext(context);
    }
  }

  /**
   * [Please add a description.]
   */

  function _getPattern(parts, context) {
    var path = this;
    var _arr = parts;
    for (var _i = 0; _i < _arr.length; _i++) {
      var part = _arr[_i];
      if (part === ".") {
        path = path.parentPath;
      } else {
        if (Array.isArray(path)) {
          path = path[part];
        } else {
          path = path.get(part, context);
        }
      }
    }
    return path;
  }

  /**
   * [Please add a description.]
   */

  function getBindingIdentifiers(duplicates) {
    return t.getBindingIdentifiers(this.node, duplicates);
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.getStatementParent = getStatementParent;
      exports.getOpposite = getOpposite;
      exports.getCompletionRecords = getCompletionRecords;
      exports.getSibling = getSibling;
      exports.get = get;
      exports._getKey = _getKey;
      exports._getPattern = _getPattern;
      exports.getBindingIdentifiers = getBindingIdentifiers;_index = require("./index");
      _index2 = _interopRequireDefault(_index);
      _types = require("../../types");
      t = _interopRequireWildcard(_types);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3BhdGgvZmFtaWx5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBYUEsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7OztBQUlBLFdBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLEdBQXhCLEdBQThCLEVBQUUsV0FBVyxHQUFYLEVBQWhDLENBQVQ7R0FBckM7Ozs7OztBQWNBLFdBQVMsa0JBQVQsR0FBOEI7QUFDNUIsUUFBSSxPQUFPLElBQVAsQ0FEd0I7O0FBRzVCLE9BQUc7QUFDRCxVQUFJLENBQUMsS0FBSyxVQUFMLElBQW1CLE1BQU0sT0FBTixDQUFjLEtBQUssU0FBTCxDQUFkLElBQWlDLEtBQUssV0FBTCxFQUFqQyxFQUFxRDtBQUMzRSxjQUQyRTtPQUE3RSxNQUVPO0FBQ0wsZUFBTyxLQUFLLFVBQUwsQ0FERjtPQUZQO0tBREYsUUFNUyxJQU5ULEVBSDRCOztBQVc1QixRQUFJLFNBQVMsS0FBSyxTQUFMLE1BQW9CLEtBQUssTUFBTCxFQUFwQixDQUFULEVBQTZDO0FBQy9DLFlBQU0sSUFBSSxLQUFKLENBQVUsc0VBQVYsQ0FBTixDQUQrQztLQUFqRDs7QUFJQSxXQUFPLElBQVAsQ0FmNEI7R0FBOUI7Ozs7OztBQXNCQSxXQUFTLFdBQVQsR0FBdUI7QUFDckIsUUFBSSxLQUFLLEdBQUwsS0FBYSxNQUFiLEVBQXFCO0FBQ3ZCLGFBQU8sS0FBSyxVQUFMLENBQWdCLE9BQWhCLENBQVAsQ0FEdUI7S0FBekIsTUFFTyxJQUFJLEtBQUssR0FBTCxLQUFhLE9BQWIsRUFBc0I7QUFDL0IsYUFBTyxLQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsQ0FBUCxDQUQrQjtLQUExQjtHQUhUOzs7Ozs7QUFZQSxXQUFTLG9CQUFULEdBQWdDO0FBQzlCLFFBQUksUUFBUSxFQUFSLENBRDBCOztBQUc5QixRQUFJLE1BQU0sU0FBUyxHQUFULENBQWEsSUFBYixFQUFtQjtBQUMzQixVQUFJLElBQUosRUFBVSxRQUFRLE1BQU0sTUFBTixDQUFhLEtBQUssb0JBQUwsRUFBYixDQUFSLENBQVY7S0FEUSxDQUhvQjs7QUFPOUIsUUFBSSxLQUFLLGFBQUwsRUFBSixFQUEwQjtBQUN4QixVQUFJLEtBQUssR0FBTCxDQUFTLFlBQVQsQ0FBSixFQUR3QjtBQUV4QixVQUFJLEtBQUssR0FBTCxDQUFTLFdBQVQsQ0FBSixFQUZ3QjtLQUExQixNQUdPLElBQUksS0FBSyxjQUFMLE1BQXlCLEtBQUssS0FBTCxFQUF6QixJQUF5QyxLQUFLLE9BQUwsRUFBekMsRUFBeUQ7QUFDbEUsVUFBSSxLQUFLLEdBQUwsQ0FBUyxNQUFULENBQUosRUFEa0U7S0FBN0QsTUFFQSxJQUFJLEtBQUssU0FBTCxNQUFvQixLQUFLLGdCQUFMLEVBQXBCLEVBQTZDO0FBQ3RELFVBQUksS0FBSyxHQUFMLENBQVMsTUFBVCxFQUFpQixHQUFqQixFQUFKLEVBRHNEO0tBQWpELE1BRUEsSUFBSSxLQUFLLFVBQUwsRUFBSixFQUF1QjtBQUM1QixhQUFPLEtBQUssR0FBTCxDQUFTLE1BQVQsRUFBaUIsb0JBQWpCLEVBQVAsQ0FENEI7S0FBdkIsTUFFQSxJQUFJLEtBQUssY0FBTCxFQUFKLEVBQTJCO0FBQ2hDLFVBQUksS0FBSyxHQUFMLENBQVMsT0FBVCxDQUFKLEVBRGdDO0FBRWhDLFVBQUksS0FBSyxHQUFMLENBQVMsU0FBVCxDQUFKLEVBRmdDO0FBR2hDLFVBQUksS0FBSyxHQUFMLENBQVMsV0FBVCxDQUFKLEVBSGdDO0tBQTNCLE1BSUE7QUFDTCxZQUFNLElBQU4sQ0FBVyxJQUFYLEVBREs7S0FKQTs7QUFRUCxXQUFPLEtBQVAsQ0F4QjhCO0dBQWhDOzs7Ozs7QUErQkEsV0FBUyxVQUFULENBQW9CLEdBQXBCLEVBQXlCO0FBQ3ZCLFdBQU8sUUFBUSxTQUFSLEVBQW1CLEdBQW5CLENBQXVCO0FBQzVCLGtCQUFZLEtBQUssVUFBTDtBQUNaLGNBQVEsS0FBSyxNQUFMO0FBQ1IsaUJBQVcsS0FBSyxTQUFMO0FBQ1gsZUFBUyxLQUFLLE9BQUw7QUFDVCxXQUFLLEdBQUw7S0FMSyxDQUFQLENBRHVCO0dBQXpCOzs7Ozs7QUFjQSxXQUFTLEdBQVQsQ0FBYSxHQUFiLEVBQWtCLE9BQWxCLEVBQTJCO0FBQ3pCLFFBQUksWUFBWSxJQUFaLEVBQWtCLFVBQVUsS0FBSyxPQUFMLENBQWhDO0FBQ0EsUUFBSSxRQUFRLElBQUksS0FBSixDQUFVLEdBQVYsQ0FBUixDQUZxQjtBQUd6QixRQUFJLE1BQU0sTUFBTixLQUFpQixDQUFqQixFQUFvQjs7QUFFdEIsYUFBTyxLQUFLLE9BQUwsQ0FBYSxHQUFiLEVBQWtCLE9BQWxCLENBQVAsQ0FGc0I7S0FBeEIsTUFHTzs7QUFFTCxhQUFPLEtBQUssV0FBTCxDQUFpQixLQUFqQixFQUF3QixPQUF4QixDQUFQLENBRks7S0FIUDtHQUhGOzs7Ozs7QUFnQkEsV0FBUyxPQUFULENBQWlCLEdBQWpCLEVBQXNCLE9BQXRCLEVBQStCOzs7QUFHN0IsUUFBSSxRQUFRLElBQVIsQ0FIeUI7O0FBSzdCLFFBQUksT0FBTyxLQUFLLElBQUwsQ0FMa0I7QUFNN0IsUUFBSSxZQUFZLEtBQUssR0FBTCxDQUFaLENBTnlCOztBQVE3QixRQUFJLE1BQU0sT0FBTixDQUFjLFNBQWQsQ0FBSixFQUE4Qjs7QUFFNUIsYUFBTyxVQUFVLEdBQVYsQ0FBYyxVQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCO0FBQ25DLGVBQU8sUUFBUSxTQUFSLEVBQW1CLEdBQW5CLENBQXVCO0FBQzVCLG1CQUFTLEdBQVQ7QUFDQSxzQkFBWSxLQUFaO0FBQ0Esa0JBQVEsSUFBUjtBQUNBLHFCQUFXLFNBQVg7QUFDQSxlQUFLLENBQUw7U0FMSyxFQU1KLFVBTkksQ0FNTyxPQU5QLENBQVAsQ0FEbUM7T0FBaEIsQ0FBckIsQ0FGNEI7S0FBOUIsTUFXTztBQUNMLGFBQU8sUUFBUSxTQUFSLEVBQW1CLEdBQW5CLENBQXVCO0FBQzVCLG9CQUFZLElBQVo7QUFDQSxnQkFBUSxJQUFSO0FBQ0EsbUJBQVcsSUFBWDtBQUNBLGFBQUssR0FBTDtPQUpLLEVBS0osVUFMSSxDQUtPLE9BTFAsQ0FBUCxDQURLO0tBWFA7R0FSRjs7Ozs7O0FBaUNBLFdBQVMsV0FBVCxDQUFxQixLQUFyQixFQUE0QixPQUE1QixFQUFxQztBQUNuQyxRQUFJLE9BQU8sSUFBUCxDQUQrQjtBQUVuQyxRQUFJLE9BQU8sS0FBUCxDQUYrQjtBQUduQyxTQUFLLElBQUksS0FBSyxDQUFMLEVBQVEsS0FBSyxLQUFLLE1BQUwsRUFBYSxJQUFuQyxFQUF5QztBQUN2QyxVQUFJLE9BQU8sS0FBSyxFQUFMLENBQVAsQ0FEbUM7QUFFdkMsVUFBSSxTQUFTLEdBQVQsRUFBYztBQUNoQixlQUFPLEtBQUssVUFBTCxDQURTO09BQWxCLE1BRU87QUFDTCxZQUFJLE1BQU0sT0FBTixDQUFjLElBQWQsQ0FBSixFQUF5QjtBQUN2QixpQkFBTyxLQUFLLElBQUwsQ0FBUCxDQUR1QjtTQUF6QixNQUVPO0FBQ0wsaUJBQU8sS0FBSyxHQUFMLENBQVMsSUFBVCxFQUFlLE9BQWYsQ0FBUCxDQURLO1NBRlA7T0FIRjtLQUZGO0FBWUEsV0FBTyxJQUFQLENBZm1DO0dBQXJDOzs7Ozs7QUFzQkEsV0FBUyxxQkFBVCxDQUErQixVQUEvQixFQUEyQztBQUN6QyxXQUFPLEVBQUUscUJBQUYsQ0FBd0IsS0FBSyxJQUFMLEVBQVcsVUFBbkMsQ0FBUCxDQUR5QztHQUEzQzs7OztBQW5MQSxjQUFRLFVBQVIsR0FBcUIsSUFBckI7QUFDQSxjQUFRLGtCQUFSLEdBQTZCLGtCQUE3QjtBQUNBLGNBQVEsV0FBUixHQUFzQixXQUF0QjtBQUNBLGNBQVEsb0JBQVIsR0FBK0Isb0JBQS9CO0FBQ0EsY0FBUSxVQUFSLEdBQXFCLFVBQXJCO0FBQ0EsY0FBUSxHQUFSLEdBQWMsR0FBZDtBQUNBLGNBQVEsT0FBUixHQUFrQixPQUFsQjtBQUNBLGNBQVEsV0FBUixHQUFzQixXQUF0QjtBQUNBLGNBQVEscUJBQVIsR0FBZ0MscUJBQWhDLENBU0ksU0FBUyxRQUFRLFNBQVI7QUFFVCxnQkFBVSx1QkFBdUIsTUFBdkI7QUFFVixlQUFTLFFBQVEsYUFBUjtBQUVULFVBQUksd0JBQXdCLE1BQXhCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3BhdGgvZmFtaWx5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5nZXRTdGF0ZW1lbnRQYXJlbnQgPSBnZXRTdGF0ZW1lbnRQYXJlbnQ7XG5leHBvcnRzLmdldE9wcG9zaXRlID0gZ2V0T3Bwb3NpdGU7XG5leHBvcnRzLmdldENvbXBsZXRpb25SZWNvcmRzID0gZ2V0Q29tcGxldGlvblJlY29yZHM7XG5leHBvcnRzLmdldFNpYmxpbmcgPSBnZXRTaWJsaW5nO1xuZXhwb3J0cy5nZXQgPSBnZXQ7XG5leHBvcnRzLl9nZXRLZXkgPSBfZ2V0S2V5O1xuZXhwb3J0cy5fZ2V0UGF0dGVybiA9IF9nZXRQYXR0ZXJuO1xuZXhwb3J0cy5nZXRCaW5kaW5nSWRlbnRpZmllcnMgPSBnZXRCaW5kaW5nSWRlbnRpZmllcnM7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vaW5kZXhcIik7XG5cbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5kZXgpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uLy4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gZ2V0U3RhdGVtZW50UGFyZW50KCkge1xuICB2YXIgcGF0aCA9IHRoaXM7XG5cbiAgZG8ge1xuICAgIGlmICghcGF0aC5wYXJlbnRQYXRoIHx8IEFycmF5LmlzQXJyYXkocGF0aC5jb250YWluZXIpICYmIHBhdGguaXNTdGF0ZW1lbnQoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGggPSBwYXRoLnBhcmVudFBhdGg7XG4gICAgfVxuICB9IHdoaWxlIChwYXRoKTtcblxuICBpZiAocGF0aCAmJiAocGF0aC5pc1Byb2dyYW0oKSB8fCBwYXRoLmlzRmlsZSgpKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkZpbGUvUHJvZ3JhbSBub2RlLCB3ZSBjYW4ndCBwb3NzaWJseSBmaW5kIGEgc3RhdGVtZW50IHBhcmVudCB0byB0aGlzXCIpO1xuICB9XG5cbiAgcmV0dXJuIHBhdGg7XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gZ2V0T3Bwb3NpdGUoKSB7XG4gIGlmICh0aGlzLmtleSA9PT0gXCJsZWZ0XCIpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTaWJsaW5nKFwicmlnaHRcIik7XG4gIH0gZWxzZSBpZiAodGhpcy5rZXkgPT09IFwicmlnaHRcIikge1xuICAgIHJldHVybiB0aGlzLmdldFNpYmxpbmcoXCJsZWZ0XCIpO1xuICB9XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gZ2V0Q29tcGxldGlvblJlY29yZHMoKSB7XG4gIHZhciBwYXRocyA9IFtdO1xuXG4gIHZhciBhZGQgPSBmdW5jdGlvbiBhZGQocGF0aCkge1xuICAgIGlmIChwYXRoKSBwYXRocyA9IHBhdGhzLmNvbmNhdChwYXRoLmdldENvbXBsZXRpb25SZWNvcmRzKCkpO1xuICB9O1xuXG4gIGlmICh0aGlzLmlzSWZTdGF0ZW1lbnQoKSkge1xuICAgIGFkZCh0aGlzLmdldChcImNvbnNlcXVlbnRcIikpO1xuICAgIGFkZCh0aGlzLmdldChcImFsdGVybmF0ZVwiKSk7XG4gIH0gZWxzZSBpZiAodGhpcy5pc0RvRXhwcmVzc2lvbigpIHx8IHRoaXMuaXNGb3IoKSB8fCB0aGlzLmlzV2hpbGUoKSkge1xuICAgIGFkZCh0aGlzLmdldChcImJvZHlcIikpO1xuICB9IGVsc2UgaWYgKHRoaXMuaXNQcm9ncmFtKCkgfHwgdGhpcy5pc0Jsb2NrU3RhdGVtZW50KCkpIHtcbiAgICBhZGQodGhpcy5nZXQoXCJib2R5XCIpLnBvcCgpKTtcbiAgfSBlbHNlIGlmICh0aGlzLmlzRnVuY3Rpb24oKSkge1xuICAgIHJldHVybiB0aGlzLmdldChcImJvZHlcIikuZ2V0Q29tcGxldGlvblJlY29yZHMoKTtcbiAgfSBlbHNlIGlmICh0aGlzLmlzVHJ5U3RhdGVtZW50KCkpIHtcbiAgICBhZGQodGhpcy5nZXQoXCJibG9ja1wiKSk7XG4gICAgYWRkKHRoaXMuZ2V0KFwiaGFuZGxlclwiKSk7XG4gICAgYWRkKHRoaXMuZ2V0KFwiZmluYWxpemVyXCIpKTtcbiAgfSBlbHNlIHtcbiAgICBwYXRocy5wdXNoKHRoaXMpO1xuICB9XG5cbiAgcmV0dXJuIHBhdGhzO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIGdldFNpYmxpbmcoa2V5KSB7XG4gIHJldHVybiBfaW5kZXgyW1wiZGVmYXVsdFwiXS5nZXQoe1xuICAgIHBhcmVudFBhdGg6IHRoaXMucGFyZW50UGF0aCxcbiAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgIGNvbnRhaW5lcjogdGhpcy5jb250YWluZXIsXG4gICAgbGlzdEtleTogdGhpcy5saXN0S2V5LFxuICAgIGtleToga2V5XG4gIH0pO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIGdldChrZXksIGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHRydWUpIGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG4gIHZhciBwYXJ0cyA9IGtleS5zcGxpdChcIi5cIik7XG4gIGlmIChwYXJ0cy5sZW5ndGggPT09IDEpIHtcbiAgICAvLyBcImZvb1wiXG4gICAgcmV0dXJuIHRoaXMuX2dldEtleShrZXksIGNvbnRleHQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFwiZm9vLmJhclwiXG4gICAgcmV0dXJuIHRoaXMuX2dldFBhdHRlcm4ocGFydHMsIGNvbnRleHQpO1xuICB9XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gX2dldEtleShrZXksIGNvbnRleHQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHZhciBub2RlID0gdGhpcy5ub2RlO1xuICB2YXIgY29udGFpbmVyID0gbm9kZVtrZXldO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGNvbnRhaW5lcikpIHtcbiAgICAvLyByZXF1ZXN0ZWQgYSBjb250YWluZXIgc28gZ2l2ZSB0aGVtIGFsbCB0aGUgcGF0aHNcbiAgICByZXR1cm4gY29udGFpbmVyLm1hcChmdW5jdGlvbiAoXywgaSkge1xuICAgICAgcmV0dXJuIF9pbmRleDJbXCJkZWZhdWx0XCJdLmdldCh7XG4gICAgICAgIGxpc3RLZXk6IGtleSxcbiAgICAgICAgcGFyZW50UGF0aDogX3RoaXMsXG4gICAgICAgIHBhcmVudDogbm9kZSxcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICAgIGtleTogaVxuICAgICAgfSkuc2V0Q29udGV4dChjb250ZXh0KTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gX2luZGV4MltcImRlZmF1bHRcIl0uZ2V0KHtcbiAgICAgIHBhcmVudFBhdGg6IHRoaXMsXG4gICAgICBwYXJlbnQ6IG5vZGUsXG4gICAgICBjb250YWluZXI6IG5vZGUsXG4gICAgICBrZXk6IGtleVxuICAgIH0pLnNldENvbnRleHQoY29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBfZ2V0UGF0dGVybihwYXJ0cywgY29udGV4dCkge1xuICB2YXIgcGF0aCA9IHRoaXM7XG4gIHZhciBfYXJyID0gcGFydHM7XG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCBfYXJyLmxlbmd0aDsgX2krKykge1xuICAgIHZhciBwYXJ0ID0gX2FycltfaV07XG4gICAgaWYgKHBhcnQgPT09IFwiLlwiKSB7XG4gICAgICBwYXRoID0gcGF0aC5wYXJlbnRQYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSkge1xuICAgICAgICBwYXRoID0gcGF0aFtwYXJ0XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdGggPSBwYXRoLmdldChwYXJ0LCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhdGg7XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gZ2V0QmluZGluZ0lkZW50aWZpZXJzKGR1cGxpY2F0ZXMpIHtcbiAgcmV0dXJuIHQuZ2V0QmluZGluZ0lkZW50aWZpZXJzKHRoaXMubm9kZSwgZHVwbGljYXRlcyk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
