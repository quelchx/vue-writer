<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "VueWriter",
  props: {
    array: {
      type: Array,
      required: true,
    },
    eraseSpeed: {
      type: Number,
      default: 100,
    },
    typeSpeed: {
      type: Number,
      default: 200,
    },
    delay: {
      type: Number,
      default: 2000,
    },
  },
  data() {
    return {
      typeValue: "",
      typeStatus: false,
      arrayIndex: 0,
      charIndex: 0,
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
        this.typeValue = this.array[this.arrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraser, this.eraseSpeed);
      } else {
        this.typeStatus = false;
        this.arrayIndex += 1;
        if (this.arrayIndex >= this.array.length) this.arrayIndex = 0;
        setTimeout(this.typewriter, this.typeSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typewriter, this.delay + 200);
  },
});
</script>

<template>
  <div class="is-typed">
    <slot />
    <span class="typed">{{ typeValue }}</span>
    <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
  </div>
</template>

<style>
.is-typed {
  font-family: "Monaco";
}

.is-typed span.typed {
  color: black;
}

.is-typed span.cursor {
  display: inline-block;
  width: 4px;
  background-color: black;
  animation: blink 1s infinite;
}

.is-typed span.cursor.typing {
  animation: none;
}

@keyframes blink {
  49% {
    background-color: black;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
