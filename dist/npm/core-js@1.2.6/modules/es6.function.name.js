'use strict';

System.register([], function (_export, _context) {
    var setDesc, createDesc, has, FProto, nameRE, NAME;
    return {
        setters: [],
        execute: function () {
            setDesc = require('./$').setDesc;
            createDesc = require('./$.property-desc');
            has = require('./$.has');
            FProto = Function.prototype;
            nameRE = /^\s*function ([^ (]*)/;
            NAME = 'name';

            NAME in FProto || require('./$.descriptors') && setDesc(FProto, NAME, {
                configurable: true,
                get: function get() {
                    var match = ('' + this).match(nameRE),
                        name = match ? match[1] : '';
                    has(this, NAME) || setDesc(this, NAME, createDesc(5, name));
                    return name;
                }
            });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLHNCQUFVLFFBQVEsS0FBUixFQUFlLE9BQWY7QUFDVix5QkFBYSxRQUFRLG1CQUFSO0FBQ2Isa0JBQU0sUUFBUSxTQUFSO0FBQ04scUJBQVMsU0FBUyxTQUFUO0FBQ1QscUJBQVM7QUFDVCxtQkFBTzs7QUFDWCxvQkFBUSxNQUFSLElBQWtCLFFBQVEsaUJBQVIsS0FBOEIsUUFBUSxNQUFSLEVBQWdCLElBQWhCLEVBQXNCO0FBQ3BFLDhCQUFjLElBQWQ7QUFDQSxxQkFBSyxlQUFXO0FBQ2Qsd0JBQUksUUFBUSxDQUFDLEtBQUssSUFBTCxDQUFELENBQVksS0FBWixDQUFrQixNQUFsQixDQUFSO3dCQUNBLE9BQU8sUUFBUSxNQUFNLENBQU4sQ0FBUixHQUFtQixFQUFuQixDQUZHO0FBR2Qsd0JBQUksSUFBSixFQUFVLElBQVYsS0FBbUIsUUFBUSxJQUFSLEVBQWMsSUFBZCxFQUFvQixXQUFXLENBQVgsRUFBYyxJQUFkLENBQXBCLENBQW5CLENBSGM7QUFJZCwyQkFBTyxJQUFQLENBSmM7aUJBQVg7YUFGeUMsQ0FBOUIiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIHNldERlc2MgPSByZXF1aXJlKCcuLyQnKS5zZXREZXNjLFxuICAgIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpLFxuICAgIGhhcyA9IHJlcXVpcmUoJy4vJC5oYXMnKSxcbiAgICBGUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvLFxuICAgIE5BTUUgPSAnbmFtZSc7XG5OQU1FIGluIEZQcm90byB8fCByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKSAmJiBzZXREZXNjKEZQcm90bywgTkFNRSwge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIG1hdGNoID0gKCcnICsgdGhpcykubWF0Y2gobmFtZVJFKSxcbiAgICAgICAgbmFtZSA9IG1hdGNoID8gbWF0Y2hbMV0gOiAnJztcbiAgICBoYXModGhpcywgTkFNRSkgfHwgc2V0RGVzYyh0aGlzLCBOQU1FLCBjcmVhdGVEZXNjKDUsIG5hbWUpKTtcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
