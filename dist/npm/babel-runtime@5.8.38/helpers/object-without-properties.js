/* */
"use strict";

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      exports["default"] = function (obj, keys) {
        var target = {};

        for (var i in obj) {
          if (keys.indexOf(i) >= 0) continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
          target[i] = obj[i];
        }

        return target;
      };

      exports.__esModule = true;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL29iamVjdC13aXRob3V0LXByb3BlcnRpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7QUFFQSxjQUFRLFNBQVIsSUFBcUIsVUFBVSxHQUFWLEVBQWUsSUFBZixFQUFxQjtBQUN4QyxZQUFJLFNBQVMsRUFBVCxDQURvQzs7QUFHeEMsYUFBSyxJQUFJLENBQUosSUFBUyxHQUFkLEVBQW1CO0FBQ2pCLGNBQUksS0FBSyxPQUFMLENBQWEsQ0FBYixLQUFtQixDQUFuQixFQUFzQixTQUExQjtBQUNBLGNBQUksQ0FBQyxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsQ0FBMUMsQ0FBRCxFQUErQyxTQUFuRDtBQUNBLGlCQUFPLENBQVAsSUFBWSxJQUFJLENBQUosQ0FBWixDQUhpQjtTQUFuQjs7QUFNQSxlQUFPLE1BQVAsQ0FUd0M7T0FBckI7O0FBWXJCLGNBQVEsVUFBUixHQUFxQixJQUFyQiIsImZpbGUiOiJucG0vYmFiZWwtcnVudGltZUA1LjguMzgvaGVscGVycy9vYmplY3Qtd2l0aG91dC1wcm9wZXJ0aWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqLCBrZXlzKSB7XG4gIHZhciB0YXJnZXQgPSB7fTtcblxuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7XG4gICAgdGFyZ2V0W2ldID0gb2JqW2ldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
