import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let api = axios.create({
  baseURL: 'https://inspire-server.herokuapp.com/cards',
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: {}
  },
  mutations: {
    setGame(state, data) {
      state.game = data
    }
  },
  actions: {
    startGame({ commit, dispatch }, name) {
      let gameConfig = {
        playerName: name,
        opponents: 1,
        set: 4
      }
      api.post('', gameConfig)
        .then(res => {
          commit('setGame', res.data)
        })
    }
  }
})
