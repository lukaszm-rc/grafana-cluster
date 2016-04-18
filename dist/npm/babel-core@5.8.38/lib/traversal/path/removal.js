/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _libRemovalHooks, removalHooks;

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
   * Deprecated in favor of `dangerouslyRemove` as it's far more scary and more accurately portrays
   * the risk.
   */

  function remove() {
    console.trace("Path#remove has been renamed to Path#dangerouslyRemove, removing a node is extremely dangerous so please refrain using it.");
    return this.dangerouslyRemove();
  }

  /**
   * Dangerously remove the current node. This may sometimes result in a tainted
   * invalid AST so use with caution.
   */

  function dangerouslyRemove() {
    this._assertUnremoved();

    this.resync();

    if (this._callRemovalHooks("pre")) {
      this._markRemoved();
      return;
    }

    this.shareCommentsWithSiblings();
    this._remove();
    this._markRemoved();

    this._callRemovalHooks("post");
  }

  /**
   * [Please add a description.]
   */

  function _callRemovalHooks(position) {
    var _arr = removalHooks[position];

    for (var _i = 0; _i < _arr.length; _i++) {
      var fn = _arr[_i];
      if (fn(this, this.parentPath)) return true;
    }
  }

  /**
   * [Please add a description.]
   */

  function _remove() {
    if (Array.isArray(this.container)) {
      this.container.splice(this.key, 1);
      this.updateSiblingKeys(this.key, -1);
    } else {
      this.container[this.key] = null;
    }
  }

  /**
   * [Please add a description.]
   */

  function _markRemoved() {
    this.shouldSkip = true;
    this.removed = true;
    this.node = null;
  }

  /**
   * [Please add a description.]
   */

  function _assertUnremoved() {
    if (this.removed) {
      throw this.errorWithNode("NodePath has been removed so is read-only.");
    }
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.remove = remove;
      exports.dangerouslyRemove = dangerouslyRemove;
      exports._callRemovalHooks = _callRemovalHooks;
      exports._remove = _remove;
      exports._markRemoved = _markRemoved;
      exports._assertUnremoved = _assertUnremoved;_libRemovalHooks = require("./lib/removal-hooks");
      removalHooks = _interopRequireWildcard(_libRemovalHooks);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3BhdGgvcmVtb3ZhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQVdBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7Ozs7QUFXQSxXQUFTLE1BQVQsR0FBa0I7QUFDaEIsWUFBUSxLQUFSLENBQWMsNEhBQWQsRUFEZ0I7QUFFaEIsV0FBTyxLQUFLLGlCQUFMLEVBQVAsQ0FGZ0I7R0FBbEI7Ozs7Ozs7QUFVQSxXQUFTLGlCQUFULEdBQTZCO0FBQzNCLFNBQUssZ0JBQUwsR0FEMkI7O0FBRzNCLFNBQUssTUFBTCxHQUgyQjs7QUFLM0IsUUFBSSxLQUFLLGlCQUFMLENBQXVCLEtBQXZCLENBQUosRUFBbUM7QUFDakMsV0FBSyxZQUFMLEdBRGlDO0FBRWpDLGFBRmlDO0tBQW5DOztBQUtBLFNBQUsseUJBQUwsR0FWMkI7QUFXM0IsU0FBSyxPQUFMLEdBWDJCO0FBWTNCLFNBQUssWUFBTCxHQVoyQjs7QUFjM0IsU0FBSyxpQkFBTCxDQUF1QixNQUF2QixFQWQyQjtHQUE3Qjs7Ozs7O0FBcUJBLFdBQVMsaUJBQVQsQ0FBMkIsUUFBM0IsRUFBcUM7QUFDbkMsUUFBSSxPQUFPLGFBQWEsUUFBYixDQUFQLENBRCtCOztBQUduQyxTQUFLLElBQUksS0FBSyxDQUFMLEVBQVEsS0FBSyxLQUFLLE1BQUwsRUFBYSxJQUFuQyxFQUF5QztBQUN2QyxVQUFJLEtBQUssS0FBSyxFQUFMLENBQUwsQ0FEbUM7QUFFdkMsVUFBSSxHQUFHLElBQUgsRUFBUyxLQUFLLFVBQUwsQ0FBYixFQUErQixPQUFPLElBQVAsQ0FBL0I7S0FGRjtHQUhGOzs7Ozs7QUFhQSxXQUFTLE9BQVQsR0FBbUI7QUFDakIsUUFBSSxNQUFNLE9BQU4sQ0FBYyxLQUFLLFNBQUwsQ0FBbEIsRUFBbUM7QUFDakMsV0FBSyxTQUFMLENBQWUsTUFBZixDQUFzQixLQUFLLEdBQUwsRUFBVSxDQUFoQyxFQURpQztBQUVqQyxXQUFLLGlCQUFMLENBQXVCLEtBQUssR0FBTCxFQUFVLENBQUMsQ0FBRCxDQUFqQyxDQUZpQztLQUFuQyxNQUdPO0FBQ0wsV0FBSyxTQUFMLENBQWUsS0FBSyxHQUFMLENBQWYsR0FBMkIsSUFBM0IsQ0FESztLQUhQO0dBREY7Ozs7OztBQWFBLFdBQVMsWUFBVCxHQUF3QjtBQUN0QixTQUFLLFVBQUwsR0FBa0IsSUFBbEIsQ0FEc0I7QUFFdEIsU0FBSyxPQUFMLEdBQWUsSUFBZixDQUZzQjtBQUd0QixTQUFLLElBQUwsR0FBWSxJQUFaLENBSHNCO0dBQXhCOzs7Ozs7QUFVQSxXQUFTLGdCQUFULEdBQTRCO0FBQzFCLFFBQUksS0FBSyxPQUFMLEVBQWM7QUFDaEIsWUFBTSxLQUFLLGFBQUwsQ0FBbUIsNENBQW5CLENBQU4sQ0FEZ0I7S0FBbEI7R0FERjs7OztBQXZGQSxjQUFRLFVBQVIsR0FBcUIsSUFBckI7QUFDQSxjQUFRLE1BQVIsR0FBaUIsTUFBakI7QUFDQSxjQUFRLGlCQUFSLEdBQTRCLGlCQUE1QjtBQUNBLGNBQVEsaUJBQVIsR0FBNEIsaUJBQTVCO0FBQ0EsY0FBUSxPQUFSLEdBQWtCLE9BQWxCO0FBQ0EsY0FBUSxZQUFSLEdBQXVCLFlBQXZCO0FBQ0EsY0FBUSxnQkFBUixHQUEyQixnQkFBM0IsQ0FLSSxtQkFBbUIsUUFBUSxxQkFBUjtBQUVuQixxQkFBZSx3QkFBd0IsZ0JBQXhCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3BhdGgvcmVtb3ZhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMucmVtb3ZlID0gcmVtb3ZlO1xuZXhwb3J0cy5kYW5nZXJvdXNseVJlbW92ZSA9IGRhbmdlcm91c2x5UmVtb3ZlO1xuZXhwb3J0cy5fY2FsbFJlbW92YWxIb29rcyA9IF9jYWxsUmVtb3ZhbEhvb2tzO1xuZXhwb3J0cy5fcmVtb3ZlID0gX3JlbW92ZTtcbmV4cG9ydHMuX21hcmtSZW1vdmVkID0gX21hcmtSZW1vdmVkO1xuZXhwb3J0cy5fYXNzZXJ0VW5yZW1vdmVkID0gX2Fzc2VydFVucmVtb3ZlZDtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIF9saWJSZW1vdmFsSG9va3MgPSByZXF1aXJlKFwiLi9saWIvcmVtb3ZhbC1ob29rc1wiKTtcblxudmFyIHJlbW92YWxIb29rcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9saWJSZW1vdmFsSG9va3MpO1xuXG4vKipcbiAqIERlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgYGRhbmdlcm91c2x5UmVtb3ZlYCBhcyBpdCdzIGZhciBtb3JlIHNjYXJ5IGFuZCBtb3JlIGFjY3VyYXRlbHkgcG9ydHJheXNcbiAqIHRoZSByaXNrLlxuICovXG5cbmZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgY29uc29sZS50cmFjZShcIlBhdGgjcmVtb3ZlIGhhcyBiZWVuIHJlbmFtZWQgdG8gUGF0aCNkYW5nZXJvdXNseVJlbW92ZSwgcmVtb3ZpbmcgYSBub2RlIGlzIGV4dHJlbWVseSBkYW5nZXJvdXMgc28gcGxlYXNlIHJlZnJhaW4gdXNpbmcgaXQuXCIpO1xuICByZXR1cm4gdGhpcy5kYW5nZXJvdXNseVJlbW92ZSgpO1xufVxuXG4vKipcbiAqIERhbmdlcm91c2x5IHJlbW92ZSB0aGUgY3VycmVudCBub2RlLiBUaGlzIG1heSBzb21ldGltZXMgcmVzdWx0IGluIGEgdGFpbnRlZFxuICogaW52YWxpZCBBU1Qgc28gdXNlIHdpdGggY2F1dGlvbi5cbiAqL1xuXG5mdW5jdGlvbiBkYW5nZXJvdXNseVJlbW92ZSgpIHtcbiAgdGhpcy5fYXNzZXJ0VW5yZW1vdmVkKCk7XG5cbiAgdGhpcy5yZXN5bmMoKTtcblxuICBpZiAodGhpcy5fY2FsbFJlbW92YWxIb29rcyhcInByZVwiKSkge1xuICAgIHRoaXMuX21hcmtSZW1vdmVkKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5zaGFyZUNvbW1lbnRzV2l0aFNpYmxpbmdzKCk7XG4gIHRoaXMuX3JlbW92ZSgpO1xuICB0aGlzLl9tYXJrUmVtb3ZlZCgpO1xuXG4gIHRoaXMuX2NhbGxSZW1vdmFsSG9va3MoXCJwb3N0XCIpO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIF9jYWxsUmVtb3ZhbEhvb2tzKHBvc2l0aW9uKSB7XG4gIHZhciBfYXJyID0gcmVtb3ZhbEhvb2tzW3Bvc2l0aW9uXTtcblxuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Fyci5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIgZm4gPSBfYXJyW19pXTtcbiAgICBpZiAoZm4odGhpcywgdGhpcy5wYXJlbnRQYXRoKSkgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBfcmVtb3ZlKCkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmNvbnRhaW5lcikpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5zcGxpY2UodGhpcy5rZXksIDEpO1xuICAgIHRoaXMudXBkYXRlU2libGluZ0tleXModGhpcy5rZXksIC0xKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmNvbnRhaW5lclt0aGlzLmtleV0gPSBudWxsO1xuICB9XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gX21hcmtSZW1vdmVkKCkge1xuICB0aGlzLnNob3VsZFNraXAgPSB0cnVlO1xuICB0aGlzLnJlbW92ZWQgPSB0cnVlO1xuICB0aGlzLm5vZGUgPSBudWxsO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIF9hc3NlcnRVbnJlbW92ZWQoKSB7XG4gIGlmICh0aGlzLnJlbW92ZWQpIHtcbiAgICB0aHJvdyB0aGlzLmVycm9yV2l0aE5vZGUoXCJOb2RlUGF0aCBoYXMgYmVlbiByZW1vdmVkIHNvIGlzIHJlYWQtb25seS5cIik7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
