'use strict';

System.register([], function (_export, _context) {
    var $, $export, ownKeys, toIObject, createDesc;
    return {
        setters: [],
        execute: function () {
            $ = require('./$');
            $export = require('./$.export');
            ownKeys = require('./$.own-keys');
            toIObject = require('./$.to-iobject');
            createDesc = require('./$.property-desc');

            $export($export.S, 'Object', { getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
                    var O = toIObject(object),
                        setDesc = $.setDesc,
                        getDesc = $.getDesc,
                        keys = ownKeys(O),
                        result = {},
                        i = 0,
                        key,
                        D;
                    while (keys.length > i) {
                        D = getDesc(O, key = keys[i++]);
                        if (key in result) setDesc(result, key, createDesc(0, D));else result[key] = D;
                    }
                    return result;
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczcub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGdCQUFJLFFBQVEsS0FBUjtBQUNKLHNCQUFVLFFBQVEsWUFBUjtBQUNWLHNCQUFVLFFBQVEsY0FBUjtBQUNWLHdCQUFZLFFBQVEsZ0JBQVI7QUFDWix5QkFBYSxRQUFRLG1CQUFSOztBQUNqQixvQkFBUSxRQUFRLENBQVIsRUFBVyxRQUFuQixFQUE2QixFQUFDLDJCQUEyQixTQUFTLHlCQUFULENBQW1DLE1BQW5DLEVBQTJDO0FBQ2hHLHdCQUFJLElBQUksVUFBVSxNQUFWLENBQUo7d0JBQ0EsVUFBVSxFQUFFLE9BQUY7d0JBQ1YsVUFBVSxFQUFFLE9BQUY7d0JBQ1YsT0FBTyxRQUFRLENBQVIsQ0FBUDt3QkFDQSxTQUFTLEVBQVQ7d0JBQ0EsSUFBSSxDQUFKO3dCQUNBLEdBTko7d0JBT0ksQ0FQSixDQURnRztBQVNoRywyQkFBTyxLQUFLLE1BQUwsR0FBYyxDQUFkLEVBQWlCO0FBQ3RCLDRCQUFJLFFBQVEsQ0FBUixFQUFXLE1BQU0sS0FBSyxHQUFMLENBQU4sQ0FBZixDQURzQjtBQUV0Qiw0QkFBSSxPQUFPLE1BQVAsRUFDRixRQUFRLE1BQVIsRUFBZ0IsR0FBaEIsRUFBcUIsV0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFyQixFQURGLEtBR0UsT0FBTyxHQUFQLElBQWMsQ0FBZCxDQUhGO3FCQUZGO0FBT0EsMkJBQU8sTUFBUCxDQWhCZ0c7aUJBQTNDLEVBQXpEIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczcub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkID0gcmVxdWlyZSgnLi8kJyksXG4gICAgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICBvd25LZXlzID0gcmVxdWlyZSgnLi8kLm93bi1rZXlzJyksXG4gICAgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKSxcbiAgICBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge2dldE93blByb3BlcnR5RGVzY3JpcHRvcnM6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqZWN0KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KSxcbiAgICAgICAgc2V0RGVzYyA9ICQuc2V0RGVzYyxcbiAgICAgICAgZ2V0RGVzYyA9ICQuZ2V0RGVzYyxcbiAgICAgICAga2V5cyA9IG93bktleXMoTyksXG4gICAgICAgIHJlc3VsdCA9IHt9LFxuICAgICAgICBpID0gMCxcbiAgICAgICAga2V5LFxuICAgICAgICBEO1xuICAgIHdoaWxlIChrZXlzLmxlbmd0aCA+IGkpIHtcbiAgICAgIEQgPSBnZXREZXNjKE8sIGtleSA9IGtleXNbaSsrXSk7XG4gICAgICBpZiAoa2V5IGluIHJlc3VsdClcbiAgICAgICAgc2V0RGVzYyhyZXN1bHQsIGtleSwgY3JlYXRlRGVzYygwLCBEKSk7XG4gICAgICBlbHNlXG4gICAgICAgIHJlc3VsdFtrZXldID0gRDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
