import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import store from "./store";
import "./index.css";
import axios from "axios";
axios.defaults.baseURL = "https://buildererp.net/beta/api";
router.afterEach(() => {
  // Set favicon dynamically
  const link = document.querySelector("link[rel~='icon']");
  if (link) {
    link.href = "/favicon.ico";
  } else {
    const newLink = document.createElement("link");
    newLink.rel = "icon";
    newLink.href = "/favicon.ico";
    document.head.appendChild(newLink);
  }
});
createApp(App).use(store).use(router).mount("#app");
