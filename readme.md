## Vue 3 component that simulates typing, and erasing text.

## Requirements

- Vue v3.x
  - This package was not developed for Vue v.2.x, but should work. Has not been fully tested.

## Installation

### NPM

```bash
npm install vue-writer
```

### CDN

```html
<script
  src="https://cdn.jsdelivr.net/npm/vue-writer@1.0.7/dist/vue-writer.esm.js"
  integrity="sha256-mirxvAV/+LwGipr5mQVYEU3cpP15soM1I7nz97ckwbQ="
  crossorigin="anonymous"
></script>
```

## Usage

**All examples are being shown while using npm init @vitejs/app to create a Vue project to consume this package and its component**

## Global

Registering the component Globally

**main.js**

```js
import { createApp } from "vue";
import App from "./App.vue";
import VueWriter from "vue-writer";
createApp(App).use(VueWriter).mount("#app");
```

**App.vue** (Example)

```html
<template>
  <VueWriter :array="arr" />
</template>

<script>
  export default {
    data() {
      return { arr: ["Hello", "From", "Vue Writer"] };
    },
  };
</script>
```

---

## Local

Simple usage - registering the component locally

**`App.vue`**

```js
<template>
  <VueWriter :array="['Hello World']" />
</template>
<script>
import {VueWriter} from 'vue-writer'
export default {
  components: {VueWriter}
}
</script>
```

### Properties

#### `array`

- type: Array
- required: true
- usage:

```html
<vue-writer :array="['adding single string soon']" />
```

- note: this prop has to be in an array even if it's a single string.

### `iterations`

- type: Number
- required: false
- default: 0

```html
<vue-writer :array="['Hello', 'World']" :iterations="'1'"></vue-writer>
```

- By default, this will loop forever unless you specify. This will loop through the array depending on the value you set.

#### `typeSpeed`

- type: Number
- default: 200
- required: false
- usage:

```html
<vue-writer :array="arr" :typeSpeed="70" />
```

- note: higher the number the slower the typing speed is.

#### `eraseSpeed`

- type: Number
- default: 100
- required: false
- usage:

```html
<vue-writer :array="arr" :eraseSpeed="50" :typeSpeed="100" />
```

- note: this prop controls how fast each character is erased in second intervals.

#### `delay`

- type: Number
- default: 2000
- required: false
- usage

```html
<vue-writer :array="arr" :eraseSpeed="50" :typeSpeed="100" :delay="1000" />
```

- note: 1000 = 1 second
  - the delay prop controls how long the current word in the array will appear on the screen before it deletes and begins typing the next word.

#### `intervals`

- type: Number
- default: 500
- required: false
- usage

```html
<vue-writer :array="arr" :delay="1000" :intervals="200" />
```

- note: this prop controls how long the next word in the array will appear after the previous word is fully erased.

#### `start`

- type: Number
- default: 0
- required: false
- usage

```html
<vue-writer :array="arr" :delay="1000" :start="2000" />
```

- note: this prop is used to control when the animation should begin. By default when the component is loaded on the page, the animation will start.

#### `caret`

- type: String`
- default: 'cursor'
- required: false
- options:
  - 'cursor'
  - 'underscore'
- usage:

```html
<vue-writer :array="arr" :caret="underscore" />
```

- note: this prop changes the style of the caret (more options coming soon)

#### Slots

You can pass child components and nested HTML before this component is loaded. A simple use case is demonstrated below:

```html
<vue-writer array='["World"]'>
  <p>Hello</p>
</vue-writer>
```

- note: the children being passed will always come before the typewriter animation/effect.

### Emits

#### `typed`

- type: String
- usage:

```html
<vue-writer :array="arr" @typed="onTyped" />
```

- note: this event will emit the current word that has been typed.

### Styling

Styling has been removed from this component to make it easier for users to add custom styling. If you wish to style this component, the component has a few class selectors you can target to style. Here is an example:

```CSS
.is-typed {
  font-family: 'Monaco';
}
.is-typed span.typed {
  colour: black;
}
.is-typed span.cursor {
  display: inline-block;
  width: 3px;
  background-color: black;
  animation: blink 1s infinite;
}
.is-typed span.underscore {
  display: inline-flex;
  width: 10px;
  height: 1px;
  align-items: flex-end;
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
```

You can easily override some basic properties such as the font and colour by targetting these classes above. More features will be added + documented in time!

---

## Coming Soon

Possible Additions and Todo's

**All are being worked on, or plan to be worked on shortly**

This component intends to be minimal and lightweight -- so they're will be a limit to how many additional features will be added in time. Currently, I am looking into adding the following in time:

- Add single string usage rather than having to always use an array
- Add more customer cursors
- Add different animation options
- Add different erasing animations
- Add shuffle feature

## Contribution

## Issues

If you encounter any issues or have any concerns please refer to [issues](https://github.com/quelchx/vue-writer/issues) and report a detailed description of what is occurring.
