'use strict';

System.register([], function (_export, _context) {
    var baseCreate, getPrototype, isPrototype;

    function initCloneObject(object) {
        return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    return {
        setters: [],
        execute: function () {
            baseCreate = require('./_baseCreate');
            getPrototype = require('./_getPrototype');
            isPrototype = require('./_isPrototype');
            module.exports = initCloneObject;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19pbml0Q2xvbmVPYmplY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxhQUFTLGVBQVQsQ0FBeUIsTUFBekIsRUFBaUM7QUFDL0IsZUFBTyxPQUFRLE9BQU8sV0FBUCxJQUFzQixVQUE3QixJQUEyQyxDQUFDLFlBQVksTUFBWixDQUFELEdBQXdCLFdBQVcsYUFBYSxNQUFiLENBQVgsQ0FBcEUsR0FBdUcsRUFBdkcsQ0FEd0I7S0FBakM7Ozs7QUFISSx5QkFBYSxRQUFRLGVBQVI7QUFDYiwyQkFBZSxRQUFRLGlCQUFSO0FBQ2YsMEJBQWMsUUFBUSxnQkFBUjtBQUlsQixtQkFBTyxPQUFQLEdBQWlCLGVBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19pbml0Q2xvbmVPYmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlQ3JlYXRlID0gcmVxdWlyZSgnLi9fYmFzZUNyZWF0ZScpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKTtcbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSkgOiB7fTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lT2JqZWN0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
