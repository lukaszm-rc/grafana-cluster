'use strict';

System.register([], function (_export, _context) {
    var apply, mergeDefaults, mergeWith, rest, defaultsDeep;
    return {
        setters: [],
        execute: function () {
            apply = require('./_apply');
            mergeDefaults = require('./_mergeDefaults');
            mergeWith = require('./mergeWith');
            rest = require('./rest');
            defaultsDeep = rest(function (args) {
                args.push(undefined, mergeDefaults);
                return apply(mergeWith, undefined, args);
            });

            module.exports = defaultsDeep;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2RlZmF1bHRzRGVlcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksb0JBQVEsUUFBUSxVQUFSO0FBQ1IsNEJBQWdCLFFBQVEsa0JBQVI7QUFDaEIsd0JBQVksUUFBUSxhQUFSO0FBQ1osbUJBQU8sUUFBUSxRQUFSO0FBQ1AsMkJBQWUsS0FBSyxVQUFTLElBQVQsRUFBZTtBQUNyQyxxQkFBSyxJQUFMLENBQVUsU0FBVixFQUFxQixhQUFyQixFQURxQztBQUVyQyx1QkFBTyxNQUFNLFNBQU4sRUFBaUIsU0FBakIsRUFBNEIsSUFBNUIsQ0FBUCxDQUZxQzthQUFmOztBQUl4QixtQkFBTyxPQUFQLEdBQWlCLFlBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2RlZmF1bHRzRGVlcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi9fYXBwbHknKSxcbiAgICBtZXJnZURlZmF1bHRzID0gcmVxdWlyZSgnLi9fbWVyZ2VEZWZhdWx0cycpLFxuICAgIG1lcmdlV2l0aCA9IHJlcXVpcmUoJy4vbWVyZ2VXaXRoJyksXG4gICAgcmVzdCA9IHJlcXVpcmUoJy4vcmVzdCcpO1xudmFyIGRlZmF1bHRzRGVlcCA9IHJlc3QoZnVuY3Rpb24oYXJncykge1xuICBhcmdzLnB1c2godW5kZWZpbmVkLCBtZXJnZURlZmF1bHRzKTtcbiAgcmV0dXJuIGFwcGx5KG1lcmdlV2l0aCwgdW5kZWZpbmVkLCBhcmdzKTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0c0RlZXA7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
