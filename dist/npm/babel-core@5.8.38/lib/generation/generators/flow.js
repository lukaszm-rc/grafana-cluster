/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _types, t, _types2;

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
   * Prints AnyTypeAnnotation.
   */

  function AnyTypeAnnotation() {
    this.push("any");
  }

  /**
   * Prints ArrayTypeAnnotation, prints elementType.
   */

  function ArrayTypeAnnotation(node, print) {
    print.plain(node.elementType);
    this.push("[");
    this.push("]");
  }

  /**
   * Prints BooleanTypeAnnotation.
   */

  function BooleanTypeAnnotation() {
    this.push("bool");
  }

  /**
   * Prints BooleanLiteralTypeAnnotation.
   */

  function BooleanLiteralTypeAnnotation(node) {
    this.push(node.value ? "true" : "false");
  }

  /**
   * Prints DeclareClass, prints node.
   */

  function DeclareClass(node, print) {
    this.push("declare class ");
    this._interfaceish(node, print);
  }

  /**
   * Prints DeclareFunction, prints id and id.typeAnnotation.
   */

  function DeclareFunction(node, print) {
    this.push("declare function ");
    print.plain(node.id);
    print.plain(node.id.typeAnnotation.typeAnnotation);
    this.semicolon();
  }

  /**
   * Prints DeclareInterface.
   */

  function DeclareInterface(node, print) {
    this.push("declare ");
    this.InterfaceDeclaration(node, print);
  }

  /**
   * Prints DeclareModule, prints id and body.
   */

  function DeclareModule(node, print) {
    this.push("declare module ");
    print.plain(node.id);
    this.space();
    print.plain(node.body);
  }

  /**
   * Prints DeclareTypeAlias.
   */

  function DeclareTypeAlias(node, print) {
    this.push("declare ");
    this.TypeAlias(node, print);
  }

  /**
   * Prints DeclareVariable, prints id and id.typeAnnotation.
   */

  function DeclareVariable(node, print) {
    this.push("declare var ");
    print.plain(node.id);
    print.plain(node.id.typeAnnotation);
    this.semicolon();
  }

  /**
   * Prints FunctionTypeAnnotation, prints typeParameters, params, and rest.
   */

  function FunctionTypeAnnotation(node, print, parent) {
    print.plain(node.typeParameters);
    this.push("(");
    print.list(node.params);

    if (node.rest) {
      if (node.params.length) {
        this.push(",");
        this.space();
      }
      this.push("...");
      print.plain(node.rest);
    }

    this.push(")");

    // this node type is overloaded, not sure why but it makes it EXTREMELY annoying
    if (parent.type === "ObjectTypeProperty" || parent.type === "ObjectTypeCallProperty" || parent.type === "DeclareFunction") {
      this.push(":");
    } else {
      this.space();
      this.push("=>");
    }

    this.space();
    print.plain(node.returnType);
  }

  /**
   * Prints FunctionTypeParam, prints name and typeAnnotation, handles optional.
   */

  function FunctionTypeParam(node, print) {
    print.plain(node.name);
    if (node.optional) this.push("?");
    this.push(":");
    this.space();
    print.plain(node.typeAnnotation);
  }

  /**
   * Prints InterfaceExtends, prints id and typeParameters.
   */

  function InterfaceExtends(node, print) {
    print.plain(node.id);
    print.plain(node.typeParameters);
  }

  /**
   * Alias InterfaceExtends printer as ClassImplements,
   * and InterfaceExtends printer as GenericTypeAnnotation.
   */

  /**
   * Prints interface-like node, prints id, typeParameters, extends, and body.
   */

  function _interfaceish(node, print) {
    print.plain(node.id);
    print.plain(node.typeParameters);
    if (node["extends"].length) {
      this.push(" extends ");
      print.join(node["extends"], { separator: ", " });
    }
    if (node.mixins && node.mixins.length) {
      this.push(" mixins ");
      print.join(node.mixins, { separator: ", " });
    }
    this.space();
    print.plain(node.body);
  }

  /**
   * Prints InterfaceDeclaration, prints node.
   */

  function InterfaceDeclaration(node, print) {
    this.push("interface ");
    this._interfaceish(node, print);
  }

  /**
   * Prints IntersectionTypeAnnotation, prints types.
   */

  function IntersectionTypeAnnotation(node, print) {
    print.join(node.types, { separator: " & " });
  }

  /**
   * Prints MixedTypeAnnotation.
   */

  function MixedTypeAnnotation() {
    this.push("mixed");
  }

  /**
   * Prints NullableTypeAnnotation, prints typeAnnotation.
   */

  function NullableTypeAnnotation(node, print) {
    this.push("?");
    print.plain(node.typeAnnotation);
  }

  /**
   * Prints NullLiteralTypeAnnotation, prints value.
   */

  function NullLiteralTypeAnnotation() {
    this.push("null");
  }

  /**
   * Prints NumberLiteralTypeAnnotation, prints value.
   */

  /**
   * Prints NumberTypeAnnotation.
   */

  function NumberTypeAnnotation() {
    this.push("number");
  }

  /**
   * Prints StringLiteralTypeAnnotation, prints value.
   */

  function StringLiteralTypeAnnotation(node) {
    this.push(this._stringLiteral(node.value));
  }

  /**
   * Prints StringTypeAnnotation.
   */

  function StringTypeAnnotation() {
    this.push("string");
  }

  /**
   * Prints ThisTypeAnnotation, prints this.
   */

  function ThisTypeAnnotation() {
    this.push("this");
  }

  /**
   * Prints TupleTypeAnnotation, prints types.
   */

  function TupleTypeAnnotation(node, print) {
    this.push("[");
    print.join(node.types, { separator: ", " });
    this.push("]");
  }

  /**
   * Prints TypeofTypeAnnotation, prints argument.
   */

  function TypeofTypeAnnotation(node, print) {
    this.push("typeof ");
    print.plain(node.argument);
  }

  /**
   * Prints TypeAlias, prints id, typeParameters, and right.
   */

  function TypeAlias(node, print) {
    this.push("type ");
    print.plain(node.id);
    print.plain(node.typeParameters);
    this.space();
    this.push("=");
    this.space();
    print.plain(node.right);
    this.semicolon();
  }

  /**
   * Prints TypeAnnotation, prints typeAnnotation, handles optional.
   */

  function TypeAnnotation(node, print) {
    this.push(":");
    this.space();
    if (node.optional) this.push("?");
    print.plain(node.typeAnnotation);
  }

  /**
   * Prints TypeParameterInstantiation, prints params.
   */

  function TypeParameterInstantiation(node, print) {
    this.push("<");
    print.join(node.params, {
      separator: ", ",
      iterator: function iterator(node) {
        print.plain(node.typeAnnotation);
      }
    });
    this.push(">");
  }

  /**
   * Alias TypeParameterInstantiation printer as TypeParameterDeclaration
   */

  /**
   * Prints ObjectTypeAnnotation, prints properties, callProperties, and indexers.
   */

  function ObjectTypeAnnotation(node, print) {
    // istanbul ignore next

    var _this = this;

    this.push("{");
    var props = node.properties.concat(node.callProperties, node.indexers);

    if (props.length) {
      this.space();

      print.list(props, {
        separator: false,
        indent: true,
        iterator: function iterator() {
          if (props.length !== 1) {
            _this.semicolon();
            _this.space();
          }
        }
      });

      this.space();
    }

    this.push("}");
  }

  /**
   * Prints ObjectTypeCallProperty, prints value, handles static.
   */

  function ObjectTypeCallProperty(node, print) {
    if (node["static"]) this.push("static ");
    print.plain(node.value);
  }

  /**
   * Prints ObjectTypeIndexer, prints id, key, and value, handles static.
   */

  function ObjectTypeIndexer(node, print) {
    if (node["static"]) this.push("static ");
    this.push("[");
    print.plain(node.id);
    this.push(":");
    this.space();
    print.plain(node.key);
    this.push("]");
    this.push(":");
    this.space();
    print.plain(node.value);
  }

  /**
   * Prints ObjectTypeProperty, prints static, key, and value.
   */

  function ObjectTypeProperty(node, print) {
    if (node["static"]) this.push("static ");
    print.plain(node.key);
    if (node.optional) this.push("?");
    if (!t.isFunctionTypeAnnotation(node.value)) {
      this.push(":");
      this.space();
    }
    print.plain(node.value);
  }

  /**
   * Prints QualifiedTypeIdentifier, prints qualification and id.
   */

  function QualifiedTypeIdentifier(node, print) {
    print.plain(node.qualification);
    this.push(".");
    print.plain(node.id);
  }

  /**
   * Prints UnionTypeAnnotation, prints types.
   */

  function UnionTypeAnnotation(node, print) {
    print.join(node.types, { separator: " | " });
  }

  /**
   * Prints TypeCastExpression, prints expression and typeAnnotation.
   */

  function TypeCastExpression(node, print) {
    this.push("(");
    print.plain(node.expression);
    print.plain(node.typeAnnotation);
    this.push(")");
  }

  /**
   * Prints VoidTypeAnnotation.
   */

  function VoidTypeAnnotation() {
    this.push("void");
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.AnyTypeAnnotation = AnyTypeAnnotation;
      exports.ArrayTypeAnnotation = ArrayTypeAnnotation;
      exports.BooleanTypeAnnotation = BooleanTypeAnnotation;
      exports.BooleanLiteralTypeAnnotation = BooleanLiteralTypeAnnotation;
      exports.DeclareClass = DeclareClass;
      exports.DeclareFunction = DeclareFunction;
      exports.DeclareInterface = DeclareInterface;
      exports.DeclareModule = DeclareModule;
      exports.DeclareTypeAlias = DeclareTypeAlias;
      exports.DeclareVariable = DeclareVariable;
      exports.FunctionTypeAnnotation = FunctionTypeAnnotation;
      exports.FunctionTypeParam = FunctionTypeParam;
      exports.InterfaceExtends = InterfaceExtends;
      exports._interfaceish = _interfaceish;
      exports.InterfaceDeclaration = InterfaceDeclaration;
      exports.IntersectionTypeAnnotation = IntersectionTypeAnnotation;
      exports.MixedTypeAnnotation = MixedTypeAnnotation;
      exports.NullableTypeAnnotation = NullableTypeAnnotation;
      exports.NullLiteralTypeAnnotation = NullLiteralTypeAnnotation;
      exports.NumberTypeAnnotation = NumberTypeAnnotation;
      exports.StringLiteralTypeAnnotation = StringLiteralTypeAnnotation;
      exports.StringTypeAnnotation = StringTypeAnnotation;
      exports.ThisTypeAnnotation = ThisTypeAnnotation;
      exports.TupleTypeAnnotation = TupleTypeAnnotation;
      exports.TypeofTypeAnnotation = TypeofTypeAnnotation;
      exports.TypeAlias = TypeAlias;
      exports.TypeAnnotation = TypeAnnotation;
      exports.TypeParameterInstantiation = TypeParameterInstantiation;
      exports.ObjectTypeAnnotation = ObjectTypeAnnotation;
      exports.ObjectTypeCallProperty = ObjectTypeCallProperty;
      exports.ObjectTypeIndexer = ObjectTypeIndexer;
      exports.ObjectTypeProperty = ObjectTypeProperty;
      exports.QualifiedTypeIdentifier = QualifiedTypeIdentifier;
      exports.UnionTypeAnnotation = UnionTypeAnnotation;
      exports.TypeCastExpression = TypeCastExpression;
      exports.VoidTypeAnnotation = VoidTypeAnnotation;_types = require("../../types");
      t = _interopRequireWildcard(_types);
      exports.ClassImplements = InterfaceExtends;
      exports.GenericTypeAnnotation = InterfaceExtends;_types2 = require("./types");


      exports.NumberLiteralTypeAnnotation = _types2.Literal;exports.TypeParameterDeclaration = TypeParameterInstantiation;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvZ2VuZXJhdGlvbi9nZW5lcmF0b3JzL2Zsb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUF5Q0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7Ozs7O0FBVUEsV0FBUyxpQkFBVCxHQUE2QjtBQUMzQixTQUFLLElBQUwsQ0FBVSxLQUFWLEVBRDJCO0dBQTdCOzs7Ozs7QUFRQSxXQUFTLG1CQUFULENBQTZCLElBQTdCLEVBQW1DLEtBQW5DLEVBQTBDO0FBQ3hDLFVBQU0sS0FBTixDQUFZLEtBQUssV0FBTCxDQUFaLENBRHdDO0FBRXhDLFNBQUssSUFBTCxDQUFVLEdBQVYsRUFGd0M7QUFHeEMsU0FBSyxJQUFMLENBQVUsR0FBVixFQUh3QztHQUExQzs7Ozs7O0FBVUEsV0FBUyxxQkFBVCxHQUFpQztBQUMvQixTQUFLLElBQUwsQ0FBVSxNQUFWLEVBRCtCO0dBQWpDOzs7Ozs7QUFRQSxXQUFTLDRCQUFULENBQXNDLElBQXRDLEVBQTRDO0FBQzFDLFNBQUssSUFBTCxDQUFVLEtBQUssS0FBTCxHQUFhLE1BQWIsR0FBc0IsT0FBdEIsQ0FBVixDQUQwQztHQUE1Qzs7Ozs7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QUE2QixrQkFBN0I7QUFDQSxjQUFRLG1CQUFSLEdBQThCLG1CQUE5QjtBQUNBLGNBQVEsb0JBQVIsR0FBK0Isb0JBQS9CO0FBQ0EsY0FBUSxTQUFSLEdBQW9CLFNBQXBCO0FBQ0EsY0FBUSxjQUFSLEdBQXlCLGNBQXpCO0FBQ0EsY0FBUSwwQkFBUixHQUFxQywwQkFBckM7QUFDQSxjQUFRLG9CQUFSLEdBQStCLG9CQUEvQjtBQUNBLGNBQVEsc0JBQVIsR0FBaUMsc0JBQWpDO0FBQ0EsY0FBUSxpQkFBUixHQUE0QixpQkFBNUI7QUFDQSxjQUFRLGtCQUFSLEdBQTZCLGtCQUE3QjtBQUNBLGNBQVEsdUJBQVIsR0FBa0MsdUJBQWxDO0FBQ0EsY0FBUSxtQkFBUixHQUE4QixtQkFBOUI7QUFDQSxjQUFRLGtCQUFSLEdBQTZCLGtCQUE3QjtBQUNBLGNBQVEsa0JBQVIsR0FBNkIsa0JBQTdCLENBS0ksU0FBUyxRQUFRLGFBQVI7QUFFVCxVQUFJLHdCQUF3QixNQUF4QjtBQTBKUixjQUFRLGVBQVIsR0FBMEIsZ0JBQTFCO0FBQ0EsY0FBUSxxQkFBUixHQUFnQyxnQkFBaEMsQ0FtRUksVUFBVSxRQUFRLFNBQVI7OztBQUVkLGNBQVEsMkJBQVIsR0FBc0MsUUFBUSxPQUFSLENBa0d0QyxRQUFRLHdCQUFSLEdBQW1DLDBCQUFuQyIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL2dlbmVyYXRpb24vZ2VuZXJhdG9ycy9mbG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5BbnlUeXBlQW5ub3RhdGlvbiA9IEFueVR5cGVBbm5vdGF0aW9uO1xuZXhwb3J0cy5BcnJheVR5cGVBbm5vdGF0aW9uID0gQXJyYXlUeXBlQW5ub3RhdGlvbjtcbmV4cG9ydHMuQm9vbGVhblR5cGVBbm5vdGF0aW9uID0gQm9vbGVhblR5cGVBbm5vdGF0aW9uO1xuZXhwb3J0cy5Cb29sZWFuTGl0ZXJhbFR5cGVBbm5vdGF0aW9uID0gQm9vbGVhbkxpdGVyYWxUeXBlQW5ub3RhdGlvbjtcbmV4cG9ydHMuRGVjbGFyZUNsYXNzID0gRGVjbGFyZUNsYXNzO1xuZXhwb3J0cy5EZWNsYXJlRnVuY3Rpb24gPSBEZWNsYXJlRnVuY3Rpb247XG5leHBvcnRzLkRlY2xhcmVJbnRlcmZhY2UgPSBEZWNsYXJlSW50ZXJmYWNlO1xuZXhwb3J0cy5EZWNsYXJlTW9kdWxlID0gRGVjbGFyZU1vZHVsZTtcbmV4cG9ydHMuRGVjbGFyZVR5cGVBbGlhcyA9IERlY2xhcmVUeXBlQWxpYXM7XG5leHBvcnRzLkRlY2xhcmVWYXJpYWJsZSA9IERlY2xhcmVWYXJpYWJsZTtcbmV4cG9ydHMuRnVuY3Rpb25UeXBlQW5ub3RhdGlvbiA9IEZ1bmN0aW9uVHlwZUFubm90YXRpb247XG5leHBvcnRzLkZ1bmN0aW9uVHlwZVBhcmFtID0gRnVuY3Rpb25UeXBlUGFyYW07XG5leHBvcnRzLkludGVyZmFjZUV4dGVuZHMgPSBJbnRlcmZhY2VFeHRlbmRzO1xuZXhwb3J0cy5faW50ZXJmYWNlaXNoID0gX2ludGVyZmFjZWlzaDtcbmV4cG9ydHMuSW50ZXJmYWNlRGVjbGFyYXRpb24gPSBJbnRlcmZhY2VEZWNsYXJhdGlvbjtcbmV4cG9ydHMuSW50ZXJzZWN0aW9uVHlwZUFubm90YXRpb24gPSBJbnRlcnNlY3Rpb25UeXBlQW5ub3RhdGlvbjtcbmV4cG9ydHMuTWl4ZWRUeXBlQW5ub3RhdGlvbiA9IE1peGVkVHlwZUFubm90YXRpb247XG5leHBvcnRzLk51bGxhYmxlVHlwZUFubm90YXRpb24gPSBOdWxsYWJsZVR5cGVBbm5vdGF0aW9uO1xuZXhwb3J0cy5OdWxsTGl0ZXJhbFR5cGVBbm5vdGF0aW9uID0gTnVsbExpdGVyYWxUeXBlQW5ub3RhdGlvbjtcbmV4cG9ydHMuTnVtYmVyVHlwZUFubm90YXRpb24gPSBOdW1iZXJUeXBlQW5ub3RhdGlvbjtcbmV4cG9ydHMuU3RyaW5nTGl0ZXJhbFR5cGVBbm5vdGF0aW9uID0gU3RyaW5nTGl0ZXJhbFR5cGVBbm5vdGF0aW9uO1xuZXhwb3J0cy5TdHJpbmdUeXBlQW5ub3RhdGlvbiA9IFN0cmluZ1R5cGVBbm5vdGF0aW9uO1xuZXhwb3J0cy5UaGlzVHlwZUFubm90YXRpb24gPSBUaGlzVHlwZUFubm90YXRpb247XG5leHBvcnRzLlR1cGxlVHlwZUFubm90YXRpb24gPSBUdXBsZVR5cGVBbm5vdGF0aW9uO1xuZXhwb3J0cy5UeXBlb2ZUeXBlQW5ub3RhdGlvbiA9IFR5cGVvZlR5cGVBbm5vdGF0aW9uO1xuZXhwb3J0cy5UeXBlQWxpYXMgPSBUeXBlQWxpYXM7XG5leHBvcnRzLlR5cGVBbm5vdGF0aW9uID0gVHlwZUFubm90YXRpb247XG5leHBvcnRzLlR5cGVQYXJhbWV0ZXJJbnN0YW50aWF0aW9uID0gVHlwZVBhcmFtZXRlckluc3RhbnRpYXRpb247XG5leHBvcnRzLk9iamVjdFR5cGVBbm5vdGF0aW9uID0gT2JqZWN0VHlwZUFubm90YXRpb247XG5leHBvcnRzLk9iamVjdFR5cGVDYWxsUHJvcGVydHkgPSBPYmplY3RUeXBlQ2FsbFByb3BlcnR5O1xuZXhwb3J0cy5PYmplY3RUeXBlSW5kZXhlciA9IE9iamVjdFR5cGVJbmRleGVyO1xuZXhwb3J0cy5PYmplY3RUeXBlUHJvcGVydHkgPSBPYmplY3RUeXBlUHJvcGVydHk7XG5leHBvcnRzLlF1YWxpZmllZFR5cGVJZGVudGlmaWVyID0gUXVhbGlmaWVkVHlwZUlkZW50aWZpZXI7XG5leHBvcnRzLlVuaW9uVHlwZUFubm90YXRpb24gPSBVbmlvblR5cGVBbm5vdGF0aW9uO1xuZXhwb3J0cy5UeXBlQ2FzdEV4cHJlc3Npb24gPSBUeXBlQ2FzdEV4cHJlc3Npb247XG5leHBvcnRzLlZvaWRUeXBlQW5ub3RhdGlvbiA9IFZvaWRUeXBlQW5ub3RhdGlvbjtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG4vKipcbiAqIFByaW50cyBBbnlUeXBlQW5ub3RhdGlvbi5cbiAqL1xuXG5mdW5jdGlvbiBBbnlUeXBlQW5ub3RhdGlvbigpIHtcbiAgdGhpcy5wdXNoKFwiYW55XCIpO1xufVxuXG4vKipcbiAqIFByaW50cyBBcnJheVR5cGVBbm5vdGF0aW9uLCBwcmludHMgZWxlbWVudFR5cGUuXG4gKi9cblxuZnVuY3Rpb24gQXJyYXlUeXBlQW5ub3RhdGlvbihub2RlLCBwcmludCkge1xuICBwcmludC5wbGFpbihub2RlLmVsZW1lbnRUeXBlKTtcbiAgdGhpcy5wdXNoKFwiW1wiKTtcbiAgdGhpcy5wdXNoKFwiXVwiKTtcbn1cblxuLyoqXG4gKiBQcmludHMgQm9vbGVhblR5cGVBbm5vdGF0aW9uLlxuICovXG5cbmZ1bmN0aW9uIEJvb2xlYW5UeXBlQW5ub3RhdGlvbigpIHtcbiAgdGhpcy5wdXNoKFwiYm9vbFwiKTtcbn1cblxuLyoqXG4gKiBQcmludHMgQm9vbGVhbkxpdGVyYWxUeXBlQW5ub3RhdGlvbi5cbiAqL1xuXG5mdW5jdGlvbiBCb29sZWFuTGl0ZXJhbFR5cGVBbm5vdGF0aW9uKG5vZGUpIHtcbiAgdGhpcy5wdXNoKG5vZGUudmFsdWUgPyBcInRydWVcIiA6IFwiZmFsc2VcIik7XG59XG5cbi8qKlxuICogUHJpbnRzIERlY2xhcmVDbGFzcywgcHJpbnRzIG5vZGUuXG4gKi9cblxuZnVuY3Rpb24gRGVjbGFyZUNsYXNzKG5vZGUsIHByaW50KSB7XG4gIHRoaXMucHVzaChcImRlY2xhcmUgY2xhc3MgXCIpO1xuICB0aGlzLl9pbnRlcmZhY2Vpc2gobm9kZSwgcHJpbnQpO1xufVxuXG4vKipcbiAqIFByaW50cyBEZWNsYXJlRnVuY3Rpb24sIHByaW50cyBpZCBhbmQgaWQudHlwZUFubm90YXRpb24uXG4gKi9cblxuZnVuY3Rpb24gRGVjbGFyZUZ1bmN0aW9uKG5vZGUsIHByaW50KSB7XG4gIHRoaXMucHVzaChcImRlY2xhcmUgZnVuY3Rpb24gXCIpO1xuICBwcmludC5wbGFpbihub2RlLmlkKTtcbiAgcHJpbnQucGxhaW4obm9kZS5pZC50eXBlQW5ub3RhdGlvbi50eXBlQW5ub3RhdGlvbik7XG4gIHRoaXMuc2VtaWNvbG9uKCk7XG59XG5cbi8qKlxuICogUHJpbnRzIERlY2xhcmVJbnRlcmZhY2UuXG4gKi9cblxuZnVuY3Rpb24gRGVjbGFyZUludGVyZmFjZShub2RlLCBwcmludCkge1xuICB0aGlzLnB1c2goXCJkZWNsYXJlIFwiKTtcbiAgdGhpcy5JbnRlcmZhY2VEZWNsYXJhdGlvbihub2RlLCBwcmludCk7XG59XG5cbi8qKlxuICogUHJpbnRzIERlY2xhcmVNb2R1bGUsIHByaW50cyBpZCBhbmQgYm9keS5cbiAqL1xuXG5mdW5jdGlvbiBEZWNsYXJlTW9kdWxlKG5vZGUsIHByaW50KSB7XG4gIHRoaXMucHVzaChcImRlY2xhcmUgbW9kdWxlIFwiKTtcbiAgcHJpbnQucGxhaW4obm9kZS5pZCk7XG4gIHRoaXMuc3BhY2UoKTtcbiAgcHJpbnQucGxhaW4obm9kZS5ib2R5KTtcbn1cblxuLyoqXG4gKiBQcmludHMgRGVjbGFyZVR5cGVBbGlhcy5cbiAqL1xuXG5mdW5jdGlvbiBEZWNsYXJlVHlwZUFsaWFzKG5vZGUsIHByaW50KSB7XG4gIHRoaXMucHVzaChcImRlY2xhcmUgXCIpO1xuICB0aGlzLlR5cGVBbGlhcyhub2RlLCBwcmludCk7XG59XG5cbi8qKlxuICogUHJpbnRzIERlY2xhcmVWYXJpYWJsZSwgcHJpbnRzIGlkIGFuZCBpZC50eXBlQW5ub3RhdGlvbi5cbiAqL1xuXG5mdW5jdGlvbiBEZWNsYXJlVmFyaWFibGUobm9kZSwgcHJpbnQpIHtcbiAgdGhpcy5wdXNoKFwiZGVjbGFyZSB2YXIgXCIpO1xuICBwcmludC5wbGFpbihub2RlLmlkKTtcbiAgcHJpbnQucGxhaW4obm9kZS5pZC50eXBlQW5ub3RhdGlvbik7XG4gIHRoaXMuc2VtaWNvbG9uKCk7XG59XG5cbi8qKlxuICogUHJpbnRzIEZ1bmN0aW9uVHlwZUFubm90YXRpb24sIHByaW50cyB0eXBlUGFyYW1ldGVycywgcGFyYW1zLCBhbmQgcmVzdC5cbiAqL1xuXG5mdW5jdGlvbiBGdW5jdGlvblR5cGVBbm5vdGF0aW9uKG5vZGUsIHByaW50LCBwYXJlbnQpIHtcbiAgcHJpbnQucGxhaW4obm9kZS50eXBlUGFyYW1ldGVycyk7XG4gIHRoaXMucHVzaChcIihcIik7XG4gIHByaW50Lmxpc3Qobm9kZS5wYXJhbXMpO1xuXG4gIGlmIChub2RlLnJlc3QpIHtcbiAgICBpZiAobm9kZS5wYXJhbXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnB1c2goXCIsXCIpO1xuICAgICAgdGhpcy5zcGFjZSgpO1xuICAgIH1cbiAgICB0aGlzLnB1c2goXCIuLi5cIik7XG4gICAgcHJpbnQucGxhaW4obm9kZS5yZXN0KTtcbiAgfVxuXG4gIHRoaXMucHVzaChcIilcIik7XG5cbiAgLy8gdGhpcyBub2RlIHR5cGUgaXMgb3ZlcmxvYWRlZCwgbm90IHN1cmUgd2h5IGJ1dCBpdCBtYWtlcyBpdCBFWFRSRU1FTFkgYW5ub3lpbmdcbiAgaWYgKHBhcmVudC50eXBlID09PSBcIk9iamVjdFR5cGVQcm9wZXJ0eVwiIHx8IHBhcmVudC50eXBlID09PSBcIk9iamVjdFR5cGVDYWxsUHJvcGVydHlcIiB8fCBwYXJlbnQudHlwZSA9PT0gXCJEZWNsYXJlRnVuY3Rpb25cIikge1xuICAgIHRoaXMucHVzaChcIjpcIik7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zcGFjZSgpO1xuICAgIHRoaXMucHVzaChcIj0+XCIpO1xuICB9XG5cbiAgdGhpcy5zcGFjZSgpO1xuICBwcmludC5wbGFpbihub2RlLnJldHVyblR5cGUpO1xufVxuXG4vKipcbiAqIFByaW50cyBGdW5jdGlvblR5cGVQYXJhbSwgcHJpbnRzIG5hbWUgYW5kIHR5cGVBbm5vdGF0aW9uLCBoYW5kbGVzIG9wdGlvbmFsLlxuICovXG5cbmZ1bmN0aW9uIEZ1bmN0aW9uVHlwZVBhcmFtKG5vZGUsIHByaW50KSB7XG4gIHByaW50LnBsYWluKG5vZGUubmFtZSk7XG4gIGlmIChub2RlLm9wdGlvbmFsKSB0aGlzLnB1c2goXCI/XCIpO1xuICB0aGlzLnB1c2goXCI6XCIpO1xuICB0aGlzLnNwYWNlKCk7XG4gIHByaW50LnBsYWluKG5vZGUudHlwZUFubm90YXRpb24pO1xufVxuXG4vKipcbiAqIFByaW50cyBJbnRlcmZhY2VFeHRlbmRzLCBwcmludHMgaWQgYW5kIHR5cGVQYXJhbWV0ZXJzLlxuICovXG5cbmZ1bmN0aW9uIEludGVyZmFjZUV4dGVuZHMobm9kZSwgcHJpbnQpIHtcbiAgcHJpbnQucGxhaW4obm9kZS5pZCk7XG4gIHByaW50LnBsYWluKG5vZGUudHlwZVBhcmFtZXRlcnMpO1xufVxuXG4vKipcbiAqIEFsaWFzIEludGVyZmFjZUV4dGVuZHMgcHJpbnRlciBhcyBDbGFzc0ltcGxlbWVudHMsXG4gKiBhbmQgSW50ZXJmYWNlRXh0ZW5kcyBwcmludGVyIGFzIEdlbmVyaWNUeXBlQW5ub3RhdGlvbi5cbiAqL1xuXG5leHBvcnRzLkNsYXNzSW1wbGVtZW50cyA9IEludGVyZmFjZUV4dGVuZHM7XG5leHBvcnRzLkdlbmVyaWNUeXBlQW5ub3RhdGlvbiA9IEludGVyZmFjZUV4dGVuZHM7XG5cbi8qKlxuICogUHJpbnRzIGludGVyZmFjZS1saWtlIG5vZGUsIHByaW50cyBpZCwgdHlwZVBhcmFtZXRlcnMsIGV4dGVuZHMsIGFuZCBib2R5LlxuICovXG5cbmZ1bmN0aW9uIF9pbnRlcmZhY2Vpc2gobm9kZSwgcHJpbnQpIHtcbiAgcHJpbnQucGxhaW4obm9kZS5pZCk7XG4gIHByaW50LnBsYWluKG5vZGUudHlwZVBhcmFtZXRlcnMpO1xuICBpZiAobm9kZVtcImV4dGVuZHNcIl0ubGVuZ3RoKSB7XG4gICAgdGhpcy5wdXNoKFwiIGV4dGVuZHMgXCIpO1xuICAgIHByaW50LmpvaW4obm9kZVtcImV4dGVuZHNcIl0sIHsgc2VwYXJhdG9yOiBcIiwgXCIgfSk7XG4gIH1cbiAgaWYgKG5vZGUubWl4aW5zICYmIG5vZGUubWl4aW5zLmxlbmd0aCkge1xuICAgIHRoaXMucHVzaChcIiBtaXhpbnMgXCIpO1xuICAgIHByaW50LmpvaW4obm9kZS5taXhpbnMsIHsgc2VwYXJhdG9yOiBcIiwgXCIgfSk7XG4gIH1cbiAgdGhpcy5zcGFjZSgpO1xuICBwcmludC5wbGFpbihub2RlLmJvZHkpO1xufVxuXG4vKipcbiAqIFByaW50cyBJbnRlcmZhY2VEZWNsYXJhdGlvbiwgcHJpbnRzIG5vZGUuXG4gKi9cblxuZnVuY3Rpb24gSW50ZXJmYWNlRGVjbGFyYXRpb24obm9kZSwgcHJpbnQpIHtcbiAgdGhpcy5wdXNoKFwiaW50ZXJmYWNlIFwiKTtcbiAgdGhpcy5faW50ZXJmYWNlaXNoKG5vZGUsIHByaW50KTtcbn1cblxuLyoqXG4gKiBQcmludHMgSW50ZXJzZWN0aW9uVHlwZUFubm90YXRpb24sIHByaW50cyB0eXBlcy5cbiAqL1xuXG5mdW5jdGlvbiBJbnRlcnNlY3Rpb25UeXBlQW5ub3RhdGlvbihub2RlLCBwcmludCkge1xuICBwcmludC5qb2luKG5vZGUudHlwZXMsIHsgc2VwYXJhdG9yOiBcIiAmIFwiIH0pO1xufVxuXG4vKipcbiAqIFByaW50cyBNaXhlZFR5cGVBbm5vdGF0aW9uLlxuICovXG5cbmZ1bmN0aW9uIE1peGVkVHlwZUFubm90YXRpb24oKSB7XG4gIHRoaXMucHVzaChcIm1peGVkXCIpO1xufVxuXG4vKipcbiAqIFByaW50cyBOdWxsYWJsZVR5cGVBbm5vdGF0aW9uLCBwcmludHMgdHlwZUFubm90YXRpb24uXG4gKi9cblxuZnVuY3Rpb24gTnVsbGFibGVUeXBlQW5ub3RhdGlvbihub2RlLCBwcmludCkge1xuICB0aGlzLnB1c2goXCI/XCIpO1xuICBwcmludC5wbGFpbihub2RlLnR5cGVBbm5vdGF0aW9uKTtcbn1cblxuLyoqXG4gKiBQcmludHMgTnVsbExpdGVyYWxUeXBlQW5ub3RhdGlvbiwgcHJpbnRzIHZhbHVlLlxuICovXG5cbmZ1bmN0aW9uIE51bGxMaXRlcmFsVHlwZUFubm90YXRpb24oKSB7XG4gIHRoaXMucHVzaChcIm51bGxcIik7XG59XG5cbi8qKlxuICogUHJpbnRzIE51bWJlckxpdGVyYWxUeXBlQW5ub3RhdGlvbiwgcHJpbnRzIHZhbHVlLlxuICovXG5cbnZhciBfdHlwZXMyID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XG5cbmV4cG9ydHMuTnVtYmVyTGl0ZXJhbFR5cGVBbm5vdGF0aW9uID0gX3R5cGVzMi5MaXRlcmFsO1xuXG4vKipcbiAqIFByaW50cyBOdW1iZXJUeXBlQW5ub3RhdGlvbi5cbiAqL1xuXG5mdW5jdGlvbiBOdW1iZXJUeXBlQW5ub3RhdGlvbigpIHtcbiAgdGhpcy5wdXNoKFwibnVtYmVyXCIpO1xufVxuXG4vKipcbiAqIFByaW50cyBTdHJpbmdMaXRlcmFsVHlwZUFubm90YXRpb24sIHByaW50cyB2YWx1ZS5cbiAqL1xuXG5mdW5jdGlvbiBTdHJpbmdMaXRlcmFsVHlwZUFubm90YXRpb24obm9kZSkge1xuICB0aGlzLnB1c2godGhpcy5fc3RyaW5nTGl0ZXJhbChub2RlLnZhbHVlKSk7XG59XG5cbi8qKlxuICogUHJpbnRzIFN0cmluZ1R5cGVBbm5vdGF0aW9uLlxuICovXG5cbmZ1bmN0aW9uIFN0cmluZ1R5cGVBbm5vdGF0aW9uKCkge1xuICB0aGlzLnB1c2goXCJzdHJpbmdcIik7XG59XG5cbi8qKlxuICogUHJpbnRzIFRoaXNUeXBlQW5ub3RhdGlvbiwgcHJpbnRzIHRoaXMuXG4gKi9cblxuZnVuY3Rpb24gVGhpc1R5cGVBbm5vdGF0aW9uKCkge1xuICB0aGlzLnB1c2goXCJ0aGlzXCIpO1xufVxuXG4vKipcbiAqIFByaW50cyBUdXBsZVR5cGVBbm5vdGF0aW9uLCBwcmludHMgdHlwZXMuXG4gKi9cblxuZnVuY3Rpb24gVHVwbGVUeXBlQW5ub3RhdGlvbihub2RlLCBwcmludCkge1xuICB0aGlzLnB1c2goXCJbXCIpO1xuICBwcmludC5qb2luKG5vZGUudHlwZXMsIHsgc2VwYXJhdG9yOiBcIiwgXCIgfSk7XG4gIHRoaXMucHVzaChcIl1cIik7XG59XG5cbi8qKlxuICogUHJpbnRzIFR5cGVvZlR5cGVBbm5vdGF0aW9uLCBwcmludHMgYXJndW1lbnQuXG4gKi9cblxuZnVuY3Rpb24gVHlwZW9mVHlwZUFubm90YXRpb24obm9kZSwgcHJpbnQpIHtcbiAgdGhpcy5wdXNoKFwidHlwZW9mIFwiKTtcbiAgcHJpbnQucGxhaW4obm9kZS5hcmd1bWVudCk7XG59XG5cbi8qKlxuICogUHJpbnRzIFR5cGVBbGlhcywgcHJpbnRzIGlkLCB0eXBlUGFyYW1ldGVycywgYW5kIHJpZ2h0LlxuICovXG5cbmZ1bmN0aW9uIFR5cGVBbGlhcyhub2RlLCBwcmludCkge1xuICB0aGlzLnB1c2goXCJ0eXBlIFwiKTtcbiAgcHJpbnQucGxhaW4obm9kZS5pZCk7XG4gIHByaW50LnBsYWluKG5vZGUudHlwZVBhcmFtZXRlcnMpO1xuICB0aGlzLnNwYWNlKCk7XG4gIHRoaXMucHVzaChcIj1cIik7XG4gIHRoaXMuc3BhY2UoKTtcbiAgcHJpbnQucGxhaW4obm9kZS5yaWdodCk7XG4gIHRoaXMuc2VtaWNvbG9uKCk7XG59XG5cbi8qKlxuICogUHJpbnRzIFR5cGVBbm5vdGF0aW9uLCBwcmludHMgdHlwZUFubm90YXRpb24sIGhhbmRsZXMgb3B0aW9uYWwuXG4gKi9cblxuZnVuY3Rpb24gVHlwZUFubm90YXRpb24obm9kZSwgcHJpbnQpIHtcbiAgdGhpcy5wdXNoKFwiOlwiKTtcbiAgdGhpcy5zcGFjZSgpO1xuICBpZiAobm9kZS5vcHRpb25hbCkgdGhpcy5wdXNoKFwiP1wiKTtcbiAgcHJpbnQucGxhaW4obm9kZS50eXBlQW5ub3RhdGlvbik7XG59XG5cbi8qKlxuICogUHJpbnRzIFR5cGVQYXJhbWV0ZXJJbnN0YW50aWF0aW9uLCBwcmludHMgcGFyYW1zLlxuICovXG5cbmZ1bmN0aW9uIFR5cGVQYXJhbWV0ZXJJbnN0YW50aWF0aW9uKG5vZGUsIHByaW50KSB7XG4gIHRoaXMucHVzaChcIjxcIik7XG4gIHByaW50LmpvaW4obm9kZS5wYXJhbXMsIHtcbiAgICBzZXBhcmF0b3I6IFwiLCBcIixcbiAgICBpdGVyYXRvcjogZnVuY3Rpb24gaXRlcmF0b3Iobm9kZSkge1xuICAgICAgcHJpbnQucGxhaW4obm9kZS50eXBlQW5ub3RhdGlvbik7XG4gICAgfVxuICB9KTtcbiAgdGhpcy5wdXNoKFwiPlwiKTtcbn1cblxuLyoqXG4gKiBBbGlhcyBUeXBlUGFyYW1ldGVySW5zdGFudGlhdGlvbiBwcmludGVyIGFzIFR5cGVQYXJhbWV0ZXJEZWNsYXJhdGlvblxuICovXG5cbmV4cG9ydHMuVHlwZVBhcmFtZXRlckRlY2xhcmF0aW9uID0gVHlwZVBhcmFtZXRlckluc3RhbnRpYXRpb247XG5cbi8qKlxuICogUHJpbnRzIE9iamVjdFR5cGVBbm5vdGF0aW9uLCBwcmludHMgcHJvcGVydGllcywgY2FsbFByb3BlcnRpZXMsIGFuZCBpbmRleGVycy5cbiAqL1xuXG5mdW5jdGlvbiBPYmplY3RUeXBlQW5ub3RhdGlvbihub2RlLCBwcmludCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdGhpcy5wdXNoKFwie1wiKTtcbiAgdmFyIHByb3BzID0gbm9kZS5wcm9wZXJ0aWVzLmNvbmNhdChub2RlLmNhbGxQcm9wZXJ0aWVzLCBub2RlLmluZGV4ZXJzKTtcblxuICBpZiAocHJvcHMubGVuZ3RoKSB7XG4gICAgdGhpcy5zcGFjZSgpO1xuXG4gICAgcHJpbnQubGlzdChwcm9wcywge1xuICAgICAgc2VwYXJhdG9yOiBmYWxzZSxcbiAgICAgIGluZGVudDogdHJ1ZSxcbiAgICAgIGl0ZXJhdG9yOiBmdW5jdGlvbiBpdGVyYXRvcigpIHtcbiAgICAgICAgaWYgKHByb3BzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgIF90aGlzLnNlbWljb2xvbigpO1xuICAgICAgICAgIF90aGlzLnNwYWNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc3BhY2UoKTtcbiAgfVxuXG4gIHRoaXMucHVzaChcIn1cIik7XG59XG5cbi8qKlxuICogUHJpbnRzIE9iamVjdFR5cGVDYWxsUHJvcGVydHksIHByaW50cyB2YWx1ZSwgaGFuZGxlcyBzdGF0aWMuXG4gKi9cblxuZnVuY3Rpb24gT2JqZWN0VHlwZUNhbGxQcm9wZXJ0eShub2RlLCBwcmludCkge1xuICBpZiAobm9kZVtcInN0YXRpY1wiXSkgdGhpcy5wdXNoKFwic3RhdGljIFwiKTtcbiAgcHJpbnQucGxhaW4obm9kZS52YWx1ZSk7XG59XG5cbi8qKlxuICogUHJpbnRzIE9iamVjdFR5cGVJbmRleGVyLCBwcmludHMgaWQsIGtleSwgYW5kIHZhbHVlLCBoYW5kbGVzIHN0YXRpYy5cbiAqL1xuXG5mdW5jdGlvbiBPYmplY3RUeXBlSW5kZXhlcihub2RlLCBwcmludCkge1xuICBpZiAobm9kZVtcInN0YXRpY1wiXSkgdGhpcy5wdXNoKFwic3RhdGljIFwiKTtcbiAgdGhpcy5wdXNoKFwiW1wiKTtcbiAgcHJpbnQucGxhaW4obm9kZS5pZCk7XG4gIHRoaXMucHVzaChcIjpcIik7XG4gIHRoaXMuc3BhY2UoKTtcbiAgcHJpbnQucGxhaW4obm9kZS5rZXkpO1xuICB0aGlzLnB1c2goXCJdXCIpO1xuICB0aGlzLnB1c2goXCI6XCIpO1xuICB0aGlzLnNwYWNlKCk7XG4gIHByaW50LnBsYWluKG5vZGUudmFsdWUpO1xufVxuXG4vKipcbiAqIFByaW50cyBPYmplY3RUeXBlUHJvcGVydHksIHByaW50cyBzdGF0aWMsIGtleSwgYW5kIHZhbHVlLlxuICovXG5cbmZ1bmN0aW9uIE9iamVjdFR5cGVQcm9wZXJ0eShub2RlLCBwcmludCkge1xuICBpZiAobm9kZVtcInN0YXRpY1wiXSkgdGhpcy5wdXNoKFwic3RhdGljIFwiKTtcbiAgcHJpbnQucGxhaW4obm9kZS5rZXkpO1xuICBpZiAobm9kZS5vcHRpb25hbCkgdGhpcy5wdXNoKFwiP1wiKTtcbiAgaWYgKCF0LmlzRnVuY3Rpb25UeXBlQW5ub3RhdGlvbihub2RlLnZhbHVlKSkge1xuICAgIHRoaXMucHVzaChcIjpcIik7XG4gICAgdGhpcy5zcGFjZSgpO1xuICB9XG4gIHByaW50LnBsYWluKG5vZGUudmFsdWUpO1xufVxuXG4vKipcbiAqIFByaW50cyBRdWFsaWZpZWRUeXBlSWRlbnRpZmllciwgcHJpbnRzIHF1YWxpZmljYXRpb24gYW5kIGlkLlxuICovXG5cbmZ1bmN0aW9uIFF1YWxpZmllZFR5cGVJZGVudGlmaWVyKG5vZGUsIHByaW50KSB7XG4gIHByaW50LnBsYWluKG5vZGUucXVhbGlmaWNhdGlvbik7XG4gIHRoaXMucHVzaChcIi5cIik7XG4gIHByaW50LnBsYWluKG5vZGUuaWQpO1xufVxuXG4vKipcbiAqIFByaW50cyBVbmlvblR5cGVBbm5vdGF0aW9uLCBwcmludHMgdHlwZXMuXG4gKi9cblxuZnVuY3Rpb24gVW5pb25UeXBlQW5ub3RhdGlvbihub2RlLCBwcmludCkge1xuICBwcmludC5qb2luKG5vZGUudHlwZXMsIHsgc2VwYXJhdG9yOiBcIiB8IFwiIH0pO1xufVxuXG4vKipcbiAqIFByaW50cyBUeXBlQ2FzdEV4cHJlc3Npb24sIHByaW50cyBleHByZXNzaW9uIGFuZCB0eXBlQW5ub3RhdGlvbi5cbiAqL1xuXG5mdW5jdGlvbiBUeXBlQ2FzdEV4cHJlc3Npb24obm9kZSwgcHJpbnQpIHtcbiAgdGhpcy5wdXNoKFwiKFwiKTtcbiAgcHJpbnQucGxhaW4obm9kZS5leHByZXNzaW9uKTtcbiAgcHJpbnQucGxhaW4obm9kZS50eXBlQW5ub3RhdGlvbik7XG4gIHRoaXMucHVzaChcIilcIik7XG59XG5cbi8qKlxuICogUHJpbnRzIFZvaWRUeXBlQW5ub3RhdGlvbi5cbiAqL1xuXG5mdW5jdGlvbiBWb2lkVHlwZUFubm90YXRpb24oKSB7XG4gIHRoaXMucHVzaChcInZvaWRcIik7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
