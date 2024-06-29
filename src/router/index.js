// Import Vue Router and the necessary components
import { createRouter, createWebHistory } from "vue-router";
import customer from "./customer";
import owner from "./owner";
import developer from "./developer";
import ServiceProvider from "./servicesprovider";
const routes = [...developer, ...owner, ...customer, ...ServiceProvider];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
