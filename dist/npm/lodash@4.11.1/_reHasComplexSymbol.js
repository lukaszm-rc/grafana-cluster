'use strict';

System.register([], function (_export, _context) {
    var rsAstralRange, rsComboMarksRange, rsComboSymbolsRange, rsVarRange, rsZWJ, reHasComplexSymbol;
    return {
        setters: [],
        execute: function () {
            rsAstralRange = '\\ud800-\\udfff';
            rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23';
            rsComboSymbolsRange = '\\u20d0-\\u20f0';
            rsVarRange = '\\ufe0e\\ufe0f';
            rsZWJ = '\\u200d';
            reHasComplexSymbol = RegExp('[' + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');


            module.exports = reHasComplexSymbol;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19yZUhhc0NvbXBsZXhTeW1ib2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLDRCQUFnQjtBQUNoQixnQ0FBb0I7QUFDcEIsa0NBQXNCO0FBQ3RCLHlCQUFhO0FBR2Isb0JBQVE7QUFHUixpQ0FBcUIsT0FBTyxNQUFNLEtBQU4sR0FBYyxhQUFkLEdBQStCLGlCQUEvQixHQUFtRCxtQkFBbkQsR0FBeUUsVUFBekUsR0FBc0YsR0FBdEY7OztBQUVoQyxtQkFBTyxPQUFQLEdBQWlCLGtCQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fcmVIYXNDb21wbGV4U3ltYm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQXN0cmFsUmFuZ2UgPSAnXFxcXHVkODAwLVxcXFx1ZGZmZicsXG4gICAgcnNDb21ib01hcmtzUmFuZ2UgPSAnXFxcXHUwMzAwLVxcXFx1MDM2ZlxcXFx1ZmUyMC1cXFxcdWZlMjMnLFxuICAgIHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmMCcsXG4gICAgcnNWYXJSYW5nZSA9ICdcXFxcdWZlMGVcXFxcdWZlMGYnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHN0cmluZ3Mgd2l0aCBbemVyby13aWR0aCBqb2luZXJzIG9yIGNvZGUgcG9pbnRzIGZyb20gdGhlIGFzdHJhbCBwbGFuZXNdKGh0dHA6Ly9lZXYuZWUvYmxvZy8yMDE1LzA5LzEyL2RhcmstY29ybmVycy1vZi11bmljb2RlLykuICovXG52YXIgcmVIYXNDb21wbGV4U3ltYm9sID0gUmVnRXhwKCdbJyArIHJzWldKICsgcnNBc3RyYWxSYW5nZSAgKyByc0NvbWJvTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UgKyByc1ZhclJhbmdlICsgJ10nKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZUhhc0NvbXBsZXhTeW1ib2w7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
