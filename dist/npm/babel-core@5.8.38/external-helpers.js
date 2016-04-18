"use strict";
/* */
"format global";

System.register([], function (_export, _context) {
  var _typeof;

  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      (function (global) {
        var babelHelpers = global.babelHelpers = {};

        babelHelpers.inherits = function (subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
          }

          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        };

        babelHelpers.defaults = function (obj, defaults) {
          var keys = Object.getOwnPropertyNames(defaults);

          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = Object.getOwnPropertyDescriptor(defaults, key);

            if (value && value.configurable && obj[key] === undefined) {
              Object.defineProperty(obj, key, value);
            }
          }

          return obj;
        };

        babelHelpers.createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();

        babelHelpers.createDecoratedClass = function () {
          function defineProperties(target, descriptors, initializers) {
            for (var i = 0; i < descriptors.length; i++) {
              var descriptor = descriptors[i];
              var decorators = descriptor.decorators;
              var key = descriptor.key;
              delete descriptor.key;
              delete descriptor.decorators;
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor || descriptor.initializer) descriptor.writable = true;

              if (decorators) {
                for (var f = 0; f < decorators.length; f++) {
                  var decorator = decorators[f];

                  if (typeof decorator === "function") {
                    descriptor = decorator(target, key, descriptor) || descriptor;
                  } else {
                    throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + (typeof decorator === "undefined" ? "undefined" : _typeof(decorator)));
                  }
                }

                if (descriptor.initializer !== undefined) {
                  initializers[key] = descriptor;
                  continue;
                }
              }

              Object.defineProperty(target, key, descriptor);
            }
          }

          return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers);
            if (staticProps) defineProperties(Constructor, staticProps, staticInitializers);
            return Constructor;
          };
        }();

        babelHelpers.createDecoratedObject = function (descriptors) {
          var target = {};

          for (var i = 0; i < descriptors.length; i++) {
            var descriptor = descriptors[i];
            var decorators = descriptor.decorators;
            var key = descriptor.key;
            delete descriptor.key;
            delete descriptor.decorators;
            descriptor.enumerable = true;
            descriptor.configurable = true;
            if ("value" in descriptor || descriptor.initializer) descriptor.writable = true;

            if (decorators) {
              for (var f = 0; f < decorators.length; f++) {
                var decorator = decorators[f];

                if (typeof decorator === "function") {
                  descriptor = decorator(target, key, descriptor) || descriptor;
                } else {
                  throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + (typeof decorator === "undefined" ? "undefined" : _typeof(decorator)));
                }
              }
            }

            if (descriptor.initializer) {
              descriptor.value = descriptor.initializer.call(target);
            }

            Object.defineProperty(target, key, descriptor);
          }

          return target;
        };

        babelHelpers.defineDecoratedPropertyDescriptor = function (target, key, descriptors) {
          var _descriptor = descriptors[key];
          if (!_descriptor) return;
          var descriptor = {};

          for (var _key in _descriptor) {
            descriptor[_key] = _descriptor[_key];
          }descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined;
          Object.defineProperty(target, key, descriptor);
        };

        babelHelpers.taggedTemplateLiteral = function (strings, raw) {
          return Object.freeze(Object.defineProperties(strings, {
            raw: {
              value: Object.freeze(raw)
            }
          }));
        };

        babelHelpers.taggedTemplateLiteralLoose = function (strings, raw) {
          strings.raw = raw;
          return strings;
        };

        babelHelpers.toArray = function (arr) {
          return Array.isArray(arr) ? arr : Array.from(arr);
        };

        babelHelpers.toConsumableArray = function (arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }return arr2;
          } else {
            return Array.from(arr);
          }
        };

        babelHelpers.slicedToArray = function () {
          function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);

                if (i && _arr.length === i) break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i["return"]) _i["return"]();
              } finally {
                if (_d) throw _e;
              }
            }

            return _arr;
          }

          return function (arr, i) {
            if (Array.isArray(arr)) {
              return arr;
            } else if (Symbol.iterator in Object(arr)) {
              return sliceIterator(arr, i);
            } else {
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
          };
        }();

        babelHelpers.slicedToArrayLoose = function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            var _arr = [];

            for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
              _arr.push(_step.value);

              if (i && _arr.length === i) break;
            }

            return _arr;
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };

        babelHelpers.objectWithoutProperties = function (obj, keys) {
          var target = {};

          for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
          }

          return target;
        };

        babelHelpers.hasOwn = Object.prototype.hasOwnProperty;
        babelHelpers.slice = Array.prototype.slice;
        babelHelpers.bind = Function.prototype.bind;

        babelHelpers.defineProperty = function (obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }

          return obj;
        };

        babelHelpers.asyncToGenerator = function (fn) {
          return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
              var callNext = step.bind(null, "next");
              var callThrow = step.bind(null, "throw");

              function step(key, arg) {
                try {
                  var info = gen[key](arg);
                  var value = info.value;
                } catch (error) {
                  reject(error);
                  return;
                }

                if (info.done) {
                  resolve(value);
                } else {
                  Promise.resolve(value).then(callNext, callThrow);
                }
              }

              callNext();
            });
          };
        };

        babelHelpers.interopExportWildcard = function (obj, defaults) {
          var newObj = defaults({}, obj);
          delete newObj["default"];
          return newObj;
        };

        babelHelpers.interopRequireWildcard = function (obj) {
          if (obj && obj.__esModule) {
            return obj;
          } else {
            var newObj = {};

            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
              }
            }

            newObj["default"] = obj;
            return newObj;
          }
        };

        babelHelpers.interopRequireDefault = function (obj) {
          return obj && obj.__esModule ? obj : {
            "default": obj
          };
        };

        babelHelpers._typeof = function (obj) {
          return obj && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
        };

        babelHelpers._extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
        };

        babelHelpers.get = function get(object, property, receiver) {
          if (object === null) object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);

          if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
              return undefined;
            } else {
              return get(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;

            if (getter === undefined) {
              return undefined;
            }

            return getter.call(receiver);
          }
        };

        babelHelpers.set = function set(object, property, value, receiver) {
          var desc = Object.getOwnPropertyDescriptor(object, property);

          if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent !== null) {
              set(parent, property, value, receiver);
            }
          } else if ("value" in desc && desc.writable) {
            desc.value = value;
          } else {
            var setter = desc.set;

            if (setter !== undefined) {
              setter.call(receiver, value);
            }
          }

          return value;
        };

        babelHelpers.newArrowCheck = function (innerThis, boundThis) {
          if (innerThis !== boundThis) {
            throw new TypeError("Cannot instantiate an arrow function");
          }
        };

        babelHelpers.classCallCheck = function (instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        };

        babelHelpers.objectDestructuringEmpty = function (obj) {
          if (obj == null) throw new TypeError("Cannot destructure undefined");
        };

        babelHelpers.temporalUndefined = {};

        babelHelpers.temporalAssertDefined = function (val, name, undef) {
          if (val === undef) {
            throw new ReferenceError(name + " is not defined - temporal dead zone");
          }

          return true;
        };

        babelHelpers.selfGlobal = typeof global === "undefined" ? self : global;
        babelHelpers.typeofReactElement = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 60103;

        babelHelpers.defaultProps = function (defaultProps, props) {
          if (defaultProps) {
            for (var propName in defaultProps) {
              if (typeof props[propName] === "undefined") {
                props[propName] = defaultProps[propName];
              }
            }
          }

          return props;
        };

        babelHelpers._instanceof = function (left, right) {
          if (right != null && right[Symbol.hasInstance]) {
            return right[Symbol.hasInstance](left);
          } else {
            return left instanceof right;
          }
        };

        babelHelpers.interopRequire = function (obj) {
          return obj && obj.__esModule ? obj["default"] : obj;
        };
      })(typeof global === "undefined" ? self : global);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9leHRlcm5hbC1oZWxwZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFDLFVBQVUsTUFBVixFQUFrQjtBQUNqQixZQUFJLGVBQWUsT0FBTyxZQUFQLEdBQXNCLEVBQXRCLENBREY7O0FBR2pCLHFCQUFhLFFBQWIsR0FBd0IsVUFBVSxRQUFWLEVBQW9CLFVBQXBCLEVBQWdDO0FBQ3RELGNBQUksT0FBTyxVQUFQLEtBQXNCLFVBQXRCLElBQW9DLGVBQWUsSUFBZixFQUFxQjtBQUMzRCxrQkFBTSxJQUFJLFNBQUosQ0FBYyxxRUFBb0UsK0RBQXBFLENBQXBCLENBRDJEO1dBQTdEOztBQUlBLG1CQUFTLFNBQVQsR0FBcUIsT0FBTyxNQUFQLENBQWMsY0FBYyxXQUFXLFNBQVgsRUFBc0I7QUFDckUseUJBQWE7QUFDWCxxQkFBTyxRQUFQO0FBQ0EsMEJBQVksS0FBWjtBQUNBLHdCQUFVLElBQVY7QUFDQSw0QkFBYyxJQUFkO2FBSkY7V0FEbUIsQ0FBckIsQ0FMc0Q7QUFhdEQsY0FBSSxVQUFKLEVBQWdCLE9BQU8sY0FBUCxHQUF3QixPQUFPLGNBQVAsQ0FBc0IsUUFBdEIsRUFBZ0MsVUFBaEMsQ0FBeEIsR0FBc0UsU0FBUyxTQUFULEdBQXFCLFVBQXJCLENBQXRGO1NBYnNCLENBSFA7O0FBbUJqQixxQkFBYSxRQUFiLEdBQXdCLFVBQVUsR0FBVixFQUFlLFFBQWYsRUFBeUI7QUFDL0MsY0FBSSxPQUFPLE9BQU8sbUJBQVAsQ0FBMkIsUUFBM0IsQ0FBUCxDQUQyQzs7QUFHL0MsZUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksS0FBSyxNQUFMLEVBQWEsR0FBakMsRUFBc0M7QUFDcEMsZ0JBQUksTUFBTSxLQUFLLENBQUwsQ0FBTixDQURnQztBQUVwQyxnQkFBSSxRQUFRLE9BQU8sd0JBQVAsQ0FBZ0MsUUFBaEMsRUFBMEMsR0FBMUMsQ0FBUixDQUZnQzs7QUFJcEMsZ0JBQUksU0FBUyxNQUFNLFlBQU4sSUFBc0IsSUFBSSxHQUFKLE1BQWEsU0FBYixFQUF3QjtBQUN6RCxxQkFBTyxjQUFQLENBQXNCLEdBQXRCLEVBQTJCLEdBQTNCLEVBQWdDLEtBQWhDLEVBRHlEO2FBQTNEO1dBSkY7O0FBU0EsaUJBQU8sR0FBUCxDQVorQztTQUF6QixDQW5CUDs7QUFrQ2pCLHFCQUFhLFdBQWIsR0FBMkIsWUFBYTtBQUN0QyxtQkFBUyxnQkFBVCxDQUEwQixNQUExQixFQUFrQyxLQUFsQyxFQUF5QztBQUN2QyxpQkFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksTUFBTSxNQUFOLEVBQWMsR0FBbEMsRUFBdUM7QUFDckMsa0JBQUksYUFBYSxNQUFNLENBQU4sQ0FBYixDQURpQztBQUVyQyx5QkFBVyxVQUFYLEdBQXdCLFdBQVcsVUFBWCxJQUF5QixLQUF6QixDQUZhO0FBR3JDLHlCQUFXLFlBQVgsR0FBMEIsSUFBMUIsQ0FIcUM7QUFJckMsa0JBQUksV0FBVyxVQUFYLEVBQXVCLFdBQVcsUUFBWCxHQUFzQixJQUF0QixDQUEzQjtBQUNBLHFCQUFPLGNBQVAsQ0FBc0IsTUFBdEIsRUFBOEIsV0FBVyxHQUFYLEVBQWdCLFVBQTlDLEVBTHFDO2FBQXZDO1dBREY7O0FBVUEsaUJBQU8sVUFBVSxXQUFWLEVBQXVCLFVBQXZCLEVBQW1DLFdBQW5DLEVBQWdEO0FBQ3JELGdCQUFJLFVBQUosRUFBZ0IsaUJBQWlCLFlBQVksU0FBWixFQUF1QixVQUF4QyxFQUFoQjtBQUNBLGdCQUFJLFdBQUosRUFBaUIsaUJBQWlCLFdBQWpCLEVBQThCLFdBQTlCLEVBQWpCO0FBQ0EsbUJBQU8sV0FBUCxDQUhxRDtXQUFoRCxDQVgrQjtTQUFaLEVBQTVCLENBbENpQjs7QUFvRGpCLHFCQUFhLG9CQUFiLEdBQW9DLFlBQWE7QUFDL0MsbUJBQVMsZ0JBQVQsQ0FBMEIsTUFBMUIsRUFBa0MsV0FBbEMsRUFBK0MsWUFBL0MsRUFBNkQ7QUFDM0QsaUJBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLFlBQVksTUFBWixFQUFvQixHQUF4QyxFQUE2QztBQUMzQyxrQkFBSSxhQUFhLFlBQVksQ0FBWixDQUFiLENBRHVDO0FBRTNDLGtCQUFJLGFBQWEsV0FBVyxVQUFYLENBRjBCO0FBRzNDLGtCQUFJLE1BQU0sV0FBVyxHQUFYLENBSGlDO0FBSTNDLHFCQUFPLFdBQVcsR0FBWCxDQUpvQztBQUszQyxxQkFBTyxXQUFXLFVBQVgsQ0FMb0M7QUFNM0MseUJBQVcsVUFBWCxHQUF3QixXQUFXLFVBQVgsSUFBeUIsS0FBekIsQ0FObUI7QUFPM0MseUJBQVcsWUFBWCxHQUEwQixJQUExQixDQVAyQztBQVEzQyxrQkFBSSxXQUFXLFVBQVgsSUFBeUIsV0FBVyxXQUFYLEVBQXdCLFdBQVcsUUFBWCxHQUFzQixJQUF0QixDQUFyRDs7QUFFQSxrQkFBSSxVQUFKLEVBQWdCO0FBQ2QscUJBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLFdBQVcsTUFBWCxFQUFtQixHQUF2QyxFQUE0QztBQUMxQyxzQkFBSSxZQUFZLFdBQVcsQ0FBWCxDQUFaLENBRHNDOztBQUcxQyxzQkFBSSxPQUFPLFNBQVAsS0FBcUIsVUFBckIsRUFBaUM7QUFDbkMsaUNBQWEsVUFBVSxNQUFWLEVBQWtCLEdBQWxCLEVBQXVCLFVBQXZCLEtBQXNDLFVBQXRDLENBRHNCO21CQUFyQyxNQUVPO0FBQ0wsMEJBQU0sSUFBSSxTQUFKLENBQWMsOEJBQThCLFdBQVcsR0FBWCxHQUFpQiwwQkFBL0MsV0FBbUYsNkRBQW5GLENBQXBCLENBREs7bUJBRlA7aUJBSEY7O0FBVUEsb0JBQUksV0FBVyxXQUFYLEtBQTJCLFNBQTNCLEVBQXNDO0FBQ3hDLCtCQUFhLEdBQWIsSUFBb0IsVUFBcEIsQ0FEd0M7QUFFeEMsMkJBRndDO2lCQUExQztlQVhGOztBQWlCQSxxQkFBTyxjQUFQLENBQXNCLE1BQXRCLEVBQThCLEdBQTlCLEVBQW1DLFVBQW5DLEVBM0IyQzthQUE3QztXQURGOztBQWdDQSxpQkFBTyxVQUFVLFdBQVYsRUFBdUIsVUFBdkIsRUFBbUMsV0FBbkMsRUFBZ0QsaUJBQWhELEVBQW1FLGtCQUFuRSxFQUF1RjtBQUM1RixnQkFBSSxVQUFKLEVBQWdCLGlCQUFpQixZQUFZLFNBQVosRUFBdUIsVUFBeEMsRUFBb0QsaUJBQXBELEVBQWhCO0FBQ0EsZ0JBQUksV0FBSixFQUFpQixpQkFBaUIsV0FBakIsRUFBOEIsV0FBOUIsRUFBMkMsa0JBQTNDLEVBQWpCO0FBQ0EsbUJBQU8sV0FBUCxDQUg0RjtXQUF2RixDQWpDd0M7U0FBWixFQUFyQyxDQXBEaUI7O0FBNEZqQixxQkFBYSxxQkFBYixHQUFxQyxVQUFVLFdBQVYsRUFBdUI7QUFDMUQsY0FBSSxTQUFTLEVBQVQsQ0FEc0Q7O0FBRzFELGVBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLFlBQVksTUFBWixFQUFvQixHQUF4QyxFQUE2QztBQUMzQyxnQkFBSSxhQUFhLFlBQVksQ0FBWixDQUFiLENBRHVDO0FBRTNDLGdCQUFJLGFBQWEsV0FBVyxVQUFYLENBRjBCO0FBRzNDLGdCQUFJLE1BQU0sV0FBVyxHQUFYLENBSGlDO0FBSTNDLG1CQUFPLFdBQVcsR0FBWCxDQUpvQztBQUszQyxtQkFBTyxXQUFXLFVBQVgsQ0FMb0M7QUFNM0MsdUJBQVcsVUFBWCxHQUF3QixJQUF4QixDQU4yQztBQU8zQyx1QkFBVyxZQUFYLEdBQTBCLElBQTFCLENBUDJDO0FBUTNDLGdCQUFJLFdBQVcsVUFBWCxJQUF5QixXQUFXLFdBQVgsRUFBd0IsV0FBVyxRQUFYLEdBQXNCLElBQXRCLENBQXJEOztBQUVBLGdCQUFJLFVBQUosRUFBZ0I7QUFDZCxtQkFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksV0FBVyxNQUFYLEVBQW1CLEdBQXZDLEVBQTRDO0FBQzFDLG9CQUFJLFlBQVksV0FBVyxDQUFYLENBQVosQ0FEc0M7O0FBRzFDLG9CQUFJLE9BQU8sU0FBUCxLQUFxQixVQUFyQixFQUFpQztBQUNuQywrQkFBYSxVQUFVLE1BQVYsRUFBa0IsR0FBbEIsRUFBdUIsVUFBdkIsS0FBc0MsVUFBdEMsQ0FEc0I7aUJBQXJDLE1BRU87QUFDTCx3QkFBTSxJQUFJLFNBQUosQ0FBYyw4QkFBOEIsV0FBVyxHQUFYLEdBQWlCLDBCQUEvQyxXQUFtRiw2REFBbkYsQ0FBcEIsQ0FESztpQkFGUDtlQUhGO2FBREY7O0FBWUEsZ0JBQUksV0FBVyxXQUFYLEVBQXdCO0FBQzFCLHlCQUFXLEtBQVgsR0FBbUIsV0FBVyxXQUFYLENBQXVCLElBQXZCLENBQTRCLE1BQTVCLENBQW5CLENBRDBCO2FBQTVCOztBQUlBLG1CQUFPLGNBQVAsQ0FBc0IsTUFBdEIsRUFBOEIsR0FBOUIsRUFBbUMsVUFBbkMsRUExQjJDO1dBQTdDOztBQTZCQSxpQkFBTyxNQUFQLENBaEMwRDtTQUF2QixDQTVGcEI7O0FBK0hqQixxQkFBYSxpQ0FBYixHQUFpRCxVQUFVLE1BQVYsRUFBa0IsR0FBbEIsRUFBdUIsV0FBdkIsRUFBb0M7QUFDbkYsY0FBSSxjQUFjLFlBQVksR0FBWixDQUFkLENBRCtFO0FBRW5GLGNBQUksQ0FBQyxXQUFELEVBQWMsT0FBbEI7QUFDQSxjQUFJLGFBQWEsRUFBYixDQUgrRTs7QUFLbkYsZUFBSyxJQUFJLElBQUosSUFBWSxXQUFqQjtBQUE4Qix1QkFBVyxJQUFYLElBQW1CLFlBQVksSUFBWixDQUFuQjtXQUE5QixVQUVBLENBQVcsS0FBWCxHQUFtQixXQUFXLFdBQVgsR0FBeUIsV0FBVyxXQUFYLENBQXVCLElBQXZCLENBQTRCLE1BQTVCLENBQXpCLEdBQStELFNBQS9ELENBUGdFO0FBUW5GLGlCQUFPLGNBQVAsQ0FBc0IsTUFBdEIsRUFBOEIsR0FBOUIsRUFBbUMsVUFBbkMsRUFSbUY7U0FBcEMsQ0EvSGhDOztBQTBJakIscUJBQWEscUJBQWIsR0FBcUMsVUFBVSxPQUFWLEVBQW1CLEdBQW5CLEVBQXdCO0FBQzNELGlCQUFPLE9BQU8sTUFBUCxDQUFjLE9BQU8sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUM7QUFDcEQsaUJBQUs7QUFDSCxxQkFBTyxPQUFPLE1BQVAsQ0FBYyxHQUFkLENBQVA7YUFERjtXQURtQixDQUFkLENBQVAsQ0FEMkQ7U0FBeEIsQ0ExSXBCOztBQWtKakIscUJBQWEsMEJBQWIsR0FBMEMsVUFBVSxPQUFWLEVBQW1CLEdBQW5CLEVBQXdCO0FBQ2hFLGtCQUFRLEdBQVIsR0FBYyxHQUFkLENBRGdFO0FBRWhFLGlCQUFPLE9BQVAsQ0FGZ0U7U0FBeEIsQ0FsSnpCOztBQXVKakIscUJBQWEsT0FBYixHQUF1QixVQUFVLEdBQVYsRUFBZTtBQUNwQyxpQkFBTyxNQUFNLE9BQU4sQ0FBYyxHQUFkLElBQXFCLEdBQXJCLEdBQTJCLE1BQU0sSUFBTixDQUFXLEdBQVgsQ0FBM0IsQ0FENkI7U0FBZixDQXZKTjs7QUEySmpCLHFCQUFhLGlCQUFiLEdBQWlDLFVBQVUsR0FBVixFQUFlO0FBQzlDLGNBQUksTUFBTSxPQUFOLENBQWMsR0FBZCxDQUFKLEVBQXdCO0FBQ3RCLGlCQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sT0FBTyxNQUFNLElBQUksTUFBSixDQUFiLEVBQTBCLElBQUksSUFBSSxNQUFKLEVBQVksR0FBMUQ7QUFBK0QsbUJBQUssQ0FBTCxJQUFVLElBQUksQ0FBSixDQUFWO2FBQS9ELE9BRU8sSUFBUCxDQUhzQjtXQUF4QixNQUlPO0FBQ0wsbUJBQU8sTUFBTSxJQUFOLENBQVcsR0FBWCxDQUFQLENBREs7V0FKUDtTQUQrQixDQTNKaEI7O0FBcUtqQixxQkFBYSxhQUFiLEdBQTZCLFlBQWE7QUFDeEMsbUJBQVMsYUFBVCxDQUF1QixHQUF2QixFQUE0QixDQUE1QixFQUErQjtBQUM3QixnQkFBSSxPQUFPLEVBQVAsQ0FEeUI7QUFFN0IsZ0JBQUksS0FBSyxJQUFMLENBRnlCO0FBRzdCLGdCQUFJLEtBQUssS0FBTCxDQUh5QjtBQUk3QixnQkFBSSxLQUFLLFNBQUwsQ0FKeUI7O0FBTTdCLGdCQUFJO0FBQ0YsbUJBQUssSUFBSSxLQUFLLElBQUksT0FBTyxRQUFQLENBQUosRUFBTCxFQUE2QixFQUFqQyxFQUFxQyxFQUFFLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSCxFQUFMLENBQUQsQ0FBaUIsSUFBakIsQ0FBUCxFQUErQixLQUFLLElBQUwsRUFBVztBQUNsRixxQkFBSyxJQUFMLENBQVUsR0FBRyxLQUFILENBQVYsQ0FEa0Y7O0FBR2xGLG9CQUFJLEtBQUssS0FBSyxNQUFMLEtBQWdCLENBQWhCLEVBQW1CLE1BQTVCO2VBSEY7YUFERixDQU1FLE9BQU8sR0FBUCxFQUFZO0FBQ1osbUJBQUssSUFBTCxDQURZO0FBRVosbUJBQUssR0FBTCxDQUZZO2FBQVosU0FHUTtBQUNSLGtCQUFJO0FBQ0Ysb0JBQUksQ0FBQyxFQUFELElBQU8sR0FBRyxRQUFILENBQVAsRUFBcUIsR0FBRyxRQUFILElBQXpCO2VBREYsU0FFVTtBQUNSLG9CQUFJLEVBQUosRUFBUSxNQUFNLEVBQU4sQ0FBUjtlQUhGO2FBVkY7O0FBaUJBLG1CQUFPLElBQVAsQ0F2QjZCO1dBQS9COztBQTBCQSxpQkFBTyxVQUFVLEdBQVYsRUFBZSxDQUFmLEVBQWtCO0FBQ3ZCLGdCQUFJLE1BQU0sT0FBTixDQUFjLEdBQWQsQ0FBSixFQUF3QjtBQUN0QixxQkFBTyxHQUFQLENBRHNCO2FBQXhCLE1BRU8sSUFBSSxPQUFPLFFBQVAsSUFBbUIsT0FBTyxHQUFQLENBQW5CLEVBQWdDO0FBQ3pDLHFCQUFPLGNBQWMsR0FBZCxFQUFtQixDQUFuQixDQUFQLENBRHlDO2FBQXBDLE1BRUE7QUFDTCxvQkFBTSxJQUFJLFNBQUosQ0FBYyxzREFBZCxDQUFOLENBREs7YUFGQTtXQUhGLENBM0JpQztTQUFaLEVBQTlCLENBcktpQjs7QUEyTWpCLHFCQUFhLGtCQUFiLEdBQWtDLFVBQVUsR0FBVixFQUFlLENBQWYsRUFBa0I7QUFDbEQsY0FBSSxNQUFNLE9BQU4sQ0FBYyxHQUFkLENBQUosRUFBd0I7QUFDdEIsbUJBQU8sR0FBUCxDQURzQjtXQUF4QixNQUVPLElBQUksT0FBTyxRQUFQLElBQW1CLE9BQU8sR0FBUCxDQUFuQixFQUFnQztBQUN6QyxnQkFBSSxPQUFPLEVBQVAsQ0FEcUM7O0FBR3pDLGlCQUFLLElBQUksWUFBWSxJQUFJLE9BQU8sUUFBUCxDQUFKLEVBQVosRUFBb0MsS0FBeEMsRUFBK0MsQ0FBQyxDQUFDLFFBQVEsVUFBVSxJQUFWLEVBQVIsQ0FBRCxDQUEyQixJQUEzQixHQUFrQztBQUNyRixtQkFBSyxJQUFMLENBQVUsTUFBTSxLQUFOLENBQVYsQ0FEcUY7O0FBR3JGLGtCQUFJLEtBQUssS0FBSyxNQUFMLEtBQWdCLENBQWhCLEVBQW1CLE1BQTVCO2FBSEY7O0FBTUEsbUJBQU8sSUFBUCxDQVR5QztXQUFwQyxNQVVBO0FBQ0wsa0JBQU0sSUFBSSxTQUFKLENBQWMsc0RBQWQsQ0FBTixDQURLO1dBVkE7U0FIeUIsQ0EzTWpCOztBQTZOakIscUJBQWEsdUJBQWIsR0FBdUMsVUFBVSxHQUFWLEVBQWUsSUFBZixFQUFxQjtBQUMxRCxjQUFJLFNBQVMsRUFBVCxDQURzRDs7QUFHMUQsZUFBSyxJQUFJLENBQUosSUFBUyxHQUFkLEVBQW1CO0FBQ2pCLGdCQUFJLEtBQUssT0FBTCxDQUFhLENBQWIsS0FBbUIsQ0FBbkIsRUFBc0IsU0FBMUI7QUFDQSxnQkFBSSxDQUFDLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxDQUExQyxDQUFELEVBQStDLFNBQW5EO0FBQ0EsbUJBQU8sQ0FBUCxJQUFZLElBQUksQ0FBSixDQUFaLENBSGlCO1dBQW5COztBQU1BLGlCQUFPLE1BQVAsQ0FUMEQ7U0FBckIsQ0E3TnRCOztBQXlPakIscUJBQWEsTUFBYixHQUFzQixPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0F6T0w7QUEwT2pCLHFCQUFhLEtBQWIsR0FBcUIsTUFBTSxTQUFOLENBQWdCLEtBQWhCLENBMU9KO0FBMk9qQixxQkFBYSxJQUFiLEdBQW9CLFNBQVMsU0FBVCxDQUFtQixJQUFuQixDQTNPSDs7QUE2T2pCLHFCQUFhLGNBQWIsR0FBOEIsVUFBVSxHQUFWLEVBQWUsR0FBZixFQUFvQixLQUFwQixFQUEyQjtBQUN2RCxjQUFJLE9BQU8sR0FBUCxFQUFZO0FBQ2QsbUJBQU8sY0FBUCxDQUFzQixHQUF0QixFQUEyQixHQUEzQixFQUFnQztBQUM5QixxQkFBTyxLQUFQO0FBQ0EsMEJBQVksSUFBWjtBQUNBLDRCQUFjLElBQWQ7QUFDQSx3QkFBVSxJQUFWO2FBSkYsRUFEYztXQUFoQixNQU9PO0FBQ0wsZ0JBQUksR0FBSixJQUFXLEtBQVgsQ0FESztXQVBQOztBQVdBLGlCQUFPLEdBQVAsQ0FadUQ7U0FBM0IsQ0E3T2I7O0FBNFBqQixxQkFBYSxnQkFBYixHQUFnQyxVQUFVLEVBQVYsRUFBYztBQUM1QyxpQkFBTyxZQUFZO0FBQ2pCLGdCQUFJLE1BQU0sR0FBRyxLQUFILENBQVMsSUFBVCxFQUFlLFNBQWYsQ0FBTixDQURhO0FBRWpCLG1CQUFPLElBQUksT0FBSixDQUFZLFVBQVUsT0FBVixFQUFtQixNQUFuQixFQUEyQjtBQUM1QyxrQkFBSSxXQUFXLEtBQUssSUFBTCxDQUFVLElBQVYsRUFBZ0IsTUFBaEIsQ0FBWCxDQUR3QztBQUU1QyxrQkFBSSxZQUFZLEtBQUssSUFBTCxDQUFVLElBQVYsRUFBZ0IsT0FBaEIsQ0FBWixDQUZ3Qzs7QUFJNUMsdUJBQVMsSUFBVCxDQUFjLEdBQWQsRUFBbUIsR0FBbkIsRUFBd0I7QUFDdEIsb0JBQUk7QUFDRixzQkFBSSxPQUFPLElBQUksR0FBSixFQUFTLEdBQVQsQ0FBUCxDQURGO0FBRUYsc0JBQUksUUFBUSxLQUFLLEtBQUwsQ0FGVjtpQkFBSixDQUdFLE9BQU8sS0FBUCxFQUFjO0FBQ2QseUJBQU8sS0FBUCxFQURjO0FBRWQseUJBRmM7aUJBQWQ7O0FBS0Ysb0JBQUksS0FBSyxJQUFMLEVBQVc7QUFDYiwwQkFBUSxLQUFSLEVBRGE7aUJBQWYsTUFFTztBQUNMLDBCQUFRLE9BQVIsQ0FBZ0IsS0FBaEIsRUFBdUIsSUFBdkIsQ0FBNEIsUUFBNUIsRUFBc0MsU0FBdEMsRUFESztpQkFGUDtlQVRGOztBQWdCQSx5QkFwQjRDO2FBQTNCLENBQW5CLENBRmlCO1dBQVosQ0FEcUM7U0FBZCxDQTVQZjs7QUF3UmpCLHFCQUFhLHFCQUFiLEdBQXFDLFVBQVUsR0FBVixFQUFlLFFBQWYsRUFBeUI7QUFDNUQsY0FBSSxTQUFTLFNBQVMsRUFBVCxFQUFhLEdBQWIsQ0FBVCxDQUR3RDtBQUU1RCxpQkFBTyxPQUFPLFNBQVAsQ0FBUCxDQUY0RDtBQUc1RCxpQkFBTyxNQUFQLENBSDREO1NBQXpCLENBeFJwQjs7QUE4UmpCLHFCQUFhLHNCQUFiLEdBQXNDLFVBQVUsR0FBVixFQUFlO0FBQ25ELGNBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFDekIsbUJBQU8sR0FBUCxDQUR5QjtXQUEzQixNQUVPO0FBQ0wsZ0JBQUksU0FBUyxFQUFULENBREM7O0FBR0wsZ0JBQUksT0FBTyxJQUFQLEVBQWE7QUFDZixtQkFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUNuQixvQkFBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtlQURGO2FBREY7O0FBTUEsbUJBQU8sU0FBUCxJQUFvQixHQUFwQixDQVRLO0FBVUwsbUJBQU8sTUFBUCxDQVZLO1dBRlA7U0FEb0MsQ0E5UnJCOztBQStTakIscUJBQWEscUJBQWIsR0FBcUMsVUFBVSxHQUFWLEVBQWU7QUFDbEQsaUJBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEI7QUFDbkMsdUJBQVcsR0FBWDtXQURLLENBRDJDO1NBQWYsQ0EvU3BCOztBQXFUakIscUJBQWEsT0FBYixHQUF1QixVQUFVLEdBQVYsRUFBZTtBQUNwQyxpQkFBTyxPQUFPLElBQUksV0FBSixLQUFvQixNQUFwQixHQUE2QixRQUFwQyxVQUFzRCxnREFBdEQsQ0FENkI7U0FBZixDQXJUTjs7QUF5VGpCLHFCQUFhLFFBQWIsR0FBd0IsT0FBTyxNQUFQLElBQWlCLFVBQVUsTUFBVixFQUFrQjtBQUN6RCxlQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxVQUFVLE1BQVYsRUFBa0IsR0FBdEMsRUFBMkM7QUFDekMsZ0JBQUksU0FBUyxVQUFVLENBQVYsQ0FBVCxDQURxQzs7QUFHekMsaUJBQUssSUFBSSxHQUFKLElBQVcsTUFBaEIsRUFBd0I7QUFDdEIsa0JBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLE1BQXJDLEVBQTZDLEdBQTdDLENBQUosRUFBdUQ7QUFDckQsdUJBQU8sR0FBUCxJQUFjLE9BQU8sR0FBUCxDQUFkLENBRHFEO2VBQXZEO2FBREY7V0FIRjs7QUFVQSxpQkFBTyxNQUFQLENBWHlEO1NBQWxCLENBelR4Qjs7QUF1VWpCLHFCQUFhLEdBQWIsR0FBbUIsU0FBUyxHQUFULENBQWEsTUFBYixFQUFxQixRQUFyQixFQUErQixRQUEvQixFQUF5QztBQUMxRCxjQUFJLFdBQVcsSUFBWCxFQUFpQixTQUFTLFNBQVMsU0FBVCxDQUE5QjtBQUNBLGNBQUksT0FBTyxPQUFPLHdCQUFQLENBQWdDLE1BQWhDLEVBQXdDLFFBQXhDLENBQVAsQ0FGc0Q7O0FBSTFELGNBQUksU0FBUyxTQUFULEVBQW9CO0FBQ3RCLGdCQUFJLFNBQVMsT0FBTyxjQUFQLENBQXNCLE1BQXRCLENBQVQsQ0FEa0I7O0FBR3RCLGdCQUFJLFdBQVcsSUFBWCxFQUFpQjtBQUNuQixxQkFBTyxTQUFQLENBRG1CO2FBQXJCLE1BRU87QUFDTCxxQkFBTyxJQUFJLE1BQUosRUFBWSxRQUFaLEVBQXNCLFFBQXRCLENBQVAsQ0FESzthQUZQO1dBSEYsTUFRTyxJQUFJLFdBQVcsSUFBWCxFQUFpQjtBQUMxQixtQkFBTyxLQUFLLEtBQUwsQ0FEbUI7V0FBckIsTUFFQTtBQUNMLGdCQUFJLFNBQVMsS0FBSyxHQUFMLENBRFI7O0FBR0wsZ0JBQUksV0FBVyxTQUFYLEVBQXNCO0FBQ3hCLHFCQUFPLFNBQVAsQ0FEd0I7YUFBMUI7O0FBSUEsbUJBQU8sT0FBTyxJQUFQLENBQVksUUFBWixDQUFQLENBUEs7V0FGQTtTQVpVLENBdlVGOztBQWdXakIscUJBQWEsR0FBYixHQUFtQixTQUFTLEdBQVQsQ0FBYSxNQUFiLEVBQXFCLFFBQXJCLEVBQStCLEtBQS9CLEVBQXNDLFFBQXRDLEVBQWdEO0FBQ2pFLGNBQUksT0FBTyxPQUFPLHdCQUFQLENBQWdDLE1BQWhDLEVBQXdDLFFBQXhDLENBQVAsQ0FENkQ7O0FBR2pFLGNBQUksU0FBUyxTQUFULEVBQW9CO0FBQ3RCLGdCQUFJLFNBQVMsT0FBTyxjQUFQLENBQXNCLE1BQXRCLENBQVQsQ0FEa0I7O0FBR3RCLGdCQUFJLFdBQVcsSUFBWCxFQUFpQjtBQUNuQixrQkFBSSxNQUFKLEVBQVksUUFBWixFQUFzQixLQUF0QixFQUE2QixRQUE3QixFQURtQjthQUFyQjtXQUhGLE1BTU8sSUFBSSxXQUFXLElBQVgsSUFBbUIsS0FBSyxRQUFMLEVBQWU7QUFDM0MsaUJBQUssS0FBTCxHQUFhLEtBQWIsQ0FEMkM7V0FBdEMsTUFFQTtBQUNMLGdCQUFJLFNBQVMsS0FBSyxHQUFMLENBRFI7O0FBR0wsZ0JBQUksV0FBVyxTQUFYLEVBQXNCO0FBQ3hCLHFCQUFPLElBQVAsQ0FBWSxRQUFaLEVBQXNCLEtBQXRCLEVBRHdCO2FBQTFCO1dBTEs7O0FBVVAsaUJBQU8sS0FBUCxDQW5CaUU7U0FBaEQsQ0FoV0Y7O0FBc1hqQixxQkFBYSxhQUFiLEdBQTZCLFVBQVUsU0FBVixFQUFxQixTQUFyQixFQUFnQztBQUMzRCxjQUFJLGNBQWMsU0FBZCxFQUF5QjtBQUMzQixrQkFBTSxJQUFJLFNBQUosQ0FBYyxzQ0FBZCxDQUFOLENBRDJCO1dBQTdCO1NBRDJCLENBdFhaOztBQTRYakIscUJBQWEsY0FBYixHQUE4QixVQUFVLFFBQVYsRUFBb0IsV0FBcEIsRUFBaUM7QUFDN0QsY0FBSSxFQUFFLG9CQUFvQixXQUFwQixDQUFGLEVBQW9DO0FBQ3RDLGtCQUFNLElBQUksU0FBSixDQUFjLG1DQUFkLENBQU4sQ0FEc0M7V0FBeEM7U0FENEIsQ0E1WGI7O0FBa1lqQixxQkFBYSx3QkFBYixHQUF3QyxVQUFVLEdBQVYsRUFBZTtBQUNyRCxjQUFJLE9BQU8sSUFBUCxFQUFhLE1BQU0sSUFBSSxTQUFKLENBQWMsOEJBQWQsQ0FBTixDQUFqQjtTQURzQyxDQWxZdkI7O0FBc1lqQixxQkFBYSxpQkFBYixHQUFpQyxFQUFqQyxDQXRZaUI7O0FBd1lqQixxQkFBYSxxQkFBYixHQUFxQyxVQUFVLEdBQVYsRUFBZSxJQUFmLEVBQXFCLEtBQXJCLEVBQTRCO0FBQy9ELGNBQUksUUFBUSxLQUFSLEVBQWU7QUFDakIsa0JBQU0sSUFBSSxjQUFKLENBQW1CLE9BQU8sc0NBQVAsQ0FBekIsQ0FEaUI7V0FBbkI7O0FBSUEsaUJBQU8sSUFBUCxDQUwrRDtTQUE1QixDQXhZcEI7O0FBZ1pqQixxQkFBYSxVQUFiLEdBQTBCLE9BQU8sTUFBUCxLQUFrQixXQUFsQixHQUFnQyxJQUFoQyxHQUF1QyxNQUF2QyxDQWhaVDtBQWlaakIscUJBQWEsa0JBQWIsR0FBa0MsT0FBTyxNQUFQLEtBQWtCLFVBQWxCLElBQWdDLE9BQU8sS0FBUCxDQUFoQyxJQUFpRCxPQUFPLEtBQVAsRUFBYyxlQUFkLENBQWpELElBQW1GLEtBQW5GLENBalpqQjs7QUFtWmpCLHFCQUFhLFlBQWIsR0FBNEIsVUFBVSxZQUFWLEVBQXdCLEtBQXhCLEVBQStCO0FBQ3pELGNBQUksWUFBSixFQUFrQjtBQUNoQixpQkFBSyxJQUFJLFFBQUosSUFBZ0IsWUFBckIsRUFBbUM7QUFDakMsa0JBQUksT0FBTyxNQUFNLFFBQU4sQ0FBUCxLQUEyQixXQUEzQixFQUF3QztBQUMxQyxzQkFBTSxRQUFOLElBQWtCLGFBQWEsUUFBYixDQUFsQixDQUQwQztlQUE1QzthQURGO1dBREY7O0FBUUEsaUJBQU8sS0FBUCxDQVR5RDtTQUEvQixDQW5aWDs7QUErWmpCLHFCQUFhLFdBQWIsR0FBMkIsVUFBVSxJQUFWLEVBQWdCLEtBQWhCLEVBQXVCO0FBQ2hELGNBQUksU0FBUyxJQUFULElBQWlCLE1BQU0sT0FBTyxXQUFQLENBQXZCLEVBQTRDO0FBQzlDLG1CQUFPLE1BQU0sT0FBTyxXQUFQLENBQU4sQ0FBMEIsSUFBMUIsQ0FBUCxDQUQ4QztXQUFoRCxNQUVPO0FBQ0wsbUJBQU8sZ0JBQWdCLEtBQWhCLENBREY7V0FGUDtTQUR5QixDQS9aVjs7QUF1YWpCLHFCQUFhLGNBQWIsR0FBOEIsVUFBVSxHQUFWLEVBQWU7QUFDM0MsaUJBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsSUFBSSxTQUFKLENBQXhCLEdBQXlDLEdBQXpDLENBRG9DO1NBQWYsQ0F2YWI7T0FBbEIsQ0FBRCxDQTBhRyxPQUFPLE1BQVAsS0FBa0IsV0FBbEIsR0FBZ0MsSUFBaEMsR0FBdUMsTUFBdkMsQ0ExYUgiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2V4dGVybmFsLWhlbHBlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGdsb2JhbFwiO1xuKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgdmFyIGJhYmVsSGVscGVycyA9IGdsb2JhbC5iYWJlbEhlbHBlcnMgPSB7fTtcblxuICBiYWJlbEhlbHBlcnMuaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgICB9XG5cbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG4gIH07XG5cbiAgYmFiZWxIZWxwZXJzLmRlZmF1bHRzID0gZnVuY3Rpb24gKG9iaiwgZGVmYXVsdHMpIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRlZmF1bHRzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICB2YXIgdmFsdWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRzLCBrZXkpO1xuXG4gICAgICBpZiAodmFsdWUgJiYgdmFsdWUuY29uZmlndXJhYmxlICYmIG9ialtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICBiYWJlbEhlbHBlcnMuY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gICAgfTtcbiAgfSkoKTtcblxuICBiYWJlbEhlbHBlcnMuY3JlYXRlRGVjb3JhdGVkQ2xhc3MgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBkZXNjcmlwdG9ycywgaW5pdGlhbGl6ZXJzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRlc2NyaXB0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gZGVzY3JpcHRvcnNbaV07XG4gICAgICAgIHZhciBkZWNvcmF0b3JzID0gZGVzY3JpcHRvci5kZWNvcmF0b3JzO1xuICAgICAgICB2YXIga2V5ID0gZGVzY3JpcHRvci5rZXk7XG4gICAgICAgIGRlbGV0ZSBkZXNjcmlwdG9yLmtleTtcbiAgICAgICAgZGVsZXRlIGRlc2NyaXB0b3IuZGVjb3JhdG9ycztcbiAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvciB8fCBkZXNjcmlwdG9yLmluaXRpYWxpemVyKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcblxuICAgICAgICBpZiAoZGVjb3JhdG9ycykge1xuICAgICAgICAgIGZvciAodmFyIGYgPSAwOyBmIDwgZGVjb3JhdG9ycy5sZW5ndGg7IGYrKykge1xuICAgICAgICAgICAgdmFyIGRlY29yYXRvciA9IGRlY29yYXRvcnNbZl07XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGVjb3JhdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgZGVzY3JpcHRvciA9IGRlY29yYXRvcih0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikgfHwgZGVzY3JpcHRvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgZGVjb3JhdG9yIGZvciBtZXRob2QgXCIgKyBkZXNjcmlwdG9yLmtleSArIFwiIGlzIG9mIHRoZSBpbnZhbGlkIHR5cGUgXCIgKyB0eXBlb2YgZGVjb3JhdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZGVzY3JpcHRvci5pbml0aWFsaXplciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpbml0aWFsaXplcnNba2V5XSA9IGRlc2NyaXB0b3I7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzLCBwcm90b0luaXRpYWxpemVycywgc3RhdGljSW5pdGlhbGl6ZXJzKSB7XG4gICAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMsIHByb3RvSW5pdGlhbGl6ZXJzKTtcbiAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMsIHN0YXRpY0luaXRpYWxpemVycyk7XG4gICAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gICAgfTtcbiAgfSkoKTtcblxuICBiYWJlbEhlbHBlcnMuY3JlYXRlRGVjb3JhdGVkT2JqZWN0ID0gZnVuY3Rpb24gKGRlc2NyaXB0b3JzKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZXNjcmlwdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBkZXNjcmlwdG9yc1tpXTtcbiAgICAgIHZhciBkZWNvcmF0b3JzID0gZGVzY3JpcHRvci5kZWNvcmF0b3JzO1xuICAgICAgdmFyIGtleSA9IGRlc2NyaXB0b3Iua2V5O1xuICAgICAgZGVsZXRlIGRlc2NyaXB0b3Iua2V5O1xuICAgICAgZGVsZXRlIGRlc2NyaXB0b3IuZGVjb3JhdG9ycztcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IHRydWU7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IgfHwgZGVzY3JpcHRvci5pbml0aWFsaXplcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG5cbiAgICAgIGlmIChkZWNvcmF0b3JzKSB7XG4gICAgICAgIGZvciAodmFyIGYgPSAwOyBmIDwgZGVjb3JhdG9ycy5sZW5ndGg7IGYrKykge1xuICAgICAgICAgIHZhciBkZWNvcmF0b3IgPSBkZWNvcmF0b3JzW2ZdO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBkZWNvcmF0b3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZGVzY3JpcHRvciA9IGRlY29yYXRvcih0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikgfHwgZGVzY3JpcHRvcjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBkZWNvcmF0b3IgZm9yIG1ldGhvZCBcIiArIGRlc2NyaXB0b3Iua2V5ICsgXCIgaXMgb2YgdGhlIGludmFsaWQgdHlwZSBcIiArIHR5cGVvZiBkZWNvcmF0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGVzY3JpcHRvci5pbml0aWFsaXplcikge1xuICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gZGVzY3JpcHRvci5pbml0aWFsaXplci5jYWxsKHRhcmdldCk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICBiYWJlbEhlbHBlcnMuZGVmaW5lRGVjb3JhdGVkUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKHRhcmdldCwga2V5LCBkZXNjcmlwdG9ycykge1xuICAgIHZhciBfZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JzW2tleV07XG4gICAgaWYgKCFfZGVzY3JpcHRvcikgcmV0dXJuO1xuICAgIHZhciBkZXNjcmlwdG9yID0ge307XG5cbiAgICBmb3IgKHZhciBfa2V5IGluIF9kZXNjcmlwdG9yKSBkZXNjcmlwdG9yW19rZXldID0gX2Rlc2NyaXB0b3JbX2tleV07XG5cbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZGVzY3JpcHRvci5pbml0aWFsaXplciA/IGRlc2NyaXB0b3IuaW5pdGlhbGl6ZXIuY2FsbCh0YXJnZXQpIDogdW5kZWZpbmVkO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcik7XG4gIH07XG5cbiAgYmFiZWxIZWxwZXJzLnRhZ2dlZFRlbXBsYXRlTGl0ZXJhbCA9IGZ1bmN0aW9uIChzdHJpbmdzLCByYXcpIHtcbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzdHJpbmdzLCB7XG4gICAgICByYXc6IHtcbiAgICAgICAgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KVxuICAgICAgfVxuICAgIH0pKTtcbiAgfTtcblxuICBiYWJlbEhlbHBlcnMudGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UgPSBmdW5jdGlvbiAoc3RyaW5ncywgcmF3KSB7XG4gICAgc3RyaW5ncy5yYXcgPSByYXc7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH07XG5cbiAgYmFiZWxIZWxwZXJzLnRvQXJyYXkgPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKSA/IGFyciA6IEFycmF5LmZyb20oYXJyKTtcbiAgfTtcblxuICBiYWJlbEhlbHBlcnMudG9Db25zdW1hYmxlQXJyYXkgPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgICAgcmV0dXJuIGFycjI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKGFycik7XG4gICAgfVxuICB9O1xuXG4gIGJhYmVsSGVscGVycy5zbGljZWRUb0FycmF5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkge1xuICAgICAgdmFyIF9hcnIgPSBbXTtcbiAgICAgIHZhciBfbiA9IHRydWU7XG4gICAgICB2YXIgX2QgPSBmYWxzZTtcbiAgICAgIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZCA9IHRydWU7XG4gICAgICAgIF9lID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9hcnI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgIH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7XG4gICAgICAgIHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpO1xuXG4gIGJhYmVsSGVscGVycy5zbGljZWRUb0FycmF5TG9vc2UgPSBmdW5jdGlvbiAoYXJyLCBpKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkge1xuICAgICAgdmFyIF9hcnIgPSBbXTtcblxuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgICAgICBfYXJyLnB1c2goX3N0ZXAudmFsdWUpO1xuXG4gICAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9hcnI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuICAgIH1cbiAgfTtcblxuICBiYWJlbEhlbHBlcnMub2JqZWN0V2l0aG91dFByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqLCBrZXlzKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICAgIGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtpXSA9IG9ialtpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIGJhYmVsSGVscGVycy5oYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICBiYWJlbEhlbHBlcnMuc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG4gIGJhYmVsSGVscGVycy5iaW5kID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQ7XG5cbiAgYmFiZWxIZWxwZXJzLmRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIGJhYmVsSGVscGVycy5hc3luY1RvR2VuZXJhdG9yID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGNhbGxOZXh0ID0gc3RlcC5iaW5kKG51bGwsIFwibmV4dFwiKTtcbiAgICAgICAgdmFyIGNhbGxUaHJvdyA9IHN0ZXAuYmluZChudWxsLCBcInRocm93XCIpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAoa2V5LCBhcmcpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGNhbGxOZXh0LCBjYWxsVGhyb3cpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxOZXh0KCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIGJhYmVsSGVscGVycy5pbnRlcm9wRXhwb3J0V2lsZGNhcmQgPSBmdW5jdGlvbiAob2JqLCBkZWZhdWx0cykge1xuICAgIHZhciBuZXdPYmogPSBkZWZhdWx0cyh7fSwgb2JqKTtcbiAgICBkZWxldGUgbmV3T2JqW1wiZGVmYXVsdFwiXTtcbiAgICByZXR1cm4gbmV3T2JqO1xuICB9O1xuXG4gIGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gZnVuY3Rpb24gKG9iaikge1xuICAgIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBuZXdPYmogPSB7fTtcblxuICAgICAgaWYgKG9iaiAhPSBudWxsKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuICAgICAgcmV0dXJuIG5ld09iajtcbiAgICB9XG4gIH07XG5cbiAgYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH07XG5cbiAgYmFiZWxIZWxwZXJzLl90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9O1xuXG4gIGJhYmVsSGVscGVycy5fZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgYmFiZWxIZWxwZXJzLmdldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7XG5cbiAgICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHtcbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpO1xuICAgIH1cbiAgfTtcblxuICBiYWJlbEhlbHBlcnMuc2V0ID0gZnVuY3Rpb24gc2V0KG9iamVjdCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcikge1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTtcblxuICAgIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcblxuICAgICAgaWYgKHBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICBzZXQocGFyZW50LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjICYmIGRlc2Mud3JpdGFibGUpIHtcbiAgICAgIGRlc2MudmFsdWUgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNldHRlciA9IGRlc2Muc2V0O1xuXG4gICAgICBpZiAoc2V0dGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2V0dGVyLmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgYmFiZWxIZWxwZXJzLm5ld0Fycm93Q2hlY2sgPSBmdW5jdGlvbiAoaW5uZXJUaGlzLCBib3VuZFRoaXMpIHtcbiAgICBpZiAoaW5uZXJUaGlzICE9PSBib3VuZFRoaXMpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgaW5zdGFudGlhdGUgYW4gYXJyb3cgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9O1xuXG4gIGJhYmVsSGVscGVycy5jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gIH07XG5cbiAgYmFiZWxIZWxwZXJzLm9iamVjdERlc3RydWN0dXJpbmdFbXB0eSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICBpZiAob2JqID09IG51bGwpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgZGVzdHJ1Y3R1cmUgdW5kZWZpbmVkXCIpO1xuICB9O1xuXG4gIGJhYmVsSGVscGVycy50ZW1wb3JhbFVuZGVmaW5lZCA9IHt9O1xuXG4gIGJhYmVsSGVscGVycy50ZW1wb3JhbEFzc2VydERlZmluZWQgPSBmdW5jdGlvbiAodmFsLCBuYW1lLCB1bmRlZikge1xuICAgIGlmICh2YWwgPT09IHVuZGVmKSB7XG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IobmFtZSArIFwiIGlzIG5vdCBkZWZpbmVkIC0gdGVtcG9yYWwgZGVhZCB6b25lXCIpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGJhYmVsSGVscGVycy5zZWxmR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiBnbG9iYWw7XG4gIGJhYmVsSGVscGVycy50eXBlb2ZSZWFjdEVsZW1lbnQgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sW1wiZm9yXCJdICYmIFN5bWJvbFtcImZvclwiXShcInJlYWN0LmVsZW1lbnRcIikgfHwgNjAxMDM7XG5cbiAgYmFiZWxIZWxwZXJzLmRlZmF1bHRQcm9wcyA9IGZ1bmN0aW9uIChkZWZhdWx0UHJvcHMsIHByb3BzKSB7XG4gICAgaWYgKGRlZmF1bHRQcm9wcykge1xuICAgICAgZm9yICh2YXIgcHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcHNbcHJvcE5hbWVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9wcztcbiAgfTtcblxuICBiYWJlbEhlbHBlcnMuX2luc3RhbmNlb2YgPSBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHtcbiAgICBpZiAocmlnaHQgIT0gbnVsbCAmJiByaWdodFtTeW1ib2wuaGFzSW5zdGFuY2VdKSB7XG4gICAgICByZXR1cm4gcmlnaHRbU3ltYm9sLmhhc0luc3RhbmNlXShsZWZ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGxlZnQgaW5zdGFuY2VvZiByaWdodDtcbiAgICB9XG4gIH07XG5cbiAgYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqO1xuICB9O1xufSkodHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiBnbG9iYWwpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
