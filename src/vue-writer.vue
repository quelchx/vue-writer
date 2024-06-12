<script lang="ts" setup>
import { onMounted, ref } from "vue";

const {
  string,
  array,
  eraseSpeed,
  typeSpeed,
  delay,
  intervals,
  start,
  caret,
  iterations,
} = withDefaults(
  defineProps<{
    string?: string[] | string;
    array?: string[] | string; //deprecated, will be removed in the next major version, use string instead.
    eraseSpeed?: number;
    typeSpeed?: number;
    delay?: number;
    intervals?: number;
    start?: number;
    caret?: string;
    iterations?: number;
  }>(),
  {
    eraseSpeed: 100,
    typeSpeed: 200,
    delay: 2000,
    intervals: 500,
    start: 0,
    caret: "cursor",
    iterations: 0,
  }
);

const emit = defineEmits<{
	(e: "typed", value: string): void,
}>();

const stringArray = ref(["Hello World!"])
const typeValue = ref("");
const count = ref(0);
const typeStatus = ref(false);
const arrayIndex = ref(0);
const charIndex = ref(0);

onMounted(() => {
  validateStringProps()
  //map user input into an array
  const activeString = string || array || []
  stringArray.value = Array.isArray(activeString) ? activeString : [activeString]
})

function typewriter() {
  let loop = 0;
  if (charIndex.value < stringArray.value[arrayIndex.value].length) {
    if (!typeStatus.value) {
      typeStatus.value = true;
    }

    typeValue.value += stringArray.value[arrayIndex.value].charAt(charIndex.value);
    charIndex.value += 1;
    setTimeout(typewriter, typeSpeed);
  } else {
    count.value += 1;

    onTyped(stringArray.value[arrayIndex.value]);

    if (count.value === stringArray.value.length) {
      loop += 1;
      if (loop === iterations) {
        return (typeStatus.value = false);
      }
    }

    typeStatus.value = false;

    setTimeout(eraser, delay);
  }
}
function eraser() {
  if (charIndex.value > 0) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value = stringArray.value[arrayIndex.value].substring(0, charIndex.value - 1);
    charIndex.value -= 1;
    setTimeout(eraser, eraseSpeed);
  } else {
    typeStatus.value = false;
    arrayIndex.value += 1;
    if (arrayIndex.value >= stringArray.value.length) arrayIndex.value = 0;
    setTimeout(typewriter, typeSpeed + intervals);
  }
}
function onTyped(typedString: string) {
  emit("typed", typedString);
}
setTimeout(typewriter, start);

function validateStringProps() {
  if(array) {
    console.warn('[Vue warn]: Deprecated prop: "array", use "string" prop instead');
  } else if(!string) {
    console.warn('[Vue warn]: Missing required prop: "string"');
  }
}
</script>

<template>
  <div class="is-typed">
    <slot />
    <span class="typed">{{ typeValue }}</span>
    <span :class="caret + ' ' + { typing: typeStatus }">&nbsp;</span>
  </div>
</template>
