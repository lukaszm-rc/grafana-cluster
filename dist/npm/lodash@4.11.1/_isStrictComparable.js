'use strict';

System.register([], function (_export, _context) {
  var isObject;

  function isStrictComparable(value) {
    return value === value && !isObject(value);
  }
  return {
    setters: [],
    execute: function () {
      isObject = require('./isObject');
      module.exports = isStrictComparable;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19pc1N0cmljdENvbXBhcmFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxXQUFTLGtCQUFULENBQTRCLEtBQTVCLEVBQW1DO0FBQ2pDLFdBQU8sVUFBVSxLQUFWLElBQW1CLENBQUMsU0FBUyxLQUFULENBQUQsQ0FETztHQUFuQzs7OztBQURJLGlCQUFXLFFBQVEsWUFBUjtBQUlmLGFBQU8sT0FBUCxHQUFpQixrQkFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2lzU3RyaWN0Q29tcGFyYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuZnVuY3Rpb24gaXNTdHJpY3RDb21wYXJhYmxlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgJiYgIWlzT2JqZWN0KHZhbHVlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpY3RDb21wYXJhYmxlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
