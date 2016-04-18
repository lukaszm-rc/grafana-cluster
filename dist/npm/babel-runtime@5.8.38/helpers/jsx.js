/* */
"use strict";

System.register([], function (_export, _context) {
  var _for, _for2, _symbol, _symbol2;

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      _for = require('../core-js/symbol/for');
      _for2 = _interopRequireDefault(_for);
      _symbol = require('../core-js/symbol');
      _symbol2 = _interopRequireDefault(_symbol);
      exports.default = function () {
        var REACT_ELEMENT_TYPE = typeof _symbol2.default === "function" && _for2.default && (0, _for2.default)("react.element") || 0xeac7;
        return function createRawReactElement(type, props, key, children) {
          var defaultProps = type && type.defaultProps;
          var childrenLength = arguments.length - 3;
          if (!props && childrenLength !== 0) {
            props = {};
          }
          if (props && defaultProps) {
            for (var propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          } else if (!props) {
            props = defaultProps || {};
          }
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 3];
            }
            props.children = childArray;
          }
          return {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key === undefined ? null : '' + key,
            ref: null,
            props: props,
            _owner: null
          };
        };
      }();
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL2pzeC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7O0FBTUEsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUNuQyxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLEdBQXhCLEdBQThCLEVBQUMsU0FBUyxHQUFULEVBQS9CLENBRDRCO0dBQXJDOzs7O0FBTEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCO0FBQ0ksYUFBTyxRQUFRLHVCQUFSO0FBQ1AsY0FBUSx1QkFBdUIsSUFBdkI7QUFDUixnQkFBVSxRQUFRLG1CQUFSO0FBQ1YsaUJBQVcsdUJBQXVCLE9BQXZCO0FBSWYsY0FBUSxPQUFSLEdBQWtCLFlBQVc7QUFDM0IsWUFBSSxxQkFBcUIsT0FBTyxTQUFTLE9BQVQsS0FBcUIsVUFBNUIsSUFBMEMsTUFBTSxPQUFOLElBQWlCLENBQUMsR0FBRyxNQUFNLE9BQU4sQ0FBSixDQUFtQixlQUFuQixDQUEzRCxJQUFrRyxNQUFsRyxDQURFO0FBRTNCLGVBQU8sU0FBUyxxQkFBVCxDQUErQixJQUEvQixFQUFxQyxLQUFyQyxFQUE0QyxHQUE1QyxFQUFpRCxRQUFqRCxFQUEyRDtBQUNoRSxjQUFJLGVBQWUsUUFBUSxLQUFLLFlBQUwsQ0FEcUM7QUFFaEUsY0FBSSxpQkFBaUIsVUFBVSxNQUFWLEdBQW1CLENBQW5CLENBRjJDO0FBR2hFLGNBQUksQ0FBQyxLQUFELElBQVUsbUJBQW1CLENBQW5CLEVBQXNCO0FBQ2xDLG9CQUFRLEVBQVIsQ0FEa0M7V0FBcEM7QUFHQSxjQUFJLFNBQVMsWUFBVCxFQUF1QjtBQUN6QixpQkFBSyxJQUFJLFFBQUosSUFBZ0IsWUFBckIsRUFBbUM7QUFDakMsa0JBQUksTUFBTSxRQUFOLE1BQW9CLEtBQUssQ0FBTCxFQUFRO0FBQzlCLHNCQUFNLFFBQU4sSUFBa0IsYUFBYSxRQUFiLENBQWxCLENBRDhCO2VBQWhDO2FBREY7V0FERixNQU1PLElBQUksQ0FBQyxLQUFELEVBQVE7QUFDakIsb0JBQVEsZ0JBQWdCLEVBQWhCLENBRFM7V0FBWjtBQUdQLGNBQUksbUJBQW1CLENBQW5CLEVBQXNCO0FBQ3hCLGtCQUFNLFFBQU4sR0FBaUIsUUFBakIsQ0FEd0I7V0FBMUIsTUFFTyxJQUFJLGlCQUFpQixDQUFqQixFQUFvQjtBQUM3QixnQkFBSSxhQUFhLE1BQU0sY0FBTixDQUFiLENBRHlCO0FBRTdCLGlCQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxjQUFKLEVBQW9CLEdBQXBDLEVBQXlDO0FBQ3ZDLHlCQUFXLENBQVgsSUFBZ0IsVUFBVSxJQUFJLENBQUosQ0FBMUIsQ0FEdUM7YUFBekM7QUFHQSxrQkFBTSxRQUFOLEdBQWlCLFVBQWpCLENBTDZCO1dBQXhCO0FBT1AsaUJBQU87QUFDTCxzQkFBVSxrQkFBVjtBQUNBLGtCQUFNLElBQU47QUFDQSxpQkFBSyxRQUFRLFNBQVIsR0FBb0IsSUFBcEIsR0FBMkIsS0FBSyxHQUFMO0FBQ2hDLGlCQUFLLElBQUw7QUFDQSxtQkFBTyxLQUFQO0FBQ0Esb0JBQVEsSUFBUjtXQU5GLENBeEJnRTtTQUEzRCxDQUZvQjtPQUFYLEVBQWxCIiwiZmlsZSI6Im5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL2pzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIF9mb3IgPSByZXF1aXJlKCcuLi9jb3JlLWpzL3N5bWJvbC9mb3InKTtcbnZhciBfZm9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zvcik7XG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoJy4uL2NvcmUtanMvc3ltYm9sJyk7XG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtkZWZhdWx0OiBvYmp9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF9mb3IyLmRlZmF1bHQgJiYgKDAsIF9mb3IyLmRlZmF1bHQpKFwicmVhY3QuZWxlbWVudFwiKSB8fCAweGVhYzc7XG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVSYXdSZWFjdEVsZW1lbnQodHlwZSwgcHJvcHMsIGtleSwgY2hpbGRyZW4pIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcztcbiAgICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMztcbiAgICBpZiAoIXByb3BzICYmIGNoaWxkcmVuTGVuZ3RoICE9PSAwKSB7XG4gICAgICBwcm9wcyA9IHt9O1xuICAgIH1cbiAgICBpZiAocHJvcHMgJiYgZGVmYXVsdFByb3BzKSB7XG4gICAgICBmb3IgKHZhciBwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXByb3BzKSB7XG4gICAgICBwcm9wcyA9IGRlZmF1bHRQcm9wcyB8fCB7fTtcbiAgICB9XG4gICAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAzXTtcbiAgICAgIH1cbiAgICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAga2V5OiBrZXkgPT09IHVuZGVmaW5lZCA/IG51bGwgOiAnJyArIGtleSxcbiAgICAgIHJlZjogbnVsbCxcbiAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgIF9vd25lcjogbnVsbFxuICAgIH07XG4gIH07XG59KCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
