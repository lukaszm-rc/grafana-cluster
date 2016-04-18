/* */
'use strict';

System.register([], function (_export, _context) {
  var $export, $re;
  return {
    setters: [],
    execute: function () {
      $export = require('./$.export');
      $re = require('./$.replacer')(/[&<>"']/g, {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
      });

      $export($export.P + $export.F, 'String', { escapeHTML: function escapeHTML() {
          return $re(this);
        } });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvY29yZS5zdHJpbmcuZXNjYXBlLWh0bWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7O0FBQ0ksZ0JBQVUsUUFBUSxZQUFSO0FBQ1YsWUFBTSxRQUFRLGNBQVIsRUFBd0IsVUFBeEIsRUFBb0M7QUFDNUMsYUFBSyxPQUFMO0FBQ0EsYUFBSyxNQUFMO0FBQ0EsYUFBSyxNQUFMO0FBQ0EsYUFBSyxRQUFMO0FBQ0EsYUFBSyxRQUFMO09BTFE7O0FBT1YsY0FBUSxRQUFRLENBQVIsR0FBWSxRQUFRLENBQVIsRUFBVyxRQUEvQixFQUF5QyxFQUFDLFlBQVksU0FBUyxVQUFULEdBQXNCO0FBQ3hFLGlCQUFPLElBQUksSUFBSixDQUFQLENBRHdFO1NBQXRCLEVBQXREIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvY29yZS5zdHJpbmcuZXNjYXBlLWh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xudmFyICRyZSA9IHJlcXVpcmUoJy4vJC5yZXBsYWNlcicpKC9bJjw+XCInXS9nLCB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmYXBvczsnXG59KTtcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GLCAnU3RyaW5nJywge2VzY2FwZUhUTUw6IGZ1bmN0aW9uIGVzY2FwZUhUTUwoKSB7XG4gICAgcmV0dXJuICRyZSh0aGlzKTtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
