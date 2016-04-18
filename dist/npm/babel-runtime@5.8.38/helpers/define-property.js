/* */
"use strict";

System.register([], function (_export, _context) {
  var _Object$defineProperty;

  return {
    setters: [],
    execute: function () {
      _Object$defineProperty = require('../core-js/object/define-property')["default"];

      exports["default"] = function (obj, key, value) {
        if (key in obj) {
          _Object$defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      };
      exports.__esModule = true;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL2RlZmluZS1wcm9wZXJ0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7O0FBQ0ksK0JBQXlCLFFBQVEsbUNBQVIsRUFBNkMsU0FBN0M7O0FBQzdCLGNBQVEsU0FBUixJQUFxQixVQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CLEtBQW5CLEVBQTBCO0FBQzdDLFlBQUksT0FBTyxHQUFQLEVBQVk7QUFDZCxpQ0FBdUIsR0FBdkIsRUFBNEIsR0FBNUIsRUFBaUM7QUFDL0IsbUJBQU8sS0FBUDtBQUNBLHdCQUFZLElBQVo7QUFDQSwwQkFBYyxJQUFkO0FBQ0Esc0JBQVUsSUFBVjtXQUpGLEVBRGM7U0FBaEIsTUFPTztBQUNMLGNBQUksR0FBSixJQUFXLEtBQVgsQ0FESztTQVBQO0FBVUEsZUFBTyxHQUFQLENBWDZDO09BQTFCO0FBYXJCLGNBQVEsVUFBUixHQUFxQixJQUFyQiIsImZpbGUiOiJucG0vYmFiZWwtcnVudGltZUA1LjguMzgvaGVscGVycy9kZWZpbmUtcHJvcGVydHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwidXNlIHN0cmljdFwiO1xudmFyIF9PYmplY3QkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHknKVtcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIF9PYmplY3QkZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
