/* */
"use strict";

System.register([], function (_export, _context) {
  var _Object$getOwnPropertyNames, _Object$getOwnPropertyDescriptor, _Object$defineProperty;

  return {
    setters: [],
    execute: function () {
      _Object$getOwnPropertyNames = require('../core-js/object/get-own-property-names')["default"];
      _Object$getOwnPropertyDescriptor = require('../core-js/object/get-own-property-descriptor')["default"];
      _Object$defineProperty = require('../core-js/object/define-property')["default"];

      exports["default"] = function (obj, defaults) {
        var keys = _Object$getOwnPropertyNames(defaults);
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var value = _Object$getOwnPropertyDescriptor(defaults, key);
          if (value && value.configurable && obj[key] === undefined) {
            _Object$defineProperty(obj, key, value);
          }
        }
        return obj;
      };
      exports.__esModule = true;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL2RlZmF1bHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7Ozs7QUFDSSxvQ0FBOEIsUUFBUSwwQ0FBUixFQUFvRCxTQUFwRDtBQUM5Qix5Q0FBbUMsUUFBUSwrQ0FBUixFQUF5RCxTQUF6RDtBQUNuQywrQkFBeUIsUUFBUSxtQ0FBUixFQUE2QyxTQUE3Qzs7QUFDN0IsY0FBUSxTQUFSLElBQXFCLFVBQVMsR0FBVCxFQUFjLFFBQWQsRUFBd0I7QUFDM0MsWUFBSSxPQUFPLDRCQUE0QixRQUE1QixDQUFQLENBRHVDO0FBRTNDLGFBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLEtBQUssTUFBTCxFQUFhLEdBQWpDLEVBQXNDO0FBQ3BDLGNBQUksTUFBTSxLQUFLLENBQUwsQ0FBTixDQURnQztBQUVwQyxjQUFJLFFBQVEsaUNBQWlDLFFBQWpDLEVBQTJDLEdBQTNDLENBQVIsQ0FGZ0M7QUFHcEMsY0FBSSxTQUFTLE1BQU0sWUFBTixJQUFzQixJQUFJLEdBQUosTUFBYSxTQUFiLEVBQXdCO0FBQ3pELG1DQUF1QixHQUF2QixFQUE0QixHQUE1QixFQUFpQyxLQUFqQyxFQUR5RDtXQUEzRDtTQUhGO0FBT0EsZUFBTyxHQUFQLENBVDJDO09BQXhCO0FBV3JCLGNBQVEsVUFBUixHQUFxQixJQUFyQiIsImZpbGUiOiJucG0vYmFiZWwtcnVudGltZUA1LjguMzgvaGVscGVycy9kZWZhdWx0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX09iamVjdCRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gcmVxdWlyZSgnLi4vY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpW1wiZGVmYXVsdFwiXTtcbnZhciBfT2JqZWN0JGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpW1wiZGVmYXVsdFwiXTtcbnZhciBfT2JqZWN0JGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5JylbXCJkZWZhdWx0XCJdO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbihvYmosIGRlZmF1bHRzKSB7XG4gIHZhciBrZXlzID0gX09iamVjdCRnZXRPd25Qcm9wZXJ0eU5hbWVzKGRlZmF1bHRzKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgdmFyIHZhbHVlID0gX09iamVjdCRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmNvbmZpZ3VyYWJsZSAmJiBvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBfT2JqZWN0JGRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmo7XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
