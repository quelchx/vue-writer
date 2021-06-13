import { defineComponent, openBlock, createBlock, renderSlot, createVNode, toDisplayString } from 'vue';

var script = defineComponent({
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
      default: 'cursor'
    }
  },

  data() {
    return {
      typeValue: "",
      typeStatus: false,
      arrayIndex: 0,
      charIndex: 0
    };
  },

  methods: {
    typewriter() {
      if (this.charIndex < this.array[this.arrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.array[this.arrayIndex].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typewriter, this.typeSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraser, this.delay);
      }
    },

    eraser() {
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

  created() {
    setTimeout(this.typewriter, this.start);
  }

});

const _hoisted_1 = {
  class: "is-typed"
};
const _hoisted_2 = {
  class: "typed"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1, [renderSlot(_ctx.$slots, "default"), createVNode("span", _hoisted_2, toDisplayString(_ctx.typeValue), 1), createVNode("span", {
    class: _ctx.caret + ' ' + {
      typing: _ctx.typeStatus
    }
  }, " ", 2)]);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.is-typed {\n  font-family: \"Monaco\";\n}\n.is-typed span.typed {\n  color: black;\n}\n.is-typed span.cursor {\n  display: inline-block;\n  width: 3px;\n  background-color: black;\n  animation: blink 1s infinite;\n}\n.is-typed span.underscore {\n  display: inline-flex;\n  width: 10px;\n  height: 1px;\n  align-items:flex-end;\n  background-color: black;\n  animation: blink 1s infinite;\n}\n.is-typed span.cursor.typing {\n  animation: none;\n}\n@keyframes blink {\n49% {\n    background-color: black;\n}\n50% {\n    background-color: transparent;\n}\n99% {\n    background-color: transparent;\n}\n}\n";
styleInject(css_248z);

script.render = render;

// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var entry_esm = /*#__PURE__*/(() => {
  // Get component instance
  const installable = script; // Attach install function executed by Vue.use()

  installable.install = app => {
    app.component('VueWriter', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export default entry_esm;
