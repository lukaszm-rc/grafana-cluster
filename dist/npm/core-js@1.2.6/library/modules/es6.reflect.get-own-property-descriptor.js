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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGdCQUFJLFFBQVEsS0FBUjtBQUNKLHNCQUFVLFFBQVEsWUFBUjtBQUNWLHVCQUFXLFFBQVEsZUFBUjs7QUFDZixvQkFBUSxRQUFRLENBQVIsRUFBVyxTQUFuQixFQUE4QixFQUFDLDBCQUEwQixTQUFTLHdCQUFULENBQWtDLE1BQWxDLEVBQTBDLFdBQTFDLEVBQXVEO0FBQzVHLDJCQUFPLEVBQUUsT0FBRixDQUFVLFNBQVMsTUFBVCxDQUFWLEVBQTRCLFdBQTVCLENBQVAsQ0FENEc7aUJBQXZELEVBQXpEIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkID0gcmVxdWlyZSgnLi8kJyksXG4gICAgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgcmV0dXJuICQuZ2V0RGVzYyhhbk9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
