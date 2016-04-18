'use strict';

System.register([], function (_export, _context) {
  var core;
  return {
    setters: [],
    execute: function () {
      core = require('../../modules/$.core');

      module.exports = function stringify(it) {
        return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2ZuL2pzb24vc3RyaW5naWZ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxhQUFPLFFBQVEsc0JBQVI7O0FBQ1gsYUFBTyxPQUFQLEdBQWlCLFNBQVMsU0FBVCxDQUFtQixFQUFuQixFQUF1QjtBQUN0QyxlQUFPLENBQUMsS0FBSyxJQUFMLElBQWEsS0FBSyxJQUFMLENBQVUsU0FBVixJQUF1QixLQUFLLFNBQUwsQ0FBckMsQ0FBcUQsS0FBckQsQ0FBMkQsSUFBM0QsRUFBaUUsU0FBakUsQ0FBUCxDQURzQztPQUF2QiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9mbi9qc29uL3N0cmluZ2lmeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGNvcmUgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQuY29yZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgcmV0dXJuIChjb3JlLkpTT04gJiYgY29yZS5KU09OLnN0cmluZ2lmeSB8fCBKU09OLnN0cmluZ2lmeSkuYXBwbHkoSlNPTiwgYXJndW1lbnRzKTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
