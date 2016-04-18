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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9jb3JlLnN0cmluZy5lc2NhcGUtaHRtbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7QUFDSSxnQkFBVSxRQUFRLFlBQVI7QUFDVixZQUFNLFFBQVEsY0FBUixFQUF3QixVQUF4QixFQUFvQztBQUM1QyxhQUFLLE9BQUw7QUFDQSxhQUFLLE1BQUw7QUFDQSxhQUFLLE1BQUw7QUFDQSxhQUFLLFFBQUw7QUFDQSxhQUFLLFFBQUw7T0FMUTs7QUFPVixjQUFRLFFBQVEsQ0FBUixHQUFZLFFBQVEsQ0FBUixFQUFXLFFBQS9CLEVBQXlDLEVBQUMsWUFBWSxTQUFTLFVBQVQsR0FBc0I7QUFDeEUsaUJBQU8sSUFBSSxJQUFKLENBQVAsQ0FEd0U7U0FBdEIsRUFBdEQiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzL2NvcmUuc3RyaW5nLmVzY2FwZS1odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcbnZhciAkcmUgPSByZXF1aXJlKCcuLyQucmVwbGFjZXInKSgvWyY8PlwiJ10vZywge1xuICAnJic6ICcmYW1wOycsXG4gICc8JzogJyZsdDsnLFxuICAnPic6ICcmZ3Q7JyxcbiAgJ1wiJzogJyZxdW90OycsXG4gIFwiJ1wiOiAnJmFwb3M7J1xufSk7XG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiwgJ1N0cmluZycsIHtlc2NhcGVIVE1MOiBmdW5jdGlvbiBlc2NhcGVIVE1MKCkge1xuICAgIHJldHVybiAkcmUodGhpcyk7XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
