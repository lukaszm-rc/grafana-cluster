/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports["default"] = {
        //- builtin-prepass
        "minification.constantFolding": require("babel-plugin-constant-folding"),

        //- builtin-pre
        strict: require("./other/strict"),
        eval: require("babel-plugin-eval"),
        _validation: require("./internal/validation"),
        _hoistDirectives: require("./internal/hoist-directives"),
        "minification.removeDebugger": require("babel-plugin-remove-debugger"),
        "minification.removeConsole": require("babel-plugin-remove-console"),
        "utility.inlineEnvironmentVariables": require("babel-plugin-inline-environment-variables"),
        "minification.deadCodeElimination": require("babel-plugin-dead-code-elimination"),
        _modules: require("./internal/modules"),
        "react.displayName": require("babel-plugin-react-display-name"),
        "es6.spec.modules": require("./es6/spec.modules"),
        "es6.spec.arrowFunctions": require("./es6/spec.arrow-functions"),
        "es6.spec.templateLiterals": require("./es6/spec.template-literals"),
        "es6.templateLiterals": require("./es6/template-literals"),
        "es6.literals": require("./es6/literals"),
        "validation.undeclaredVariableCheck": require("babel-plugin-undeclared-variables-check"),

        //- builtin-basic
        // this is where the bulk of the ES6 transformations take place, none of them require traversal state
        // so they can all be concatenated together for performance
        "spec.functionName": require("./spec/function-name"),
        "es7.classProperties": require("./es7/class-properties"),
        "es7.trailingFunctionCommas": require("./es7/trailing-function-commas"),
        "es7.asyncFunctions": require("./es7/async-functions"),
        "es7.decorators": require("./es7/decorators"),
        "validation.react": require("./validation/react"),
        "es6.arrowFunctions": require("./es6/arrow-functions"),
        "spec.blockScopedFunctions": require("./spec/block-scoped-functions"),
        "optimisation.react.constantElements": require("babel-plugin-react-constant-elements"),
        "optimisation.react.inlineElements": require("./optimisation/react.inline-elements"),
        "es7.comprehensions": require("./es7/comprehensions"),
        "es6.classes": require("./es6/classes"),
        asyncToGenerator: require("./other/async-to-generator"),
        bluebirdCoroutines: require("./other/bluebird-coroutines"),
        "es6.objectSuper": require("./es6/object-super"),
        "es7.objectRestSpread": require("./es7/object-rest-spread"),
        "es7.exponentiationOperator": require("./es7/exponentiation-operator"),
        "es5.properties.mutators": require("./es5/properties.mutators"),
        "es6.properties.shorthand": require("./es6/properties.shorthand"),
        "es6.properties.computed": require("./es6/properties.computed"),
        "optimisation.flow.forOf": require("./optimisation/flow.for-of"),
        "es6.forOf": require("./es6/for-of"),
        "es6.regex.sticky": require("./es6/regex.sticky"),
        "es6.regex.unicode": require("./es6/regex.unicode"),
        "es6.constants": require("./es6/constants"),
        "es7.exportExtensions": require("./es7/export-extensions"),
        "spec.protoToAssign": require("babel-plugin-proto-to-assign"),
        "es7.doExpressions": require("./es7/do-expressions"),
        "es6.spec.symbols": require("./es6/spec.symbols"),
        "es7.functionBind": require("./es7/function-bind"),
        "spec.undefinedToVoid": require("babel-plugin-undefined-to-void"),

        //- builtin-advanced
        "es6.spread": require("./es6/spread"),
        "es6.parameters": require("./es6/parameters"),
        "es6.destructuring": require("./es6/destructuring"),
        "es6.blockScoping": require("./es6/block-scoping"),
        "es6.spec.blockScoping": require("./es6/spec.block-scoping"),
        reactCompat: require("./other/react-compat"),
        react: require("./other/react"),
        regenerator: require("./other/regenerator"),

        // es6 syntax transformation is **forbidden** past this point since regenerator will chuck a massive
        // hissy fit

        //- builtin-modules
        runtime: require("babel-plugin-runtime"),
        "es6.modules": require("./es6/modules"),
        _moduleFormatter: require("./internal/module-formatter"),

        //- builtin-trailing
        // these clean up the output and do finishing up transformations, it's important to note that by this
        // stage you can't import any new modules or insert new ES6 as all those transformers have already
        // been ran
        "es6.tailCall": require("./es6/tail-call"),
        _shadowFunctions: require("./internal/shadow-functions"),
        "es3.propertyLiterals": require("./es3/property-literals"),
        "es3.memberExpressionLiterals": require("./es3/member-expression-literals"),
        "minification.memberExpressionLiterals": require("babel-plugin-member-expression-literals"),
        "minification.propertyLiterals": require("babel-plugin-property-literals"),
        _blockHoist: require("./internal/block-hoist"),
        jscript: require("babel-plugin-jscript"),
        flow: require("./other/flow"),
        "optimisation.modules.system": require("./optimisation/modules.system")
      };
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7QUFFQSxjQUFRLFVBQVIsR0FBcUIsSUFBckI7QUFDQSxjQUFRLFNBQVIsSUFBcUI7O0FBRW5CLHdDQUFnQyxRQUFRLCtCQUFSLENBQWhDOzs7QUFHQSxnQkFBUSxRQUFRLGdCQUFSLENBQVI7QUFDQSxjQUFNLFFBQVEsbUJBQVIsQ0FBTjtBQUNBLHFCQUFhLFFBQVEsdUJBQVIsQ0FBYjtBQUNBLDBCQUFrQixRQUFRLDZCQUFSLENBQWxCO0FBQ0EsdUNBQStCLFFBQVEsOEJBQVIsQ0FBL0I7QUFDQSxzQ0FBOEIsUUFBUSw2QkFBUixDQUE5QjtBQUNBLDhDQUFzQyxRQUFRLDJDQUFSLENBQXRDO0FBQ0EsNENBQW9DLFFBQVEsb0NBQVIsQ0FBcEM7QUFDQSxrQkFBVSxRQUFRLG9CQUFSLENBQVY7QUFDQSw2QkFBcUIsUUFBUSxpQ0FBUixDQUFyQjtBQUNBLDRCQUFvQixRQUFRLG9CQUFSLENBQXBCO0FBQ0EsbUNBQTJCLFFBQVEsNEJBQVIsQ0FBM0I7QUFDQSxxQ0FBNkIsUUFBUSw4QkFBUixDQUE3QjtBQUNBLGdDQUF3QixRQUFRLHlCQUFSLENBQXhCO0FBQ0Esd0JBQWdCLFFBQVEsZ0JBQVIsQ0FBaEI7QUFDQSw4Q0FBc0MsUUFBUSx5Q0FBUixDQUF0Qzs7Ozs7QUFLQSw2QkFBcUIsUUFBUSxzQkFBUixDQUFyQjtBQUNBLCtCQUF1QixRQUFRLHdCQUFSLENBQXZCO0FBQ0Esc0NBQThCLFFBQVEsZ0NBQVIsQ0FBOUI7QUFDQSw4QkFBc0IsUUFBUSx1QkFBUixDQUF0QjtBQUNBLDBCQUFrQixRQUFRLGtCQUFSLENBQWxCO0FBQ0EsNEJBQW9CLFFBQVEsb0JBQVIsQ0FBcEI7QUFDQSw4QkFBc0IsUUFBUSx1QkFBUixDQUF0QjtBQUNBLHFDQUE2QixRQUFRLCtCQUFSLENBQTdCO0FBQ0EsK0NBQXVDLFFBQVEsc0NBQVIsQ0FBdkM7QUFDQSw2Q0FBcUMsUUFBUSxzQ0FBUixDQUFyQztBQUNBLDhCQUFzQixRQUFRLHNCQUFSLENBQXRCO0FBQ0EsdUJBQWUsUUFBUSxlQUFSLENBQWY7QUFDQSwwQkFBa0IsUUFBUSw0QkFBUixDQUFsQjtBQUNBLDRCQUFvQixRQUFRLDZCQUFSLENBQXBCO0FBQ0EsMkJBQW1CLFFBQVEsb0JBQVIsQ0FBbkI7QUFDQSxnQ0FBd0IsUUFBUSwwQkFBUixDQUF4QjtBQUNBLHNDQUE4QixRQUFRLCtCQUFSLENBQTlCO0FBQ0EsbUNBQTJCLFFBQVEsMkJBQVIsQ0FBM0I7QUFDQSxvQ0FBNEIsUUFBUSw0QkFBUixDQUE1QjtBQUNBLG1DQUEyQixRQUFRLDJCQUFSLENBQTNCO0FBQ0EsbUNBQTJCLFFBQVEsNEJBQVIsQ0FBM0I7QUFDQSxxQkFBYSxRQUFRLGNBQVIsQ0FBYjtBQUNBLDRCQUFvQixRQUFRLG9CQUFSLENBQXBCO0FBQ0EsNkJBQXFCLFFBQVEscUJBQVIsQ0FBckI7QUFDQSx5QkFBaUIsUUFBUSxpQkFBUixDQUFqQjtBQUNBLGdDQUF3QixRQUFRLHlCQUFSLENBQXhCO0FBQ0EsOEJBQXNCLFFBQVEsOEJBQVIsQ0FBdEI7QUFDQSw2QkFBcUIsUUFBUSxzQkFBUixDQUFyQjtBQUNBLDRCQUFvQixRQUFRLG9CQUFSLENBQXBCO0FBQ0EsNEJBQW9CLFFBQVEscUJBQVIsQ0FBcEI7QUFDQSxnQ0FBd0IsUUFBUSxnQ0FBUixDQUF4Qjs7O0FBR0Esc0JBQWMsUUFBUSxjQUFSLENBQWQ7QUFDQSwwQkFBa0IsUUFBUSxrQkFBUixDQUFsQjtBQUNBLDZCQUFxQixRQUFRLHFCQUFSLENBQXJCO0FBQ0EsNEJBQW9CLFFBQVEscUJBQVIsQ0FBcEI7QUFDQSxpQ0FBeUIsUUFBUSwwQkFBUixDQUF6QjtBQUNBLHFCQUFhLFFBQVEsc0JBQVIsQ0FBYjtBQUNBLGVBQU8sUUFBUSxlQUFSLENBQVA7QUFDQSxxQkFBYSxRQUFRLHFCQUFSLENBQWI7Ozs7OztBQU1BLGlCQUFTLFFBQVEsc0JBQVIsQ0FBVDtBQUNBLHVCQUFlLFFBQVEsZUFBUixDQUFmO0FBQ0EsMEJBQWtCLFFBQVEsNkJBQVIsQ0FBbEI7Ozs7OztBQU1BLHdCQUFnQixRQUFRLGlCQUFSLENBQWhCO0FBQ0EsMEJBQWtCLFFBQVEsNkJBQVIsQ0FBbEI7QUFDQSxnQ0FBd0IsUUFBUSx5QkFBUixDQUF4QjtBQUNBLHdDQUFnQyxRQUFRLGtDQUFSLENBQWhDO0FBQ0EsaURBQXlDLFFBQVEseUNBQVIsQ0FBekM7QUFDQSx5Q0FBaUMsUUFBUSxnQ0FBUixDQUFqQztBQUNBLHFCQUFhLFFBQVEsd0JBQVIsQ0FBYjtBQUNBLGlCQUFTLFFBQVEsc0JBQVIsQ0FBVDtBQUNBLGNBQU0sUUFBUSxjQUFSLENBQU47QUFDQSx1Q0FBK0IsUUFBUSwrQkFBUixDQUEvQjtPQXhGRjtBQTBGQSxhQUFPLE9BQVAsR0FBaUIsUUFBUSxTQUFSLENBQWpCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB7XG4gIC8vLSBidWlsdGluLXByZXBhc3NcbiAgXCJtaW5pZmljYXRpb24uY29uc3RhbnRGb2xkaW5nXCI6IHJlcXVpcmUoXCJiYWJlbC1wbHVnaW4tY29uc3RhbnQtZm9sZGluZ1wiKSxcblxuICAvLy0gYnVpbHRpbi1wcmVcbiAgc3RyaWN0OiByZXF1aXJlKFwiLi9vdGhlci9zdHJpY3RcIiksXG4gIGV2YWw6IHJlcXVpcmUoXCJiYWJlbC1wbHVnaW4tZXZhbFwiKSxcbiAgX3ZhbGlkYXRpb246IHJlcXVpcmUoXCIuL2ludGVybmFsL3ZhbGlkYXRpb25cIiksXG4gIF9ob2lzdERpcmVjdGl2ZXM6IHJlcXVpcmUoXCIuL2ludGVybmFsL2hvaXN0LWRpcmVjdGl2ZXNcIiksXG4gIFwibWluaWZpY2F0aW9uLnJlbW92ZURlYnVnZ2VyXCI6IHJlcXVpcmUoXCJiYWJlbC1wbHVnaW4tcmVtb3ZlLWRlYnVnZ2VyXCIpLFxuICBcIm1pbmlmaWNhdGlvbi5yZW1vdmVDb25zb2xlXCI6IHJlcXVpcmUoXCJiYWJlbC1wbHVnaW4tcmVtb3ZlLWNvbnNvbGVcIiksXG4gIFwidXRpbGl0eS5pbmxpbmVFbnZpcm9ubWVudFZhcmlhYmxlc1wiOiByZXF1aXJlKFwiYmFiZWwtcGx1Z2luLWlubGluZS1lbnZpcm9ubWVudC12YXJpYWJsZXNcIiksXG4gIFwibWluaWZpY2F0aW9uLmRlYWRDb2RlRWxpbWluYXRpb25cIjogcmVxdWlyZShcImJhYmVsLXBsdWdpbi1kZWFkLWNvZGUtZWxpbWluYXRpb25cIiksXG4gIF9tb2R1bGVzOiByZXF1aXJlKFwiLi9pbnRlcm5hbC9tb2R1bGVzXCIpLFxuICBcInJlYWN0LmRpc3BsYXlOYW1lXCI6IHJlcXVpcmUoXCJiYWJlbC1wbHVnaW4tcmVhY3QtZGlzcGxheS1uYW1lXCIpLFxuICBcImVzNi5zcGVjLm1vZHVsZXNcIjogcmVxdWlyZShcIi4vZXM2L3NwZWMubW9kdWxlc1wiKSxcbiAgXCJlczYuc3BlYy5hcnJvd0Z1bmN0aW9uc1wiOiByZXF1aXJlKFwiLi9lczYvc3BlYy5hcnJvdy1mdW5jdGlvbnNcIiksXG4gIFwiZXM2LnNwZWMudGVtcGxhdGVMaXRlcmFsc1wiOiByZXF1aXJlKFwiLi9lczYvc3BlYy50ZW1wbGF0ZS1saXRlcmFsc1wiKSxcbiAgXCJlczYudGVtcGxhdGVMaXRlcmFsc1wiOiByZXF1aXJlKFwiLi9lczYvdGVtcGxhdGUtbGl0ZXJhbHNcIiksXG4gIFwiZXM2LmxpdGVyYWxzXCI6IHJlcXVpcmUoXCIuL2VzNi9saXRlcmFsc1wiKSxcbiAgXCJ2YWxpZGF0aW9uLnVuZGVjbGFyZWRWYXJpYWJsZUNoZWNrXCI6IHJlcXVpcmUoXCJiYWJlbC1wbHVnaW4tdW5kZWNsYXJlZC12YXJpYWJsZXMtY2hlY2tcIiksXG5cbiAgLy8tIGJ1aWx0aW4tYmFzaWNcbiAgLy8gdGhpcyBpcyB3aGVyZSB0aGUgYnVsayBvZiB0aGUgRVM2IHRyYW5zZm9ybWF0aW9ucyB0YWtlIHBsYWNlLCBub25lIG9mIHRoZW0gcmVxdWlyZSB0cmF2ZXJzYWwgc3RhdGVcbiAgLy8gc28gdGhleSBjYW4gYWxsIGJlIGNvbmNhdGVuYXRlZCB0b2dldGhlciBmb3IgcGVyZm9ybWFuY2VcbiAgXCJzcGVjLmZ1bmN0aW9uTmFtZVwiOiByZXF1aXJlKFwiLi9zcGVjL2Z1bmN0aW9uLW5hbWVcIiksXG4gIFwiZXM3LmNsYXNzUHJvcGVydGllc1wiOiByZXF1aXJlKFwiLi9lczcvY2xhc3MtcHJvcGVydGllc1wiKSxcbiAgXCJlczcudHJhaWxpbmdGdW5jdGlvbkNvbW1hc1wiOiByZXF1aXJlKFwiLi9lczcvdHJhaWxpbmctZnVuY3Rpb24tY29tbWFzXCIpLFxuICBcImVzNy5hc3luY0Z1bmN0aW9uc1wiOiByZXF1aXJlKFwiLi9lczcvYXN5bmMtZnVuY3Rpb25zXCIpLFxuICBcImVzNy5kZWNvcmF0b3JzXCI6IHJlcXVpcmUoXCIuL2VzNy9kZWNvcmF0b3JzXCIpLFxuICBcInZhbGlkYXRpb24ucmVhY3RcIjogcmVxdWlyZShcIi4vdmFsaWRhdGlvbi9yZWFjdFwiKSxcbiAgXCJlczYuYXJyb3dGdW5jdGlvbnNcIjogcmVxdWlyZShcIi4vZXM2L2Fycm93LWZ1bmN0aW9uc1wiKSxcbiAgXCJzcGVjLmJsb2NrU2NvcGVkRnVuY3Rpb25zXCI6IHJlcXVpcmUoXCIuL3NwZWMvYmxvY2stc2NvcGVkLWZ1bmN0aW9uc1wiKSxcbiAgXCJvcHRpbWlzYXRpb24ucmVhY3QuY29uc3RhbnRFbGVtZW50c1wiOiByZXF1aXJlKFwiYmFiZWwtcGx1Z2luLXJlYWN0LWNvbnN0YW50LWVsZW1lbnRzXCIpLFxuICBcIm9wdGltaXNhdGlvbi5yZWFjdC5pbmxpbmVFbGVtZW50c1wiOiByZXF1aXJlKFwiLi9vcHRpbWlzYXRpb24vcmVhY3QuaW5saW5lLWVsZW1lbnRzXCIpLFxuICBcImVzNy5jb21wcmVoZW5zaW9uc1wiOiByZXF1aXJlKFwiLi9lczcvY29tcHJlaGVuc2lvbnNcIiksXG4gIFwiZXM2LmNsYXNzZXNcIjogcmVxdWlyZShcIi4vZXM2L2NsYXNzZXNcIiksXG4gIGFzeW5jVG9HZW5lcmF0b3I6IHJlcXVpcmUoXCIuL290aGVyL2FzeW5jLXRvLWdlbmVyYXRvclwiKSxcbiAgYmx1ZWJpcmRDb3JvdXRpbmVzOiByZXF1aXJlKFwiLi9vdGhlci9ibHVlYmlyZC1jb3JvdXRpbmVzXCIpLFxuICBcImVzNi5vYmplY3RTdXBlclwiOiByZXF1aXJlKFwiLi9lczYvb2JqZWN0LXN1cGVyXCIpLFxuICBcImVzNy5vYmplY3RSZXN0U3ByZWFkXCI6IHJlcXVpcmUoXCIuL2VzNy9vYmplY3QtcmVzdC1zcHJlYWRcIiksXG4gIFwiZXM3LmV4cG9uZW50aWF0aW9uT3BlcmF0b3JcIjogcmVxdWlyZShcIi4vZXM3L2V4cG9uZW50aWF0aW9uLW9wZXJhdG9yXCIpLFxuICBcImVzNS5wcm9wZXJ0aWVzLm11dGF0b3JzXCI6IHJlcXVpcmUoXCIuL2VzNS9wcm9wZXJ0aWVzLm11dGF0b3JzXCIpLFxuICBcImVzNi5wcm9wZXJ0aWVzLnNob3J0aGFuZFwiOiByZXF1aXJlKFwiLi9lczYvcHJvcGVydGllcy5zaG9ydGhhbmRcIiksXG4gIFwiZXM2LnByb3BlcnRpZXMuY29tcHV0ZWRcIjogcmVxdWlyZShcIi4vZXM2L3Byb3BlcnRpZXMuY29tcHV0ZWRcIiksXG4gIFwib3B0aW1pc2F0aW9uLmZsb3cuZm9yT2ZcIjogcmVxdWlyZShcIi4vb3B0aW1pc2F0aW9uL2Zsb3cuZm9yLW9mXCIpLFxuICBcImVzNi5mb3JPZlwiOiByZXF1aXJlKFwiLi9lczYvZm9yLW9mXCIpLFxuICBcImVzNi5yZWdleC5zdGlja3lcIjogcmVxdWlyZShcIi4vZXM2L3JlZ2V4LnN0aWNreVwiKSxcbiAgXCJlczYucmVnZXgudW5pY29kZVwiOiByZXF1aXJlKFwiLi9lczYvcmVnZXgudW5pY29kZVwiKSxcbiAgXCJlczYuY29uc3RhbnRzXCI6IHJlcXVpcmUoXCIuL2VzNi9jb25zdGFudHNcIiksXG4gIFwiZXM3LmV4cG9ydEV4dGVuc2lvbnNcIjogcmVxdWlyZShcIi4vZXM3L2V4cG9ydC1leHRlbnNpb25zXCIpLFxuICBcInNwZWMucHJvdG9Ub0Fzc2lnblwiOiByZXF1aXJlKFwiYmFiZWwtcGx1Z2luLXByb3RvLXRvLWFzc2lnblwiKSxcbiAgXCJlczcuZG9FeHByZXNzaW9uc1wiOiByZXF1aXJlKFwiLi9lczcvZG8tZXhwcmVzc2lvbnNcIiksXG4gIFwiZXM2LnNwZWMuc3ltYm9sc1wiOiByZXF1aXJlKFwiLi9lczYvc3BlYy5zeW1ib2xzXCIpLFxuICBcImVzNy5mdW5jdGlvbkJpbmRcIjogcmVxdWlyZShcIi4vZXM3L2Z1bmN0aW9uLWJpbmRcIiksXG4gIFwic3BlYy51bmRlZmluZWRUb1ZvaWRcIjogcmVxdWlyZShcImJhYmVsLXBsdWdpbi11bmRlZmluZWQtdG8tdm9pZFwiKSxcblxuICAvLy0gYnVpbHRpbi1hZHZhbmNlZFxuICBcImVzNi5zcHJlYWRcIjogcmVxdWlyZShcIi4vZXM2L3NwcmVhZFwiKSxcbiAgXCJlczYucGFyYW1ldGVyc1wiOiByZXF1aXJlKFwiLi9lczYvcGFyYW1ldGVyc1wiKSxcbiAgXCJlczYuZGVzdHJ1Y3R1cmluZ1wiOiByZXF1aXJlKFwiLi9lczYvZGVzdHJ1Y3R1cmluZ1wiKSxcbiAgXCJlczYuYmxvY2tTY29waW5nXCI6IHJlcXVpcmUoXCIuL2VzNi9ibG9jay1zY29waW5nXCIpLFxuICBcImVzNi5zcGVjLmJsb2NrU2NvcGluZ1wiOiByZXF1aXJlKFwiLi9lczYvc3BlYy5ibG9jay1zY29waW5nXCIpLFxuICByZWFjdENvbXBhdDogcmVxdWlyZShcIi4vb3RoZXIvcmVhY3QtY29tcGF0XCIpLFxuICByZWFjdDogcmVxdWlyZShcIi4vb3RoZXIvcmVhY3RcIiksXG4gIHJlZ2VuZXJhdG9yOiByZXF1aXJlKFwiLi9vdGhlci9yZWdlbmVyYXRvclwiKSxcblxuICAvLyBlczYgc3ludGF4IHRyYW5zZm9ybWF0aW9uIGlzICoqZm9yYmlkZGVuKiogcGFzdCB0aGlzIHBvaW50IHNpbmNlIHJlZ2VuZXJhdG9yIHdpbGwgY2h1Y2sgYSBtYXNzaXZlXG4gIC8vIGhpc3N5IGZpdFxuXG4gIC8vLSBidWlsdGluLW1vZHVsZXNcbiAgcnVudGltZTogcmVxdWlyZShcImJhYmVsLXBsdWdpbi1ydW50aW1lXCIpLFxuICBcImVzNi5tb2R1bGVzXCI6IHJlcXVpcmUoXCIuL2VzNi9tb2R1bGVzXCIpLFxuICBfbW9kdWxlRm9ybWF0dGVyOiByZXF1aXJlKFwiLi9pbnRlcm5hbC9tb2R1bGUtZm9ybWF0dGVyXCIpLFxuXG4gIC8vLSBidWlsdGluLXRyYWlsaW5nXG4gIC8vIHRoZXNlIGNsZWFuIHVwIHRoZSBvdXRwdXQgYW5kIGRvIGZpbmlzaGluZyB1cCB0cmFuc2Zvcm1hdGlvbnMsIGl0J3MgaW1wb3J0YW50IHRvIG5vdGUgdGhhdCBieSB0aGlzXG4gIC8vIHN0YWdlIHlvdSBjYW4ndCBpbXBvcnQgYW55IG5ldyBtb2R1bGVzIG9yIGluc2VydCBuZXcgRVM2IGFzIGFsbCB0aG9zZSB0cmFuc2Zvcm1lcnMgaGF2ZSBhbHJlYWR5XG4gIC8vIGJlZW4gcmFuXG4gIFwiZXM2LnRhaWxDYWxsXCI6IHJlcXVpcmUoXCIuL2VzNi90YWlsLWNhbGxcIiksXG4gIF9zaGFkb3dGdW5jdGlvbnM6IHJlcXVpcmUoXCIuL2ludGVybmFsL3NoYWRvdy1mdW5jdGlvbnNcIiksXG4gIFwiZXMzLnByb3BlcnR5TGl0ZXJhbHNcIjogcmVxdWlyZShcIi4vZXMzL3Byb3BlcnR5LWxpdGVyYWxzXCIpLFxuICBcImVzMy5tZW1iZXJFeHByZXNzaW9uTGl0ZXJhbHNcIjogcmVxdWlyZShcIi4vZXMzL21lbWJlci1leHByZXNzaW9uLWxpdGVyYWxzXCIpLFxuICBcIm1pbmlmaWNhdGlvbi5tZW1iZXJFeHByZXNzaW9uTGl0ZXJhbHNcIjogcmVxdWlyZShcImJhYmVsLXBsdWdpbi1tZW1iZXItZXhwcmVzc2lvbi1saXRlcmFsc1wiKSxcbiAgXCJtaW5pZmljYXRpb24ucHJvcGVydHlMaXRlcmFsc1wiOiByZXF1aXJlKFwiYmFiZWwtcGx1Z2luLXByb3BlcnR5LWxpdGVyYWxzXCIpLFxuICBfYmxvY2tIb2lzdDogcmVxdWlyZShcIi4vaW50ZXJuYWwvYmxvY2staG9pc3RcIiksXG4gIGpzY3JpcHQ6IHJlcXVpcmUoXCJiYWJlbC1wbHVnaW4tanNjcmlwdFwiKSxcbiAgZmxvdzogcmVxdWlyZShcIi4vb3RoZXIvZmxvd1wiKSxcbiAgXCJvcHRpbWlzYXRpb24ubW9kdWxlcy5zeXN0ZW1cIjogcmVxdWlyZShcIi4vb3B0aW1pc2F0aW9uL21vZHVsZXMuc3lzdGVtXCIpXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
