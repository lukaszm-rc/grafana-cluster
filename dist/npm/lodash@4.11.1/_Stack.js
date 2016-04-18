'use strict';

System.register([], function (_export, _context) {
    var stackClear, stackDelete, stackGet, stackHas, stackSet;

    function Stack(values) {
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
            stackClear = require('./_stackClear');
            stackDelete = require('./_stackDelete');
            stackGet = require('./_stackGet');
            stackHas = require('./_stackHas');
            stackSet = require('./_stackSet');
            Stack.prototype.clear = stackClear;
            Stack.prototype['delete'] = stackDelete;
            Stack.prototype.get = stackGet;
            Stack.prototype.has = stackHas;
            Stack.prototype.set = stackSet;
            module.exports = Stack;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19TdGFjay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQU1BLGFBQVMsS0FBVCxDQUFlLE1BQWYsRUFBdUI7QUFDckIsWUFBSSxRQUFRLENBQUMsQ0FBRDtZQUNSLFNBQVMsU0FBUyxPQUFPLE1BQVAsR0FBZ0IsQ0FBekIsQ0FGUTtBQUdyQixhQUFLLEtBQUwsR0FIcUI7QUFJckIsZUFBTyxFQUFFLEtBQUYsR0FBVSxNQUFWLEVBQWtCO0FBQ3ZCLGdCQUFJLFFBQVEsT0FBTyxLQUFQLENBQVIsQ0FEbUI7QUFFdkIsaUJBQUssR0FBTCxDQUFTLE1BQU0sQ0FBTixDQUFULEVBQW1CLE1BQU0sQ0FBTixDQUFuQixFQUZ1QjtTQUF6QjtLQUpGOzs7O0FBTEkseUJBQWEsUUFBUSxlQUFSO0FBQ2IsMEJBQWMsUUFBUSxnQkFBUjtBQUNkLHVCQUFXLFFBQVEsYUFBUjtBQUNYLHVCQUFXLFFBQVEsYUFBUjtBQUNYLHVCQUFXLFFBQVEsYUFBUjtBQVVmLGtCQUFNLFNBQU4sQ0FBZ0IsS0FBaEIsR0FBd0IsVUFBeEI7QUFDQSxrQkFBTSxTQUFOLENBQWdCLFFBQWhCLElBQTRCLFdBQTVCO0FBQ0Esa0JBQU0sU0FBTixDQUFnQixHQUFoQixHQUFzQixRQUF0QjtBQUNBLGtCQUFNLFNBQU4sQ0FBZ0IsR0FBaEIsR0FBc0IsUUFBdEI7QUFDQSxrQkFBTSxTQUFOLENBQWdCLEdBQWhCLEdBQXNCLFFBQXRCO0FBQ0EsbUJBQU8sT0FBUCxHQUFpQixLQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fU3RhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBzdGFja0NsZWFyID0gcmVxdWlyZSgnLi9fc3RhY2tDbGVhcicpLFxuICAgIHN0YWNrRGVsZXRlID0gcmVxdWlyZSgnLi9fc3RhY2tEZWxldGUnKSxcbiAgICBzdGFja0dldCA9IHJlcXVpcmUoJy4vX3N0YWNrR2V0JyksXG4gICAgc3RhY2tIYXMgPSByZXF1aXJlKCcuL19zdGFja0hhcycpLFxuICAgIHN0YWNrU2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tTZXQnKTtcbmZ1bmN0aW9uIFN0YWNrKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA/IHZhbHVlcy5sZW5ndGggOiAwO1xuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gdmFsdWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
