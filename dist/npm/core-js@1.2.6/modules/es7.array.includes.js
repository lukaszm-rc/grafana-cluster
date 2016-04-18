/* */
'use strict';

System.register([], function (_export, _context) {
    var $export, $includes;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            $includes = require('./$.array-includes')(true);

            $export($export.P, 'Array', { includes: function includes(el) {
                    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
                } });
            require('./$.add-to-unscopables')('includes');
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM3LmFycmF5LmluY2x1ZGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQUNJLHNCQUFVLFFBQVEsWUFBUjtBQUNWLHdCQUFZLFFBQVEsb0JBQVIsRUFBOEIsSUFBOUI7O0FBQ2hCLG9CQUFRLFFBQVEsQ0FBUixFQUFXLE9BQW5CLEVBQTRCLEVBQUMsVUFBVSxTQUFTLFFBQVQsQ0FBa0IsRUFBbEIsRUFBc0I7QUFDekQsMkJBQU8sVUFBVSxJQUFWLEVBQWdCLEVBQWhCLEVBQW9CLFVBQVUsTUFBVixHQUFtQixDQUFuQixHQUF1QixVQUFVLENBQVYsQ0FBdkIsR0FBc0MsU0FBdEMsQ0FBM0IsQ0FEeUQ7aUJBQXRCLEVBQXZDO0FBR0Esb0JBQVEsd0JBQVIsRUFBa0MsVUFBbEMiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy9lczcuYXJyYXkuaW5jbHVkZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgICRpbmNsdWRlcyA9IHJlcXVpcmUoJy4vJC5hcnJheS1pbmNsdWRlcycpKHRydWUpO1xuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHtpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoZWwpIHtcbiAgICByZXR1cm4gJGluY2x1ZGVzKHRoaXMsIGVsLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH19KTtcbnJlcXVpcmUoJy4vJC5hZGQtdG8tdW5zY29wYWJsZXMnKSgnaW5jbHVkZXMnKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
