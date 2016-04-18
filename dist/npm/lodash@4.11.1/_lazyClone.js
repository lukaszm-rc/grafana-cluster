'use strict';

System.register([], function (_export, _context) {
  var LazyWrapper, copyArray;

  function lazyClone() {
    var result = new LazyWrapper(this.__wrapped__);
    result.__actions__ = copyArray(this.__actions__);
    result.__dir__ = this.__dir__;
    result.__filtered__ = this.__filtered__;
    result.__iteratees__ = copyArray(this.__iteratees__);
    result.__takeCount__ = this.__takeCount__;
    result.__views__ = copyArray(this.__views__);
    return result;
  }
  return {
    setters: [],
    execute: function () {
      LazyWrapper = require('./_LazyWrapper');
      copyArray = require('./_copyArray');
      module.exports = lazyClone;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19sYXp5Q2xvbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLFNBQVQsR0FBcUI7QUFDbkIsUUFBSSxTQUFTLElBQUksV0FBSixDQUFnQixLQUFLLFdBQUwsQ0FBekIsQ0FEZTtBQUVuQixXQUFPLFdBQVAsR0FBcUIsVUFBVSxLQUFLLFdBQUwsQ0FBL0IsQ0FGbUI7QUFHbkIsV0FBTyxPQUFQLEdBQWlCLEtBQUssT0FBTCxDQUhFO0FBSW5CLFdBQU8sWUFBUCxHQUFzQixLQUFLLFlBQUwsQ0FKSDtBQUtuQixXQUFPLGFBQVAsR0FBdUIsVUFBVSxLQUFLLGFBQUwsQ0FBakMsQ0FMbUI7QUFNbkIsV0FBTyxhQUFQLEdBQXVCLEtBQUssYUFBTCxDQU5KO0FBT25CLFdBQU8sU0FBUCxHQUFtQixVQUFVLEtBQUssU0FBTCxDQUE3QixDQVBtQjtBQVFuQixXQUFPLE1BQVAsQ0FSbUI7R0FBckI7Ozs7QUFGSSxvQkFBYyxRQUFRLGdCQUFSO0FBQ2Qsa0JBQVksUUFBUSxjQUFSO0FBV2hCLGFBQU8sT0FBUCxHQUFpQixTQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fbGF6eUNsb25lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgTGF6eVdyYXBwZXIgPSByZXF1aXJlKCcuL19MYXp5V3JhcHBlcicpLFxuICAgIGNvcHlBcnJheSA9IHJlcXVpcmUoJy4vX2NvcHlBcnJheScpO1xuZnVuY3Rpb24gbGF6eUNsb25lKCkge1xuICB2YXIgcmVzdWx0ID0gbmV3IExhenlXcmFwcGVyKHRoaXMuX193cmFwcGVkX18pO1xuICByZXN1bHQuX19hY3Rpb25zX18gPSBjb3B5QXJyYXkodGhpcy5fX2FjdGlvbnNfXyk7XG4gIHJlc3VsdC5fX2Rpcl9fID0gdGhpcy5fX2Rpcl9fO1xuICByZXN1bHQuX19maWx0ZXJlZF9fID0gdGhpcy5fX2ZpbHRlcmVkX187XG4gIHJlc3VsdC5fX2l0ZXJhdGVlc19fID0gY29weUFycmF5KHRoaXMuX19pdGVyYXRlZXNfXyk7XG4gIHJlc3VsdC5fX3Rha2VDb3VudF9fID0gdGhpcy5fX3Rha2VDb3VudF9fO1xuICByZXN1bHQuX192aWV3c19fID0gY29weUFycmF5KHRoaXMuX192aWV3c19fKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbm1vZHVsZS5leHBvcnRzID0gbGF6eUNsb25lO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
