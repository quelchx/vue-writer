<script>
import { defineComponent } from 'vue';
import VueWriter from '@/vue-writer.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    VueWriter
  }
});
</script>

<template>
  <div id="app">
    <vue-writer :array="['Hello World', 'Testing']"/>
  </div>
</template>
