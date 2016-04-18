/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _lodashCollectionIncludes, _lodashCollectionIncludes2;

  // istanbul ignore next

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }

  /**
   * [Please add a description.]
   */

  function internal(transformer) {
    if (transformer.key[0] === "_") return true;
  }

  /**
   * [Please add a description.]
   */

  function blacklist(transformer, opts) {
    var blacklist = opts.blacklist;
    if (blacklist.length && _lodashCollectionIncludes2["default"](blacklist, transformer.key)) return false;
  }

  /**
   * [Please add a description.]
   */

  function whitelist(transformer, opts) {
    var whitelist = opts.whitelist;
    if (whitelist) return _lodashCollectionIncludes2["default"](whitelist, transformer.key);
  }

  /**
   * [Please add a description.]
   */

  function stage(transformer, opts) {
    var stage = transformer.metadata.stage;
    if (stage != null && stage >= opts.stage) return true;
  }

  /**
   * [Please add a description.]
   */

  function optional(transformer, opts) {
    if (transformer.metadata.optional && !_lodashCollectionIncludes2["default"](opts.optional, transformer.key)) return false;
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.internal = internal;
      exports.blacklist = blacklist;
      exports.whitelist = whitelist;
      exports.stage = stage;
      exports.optional = optional;_lodashCollectionIncludes = require("lodash/collection/includes");
      _lodashCollectionIncludes2 = _interopRequireDefault(_lodashCollectionIncludes);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2ZpbHRlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFVQSxXQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBSixHQUFpQixHQUF4QixHQUE4QixFQUFFLFdBQVcsR0FBWCxFQUFoQyxDQUFUO0dBQXJDOzs7Ozs7QUFVQSxXQUFTLFFBQVQsQ0FBa0IsV0FBbEIsRUFBK0I7QUFDN0IsUUFBSSxZQUFZLEdBQVosQ0FBZ0IsQ0FBaEIsTUFBdUIsR0FBdkIsRUFBNEIsT0FBTyxJQUFQLENBQWhDO0dBREY7Ozs7OztBQVFBLFdBQVMsU0FBVCxDQUFtQixXQUFuQixFQUFnQyxJQUFoQyxFQUFzQztBQUNwQyxRQUFJLFlBQVksS0FBSyxTQUFMLENBRG9CO0FBRXBDLFFBQUksVUFBVSxNQUFWLElBQW9CLDJCQUEyQixTQUEzQixFQUFzQyxTQUF0QyxFQUFpRCxZQUFZLEdBQVosQ0FBckUsRUFBdUYsT0FBTyxLQUFQLENBQTNGO0dBRkY7Ozs7OztBQVNBLFdBQVMsU0FBVCxDQUFtQixXQUFuQixFQUFnQyxJQUFoQyxFQUFzQztBQUNwQyxRQUFJLFlBQVksS0FBSyxTQUFMLENBRG9CO0FBRXBDLFFBQUksU0FBSixFQUFlLE9BQU8sMkJBQTJCLFNBQTNCLEVBQXNDLFNBQXRDLEVBQWlELFlBQVksR0FBWixDQUF4RCxDQUFmO0dBRkY7Ozs7OztBQVNBLFdBQVMsS0FBVCxDQUFlLFdBQWYsRUFBNEIsSUFBNUIsRUFBa0M7QUFDaEMsUUFBSSxRQUFRLFlBQVksUUFBWixDQUFxQixLQUFyQixDQURvQjtBQUVoQyxRQUFJLFNBQVMsSUFBVCxJQUFpQixTQUFTLEtBQUssS0FBTCxFQUFZLE9BQU8sSUFBUCxDQUExQztHQUZGOzs7Ozs7QUFTQSxXQUFTLFFBQVQsQ0FBa0IsV0FBbEIsRUFBK0IsSUFBL0IsRUFBcUM7QUFDbkMsUUFBSSxZQUFZLFFBQVosQ0FBcUIsUUFBckIsSUFBaUMsQ0FBQywyQkFBMkIsU0FBM0IsRUFBc0MsS0FBSyxRQUFMLEVBQWUsWUFBWSxHQUFaLENBQXRELEVBQXdFLE9BQU8sS0FBUCxDQUE3RztHQURGOzs7O0FBckRBLGNBQVEsVUFBUixHQUFxQixJQUFyQjtBQUNBLGNBQVEsUUFBUixHQUFtQixRQUFuQjtBQUNBLGNBQVEsU0FBUixHQUFvQixTQUFwQjtBQUNBLGNBQVEsU0FBUixHQUFvQixTQUFwQjtBQUNBLGNBQVEsS0FBUixHQUFnQixLQUFoQjtBQUNBLGNBQVEsUUFBUixHQUFtQixRQUFuQixDQUtJLDRCQUE0QixRQUFRLDRCQUFSO0FBRTVCLG1DQUE2Qix1QkFBdUIseUJBQXZCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2ZpbHRlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmludGVybmFsID0gaW50ZXJuYWw7XG5leHBvcnRzLmJsYWNrbGlzdCA9IGJsYWNrbGlzdDtcbmV4cG9ydHMud2hpdGVsaXN0ID0gd2hpdGVsaXN0O1xuZXhwb3J0cy5zdGFnZSA9IHN0YWdlO1xuZXhwb3J0cy5vcHRpb25hbCA9IG9wdGlvbmFsO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfbG9kYXNoQ29sbGVjdGlvbkluY2x1ZGVzID0gcmVxdWlyZShcImxvZGFzaC9jb2xsZWN0aW9uL2luY2x1ZGVzXCIpO1xuXG52YXIgX2xvZGFzaENvbGxlY3Rpb25JbmNsdWRlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hDb2xsZWN0aW9uSW5jbHVkZXMpO1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIGludGVybmFsKHRyYW5zZm9ybWVyKSB7XG4gIGlmICh0cmFuc2Zvcm1lci5rZXlbMF0gPT09IFwiX1wiKSByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBibGFja2xpc3QodHJhbnNmb3JtZXIsIG9wdHMpIHtcbiAgdmFyIGJsYWNrbGlzdCA9IG9wdHMuYmxhY2tsaXN0O1xuICBpZiAoYmxhY2tsaXN0Lmxlbmd0aCAmJiBfbG9kYXNoQ29sbGVjdGlvbkluY2x1ZGVzMltcImRlZmF1bHRcIl0oYmxhY2tsaXN0LCB0cmFuc2Zvcm1lci5rZXkpKSByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gd2hpdGVsaXN0KHRyYW5zZm9ybWVyLCBvcHRzKSB7XG4gIHZhciB3aGl0ZWxpc3QgPSBvcHRzLndoaXRlbGlzdDtcbiAgaWYgKHdoaXRlbGlzdCkgcmV0dXJuIF9sb2Rhc2hDb2xsZWN0aW9uSW5jbHVkZXMyW1wiZGVmYXVsdFwiXSh3aGl0ZWxpc3QsIHRyYW5zZm9ybWVyLmtleSk7XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gc3RhZ2UodHJhbnNmb3JtZXIsIG9wdHMpIHtcbiAgdmFyIHN0YWdlID0gdHJhbnNmb3JtZXIubWV0YWRhdGEuc3RhZ2U7XG4gIGlmIChzdGFnZSAhPSBudWxsICYmIHN0YWdlID49IG9wdHMuc3RhZ2UpIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIG9wdGlvbmFsKHRyYW5zZm9ybWVyLCBvcHRzKSB7XG4gIGlmICh0cmFuc2Zvcm1lci5tZXRhZGF0YS5vcHRpb25hbCAmJiAhX2xvZGFzaENvbGxlY3Rpb25JbmNsdWRlczJbXCJkZWZhdWx0XCJdKG9wdHMub3B0aW9uYWwsIHRyYW5zZm9ybWVyLmtleSkpIHJldHVybiBmYWxzZTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
