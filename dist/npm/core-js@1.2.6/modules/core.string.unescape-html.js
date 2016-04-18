/* */
'use strict';

System.register([], function (_export, _context) {
  var $export, $re;
  return {
    setters: [],
    execute: function () {
      $export = require('./$.export');
      $re = require('./$.replacer')(/&(?:amp|lt|gt|quot|apos);/g, {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&apos;': "'"
      });

      $export($export.P + $export.F, 'String', { unescapeHTML: function unescapeHTML() {
          return $re(this);
        } });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvY29yZS5zdHJpbmcudW5lc2NhcGUtaHRtbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7QUFDSSxnQkFBVSxRQUFRLFlBQVI7QUFDVixZQUFNLFFBQVEsY0FBUixFQUF3Qiw0QkFBeEIsRUFBc0Q7QUFDOUQsaUJBQVMsR0FBVDtBQUNBLGdCQUFRLEdBQVI7QUFDQSxnQkFBUSxHQUFSO0FBQ0Esa0JBQVUsR0FBVjtBQUNBLGtCQUFVLEdBQVY7T0FMUTs7QUFPVixjQUFRLFFBQVEsQ0FBUixHQUFZLFFBQVEsQ0FBUixFQUFXLFFBQS9CLEVBQXlDLEVBQUMsY0FBYyxTQUFTLFlBQVQsR0FBd0I7QUFDNUUsaUJBQU8sSUFBSSxJQUFKLENBQVAsQ0FENEU7U0FBeEIsRUFBeEQiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy9jb3JlLnN0cmluZy51bmVzY2FwZS1odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcbnZhciAkcmUgPSByZXF1aXJlKCcuLyQucmVwbGFjZXInKSgvJig/OmFtcHxsdHxndHxxdW90fGFwb3MpOy9nLCB7XG4gICcmYW1wOyc6ICcmJyxcbiAgJyZsdDsnOiAnPCcsXG4gICcmZ3Q7JzogJz4nLFxuICAnJnF1b3Q7JzogJ1wiJyxcbiAgJyZhcG9zOyc6IFwiJ1wiXG59KTtcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GLCAnU3RyaW5nJywge3VuZXNjYXBlSFRNTDogZnVuY3Rpb24gdW5lc2NhcGVIVE1MKCkge1xuICAgIHJldHVybiAkcmUodGhpcyk7XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
