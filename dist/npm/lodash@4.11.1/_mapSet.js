'use strict';

System.register([], function (_export, _context) {
  var Map, assocSet, hashSet, isKeyable;

  function mapSet(key, value) {
    var data = this.__data__;
    if (isKeyable(key)) {
      hashSet(typeof key == 'string' ? data.string : data.hash, key, value);
    } else if (Map) {
      data.map.set(key, value);
    } else {
      assocSet(data.map, key, value);
    }
    return this;
  }
  return {
    setters: [],
    execute: function () {
      Map = require('./_Map');
      assocSet = require('./_assocSet');
      hashSet = require('./_hashSet');
      isKeyable = require('./_isKeyable');
      module.exports = mapSet;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19tYXBTZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxXQUFTLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUIsS0FBckIsRUFBNEI7QUFDMUIsUUFBSSxPQUFPLEtBQUssUUFBTCxDQURlO0FBRTFCLFFBQUksVUFBVSxHQUFWLENBQUosRUFBb0I7QUFDbEIsY0FBUSxPQUFPLEdBQVAsSUFBYyxRQUFkLEdBQXlCLEtBQUssTUFBTCxHQUFjLEtBQUssSUFBTCxFQUFXLEdBQTFELEVBQStELEtBQS9ELEVBRGtCO0tBQXBCLE1BRU8sSUFBSSxHQUFKLEVBQVM7QUFDZCxXQUFLLEdBQUwsQ0FBUyxHQUFULENBQWEsR0FBYixFQUFrQixLQUFsQixFQURjO0tBQVQsTUFFQTtBQUNMLGVBQVMsS0FBSyxHQUFMLEVBQVUsR0FBbkIsRUFBd0IsS0FBeEIsRUFESztLQUZBO0FBS1AsV0FBTyxJQUFQLENBVDBCO0dBQTVCOzs7O0FBSkksWUFBTSxRQUFRLFFBQVI7QUFDTixpQkFBVyxRQUFRLGFBQVI7QUFDWCxnQkFBVSxRQUFRLFlBQVI7QUFDVixrQkFBWSxRQUFRLGNBQVI7QUFZaEIsYUFBTyxPQUFQLEdBQWlCLE1BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19tYXBTZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBhc3NvY1NldCA9IHJlcXVpcmUoJy4vX2Fzc29jU2V0JyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKSxcbiAgICBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcbmZ1bmN0aW9uIG1hcFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGlzS2V5YWJsZShrZXkpKSB7XG4gICAgaGFzaFNldCh0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gZGF0YS5zdHJpbmcgOiBkYXRhLmhhc2gsIGtleSwgdmFsdWUpO1xuICB9IGVsc2UgaWYgKE1hcCkge1xuICAgIGRhdGEubWFwLnNldChrZXksIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBhc3NvY1NldChkYXRhLm1hcCwga2V5LCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5tb2R1bGUuZXhwb3J0cyA9IG1hcFNldDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
