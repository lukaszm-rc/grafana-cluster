'use strict';

System.register([], function (_export, _context) {
    var mapClear, mapDelete, mapGet, mapHas, mapSet;

    function MapCache(values) {
        var index = -1,
            length = values ? values.length : 0;
        this.clear();
        while (++index < length) {
            var entry = values[index];
            this.set(entry[0], entry[1]);
        }
    }
    return {
        setters: [],
        execute: function () {
            mapClear = require('./_mapClear');
            mapDelete = require('./_mapDelete');
            mapGet = require('./_mapGet');
            mapHas = require('./_mapHas');
            mapSet = require('./_mapSet');
            MapCache.prototype.clear = mapClear;
            MapCache.prototype['delete'] = mapDelete;
            MapCache.prototype.get = mapGet;
            MapCache.prototype.has = mapHas;
            MapCache.prototype.set = mapSet;
            module.exports = MapCache;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19NYXBDYWNoZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQU1BLGFBQVMsUUFBVCxDQUFrQixNQUFsQixFQUEwQjtBQUN4QixZQUFJLFFBQVEsQ0FBQyxDQUFEO1lBQ1IsU0FBUyxTQUFTLE9BQU8sTUFBUCxHQUFnQixDQUF6QixDQUZXO0FBR3hCLGFBQUssS0FBTCxHQUh3QjtBQUl4QixlQUFPLEVBQUUsS0FBRixHQUFVLE1BQVYsRUFBa0I7QUFDdkIsZ0JBQUksUUFBUSxPQUFPLEtBQVAsQ0FBUixDQURtQjtBQUV2QixpQkFBSyxHQUFMLENBQVMsTUFBTSxDQUFOLENBQVQsRUFBbUIsTUFBTSxDQUFOLENBQW5CLEVBRnVCO1NBQXpCO0tBSkY7Ozs7QUFMSSx1QkFBVyxRQUFRLGFBQVI7QUFDWCx3QkFBWSxRQUFRLGNBQVI7QUFDWixxQkFBUyxRQUFRLFdBQVI7QUFDVCxxQkFBUyxRQUFRLFdBQVI7QUFDVCxxQkFBUyxRQUFRLFdBQVI7QUFVYixxQkFBUyxTQUFULENBQW1CLEtBQW5CLEdBQTJCLFFBQTNCO0FBQ0EscUJBQVMsU0FBVCxDQUFtQixRQUFuQixJQUErQixTQUEvQjtBQUNBLHFCQUFTLFNBQVQsQ0FBbUIsR0FBbkIsR0FBeUIsTUFBekI7QUFDQSxxQkFBUyxTQUFULENBQW1CLEdBQW5CLEdBQXlCLE1BQXpCO0FBQ0EscUJBQVMsU0FBVCxDQUFtQixHQUFuQixHQUF5QixNQUF6QjtBQUNBLG1CQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX01hcENhY2hlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgbWFwQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDbGVhcicpLFxuICAgIG1hcERlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcERlbGV0ZScpLFxuICAgIG1hcEdldCA9IHJlcXVpcmUoJy4vX21hcEdldCcpLFxuICAgIG1hcEhhcyA9IHJlcXVpcmUoJy4vX21hcEhhcycpLFxuICAgIG1hcFNldCA9IHJlcXVpcmUoJy4vX21hcFNldCcpO1xuZnVuY3Rpb24gTWFwQ2FjaGUodmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzID8gdmFsdWVzLmxlbmd0aCA6IDA7XG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSB2YWx1ZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcERlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcFNldDtcbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
