import { App as IApp, createApp } from "vue";
import App from "./App.vue"
import VueWriter from "./vue-writer.vue";

const app = createApp(App);

app.mount('#app');

export { VueWriter };
export default {
  install: (app: IApp) => {
    app.component("VueWriter", VueWriter);
  },
};
