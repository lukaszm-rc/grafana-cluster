'use strict';

System.register([], function (_export, _context) {
  var deburredLetters;


  /**
   * Used by `_.deburr` to convert latin-1 supplementary letters to basic latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  function deburrLetter(letter) {
    return deburredLetters[letter];
  }

  return {
    setters: [],
    execute: function () {
      deburredLetters = {
        '\xc0': 'A', '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
        '\xe0': 'a', '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
        '\xc7': 'C', '\xe7': 'c',
        '\xd0': 'D', '\xf0': 'd',
        '\xc8': 'E', '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
        '\xe8': 'e', '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
        '\xcC': 'I', '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
        '\xeC': 'i', '\xed': 'i', '\xee': 'i', '\xef': 'i',
        '\xd1': 'N', '\xf1': 'n',
        '\xd2': 'O', '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
        '\xf2': 'o', '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
        '\xd9': 'U', '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
        '\xf9': 'u', '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
        '\xdd': 'Y', '\xfd': 'y', '\xff': 'y',
        '\xc6': 'Ae', '\xe6': 'ae',
        '\xde': 'Th', '\xfe': 'th',
        '\xdf': 'ss'
      };
      module.exports = deburrLetter;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19kZWJ1cnJMZXR0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQTRCQSxXQUFTLFlBQVQsQ0FBc0IsTUFBdEIsRUFBOEI7QUFDNUIsV0FBTyxnQkFBZ0IsTUFBaEIsQ0FBUCxDQUQ0QjtHQUE5Qjs7Ozs7QUEzQkksd0JBQWtCO0FBQ3BCLGdCQUFRLEdBQVIsRUFBYyxRQUFRLEdBQVIsRUFBYSxRQUFRLEdBQVIsRUFBYSxRQUFRLEdBQVIsRUFBYSxRQUFRLEdBQVIsRUFBYSxRQUFRLEdBQVI7QUFDbEUsZ0JBQVEsR0FBUixFQUFjLFFBQVEsR0FBUixFQUFhLFFBQVEsR0FBUixFQUFhLFFBQVEsR0FBUixFQUFhLFFBQVEsR0FBUixFQUFhLFFBQVEsR0FBUjtBQUNsRSxnQkFBUSxHQUFSLEVBQWMsUUFBUSxHQUFSO0FBQ2QsZ0JBQVEsR0FBUixFQUFjLFFBQVEsR0FBUjtBQUNkLGdCQUFRLEdBQVIsRUFBYyxRQUFRLEdBQVIsRUFBYSxRQUFRLEdBQVIsRUFBYSxRQUFRLEdBQVI7QUFDeEMsZ0JBQVEsR0FBUixFQUFjLFFBQVEsR0FBUixFQUFhLFFBQVEsR0FBUixFQUFhLFFBQVEsR0FBUjtBQUN4QyxnQkFBUSxHQUFSLEVBQWMsUUFBUSxHQUFSLEVBQWEsUUFBUSxHQUFSLEVBQWEsUUFBUSxHQUFSO0FBQ3hDLGdCQUFRLEdBQVIsRUFBYyxRQUFRLEdBQVIsRUFBYSxRQUFRLEdBQVIsRUFBYSxRQUFRLEdBQVI7QUFDeEMsZ0JBQVEsR0FBUixFQUFjLFFBQVEsR0FBUjtBQUNkLGdCQUFRLEdBQVIsRUFBYyxRQUFRLEdBQVIsRUFBYSxRQUFRLEdBQVIsRUFBYSxRQUFRLEdBQVIsRUFBYSxRQUFRLEdBQVIsRUFBYSxRQUFRLEdBQVI7QUFDbEUsZ0JBQVEsR0FBUixFQUFjLFFBQVEsR0FBUixFQUFhLFFBQVEsR0FBUixFQUFhLFFBQVEsR0FBUixFQUFhLFFBQVEsR0FBUixFQUFhLFFBQVEsR0FBUjtBQUNsRSxnQkFBUSxHQUFSLEVBQWMsUUFBUSxHQUFSLEVBQWEsUUFBUSxHQUFSLEVBQWEsUUFBUSxHQUFSO0FBQ3hDLGdCQUFRLEdBQVIsRUFBYyxRQUFRLEdBQVIsRUFBYSxRQUFRLEdBQVIsRUFBYSxRQUFRLEdBQVI7QUFDeEMsZ0JBQVEsR0FBUixFQUFjLFFBQVEsR0FBUixFQUFhLFFBQVEsR0FBUjtBQUMzQixnQkFBUSxJQUFSLEVBQWMsUUFBUSxJQUFSO0FBQ2QsZ0JBQVEsSUFBUixFQUFjLFFBQVEsSUFBUjtBQUNkLGdCQUFRLElBQVI7O0FBY0YsYUFBTyxPQUFQLEdBQWlCLFlBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19kZWJ1cnJMZXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogVXNlZCB0byBtYXAgbGF0aW4tMSBzdXBwbGVtZW50YXJ5IGxldHRlcnMgdG8gYmFzaWMgbGF0aW4gbGV0dGVycy4gKi9cbnZhciBkZWJ1cnJlZExldHRlcnMgPSB7XG4gICdcXHhjMCc6ICdBJywgICdcXHhjMSc6ICdBJywgJ1xceGMyJzogJ0EnLCAnXFx4YzMnOiAnQScsICdcXHhjNCc6ICdBJywgJ1xceGM1JzogJ0EnLFxuICAnXFx4ZTAnOiAnYScsICAnXFx4ZTEnOiAnYScsICdcXHhlMic6ICdhJywgJ1xceGUzJzogJ2EnLCAnXFx4ZTQnOiAnYScsICdcXHhlNSc6ICdhJyxcbiAgJ1xceGM3JzogJ0MnLCAgJ1xceGU3JzogJ2MnLFxuICAnXFx4ZDAnOiAnRCcsICAnXFx4ZjAnOiAnZCcsXG4gICdcXHhjOCc6ICdFJywgICdcXHhjOSc6ICdFJywgJ1xceGNhJzogJ0UnLCAnXFx4Y2InOiAnRScsXG4gICdcXHhlOCc6ICdlJywgICdcXHhlOSc6ICdlJywgJ1xceGVhJzogJ2UnLCAnXFx4ZWInOiAnZScsXG4gICdcXHhjQyc6ICdJJywgICdcXHhjZCc6ICdJJywgJ1xceGNlJzogJ0knLCAnXFx4Y2YnOiAnSScsXG4gICdcXHhlQyc6ICdpJywgICdcXHhlZCc6ICdpJywgJ1xceGVlJzogJ2knLCAnXFx4ZWYnOiAnaScsXG4gICdcXHhkMSc6ICdOJywgICdcXHhmMSc6ICduJyxcbiAgJ1xceGQyJzogJ08nLCAgJ1xceGQzJzogJ08nLCAnXFx4ZDQnOiAnTycsICdcXHhkNSc6ICdPJywgJ1xceGQ2JzogJ08nLCAnXFx4ZDgnOiAnTycsXG4gICdcXHhmMic6ICdvJywgICdcXHhmMyc6ICdvJywgJ1xceGY0JzogJ28nLCAnXFx4ZjUnOiAnbycsICdcXHhmNic6ICdvJywgJ1xceGY4JzogJ28nLFxuICAnXFx4ZDknOiAnVScsICAnXFx4ZGEnOiAnVScsICdcXHhkYic6ICdVJywgJ1xceGRjJzogJ1UnLFxuICAnXFx4ZjknOiAndScsICAnXFx4ZmEnOiAndScsICdcXHhmYic6ICd1JywgJ1xceGZjJzogJ3UnLFxuICAnXFx4ZGQnOiAnWScsICAnXFx4ZmQnOiAneScsICdcXHhmZic6ICd5JyxcbiAgJ1xceGM2JzogJ0FlJywgJ1xceGU2JzogJ2FlJyxcbiAgJ1xceGRlJzogJ1RoJywgJ1xceGZlJzogJ3RoJyxcbiAgJ1xceGRmJzogJ3NzJ1xufTtcblxuLyoqXG4gKiBVc2VkIGJ5IGBfLmRlYnVycmAgdG8gY29udmVydCBsYXRpbi0xIHN1cHBsZW1lbnRhcnkgbGV0dGVycyB0byBiYXNpYyBsYXRpbiBsZXR0ZXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gbGV0dGVyIFRoZSBtYXRjaGVkIGxldHRlciB0byBkZWJ1cnIuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBkZWJ1cnJlZCBsZXR0ZXIuXG4gKi9cbmZ1bmN0aW9uIGRlYnVyckxldHRlcihsZXR0ZXIpIHtcbiAgcmV0dXJuIGRlYnVycmVkTGV0dGVyc1tsZXR0ZXJdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYnVyckxldHRlcjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
