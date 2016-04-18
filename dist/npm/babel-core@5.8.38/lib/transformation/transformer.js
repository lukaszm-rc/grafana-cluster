/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _plugin, _plugin2, Transformer;

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
      exports.__esModule = true;_plugin = require("./plugin");
      _plugin2 = _interopRequireDefault(_plugin);

      Transformer = function Transformer(key, obj) {
        _classCallCheck(this, Transformer);

        var plugin = {};

        plugin.metadata = obj.metadata;
        delete obj.metadata;

        plugin.visitor = obj;

        return new _plugin2["default"](key, plugin);
      };

      exports["default"] = Transformer;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBSixHQUFpQixHQUF4QixHQUE4QixFQUFFLFdBQVcsR0FBWCxFQUFoQyxDQUFUO0dBQXJDOzs7O0FBSUEsV0FBUyxlQUFULENBQXlCLFFBQXpCLEVBQW1DLFdBQW5DLEVBQWdEO0FBQUUsUUFBSSxFQUFFLG9CQUFvQixXQUFwQixDQUFGLEVBQW9DO0FBQUUsWUFBTSxJQUFJLFNBQUosQ0FBYyxtQ0FBZCxDQUFOLENBQUY7S0FBeEM7R0FBbEQ7Ozs7O0FBUEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBU0ksVUFBVSxRQUFRLFVBQVI7QUFFVixpQkFBVyx1QkFBdUIsT0FBdkI7O0FBTVgsb0JBQWMsU0FBUyxXQUFULENBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCO0FBQy9DLHdCQUFnQixJQUFoQixFQUFzQixXQUF0QixFQUQrQzs7QUFHL0MsWUFBSSxTQUFTLEVBQVQsQ0FIMkM7O0FBSy9DLGVBQU8sUUFBUCxHQUFrQixJQUFJLFFBQUosQ0FMNkI7QUFNL0MsZUFBTyxJQUFJLFFBQUosQ0FOd0M7O0FBUS9DLGVBQU8sT0FBUCxHQUFpQixHQUFqQixDQVIrQzs7QUFVL0MsZUFBTyxJQUFJLFNBQVMsU0FBVCxDQUFKLENBQXdCLEdBQXhCLEVBQTZCLE1BQTdCLENBQVAsQ0FWK0M7T0FBL0I7O0FBYWxCLGNBQVEsU0FBUixJQUFxQixXQUFyQjtBQUNBLGFBQU8sT0FBUCxHQUFpQixRQUFRLFNBQVIsQ0FBakIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmFuc2Zvcm1hdGlvbi90cmFuc2Zvcm1lci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgX3BsdWdpbiA9IHJlcXVpcmUoXCIuL3BsdWdpblwiKTtcblxudmFyIF9wbHVnaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGx1Z2luKTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgVHJhbnNmb3JtZXIgPSBmdW5jdGlvbiBUcmFuc2Zvcm1lcihrZXksIG9iaikge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhbnNmb3JtZXIpO1xuXG4gIHZhciBwbHVnaW4gPSB7fTtcblxuICBwbHVnaW4ubWV0YWRhdGEgPSBvYmoubWV0YWRhdGE7XG4gIGRlbGV0ZSBvYmoubWV0YWRhdGE7XG5cbiAgcGx1Z2luLnZpc2l0b3IgPSBvYmo7XG5cbiAgcmV0dXJuIG5ldyBfcGx1Z2luMltcImRlZmF1bHRcIl0oa2V5LCBwbHVnaW4pO1xufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBUcmFuc2Zvcm1lcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
