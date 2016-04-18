/* */
"format cjs";

/**
 * This class is responsible for traversing over the provided `File`s
 * AST and running it's parent transformers handlers over it.
 */

"use strict";

System.register([], function (_export, _context) {
  var _traversal, _traversal2, PluginPass;

  // istanbul ignore next

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }

  // istanbul ignore next

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_traversal = require("../traversal");
      _traversal2 = _interopRequireDefault(_traversal);

      PluginPass = function () {
        function PluginPass(file, plugin) {
          _classCallCheck(this, PluginPass);

          this.plugin = plugin;
          this.file = file;
          this.key = plugin.key;

          if (this.canTransform() && plugin.metadata.experimental && !file.opts.experimental) {
            file.log.warn("THE TRANSFORMER " + this.key + " HAS BEEN MARKED AS EXPERIMENTAL AND IS WIP. USE AT YOUR OWN RISK. " + "THIS WILL HIGHLY LIKELY BREAK YOUR CODE SO USE WITH **EXTREME** CAUTION. ENABLE THE " + "`experimental` OPTION TO IGNORE THIS WARNING.");
          }
        }

        /**
        * [Please add a description.]
        */

        PluginPass.prototype.canTransform = function canTransform() {
          return this.file.transformerDependencies[this.key] || this.file.pipeline.canTransform(this.plugin, this.file.opts);
        };

        /**
         * [Please add a description.]
         */

        PluginPass.prototype.transform = function transform() {
          var file = this.file;
          file.log.debug("Start transformer " + this.key);
          _traversal2["default"](file.ast, this.plugin.visitor, file.scope, file);
          file.log.debug("Finish transformer " + this.key);
        };

        return PluginPass;
      }();

      exports["default"] = PluginPass;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vcGx1Z2luLXBhc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7O0FBUUE7Ozs7Ozs7QUFLQSxXQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBSixHQUFpQixHQUF4QixHQUE4QixFQUFFLFdBQVcsR0FBWCxFQUFoQyxDQUFUO0dBQXJDOzs7O0FBSUEsV0FBUyxlQUFULENBQXlCLFFBQXpCLEVBQW1DLFdBQW5DLEVBQWdEO0FBQUUsUUFBSSxFQUFFLG9CQUFvQixXQUFwQixDQUFGLEVBQW9DO0FBQUUsWUFBTSxJQUFJLFNBQUosQ0FBYyxtQ0FBZCxDQUFOLENBQUY7S0FBeEM7R0FBbEQ7Ozs7O0FBUEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBU0ksYUFBYSxRQUFRLGNBQVI7QUFFYixvQkFBYyx1QkFBdUIsVUFBdkI7O0FBRWQsbUJBQWEsWUFBYTtBQUM1QixpQkFBUyxVQUFULENBQW9CLElBQXBCLEVBQTBCLE1BQTFCLEVBQWtDO0FBQ2hDLDBCQUFnQixJQUFoQixFQUFzQixVQUF0QixFQURnQzs7QUFHaEMsZUFBSyxNQUFMLEdBQWMsTUFBZCxDQUhnQztBQUloQyxlQUFLLElBQUwsR0FBWSxJQUFaLENBSmdDO0FBS2hDLGVBQUssR0FBTCxHQUFXLE9BQU8sR0FBUCxDQUxxQjs7QUFPaEMsY0FBSSxLQUFLLFlBQUwsTUFBdUIsT0FBTyxRQUFQLENBQWdCLFlBQWhCLElBQWdDLENBQUMsS0FBSyxJQUFMLENBQVUsWUFBVixFQUF3QjtBQUNsRixpQkFBSyxHQUFMLENBQVMsSUFBVCxDQUFjLHFCQUFxQixLQUFLLEdBQUwsR0FBVyxxRUFBaEMsR0FBd0csc0ZBQXhHLEdBQWlNLCtDQUFqTSxDQUFkLENBRGtGO1dBQXBGO1NBUEY7Ozs7OztBQUQ0QixrQkFpQjVCLENBQVcsU0FBWCxDQUFxQixZQUFyQixHQUFvQyxTQUFTLFlBQVQsR0FBd0I7QUFDMUQsaUJBQU8sS0FBSyxJQUFMLENBQVUsdUJBQVYsQ0FBa0MsS0FBSyxHQUFMLENBQWxDLElBQStDLEtBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsWUFBbkIsQ0FBZ0MsS0FBSyxNQUFMLEVBQWEsS0FBSyxJQUFMLENBQVUsSUFBVixDQUE1RixDQURtRDtTQUF4Qjs7Ozs7O0FBakJSLGtCQXlCNUIsQ0FBVyxTQUFYLENBQXFCLFNBQXJCLEdBQWlDLFNBQVMsU0FBVCxHQUFxQjtBQUNwRCxjQUFJLE9BQU8sS0FBSyxJQUFMLENBRHlDO0FBRXBELGVBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSx1QkFBdUIsS0FBSyxHQUFMLENBQXRDLENBRm9EO0FBR3BELHNCQUFZLFNBQVosRUFBdUIsS0FBSyxHQUFMLEVBQVUsS0FBSyxNQUFMLENBQVksT0FBWixFQUFxQixLQUFLLEtBQUwsRUFBWSxJQUFsRSxFQUhvRDtBQUlwRCxlQUFLLEdBQUwsQ0FBUyxLQUFULENBQWUsd0JBQXdCLEtBQUssR0FBTCxDQUF2QyxDQUpvRDtTQUFyQixDQXpCTDs7QUFnQzVCLGVBQU8sVUFBUCxDQWhDNEI7T0FBWjs7QUFtQ2xCLGNBQVEsU0FBUixJQUFxQixVQUFyQjtBQUNBLGFBQU8sT0FBUCxHQUFpQixRQUFRLFNBQVIsQ0FBakIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmFuc2Zvcm1hdGlvbi9wbHVnaW4tcGFzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIHJlc3BvbnNpYmxlIGZvciB0cmF2ZXJzaW5nIG92ZXIgdGhlIHByb3ZpZGVkIGBGaWxlYHNcbiAqIEFTVCBhbmQgcnVubmluZyBpdCdzIHBhcmVudCB0cmFuc2Zvcm1lcnMgaGFuZGxlcnMgb3ZlciBpdC5cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgX3RyYXZlcnNhbCA9IHJlcXVpcmUoXCIuLi90cmF2ZXJzYWxcIik7XG5cbnZhciBfdHJhdmVyc2FsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYXZlcnNhbCk7XG5cbnZhciBQbHVnaW5QYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUGx1Z2luUGFzcyhmaWxlLCBwbHVnaW4pIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGx1Z2luUGFzcyk7XG5cbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICB0aGlzLmZpbGUgPSBmaWxlO1xuICAgIHRoaXMua2V5ID0gcGx1Z2luLmtleTtcblxuICAgIGlmICh0aGlzLmNhblRyYW5zZm9ybSgpICYmIHBsdWdpbi5tZXRhZGF0YS5leHBlcmltZW50YWwgJiYgIWZpbGUub3B0cy5leHBlcmltZW50YWwpIHtcbiAgICAgIGZpbGUubG9nLndhcm4oXCJUSEUgVFJBTlNGT1JNRVIgXCIgKyB0aGlzLmtleSArIFwiIEhBUyBCRUVOIE1BUktFRCBBUyBFWFBFUklNRU5UQUwgQU5EIElTIFdJUC4gVVNFIEFUIFlPVVIgT1dOIFJJU0suIFwiICsgXCJUSElTIFdJTEwgSElHSExZIExJS0VMWSBCUkVBSyBZT1VSIENPREUgU08gVVNFIFdJVEggKipFWFRSRU1FKiogQ0FVVElPTi4gRU5BQkxFIFRIRSBcIiArIFwiYGV4cGVyaW1lbnRhbGAgT1BUSU9OIFRPIElHTk9SRSBUSElTIFdBUk5JTkcuXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAqL1xuXG4gIFBsdWdpblBhc3MucHJvdG90eXBlLmNhblRyYW5zZm9ybSA9IGZ1bmN0aW9uIGNhblRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlLnRyYW5zZm9ybWVyRGVwZW5kZW5jaWVzW3RoaXMua2V5XSB8fCB0aGlzLmZpbGUucGlwZWxpbmUuY2FuVHJhbnNmb3JtKHRoaXMucGx1Z2luLCB0aGlzLmZpbGUub3B0cyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBQbHVnaW5QYXNzLnByb3RvdHlwZS50cmFuc2Zvcm0gPSBmdW5jdGlvbiB0cmFuc2Zvcm0oKSB7XG4gICAgdmFyIGZpbGUgPSB0aGlzLmZpbGU7XG4gICAgZmlsZS5sb2cuZGVidWcoXCJTdGFydCB0cmFuc2Zvcm1lciBcIiArIHRoaXMua2V5KTtcbiAgICBfdHJhdmVyc2FsMltcImRlZmF1bHRcIl0oZmlsZS5hc3QsIHRoaXMucGx1Z2luLnZpc2l0b3IsIGZpbGUuc2NvcGUsIGZpbGUpO1xuICAgIGZpbGUubG9nLmRlYnVnKFwiRmluaXNoIHRyYW5zZm9ybWVyIFwiICsgdGhpcy5rZXkpO1xuICB9O1xuXG4gIHJldHVybiBQbHVnaW5QYXNzO1xufSkoKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBQbHVnaW5QYXNzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
