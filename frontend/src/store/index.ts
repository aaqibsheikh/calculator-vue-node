import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sum: 'N/A',
  },
  mutations: {
    setSum(state, payload) {
      state.sum = payload;
    }
  },
  actions: {
    async getSumOfNumbers({commit}, payload) {
      const response = await axios.get('http://localhost:3000/sum', {params: payload});
      commit('setSum', response.data);
    }
  },
  modules: {
  }
})
