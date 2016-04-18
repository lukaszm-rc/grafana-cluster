'use strict';

System.register([], function (_export, _context) {
  var global, $export, invoke, partial, navigator, MSIE, wrap;
  return {
    setters: [],
    execute: function () {
      global = require('./$.global');
      $export = require('./$.export');
      invoke = require('./$.invoke');
      partial = require('./$.partial');
      navigator = global.navigator;
      MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent);

      wrap = function wrap(set) {
        return MSIE ? function (fn, time) {
          return set(invoke(partial, [].slice.call(arguments, 2), typeof fn == 'function' ? fn : Function(fn)), time);
        } : set;
      };

      $export($export.G + $export.B + $export.F * MSIE, {
        setTimeout: wrap(global.setTimeout),
        setInterval: wrap(global.setInterval)
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksZUFBUyxRQUFRLFlBQVI7QUFDVCxnQkFBVSxRQUFRLFlBQVI7QUFDVixlQUFTLFFBQVEsWUFBUjtBQUNULGdCQUFVLFFBQVEsYUFBUjtBQUNWLGtCQUFZLE9BQU8sU0FBUDtBQUNaLGFBQU8sQ0FBQyxDQUFDLFNBQUQsSUFBYyxXQUFXLElBQVgsQ0FBZ0IsVUFBVSxTQUFWLENBQS9COztBQUNQLGFBQU8sU0FBUCxJQUFPLENBQVMsR0FBVCxFQUFjO0FBQ3ZCLGVBQU8sT0FBTyxVQUFTLEVBQVQsRUFBYSxJQUFiLEVBQW1CO0FBQy9CLGlCQUFPLElBQUksT0FBTyxPQUFQLEVBQWdCLEdBQUcsS0FBSCxDQUFTLElBQVQsQ0FBYyxTQUFkLEVBQXlCLENBQXpCLENBQWhCLEVBQTZDLE9BQU8sRUFBUCxJQUFhLFVBQWIsR0FBMEIsRUFBMUIsR0FBK0IsU0FBUyxFQUFULENBQS9CLENBQWpELEVBQStGLElBQS9GLENBQVAsQ0FEK0I7U0FBbkIsR0FFVixHQUZHLENBRGdCO09BQWQ7O0FBS1gsY0FBUSxRQUFRLENBQVIsR0FBWSxRQUFRLENBQVIsR0FBWSxRQUFRLENBQVIsR0FBWSxJQUFaLEVBQWtCO0FBQ2hELG9CQUFZLEtBQUssT0FBTyxVQUFQLENBQWpCO0FBQ0EscUJBQWEsS0FBSyxPQUFPLFdBQVAsQ0FBbEI7T0FGRiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL3dlYi50aW1lcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJyksXG4gICAgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICBpbnZva2UgPSByZXF1aXJlKCcuLyQuaW52b2tlJyksXG4gICAgcGFydGlhbCA9IHJlcXVpcmUoJy4vJC5wYXJ0aWFsJyksXG4gICAgbmF2aWdhdG9yID0gZ2xvYmFsLm5hdmlnYXRvcixcbiAgICBNU0lFID0gISFuYXZpZ2F0b3IgJiYgL01TSUUgLlxcLi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbnZhciB3cmFwID0gZnVuY3Rpb24oc2V0KSB7XG4gIHJldHVybiBNU0lFID8gZnVuY3Rpb24oZm4sIHRpbWUpIHtcbiAgICByZXR1cm4gc2V0KGludm9rZShwYXJ0aWFsLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMiksIHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbikpLCB0aW1lKTtcbiAgfSA6IHNldDtcbn07XG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuQiArICRleHBvcnQuRiAqIE1TSUUsIHtcbiAgc2V0VGltZW91dDogd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
