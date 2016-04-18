/* */
"format cjs";
/**
 * This class is responsible for a binding inside of a scope.
 *
 * It tracks the following:
 *
 *  * Node path.
 *  * Amount of times referenced by other nodes.
 *  * Paths to nodes that reassign or modify this binding.
 *  * The kind of binding. (Is it a parameter, declaration etc)
 */

"use strict";

System.register([], function (_export, _context) {
  var Binding;

  // istanbul ignore next

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      Binding = function () {
        function Binding(_ref) {
          var existing = _ref.existing;
          var identifier = _ref.identifier;
          var scope = _ref.scope;
          var path = _ref.path;
          var kind = _ref.kind;

          _classCallCheck(this, Binding);

          this.constantViolations = [];
          this.constant = true;

          this.identifier = identifier;
          this.references = 0;
          this.referenced = false;

          this.scope = scope;
          this.path = path;
          this.kind = kind;

          this.hasValue = false;
          this.hasDeoptedValue = false;
          this.value = null;

          this.clearValue();

          if (existing) {
            this.constantViolations = [].concat(existing.path, existing.constantViolations, this.constantViolations);
          }
        }

        /**
         * [Please add a description.]
         */

        Binding.prototype.deoptValue = function deoptValue() {
          this.clearValue();
          this.hasDeoptedValue = true;
        };

        /**
         * [Please add a description.]
         */

        Binding.prototype.setValue = function setValue(value) {
          if (this.hasDeoptedValue) return;
          this.hasValue = true;
          this.value = value;
        };

        /**
         * [Please add a description.]
         */

        Binding.prototype.clearValue = function clearValue() {
          this.hasDeoptedValue = false;
          this.hasValue = false;
          this.value = null;
        };

        /**
         * Register a constant violation with the provided `path`.
         */

        Binding.prototype.reassign = function reassign(path) {
          this.constant = false;
          this.constantViolations.push(path);
        };

        /**
         * Increment the amount of references to this binding.
         */

        Binding.prototype.reference = function reference() {
          this.referenced = true;
          this.references++;
        };

        /**
         * Decrement the amount of references to this binding.
         */

        Binding.prototype.dereference = function dereference() {
          this.references--;
          this.referenced = !!this.references;
        };

        return Binding;
      }();

      exports["default"] = Binding;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3Njb3BlL2JpbmRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTs7Ozs7OztBQUtBLFdBQVMsZUFBVCxDQUF5QixRQUF6QixFQUFtQyxXQUFuQyxFQUFnRDtBQUFFLFFBQUksRUFBRSxvQkFBb0IsV0FBcEIsQ0FBRixFQUFvQztBQUFFLFlBQU0sSUFBSSxTQUFKLENBQWMsbUNBQWQsQ0FBTixDQUFGO0tBQXhDO0dBQWxEOzs7OztBQUhBLGNBQVEsVUFBUixHQUFxQixJQUFyQjtBQUtJLGdCQUFVLFlBQWE7QUFDekIsaUJBQVMsT0FBVCxDQUFpQixJQUFqQixFQUF1QjtBQUNyQixjQUFJLFdBQVcsS0FBSyxRQUFMLENBRE07QUFFckIsY0FBSSxhQUFhLEtBQUssVUFBTCxDQUZJO0FBR3JCLGNBQUksUUFBUSxLQUFLLEtBQUwsQ0FIUztBQUlyQixjQUFJLE9BQU8sS0FBSyxJQUFMLENBSlU7QUFLckIsY0FBSSxPQUFPLEtBQUssSUFBTCxDQUxVOztBQU9yQiwwQkFBZ0IsSUFBaEIsRUFBc0IsT0FBdEIsRUFQcUI7O0FBU3JCLGVBQUssa0JBQUwsR0FBMEIsRUFBMUIsQ0FUcUI7QUFVckIsZUFBSyxRQUFMLEdBQWdCLElBQWhCLENBVnFCOztBQVlyQixlQUFLLFVBQUwsR0FBa0IsVUFBbEIsQ0FacUI7QUFhckIsZUFBSyxVQUFMLEdBQWtCLENBQWxCLENBYnFCO0FBY3JCLGVBQUssVUFBTCxHQUFrQixLQUFsQixDQWRxQjs7QUFnQnJCLGVBQUssS0FBTCxHQUFhLEtBQWIsQ0FoQnFCO0FBaUJyQixlQUFLLElBQUwsR0FBWSxJQUFaLENBakJxQjtBQWtCckIsZUFBSyxJQUFMLEdBQVksSUFBWixDQWxCcUI7O0FBb0JyQixlQUFLLFFBQUwsR0FBZ0IsS0FBaEIsQ0FwQnFCO0FBcUJyQixlQUFLLGVBQUwsR0FBdUIsS0FBdkIsQ0FyQnFCO0FBc0JyQixlQUFLLEtBQUwsR0FBYSxJQUFiLENBdEJxQjs7QUF3QnJCLGVBQUssVUFBTCxHQXhCcUI7O0FBMEJyQixjQUFJLFFBQUosRUFBYztBQUNaLGlCQUFLLGtCQUFMLEdBQTBCLEdBQUcsTUFBSCxDQUFVLFNBQVMsSUFBVCxFQUFlLFNBQVMsa0JBQVQsRUFBNkIsS0FBSyxrQkFBTCxDQUFoRixDQURZO1dBQWQ7U0ExQkY7Ozs7OztBQUR5QixlQW9DekIsQ0FBUSxTQUFSLENBQWtCLFVBQWxCLEdBQStCLFNBQVMsVUFBVCxHQUFzQjtBQUNuRCxlQUFLLFVBQUwsR0FEbUQ7QUFFbkQsZUFBSyxlQUFMLEdBQXVCLElBQXZCLENBRm1EO1NBQXRCOzs7Ozs7QUFwQ04sZUE2Q3pCLENBQVEsU0FBUixDQUFrQixRQUFsQixHQUE2QixTQUFTLFFBQVQsQ0FBa0IsS0FBbEIsRUFBeUI7QUFDcEQsY0FBSSxLQUFLLGVBQUwsRUFBc0IsT0FBMUI7QUFDQSxlQUFLLFFBQUwsR0FBZ0IsSUFBaEIsQ0FGb0Q7QUFHcEQsZUFBSyxLQUFMLEdBQWEsS0FBYixDQUhvRDtTQUF6Qjs7Ozs7O0FBN0NKLGVBdUR6QixDQUFRLFNBQVIsQ0FBa0IsVUFBbEIsR0FBK0IsU0FBUyxVQUFULEdBQXNCO0FBQ25ELGVBQUssZUFBTCxHQUF1QixLQUF2QixDQURtRDtBQUVuRCxlQUFLLFFBQUwsR0FBZ0IsS0FBaEIsQ0FGbUQ7QUFHbkQsZUFBSyxLQUFMLEdBQWEsSUFBYixDQUhtRDtTQUF0Qjs7Ozs7O0FBdkROLGVBaUV6QixDQUFRLFNBQVIsQ0FBa0IsUUFBbEIsR0FBNkIsU0FBUyxRQUFULENBQWtCLElBQWxCLEVBQXdCO0FBQ25ELGVBQUssUUFBTCxHQUFnQixLQUFoQixDQURtRDtBQUVuRCxlQUFLLGtCQUFMLENBQXdCLElBQXhCLENBQTZCLElBQTdCLEVBRm1EO1NBQXhCOzs7Ozs7QUFqRUosZUEwRXpCLENBQVEsU0FBUixDQUFrQixTQUFsQixHQUE4QixTQUFTLFNBQVQsR0FBcUI7QUFDakQsZUFBSyxVQUFMLEdBQWtCLElBQWxCLENBRGlEO0FBRWpELGVBQUssVUFBTCxHQUZpRDtTQUFyQjs7Ozs7O0FBMUVMLGVBbUZ6QixDQUFRLFNBQVIsQ0FBa0IsV0FBbEIsR0FBZ0MsU0FBUyxXQUFULEdBQXVCO0FBQ3JELGVBQUssVUFBTCxHQURxRDtBQUVyRCxlQUFLLFVBQUwsR0FBa0IsQ0FBQyxDQUFDLEtBQUssVUFBTCxDQUZpQztTQUF2QixDQW5GUDs7QUF3RnpCLGVBQU8sT0FBUCxDQXhGeUI7T0FBWjs7QUEyRmYsY0FBUSxTQUFSLElBQXFCLE9BQXJCO0FBQ0EsYUFBTyxPQUFQLEdBQWlCLFFBQVEsU0FBUixDQUFqQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYXZlcnNhbC9zY29wZS9iaW5kaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcbi8qKlxuICogVGhpcyBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3IgYSBiaW5kaW5nIGluc2lkZSBvZiBhIHNjb3BlLlxuICpcbiAqIEl0IHRyYWNrcyB0aGUgZm9sbG93aW5nOlxuICpcbiAqICAqIE5vZGUgcGF0aC5cbiAqICAqIEFtb3VudCBvZiB0aW1lcyByZWZlcmVuY2VkIGJ5IG90aGVyIG5vZGVzLlxuICogICogUGF0aHMgdG8gbm9kZXMgdGhhdCByZWFzc2lnbiBvciBtb2RpZnkgdGhpcyBiaW5kaW5nLlxuICogICogVGhlIGtpbmQgb2YgYmluZGluZy4gKElzIGl0IGEgcGFyYW1ldGVyLCBkZWNsYXJhdGlvbiBldGMpXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQmluZGluZyA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEJpbmRpbmcoX3JlZikge1xuICAgIHZhciBleGlzdGluZyA9IF9yZWYuZXhpc3Rpbmc7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBfcmVmLmlkZW50aWZpZXI7XG4gICAgdmFyIHNjb3BlID0gX3JlZi5zY29wZTtcbiAgICB2YXIgcGF0aCA9IF9yZWYucGF0aDtcbiAgICB2YXIga2luZCA9IF9yZWYua2luZDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCaW5kaW5nKTtcblxuICAgIHRoaXMuY29uc3RhbnRWaW9sYXRpb25zID0gW107XG4gICAgdGhpcy5jb25zdGFudCA9IHRydWU7XG5cbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICAgIHRoaXMucmVmZXJlbmNlcyA9IDA7XG4gICAgdGhpcy5yZWZlcmVuY2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLmtpbmQgPSBraW5kO1xuXG4gICAgdGhpcy5oYXNWYWx1ZSA9IGZhbHNlO1xuICAgIHRoaXMuaGFzRGVvcHRlZFZhbHVlID0gZmFsc2U7XG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XG5cbiAgICB0aGlzLmNsZWFyVmFsdWUoKTtcblxuICAgIGlmIChleGlzdGluZykge1xuICAgICAgdGhpcy5jb25zdGFudFZpb2xhdGlvbnMgPSBbXS5jb25jYXQoZXhpc3RpbmcucGF0aCwgZXhpc3RpbmcuY29uc3RhbnRWaW9sYXRpb25zLCB0aGlzLmNvbnN0YW50VmlvbGF0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBCaW5kaW5nLnByb3RvdHlwZS5kZW9wdFZhbHVlID0gZnVuY3Rpb24gZGVvcHRWYWx1ZSgpIHtcbiAgICB0aGlzLmNsZWFyVmFsdWUoKTtcbiAgICB0aGlzLmhhc0Rlb3B0ZWRWYWx1ZSA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBCaW5kaW5nLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaGFzRGVvcHRlZFZhbHVlKSByZXR1cm47XG4gICAgdGhpcy5oYXNWYWx1ZSA9IHRydWU7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgQmluZGluZy5wcm90b3R5cGUuY2xlYXJWYWx1ZSA9IGZ1bmN0aW9uIGNsZWFyVmFsdWUoKSB7XG4gICAgdGhpcy5oYXNEZW9wdGVkVmFsdWUgPSBmYWxzZTtcbiAgICB0aGlzLmhhc1ZhbHVlID0gZmFsc2U7XG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgY29uc3RhbnQgdmlvbGF0aW9uIHdpdGggdGhlIHByb3ZpZGVkIGBwYXRoYC5cbiAgICovXG5cbiAgQmluZGluZy5wcm90b3R5cGUucmVhc3NpZ24gPSBmdW5jdGlvbiByZWFzc2lnbihwYXRoKSB7XG4gICAgdGhpcy5jb25zdGFudCA9IGZhbHNlO1xuICAgIHRoaXMuY29uc3RhbnRWaW9sYXRpb25zLnB1c2gocGF0aCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEluY3JlbWVudCB0aGUgYW1vdW50IG9mIHJlZmVyZW5jZXMgdG8gdGhpcyBiaW5kaW5nLlxuICAgKi9cblxuICBCaW5kaW5nLnByb3RvdHlwZS5yZWZlcmVuY2UgPSBmdW5jdGlvbiByZWZlcmVuY2UoKSB7XG4gICAgdGhpcy5yZWZlcmVuY2VkID0gdHJ1ZTtcbiAgICB0aGlzLnJlZmVyZW5jZXMrKztcbiAgfTtcblxuICAvKipcbiAgICogRGVjcmVtZW50IHRoZSBhbW91bnQgb2YgcmVmZXJlbmNlcyB0byB0aGlzIGJpbmRpbmcuXG4gICAqL1xuXG4gIEJpbmRpbmcucHJvdG90eXBlLmRlcmVmZXJlbmNlID0gZnVuY3Rpb24gZGVyZWZlcmVuY2UoKSB7XG4gICAgdGhpcy5yZWZlcmVuY2VzLS07XG4gICAgdGhpcy5yZWZlcmVuY2VkID0gISF0aGlzLnJlZmVyZW5jZXM7XG4gIH07XG5cbiAgcmV0dXJuIEJpbmRpbmc7XG59KSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEJpbmRpbmc7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
