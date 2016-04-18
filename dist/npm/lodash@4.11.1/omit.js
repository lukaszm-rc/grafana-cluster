'use strict';

System.register([], function (_export, _context) {
  var arrayMap, baseDifference, baseFlatten, basePick, getAllKeysIn, rest, toKey, omit;
  return {
    setters: [],
    execute: function () {
      arrayMap = require('./_arrayMap');
      baseDifference = require('./_baseDifference');
      baseFlatten = require('./_baseFlatten');
      basePick = require('./_basePick');
      getAllKeysIn = require('./_getAllKeysIn');
      rest = require('./rest');
      toKey = require('./_toKey');
      omit = rest(function (object, props) {
        if (object == null) {
          return {};
        }
        props = arrayMap(baseFlatten(props, 1), toKey);
        return basePick(object, baseDifference(getAllKeysIn(object), props));
      });

      module.exports = omit;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL29taXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGlCQUFXLFFBQVEsYUFBUjtBQUNYLHVCQUFpQixRQUFRLG1CQUFSO0FBQ2pCLG9CQUFjLFFBQVEsZ0JBQVI7QUFDZCxpQkFBVyxRQUFRLGFBQVI7QUFDWCxxQkFBZSxRQUFRLGlCQUFSO0FBQ2YsYUFBTyxRQUFRLFFBQVI7QUFDUCxjQUFRLFFBQVEsVUFBUjtBQUNSLGFBQU8sS0FBSyxVQUFTLE1BQVQsRUFBaUIsS0FBakIsRUFBd0I7QUFDdEMsWUFBSSxVQUFVLElBQVYsRUFBZ0I7QUFDbEIsaUJBQU8sRUFBUCxDQURrQjtTQUFwQjtBQUdBLGdCQUFRLFNBQVMsWUFBWSxLQUFaLEVBQW1CLENBQW5CLENBQVQsRUFBZ0MsS0FBaEMsQ0FBUixDQUpzQztBQUt0QyxlQUFPLFNBQVMsTUFBVCxFQUFpQixlQUFlLGFBQWEsTUFBYixDQUFmLEVBQXFDLEtBQXJDLENBQWpCLENBQVAsQ0FMc0M7T0FBeEI7O0FBT2hCLGFBQU8sT0FBUCxHQUFpQixJQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9vbWl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGJhc2VEaWZmZXJlbmNlID0gcmVxdWlyZSgnLi9fYmFzZURpZmZlcmVuY2UnKSxcbiAgICBiYXNlRmxhdHRlbiA9IHJlcXVpcmUoJy4vX2Jhc2VGbGF0dGVuJyksXG4gICAgYmFzZVBpY2sgPSByZXF1aXJlKCcuL19iYXNlUGljaycpLFxuICAgIGdldEFsbEtleXNJbiA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXNJbicpLFxuICAgIHJlc3QgPSByZXF1aXJlKCcuL3Jlc3QnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG52YXIgb21pdCA9IHJlc3QoZnVuY3Rpb24ob2JqZWN0LCBwcm9wcykge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgcHJvcHMgPSBhcnJheU1hcChiYXNlRmxhdHRlbihwcm9wcywgMSksIHRvS2V5KTtcbiAgcmV0dXJuIGJhc2VQaWNrKG9iamVjdCwgYmFzZURpZmZlcmVuY2UoZ2V0QWxsS2V5c0luKG9iamVjdCksIHByb3BzKSk7XG59KTtcbm1vZHVsZS5leHBvcnRzID0gb21pdDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
