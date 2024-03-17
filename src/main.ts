import { App } from "vue";
import VueWriter from "./vue-writer.vue";
export { VueWriter };
export default {
  install: (app: App) => {
    // inject a globally available $translate() method
    app.component("VueWriter", VueWriter);
  },
};
