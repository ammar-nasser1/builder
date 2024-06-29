export default {
  state: {
    ownerData: "",
  },
  mutations: {
    setownerData(state, value) {
      state.ownerData = value;
    },
  },
  actions: {},
  getters: {
    getownerData(state) {
      return state.ownerData;
    },
  },
};
