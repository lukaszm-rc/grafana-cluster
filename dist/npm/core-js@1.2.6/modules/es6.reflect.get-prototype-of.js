'use strict';

System.register([], function (_export, _context) {
    var $export, getProto, anObject;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            getProto = require('./$').getProto;
            anObject = require('./$.an-object');

            $export($export.S, 'Reflect', { getPrototypeOf: function getPrototypeOf(target) {
                    return getProto(anObject(target));
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxZQUFSO0FBQ1YsdUJBQVcsUUFBUSxLQUFSLEVBQWUsUUFBZjtBQUNYLHVCQUFXLFFBQVEsZUFBUjs7QUFDZixvQkFBUSxRQUFRLENBQVIsRUFBVyxTQUFuQixFQUE4QixFQUFDLGdCQUFnQixTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0M7QUFDM0UsMkJBQU8sU0FBUyxTQUFTLE1BQVQsQ0FBVCxDQUFQLENBRDJFO2lCQUFoQyxFQUEvQyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC1wcm90b3R5cGUtb2YuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgIGdldFByb3RvID0gcmVxdWlyZSgnLi8kJykuZ2V0UHJvdG8sXG4gICAgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7Z2V0UHJvdG90eXBlT2Y6IGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKHRhcmdldCkge1xuICAgIHJldHVybiBnZXRQcm90byhhbk9iamVjdCh0YXJnZXQpKTtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
