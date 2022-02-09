'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script = vue.defineComponent({
  name: "VueWriter",
  props: {
    array: {
      type: Array,
      required: true
    },
    eraseSpeed: {
      type: Number,
      default: 100
    },
    typeSpeed: {
      type: Number,
      default: 200
    },
    delay: {
      type: Number,
      default: 2000
    },
    intervals: {
      type: Number,
      default: 500
    },
    start: {
      type: Number,
      default: 0
    },
    caret: {
      type: String,
      default: "cursor"
    },
    iterations: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      typeValue: "",
      count: 0,
      typeStatus: false,
      arrayIndex: 0,
      charIndex: 0
    };
  },
  methods: {
    typewriter: function typewriter() {
      var loop = 0;

      if (this.charIndex < this.array[this.arrayIndex].length) {
        if (!this.typeStatus) {
          this.typeStatus = true;
        }

        this.typeValue += this.array[this.arrayIndex].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typewriter, this.typeSpeed);
      } else {
        this.count += 1;

        if (this.count === this.array.length) {
          loop += 1;

          if (loop === this.iterations) {
            return this.typeStatus = false;
          }
        }

        this.typeStatus = false;
        setTimeout(this.eraser, this.delay);
      }
    },
    eraser: function eraser() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.array[this.arrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraser, this.eraseSpeed);
      } else {
        this.typeStatus = false;
        this.arrayIndex += 1;
        if (this.arrayIndex >= this.array.length) this.arrayIndex = 0;
        setTimeout(this.typewriter, this.typeSpeed + this.intervals);
      }
    }
  },
  created: function created() {
    setTimeout(this.typewriter, this.start);
  }
});var _hoisted_1 = {
  class: "is-typed"
};
var _hoisted_2 = {
  class: "typed"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [vue.renderSlot(_ctx.$slots, "default"), vue.createVNode("span", _hoisted_2, vue.toDisplayString(_ctx.typeValue), 1), vue.createVNode("span", {
    class: _ctx.caret + ' ' + {
      typing: _ctx.typeStatus
    }
  }, " ", 2)]);
}script.render = render;// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var component = /*#__PURE__*/(function () {
  // Get component instance
  var installable = script; // Attach install function executed by Vue.use()

  installable.install = function (app) {
    app.component('VueWriter', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default': component});// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;