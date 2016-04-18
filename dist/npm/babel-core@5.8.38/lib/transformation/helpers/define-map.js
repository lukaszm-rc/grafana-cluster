/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _lodashCollectionEach, _lodashCollectionEach2, _lodashObjectHas, _lodashObjectHas2, _types, t;

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

  function push(mutatorMap, node, kind, file) {
    var alias = t.toKeyAlias(node);

    //

    var map = {};
    if (_lodashObjectHas2["default"](mutatorMap, alias)) map = mutatorMap[alias];
    mutatorMap[alias] = map;

    //

    map._inherits = map._inherits || [];
    map._inherits.push(node);

    map._key = node.key;

    if (node.computed) {
      map._computed = true;
    }

    if (node.decorators) {
      var decorators = map.decorators = map.decorators || t.arrayExpression([]);
      decorators.elements = decorators.elements.concat(node.decorators.map(function (dec) {
        return dec.expression;
      }).reverse());
    }

    if (map.value || map.initializer) {
      throw file.errorWithNode(node, "Key conflict with sibling node");
    }

    if (node.value) {
      if (node.kind === "init") kind = "value";
      if (node.kind === "get") kind = "get";
      if (node.kind === "set") kind = "set";

      t.inheritsComments(node.value, node);
      map[kind] = node.value;
    }

    return map;
  }

  /**
   * [Please add a description.]
   */

  function hasComputed(mutatorMap) {
    for (var key in mutatorMap) {
      if (mutatorMap[key]._computed) {
        return true;
      }
    }
    return false;
  }

  /**
   * [Please add a description.]
   */

  function toComputedObjectFromClass(obj) {
    var objExpr = t.arrayExpression([]);

    for (var i = 0; i < obj.properties.length; i++) {
      var prop = obj.properties[i];
      var val = prop.value;
      val.properties.unshift(t.property("init", t.identifier("key"), t.toComputedKey(prop)));
      objExpr.elements.push(val);
    }

    return objExpr;
  }

  /**
   * [Please add a description.]
   */

  function toClassObject(mutatorMap) {
    var objExpr = t.objectExpression([]);

    _lodashCollectionEach2["default"](mutatorMap, function (map) {
      var mapNode = t.objectExpression([]);

      var propNode = t.property("init", map._key, mapNode, map._computed);

      _lodashCollectionEach2["default"](map, function (node, key) {
        if (key[0] === "_") return;

        var inheritNode = node;
        if (t.isMethodDefinition(node) || t.isClassProperty(node)) node = node.value;

        var prop = t.property("init", t.identifier(key), node);
        t.inheritsComments(prop, inheritNode);
        t.removeComments(inheritNode);

        mapNode.properties.push(prop);
      });

      objExpr.properties.push(propNode);
    });

    return objExpr;
  }

  /**
   * [Please add a description.]
   */

  function toDefineObject(mutatorMap) {
    _lodashCollectionEach2["default"](mutatorMap, function (map) {
      if (map.value) map.writable = t.literal(true);
      map.configurable = t.literal(true);
      map.enumerable = t.literal(true);
    });

    return toClassObject(mutatorMap);
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.push = push;
      exports.hasComputed = hasComputed;
      exports.toComputedObjectFromClass = toComputedObjectFromClass;
      exports.toClassObject = toClassObject;
      exports.toDefineObject = toDefineObject;_lodashCollectionEach = require("lodash/collection/each");
      _lodashCollectionEach2 = _interopRequireDefault(_lodashCollectionEach);
      _lodashObjectHas = require("lodash/object/has");
      _lodashObjectHas2 = _interopRequireDefault(_lodashObjectHas);
      _types = require("../../types");
      t = _interopRequireWildcard(_types);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vaGVscGVycy9kZWZpbmUtbWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBVUEsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7OztBQUlBLFdBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLEdBQXhCLEdBQThCLEVBQUUsV0FBVyxHQUFYLEVBQWhDLENBQVQ7R0FBckM7Ozs7OztBQWtCQSxXQUFTLElBQVQsQ0FBYyxVQUFkLEVBQTBCLElBQTFCLEVBQWdDLElBQWhDLEVBQXNDLElBQXRDLEVBQTRDO0FBQzFDLFFBQUksUUFBUSxFQUFFLFVBQUYsQ0FBYSxJQUFiLENBQVI7Ozs7QUFEc0MsUUFLdEMsTUFBTSxFQUFOLENBTHNDO0FBTTFDLFFBQUksa0JBQWtCLFNBQWxCLEVBQTZCLFVBQTdCLEVBQXlDLEtBQXpDLENBQUosRUFBcUQsTUFBTSxXQUFXLEtBQVgsQ0FBTixDQUFyRDtBQUNBLGVBQVcsS0FBWCxJQUFvQixHQUFwQjs7OztBQVAwQyxPQVcxQyxDQUFJLFNBQUosR0FBZ0Is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QUFRLElBQVIsR0FBZSxJQUFmO0FBQ0EsY0FBUSxXQUFSLEdBQXNCLFdBQXRCO0FBQ0EsY0FBUSx5QkFBUixHQUFvQyx5QkFBcEM7QUFDQSxjQUFRLGFBQVIsR0FBd0IsYUFBeEI7QUFDQSxjQUFRLGNBQVIsR0FBeUIsY0FBekIsQ0FTSSx3QkFBd0IsUUFBUSx3QkFBUjtBQUV4QiwrQkFBeUIsdUJBQXVCLHFCQUF2QjtBQUV6Qix5QkFBbUIsUUFBUSxtQkFBUjtBQUVuQiwwQkFBb0IsdUJBQXVCLGdCQUF2QjtBQUVwQixlQUFTLFFBQVEsYUFBUjtBQUVULFVBQUksd0JBQXdCLE1BQXhCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vaGVscGVycy9kZWZpbmUtbWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5wdXNoID0gcHVzaDtcbmV4cG9ydHMuaGFzQ29tcHV0ZWQgPSBoYXNDb21wdXRlZDtcbmV4cG9ydHMudG9Db21wdXRlZE9iamVjdEZyb21DbGFzcyA9IHRvQ29tcHV0ZWRPYmplY3RGcm9tQ2xhc3M7XG5leHBvcnRzLnRvQ2xhc3NPYmplY3QgPSB0b0NsYXNzT2JqZWN0O1xuZXhwb3J0cy50b0RlZmluZU9iamVjdCA9IHRvRGVmaW5lT2JqZWN0O1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIF9sb2Rhc2hDb2xsZWN0aW9uRWFjaCA9IHJlcXVpcmUoXCJsb2Rhc2gvY29sbGVjdGlvbi9lYWNoXCIpO1xuXG52YXIgX2xvZGFzaENvbGxlY3Rpb25FYWNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaENvbGxlY3Rpb25FYWNoKTtcblxudmFyIF9sb2Rhc2hPYmplY3RIYXMgPSByZXF1aXJlKFwibG9kYXNoL29iamVjdC9oYXNcIik7XG5cbnZhciBfbG9kYXNoT2JqZWN0SGFzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaE9iamVjdEhhcyk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBwdXNoKG11dGF0b3JNYXAsIG5vZGUsIGtpbmQsIGZpbGUpIHtcbiAgdmFyIGFsaWFzID0gdC50b0tleUFsaWFzKG5vZGUpO1xuXG4gIC8vXG5cbiAgdmFyIG1hcCA9IHt9O1xuICBpZiAoX2xvZGFzaE9iamVjdEhhczJbXCJkZWZhdWx0XCJdKG11dGF0b3JNYXAsIGFsaWFzKSkgbWFwID0gbXV0YXRvck1hcFthbGlhc107XG4gIG11dGF0b3JNYXBbYWxpYXNdID0gbWFwO1xuXG4gIC8vXG5cbiAgbWFwLl9pbmhlcml0cyA9IG1hcC5faW5oZXJpdHMgfHwgW107XG4gIG1hcC5faW5oZXJpdHMucHVzaChub2RlKTtcblxuICBtYXAuX2tleSA9IG5vZGUua2V5O1xuXG4gIGlmIChub2RlLmNvbXB1dGVkKSB7XG4gICAgbWFwLl9jb21wdXRlZCA9IHRydWU7XG4gIH1cblxuICBpZiAobm9kZS5kZWNvcmF0b3JzKSB7XG4gICAgdmFyIGRlY29yYXRvcnMgPSBtYXAuZGVjb3JhdG9ycyA9IG1hcC5kZWNvcmF0b3JzIHx8IHQuYXJyYXlFeHByZXNzaW9uKFtdKTtcbiAgICBkZWNvcmF0b3JzLmVsZW1lbnRzID0gZGVjb3JhdG9ycy5lbGVtZW50cy5jb25jYXQobm9kZS5kZWNvcmF0b3JzLm1hcChmdW5jdGlvbiAoZGVjKSB7XG4gICAgICByZXR1cm4gZGVjLmV4cHJlc3Npb247XG4gICAgfSkucmV2ZXJzZSgpKTtcbiAgfVxuXG4gIGlmIChtYXAudmFsdWUgfHwgbWFwLmluaXRpYWxpemVyKSB7XG4gICAgdGhyb3cgZmlsZS5lcnJvcldpdGhOb2RlKG5vZGUsIFwiS2V5IGNvbmZsaWN0IHdpdGggc2libGluZyBub2RlXCIpO1xuICB9XG5cbiAgaWYgKG5vZGUudmFsdWUpIHtcbiAgICBpZiAobm9kZS5raW5kID09PSBcImluaXRcIikga2luZCA9IFwidmFsdWVcIjtcbiAgICBpZiAobm9kZS5raW5kID09PSBcImdldFwiKSBraW5kID0gXCJnZXRcIjtcbiAgICBpZiAobm9kZS5raW5kID09PSBcInNldFwiKSBraW5kID0gXCJzZXRcIjtcblxuICAgIHQuaW5oZXJpdHNDb21tZW50cyhub2RlLnZhbHVlLCBub2RlKTtcbiAgICBtYXBba2luZF0gPSBub2RlLnZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBoYXNDb21wdXRlZChtdXRhdG9yTWFwKSB7XG4gIGZvciAodmFyIGtleSBpbiBtdXRhdG9yTWFwKSB7XG4gICAgaWYgKG11dGF0b3JNYXBba2V5XS5fY29tcHV0ZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gdG9Db21wdXRlZE9iamVjdEZyb21DbGFzcyhvYmopIHtcbiAgdmFyIG9iakV4cHIgPSB0LmFycmF5RXhwcmVzc2lvbihbXSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmoucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwcm9wID0gb2JqLnByb3BlcnRpZXNbaV07XG4gICAgdmFyIHZhbCA9IHByb3AudmFsdWU7XG4gICAgdmFsLnByb3BlcnRpZXMudW5zaGlmdCh0LnByb3BlcnR5KFwiaW5pdFwiLCB0LmlkZW50aWZpZXIoXCJrZXlcIiksIHQudG9Db21wdXRlZEtleShwcm9wKSkpO1xuICAgIG9iakV4cHIuZWxlbWVudHMucHVzaCh2YWwpO1xuICB9XG5cbiAgcmV0dXJuIG9iakV4cHI7XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gdG9DbGFzc09iamVjdChtdXRhdG9yTWFwKSB7XG4gIHZhciBvYmpFeHByID0gdC5vYmplY3RFeHByZXNzaW9uKFtdKTtcblxuICBfbG9kYXNoQ29sbGVjdGlvbkVhY2gyW1wiZGVmYXVsdFwiXShtdXRhdG9yTWFwLCBmdW5jdGlvbiAobWFwKSB7XG4gICAgdmFyIG1hcE5vZGUgPSB0Lm9iamVjdEV4cHJlc3Npb24oW10pO1xuXG4gICAgdmFyIHByb3BOb2RlID0gdC5wcm9wZXJ0eShcImluaXRcIiwgbWFwLl9rZXksIG1hcE5vZGUsIG1hcC5fY29tcHV0ZWQpO1xuXG4gICAgX2xvZGFzaENvbGxlY3Rpb25FYWNoMltcImRlZmF1bHRcIl0obWFwLCBmdW5jdGlvbiAobm9kZSwga2V5KSB7XG4gICAgICBpZiAoa2V5WzBdID09PSBcIl9cIikgcmV0dXJuO1xuXG4gICAgICB2YXIgaW5oZXJpdE5vZGUgPSBub2RlO1xuICAgICAgaWYgKHQuaXNNZXRob2REZWZpbml0aW9uKG5vZGUpIHx8IHQuaXNDbGFzc1Byb3BlcnR5KG5vZGUpKSBub2RlID0gbm9kZS52YWx1ZTtcblxuICAgICAgdmFyIHByb3AgPSB0LnByb3BlcnR5KFwiaW5pdFwiLCB0LmlkZW50aWZpZXIoa2V5KSwgbm9kZSk7XG4gICAgICB0LmluaGVyaXRzQ29tbWVudHMocHJvcCwgaW5oZXJpdE5vZGUpO1xuICAgICAgdC5yZW1vdmVDb21tZW50cyhpbmhlcml0Tm9kZSk7XG5cbiAgICAgIG1hcE5vZGUucHJvcGVydGllcy5wdXNoKHByb3ApO1xuICAgIH0pO1xuXG4gICAgb2JqRXhwci5wcm9wZXJ0aWVzLnB1c2gocHJvcE5vZGUpO1xuICB9KTtcblxuICByZXR1cm4gb2JqRXhwcjtcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiB0b0RlZmluZU9iamVjdChtdXRhdG9yTWFwKSB7XG4gIF9sb2Rhc2hDb2xsZWN0aW9uRWFjaDJbXCJkZWZhdWx0XCJdKG11dGF0b3JNYXAsIGZ1bmN0aW9uIChtYXApIHtcbiAgICBpZiAobWFwLnZhbHVlKSBtYXAud3JpdGFibGUgPSB0LmxpdGVyYWwodHJ1ZSk7XG4gICAgbWFwLmNvbmZpZ3VyYWJsZSA9IHQubGl0ZXJhbCh0cnVlKTtcbiAgICBtYXAuZW51bWVyYWJsZSA9IHQubGl0ZXJhbCh0cnVlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRvQ2xhc3NPYmplY3QobXV0YXRvck1hcCk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
