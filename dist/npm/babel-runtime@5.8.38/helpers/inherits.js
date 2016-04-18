/* */
"use strict";

System.register([], function (_export, _context) {
  var _typeof, _Object$create, _Object$setPrototypeOf;

  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      _Object$create = require('../core-js/object/create')["default"];
      _Object$setPrototypeOf = require('../core-js/object/set-prototype-of')["default"];

      exports["default"] = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
        }
        subClass.prototype = _Object$create(superClass && superClass.prototype, { constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          } });
        if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      };
      exports.__esModule = true;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL2luaGVyaXRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNJLHVCQUFpQixRQUFRLDBCQUFSLEVBQW9DLFNBQXBDO0FBQ2pCLCtCQUF5QixRQUFRLG9DQUFSLEVBQThDLFNBQTlDOztBQUM3QixjQUFRLFNBQVIsSUFBcUIsVUFBUyxRQUFULEVBQW1CLFVBQW5CLEVBQStCO0FBQ2xELFlBQUksT0FBTyxVQUFQLEtBQXNCLFVBQXRCLElBQW9DLGVBQWUsSUFBZixFQUFxQjtBQUMzRCxnQkFBTSxJQUFJLFNBQUosQ0FBYyxxRUFBb0UsK0RBQXBFLENBQXBCLENBRDJEO1NBQTdEO0FBR0EsaUJBQVMsU0FBVCxHQUFxQixlQUFlLGNBQWMsV0FBVyxTQUFYLEVBQXNCLEVBQUMsYUFBYTtBQUNsRixtQkFBTyxRQUFQO0FBQ0Esd0JBQVksS0FBWjtBQUNBLHNCQUFVLElBQVY7QUFDQSwwQkFBYyxJQUFkO1dBSnFFLEVBQXBELENBQXJCLENBSmtEO0FBVWxELFlBQUksVUFBSixFQUNFLHlCQUF5Qix1QkFBdUIsUUFBdkIsRUFBaUMsVUFBakMsQ0FBekIsR0FBd0UsU0FBUyxTQUFULEdBQXFCLFVBQXJCLENBRDFFO09BVm1CO0FBYXJCLGNBQVEsVUFBUixHQUFxQixJQUFyQiIsImZpbGUiOiJucG0vYmFiZWwtcnVudGltZUA1LjguMzgvaGVscGVycy9pbmhlcml0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX09iamVjdCRjcmVhdGUgPSByZXF1aXJlKCcuLi9jb3JlLWpzL29iamVjdC9jcmVhdGUnKVtcImRlZmF1bHRcIl07XG52YXIgX09iamVjdCRzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YnKVtcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBfT2JqZWN0JGNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7Y29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9fSk7XG4gIGlmIChzdXBlckNsYXNzKVxuICAgIF9PYmplY3Qkc2V0UHJvdG90eXBlT2YgPyBfT2JqZWN0JHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
