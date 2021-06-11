# Vue writer

**Documentation is under construction -- package is working but still in it's testing + documenting phases!!!**

> This package intention is to be a very lightweight typewriting feature you can add to your existing project! More will be added in time + extra customizations, and feautures.

## Prerequisites

- Vue v3.x
  - This package has not been developed or tested with Vue v.2.x

## Getting Started

This package was built using <a href='https://www.npmjs.com/package/vue-sfc-rollup' target='_blank'>**vue-sfc-rollup**</a>, and is intended to be used with Vue 3. If your using Vue 2, I recommend checking out <a href='https://www.npmjs.com/package/vue-typer'>Vue Typer</a> as it is supported by Vue 2 and has much more features than this package.

---

## Installation

### NPM (Recommended)
```bash
npm install -D vue-writer
```

### CDN (Coming Soon!)

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
`array`
- type: Array
- required: true
- usage: 
```html
<vue-writer :array="['adding single string soon']" />
```
- note: adding single text usage soon!

`typeSpeed`
- type: Number
- default: 200
- required: false
- usage:
```html
<vue-writer :array="arr" :typeSpeed="70" />
```

`eraseSpeed`
- type: Number
- default: 100
- required: false
- usage: 
```html
<vue-writer :array="arr" :eraseSpeed='50' :typeSpeed='100' />
```

`delay`
- type: Number
- default: 2000
- required: false
- usage
```html
<vue-writer :array='arr' :eraseSpeed='50' :typeSpeed='100' :delay='1000' />
```
- note: 1000 = 1 second



Package Repository: <a href='https://github.com/quelchx/vue-writer'>https://github.com/quelchx/vue-writer</a>

Author: Eric Quelch
Github: <a href='https://github.com/quelchx'>https://github.com/quelchx</a>
Website: <a href='https://quelchlax.tech'>https://quelchlax.tech</a>
