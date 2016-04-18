'use strict';

System.register([], function (_export, _context) {
  var LazyWrapper, LodashWrapper, copyArray;

  function wrapperClone(wrapper) {
    if (wrapper instanceof LazyWrapper) {
      return wrapper.clone();
    }
    var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
    result.__actions__ = copyArray(wrapper.__actions__);
    result.__index__ = wrapper.__index__;
    result.__values__ = wrapper.__values__;
    return result;
  }
  return {
    setters: [],
    execute: function () {
      LazyWrapper = require('./_LazyWrapper');
      LodashWrapper = require('./_LodashWrapper');
      copyArray = require('./_copyArray');
      module.exports = wrapperClone;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL193cmFwcGVyQ2xvbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxXQUFTLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDN0IsUUFBSSxtQkFBbUIsV0FBbkIsRUFBZ0M7QUFDbEMsYUFBTyxRQUFRLEtBQVIsRUFBUCxDQURrQztLQUFwQztBQUdBLFFBQUksU0FBUyxJQUFJLGFBQUosQ0FBa0IsUUFBUSxXQUFSLEVBQXFCLFFBQVEsU0FBUixDQUFoRCxDQUp5QjtBQUs3QixXQUFPLFdBQVAsR0FBcUIsVUFBVSxRQUFRLFdBQVIsQ0FBL0IsQ0FMNkI7QUFNN0IsV0FBTyxTQUFQLEdBQW1CLFFBQVEsU0FBUixDQU5VO0FBTzdCLFdBQU8sVUFBUCxHQUFvQixRQUFRLFVBQVIsQ0FQUztBQVE3QixXQUFPLE1BQVAsQ0FSNkI7R0FBL0I7Ozs7QUFISSxvQkFBYyxRQUFRLGdCQUFSO0FBQ2Qsc0JBQWdCLFFBQVEsa0JBQVI7QUFDaEIsa0JBQVksUUFBUSxjQUFSO0FBV2hCLGFBQU8sT0FBUCxHQUFpQixZQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fd3JhcHBlckNsb25lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgTGF6eVdyYXBwZXIgPSByZXF1aXJlKCcuL19MYXp5V3JhcHBlcicpLFxuICAgIExvZGFzaFdyYXBwZXIgPSByZXF1aXJlKCcuL19Mb2Rhc2hXcmFwcGVyJyksXG4gICAgY29weUFycmF5ID0gcmVxdWlyZSgnLi9fY29weUFycmF5Jyk7XG5mdW5jdGlvbiB3cmFwcGVyQ2xvbmUod3JhcHBlcikge1xuICBpZiAod3JhcHBlciBpbnN0YW5jZW9mIExhenlXcmFwcGVyKSB7XG4gICAgcmV0dXJuIHdyYXBwZXIuY2xvbmUoKTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gbmV3IExvZGFzaFdyYXBwZXIod3JhcHBlci5fX3dyYXBwZWRfXywgd3JhcHBlci5fX2NoYWluX18pO1xuICByZXN1bHQuX19hY3Rpb25zX18gPSBjb3B5QXJyYXkod3JhcHBlci5fX2FjdGlvbnNfXyk7XG4gIHJlc3VsdC5fX2luZGV4X18gPSB3cmFwcGVyLl9faW5kZXhfXztcbiAgcmVzdWx0Ll9fdmFsdWVzX18gPSB3cmFwcGVyLl9fdmFsdWVzX187XG4gIHJldHVybiByZXN1bHQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHdyYXBwZXJDbG9uZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
