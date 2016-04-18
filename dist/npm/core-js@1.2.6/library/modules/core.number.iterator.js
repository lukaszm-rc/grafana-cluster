/* */
'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      require('./$.iter-define')(Number, 'Number', function (iterated) {
        this._l = +iterated;
        this._i = 0;
      }, function () {
        var i = this._i++,
            done = !(i < this._l);
        return {
          done: done,
          value: done ? undefined : i
        };
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9jb3JlLm51bWJlci5pdGVyYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7OztBQUNBLGNBQVEsaUJBQVIsRUFBMkIsTUFBM0IsRUFBbUMsUUFBbkMsRUFBNkMsVUFBUyxRQUFULEVBQW1CO0FBQzlELGFBQUssRUFBTCxHQUFVLENBQUMsUUFBRCxDQURvRDtBQUU5RCxhQUFLLEVBQUwsR0FBVSxDQUFWLENBRjhEO09BQW5CLEVBRzFDLFlBQVc7QUFDWixZQUFJLElBQUksS0FBSyxFQUFMLEVBQUo7WUFDQSxPQUFPLEVBQUUsSUFBSSxLQUFLLEVBQUwsQ0FBTixDQUZDO0FBR1osZUFBTztBQUNMLGdCQUFNLElBQU47QUFDQSxpQkFBTyxPQUFPLFNBQVAsR0FBbUIsQ0FBbkI7U0FGVCxDQUhZO09BQVgsQ0FISCIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvY29yZS5udW1iZXIuaXRlcmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKE51bWJlciwgJ051bWJlcicsIGZ1bmN0aW9uKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX2wgPSAraXRlcmF0ZWQ7XG4gIHRoaXMuX2kgPSAwO1xufSwgZnVuY3Rpb24oKSB7XG4gIHZhciBpID0gdGhpcy5faSsrLFxuICAgICAgZG9uZSA9ICEoaSA8IHRoaXMuX2wpO1xuICByZXR1cm4ge1xuICAgIGRvbmU6IGRvbmUsXG4gICAgdmFsdWU6IGRvbmUgPyB1bmRlZmluZWQgOiBpXG4gIH07XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
