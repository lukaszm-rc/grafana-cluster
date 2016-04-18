/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _types, t, metadata, visitor;

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

  function shouldShadow(path, shadowPath) {
    if (path.is("_forceShadow")) {
      return true;
    } else {
      return shadowPath && !shadowPath.isArrowFunctionExpression();
    }
  }

  /**
   * [Please add a description.]
   */

  function remap(path, key, create) {
    // ensure that we're shadowed
    var shadowPath = path.inShadow(key);
    if (!shouldShadow(path, shadowPath)) return;

    var shadowFunction = path.node._shadowedFunctionLiteral;
    var currentFunction;

    var fnPath = path.findParent(function (path) {
      if (path.isProgram() || path.isFunction()) {
        // catch current function in case this is the shadowed one and we can ignore it
        currentFunction = currentFunction || path;
      }

      if (path.isProgram()) {
        return true;
      } else if (path.isFunction()) {
        if (shadowFunction) {
          return path === shadowFunction || path.node === shadowFunction.node;
        } else {
          return !path.is("shadow");
        }
      }

      return false;
    });

    // no point in realiasing if we're in this function
    if (fnPath === currentFunction) return;

    var cached = fnPath.getData(key);
    if (cached) return cached;

    var init = create();
    var id = path.scope.generateUidIdentifier(key);

    fnPath.setData(key, id);
    fnPath.scope.push({ id: id, init: init });

    return id;
  }

  /**
   * [Please add a description.]
   */

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_types = require("../../../types");
      t = _interopRequireWildcard(_types);
      metadata = {
        group: "builtin-trailing"
      };


      exports.metadata = metadata;visitor = {

        /**
         * [Please add a description.]
         */

        ThisExpression: function ThisExpression() {
          return remap(this, "this", function () {
            return t.thisExpression();
          });
        },

        /**
         * [Please add a description.]
         */

        ReferencedIdentifier: function ReferencedIdentifier(node) {
          if (node.name === "arguments") {
            return remap(this, "arguments", function () {
              return t.identifier("arguments");
            });
          }
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2ludGVybmFsL3NoYWRvdy1mdW5jdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOztBQVdBLFdBQVMsWUFBVCxDQUFzQixJQUF0QixFQUE0QixVQUE1QixFQUF3QztBQUN0QyxRQUFJLEtBQUssRUFBTCxDQUFRLGNBQVIsQ0FBSixFQUE2QjtBQUMzQixhQUFPLElBQVAsQ0FEMkI7S0FBN0IsTUFFTztBQUNMLGFBQU8sY0FBYyxDQUFDLFdBQVcseUJBQVgsRUFBRCxDQURoQjtLQUZQO0dBREY7Ozs7OztBQVlBLFdBQVMsS0FBVCxDQUFlLElBQWYsRUFBcUIsR0FBckIsRUFBMEIsTUFBMUIsRUFBa0M7O0FBRWhDLFFBQUksYUFBYSxLQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWIsQ0FGNEI7QUFHaEMsUUFBSSxDQUFDLGFBQWEsSUFBYixFQUFtQixVQUFuQixDQUFELEVBQWlDLE9BQXJDOztBQUVBLFFBQUksaUJBQWlCLEtBQUssSUFBTCxDQUFVLHdCQUFWLENBTFc7QUFNaEMsUUFBSSxlQUFKLENBTmdDOztBQVFoQyxRQUFJLFNBQVMsS0FBSyxVQUFMLENBQWdCLFVBQVUsSUFBVixFQUFnQjtBQUMzQyxVQUFJLEtBQUssU0FBTCxNQUFvQixLQUFLLFVBQUwsRUFBcEIsRUFBdUM7O0FBRXpDLDBCQUFrQixtQkFBbUIsSUFBbkIsQ0FGdUI7T0FBM0M7O0FBS0EsVUFBSSxLQUFLLFNBQUwsRUFBSixFQUFzQjtBQUNwQixlQUFPLElBQVAsQ0FEb0I7T0FBdEIsTUFFTyxJQUFJLEtBQUssVUFBTCxFQUFKLEVBQXVCO0FBQzVCLFlBQUksY0FBSixFQUFvQjtBQUNsQixpQkFBTyxTQUFTLGNBQVQsSUFBMkIsS0FBSyxJQUFMLEtBQWMsZUFBZSxJQUFmLENBRDlCO1NBQXBCLE1BRU87QUFDTCxpQkFBTyxDQUFDLEtBQUssRUFBTCxDQUFRLFFBQVIsQ0FBRCxDQURGO1NBRlA7T0FESzs7QUFRUCxhQUFPLEtBQVAsQ0FoQjJDO0tBQWhCLENBQXpCOzs7QUFSNEIsUUE0QjVCLFdBQVcsZUFBWCxFQUE0QixPQUFoQzs7QUFFQSxRQUFJLFNBQVMsT0FBTyxPQUFQLENBQWUsR0FBZixDQUFULENBOUI0QjtBQStCaEMsUUFBSSxNQUFKLEVBQVksT0FBTyxNQUFQLENBQVo7O0FBRUEsUUFBSSxPQUFPLFFBQVAsQ0FqQzRCO0FBa0NoQyxRQUFJLEtBQUssS0FBSyxLQUFMLENBQVcscUJBQVgsQ0FBaUMsR0FBakMsQ0FBTCxDQWxDNEI7O0FBb0NoQyxXQUFPLE9BQVAsQ0FBZSxHQUFmLEVBQW9CLEVBQXBCLEVBcENnQztBQXFDaEMsV0FBTyxLQUFQLENBQWEsSUFBYixDQUFrQixFQUFFLElBQUksRUFBSixFQUFRLE1BQU0sSUFBTixFQUE1QixFQXJDZ0M7O0FBdUNoQyxXQUFPLEVBQVAsQ0F2Q2dDO0dBQWxDOzs7Ozs7Ozs7QUExQkEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBS0ksU0FBUyxRQUFRLGdCQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEI7QUFFSixpQkFBVztBQUNiLGVBQU8sa0JBQVA7Ozs7QUFHRixjQUFRLFFBQVIsR0FBbUIsUUFBbkIsQ0EyREksVUFBVTs7Ozs7O0FBTVosd0JBQWdCLFNBQVMsY0FBVCxHQUEwQjtBQUN4QyxpQkFBTyxNQUFNLElBQU4sRUFBWSxNQUFaLEVBQW9CLFlBQVk7QUFDckMsbUJBQU8sRUFBRSxjQUFGLEVBQVAsQ0FEcUM7V0FBWixDQUEzQixDQUR3QztTQUExQjs7Ozs7O0FBVWhCLDhCQUFzQixTQUFTLG9CQUFULENBQThCLElBQTlCLEVBQW9DO0FBQ3hELGNBQUksS0FBSyxJQUFMLEtBQWMsV0FBZCxFQUEyQjtBQUM3QixtQkFBTyxNQUFNLElBQU4sRUFBWSxXQUFaLEVBQXlCLFlBQVk7QUFDMUMscUJBQU8sRUFBRSxVQUFGLENBQWEsV0FBYixDQUFQLENBRDBDO2FBQVosQ0FBaEMsQ0FENkI7V0FBL0I7U0FEb0I7OztBQVF4QixjQUFRLE9BQVIsR0FBa0IsT0FBbEIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmFuc2Zvcm1hdGlvbi90cmFuc2Zvcm1lcnMvaW50ZXJuYWwvc2hhZG93LWZ1bmN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG52YXIgbWV0YWRhdGEgPSB7XG4gIGdyb3VwOiBcImJ1aWx0aW4tdHJhaWxpbmdcIlxufTtcblxuZXhwb3J0cy5tZXRhZGF0YSA9IG1ldGFkYXRhO1xuZnVuY3Rpb24gc2hvdWxkU2hhZG93KHBhdGgsIHNoYWRvd1BhdGgpIHtcbiAgaWYgKHBhdGguaXMoXCJfZm9yY2VTaGFkb3dcIikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc2hhZG93UGF0aCAmJiAhc2hhZG93UGF0aC5pc0Fycm93RnVuY3Rpb25FeHByZXNzaW9uKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiByZW1hcChwYXRoLCBrZXksIGNyZWF0ZSkge1xuICAvLyBlbnN1cmUgdGhhdCB3ZSdyZSBzaGFkb3dlZFxuICB2YXIgc2hhZG93UGF0aCA9IHBhdGguaW5TaGFkb3coa2V5KTtcbiAgaWYgKCFzaG91bGRTaGFkb3cocGF0aCwgc2hhZG93UGF0aCkpIHJldHVybjtcblxuICB2YXIgc2hhZG93RnVuY3Rpb24gPSBwYXRoLm5vZGUuX3NoYWRvd2VkRnVuY3Rpb25MaXRlcmFsO1xuICB2YXIgY3VycmVudEZ1bmN0aW9uO1xuXG4gIHZhciBmblBhdGggPSBwYXRoLmZpbmRQYXJlbnQoZnVuY3Rpb24gKHBhdGgpIHtcbiAgICBpZiAocGF0aC5pc1Byb2dyYW0oKSB8fCBwYXRoLmlzRnVuY3Rpb24oKSkge1xuICAgICAgLy8gY2F0Y2ggY3VycmVudCBmdW5jdGlvbiBpbiBjYXNlIHRoaXMgaXMgdGhlIHNoYWRvd2VkIG9uZSBhbmQgd2UgY2FuIGlnbm9yZSBpdFxuICAgICAgY3VycmVudEZ1bmN0aW9uID0gY3VycmVudEZ1bmN0aW9uIHx8IHBhdGg7XG4gICAgfVxuXG4gICAgaWYgKHBhdGguaXNQcm9ncmFtKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAocGF0aC5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgIGlmIChzaGFkb3dGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gcGF0aCA9PT0gc2hhZG93RnVuY3Rpb24gfHwgcGF0aC5ub2RlID09PSBzaGFkb3dGdW5jdGlvbi5ub2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICFwYXRoLmlzKFwic2hhZG93XCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cbiAgLy8gbm8gcG9pbnQgaW4gcmVhbGlhc2luZyBpZiB3ZSdyZSBpbiB0aGlzIGZ1bmN0aW9uXG4gIGlmIChmblBhdGggPT09IGN1cnJlbnRGdW5jdGlvbikgcmV0dXJuO1xuXG4gIHZhciBjYWNoZWQgPSBmblBhdGguZ2V0RGF0YShrZXkpO1xuICBpZiAoY2FjaGVkKSByZXR1cm4gY2FjaGVkO1xuXG4gIHZhciBpbml0ID0gY3JlYXRlKCk7XG4gIHZhciBpZCA9IHBhdGguc2NvcGUuZ2VuZXJhdGVVaWRJZGVudGlmaWVyKGtleSk7XG5cbiAgZm5QYXRoLnNldERhdGEoa2V5LCBpZCk7XG4gIGZuUGF0aC5zY29wZS5wdXNoKHsgaWQ6IGlkLCBpbml0OiBpbml0IH0pO1xuXG4gIHJldHVybiBpZDtcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgdmlzaXRvciA9IHtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFRoaXNFeHByZXNzaW9uOiBmdW5jdGlvbiBUaGlzRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gcmVtYXAodGhpcywgXCJ0aGlzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0LnRoaXNFeHByZXNzaW9uKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBSZWZlcmVuY2VkSWRlbnRpZmllcjogZnVuY3Rpb24gUmVmZXJlbmNlZElkZW50aWZpZXIobm9kZSkge1xuICAgIGlmIChub2RlLm5hbWUgPT09IFwiYXJndW1lbnRzXCIpIHtcbiAgICAgIHJldHVybiByZW1hcCh0aGlzLCBcImFyZ3VtZW50c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0LmlkZW50aWZpZXIoXCJhcmd1bWVudHNcIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLnZpc2l0b3IgPSB2aXNpdG9yOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
