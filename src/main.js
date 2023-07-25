import Vue from "vue";
import App from "./app.vue";
import "./assets/css/styles.css";
import router from "./router";
import { Auth0Plugin } from "./auth0-plugin";

Vue.use(Auth0Plugin, {
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
  redirectUri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetPath
        ? appState.targetPath
        : window.location.pathname
    );
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
