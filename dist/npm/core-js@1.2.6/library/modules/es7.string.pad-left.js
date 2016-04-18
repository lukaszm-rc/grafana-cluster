/* */
'use strict';

System.register([], function (_export, _context) {
    var $export, $pad;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            $pad = require('./$.string-pad');

            $export($export.P, 'String', { padLeft: function padLeft(maxLength) {
                    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczcuc3RyaW5nLnBhZC1sZWZ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQUNJLHNCQUFVLFFBQVEsWUFBUjtBQUNWLG1CQUFPLFFBQVEsZ0JBQVI7O0FBQ1gsb0JBQVEsUUFBUSxDQUFSLEVBQVcsUUFBbkIsRUFBNkIsRUFBQyxTQUFTLFNBQVMsT0FBVCxDQUFpQixTQUFqQixFQUE0QjtBQUMvRCwyQkFBTyxLQUFLLElBQUwsRUFBVyxTQUFYLEVBQXNCLFVBQVUsTUFBVixHQUFtQixDQUFuQixHQUF1QixVQUFVLENBQVYsQ0FBdkIsR0FBc0MsU0FBdEMsRUFBaUQsSUFBdkUsQ0FBUCxDQUQrRDtpQkFBNUIsRUFBdkMiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLWxlZnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgICRwYWQgPSByZXF1aXJlKCcuLyQuc3RyaW5nLXBhZCcpO1xuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7cGFkTGVmdDogZnVuY3Rpb24gcGFkTGVmdChtYXhMZW5ndGgpIHtcbiAgICByZXR1cm4gJHBhZCh0aGlzLCBtYXhMZW5ndGgsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCB0cnVlKTtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
