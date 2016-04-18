'use strict';

System.register([], function (_export, _context) {
  var apply, isError, rest, attempt;
  return {
    setters: [],
    execute: function () {
      apply = require('./_apply');
      isError = require('./isError');
      rest = require('./rest');
      attempt = rest(function (func, args) {
        try {
          return apply(func, undefined, args);
        } catch (e) {
          return isError(e) ? e : new Error(e);
        }
      });

      module.exports = attempt;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2F0dGVtcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGNBQVEsUUFBUSxVQUFSO0FBQ1IsZ0JBQVUsUUFBUSxXQUFSO0FBQ1YsYUFBTyxRQUFRLFFBQVI7QUFDUCxnQkFBVSxLQUFLLFVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUI7QUFDdEMsWUFBSTtBQUNGLGlCQUFPLE1BQU0sSUFBTixFQUFZLFNBQVosRUFBdUIsSUFBdkIsQ0FBUCxDQURFO1NBQUosQ0FFRSxPQUFPLENBQVAsRUFBVTtBQUNWLGlCQUFPLFFBQVEsQ0FBUixJQUFhLENBQWIsR0FBaUIsSUFBSSxLQUFKLENBQVUsQ0FBVixDQUFqQixDQURHO1NBQVY7T0FIZTs7QUFPbkIsYUFBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2F0dGVtcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4vX2FwcGx5JyksXG4gICAgaXNFcnJvciA9IHJlcXVpcmUoJy4vaXNFcnJvcicpLFxuICAgIHJlc3QgPSByZXF1aXJlKCcuL3Jlc3QnKTtcbnZhciBhdHRlbXB0ID0gcmVzdChmdW5jdGlvbihmdW5jLCBhcmdzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHVuZGVmaW5lZCwgYXJncyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gaXNFcnJvcihlKSA/IGUgOiBuZXcgRXJyb3IoZSk7XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBhdHRlbXB0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
