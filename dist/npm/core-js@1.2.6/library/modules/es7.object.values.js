'use strict';

System.register([], function (_export, _context) {
    var $export, $values;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            $values = require('./$.object-to-array')(false);

            $export($export.S, 'Object', { values: function values(it) {
                    return $values(it);
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxZQUFSO0FBQ1Ysc0JBQVUsUUFBUSxxQkFBUixFQUErQixLQUEvQjs7QUFDZCxvQkFBUSxRQUFRLENBQVIsRUFBVyxRQUFuQixFQUE2QixFQUFDLFFBQVEsU0FBUyxNQUFULENBQWdCLEVBQWhCLEVBQW9CO0FBQ3RELDJCQUFPLFFBQVEsRUFBUixDQUFQLENBRHNEO2lCQUFwQixFQUF0QyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgICR2YWx1ZXMgPSByZXF1aXJlKCcuLyQub2JqZWN0LXRvLWFycmF5JykoZmFsc2UpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7dmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoaXQpIHtcbiAgICByZXR1cm4gJHZhbHVlcyhpdCk7XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
