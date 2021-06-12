# Vue Writer

![npm](https://img.shields.io/npm/v/vue-writer?color=green&label=NPM&style=flat-square)
[![](https://data.jsdelivr.com/v1/package/npm/vue-writer/badge)](https://www.jsdelivr.com/package/npm/vue-writer)
![npm](https://img.shields.io/npm/dt/vue-writer?color=purple&label=Downloads&style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/quelchx/vue-writer?color=cyan&style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/quelchx/vue-writer?color=blue&label=Issues&style=flat-square)
![GitHub issues](https://img.shields.io/github/issues-raw/quelchx/vue-writer?color=red&label=Open%20Issues&style=flat-square)

**Documentation is under construction -- package is working but still is currrently has additions being added daily**




- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Installation](#installation)
  - [NPM](#npm)
  - [CDN](#cdn)
- [Usage](#usage)
- [Properties](#properties)
  - [Array](#array)
  - [Type Speed](#typeSpeed)
  - [Erase Speed](#eraseSpeed)
  - [Delay](#delay)
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
  src="https://cdn.jsdelivr.net/npm/vue-writer@0.0.3/dist/vue-writer.esm.js"
  integrity="sha256-mirxvAV/+LwGipr5mQVYEU3cpP15soM1I7nz97ckwbQ="
  crossorigin="anonymous"
></script>
```

## Usage

**All examples are being shown while using npm init @vitejs/app to create a vue project in order to consume this package and it's component**

Registering the component Globally (Coming Soon!)

---

Simple usage - registering the component locally

`App.js`

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

- note: adding single text usage soon!

#### `typeSpeed`

- type: Number
- default: 200
- required: false
- usage:

```html
<vue-writer :array="arr" :typeSpeed="70" />
```

#### `eraseSpeed`

- type: Number
- default: 100
- required: false
- usage:

```html
<vue-writer :array="arr" :eraseSpeed="50" :typeSpeed="100" />
```

#### `delay`

- type: Number
- default: 2000
- required: false
- usage

```html
<vue-writer :array="arr" :eraseSpeed="50" :typeSpeed="100" :delay="1000" />
```

- note: 1000 = 1 second

### Styling

Basic default styling has been added to the component. The default styling structure is as so:

```css
/* CSS */
.is-typed {
  /* font-family: "Monaco"; */
}

.is-typed span.typed {
  /* color: black; */
}

.is-typed span.cursor {
  /* background-color: black; */
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
Website: <a href='https://quelchlax.tech'>https://quelchlax.tech</a>
