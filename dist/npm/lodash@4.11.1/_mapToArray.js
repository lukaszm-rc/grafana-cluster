"use strict";

System.register([], function (_export, _context) {
  /**
   * Converts `map` to an array.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the converted array.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function (value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  return {
    setters: [],
    execute: function () {
      module.exports = mapToArray;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19tYXBUb0FycmF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxXQUFTLFVBQVQsQ0FBb0IsR0FBcEIsRUFBeUI7QUFDdkIsUUFBSSxRQUFRLENBQUMsQ0FBRDtRQUNSLFNBQVMsTUFBTSxJQUFJLElBQUosQ0FBZixDQUZtQjs7QUFJdkIsUUFBSSxPQUFKLENBQVksVUFBUyxLQUFULEVBQWdCLEdBQWhCLEVBQXFCO0FBQy9CLGFBQU8sRUFBRSxLQUFGLENBQVAsR0FBa0IsQ0FBQyxHQUFELEVBQU0sS0FBTixDQUFsQixDQUQrQjtLQUFyQixDQUFaLENBSnVCO0FBT3ZCLFdBQU8sTUFBUCxDQVB1QjtHQUF6Qjs7Ozs7QUFVQSxhQUFPLE9BQVAsR0FBaUIsVUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX21hcFRvQXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBUb0FycmF5O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
