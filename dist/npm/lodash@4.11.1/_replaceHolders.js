'use strict';

System.register([], function (_export, _context) {
  var PLACEHOLDER;


  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  return {
    setters: [],
    execute: function () {
      PLACEHOLDER = '__lodash_placeholder__';
      module.exports = replaceHolders;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19yZXBsYWNlSG9sZGVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFZQSxXQUFTLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0IsV0FBL0IsRUFBNEM7QUFDMUMsUUFBSSxRQUFRLENBQUMsQ0FBRDtRQUNSLFNBQVMsTUFBTSxNQUFOO1FBQ1QsV0FBVyxDQUFYO1FBQ0EsU0FBUyxFQUFULENBSnNDOztBQU0xQyxXQUFPLEVBQUUsS0FBRixHQUFVLE1BQVYsRUFBa0I7QUFDdkIsVUFBSSxRQUFRLE1BQU0sS0FBTixDQUFSLENBRG1CO0FBRXZCLFVBQUksVUFBVSxXQUFWLElBQXlCLFVBQVUsV0FBVixFQUF1QjtBQUNsRCxjQUFNLEtBQU4sSUFBZSxXQUFmLENBRGtEO0FBRWxELGVBQU8sVUFBUCxJQUFxQixLQUFyQixDQUZrRDtPQUFwRDtLQUZGO0FBT0EsV0FBTyxNQUFQLENBYjBDO0dBQTVDOzs7OztBQVhJLG9CQUFjO0FBMkJsQixhQUFPLE9BQVAsR0FBaUIsY0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX3JlcGxhY2VIb2xkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIFVzZWQgYXMgdGhlIGludGVybmFsIGFyZ3VtZW50IHBsYWNlaG9sZGVyLiAqL1xudmFyIFBMQUNFSE9MREVSID0gJ19fbG9kYXNoX3BsYWNlaG9sZGVyX18nO1xuXG4vKipcbiAqIFJlcGxhY2VzIGFsbCBgcGxhY2Vob2xkZXJgIGVsZW1lbnRzIGluIGBhcnJheWAgd2l0aCBhbiBpbnRlcm5hbCBwbGFjZWhvbGRlclxuICogYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgdGhlaXIgaW5kZXhlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7Kn0gcGxhY2Vob2xkZXIgVGhlIHBsYWNlaG9sZGVyIHRvIHJlcGxhY2UuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBwbGFjZWhvbGRlciBpbmRleGVzLlxuICovXG5mdW5jdGlvbiByZXBsYWNlSG9sZGVycyhhcnJheSwgcGxhY2Vob2xkZXIpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAodmFsdWUgPT09IHBsYWNlaG9sZGVyIHx8IHZhbHVlID09PSBQTEFDRUhPTERFUikge1xuICAgICAgYXJyYXlbaW5kZXhdID0gUExBQ0VIT0xERVI7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXBsYWNlSG9sZGVycztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
