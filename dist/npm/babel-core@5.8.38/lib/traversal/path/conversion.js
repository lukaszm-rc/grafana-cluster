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
   * [Please add a description.]
   */

  function toComputedKey() {
    var node = this.node;

    var key;
    if (this.isMemberExpression()) {
      key = node.property;
    } else if (this.isProperty()) {
      key = node.key;
    } else {
      throw new ReferenceError("todo");
    }

    if (!node.computed) {
      if (t.isIdentifier(key)) key = t.literal(key.name);
    }

    return key;
  }

  /**
   * [Please add a description.]
   */

  function ensureBlock() {
    return t.ensureBlock(this.node);
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.toComputedKey = toComputedKey;
      exports.ensureBlock = ensureBlock;_types = require("../../types");
      t = _interopRequireWildcard(_types);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3BhdGgvY29udmVyc2lvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQU9BLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7OztBQVVBLFdBQVMsYUFBVCxHQUF5QjtBQUN2QixRQUFJLE9BQU8sS0FBSyxJQUFMLENBRFk7O0FBR3ZCLFFBQUksR0FBSixDQUh1QjtBQUl2QixRQUFJLEtBQUssa0JBQUwsRUFBSixFQUErQjtBQUM3QixZQUFNLEtBQUssUUFBTCxDQUR1QjtLQUEvQixNQUVPLElBQUksS0FBSyxVQUFMLEVBQUosRUFBdUI7QUFDNUIsWUFBTSxLQUFLLEdBQUwsQ0FEc0I7S0FBdkIsTUFFQTtBQUNMLFlBQU0sSUFBSSxjQUFKLENBQW1CLE1BQW5CLENBQU4sQ0FESztLQUZBOztBQU1QLFFBQUksQ0FBQyxLQUFLLFFBQUwsRUFBZTtBQUNsQixVQUFJLEVBQUUsWUFBRixDQUFlLEdBQWYsQ0FBSixFQUF5QixNQUFNLEVBQUUsT0FBRixDQUFVLElBQUksSUFBSixDQUFoQixDQUF6QjtLQURGOztBQUlBLFdBQU8sR0FBUCxDQWhCdUI7R0FBekI7Ozs7OztBQXVCQSxXQUFTLFdBQVQsR0FBdUI7QUFDckIsV0FBTyxFQUFFLFdBQUYsQ0FBYyxLQUFLLElBQUwsQ0FBckIsQ0FEcUI7R0FBdkI7Ozs7QUF0Q0EsY0FBUSxVQUFSLEdBQXFCLElBQXJCO0FBQ0EsY0FBUSxhQUFSLEdBQXdCLGFBQXhCO0FBQ0EsY0FBUSxXQUFSLEdBQXNCLFdBQXRCLENBS0ksU0FBUyxRQUFRLGFBQVI7QUFFVCxVQUFJLHdCQUF3QixNQUF4QiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYXZlcnNhbC9wYXRoL2NvbnZlcnNpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnRvQ29tcHV0ZWRLZXkgPSB0b0NvbXB1dGVkS2V5O1xuZXhwb3J0cy5lbnN1cmVCbG9jayA9IGVuc3VyZUJsb2NrO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uLy4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gdG9Db21wdXRlZEtleSgpIHtcbiAgdmFyIG5vZGUgPSB0aGlzLm5vZGU7XG5cbiAgdmFyIGtleTtcbiAgaWYgKHRoaXMuaXNNZW1iZXJFeHByZXNzaW9uKCkpIHtcbiAgICBrZXkgPSBub2RlLnByb3BlcnR5O1xuICB9IGVsc2UgaWYgKHRoaXMuaXNQcm9wZXJ0eSgpKSB7XG4gICAga2V5ID0gbm9kZS5rZXk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidG9kb1wiKTtcbiAgfVxuXG4gIGlmICghbm9kZS5jb21wdXRlZCkge1xuICAgIGlmICh0LmlzSWRlbnRpZmllcihrZXkpKSBrZXkgPSB0LmxpdGVyYWwoa2V5Lm5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIGtleTtcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBlbnN1cmVCbG9jaygpIHtcbiAgcmV0dXJuIHQuZW5zdXJlQmxvY2sodGhpcy5ub2RlKTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
