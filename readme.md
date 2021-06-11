# Vue writer

**Documentation is under construction -- package is working but still in it's testing + documenting phases!!!**

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

Registering the component locally
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


Package Repository: <a href='https://github.com/quelchx/vue-writer'>https://github.com/quelchx/vue-writer</a>

Author: Eric Quelch
Github: <a href='https://github.com/quelchx'>https://github.com/quelchx</a>
Website: <a href='https://quelchlax.tech'>https://quelchlax.tech</a>
