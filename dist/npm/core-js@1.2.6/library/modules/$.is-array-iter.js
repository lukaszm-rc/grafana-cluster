'use strict';

System.register([], function (_export, _context) {
    var Iterators, ITERATOR, ArrayProto;
    return {
        setters: [],
        execute: function () {
            Iterators = require('./$.iterators');
            ITERATOR = require('./$.wks')('iterator');
            ArrayProto = Array.prototype;

            module.exports = function (it) {
                return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmlzLWFycmF5LWl0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLHdCQUFZLFFBQVEsZUFBUjtBQUNaLHVCQUFXLFFBQVEsU0FBUixFQUFtQixVQUFuQjtBQUNYLHlCQUFhLE1BQU0sU0FBTjs7QUFDakIsbUJBQU8sT0FBUCxHQUFpQixVQUFTLEVBQVQsRUFBYTtBQUM1Qix1QkFBTyxPQUFPLFNBQVAsS0FBcUIsVUFBVSxLQUFWLEtBQW9CLEVBQXBCLElBQTBCLFdBQVcsUUFBWCxNQUF5QixFQUF6QixDQUEvQyxDQURxQjthQUFiIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmlzLWFycmF5LWl0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJyksXG4gICAgSVRFUkFUT1IgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJyksXG4gICAgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
