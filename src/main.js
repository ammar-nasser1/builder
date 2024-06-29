import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import store from "./store";
import "./index.css";
import axios from "axios";
axios.defaults.baseURL = "https://backend.buildererp.net/api";

createApp(App).use(store).use(router).mount("#app");
