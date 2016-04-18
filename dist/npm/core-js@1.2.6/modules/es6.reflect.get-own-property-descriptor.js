'use strict';

System.register([], function (_export, _context) {
    var $, $export, anObject;
    return {
        setters: [],
        execute: function () {
            $ = require('./$');
            $export = require('./$.export');
            anObject = require('./$.an-object');

            $export($export.S, 'Reflect', { getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
                    return $.getDesc(anObject(target), propertyKey);
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxnQkFBSSxRQUFRLEtBQVI7QUFDSixzQkFBVSxRQUFRLFlBQVI7QUFDVix1QkFBVyxRQUFRLGVBQVI7O0FBQ2Ysb0JBQVEsUUFBUSxDQUFSLEVBQVcsU0FBbkIsRUFBOEIsRUFBQywwQkFBMEIsU0FBUyx3QkFBVCxDQUFrQyxNQUFsQyxFQUEwQyxXQUExQyxFQUF1RDtBQUM1RywyQkFBTyxFQUFFLE9BQUYsQ0FBVSxTQUFTLE1BQVQsQ0FBVixFQUE0QixXQUE1QixDQUFQLENBRDRHO2lCQUF2RCxFQUF6RCIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICQgPSByZXF1aXJlKCcuLyQnKSxcbiAgICAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge2dldE93blByb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICByZXR1cm4gJC5nZXREZXNjKGFuT2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KTtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
