'use strict';

System.register([], function (_export, _context) {
  var toInteger, toNumber, toString;


  /**
   * Creates a function like `_.round`.
   *
   * @private
   * @param {string} methodName The name of the `Math` method to use when rounding.
   * @returns {Function} Returns the new round function.
   */
  function createRound(methodName) {
    var func = Math[methodName];
    return function (number, precision) {
      number = toNumber(number);
      precision = toInteger(precision);
      if (precision) {
        // Shift with exponential notation to avoid floating-point issues.
        // See [MDN](https://mdn.io/round#Examples) for more details.
        var pair = (toString(number) + 'e').split('e'),
            value = func(pair[0] + 'e' + (+pair[1] + precision));

        pair = (toString(value) + 'e').split('e');
        return +(pair[0] + 'e' + (+pair[1] - precision));
      }
      return func(number);
    };
  }

  return {
    setters: [],
    execute: function () {
      toInteger = require('./toInteger');
      toNumber = require('./toNumber');
      toString = require('./toString');
      module.exports = createRound;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jcmVhdGVSb3VuZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBWUEsV0FBUyxXQUFULENBQXFCLFVBQXJCLEVBQWlDO0FBQy9CLFFBQUksT0FBTyxLQUFLLFVBQUwsQ0FBUCxDQUQyQjtBQUUvQixXQUFPLFVBQVMsTUFBVCxFQUFpQixTQUFqQixFQUE0QjtBQUNqQyxlQUFTLFNBQVMsTUFBVCxDQUFULENBRGlDO0FBRWpDLGtCQUFZLFVBQVUsU0FBVixDQUFaLENBRmlDO0FBR2pDLFVBQUksU0FBSixFQUFlOzs7QUFHYixZQUFJLE9BQU8sQ0FBQyxTQUFTLE1BQVQsSUFBbUIsR0FBbkIsQ0FBRCxDQUF5QixLQUF6QixDQUErQixHQUEvQixDQUFQO1lBQ0EsUUFBUSxLQUFLLEtBQUssQ0FBTCxJQUFVLEdBQVYsSUFBaUIsQ0FBQyxLQUFLLENBQUwsQ0FBRCxHQUFXLFNBQVgsQ0FBakIsQ0FBYixDQUpTOztBQU1iLGVBQU8sQ0FBQyxTQUFTLEtBQVQsSUFBa0IsR0FBbEIsQ0FBRCxDQUF3QixLQUF4QixDQUE4QixHQUE5QixDQUFQLENBTmE7QUFPYixlQUFPLEVBQUUsS0FBSyxDQUFMLElBQVUsR0FBVixJQUFpQixDQUFDLEtBQUssQ0FBTCxDQUFELEdBQVcsU0FBWCxDQUFqQixDQUFGLENBUE07T0FBZjtBQVNBLGFBQU8sS0FBSyxNQUFMLENBQVAsQ0FaaUM7S0FBNUIsQ0FGd0I7R0FBakM7Ozs7O0FBWEksa0JBQVksUUFBUSxhQUFSO0FBQ1osaUJBQVcsUUFBUSxZQUFSO0FBQ1gsaUJBQVcsUUFBUSxZQUFSO0FBMkJmLGFBQU8sT0FBUCxHQUFpQixXQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fY3JlYXRlUm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL3RvSW50ZWdlcicpLFxuICAgIHRvTnVtYmVyID0gcmVxdWlyZSgnLi90b051bWJlcicpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBsaWtlIGBfLnJvdW5kYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWUgVGhlIG5hbWUgb2YgdGhlIGBNYXRoYCBtZXRob2QgdG8gdXNlIHdoZW4gcm91bmRpbmcuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyByb3VuZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUm91bmQobWV0aG9kTmFtZSkge1xuICB2YXIgZnVuYyA9IE1hdGhbbWV0aG9kTmFtZV07XG4gIHJldHVybiBmdW5jdGlvbihudW1iZXIsIHByZWNpc2lvbikge1xuICAgIG51bWJlciA9IHRvTnVtYmVyKG51bWJlcik7XG4gICAgcHJlY2lzaW9uID0gdG9JbnRlZ2VyKHByZWNpc2lvbik7XG4gICAgaWYgKHByZWNpc2lvbikge1xuICAgICAgLy8gU2hpZnQgd2l0aCBleHBvbmVudGlhbCBub3RhdGlvbiB0byBhdm9pZCBmbG9hdGluZy1wb2ludCBpc3N1ZXMuXG4gICAgICAvLyBTZWUgW01ETl0oaHR0cHM6Ly9tZG4uaW8vcm91bmQjRXhhbXBsZXMpIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICB2YXIgcGFpciA9ICh0b1N0cmluZyhudW1iZXIpICsgJ2UnKS5zcGxpdCgnZScpLFxuICAgICAgICAgIHZhbHVlID0gZnVuYyhwYWlyWzBdICsgJ2UnICsgKCtwYWlyWzFdICsgcHJlY2lzaW9uKSk7XG5cbiAgICAgIHBhaXIgPSAodG9TdHJpbmcodmFsdWUpICsgJ2UnKS5zcGxpdCgnZScpO1xuICAgICAgcmV0dXJuICsocGFpclswXSArICdlJyArICgrcGFpclsxXSAtIHByZWNpc2lvbikpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuYyhudW1iZXIpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVJvdW5kO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
