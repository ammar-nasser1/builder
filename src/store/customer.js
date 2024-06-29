export default {
  state: {
    userData: "",
  },
  mutations: {
    setUserData(state, value) {
      state.userData = value;
    },
  },
  actions: {},
  getters: {
    getUserData(state) {
      return state.userData;
    },
  },
};
