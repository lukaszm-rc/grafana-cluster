'use strict';

System.register([], function (_export, _context) {
    var path, $export;
    return {
        setters: [],
        execute: function () {
            path = require('./$.path');
            $export = require('./$.export');

            require('./$.core')._ = path._ = path._ || {};
            $export($export.P + $export.F, 'Function', { part: require('./$.partial') });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvY29yZS5mdW5jdGlvbi5wYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxtQkFBTyxRQUFRLFVBQVI7QUFDUCxzQkFBVSxRQUFRLFlBQVI7O0FBQ2Qsb0JBQVEsVUFBUixFQUFvQixDQUFwQixHQUF3QixLQUFLLENBQUwsR0FBUyxLQUFLLENBQUwsSUFBVSxFQUFWO0FBQ2pDLG9CQUFRLFFBQVEsQ0FBUixHQUFZLFFBQVEsQ0FBUixFQUFXLFVBQS9CLEVBQTJDLEVBQUMsTUFBTSxRQUFRLGFBQVIsQ0FBTixFQUE1QyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2NvcmUuZnVuY3Rpb24ucGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIHBhdGggPSByZXF1aXJlKCcuLyQucGF0aCcpLFxuICAgICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5yZXF1aXJlKCcuLyQuY29yZScpLl8gPSBwYXRoLl8gPSBwYXRoLl8gfHwge307XG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiwgJ0Z1bmN0aW9uJywge3BhcnQ6IHJlcXVpcmUoJy4vJC5wYXJ0aWFsJyl9KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
