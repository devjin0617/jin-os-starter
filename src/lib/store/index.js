
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    isMenuOpen: false
  },
  getters: {
    isMenuOpen: state => {
      return state.isMenuOpen
    }
  },
  mutations: {
    changeMenu (state) {
      state.isMenuOpen = !state.isMenuOpen
    }
  }
})
