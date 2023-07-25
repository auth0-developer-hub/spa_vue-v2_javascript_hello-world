import Vue from "vue";
import App from "./app.vue";
import "./assets/css/styles.css";
import router from "./router";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
