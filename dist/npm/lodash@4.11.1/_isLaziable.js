'use strict';

System.register([], function (_export, _context) {
  var LazyWrapper, getData, getFuncName, lodash;

  function isLaziable(func) {
    var funcName = getFuncName(func),
        other = lodash[funcName];
    if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
      return false;
    }
    if (func === other) {
      return true;
    }
    var data = getData(other);
    return !!data && func === data[0];
  }
  return {
    setters: [],
    execute: function () {
      LazyWrapper = require('./_LazyWrapper');
      getData = require('./_getData');
      getFuncName = require('./_getFuncName');
      lodash = require('./wrapperLodash');
      module.exports = isLaziable;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19pc0xhemlhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsV0FBUyxVQUFULENBQW9CLElBQXBCLEVBQTBCO0FBQ3hCLFFBQUksV0FBVyxZQUFZLElBQVosQ0FBWDtRQUNBLFFBQVEsT0FBTyxRQUFQLENBQVIsQ0FGb0I7QUFHeEIsUUFBSSxPQUFPLEtBQVAsSUFBZ0IsVUFBaEIsSUFBOEIsRUFBRSxZQUFZLFlBQVksU0FBWixDQUFkLEVBQXNDO0FBQ3RFLGFBQU8sS0FBUCxDQURzRTtLQUF4RTtBQUdBLFFBQUksU0FBUyxLQUFULEVBQWdCO0FBQ2xCLGFBQU8sSUFBUCxDQURrQjtLQUFwQjtBQUdBLFFBQUksT0FBTyxRQUFRLEtBQVIsQ0FBUCxDQVRvQjtBQVV4QixXQUFPLENBQUMsQ0FBQyxJQUFELElBQVMsU0FBUyxLQUFLLENBQUwsQ0FBVCxDQVZPO0dBQTFCOzs7O0FBSkksb0JBQWMsUUFBUSxnQkFBUjtBQUNkLGdCQUFVLFFBQVEsWUFBUjtBQUNWLG9CQUFjLFFBQVEsZ0JBQVI7QUFDZCxlQUFTLFFBQVEsaUJBQVI7QUFhYixhQUFPLE9BQVAsR0FBaUIsVUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2lzTGF6aWFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBMYXp5V3JhcHBlciA9IHJlcXVpcmUoJy4vX0xhenlXcmFwcGVyJyksXG4gICAgZ2V0RGF0YSA9IHJlcXVpcmUoJy4vX2dldERhdGEnKSxcbiAgICBnZXRGdW5jTmFtZSA9IHJlcXVpcmUoJy4vX2dldEZ1bmNOYW1lJyksXG4gICAgbG9kYXNoID0gcmVxdWlyZSgnLi93cmFwcGVyTG9kYXNoJyk7XG5mdW5jdGlvbiBpc0xhemlhYmxlKGZ1bmMpIHtcbiAgdmFyIGZ1bmNOYW1lID0gZ2V0RnVuY05hbWUoZnVuYyksXG4gICAgICBvdGhlciA9IGxvZGFzaFtmdW5jTmFtZV07XG4gIGlmICh0eXBlb2Ygb3RoZXIgIT0gJ2Z1bmN0aW9uJyB8fCAhKGZ1bmNOYW1lIGluIExhenlXcmFwcGVyLnByb3RvdHlwZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGZ1bmMgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIGRhdGEgPSBnZXREYXRhKG90aGVyKTtcbiAgcmV0dXJuICEhZGF0YSAmJiBmdW5jID09PSBkYXRhWzBdO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpc0xhemlhYmxlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
