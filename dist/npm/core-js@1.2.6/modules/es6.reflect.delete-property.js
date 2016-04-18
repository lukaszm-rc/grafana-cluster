'use strict';

System.register([], function (_export, _context) {
    var $export, getDesc, anObject;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            getDesc = require('./$').getDesc;
            anObject = require('./$.an-object');

            $export($export.S, 'Reflect', { deleteProperty: function deleteProperty(target, propertyKey) {
                    var desc = getDesc(anObject(target), propertyKey);
                    return desc && !desc.configurable ? false : delete target[propertyKey];
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnJlZmxlY3QuZGVsZXRlLXByb3BlcnR5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxzQkFBVSxRQUFRLFlBQVI7QUFDVixzQkFBVSxRQUFRLEtBQVIsRUFBZSxPQUFmO0FBQ1YsdUJBQVcsUUFBUSxlQUFSOztBQUNmLG9CQUFRLFFBQVEsQ0FBUixFQUFXLFNBQW5CLEVBQThCLEVBQUMsZ0JBQWdCLFNBQVMsY0FBVCxDQUF3QixNQUF4QixFQUFnQyxXQUFoQyxFQUE2QztBQUN4Rix3QkFBSSxPQUFPLFFBQVEsU0FBUyxNQUFULENBQVIsRUFBMEIsV0FBMUIsQ0FBUCxDQURvRjtBQUV4RiwyQkFBTyxRQUFRLENBQUMsS0FBSyxZQUFMLEdBQW9CLEtBQTdCLEdBQXFDLE9BQU8sT0FBTyxXQUFQLENBQVAsQ0FGNEM7aUJBQTdDLEVBQS9DIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnJlZmxlY3QuZGVsZXRlLXByb3BlcnR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICBnZXREZXNjID0gcmVxdWlyZSgnLi8kJykuZ2V0RGVzYyxcbiAgICBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtkZWxldGVQcm9wZXJ0eTogZnVuY3Rpb24gZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgIHZhciBkZXNjID0gZ2V0RGVzYyhhbk9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XG4gICAgcmV0dXJuIGRlc2MgJiYgIWRlc2MuY29uZmlndXJhYmxlID8gZmFsc2UgOiBkZWxldGUgdGFyZ2V0W3Byb3BlcnR5S2V5XTtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
