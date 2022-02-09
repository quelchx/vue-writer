# Vue Writer

<img src='demo.gif' />

Vue 3 component that simulates typing, and erasing text.

![npm](https://img.shields.io/npm/v/vue-writer?color=green&label=NPM&style=flat-square)
[![](https://data.jsdelivr.com/v1/package/npm/vue-writer/badge)](https://www.jsdelivr.com/package/npm/vue-writer)
![npm](https://img.shields.io/npm/dt/vue-writer?color=purple&label=Downloads&style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/quelchx/vue-writer?color=cyan&style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/quelchx/vue-writer?color=blue&label=Issues&style=flat-square)
![GitHub issues](https://img.shields.io/github/issues-raw/quelchx/vue-writer?color=red&label=Open%20Issues&style=flat-square)

## Table Of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Installation](#installation)
  - [NPM](#npm)
  - [CDN](#cdn)
- [Usage](#usage)
  - [Global](#global)
  - [Local](#local)
- [Properties](#properties)
  - [Array](#array)
  - [Iterations](#iterations)
  - [Type Speed](#typeSpeed)
  - [Erase Speed](#eraseSpeed)
  - [Delay](#delay)
  - [Intervals](#intervals)
  - [Start](#start)
  - [Caret](#caret)
- [Slots](#slots)
- [Styling](#styling)
- [Coming Soon](#coming-soon)
- [Contribution](#contribution)
- [Issues and Information](#issues)

**Notes**

> This package intention is to be a very lightweight typewriting feature you can add to your existing project! More will be added in time + extra customizations, and feautures.

> This package was built using <a href='https://www.npmjs.com/package/vue-sfc-rollup' target='_blank'>**vue-sfc-rollup**</a>, and is intended to be used with Vue 3. If your using Vue 2, I recommend checking out <a href='https://www.npmjs.com/package/vue-typer'>Vue Typer</a> as it is supported by Vue 2 and has much more features than this package. This packages only dependancies are those that are shipped with vue-sfc-rollup

## Prerequisites

- Vue v3.x
  - This package was not developed for Vue v.2.x, but should work. Has not been fully tested.

## Installation

### NPM

(Recommended)

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

**All examples are being shown while using npm init @vitejs/app to create a vue project in order to consume this package and it's component**

## Global

Registering the component Globally

**main.js**

```js
import { createApp } from "vue";
import App from "./App.vue";
import VueWriter from "vue-writer";

createApp(App)
  .use(VueWriter)
  .mount("#app");
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
import VueWriter from 'vue-writer'
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

- note: this prop has to be in an array even if its a single string.

### `iterations`

- type: Number
- required: false
- default: 0

```html
<vue-writer :array="['Hello', 'World'] :iterations='1'">
```

- By default this will loop forever unless you specify. This will loop through the array depending on the value you set. 

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

- note: this prop controlls how fast each character is erased in second intervals.

#### `delay`

- type: Number
- default: 2000
- required: false
- usage

```html
<vue-writer :array="arr" :eraseSpeed="50" :typeSpeed="100" :delay="1000" />
```

- note: 1000 = 1 second
  - the delay prop controls how long the current word in the array will appear on screen before it deletes and begins typing the next word.

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

- note: this props is used to control when the animation should begin. By default when the component is loaded on the page, the animation will start.

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

You can pass child components and nested html before this component is loaded. A simple use case is demonstrated below:

```html
<vue-writer array='["World"]'>
  <p>Hello</p>
</vue-writer>
```

- note: the children being passed will always come before the typewriter animation/effect.

### Styling

Styling has been removed from this component to make it easier for users to add custom styling. If you wish to style this component, the component has a few class selectors you can target to style. Here is an example:

```css
.is-typed {
  font-family: "Monaco";
}

.is-typed span.typed {
  color: black;
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
  align-items:flex-end;
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

You can easily override some basic properties such as the font and color by targetting these classes above. More features will be added + documented in time!

---

## Coming Soon

Possible Additions and Todo's

**All are being worked on, or plan to be worked on in the near future**

The intention of this component is to be minimal and ligtweight -- so they're will be a limit to how many additional features will be added in time. Currently I am looking into adding the following in time:

- Add single string usage rather than having to always use an array
- Add more customer cursors
- Add different animation options
- Add different erasing animations
- Add shuffle feature

## Contribution

- If your interested in contributing to this package please contact me by email through my website at https://quelchlax.tech

## Issues

If you encounter any issues or have any concerns please refer to https://github.com/quelchx/vue-writer/issues and report a detailed description of what is occuring.

Package Repository: <a href='https://github.com/quelchx/vue-writer'>https://github.com/quelchx/vue-writer</a>

Author: Eric Quelch
Github: <a href='https://github.com/quelchx'>https://github.com/quelchx</a>
Website: <a href='https://quelchx.com'>https://quelchx.com</a>
