import { createStore } from "vuex";
import onwer from "./owner";
import customer from "./customer";
import developer from "./developer";

export default createStore({
  state: {
    role: localStorage.getItem("role"),
  },
  getters: {
    getRole(state) {
      return state.role;
    },
  },
  modules: {
    onwer,
    customer,
    developer,
  },
});
