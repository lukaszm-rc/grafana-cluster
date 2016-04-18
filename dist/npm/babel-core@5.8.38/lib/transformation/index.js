/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _typeof, _pipeline, _pipeline2, _transformers, _transformers2, _transformersDeprecated, _transformersDeprecated2, _transformersAliases, _transformersAliases2, _transformersFilters, filters, pipeline, key, transformer, metadata, transform;

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

  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      exports.__esModule = true;_pipeline = require("./pipeline");
      _pipeline2 = _interopRequireDefault(_pipeline);
      _transformers = require("./transformers");
      _transformers2 = _interopRequireDefault(_transformers);
      _transformersDeprecated = require("./transformers/deprecated");
      _transformersDeprecated2 = _interopRequireDefault(_transformersDeprecated);
      _transformersAliases = require("./transformers/aliases");
      _transformersAliases2 = _interopRequireDefault(_transformersAliases);
      _transformersFilters = require("./transformers/filters");
      filters = _interopRequireWildcard(_transformersFilters);
      pipeline = new _pipeline2["default"]();


      for (key in _transformers2["default"]) {
        transformer = _transformers2["default"][key];


        if ((typeof transformer === "undefined" ? "undefined" : _typeof(transformer)) === "object") {
          metadata = transformer.metadata = transformer.metadata || {};

          metadata.group = metadata.group || "builtin-basic";
        }
      }

      pipeline.addTransformers(_transformers2["default"]);
      pipeline.addDeprecated(_transformersDeprecated2["default"]);
      pipeline.addAliases(_transformersAliases2["default"]);
      pipeline.addFilter(filters.internal);
      pipeline.addFilter(filters.blacklist);
      pipeline.addFilter(filters.whitelist);
      pipeline.addFilter(filters.stage);
      pipeline.addFilter(filters.optional);

      /**
       * [Please add a description.]
       */

      transform = pipeline.transform.bind(pipeline);

      transform.fromAst = pipeline.transformFromAst.bind(pipeline);
      transform.pipeline = pipeline;
      exports["default"] = transform;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7O0FBSUEsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBRSxXQUFXLEdBQVgsRUFBaEMsQ0FBVDtHQUFyQzs7Ozs7Ozs7OztBQVBBLGNBQVEsVUFBUixHQUFxQixJQUFyQixDQVNJLFlBQVksUUFBUSxZQUFSO0FBRVosbUJBQWEsdUJBQXVCLFNBQXZCO0FBVWIsc0JBQWdCLFFBQVEsZ0JBQVI7QUFFaEIsdUJBQWlCLHVCQUF1QixhQUF2QjtBQU1qQixnQ0FBMEIsUUFBUSwyQkFBUjtBQUUxQixpQ0FBMkIsdUJBQXVCLHVCQUF2QjtBQU0zQiw2QkFBdUIsUUFBUSx3QkFBUjtBQUV2Qiw4QkFBd0IsdUJBQXVCLG9CQUF2QjtBQU14Qiw2QkFBdUIsUUFBUSx3QkFBUjtBQUV2QixnQkFBVSx3QkFBd0Isb0JBQXhCO0FBRVYsaUJBQVcsSUFBSSxXQUFXLFNBQVgsQ0FBSjs7O0FBRWYsV0FBUyxHQUFULElBQWdCLGVBQWUsU0FBZixDQUFoQixFQUEyQztBQUNyQyxzQkFBYyxlQUFlLFNBQWYsRUFBMEIsR0FBMUIsRUFEdUI7OztBQUd6QyxZQUFJLFFBQU8saUVBQVAsS0FBdUIsUUFBdkIsRUFBaUM7QUFDL0IscUJBQVcsWUFBWSxRQUFaLEdBQXVCLFlBQVksUUFBWixJQUF3QixFQUF4QixDQURIOztBQUVuQyxtQkFBUyxLQUFULEdBQWlCLFNBQVMsS0FBVCxJQUFrQixlQUFsQixDQUZrQjtTQUFyQztPQUhGOztBQVNBLGVBQVMsZUFBVCxDQUF5QixlQUFlLFNBQWYsQ0FBekI7QUFDQSxlQUFTLGFBQVQsQ0FBdUIseUJBQXlCLFNBQXpCLENBQXZCO0FBQ0EsZUFBUyxVQUFULENBQW9CLHNCQUFzQixTQUF0QixDQUFwQjtBQUNBLGVBQVMsU0FBVCxDQUFtQixRQUFRLFFBQVIsQ0FBbkI7QUFDQSxlQUFTLFNBQVQsQ0FBbUIsUUFBUSxTQUFSLENBQW5CO0FBQ0EsZUFBUyxTQUFULENBQW1CLFFBQVEsU0FBUixDQUFuQjtBQUNBLGVBQVMsU0FBVCxDQUFtQixRQUFRLEtBQVIsQ0FBbkI7QUFDQSxlQUFTLFNBQVQsQ0FBbUIsUUFBUSxRQUFSLENBQW5COzs7Ozs7QUFNSSxrQkFBWSxTQUFTLFNBQVQsQ0FBbUIsSUFBbkIsQ0FBd0IsUUFBeEI7O0FBQ2hCLGdCQUFVLE9BQVYsR0FBb0IsU0FBUyxnQkFBVCxDQUEwQixJQUExQixDQUErQixRQUEvQixDQUFwQjtBQUNBLGdCQUFVLFFBQVYsR0FBcUIsUUFBckI7QUFDQSxjQUFRLFNBQVIsSUFBcUIsU0FBckI7QUFDQSxhQUFPLE9BQVAsR0FBaUIsUUFBUSxTQUFSLENBQWpCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX3BpcGVsaW5lID0gcmVxdWlyZShcIi4vcGlwZWxpbmVcIik7XG5cbnZhciBfcGlwZWxpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGlwZWxpbmUpO1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKFwiLi90cmFuc2Zvcm1lcnNcIik7XG5cbnZhciBfdHJhbnNmb3JtZXJzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybWVycyk7XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIF90cmFuc2Zvcm1lcnNEZXByZWNhdGVkID0gcmVxdWlyZShcIi4vdHJhbnNmb3JtZXJzL2RlcHJlY2F0ZWRcIik7XG5cbnZhciBfdHJhbnNmb3JtZXJzRGVwcmVjYXRlZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1lcnNEZXByZWNhdGVkKTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgX3RyYW5zZm9ybWVyc0FsaWFzZXMgPSByZXF1aXJlKFwiLi90cmFuc2Zvcm1lcnMvYWxpYXNlc1wiKTtcblxudmFyIF90cmFuc2Zvcm1lcnNBbGlhc2VzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybWVyc0FsaWFzZXMpO1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciBfdHJhbnNmb3JtZXJzRmlsdGVycyA9IHJlcXVpcmUoXCIuL3RyYW5zZm9ybWVycy9maWx0ZXJzXCIpO1xuXG52YXIgZmlsdGVycyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90cmFuc2Zvcm1lcnNGaWx0ZXJzKTtcblxudmFyIHBpcGVsaW5lID0gbmV3IF9waXBlbGluZTJbXCJkZWZhdWx0XCJdKCk7XG5cbmZvciAodmFyIGtleSBpbiBfdHJhbnNmb3JtZXJzMltcImRlZmF1bHRcIl0pIHtcbiAgdmFyIHRyYW5zZm9ybWVyID0gX3RyYW5zZm9ybWVyczJbXCJkZWZhdWx0XCJdW2tleV07XG5cbiAgaWYgKHR5cGVvZiB0cmFuc2Zvcm1lciA9PT0gXCJvYmplY3RcIikge1xuICAgIHZhciBtZXRhZGF0YSA9IHRyYW5zZm9ybWVyLm1ldGFkYXRhID0gdHJhbnNmb3JtZXIubWV0YWRhdGEgfHwge307XG4gICAgbWV0YWRhdGEuZ3JvdXAgPSBtZXRhZGF0YS5ncm91cCB8fCBcImJ1aWx0aW4tYmFzaWNcIjtcbiAgfVxufVxuXG5waXBlbGluZS5hZGRUcmFuc2Zvcm1lcnMoX3RyYW5zZm9ybWVyczJbXCJkZWZhdWx0XCJdKTtcbnBpcGVsaW5lLmFkZERlcHJlY2F0ZWQoX3RyYW5zZm9ybWVyc0RlcHJlY2F0ZWQyW1wiZGVmYXVsdFwiXSk7XG5waXBlbGluZS5hZGRBbGlhc2VzKF90cmFuc2Zvcm1lcnNBbGlhc2VzMltcImRlZmF1bHRcIl0pO1xucGlwZWxpbmUuYWRkRmlsdGVyKGZpbHRlcnMuaW50ZXJuYWwpO1xucGlwZWxpbmUuYWRkRmlsdGVyKGZpbHRlcnMuYmxhY2tsaXN0KTtcbnBpcGVsaW5lLmFkZEZpbHRlcihmaWx0ZXJzLndoaXRlbGlzdCk7XG5waXBlbGluZS5hZGRGaWx0ZXIoZmlsdGVycy5zdGFnZSk7XG5waXBlbGluZS5hZGRGaWx0ZXIoZmlsdGVycy5vcHRpb25hbCk7XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIHRyYW5zZm9ybSA9IHBpcGVsaW5lLnRyYW5zZm9ybS5iaW5kKHBpcGVsaW5lKTtcbnRyYW5zZm9ybS5mcm9tQXN0ID0gcGlwZWxpbmUudHJhbnNmb3JtRnJvbUFzdC5iaW5kKHBpcGVsaW5lKTtcbnRyYW5zZm9ybS5waXBlbGluZSA9IHBpcGVsaW5lO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB0cmFuc2Zvcm07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
