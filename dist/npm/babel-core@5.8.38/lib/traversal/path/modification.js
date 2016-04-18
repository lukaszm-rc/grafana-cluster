/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _typeof, _libHoister, _libHoister2, _index, _index2, _types, t;

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
   * Insert the provided nodes before the current one.
   */

  function insertBefore(nodes) {
    this._assertUnremoved();

    nodes = this._verifyNodeList(nodes);

    if (this.parentPath.isExpressionStatement() || this.parentPath.isLabeledStatement()) {
      return this.parentPath.insertBefore(nodes);
    } else if (this.isNodeType("Expression") || this.parentPath.isForStatement() && this.key === "init") {
      if (this.node) nodes.push(this.node);
      this.replaceExpressionWithStatements(nodes);
    } else {
      this._maybePopFromStatements(nodes);
      if (Array.isArray(this.container)) {
        return this._containerInsertBefore(nodes);
      } else if (this.isStatementOrBlock()) {
        if (this.node) nodes.push(this.node);
        this.node = this.container[this.key] = t.blockStatement(nodes);
      } else {
        throw new Error("We don't know what to do with this node type. We were previously a Statement but we can't fit in here?");
      }
    }

    return [this];
  }

  /**
   * [Please add a description.]
   */

  function _containerInsert(from, nodes) {
    this.updateSiblingKeys(from, nodes.length);

    var paths = [];

    for (var i = 0; i < nodes.length; i++) {
      var to = from + i;
      var node = nodes[i];
      this.container.splice(to, 0, node);

      if (this.context) {
        var path = this.context.create(this.parent, this.container, to, this.listKey);
        paths.push(path);
        this.queueNode(path);
      } else {
        paths.push(_index2["default"].get({
          parentPath: this,
          parent: node,
          container: this.container,
          listKey: this.listKey,
          key: to
        }));
      }
    }

    return paths;
  }

  /**
   * [Please add a description.]
   */

  function _containerInsertBefore(nodes) {
    return this._containerInsert(this.key, nodes);
  }

  /**
   * [Please add a description.]
   */

  function _containerInsertAfter(nodes) {
    return this._containerInsert(this.key + 1, nodes);
  }

  /**
   * [Please add a description.]
   */

  function _maybePopFromStatements(nodes) {
    var last = nodes[nodes.length - 1];
    if (t.isExpressionStatement(last) && t.isIdentifier(last.expression) && !this.isCompletionRecord()) {
      nodes.pop();
    }
  }

  /**
   * Insert the provided nodes after the current one. When inserting nodes after an
   * expression, ensure that the completion record is correct by pushing the current node.
   */

  function insertAfter(nodes) {
    this._assertUnremoved();

    nodes = this._verifyNodeList(nodes);

    if (this.parentPath.isExpressionStatement() || this.parentPath.isLabeledStatement()) {
      return this.parentPath.insertAfter(nodes);
    } else if (this.isNodeType("Expression") || this.parentPath.isForStatement() && this.key === "init") {
      if (this.node) {
        var temp = this.scope.generateDeclaredUidIdentifier();
        nodes.unshift(t.expressionStatement(t.assignmentExpression("=", temp, this.node)));
        nodes.push(t.expressionStatement(temp));
      }
      this.replaceExpressionWithStatements(nodes);
    } else {
      this._maybePopFromStatements(nodes);
      if (Array.isArray(this.container)) {
        return this._containerInsertAfter(nodes);
      } else if (this.isStatementOrBlock()) {
        if (this.node) nodes.unshift(this.node);
        this.node = this.container[this.key] = t.blockStatement(nodes);
      } else {
        throw new Error("We don't know what to do with this node type. We were previously a Statement but we can't fit in here?");
      }
    }

    return [this];
  }

  /**
   * Update all sibling node paths after `fromIndex` by `incrementBy`.
   */

  function updateSiblingKeys(fromIndex, incrementBy) {
    var paths = this.parent._paths;
    for (var i = 0; i < paths.length; i++) {
      var path = paths[i];
      if (path.key >= fromIndex) {
        path.key += incrementBy;
      }
    }
  }

  /**
   * [Please add a description.]
   */

  function _verifyNodeList(nodes) {
    if (nodes.constructor !== Array) {
      nodes = [nodes];
    }

    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (!node) {
        throw new Error("Node list has falsy node with the index of " + i);
      } else if ((typeof node === "undefined" ? "undefined" : _typeof(node)) !== "object") {
        throw new Error("Node list contains a non-object node with the index of " + i);
      } else if (!node.type) {
        throw new Error("Node list contains a node without a type with the index of " + i);
      } else if (node instanceof _index2["default"]) {
        nodes[i] = node.node;
      }
    }

    return nodes;
  }

  /**
   * [Please add a description.]
   */

  function unshiftContainer(listKey, nodes) {
    this._assertUnremoved();

    nodes = this._verifyNodeList(nodes);

    // get the first path and insert our nodes before it, if it doesn't exist then it
    // doesn't matter, our nodes will be inserted anyway

    var container = this.node[listKey];
    var path = _index2["default"].get({
      parentPath: this,
      parent: this.node,
      container: container,
      listKey: listKey,
      key: 0
    });

    return path.insertBefore(nodes);
  }

  /**
   * [Please add a description.]
   */

  function pushContainer(listKey, nodes) {
    this._assertUnremoved();

    nodes = this._verifyNodeList(nodes);

    // get an invisible path that represents the last node + 1 and replace it with our
    // nodes, effectively inlining it

    var container = this.node[listKey];
    var i = container.length;
    var path = _index2["default"].get({
      parentPath: this,
      parent: this.node,
      container: container,
      listKey: listKey,
      key: i
    });

    return path.replaceWith(nodes, true);
  }

  /**
   * Hoist the current node to the highest scope possible and return a UID
   * referencing it.
   */

  function hoist() {
    var scope = arguments.length <= 0 || arguments[0] === undefined ? this.scope : arguments[0];

    var hoister = new _libHoister2["default"](this, scope);
    return hoister.run();
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
      exports.insertBefore = insertBefore;
      exports._containerInsert = _containerInsert;
      exports._containerInsertBefore = _containerInsertBefore;
      exports._containerInsertAfter = _containerInsertAfter;
      exports._maybePopFromStatements = _maybePopFromStatements;
      exports.insertAfter = insertAfter;
      exports.updateSiblingKeys = updateSiblingKeys;
      exports._verifyNodeList = _verifyNodeList;
      exports.unshiftContainer = unshiftContainer;
      exports.pushContainer = pushContainer;
      exports.hoist = hoist;_libHoister = require("./lib/hoister");
      _libHoister2 = _interopRequireDefault(_libHoister);
      _index = require("./index");
      _index2 = _interopRequireDefault(_index);
      _types = require("../../types");
      t = _interopRequireWildcard(_types);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3BhdGgvbW9kaWZpY2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBZ0JBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7QUFJQSxXQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBSixHQUFpQixHQUF4QixHQUE4QixFQUFFLFdBQVcsR0FBWCxFQUFoQyxDQUFUO0dBQXJDOzs7Ozs7QUFrQkEsV0FBUyxZQUFULENBQXNCLEtBQXRCLEVBQTZCO0FBQzNCLFNBQUssZ0JBQUwsR0FEMkI7O0FBRzNCLFlBQVEsS0FBSyxlQUFMLENBQXFCLEtBQXJCLENBQVIsQ0FIMkI7O0FBSzNCLFFBQUksS0FBSyxVQUFMLENBQWdCLHFCQUFoQixNQUEyQyxLQUFLLFVBQUwsQ0FBZ0Isa0JBQWhCLEVBQTNDLEVBQWlGO0FBQ25GLGFBQU8sS0FBSyxVQUFMLENBQWdCLFlBQWhCLENBQTZCLEtBQTdCLENBQVAsQ0FEbUY7S0FBckYsTUFFTyxJQUFJLEtBQUssVUFBTCxDQUFnQixZQUFoQixLQUFpQyxLQUFLLFVBQUws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LENBQVYsTUFBaUIsU0FBakIsR0FBNkIsS0FBSyxLQUFMLEdBQWEsVUFBVSxDQUFWLENBQW5FLENBREc7O0FBR2YsUUFBSSxVQUFVLElBQUksYUFBYSxTQUFiLENBQUosQ0FBNEIsSUFBNUIsRUFBa0MsS0FBbEMsQ0FBVixDQUhXO0FBSWYsV0FBTyxRQUFRLEdBQVIsRUFBUCxDQUplO0dBQWpCOzs7Ozs7Ozs7QUF2UEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCO0FBQ0EsY0FBUSxZQUFSLEdBQXVCLFlBQXZCO0FBQ0EsY0FBUSxnQkFBUixHQUEyQixnQkFBM0I7QUFDQSxjQUFRLHNCQUFSLEdBQWlDLHNCQUFqQztBQUNBLGNBQVEscUJBQVIsR0FBZ0MscUJBQWhDO0FBQ0EsY0FBUSx1QkFBUixHQUFrQyx1QkFBbEM7QUFDQSxjQUFRLFdBQVIsR0FBc0IsV0FBdEI7QUFDQSxjQUFRLGlCQUFSLEdBQTRCLGlCQUE1QjtBQUNBLGNBQVEsZUFBUixHQUEwQixlQUExQjtBQUNBLGNBQVEsZ0JBQVIsR0FBMkIsZ0JBQTNCO0FBQ0EsY0FBUSxhQUFSLEdBQXdCLGFBQXhCO0FBQ0EsY0FBUSxLQUFSLEdBQWdCLEtBQWhCLENBU0ksY0FBYyxRQUFRLGVBQVI7QUFFZCxxQkFBZSx1QkFBdUIsV0FBdkI7QUFFZixlQUFTLFFBQVEsU0FBUjtBQUVULGdCQUFVLHVCQUF1QixNQUF2QjtBQUVWLGVBQVMsUUFBUSxhQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmF2ZXJzYWwvcGF0aC9tb2RpZmljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmluc2VydEJlZm9yZSA9IGluc2VydEJlZm9yZTtcbmV4cG9ydHMuX2NvbnRhaW5lckluc2VydCA9IF9jb250YWluZXJJbnNlcnQ7XG5leHBvcnRzLl9jb250YWluZXJJbnNlcnRCZWZvcmUgPSBfY29udGFpbmVySW5zZXJ0QmVmb3JlO1xuZXhwb3J0cy5fY29udGFpbmVySW5zZXJ0QWZ0ZXIgPSBfY29udGFpbmVySW5zZXJ0QWZ0ZXI7XG5leHBvcnRzLl9tYXliZVBvcEZyb21TdGF0ZW1lbnRzID0gX21heWJlUG9wRnJvbVN0YXRlbWVudHM7XG5leHBvcnRzLmluc2VydEFmdGVyID0gaW5zZXJ0QWZ0ZXI7XG5leHBvcnRzLnVwZGF0ZVNpYmxpbmdLZXlzID0gdXBkYXRlU2libGluZ0tleXM7XG5leHBvcnRzLl92ZXJpZnlOb2RlTGlzdCA9IF92ZXJpZnlOb2RlTGlzdDtcbmV4cG9ydHMudW5zaGlmdENvbnRhaW5lciA9IHVuc2hpZnRDb250YWluZXI7XG5leHBvcnRzLnB1c2hDb250YWluZXIgPSBwdXNoQ29udGFpbmVyO1xuZXhwb3J0cy5ob2lzdCA9IGhvaXN0O1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIF9saWJIb2lzdGVyID0gcmVxdWlyZShcIi4vbGliL2hvaXN0ZXJcIik7XG5cbnZhciBfbGliSG9pc3RlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saWJIb2lzdGVyKTtcblxudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuL2luZGV4XCIpO1xuXG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luZGV4KTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG4vKipcbiAqIEluc2VydCB0aGUgcHJvdmlkZWQgbm9kZXMgYmVmb3JlIHRoZSBjdXJyZW50IG9uZS5cbiAqL1xuXG5mdW5jdGlvbiBpbnNlcnRCZWZvcmUobm9kZXMpIHtcbiAgdGhpcy5fYXNzZXJ0VW5yZW1vdmVkKCk7XG5cbiAgbm9kZXMgPSB0aGlzLl92ZXJpZnlOb2RlTGlzdChub2Rlcyk7XG5cbiAgaWYgKHRoaXMucGFyZW50UGF0aC5pc0V4cHJlc3Npb25TdGF0ZW1lbnQoKSB8fCB0aGlzLnBhcmVudFBhdGguaXNMYWJlbGVkU3RhdGVtZW50KCkpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRQYXRoLmluc2VydEJlZm9yZShub2Rlcyk7XG4gIH0gZWxzZSBpZiAodGhpcy5pc05vZGVUeXBlKFwiRXhwcmVzc2lvblwiKSB8fCB0aGlzLnBhcmVudFBhdGguaXNGb3JTdGF0ZW1lbnQoKSAmJiB0aGlzLmtleSA9PT0gXCJpbml0XCIpIHtcbiAgICBpZiAodGhpcy5ub2RlKSBub2Rlcy5wdXNoKHRoaXMubm9kZSk7XG4gICAgdGhpcy5yZXBsYWNlRXhwcmVzc2lvbldpdGhTdGF0ZW1lbnRzKG5vZGVzKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9tYXliZVBvcEZyb21TdGF0ZW1lbnRzKG5vZGVzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmNvbnRhaW5lcikpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb250YWluZXJJbnNlcnRCZWZvcmUobm9kZXMpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc1N0YXRlbWVudE9yQmxvY2soKSkge1xuICAgICAgaWYgKHRoaXMubm9kZSkgbm9kZXMucHVzaCh0aGlzLm5vZGUpO1xuICAgICAgdGhpcy5ub2RlID0gdGhpcy5jb250YWluZXJbdGhpcy5rZXldID0gdC5ibG9ja1N0YXRlbWVudChub2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIldlIGRvbid0IGtub3cgd2hhdCB0byBkbyB3aXRoIHRoaXMgbm9kZSB0eXBlLiBXZSB3ZXJlIHByZXZpb3VzbHkgYSBTdGF0ZW1lbnQgYnV0IHdlIGNhbid0IGZpdCBpbiBoZXJlP1wiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gW3RoaXNdO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIF9jb250YWluZXJJbnNlcnQoZnJvbSwgbm9kZXMpIHtcbiAgdGhpcy51cGRhdGVTaWJsaW5nS2V5cyhmcm9tLCBub2Rlcy5sZW5ndGgpO1xuXG4gIHZhciBwYXRocyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG8gPSBmcm9tICsgaTtcbiAgICB2YXIgbm9kZSA9IG5vZGVzW2ldO1xuICAgIHRoaXMuY29udGFpbmVyLnNwbGljZSh0bywgMCwgbm9kZSk7XG5cbiAgICBpZiAodGhpcy5jb250ZXh0KSB7XG4gICAgICB2YXIgcGF0aCA9IHRoaXMuY29udGV4dC5jcmVhdGUodGhpcy5wYXJlbnQsIHRoaXMuY29udGFpbmVyLCB0bywgdGhpcy5saXN0S2V5KTtcbiAgICAgIHBhdGhzLnB1c2gocGF0aCk7XG4gICAgICB0aGlzLnF1ZXVlTm9kZShwYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGF0aHMucHVzaChfaW5kZXgyW1wiZGVmYXVsdFwiXS5nZXQoe1xuICAgICAgICBwYXJlbnRQYXRoOiB0aGlzLFxuICAgICAgICBwYXJlbnQ6IG5vZGUsXG4gICAgICAgIGNvbnRhaW5lcjogdGhpcy5jb250YWluZXIsXG4gICAgICAgIGxpc3RLZXk6IHRoaXMubGlzdEtleSxcbiAgICAgICAga2V5OiB0b1xuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXRocztcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBfY29udGFpbmVySW5zZXJ0QmVmb3JlKG5vZGVzKSB7XG4gIHJldHVybiB0aGlzLl9jb250YWluZXJJbnNlcnQodGhpcy5rZXksIG5vZGVzKTtcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBfY29udGFpbmVySW5zZXJ0QWZ0ZXIobm9kZXMpIHtcbiAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lckluc2VydCh0aGlzLmtleSArIDEsIG5vZGVzKTtcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBfbWF5YmVQb3BGcm9tU3RhdGVtZW50cyhub2Rlcykge1xuICB2YXIgbGFzdCA9IG5vZGVzW25vZGVzLmxlbmd0aCAtIDFdO1xuICBpZiAodC5pc0V4cHJlc3Npb25TdGF0ZW1lbnQobGFzdCkgJiYgdC5pc0lkZW50aWZpZXIobGFzdC5leHByZXNzaW9uKSAmJiAhdGhpcy5pc0NvbXBsZXRpb25SZWNvcmQoKSkge1xuICAgIG5vZGVzLnBvcCgpO1xuICB9XG59XG5cbi8qKlxuICogSW5zZXJ0IHRoZSBwcm92aWRlZCBub2RlcyBhZnRlciB0aGUgY3VycmVudCBvbmUuIFdoZW4gaW5zZXJ0aW5nIG5vZGVzIGFmdGVyIGFuXG4gKiBleHByZXNzaW9uLCBlbnN1cmUgdGhhdCB0aGUgY29tcGxldGlvbiByZWNvcmQgaXMgY29ycmVjdCBieSBwdXNoaW5nIHRoZSBjdXJyZW50IG5vZGUuXG4gKi9cblxuZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIobm9kZXMpIHtcbiAgdGhpcy5fYXNzZXJ0VW5yZW1vdmVkKCk7XG5cbiAgbm9kZXMgPSB0aGlzLl92ZXJpZnlOb2RlTGlzdChub2Rlcyk7XG5cbiAgaWYgKHRoaXMucGFyZW50UGF0aC5pc0V4cHJlc3Npb25TdGF0ZW1lbnQoKSB8fCB0aGlzLnBhcmVudFBhdGguaXNMYWJlbGVkU3RhdGVtZW50KCkpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRQYXRoLmluc2VydEFmdGVyKG5vZGVzKTtcbiAgfSBlbHNlIGlmICh0aGlzLmlzTm9kZVR5cGUoXCJFeHByZXNzaW9uXCIpIHx8IHRoaXMucGFyZW50UGF0aC5pc0ZvclN0YXRlbWVudCgpICYmIHRoaXMua2V5ID09PSBcImluaXRcIikge1xuICAgIGlmICh0aGlzLm5vZGUpIHtcbiAgICAgIHZhciB0ZW1wID0gdGhpcy5zY29wZS5nZW5lcmF0ZURlY2xhcmVkVWlkSWRlbnRpZmllcigpO1xuICAgICAgbm9kZXMudW5zaGlmdCh0LmV4cHJlc3Npb25TdGF0ZW1lbnQodC5hc3NpZ25tZW50RXhwcmVzc2lvbihcIj1cIiwgdGVtcCwgdGhpcy5ub2RlKSkpO1xuICAgICAgbm9kZXMucHVzaCh0LmV4cHJlc3Npb25TdGF0ZW1lbnQodGVtcCkpO1xuICAgIH1cbiAgICB0aGlzLnJlcGxhY2VFeHByZXNzaW9uV2l0aFN0YXRlbWVudHMobm9kZXMpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX21heWJlUG9wRnJvbVN0YXRlbWVudHMobm9kZXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuY29udGFpbmVyKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lckluc2VydEFmdGVyKG5vZGVzKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNTdGF0ZW1lbnRPckJsb2NrKCkpIHtcbiAgICAgIGlmICh0aGlzLm5vZGUpIG5vZGVzLnVuc2hpZnQodGhpcy5ub2RlKTtcbiAgICAgIHRoaXMubm9kZSA9IHRoaXMuY29udGFpbmVyW3RoaXMua2V5XSA9IHQuYmxvY2tTdGF0ZW1lbnQobm9kZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXZSBkb24ndCBrbm93IHdoYXQgdG8gZG8gd2l0aCB0aGlzIG5vZGUgdHlwZS4gV2Ugd2VyZSBwcmV2aW91c2x5IGEgU3RhdGVtZW50IGJ1dCB3ZSBjYW4ndCBmaXQgaW4gaGVyZT9cIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFt0aGlzXTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgYWxsIHNpYmxpbmcgbm9kZSBwYXRocyBhZnRlciBgZnJvbUluZGV4YCBieSBgaW5jcmVtZW50QnlgLlxuICovXG5cbmZ1bmN0aW9uIHVwZGF0ZVNpYmxpbmdLZXlzKGZyb21JbmRleCwgaW5jcmVtZW50QnkpIHtcbiAgdmFyIHBhdGhzID0gdGhpcy5wYXJlbnQuX3BhdGhzO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBhdGggPSBwYXRoc1tpXTtcbiAgICBpZiAocGF0aC5rZXkgPj0gZnJvbUluZGV4KSB7XG4gICAgICBwYXRoLmtleSArPSBpbmNyZW1lbnRCeTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBfdmVyaWZ5Tm9kZUxpc3Qobm9kZXMpIHtcbiAgaWYgKG5vZGVzLmNvbnN0cnVjdG9yICE9PSBBcnJheSkge1xuICAgIG5vZGVzID0gW25vZGVzXTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbm9kZSA9IG5vZGVzW2ldO1xuICAgIGlmICghbm9kZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm9kZSBsaXN0IGhhcyBmYWxzeSBub2RlIHdpdGggdGhlIGluZGV4IG9mIFwiICsgaSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygbm9kZSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm9kZSBsaXN0IGNvbnRhaW5zIGEgbm9uLW9iamVjdCBub2RlIHdpdGggdGhlIGluZGV4IG9mIFwiICsgaSk7XG4gICAgfSBlbHNlIGlmICghbm9kZS50eXBlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb2RlIGxpc3QgY29udGFpbnMgYSBub2RlIHdpdGhvdXQgYSB0eXBlIHdpdGggdGhlIGluZGV4IG9mIFwiICsgaSk7XG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgX2luZGV4MltcImRlZmF1bHRcIl0pIHtcbiAgICAgIG5vZGVzW2ldID0gbm9kZS5ub2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub2Rlcztcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiB1bnNoaWZ0Q29udGFpbmVyKGxpc3RLZXksIG5vZGVzKSB7XG4gIHRoaXMuX2Fzc2VydFVucmVtb3ZlZCgpO1xuXG4gIG5vZGVzID0gdGhpcy5fdmVyaWZ5Tm9kZUxpc3Qobm9kZXMpO1xuXG4gIC8vIGdldCB0aGUgZmlyc3QgcGF0aCBhbmQgaW5zZXJ0IG91ciBub2RlcyBiZWZvcmUgaXQsIGlmIGl0IGRvZXNuJ3QgZXhpc3QgdGhlbiBpdFxuICAvLyBkb2Vzbid0IG1hdHRlciwgb3VyIG5vZGVzIHdpbGwgYmUgaW5zZXJ0ZWQgYW55d2F5XG5cbiAgdmFyIGNvbnRhaW5lciA9IHRoaXMubm9kZVtsaXN0S2V5XTtcbiAgdmFyIHBhdGggPSBfaW5kZXgyW1wiZGVmYXVsdFwiXS5nZXQoe1xuICAgIHBhcmVudFBhdGg6IHRoaXMsXG4gICAgcGFyZW50OiB0aGlzLm5vZGUsXG4gICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgbGlzdEtleTogbGlzdEtleSxcbiAgICBrZXk6IDBcbiAgfSk7XG5cbiAgcmV0dXJuIHBhdGguaW5zZXJ0QmVmb3JlKG5vZGVzKTtcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBwdXNoQ29udGFpbmVyKGxpc3RLZXksIG5vZGVzKSB7XG4gIHRoaXMuX2Fzc2VydFVucmVtb3ZlZCgpO1xuXG4gIG5vZGVzID0gdGhpcy5fdmVyaWZ5Tm9kZUxpc3Qobm9kZXMpO1xuXG4gIC8vIGdldCBhbiBpbnZpc2libGUgcGF0aCB0aGF0IHJlcHJlc2VudHMgdGhlIGxhc3Qgbm9kZSArIDEgYW5kIHJlcGxhY2UgaXQgd2l0aCBvdXJcbiAgLy8gbm9kZXMsIGVmZmVjdGl2ZWx5IGlubGluaW5nIGl0XG5cbiAgdmFyIGNvbnRhaW5lciA9IHRoaXMubm9kZVtsaXN0S2V5XTtcbiAgdmFyIGkgPSBjb250YWluZXIubGVuZ3RoO1xuICB2YXIgcGF0aCA9IF9pbmRleDJbXCJkZWZhdWx0XCJdLmdldCh7XG4gICAgcGFyZW50UGF0aDogdGhpcyxcbiAgICBwYXJlbnQ6IHRoaXMubm9kZSxcbiAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICBsaXN0S2V5OiBsaXN0S2V5LFxuICAgIGtleTogaVxuICB9KTtcblxuICByZXR1cm4gcGF0aC5yZXBsYWNlV2l0aChub2RlcywgdHJ1ZSk7XG59XG5cbi8qKlxuICogSG9pc3QgdGhlIGN1cnJlbnQgbm9kZSB0byB0aGUgaGlnaGVzdCBzY29wZSBwb3NzaWJsZSBhbmQgcmV0dXJuIGEgVUlEXG4gKiByZWZlcmVuY2luZyBpdC5cbiAqL1xuXG5mdW5jdGlvbiBob2lzdCgpIHtcbiAgdmFyIHNjb3BlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdGhpcy5zY29wZSA6IGFyZ3VtZW50c1swXTtcblxuICB2YXIgaG9pc3RlciA9IG5ldyBfbGliSG9pc3RlcjJbXCJkZWZhdWx0XCJdKHRoaXMsIHNjb3BlKTtcbiAgcmV0dXJuIGhvaXN0ZXIucnVuKCk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
