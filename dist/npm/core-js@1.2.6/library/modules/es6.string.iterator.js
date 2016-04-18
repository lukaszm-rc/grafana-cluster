/* */
'use strict';

System.register([], function (_export, _context) {
  var $at;
  return {
    setters: [],
    execute: function () {
      $at = require('./$.string-at')(true);

      require('./$.iter-define')(String, 'String', function (iterated) {
        this._t = String(iterated);
        this._i = 0;
      }, function () {
        var O = this._t,
            index = this._i,
            point;
        if (index >= O.length) return {
          value: undefined,
          done: true
        };
        point = $at(O, index);
        this._i += point.length;
        return {
          value: point,
          done: false
        };
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQUNJLFlBQU0sUUFBUSxlQUFSLEVBQXlCLElBQXpCOztBQUNWLGNBQVEsaUJBQVIsRUFBMkIsTUFBM0IsRUFBbUMsUUFBbkMsRUFBNkMsVUFBUyxRQUFULEVBQW1CO0FBQzlELGFBQUssRUFBTCxHQUFVLE9BQU8sUUFBUCxDQUFWLENBRDhEO0FBRTlELGFBQUssRUFBTCxHQUFVLENBQVYsQ0FGOEQ7T0FBbkIsRUFHMUMsWUFBVztBQUNaLFlBQUksSUFBSSxLQUFLLEVBQUw7WUFDSixRQUFRLEtBQUssRUFBTDtZQUNSLEtBRkosQ0FEWTtBQUlaLFlBQUksU0FBUyxFQUFFLE1BQUYsRUFDWCxPQUFPO0FBQ0wsaUJBQU8sU0FBUDtBQUNBLGdCQUFNLElBQU47U0FGRixDQURGO0FBS0EsZ0JBQVEsSUFBSSxDQUFKLEVBQU8sS0FBUCxDQUFSLENBVFk7QUFVWixhQUFLLEVBQUwsSUFBVyxNQUFNLE1BQU4sQ0FWQztBQVdaLGVBQU87QUFDTCxpQkFBTyxLQUFQO0FBQ0EsZ0JBQU0sS0FBTjtTQUZGLENBWFk7T0FBWCxDQUhIIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi8kLnN0cmluZy1hdCcpKHRydWUpO1xucmVxdWlyZSgnLi8kLml0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7XG4gIHRoaXMuX2kgPSAwO1xufSwgZnVuY3Rpb24oKSB7XG4gIHZhciBPID0gdGhpcy5fdCxcbiAgICAgIGluZGV4ID0gdGhpcy5faSxcbiAgICAgIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpXG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICBkb25lOiB0cnVlXG4gICAgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogcG9pbnQsXG4gICAgZG9uZTogZmFsc2VcbiAgfTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
