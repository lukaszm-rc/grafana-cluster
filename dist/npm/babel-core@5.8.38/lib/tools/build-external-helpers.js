/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _generation, _generation2, _messages, messages, _util, util, _transformationFile, _transformationFile2, _lodashCollectionEach, _lodashCollectionEach2, _types, t;

  // istanbul ignore next

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }newObj["default"] = obj;return newObj;
    }
  }

  // istanbul ignore next

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }

  /**
   * [Please add a description.]
   */

  function buildGlobal(namespace, builder) {
    var body = [];
    var container = t.functionExpression(null, [t.identifier("global")], t.blockStatement(body));
    var tree = t.program([t.expressionStatement(t.callExpression(container, [util.template("helper-self-global")]))]);

    body.push(t.variableDeclaration("var", [t.variableDeclarator(namespace, t.assignmentExpression("=", t.memberExpression(t.identifier("global"), namespace), t.objectExpression([])))]));

    builder(body);

    return tree;
  }

  /**
   * [Please add a description.]
   */

  function buildUmd(namespace, builder) {
    var body = [];
    body.push(t.variableDeclaration("var", [t.variableDeclarator(namespace, t.identifier("global"))]));

    builder(body);

    var container = util.template("umd-commonjs-strict", {
      FACTORY_PARAMETERS: t.identifier("global"),
      BROWSER_ARGUMENTS: t.assignmentExpression("=", t.memberExpression(t.identifier("root"), namespace), t.objectExpression({})),
      COMMON_ARGUMENTS: t.identifier("exports"),
      AMD_ARGUMENTS: t.arrayExpression([t.literal("exports")]),
      FACTORY_BODY: body,
      UMD_ROOT: t.identifier("this")
    });
    return t.program([container]);
  }

  /**
   * [Please add a description.]
   */

  function buildVar(namespace, builder) {
    var body = [];
    body.push(t.variableDeclaration("var", [t.variableDeclarator(namespace, t.objectExpression({}))]));
    builder(body);
    return t.program(body);
  }

  /**
   * [Please add a description.]
   */

  function buildHelpers(body, namespace, whitelist) {
    _lodashCollectionEach2["default"](_transformationFile2["default"].helpers, function (name) {
      if (whitelist && whitelist.indexOf(name) === -1) return;

      var key = t.identifier(t.toIdentifier(name));
      body.push(t.expressionStatement(t.assignmentExpression("=", t.memberExpression(namespace, key), util.template("helper-" + name))));
    });
  }

  /**
   * [Please add a description.]
   */

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_generation = require("../generation");
      _generation2 = _interopRequireDefault(_generation);
      _messages = require("../messages");
      messages = _interopRequireWildcard(_messages);
      _util = require("../util");
      util = _interopRequireWildcard(_util);
      _transformationFile = require("../transformation/file");
      _transformationFile2 = _interopRequireDefault(_transformationFile);
      _lodashCollectionEach = require("lodash/collection/each");
      _lodashCollectionEach2 = _interopRequireDefault(_lodashCollectionEach);
      _types = require("../types");
      t = _interopRequireWildcard(_types);
      exports["default"] = function (whitelist) {
        var outputType = arguments.length <= 1 || arguments[1] === undefined ? "global" : arguments[1];

        var namespace = t.identifier("babelHelpers");

        var builder = function builder(body) {
          return buildHelpers(body, namespace, whitelist);
        };

        var tree;

        var build = {
          global: buildGlobal,
          umd: buildUmd,
          "var": buildVar
        }[outputType];

        if (build) {
          tree = build(namespace, builder);
        } else {
          throw new Error(messages.get("unsupportedOutputType", outputType));
        }

        return _generation2["default"](tree).code;
      };

      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdG9vbHMvYnVpbGQtZXh0ZXJuYWwtaGVscGVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQUtBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7QUFJQSxXQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBSixHQUFpQixHQUF4QixHQUE4QixFQUFFLFdBQVcsR0FBWCxFQUFoQyxDQUFUO0dBQXJDOzs7Ozs7QUE4QkEsV0FBUyxXQUFULENBQXFCLFNBQXJCLEVBQWdDLE9BQWhDLEVBQXlDO0FBQ3ZDLFFBQUksT0FBTyxFQUFQLENBRG1DO0FBRXZDLFFBQUksWUFBWSxFQUFFLGtCQUFGLENBQXFCLElBQXJCLEVBQTJCLENBQUMsRUFBRSxVQUFGLENBQWEsUUFBYixDQUFELENBQTNCLEVBQXFELEVBQUUsY0FBRixDQUFpQixJQUFqQixDQUFyRCxDQUFaLENBRm1DO0FBR3ZDLFFBQUksT0FBTyxFQUFFLE9BQUYsQ0FBVSxDQUFDLEVBQUUsbUJBQUYsQ0FBc0IsRUFBRSxjQUFGLENBQWlCLFNBQWpCLEVBQTRCLENBQUMsS0FB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QTlCLENBdkJpQztPQUFyQjs7QUEwQnJCLGFBQU8sT0FBUCxHQUFpQixRQUFRLFNBQVIsQ0FBakIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90b29scy9idWlsZC1leHRlcm5hbC1oZWxwZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIF9nZW5lcmF0aW9uID0gcmVxdWlyZShcIi4uL2dlbmVyYXRpb25cIik7XG5cbnZhciBfZ2VuZXJhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZW5lcmF0aW9uKTtcblxudmFyIF9tZXNzYWdlcyA9IHJlcXVpcmUoXCIuLi9tZXNzYWdlc1wiKTtcblxudmFyIG1lc3NhZ2VzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX21lc3NhZ2VzKTtcblxudmFyIF91dGlsID0gcmVxdWlyZShcIi4uL3V0aWxcIik7XG5cbnZhciB1dGlsID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3V0aWwpO1xuXG52YXIgX3RyYW5zZm9ybWF0aW9uRmlsZSA9IHJlcXVpcmUoXCIuLi90cmFuc2Zvcm1hdGlvbi9maWxlXCIpO1xuXG52YXIgX3RyYW5zZm9ybWF0aW9uRmlsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1hdGlvbkZpbGUpO1xuXG52YXIgX2xvZGFzaENvbGxlY3Rpb25FYWNoID0gcmVxdWlyZShcImxvZGFzaC9jb2xsZWN0aW9uL2VhY2hcIik7XG5cbnZhciBfbG9kYXNoQ29sbGVjdGlvbkVhY2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoQ29sbGVjdGlvbkVhY2gpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gYnVpbGRHbG9iYWwobmFtZXNwYWNlLCBidWlsZGVyKSB7XG4gIHZhciBib2R5ID0gW107XG4gIHZhciBjb250YWluZXIgPSB0LmZ1bmN0aW9uRXhwcmVzc2lvbihudWxsLCBbdC5pZGVudGlmaWVyKFwiZ2xvYmFsXCIpXSwgdC5ibG9ja1N0YXRlbWVudChib2R5KSk7XG4gIHZhciB0cmVlID0gdC5wcm9ncmFtKFt0LmV4cHJlc3Npb25TdGF0ZW1lbnQodC5jYWxsRXhwcmVzc2lvbihjb250YWluZXIsIFt1dGlsLnRlbXBsYXRlKFwiaGVscGVyLXNlbGYtZ2xvYmFsXCIpXSkpXSk7XG5cbiAgYm9keS5wdXNoKHQudmFyaWFibGVEZWNsYXJhdGlvbihcInZhclwiLCBbdC52YXJpYWJsZURlY2xhcmF0b3IobmFtZXNwYWNlLCB0LmFzc2lnbm1lbnRFeHByZXNzaW9uKFwiPVwiLCB0Lm1lbWJlckV4cHJlc3Npb24odC5pZGVudGlmaWVyKFwiZ2xvYmFsXCIpLCBuYW1lc3BhY2UpLCB0Lm9iamVjdEV4cHJlc3Npb24oW10pKSldKSk7XG5cbiAgYnVpbGRlcihib2R5KTtcblxuICByZXR1cm4gdHJlZTtcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBidWlsZFVtZChuYW1lc3BhY2UsIGJ1aWxkZXIpIHtcbiAgdmFyIGJvZHkgPSBbXTtcbiAgYm9keS5wdXNoKHQudmFyaWFibGVEZWNsYXJhdGlvbihcInZhclwiLCBbdC52YXJpYWJsZURlY2xhcmF0b3IobmFtZXNwYWNlLCB0LmlkZW50aWZpZXIoXCJnbG9iYWxcIikpXSkpO1xuXG4gIGJ1aWxkZXIoYm9keSk7XG5cbiAgdmFyIGNvbnRhaW5lciA9IHV0aWwudGVtcGxhdGUoXCJ1bWQtY29tbW9uanMtc3RyaWN0XCIsIHtcbiAgICBGQUNUT1JZX1BBUkFNRVRFUlM6IHQuaWRlbnRpZmllcihcImdsb2JhbFwiKSxcbiAgICBCUk9XU0VSX0FSR1VNRU5UUzogdC5hc3NpZ25tZW50RXhwcmVzc2lvbihcIj1cIiwgdC5tZW1iZXJFeHByZXNzaW9uKHQuaWRlbnRpZmllcihcInJvb3RcIiksIG5hbWVzcGFjZSksIHQub2JqZWN0RXhwcmVzc2lvbih7fSkpLFxuICAgIENPTU1PTl9BUkdVTUVOVFM6IHQuaWRlbnRpZmllcihcImV4cG9ydHNcIiksXG4gICAgQU1EX0FSR1VNRU5UUzogdC5hcnJheUV4cHJlc3Npb24oW3QubGl0ZXJhbChcImV4cG9ydHNcIildKSxcbiAgICBGQUNUT1JZX0JPRFk6IGJvZHksXG4gICAgVU1EX1JPT1Q6IHQuaWRlbnRpZmllcihcInRoaXNcIilcbiAgfSk7XG4gIHJldHVybiB0LnByb2dyYW0oW2NvbnRhaW5lcl0pO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIGJ1aWxkVmFyKG5hbWVzcGFjZSwgYnVpbGRlcikge1xuICB2YXIgYm9keSA9IFtdO1xuICBib2R5LnB1c2godC52YXJpYWJsZURlY2xhcmF0aW9uKFwidmFyXCIsIFt0LnZhcmlhYmxlRGVjbGFyYXRvcihuYW1lc3BhY2UsIHQub2JqZWN0RXhwcmVzc2lvbih7fSkpXSkpO1xuICBidWlsZGVyKGJvZHkpO1xuICByZXR1cm4gdC5wcm9ncmFtKGJvZHkpO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIGJ1aWxkSGVscGVycyhib2R5LCBuYW1lc3BhY2UsIHdoaXRlbGlzdCkge1xuICBfbG9kYXNoQ29sbGVjdGlvbkVhY2gyW1wiZGVmYXVsdFwiXShfdHJhbnNmb3JtYXRpb25GaWxlMltcImRlZmF1bHRcIl0uaGVscGVycywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAod2hpdGVsaXN0ICYmIHdoaXRlbGlzdC5pbmRleE9mKG5hbWUpID09PSAtMSkgcmV0dXJuO1xuXG4gICAgdmFyIGtleSA9IHQuaWRlbnRpZmllcih0LnRvSWRlbnRpZmllcihuYW1lKSk7XG4gICAgYm9keS5wdXNoKHQuZXhwcmVzc2lvblN0YXRlbWVudCh0LmFzc2lnbm1lbnRFeHByZXNzaW9uKFwiPVwiLCB0Lm1lbWJlckV4cHJlc3Npb24obmFtZXNwYWNlLCBrZXkpLCB1dGlsLnRlbXBsYXRlKFwiaGVscGVyLVwiICsgbmFtZSkpKSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKHdoaXRlbGlzdCkge1xuICB2YXIgb3V0cHV0VHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFwiZ2xvYmFsXCIgOiBhcmd1bWVudHNbMV07XG5cbiAgdmFyIG5hbWVzcGFjZSA9IHQuaWRlbnRpZmllcihcImJhYmVsSGVscGVyc1wiKTtcblxuICB2YXIgYnVpbGRlciA9IGZ1bmN0aW9uIGJ1aWxkZXIoYm9keSkge1xuICAgIHJldHVybiBidWlsZEhlbHBlcnMoYm9keSwgbmFtZXNwYWNlLCB3aGl0ZWxpc3QpO1xuICB9O1xuXG4gIHZhciB0cmVlO1xuXG4gIHZhciBidWlsZCA9ICh7XG4gICAgZ2xvYmFsOiBidWlsZEdsb2JhbCxcbiAgICB1bWQ6IGJ1aWxkVW1kLFxuICAgIFwidmFyXCI6IGJ1aWxkVmFyXG4gIH0pW291dHB1dFR5cGVdO1xuXG4gIGlmIChidWlsZCkge1xuICAgIHRyZWUgPSBidWlsZChuYW1lc3BhY2UsIGJ1aWxkZXIpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlcy5nZXQoXCJ1bnN1cHBvcnRlZE91dHB1dFR5cGVcIiwgb3V0cHV0VHlwZSkpO1xuICB9XG5cbiAgcmV0dXJuIF9nZW5lcmF0aW9uMltcImRlZmF1bHRcIl0odHJlZSkuY29kZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
