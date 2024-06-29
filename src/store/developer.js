export default {
  state: {
    developerData: "",
  },
  mutations: {
    setDeveloperData(state, value) {
      state.developerData = value;
    },
  },
  actions: {},
  getters: {
    getDeveloperData(state) {
      return state.developerData;
    },
  },
};
