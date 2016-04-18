/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _helpersNameMethod, metadata, visitor;

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;

      _helpersNameMethod = require("../../helpers/name-method");
      metadata = {
        group: "builtin-basic"
      };


      exports.metadata = metadata;
      // visit Property functions first - https://github.com/babel/babel/issues/1860

      /**
       * [Please add a description.]
       */

      visitor = {

        /**
         * [Please add a description.]
         */

        "ArrowFunctionExpression|FunctionExpression": {
          exit: function exit() {
            if (!this.parentPath.isProperty()) {
              return _helpersNameMethod.bare.apply(this, arguments);
            }
          }
        },

        /**
         * [Please add a description.]
         */

        ObjectExpression: function ObjectExpression() {
          var props = this.get("properties");
          var _arr = props;
          for (var _i = 0; _i < _arr.length; _i++) {
            var prop = _arr[_i];
            var value = prop.get("value");
            if (value.isFunction()) {
              var newNode = _helpersNameMethod.bare(value.node, prop.node, value.scope);
              if (newNode) value.replaceWith(newNode);
            }
          }
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL3NwZWMvZnVuY3Rpb24tbmFtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFFQSxjQUFRLFVBQVIsR0FBcUIsSUFBckI7O0FBRUksMkJBQXFCLFFBQVEsMkJBQVI7QUFFckIsaUJBQVc7QUFDYixlQUFPLGVBQVA7Ozs7QUFHRixjQUFRLFFBQVIsR0FBbUIsUUFBbkI7Ozs7Ozs7QUFPSSxnQkFBVTs7Ozs7O0FBTVosc0RBQThDO0FBQzVDLGdCQUFNLFNBQVMsSUFBVCxHQUFnQjtBQUNwQixnQkFBSSxDQUFDLEtBQUssVUFBTCxDQUFnQixVQUFoQixFQUFELEVBQStCO0FBQ2pDLHFCQUFPLG1CQUFtQixJQUFuQixDQUF3QixLQUF4QixDQUE4QixJQUE5QixFQUFvQyxTQUFwQyxDQUFQLENBRGlDO2FBQW5DO1dBREk7U0FEUjs7Ozs7O0FBWUEsMEJBQWtCLFNBQVMsZ0JBQVQsR0FBNEI7QUFDNUMsY0FBSSxRQUFRLEtBQUssR0FBTCxDQUFTLFlBQVQsQ0FBUixDQUR3QztBQUU1QyxjQUFJLE9BQU8sS0FBUCxDQUZ3QztBQUc1QyxlQUFLLElBQUksS0FBSyxDQUFMLEVBQVEsS0FBSyxLQUFLLE1BQUwsRUFBYSxJQUFuQyxFQUF5QztBQUN2QyxnQkFBSSxPQUFPLEtBQUssRUFBTCxDQUFQLENBRG1DO0FBRXZDLGdCQUFJLFFBQVEsS0FBSyxHQUFMLENBQVMsT0FBVCxDQUFSLENBRm1DO0FBR3ZDLGdCQUFJLE1BQU0sVUFBTixFQUFKLEVBQXdCO0FBQ3RCLGtCQUFJLFVBQVUsbUJBQW1CLElBQW5CLENBQXdCLE1BQU0sSUFBTixFQUFZLEtBQUssSUFBTCxFQUFXLE1BQU0sS0FBTixDQUF6RCxDQURrQjtBQUV0QixrQkFBSSxPQUFKLEVBQWEsTUFBTSxXQUFOLENBQWtCLE9BQWxCLEVBQWI7YUFGRjtXQUhGO1NBSGdCOzs7QUFhcEIsY0FBUSxPQUFSLEdBQWtCLE9BQWxCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL3NwZWMvZnVuY3Rpb24tbmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9oZWxwZXJzTmFtZU1ldGhvZCA9IHJlcXVpcmUoXCIuLi8uLi9oZWxwZXJzL25hbWUtbWV0aG9kXCIpO1xuXG52YXIgbWV0YWRhdGEgPSB7XG4gIGdyb3VwOiBcImJ1aWx0aW4tYmFzaWNcIlxufTtcblxuZXhwb3J0cy5tZXRhZGF0YSA9IG1ldGFkYXRhO1xuLy8gdmlzaXQgUHJvcGVydHkgZnVuY3Rpb25zIGZpcnN0IC0gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy8xODYwXG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIHZpc2l0b3IgPSB7XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBcIkFycm93RnVuY3Rpb25FeHByZXNzaW9ufEZ1bmN0aW9uRXhwcmVzc2lvblwiOiB7XG4gICAgZXhpdDogZnVuY3Rpb24gZXhpdCgpIHtcbiAgICAgIGlmICghdGhpcy5wYXJlbnRQYXRoLmlzUHJvcGVydHkoKSkge1xuICAgICAgICByZXR1cm4gX2hlbHBlcnNOYW1lTWV0aG9kLmJhcmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBPYmplY3RFeHByZXNzaW9uOiBmdW5jdGlvbiBPYmplY3RFeHByZXNzaW9uKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMuZ2V0KFwicHJvcGVydGllc1wiKTtcbiAgICB2YXIgX2FyciA9IHByb3BzO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBfYXJyLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIHByb3AgPSBfYXJyW19pXTtcbiAgICAgIHZhciB2YWx1ZSA9IHByb3AuZ2V0KFwidmFsdWVcIik7XG4gICAgICBpZiAodmFsdWUuaXNGdW5jdGlvbigpKSB7XG4gICAgICAgIHZhciBuZXdOb2RlID0gX2hlbHBlcnNOYW1lTWV0aG9kLmJhcmUodmFsdWUubm9kZSwgcHJvcC5ub2RlLCB2YWx1ZS5zY29wZSk7XG4gICAgICAgIGlmIChuZXdOb2RlKSB2YWx1ZS5yZXBsYWNlV2l0aChuZXdOb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLnZpc2l0b3IgPSB2aXNpdG9yOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
