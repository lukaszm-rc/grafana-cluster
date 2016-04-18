/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _util, util, MESSAGES;

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

  /**
   * Get a message with $0 placeholders replaced by arguments.
   */

  function get(key) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var msg = MESSAGES[key];
    if (!msg) throw new ReferenceError("Unknown message " + JSON.stringify(key));

    // stringify args
    args = parseArgs(args);

    // replace $0 placeholders with args
    return msg.replace(/\$(\d+)/g, function (str, i) {
      return args[--i];
    });
  }

  /**
   * Stingify arguments to be used inside messages.
   */

  function parseArgs(args) {
    return args.map(function (val) {
      if (val != null && val.inspect) {
        return val.inspect();
      } else {
        try {
          return JSON.stringify(val) || val + "";
        } catch (e) {
          return util.inspect(val);
        }
      }
    });
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.get = get;
      exports.parseArgs = parseArgs;_util = require("util");
      util = _interopRequireWildcard(_util);
      MESSAGES = {
        tailCallReassignmentDeopt: "Function reference has been reassigned, so it will probably be dereferenced, therefore we can't optimise this with confidence",
        JSXNamespacedTags: "Namespace tags are not supported. ReactJSX is not XML.",
        classesIllegalBareSuper: "Illegal use of bare super",
        classesIllegalSuperCall: "Direct super call is illegal in non-constructor, use super.$1() instead",
        scopeDuplicateDeclaration: "Duplicate declaration $1",
        settersNoRest: "Setters aren't allowed to have a rest",
        noAssignmentsInForHead: "No assignments allowed in for-in/of head",
        expectedMemberExpressionOrIdentifier: "Expected type MemberExpression or Identifier",
        invalidParentForThisNode: "We don't know how to handle this node within the current parent - please open an issue",
        readOnly: "$1 is read-only",
        unknownForHead: "Unknown node type $1 in ForStatement",
        didYouMean: "Did you mean $1?",
        codeGeneratorDeopt: "Note: The code generator has deoptimised the styling of $1 as it exceeds the max of $2.",
        missingTemplatesDirectory: "no templates directory - this is most likely the result of a broken `npm publish`. Please report to https://github.com/babel/babel/issues",
        unsupportedOutputType: "Unsupported output type $1",
        illegalMethodName: "Illegal method name $1",
        lostTrackNodePath: "We lost track of this node's position, likely because the AST was directly manipulated",

        modulesIllegalExportName: "Illegal export $1",
        modulesDuplicateDeclarations: "Duplicate module declarations with the same source but in different scopes",

        undeclaredVariable: "Reference to undeclared variable $1",
        undeclaredVariableType: "Referencing a type alias outside of a type annotation",
        undeclaredVariableSuggestion: "Reference to undeclared variable $1 - did you mean $2?",

        traverseNeedsParent: "You must pass a scope and parentPath unless traversing a Program/File got a $1 node",
        traverseVerifyRootFunction: "You passed `traverse()` a function when it expected a visitor object, are you sure you didn't mean `{ enter: Function }`?",
        traverseVerifyVisitorProperty: "You passed `traverse()` a visitor object with the property $1 that has the invalid property $2",
        traverseVerifyNodeType: "You gave us a visitor for the node type $1 but it's not a valid type",

        pluginIllegalKind: "Illegal kind $1 for plugin $2",
        pluginIllegalPosition: "Illegal position $1 for plugin $2",
        pluginKeyCollision: "The plugin $1 collides with another of the same name",
        pluginNotTransformer: "The plugin $1 didn't export a Plugin instance",
        pluginUnknown: "Unknown plugin $1",

        pluginNotFile: "Plugin $1 is resolving to a different Babel version than what is performing the transformation.",

        pluginInvalidProperty: "Plugin $1 provided an invalid property of $2.",
        pluginInvalidPropertyVisitor: "Define your visitor methods inside a `visitor` property like so:\n\n  new Plugin(\"foobar\", {\n    visitor: {\n      // define your visitor methods here!\n    }\n  });\n"
      };


      exports.MESSAGES = MESSAGES;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvbWVzc2FnZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7Ozs7QUEyREEsV0FBUyxHQUFULENBQWEsR0FBYixFQUFrQjtBQUNoQixTQUFLLElBQUksT0FBTyxVQUFVLE1BQVYsRUFBa0IsT0FBTyxNQUFNLE9BQU8sQ0FBUCxHQUFXLE9BQU8sQ0FBUCxHQUFXLENBQXRCLENBQWIsRUFBdUMsT0FBTyxDQUFQLEVBQVUsT0FBTyxJQUFQLEVBQWEsTUFBaEcsRUFBd0c7QUFDdEcsV0FBSyxPQUFPLENBQVAsQ0FBTCxHQUFpQixVQUFVLElBQVYsQ0FBakIsQ0FEc0c7S0FBeEc7O0FBSUEsUUFBSSxNQUFNLFNBQVMsR0FBVCxDQUFOLENBTFk7QUFNaEIsUUFBSSxDQUFDLEdBQUQsRUFBTSxNQUFNLElBQUksY0FBSixDQUFtQixxQkFBcUIsS0FBSyxTQUFMLENBQWUsR0FBZixDQUFyQixDQUF6QixDQUFWOzs7QUFOZ0IsUUFTaEIsR0FBTyxVQUFVLElBQVYsQ0FBUDs7O0FBVGdCLFdBWVQsSUFBSSxPQUFKLENBQVksVUFBWixFQUF3QixVQUFVLEdBQVYsRUFBZSxDQUFmLEVBQWtCO0FBQy9DLGFBQU8sS0FBSyxFQUFFLENBQUYsQ0FBWixDQUQrQztLQUFsQixDQUEvQixDQVpnQjtHQUFsQjs7Ozs7O0FBcUJBLFdBQVMsU0FBVCxDQUFtQixJQUFuQixFQUF5QjtBQUN2QixXQUFPLEtBQUssR0FBTCxDQUFTLFVBQVUsR0FBVixFQUFlO0FBQzdCLFVBQUksT0FBTyxJQUFQLElBQWUsSUFBSSxPQUFKLEVBQWE7QUFDOUIsZUFBTyxJQUFJLE9BQUosRUFBUCxDQUQ4QjtPQUFoQyxNQUVPO0FBQ0wsWUFBSTtBQUNGLGlCQUFPLEtBQUssU0FBTCxDQUFlLEdBQWYsS0FBdUIsTUFBTSxFQUFOLENBRDVCO1NBQUosQ0FFRSxPQUFPLENBQVAsRUFBVTtBQUNWLGlCQUFPLEtBQUssT0FBTCxDQUFhLEdBQWIsQ0FBUCxDQURVO1NBQVY7T0FMSjtLQURjLENBQWhCLENBRHVCO0dBQXpCOzs7O0FBckZBLGNBQVEsVUFBUixHQUFxQixJQUFyQjtBQUNBLGNBQVEsR0FBUixHQUFjLEdBQWQ7QUFDQSxjQUFRLFNBQVIsR0FBb0IsU0FBcEIsQ0FLSSxRQUFRLFFBQVEsTUFBUjtBQUVSLGFBQU8sd0JBQXdCLEtBQXhCO0FBT1AsaUJBQVc7QUFDYixtQ0FBMkIsK0hBQTNCO0FBQ0EsMkJBQW1CLHdEQUFuQjtBQUNBLGlDQUF5QiwyQkFBekI7QUFDQSxpQ0FBeUIseUVBQXpCO0FBQ0EsbUNBQTJCLDBCQUEzQjtBQUNBLHVCQUFlLHVDQUFmO0FBQ0EsZ0NBQXdCLDBDQUF4QjtBQUNBLDhDQUFzQyw4Q0FBdEM7QUFDQSxrQ0FBMEIsd0ZBQTFCO0FBQ0Esa0JBQVUsaUJBQVY7QUFDQSx3QkFBZ0Isc0NBQWhCO0FBQ0Esb0JBQVksa0JBQVo7QUFDQSw0QkFBb0IseUZBQXBCO0FBQ0EsbUNBQTJCLDJJQUEzQjtBQUNBLCtCQUF1Qiw0QkFBdkI7QUFDQSwyQkFBbUIsd0JBQW5CO0FBQ0EsMkJBQW1CLHdGQUFuQjs7QUFFQSxrQ0FBMEIsbUJBQTFCO0FBQ0Esc0NBQThCLDRFQUE5Qjs7QUFFQSw0QkFBb0IscUNBQXBCO0FBQ0EsZ0NBQXdCLHVEQUF4QjtBQUNBLHNDQUE4Qix3REFBOUI7O0FBRUEsNkJBQXFCLHFGQUFyQjtBQUNBLG9DQUE0QiwySEFBNUI7QUFDQSx1Q0FBK0IsZ0dBQS9CO0FBQ0EsZ0NBQXdCLHNFQUF4Qjs7QUFFQSwyQkFBbUIsK0JBQW5CO0FBQ0EsK0JBQXVCLG1DQUF2QjtBQUNBLDRCQUFvQixzREFBcEI7QUFDQSw4QkFBc0IsK0NBQXRCO0FBQ0EsdUJBQWUsbUJBQWY7O0FBRUEsdUJBQWUsaUdBQWY7O0FBRUEsK0JBQXVCLCtDQUF2QjtBQUNBLHNDQUE4Qiw0S0FBOUI7Ozs7QUFHRixjQUFRLFFBQVIsR0FBbUIsUUFBbkIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi9tZXNzYWdlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZ2V0ID0gZ2V0O1xuZXhwb3J0cy5wYXJzZUFyZ3MgPSBwYXJzZUFyZ3M7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xuXG52YXIgdXRpbCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlsKTtcblxuLyoqXG4gKiBNYXBwaW5nIG9mIG1lc3NhZ2VzIHRvIGJlIHVzZWQgaW4gQmFiZWwuXG4gKiBNZXNzYWdlcyBjYW4gaW5jbHVkZSAkMC1zdHlsZSBwbGFjZWhvbGRlcnMuXG4gKi9cblxudmFyIE1FU1NBR0VTID0ge1xuICB0YWlsQ2FsbFJlYXNzaWdubWVudERlb3B0OiBcIkZ1bmN0aW9uIHJlZmVyZW5jZSBoYXMgYmVlbiByZWFzc2lnbmVkLCBzbyBpdCB3aWxsIHByb2JhYmx5IGJlIGRlcmVmZXJlbmNlZCwgdGhlcmVmb3JlIHdlIGNhbid0IG9wdGltaXNlIHRoaXMgd2l0aCBjb25maWRlbmNlXCIsXG4gIEpTWE5hbWVzcGFjZWRUYWdzOiBcIk5hbWVzcGFjZSB0YWdzIGFyZSBub3Qgc3VwcG9ydGVkLiBSZWFjdEpTWCBpcyBub3QgWE1MLlwiLFxuICBjbGFzc2VzSWxsZWdhbEJhcmVTdXBlcjogXCJJbGxlZ2FsIHVzZSBvZiBiYXJlIHN1cGVyXCIsXG4gIGNsYXNzZXNJbGxlZ2FsU3VwZXJDYWxsOiBcIkRpcmVjdCBzdXBlciBjYWxsIGlzIGlsbGVnYWwgaW4gbm9uLWNvbnN0cnVjdG9yLCB1c2Ugc3VwZXIuJDEoKSBpbnN0ZWFkXCIsXG4gIHNjb3BlRHVwbGljYXRlRGVjbGFyYXRpb246IFwiRHVwbGljYXRlIGRlY2xhcmF0aW9uICQxXCIsXG4gIHNldHRlcnNOb1Jlc3Q6IFwiU2V0dGVycyBhcmVuJ3QgYWxsb3dlZCB0byBoYXZlIGEgcmVzdFwiLFxuICBub0Fzc2lnbm1lbnRzSW5Gb3JIZWFkOiBcIk5vIGFzc2lnbm1lbnRzIGFsbG93ZWQgaW4gZm9yLWluL29mIGhlYWRcIixcbiAgZXhwZWN0ZWRNZW1iZXJFeHByZXNzaW9uT3JJZGVudGlmaWVyOiBcIkV4cGVjdGVkIHR5cGUgTWVtYmVyRXhwcmVzc2lvbiBvciBJZGVudGlmaWVyXCIsXG4gIGludmFsaWRQYXJlbnRGb3JUaGlzTm9kZTogXCJXZSBkb24ndCBrbm93IGhvdyB0byBoYW5kbGUgdGhpcyBub2RlIHdpdGhpbiB0aGUgY3VycmVudCBwYXJlbnQgLSBwbGVhc2Ugb3BlbiBhbiBpc3N1ZVwiLFxuICByZWFkT25seTogXCIkMSBpcyByZWFkLW9ubHlcIixcbiAgdW5rbm93bkZvckhlYWQ6IFwiVW5rbm93biBub2RlIHR5cGUgJDEgaW4gRm9yU3RhdGVtZW50XCIsXG4gIGRpZFlvdU1lYW46IFwiRGlkIHlvdSBtZWFuICQxP1wiLFxuICBjb2RlR2VuZXJhdG9yRGVvcHQ6IFwiTm90ZTogVGhlIGNvZGUgZ2VuZXJhdG9yIGhhcyBkZW9wdGltaXNlZCB0aGUgc3R5bGluZyBvZiAkMSBhcyBpdCBleGNlZWRzIHRoZSBtYXggb2YgJDIuXCIsXG4gIG1pc3NpbmdUZW1wbGF0ZXNEaXJlY3Rvcnk6IFwibm8gdGVtcGxhdGVzIGRpcmVjdG9yeSAtIHRoaXMgaXMgbW9zdCBsaWtlbHkgdGhlIHJlc3VsdCBvZiBhIGJyb2tlbiBgbnBtIHB1Ymxpc2hgLiBQbGVhc2UgcmVwb3J0IHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXNcIixcbiAgdW5zdXBwb3J0ZWRPdXRwdXRUeXBlOiBcIlVuc3VwcG9ydGVkIG91dHB1dCB0eXBlICQxXCIsXG4gIGlsbGVnYWxNZXRob2ROYW1lOiBcIklsbGVnYWwgbWV0aG9kIG5hbWUgJDFcIixcbiAgbG9zdFRyYWNrTm9kZVBhdGg6IFwiV2UgbG9zdCB0cmFjayBvZiB0aGlzIG5vZGUncyBwb3NpdGlvbiwgbGlrZWx5IGJlY2F1c2UgdGhlIEFTVCB3YXMgZGlyZWN0bHkgbWFuaXB1bGF0ZWRcIixcblxuICBtb2R1bGVzSWxsZWdhbEV4cG9ydE5hbWU6IFwiSWxsZWdhbCBleHBvcnQgJDFcIixcbiAgbW9kdWxlc0R1cGxpY2F0ZURlY2xhcmF0aW9uczogXCJEdXBsaWNhdGUgbW9kdWxlIGRlY2xhcmF0aW9ucyB3aXRoIHRoZSBzYW1lIHNvdXJjZSBidXQgaW4gZGlmZmVyZW50IHNjb3Blc1wiLFxuXG4gIHVuZGVjbGFyZWRWYXJpYWJsZTogXCJSZWZlcmVuY2UgdG8gdW5kZWNsYXJlZCB2YXJpYWJsZSAkMVwiLFxuICB1bmRlY2xhcmVkVmFyaWFibGVUeXBlOiBcIlJlZmVyZW5jaW5nIGEgdHlwZSBhbGlhcyBvdXRzaWRlIG9mIGEgdHlwZSBhbm5vdGF0aW9uXCIsXG4gIHVuZGVjbGFyZWRWYXJpYWJsZVN1Z2dlc3Rpb246IFwiUmVmZXJlbmNlIHRvIHVuZGVjbGFyZWQgdmFyaWFibGUgJDEgLSBkaWQgeW91IG1lYW4gJDI/XCIsXG5cbiAgdHJhdmVyc2VOZWVkc1BhcmVudDogXCJZb3UgbXVzdCBwYXNzIGEgc2NvcGUgYW5kIHBhcmVudFBhdGggdW5sZXNzIHRyYXZlcnNpbmcgYSBQcm9ncmFtL0ZpbGUgZ290IGEgJDEgbm9kZVwiLFxuICB0cmF2ZXJzZVZlcmlmeVJvb3RGdW5jdGlvbjogXCJZb3UgcGFzc2VkIGB0cmF2ZXJzZSgpYCBhIGZ1bmN0aW9uIHdoZW4gaXQgZXhwZWN0ZWQgYSB2aXNpdG9yIG9iamVjdCwgYXJlIHlvdSBzdXJlIHlvdSBkaWRuJ3QgbWVhbiBgeyBlbnRlcjogRnVuY3Rpb24gfWA/XCIsXG4gIHRyYXZlcnNlVmVyaWZ5VmlzaXRvclByb3BlcnR5OiBcIllvdSBwYXNzZWQgYHRyYXZlcnNlKClgIGEgdmlzaXRvciBvYmplY3Qgd2l0aCB0aGUgcHJvcGVydHkgJDEgdGhhdCBoYXMgdGhlIGludmFsaWQgcHJvcGVydHkgJDJcIixcbiAgdHJhdmVyc2VWZXJpZnlOb2RlVHlwZTogXCJZb3UgZ2F2ZSB1cyBhIHZpc2l0b3IgZm9yIHRoZSBub2RlIHR5cGUgJDEgYnV0IGl0J3Mgbm90IGEgdmFsaWQgdHlwZVwiLFxuXG4gIHBsdWdpbklsbGVnYWxLaW5kOiBcIklsbGVnYWwga2luZCAkMSBmb3IgcGx1Z2luICQyXCIsXG4gIHBsdWdpbklsbGVnYWxQb3NpdGlvbjogXCJJbGxlZ2FsIHBvc2l0aW9uICQxIGZvciBwbHVnaW4gJDJcIixcbiAgcGx1Z2luS2V5Q29sbGlzaW9uOiBcIlRoZSBwbHVnaW4gJDEgY29sbGlkZXMgd2l0aCBhbm90aGVyIG9mIHRoZSBzYW1lIG5hbWVcIixcbiAgcGx1Z2luTm90VHJhbnNmb3JtZXI6IFwiVGhlIHBsdWdpbiAkMSBkaWRuJ3QgZXhwb3J0IGEgUGx1Z2luIGluc3RhbmNlXCIsXG4gIHBsdWdpblVua25vd246IFwiVW5rbm93biBwbHVnaW4gJDFcIixcblxuICBwbHVnaW5Ob3RGaWxlOiBcIlBsdWdpbiAkMSBpcyByZXNvbHZpbmcgdG8gYSBkaWZmZXJlbnQgQmFiZWwgdmVyc2lvbiB0aGFuIHdoYXQgaXMgcGVyZm9ybWluZyB0aGUgdHJhbnNmb3JtYXRpb24uXCIsXG5cbiAgcGx1Z2luSW52YWxpZFByb3BlcnR5OiBcIlBsdWdpbiAkMSBwcm92aWRlZCBhbiBpbnZhbGlkIHByb3BlcnR5IG9mICQyLlwiLFxuICBwbHVnaW5JbnZhbGlkUHJvcGVydHlWaXNpdG9yOiBcIkRlZmluZSB5b3VyIHZpc2l0b3IgbWV0aG9kcyBpbnNpZGUgYSBgdmlzaXRvcmAgcHJvcGVydHkgbGlrZSBzbzpcXG5cXG4gIG5ldyBQbHVnaW4oXFxcImZvb2JhclxcXCIsIHtcXG4gICAgdmlzaXRvcjoge1xcbiAgICAgIC8vIGRlZmluZSB5b3VyIHZpc2l0b3IgbWV0aG9kcyBoZXJlIVxcbiAgICB9XFxuICB9KTtcXG5cIlxufTtcblxuZXhwb3J0cy5NRVNTQUdFUyA9IE1FU1NBR0VTO1xuLyoqXG4gKiBHZXQgYSBtZXNzYWdlIHdpdGggJDAgcGxhY2Vob2xkZXJzIHJlcGxhY2VkIGJ5IGFyZ3VtZW50cy5cbiAqL1xuXG5mdW5jdGlvbiBnZXQoa2V5KSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIG1zZyA9IE1FU1NBR0VTW2tleV07XG4gIGlmICghbXNnKSB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJVbmtub3duIG1lc3NhZ2UgXCIgKyBKU09OLnN0cmluZ2lmeShrZXkpKTtcblxuICAvLyBzdHJpbmdpZnkgYXJnc1xuICBhcmdzID0gcGFyc2VBcmdzKGFyZ3MpO1xuXG4gIC8vIHJlcGxhY2UgJDAgcGxhY2Vob2xkZXJzIHdpdGggYXJnc1xuICByZXR1cm4gbXNnLnJlcGxhY2UoL1xcJChcXGQrKS9nLCBmdW5jdGlvbiAoc3RyLCBpKSB7XG4gICAgcmV0dXJuIGFyZ3NbLS1pXTtcbiAgfSk7XG59XG5cbi8qKlxuICogU3RpbmdpZnkgYXJndW1lbnRzIHRvIGJlIHVzZWQgaW5zaWRlIG1lc3NhZ2VzLlxuICovXG5cbmZ1bmN0aW9uIHBhcnNlQXJncyhhcmdzKSB7XG4gIHJldHVybiBhcmdzLm1hcChmdW5jdGlvbiAodmFsKSB7XG4gICAgaWYgKHZhbCAhPSBudWxsICYmIHZhbC5pbnNwZWN0KSB7XG4gICAgICByZXR1cm4gdmFsLmluc3BlY3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbCkgfHwgdmFsICsgXCJcIjtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHV0aWwuaW5zcGVjdCh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
