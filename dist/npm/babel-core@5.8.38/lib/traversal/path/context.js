/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _index, _index2;

  // istanbul ignore next

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }

  /**
   * [Please add a description.]
   */

  function call(key) {
    var node = this.node;
    if (!node) return;

    var opts = this.opts;

    var _arr = [opts[key], opts[node.type] && opts[node.type][key]];
    for (var _i = 0; _i < _arr.length; _i++) {
      var fns = _arr[_i];
      if (!fns) continue;

      var _arr2 = fns;
      for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
        var fn = _arr2[_i2];
        if (!fn) continue;

        var _node = this.node;
        if (!_node) return;

        var previousType = this.type;

        // call the function with the params (node, parent, scope, state)
        var replacement = fn.call(this, _node, this.parent, this.scope, this.state);

        if (replacement) {
          this.replaceWith(replacement, true);
        }

        if (this.shouldStop || this.shouldSkip || this.removed) return;

        if (previousType !== this.type) {
          this.queueNode(this);
          return;
        }
      }
    }
  }

  /**
   * [Please add a description.]
   */

  function isBlacklisted() {
    var blacklist = this.opts.blacklist;
    return blacklist && blacklist.indexOf(this.node.type) > -1;
  }

  /**
   * Visits a node and calls appropriate enter and exit callbacks
   * as required.
   */

  function visit() {
    if (this.isBlacklisted()) return false;
    if (this.opts.shouldSkip && this.opts.shouldSkip(this)) return false;

    this.call("enter");

    if (this.shouldSkip) {
      return this.shouldStop;
    }

    var node = this.node;
    var opts = this.opts;

    if (node) {
      if (Array.isArray(node)) {
        // traverse over these replacement nodes we purposely don't call exitNode
        // as the original node has been destroyed
        for (var i = 0; i < node.length; i++) {
          _index2["default"].node(node[i], opts, this.scope, this.state, this, this.skipKeys);
        }
      } else {
        _index2["default"].node(node, opts, this.scope, this.state, this, this.skipKeys);
        this.call("exit");
      }
    }

    return this.shouldStop;
  }

  /**
   * Sets shouldSkip flag true so that this node will be skipped while visiting.
   */

  function skip() {
    this.shouldSkip = true;
  }

  /**
   * Adds given key to the list of keys to be skipped.
   */

  function skipKey(key) {
    this.skipKeys[key] = true;
  }

  /**
   * [Please add a description.]
   */

  function stop() {
    this.shouldStop = true;
    this.shouldSkip = true;
  }

  /**
   * [Please add a description.]
   */

  function setScope() {
    if (this.opts && this.opts.noScope) return;

    var target = this.context || this.parentPath;
    this.scope = this.getScope(target && target.scope);
    if (this.scope) this.scope.init();
  }

  /**
   * [Please add a description.]
   */

  function setContext(context) {
    this.shouldSkip = false;
    this.shouldStop = false;
    this.removed = false;
    this.skipKeys = {};

    if (context) {
      this.context = context;
      this.state = context.state;
      this.opts = context.opts;
    }

    this.setScope();

    return this;
  }

  /**
   * Here we resync the node paths `key` and `container`. If they've changed according
   * to what we have stored internally then we attempt to resync by crawling and looking
   * for the new values.
   */

  function resync() {
    if (this.removed) return;

    this._resyncParent();
    this._resyncList();
    this._resyncKey();
    //this._resyncRemoved();
  }

  /**
   * [Please add a description.]
   */

  function _resyncParent() {
    if (this.parentPath) {
      this.parent = this.parentPath.node;
    }
  }

  /**
   * [Please add a description.]
   */

  function _resyncKey() {
    if (!this.container) return;

    if (this.node === this.container[this.key]) return;

    // grrr, path key is out of sync. this is likely due to a modification to the AST
    // not done through our path APIs

    if (Array.isArray(this.container)) {
      for (var i = 0; i < this.container.length; i++) {
        if (this.container[i] === this.node) {
          return this.setKey(i);
        }
      }
    } else {
      for (var key in this.container) {
        if (this.container[key] === this.node) {
          return this.setKey(key);
        }
      }
    }

    this.key = null;
  }

  /**
   * [Please add a description.]
   */

  function _resyncList() {
    var listKey = this.listKey;
    var parentPath = this.parentPath;
    if (!listKey || !parentPath) return;

    var newContainer = parentPath.node[listKey];
    if (this.container === newContainer) return;

    // container is out of sync. this is likely the result of it being reassigned

    if (newContainer) {
      this.container = newContainer;
    } else {
      this.container = null;
    }
  }

  /**
   * [Please add a description.]
   */

  function _resyncRemoved() {
    if (this.key == null || !this.container || this.container[this.key] !== this.node) {
      this._markRemoved();
    }
  }

  /**
   * [Please add a description.]
   */

  function shiftContext() {
    this.contexts.shift();
    this.setContext(this.contexts[0]);
  }

  /**
   * [Please add a description.]
   */

  function unshiftContext(context) {
    this.contexts.unshift(context);
    this.setContext(context);
  }

  /**
   * [Please add a description.]
   */

  function setup(parentPath, container, listKey, key) {
    this.inList = !!listKey;
    this.listKey = listKey;
    this.parentKey = listKey || key;
    this.container = container;

    this.parentPath = parentPath || this.parentPath;
    this.setKey(key);
  }

  /**
   * [Please add a description.]
   */

  function setKey(key) {
    this.key = key;
    this.node = this.container[this.key];
    this.type = this.node && this.node.type;
  }

  /**
   * [Please add a description.]
   */

  function queueNode(path) {
    var _arr3 = this.contexts;

    for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
      var context = _arr3[_i3];
      if (context.queue) {
        context.queue.push(path);
      }
    }
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.call = call;
      exports.isBlacklisted = isBlacklisted;
      exports.visit = visit;
      exports.skip = skip;
      exports.skipKey = skipKey;
      exports.stop = stop;
      exports.setScope = setScope;
      exports.setContext = setContext;
      exports.resync = resync;
      exports._resyncParent = _resyncParent;
      exports._resyncKey = _resyncKey;
      exports._resyncList = _resyncList;
      exports._resyncRemoved = _resyncRemoved;
      exports.shiftContext = shiftContext;
      exports.unshiftContext = unshiftContext;
      exports.setup = setup;
      exports.setKey = setKey;
      exports.queueNode = queueNode;_index = require("../index");
      _index2 = _interopRequireDefault(_index);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3BhdGgvY29udGV4dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQXVCQSxXQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBSixHQUFpQixHQUF4QixHQUE4QixFQUFFLFdBQVcsR0FBWCxFQUFoQyxDQUFUO0dBQXJDOzs7Ozs7QUFVQSxXQUFTLElBQVQsQ0FBYyxHQUFkLEVBQW1CO0FBQ2pCLFFBQUksT0FBTyxLQUFLLElBQUwsQ0FETTtBQUVqQixRQUFJLENBQUMsSUFBRCxFQUFPLE9BQVg7O0FBRUEsUUFBSSxPQUFPLEtBQUssSUFBTCxDQUpNOztBQU1qQixRQUFJLE9BQU8sQ0FBQyxLQUFLLEdBQUwsQ0FBRCxFQUFZLEtBQUssS0FBSyxJQUFMLENBQUwsSUFBbUIsS0FBSyxLQUFLLElBQUwsQ0FBTCxDQUFnQixHQUFoQixDQUFuQixDQUFuQixDQU5hO0FBT2pCLFNBQUssSUFBSSxLQUFLLENBQUwsRUFBUSxLQUFLLEtBQUssTUFBTCxFQUFhLElBQW5DLEVBQXlDO0FBQ3ZDLFVBQUksTUFBTSxLQUFLLEVBQUwsQ0FBTixDQURtQztBQUV2QyxVQUFJLENBQUMsR0FBRCxFQUFNLFNBQVY7O0FBRUEsVUFBSSxRQUFRLEdBQVIsQ0FKbUM7QUFLdkMsV0FBSyxJQUFJLE1BQU0sQ0FBTixFQUFTLE1BQU0sTUFBTSxNQUFOLEVBQWMsS0FBdEMsRUFBNkM7QUFDM0MsWUFBSSxLQUFLLE1BQU0sR0FBTixDQUFMLENBRHVDO0FBRTNDLFlBQUksQ0FBQyxFQUFELEVBQUssU0FBVDs7QUFFQSxZQUFJLFFBQVEsS0FBSyxJQUFMLENBSitCO0FBSzNDLFlBQUksQ0FBQyxLQUFELEVBQVEsT0FBWjs7QUFFQSxZQUFJLGVBQWUsS0FBSyxJQUFMOzs7QUFQd0IsWUFVdkMsY0FBYyxHQUFHLElBQUgsQ0FBUSxJQUFSLEVBQWMsS0FB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USxLQUFSLEdBQWdCLEtBQWhCO0FBQ0EsY0FBUSxJQUFSLEdBQWUsSUFBZjtBQUNBLGNBQVEsT0FBUixHQUFrQixPQUFsQjtBQUNBLGNBQVEsSUFBUixHQUFlLElBQWY7QUFDQSxjQUFRLFFBQVIsR0FBbUIsUUFBbkI7QUFDQSxjQUFRLFVBQVIsR0FBcUIsVUFBckI7QUFDQSxjQUFRLE1BQVIsR0FBaUIsTUFBakI7QUFDQSxjQUFRLGFBQVIsR0FBd0IsYUFBeEI7QUFDQSxjQUFRLFVBQVIsR0FBcUIsVUFBckI7QUFDQSxjQUFRLFdBQVIsR0FBc0IsV0FBdEI7QUFDQSxjQUFRLGNBQVIsR0FBeUIsY0FBekI7QUFDQSxjQUFRLFlBQVIsR0FBdUIsWUFBdkI7QUFDQSxjQUFRLGNBQVIsR0FBeUIsY0FBekI7QUFDQSxjQUFRLEtBQVIsR0FBZ0IsS0FBaEI7QUFDQSxjQUFRLE1BQVIsR0FBaUIsTUFBakI7QUFDQSxjQUFRLFNBQVIsR0FBb0IsU0FBcEIsQ0FLSSxTQUFTLFFBQVEsVUFBUjtBQUVULGdCQUFVLHVCQUF1QixNQUF2QiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYXZlcnNhbC9wYXRoL2NvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNhbGwgPSBjYWxsO1xuZXhwb3J0cy5pc0JsYWNrbGlzdGVkID0gaXNCbGFja2xpc3RlZDtcbmV4cG9ydHMudmlzaXQgPSB2aXNpdDtcbmV4cG9ydHMuc2tpcCA9IHNraXA7XG5leHBvcnRzLnNraXBLZXkgPSBza2lwS2V5O1xuZXhwb3J0cy5zdG9wID0gc3RvcDtcbmV4cG9ydHMuc2V0U2NvcGUgPSBzZXRTY29wZTtcbmV4cG9ydHMuc2V0Q29udGV4dCA9IHNldENvbnRleHQ7XG5leHBvcnRzLnJlc3luYyA9IHJlc3luYztcbmV4cG9ydHMuX3Jlc3luY1BhcmVudCA9IF9yZXN5bmNQYXJlbnQ7XG5leHBvcnRzLl9yZXN5bmNLZXkgPSBfcmVzeW5jS2V5O1xuZXhwb3J0cy5fcmVzeW5jTGlzdCA9IF9yZXN5bmNMaXN0O1xuZXhwb3J0cy5fcmVzeW5jUmVtb3ZlZCA9IF9yZXN5bmNSZW1vdmVkO1xuZXhwb3J0cy5zaGlmdENvbnRleHQgPSBzaGlmdENvbnRleHQ7XG5leHBvcnRzLnVuc2hpZnRDb250ZXh0ID0gdW5zaGlmdENvbnRleHQ7XG5leHBvcnRzLnNldHVwID0gc2V0dXA7XG5leHBvcnRzLnNldEtleSA9IHNldEtleTtcbmV4cG9ydHMucXVldWVOb2RlID0gcXVldWVOb2RlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi4vaW5kZXhcIik7XG5cbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5kZXgpO1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIGNhbGwoa2V5KSB7XG4gIHZhciBub2RlID0gdGhpcy5ub2RlO1xuICBpZiAoIW5vZGUpIHJldHVybjtcblxuICB2YXIgb3B0cyA9IHRoaXMub3B0cztcblxuICB2YXIgX2FyciA9IFtvcHRzW2tleV0sIG9wdHNbbm9kZS50eXBlXSAmJiBvcHRzW25vZGUudHlwZV1ba2V5XV07XG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCBfYXJyLmxlbmd0aDsgX2krKykge1xuICAgIHZhciBmbnMgPSBfYXJyW19pXTtcbiAgICBpZiAoIWZucykgY29udGludWU7XG5cbiAgICB2YXIgX2FycjIgPSBmbnM7XG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgX2FycjIubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGZuID0gX2FycjJbX2kyXTtcbiAgICAgIGlmICghZm4pIGNvbnRpbnVlO1xuXG4gICAgICB2YXIgX25vZGUgPSB0aGlzLm5vZGU7XG4gICAgICBpZiAoIV9ub2RlKSByZXR1cm47XG5cbiAgICAgIHZhciBwcmV2aW91c1R5cGUgPSB0aGlzLnR5cGU7XG5cbiAgICAgIC8vIGNhbGwgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIHBhcmFtcyAobm9kZSwgcGFyZW50LCBzY29wZSwgc3RhdGUpXG4gICAgICB2YXIgcmVwbGFjZW1lbnQgPSBmbi5jYWxsKHRoaXMsIF9ub2RlLCB0aGlzLnBhcmVudCwgdGhpcy5zY29wZSwgdGhpcy5zdGF0ZSk7XG5cbiAgICAgIGlmIChyZXBsYWNlbWVudCkge1xuICAgICAgICB0aGlzLnJlcGxhY2VXaXRoKHJlcGxhY2VtZW50LCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2hvdWxkU3RvcCB8fCB0aGlzLnNob3VsZFNraXAgfHwgdGhpcy5yZW1vdmVkKSByZXR1cm47XG5cbiAgICAgIGlmIChwcmV2aW91c1R5cGUgIT09IHRoaXMudHlwZSkge1xuICAgICAgICB0aGlzLnF1ZXVlTm9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIGlzQmxhY2tsaXN0ZWQoKSB7XG4gIHZhciBibGFja2xpc3QgPSB0aGlzLm9wdHMuYmxhY2tsaXN0O1xuICByZXR1cm4gYmxhY2tsaXN0ICYmIGJsYWNrbGlzdC5pbmRleE9mKHRoaXMubm9kZS50eXBlKSA+IC0xO1xufVxuXG4vKipcbiAqIFZpc2l0cyBhIG5vZGUgYW5kIGNhbGxzIGFwcHJvcHJpYXRlIGVudGVyIGFuZCBleGl0IGNhbGxiYWNrc1xuICogYXMgcmVxdWlyZWQuXG4gKi9cblxuZnVuY3Rpb24gdmlzaXQoKSB7XG4gIGlmICh0aGlzLmlzQmxhY2tsaXN0ZWQoKSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodGhpcy5vcHRzLnNob3VsZFNraXAgJiYgdGhpcy5vcHRzLnNob3VsZFNraXAodGhpcykpIHJldHVybiBmYWxzZTtcblxuICB0aGlzLmNhbGwoXCJlbnRlclwiKTtcblxuICBpZiAodGhpcy5zaG91bGRTa2lwKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hvdWxkU3RvcDtcbiAgfVxuXG4gIHZhciBub2RlID0gdGhpcy5ub2RlO1xuICB2YXIgb3B0cyA9IHRoaXMub3B0cztcblxuICBpZiAobm9kZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgICAvLyB0cmF2ZXJzZSBvdmVyIHRoZXNlIHJlcGxhY2VtZW50IG5vZGVzIHdlIHB1cnBvc2VseSBkb24ndCBjYWxsIGV4aXROb2RlXG4gICAgICAvLyBhcyB0aGUgb3JpZ2luYWwgbm9kZSBoYXMgYmVlbiBkZXN0cm95ZWRcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBfaW5kZXgyW1wiZGVmYXVsdFwiXS5ub2RlKG5vZGVbaV0sIG9wdHMsIHRoaXMuc2NvcGUsIHRoaXMuc3RhdGUsIHRoaXMsIHRoaXMuc2tpcEtleXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBfaW5kZXgyW1wiZGVmYXVsdFwiXS5ub2RlKG5vZGUsIG9wdHMsIHRoaXMuc2NvcGUsIHRoaXMuc3RhdGUsIHRoaXMsIHRoaXMuc2tpcEtleXMpO1xuICAgICAgdGhpcy5jYWxsKFwiZXhpdFwiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5zaG91bGRTdG9wO1xufVxuXG4vKipcbiAqIFNldHMgc2hvdWxkU2tpcCBmbGFnIHRydWUgc28gdGhhdCB0aGlzIG5vZGUgd2lsbCBiZSBza2lwcGVkIHdoaWxlIHZpc2l0aW5nLlxuICovXG5cbmZ1bmN0aW9uIHNraXAoKSB7XG4gIHRoaXMuc2hvdWxkU2tpcCA9IHRydWU7XG59XG5cbi8qKlxuICogQWRkcyBnaXZlbiBrZXkgdG8gdGhlIGxpc3Qgb2Yga2V5cyB0byBiZSBza2lwcGVkLlxuICovXG5cbmZ1bmN0aW9uIHNraXBLZXkoa2V5KSB7XG4gIHRoaXMuc2tpcEtleXNba2V5XSA9IHRydWU7XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gc3RvcCgpIHtcbiAgdGhpcy5zaG91bGRTdG9wID0gdHJ1ZTtcbiAgdGhpcy5zaG91bGRTa2lwID0gdHJ1ZTtcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBzZXRTY29wZSgpIHtcbiAgaWYgKHRoaXMub3B0cyAmJiB0aGlzLm9wdHMubm9TY29wZSkgcmV0dXJuO1xuXG4gIHZhciB0YXJnZXQgPSB0aGlzLmNvbnRleHQgfHwgdGhpcy5wYXJlbnRQYXRoO1xuICB0aGlzLnNjb3BlID0gdGhpcy5nZXRTY29wZSh0YXJnZXQgJiYgdGFyZ2V0LnNjb3BlKTtcbiAgaWYgKHRoaXMuc2NvcGUpIHRoaXMuc2NvcGUuaW5pdCgpO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIHNldENvbnRleHQoY29udGV4dCkge1xuICB0aGlzLnNob3VsZFNraXAgPSBmYWxzZTtcbiAgdGhpcy5zaG91bGRTdG9wID0gZmFsc2U7XG4gIHRoaXMucmVtb3ZlZCA9IGZhbHNlO1xuICB0aGlzLnNraXBLZXlzID0ge307XG5cbiAgaWYgKGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuc3RhdGUgPSBjb250ZXh0LnN0YXRlO1xuICAgIHRoaXMub3B0cyA9IGNvbnRleHQub3B0cztcbiAgfVxuXG4gIHRoaXMuc2V0U2NvcGUoKTtcblxuICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBIZXJlIHdlIHJlc3luYyB0aGUgbm9kZSBwYXRocyBga2V5YCBhbmQgYGNvbnRhaW5lcmAuIElmIHRoZXkndmUgY2hhbmdlZCBhY2NvcmRpbmdcbiAqIHRvIHdoYXQgd2UgaGF2ZSBzdG9yZWQgaW50ZXJuYWxseSB0aGVuIHdlIGF0dGVtcHQgdG8gcmVzeW5jIGJ5IGNyYXdsaW5nIGFuZCBsb29raW5nXG4gKiBmb3IgdGhlIG5ldyB2YWx1ZXMuXG4gKi9cblxuZnVuY3Rpb24gcmVzeW5jKCkge1xuICBpZiAodGhpcy5yZW1vdmVkKSByZXR1cm47XG5cbiAgdGhpcy5fcmVzeW5jUGFyZW50KCk7XG4gIHRoaXMuX3Jlc3luY0xpc3QoKTtcbiAgdGhpcy5fcmVzeW5jS2V5KCk7XG4gIC8vdGhpcy5fcmVzeW5jUmVtb3ZlZCgpO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIF9yZXN5bmNQYXJlbnQoKSB7XG4gIGlmICh0aGlzLnBhcmVudFBhdGgpIHtcbiAgICB0aGlzLnBhcmVudCA9IHRoaXMucGFyZW50UGF0aC5ub2RlO1xuICB9XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gX3Jlc3luY0tleSgpIHtcbiAgaWYgKCF0aGlzLmNvbnRhaW5lcikgcmV0dXJuO1xuXG4gIGlmICh0aGlzLm5vZGUgPT09IHRoaXMuY29udGFpbmVyW3RoaXMua2V5XSkgcmV0dXJuO1xuXG4gIC8vIGdycnIsIHBhdGgga2V5IGlzIG91dCBvZiBzeW5jLiB0aGlzIGlzIGxpa2VseSBkdWUgdG8gYSBtb2RpZmljYXRpb24gdG8gdGhlIEFTVFxuICAvLyBub3QgZG9uZSB0aHJvdWdoIG91ciBwYXRoIEFQSXNcblxuICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmNvbnRhaW5lcikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29udGFpbmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5jb250YWluZXJbaV0gPT09IHRoaXMubm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRLZXkoaSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmNvbnRhaW5lcikge1xuICAgICAgaWYgKHRoaXMuY29udGFpbmVyW2tleV0gPT09IHRoaXMubm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRLZXkoa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aGlzLmtleSA9IG51bGw7XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gX3Jlc3luY0xpc3QoKSB7XG4gIHZhciBsaXN0S2V5ID0gdGhpcy5saXN0S2V5O1xuICB2YXIgcGFyZW50UGF0aCA9IHRoaXMucGFyZW50UGF0aDtcbiAgaWYgKCFsaXN0S2V5IHx8ICFwYXJlbnRQYXRoKSByZXR1cm47XG5cbiAgdmFyIG5ld0NvbnRhaW5lciA9IHBhcmVudFBhdGgubm9kZVtsaXN0S2V5XTtcbiAgaWYgKHRoaXMuY29udGFpbmVyID09PSBuZXdDb250YWluZXIpIHJldHVybjtcblxuICAvLyBjb250YWluZXIgaXMgb3V0IG9mIHN5bmMuIHRoaXMgaXMgbGlrZWx5IHRoZSByZXN1bHQgb2YgaXQgYmVpbmcgcmVhc3NpZ25lZFxuXG4gIGlmIChuZXdDb250YWluZXIpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IG5ld0NvbnRhaW5lcjtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBfcmVzeW5jUmVtb3ZlZCgpIHtcbiAgaWYgKHRoaXMua2V5ID09IG51bGwgfHwgIXRoaXMuY29udGFpbmVyIHx8IHRoaXMuY29udGFpbmVyW3RoaXMua2V5XSAhPT0gdGhpcy5ub2RlKSB7XG4gICAgdGhpcy5fbWFya1JlbW92ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIHNoaWZ0Q29udGV4dCgpIHtcbiAgdGhpcy5jb250ZXh0cy5zaGlmdCgpO1xuICB0aGlzLnNldENvbnRleHQodGhpcy5jb250ZXh0c1swXSk7XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gdW5zaGlmdENvbnRleHQoY29udGV4dCkge1xuICB0aGlzLmNvbnRleHRzLnVuc2hpZnQoY29udGV4dCk7XG4gIHRoaXMuc2V0Q29udGV4dChjb250ZXh0KTtcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBzZXR1cChwYXJlbnRQYXRoLCBjb250YWluZXIsIGxpc3RLZXksIGtleSkge1xuICB0aGlzLmluTGlzdCA9ICEhbGlzdEtleTtcbiAgdGhpcy5saXN0S2V5ID0gbGlzdEtleTtcbiAgdGhpcy5wYXJlbnRLZXkgPSBsaXN0S2V5IHx8IGtleTtcbiAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgdGhpcy5wYXJlbnRQYXRoID0gcGFyZW50UGF0aCB8fCB0aGlzLnBhcmVudFBhdGg7XG4gIHRoaXMuc2V0S2V5KGtleSk7XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gc2V0S2V5KGtleSkge1xuICB0aGlzLmtleSA9IGtleTtcbiAgdGhpcy5ub2RlID0gdGhpcy5jb250YWluZXJbdGhpcy5rZXldO1xuICB0aGlzLnR5cGUgPSB0aGlzLm5vZGUgJiYgdGhpcy5ub2RlLnR5cGU7XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gcXVldWVOb2RlKHBhdGgpIHtcbiAgdmFyIF9hcnIzID0gdGhpcy5jb250ZXh0cztcblxuICBmb3IgKHZhciBfaTMgPSAwOyBfaTMgPCBfYXJyMy5sZW5ndGg7IF9pMysrKSB7XG4gICAgdmFyIGNvbnRleHQgPSBfYXJyM1tfaTNdO1xuICAgIGlmIChjb250ZXh0LnF1ZXVlKSB7XG4gICAgICBjb250ZXh0LnF1ZXVlLnB1c2gocGF0aCk7XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
