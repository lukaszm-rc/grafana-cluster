/* */
"use strict";

System.register([], function (_export, _context) {
  var _Object$assign;

  return {
    setters: [],
    execute: function () {
      _Object$assign = require('../core-js/object/assign')["default"];

      exports["default"] = _Object$assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      exports.__esModule = true;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL2V4dGVuZHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7OztBQUNJLHVCQUFpQixRQUFRLDBCQUFSLEVBQW9DLFNBQXBDOztBQUNyQixjQUFRLFNBQVIsSUFBcUIsa0JBQWtCLFVBQVMsTUFBVCxFQUFpQjtBQUN0RCxhQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxVQUFVLE1BQVYsRUFBa0IsR0FBdEMsRUFBMkM7QUFDekMsY0FBSSxTQUFTLFVBQVUsQ0FBVixDQUFULENBRHFDO0FBRXpDLGVBQUssSUFBSSxHQUFKLElBQVcsTUFBaEIsRUFBd0I7QUFDdEIsZ0JBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLE1BQXJDLEVBQTZDLEdBQTdDLENBQUosRUFBdUQ7QUFDckQscUJBQU8sR0FBUCxJQUFjLE9BQU8sR0FBUCxDQUFkLENBRHFEO2FBQXZEO1dBREY7U0FGRjtBQVFBLGVBQU8sTUFBUCxDQVRzRDtPQUFqQjtBQVd2QyxjQUFRLFVBQVIsR0FBcUIsSUFBckIiLCJmaWxlIjoibnBtL2JhYmVsLXJ1bnRpbWVANS44LjM4L2hlbHBlcnMvZXh0ZW5kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX09iamVjdCRhc3NpZ24gPSByZXF1aXJlKCcuLi9jb3JlLWpzL29iamVjdC9hc3NpZ24nKVtcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9PYmplY3QkYXNzaWduIHx8IGZ1bmN0aW9uKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
